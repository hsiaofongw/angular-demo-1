import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroQueryParameter, HeroQueryResult } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export abstract class HeroDataService {

  abstract getHeroes(parameter: HeroQueryParameter): Observable<HeroQueryResult>;

}
