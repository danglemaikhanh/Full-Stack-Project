import { Component, inject, signal, ChangeDetectionStrategy, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { EmployeeDialogData } from '../../models/data';
import { IEmployee } from '../../models/employee.model';

@Component({
  selector: 'app-navbar',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    MatDialogModule,
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  readonly employee = signal('');
  readonly dialog = inject(MatDialog);
  private employeeService = inject(EmployeeService);
  public employees: IEmployee[] = [];
 
  openCreateDialog() {
    const mode: 'create' = 'create';
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {
        mode: 'create',
        employee: {
          name: '',
          email: '',
          jobTitle: '',
          phone: '',
        }, // Standardwerte
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (mode === 'create') {
          this.employeeService.addEmployee(result).subscribe({
            next: (saved) => console.log('Employee created', saved),
            error: (err) => console.error('Create failed', err),
          });
        }
      }
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
  ],
  styleUrls: ['./navbar.scss'],
})
export class DialogOverviewExampleDialog {
  dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
  data = inject<EmployeeDialogData>(MAT_DIALOG_DATA);
  employee = { ...this.data.employee };

  save() {
    this.dialogRef.close(this.employee);
  }
  cancel() {
    this.dialogRef.close();
  }
}
