import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IEmployee } from '../../models/employee.model';
import { MatIconModule } from '@angular/material/icon';
import { DialogOverviewExampleDialog } from '../navbar/navbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.scss'],
})
export class Employee {
  readonly dialog = inject(MatDialog);
  private employeeService = inject(EmployeeService);
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
        const mode: 'update' = 'update';
        if (mode === 'update' && employee.id != null) {
          this.employeeService.updateEmployee(employee.id, result).subscribe({
            next: (updated) => console.log('Employee updated', updated),
            error: (err) => console.error('Update failed', err),
          });
        }
      }
    });
  }

  deleteEmployee(id: number) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {
        mode: 'delete',
        employee: this.employee.id ? this.employee : undefined,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const mode: 'delete' = 'delete';
        if (mode === 'delete') {
          this.employeeService.deleteEmployee(id).subscribe({
            next: () => console.log('Employee deleted'),
            error: (err) => console.error('Delete failed', err),
          });
        }
      }
    });
  }
}
