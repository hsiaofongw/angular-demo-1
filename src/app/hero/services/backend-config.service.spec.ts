import { TestBed } from '@angular/core/testing';
import { BACKEND_CONFIG } from '../config';

import { BackendConfigService } from './backend-config.service';

describe('BackendConfigService', () => {
  let service: BackendConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: BACKEND_CONFIG, useValue: BACKEND_CONFIG,
      }],
    });

    service = TestBed.inject(BackendConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
