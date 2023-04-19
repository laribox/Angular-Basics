import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomServiceService } from './Services/room-service.service';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { Observable, Subject, catchError, count, map } from 'rxjs';
import { album } from './albums/album';
import { HttpEventType } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hotel-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  priceFilter = new FormControl(0);
  hotelName: string = 'hilton hotel ';
  color = 'color:red;margin:20px';
  roomCount = 10;
  hide = false;
  rooms: Room = { totalRooms: 10, availableRooms: 10, bookedRooms: 5 };
  result!: RoomList;
  roomList: RoomList[] = [];
  keys: string[] = [
    'roomNumber',
    'roomType',
    'amenities',
    'price',
    'photos',
    'checkinTime',
    'checkoutTime',
    'rating',
  ];

  error$ = new Subject<string>();
  roomsStream$ = this.roomService.getRooms$.pipe(
    catchError((err) => {
      this.error$.next(err.message);
      return [];
    })
  );

  roomsCount$ = this.roomService.getRooms$.pipe(
    map((rooms) => {
      return rooms.length;
    })
  );
  stream = new Observable((observer) => {
    let count: number = 0;
    const interval = setInterval(() => {
      observer.next('user' + count);
      count++;
      if (count > 2) {
        clearInterval(interval);
      }
    }, 5000);
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private roomService: RoomServiceService,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig
  ) {}

  toggle() {
    this.hide = !this.hide;
  }

  body!: object[];
  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url) => {
      this.roomsStream$ = this.roomService.getRooms$.pipe(
        catchError((err) => {
          this.error$.next(err.message);
          return [];
        })
      );
    });
    this.roomService.getAlbums().subscribe((request) => {
      switch (request.type) {
        case HttpEventType.Sent:
          break;
        case HttpEventType.UploadProgress:
          break;
        case HttpEventType.ResponseHeader:
          break;
        case HttpEventType.DownloadProgress:
          break;
        case HttpEventType.Response:
          request.body!.forEach((element: album) => {
            //console.log(element);
          });
          break;
      }
    });
    // this.roomList = this.roomService.getRooms();
    // this.roomService.getRooms$.subscribe((rooms) => {
    //   this.roomList = rooms;
    //   this.keys = Object.keys(this.roomList[0]);
    // });
    this.stream.subscribe((user) => {
      console.log(user);
    });
  }
  deleteRoom() {
    // this.roomService.delete(3).subscribe((rooms) => {
    //   this.roomList = rooms;
    // });
    this.roomsStream$ = this.roomService.delete(3);
  }

  selectedRoom(room: RoomList) {
    this.result = room;
  }
}
