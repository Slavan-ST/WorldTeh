import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about';
import { EmployeesComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }