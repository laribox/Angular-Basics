import { Injectable } from '@angular/core';
import { Employees } from '../employees-list/employees';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor() {}

  employeesList: Employees[] = [
    { name: 'bayan', role: 'slaba', shift: '8-12' },
    { name: 'youssra', role: 'kolxi', shift: '24h' },
  ];

  getEmployees() {
    return this.employeesList;
  }
}
