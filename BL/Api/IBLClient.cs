using BL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Api;

public interface IBLClient
{
    bool ChecksWhetherThePersonIsAClient(string name, string id);
    bool ChecksWhetherThePersonIsAEmployee(string name, string id);
    List<ScheduledAppointment> AccessPermissionAndShowingAllAppointments(string name, string id);
    bool AddNewClient(string Id, string FirstName, string LastName, string PhonNumber, string Email, string City);
    bool ChecksIfTheClientHasATreatmentPackage(string clientId,string treatmentType);
        
}
