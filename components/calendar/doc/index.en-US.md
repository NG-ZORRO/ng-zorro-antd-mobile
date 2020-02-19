---
category: Components
type: Data Entry
title: Calendar
---

Used to select a date range.

### Rules
-

## API

Properties | Description | Type | Default
-----------|------------|------|--------
| `[enterDirection]` | Enter direction | `'horizontal' \| 'vertical'` | `'vertical'` |
| `[locale]` | Locale | `DateModels.Locale` | - |
| `[pickTime]` | If pick time | `boolean` | `false` |
| `[prefixCls]` | Prefix class | `string` | `rmc-calendar` |
| `[showShortcut]` | Show shortcut | `boolean` | `false` |
| `[type]` | Select type. one: one-day range: date range | `'one' \| 'range'` | `'range'` |
| `[visible]` | Visiable | `boolean` | `false` |
| `[defaultDate]` | The default date for show | `Date` | `today` |
| `[getDateExtra]` | Extra info | `(date: Date) => DateModels.ExtraData` | - |
| `[initalMonths]` | Inital months | `number` | `6` |
| `[maxDate]` | Max date | `Date` | - |
| `[minDate]` | Min date | `Date` | - |
| `[rowSize]` | Row size | `'normal' \| 'xl'` | - |
| `[defaultValue]` | Default date select value | `[Date, Date] \| [Date]` | - |
| `[defaultTimeValue]` | Default time of timePicker | `Date` |  -  |
| `[onSelect]` | On select dates callback | `(date: Date, state?: [Date \| undefined, Date \| undefined]) => [Date, Date] \| [Date] \| void` | - |
| `[(ngModel)]` | ngModel | `Array<Date> \| Date` | `Date` |
| `(onCancel)` | On cancel | `EventEmitter<void>` | - |
| `(onConfirm)` | On confirm | `EventEmitter<{startDateTime?: Date, endDateTime?: Date}>` | - |
| `(onSelectHasDisableDate)` | On select has disable date | `(date: Date[]) => void` | - |
