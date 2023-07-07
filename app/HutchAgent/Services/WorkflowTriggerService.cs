using System.Diagnostics;
using System.IO.Compression;
using System.Text.Json.Nodes;
using System.Text.RegularExpressions;
using HutchAgent.Config;
using HutchAgent.Data.Entities;
using Microsoft.Extensions.Options;
using ROCrates;
using ROCrates.Models;
using File = System.IO.File;

namespace HutchAgent.Services;

public class WorkflowTriggerService
{
  private readonly WorkflowTriggerOptions _workflowOptions;
  private readonly JobPollingOptions _jobPollingOptions;
  private readonly ILogger<WorkflowTriggerService> _logger;
  private readonly string _activateVenv;
  private const string _bashCmd = "bash";
  private readonly ROCrate _roCrate = new();
  private readonly WfexsJobService _wfexsJobService;

  public WorkflowTriggerService(IOptions<WorkflowTriggerOptions> workflowOptions,
    ILogger<WorkflowTriggerService> logger, IOptions<JobPollingOptions> jobPollingOptions,
    IServiceProvider serviceProvider)
  {
    _logger = logger;
    _jobPollingOptions = jobPollingOptions.Value;
    _workflowOptions = workflowOptions.Value;
    _activateVenv = "source " + _workflowOptions.VirtualEnvironmentPath;
    _wfexsJobService = serviceProvider.GetService<WfexsJobService>() ?? throw new InvalidOperationException();
  }

  /// <summary>
  /// Parse ROCrate metadata using the ROCrates library
  /// </summary>
  /// <param name="jsonFile"> JSON Metadata file</param>
  /// <returns> ROCrate object </returns>
  private ROCrate ParseCrate(string jsonFile)
  {
    try
    {
      // get metadata from manifest
      var metadataProperties = JsonNode.Parse(jsonFile)?.AsObject();
      metadataProperties.TryGetPropertyValue("@graph", out var graph);
      // get RootDataset Properties and add them to an ROCrates object
      var rootDatasetProperties = graph.AsArray().Where(g => g["@id"].ToString() == "./");
      var datasetRoot = RootDataset.Deserialize(rootDatasetProperties.First().ToString(), _roCrate);
      _roCrate.Add(datasetRoot ?? throw new InvalidOperationException());

      return _roCrate;
    }
    catch
    {
      throw new Exception("Metadata JSON could not be parsed");
    }
  }

  /// <summary>
  /// Unpack an ROCrate
  /// </summary>
  /// <param name="stream"></param>
  /// <exception cref="FileNotFoundException"></exception>
  private WfexsJob UnpackCrate(Stream stream)
  {
    var wfexsJob = new WfexsJob
    {
      UnpackedPath = Path.Combine(_workflowOptions.CrateExtractPath, Guid.NewGuid().ToString()),
      RunFinished = false
    };
    ExtractCrate(wfexsJob, stream);
    var fileJson = ValidateCrate(wfexsJob.UnpackedPath);
    // Parse Crate metadata
    var crate = ParseCrate(fileJson);
    // Get mainEntity from metadata
    var mainEntity = crate.RootDataset.GetProperty<Part>("mainEntity");
    var mainEntityPath = Path.Combine(wfexsJob.UnpackedPath, mainEntity.Id);
    // Check main entity is present and a stage file
    if (File.Exists(mainEntityPath) && (mainEntityPath.EndsWith(".stage") || mainEntityPath.EndsWith(".yaml") ||
                                        mainEntityPath.EndsWith(".yml")))
    {
      _logger.LogInformation($"main Entity is a Wfexs stage file and can be found at {mainEntityPath}");
      _workflowOptions.StageFilePath = mainEntityPath;
      // Create a copy of the wfexs stage file
      var copyFilePath = Path.Combine(wfexsJob.UnpackedPath, "copy_" + mainEntity.Id);
      try
      {
        File.Copy(mainEntityPath, copyFilePath, true);
      }
      // Catch exception if the file was already copied.
      catch (IOException copyError)
      {
        _logger.LogError(copyError.Message);
      }

      // Rewrite stage file parameter inputs to an absolute path
      // based on "crate" protocol
      using (var stageFileWriter = new StreamWriter(mainEntityPath))
      using (var stageFileReader = new StreamReader(copyFilePath))
      {
        string? line;
        while ((line = stageFileReader.ReadLine()) != null)
        {
          if (line.Trim().StartsWith("- crate"))
          {
            _logger.LogInformation($"Found line matching crate protocol {line}");
            stageFileWriter.WriteLine(RewritePath(wfexsJob, line));
          }
          else
          {
            stageFileWriter.WriteLine(line);
          }
        }
      }
    }
    else
    {
      throw new FileNotFoundException($"No file named {mainEntity.Id} found in the working directory");
    }

    // Tell the queue were the crate was extracted
    return _wfexsJobService.Create(wfexsJob).Result;
  }

