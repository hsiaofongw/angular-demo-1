import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import {
  LoggerInitConfig,
  LogUpdateHook,
  LogUpdateHooks,
  StandardLog,
  StandardLogRecordList,
} from '../interfaces';
import { Logger } from './logger.service';

/** 日志记录器生产厂 */
@Injectable({
  providedIn: 'root',
})
export class LoggerBuilder {
  private _logRecordList: StandardLogRecordList = [];
  private _logRecorder = new Subject<StandardLog>();
  private _logRecorderSubscription?: Subscription;
  private _logUpdateHooks: LogUpdateHooks = [];

  constructor() {
    this.activateLogSubscription();
  }

  /** 激活日志订阅 */
  activateLogSubscription(): void {
    this._logRecorderSubscription = this._logRecorder.subscribe((log) => {
      this._logRecordList.push(log);

      for (const hook of this._logUpdateHooks) {
        hook(log, this._logRecordList);
      }
    });
  }

  /** 取消日志订阅 */
  deActivateLogSubscription(): void {
    this._logRecorderSubscription?.unsubscribe();
  }

  /** 实例化一个 logger */
  makeLogger(config: LoggerInitConfig): Logger {
    return new Logger({ ...config, recorder: this._logRecorder });
  }

  ngOnDestroy(): void {
    this.deActivateLogSubscription();
  }

  /** 获取日志更新回调函数列表 */
  getLogHookList(): LogUpdateHooks {
    return this._logUpdateHooks;
  }

  /** 插入日志更新回调函数 */
  insertLogHook(hook: LogUpdateHook, index?: number): void {
    if (index !== undefined && index >= this._logUpdateHooks.length) {
      throw new RangeError();
    }

    if (typeof index === 'number') {
      this._logUpdateHooks.splice(index, 0, hook);
      return;
    }

    this._logUpdateHooks.push(hook);
  }

  /** 删除指定日志更新函数 */
  deleteLogHook(index: number): void {
    if (index < 0 && index >= this._logUpdateHooks.length) {
      throw new RangeError();
    }

    this._logUpdateHooks.splice(index, 1);
  }
}
