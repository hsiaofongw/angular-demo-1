import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ICreateSayDto,
  ICreateSayResult,
  IDeleteResult,
  IDeleteSayDto,
  IQuerySaysDto,
  ISayQueryResult,
} from '../interface';
import { SayService } from './say.service';
import { getSaysApiPath, createSayApiPath, deleteSayApiPath } from '../config';

@Injectable()
export class HttpSayService implements SayService {
  constructor(private httpClient: HttpClient) {}

  /** 分页查询说说 */
  getSays(queryDto: IQuerySaysDto): Observable<ISayQueryResult> {
    const httpParams = new HttpParams({
      fromObject: queryDto as any,
    });

    return this.httpClient.get<ISayQueryResult>(getSaysApiPath, {
      params: httpParams,
    });
  }

  /** 创建说说 */
  createSay(createSayDto: ICreateSayDto): Observable<ICreateSayResult> {
    return this.httpClient.post<ICreateSayResult>(
      createSayApiPath,
      createSayDto
    );
  }

  /** 删除说说 */
  deleteSay(deleteSayDto: IDeleteSayDto): Observable<IDeleteResult> {
    const apiPath = deleteSayApiPath
      .slice(0, deleteSayApiPath.length)
      .replace('{sayId}', deleteSayDto.id);

    return this.httpClient.delete<IDeleteResult>(apiPath);
  }
}
