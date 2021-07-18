import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SayCardComponent } from './components/say-card/say-card.component';
import { TimestampToDateStringPipe } from './pipes/timestamp-to-date-string.pipe';


@NgModule({
  declarations: [
    SayCardComponent,
    TimestampToDateStringPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SayCardComponent
  ]
})
export class SayCardModule { }
