using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Api;

public interface IDal
{
    public IAvailableAppointment AvailableAppointment { get;  }
    public IClient Client { get;  }
    public IClientsToTreatment ClientsToTreatment { get;  }
    public IEmployee Employee { get;  }
    public ITreatmentsType TreatmentsType { get;  }
    public IUnavailableAppointment UnavailableAppointment { get;  }
}
