import { IEmployee } from './employee.model';

export type DialogMode = 'create' | 'update' | 'delete';

export interface EmployeeDialogData {
  mode: DialogMode;
  employee?: IEmployee;
}
