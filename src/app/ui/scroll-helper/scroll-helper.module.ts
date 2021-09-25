import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollHelperDirective } from './directives/scroll-helper.directive';



@NgModule({
  declarations: [
    ScrollHelperDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollHelperDirective
  ]
})
export class ScrollHelperModule { }
