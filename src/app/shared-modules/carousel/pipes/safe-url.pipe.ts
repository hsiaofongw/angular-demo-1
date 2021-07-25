import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeURL'
})
export class SafeURLPipe implements PipeTransform {

  constructor(private domSantinizer: DomSanitizer) {}

  transform(unTrustedURL: string) {
    return this.domSantinizer.bypassSecurityTrustResourceUrl(unTrustedURL);
  }

}
