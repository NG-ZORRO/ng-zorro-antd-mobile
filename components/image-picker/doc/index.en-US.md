---
category: Components
type: Data Entry
title: ImagePicker
---

Note: Just for selecting picture. Generally `ImagePicker` is used to select picture before uploading, but without the feature of uploading.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| files    | Picture files array which includes `url`(required) in each object | Array  | []  |
| onChange    |   Callback is called when the value of `files` is changed. The `operationType` is one of `add` or `remove`(the third argument is the removed index).| (files: Object, operationType: string, index: number): void | <span> </span> |
| onImageClick   | Callback is called when the user clicks the selected picture | (index: number, files: Object): void | <span> </span> |
| onAddImageClick | Callback is called when the selector button is clicked   | (): void | <span> </span> |
| onFail | failed selection | (msg: string): void | <span> </span> |
| selectable | whether to show selector button  | boolean |  true |
| multiple | whether support choose multi images at once  | boolean |  false |
| accept | File type accept  | string |  image/* |
| length | Number of images in line  | number | 4 |