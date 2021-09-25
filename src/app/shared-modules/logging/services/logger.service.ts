import {
  LoggerConfig,
  Serializable,
  StandardLog,
  StandardLogLevel,
} from '../interfaces';

/** 未定级日志 */
interface IUnLeveledLog {
  /** 记录日志为给定级别 */
  logAs(level: StandardLogLevel): void;
}

/** 日志记录器 */
export class Logger {
  constructor(private config: LoggerConfig) {}

  /** 获取当下时间戳 */
  private _getNow(): number {
    return new Date().valueOf();
  }

  /** 创建未定级日志 */
  private _makeUnLeveledLog<T extends Serializable>(content: T): IUnLeveledLog {
    const recorder = this.config.recorder;

    const unLeveledLog: Omit<StandardLog, 'level'> = {
      datetime: this._getNow(),
      moduleId: this.config.moduleId,
      classId: this.config.classId,
      content: content,
    };

    class UnLeveledLog {
      logAs(level: StandardLogLevel): void {
        const fullLog: StandardLog = { ...unLeveledLog, level };
        recorder.next(fullLog);
      }
    }

    return new UnLeveledLog();
  }

  /** 记录 info 级的日志 */
  public info<T extends Serializable>(content: T): void {
    this._makeUnLeveledLog(content).logAs('info');
  }

  /** 记录 error 级的日志 */
  public error(content: string): void {
    this._makeUnLeveledLog(content).logAs('error');
  }

  /** 记录 warning 级的日志 */
  public warning(content: string): void {
    this._makeUnLeveledLog(content).logAs('warning');
  }

  /** 记录 debug 级的日志 */
  public debug(content: string): void {
    this._makeUnLeveledLog(content).logAs('debug');
  }
}
