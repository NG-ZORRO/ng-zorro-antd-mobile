import { Inject, Injectable } from '@angular/core';
import { LOCAL_PROVIDER_TOKEN } from './locale-provider.token';
import { BehaviorSubject, Observable } from 'rxjs';
import zh_CN from './languages/zh_CN';

@Injectable()
export class LocaleProviderService {
  private _locale: any;
  private _change = new BehaviorSubject<any>(this._locale);

  constructor(@Inject(LOCAL_PROVIDER_TOKEN) locale: any) {
    this.setLocale(locale || zh_CN);
  }

  get localeChange(): Observable<any> {
    return this._change.asObservable();
  }

  getLocaleValue(keyPath: string): string {
    const content = this._getObjectPath(this._locale, keyPath) as string;
    if (typeof content === 'string') {
      return content;
    }
    return '';
  }

  getLocaleSubObj(keyPath: string): object {
    const content = this._getObjectPath(this._locale, keyPath) as object;
    if (typeof content === 'object') {
      return content;
    }
    return null;
  }

  setLocale(locale: any): void {
    if (!locale || (this._locale && this._locale.locale === locale.locale)) {
      return;
    }
    this._locale = locale;
    this._change.next(locale);
  }

  getLocaleId(): string {
    return this._locale && this._locale.locale ? this._locale.locale : '';
  }

  getLocale(): any {
    return this._locale;
  }

  private _getObjectPath(obj: object, path: string): string | object | any {
    let res = obj;
    const paths = path.split('.');
    const depth = paths.length;
    let index = 0;
    while (res && index < depth) {
      res = res[paths[index++]];
    }
    return index === depth ? res : null;
  }
}
