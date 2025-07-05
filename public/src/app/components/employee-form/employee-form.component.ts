import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-form',
  standalone: false,
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  @Input() employee: Employee | null = null;
  formData: Employee = {
    department: '',
    fullName: '',
    birthDate: new Date(),
    employmentDate: new Date(),
    salary: 0
  };

  constructor(
    public activeModal: NgbActiveModal,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    if (this.employee) {
      this.formData = { ...this.employee };
    }
  }

  submit(): void {
    if (this.employee) {
      this.employeeService.updateEmployee(this.employee.id!, this.formData)
        .subscribe(() => this.activeModal.close(true));
    } else {
      this.employeeService.createEmployee(this.formData)
        .subscribe(() => this.activeModal.close(true));
    }
  }
}