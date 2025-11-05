---
title: Upload 上传
order: 3
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

# Upload 上传

相比 AntD 的 Upload.Dragger，增加了内置 beforeUpload 检查，会校验文件名不能为空，文件大小不能超过输入的 fileSizeLimit，以及文件大小不能为 0

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
