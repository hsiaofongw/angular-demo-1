import { Injectable } from '@angular/core';
import { Hero, HeroQueryParameter, HeroQueryResult } from '../interfaces';
import * as faker from 'faker';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

/** 此服务负责产生 Mock 的英雄数据列表 */
@Injectable({
  providedIn: 'root',
})
export class MockHeroDataService {
  constructor() {
    window.console.log('当前使用 Mock 后端');
  }

  /**
   * 根据 HeroQueryParameter 参数产生符合要求的 Mock 的英雄数据列表
   * @param {HeroQueryParameter} parameter - 分页参数
   * @returns {Observable<HeroQueryResult>} 英雄列表查询结果
   */
  getHeroes(parameter: HeroQueryParameter): Observable<HeroQueryResult> {
    const offset = parameter.offset;
    const limit = parameter.limit;
    const mockedHeroes: Hero[] = [];
    for (let i = 0; i < limit; i++) {
      mockedHeroes.push({
        id: offset + i,
        name: faker.name.findName(),
      });
    }

    const mockedTotalCounts = 1000;
    return of({
      totalCounts: mockedTotalCounts,
      heroes: mockedHeroes,
    });
  }
}
