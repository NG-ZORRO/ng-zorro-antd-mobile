---
category: Components
type: Data Display
title: NoticeBar
subtitle: 通告栏
---

在导航栏下方，一般用作系统提醒、活动提醒等通知。

### 规则
- 需要引起用户关注时使用，重要级别低于 Modal ，高于 Toast。

## API

## NoticeBar
参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[option]` | 公告栏参数 | `object` | `{mode: '', icon: '', action: '', content: '', fontSize: '14px', scrolling: true, marqueeProps: { loop: true, leading: 500, trailing: 8000, fps: 200, style: {} }}` |

## option 公告栏参数
参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[mode]` | 提示类型 | `'closable' \| 'link'` | - |
| `[icon]` | 在开始位置设置图标 | `TemplateRef` | - |
| `[action]` | 用于替换操作 icon 的文案 | `TemplateRef` | - |
| `[content]` | 设置公告内容 | `string`| |
| `[fontSize]`| 公告栏内容字体大小，用于公告栏内容长度计算 | `string` | `14px` |
| `[scrolling]`| 设置是否滚动 | `boolean` | `true` |
| `[marqueeProps]` | marquee 参数 | `object` | `{loop: false, leading: 500, trailing: 800, fps: 40, style: {}}` |
| `(onClick)` | 点击关闭或者操作区域的回调函数 | `EventEmitter<void>` | - |
