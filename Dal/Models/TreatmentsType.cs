using System;
using System.Collections.Generic;

namespace Dal.Models;

public partial class TreatmentsType
{
    public int Id { get; set; }

    public string Type { get; set; } = null!;

    public int NumberOfTreatments { get; set; }

    public double Price { get; set; }

    public virtual ICollection<ClientsToTreatment> ClientsToTreatments { get; set; } = new List<ClientsToTreatment>();
}
