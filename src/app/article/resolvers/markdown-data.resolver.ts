import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MarkdownData } from '../interface';

@Injectable({ providedIn: 'root' })
export class MarkdownDataResolver implements Resolve<MarkdownData> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MarkdownData> {
    return of({ articleId: route.params['articleId'] });
  }
}
