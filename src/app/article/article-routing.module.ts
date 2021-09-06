import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { MarkdownDataResolver } from './resolvers/markdown-data.resolver';

const routes: Routes = [
  {
    path: ':articleId',
    component: MarkdownComponent,
    resolve: { markdownData: MarkdownDataResolver },
  },
  { path: '', component: ArticleListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ArticleRoutingModule {}
