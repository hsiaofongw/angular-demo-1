import { Injectable, Inject } from '@angular/core';
import { API_CONFIG } from '../config';
import { APIConfig } from '../interfaces';

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
