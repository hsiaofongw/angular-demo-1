import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reviewing-comments',
    loadChildren: () =>
      import('./reviewing-comment/reviewing-comment.module').then(
        (m) => m.ReviewingCommentModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class CommentRoutingModule {}
