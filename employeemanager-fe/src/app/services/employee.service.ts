import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/employee.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private http = inject(HttpClient);
  getAllEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`api/all`)
  }

  getEmployeeById(id: number): Observable<IEmployee> {
    return this.http.get<IEmployee>(`api/${id}`)
  }

  addEmployee(employee: IEmployee): Observable<IEmployee>{
    return this.http.post<IEmployee>(`api/add`, employee)
  }

  updateEmployee(id: number, employee: IEmployee): Observable<IEmployee>{
    return this.http.put<IEmployee>(`api/update/${id}`, employee)
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`api/delete/${id}`)
  }
}
