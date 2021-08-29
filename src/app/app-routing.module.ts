import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article/components/article-list/article-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'articles', pathMatch: 'full',
  },
  {
    path: 'articles',
    component: ArticleListComponent
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
    path: 'carousel-demo',
    loadChildren: () => import('./carousel-demo/carousel-demo.module').then(m => m.CarouselDemoModule),
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
