import { TestBed } from '@angular/core/testing';

import { UsernamePasswordLoginService } from './username-password-login.service';

describe('UsernamePasswordLoginService', () => {
  let service: UsernamePasswordLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernamePasswordLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
