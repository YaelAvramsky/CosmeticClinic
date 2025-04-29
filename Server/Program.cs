using BL;
using BL.Api;
using BL.Services;
using Dal.Api;
using Dal;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
//builder.Services.AddSingleton<IDal, DalManager>();
builder.Services.AddSingleton<IBL, BLManager>();

var app = builder.Build();
app.MapControllers();   

app.Run();


