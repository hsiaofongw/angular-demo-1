import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { API_CONFIG, DEV_API_CONFIG } from './config';
import { HeroListComponent } from './hero-list/hero-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { HeroDataService } from './hero-data.service';
import { MockHeroDataService } from './mock-hero-data.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
  ],
  providers: [
    { provide: API_CONFIG, useValue: DEV_API_CONFIG, },
    { provide: DEV_API_CONFIG, useValue: DEV_API_CONFIG, },
    { provide: HeroDataService, useClass: MockHeroDataService, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
