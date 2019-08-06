import {
  Component,
  forwardRef,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  Input,
  Output,
  HostBinding,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateModels } from './date/DataTypes';
import zhCN from './locale/zh_CN';
import enUS from './locale/en_US';
import { CalendarPropsType } from './calendar.props.component';
import { LocaleProviderService } from '../locale-provider/locale-provider.service';
import { mergeDateTime, isSameDate } from './util/index';
import { takeUntil } from 'rxjs/operators';
import { CalendarDatePickerComponent } from './datepicker/datepicker.component';
import { Subject } from 'rxjs';

export { CalendarPropsType };

export interface CalendarStateType {
  showTimePicker: boolean;
  timePickerTitle?: string;
  startDate?: Date;
  endDate?: Date;
  disConfirmBtn?: boolean;
  clientHight?: number;
}

@Component({
  selector: 'Calendar, nzm-calendar',
  templateUrl: './calendar.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CalendarComponent), multi: true }]
})
export class CalendarComponent implements ControlValueAccessor, OnInit, OnDestroy {
  isShow: boolean = false;
  contentAnimateClass: string;
  maskAnimateClass: string;
  showClear: boolean = false;
  isSameDate: Function = isSameDate;

  props = {
    visible: false,
    showHeader: true,
    locale: zhCN,
    pickTime: false,
    showShortcut: false,
    prefixCls: 'rmc-calendar',
    type: 'range',
    defaultTimeValue: new Date(2000, 0, 1, 8)
  } as CalendarPropsType;

  state = {
    showTimePicker: false,
    timePickerTitle: '',
    startDate: undefined,
    endDate: undefined,
    disConfirmBtn: true,
    clientHight: 0
  } as CalendarStateType;

  private _unsubscribe$ = new Subject<void>();
  private _enterDirection: string;
  private _dateModelType: number;
  private _dateModelValue: any;
  private _dateModelTime: number = 0;

  @ViewChild(CalendarDatePickerComponent)
  datepicker: CalendarDatePickerComponent;

