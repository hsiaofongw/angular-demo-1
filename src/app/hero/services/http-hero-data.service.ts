import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroQueryParameter, HeroQueryResult } from '../interfaces';
import { HTTPAPIPathConfigService } from './http-api-path-config.service';
import { HeroDataService } from './hero-data.service';
import { catchError, map } from 'rxjs/operators';

/** 向服务器查询英雄列表所需的参数 */
type ServerHeroQueryParameter = {
  /** 偏移量 */
  offset: number;

  /** 限制 */
  limit: number;
};

/** 服务器返回的参数 */
type ServerHeroQueryReturn = {
  /** 英雄表总记录数 */
  totalCounts: number;

  /** 英雄列表 */
  heroes: {

    /** 英雄 ID */
    id: number;

    /** 英雄名称 */
    name: string;
  }[];
}

/**
 * 此服务负责以 HTTP 方式向后端请求英雄列表数据，实现了 HeroDataService
 * @todo 待实现
 */
@Injectable({
  providedIn: 'root'
})
export class HttpHeroDataService implements HeroDataService {

  constructor(
    private apiPathConfigService: HTTPAPIPathConfigService,
    private httpClient: HttpClient,
  ) {}

  /**
   * 以 HTTP 协议向后端请求英雄列表数据，接受分页参数
   * @param {HeroQueryParameter} parameter - 英雄列表查询分页参数
   * @returns {Observable<HeroQueryResult>} 英雄查询结果
   */
  getHeroes(parameter: HeroQueryParameter): Observable<HeroQueryResult> {
    const apiPath = this.apiPathConfigService.getAPIPath();
    const serverHeroQueryParameter: ServerHeroQueryParameter = {
      offset: parameter.offset,
      limit: parameter.limit,
    };
    const httpParams = new HttpParams({
      fromObject: serverHeroQueryParameter,
    });

    const heroQueryResultObservable = this
    .httpClient
    .get<ServerHeroQueryReturn>(apiPath, { params: httpParams })
    .pipe(

      catchError(error => {

        window.console.log(error);
        const emptyServerReturn: ServerHeroQueryReturn = {
          totalCounts: 0, heroes: [],
        };

        return of(emptyServerReturn);
      }),

      map((serverReturn: ServerHeroQueryReturn) => {
        const queryResult: HeroQueryResult = {
          totalCounts: serverReturn.totalCounts,
          heroes: serverReturn.heroes.map(hero => ({
            id: hero.id,
            name: hero.name,
          })),
        };

        return queryResult;
      })
    );

    return heroQueryResultObservable;
  }
}
