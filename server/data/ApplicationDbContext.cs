using Microsoft.EntityFrameworkCore;
using WorldTeh.Server.Models;

namespace WorldTeh.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Конфигурация модели (при необходимости)
            modelBuilder.Entity<Employee>(entity =>
            {
                entity.Property(e => e.Salary)
                    .HasColumnType("decimal(18,2)");
                
                entity.Property(e => e.Department)
                    .HasMaxLength(100);
            });
        }
    }
}