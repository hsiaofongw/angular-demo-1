import { TestBed } from '@angular/core/testing';
import {
  BACKEND_CONFIG,
  HTTP_API_ENDPOINT_CONFIG,
  HTTP_API_PATH_CONFIG,
} from '../config';
import { httpAPIBackendConfigFactory } from '../factories/http-api-backend-config-factory';
import { HttpAPIBackendConfigService } from './api-backend-config.service';
import { BackendConfigService } from './backend-config.service';
import { HTTPAPIPathConfigService } from './http-api-path-config.service';
import { HttpHeroDataService } from './http-hero-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HttpHeroDataService', () => {
  let service: HttpHeroDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_API_PATH_CONFIG,
          useFactory: httpAPIBackendConfigFactory,
          deps: [HttpAPIBackendConfigService],
        },
        HttpAPIBackendConfigService,
        HTTPAPIPathConfigService,
        BackendConfigService,
        { provide: BACKEND_CONFIG, useValue: BACKEND_CONFIG },
        {
          provide: HTTP_API_ENDPOINT_CONFIG,
          useValue: HTTP_API_ENDPOINT_CONFIG,
        },
      ],
    });
    service = TestBed.inject(HttpHeroDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
