---
category: Components
type: Data Entry
title: PickerView
---

PickerView's functions like Picker, but it is rendered directly in the area instead of the pop-up window.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[data]` | data source | `Array<{value, label}> \| Array<Array<{value, label}> `| - |
| `[cascade]` | whether cascade | `boolean` | `true` |
| `[cols]` | col numbers | `number` | `3` |
| `[itemStyle]` | style to apply to each of the item labels | `object` | - |
| `[indicatorStyle]` | style of indicator  | `object` | - |
| `[(ngModel)]` | the value, the format is `[value1, value2, value3]`, corresponds to the level value of the data source | `Array` | - |
| `(ngModelChange)` | selected callback function | `EventEmitter<any[]>` | - |
