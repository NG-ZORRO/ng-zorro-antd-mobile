---
category: Components
type: Data Entry
title: InputItem
---

A foundational component for inputting text into the app via a keyboard.

### Rule
- Support text input via keyboard or clipboard.
- The cursor can be moved horizontally.
- Handle text with a specific format, eg: hide password.


## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[type]` | Can be `bankCard`; `phone`(which the maxLength is 11 and setting will be ignored); `password`; `number`(in order to evoke the 'numeric keyboard with decimal', this type is not a native number, but `<input type="text" pattern="[0-9]*"/>`); `digit`(represent the native type number); `money`; As well as other standard html input type values | `string` | `'text'` |
| `[value]` | The value of input for more information about controled component | `string` | - |
| `[defaultValue]` | Provides an initial value that will change when the user starts typing | `string` | - |
| `[placeholder]` | The string that will be rendered before text input has been entered | `string` | - |
| `[editable]` | Whether is editable | `boolean` | `true` |
| `[disabled]` | Whether is disabled | `boolean` | `false` |
| `[clear]` | Whether to display clear(it takes effect only `editable` is `true` and `disabled` is `false` has been set) | `boolean` | `false` |
| `[maxLength]` | Limits the maximum number of characters that can be entered | `number` | - |
| `[error]` | Whether to display error | `boolean` | `false` |
| `[extra]` | The right content of `InputItem` | `string \| TemplateRef` | - |
| `[labelNumber]` | Number of label text, valid value is 2 to 7 | `number` | `5` |
| `[content]` | Content of label text | `string \| TemplateRef` | - |
| `[updatePlaceholder]` | Whether to replace the placeholder with cleared content | `boolean` | `false` |
| `[prefixListCls]` | The class name prefix of list | `string` | `'am-list'` |
| `[moneyKeyboardAlign]` | Text align direction, only `type='money'` support this api | `'left' \| 'right'` | `'right'` |
| `[compositionFilter]` | When it is `true` , input mode of PinYin, the value never change before finish input, you can search `compositionstart` event to know more | `boolean` | `true` |
| `[locale]` | International，can override global configuration,  when`type`is`money`，can cunstom the keyboard confirm item's label | `{ confirmLabel }` | - |
| `[focus]` | Force focus back onto the input node | `{ focus: true }` | - |
| `(onErrorClick)` | Callback that is called when the error icon is clicked | `EventEmitter<object>` | - |
| `(onExtraClick)` | Callback that is called when the extra content is clicked | `EventEmitter<object>` | - |
| `(onChange)` | Callback that is called when the text input's text changes | `EventEmitter<string>` | - |
| `(onBlur)` | Callback that is called when the text input is blurred | `EventEmitter<string>` | - |
| `(onFocus)` | Callback that is called when the text input is focused | `EventEmitter<string>` | - |

> Note: `InputItem` does not support negative number if `type` is text, you can use `type=text` to do that.
