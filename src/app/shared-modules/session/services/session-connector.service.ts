import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionConnectorService {

  /** 向服务器取得会话 ID */
  getSessionIdFromServer(): Observable<string> {
    return of('123');
  }

  /** 将本地 clientToken 与会话 ID 绑定 */
  bindLocalClientTokenToSessionId(clientToken: string): void {}
}
