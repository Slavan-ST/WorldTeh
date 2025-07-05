import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  filters = {
    department: '',
    fullName: '',
    birthDate: null as Date | null,
    employmentDate: null as Date | null,
    salary: ''
  };
  sortColumn = '';
  sortDirection = 'asc';

  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filteredEmployees = this.employees.filter(employee => {
      return (
        (!this.filters.department || employee.department.toLowerCase().includes(this.filters.department.toLowerCase())) &&
        (!this.filters.fullName || employee.fullName.toLowerCase().includes(this.filters.fullName.toLowerCase())) &&
        (!this.filters.birthDate || new Date(employee.birthDate).toDateString() === this.filters.birthDate.toDateString()) &&
        (!this.filters.employmentDate || new Date(employee.employmentDate).toDateString() === this.filters.employmentDate.toDateString()) &&
        (!this.filters.salary || employee.salary >= Number(this.filters.salary))
    });
  }

  sort(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredEmployees.sort((a, b) => {
      const valueA = (a as any)[column];
      const valueB = (b as any)[column];

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  openEmployeeForm(employee?: Employee): void {
    const modalRef = this.modalService.open(EmployeeFormComponent);
    modalRef.componentInstance.employee = employee ? { ...employee } : null;

    modalRef.result.then((result) => {
      if (result) {
        this.loadEmployees();
      }
    }).catch(() => {});
  }

  confirmDelete(employee: Employee): void {
    if (confirm(`Удалить сотрудника ${employee.fullName}?`)) {
      this.employeeService.deleteEmployee(employee.id!).subscribe(() => {
        this.loadEmployees();
      });
    }
  }
}