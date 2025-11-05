---
title: AlertDialog
order: 1
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

# AlertDialog

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

<code src="./demo/demo1.tsx"></code>
静态方法
<code src="./demo/demo2.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | 类型 | `success` \| `info` \| `warning` \| `error` | `info` |  |
| content | 内容 | ReactNode | - |  |
| classNames | 配置弹窗内置模块的 className | [Record<SemanticDOM, string>](#semantic-dom) | - |  |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](/components/button-cn#api) | - |  |
| cancelText | 取消按钮文字 | ReactNode | `取消` |  |
| centered | 垂直居中展示 Modal | boolean | false |  |
| mask | 是否展示遮罩 | boolean | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button-cn#api) | - |  |
| okText | 确认按钮文字 | ReactNode | `确定` |  |
| okType | 确认按钮类型 | string | `primary` |  |
| title | 标题 | ReactNode | - |  |
| open | 是否可见 | boolean | - |  |
| width | 宽度 | string \| number \| [Breakpoint](/components/grid-cn#col) | 520 | Breakpoint: 5.23.0 |
| wrapClassName | 对话框外层容器的类名 | string | - |  |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |  |
| onOk | 点击确定回调 | function(e) | - |  |