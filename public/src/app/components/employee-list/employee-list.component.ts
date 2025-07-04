import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  standalone: false,
  imports: [
    CommonModule,
    FormsModule,
    EmployeeFormComponent
  ]
})

export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  
  // Фильтры
  departmentFilter: string = '';
  nameFilter: string = '';
  birthDateFilter: string = '';
  employmentDateFilter: string = '';
  salaryFilter: number | null = null;
  
  // Для модальных окон
  showModal: boolean = false;
  selectedEmployee: Employee | null = null;
  employeeToDelete: number | null = null;

  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
        this.filteredEmployees = [...employees];
      },
      error: (err) => console.error('Ошибка загрузки сотрудников', err)
    });
  }

  applyFilters(): void {
    this.filteredEmployees = this.employees.filter(employee => {
      return (
        (!this.departmentFilter || employee.department.toLowerCase().includes(this.departmentFilter.toLowerCase())) &&
        (!this.nameFilter || employee.fullName.toLowerCase().includes(this.nameFilter.toLowerCase())) &&
        (!this.birthDateFilter || this.formatDate(employee.birthDate) === this.birthDateFilter) &&
        (!this.employmentDateFilter || this.formatDate(employee.employmentDate) === this.employmentDateFilter) &&
        (!this.salaryFilter || employee.salary >= this.salaryFilter)
      );
    });
  }

  private formatDate(date: Date | string): string {
    const d = new Date(date);
    return `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
  }

  openCreateModal(): void {
    this.selectedEmployee = null;
    this.showModal = true;
  }

  openEditModal(employee: Employee): void {
    this.selectedEmployee = {...employee};
    this.showModal = true;
  }

  saveEmployee(employee: Employee): void {
    if (employee.id) {
      this.employeeService.updateEmployee(employee.id, employee).subscribe({
        next: () => {
          this.loadEmployees();
          this.closeModal();
        },
        error: (err) => console.error('Ошибка обновления', err)
      });
    } else {
      this.employeeService.createEmployee(employee).subscribe({
        next: () => {
          this.loadEmployees();
          this.closeModal();
        },
        error: (err) => console.error('Ошибка создания', err)
      });
    }
  }

  confirmDelete(id: number): void {
    this.employeeToDelete = id;
    // Здесь можно использовать ng-bootstrap модальное окно
    const modalRef = this.modalService.open(EmployeeFormComponent);
    modalRef.componentInstance.title = 'Подтверждение удаления';
    modalRef.componentInstance.message = 'Вы уверены, что хотите удалить этого сотрудника?';
    modalRef.result.then(
      (result) => {
        if (result === 'confirm') {
          this.deleteEmployee();
        }
      },
      () => {}
    );
  }

  deleteEmployee(): void {
    if (this.employeeToDelete) {
      this.employeeService.deleteEmployee(this.employeeToDelete).subscribe({
        next: () => {
          this.loadEmployees();
          this.employeeToDelete = null;
        },
        error: (err) => console.error('Ошибка удаления', err)
      });
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedEmployee = null;
  }
}