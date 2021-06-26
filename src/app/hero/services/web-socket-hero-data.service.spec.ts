import { TestBed } from '@angular/core/testing';

import { WebSocketHeroDataService } from './web-socket-hero-data.service';

describe('WebSocketHeroDataService', () => {
  let service: WebSocketHeroDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketHeroDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
