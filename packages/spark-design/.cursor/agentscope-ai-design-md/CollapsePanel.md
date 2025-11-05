---
title: CollapsePanel 折叠区块
order: 1
group:
  title: 基础
  order: 1
demo:
  cols: 1
---

CollapsePanel 折叠区块

## 代码演示

<code src="./demo/demo1.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| collapsedHeight | 收起状态下显示的内容高度 | number | 0 |  |
| expandedHeight | 展开状态下的内容高度，设置后内容超出时可滚动，不设置则自适应内容高度 | number | 300 |  |
| title | 面板标题 | string | '' |  |
| expandOnPanelClick | 是否允许点击整个面板进行展开 | boolean | false |  |
| extra | 面板右侧内容 | React.ReactNode |  |  |
| children | 面板内容 | React.ReactNode |  |  |
| defaultExpanded | 是否默认展开 | boolean | false |  |