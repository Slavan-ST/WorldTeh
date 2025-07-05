import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutCompanyComponent },
  { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }