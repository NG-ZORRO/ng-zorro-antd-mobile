---
category: Components
type: Data Entry
title: DatePickerView
---

DatePickerView's functions like DatePicker, but it is rendered directly in the area instead of the pop-up window.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[mode]`| Mode value | `'year' \| 'month' \| 'date' \| 'time' \| 'datetime'` | `'date'` |
| `[minDate]` | Minimum date | `Date` | `2000-1-1` |
| `[maxDate]` | Maximum date | `Date` | `2030-1-1` |
| `[locale]` | International, can override the configuration of the global `[LocaleProvider](https://ng.mobile.ant.design/components/locale-provider/en)` | `{DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText }` | - |
| `[disabled]` | Disabled | `boolean` | `false`  |
| `[indicatorStyle]` | Style of indicator | `object` | - |
| `[showErrorToast]` | Toast error message | `boolean` | `true` |
| `[showErrorToastInterval]` | Toast error message interval | `number` | `2000` |
| `[(ngModel)]` | Fire when picker col change | `Date` | `new Date()` |
| `(onChange)` | Change handler | `EventEmitter<{date: object}>` | - |
| `(onValueChange)` | Fire when picker col change | `EventEmitter<{date: object, index: string}>` | - |
