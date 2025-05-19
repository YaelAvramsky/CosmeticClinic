
using BL.Api;
using BL.Services;
using Dal;
using Dal.Api;
using Microsoft.Extensions.DependencyInjection;

namespace BL;

public class BLManager : IBL
{
    //public IDal Dal { get; }
    public IBLClient Client { get; }

    public IBLAppointment Appointment { get; }

    public BLManager()
    {
        ServiceCollection services = new ServiceCollection();

        services.AddSingleton<IDal, DalManager>();

        services.AddSingleton<IBLClient, BLClientService>();
        services.AddSingleton<IBLAppointment, BLAppointmentService>();

        ServiceProvider serviceProvider = services.BuildServiceProvider();

      
        Client = serviceProvider.GetService<IBLClient>();
        Appointment= serviceProvider.GetService<IBLAppointment>();
    }
}
