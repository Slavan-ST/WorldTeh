using Microsoft.EntityFrameworkCore;
using WorldTeh.Server.Data;
using WorldTeh.Server.Models;

var builder = WebApplication.CreateBuilder(args);

// Добавление сервисов
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Конфигурация БД
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Конфигурация HTTP pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

// Инициализация БД (опционально - для начальных данных)
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<ApplicationDbContext>();
        context.Database.EnsureCreated();
        
        // Добавление тестовых данных
        if (!context.Employees.Any())
        {
            context.Employees.AddRange(
                new Employee { Department = "IT", FullName = "Иванов Иван", 
                               BirthDate = new DateTime(1985, 1, 15), 
                               EmploymentDate = DateTime.Now.AddYears(-2), Salary = 50000 },
                new Employee { Department = "HR", FullName = "Петрова Мария", 
                               BirthDate = new DateTime(1990, 5, 22), 
                               EmploymentDate = DateTime.Now.AddYears(-1), Salary = 45000 }
            );
            context.SaveChanges();
        }
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "Ошибка инициализации БД");
    }
}

app.Run();