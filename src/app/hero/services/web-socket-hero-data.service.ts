import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroQueryParameter, HeroQueryResult } from '../interfaces';
import { HeroDataService } from './hero-data.service';

/**
 * 此服务负责以 WebSocket 协议向后端请求英雄列表数据
 * @todo 待实现
 */
@Injectable({
  providedIn: 'root'
})
export class WebSocketHeroDataService implements HeroDataService {

  constructor() { }

  /**
   * 接受一个分页参数，然后以 WebSocket 协议的方式向后端请求 Hero 列表数据
   * @todo 待实现
   * @param {HeroQueryParameter} parameter - 分页参数
   * @returns {Observable<HeroQueryResult>} 英雄列表查询结果
   */
  getHeroes(parameter: HeroQueryParameter): Observable<HeroQueryResult> {
    return null as any;
  }
}
