using BL.Api;
using BL.Models;
using Dal.Api;
using Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace BL.Services;

public class BLAppointmentService : IBLAppointment
{
    IUnavailableAppointment _unavailableAppointment;
    IAvailableAppointment _availableAppointment;
    IClientsToTreatment _clientsToTreatment;
    IEmployee _employee;
    ITreatmentsType _treatmentsType;
    public BLAppointmentService(IDal dal)
    {
        _unavailableAppointment = dal.UnavailableAppointment;
        _clientsToTreatment = dal.ClientsToTreatment;
        _availableAppointment = dal.AvailableAppointment;
        _employee = dal.Employee;
        _treatmentsType = dal.TreatmentsType;
    }
    public void DeleteAppointment(UnavailableAppointment unavailableAppointment)
    {
        var clientTreatment = _clientsToTreatment.GetAll().FirstOrDefault(t => t.ClientId.Equals(unavailableAppointment.ClientId) && t.TreatmentTypeId==unavailableAppointment.TreatmentTypeId);
        if (clientTreatment != null)
        {
            _clientsToTreatment.Update(new ClientsToTreatment()
            {
                Id = clientTreatment.Id,
                ClientId = clientTreatment.ClientId,
                TreatmentTypeId = clientTreatment.TreatmentTypeId,
                CurrentTraetmentNumber = clientTreatment.CurrentTraetmentNumber - 1
            });
        }
        _unavailableAppointment.Delete(unavailableAppointment);
    }
    public List<ScheduledAppointment> ReturnsAllAvailableAppointmentsOnASpecificDate(DateOnly date)
    {
        return _availableAppointment.GetAll()
          .Where(a => a.Date == date)
          .Select(a => new ScheduledAppointment
          {
              Date = a.Date,
              Hour = a.Hour,
              Day = a.Day,
              Duration = a.Duration,
              Name = a.Employee != null ? $"{a.Employee.FirstName} {a.Employee.LastName}" : string.Empty,
              TreatmentType =  a.TreatmentType 
          }).ToList();
    }


}
