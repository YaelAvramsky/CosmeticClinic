using Dal.Api;
using Dal.Models;
using Dal.Services;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.DependencyInjection;

namespace Dal;

public class DalManager : IDal
{
    public IAvailableAppointment AvailableAppointment { get; }
    public IClient Client { get; }
    public IClientsToTreatment ClientsToTreatment { get; }
    public IEmployee Employee { get; }
    public ITreatmentsType TreatmentsType { get; }
    public IUnavailableAppointment UnavailableAppointment { get; }
    public DalManager()
    {
       
        ServiceCollection services = new ServiceCollection();
        services.AddSingleton<DatabaseManager>();
        services.AddSingleton<IAvailableAppointment, AvailableAppointmentService>();
        services.AddSingleton<IClient, ClientService>();
        services.AddSingleton<IClientsToTreatment, ClintsToTreatmentService>();
        services.AddSingleton<IEmployee, EmployeeService>();
        services.AddSingleton<ITreatmentsType, TreatmentsTypeService>();
        services.AddSingleton<IUnavailableAppointment, UnavailableAppointmentService>();

        ServiceProvider serviceProvider = services.BuildServiceProvider();

        AvailableAppointment = serviceProvider.GetService<IAvailableAppointment>();
        Client = serviceProvider.GetService<IClient>();
        ClientsToTreatment = serviceProvider.GetService<IClientsToTreatment>();
        Employee = serviceProvider.GetService<IEmployee>();
        TreatmentsType = serviceProvider.GetService<ITreatmentsType>();
        UnavailableAppointment = serviceProvider.GetService<IUnavailableAppointment>();

    }
}
