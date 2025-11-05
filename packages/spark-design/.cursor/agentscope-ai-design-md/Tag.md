---
title: Tag 标签
order: 3
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

# Tag 标签

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

<code src="./demo.tsx"></code>

## API

### Tag

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closeIcon | 自定义关闭按钮。设置为 `null` 或 `false` 时隐藏关闭按钮 | ReactNode | false |  |
| color | 标签色 | string | - |  |
| icon | 设置图标 | ReactNode | - |  |
| bordered | 是否有边框 | boolean | true |  |
| onClose | 关闭时的回调（可通过 `e.preventDefault()` 来阻止默认行为） | (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |  |
| size | 设置Tag大小 | 'small' \| 'middle' | middle |  |
