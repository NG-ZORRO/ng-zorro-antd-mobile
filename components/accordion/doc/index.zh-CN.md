---
category: Components
type: Data Display
title: Accordion
subtitle: 手风琴
---

可以折叠/展开的内容区域。

### 规则
- 对复杂区域进行分组和隐藏。
- 通常，一次只允许单个内容区域展开；特殊情况，多个内容区域可以同时展开。


## API

### Accordion

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[activeKey]` | 当前激活 tab 面板的 key, accordion模式下默认第一个元素 | `Array \| string` | - |
| `[defaultActiveKey]` | 初始化选中面板的 key | `string` | - |
| `[accordion]` | `手风琴`模式 | `boolean` | `false` |
| `(onChange)` | 切换面板的回调 | `EventEmitter<string>` | - |

### AccordionPanel

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[key]` | 对应 activeKey | `string` | - |
| `[header]` | 面板头内容 | `string \| TemplateRef` | - |

注意: 目前暂不支持嵌套使用
