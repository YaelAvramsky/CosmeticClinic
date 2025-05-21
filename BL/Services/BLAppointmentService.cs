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
using Dal.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
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
    public List<ScheduledAppointment> ReturnsAllAvailableAppointmentsOnASpecificDate(DateOnly date, string treatmentType)
    {
        return _availableAppointment.GetAll()
          .Where(a => a.Date == date && a.TreatmentType.Equals(treatmentType))
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
    //public bool InitializingTheAppointmentLog()
    //{
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
    //    return true;
    //}

    /// <summary>
    /// מילוי רשימת תורים
    /// </summary>
    //public void InitializeAppointmentSchedule()//תקבל את הטווח כפרמטר
    //{
    //    //DateTime _startDate


    //    DateTime startDate = DateTime.Today;
    //    DateTime endDate = startDate.AddMonths(6);

    //    // Define working hours
    //    TimeSpan morningStart = new TimeSpan(9, 0, 0);
    //    TimeSpan morningEnd = new TimeSpan(15, 0, 0);
    //    TimeSpan afternoonStart = new TimeSpan(15, 0, 0);
    //    TimeSpan afternoonEnd = new TimeSpan(21, 0, 0);

    //    // Define treatment durations
    //    Dictionary<string, int> treatmentDurations = new Dictionary<string, int>
    //    {
    //        { "Facials", 30 },
    //        { "Laser hair removal", 30 },
    //        { "Manicure", 15 },
    //        { "Pedicure", 20 },
    //        { "Anti-aging treatments", 45 },
    //        { "Acne treatments", 20 },
    //        { "Body peeling", 45 },
    //        { "Microdermabrasion", 30 }
    //    };

    //        // Retrieve employees
    //        var employees = new List<(string Id, string TreatmentType)>();
    //        employees=_employee.GetAll().Select(e => ( e.Id,e.Specialization)).ToList();

    //        // Split employees into morning and afternoon shifts
    //        int halfCount = employees.Count / 2;
    //        var morningEmployees = employees.GetRange(0, halfCount);
    //        var afternoonEmployees = employees.GetRange(halfCount, employees.Count - halfCount);

    //        // Schedule appointments for each day
    //        for (DateTime date = startDate; date < endDate; date = date.AddDays(1))
    //        {
    //            string dayOfWeek = date.DayOfWeek.ToString();

    //            // Schedule morning appointments
    //            ScheduleAppointments( morningEmployees, date, morningStart, morningEnd, dayOfWeek, treatmentDurations);

    //            // Schedule afternoon appointments
    //            ScheduleAppointments( afternoonEmployees, date, afternoonStart, afternoonEnd, dayOfWeek, treatmentDurations);
    //        }
    //    }
    ////}

    //private void ScheduleAppointments(List<(string Id, string TreatmentType)> employees, DateTime date, TimeSpan start, TimeSpan end, string dayOfWeek, Dictionary<string, int> treatmentDurations)
    //{
    //    foreach (var employee in employees)
    //    {
    //        TimeSpan currentTime = start;
    //        while (currentTime < end)
    //        {
    //            // Get the treatment duration for the current employee's specialization
    //            if (treatmentDurations.TryGetValue(employee.TreatmentType, out int duration))
    //            {
    //                // Check if the appointment fits within the working hours
    //                if (currentTime.Add(TimeSpan.FromMinutes(duration)) <= end)
    //                {
    //                    _availableAppointment.Creat(new AvailableAppointment() { Date = DateOnly.FromDateTime(date), Hour = new TimeOnly(currentTime.Hours, currentTime.Minutes, currentTime.Seconds), Day = dayOfWeek, Duration = duration, EmployeeId = employee.Id, TreatmentType = employee.TreatmentType });
    //                }
    //                // Move to the next appointment slot
    //                currentTime = currentTime.Add(TimeSpan.FromMinutes(duration));
    //            }
    //            else 
    //            {
    //                break;
    //            }

    //        }
    //    }
    //}

    //public void InitializeAppointmentSchedule()
    //{
    //    DateTime startDate = DateTime.Today;
    //    DateTime endDate = startDate.AddMonths(6);

    //    // Define working hours
    //    TimeSpan morningStart = new TimeSpan(9, 0, 0);
    //    TimeSpan morningEnd = new TimeSpan(15, 0, 0);
    //    TimeSpan afternoonStart = new TimeSpan(15, 0, 0);
    //    TimeSpan afternoonEnd = new TimeSpan(21, 0, 0);

    //    // Define treatment durations
    //    Dictionary<string, int> treatmentDurations = new Dictionary<string, int>
    //{
    //    { "Facials", 30 },
    //    { "Laser hair removal", 30 },
    //    { "Manicure", 15 },
    //    { "Pedicure", 20 },
    //    { "Anti-aging treatments", 45 },
    //    { "Acne treatments", 20 },
    //    { "Body peeling", 45 },
    //    { "Microdermabrasion", 30 }
    //};

    //    // Retrieve employees
    //    var employees = _employee.GetAll().Select(e => (e.Id, e.Specialization)).ToList();

    //    // Split employees into morning and afternoon shifts
    //    int halfCount = employees.Count / 2;
    //    var morningEmployees = employees.GetRange(0, halfCount);
    //    var afternoonEmployees = employees.GetRange(halfCount, employees.Count - halfCount);

    //    // Schedule appointments for each day
    //    for (DateTime date = startDate; date < endDate; date = date.AddDays(1))
    //    {
    //        string dayOfWeek = date.DayOfWeek.ToString();

    //        // Schedule morning appointments
    //        ScheduleAppointments(morningEmployees, date, morningStart, morningEnd, dayOfWeek, treatmentDurations);

    //        // Schedule afternoon appointments
    //        ScheduleAppointments(afternoonEmployees, date, afternoonStart, afternoonEnd, dayOfWeek, treatmentDurations);
    //    }
    //}

    //private void ScheduleAppointments(List<(string Id, string TreatmentType)> employees, DateTime date, TimeSpan start, TimeSpan end, string dayOfWeek, Dictionary<string, int> treatmentDurations)
    //{
    //    foreach (var employee in employees)
    //    {
    //        TimeSpan currentTime = start;

    //        while (currentTime < end)
    //        {
    //            // Get the treatment duration for the current employee's specialization
    //            if (treatmentDurations.TryGetValue(employee.TreatmentType, out int duration))
    //            {
    //                // Check if the appointment fits within the working hours
    //                if (currentTime.Add(TimeSpan.FromMinutes(duration)) <= end)
    //                {
    //                    _availableAppointment.Creat(new AvailableAppointment()
    //                    {
    //                        Date = DateOnly.FromDateTime(date),
    //                        Hour = new TimeOnly(currentTime.Hours, currentTime.Minutes, currentTime.Seconds),
    //                        Day = dayOfWeek,
    //                        Duration = duration,
    //                        EmployeeId = employee.Id,
    //                        TreatmentType = employee.TreatmentType
    //                    });
    //                    // Move to the next appointment slot
    //                    currentTime = currentTime.Add(TimeSpan.FromMinutes(duration));
    //                }
    //                else
    //                {
    //                    break; // Exit if the appointment cannot fit
    //                }
    //            }
    //            else
    //            {
    //                break; // Exit if the treatment type is not found
    //            }
    //        }
    //    }
    //}

    //public void InitializeAppointmentSchedule()
    //{
    //    throw new NotImplementedException();
    //}




    //public void InitializeAppointmentSchedule()
    //{
    //    // 1. מחיקת תורים קיימים (כמו DELETE ו-RESEED)
    //    //db.AvailableAppointments.RemoveRange(db.AvailableAppointments);
    //    //db.SaveChanges();
    //    // אין כאן RESEED, כי זה פנימי ל-SQL, אך ה-Id יתאפס אוטומטית במזהה זהות רגיל.

    //    // 2. טבלת משך טיפולים
    //    var durations = new List<(string Specialization, int Duration)>
    //    {
    //        ("Facials", 30),
    //        ("Laser hair removal", 30),
    //        ("Manicure", 15),
    //        ("Pedicure", 20),
    //        ("Anti-aging treatments", 45),
    //        ("Acne treatments", 20),
    //        ("Body peeling", 45),
    //        ("Microdermabrasion", 30),
    //    };

    //    // 3. הגדרת היום הנוכחי
    //    DateOnly today = DateOnly.FromDateTime(DateTime.Now);
    //    var dayName = CultureInfo.InvariantCulture.DateTimeFormat.GetDayName(today.DayOfWeek);

    //    // 4. רשימת עובדים (כולל RowNum לסיבוב משמרות)
    //    var employees = _employee.GetAll()
    //        .Select((e, idx) => new
    //        {
    //            Employee = e,
    //            RowNum = idx + 1
    //        })
    //        .ToList();

    //    int totalEmployees = employees.Count;

    //    // 5. יצירת משמרות לכל עובד לפי החוקים
    //    var schedule = new List<(string Shift, Employee Employee, string Specialization)>();

    //    foreach (var emp in employees)
    //    {
    //        string shift;
    //        if (dayName == "Friday")
    //            shift = "Morning";
    //        else if (dayName == "Saturday")
    //            shift = "Closed";
    //        else
    //            shift = ((emp.RowNum + today.Day) % 2 == 0) ? "Morning" : "Afternoon";

    //        schedule.Add((shift, emp.Employee, emp.Employee.Specialization));
    //    }

    //    // 6. יצירת תורים זמינים לכל עובד ולכל טיפול (לפי משמרת וחוקי שעות)
    //    //var newAppointments = new List<AvailableAppointment>();

    //    foreach (var sch in schedule)
    //    {
    //        // דילוג על עובדים במשמרת סגורה או שבת
    //        if (sch.Shift == "Closed" || dayName == "Saturday") continue;

    //        var duration = durations.FirstOrDefault(d => d.Specialization == sch.Specialization).Duration;
    //        if (duration == 0) continue; // אין משך טיפול מתאים

    //        int maxSlots = 0;
    //        TimeSpan start;
    //        if (dayName == "Friday")
    //        {
    //            maxSlots = (int)Math.Floor(180.0 / duration); // 3 שעות
    //            start = new TimeSpan(9, 0, 0);
    //        }
    //        else // שאר השבוע
    //        {
    //            if (sch.Shift == "Morning")
    //                start = new TimeSpan(9, 0, 0);
    //            else
    //                start = new TimeSpan(15, 0, 0);
    //            maxSlots = (int)Math.Floor(360.0 / duration); // 6 שעות
    //        }

    //        for (int n = 0; n < maxSlots; n++)
    //        {
    //            var hour = start.Add(TimeSpan.FromMinutes(n * duration));
    //            _availableAppointment.Creat(new AvailableAppointment
    //            {
    //                Date = today,
    //                Hour = TimeOnly.FromTimeSpan(hour),
    //                Day = dayName,
    //                Duration = duration,
    //                EmployeeId = sch.Employee.Id,
    //                TreatmentType = sch.Specialization
    //            });
    //        }
    //    }

    //   // _availableAppointment.GetAll().AddRange(newAppointments);
    //    //db.SaveChanges();
    //}

    public void InitializeAppointmentSchedule()
    {
        // טיפול אחד בלבד: לא מוחקים תורים קיימים!

        // 2. טבלת משך טיפולים
        var durations = new List<(string Specialization, int Duration)>
    {
        ("Facials", 30),
        ("Laser hair removal", 30),
        ("Manicure", 15),
        ("Pedicure", 20),
        ("Anti-aging treatments", 45),
        ("Acne treatments", 20),
        ("Body peeling", 45),
        ("Microdermabrasion", 30),
    };

        // 4. רשימת עובדים (כולל RowNum לסיבוב משמרות)
        var employees = _employee.GetAll()
            .Select((e, idx) => new
            {
                Employee = e,
                RowNum = idx + 1
            })
            .ToList();

        int totalEmployees = employees.Count;

        // *** הוספת לולאה עבור כל יום בששת החודשים הקרובים ***
        DateOnly startDate = DateOnly.FromDateTime(DateTime.Now);
        DateOnly endDate = startDate.AddMonths(6);

        for (DateOnly date = startDate; date < endDate; date = date.AddDays(1))
        {
            var dayName = CultureInfo.InvariantCulture.DateTimeFormat.GetDayName(date.DayOfWeek);

            // 5. יצירת משמרות לכל עובד לפי החוקים
            var schedule = new List<(string Shift, Employee Employee, string Specialization)>();

            foreach (var emp in employees)
            {
                string shift;
                if (dayName == "Friday")
                    shift = "Morning";
                else if (dayName == "Saturday")
                    shift = "Closed";
                else
                    shift = ((emp.RowNum + date.Day) % 2 == 0) ? "Morning" : "Afternoon";

                schedule.Add((shift, emp.Employee, emp.Employee.Specialization));
            }

            // 6. יצירת תורים זמינים לכל עובד ולכל טיפול (לפי משמרת וחוקי שעות)
            foreach (var sch in schedule)
            {
                // דילוג על עובדים במשמרת סגורה או שבת
                if (sch.Shift == "Closed" || dayName == "Saturday") continue;

                var duration = durations.FirstOrDefault(d => d.Specialization == sch.Specialization).Duration;
                if (duration == 0) continue; // אין משך טיפול מתאים

                int maxSlots = 0;
                TimeSpan start;
                if (dayName == "Friday")
                {
                    maxSlots = (int)Math.Floor(180.0 / duration); // 3 שעות
                    start = new TimeSpan(9, 0, 0);
                }
                else // שאר השבוע
                {
                    if (sch.Shift == "Morning")
                        start = new TimeSpan(9, 0, 0);
                    else
                        start = new TimeSpan(15, 0, 0);
                    maxSlots = (int)Math.Floor(360.0 / duration); // 6 שעות
                }

                for (int n = 0; n < maxSlots; n++)
                {
                    var hour = start.Add(TimeSpan.FromMinutes(n * duration));
                    _availableAppointment.Creat(new AvailableAppointment
                    {
                        Date = date,
                        Hour = TimeOnly.FromTimeSpan(hour),
                        Day = dayName,
                        Duration = duration,
                        EmployeeId = sch.Employee.Id,
                        TreatmentType = sch.Specialization
                    });
                }
            }
        }
    }
}
