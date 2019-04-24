import { Models } from '../date/DataTypes';

export interface CalendarConfirmPanelPropsType {
  type?: 'one' | 'range';
  locale: Models.Locale;
  onlyConfirm?: boolean;
  disableBtn?: boolean;
  startDateTime?: Date;
  endDateTime?: Date;
  formatStr?: string;
  onConfirm: () => void;
}