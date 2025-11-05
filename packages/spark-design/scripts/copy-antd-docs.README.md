# Antd 文档复制脚本

这个脚本用于将 Antd 组件文档复制到统一的 `src/antd/docs` 目录中，只复制必要的文档文件和共享文件。

## 使用方法

### 方法一：直接运行脚本

```bash
node scripts/copy-antd-docs.js
```

### 方法二：通过 npm 脚本运行

```bash
npm run copy-antd-docs
```

## 脚本功能

1. **自动扫描组件**：扫描 `src/components/commonComponents` 目录下的所有组件
2. **智能匹配**：将组件名转换为 Antd 格式（例如：InputNumber -> input-number）
3. **精准复制**：只复制 `index.zh-CN.md` 文档文件和 `shared` 目录（如果存在）
4. **保持引用**：复制 shared 目录以保持 antd 文档内部的相互引用
5. **错误处理**：跳过不存在的 Antd 组件，显示详细的复制状态

## 组件映射规则

脚本包含以下特殊映射规则：

- `AlertDialog` -> `alert`
- `IconButton` -> `button`
- `InputNumber` -> `input-number`
- `DatePicker` -> `date-picker`
- `TimePicker` -> `time-picker`
- `RadioButton` -> `radio`
- `FloatButton` -> `float-button`
- `CollapsePanel` -> `collapse`
- `InputSearch` -> `input`

其他组件按照驼峰转连字符的规则自动转换。

## 输出示例

```
开始复制 Antd 组件文档到统一目录...

发现 56 个组件: Alert, AlertDialog, Anchor, Avatar, ...

处理组件: Alert -> antd: alert
  ✅ 成功复制: ../../../ant-design/components/alert/index.zh-CN.md -> ../src/antd/docs/alert/index.zh-CN.md

处理组件: Tooltip -> antd: tooltip
  ✅ 成功复制: ../../../ant-design/components/tooltip/index.zh-CN.md -> ../src/antd/docs/tooltip/index.zh-CN.md
  📁 成功复制共享目录: ../../../ant-design/components/tooltip/shared -> ../src/antd/docs/tooltip/shared

处理组件: CodeBlock -> antd: code-block
  ⚠️  跳过: Antd 文档不存在 ../../../ant-design/components/code-block/index.zh-CN.md

复制完成!
成功: 46 个
跳过: 10 个
失败: 0 个
```

## 输出目录结构

```
src/antd/docs/
├── button/
│   └── index.zh-CN.md        # 从 antd 复制的文档
├── input/
│   └── index.zh-CN.md
├── tooltip/
│   ├── index.zh-CN.md
│   └── shared/               # 共享文件（如果存在）
│       ├── sharedProps.zh-CN.md
│       └── sharedFAQ.zh-CN.md
└── ...
```

## 优势

1. **保持相互引用**：将所有 antd 文档放在同一个目录下，保证它们之间的相对路径引用正确
2. **轻量化**：只复制必要的文档文件，不包含 demo、测试、样式等开发文件
3. **统一管理**：所有 antd 文档统一在 `src/antd/docs` 目录下，便于管理和维护
4. **智能共享**：自动复制 shared 目录，保持文档间的引用关系

## 注意事项

1. 确保 `../../../ant-design` 目录存在且包含 Antd 源码
2. 脚本会自动创建 `src/antd/docs` 目录
3. 如果目录已存在，脚本会覆盖原有内容
4. 只复制 `index.zh-CN.md` 文件和 `shared` 目录，其他文件不会被复制
