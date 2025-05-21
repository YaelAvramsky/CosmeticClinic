using BL.Api;
using BL.Models;
using Dal.Api;
using Dal.Models;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
namespace BL.Services;

public class BLAppointmentService : IBLAppointment
{
    IUnavailableAppointment _unavailableAppointment;
    IAvailableAppointment _availableAppointment;
    IClientsToTreatment _clientsToTreatment;
    IEmployee _employee;
    public BLAppointmentService(IDal dal)
    {
        _unavailableAppointment = dal.UnavailableAppointment;
        _clientsToTreatment = dal.ClientsToTreatment;
        _availableAppointment = dal.AvailableAppointment;
    }
    public void CancelAnAppointment(UnavailableAppointment unavailableAppointment)
    {
        var clientTreatment = _clientsToTreatment.GetAll().FirstOrDefault(t => t.ClientId.Equals(unavailableAppointment.ClientId) && t.TreatmentType.Type==unavailableAppointment.TreatmentType);
        if (clientTreatment != null)
        {
            _clientsToTreatment.Update(new ClientsToTreatment()
            {
                Id = clientTreatment.Id,
                ClientId = clientTreatment.ClientId,
                TreatmentTypeId = clientTreatment.TreatmentTypeId,
                CurrentTraetmentNumber = clientTreatment.CurrentTraetmentNumber - 1
            });
        }
        _unavailableAppointment.Delete(unavailableAppointment);
        _availableAppointment.Creat(new AvailableAppointment()
        {
            Date = unavailableAppointment.Date,
            Hour = unavailableAppointment.Hour,
            Day = unavailableAppointment.Day,
            Duration = unavailableAppointment.Duration,
            EmployeeId = unavailableAppointment.EmployeeId,
            TreatmentType = unavailableAppointment.TreatmentType
        });
    }

    public bool MakingAnAppointment(AvailableAppointment availableAppointment,string clientId)
    {
        bool create=false,delete = false;
        create =_unavailableAppointment.Creat(new UnavailableAppointment()
                {
                    Date = availableAppointment.Date,
                    Hour = availableAppointment.Hour,
                    Day = availableAppointment.Day,
                    Duration = availableAppointment.Duration,
                    EmployeeId = availableAppointment.EmployeeId,
                    ClientId = clientId,
                    TreatmentType = availableAppointment.TreatmentType
                });
        delete=_availableAppointment.Delete(availableAppointment);
        return create & delete;
    }
    public List<ScheduledAppointment> ReturnsAllAvailableAppointmentsOnASpecificDate(DateOnly date)
    {
        return _availableAppointment.GetAll()
          .Where(a => a.Date == date)
          .Select(a => new ScheduledAppointment
          {
              Date = a.Date,
              Hour = a.Hour,
              Day = a.Day,
              Duration = a.Duration,
              Name = a.Employee != null ? $"{a.Employee.FirstName} {a.Employee.LastName}" : string.Empty,
              TreatmentType =  a.TreatmentType 
          }).ToList();
    }
    public bool InitializingTheAppointmentLog()
    {
        //    //Calendar calendar = CultureInfo.CurrentCulture.Calendar;

        //    //// דוגמה להוצאת תאריך
        //    //DateTime today = DateTime.Now;
        //    //int year = calendar.GetYear(today);
        //    //int month = calendar.GetMonth(today);
        //    //int day = calendar.GetDayOfMonth(today);
        //    //int hour = calendar.GetHour(today);
        //    //int minute = calendar.GetMinute(today);
        //    //int second = calendar.GetSecond(today);


        //    //Console.WriteLine($"Today's date: {day}/{month}/{year}");

        //    //// קביעת תאריך מסוים
        //    //DateTime specificDate = new DateTime(2023, 10, 15); // לדוגמה, 15 באוקטובר 2023

        //    //// קבלת היום בשבוע
        //    //DayOfWeek dayOfWeek = specificDate.DayOfWeek;

        //    //Console.WriteLine($"The day of the week for {specificDate.ToShortDateString()} is {dayOfWeek}");
        //    DateTime startDate = DateTime.Today; 
        //    DateTime endDate = startDate.AddYears(1);
        //    for (DateTime date = startDate; date < endDate; date = date.AddDays(1))
        //    {
        //        foreach (var employee in _employee.GetAll())
        //        {
        //            _availableAppointment.Creat(new AvailableAppointment()
        //            {
        //                Date = DateOnly.FromDateTime(date),
        //                Hour = TimeOnly.FromDateTime(date),
        //                Day=date.DayOfWeek.ToString(),
        //            });

        //        }
        //    }
        return true;
    }

