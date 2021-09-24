import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './shared-modules/layout/layout.module';
import { MetaDataModule } from './shared-modules/meta-data/meta-data.module';
import { ArticleModule } from './article/article.module';
import { LoggingModule } from './shared-modules/logging/logging.module';
import { ClientUniqueMarkModule } from './shared-modules/client-unique-mark/client-unique-mark.module';
import { SessionModule } from './shared-modules/session/session.module';
// import { FriendModule } from './friend/friend.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MetaDataModule,
    ArticleModule,
    LoggingModule,
    ClientUniqueMarkModule,
    SessionModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
