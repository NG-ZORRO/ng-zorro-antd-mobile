---
category: Components
type: Data Entry
title: SearchBar
subtitle: 搜索栏
---

一般可位于 NavBar 下方，通过『取消按钮』退出激活状态。

### 规则

- 应该在 placeholder 里提供提示文字，提醒用户输入相关内容，比如：双11特卖。
- 在搜索栏下方，可提供有用的标签文案，帮助用户通过点击直接完成输入，比如：列出一些最近搜索的关键词。

## API

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[defaultValue]` | 搜索框的默认值 | `string` | - |
| `[value]` | 搜索框的当前值 | `string` | - |
| `[placeholder]` | placeholder | `string` | - |
| `[showCancelButton]` | 是否一直显示`取消`按钮 | `boolean` | `false` |
| `[cancelText]` | 定制`取消`按钮的文字 | `string` | `'取消'` |
| `[disabled]` | 设置禁用 | `boolean` | `false` |
| `[maxLength]` | 最多允许输入的字符个数 | `number` | - |
| `[(ngModel)]` | 当前值，可双向绑定 | `string`| - |
| `(ngModelChange)` | 值改变时回调 | `EventEmitter<string>` | - |
| `(onSubmit)` | submit 事件 (点击键盘的 enter) | `EventEmitter<string>` | - |
| `(onChange)` | change 事件的回调 | `EventEmitter<string>` |- |
| `(onFocus)` | focus 事件的回调 | `EventEmitter<void>` | - |
| `(onBlur)` | blur 事件的回调 | `EventEmitter<void>` | - |
| `(onCancel)` | 点击`取消`按钮触发 | `EventEmitter<string>` | - |
| `(onClear)` | 点击 clear 图标触发 | `EventEmitter<string>` | - |
| `(focus)` | SearchBar 聚焦时的回调事件 | `EventEmitter<void>` | - |
