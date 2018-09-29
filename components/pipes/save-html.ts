import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHTML' })
export class SafeHTMLPipe implements PipeTransform {
  constructor(private _sanitized: DomSanitizer) {}

  transform(value): any {
    return this._sanitized.bypassSecurityTrustHtml(value);
  }
}
