---
title: Tooltip 文字提示
order: 1
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

# Tooltip 文字提示

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

<code src="./demo/index.tsx"></code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

| 参数  | 说明     | 类型                         | 默认值 |
| ----- | -------- | ---------------------------- | ------ |
| title | 提示文字 | ReactNode \| () => ReactNode | -      |
| mode | 设置主题 | `dark` \| `light` | -      |
