import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Components
import { App } from './app';
import { About} from './about/about';
import { Employees } from './employees/employees';
import { EmployeeEditDialog } from './employee-edit-dialog/employee-edit-dialog';
import { ConfirmDialog } from './confirm-dialog/confirm-dialog';

// Routing
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    App,
    About,
    Employees,
    EmployeeEditDialog,
    ConfirmDialog
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material Modules
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [
    // Глобальные сервисы можно добавить здесь
  ],
  bootstrap: [App]
})
export class AppModule { }
