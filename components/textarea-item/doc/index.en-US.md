---
category: Components
type: Data Entry
title: TextareaItem
---


A foundational component for inputting multi-line text into the app via a keyboard.

### Rule
- Support text input via keyboard or clipboard.
- The cursor can be moved horizontally.


## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[value]` | the value to show for the textarea for more information about controlled component | `string` | - |
| `[defaultValue]` | provides an initial value that will change when the user starts typing | `string` | - |
| `[placeholder]` | the string that will be rendered before text input has been entered | `string` | - |
| `[editable]` | whether is editable | `boolean` | `true` |
| `[disabled]` | whether is disabled | `boolean` | `false` |
| `[clear]` | whether to display the clear icon (it takes effect only if `editable` is `true` and `disabled` is `false`) | `boolean` | `false` |
| `[rows]` | sets the number of lines for a textarea | `number` | `1` |
| `[count]` | it is used for word count and maxlength, the default is 0 which indicates that word count is turned off | `number` | - |
| `(error)` | whether to display error | `boolean` | `false` |
| `[autoHeight]` | auto adjust height (only use one of `autoHeight` and `rows` properties) | `boolean` | `false` |
| `[autoFocus]` | auto get focus when init | `boolean` | `false` |
| `[labelNumber]` | number of label text, valid value is 2 to 7 | `number` | `5` |
| `[name]` | the name of textarea | `string` | - |
| `[prefixListCls]` | the class name prefix of list | `string` | `'am-list'` |
| `[title]` | the description of textarea | `string \| TemplateRef` | - |
| `[focus]` | Force focus back onto the input node | `{ focus: boolean }` | - |
| `[(ngModel)]` | Current value | `string` | - |
| `(onChange)` | callback that is called when the textarea's text changes | `EventEmitter<string>` | - |
| `(onBlur)` | callback that is called when the textarea is blurred | `EventEmitter<string>` | - |
| `(onFocus)` | callback that is called when the textarea is focused | `EventEmitter<string>` | - |
| `(onErrorClick)` | callback that is called when the error icon is clicked | `EventEmitter<void>` | - |
