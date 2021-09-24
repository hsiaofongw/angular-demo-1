import { TestBed } from '@angular/core/testing';

import { LogBroadcaster } from './log-broadcaster.service';

describe('LogBroadcasterService', () => {
  let service: LogBroadcaster;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogBroadcaster);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
