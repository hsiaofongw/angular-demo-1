import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroQueryParameter, HeroQueryResult } from '../interfaces';

/**
 * 抽象英雄数据服务，由 Component 依赖，由直属 Module 负责提供相应的实现。
 */
@Injectable({
  providedIn: 'root'
})
export abstract class HeroDataService {

  abstract getHeroes(parameter: HeroQueryParameter): Observable<HeroQueryResult>;

}
