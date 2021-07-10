import { Injectable } from '@angular/core';
import { ITokenObject } from 'src/app/login/interface';
import jwtDecode from 'jwt-decode';

@Injectable()
export class UserService {

  constructor() { }

  persistTokenObject(tokenObject: ITokenObject): void {
    window.localStorage.setItem('tokenObject', JSON.stringify(tokenObject));
  }

  retrieveTokenObject(): ITokenObject {
    const tokenObjectJSON = window.localStorage.getItem('tokenObject') ?? '{}';
    const retrievedObject = JSON.parse(tokenObjectJSON);
    const tokenObject: ITokenObject = {};
    if (retrievedObject?.token && typeof retrievedObject?.token === 'string') {
      tokenObject.token = retrievedObject.token;
    }

    return tokenObject;
  }

  login(tokenObject: ITokenObject): void {
    this.persistTokenObject(tokenObject);
  }

  isLogedIn(): boolean {
    const tokenObject = this.retrieveTokenObject();
    const token = tokenObject.token ?? '';
    const decodedJWT = jwtDecode(token) as { exp: number };
    const expInToken = decodedJWT?.exp ?? 0;
    const now = new Date().valueOf();

    return now < (expInToken * 1000);
  }
}
