import { DateModels } from '../date/DataTypes';

export interface CalendarConfirmPanelPropsType {
  type?: 'one' | 'range';
  locale: DateModels.Locale;
  onlyConfirm?: boolean;
  disableBtn?: boolean;
  startDateTime?: Date;
  endDateTime?: Date;
  formatStr?: string;
  onConfirm: () => void;
}
