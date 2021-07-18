import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { AutoResizeDirective } from './directives/auto-resize.directive';



@NgModule({
  declarations: [
    TextAreaComponent,
    AutoResizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [TextAreaComponent]
})
export class TeletypeModule { }