  @Input()
  set locale(value) {
    if (value === 'enUS') {
      this.props.locale = enUS;
    } else if (value === 'zhCN') {
      this.props.locale = zhCN;
    }

    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
  @Input()
  set defaultTimeValue(value) {
    if (value) {
      this.props.defaultTimeValue = value;
    }
  }
  @Input()
  set prefixCls(value) {
    if (value) {
      this.props.prefixCls = value;
    }
  }
  @Input()
  set enterDirection(value) {
    this._enterDirection = value;
    if (this._enterDirection === 'horizontal') {
      this.contentAnimateClass = 'slideH-enter slideH-enter-active';
    } else {
      this.contentAnimateClass = 'slideV-enter slideV-enter-active';
    }
  }
  @Input()
  set visible(value) {
    this.props.visible = value;
    if (value === true || value === 'true') {
      this.showAnimation();
      this.isShow = true;
    } else {
      this.hideAnimation();
      setTimeout(() => {
        this.isShow = false;
      }, 300);
    }
  }
  @Input()
  set getDateExtra(value) {
    this.props.getDateExtra = value;
  }
  @Input()
  set defaultDate(value) {
    this.props.defaultDate = value;
  }
  @Input()
  set minDate(value) {
    this.props.minDate = value;
  }
  @Input()
  set maxDate(value) {
    this.props.maxDate = value;
  }
  @Input()
  set pickTime(value) {
    this.props.pickTime = value;
  }
  @Input()
  set type(value) {
    this.props.type = value;
  }
  @Input()
  set showShortcut(value) {
    this.props.showShortcut = value;
  }
  @Input()
  set rowSize(value) {
    this.props.rowSize = value;
  }
  @Input()
  set infinite(value) {}
  @Input()
  set defaultValue(value) {
    this.props.defaultValue = value;

    if (value) {
      this.receiveProps(this.props);
    }
  }
  @Input()
  set onSelect(value) {
    this.props.onSelect = value;
  }

  @Output()
  onCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onConfirm: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onSelectHasDisableDate: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class')
  class: string = 'am-calendar';

  constructor(private _localeProviderService: LocaleProviderService) {}

  writeValue(value: Date | Array<Date> | null): void {
    this._dateModelType = null;
    if (value && value instanceof Array) {
      if (value.length === 0) {
        console.error('[ng-zorro-antd-mobile]: calendar ngModel array need params!');
        return;
      }
      if (this.props.type === 'one' && value.length >= 2) {
        this._dateModelType = 1;
        console.error('[ng-zorro-antd-mobile]: type is one, but ngmodel has more than one param, just use first one');
        this.onSelectedDate(value[0]);
      } else if (value.length === 1) {
        this._dateModelType = 1;
        this.onSelectedDate(value[0]);
      } else {
        this._dateModelType = 2;
        this.onSelectedDate(value[0]);
        this.onSelectedDate(value[1]);
      }
    } else if (value && value instanceof Date) {
      this._dateModelType = 3;
      this.onSelectedDate(value);
    }
  }

  registerOnChange(fn: (date: Date | Array<Date>) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchFn = fn;
  }

  receiveProps(nextProps: CalendarPropsType) {
    if (nextProps.visible && nextProps.defaultValue) {
      this.shortcutSelect(nextProps.defaultValue[0], nextProps.defaultValue[1], nextProps);
    }
  }

  showAnimation() {
    if (this._enterDirection === 'horizontal') {
      this.contentAnimateClass = 'slideH-enter slideH-enter-active';
    } else {
      this.contentAnimateClass = 'slideV-enter slideV-enter-active';
    }
    this.maskAnimateClass = 'fade-enter fade-enter-active';
  }

  hideAnimation() {
    if (this._enterDirection === 'horizontal') {
      this.contentAnimateClass = 'slideH-leave slideH-leave-active';
    } else {
      this.contentAnimateClass = 'slideV-leave slideV-leave-active';
    }
    this.maskAnimateClass = 'fade-leave fade-leave-active';
  }

  selectDate = (
    date: Date,
    useDateTime = false,
    oldState: { startDate?: Date; endDate?: Date } = {},
    props = this.props
  ) => {
    if (!date) {
      return {} as CalendarStateType;
    }
    let newState = {} as CalendarStateType;
    const { type, pickTime, defaultTimeValue, locale = {} as DateModels.Locale } = props;
    const newDate = pickTime && !useDateTime ? mergeDateTime(date, defaultTimeValue) : date;
    const { startDate, endDate } = oldState;

    switch (type) {
      case 'one':
        newState = {
          ...newState,
          startDate: newDate,
          disConfirmBtn: false
        };
        if (pickTime) {
          newState = {
            ...newState,
            timePickerTitle: locale.selectTime,
            showTimePicker: true
          };
        }
        break;

      case 'range':
        if (!startDate || endDate) {
          newState = {
            ...newState,
            startDate: newDate,
            endDate: undefined,
            disConfirmBtn: true
          };
          if (pickTime) {
            newState = {
              ...newState,
              timePickerTitle: locale.selectStartTime,
              showTimePicker: true
            };
          }
        } else {
          newState = {
            ...newState,
            timePickerTitle:
              +newDate >= +startDate || this.isSameDate(startDate, newDate)
                ? locale.selectEndTime
                : locale.selectStartTime,
            disConfirmBtn: false,
            endDate:
              pickTime && !useDateTime && (+newDate >= +startDate || this.isSameDate(startDate, newDate))
                ? new Date(+mergeDateTime(newDate, startDate) + 3600000)
                : newDate
          };
        }
        break;
    }

    this.writeModelData(date);
    return newState;
  }

  writeModelData(date) {
    if (this._dateModelValue instanceof Array) {
      this._dateModelTime = this._dateModelValue.length;
    } else {
      this._dateModelTime = 0;
    }

    switch (this._dateModelType) {
      case 1:
        this._dateModelValue = [date];
        this.onChangeFn(this._dateModelValue);
        break;
      case 2:
        if (this._dateModelTime === 1) {
          if (+date < +this._dateModelValue[0]) {
            this._dateModelValue.unshift(date);
          } else {
            this._dateModelValue.push(date);
          }
          this.onChangeFn(this._dateModelValue);
        } else {
          this._dateModelValue = [];
          this._dateModelValue.push(date);
        }
        break;
      case 3:
        this._dateModelValue = date;
        this.onChangeFn(this._dateModelValue);
        break;
      default:
        break;
    }
  }

  onSelectedDate = (date: Date) => {
    const { startDate, endDate } = this.state;
    const { onSelect } = this.props;

    if (onSelect) {
      const value = onSelect(date, [startDate, endDate]);
      if (value) {
        this.shortcutSelect(value[0], value[1]);
        return;
      }
    }

    this.state = {
      ...this.state,
      ...this.selectDate(date, false, { startDate, endDate })
    };

    this.showClear = !!this.state.startDate;
  }

  triggerSelectHasDisableDate = (date: Date[]) => {
    this.triggerClear();
    if (this.onSelectHasDisableDate) {
      this.onSelectHasDisableDate.emit(date);
    }
  }

  onClose = () => {
    this.state = {
      showTimePicker: false,
      timePickerTitle: '',
      startDate: undefined,
      endDate: undefined,
      disConfirmBtn: true,
      clientHight: 0
    } as CalendarStateType;
    this.showClear = !!this.state.startDate;
  }

  triggerConfirm = () => {
    const { startDate, endDate } = this.state;
    if (startDate && endDate && +startDate > +endDate) {
      this.onClose();
      return this.onConfirm && this.onConfirm.emit({ startDate: endDate, endDate: startDate });
    }
    if (this.onConfirm) {
      this.onConfirm.emit({ startDate, endDate });
    }
    this.onClose();
  }

  triggerCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
    this.onClose();
    if (this.onCancel) {
      this.onCancel.emit();
    }
  }

  triggerClear = () => {
    // 清除数据做延迟，否则同步刷新数据导致报错
    setTimeout(() => {
      this.state = {
        ...this.state,
        ...{ startDate: undefined, endDate: undefined, showTimePicker: false }
      };
      if (this.props.onClear) {
        this.props.onClear();
      }
      this.showClear = !!this.state.startDate;
    }, 0);
  }

  onTimeChange = (date: Date) => {
    const { startDate, endDate } = this.state;
    if (endDate) {
      this.state.endDate = date;
    } else if (startDate) {
      this.state.startDate = date;
    }
  }

  shortcutSelect = (startDate: Date, endDate: Date, props = this.props) => {
    this.state = {
      ...this.state,
      ...{ startDate, showTimePicker: false },
      ...this.selectDate(endDate, true, { startDate }, props)
    };
    this.showClear = !!this.state.startDate;
  }

  setClientHeight = (height: number) => {
    this.state.clientHight = height;
  }

  ngOnInit() {
    const defaultValue = this.props.defaultValue;
    if (defaultValue) {
      this.state = {
        ...this.state,
        ...this.selectDate(defaultValue[1], true, { startDate: defaultValue[0] }, this.props)
      };
    }

    this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe(_ => {
      this.props.locale = { ...this._localeProviderService.getLocaleSubObj('Calendar') } as DateModels.Locale;
    });
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  private onChangeFn: (date: Date | Array<Date>) => void = () => {};
  private onTouchFn: (date: Date | Array<Date>) => void = () => {};
}
