using BL.Api;
using BL.Models;
using BL.Services;
using Dal.Api;
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

        [HttpPost("make-appointment")]
        public ActionResult<bool> MakeAppointment([FromBody] AvailableAppointment availableAppointment, string clientId)
        {
            return bLAppointment.MakingAnAppointment(availableAppointment, clientId);
        }
        [HttpGet("available-appointments")]
        public ActionResult<List<ScheduledAppointment>> GetAvalableAppointment([FromQuery]DateOnly date,[FromQuery] string treatmentType)
        {
            return bLAppointment.ReturnsAllAvailableAppointmentsOnASpecificDate(date, treatmentType);
        }

        [HttpPost("Initialize the appointment schedule")]
        public void InitializeAppointmentSchedule()
        {
            bLAppointment.InitializeAppointmentSchedule();
        }
    }
 
}
