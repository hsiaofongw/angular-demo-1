import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAutoResize]',
})
export class AutoResizeDirective {
  @Input()
  maxHeightPx = 400;

  heightValueStack: number[] = [];

  initialHeight = 0;

  constructor(private elementRef: ElementRef<HTMLTextAreaElement>) {}

  ngAfterViewInit(): void {
    this.initialHeight = this.elementRef.nativeElement.clientHeight;
  }

  @HostListener('input')
  handleInput(): void {
    const scrollHeight = this.elementRef.nativeElement.scrollHeight;
    const clientHeight = this.elementRef.nativeElement.clientHeight;

    if (clientHeight < scrollHeight) {
      this.increaseHeight();
    }
    else if (clientHeight === scrollHeight && this.heightValueStack.length > 0) {
      this.restoreHeight();
    }
  }

  increaseHeight(): void {
    if (this.elementRef.nativeElement.clientHeight >= this.maxHeightPx) {
      return;
    }

    this.heightValueStack.push(this.elementRef.nativeElement.clientHeight);

    this.elementRef.nativeElement.style.height =
      this.elementRef.nativeElement.scrollHeight.toString() + 'px';
  }

  restoreHeight(): void {
    const previousHeight = this.heightValueStack.pop();
    if (previousHeight && this.initialHeight < previousHeight) {
      this.elementRef.nativeElement.style.height = previousHeight.toString() + 'px';
    }
  }
}
