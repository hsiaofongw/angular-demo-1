import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared-modules/user/services/user.service';

@Injectable()
export class TokenAuthInterceptor implements HttpInterceptor {

  constructor(
    private userService: UserService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.userService.retrieveTokenObject().token;
    if (!token) {
      return next.handle(request);
    }

    const authRequest = request.clone({
      headers: request.headers.set('Authorization', 'bearer '+token),
    });

    return next.handle(authRequest);
  }
}
