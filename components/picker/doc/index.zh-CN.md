---
category: Components
type: Data Entry
title: Picker
subtitle: 选择器
---

在一组预设数据中进行选择，e.g. 省市区选择。

### 规则
- 尽量使用 Picker 来帮助用户完成输入，避免用户通过键盘直接输入。
- DatePicker 是 Picker 的特定模式。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| ngModel | 当前值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层value, 可双向绑定 | Array | - |
| data    | 数据源        | `Array<{value, label, children: Array}>` |   -  |
| cols    | 列数        | Number |  `3`  |
| onChange | 选中后的回调 | (val): void | - |
| onPickerChange | 每列数据选择变化后的回调函数   | (val): void | - |
| okText  | 选中的文案 | String |  `确定`  |
| dismissText  | 取消选中的文案 | String |  `取消`  |
| ngModelChange  | 点击选中时执行的回调 | EventEmitter<any[]>  | - |
| onDismiss  | 点击取消时执行的回调 | (): void  |  无  |
| title  | 大标题 | String | - |
| disabled  | 是否不可用 | Boolean | false |
| cascade  | 是否联动 | Boolean | true |

> **注：** 组件不再提供默认的城市初始化数据。


### PickerService.showPicker(config, confirm?, cancel?)
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| config    | 初始化配置       | {data: [], value: [],...}    | 无           |
| confirm    | 选中后的回调       | (val): void     | 无           |
| cancel    | 点击取消时执行的回调       | (): void     | 无           |

以上函数调用后，会返回一个引用，可以通过该引用关闭弹窗。

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
  ref.close(); // 或 ref.destroy(); 将直接销毁对话框
}
```

#### PickerRef

> PickerRef 对象用于控制对话框以及进行内容间的通信

通过服务方式 `PickerService.xxx()` 创建的对话框，都会返回一个 `PickerRef` 对象，该对象具有以下方法：

| 方法/属性 | 说明 |
|----|----|
| close(result: any)        | 关闭(隐藏)对话框。<i>注：当用于以服务方式创建的对话框，此方法将直接 销毁 对话框（同destroy方法）</i> |
| destroy(result: any)      | 销毁对话框。<i>注：仅用于服务方式创建的对话框（非服务方式创建的对话框，此方法只会隐藏对话框）</i> |
| getContentComponent()     | 获取对话框内容中Content的Component实例instance。<i>注：当对话框还未初始化完毕（`ngOnInit`未执行）时，此函数将返回`undefined`</i> |
