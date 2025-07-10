
import { Routes } from '@angular/router';
import { About } from './about/about';
import { Employees } from './employees/employees';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'employees', component: Employees },
  { path: '**', redirectTo: '/about' }
];
