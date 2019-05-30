import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, OnDestroy, HostBinding } from '@angular/core';
import { LocaleProviderService } from '../../locale-provider/locale-provider.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'CustomKeyboard',
  templateUrl: './custom-keyboard.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [LocaleProviderService]
})
export class CustomKeyboardComponent implements OnInit, OnDestroy {
  prefixCls: string = 'am-number-keyboard';
  wrapCls: object;
  okText: string = '';
  wrapperCls: object;

  private _locale: any = {};
  private _unsubscribe$ = new Subject<void>();

  @Output()
  onClick = new EventEmitter<any>();

  constructor(private _localeProvider: LocaleProviderService) {}

  tdClick(e) {
    this.onClick.emit(e);
  }

  ngOnInit() {
    this.wrapCls = {
      [`${this.prefixCls}-item`]: true
    };
    this.wrapperCls = {
      [`${this.prefixCls}-wrapper`]: true
    };
    this._localeProvider.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
      this._locale = this._localeProvider.getLocaleSubObj('InputItem');
      this.okText = this._locale.confirmLabel;
    });
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
