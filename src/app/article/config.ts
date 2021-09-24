import { InjectionToken } from '@angular/core';
import { APIConfig } from '../shared-modules/config/interfaces';

/** 默认 API 配置 */
export const DEFAULT_API_CONFIG: APIConfig = {
  server: 'http://localhost:3000',
  restfulPath: '/api/v1/articles',
};

/** API 配置依赖注入 token */
export const API_CONFIG = new InjectionToken<APIConfig>('API_CONFIG');
