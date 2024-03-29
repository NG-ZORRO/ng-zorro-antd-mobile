---
category: Components
type: Data Display
title: Steps
subtitle: 步骤条
---


显示一个任务的进度；或者引导用户完成某个复杂任务。

### 规则
- 应用在离散和时间较长的进度显示，eg：转账进度；如果任务是连续和短暂的，应该使用 Progress 来显示，eg：打开页面。
- 当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务，eg：用户注册新账号。


## API

```jsx
<Steps>
  <Step title="第一步" />
  <Step title="第二步" />
  <Step title="第三步" />
</Steps>
```

### Steps

整体步骤条。

| 参数 | 说明 | 类型 | 默认值 |
|----|-----|------|------|
| `[current]` | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | `number` | `0` |
| `[size]` | 尺寸 | `large \| 'small'` | - |
| `[status]` | 指定当前步骤的状态 | `'wait' \| 'process' \| 'finish' \| 'error'` | `'process'` |
| `[direction]` | step的方向 | `'vertical' \| 'horizontal'` | `'vertical'`  |

### Step

步骤条内的每一个步骤。

| 参数 | 说明 | 类型 | 默认值 |
|----|-----|------|------|
| `[status]` | 指定状态。当不配置该属性时，会使用 Steps 的 `current` 来自动指定状态 | `'wait' \| 'process' \| 'finish' \| 'error'` | `wait` |
| `[title]` | 标题 | `string \| TemplateRef` | - |
| `[description]` | 步骤的详情描述 | `string \| TemplateRef` | - |
| `[icon]` | 步骤图标 | `string \| TemplateRef` | - |
