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

**`InputItem` must wrapped by a [List](http://ng.mobile.ant.design/#/components/list/en)**

Properties | Descrition | Type | Default
-----------|------------|------|--------
| type    | can be `bankCard`; `phone`(which the maxLength is 11 and setting will be ignored); `password`; `number`(in order to evoke the 'numeric keyboard with decimal', this type is not a native number, but `<input type="text" pattern="[0-9]*"/>`); `digit`(represent the native type number); `money`; As well as other standard html input type values. | String |  `text`  |
| value | the value of input for more information about controled component)  | String |  <span> </span> |
| defaultValue | provides an initial value that will change when the user starts typing. | String |  -  |
| placeholder  | the string that will be rendered before text input has been entered. | String | ''  |
| editable    | whether is editable        | bool |  true  |
| disabled    | whether is disabled       | bool |  false  |
| clear      |  whether to display clear(it takes effect only `editable` is `true` and `disabled` is `false` has been set) | bool | false  |
| maxLength      |  limits the maximum number of characters that can be entered      | number |  <span> </span> |
| onChange    | callback that is called when the text input's text changes | (val: string): void |  -  |
| onBlur     | callback that is called when the text input is blurred | (val: string): void |   -  |
| onFocus    | callback that is called when the text input is focused | (val: string): void |  -  |
| error       | whether to display error       | bool |  false  |
| onErrorClick   | callback that is called when the error icon is clicked  | (e: Object): void | <span> </span> |
| extra       | the right content of `InputItem`   | string or node |  ''  |
| onExtraClick      | callback that is called when the extra content is clicked | (e: Object): void | <span> </span> |
| labelNumber  | number of label text, valid value is 2 to 7 | number | `5` |
| updatePlaceholder | whether to replace the placeholder with cleared content | bool | false|
| prefixListCls  |   the class name prefix of list      | String |  `am-list`  |
| moneyKeyboardAlign    | text align direction, only `type='money'` support this api， could be `'left'`, `'right'`       | String |  'right'  |
| locale   | 国际化，可覆盖全局的配置,  when`type`is`money`，can cunstom the keyboard confirm item's label | Object: { confirmLabel } |  无 |

> Note: `InputItem` does not support negative number if `type` is text, you can use `type=text` to do that.

## InputItem Instance methods

Property | Description | Type | Default
----|-----|------|------
| focus     | Force focus back onto the input node  | (): void |  -  |
