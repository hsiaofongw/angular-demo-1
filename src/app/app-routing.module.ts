import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hero',
    loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule),
  },
  {
    path: 'comment',
    loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
