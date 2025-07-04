import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
   import { EmployeeListComponent } from './components/employee-list/employee-list.component';
   
const routes: Routes = [
  { 
    path: 'about', 
    component: AboutComponent,
    title: 'О компании'  // Добавляем title для страницы
  },
  { 
    path: 'employees', 
    component: EmployeesComponent,
    title: 'Сотрудники'  // Добавляем title для страницы
  },
  { 
    path: '', 
    redirectTo: '/about', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: '/about'  // Перенаправление для несуществующих путей
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',  // Восстановление позиции скролла
      anchorScrolling: 'enabled'            // Поддержка якорных ссылок
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }