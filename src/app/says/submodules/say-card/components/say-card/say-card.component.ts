import { Component, OnInit, Input } from '@angular/core';
import { ISay } from 'src/app/says/interface';

@Component({
  selector: 'app-say-card',
  templateUrl: './say-card.component.html',
  styleUrls: ['./say-card.component.css']
})
export class SayCardComponent implements OnInit {

  @Input()
  say!: ISay;

  constructor() { }

  ngOnInit(): void {
  }

}
