using BL.Models;
using Dal.Models;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Api
{
    public interface IBLAppointment
    {
        void DeleteAppointment(UnavailableAppointment unavailableAppointment);

        List<ScheduledAppointment> ReturnsAllAvailableAppointmentsOnASpecificDate(DateOnly date);

       
    }
}
