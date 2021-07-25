import { TestBed } from '@angular/core/testing';

import { ImageCachingInterceptor } from './image-caching.interceptor';

describe('ImageCachingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ImageCachingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ImageCachingInterceptor = TestBed.inject(ImageCachingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
