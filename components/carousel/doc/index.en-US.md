---
category: Components
type: Data Display
title: Carousel
---

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[selectedIndex]` | current selected index | `number` | `0` |
| `[dots]` | whether to display the indication dots | `boolean`  | `true` |
| `[vertical]` | this prop controls the content display direction | `boolean`  | `false` |
| `[autoplay]` | autoplay mode active | `boolean`  | `false` |
| `[autoplayInterval]` | interval for autoplay iteration | `number` | `3000` |
| `[infinite]` | whether is infinite loop | `boolean`  | `false` |
| `[dotStyle]` | style of dots | `object` | - |
| `[dotActiveStyle]` | style of active dot | `object` | - |
| `[swipeSpeed]` | configure the swipe sensitivity | `number` | `12` |
| `[dragging]` | whether to slide with drag | `boolean` | `（子元素大于1时为true， 否则为false）` |
| `(afterChange)` | callback to be called after a slide is changed | `EventEmitter<number>` | - |