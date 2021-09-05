import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConfig } from 'src/app/shared-modules/config/interfaces';
import { API_CONFIG } from '../config';
import { IArticleQueryResult } from '../interface';
import { ArticleService } from './article.service';

@Injectable({ providedIn: 'root' })
export class HttpArticleService implements ArticleService {
  constructor(
    private httpClient: HttpClient,
    @Inject(API_CONFIG) private apiConfig: APIConfig,
  ) {}

  getArticles(): Observable<IArticleQueryResult> {
    return null as any;
  }
}
