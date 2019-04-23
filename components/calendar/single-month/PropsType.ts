import { Models } from '../date/DataTypes';

export interface CalendarSingleMonthPropsType {
  locale: Models.Locale;
  monthData: Models.MonthData;
  rowSize?: 'normal' | 'xl';
  getDateExtra?: (date: Date) => Models.ExtraData;
  onCellClick?: (data: Models.CellData, monthData: Models.MonthData) => void;
  ref: any;
}