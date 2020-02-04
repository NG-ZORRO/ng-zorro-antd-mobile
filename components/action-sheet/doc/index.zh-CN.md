---
category: Components
type: Feedback
title: ActionSheet
subtitle: 动作面板
---

从底部弹出的模态框，提供和当前场景相关的 2 个以上的操作动作，也支持提供标题和描述。内置固定的展示样式、不支持特别灵活的修改。

### 规则

- 提供清晰的退出按钮。
- 可高亮破坏性操作，e.g. 将『删除』处理成红色文本。
- 不要放置过多内容，避免面板纵向滚动。


## API

####  showActionSheetWithOptions(options: Object, callback: Function)

显示 action sheet，`options`对象必须包含以下的一个或者多个：

- options (array of strings) - 按钮标题列表 (required)
- cancelButtonIndex (int) - 按钮列表中取消按钮的索引位置
- destructiveButtonIndex (int) - 按钮列表中破坏性按钮（一般为删除）的索引位置
- title (string) - 顶部标题
- message (string/React.element) - 顶部标题下的简要消息
- maskClosable (bool) - 点击蒙层是否允许关闭，默认允许

`callback`函数支持返回 Promise

#### showShareActionSheetWithOptions(options: Object, callback: Function)

显示分享 action sheet，`options`对象必须包含以下的一个或者多个：

- options (array of `{icon: TemplateRef | innerHTML, title: string}`) - 分享按钮列表 (required)
    - 可以是二维数组，能显示多行按钮，例如`[[{icon,title},...],...]`表示两行两列。当为二维数组时`callback`有两个参数，第一个为`列`序列、第二个为`行`序列。
- cancelButtonText (string) - 取消按钮文案，默认为`Cancel`
- title (string) - 顶部标题
- message (string/React.element) - 顶部标题下的简要消息
- maskClosable (bool) - 点击蒙层是否允许关闭，默认允许
- locale - 国际化，可覆盖全局`[LocaleProvider](https://ng.mobile.ant.design/components/locale-provider/zh)`的配置 | Object: { dismissText }

- `callback`函数支持返回 Promise 

#### showShareActionSheetWithOptions(options: Object, failureCallback: Function, successCallback: Function)


显示分享 action sheet，`options`对象必须包含以下的一个或者多个：

- **options:**
  - message(`string`): 顶部标题下的简要消息
  - title(`string`): 顶部标题
  - url(`string`): 分享的 url
  - excludedActivityTypes(`array`): 指定在actionsheet中不显示的活动
- **Callback**:
  - failureCallback(error): 分享失败调用；
  - successCallback(completed, method)：分享成功调用;

#### close() - programmatically close.

以上函数调用后，会返回一个引用，可以通过该引用关闭弹窗。

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
  ref.close(); // 或 ref.destroy(); 将直接销毁对话框
}
```

#### ActionSheetRef

> ActionSheetRef 对象用于控制对话框以及进行内容间的通信

通过服务方式 `ActionSheetService.xxx()` 创建的对话框，都会返回一个 `ActionSheetRef` 对象，该对象具有以下方法：

| 方法/属性 | 说明 |
|----|----|
| `afterOpen` | 和 AfterOpen 一样, 但类型是Observable&lt;void&gt; |
| `afterClose` | 和 AfterClose 一样, 但类型是Observable&lt;void&gt; |
| `close(result: any) => void` | 关闭(隐藏)对话框。<i>注：当用于以服务方式创建的对话框，此方法将直接 销毁 对话框（同destroy方法）</i> |
| `destroy(result: any) => void` | 销毁对话框。<i>注：仅用于服务方式创建的对话框（非服务方式创建的对话框，此方法只会隐藏对话框）</i> |
| `getContentComponent() => Component`| 获取对话框内容中Content的Component实例instance。<i>注：当对话框还未初始化完毕（`ngOnInit`未执行）时，此函数将返回`undefined`</i> |
