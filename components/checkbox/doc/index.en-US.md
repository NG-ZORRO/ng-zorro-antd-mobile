---
category: Components
type: Data Entry
title: Checkbox
---

Checkbox

## API

### Checkbox

Properties | Descrition | Type | Default
-----------|------------|------|--------
| name    |   name  | String |   -  |
| value    |  value  | String |   -  |
| checked         |  whether is checked now (Controlled Mode)   | Boolean  | <span> </span> |
| disabled        |  whether is been disabled       | Boolean |  false  |
| onChange        | callback when check status is changed | (name: string, value: string, checked: boolean) => void |  -   |

### CheckboxItem

The encapsulation about `Checkbox` based on `ListItem`, the property `thumb` of `ListItem` will be passed to `Checkbox`, while other properties remain the same.

Other APIs are identical with `Checkbox`.

### AgreeItem

Almost the same as CheckboxItem and be used for special scenes. See demo for details.
