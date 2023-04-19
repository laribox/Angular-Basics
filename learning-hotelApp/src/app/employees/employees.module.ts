import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

@NgModule({
  declarations: [EmployeesComponent, EmployeesListComponent],
  imports: [CommonModule, EmployeesRoutingModule],
})
export class EmployeesModule {}
