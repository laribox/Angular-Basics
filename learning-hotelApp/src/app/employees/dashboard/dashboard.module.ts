import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboarduiComponent } from './dashboardui/dashboardui.component';

@NgModule({
  declarations: [DashboardComponent, DashboarduiComponent],
  imports: [CommonModule],
})
export class DashboardModule {}
