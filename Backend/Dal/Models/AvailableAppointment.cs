using System;
using System.Collections.Generic;

namespace Dal.Models;

public partial class AvailableAppointment
{
    public int Id { get; set; }

    public DateOnly Date { get; set; }

    public TimeOnly Hour { get; set; }

    public string Day { get; set; } = null!;

    public int Duration { get; set; }

    public string EmployeeId { get; set; } = null!;

    public string TreatmentType { get; set; } = null!;

    public virtual Employee Employee { get; set; } = null!;
}
