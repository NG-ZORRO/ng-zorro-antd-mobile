---
category: Components
type: Data Entry
title: Range
---


A `Range` component for selecting particular value in range, eg: controls the display brightness of the screen.


### Rule

- By default, the minimum value in the left and maximum value in the right of `Silder` .
- Generally `Slider` is positioned horizontally.


## Common API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| min    |  Number     | 0     | The minimum value the slider can slide to. |
| max    |  Number     | 100    | The maximum value the slider can slide to. |
| step    |  Number or null     | 1    | The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When `marks` no null, `step` can be `null`. |
| value    |  [Number, Number]|     | The value of Range. |
| defaultValue    |  [Number, Number]   | [0, 0]    | The default value of Range. |
| disabled    |  Boolean     | false    | If true, the slider will not be interactable. |
| onChange    |  Function     | Noop    | Callback function that is called when the user changes the Range's value. |
| onAfterChange    |  Function     | Noop    | Fired when `ontouchend` is fired. |
| marks      |  Object{Number:String}     | { }    | Tick mark of Range, type of key must be number, and must in closed interval [min, max]. |
| count | number | `1` | Determine how many ranges to render, and multiple handles will be rendered (number + 1). |
| allowCross | boolean | `true` | `allowCross` could be set as `true` to allow those handles to cross. |
| pushable |  number | `true` | minimum ensured distance between handles |
| handleStyle    |  Array[Object]    |    | style of handle，will be applied to mutli handle follow the array elemetns order |
| trackStyle  | Array[Object]     |    | style of track，will be applied to mutli track follow the array elemetns order |
| railStyle   |  Object     |   | style of slider base style, which means the area that not been selected |
