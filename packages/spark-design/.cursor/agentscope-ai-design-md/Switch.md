---
title: Switch 开关
order: 3
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

# Switch 开关

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

Spark 的 Switch 后文字的有默认样式，请使用 label 属性
<code src="./demo/demo1.tsx"></code>
<code src="./demo/demo2.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 组件自动获取焦点 | boolean | false |  |
| checked | 指定当前是否选中 | boolean | false |  |
| className | Switch 器类名 | string | - |  |
| defaultChecked | 初始是否选中 | boolean | false |  |
| defaultValue | `defaultChecked` 的别名 | boolean | - | 5.12.0 |
| disabled | 是否禁用 | boolean | false |  |
| loading | 加载中的开关 | boolean | false |  |
| size | 开关大小，可选值：`default` `small` | string | `default` |  |
| value | `checked` 的别名 | boolean | - | 5.12.0 |
| onChange | 变化时的回调函数 | function(checked: boolean, event: Event) | - |  |
| onClick | 点击时的回调函数 | function(checked: boolean, event: Event) | - |  |
| label | Switch后的内容 | ReactNode | - |  |