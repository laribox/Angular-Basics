import { Component, ElementRef, ViewChild } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomServiceService } from '../Services/room-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hotel-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss'],
})
export class RoomsAddComponent {
  message: string = '';
  hidden = true;
  room: RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  };

  @ViewChild('roomsForm', { static: true }) form!: NgForm;
  constructor(private roomService: RoomServiceService) {}

  addRoom(roomsForm: NgForm) {
    this.roomService.addRooms(this.room).subscribe((data) => {
      this.message = 'room added successfully ';
      this.hidden = false;

      //roomsForm.resetForm();
      this.form.resetForm();
    });
  }
}
