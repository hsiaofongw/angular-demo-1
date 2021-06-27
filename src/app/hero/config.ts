import { InjectionToken } from '@angular/core';
import { APIConfig, SupportedBackEndType } from './interfaces';

/** 抽象 API 路径配置对象，由基于 Http 协议的英雄数据服务依赖，由直属 Module 提供实现 */
export const API_CONFIG = new InjectionToken<APIConfig>('API Path Configuration');

/** API 路径配置的实现，由直属 Module 提供给 API_CONFIG Token */
export const DEV_API_CONFIG: APIConfig = {
  baseURL: 'http://localhost:3000',
  apiPath: '/api/v1/hero',
};

/** 选择使用哪一个后端 */
export const BACKEND_CONFIG = new InjectionToken<SupportedBackEndType>('Choose which backend to use');
export const USING_BACKEND: SupportedBackEndType = 'http';
// export const USING_BACKEND: SupportedBackEndType = 'mock';
