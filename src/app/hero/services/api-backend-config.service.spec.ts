import { TestBed } from '@angular/core/testing';

import { HttpAPIBackendConfigService } from './api-backend-config.service';

describe('ApiBackendConfigService', () => {
  let service: HttpAPIBackendConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAPIBackendConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
