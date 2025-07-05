import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" routerLink="/">Управление сотрудниками</a>
        <div class="navbar-nav">
          <a class="nav-link" routerLink="/about">О компании</a>
          <a class="nav-link" routerLink="/employees">Сотрудники</a>
        </div>
      </div>
    </nav>
    <div class="container mt-4">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}