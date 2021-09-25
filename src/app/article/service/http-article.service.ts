import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { APIConfig } from 'src/app/shared-modules/config/interfaces';
import { LoggerBuilder } from 'src/app/shared-modules/logging/services/logger-builder.service';
import { ArticleModule } from '../article.module';
import { API_CONFIG } from '../config';
import {
  ArticleListQueryParameter,
  ArticleListQueryResult,
} from '../interface';
import { ArticleService } from './article.service';

/** 基于 HTTP 协议向后端请求文章列表的服务 */
@Injectable({ providedIn: 'root' })
export class HttpArticleService implements ArticleService {
  /** 实例化一个日志记录器 */
  _logger = this.loggerBuilder.makeLogger({
    moduleId: ArticleModule.name,
    classId: HttpArticleService.name,
  });

  constructor(
    private httpClient: HttpClient,
    @Inject(API_CONFIG) private apiConfig: APIConfig,
    private loggerBuilder: LoggerBuilder
  ) {}

  /** 向后端请求文章列表 */
  getArticles(
    parameter: ArticleListQueryParameter
  ): Observable<ArticleListQueryResult> {
    this._logger.info('开始请求文章列表');

    const apiPath = this.apiConfig.server + this.apiConfig.restfulPath;
    this._logger.info({ apiPath });

    const serverReturn$ = this.httpClient.get<ArticleListQueryResult>(apiPath, {
      params: new HttpParams({ fromObject: parameter as any }),
    });

    return serverReturn$.pipe(
      tap((serverReturn) => {
        const dataLength = serverReturn.data.length;
        const totalLength = serverReturn.total;
        this._logger.info({ dataLength, totalLength });
      })
    );
  }
}
