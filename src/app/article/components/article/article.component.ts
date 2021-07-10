import { Component, OnInit } from '@angular/core';
import { IArticle, IArticleQueryResult } from '../../interface';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: IArticle[] = [];

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((queryResult: IArticleQueryResult) => {
      this.articles = queryResult.results;
    });
  }

}
