import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IImageDataObject, IImageDataRequest } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ImageLoadingService {
  constructor(private httpClient: HttpClient) {}

  getImageData(param: IImageDataRequest): Observable<IImageDataObject> {
    const url = param.imageSourceURL;
    const serverReturn$ = this.httpClient.get(url, {
      responseType: 'arraybuffer',
    });
    const blob$ = serverReturn$.pipe(
      map((arrayBuffer: ArrayBuffer) => ({
        imageData: new File([arrayBuffer], uuidv4()),
      }))
    );

    return blob$;
  }
}
