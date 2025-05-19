using BL.Api;
using BL.Models;
using Dal.Api;
using Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services;

public class BLAppointmentService : IBLAppointment
{
    IUnavailableAppointment _unavailableAppointment;

    IClientsToTreatment _clientsToTreatment;
    IAvailableAppointment _availableAppointment;
    public BLAppointmentService(IDal dal)
    {
        _unavailableAppointment = dal.UnavailableAppointment;
        _clientsToTreatment = dal.ClientsToTreatment;
        _availableAppointment = dal.AvailableAppointment;
    }
    public void CancelAnAppointment(UnavailableAppointment unavailableAppointment)
    {
        var clientTreatment = _clientsToTreatment.GetAll().FirstOrDefault(t => t.ClientId.Equals(unavailableAppointment.ClientId) && t.TreatmentType.Type==unavailableAppointment.TreatmentType);
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
        _availableAppointment.Creat(new AvailableAppointment()
        {
            Date = unavailableAppointment.Date,
            Hour = unavailableAppointment.Hour,
            Day = unavailableAppointment.Day,
            Duration = unavailableAppointment.Duration,
            EmployeeId = unavailableAppointment.EmployeeId,
            TreatmentType = unavailableAppointment.TreatmentType
        });
    }

    public bool MakingAnAppointment(AvailableAppointment availableAppointment,string clientId)
    {
        bool create=false,delete = false;
        create =_unavailableAppointment.Creat(new UnavailableAppointment()
                {
                    Date = availableAppointment.Date,
                    Hour = availableAppointment.Hour,
                    Day = availableAppointment.Day,
                    Duration = availableAppointment.Duration,
                    EmployeeId = availableAppointment.EmployeeId,
                    ClientId = clientId,
                    TreatmentType = availableAppointment.TreatmentType
                });
        delete=_availableAppointment.Delete(availableAppointment);
        return create & delete;
    }

    public List<ScheduledAppointment> ReturnsAllAvailableAppointmentsOnASpecificDate(DateOnly date)
    {
        throw new NotImplementedException();
    }
}
