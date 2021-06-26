import { InjectionToken } from '@angular/core';
import { APIConfig } from './interfaces';

export const API_CONFIG = new InjectionToken<APIConfig>('API Path Configuration');

export const DEV_API_CONFIG: APIConfig = {
  baseURL: 'https://backend-1.example.com',
  apiPath: '/api/v1/hero',
};
