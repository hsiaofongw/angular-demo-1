import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroDataService } from './hero-data.service';
import { Hero, HeroQueryParameter, HeroQueryResult } from './interfaces';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class MockHeroDataService implements HeroDataService {

  constructor() { }

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
