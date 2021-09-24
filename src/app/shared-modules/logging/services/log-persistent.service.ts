import { Injectable } from '@angular/core';
import { StandardLog } from '../interfaces';

/** 日志持久化服务 */
@Injectable({
  providedIn: 'root'
})
export class LogPersistentService {

  /** 将日志存储到 window.localStorage */
  writeLogsToLocalStorage(logs: StandardLog[]): void {
    const serializedLogs = JSON.stringify(logs);
    window.localStorage.setItem('serializedLogs', serializedLogs);
  }
}
