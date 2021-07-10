import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITokenObject, IUserCredential } from '../interface';
import { ApiConfigService } from './api-config.service';
import { LoginService } from './login.service';

@Injectable()
export class UsernamePasswordLoginService implements LoginService {
  constructor(
    private apiConfigService: ApiConfigService,
    private http: HttpClient
  ) {}

  login(credential: IUserCredential): Observable<ITokenObject> {
    const apiPath = this.apiConfigService.getLoginPath();
    return this.http.post<ITokenObject>(apiPath, {
      username: credential.username,
      password: credential.password,
    });
  }
}
