using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Models;

public class ScheduledAppointment
{
    public DateOnly Date { get; set; }
    public TimeOnly Hour { get; set; }
    public string Day { get; set; }
    public string Name { get; set; }
    public int Duration { get; set; }
    public string TreatmentType { get; set; }
}
