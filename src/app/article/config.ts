import { InjectionToken } from '@angular/core';
import { APIConfig } from '../shared-modules/config/interfaces';

export const DEFAULT_API_CONFIG: APIConfig = {
  server: 'http://localhost:3000',
  restfulPath: '/api/v1/articles',
};

export const API_CONFIG = new InjectionToken<APIConfig>('API_CONFIG');
