import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticleQueryResult } from '../interface';
import { ApiConfigService } from './api-config.service';
import { ArticleService } from './article.service';

@Injectable()
export class HttpArticleService implements ArticleService {

  constructor(
    private apiConfigService: ApiConfigService,
    private httpClient: HttpClient,
  ) { }

  getArticles(): Observable<IArticleQueryResult> {
    const apiPath = this.apiConfigService.getAllArticlesPath();
    return this.httpClient.get<IArticleQueryResult>(apiPath);
  }
}
