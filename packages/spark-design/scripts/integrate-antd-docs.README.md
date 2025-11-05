# Antd 文档整合脚本

这个脚本用于自动化整合 Antd 组件文档到 Spark 组件文档中。

## 使用方法

### 方法一：直接运行脚本

```bash
node scripts/integrate-antd-docs.js
```

### 方法二：从项目根目录运行

```bash
cd scripts && node integrate-antd-docs.js
```

## 脚本功能

脚本会自动执行以下步骤：

1. **扫描组件**：扫描 `src/components/commonComponents` 目录下的所有组件
2. **处理 Antd 文档**：
   - 从统一的 `docs/antd` 目录读取 antd 文档
   - 删除 Antd 文档中的非 API 部分（如"何时使用"、"代码演示"等）
   - 将 `## API` 重命名为 `## antd API`
   - 删除 API 部分之后的不需要内容（如"主题变量"、"Design Token"、"FAQ"、"设计指引"等）
   - 修复伪代码块：将 `` jsx` 和  ``tsx` 改为 ````jsx | pure` 和 ````tsx | pure`，避免 dumi 将伪代码当作真实 JSX/TSX 解析
3. **检查重复字段**：
   - 读取组件的 TypeScript 接口定义
   - 自动识别组件 props 中与 Antd 文档重复的字段
   - 从 Antd 文档中删除这些重复字段
4. **嵌入文档**：
   - 在每个组件的 Spark 文档末尾添加 embed 引用
   - 格式：`<embed src="../../docs/antd/{组件名}/index.zh-CN.md"></embed>`
   - 自动替换旧的 embed 路径为新的统一路径

## 处理结果示例

### 处理前的 Antd 文档

```markdown
---
category: Components
title: Button
subtitle: 按钮
---

## 何时使用

标记了一个（或封装一组）操作命令...

## 代码演示

<code src="./demo/basic.tsx">基本使用</code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

| 属性 | 说明         | 类型                           | 默认值    |
| ---- | ------------ | ------------------------------ | --------- |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle`  |
| type | 设置按钮类型 | `primary` \| `default`         | `default` |
```

### 处理后的 Antd 文档

```markdown
## antd API

通用属性参考：[通用属性](/docs/react/common-props)

| 属性   | 说明                           | 类型    | 默认值 |
| ------ | ------------------------------ | ------- | ------ |
| block  | 将按钮宽度调整为其父宽度的选项 | boolean | false  |
| danger | 设置危险按钮                   | boolean | false  |

// 注意：size 和 type 字段被删除，因为在组件接口中已定义
```

### 处理后的 Spark 文档

```markdown
---
title: Button 按钮
---

# Button 组件文档内容...

#### API

<ApiParser src="./index.tsx" id="SparkButtonProps" />

<embed src="../../../antd/docs/button/index.zh-CN.md"></embed>
```

## 智能特性

1. **重复字段检测**：自动检测 TypeScript 接口中的 props，并从 Antd 文档中删除重复字段
2. **安全处理**：如果文档已存在 embed，脚本会跳过处理，避免重复
3. **错误容错**：对于缺少必要文件的组件，脚本会安全跳过并记录

## 输出示例

```
开始整合 Antd 组件文档到 Spark 组件文档...

发现 56 个组件

处理组件: Button
  📝 处理 antd 文档...
  🔍 检查组件 props...
    发现 props: size, type, tooltipContent, iconType, iconSize
  🧹 删除重复字段...
    删除重复字段: size
    删除重复字段: type
  📎 添加 embed 到 spark 文档...
  ✅ 处理完成

整合完成!
成功: 41 个
跳过: 15 个
失败: 0 个
```

## 重要更新

**文件结构变更**：从 v2.0 开始，antd 文档不再存储在各组件的 `DocsFromAntd` 文件夹中，而是统一存储在 `src/antd/docs/` 目录下。这样的好处是：

1. **保持引用完整性**：antd 文档内部的相互引用（如 shared 文件）可以正常工作
2. **简化目录结构**：不再在每个组件目录下创建额外的文件夹
3. **统一管理**：所有 antd 文档集中管理，便于维护

**embed 路径**：现在使用 `../../../antd/docs/{componentName}/index.zh-CN.md` 路径

## 注意事项

1. 脚本会修改 `src/antd/docs/` 目录下的文档和 Spark 文档
2. 建议在运行前备份重要文档
3. 即使没有对应的 Spark 组件文档，也会处理 antd 文档（清理非 API 部分）
4. 重复运行脚本是安全的，已处理的文档会被跳过
5. 旧的 `DocsFromAntd` 文件夹已被清理，不再使用
