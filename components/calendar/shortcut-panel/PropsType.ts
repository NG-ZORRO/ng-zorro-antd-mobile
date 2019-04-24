import { Models } from '../date/DataTypes';

export interface CalendarShortcutPanelPropsType {
  locale: Models.Locale;
  onSelect: (startDate?: Date, endDate?: Date) => void;
}