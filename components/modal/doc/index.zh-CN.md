---
category: Components
type: Feedback
title: Modal
subtitle: 对话框
---

用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

### 规则
- 尽可能少用。Modal 会打断用户操作，只用在重要的时候。
- 标题应该简明，不能超过 1 行；描述内容应该简明、完整，一般不多于 2 行。
- 操作按钮最多到 3 个（竖排），一般为 1-2 个（横排）；3 个以上建议使用组件 ActionSheet 来完成。
- 一般将用户最可能点击的按钮，放在右侧。另外，取消按钮应当始终放在左侧。


## API

### Modal

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[ngModel]` | 对话框是否可见 | `boolean` | `false` |
| `[closable]` | 是否显示关闭按钮 | `boolean` | `false` |
| `[maskClosable]` | 点击蒙层是否允许关闭 | `boolean` | `true` |
| `[transparent]` | 是否背景透明 | `boolean` | `false` |
| `[popup]` | 是否弹窗模式 | `boolean` | `false` |
| `[animationType]` | 动画类型 | `'slide-down' \| 'slide-up' \| 'fade' \| 'slide'` | `'fade'` |
| `[title]` | 标题 | `TemplateRef` | - |
| `[footer]` | 底部内容 | `Array<text: string, onPress: Function>` | `[]` |
| `[platform]` | 设定组件的平台特有样式, 仅限web | `'android' \| 'ios'` | `'ios'`|
| `(onClose)` | 点击 x 或 mask 回调 | `EventEmitter<void>` | - |

### ModalSerivce.alert(title, message, actions?, platform?)

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[title]` | 标题 | `string \| TemplateRef` | - |
| `[message]` | 提示信息 | `string \| TemplateRef` | - |
| `[actions]` | 按钮组 | `Array<text: string, onPress: Function, style: object>` | - |
| `[platform]` | 设定组件的平台特有样式, 仅限web | `'android' \| 'ios'` | `'ios'`|

`ModalSerivce.alert(title, message, actions?, platform?).close()` 可以在外部关闭 Alert

### ModalSerivce.prompt(title, message, callbackOrActions, type?, defaultValue?, placeholders?, platform?)

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[title]` | 标题 | `string \| TemplateRef` | - |
| `[message]` | 提示信息 | `string \| TemplateRef` | - |
| `[callbackOrActions]` | 按钮组或回调函数 | `Array<text: string, onPress: Function> \| Function` | - |
| `[type]` | prompt 的样式 | `'default' \| 'secure-text' \| 'login-password'` | `'default'` |
| `[defaultValue]` | defaultValue | `string[]` | - |
| `[placeholders]` | placeholders | `string[]` | - |
| `[platform]` | 设定组件的平台特有样式, 仅限web | `'android' \| 'ios'` | `'ios'`|


`ModalSerivce.prompt(title, message, callbackOrActions, type?, defaultValue?, placeholders?, platform?).close()` 可以在外部关闭 prompt`

### ModalSerivce.operation(actions?, platform?)

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| `[actions]` | 按钮组 | `Array<text: string, onPress: Function, style: object>` | - |
| `[platform]` | 设定组件的平台特有样式, 仅限web | `'android' \| 'ios'` | `'ios'`|

`ModalSerivce.operation(actions?, platform?).close()` 可以在外部关闭 operation`

以上函数调用后，会返回一个引用，可以通过该引用关闭弹窗。

```ts
constructor(modal: ModalService) {
  const ref: ModalRef = modal.alert();
  ref.close(); // 或 ref.destroy(); 将直接销毁对话框
}
```

### 相关的类型定义

#### ModalService其他的方法/属性

| 方法/属性 | 描述 | 类型 |
|----|----|
| `openModals` | 打开状态的Modal集合 | `ModalRef[]` |
| `afterAllClose` | 所有的Modals关闭后的回调 | `Observable&lt;void&gt;` |
| `closeAll()` | 关闭所有的Modals | `Function` |

#### ModalRef

> ModalRef 对象用于控制对话框以及进行内容间的通信

通过服务方式 `ModalService.xxx()` 创建的对话框，都会返回一个 `ModalRef` 对象，该对象具有以下方法：

| 方法/参数 | 说明 |
|----|----|
| `afterOpen` | 同afterOpen，但类型为Observable&lt;void&gt; |
| `afterClose` | 同afterClose，但类型为Observable&lt;result:any&gt; |
| `close(result: any) => void` | 关闭(隐藏)对话框。<i>注：当用于以服务方式创建的对话框，此方法将直接 销毁 对话框（同destroy方法）</i> |
| `destroy(result: any) => void` | 销毁对话框。<i>注：仅用于服务方式创建的对话框（非服务方式创建的对话框，此方法只会隐藏对话框）</i> |
| `getContentComponent() => Component` | 获取对话框内容中Content的Component实例instance。<i>注：当对话框还未初始化完毕（`ngOnInit`未执行）时，此函数将返回`undefined`</i> |
| `triggerOk() => void` | 手动触发onClose |
| `triggerCancel() => void` | 手动触发cancel |
