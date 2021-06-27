import { HttpClient } from '@angular/common/http';
import { HTTPAPIPathConfigService } from '../services/http-api-path-config.service';
import { BackendConfigService } from '../services/backend-config.service';
import { HeroDataService } from '../services/hero-data.service';
import { HttpHeroDataService } from '../services/http-hero-data.service';
import { MockHeroDataService } from '../services/mock-hero-data.service';

/**
 * 根据当前配置的后端类型返回对应的英雄数据服务
 * @param {BackendConfigService} backendConfigService - 后端配置服务，能获取到当前配置使用的后端类型
 * @param {HttpClient} httpClient - Http 请求服务
 * @param {HTTPAPIPathConfigService} apiPathConfigService - 能获取到后端服务器的完整地址
 * @returns {HeroDataService} 获取英雄数据的抽象类
 */
export const heroDataServiceFactory = (
  backendConfigService: BackendConfigService,
  httpClient: HttpClient,
  apiPathConfigService: HTTPAPIPathConfigService
): HeroDataService => {
  const currentUsingBackendType =
    backendConfigService.getCurrentUsingBackendType();

  if (currentUsingBackendType === 'http') {
    return new HttpHeroDataService(apiPathConfigService, httpClient);
  } else if (currentUsingBackendType === 'mock') {
    return new MockHeroDataService();
  } else {
    return new MockHeroDataService();
  }
};
