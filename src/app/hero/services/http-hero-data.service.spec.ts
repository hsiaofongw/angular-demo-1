import { TestBed } from '@angular/core/testing';

import { HttpHeroDataService } from './http-hero-data.service';

describe('HttpHeroDataService', () => {
  let service: HttpHeroDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpHeroDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
