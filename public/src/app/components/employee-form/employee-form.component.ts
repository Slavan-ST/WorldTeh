import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../models/employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  @Input() employee: Employee | null = null;
  @Output() save = new EventEmitter<Employee>();
  @Output() close = new EventEmitter<void>();

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      department: ['', Validators.required],
      fullName: ['', Validators.required],
      birthDate: ['', Validators.required],
      employmentDate: ['', Validators.required],
      salary: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnChanges(): void {
    if (this.employee) {
      this.employeeForm.patchValue(this.employee);
    }
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const employeeData = {
        ...this.employee,
        ...this.employeeForm.value
      };
      this.save.emit(employeeData);
    }
  }

  onClose(): void {
    this.close.emit();
  }
}