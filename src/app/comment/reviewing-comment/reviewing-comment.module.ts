import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewingCommentsComponent } from './components/reviewing-comments/reviewing-comments.component';
import { ReviewingCommentRoutingModule } from './reviewing-comment-routing.module';
import { CommentReviewCardModule } from '../shared/comment-review-card/comment-review-card.module';



@NgModule({
  declarations: [
    ReviewingCommentsComponent
  ],
  imports: [
    CommonModule,
    ReviewingCommentRoutingModule,
    CommentReviewCardModule,
  ]
})
export class ReviewingCommentModule { }
