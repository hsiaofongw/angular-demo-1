import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISay } from 'src/app/says/interface';

@Component({
  selector: 'app-say-card',
  templateUrl: './say-card.component.html',
  styleUrls: ['./say-card.component.css']
})
export class SayCardComponent implements OnInit {

  @Input()
  say!: ISay;

  @Output()
  onDeleteButtonClick = new EventEmitter<ISay>();

  showDeleteButton = false;

  constructor() { }

  ngOnInit(): void {
  }

}
