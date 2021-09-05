import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './components/article/article.component';
import { LayoutModule } from '../shared-modules/layout/layout.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DateTimeHelperModule } from '../shared-modules/date-time-helper/date-time-helper.module';
import { ArticleService } from './service/article.service';
import { HttpArticleService } from './service/http-article.service';
import { UnixTimestampToStringPipe } from './pipes/unix-timestamp-to-string.pipe';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { API_CONFIG, DEFAULT_API_CONFIG } from './config';
import { HttpArticleServiceFactory } from './factories/http-article-service.factory';

@NgModule({
  declarations: [
    ArticleComponent,
    UnixTimestampToStringPipe,
    ArticleListComponent,
    MarkdownComponent,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    LayoutModule,
    HttpClientModule,
    DateTimeHelperModule,
  ],
  providers: [
    { provide: ArticleService, useClass: HttpArticleService },
    {
      provide: HttpArticleService,
      useFactory: HttpArticleServiceFactory.makeHttpArticleServiceFactory,
      deps: [HttpClient, API_CONFIG],
    },
    { provide: API_CONFIG, useValue: DEFAULT_API_CONFIG },
  ],
  exports: [ArticleComponent, ArticleListComponent],
})
export class ArticleModule {}
