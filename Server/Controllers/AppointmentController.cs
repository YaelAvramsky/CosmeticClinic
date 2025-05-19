using BL.Api;
using Dal.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
       IBLAppointment bLAppointment;
        public AppointmentController(IBL bL)
        {
            bLAppointment = bL.Appointment; 
        }
        [HttpDelete]
        public void DeleteAppointment([FromBody] UnavailableAppointment unavailableAppointment)
        {
             bLAppointment.CancelAnAppointment(unavailableAppointment);
        }
    }
}
