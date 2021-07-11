import { TestBed } from '@angular/core/testing';

import { HttpFriendService } from './http-friend.service';

describe('HttpFriendService', () => {
  let service: HttpFriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpFriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
