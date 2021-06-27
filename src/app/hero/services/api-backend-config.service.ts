import { Inject, Injectable } from '@angular/core';
import { HTTP_API_ENDPOINT_CONFIG } from '../config';
import { SupportedHTTPAPIEndPointType } from '../interfaces';

/** 此服务查询当前使用的后端连接参数配置 */
@Injectable({
  providedIn: 'root'
})
export class HttpAPIBackendConfigService {

  constructor(
    @Inject(HTTP_API_ENDPOINT_CONFIG) private httpAPIBackendConfig: SupportedHTTPAPIEndPointType,
  ) { }

  /**
   * 返回当前选用的后端连接参数配置名称
   * @returns {SupportedHTTPAPIEndPointType} 当前选用的后端连接参数配置名称
   */
  getCurrentUsingAPIBackendConfig(): SupportedHTTPAPIEndPointType {
    return this.httpAPIBackendConfig;
  }
}
