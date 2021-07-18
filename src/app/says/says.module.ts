import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaysRoutingModule } from './says-routing.module';
import { SaysComponent } from './components/says/says.component';
import { LayoutModule } from '../shared-modules/layout/layout.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TeletypeModule } from './submodules/teletype/teletype.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SayCardModule } from './submodules/say-card/say-card.module';
import { HttpClientModule } from '@angular/common/http';
import { SayService } from './services/say.service';
import { HttpSayService } from './services/http-say.service';


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
    TeletypeModule,
    ReactiveFormsModule,
    SayCardModule,
    HttpClientModule,
  ],
  providers: [
    { provide: SayService, useClass: HttpSayService },
    HttpSayService,
  ]
})
export class SaysModule { }
