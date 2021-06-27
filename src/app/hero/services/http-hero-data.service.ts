import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroQueryParameter, HeroQueryResult } from '../interfaces';
import { HeroDataService } from './hero-data.service';

/**
 * 此服务负责以 HTTP 方式向后端请求英雄列表数据，实现了 HeroDataService
 * @todo 待实现
 */
@Injectable({
  providedIn: 'root'
})
export class HttpHeroDataService implements HeroDataService {

  constructor() { }

  /**
   * 以 HTTP 协议向后端请求英雄列表数据，接受分页参数
   * @todo 待实现
   * @param {HeroQueryParameter} parameter - 英雄列表查询分页参数
   * @returns {Observable<HeroQueryResult>} 英雄查询结果
   */
  getHeroes(parameter: HeroQueryParameter): Observable<HeroQueryResult> {
    return null as any;
  }
}
