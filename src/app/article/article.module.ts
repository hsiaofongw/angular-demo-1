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
import { RouterModule } from '@angular/router';
import { MarkdownDataResolver } from './resolvers/markdown-data.resolver';
import { ScrollHelperModule } from '../ui/scroll-helper/scroll-helper.module';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';

@NgModule({
  declarations: [
    ArticleComponent,
    UnixTimestampToStringPipe,
    ArticleListComponent,
    MarkdownComponent,
    ArticlePreviewComponent,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    LayoutModule,
    HttpClientModule,
    DateTimeHelperModule,
    ScrollHelperModule,
  ],
  providers: [
    { provide: ArticleService, useClass: HttpArticleService },
    { provide: API_CONFIG, useValue: DEFAULT_API_CONFIG },
  ],
  exports: [ArticleComponent, ArticleListComponent],
})
export class ArticleModule {}
