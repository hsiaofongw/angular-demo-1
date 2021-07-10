import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'articles', pathMatch: 'full',
  },
  {
    path: 'articles',
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule),
  },
  {
    path: 'comments',
    loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
