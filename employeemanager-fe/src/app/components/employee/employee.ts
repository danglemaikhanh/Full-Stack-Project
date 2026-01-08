import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IEmployee } from '../../models/employee.model';
import { MatIconModule } from '@angular/material/icon';
import { DialogOverviewExampleDialog } from '../navbar/navbar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
})
export class Employee {
  readonly dialog = inject(MatDialog);
  @Input() employee!: IEmployee;

  openUpdateDialog(employee: IEmployee) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {
        mode: 'update',
        employee: employee,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
