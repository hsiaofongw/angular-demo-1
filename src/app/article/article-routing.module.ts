import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';

const routes: Routes = [
  {
    path: ':articleId',
    component: ArticlePreviewComponent,
  },
  { path: '', component: ArticleListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ArticleRoutingModule {}
