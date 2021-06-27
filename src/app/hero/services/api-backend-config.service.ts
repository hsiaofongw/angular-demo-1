import { Inject, Injectable } from '@angular/core';
import { HTTP_API_ENDPOINT_CONFIG } from '../config';
import { SupportedHTTPAPIEndPointType } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpAPIBackendConfigService {

  constructor(
    @Inject(HTTP_API_ENDPOINT_CONFIG) private httpAPIBackendConfig: SupportedHTTPAPIEndPointType,
  ) { }

  getCurrentUsingAPIBackendConfig(): SupportedHTTPAPIEndPointType {
    return this.httpAPIBackendConfig;
  }
}
