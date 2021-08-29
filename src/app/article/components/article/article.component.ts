import { Component, Input } from '@angular/core';
import { IArticle } from '../../interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input()
  article?: IArticle;

  handleClick(article: IArticle) {
    window.open(article.url, '_blank');
  }
}
