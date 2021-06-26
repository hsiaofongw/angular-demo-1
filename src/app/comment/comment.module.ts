import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentReviewCardModule } from './shared/comment-review-card/comment-review-card.module';
import { CommentRoutingModule } from './comment-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommentReviewCardModule,
    CommentRoutingModule,
  ]
})
export class CommentModule { }
