import { Models } from '../date/DataTypes';

export default interface PropsType {
  defaultDate?: Date;
  startDate?: Date;
  endDate?: Date;
  getDateExtra?: (date: Date) => Models.ExtraData;
  infiniteOpt?: boolean;
  initalMonths?: number;
  locale?: Models.Locale;
  maxDate?: Date;
  minDate?: Date;
  onCellClick?: (date: Date) => void;
  onLayout?: (clientHight: number) => void;
  onSelectHasDisableDate?: (date: Date[]) => void;
  prefixCls?: string;
  rowSize?: 'normal' | 'xl';
  type?: 'one' | 'range';
}
