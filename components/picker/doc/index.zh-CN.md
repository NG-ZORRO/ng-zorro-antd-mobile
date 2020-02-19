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

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[data]` | 数据源 | `Array<{value, label, children: Array}>` | - |
| `[cols]` | 列数 | `number` | `3` |
| `[okText]` | 选中的文案 | `string` | `'确定'` |
| `[dismissText]` | 取消选中的文案 | `string` | `'取消'` |
| `[title]` | 大标题 | `string` | - |
| `[disabled]` | 是否不可用 | `boolean` | `false` |
| `[cascade]` | 是否联动 | `boolean` | `true` |
| `[indicatorStyle]` | indicator的样式 | `object` | - |
| `[(ngModel)]` | 当前值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层value | `Array` | - |
| `(onChange)` | 选中后的回调 | `EventEmitter<object>` | - |
| `(onPickerChange)` | 每列数据选择变化后的回调函数 | `EventEmitter<object>` | - |
| `(ngModelChange)` | 点击选中时执行的回调 | `EventEmitter<any[]>` | - |
| `(onDismiss)` | 点击取消时执行的回调 | `EventEmitter<void>`  | - |

> **注：** 组件不再提供默认的城市初始化数据。


### PickerService.showPicker(config, confirm?, cancel?)
参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `config` | 初始化配置 | `{data: [], value: [],...}` | - |
| `confirm` | 选中后的回调 | `(val) => void` | - |
| `cancel` | 点击取消时执行的回调 | `() => void` | - |

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
| `afterOpen` | 和 AfterOpen 一样, 但返回值是`Observable` |
| `afterClose` | 和 AfterClose 一样, 但返回值是`Observable` |
| `close(result: any) => void` | 关闭(隐藏)对话框 <i>注：当用于以服务方式创建的对话框，此方法将直接 销毁 对话框（同destroy方法）</i> |
| `destroy(result: any) => void` | 销毁对话框 <i>注：仅用于服务方式创建的对话框（非服务方式创建的对话框，此方法只会隐藏对话框）</i> |
| `getContentComponent() => Component` | 获取对话框内容中Content的Component实例instance <i>注：当对话框还未初始化完毕（`ngOnInit`未执行）时，此函数将返回`undefined`</i> |
