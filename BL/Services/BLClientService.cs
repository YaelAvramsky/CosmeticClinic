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

public class BLClientService : IBLClient
{
    IClient _client;
    IEmployee _employee;
    IUnavailableAppointment _unavailableAppointment;
    ITreatmentsType _treatmentsType;
    IClientsToTreatment _clientsToTreatment;
    public BLClientService(IDal dal)
    {
        _client = dal.Client;
        _employee = dal.Employee;
        _unavailableAppointment = dal.UnavailableAppointment;
        _treatmentsType = dal.TreatmentsType;
        _clientsToTreatment = dal.ClientsToTreatment;
    }

    public bool ChecksWhetherThePersonIsAClient(string name, string id)
    {
        var client = _client.GetAll().FirstOrDefault(c => c.Id.Equals(id) && (c.FirstName + " " + c.LastName).Equals(name));
        if (client != null)
            return true;
        return false;
    }
    public bool ChecksWhetherThePersonIsAEmployee(string name, string id)
    {
        var employee = _employee.GetAll().FirstOrDefault(employee => employee.Id.Equals(id) && (employee.FirstName + " " + employee.LastName).Equals(name));
        if (employee != null)
            return true;
        return false;
    }
    public List<ScheduledAppointment> AccessPermissionAndShowingAllAppointments(string name, string id)
    {
        List<ScheduledAppointment> result = new List<ScheduledAppointment>();

        if (ChecksWhetherThePersonIsAClient(name, id))
        {
            var clientAppointments = _unavailableAppointment.GetAll();

            result=clientAppointments.Where(a => a.ClientId.Equals(id))
                .Select(a => new ScheduledAppointment()
                {
                    Date = a.Date,
                    Hour = a.Hour,
                    Day = a.Day,
                    Duration = a.Duration,
                    Name =a.Employee!=null? $"{a.Employee.FirstName} {a.Employee.LastName}":string.Empty,
                    TreatmentType = a.TreatmentType
                }).ToList(); 

           // result.AddRange(clientAppointments); 
        }
        else
        { 
            var EmployeeAppointments = _unavailableAppointment.GetAll()
                .Where(a => a.EmployeeId.Equals(id))
                .Select(a =>                               
                     new ScheduledAppointment()
                     {
                         Date = a.Date,
                         Hour = a.Hour,
                         Day = a.Day,
                         Duration = a.Duration,
                         Name = a.Client != null ? $"{a.Client.FirstName} {a.Client.LastName}" : string.Empty,
                         TreatmentType = a.TreatmentType

                     }).ToList();

            result.AddRange(EmployeeAppointments);
        }
        return result;
    }

    public bool AddNewClient(string Id, string FirstName, string LastName, string PhonNumber, string Email, string City)
    {
        var client = _client.GetAll().FirstOrDefault(c => c.Id.Equals(Id));
        if (client == null)
        {
            var newClient = new Client()
            {
                Id = Id,
                FirstName = FirstName,
                LastName = LastName,
                PhonNumber = PhonNumber,
                Email = Email,
                City = City
            };
            _client.Creat(newClient);
            return true;

        }
        return false;
    }

    public bool ChecksIfTheClientHasATreatmentPackage(string clientId, string treatmentType)
    {
        var treatments = _treatmentsType.GetAll().Where(t=>t.Type.Equals(treatmentType));
        if (treatments == null)
            return false;
        foreach (var treatment in treatments)
        {
            var clientPackages = _clientsToTreatment.GetAll()
                                .Where(ct => ct.ClientId.Equals(clientId) && ct.TreatmentTypeId == treatment.Id);

            if (clientPackages != null)
            {
                foreach (var package in clientPackages)
                {
                    if (package.CurrentTraetmentNumber < treatment.NumberOfTreatments)
                        return true;
                }
            }
        }
        return false;
    }

 
}
