import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { ScrollInfo } from '../interfaces';

@Directive({
  selector: '[appScrollHelper]'
})
export class ScrollHelperDirective {

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  /** 滚动状态信息输出 */
  @Output()
  onScroll = new EventEmitter<ScrollInfo>();

  /** 滑动到底部事件 */
  @Output()
  onScrollBottom = new EventEmitter<ScrollInfo>();

  /** 响应（垂直）滚动事件 */
  @HostListener('scroll')
  _handleScroll(): void {
    const element = this.elementRef.nativeElement;
    const scrollInfo: ScrollInfo = {
      clientHeight: element.clientHeight,
      scrollHeight: element.scrollHeight,
      scrollTop: element.scrollTop,
      scrollProportion: (element.scrollTop + element.clientHeight) / element.scrollHeight,
    };
    this.onScroll.emit(scrollInfo);

    if (scrollInfo.scrollProportion === 1) {
      this.onScrollBottom.emit(scrollInfo);
    }
  }

}
