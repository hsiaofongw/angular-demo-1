import { InjectionToken } from '@angular/core';
import { APIConfig } from './interfaces';

/** 抽象 API 路径配置对象，由基于 Http 协议的英雄数据服务依赖，由直属 Module 提供实现 */
export const API_CONFIG = new InjectionToken<APIConfig>('API Path Configuration');

/** API 路径配置的实现，由直属 Module 提供给 API_CONFIG Token */
export const DEV_API_CONFIG: APIConfig = {
  baseURL: 'https://backend-1.example.com',
  apiPath: '/api/v1/hero',
};
