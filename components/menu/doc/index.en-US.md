---
category: Components
type: Navigation
title: Menu
---

Show a seires of operations on a panel.

### Rules

- Should includes more than 2 menu items.
- Should not be used as main navigation.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[data]` | `Menu` data (children will be ignored when `isLeaf` is true) | `Array<{label: string, value, disabled?, children<data>?, isLeaf?}>` | `[]` |
| `[level]` | `Menu` levels  | `1 \| 2`  | `2` |
| `[value]` | Selected value of `Menu`, it's a array which includes first and second level's `value`. When menu is in multiple select mode, if level is `1`, all values of array mean multiple select options; if level is `2`, the first value of array means first level's option, second value is an array of submenu values | `Array` | - |
| `[height]` | Height of `Menu` | `number` | `document.documentElement.clientHeight / 2` |
| `[multiSelect]` | Support multiple selection | `boolean` | `false` |
| `(onChange)` | Callback called when menu item is selected | `EventEmitter<object>` | - |
| `(onOk)` | Callback called when ok button is clicked | `EventEmitter<object>` | - |
| `(onCancel)` | Callback called when cancle button is clicked | `EventEmitter<void>` | - |
