---
category: Components
type: Gesture
title: SwipeAction
---

iOS-style swipeout buttons that appear from behind a component.

### Definition

Call out oprations from one side of screen with gesture.

### Rules
1. Only one row can be swiped at a time.
2. Can hide oprations by clicking outside of buttons or swiping the list backforwards.

## API

### SwipeAction

Properties | Descrition | Type | Default
-----------|------------|------|--------|
| `[left]` | Left buttons for `swipeout` | `Array` | - |
| `[right]` | Right buttons for `swipeout` | `Array` | - |
| `[autoClose]` | Auto hide after button is pressed | `boolean` | `false` |
| `[disabled]` | Whether is disabled | `boolean` | `false` |
| `(onOpen)` | Callback function that is triggered when the buttons will be opened | `EventEmitter<void>` | - |
| `(onClose)` | Callback function that is triggered when the buttons will be closed | `EventEmitter<void>` | - |

### Button

| Properties | Descrition | Type | Default |
|------|------------------|-------------------------|--------|
| `[text]` | Text of button | `string` | `'Click'` |
| `[style]` | Style of button | `object` | `{}` |
| `[onPress]` | Callback function that is triggered when button will be pressed | `EventEmitter<void>` | - |
| `[className]` | Class name of button | `string` | - |
