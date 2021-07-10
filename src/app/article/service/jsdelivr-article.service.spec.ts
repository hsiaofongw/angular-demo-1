import { TestBed } from '@angular/core/testing';

import { JsdelivrArticleService } from './jsdelivr-article.service';

describe('JsdelivrArticleService', () => {
  let service: JsdelivrArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsdelivrArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
