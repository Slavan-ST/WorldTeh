import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeEditDialog} from '../employee-edit-dialog/employee-edit-dialog';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-employees',
  standalone: false,
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

  displayedColumns: string[] = [
    'department',
    'fullName',
    'birthDate',
    'employmentDate',
    'salary',
    'actions'
  ];

  isLoading = false

  constructor(
    private snackBar: MatSnackBar,
    private employeeService: EmployeeService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees(this.departmentFilter, this.nameFilter)
      .subscribe((data: Employee[]) => {
        this.employees = data;
        this.filteredEmployees = [...this.employees];
        this.sortData();
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
    const dialogRef = this.dialog.open(EmployeeEditDialog, {
      width: '600px',
      data: { employee: null },
      disableClose: true // Чтобы нельзя было закрыть кликом вне диалога
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isLoading = true;
        this.employeeService.createEmployee(result).subscribe({
          next: () => {
            this.snackBar.open('Сотрудник успешно добавлен', 'Закрыть', { duration: 3000 });
            this.loadEmployees();
          },
          error: (err) => {
            this.snackBar.open(`Ошибка: ${err.message}`, 'Закрыть');
            console.error('Create error:', err);
          },
          complete: () => this.isLoading = false
        });
      }
    });
  }

  openEditDialog(employee?: Employee): void {
    const dialogRef = this.dialog.open(EmployeeEditDialog, {
      width: '600px',
      data: { employee: employee || null }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Обработка сохраненных данных
        if (result.id) {
          this.employeeService.updateEmployee(result.id, result).subscribe(() => {
            this.loadEmployees();
          });
        } else {
          this.employeeService.createEmployee(result).subscribe(() => {
            this.loadEmployees();
          });
        }
      }
    });
  }

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '400px',
      data: {
        title: 'Подтверждение удаления',
        message: 'Вы уверены, что хотите удалить этого сотрудника?'
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.employeeService.deleteEmployee(id).subscribe(() => {
          console.log('Сотрудник удален');
          this.loadEmployees();
        });
      }
    });
  }
}




