import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentRoutingModule } from '../../comment-routing.module';
import { CommentModule } from '../../comment.module';
import { CommentReviewCardModule } from '../../shared/comment-review-card/comment-review-card.module';
import { ReviewingCommentModule } from '../../sub-modules/reviewing-comment/reviewing-comment.module';
import { ViewCommentDetailComponent } from './view-comment-detail.component';

describe('ViewCommentDetailComponent', () => {
  let component: ViewCommentDetailComponent;
  let fixture: ComponentFixture<ViewCommentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
        BrowserAnimationsModule,
        MatSidenavModule,
      ],
      declarations: [ViewCommentDetailComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {}}],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCommentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
