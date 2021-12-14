import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'safe',
})
export class TempConverterPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string | any, ...args: unknown[]): unknown {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    // return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
