using Dal.Api;

using Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Services;

public class ClintsToTreatmentService:IClientsToTreatment
{
    DatabaseManager databaseManager;
    public ClintsToTreatmentService(DatabaseManager db)
    {
        databaseManager = db;
    }
    public bool Creat(ClientsToTreatment obj)
    {
        if (obj == null)
        {
            return false;
        }
        databaseManager.ClientsToTreatments.Add(obj);
        databaseManager.SaveChanges();
        return true;
    }

    public bool Delete(ClientsToTreatment obj)
    {
        if (obj == null)
        {
            return false;
        }
        var deleted = databaseManager.ClientsToTreatments.FirstOrDefault(x => x.Id == obj.Id);
        if (deleted != null)
        {
            databaseManager.ClientsToTreatments.Remove(obj);
            databaseManager.SaveChanges();
            return true;
        }
        return false;
    }

    public List<ClientsToTreatment> GetAll()
    {
        return databaseManager.ClientsToTreatments.ToList();
    }

    public bool Update(ClientsToTreatment obj)
    {
        if (obj == null)
        {
            return false;
        }
        var UpdateClintsToTreatment = databaseManager.ClientsToTreatments.FirstOrDefault(c => c.Id == obj.Id);
        if (UpdateClintsToTreatment != null)
        {
            UpdateClintsToTreatment.ClientId = obj.ClientId;
            UpdateClintsToTreatment.TreatmentTypeId = obj.TreatmentTypeId;
            databaseManager.SaveChanges();
            return true;
        }
        return false;
    }
}
