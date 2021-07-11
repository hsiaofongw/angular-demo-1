import { Injectable } from '@angular/core';
import {
  USE_BACKEND as backendToken,
  API_CONFIGURATIONS as configurations,
  APIConfig,
} from '../config';

@Injectable()
export class ApiConfigService {
  getCurrentBackend(): APIConfig {
    return configurations[backendToken];
  }

  getLoginPath(): string {
    const backend = this.getCurrentBackend();
    return backend.server + backend.loginPath;
  }
}
