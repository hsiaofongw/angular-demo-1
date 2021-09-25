import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ScrollInfo } from 'src/app/ui/scroll-helper/interfaces';
import { IArticle } from '../../interface';
import { Page } from '../../interface';
import { ArticleService } from '../../service/article.service';

type ArticlePages = Page<IArticle[]>;

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  /** 列表容器 */
  @ViewChild('listContainer', { read: ElementRef })
  _listContainer?: ElementRef<HTMLElement>;

  /** 每一页的数据 */
  _pages: ArticlePages = [];

  /** 当前已加载最大页，如值为 -1 则表示尚未加载任何内容 */
  _currentMaxPageIndex = -1;

  /** 页长 */
  _pageSize = 20;

  /** 加载状态：是否正在加载内容 */
  _loading = false;

  constructor(private articleListService: ArticleService) {}

  ngOnInit(): void {
    this.scrollToTheTop();
    this.fetchNextPage();
  }

  /** 拉取下一页 */
  fetchNextPage(): void {
    if (this._loading) {
      return;
    }

    this._loading = true;

    const offset = (this._currentMaxPageIndex + 1) * this._pageSize;
    this.articleListService
      .getArticles({ offset: offset, limit: this._pageSize })
      .subscribe((queryResult) => {
        this._pages = [...this._pages, queryResult.data];

        if (!!queryResult.data.length) {
          this._currentMaxPageIndex = this._currentMaxPageIndex + 1;
        }

        this._loading = false;
      });
  }

  /** 响应视图滚动到底部事件 */
  _handleScrollBottom(scrollInfo: ScrollInfo): void {
    window.console.log({ scrollInfo });
    this.fetchNextPage();
  }

  scrollToTheTop(): void {
    if (!this._listContainer) {
      return;
    }

    this._listContainer.nativeElement.scrollTo({ top: 0 });
  }
}
