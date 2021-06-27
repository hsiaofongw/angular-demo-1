import { TestBed } from '@angular/core/testing';
import { HTTP_API_ENDPOINT_CONFIG, HTTP_API_PATH_CONFIG } from '../config';
import { httpAPIBackendConfigFactory } from '../factories/http-api-backend-config-factory';
import { HttpAPIBackendConfigService } from './api-backend-config.service';

import { HTTPAPIPathConfigService } from './http-api-path-config.service';

describe('ApiPathConfigService', () => {
  let service: HTTPAPIPathConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HTTP_API_PATH_CONFIG,
          useFactory: httpAPIBackendConfigFactory,
          deps: [HttpAPIBackendConfigService],
        },
        { provide: HttpAPIBackendConfigService, useClass: HttpAPIBackendConfigService, },
        { provide: HTTP_API_ENDPOINT_CONFIG, useValue: HTTP_API_ENDPOINT_CONFIG, },
      ]
    });
    service = TestBed.inject(HTTPAPIPathConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
