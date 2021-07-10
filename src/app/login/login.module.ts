import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { UsernamePasswordLoginService } from './services/username-password-login.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfigService } from './services/api-config.service';
import { UserModule } from '../shared-modules/user/user.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
  ],
  providers: [
    { provide: LoginService, useClass: UsernamePasswordLoginService },
    ApiConfigService,
    UsernamePasswordLoginService,
  ]
})
export class LoginModule { }