  public async Task FetchCrate(Stream stream)
  {
    var wfexsJob = new WfexsJob
    {
      UnpackedPath = Path.Combine(_workflowOptions.CrateExtractPath, Guid.NewGuid().ToString()),
      RunFinished = false
    };
    ExtractCrate(wfexsJob, stream);
    var cratePath = Path.Combine(wfexsJob.UnpackedPath, "data");
    var fileJson = ValidateCrate(cratePath);
    // Parse Crate metadata
    var crate = ParseCrate(fileJson);
    // Get mainEntity from metadata
    // Contains workflow location
    var mainEntity = crate.RootDataset.GetProperty<Part>("mainEntity");
    // Compose download url for workflowHub
    var downloadAddress = Regex.Replace(mainEntity.Id, @"([0-9]+)(\?version=[0-9]+)?$", @"$1/ro_crate$2");
    using (var client = new HttpClient())
    {
      var clientStream = await client.GetStreamAsync(downloadAddress);
      await using var file = File.OpenWrite(Path.Combine(cratePath, "workflows.zip"));
      await clientStream.CopyToAsync(file);
      _logger.LogInformation("Successfully downloaded workflow from Workflow Hub.");
    }

    using (var archive = new ZipArchive(File.OpenRead(Path.Combine(cratePath, "workflows.zip"))))
    {
      Directory.CreateDirectory(Path.Combine(cratePath, "workflows"));
      archive.ExtractToDirectory(Path.Combine(cratePath, "workflows"));
      _logger.LogInformation($"Unpacked workflow to {Path.Combine(cratePath, "workflows")}");
    }

    // Update crate metadata
    if (File.Exists(Path.Combine(cratePath, crate.Metadata.Id)))
      File.Delete(Path.Combine(cratePath, crate.Metadata.Id));
    crate = new ROCrate(); // Reset the crate object
    crate.Convert(cratePath); // Read the updated contents of the crate and rewrite the metadata and preview files
    _logger.LogInformation("Updated crate metadata.");
  }

  /// <summary>
  /// Install and run WfExS given 
  /// </summary>
  /// <param name="stream"></param>
  /// <exception cref="Exception"></exception>
  public async Task TriggerWfexs(Stream stream)
  {
    // Unpack the crate and get the queued message to track the WfExS job.
    var wfexsJob = UnpackCrate(stream);

    // Commands to install WfExS and execute a workflow
    // given a path to the local config file and a path to the stage file of a workflow
    var commands = new List<string>()
    {
      $"./WfExS-backend.py  -L {_workflowOptions.LocalConfigPath} execute -W {_workflowOptions.StageFilePath}"
    };

    var processStartInfo = new ProcessStartInfo
    {
      RedirectStandardOutput = true,
      RedirectStandardInput = true,
      RedirectStandardError = true,
      UseShellExecute = false,
      CreateNoWindow = true,
      FileName = _bashCmd,
      WorkingDirectory = _workflowOptions.ExecutorPath
    };

    // start process
    var process = Process.Start(processStartInfo);
    if (process == null)
      throw new Exception("Could not start process");

    // Get process PID
    wfexsJob.Pid = process.Id;

    await using var streamWriter = process.StandardInput;
    if (streamWriter.BaseStream.CanWrite)
    {
      // activate python virtual environment
      await streamWriter.WriteLineAsync(_activateVenv);
      foreach (var command in commands)
      {
        await streamWriter.WriteLineAsync(command);
      }

      await streamWriter.FlushAsync();
      streamWriter.Close();
    }

    // Read the stdout of the WfExS run to get the run ID
    var reader = process.StandardOutput;
    string? _wfexsRunId = null;
    while (!process.HasExited && _wfexsRunId is null)
    {
      var stdOutLine = await reader.ReadLineAsync();
      if (stdOutLine is null) continue;
      var runName = _findRunName(stdOutLine);
      if (runName is null) continue;
      _wfexsRunId = runName;
      wfexsJob.WfexsRunId = runName;
      wfexsJob.RunFinished = true;
    }

    // end the process
    process.Close();

    // Update the job in the queue.
    await _wfexsJobService.Set(wfexsJob);
  }

  private string RewritePath(WfexsJob wfexsJob, string? line)
  {
    var newInputPath = line.Split("///");

    // keep line whitespaces for yaml formatting purposes
    var newAbsolutePath = newInputPath[0].Split("crate")[0] + "file://";
    var newLine = newAbsolutePath + Path.Combine(Path.GetFullPath(wfexsJob.UnpackedPath), newInputPath[1]);
    _logger.LogInformation($"Writing absolute input path {newLine}");

    return newLine;
  }

  private string? _findRunName(string text)
  {
    var pattern =
      @".*-\sInstance\s([0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}).*";
    var regex = new Regex(pattern);

    var match = regex.Match(text);
    if (!match.Success)
    {
      _logger.LogError("Didn't match the pattern!");
      return null;
    }

    // Get the matched UUID pattern
    var uuid = match.Groups[1].Value;
    return Guid.TryParse(uuid, out var validUuid) ? validUuid.ToString() : null;
  }

  public string ValidateCrate(string cratePath)
  {
    // Validate it is an ROCrate
    var file = Directory.GetFiles(cratePath, searchPattern: "ro-crate-metadata.json");
    if (file.Length == 0)
      throw new FileNotFoundException($"No metadata JSON found in directory {cratePath}");
    var fileJson = File.ReadAllText(file[0]);
    return fileJson;
  }

  public void ExtractCrate(WfexsJob wfexsJob, Stream stream)
  {
    using var archive = new ZipArchive(stream);
    {
      // Extract to Directory
      Directory.CreateDirectory(wfexsJob.UnpackedPath);
      archive.ExtractToDirectory(wfexsJob.UnpackedPath, true);
    }
    _logger.LogInformation($"Crate extracted at {wfexsJob.UnpackedPath}");
  }
}
