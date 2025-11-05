---
title: Card 卡片
order: 1
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

# Card 卡片

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

spark 的卡片
<code src="./demo/demo1.tsx"></code>
antd 的卡片，包含标题、内容、操作区域。更多用法详见 antd 官网
<code src="./demo/demo2.tsx"></code>

## API

<ApiParser source="./index.tsx" id="SparkCardProps"></ApiParser>

## API

通用属性参考：[通用属性](/docs/react/common-props)

```jsx
<Card title="卡片标题">卡片内容</Card>
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| actions | 卡片操作组，位置在卡片底部 | Array&lt;ReactNode> | - |  |
| activeTabKey | 当前激活页签的 key | string | - |  |
| variant | 形态变体 | `outlined` \| `borderless` \| | `outlined` | 5.24.0 |
| cover | 卡片封面 | ReactNode | - |  |
| defaultActiveTabKey | 初始化选中页签的 key，如果没有设置 activeTabKey | string | `第一个页签的 key` |  |
| extra | 卡片右上角的操作区域 | ReactNode | - |  |
| hoverable | 鼠标移过时可浮起 | boolean | false |  |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |  |
| size | card 的尺寸 | `default` \| `small` | `default` |  |
| tabBarExtraContent | tab bar 上额外的元素 | ReactNode | - |  |
| tabList | 页签标题列表 | [TabItemType](/components/tabs-cn#tabitemtype)[] | - |  |
| tabProps | [Tabs](/components/tabs-cn#tabs) | - | - |  |
| title | 卡片标题 | ReactNode | - |  |
| info | 卡片副标题 | ReactNode | - |  |
| type | 卡片类型，可设置为 `inner` 或 不设置 | string | - |  |
| classNames | 配置卡片内置模块的 className | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.14.0 |
| styles | 配置卡片内置模块的 style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.14.0 |
| onTabChange | 页签切换的回调 | (key) => void | - |  |