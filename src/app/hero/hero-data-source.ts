import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { Observable, Subject } from 'rxjs';
import { Hero } from './interfaces';

/** 实现了 CDK 组件库的 DataSource 类，它的作用是连结表格和数据 */
export class HeroDataSource implements DataSource<Hero> {

  heroesSubject = new Subject<Hero[]>();

  constructor(heroesSubject: Subject<Hero[]>) {
    this.heroesSubject = heroesSubject;
  }

  connect(_: CollectionViewer): Observable<readonly Hero[]> {
    return new Observable(observer => {
      this.heroesSubject.subscribe(heroes => {
        observer.next(heroes);
      });
    });
  }

  disconnect(_: CollectionViewer): void {
    this.heroesSubject.unsubscribe();
  }


}
