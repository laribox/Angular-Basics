import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comments } from './comment.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get<comments[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }
}
