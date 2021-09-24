import { TestBed } from '@angular/core/testing';

import { LoggerBuilder } from './logger-builder.service';

describe('LoggerBuilderService', () => {
  let service: LoggerBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerBuilder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
