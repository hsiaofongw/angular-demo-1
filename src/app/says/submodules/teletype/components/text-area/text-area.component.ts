import { animate, query, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  animations: [
    trigger('inputActive', [
      state('inActive', style({ transform: 'translateX(-100%)'})),
      state('active', style({ transform: 'translateX(0%)'})),
      transition('inActive => active', animate('800ms ease-out')),
      transition('active => inActive', animate('800ms ease-out')),
      state('void', style({ transform: 'translateX(-100%)'})),
    ]),
  ]
})
export class TextAreaComponent implements OnInit {

  inputActive: 'active' | 'inActive'  = 'inActive';

  constructor() { }

  ngOnInit(): void {
  }

}
