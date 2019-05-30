---
category: Components
type: Feedback
title: Toast
subtitle: 轻提示
---


一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。


### 规则
- 一次只显示一个 toast。
- 有 Icon 的 Toast，字数为 4-6 个；没有 Icon 的 Toast，字数不宜超过 14 个。


## API

- `ToastService.success(content, duration, onClose, mask)`
- `ToastService.fail(content, duration, onClose, mask)`
- `ToastService.info(content, duration, onClose, mask)`
- `ToastService.loading(content, duration, onClose, mask)`
- `ToastService.offline(content, duration, onClose, mask)`

组件提供了五个静态方法，参数如下：

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| content    | 提示内容       | TemplateRef or String    | 无           |
| duration   | 自动关闭的延时，单位毫秒 | number                 | 3000          |
| onClose    | 关闭后回调 |  Function                 | 无          |
| mask    | 是否显示透明蒙层，防止触摸穿透 |  Boolean  | true          |
| position    | enum{'top', 'middle', 'bottom'} |  string  | 'middle'      |

> **注：**  duration = 0 时，onClose 无效，toast 不会消失；隐藏 toast 需要手动调用 hide

还提供了全局配置和全局销毁方法：

- `ToastService.hide()`
