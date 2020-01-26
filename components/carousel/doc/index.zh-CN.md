---
category: Components
type: Data Display
title: Carousel
subtitle: 走马灯
---

走马灯，轮播图

## API

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[selectedIndex]` | 手动设置当前显示的索引 | `number` | `0` |
| `[dots]` | 是否显示面板指示点 | `boolean`  | `true` |
| `[vertical]` | 垂直显示 | `boolean`  | `false` |
| `[autoplay]` | 是否自动切换 | `boolean`  | `false` |
| `[autoplayInterval]` | 自动切换的时间间隔 | `number` | `3000` |
| `[infinite]` | 是否循环播放 | `boolean`  | `false` |
| `[dotStyle]` | 指示点样式 | `object` | - |
| `[dotActiveStyle]` | 当前激活的指示点样式 | `object` | - |
| `[swipeSpeed]` | 滑动灵敏度 | `number` | `12` |
| `[dragging]` | 是否允许滑动切换 | `boolean` | `（子元素大于1时为true， 否则为false）` |
| `(afterChange)` | 切换面板后的回调函数 | `EventEmitter<number>` | - |