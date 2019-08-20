---
category: Components
type: Data Entry
title: Picker
---

Choose from a set of data, e.g. Country choice.

### Rules
- Try to use Picker to help users complete the input, to avoid the user through the keyboard directly input.
- DatePicker is Picker's specific pattern.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| ngModel | Current selected value, the format is `[value1, value2, value3]`, corresponds to the level value of the data source,double binding | Array | - |
| data    | data source      | `Array<{value, label, children: Array}>` |   -  |
| cols    | col numbers   | Number |  `3`  |
| onChange | selected callback function | (val): void | - |
| onPickerChange | trigger on each column of selected data is changed  | (val): void | - |
| okText  | ok text | String |  `确定`  |
| dismissText  | dismiss text | String |  `取消`  |
| ngModelChange | handler called when click ok | EventEmitter<any[]>  |  - |
| onDismiss  | handler called when click cancel | (): void  |  -  |
| title  | title | String | - |
| disabled  | set disabled | Boolean | false |
| cascade  | whether is cascade mode | Boolean | true |
| indicatorStyle  | style of indicator | Object | - |

> **注：** Don't support default city initialization data any more。

### PickerService.showPicker(config, confirm?, cancel?)
Properties | Descrition | Type | Default
-----------|------------|------|--------
| config    | init config       | {data: [], value: [],...}    | -           |
| confirm    | handler called when click ok       | (val): void     | -           |
| cancel    | handler called when click cancel       | (): void     | -           |

call PickerService.showPicker(actions?).close()` can close Operation Picker outside anywhere as you wish.


```ts
constructor(picker: PickerService) {
  const ref: PickerRef =  picker.showPicker(
      { value: this.value, data: this.singleArea },
      result => {
        this.name = this.getResult(result);
        this.value = this.getValue(result);
      },
      cancel => {
        console.log('cancel');

      }
    );
  ref.close(); // Or ref.destroy(); This dialog will be destroyed directly
}
```

#### PickerRef

> PickerRef object is used to control dialogs and communicate with inside content

The dialog created by the service method `PickerService.xxx()` will return a `PickerRef` object that is used to manipulate the dialog , This object has the following methods:

| Method | Description |
|----|----|
| afterOpen                 | Same as AfterOpen but of type Observable&lt;void&gt; |
| afterClose | Same as AfterClose, but of type Observable&lt;result:any&gt; |
| close()                   | Close (hide) the dialog. <i>Note: When used for a dialog created as a service, this method will destroy the dialog directly (as with the destroy method)</i> |
| destroy()                 | Destroy the dialog. <i>Note: Used only for dialogs created by the service (non-service created dialogs, this method only hides the dialog)</i> |
| getContentComponent()  | Gets the Component instance in the contents of the dialog for `Content`. <i> Note: When the dialog is not initialized (`ngOnInit` is not executed), this function will return `undefined`</i> |