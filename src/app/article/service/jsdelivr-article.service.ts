import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IArticleQueryResult } from '../interface';

type ArticlesResponse = {
  name: string;
  file: string;
  date: string;
}[];

@Injectable()
export class JsdelivrArticleService {

  constructor(
    private http: HttpClient,
  ) { }

  getArticles(): Observable<IArticleQueryResult> {
    const apiPath = 'https://cdn.jsdelivr.net/gh/hsiaofongw/blog-data-nextjs/data/articles.json';
    const response = this.http.get<ArticlesResponse>(apiPath);

    return response.pipe(
      map((data: ArticlesResponse) => {
        const result: IArticleQueryResult = {
          offset: 0,
          totalCounts: data.length,
          results: data.map(x => ({ title: x.name, url: x.file, date: x.date})),
        };

        return result;
      }),
    );
  }
}
