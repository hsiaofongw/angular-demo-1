import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFriendQueryResult } from '../interface';

@Injectable()
export abstract class FriendService {
  abstract getAllFriends(): Observable<IFriendQueryResult>;
}
