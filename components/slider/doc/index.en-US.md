---
category: Components
type: Data Entry
title: Slider
---

A Slider component for selecting particular value in range, eg: controls the display brightness of the screen.

### Rule
- By default, the minimum value in the left and maximum value in the right of `Silder` .
- Generally `Slider` is positioned horizontally.


## Common API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[min]` | The minimum value the slider can slide to | `number` | `0` |
| `[max]` | The maximum value the slider can slide to | `number` | `100` |
| `[step]` | The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When `marks` no null, `step` can be `null` | `number \| null` | `1` |
| `[value]` | The value of slider | `number` | - |
| `[defaultValue]` | The default value of slider | `number` | `0` |
| `[disabled]` | If true, the slider will not be interactable | `boolean` | `false` |
| `[marks]` | Tick mark of Slider, type of key must be number, and must in closed interval min, max | `{ [_: number]: string }` | `{ }` |
| `[handleStyle]` | The style used for handle | `object` | - |
| `[trackStyle]` | The style used for the track to the left of the button | `object` | - |
| `[railStyle]` | The style used for the track to the right of the button | `object` | - |
| `[(ngModel)]` | The value of slider | `number` | - |
| `(ngModelChange)` | Callback function that is called when the user changes the slider's value | `EventEmitter<number>` | - |
| `(onChange)` | Callback function that is called when the user changes the slider's value | `EventEmitter<number>` | - |
| `(onAfterChange)` | Fired when `ontouchend` is fired | `EventEmitter<number>` | - |
