---
title: Empty 空状态
order: 1
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

# Empty 空状态

```jsx
/**
 * inline: true
 */
import Description from '@dumi/theme/DemoComponents/Description';

export default () => {
  return <Description type="less"></Description>;
};
```

## 代码演示

<code src="./demo/index.tsx"></code>


## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | 空状态类型 | `noData` \| `networkError` \| `404` \| `arrears` \| `desktopOnly` \| `noAudio` \| `noImage` \| `noVideo` \| `noAccess` \| `error` \| `noModel` \| `noApp` \| `success` \| `failed` \| `inProgress` \| `stayTuned` | noData |  |
| image | 图片地址 | string | - |
| imageStyle | 图片样式 | CSSProperties | - |  |
| title | 标题内容 | ReactNode | - |  |
| description | 自定义描述内容 | ReactNode | - |  |
| children | 自定义空状态的内容 | ReactNode | - |  |
| size | 尺寸 | CSSProperties['width'] | - |  |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button-cn#api) | - |  |
| okText | 确认按钮文字 | ReactNode | `确定` |  |
| okType | 确认按钮类型 | string | `primary` |  |
| onOk | 点击确定回调 | function(e) | - |  |