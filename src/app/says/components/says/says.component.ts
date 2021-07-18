import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-says',
  templateUrl: './says.component.html',
  styleUrls: ['./says.component.css'],
  animations: [
    trigger('overlayEnterExit', [
      transition(':enter', [
        style({ backgroundColor: 'rgba(0, 0, 0, 0%)' }),
        query('.dialog', style({ transform: 'translateY(36px) scale(0.7)' })),

        group([
          animate('150ms ease-out', style({ backgroundColor: 'rgba(0, 0, 0, 36%)' })),
          query('.dialog', animate('150ms ease-out', style({ transform: 'translateY(0px) scale(1)' }))),
        ])
      ]),
      transition(':leave', [
        animate('80ms ease-in', style({ backgroundColor: 'rgba(0, 0, 0, 0%)' })),
      ]),
    ]),
  ],
})
export class SaysComponent implements OnInit {
  isOverlayDisplay = false;

  saysInputForm = this.formBuilder.group({
    content: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder,) {}

  ngOnInit(): void {
    this.saysInputForm.valueChanges.subscribe(saysUpdate => {
      window.console.log(saysUpdate);
    });
  }

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
