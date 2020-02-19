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

#### showActionSheetWithOptions(options: Object, callback: Function)

Display a action sheet. The `options` object must contain one or more of:

- options (array of strings) - a list of button titles (required)
- cancelButtonIndex (int) - index of cancel button in `options`
- destructiveButtonIndex (int) - index of destructive button in `options`
- title (string) - a title to show above the action sheet
- message (string/TemplateRef) - a message to show below the title
- maskClosable (bool) - Whether it's allowed to close when you click the mask (default true)

The `callback` function support returns Promise 

#### showShareActionSheetWithOptions(options: Object, callback: Function)

Display shareable action sheet. The `options` object must contain one or more of:

- options (array of `{icon: TemplateRef | innerHTML, title: string}`) - a list of share buttons (required)
    - It can be a two-dimensional array, can display multi-line buttons, e.g. `[[{icon,title},...],...]` means two rows and two columns. In this case there are two parameters on `callback`, the first for the `column` sequence, the second for the `line`.
- cancelButtonText (string) - the text of cancel button, default `Cancel`
- title (string) - a title to show above the action sheet
- message (string/React.element) - a message to show below the title
- maskClosable (bool) - Whether it's allowed to close when you click the mask (default true)
- locale - international, can override the configuration of the global `[LocaleProvider](https://ng.mobile.ant.design/components/locale-provider/en)` | Object: { dismissText}

The `callback` function support returns Promise 

#### showShareActionSheetWithOptions(options: Object, failureCallback: Function, successCallback: Function)


Display shareable action sheet.

- **options:**
  - message(`string`): a message to share
  - title(`string`): title of the message
  - url(`string`): an URL to share `iOS only`
  - excludedActivityTypes(`array`): the activities to exclude from the ActionSheet `iOS only`
- **Callback**:
  - failureCallback(error): callback is called if share failed;
  - successCallback(completed, method): callback is called if share successed;

#### close() - programmatically close.

call ActionSheetService.showShareActionSheetWithOptions(options?).close()` can close Operation ActionSheet outside anywhere as you wish.


```ts
constructor(actionSheet: ActionSheetService) {
  const ref: ActionSheetService = actionSheet.showShareActionSheetWithOptions(
      {
        options: this.dataList,
        title: 'action-title',
        message: 'I am description, description, description'
      },
      buttonIndex => {
        return new Promise(resolve => {
          setTimeout(resolve, 1000);
        });
      }
    );
  ref.close(); // Or ref.destroy(); This dialog will be destroyed directly
}
```

#### ActionSheetRef

> ActionSheetRef object is used to control dialogs and communicate with inside content

The dialog created by the service method `ActionSheetService.xxx()` will return a `ActionSheetRef` object that is used to manipulate the dialog , This object has the following methods:

| Method | Description |
|----|----|
| `afterOpen` | Same as `AfterOpen` but of type Observable&lt;void&gt; |
| `afterClose` | Same as `AfterClose`, but of type Observable&lt;result:any&gt; |
| `close(result: any) => void` | Close (hide) the dialog. <i>Note: When used for a dialog created as a service, this method will destroy the dialog directly (as with the destroy method)</i> |
| `destroy(result: any) => void` | Destroy the dialog. <i>Note: Used only for dialogs created by the service (non-service created dialogs, this method only hides the dialog)</i> |
| `getContentComponent() => Component`| Gets the Component instance in the contents of the dialog for `Content`. <i> Note: When the dialog is not initialized (`ngOnInit` is not executed), this function will return `undefined`</i> |
