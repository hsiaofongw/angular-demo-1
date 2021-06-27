import { TestBed } from '@angular/core/testing';

import { MockHeroResponseInterceptor } from './mock-hero-response.interceptor';

describe('MockHeroResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MockHeroResponseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MockHeroResponseInterceptor = TestBed.inject(MockHeroResponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
