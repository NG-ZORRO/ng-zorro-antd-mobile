---
category: Components
type: Layout
title: Flex
---


Flex is a wrap of  Flexible Box.



## API

### Flex

Properties | Descrition | Type | Default
----|-----|------|------
| `[direction]` | how flex items are placed in the flex container | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'` | `'row'` |
| `[wrap]` | the wrap way of sub-elements | `'nowrap' \| 'wrap' \| 'wrap-reverse'`  | `'nowrap'` |
| `[justify]` | the way of alignment for sub-elements of main axis | `'start' \| 'end' \| 'center' \| 'between' \| 'around'` | `'start'` |
| `[align]` | the way of alignment for sub-elements of cross-axis  | `'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch'` | `'center'` |
| `[alignContent]` | the way of alignment when have multiple axes | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'stretch'`  | `'stretch'` |

### Flex.Item

Flex.Item component has style `flex:1` as default, ensure all items average division width, Flex container‘s children maybe not Flex.Item.
