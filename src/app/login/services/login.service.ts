import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITokenObject, IUserCredential } from '../interface';

@Injectable()
export abstract class LoginService {

  abstract login(credential: IUserCredential): Observable<ITokenObject>;
}
