import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../../interface';
import { exampleArticles } from '../../example-data';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  @Input()
  articles: IArticle[] = exampleArticles;

  constructor() {}

  ngOnInit(): void {}
}
