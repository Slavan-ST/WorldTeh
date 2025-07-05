import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { routes } from './app.routes'; // Убедитесь, что пути корректны

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
    RouterModule.forRoot(routes) // Подключение роутинга
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }