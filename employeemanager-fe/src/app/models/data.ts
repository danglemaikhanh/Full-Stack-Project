import { IEmployee } from './employee.model';

export type DialogMode = 'create' | 'update';

export interface EmployeeDialogData {
  mode: DialogMode;
  employee?: IEmployee;
}
