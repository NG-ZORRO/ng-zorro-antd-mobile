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
| name    |   name  | String |   -  |
| value    |  value  | String |   -  |
| checked    |   to set the current checked state  | Boolean  | -  |
| disabled      |  whether disabled  | Boolean |  false  |
| onChange    | a callback function, can be executed when the checked state changes | (name: string, value: string, checked: boolean) => void |  -  |

### RadioItem

The encapsulation about `Radio` based on `ListItem`, the property `extra` of `ListItem` will be passed to `Radio`, while other properties remain the same.

Other APIs are identical with `Radio`.
