export interface BookingDTO {
  bookingId: string;
  roomId: string;
  gestId: string;
  checkinDate: Date;
  checkoutDate: Date;
  bookingStatus: string;
  bookingAmout: number;
  bookingDate: Date;
  mobileNumber: string;
  guestName: string;
  guestAddress: string;
  guestCity: string;
  guestState: string;
  guestCountry: string;
  guestZipCode: string;
  guestCount: number;
  guestList: [];
}
