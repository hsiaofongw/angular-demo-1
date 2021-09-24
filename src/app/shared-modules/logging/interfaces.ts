import { Subject } from 'rxjs';

/** 可序列化的 */
export type Serializable = { toString(): string };

/**
 * 日志级别：
 * 'info' -> 信息记录
 * 'error' -> 出错记录
 * 'warning' -> 警告
 * 'debug' -> 调试（比 info 要详细）
 */
export type StandardLogLevel = 'info' | 'error' | 'warning' | 'debug';

/** 标准日志格式 */
export type StandardLog = {
  /** 日志记录时间戳 */
  datetime: number;

  /** 日志所处模块 */
  moduleId: string;

  /** 日志所处 class */
  classId: string;

  /** 日志文本内容 */
  content: Serializable;

  /** 日志级别 */
  level: StandardLogLevel;
};

/** 日志信息列表 */
export type StandardLogRecordList = Array<StandardLog>;

/** 日志记录器初始化参数 */
export type LoggerInitConfig = Pick<StandardLog, 'moduleId' | 'classId'>;

/** 日志记录去配置 */
export type LoggerConfig = LoggerInitConfig & {
  /** 记录日志的地方 */
  recorder: Subject<StandardLog>;
};

/** 日志更新回调 */
export type LogUpdateHook = (
  log: StandardLog,
  logs: Array<StandardLog>
) => void;

/** 日志更新回调列表 */
export type LogUpdateHooks = Array<LogUpdateHook>;
