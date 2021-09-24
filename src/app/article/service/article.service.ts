import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleListQueryParameter, ArticleListQueryResult } from '../interface';

@Injectable({ providedIn: 'root' })
export abstract class ArticleService {
  abstract getArticles(parameter: ArticleListQueryParameter): Observable<ArticleListQueryResult>;
}
