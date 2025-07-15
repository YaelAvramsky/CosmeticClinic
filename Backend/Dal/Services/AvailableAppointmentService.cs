using Dal.Api;

using Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Services;

public class AvailableAppointmentService:IAvailableAppointment
{
    DatabaseManager databaseManager;
    public AvailableAppointmentService(DatabaseManager db)
    {
        databaseManager = db;
    }
    public bool Creat(AvailableAppointment obj)
    {
        if (obj == null)
        {
            return false;
        }
        databaseManager.AvailableAppointments.Add(obj);
        databaseManager.SaveChanges();
        return true;
    }

    public bool Delete(AvailableAppointment obj)
    {
        if (obj == null)
        {
            return false;
        }
        var deleted = databaseManager.AvailableAppointments.FirstOrDefault(x => x.Id == obj.Id);
        if (deleted != null)
        {
            databaseManager.AvailableAppointments.Remove(obj);
            databaseManager.SaveChanges();
            return true;
        }
        return false;
    }

    public List<AvailableAppointment> GetAll()
    {
        return databaseManager.AvailableAppointments.ToList();
    }

    public bool Update(AvailableAppointment obj)
    {
        if (obj == null)
        {
            return false;
        }
        var AvailableAppointmentsToUpdate = databaseManager.AvailableAppointments.FirstOrDefault(c => c.Id == obj.Id);
        if (AvailableAppointmentsToUpdate != null)
        {
            AvailableAppointmentsToUpdate.Date = obj.Date;
            AvailableAppointmentsToUpdate.Hour = obj.Hour;
            AvailableAppointmentsToUpdate.Duration = obj.Duration;
            AvailableAppointmentsToUpdate.EmployeeId = obj.EmployeeId;
            databaseManager.SaveChanges();
            return true;
        }
        return false;
    }
}
