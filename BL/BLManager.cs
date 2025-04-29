
using BL.Api;
using BL.Services;
using Dal;
using Dal.Api;
using Microsoft.Extensions.DependencyInjection;

namespace BL;

public class BLManager:IBL
{
    //public IDal Dal { get; }
    public IBLClient ScheduledAppointment { get; }
    public BLManager()
    {
        ServiceCollection services = new ServiceCollection();

        services.AddSingleton<IDal, DalManager>();

        services.AddSingleton<IBLClient, BLClientService>();

        ServiceProvider serviceProvider = services.BuildServiceProvider();

        //Dal=serviceProvider.GetService<IDal>();
        ScheduledAppointment = serviceProvider.GetService<IBLClient>();
    }
}
