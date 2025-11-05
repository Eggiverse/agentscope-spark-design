---
title: Popover 气泡卡片
order: 3
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

# Popover 气泡卡片

```jsx
/**
 * inline: true
 */
import Description from '@dumi/theme/DemoComponents/Description';

export default () => {
  return <Description type="TOKEN"></Description>;
};
```

和 Antd Popover 唯一的区别是：当用户没有指定 open，且 content 和 title 都为 undefined null 空字符串时，popover 将会常闭

## 代码演示

<code src="./demo/demo1.tsx"></code>
<code src="./demo/demo2.tsx"></code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

| 参数    | 说明     | 类型                         | 默认值 | 版本 |
| ------- | -------- | ---------------------------- | ------ | ---- |
| content | 卡片内容 | ReactNode \| () => ReactNode | -      |      |
| title   | 卡片标题 | ReactNode \| () => ReactNode | -      |      |