import { Component, Input, OnInit } from '@angular/core';
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
  _pages: ArticlePages = [];
  _currentMaxPageIndex = -1;
  _pageSize = 20;

  constructor(private articleListService: ArticleService) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.articleListService
      .getArticles({ offset: 0, limit: 20 })
      .subscribe(() => {});
  }
}
