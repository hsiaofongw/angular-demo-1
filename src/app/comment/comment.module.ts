import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentReviewCardModule } from './shared/comment-review-card/comment-review-card.module';
import { CommentRoutingModule } from './comment-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CommentComponent } from './components/comment/comment.component';
import { ReviewingCommentModule } from './reviewing-comment/reviewing-comment.module';
import { ViewCommentDetailComponent } from './components/view-comment-detail/view-comment-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CommentComponent, ViewCommentDetailComponent],
  imports: [
    CommonModule,
    CommentReviewCardModule,
    CommentRoutingModule,
    MatTabsModule,
    ReviewingCommentModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatCardModule,
  ],
})
export class CommentModule {}
