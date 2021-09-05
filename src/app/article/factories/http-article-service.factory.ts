import { HttpClient } from '@angular/common/http';
import { APIConfig } from 'src/app/shared-modules/config/interfaces';
import { HttpArticleService } from '../service/http-article.service';

export class HttpArticleServiceFactory {
  static makeHttpArticleServiceFactory(
    httpClient: HttpClient,
    apiConfig: APIConfig
  ): HttpArticleService {
    return new HttpArticleService(httpClient, apiConfig);
  }
}
