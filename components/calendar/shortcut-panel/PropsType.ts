import { DateModels } from '../date/DataTypes';

export interface CalendarShortcutPanelPropsType {
  locale: DateModels.Locale;
  onSelect: (startDate?: Date, endDate?: Date) => void;
}
