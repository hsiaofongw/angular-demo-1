import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {}

@Component({
  selector: 'app-view-comment-detail',
  templateUrl: './view-comment-detail.component.html',
  styleUrls: ['./view-comment-detail.component.css']
})
export class ViewCommentDetailComponent implements OnInit {

  panelOpenState = false;

  constructor(
    public dialogRef: MatDialogRef<ViewCommentDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }

  handleNoClick(): void {
    this.dialogRef.close();
  }

  handleYesClick(): void {
    this.dialogRef.close();
  }
}
