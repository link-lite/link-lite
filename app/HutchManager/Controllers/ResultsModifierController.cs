using HutchManager.Models;
using HutchManager.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HutchManager.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class ResultsModifierController : ControllerBase
{
  private readonly ResultsModifierService _resultsModifier;
  public ResultsModifierController(ResultsModifierService resultsModifier)
  {
    _resultsModifier = resultsModifier;
  }

  [HttpGet]
  public async Task<List<Models.ResultsModifierModel>> List()
    => await _resultsModifier.List();

  [HttpGet("{id}")]
  public async Task<ActionResult<ResultsModifierModel>> Get(int id)
    => await _resultsModifier.Get(id);

  [HttpGet("Types")]
  public async Task<List<ModifierTypeModel>> GetTypes()
    => await _resultsModifier.GetTypes();

  [HttpDelete("{id}")]
  public async Task<IActionResult> Delete(int id)
  {
    try
    {
      await _resultsModifier.Delete(id);
    }
    catch (KeyNotFoundException)
    {

    }
    return NoContent();
  }

  [HttpPut("{id}")]
  public async Task<IActionResult> Set(int id, [FromBody] UpdateResultsModifier resultsModifier)
  {
    try
    {
      return Ok(await _resultsModifier.Set(id, resultsModifier));
    }
    catch (KeyNotFoundException)
    {
      return NotFound();
    }
  }
  
  [HttpPut("{id}/order/{newPosition}")]
  public async Task<IActionResult> SetOrder(int id, int newPosition)
  {
    try
    {
      return Ok(await _resultsModifier.SetOrder(id, newPosition));
    }
    catch (KeyNotFoundException)
    {
      return NotFound();
    }
  }
  
}
