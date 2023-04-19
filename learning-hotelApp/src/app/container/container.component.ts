import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';
import { RoomServiceService } from '../rooms/Services/room-service.service';

@Component({
  selector: 'hotel-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [RoomServiceService],
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(RoomsComponent) room!: RoomsComponent;

  ngAfterContentInit(): void {
    //console.log(this.room);
  }
}
