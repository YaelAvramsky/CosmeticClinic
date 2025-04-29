using BL.Api;
using Dal.Api;
using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services;

public class BLAppointmentService : IBLAppointment
{
    IUnavailableAppointment _unavailableAppointment;

    IClient _client;
    public BLAppointmentService(IDal dal)
    {
        _unavailableAppointment = dal.UnavailableAppointment;
        _client = dal.Client;
    }
    public void DeleteAppointment(UnavailableAppointment unavailableAppointment)
    {
        var client = _client.GetAll().FirstOrDefault(c => c.Id.Equals(unavailableAppointment.ClientId));
        _client.Update(new Client()
        {
            FirstName = client.FirstName,
            LastName = client.LastName,
            PhonNumber = client.PhonNumber,
            Email = client.Email,
            City = client.City,
            CurrentTraetmentNumber = client.CurrentTraetmentNumber - 1,
        });
        _unavailableAppointment.Delete(unavailableAppointment);

    }
}
