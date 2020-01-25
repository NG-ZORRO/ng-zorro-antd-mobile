---
category: Components
type: Data Entry
title: SearchBar
---

Normally located below NavBar, the activation status is exited by the Cancel button.

### Rules

- Should fill some text in placeholder to remind the user to enter the relevant content, such as: "双11特卖".
- Below the SearchBar, you can provide useful labels copy to help users complete the input directly by clicking, such as: List some of the most recent search keywords.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[defaultValue]` | the uncontrolled default value | `string` | - |
| `[value]` | the controlled current value | `string` | - |
| `[placeholder]` | placeholder | `string` | - |
| `[showCancelButton]` | 是否一直显示`取消`按钮 | `boolean` | `false` |
| `[cancelText]` | Customize the text of the `Cancel` button | `string` | `'Cancel'` |
| `[disabled]` | Set disabled | `boolean` | `false` |
| `[maxLength]` | The maxlength attribute limits the number of characters that SearchBar can accept | `number` | - |
| `[(ngModel)]` | the controlled current value | `string`| - |
| `(ngModelChange)` | event callback | `EventEmitter<string>` | - |
| `(onSubmit)` | submit event (click the enter on the keyboard) | `EventEmitter<string>` | - |
| `(onChange)` | change event callback | `EventEmitter<string>` |- |
| `(onFocus)` | focus event callback | `EventEmitter<void>` | - |
| `(onBlur)` | blur event callback | `EventEmitter<void>` | - |
| `(onCancel)` | Click the `Cancel` button to trigger | `EventEmitter<string>` | - |
| `(onClear)` | Click the clear icon to trigger | `EventEmitter<string>` | - |
| `(focus)` | Callback event when SearchBar focus | `EventEmitter<void>` | - |
