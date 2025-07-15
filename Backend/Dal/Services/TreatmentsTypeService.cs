using Dal.Api;
using Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Services;

public class TreatmentsTypeService:ITreatmentsType
{
    DatabaseManager databaseManager;
    public TreatmentsTypeService(DatabaseManager db)
    {
        databaseManager = db;
    }
    public bool Creat(TreatmentsType obj)
    {
        if (obj == null)
            return false;
        databaseManager.TreatmentsTypes.Add(obj);
        databaseManager.SaveChanges();
        return true;
    }

    public bool Delete(TreatmentsType obj)
    {
        if (obj == null)
            return false;
        var deleted = databaseManager.TreatmentsTypes.FirstOrDefault(x => x.Id == obj.Id);
        if (deleted != null)
        {
            databaseManager.TreatmentsTypes.Remove(obj);
            databaseManager.SaveChanges();
            return true;
        }
        return false;

    }

    public List<TreatmentsType> GetAll()
    {
        return databaseManager.TreatmentsTypes.ToList();
    }

    public bool Update(TreatmentsType obj)
    {
        if (obj == null)
            return false;
        var UpdateTreatmentsType = databaseManager.TreatmentsTypes.FirstOrDefault(e => e.Id == obj.Id);
        if (UpdateTreatmentsType != null)
        {
            UpdateTreatmentsType.Type = obj.Type;
            UpdateTreatmentsType.NumberOfTreatments = obj.NumberOfTreatments;
            UpdateTreatmentsType.Price = obj.Price;
            databaseManager.SaveChanges();
            return true;
        }
        return false;
    }
}
