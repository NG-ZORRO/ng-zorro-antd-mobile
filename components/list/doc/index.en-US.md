---
category: Components
type: Data Display
title: List
---

A single and continuous block content is vertically arranged to display current contents, status and available operations. eg：Contact List.

<!-- In case you need an infinite scroll list - consider using [ListView](https://mobile.ant.design/components/list-view/) component. -->

### Rule
- Generally `List` consists of main infomation, main operations, secondary infomation and secondary operations.
- The main infomation and main operations are placed on the left side of list, and secondary infomation and secondary operations are placed on the right side.


## API

### List

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[renderHeader]` | list heder | `string \| TemplateRef` | - |
| `[renderFooter]` | list footer | `string \| TemplateRef` | - |

### ListItem

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[thumb]` | thumbnail on the left side of `List`(string type will be used to set img src) | `string \| TemplateRef` | - |
| `[extra]` | extra content on the right side of `List` | `string \| TemplateRef` | - |
| `[arrow]` | arrow direction，`empty` option may hide the dom | `'horizontal' \| 'up' \| 'down' \| 'empty'` | - |
| `[align]` | vertical alignment of child elements | `'top' \| 'middle' \| 'bottom'` | `'middle'` |
| `[error]` | Whether to display error style(the color of text on the right side may change to orange) | `boolean` | `false` |
| `[multipleLine]` | multiple line | `boolean` | `false` |
| `[wrap]` | Whether to wrap long texts, otherwise it will be hidden by default | `boolean` | `false` |
| `[platform]` | set the special style depends on platform, default to be `cross`， which means we will detect UA and change the component style | `'android' \| 'ios' \| 'cross'` | `'cross'` |
| `(onClick)` | callback is called when list is clicked | `EventEmitter<void>` | - |

### Brief

Brief infomation
