import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselDemoComponent } from './components/carousel-demo/carousel-demo.component';

const routes: Routes = [
  {
    path: '', component: CarouselDemoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarouselDemoRoutingModule { }
