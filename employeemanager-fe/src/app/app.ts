import { Component, signal } from '@angular/core';
import { Employee } from './employee/employee';

@Component({
  selector: 'app-root',
  imports: [Employee],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('employeemanager-fe');
}
