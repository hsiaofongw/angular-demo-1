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
    path: 'friends',
    loadChildren: () => import('./friend/friend.module').then(m => m.FriendModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'says',
    loadChildren: () => import('./says/says.module').then(m => m.SaysModule),
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
