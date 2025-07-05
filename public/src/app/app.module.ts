import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutCompanyComponent,
    EmployeesComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

