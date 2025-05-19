using BL.Api;
using BL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        IBLClient bLScheduledAppointment;
        public ClientController(IBL bL)
        {
            bLScheduledAppointment = bL.Client;
        }
        [HttpGet]
        public ActionResult<List<ScheduledAppointment>> GetAppointments([FromQuery] string name, [FromQuery] string id)
        {
            return bLScheduledAppointment.AccessPermissionAndShowingAllAppointments(name, id);
        }



    }
}

