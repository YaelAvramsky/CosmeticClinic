using Dal.Api;
using Dal.Models;

using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Services;

public class UnavailableAppointmentService:IUnavailableAppointment
{
    DatabaseManager databaseManager;
    public UnavailableAppointmentService(DatabaseManager db)
    {
        databaseManager = db;
    }
    public bool Creat(UnavailableAppointment obj)
    {
        if (obj == null)
            return false;
        databaseManager.UnavailableAppointments.Add(obj);
        databaseManager.SaveChanges();
        return true;
    }

    public bool Delete(UnavailableAppointment obj)
    {
        if (obj == null)
            return false;
        var deleted = databaseManager.UnavailableAppointments.FirstOrDefault(x => x.Id == obj.Id);
        if (deleted != null)
        {
            databaseManager.UnavailableAppointments.Remove(obj);
            databaseManager.SaveChanges();
            return true;
        }
        return false;

    }

    public List<UnavailableAppointment> GetAll()
    {
        return databaseManager.UnavailableAppointments.ToList();
    }

    public bool Update(UnavailableAppointment obj)
    {
        if (obj == null)
            return false;
        var UpdateUnavailableAppointment = databaseManager.UnavailableAppointments.FirstOrDefault(e => e.Id == obj.Id);
        if (UpdateUnavailableAppointment != null)
        {
            UpdateUnavailableAppointment.Date = obj.Date;
            UpdateUnavailableAppointment.Hour = obj.Hour;
            UpdateUnavailableAppointment.Day = obj.Day;
            UpdateUnavailableAppointment.EmployeeId = obj.EmployeeId;
            UpdateUnavailableAppointment.ClientId = obj.ClientId;
            UpdateUnavailableAppointment.Duration = obj.Duration;
            databaseManager.SaveChanges();
            return true;
        }
        return false;
    }
}
