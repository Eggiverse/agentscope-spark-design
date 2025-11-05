---
title: IconButton 按钮
order: 1
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

# IconButton

```jsx
/**
 * inline: true
 */
import Description from '@dumi/theme/DemoComponents/Description';

export default () => {
  return <Description type="compatible"></Description>;
};
```

## 代码演示

圆形+边框
<code src="./demo/demo1.tsx"></code>
圆形+无边框
<code src="./demo/demo2.tsx"></code>
方形+边框
<code src="./demo/demo3.tsx"></code>
方形+无边框
<code src="./demo/demo4.tsx"></code>

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 语义化结构 class | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.4.0 |
| danger | 语法糖，设置危险按钮。当设置 `color` 时会以后者为准 | boolean | false |  |
| disabled | 设置按钮失效状态 | boolean | false |  |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |  |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |  |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#type) | `submit` \| `reset` \| `button` | `button` |  |
| icon | 设置按钮的图标组件 | ReactNode | - |  |
| iconType | 百炼图标iconfont的key，同时有icon和iconType，优先用iconType | string |   |   |
| iconPosition | 设置按钮图标组件的位置 | `start` \| `end` | `start` | 5.17.0 |
| loading | 设置按钮载入状态 | boolean \| { delay: number, icon: ReactNode } | false | icon: 5.23.0 |
| shape | 设置按钮形状 | `default` \| `circle` \| `round` | `default` |  |
| size | 设置按钮大小 | `middle` \| `small` | `middle` |  |
| styles | 语义化结构 style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.4.0 |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |  |
| type | 语法糖，设置按钮类型。 | `primary` \| `dashed` \| `link` \| `text` \| `default` \| `primaryLess` \| `textCompact` | `default` |  |
| onClick | 点击按钮时的回调 | (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |  |
| variant | 设置按钮的变体 | `outlined` \| `dashed` \| `solid` \| `filled` \| `text` \| `link` | - | 5.21.0 |
| tooltipContent | hover上去Popover的内容 | string \| ReactNode |   |   |
| bordered | 是否有边框 | boolean | true |  |
