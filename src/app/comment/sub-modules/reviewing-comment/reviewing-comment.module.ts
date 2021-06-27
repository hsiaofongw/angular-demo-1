import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewingCommentsComponent } from './components/reviewing-comments/reviewing-comments.component';
import { CommentReviewCardModule } from '../../shared/comment-review-card/comment-review-card.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ReviewingCommentsComponent
  ],
  imports: [
    CommonModule,
    CommentReviewCardModule,
    MatDialogModule,
  ],
  exports: [ReviewingCommentsComponent],
})
export class ReviewingCommentModule { }
