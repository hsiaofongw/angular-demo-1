import { TestBed } from '@angular/core/testing';

import { MockHeroDataService } from './mock-hero-data.service';

describe('MockHeroDataService', () => {
  let service: MockHeroDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockHeroDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
