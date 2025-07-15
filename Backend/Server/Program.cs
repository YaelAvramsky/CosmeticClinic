using BL;
using BL.Api;
using BL.Services;
using Dal.Api;
using Dal;
using Microsoft.AspNetCore.Http;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});



builder.Services.AddControllers();
//builder.Services.AddSingleton<IDal, DalManager>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IBL, BLManager>();

var app = builder.Build();





app.UseCors("AllowAllOrigins");
app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});





if (app.Environment.IsDevelopment())
{
 app.UseSwagger();
app.UseSwaggerUI();
}




app.MapControllers();   

app.Run();
