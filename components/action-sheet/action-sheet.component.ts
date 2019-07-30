import { Component, TemplateRef, ViewEncapsulation, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
@Component({
  selector: 'ActionSheet',
  templateUrl: './action-sheet.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ActionSheetComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  option: any;
  constructor(private localeProviderService: LocaleProviderService) {}

  ngOnInit() {
    this.localeProvider();
  }

  localeProvider() {
    const self = this;
    if (self.option.locale || self.option.locale !== undefined) {
      self.localeProviderService.setLocale(self.option.locale);
    }
    self.localeProviderService.localeChange.pipe(takeUntil(self.unsubscribe$)).subscribe(_ => {
      if (self.option.cancelButtonText) {
        self.option.cancelButtonText = self.localeProviderService.getLocaleSubObj('ActionSheet')['dismissText'];
      }
    });
  }

  onPress(index: any, rowIndex = 0, event) {}
  showShare(option) {
    const cls = { [`${option.prefixCls}-share`]: option.flag === 'SHARE' };
    return cls;
  }

  setActiveClassName(option, suffix) {
    return [`${option.prefixCls}-${suffix}-active`];
  }

  isNoTitle(value: string | TemplateRef<any>) {
    return value === '' || value === null || value === undefined;
  }

  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }

  isArray(options: any, value: any) {
    if (options.length > 0 && value) {
      return value instanceof Array;
    }
    return false;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
