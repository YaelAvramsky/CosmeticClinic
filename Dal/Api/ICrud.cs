using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Api;

public interface ICrud<T>
{
    bool Creat(T obj);
    List<T> GetAll(); 
    bool Update(T obj);
    bool Delete(T obj);
}
