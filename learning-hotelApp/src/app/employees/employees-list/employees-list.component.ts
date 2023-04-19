import { Component, Input, OnInit } from '@angular/core';
import { Employees } from './employees';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'hotel-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
  //@Input() employees: Employees[] = [];

  employeesList: Employees[] = [];
  constructor(private employeesService: EmployeesService) {}
  ngOnInit(): void {
    this.employeesList = this.employeesService.getEmployees();
  }
}
