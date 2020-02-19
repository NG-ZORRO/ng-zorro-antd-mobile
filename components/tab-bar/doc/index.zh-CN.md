---
category: Components
type: Navigation
title: TabBar
subtitle: 标签栏
---

位于 APP 底部，方便用户在不同功能模块之间进行快速切换。

### 规则
- 用作 APP 的一级分类，数量控制在 3-5 个之间。
- 即使某个 Tab 不可用，也不要禁用或者移除该 Tab。
- 使用 Badge 进行提示，足不出户也能知道有内容更新。

## API

### TabBar

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[activeTab]` | 当前激活Tab索引 | `number` | `0` |
| `[barTintColor]` | tabbar 背景色 | `string` | `'white'` |
| `[tintColor]` | 选中的字体颜色 | `string` | `'#108ee9'` |
| `[unselectedTintColor]` | 未选中的字体颜色 | `string` | `'#888'` |
| `[hidden]` | 是否隐藏 | `boolean` | `false` |
| `[tabBarPosition]` | tabbar 位置 | `'top'\|'bottom'` | `'bottom'` |
| `[prerenderingSiblingsNumber]`| 预加载两侧Tab数量, -1: 加载所有的tab内容, 0: 仅加载当前tab内容, n: 预加载两侧n个Tab | `number` | `-1` |
| `(onPress)` | bar 点击触发 | `EventEmitter<{index: number, title: string, key: string}>` | - |

### TabBarItem

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[badge]` | 徽标数 | `number \| string` | - |
| `[dot]` | 是否在右上角显示小红点（在设置badge的情况下失效） | `boolean` | `false` |
| `[icon]` | 默认展示的内容 | `TemplateRef` | - |
| `[selectedIcon]` | 选中后展示的内容 | `TemplateRef` | - |
| `[title]` | 标题文字 | `string` | - |
| `[key]` | 唯一标识 | `string` | - |
