import { Component, signal, OnInit, inject } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Employee } from './components/employee/employee';
import { EmployeeService } from './services/employee.service';
import { IEmployee } from './models/employee.interface';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [Navbar, Employee],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('employeemanager-fe');

  public employees!: IEmployee[]

  private employeeService = inject(EmployeeService);

  ngOnInit(): void {
    this.loadEmployees()
  }

  loadEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data
        console.log("Alle Mitarbeiter geladen: ", this.employees)
      },
      error: (err) => {
        console.log("Fehler beim Laden!", err)
      }
    })
  }

  loadEmployeebyId(id: number) {
    this.employeeService.getEmployeeById(id).forEach(employee => {
      console.log(`Mitarbeiter mit dem ${id}: `, employee)
    })
  }
}
