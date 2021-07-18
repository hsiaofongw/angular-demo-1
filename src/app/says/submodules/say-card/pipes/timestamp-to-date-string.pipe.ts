import { Pipe, PipeTransform } from '@angular/core';
import { DateTimeHelperService } from 'src/app/shared-modules/date-time-helper/services/date-time-helper.service';

@Pipe({
  name: 'timestampToDateString',
})
export class TimestampToDateStringPipe implements PipeTransform {
  /**
   * 1626619155711 -> '2021-07-18 14:39:15'
   */
  transform(value: number): string {
    return new Date(value)
      .toISOString()
      .slice(0, '2021-07-18 14:39:15'.length)
      .replace('T', ' ');
  }
}
