---
category: Components
type: Data Entry
title: InputItem
subtitle: 文本输入
---


用于接受单行文本。


### 规则
- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在水平方向进行移动。
- 对特定格式的文本进行处理，eg：隐藏密码。


## API

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[type]` | 可以是银行卡`bankCard`; 手机号`phone`(此时最大长度固定为11,`maxLength`设置无效); 密码`password`; 数字`number`(为了尽量唤起`带小数点`的数字键盘，此类型并不是原生 number，而是`<input type="text" pattern="[0-9]*" />`); `digit`(表示原生的 number 类型); `money` 以及其他标准 html input type 类型 | `string` | `'text'` |
| `[value]` | value | `string` | - |
| `[defaultValue]` | 设置初始默认值 | `string` | - |
| `[placeholder]` | placeholder | `string` | - |
| `[editable]` | 是否可编辑 | `boolean` | `true` |
| `[disabled]` | 是否禁用 | `boolean` | `false` |
| `[clear]` | 是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效) | `boolean` | `false` |
| `[maxLength]` | 最大长度 | `number` | - |
| `[error]` | 是否显示报错样式 | `boolean` | `false` |
| `[extra]` | 右边注释 | `string \| TemplateRef` | - |
| `[labelNumber]` | 标签的文字个数，可用`2-7`之间的数字 | `number` | `5` |
| `[content]` | 标签内容支持string和模版 | `string \| TemplateRef` | - |
| `[updatePlaceholder]` | 当清除内容时，是否将清除前的内容替换到 placeholder 中 | `boolean` | `false` |
| `[prefixListCls]` | 列表 className 前缀 | `string` | `'am-list'` |
| `[moneyKeyboardAlign]` | 文字排版起始方向, 只有 `type='money'` 支持 | `'left' \| 'right'` | `'right'` |
| `[locale]` | 国际化，可覆盖全局的配置, 当`type`为`money`，可以自定义确认按钮的文案 | `{ confirmLabel }` | - |
| `(onErrorClick)` | 点击报错 icon 触发的回调函数 | `EventEmitter<object>` | - |
| `(onExtraClick)` | extra 点击事件触发的回调函数 | `EventEmitter<object>` | - |
| `(onChange)` | change 事件触发的回调函数 | `EventEmitter<string>` | - |
| `(onBlur)` | blur 事件触发的回调函数 | `EventEmitter<string>` | - |
| `(onFocus)` | focus 事件触发的回调函数 | `EventEmitter<string>` | - |
| `(focus)` | 使 input 聚焦 | `EventEmitter<void>` | - |

> 注意: `InputItem` 当 `type=number` 时不支持输入负号, 你可以利用 `type=text` 来自己实现。
