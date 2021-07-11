import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective {

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    const circleElement = this.elementRef.nativeElement.querySelector('circle') as SVGCircleElement;
    window.console.log(this.elementRef.nativeElement);
    circleElement.style.stroke = '#495057';
  }

}
