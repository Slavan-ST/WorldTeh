import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe, CurrencyPipe } from '@angular/common';

import { EmployeeEditDialog } from '../employee-edit-dialog/employee-edit-dialog';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './employees.html',
  styleUrls: ['./employees.css']
})

export class Employees implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  departmentFilter: string = '';
  nameFilter: string = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  isLoading = false;

  constructor(
    private toastr: ToastrService,
    private employeeService: EmployeeService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.isLoading = true;
    this.employeeService.getEmployees(this.departmentFilter, this.nameFilter)
      .subscribe({
        next: (data: Employee[]) => {
          this.employees = data;
          this.filteredEmployees = [...this.employees];
          this.sortData();
        },
        error: (err) => {
          this.toastr.error(`Ошибка загрузки данных: ${err.message}`, 'Ошибка');
          this.isLoading = false;
        },
        complete: () => this.isLoading = false
      });
  }

  applyFilters(): void {
    this.loadEmployees();
  }

  sortData(column: string = this.sortColumn): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredEmployees.sort((a, b) => {
      const valueA = a[column as keyof Employee];
      const valueB = b[column as keyof Employee];

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  openCreateDialog(): void {
    const modalRef = this.modalService.open(EmployeeEditDialog, {
      size: 'lg',
      centered: true
    });

    modalRef.componentInstance.data = {
      employee: {} as Employee,
      isNew: true
    };

    modalRef.result.then((result: Employee) => {
      if (result) {
        this.isLoading = true;
        this.employeeService.createEmployee(result).subscribe({
          next: (createdEmployee) => {
            this.toastr.success('Сотрудник успешно создан', 'Успех');
            this.loadEmployees(); 
          },
          error: (err) => {
            this.toastr.error(`Ошибка при создании: ${err.message}`, 'Ошибка');
            this.isLoading = false;
          }
        });
      }
    }).catch(() => { });
  }


  openEditDialog(employee: Employee): void {
    const modalRef = this.modalService.open(EmployeeEditDialog, {
      size: 'lg',
      centered: true
    });

    modalRef.componentInstance.data = {
      employee: { ...employee },
      isNew: false
    };

    modalRef.result.then((result: Employee) => {
      if (result) {
        this.isLoading = true;
        this.employeeService.updateEmployee(result.id, result).subscribe({
          next: () => {
            this.toastr.success('Сотрудник успешно обновлен', 'Успех');
            this.loadEmployees(); 
          },
          error: (err) => {
            this.toastr.error(`Ошибка при обновлении: ${err.message}`, 'Ошибка');
            this.isLoading = false;
          }
        });
      }
    }).catch(() => { });
  }

  openDeleteDialog(id: number): void {
    const modalRef = this.modalService.open(ConfirmDialog, {
      centered: true
    });

    modalRef.componentInstance.title = 'Подтверждение удаления';
    modalRef.componentInstance.message = 'Вы уверены, что хотите удалить этого сотрудника?';

    modalRef.result.then((result: any) => {
      if (result) {
        this.isLoading = true;
        this.employeeService.deleteEmployee(id).subscribe({
          next: () => {
            this.toastr.success('Сотрудник удален', 'Успех');
            this.loadEmployees();
          },
          error: (err) => {
            this.toastr.error(`Ошибка: ${err.message}`, 'Ошибка');
            console.error('Delete error:', err);
          },
          complete: () => this.isLoading = false
        });
      }
    }).catch(() => { });
  }
}
