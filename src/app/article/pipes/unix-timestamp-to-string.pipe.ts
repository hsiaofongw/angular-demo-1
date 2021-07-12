import { Pipe, PipeTransform } from '@angular/core';

/** 将 13 位 10 进制整数表示的 POSIX 风格时间戳转成日期时间字符串形式 */
@Pipe({
  name: 'unixTimestampToString'
})
export class UnixTimestampToStringPipe implements PipeTransform {

  transform(value: number): string {
    const dateObject = new Date(value);
    return dateObject.toLocaleDateString();
  }

}
