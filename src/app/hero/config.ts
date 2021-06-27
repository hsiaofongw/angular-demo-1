import { InjectionToken } from '@angular/core';
import { HTTPAPIPathConfig, SupportedBackEndType, SupportedHTTPAPIEndPointType } from './interfaces';

/** 抽象 API 路径配置对象，由基于 Http 协议的英雄数据服务依赖，由直属 Module 提供实现 */
export const HTTP_API_PATH_CONFIG = new InjectionToken<HTTPAPIPathConfig>('API Path Configuration');

/** API 路径配置的实现，由直属 Module 提供给 API_CONFIG Token */
export const DEV_HTTP_API_PATH_CONFIG: HTTPAPIPathConfig = {
  baseURL: 'http://localhost:3000',
  apiPath: '/api/v1/hero',
};

/** 生产环境使用的后端 */
export const PROD_HTTP_API_PATH_CONFIG: HTTPAPIPathConfig = {
  baseURL: 'http://173.82.240.157',
  apiPath: '/api/v1/hero',
};

/** 选择使用哪一个后端 */
export const BACKEND_CONFIG = new InjectionToken<SupportedBackEndType>('Choose which backend to use');
export const USING_BACKEND: SupportedBackEndType = 'http';
// export const USING_BACKEND: SupportedBackEndType = 'mock';

/** 当使用 HTTP 协议与后端通信时，选择连接到哪一个服务器上 */
export const HTTP_API_ENDPOINT_CONFIG = new InjectionToken<SupportedHTTPAPIEndPointType>('Choose which api endpoint to use');
export const USING_API_ENDPOINT: SupportedHTTPAPIEndPointType = 'dev';
// export const USING_API_ENDPOINT: SupportedHTTPAPIEndPointType = 'prod';
