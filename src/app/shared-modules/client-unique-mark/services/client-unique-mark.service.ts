import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ClientUniqueMarkService {
  /** 获取客户端标识符 */
  get clientToken(): string {
    const clientToken = window.localStorage.getItem('clientToken');
    if (!!clientToken) {
      return clientToken;
    }

    const newClientToken = uuidv4();
    window.localStorage.setItem('clientToken', newClientToken);
    return newClientToken;
  }
}
