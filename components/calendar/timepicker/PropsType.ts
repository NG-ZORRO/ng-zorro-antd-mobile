import { DateModels } from '../date/DataTypes';

export interface CalendarTimePickerPropsType {
  locale: DateModels.Locale;
  prefixCls?: string;
  pickerPrefixCls?: string;
  title?: string;
  defaultValue?: Date;
  value?: Date;
  onValueChange?: (time: Date) => void;
  mode?: string;
  minDate?: Date;
  maxDate?: Date;
  clientHeight?: number;
  datePickerViewLocale?: any;
}
