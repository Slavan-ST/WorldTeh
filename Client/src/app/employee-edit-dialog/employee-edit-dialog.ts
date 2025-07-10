import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-edit-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-edit-dialog.html',
  styleUrls: ['./employee-edit-dialog.css']
})
export class EmployeeEditDialog {
  @Input() set data(value: { employee: Employee | null; isNew: boolean }) {
    this._isNew = value.isNew;
    this.initializeForm(value.employee);
  }

  employeeForm: FormGroup;
  private _isNew: boolean = false; // Инициализация

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {
    this.employeeForm = this.fb.group({
      id: [0],
      department: ['', Validators.required],
      fullName: ['', Validators.required],
      birthDate: [null, Validators.required],
      employmentDate: [null, Validators.required],
      salary: [0, [Validators.required, Validators.min(0)]]
    });
  }

  get isNew(): boolean {
    return this._isNew;
  }

  private initializeForm(employee: Employee | null): void {
    this.employeeForm.patchValue({
      id: employee?.id || 0,
      department: employee?.department || '',
      fullName: employee?.fullName || '',
      birthDate: this.formatDate(employee?.birthDate),
      employmentDate: this.formatDate(employee?.employmentDate),
      salary: employee?.salary || 0
    });
  }

  private formatDate(dateString?: string): string | null {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }

  onSave(): void {
    if (this.employeeForm.valid) {
      const formValue = this.employeeForm.value;
      const employee: Employee = {
        ...formValue,
        birthDate: new Date(formValue.birthDate).toISOString(),
        employmentDate: new Date(formValue.employmentDate).toISOString()
      };
      this.activeModal.close(employee);
    }
  }

  onCancel(): void {
    this.activeModal.dismiss('cancel');
  }
}