    private string connectionString = "your_connection_string_here"; // Replace with your actual connection string

    public void InitializeAppointmentSchedule()
    {
        DateTime startDate = DateTime.Today;
        DateTime endDate = startDate.AddYears(1);

        // Define working hours
        TimeSpan morningStart = new TimeSpan(9, 0, 0);
        TimeSpan morningEnd = new TimeSpan(15, 0, 0);
        TimeSpan afternoonStart = new TimeSpan(15, 0, 0);
        TimeSpan afternoonEnd = new TimeSpan(21, 0, 0);

        // Define treatment durations
        Dictionary<string, int> treatmentDurations = new Dictionary<string, int>
        {
            { "Facials", 30 },
            { "Laser hair removal", 30 },
            { "Manicure", 15 },
            { "Pedicure", 20 },
            { "Anti-aging treatments", 45 },
            { "Acne treatments", 20 },
            { "Body peeling", 45 },
            { "Microdermabrasion", 30 }
        };

        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();

            // Retrieve employees
            var employees = new List<(string Id, string TreatmentType)>();
            string employeeQuery = "SELECT [Id], [Specialization] FROM [dbo].[Employees]";

            using (SqlCommand employeeCommand = new SqlCommand(employeeQuery, connection))
            using (SqlDataReader reader = employeeCommand.ExecuteReader())
            {
                while (reader.Read())
                {
                    employees.Add((reader["Id"].ToString(), reader["Specialization"].ToString()));
                }
            }

            // Split employees into morning and afternoon shifts
            int halfCount = employees.Count / 2;
            var morningEmployees = employees.GetRange(0, halfCount);
            var afternoonEmployees = employees.GetRange(halfCount, employees.Count - halfCount);

            // Schedule appointments for each day
            for (DateTime date = startDate; date < endDate; date = date.AddDays(1))
            {
                string dayOfWeek = date.DayOfWeek.ToString();

                // Schedule morning appointments
                ScheduleAppointments(connection, morningEmployees, date, morningStart, morningEnd, dayOfWeek, treatmentDurations);

                // Schedule afternoon appointments
                ScheduleAppointments(connection, afternoonEmployees, date, afternoonStart, afternoonEnd, dayOfWeek, treatmentDurations);
            }
        }
    }

    private void ScheduleAppointments(SqlConnection connection, List<(string Id, string TreatmentType)> employees, DateTime date, TimeSpan start, TimeSpan end, string dayOfWeek, Dictionary<string, int> treatmentDurations)
    {
        foreach (var employee in employees)
        {
            TimeSpan currentTime = start;
            while (currentTime < end)
            {
                // Get the treatment duration for the current employee's specialization
                if (treatmentDurations.TryGetValue(employee.TreatmentType, out int duration))
                {
                    // Check if the appointment fits within the working hours
                    if (currentTime.Add(TimeSpan.FromMinutes(duration)) <= end)
                    {
                        string sql = "INSERT INTO [dbo].[AvailableAppointments] ([Date], [Hour], [Day], [Duration], [EmployeeID], [TreatmentType]) " +
                                     "VALUES (@Date, @Hour, @Day, @Duration, @EmployeeID, @TreatmentType)";

                        using (SqlCommand command = new SqlCommand(sql, connection))
                        {
                            command.Parameters.AddWithValue("@Date", date);
                            command.Parameters.AddWithValue("@Hour", currentTime);
                            command.Parameters.AddWithValue("@Day", dayOfWeek);
                            command.Parameters.AddWithValue("@Duration", duration);
                            command.Parameters.AddWithValue("@EmployeeID", employee.Id);
                            command.Parameters.AddWithValue("@TreatmentType", employee.TreatmentType);

                            command.ExecuteNonQuery();
                        }
                    }
                    // Move to the next appointment slot
                    currentTime = currentTime.Add(TimeSpan.FromMinutes(duration));
                }
            }
        }
    }


    


}
