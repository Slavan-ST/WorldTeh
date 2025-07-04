using Microsoft.AspNetCore.Mvc;
using WorldTeh.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using WorldTeh.Server.Data;

namespace WorldTeh.Server.Controllers
{
[ApiController]
[Route("api/[controller]")]
public class EmployeesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public EmployeesController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/employees
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees(
        [FromQuery] string? departmentFilter = null,
        [FromQuery] string? nameFilter = null)
    {
        var query = _context.Employees.AsQueryable();

        if (!string.IsNullOrEmpty(departmentFilter))
            query = query.Where(e => e.Department.Contains(departmentFilter));
        
        if (!string.IsNullOrEmpty(nameFilter))
            query = query.Where(e => e.FullName.Contains(nameFilter));

        return await query.ToListAsync();
    }

    // POST: api/employees
    [HttpPost]
    public async Task<ActionResult<Employee>> CreateEmployee(Employee employee)
    {
        _context.Employees.Add(employee);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetEmployee), new { id = employee.Id }, employee);
    }

    // PUT: api/employees/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateEmployee(int id, Employee employee)
    {
        if (id != employee.Id) return BadRequest();
        
        _context.Entry(employee).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    // DELETE: api/employees/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteEmployee(int id)
    {
        var employee = await _context.Employees.FindAsync(id);
        if (employee == null) return NotFound();
        
        _context.Employees.Remove(employee);
        await _context.SaveChangesAsync();
        return NoContent();
    }
    
    // GET: api/employees/5
[HttpGet("{id}")]
public async Task<ActionResult<Employee>> GetEmployee(int id)
{
    var employee = await _context.Employees.FindAsync(id);
    
    if (employee == null)
    {
        return NotFound();
    }
    
    return employee;
}
    
}

}