using Microsoft.AspNetCore.Mvc;
using WorldTeh.Server.Models;
using Microsoft.EntityFrameworkCore;
using WorldTeh.Server.Data;

namespace WorldTeh.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<EmployeesController> _logger;

        public EmployeesController(ApplicationDbContext context, ILogger<EmployeesController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/employees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees(
            [FromQuery] string? departmentFilter = null,
            [FromQuery] string? nameFilter = null)
        {
            try
            {
                var query = _context.Employees.AsQueryable();

                // Применяем фильтры, если они указаны
                if (!string.IsNullOrEmpty(departmentFilter))
                {
                    query = query.Where(e => e.Department.Contains(departmentFilter));
                }

                if (!string.IsNullOrEmpty(nameFilter))
                {
                    query = query.Where(e => e.FullName.Contains(nameFilter));
                }

                var employees = await query.ToListAsync();
                _logger.LogInformation($"Returned {employees.Count} employees");

                return Ok(employees);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting employees");
                return StatusCode(500, "Internal server error");
            }
        }

        // Остальные методы остаются без изменений
        [HttpPost]
        public async Task<ActionResult<Employee>> CreateEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEmployee), new { id = employee.Id }, employee);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(int id, Employee employee)
        {
            if (id != employee.Id) return BadRequest();
            _context.Entry(employee).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null) return NotFound();
            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null) return NotFound();
            return employee;
        }
    }
}