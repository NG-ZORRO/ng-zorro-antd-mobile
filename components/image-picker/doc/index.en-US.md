---
category: Components
type: Data Entry
title: ImagePicker
---

Note: Just for selecting picture. Generally `ImagePicker` is used to select picture before uploading, but without the feature of uploading.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| `[files]` | Picture files array which includes `url`(required) in each object | `Array` | `[]` |
| `[selectable]` | Whether to show selector button | `boolean` | `true` |
| `[multiple]` | Whether support choose multi images at once | `boolean` | `false` |
| `[accept]` | File type accept | `string` | `'image/*'` |
| `[length]` | Number of images in line | `number` | `4` |
| `[capture]` | Image capture setting, please refer to the description of capture in [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input) | `boolean \| string` | `false` |
| `[disableDelete]` | Whether to hide delete icon | `boolean` | `false` |
| `(onChange)` | Callback is called when the value of `files` is changed. The `operationType` is one of `add` or `remove`(the third argument is the removed index) | `EventEmitter<{files: object, operationType: string, index: number}>` | - |
| `(onImageClick)` | Callback is called when the user clicks the selected picture | `EventEmitter<{index: number, files: object}>` | - |
| `(onAddImageClick)` | Callback is called when the selector button is clicked | `EventEmitter<void>` | - |
| `(onFail)` | Failed selection | `EventEmitter<string>` | - |
