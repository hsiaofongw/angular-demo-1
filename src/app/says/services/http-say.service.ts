import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateSayDto, ICreateSayResult, IQuerySaysDto, ISayQueryResult } from '../interface';
import { SayService } from './say.service';
import { getSaysApiPath, createSayApiPath } from '../config';

@Injectable()
export class HttpSayService implements SayService {
  constructor(private httpClient: HttpClient) {}

  getSays(queryDto: IQuerySaysDto): Observable<ISayQueryResult> {
    const httpParams = new HttpParams({
      fromObject: queryDto as any,
    });

    return this.httpClient.get<ISayQueryResult>(getSaysApiPath, {
      params: httpParams,
    });
  }

  createSay(createSayDto: ICreateSayDto): Observable<ICreateSayResult> {
    return this.httpClient.post<ICreateSayResult>(createSayApiPath, createSayDto);
  }
}
