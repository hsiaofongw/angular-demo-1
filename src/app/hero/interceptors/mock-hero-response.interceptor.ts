import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HTTPAPIPathConfigService } from '../services/api-path-config.service';
import { SHOULD_INTERCEPT_HERO_HTTP_REQUEST } from '../config';
import { Hero, HTTPInterceptOption } from '../interfaces';

@Injectable()
export class MockHeroResponseInterceptor implements HttpInterceptor {

  constructor(
    private apiPathConfigService: HTTPAPIPathConfigService,
    @Inject(SHOULD_INTERCEPT_HERO_HTTP_REQUEST) private httpInterceptOption: HTTPInterceptOption,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const heroHttpRequestPath = this.apiPathConfigService.getAPIPath();
    const shouldIntercept = this.httpInterceptOption;
    if (heroHttpRequestPath === request.url && shouldIntercept === 'intercept') {
      const mockedHeroes: Hero[] = [
        {
          id: 0, name: 'Mocked Hero 0',
        },
      ];

      return of(new HttpResponse({ body: {
        totalCounts: mockedHeroes.length,
        heroes: mockedHeroes,
      }}));
    }

    return next.handle(request);
  }
}
