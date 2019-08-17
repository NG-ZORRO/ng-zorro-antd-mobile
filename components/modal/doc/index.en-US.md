---
category: Components
type: Feedback
title: Modal
---

Use to show important information for the system, and ask for user feedback. eg: When deleting an important content, pop up a Modal for secondary confirmation.

### Rules
- Use as few as possible. Modal will interrupt user operation, only use it at important situation.
- Title should be concise, do not exceed 1 line; description should be concise and complete, generally no more than 2 lines.
- Operation buttons are up to 3(vertical), generally 1-2(horizontal); [ActionSheet](/components/action-sheet) is preferred when there are more than 3 actions.
- Generally put the most likely clicked button on the right side. In addition, the cancel button should always be on the left.

## API

### Modal

Properties | Descrition | Type | Default
-----------|------------|------|--------
| visible | Determine whether a modal dialog is visible or not | Boolean | false |
| closable | Determine whether a close (x) button is visible or not | Boolean | false |
| maskClosable | Determine whether to close the modal dialog when clicked mask of it | Boolean | true |
| onClose | Callback for clicking close icon x or mask | (): void | - |
| transparent | transparent mode or full screen mode | Boolean | false |
| popup | popup mode | Boolean | false |
| animationType | Options: 'slide-down/up' / 'fade' / 'slide' | String | fade |
| title | title | TemplateRef | - |
| footer | footer content | Array [{text, onPress}] | [] |
| platform  | set the special style depends on platform, Options `android`, `ios` | String | `ios` |

### ModalService.alert(title, message, actions?)

Properties | Descrition | Type | Default
-----------|------------|------|--------
| title | title | String or TemplateRef | -  |
| message | message  | String or TemplateRef  | -  |
| actions | button group, [{text, onPress, style}]  | Array | -  |

call `ModalService.alert(title, message, actions?).close()`  can close Alert Modal outside anywhere as you wish.

### ModalService.prompt(title, message, callbackOrActions, type?, defaultValue?)

Properties | Descrition | Type | Default
-----------|------------|------|--------
| title | title | String or TemplateRef | -  |
| message | message  | String or TemplateRef  | -  |
| callbackOrActions  | button group [{text, onPress}] or callback | Array or Function | -  |
| type  | prompt style | String (`default`, `secure-text`, `login-password`)|  `default`  |
| defaultValue  | ['', ''] | String[] | -  |
| placeholders  | ['', ''] | String[] | -  |

call ModalService.prompt(title, message, callbackOrActions, type?, defaultValue?, placeholders?).close()` can close prompt Modal outside anywhere as you wish.

### ModalService.operation(actions?) ( Support Platform：WEB )

Properties | Descrition | Type | Default
-----------|------------|------|--------
| actions | button group, [{text, onPress, style}]  | Array | -  |

call ModalService.operation(actions?).close()` can close Operation Modal outside anywhere as you wish.


```ts
constructor(modal: ModalService) {
  const ref: ModalRef = modal.alert();
  ref.close(); // Or ref.destroy(); This dialog will be destroyed directly
}
```

### Related type definition

#### Other Methods/Attributes for ModalService

| Methods/Attributes | Description | Type |
|----|----|
| openModals | All currently open Modal list | ModalRef[] |
| afterAllClose | Callback called after all Modals closed completely | Observable&lt;void&gt; |
| closeAll() | Close all modals | function |

#### ModalRef

> ModalRef object is used to control dialogs and communicate with inside content

The dialog created by the service method `ModalService.xxx()` will return a `ModalRef` object that is used to manipulate the dialog , This object has the following methods:

| Method | Description |
|----|----|
| afterOpen                 | Same as AfterOpen but of type Observable&lt;void&gt; |
| afterClose | Same as AfterClose, but of type Observable&lt;result:any&gt; |
| close()                   | Close (hide) the dialog. <i>Note: When used for a dialog created as a service, this method will destroy the dialog directly (as with the destroy method)</i> |
| destroy()                 | Destroy the dialog. <i>Note: Used only for dialogs created by the service (non-service created dialogs, this method only hides the dialog)</i> |
| getContentComponent()  | Gets the Component instance in the contents of the dialog for `Content`. <i> Note: When the dialog is not initialized (`ngOnInit` is not executed), this function will return `undefined`</i> |
| triggerOk()               | Manually trigger onClose |
| triggerCancel()           | Manually trigger cancel |
