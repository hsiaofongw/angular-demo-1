import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './components/article/article.component';
import { LayoutModule } from '../shared-modules/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { DateTimeHelperModule } from '../shared-modules/date-time-helper/date-time-helper.module';
import { ArticleService } from './service/article.service';
import { HttpArticleService } from './service/http-article.service';
import { ApiConfigService } from './service/api-config.service';
import { UnixTimestampToStringPipe } from './pipes/unix-timestamp-to-string.pipe';

@NgModule({
  declarations: [ArticleComponent, UnixTimestampToStringPipe],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    LayoutModule,
    HttpClientModule,
    DateTimeHelperModule,
  ],
  providers: [
    { provide: ArticleService, useClass: HttpArticleService },
    HttpArticleService,
    ApiConfigService,
  ],
})
export class ArticleModule {}
