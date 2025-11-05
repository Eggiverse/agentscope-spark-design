---
title: Form 表单
order: 1
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

# Form 表单

```jsx
/**
 * inline: true
 */
import Description from '@dumi/theme/DemoComponents/Description';

export default () => {
  return <Description type="compatible"></Description>;
};
```

## 设计规范

### label 左对齐

layout 为 horizontal 时，同一个 Form 下所有的 label 长度相等，并且左对齐。

### 表单 Label 和表单控件的间距：<br>

- 1、默认 margin-right: 20px;<br>
  场景：全页和抽屉表单页<br>
  ![alt text](https://img.alicdn.com/imgextra/i3/O1CN01dN1g8o267GeNpGDD3_!!6000000007614-0-tps-1361-850.jpg)
  <br>
- 2、特殊情况 margin-right: 8px;<br>
  场景：筛选项<br>
  ![alt text](https://img.alicdn.com/imgextra/i4/O1CN01MZpiHv29jEKGDKErU_!!6000000008103-0-tps-1110-787.jpg)

## 代码演示

### 布局问题：

Form 有三种布局方式, 每个表单项的布局，根据设计稿来确定

- horizontal：水平布局，默认值；同一个 Form 下所有的 label 长度相等，并且左对齐。可以给 Form 的 labelCol 传一个固定的宽度，例如
  `labelCol={{ flex: '120px' }}`，来实现左对齐；注意：当 layout 为 vertical 时，谨慎手动设置 Form.Item 的 labelCol，否则会出现 label 的高度过高的问题
- inline：行内布局。label 和表单内容有两种间距，可以通过设置`labelMarginRight`属性为`default`和`small`来控制。
- vertical：垂直布局。

<code src="./demo/demo1.tsx"></code>
<code src="./demo/demo2.tsx"></code>
<code src="./demo/demo3.tsx"></code>
<code src="./demo/demo4.tsx"></code>

## API

### Form

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| colon | 配置 Form.Item 的 `colon` 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效) | boolean | true |  |
| disabled | 设置表单组件禁用，仅对 antd 组件有效 | boolean | false | 4.21.0 |
| component | 设置 Form 渲染元素，为 `false` 则不创建 DOM 节点 | ComponentType \| false | form |  |
| fields | 通过状态管理（如 redux）控制表单字段，如非强需求不推荐使用。查看[示例](#form-demo-global-state) | [FieldData](#fielddata)\[] | - |  |
| form | 经 `Form.useForm()` 创建的 form 控制实例，不提供时会自动创建 | [FormInstance](#forminstance) | - |  |
| feedbackIcons | 当 `Form.Item` 有 `hasFeedback` 属性时可以自定义图标 | [FeedbackIcons](#feedbackicons) | - | 5.9.0 |
| initialValues | 表单默认值，只有初始化以及重置时生效 | object | - |  |
| labelAlign | label 标签的文本对齐方式 | `left` \| `right` | `right` |  |
| labelWrap | label 标签的文本换行方式 | boolean | false | 4.18.0 |
| labelCol | label 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}` | [object](/components/grid-cn#col) | - |  |
| layout | 表单布局 | `horizontal` \| `vertical` \| `inline` | `horizontal` |  |
| name | 表单名称，会作为表单字段 `id` 前缀使用 | string | - |  |
| preserve | 当字段被删除时保留字段值。你可以通过 `getFieldsValue(true)` 来获取保留字段值 | boolean | true | 4.4.0 |
| requiredMark | 必选样式，可以切换为必选或者可选展示样式。此为 Form 配置，Form.Item 无法单独配置 | boolean \| `optional` \| ((label: ReactNode, info: { required: boolean }) => ReactNode) | true | `renderProps`: 5.9.0 |
| scrollToFirstError | 提交失败自动滚动到第一个错误字段 | boolean \| [Options](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options) \| { focus: boolean } | false | focus: 5.24.0 |
| size | 设置字段组件的尺寸（仅限 antd 组件） | `small` \| `middle` \| `large` | - |  |
| validateMessages | 验证提示模板，说明[见下](#validatemessages) | [ValidateMessages](https://github.com/ant-design/ant-design/blob/6234509d18bac1ac60fbb3f92a5b2c6a6361295a/components/locale/en_US.ts#L88-L134) | - |  |
| validateTrigger | 统一设置字段触发验证的时机 | string \| string\[] | `onChange` | 4.3.0 |
| variant | 表单内控件变体 | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | [object](/components/grid-cn#col) | - |  |
| onFieldsChange | 字段更新时触发回调事件 | function(changedFields, allFields) | - |  |
| onFinish | 提交表单且数据验证成功后回调事件 | function(values) | - |  |
| onFinishFailed | 提交表单且数据验证失败后回调事件 | function({ values, errorFields, outOfDate }) | - |  |
| onValuesChange | 字段值更新时触发回调事件 | function(changedValues, allValues) | - |  |
| clearOnDestroy | 当表单被卸载时清空表单值 | boolean | false | 5.18.0 |

## Form.Item

表单字段组件，用于数据双向绑定、校验、布局等。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| colon | 配合 `label` 属性使用，表示是否显示 `label` 后面的冒号 | boolean | true |  |
| dependencies | 设置依赖字段，说明[见下](#dependencies) | [NamePath](#namepath)\[] | - |  |
| extra | 额外的提示信息，和 `help` 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 | ReactNode | - |  |
| getValueFromEvent | 设置如何将 event 的值转换成字段值 | (..args: any\[]) => any | - |  |
| getValueProps | 为子元素添加额外的属性 (不建议通过 `getValueProps` 生成动态函数 prop，请直接将其传递给子组件) | (value: any) => Record<string, any> | - | 4.2.0 |
| hasFeedback | 配合 `validateStatus` 属性使用，展示校验状态图标，建议只配合 Input 组件使用 此外，它还可以通过 Icons 属性获取反馈图标。 | boolean \| { icons: [FeedbackIcons](#feedbackicons) } | false | icons: 5.9.0 |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | ReactNode | - |  |
| hidden | 是否隐藏字段（依然会收集和校验字段） | boolean | false | 4.4.0 |
| htmlFor | 设置子元素 label `htmlFor` 属性 | string | - |  |
| initialValue | 设置子元素默认值，如果与 Form 的 `initialValues` 冲突则以 Form 为准 | string | - | 4.2.0 |
| label | `label` 标签的文本，当不需要 label 又需要与冒号对齐，可以设为 null | ReactNode | - | null: 5.22.0 |
| labelAlign | 标签文本对齐方式 | `left` \| `right` | `right` |  |
| labelCol | `label` 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}`。你可以通过 Form 的 `labelCol` 进行统一设置，不会作用于嵌套 Item。当和 Form 同时设置时，以 Item 为准 | [object](/components/grid-cn#col) | - |  |
| messageVariables | 默认验证字段的信息，查看[详情](#messagevariables) | Record&lt;string, string> | - | 4.7.0 |
| name | 字段名，支持数组 | [NamePath](#namepath) | - |  |
| normalize | 组件获取值后进行转换，再放入 Form 中。不支持异步 | (value, prevValue, prevValues) => any | - |  |
| noStyle | 为 `true` 时不带样式，作为纯字段控件使用。当自身没有 `validateStatus` 而父元素存在有 `validateStatus` 的 Form.Item 会继承父元素的 `validateStatus` | boolean | false |  |
| preserve | 当字段被删除时保留字段值 | boolean | true | 4.4.0 |
| required | 必填样式设置。如不设置，则会根据校验规则自动生成 | boolean | false |  |
| rules | 校验规则，设置字段的校验逻辑。点击[此处](#form-demo-basic)查看示例 | [Rule](#rule)\[] | - |  |
| shouldUpdate | 自定义字段更新逻辑，说明[见下](#shouldupdate) | boolean \| (prevValue, curValue) => boolean | false |  |
| tooltip | 配置提示信息 | ReactNode \| [TooltipProps & { icon: ReactNode }](/components/tooltip-cn#api) | - | 4.7.0 |
| trigger | 设置收集字段值变更的时机。点击[此处](#form-demo-customized-form-controls)查看示例 | string | `onChange` |  |
| validateFirst | 当某一规则校验不通过时，是否停止剩下的规则的校验。设置 `parallel` 时会并行校验 | boolean \| `parallel` | false | `parallel`: 4.5.0 |
| validateDebounce | 设置防抖，延迟毫秒数后进行校验 | number | - | 5.9.0 |
| validateStatus | 校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating' | string | - |  |
| validateTrigger | 设置字段校验的时机 | string \| string\[] | `onChange` |  |
| valuePropName | 子节点的值的属性。注意：Switch、Checkbox 的 valuePropName 应该是 `checked`，否则无法获取这个两个组件的值。该属性为 `getValueProps` 的封装，自定义 `getValueProps` 后会失效 | string | `value` |  |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 `labelCol`。你可以通过 Form 的 `wrapperCol` 进行统一设置，不会作用于嵌套 Item。当和 Form 同时设置时，以 Item 为准 | [object](/components/grid-cn#col) | - |  |
| layout | 表单项布局 | `horizontal` \| `vertical` | - | 5.18.0 |