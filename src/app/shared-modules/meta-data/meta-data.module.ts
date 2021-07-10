import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaDataService } from './services/meta-data.service';



@NgModule({
  providers: [MetaDataService],
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class MetaDataModule { }
