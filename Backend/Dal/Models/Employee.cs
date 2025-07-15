using System;
using System.Collections.Generic;

namespace Dal.Models;

public partial class Employee
{
    public string Id { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Specialization { get; set; } = null!;

    public virtual ICollection<AvailableAppointment> AvailableAppointments { get; set; } = new List<AvailableAppointment>();

    public virtual ICollection<UnavailableAppointment> UnavailableAppointments { get; set; } = new List<UnavailableAppointment>();
}
