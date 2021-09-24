import { TestBed } from '@angular/core/testing';

import { LogPersistentService } from './log-persistent.service';

describe('LogPersistentService', () => {
  let service: LogPersistentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogPersistentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
