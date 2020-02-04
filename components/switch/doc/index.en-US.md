---
category: Components
type: Data Entry
title: Switch
---



Select between two status, e.g. Select On or Off.

### Rules
- Used in `List` only.
- There is no need to add extra text to describe the value of  `Switch` .


## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[checked]` | Whether is checked by default | `boolean` | `false` |
| `[disabled]` | Whether is disabled | `boolean` | `false` |
| `[color]` | Background color when the switch is turned on | `string` | `'#4dd865'` |
| `[name]` | Name of `switch` | `string` | - |
| `[platform]` | Set the special style depends on platform | `'ios' \| 'android'` | `'ios'`|
| `[(ngModel)]` | Current selected value | `boolean` | `false` |
| `(onChange)` | The callback function that is triggered when the selected state changes | `EventEmitter<boolean>` | - |
| `(onClick)` | Callback event of click | `EventEmitter<boolean>` | - |
