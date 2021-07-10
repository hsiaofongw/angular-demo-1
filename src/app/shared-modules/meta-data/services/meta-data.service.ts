import { Injectable } from '@angular/core';
import { metaData } from '../config';
import { IMetaData } from '../interface';

@Injectable()
export class MetaDataService {

  constructor() { }

  getMetaData(): IMetaData {
    return metaData;
  }
}
