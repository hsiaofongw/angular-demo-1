import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { API_CONFIG, BACKEND_CONFIG, DEV_API_CONFIG, USING_BACKEND } from './config';
import { HeroDataService } from './services/hero-data.service';
import { MockHeroDataService } from './services/mock-hero-data.service';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './components/hero/hero.component';
import { HeroRoutingModule } from './hero-routing.module';
import { APIPathConfigService } from './services/api-path-config.service';
import { heroDataServiceFactory } from './factories/hero-data-service-factory';
import { BackendConfigService } from './services/backend-config.service';


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
    { provide: DEV_API_CONFIG, useValue: DEV_API_CONFIG, },
    // { provide: HeroDataService, useClass: MockHeroDataService, },
    {
      provide: HeroDataService,
      useFactory: heroDataServiceFactory,
      deps: [
        BackendConfigService,
        HttpClient,
        APIPathConfigService,
      ]
    },
    APIPathConfigService,
    BackendConfigService,
    { provide: BACKEND_CONFIG, useValue: USING_BACKEND, },
    { provide: USING_BACKEND, useValue: USING_BACKEND, },
  ],
})
export class HeroModule {}
