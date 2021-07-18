import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaComponent } from './components/text-area/text-area.component';



@NgModule({
  declarations: [
    TextAreaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TextAreaComponent]
})
export class TeletypeModule { }
