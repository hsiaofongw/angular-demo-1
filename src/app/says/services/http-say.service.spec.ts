import { TestBed } from '@angular/core/testing';

import { HttpSayService } from './http-say.service';

describe('HttpSayService', () => {
  let service: HttpSayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
