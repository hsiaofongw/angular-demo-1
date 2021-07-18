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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SayService } from './services/say.service';
import { HttpSayService } from './services/http-say.service';
import { UserModule } from '../shared-modules/user/user.module';
import { TokenAuthInterceptor } from './interceptors/token-auth.interceptor';


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
    UserModule,
  ],
  providers: [
    { provide: SayService, useClass: HttpSayService },
    HttpSayService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenAuthInterceptor, multi: true },
  ]
})
export class SaysModule { }
