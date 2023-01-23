using Serilog;

var builder = WebApplication.CreateBuilder(args);
var appName = typeof(Program).Assembly.GetName().Name;

// Add services to the container.

builder.Host.UseSerilog((context, conf) =>
{
    conf
        .WriteTo.Seq(context.Configuration["SeqServerUrl"]!, Serilog.Events.LogEventLevel.Debug)
        .Enrich.FromLogContext()
        .Enrich.WithMachineName()
        .Enrich.WithEnvironmentUserName();
});

builder.Services.AddControllers();
builder.Services.AddOpenApiDocument(x =>
{
    x.Title = appName;
    x.Version = "1.0.0";
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseOpenApi();
    app.UseSwaggerUi3();

    app.UseCors(conf =>
    {
        conf
            .AllowAnyHeader()
            .AllowAnyMethod()
            .WithOrigins("https://localhost:4200");
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();