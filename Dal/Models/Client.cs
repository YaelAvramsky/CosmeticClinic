using System;
using System.Collections.Generic;

namespace Dal.models;

public partial class Client
{
    public string Id { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string PhonNumber { get; set; } = null!;

    public string? Email { get; set; }

    public string? City { get; set; }

    public int CurrentTraetmentNumber { get; set; }

    public virtual ICollection<ClientsToTreatment> ClientsToTreatments { get; set; } = new List<ClientsToTreatment>();

    public virtual ICollection<UnavailableAppointment> UnavailableAppointments { get; set; } = new List<UnavailableAppointment>();
}
