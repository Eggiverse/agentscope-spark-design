---
title: Checkbox 多选框
order: 1
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

# Checkbox 多选框

```jsx
/**
 * inline: true
 */
import Description from '@dumi/theme/DemoComponents/Description';

export default () => {
  return <Description type="TOKEN"></Description>;
};
```

## 代码演示

单行文字
<code src="./demo/demo1.tsx"></code>

单行文字+描述
<code src="./demo/demo2.tsx"></code>

## API

#### Checkbox

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |  |
| checked | 指定当前是否选中 | boolean | false |  |
| defaultChecked | 初始是否选中 | boolean | false |  |
| disabled | 失效状态 | boolean | false |  |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false |  |
| onChange | 变化时的回调函数 | (e: CheckboxChangeEvent) => void | - |  |
| onBlur | 失去焦点时的回调 | function() | - |  |
| onFocus | 获得焦点时的回调 | function() | - |  |

#### Checkbox.Group

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | (string \| number)\[] | \[] |  |
| disabled | 整组失效 | boolean | false |  |
| name | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string | - |  |
| options | 指定可选项 | string\[] \| number\[] \| Option\[] | \[] |  |
| value | 指定选中的选项 | (string \| number \| boolean)\[] | \[] |  |
| title | 选项的 title | `string` | - |  |
| className | 选项的类名 | `string` | - | 5.25.0 |
| style | 选项的样式 | `React.CSSProperties` | - |  |
| onChange | 变化时的回调函数 | (checkedValue: T[]) => void | - |  |