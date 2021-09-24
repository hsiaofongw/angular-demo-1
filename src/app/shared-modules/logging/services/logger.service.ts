import { LoggerConfig, Serializable } from '../interfaces';

/** 日志记录器 */
export class Logger {
  constructor(private config: LoggerConfig) {}

  /** 获取当下时间戳 */
  private _getNow(): number {
    return new Date().valueOf();
  }

  /** 记录 info 级的日志 */
  public info<T extends Serializable>(content: T): void {
    this.config.recorder.next({
      datetime: this._getNow(),
      moduleId: this.config.moduleId,
      classId: this.config.classId,
      content: content,
      level: 'info',
    });
  }

  public error(content: string): void {}

  public warning(content: string): void {}

  public debug(content: string): void {}
}
