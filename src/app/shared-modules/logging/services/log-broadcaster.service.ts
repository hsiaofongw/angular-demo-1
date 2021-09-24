import { Injectable } from '@angular/core';
import { StandardLog } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class LogBroadcaster {
  constructor() {}

  /** 打印日志 */
  broadcast(log: StandardLog): void {
    if (log.level === 'info') {
      console.info(log);
      return;
    }

    if (log.level === 'debug') {
      console.debug(log);
    }

    if (log.level === 'error') {
      console.error(log);
    }

    if (log.level === 'warning') {
      console.warn(log);
    }
  }
}
