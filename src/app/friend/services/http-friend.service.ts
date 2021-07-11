import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFriendQueryResult } from '../interface';
import { ApiConfigService } from './api-config.service';
import { FriendService } from './friend.service';

@Injectable()
export class HttpFriendService implements FriendService {
  constructor(
    private apiConfigService: ApiConfigService,
    private httpClient: HttpClient
  ) {}

  getAllFriends(): Observable<IFriendQueryResult> {
    const apiPath = this.apiConfigService.getAllFriendsPath();
    return this.httpClient.get<IFriendQueryResult>(apiPath);
  }
}
