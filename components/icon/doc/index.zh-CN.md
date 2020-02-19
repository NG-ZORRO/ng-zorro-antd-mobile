---
category: Components
type: Data Display
title: Icon
subtitle: 图标
---



## 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

## 如何使用 (WEB 版)

```html
<Icon [type]="'check'"></Icon>
```

### 提示

现在，我们只支持内置的 'check-circle', 'check', 'check-circle-o', 'cross-circle', 'cross', 'cross-circle-o', 'up', 'down', 'left', 'right', 'ellipsis', 'loading' 这些 icon 类型，**不再默认支持其他自定义类型的 icon**。你如果需要用你自定义的 icon 类型，有这几种方法：

1. 使用自己的 iconfont 文件
2. 其他方法，可以复用我们已经提供的 `.am-icon` 样式名

## API

| 参数 | 说明 | 类型 | 默认值 |
|------------|----------------|----------------|--------------|
| `[type]` | 内置 icon 名称 或 unicode | `string` | - |
| `[size]` | 图标大小 | `'xxs' \| 'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` |
| `[color]` | 图标颜色 | `string` | `'#000'` |
