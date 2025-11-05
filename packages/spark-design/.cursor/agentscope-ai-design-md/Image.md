---
title: Image 图片
order: 1
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

# Image 图片

## 代码演示

<code src="./demo/demo1.tsx"></code>

## API

### Image

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alt | 图像描述 | string | - | 4.6.0 |
| fallback | 加载失败容错地址 | string | - | 4.6.0 |
| height | 图像高度 | string \| number | - | 4.6.0 |
| placeholder | 加载占位，为 `true` 时使用默认占位 | ReactNode | - | 4.6.0 |
| preview | 预览参数，为 `false` 时禁用 | boolean \| [PreviewType](#previewtype) | true | 4.6.0 [PreviewType](#previewyype):4.7.0 |
| src | 图片地址 | string | - | 4.6.0 |
| width | 图像宽度 | string \| number | - | 4.6.0 |
| onError | 加载错误回调 | (event: Event) => void | - | 4.12.0 |
