---
category: Components
type: Data Display
title: Grid
---

We divided the design area into a number of aliquots in horizontal and vertical.

### Rules
- The contents of the blocks should have the same type. eg: they are all pictures or icons with text.


## API

Properties | Description | Type | Default
-----------|------------|------|--------
| `[data]` | Data record array to be rendered  | `Array<{icon: string, text: string}>` | `[]` |
| `[columnNum]` | The number of columns  | `number` | `4` |
| `[hasLine]` | Whether to show border  | `boolean` | `true` |
| `[isCarousel]` | Whether to be played as a Carousel,  | `boolean` | `false` |
| `[carouselMaxRow]` | The max number of rows to be showed each page of the Carousel | `number` | `2` |
| `[square]` | Whether each item restrict to a square | `boolean` | `true` |
| `[itemStyle]`| Custom GridCell Style | `{}` |
| `[activeStyle]` | Whether to show active style when click | `boolean` | `true` |
| `(onClick)` | Handler to be called when the user taps the grid | `EventEmitter<{data: object, index: number}>` | - |

> **注：** support dynamic ng-content in Grid.
