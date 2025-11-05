---
title: Dropdown 下拉菜单
order: 1
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

# Dropdown 下拉菜单

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

无 icon
<code src="./demo/demo1.tsx"></code>
有 icon
<code src="./demo/demo2.tsx"></code>

## API

### Dropdown

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| arrow | 下拉框箭头是否显示 | boolean \| { pointAtCenter: boolean } | false |  |
| autoAdjustOverflow | 下拉框被遮挡时自动调整位置 | boolean | true | 5.2.0 |
| autoFocus | 打开后自动聚焦下拉框 | boolean | false | 4.21.0 |
| disabled | 菜单是否禁用 | boolean | - |  |
| destroyOnHidden | 关闭后是否销毁 Dropdown | boolean | false | 5.25.0 |
| popupRender | 自定义弹出框内容 | (menus: ReactNode) => ReactNode | - | 5.25.0 |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) => HTMLElement | () => document.body |  |
| menu | 菜单配置项 | MenuOption | - | 4.24.0 |
| overlayClassName | 下拉根元素的类名称 | string | - |  |
| overlayStyle | 下拉根元素的样式 | CSSProperties | - |  |
| placement | 菜单弹出位置：`bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | string | `bottomLeft` |  |
| trigger | 触发下拉的行为，移动端不支持 hover | Array&lt;`click`\|`hover`\|`contextMenu`> | \[`hover`] |  |
| open | 菜单是否显示 | boolean | - | 4.23.0 |
| onOpenChange | 菜单显示状态改变时调用，点击菜单按钮导致的消失不会触发 | (open: boolean, info: { source: 'trigger' \| 'menu' }) => void | - | `info.source`: 5.11.0 |

### MenuOption

| 参数     | 说明                     | 类型      | 默认值 | 版本   |
| -------- | ------------------------ | --------- | ------ | ------ |
| danger   | 展示错误状态样式         | boolean   | false  |        |
| disabled | 是否禁用                 | boolean   | false  |        |
| extra    | 右侧额外节点              | ReactNode | -      | 5.21.0 |
| icon     | 左侧菜单图标              | ReactNode | -      |        |
| key      | item 的唯一标志          | string    | -      |        |
| label    | 菜单项标题               | ReactNode | -      |        |
| title    | 设置收缩时展示的悬浮标题 | string    | -      |        |