using System.Text.Json.Nodes;

namespace ROCrates.Models;

public class ComputerLanguage : ContextEntity
{
  public ComputerLanguage(ROCrate crate, string? identifier = null, JsonObject? properties = null) : base(crate,
    identifier, properties)
  {
    DefaultType = "ComputerLanguage";
    Properties = _empty();
    if (properties is not null) _unpackProperties(properties);
  }
  
  public string? Name
  {
    get => GetProperty<string>("name");
    set => SetProperty("name", value);
  }
  
  public string? Url
  {
    get => GetProperty<string>("url");
    set => SetProperty("url", value);
  }
  
  public string? AlternativeName
  {
    get => GetProperty<string>("alternativeName");
    set => SetProperty("alternativeName", value);
  }

  public string? Version
  {
    get => GetProperty<string>("version");
    set => SetProperty("version", value);
  }
}
