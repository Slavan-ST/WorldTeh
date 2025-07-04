import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Employee {
  id: number;
  department: string;
  fullName: string;
  birthDate: Date;
  hireDate: Date;
  salary: number;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  filters = {
    department: '',
    fullName: '',
    birthDateFrom: '',
    birthDateTo: '',
    salaryMin: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    const params = { ...this.filters };
    this.http.get<Employee[]>('/api/employees/filtered', { params }).subscribe(data => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number) {
    if (confirm('Вы уверены, что хотите удалить этого сотрудника?')) {
      this.http.delete(`/api/employees/${id}`).subscribe(() => {
        this.loadEmployees();
      });
    }
  }
}