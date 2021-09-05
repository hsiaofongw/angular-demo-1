import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticleQueryResult } from '../interface';

@Injectable({ providedIn: 'root' })
export abstract class ArticleService {
  abstract getArticles(): Observable<IArticleQueryResult>;
}
