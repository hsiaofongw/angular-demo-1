import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDateString',
})
export class TimestampToDateStringPipe implements PipeTransform {
  /**
   * 1626619155711 -> '2021/7/19'
   */
  transform(value: number): string {
      return new Date(value).toLocaleDateString();
  }
}
