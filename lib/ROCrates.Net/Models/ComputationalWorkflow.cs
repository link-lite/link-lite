using System.Text.Json;
using System.Text.Json.Nodes;

namespace ROCrates.Models;

/// <summary>
/// A scientific workflow that was used (or can be used) to analyze or generate files in the RO-Crate.
/// </summary>
public class ComputationalWorkflow : File
{
  private protected string[] Types = { "File", "SoftwareSourceCode", "ComputationalWorkflow" };
  
  public ComputationalWorkflow(ROCrate crate, string? identifier = null, JsonObject? properties = null,
    string? source = null, string? destPath = null, bool fetchRemote = false, bool validateUrl = false) : base(crate,
    identifier, properties, source, destPath, fetchRemote, validateUrl)
  {
    Properties = _empty();
    if (properties is not null) _unpackProperties(properties);
    SetProperty("@type", Types);
  }
  
  protected new JsonObject _empty()
  {
    var emptyJsonString = new Dictionary<string, string>
    {
      { "@id", Identifier },
      { "@type", DefaultType },
      { "name", Path.GetFileNameWithoutExtension(
        Path.GetFileName(Identifier)) }
    };
    var emptyObject = JsonSerializer.SerializeToNode(emptyJsonString).AsObject();
    return emptyObject;
  }
}
