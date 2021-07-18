import {
  animate,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  forwardRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  animations: [
    trigger('inputActive', [
      state('inActive', style({ transform: 'translateX(-100%)' })),
      state('active', style({ transform: 'translateX(0%)' })),
      transition('inActive => active', animate('800ms ease-out')),
      transition('active => inActive', animate('800ms ease-out')),
      state('void', style({ transform: 'translateX(-100%)' })),
    ]),
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true,
    },
  ],
})
export class TextAreaComponent implements OnInit, ControlValueAccessor {
  @ViewChild('textarea', { read: ElementRef })
  textarea!: ElementRef<HTMLTextAreaElement>;

  inputActive: 'active' | 'inActive' = 'inActive';
  onChange = (value: string) => {};
  _onBlur = () => {};
  isDisabled = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.textarea.nativeElement.addEventListener('input', () => {
      this.onChange(this.textarea.nativeElement.value);
    });
  }

  handleBlur(): void {
    this.inputActive = 'inActive';

    this._onBlur();
  }

  writeValue(value: string): void {
    if (!this.textarea?.nativeElement) {
      return;
    }

    this.textarea.nativeElement.value = value;
  }

  registerOnChange(onChange: (value: string) => void): void {
    this.onChange = (value: string) => {
      onChange(value);
    };
  }

  registerOnTouched(onTouched: () => void): void {
    this._onBlur = () => {
      onTouched();
    };
  }

  setDisabledState(isDiabled: boolean): void {
    this.isDisabled = isDiabled;
  }
}
