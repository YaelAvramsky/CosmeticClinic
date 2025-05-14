using Dal.Api;
using Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Services;

public class ClientService : IClient
{
    DatabaseManager databaseManager;
    public ClientService(DatabaseManager db)
    {
        databaseManager = db;
    }
    public bool Creat(Client obj)
    {
        if (obj == null)
        {
            return false;
        }
        databaseManager.Clients.Add(obj);
        databaseManager.SaveChanges();
        return true;
    }

    public bool Delete(Client obj)
    {
        if (obj == null)
        {
            return false;
        }
        var deleted = databaseManager.Clients.FirstOrDefault(x => x.Id == obj.Id);
        if (deleted != null)
        {
            databaseManager.Clients.Remove(obj);
            databaseManager.SaveChanges();
            return true;
        }
        return false;
    }

    public List<Client> GetAll()
    {
        return databaseManager.Clients.ToList();
    }

    public bool Update(Client obj)
    {
        if (obj == null)
        {
            return false;
        }
        var clintToUpdate = databaseManager.Clients.FirstOrDefault(c => c.Id == obj.Id);
        if (clintToUpdate != null)
        {
            clintToUpdate.FirstName = obj.FirstName;
            clintToUpdate.LastName = obj.LastName;
            clintToUpdate.PhonNumber = obj.PhonNumber;
            clintToUpdate.Email = obj.Email;
            clintToUpdate.City = obj.City;
            //clintToUpdate.CurrentTraetmentNumber = obj.CurrentTraetmentNumber;
            databaseManager.SaveChanges();
            return true;
        }
        return false;
    }
}
