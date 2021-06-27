import { TestBed } from '@angular/core/testing';

import { HTTPAPIPathConfigService } from './http-api-path-config.service';

describe('ApiPathConfigService', () => {
  let service: HTTPAPIPathConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HTTPAPIPathConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
