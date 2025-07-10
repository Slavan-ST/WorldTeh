using System.ComponentModel.DataAnnotations;

namespace WorldTeh.Server.Models
{
public class Employee
{
    public int Id { get; set; }
    
    [Required]
    public string Department { get; set; } = string.Empty;
    
    [Required]
    public string FullName { get; set; } = string.Empty;
    
    [Required]
    public DateTime BirthDate { get; set; }
    
    [Required]
    public DateTime EmploymentDate { get; set; }
    
    [Required]
    public decimal Salary { get; set; }
}
}