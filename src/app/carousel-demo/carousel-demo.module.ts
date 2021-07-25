import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselDemoRoutingModule } from './carousel-demo-routing.module';
import { CarouselDemoComponent } from './components/carousel-demo/carousel-demo.component';
import { CarouselModule } from '../shared-modules/carousel/carousel.module';


@NgModule({
  declarations: [
    CarouselDemoComponent
  ],
  imports: [
    CommonModule,
    CarouselDemoRoutingModule,
    CarouselModule,
  ]
})
export class CarouselDemoModule { }
