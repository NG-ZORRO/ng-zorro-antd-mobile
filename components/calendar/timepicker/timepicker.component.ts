import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import { zh_CN, en_US } from '../../locale-provider/locale';
import { CalendarTimePickerPropsType } from './PropsType';

@Component({
  selector: 'CalendarTimePicker, nzm-calendar-time-picker',
  templateUrl: './timepicker.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CalendarTimePickerComponent {
  defaultProps = {
    minDate: new Date(0, 0, 0, 0, 0),
    maxDate: new Date(9999, 11, 31, 23, 59, 59),
    defaultValue: new Date(2000, 1, 1, 8),
    mode: 'time',
    datePickerViewLocale: zh_CN
  } as CalendarTimePickerPropsType;

  props = {
    minDate: new Date(0, 0, 0, 0, 0),
    maxDate: new Date(9999, 11, 31, 23, 59, 59),
    defaultValue: new Date(2000, 1, 1, 8),
    mode: 'time',
    datePickerViewLocale: zh_CN
  } as CalendarTimePickerPropsType;

  selfHeight: string;

  @Input()
  set propsData(value) {
    this.props = {
      ...this.props,
      ...value
    };

    if (this.props.locale && this.props.locale.today === 'Today') {
      this.props.datePickerViewLocale = en_US;
    } else {
      this.props.datePickerViewLocale = zh_CN;
    }
  }
  @Input()
  set title(value) {
    this.props.title = value;
  }
  @Input()
  set value(value) {
    this.props.value = value;
  }
  @Input()
  set prefixCls(value) {
    this.props.prefixCls = value;
  }
  @Input()
  set defaultValue(value) {
    this.props.defaultValue = value;
  }
  @Input()
  set pickerPrefixCls(value) {
    this.props.pickerPrefixCls = value;
  }
  @Input()
  set clientHeight(value) {
    this.props.clientHeight = value;
    const height = (value && (value * 3) / 8 - 52) || Number.POSITIVE_INFINITY;
    this.selfHeight = (height > 164 || height < 0 ? 164 : height) + 'px';
  }
  @Input()
  set onValueChange(value) {
    this.props.onValueChange = value;
  }

  @HostBinding('class.time-picker')
  timePicker: boolean = true;

  constructor() {}

  onDateChange = (date: { date: Date; index: number }) => {
    const { onValueChange } = this.props;
    if (onValueChange) {
      onValueChange(date.date);
    }
  }

  getMinTime(date?: Date) {
    const minDate = this.props.minDate as Date;
    if (
      !date ||
      date.getFullYear() > minDate.getFullYear() ||
      date.getMonth() > minDate.getMonth() ||
      date.getDate() > minDate.getDate()
    ) {
      return this.defaultProps.minDate;
    }
    return minDate;
  }

  getMaxTime(date?: Date) {
    const maxDate = this.props.maxDate as Date;
    if (
      !date ||
      date.getFullYear() < maxDate.getFullYear() ||
      date.getMonth() < maxDate.getMonth() ||
      date.getDate() < maxDate.getDate()
    ) {
      return this.defaultProps.maxDate;
    }
    return maxDate;
  }
}
