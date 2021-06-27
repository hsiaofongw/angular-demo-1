import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewingCommentsComponent } from './components/reviewing-comments/reviewing-comments.component';
import { CommentReviewCardModule } from '../shared/comment-review-card/comment-review-card.module';



@NgModule({
  declarations: [
    ReviewingCommentsComponent
  ],
  imports: [
    CommonModule,
    CommentReviewCardModule,
  ],
  exports: [ReviewingCommentsComponent],
})
export class ReviewingCommentModule { }
