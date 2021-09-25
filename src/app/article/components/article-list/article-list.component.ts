import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { LoggerBuilder } from 'src/app/shared-modules/logging/services/logger-builder.service';
import { Logger } from 'src/app/shared-modules/logging/services/logger.service';
import { ScrollInfo } from 'src/app/ui/scroll-helper/interfaces';
import { ArticleModule } from '../../article.module';
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

  /** 页长 */
  _pageSize = 20;

  /** 加载状态：是否正在加载内容 */
  _loading = false;

  /** 日志记录器 */
  _logger!: Logger;

  constructor(
    private articleListService: ArticleService,
    private loggerBuilder: LoggerBuilder
  ) {
    this._logger = this.loggerBuilder.makeLogger({
      moduleId: ArticleModule.name,
      classId: ArticleListComponent.name,
    });
  }

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

    this._logger.info('拉取下一页');
    this._logger.info({
      pageSize: this._pageSize,
      pagesCount: this._pages.length,
    });

    const offset = this._pages.length * this._pageSize;
    this.articleListService
      .getArticles({ offset: offset, limit: this._pageSize })
      .subscribe((queryResult) => {
        if (!!queryResult.data.length) {
          this._pages = [...this._pages, queryResult.data];
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
