import { TestBed } from '@angular/core/testing';
import {
  HTTP_API_ENDPOINT_CONFIG,
  HTTP_API_PATH_CONFIG,
  SHOULD_INTERCEPT_HERO_HTTP_REQUEST,
} from '../config';
import { httpAPIBackendConfigFactory } from '../factories/http-api-backend-config-factory';
import { HttpAPIBackendConfigService } from '../services/api-backend-config.service';
import { HTTPAPIPathConfigService } from '../services/http-api-path-config.service';

import { MockHeroResponseInterceptor } from './mock-hero-response.interceptor';

describe('MockHeroResponseInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        MockHeroResponseInterceptor,
        HTTPAPIPathConfigService,
        {
          provide: HTTP_API_PATH_CONFIG,
          useFactory: httpAPIBackendConfigFactory,
          deps: [HttpAPIBackendConfigService],
        },
        {
          provide: HTTP_API_ENDPOINT_CONFIG,
          useValue: HTTP_API_ENDPOINT_CONFIG,
        },
        {
          provide: SHOULD_INTERCEPT_HERO_HTTP_REQUEST,
          useValue: SHOULD_INTERCEPT_HERO_HTTP_REQUEST,
        },
      ],
    })
  );

  it('should be created', () => {
    const interceptor: MockHeroResponseInterceptor = TestBed.inject(
      MockHeroResponseInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
