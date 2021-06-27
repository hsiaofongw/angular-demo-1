import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { API_CONFIG, DEV_API_CONFIG } from './config';
import { HeroDataService } from './services/hero-data.service';
import { MockHeroDataService } from './services/mock-hero-data.service';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './components/hero/hero.component';
import { HeroRoutingModule } from './hero-routing.module';
import { HttpHeroDataService } from './services/http-hero-data.service';
import { APIPathConfigService } from './services/api-path-config.service';


@NgModule({
  declarations: [HeroListComponent, HeroComponent],
  imports: [
    CommonModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    HttpClientModule,
    HeroRoutingModule,
  ],
  providers: [
    { provide: API_CONFIG, useValue: DEV_API_CONFIG },
    { provide: DEV_API_CONFIG, useValue: DEV_API_CONFIG },
    // { provide: HeroDataService, useClass: MockHeroDataService, },
    { provide: HeroDataService, useClass: HttpHeroDataService, },
    APIPathConfigService,
  ],
})
export class HeroModule {}
