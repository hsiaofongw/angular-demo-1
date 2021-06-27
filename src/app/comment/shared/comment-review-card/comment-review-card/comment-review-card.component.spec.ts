import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentModule } from 'src/app/comment/comment.module';

import { CommentReviewCardComponent } from './comment-review-card.component';

describe('CommentReviewCardComponent', () => {
  let component: CommentReviewCardComponent;
  let fixture: ComponentFixture<CommentReviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentModule,],
      declarations: [ CommentReviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentReviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
