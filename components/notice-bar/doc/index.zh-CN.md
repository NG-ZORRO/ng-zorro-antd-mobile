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

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| option | 公告栏参数 | Object | `{mode: '', icon: '', action: '', content: '', fontSize: '14px', scrolling: true, marqueeProps: { loop: true, leading: 500, trailing: 8000, fps: 200, style: {} },};`|

## option 公告栏参数
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| mode    | 提示类型，可选 `closable`,`link`   | String |  ''  |
| icon    | 在开始位置设置图标  |  TemplateRef | |
| action | 用于替换操作 icon 的文案 | TemplateRef | <span> </span> |
| content | 设置公告内容 | String| |
| fontSize| 公告栏内容字体大小，用于公告栏内容长度计算 | String | `14px` |
| scrolling| 设置是否滚动 | boolean | true |
| marqueeProps | marquee 参数       | Object | `{loop: false, leading: 500, trailing: 800, fps: 40, style: {}}`  |
| onClick | 点击关闭或者操作区域的回调函数        | (): void | <span> </span> |
