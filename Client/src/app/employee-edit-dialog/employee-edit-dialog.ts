import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../models/employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-employee-edit-dialog',
  standalone: false,
  templateUrl: './employee-edit-dialog.html',
  styleUrls: ['./employee-edit-dialog.css']
})
export class EmployeeEditDialog {
  employeeForm: FormGroup;
  isNew: boolean;

  constructor(
    public dialogRef: MatDialogRef<EmployeeEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { employee: Employee },
    private fb: FormBuilder
  ) {
    this.isNew = !data.employee?.id;

    this.employeeForm = this.fb.group({
      id: [data.employee?.id || 0],
      department: [data.employee?.department || '', Validators.required],
      fullName: [data.employee?.fullName || '', Validators.required],
      birthDate: [data.employee?.birthDate ? new Date(data.employee.birthDate) : null, Validators.required],
      employmentDate: [data.employee?.employmentDate ? new Date(data.employee.employmentDate) : null, Validators.required],
      salary: [data.employee?.salary || 0, [Validators.required, Validators.min(0)]]
    });
  }

  onSave(): void {
    if (this.employeeForm.valid) {
      const formValue = this.employeeForm.value;
      const employee: Employee = {
        ...formValue,
        birthDate: formValue.birthDate.toISOString(),
        employmentDate: formValue.employmentDate.toISOString()
      };
      this.dialogRef.close(employee);
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

  updateDate(field: string, event: MatDatepickerInputEvent<Date>): void {
    this.employeeForm.get(field)?.setValue(event.value);
  }
}
