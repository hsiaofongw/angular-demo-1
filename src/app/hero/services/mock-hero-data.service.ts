import { Injectable } from '@angular/core';
import { Hero, HeroQueryParameter, HeroQueryResult } from '../interfaces';
import * as faker from 'faker';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockHeroDataService {
  constructor() {}

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
