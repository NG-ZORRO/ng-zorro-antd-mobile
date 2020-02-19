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
| `[min]` | The minimum value the slider can slide to | `number` | `0` |
| `[max]` | The maximum value the slider can slide to | `number` | `100` |
| `[step]` | The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When `marks` no null, `step` can be `null` | `number \| null` | 1 |
| `[value]` | The value of Range | `Array<number>` | - |
| `[defaultValue]` | The default value of Range | `Array<number>` | `[0, 0]` |
| `[disabled]` | If true, the slider will not be interactable | `boolean` | `false` |
| `[onChange]` | Callback function that is called when the user changes the Range's value | `EventEmitter<Array<number>>` | - |
| `[onAfterChange]` | Fired when `ontouchend` is fired | `EventEmitter<Array<number>>` | - |
| `[marks]` | Tick mark of Range, type of key must be number, and must in closed interval [min, max] | `{ [_: number]: string }` | `{ }` |
| `[count]` | Determine how many ranges to render, and multiple handles will be rendered (number + 1) | `number` | `1` |
| `[allowCross]` | `allowCross` could be set as `true` to allow those handles to cross | `boolean` | `true` |
| `[pushable]` | minimum ensured distance between handles | `number` | - |
| `[handleStyle]` | style of handle，will be applied to mutli handle follow the array elemetns order | `Array<object>` | - |
| `[trackStyle]` | style of track，will be applied to mutli track follow the array elemetns order | `Array<object>` | - |
| `[railStyle]` | style of slider base style, which means the area that not been selected | `object` | - |
| `[(ngModel)]`| The value of slider | `number` | - |
| `(ngModelChange)` | Callback function that is called when the user changes the slider's value | `EventEmitter<Array<number>>` | - |
