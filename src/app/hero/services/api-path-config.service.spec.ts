import { TestBed } from '@angular/core/testing';

import { APIPathConfigService } from './api-path-config.service';

describe('ApiPathConfigService', () => {
  let service: APIPathConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIPathConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
