import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-says',
  templateUrl: './says.component.html',
  styleUrls: ['./says.component.css'],
  animations: [
    trigger('overlayEnterExit', [
      transition(':enter', [
        style({ backgroundColor: 'rgba(0, 0, 0, 0%)' }),
        animate('150ms ease-out', style({ backgroundColor: 'rgba(0, 0, 0, 36%)' })),
      ]),
      transition(':leave', [
        animate('80ms ease-in', style({ backgroundColor: 'rgba(0, 0, 0, 0%)' })),
      ]),
    ]),
  ],
})
export class SaysComponent implements OnInit {
  isOverlayDisplay = false;

  constructor() {}

  ngOnInit(): void {}

  handleOk(): void {
    this.isOverlayDisplay = false;
  }

  handleCancel(): void {
    this.isOverlayDisplay = false;
  }

  handleOpenOverlay(): void {
    this.isOverlayDisplay = true;
  }
}
