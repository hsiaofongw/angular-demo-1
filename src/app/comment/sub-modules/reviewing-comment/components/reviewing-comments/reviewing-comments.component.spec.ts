import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ReviewingCommentModule } from '../../reviewing-comment.module';

import { ReviewingCommentsComponent } from './reviewing-comments.component';

describe('ReviewingCommentsComponent', () => {
  let component: ReviewingCommentsComponent;
  let fixture: ComponentFixture<ReviewingCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewingCommentModule,MatDialogModule,],
      declarations: [ ReviewingCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewingCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
