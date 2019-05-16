import { DateModels } from '../date/DataTypes';

export interface DatepickerPropsType {
  defaultDate?: Date;
  startDate?: Date;
  endDate?: Date;
  getDateExtra?: (date: Date) => DateModels.ExtraData;
  infiniteOpt?: boolean;
  initalMonths?: number;
  locale?: DateModels.Locale;
  maxDate?: Date;
  minDate?: Date;
  onCellClick?: (date: Date) => void;
  onLayout?: (clientHight: number) => void;
  onSelectHasDisableDate?: (date: Date[]) => void;
  prefixCls?: string;
  rowSize?: 'normal' | 'xl';
  type?: 'one' | 'range';
}
