import { TestBed } from '@angular/core/testing';

import { ClientUniqueMarkService } from './client-unique-mark.service';

describe('ClientUniqueMarkService', () => {
  let service: ClientUniqueMarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientUniqueMarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
