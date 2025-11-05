---
title: Modal 对话框
order: 1
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

# Modal 对话框

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
<code src="./demo/demo2.tsx"></code>
<code src="./demo/demo3.tsx"></code>
静态方法
<code src="./demo/demo4.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | - |  |
| classNames | 配置弹窗内置模块的 className | [Record<SemanticDOM, string>](#semantic-dom) | - |  |
| styles | 配置弹窗内置模块的 style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.10.0 |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](/components/button-cn#api) | - |  |
| cancelText | 取消按钮文字 | ReactNode | `取消` |  |
| centered | 垂直居中展示 Modal | boolean | false |  |
| closable | 是否显示右上角的关闭按钮 | boolean | true |  |
| closeIcon | 自定义关闭图标。设置为 `null` 或 `false` 时隐藏关闭按钮 | ReactNode | spark-false-line |  |
| confirmLoading | 确定按钮 loading | boolean | false |  |
| destroyOnHidden | 关闭时销毁 Modal 里的子元素 | boolean | false | 5.25.0 |
| focusTriggerAfterClose | 对话框关闭后是否需要聚焦触发元素 | boolean | true | 4.9.0 |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | ReactNode \| (originNode: ReactNode, extra: { OkBtn: React.FC, CancelBtn: React.FC }) => ReactNode | (确定取消按钮) | renderFunction: 5.9.0 |
| forceRender | 强制渲染 Modal | boolean | false |  |
| getContainer | 指定 Modal 挂载的节点，但依旧为全屏展示，`false` 为挂载在当前位置 | HTMLElement \| () => HTMLElement \| Selectors \| false | document.body |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 是否展示遮罩 | boolean | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
| modalRender | 自定义渲染对话框 | (node: ReactNode) => ReactNode | - | 4.7.0 |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button-cn#api) | - |  |
| okText | 确认按钮文字 | ReactNode | `确定` |  |
| okType | 确认按钮类型 | string | `primary` |  |
| style | 可用于设置浮层的样式，调整浮层位置等 | CSSProperties | - |  |
| loading | 显示骨架屏 | boolean |  | 5.18.0 |
| title | 标题 | ReactNode | - |  |
| open | 对话框是否可见 | boolean | - |  |
| width | 宽度 | string \| number \| [Breakpoint](/components/grid-cn#col) | 520 | Breakpoint: 5.23.0 |
| wrapClassName | 对话框外层容器的类名 | string | - |  |
| zIndex | 设置 Modal 的 `z-index` | number | 1000 |  |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |  |
| onOk | 点击确定回调 | function(e) | - |  |
| afterOpenChange | 打开和关闭 Modal 时动画结束后的回调 | (open: boolean) => void | - | 5.4.0 |
| showDivider | 是否线上header、body、footer之间的分割线 | boolean | true |  |
| info | footer左侧信息 | string |  |  |