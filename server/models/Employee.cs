public class Employee
{
    public int Id { get; set; }
    
    [Required]
    public string Department { get; set; }
    
    [Required]
    public string FullName { get; set; }
    
    [Required]
    public DateTime BirthDate { get; set; }
    
    [Required]
    public DateTime EmploymentDate { get; set; }
    
    [Required]
    [Range(0, double.MaxValue)]
    public decimal Salary { get; set; }
}