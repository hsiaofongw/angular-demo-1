import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaysRoutingModule } from './says-routing.module';
import { SaysComponent } from './components/says/says.component';
import { LayoutModule } from '../shared-modules/layout/layout.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    SaysComponent
  ],
  imports: [
    CommonModule,
    SaysRoutingModule,
    LayoutModule,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class SaysModule { }
