---
title: IconFont 图标库
order: 1
nav:
  title: 百炼组件
  second: 百炼
  order: 1
group:
  title: 图标
  order: 2
demo:
  cols: 1
---

# IconFont 图标库

```jsx
/**
 * inline: true
 */
import Description from '@dumi/theme/DemoComponents/Description';

export default () => {
  return <Description type="incompatible"></Description>;
};
```

## 代码演示

<code src="./demo/demo1.tsx"></code>
<code src="./demo/demo2.tsx"></code>
<code src="./demo/demo3.tsx"></code>
<code src="./demo/demo4.tsx"></code>

## API

### IconFont

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | iconfont里的symbpl名称 | string | - |  |
| size | 尺寸大小，支持固定三种尺寸，或直接传入fontSize的值 | `large` \| `middle` \| `small` \| CSSProperties['fontSize'] | middle |  |
| isCursorPointer | 设置cursor: pointer, 以及默认和hover的color | boolean | false |  |
| spin | 是否旋转 | boolean | false |  |