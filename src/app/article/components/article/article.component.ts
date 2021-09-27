import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle } from '../../interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  constructor(private router: Router) {}

  @Input()
  article?: IArticle;

  handleClick(article: IArticle) {
    const articleId = article.file;
    this.router.navigate(['articles', articleId]);
  }
}
