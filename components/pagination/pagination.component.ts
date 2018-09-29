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

@Component({
  selector: 'Pagination, nzm-pagination',
  templateUrl: './pagination.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnInit, OnDestroy {
  prefixCls = 'am-pagination';

  private _locale: object = {};
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
      this._locale = this._localeProviderService.getLocaleSubObj('Pagination');
    });
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
