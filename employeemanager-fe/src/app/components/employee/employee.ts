import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { IEmployee } from '../../models/employee.interface';

@Component({
  selector: 'app-employee',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
})

export class Employee {
  
  @Input() employee!: IEmployee

}
