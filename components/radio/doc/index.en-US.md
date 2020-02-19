---
category: Components
type: Data Entry
title: Radio
---

Radio.

## API

### Radio

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[name]` | name | `string` | - |
| `[value]` | value | `string` | - |
| `[checked]` | To set the current checked state  | `boolean` | - |
| `[disabled]` | Whether disabled | `boolean` | `false` |
| `(onChange)` | A callback function, can be executed when the checked state changes | `EventEmitter<name: string, value: string, checked: boolean>` | - |


###RadioItemGroup

RadioItems group，wrap a group of RadioItem.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[(ngModel)]` | Specifies which value is selected, double binding | `string | number` | - |
| `(onChange)` | The callback function when current selected RadioItem change | `EventEmitter<{name, value}>` | - |

### RadioItem

The encapsulation about `Radio` based on `ListItem`, the property `extra` of `ListItem` will be passed to `Radio`, while other properties remain the same(except for onClick, cause RadioItemGroup will emit the onChange output).

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[name]` | name | `string` | - |
| `[value]` | value | `string` | - |
| `[disabled]` | 禁用 | `boolean` | `false` |