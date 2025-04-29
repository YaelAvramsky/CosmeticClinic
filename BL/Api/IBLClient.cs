using BL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Api;

public interface IBLClient
{
    List<ScheduledAppointment> AccessPermission(string name, string id);
    bool AddNewClient(string Id, string FirstName, string LastName, string PhonNumber, string Email, string City);

}
