import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // Должен совпадать с index.html
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet 
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App { }
