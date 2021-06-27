import { Injectable, Inject } from '@angular/core';
import { HTTP_API_PATH_CONFIG } from '../config';
import { HTTPAPIPathConfig } from '../interfaces';

/** 此服务负责从 API 配置对象中生成完整的 API 路径 */
@Injectable({
  providedIn: 'root'
})
export class HTTPAPIPathConfigService {

  constructor(
    @Inject(HTTP_API_PATH_CONFIG) private apiConfig: HTTPAPIPathConfig,
  ) { }

  /**
   * 获取 API 请求路径
   * @returns {string} API 请求路径
   */
  getAPIPath(): string {
    const baseURL = this.apiConfig.baseURL;
    const apiPath = this.apiConfig.apiPath;

    return `${baseURL}${apiPath}`;
  }

}
