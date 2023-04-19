import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Resolve,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CommentsComponent } from './comments.component';
import { CommentsService } from './comments.service';
import { comments } from './comment.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsGuard {
  constructor(private commentsService: CommentsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): comments[] | Observable<comments[]> | Promise<comments[]> {
    return this.commentsService.getComments();
  }
}
