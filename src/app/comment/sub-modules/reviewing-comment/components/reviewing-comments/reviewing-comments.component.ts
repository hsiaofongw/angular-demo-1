import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewCommentDetailComponent } from 'src/app/comment/components/view-comment-detail/view-comment-detail.component';

@Component({
  selector: 'app-reviewing-comments',
  templateUrl: './reviewing-comments.component.html',
  styleUrls: ['./reviewing-comments.component.css']
})
export class ReviewingCommentsComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  handleOpenDetail(): void {
    this.handleOpenDialog();
  }

  handleOpenDialog(): void {
    this.dialog.open(ViewCommentDetailComponent, {
      width: '600px',
      data: {}
    });
  }

}
