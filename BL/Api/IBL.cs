using Dal.Api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Api;

public interface IBL
{
    //public IDal  Dal { get; }
    public IBLClient Client { get; }
    public IBLAppointment  Appointment { get; }
}
