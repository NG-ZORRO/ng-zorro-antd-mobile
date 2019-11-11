import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  OnDestroy
} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';

interface LocaleValue {
  prevText: string;
  nextText: string;
}
@Component({
  selector: 'Pagination, nzm-pagination',
  templateUrl: './pagination.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnInit, OnDestroy {
  prefixCls = 'am-pagination';

  private hasSetLocale = false;
  private _locale: LocaleValue = {
    prevText: '',
    nextText: ''
  };
  private _unsubscribe$: Subject<void> = new Subject<void>();

  @Input()
  mode: string = 'button';
  @Input()
  current: number = 1;
  @Input()
  total: number = 0;
  @Input()
  simple: boolean = false;
  @Input()
  disabled: boolean = false;
  @Input()
  get locale() {
    return this._locale;
  }
  set locale(v) {
    this._locale = v;
    this.hasSetLocale = true;
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
  @Output()
  onChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _localeProviderService: LocaleProviderService) {}

  isTemplateRef(key) {
    return <any>key instanceof TemplateRef;
  }

  onClick(p: number) {
    this.current = p;
    this.onChange.emit(p);
  }

  getNumber(p: number): Array<number> {
    return new Array(p);
  }

  ngOnInit() {
    this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
      if (!this.hasSetLocale) {
        this._locale = <LocaleValue>this._localeProviderService.getLocaleSubObj('Pagination');
      }
    });
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
