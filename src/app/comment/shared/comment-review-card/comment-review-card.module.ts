import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentReviewCardComponent } from './comment-review-card/comment-review-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CommentReviewCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [CommentReviewCardComponent]
})
export class CommentReviewCardModule { }
