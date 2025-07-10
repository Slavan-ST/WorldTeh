import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { About } from './about/about';
import { Employees } from './employees/employees';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'employees', component: Employees },
  { path: '**', redirectTo: '/about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
