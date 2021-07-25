import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ImageLoadingService } from './services/image-loading.service';
import { HttpClientModule } from '@angular/common/http';
import { SafeURLPipe } from './pipes/safe-url.pipe';



@NgModule({
  declarations: [
    CarouselComponent,
    SafeURLPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    CarouselComponent
  ],
  providers: [
    ImageLoadingService
  ]
})
export class CarouselModule { }
