import { Component, inject, signal, ChangeDetectionStrategy, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { EmployeeDialogData } from '../../models/data';

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
    MatDialogModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  readonly employee = signal('');
  readonly dialog = inject(MatDialog);
  openCreateDialog() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {
        mode: 'create',
        employee: { name: '', position: '' }, // Standardwerte
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
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
    MatDialogClose,
  ],
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
