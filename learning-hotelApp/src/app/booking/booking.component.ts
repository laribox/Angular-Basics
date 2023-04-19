import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'hotel-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private form: FormBuilder, private router: ActivatedRoute) {}
  ngOnInit(): void {
    let roomId = this.router.snapshot.params['roomId'];
    this.bookingForm = this.form.group({
      bookingId: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.minLength(1), Validators.required],
      }), //or use ['']
      roomId: new FormControl(roomId),
      gestId: new FormControl(''),
      checkinDate: new FormControl(''),
      checkoutDate: new FormControl(''),
      bookingStatus: new FormControl(''),
      bookingAmout: new FormControl(''),
      bookingDate: new FormControl(''),
      mobileNumber: new FormControl(''),
      guestName: new FormControl(''),
      address: this.form.group({
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl(''),
        zipCode: new FormControl(''),
      }),
      guests: this.form.array([
        this.form.group({
          name: [''],
          age: [''],
        }),
      ]),
      guestCount: new FormControl(''),
      guestList: new FormControl(''),
    });

    this.getBookingData();
  }

  addGuest() {
    //check if guests exists before pushing new guest
    if (!this.guests) {
      this.bookingForm.addControl(
        'guests',
        new FormArray([
          this.form.group({
            name: [''],
            age: [''],
          }),
        ])
      );
    } else {
      this.guests.push(
        this.form.group({
          name: [''],
          age: [''],
        })
      );
    }
  }

  getBookingData() {
    // this.bookingForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // });
    console.log(this.bookingForm.getRawValue());
  }
  removeGuests() {
    this.bookingForm.removeControl('guests');
  }
  removeGuest(index: number) {
    this.guests.removeAt(index);
  }
  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }
  removePassport() {
    this.bookingForm.removeControl('passport');
  }
}
