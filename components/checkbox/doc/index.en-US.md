---
category: Components
type: Data Entry
title: Checkbox
---

Checkbox

## API

### Checkbox

| Properties | Descrition | Type | Default |
| ---------- | ---------- | ---- | ------- |
| `[name]` | name | `string` | - |
| `[value]` | value | `string` | - |
| `[checked]` | Whether is checked now (Controlled Mode) | `boolean` | - |
| `[disabled]` | Whether is been disabled | `boolean` | `false` |
| `(onChange)` | Callback when check status is changed | `EventEmitter<{name: string, value: string, checked: boolean}>` | - |

### CheckboxItem

The encapsulation about `Checkbox` based on `ListItem`, the property `thumb` of `ListItem` will be passed to `Checkbox`, while other properties remain the same (except for onClick, which has been changed to onChange).

| Properties | Descrition | Type | Default |
| ---------- | ---------- | ---- | ------- |
| `[name]` | name | `string` | - |
| `[value]` | value | `string` | - |
| `[disabled]` | Whether is been disabled | `boolean` | `false` 
| `[(ngModel)]` | Whether is checked now | `boolean` | `false` |
| `(onChange)` | Callback when check status is changed | `EventEmitter<{name: string, value: string, checked: boolean}>` | - |

### AgreeItem

Almost the same as CheckboxItem and be used for special scenes. See demo for details.

| Properties | Descrition | Type | Default |
| ---------- | ---------- | ---- | ------- |
| `[name]` | name | `string` | - |
| `[value]` | value | `string` | - |
| `[disabled]` | Whether is been disabled | `boolean` | `false` |
| `[(ngModel)]` | Whether is checked now | `boolean` | `false` |
| `(onChange)` | Callback when check status is changed | `EventEmitter<{name: string, value: string, checked: boolean}>` | - |
