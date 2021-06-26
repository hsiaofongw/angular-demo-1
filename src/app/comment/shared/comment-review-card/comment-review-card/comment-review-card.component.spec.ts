import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentReviewCardComponent } from './comment-review-card.component';

describe('CommentReviewCardComponent', () => {
  let component: CommentReviewCardComponent;
  let fixture: ComponentFixture<CommentReviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
