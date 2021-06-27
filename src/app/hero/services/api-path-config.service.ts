import { Injectable, Inject } from '@angular/core';
import { API_CONFIG } from '../config';
import { APIConfig } from '../interfaces';

/** 此服务负责从 API 配置对象中生成完整的 API 路径 */
@Injectable({
  providedIn: 'root'
})
export class APIPathConfigService {

  constructor(
    @Inject(API_CONFIG) private apiConfig: APIConfig,
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
