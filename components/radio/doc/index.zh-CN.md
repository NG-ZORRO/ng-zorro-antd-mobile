---
category: Components
type: Data Entry
title: Radio
subtitle: 单选框
---

单选框

## API

### Radio

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[name]` | name | `string` | - |
| `[value]` | value | `string` | - |
| `[checked]` | 指定当前是否选中  | `boolean` | - |
| `[disabled]` | 禁用 | `boolean` | `false` |
| `(onChange)` | change 事件触发的回调函数 | `EventEmitter<name: string, value: string, checked: boolean>` | - |

### RadioItemGroup

单选框组合，包裹一组RadioItems。

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[(ngModel)]` | 指定选中的RadioItem对应的value | `string \| number` | - |
| `(onChange)` | RadioItem选中变化时的回调 | `EventEmitter<{name, value}>` | - |

### RadioItem

基于`ListItem`对`Radio`进行封装,`ListItem`的`extra`属性固定传入`Radio`,其他属性和`ListItem`一致(除了onClick回调事件不可用之外，因为在这里是由RadioItemGroup传递回调事件)。

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[name]` | name | `string` | - |
| `[value]` | value | `string` | - |
| `[disabled]` | 禁用 | `boolean` | `false` |
