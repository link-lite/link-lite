using System.Text.Json;
using System.Text.Json.Nodes;
using ROCrates.Models;

namespace ROCrates.Tests;

public class TestEntity
{
  private ROCrate _roCrate = new();

  private string _jsonLd =
    "{\"@id\": \"./\",\"identifier\": \"https://doi.org/10.4225/59/59672c09f4a4b\",\"@type\": \"Dataset\", \"randomNumber\": 123, \"datePublished\": \"2017\",\"name\": \"Data files associated with the manuscript:Effects of facilitated family case conferencing for ...\",\"description\": \"Palliative care planning for nursing home residents with advanced dementia ...\",\"license\": {\"@id\": \"https://creativecommons.org/licenses/by-nc-sa/3.0/au/\"}}";

  private const string _testPartPropName = "hasPart";
  private const string _testTypePropName = "@type";

  [Fact]
  public void TestSetProperty_Updates()
  {
    // Arrange
    var jsonObject = JsonNode.Parse(_jsonLd).AsObject();
    var entity = new Entity(_roCrate, properties: jsonObject);

    // Act
    entity.Properties.TryGetPropertyValue("datePublished", out var datePublished);
    entity.SetProperty("datePublished", "2023");
    entity.Properties.TryGetPropertyValue("datePublished", out datePublished);

    // Assert
    Assert.Equal("2023", datePublished.ToString());
  }

  [Fact]
  public void TestGetProperty_CorrectTypes()
  {
    // Arrange
    var jsonObject = JsonNode.Parse(_jsonLd).AsObject();
    var entity = new Entity(_roCrate, properties: jsonObject);

    // Act
    var retrievedInt = entity.GetProperty<int>("randomNumber");
    var retrievedString = entity.GetProperty<string>(_testTypePropName);

    // Assert
    Assert.IsType<int>(retrievedInt);
    Assert.Equal(123, retrievedInt);
    Assert.IsType<string>(retrievedString);
    Assert.Equal("Dataset", retrievedString);
  }

  [Fact]
  public void TestDefaultProperties()
  {
    // Arrange
    var entity = new Entity(_roCrate);

    // Act
    var gotValue = entity.Properties.TryGetPropertyValue(_testTypePropName, out var type);

    // Assert
    Assert.True(gotValue);
    Assert.Equal("Thing", type.ToString());
  }

  [Fact]
  public void TestProperties_Type_Is_AsSpecified()
  {
    // Arrange
    var jsonObject = JsonNode.Parse(_jsonLd).AsObject();
    var entity = new Entity(
      _roCrate,
      properties: jsonObject);

    // Act
    var gotValue = entity.Properties.TryGetPropertyValue(_testTypePropName, out var type);

    // Assert
    Assert.True(gotValue);
    Assert.Equal("Dataset", type.ToString());
  }

  [Fact]
  public void TestAppendTo_CreatesKey()
  {
    // Arrange
    var jsonObject = JsonNode.Parse(_jsonLd).AsObject();
    var entity = new Entity(_roCrate, properties: jsonObject);
    var entity2 = new Entity(_roCrate);

    // Act
    entity.AppendTo(_testPartPropName, entity2);

    // Assert
    Assert.True(entity.Properties.ContainsKey(_testPartPropName));
  }

  [Fact]
  public void TestAppendTo_AppendsToList()
  {
    // Arrange
    var jsonObject = JsonNode.Parse(_jsonLd).AsObject();
    var entity = new Entity(_roCrate, properties: jsonObject);
    var entity2 = new Entity(_roCrate);
    var entity3 = new Entity(_roCrate);

    // Act
    entity.AppendTo(_testPartPropName, entity2);
    entity.AppendTo(_testPartPropName, entity3);
    entity.Properties.TryGetPropertyValue(_testPartPropName, out var outputIdJson);
    var outputId = outputIdJson.Deserialize<List<Part>>();

    // Assert
    Assert.Equal(2, outputId.Count);
  }
}
