import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  standalone: false,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EmployeeFormComponent {
  @Input() employee: any;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

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

  ngOnChanges() {
    if (this.employee) {
      this.employeeForm.patchValue(this.employee);
    }
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.save.emit(this.employeeForm.value);
    }
  }
}