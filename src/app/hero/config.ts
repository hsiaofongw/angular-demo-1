import { InjectionToken } from '@angular/core';
import { HTTPAPIPathConfig, HTTPInterceptOption, SupportedBackEndType, SupportedHTTPAPIEndPointType } from './interfaces';

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
// export const BACKEND_CONFIG: SupportedBackEndType = 'http';
export const BACKEND_CONFIG: SupportedBackEndType = 'mock';

/** 当使用 HTTP 协议与后端通信时，选择连接到哪一个服务器上 */
export const HTTP_API_ENDPOINT_CONFIG: SupportedHTTPAPIEndPointType = 'dev';
// export const HTTP_API_ENDPOINT_CONFIG: SupportedHTTPAPIEndPointType = 'prod';

/** 配置是否截获 Http API 请求进行研究 */
// export const SHOULD_INTERCEPT_HERO_HTTP_REQUEST: HTTPInterceptOption = 'intercept';
export const SHOULD_INTERCEPT_HERO_HTTP_REQUEST: HTTPInterceptOption = 'bypass';
