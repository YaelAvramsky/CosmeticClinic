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
        [HttpGet("Get-Appointments")]
        public ActionResult<List<ScheduledAppointment>> GetAppointments([FromQuery] string name, [FromQuery] string id)
        {
            return bLScheduledAppointment.AccessPermissionAndShowingAllAppointments(name, id);
        }
        [HttpPost]
        public ActionResult<bool> AddNewClient([FromQuery] string Id, [FromQuery] string FirstName, [FromQuery] string LastName, [FromQuery] string PhonNumber, [FromQuery] string Email, [FromQuery] string City)
        {
            return bLScheduledAppointment.AddNewClient(Id, FirstName, LastName, PhonNumber, Email, City);
        }
        [HttpGet("check-treatment-package")]
        public ActionResult<bool> getClientTreatmentPackage(string clientId, string treatmentType)
        {
            return bLScheduledAppointment.ChecksIfTheClientHasATreatmentPackage(clientId, treatmentType);
        }
        [HttpGet("check-client")]
        public ActionResult<bool> GetThePersonsStatusClient([FromQuery] string name, [FromQuery] string id)
        {
            return bLScheduledAppointment.ChecksWhetherThePersonIsAClient(name, id);
        }
        [HttpGet("check-employee")]
        public ActionResult<bool> GetThePersonsStatusEmployee(string name, string id)
        {
            return bLScheduledAppointment.ChecksWhetherThePersonIsAEmployee(name, id);
        }
        
    }
}

