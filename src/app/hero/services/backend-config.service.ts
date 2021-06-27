import { Inject, Injectable } from '@angular/core';
import { BACKEND_CONFIG } from '../config';
import { SupportedBackEndType } from '../interfaces';

/** 配置使用哪一个后端 */
@Injectable({
  providedIn: 'root'
})
export class BackendConfigService {

  constructor(
    @Inject(BACKEND_CONFIG) private backendConfig: SupportedBackEndType,
  ) { }

  /** 获取当前使用的后端的类型 */
  getCurrentUsingBackendType(): SupportedBackEndType {
    return this.backendConfig;
  }
}
