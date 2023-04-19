import { Injectable, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { album } from '../albums/album';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomServiceService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  // headers = new HttpHeaders({ token: 'jikolipom123657', t: 'sefse' }).append(
  //   'tik',
  //   'sok'
  // );
  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(shareReplay(1));

  // getRooms() {
  //   return this.http.get<RoomList[]>('/api/rooms');
  // }
  addRooms(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  getAlbums() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/albums',
      {
        reportProgress: true,
      }
    );
    return this.http.request<album[]>(request);
  }

  delete(id: number) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }
}
