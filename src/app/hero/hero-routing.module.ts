import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';

/** 二级目录的索引默认是指向 HeroComponent */
const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class HeroRoutingModule {}
