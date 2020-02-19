---
category: Components
type: Data Entry
title: TextareaItem
subtitle: 多行输入
---


用于接受多行文本。

### 规则
- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在垂直或者水平方向进行移动。


## API

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[value]` | value | `string` | - |
| `[defaultValue]` | 设置初始默认值 | `string` | - |
| `[placeholder]` | placeholder | `string` | - |
| `[editable]` | 是否可编辑 | `boolean` | `true` |
| `[disabled]` | 是否禁用 | `boolean` | `false` |
| `[clear]` | 是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效) | `boolean` | `false` |
| `[rows]` | 显示几行 | `number` | `1` |
| `[count]` | 计数功能,兼具最大长度,默认为0,代表不开启计数功能 | `number` | - |
| `[error]` | 报错样式 | `boolean` | `false` |
| `[autoHeight]` | 高度自适应, autoHeight 和 rows 请二选一 | `boolean` | `false` |
| `[autoFocus]` | 初始化自动获得焦点 | `boolean` | `false` |
| `[labelNumber]` | 定宽枚举值：`num * @input-label-width: 34px`，可用`2-7`之间的数字，一般(不能保证全部)能对应显示出相应个数的中文文字(不考虑英文字符) | `number` | `5` |
| `[name]` | textarea 的 name | `string` | - |
| `[prefixListCls]` | 列表 className 前缀 | `string` | `'am-list'` |
| `[title]` | 文案说明 | `string \| TemplateRef` | - |
| `[focus]` | 强制获得焦点 | `{ focus: boolean }` | - |
| `[(ngModel)]` | value | `string` | - |
| `(onChange)` | change 事件触发的回调函数 | `EventEmitter<string>` | - |
| `(onBlur)` | blur 事件触发的回调函数 | `EventEmitter<string>` | - |
| `(onFocus)` | focus 事件触发的回调函数 | `EventEmitter<string>` | - |
| `(onErrorClick)` | 点击报错 icon 触发的回调 | `EventEmitter<void>` | - |
