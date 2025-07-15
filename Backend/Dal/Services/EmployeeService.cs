using Dal.Api;

using Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Services;

public class EmployeeService : IEmployee
{
    DatabaseManager databaseManager;
    public EmployeeService(DatabaseManager db)
    {
        databaseManager=db;
    }
    public bool Creat(Employee obj)
    {
        if(obj == null) 
           return false;
        databaseManager.Employees.Add(obj);
        databaseManager.SaveChanges();
        return true;
    }

    public bool Delete(Employee obj)
    {
        if (obj == null)
            return false;
        var deleted = databaseManager.Employees.FirstOrDefault(x => x.Id == obj.Id);
        if (deleted != null)
        {
            databaseManager.Employees.Remove(obj);
            databaseManager.SaveChanges();
            return true;
        }
        return false;

    }

    public List<Employee> GetAll()
    {
        return databaseManager.Employees.ToList();
    }

    public bool Update(Employee obj)
    {
        if (obj == null)
            return false;
        var employeeToUpdate = databaseManager.Employees.FirstOrDefault(e => e.Id == obj.Id);
        if (employeeToUpdate != null)
        {
            employeeToUpdate.FirstName= obj.FirstName;
            employeeToUpdate.LastName= obj.LastName;
            employeeToUpdate.Specialization= obj.Specialization;
            databaseManager.SaveChanges();
            return true;
        }
        return false;
    }
}
