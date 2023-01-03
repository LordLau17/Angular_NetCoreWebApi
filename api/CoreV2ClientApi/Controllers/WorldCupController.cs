using Microsoft.AspNetCore.Mvc;

namespace CoreV2ClientApi.Controllers;

[ApiController]
[Route("[controller]")]
public class WorldCupController : ControllerBase
{
    [HttpGet("GetWinner")]
    public async Task<ActionResult<Task<string>>> GetWinnerAsync()
    {
        return await Task.FromResult(Ok("Argentina"));
    }
}