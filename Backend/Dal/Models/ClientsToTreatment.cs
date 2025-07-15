using System;
using System.Collections.Generic;

namespace Dal.Models;

public partial class ClientsToTreatment
{
    public int Id { get; set; }

    public string ClientId { get; set; } = null!;

    public int TreatmentTypeId { get; set; }

    public int CurrentTraetmentNumber { get; set; }

    public virtual Client Client { get; set; } = null!;

    public virtual TreatmentsType TreatmentType { get; set; } = null!;
}
