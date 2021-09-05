import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { MarkdownComponent } from './components/markdown/markdown.component';

const routes: Routes = [
  { path: ':articleid', component: MarkdownComponent },
  { path: '', component: ArticleListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
