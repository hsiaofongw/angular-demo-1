import { TestBed } from '@angular/core/testing';

import { LogRemoteSenderService } from './log-remote-sender.service';

describe('LogRemoteSenderService', () => {
  let service: LogRemoteSenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogRemoteSenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
