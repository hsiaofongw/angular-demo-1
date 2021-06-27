import { HttpAPIBackendConfigService } from "../services/api-backend-config.service";
import { DEV_HTTP_API_PATH_CONFIG, PROD_HTTP_API_PATH_CONFIG } from '../config';
import { HTTPAPIPathConfig } from "../interfaces";

/**
 * 根据当前的配置，返回一组 HTTP API 后端连接参数
 * @param httpAPIBackendConfigService - 当前 HTTP API 后端配置
 * @returns {HTTPAPIPathConfig} 一组 HTTP API 后端连接参数
 */
export const httpAPIPathConfigFactory = (
  httpAPIBackendConfigService: HttpAPIBackendConfigService,
): HTTPAPIPathConfig => {
  const currentUsingAPIBackendConfig = httpAPIBackendConfigService.getCurrentUsingAPIBackendConfig();
  if (currentUsingAPIBackendConfig === 'dev') {
    return DEV_HTTP_API_PATH_CONFIG;
  }
  else if (currentUsingAPIBackendConfig === 'prod') {
    return PROD_HTTP_API_PATH_CONFIG;
  }
  else {
    return DEV_HTTP_API_PATH_CONFIG;
  }
}
