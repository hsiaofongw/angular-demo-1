import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { Observable, Subject } from 'rxjs';
import { Hero } from './interfaces';

export class HeroDataSource implements DataSource<Hero> {

  heroesSubject = new Subject<Hero[]>();

  constructor(heroesSubject: Subject<Hero[]>) {
    this.heroesSubject = heroesSubject;
  }

  connect(_: CollectionViewer): Observable<readonly Hero[]> {
    return new Observable(observer => {
      this.heroesSubject.subscribe(heroes => {
        window.console.log(heroes);
        observer.next(heroes);
      });
    });
  }

  disconnect(_: CollectionViewer): void {
    this.heroesSubject.unsubscribe();
  }


}
