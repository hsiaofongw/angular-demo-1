import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './components/article/article.component';
import { LayoutModule } from '../shared-modules/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './service/article.service';
import { JsdelivrArticleService } from './service/jsdelivr-article.service';


@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [
    JsdelivrArticleService,
    { provide: ArticleService, useClass: JsdelivrArticleService },
  ]
})
export class ArticleModule { }
