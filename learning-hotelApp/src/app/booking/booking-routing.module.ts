import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { BookingGuard } from './guards/booking.guard';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  { path: '', component: BookingComponent, canDeactivate: [BookingGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatSnackBarModule],
  exports: [RouterModule, MatSnackBarModule],
})
export class BookingRoutingModule {}
