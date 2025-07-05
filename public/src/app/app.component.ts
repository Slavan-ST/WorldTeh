import { Component } from '@angular/core';

@Component({
  selector: 'app-root',          // Селектор для HTML
  templateUrl: './app.component.html',  // Шаблон (HTML)
  styleUrls: ['./app.component.css']    // Стили (CSS)
})
export class AppComponent {
  title = 'Моё приложение';  // Пример переменной
}