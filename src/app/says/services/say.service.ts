import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateSayDto, ICreateSayResult, IQuerySaysDto, ISayQueryResult } from '../interface';

@Injectable()
export abstract class SayService {

  /** 分页查询说说 */
  abstract getSays(queryDto: IQuerySaysDto): Observable<ISayQueryResult>;

  /** 创建说说 */
  abstract createSay(createSayDto: ICreateSayDto): Observable<ICreateSayResult>;
}
