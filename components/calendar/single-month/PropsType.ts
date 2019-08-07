import { DateModels } from '../date/DataTypes';

export interface CalendarSingleMonthPropsType {
  locale: DateModels.Locale;
  monthData: DateModels.MonthData;
  rowSize?: 'normal' | 'xl';
  getDateExtra?: (date: Date) => DateModels.ExtraData;
  onCellClick?: (data: DateModels.CellData, monthData: DateModels.MonthData) => void;
  ref: any;
}
