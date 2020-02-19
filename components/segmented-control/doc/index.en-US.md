---
category: Components
type: Navigation
title: SegmentedControl
---

`SegmentedControl` includes at least two segments, it is used to display diffrent views and recommended by `iOS`.

### Rule
- It is similar to the functionality used for `Tabs`, so avoid to use them at same page as much as possible.
- You can use `SegmentedControl` with `NavBar` to display mutiple views.
- Generally there should be no more than 5 segments in one line, each segment has 2-4 words and needs simplified texts.
- Keep the length of the text consistent as much as possible.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[tintColor]` | Accent color of the control | `string` | `'#2DB7F5'` |
| `[disabled]` | Whether the user is able to interact with the control | `boolean` | `false` |
| `[selectedIndex]` | The index of the segment to be (pre)selected | `number` | `0` |
| `[values]` | The labels for the control's segment buttons, in order | `array` | `[]` |
| `(onChange)` | Callback that is called when the user taps a segment; passes the event object as an argument | `EventEmitter<{selectedIndex: number, value: any}>` | - |
