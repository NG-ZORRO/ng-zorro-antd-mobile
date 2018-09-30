---
category: Components
type: Data Entry
title: Picker
---

Choose from a set of data, e.g. Country choice.

### Rules
- Try to use Picker to help users complete the input, to avoid the user through the keyboard directly input.
- DatePicker is Picker's specific pattern.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| data    | data source      | `Array<{value, label, children: Array}>` |   -  |
| value   | the value, the format is `[value1, value2, value3]`, corresponds to the level value of the data source   | Array  | - |
| cols    | col numbers   | Number |  `3`  |
| onChange | selected callback function | (val): void | - |
| onPickerChange | trigger on each column of selected data is changed  | (val): void | - |
| okText  | ok text | String |  `确定`  |
| dismissText  | dismiss text | String |  `取消`  |
| onOk  | handler called when click ok | (val): void  |  - |
| onDismiss  | handler called when click cancel | (): void  |  -  |
| title  | title | String | - |
| disabled  | set disabled | Boolean | false |
| cascade  | whether is cascade mode | Boolean | true |
