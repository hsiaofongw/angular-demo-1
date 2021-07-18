import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateSayDto, ICreateSayResult, IDeleteResult, IDeleteSayDto, IQuerySaysDto, ISayQueryResult } from '../interface';

@Injectable()
export abstract class SayService {

  /** 分页查询说说 */
  abstract getSays(queryDto: IQuerySaysDto): Observable<ISayQueryResult>;

  /** 创建说说 */
  abstract createSay(createSayDto: ICreateSayDto): Observable<ICreateSayResult>;

  /** 删除说说 */
  abstract deleteSay(deleteSayDto: IDeleteSayDto): Observable<IDeleteResult>;
}
