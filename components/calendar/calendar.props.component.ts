import { DateModels } from './date/DataTypes';
export type SelectDateType = [Date, Date] | [Date];

export interface CalendarHeaderPropsType {
  title?: string;
  locale?: DateModels.Locale;
  showClear?: boolean;
  onCancel?: () => void;
  onClear?: () => void;
  closeIcon?: any;
  clearIcon?: any;
}

export interface CalendarPropsType {
  enterDirection?: 'horizontal' | 'vertical';
  locale?: DateModels.Locale;
  onCancel?: () => void;
  onClear?: () => void;
  onConfirm?: (startDateTime?: Date, endDateTime?: Date) => void;
  pickTime?: boolean;
  prefixCls?: string;
  renderShortcut?: (select: (startDate?: Date, endDate?: Date) => void) => any;
  renderHeader?: (prop: CalendarHeaderPropsType) => any;
  showShortcut?: boolean;
  style?: any;
  title?: string;
  type?: 'one' | 'range';
  visible?: boolean;
  defaultValue?: SelectDateType;

  defaultDate?: Date;
  getDateExtra?: (date: Date) => DateModels.ExtraData;
  infiniteOpt?: boolean;
  initalMonths?: number;
  maxDate?: Date;
  minDate?: Date;
  onSelectHasDisableDate?: (date: Date[]) => void;
  onSelect?: (date: Date, state?: [Date | undefined, Date | undefined]) => SelectDateType | void;
  rowSize?: 'normal' | 'xl';

  defaultTimeValue?: Date;
  timePickerPrefixCls?: string;
  timePickerPickerPrefixCls?: string;
}
