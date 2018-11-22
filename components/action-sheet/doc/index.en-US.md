---
category: Components
type: Feedback
title: ActionSheet
---

The modal box pops up from the bottom, providing more than two actions related to the current scene, and also support provide the title and description. Built-in fixed display style, does not support particularly flexible changes.

### Rules

- Provide a clear exit button.
- Can highlight the destructive operation, e.g. "delete" use red text.
- Do not place too much content to avoid vertical roll of the panel.


## API
Before use，entryComponents should be added in corresponding module，such as：`entryComponents: [ActionSheetComponent]`.

#### static showActionSheetWithOptions(options: Object, callback: Function)

Display a action sheet. The `options` object must contain one or more of:

- options (array of strings) - a list of button titles (required)
- cancelButtonIndex (int) - index of cancel button in `options`
- destructiveButtonIndex (int) - index of destructive button in `options`
- title (string) - a title to show above the action sheet
- message (string/TemplateRef) - a message to show below the title
- maskClosable (bool) - Whether it's allowed to close when you click the mask (default true)

The `callback` function support returns Promise 

#### static showShareActionSheetWithOptions(options: Object, callback: Function)

Display shareable action sheet. The `options` object must contain one or more of:

- options (array of `{icon: TemplateRef | innerHTML, title: string}`) - a list of share buttons (required)
    - It can be a two-dimensional array, can display multi-line buttons, e.g. `[[{icon,title},...],...]` means two rows and two columns. In this case there are two parameters on `callback`, the first for the `column` sequence, the second for the `line`.
- cancelButtonText (string) - the text of cancel button, default `取消`
- title (string) - a title to show above the action sheet
- message (string/React.element) - a message to show below the title
- maskClosable (bool) - Whether it's allowed to close when you click the mask (default true)

The `callback` function support returns Promise 

#### static showShareActionSheetWithOptions(options: Object, failureCallback: Function, successCallback: Function)


Display shareable action sheet.

- **options:**
  - message(`string`): a message to share
  - title(`string`): title of the message
  - url(`string`): an URL to share `iOS only`
  - excludedActivityTypes(`array`): the activities to exclude from the ActionSheet `iOS only`
- **Callback**:
  - failureCallback(error): callback is called if share failed;
  - successCallback(completed, method): callback is called if share successed;

#### static close() - programmatically close.
