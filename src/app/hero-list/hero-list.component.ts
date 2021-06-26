import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, Observable } from 'rxjs';
import { HeroDataSource } from '../hero-data-source';
import { HeroDataService } from '../hero-data.service';
import { Hero, HeroQueryResult } from '../interfaces';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  /** 要显示的列的列表 */
  displayedColumns = ['id', 'name'];

  /** 初始英雄列表 */
  initialHeroes: Hero[] = HEROES;

  /** 英雄列表 */
  heroesSubject = new BehaviorSubject<Hero[]>(this.initialHeroes);

  /** 数据源，连接 Material Table */
  heroesDataSource = new HeroDataSource(this.heroesSubject);

  /** 当前页码 */
  pageIdx = 1;

  /** 当前每页记录数 */
  pageSize = 10;

  /** 总记录数量 */
  totalCounts = 0;

  /** 每页长度选项列表 */
  pageSizeOptions = [5, 10, 15, 25, 50, 100];

  constructor(
    private heroDataSerivce: HeroDataService,
  ) { }

  ngOnInit(): void {
    this.fetchDataByPageIndexAndPageSize(this.pageIdx, this.pageSize).subscribe(queryResult => {
      this.load(queryResult);
    });
  }

  handlePageEvent(pageEvent: PageEvent): void {
    let pageIndex = pageEvent.pageIndex;
    let pageSize = pageEvent.pageSize;

    if (pageSize !== this.pageSize) {
      pageIndex = 1;
    }

    this.pageIdx = pageIndex;
    this.pageSize = pageSize;

    this.fetchDataByPageIndexAndPageSize(pageIndex, pageSize).subscribe(queryResult => this.load(queryResult));
  }

  fetchDataByPageIndexAndPageSize(pageIndex: number, pageSize: number): Observable<HeroQueryResult> {
    const offset = (pageIndex - 1) * pageSize;
    const limit = pageSize;
    return this.heroDataSerivce.getHeroes({offset, limit});
  }

  load(queryResult: HeroQueryResult): void {
    this.totalCounts = queryResult.totalCounts;
    this.heroesSubject.next(queryResult.heroes);
  }

}
