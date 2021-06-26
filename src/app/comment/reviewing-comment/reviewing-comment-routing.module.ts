import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewingCommentsComponent } from './components/reviewing-comments/reviewing-comments.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewingCommentsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class ReviewingCommentRoutingModule {}
