import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-review-card',
  templateUrl: './comment-review-card.component.html',
  styleUrls: ['./comment-review-card.component.css']
})
export class CommentReviewCardComponent implements OnInit {

  @Output()
  onOpenDetailWindow = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleOpenDetail(): void {
    this.onOpenDetailWindow.emit();
  }

}
