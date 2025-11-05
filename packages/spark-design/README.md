# @ali/agentscope-ai-design

[![NPM version](https://img.shields.io/npm/v/@ali/agentscope-ai-design.svg?style=flat)](https://npmjs.org/package/@ali/agentscope-ai-design)
[![NPM downloads](http://img.shields.io/npm/dm/@ali/agentscope-ai-design.svg?style=flat)](https://npmjs.org/package/@ali/agentscope-ai-design)

百炼ui库
## 目录结构
```md
.
├── README.md                         # 说明文件
├── .dumi
├── theme                             # dumi自定义主题配置，用于组件库站点的功能/样式定制
├── .dumirc.ts                        # The project config
├── package.json   
├── src
│   ├── antd                          # antd相关逻辑&主题配置
│   │   ├── ConfigProvider            # 替换antd原有的ConfigProvider
│   │   ├── styles                    # less组件的局部样式，暴露给用户
│   │   ├── token.ts                  # 设计导出的antd TOKEN
│   │   ├── bailianCssVariables.ts    # 设计导出的css变量
│   ├── ├── xconsoleCssVariables.ts   # XConsole主题的css变量配置
│   ├── hooks                         # 对外输出的公共hooks
│   ├── libs                          # 工具函数，按需导出
│   ├── components                    # 组件目录
|   │   ├── atomComponents            # 原子组件
|   |   │   ├── BLCompatibleComponents   # 兼容antd的组件
|   |   │   │   ├── BLButton          # 具体的组件
|   |   |   │   │   ├── index.tsx     # 组件入口文件
|   |   |   │   │   ├── index.md      # 文档入口文件
|   |   |   │   │   ├── demo          # demo示例代码
|   |   |   |   │   │   ├── demo1.tsx
|   |   |   |   │   │   ├── demo2.tsx
|   |   │   ├── BLInCompatibleComponents # 不兼容antd的组件
|   │   ├── proComponents             # 高级组件（原子组件基础上封装程度较高的组件）
|   │   ├── bizComponents             # 业务组件
|   |   │   ├── bailian               # 百炼控制台业务组件（只放有复用场景的）
|   |   │   ├── quanmiao              # 全妙业务组件（只放有复用场景的）
│   ├── demos                         # 【deprecated】临时存放Demo UI层的相关文件，后续会迁移到theme中
│   ├── i18n                          # 国际化相关
│   ├── config.ts                     # 配置项
│   ├── index.less                    # 【deprecated】组件库全局样式（历史包袱，后续考虑删掉）
│   ├── index.ts                      # 入口文件，所有组件、hooks、工具函数都从这里用export导出
│   └── typings.d.ts                  # 类型文件
├── docs                              
│   ├── guide                         # 指南页
│   ├── index.md                      # 首页
└── tsconfig.json
```
## Usage

映射关系：
bailian-web：
NewIconFont -> BLIconFont
CutButton -> BLButton
BizAlert -> BLAlert
BizBreadcrumb -> BLBreadcrumb
BizDragList -> -
BizDrawer -> BLDrawer
BizDropMenu -> BLDropMenu
BizEmpty -> BLEmpty
BizForm -> Form
BizIdIcon -> BLIDIcon
BizLoadingIcon -> BLLoadingIcon
BizModal -> Modal
BizPopConfirm -> Popconfirm
BizPopover -> BLPopover
BizSearch -> Search
BizSelect -> Select
BizSliderSelector -> SliderSelector
BizTabs -> Tabs
BizTag -> Tag
BizTourGuide -> TourGuide
BizTriggerModal -> TriggerModal
BizUpload -> Upload

为了让所有 antd 组件使用 Spark Design 的自定义图标，需要在项目的 `package.json` 中添加 overrides 配置：

```json
{
  "name": "your-project",
  "dependencies": {
    "@ali/agentscope-ai-design": "^4.4.0",
    "antd": "^5.21.0"
  },
  "pnpm": {
    "overrides": {
      "@ant-design/icons": "@agentscope-ai/icons-override-antd"
    }
  }
}
```

配置完成后，**删除现有依赖并重新安装**：

```bash
# 清理现有依赖
rm -rf node_modules
rm -f package-lock.json pnpm-lock.yaml yarn.lock

# 重新安装
npm install  # 或 pnpm install
```

### 3. 使用组件

配置完成后，所有 antd 组件都会自动使用自定义图标：

```jsx
import { Select, Input, Button } from 'antd';
import { BLSelect, BLButton, BLModal } from '@ali/agentscope-ai-design';

function App() {
  return (
    <div>
      {/* 原生 antd 组件，使用自定义图标 */}
      <Select 
        placeholder="选择器" 
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]} 
      />
      <Input.Password placeholder="密码输入" />
      
      {/* Spark Design 封装组件，内置更多功能 */}
      <BLSelect placeholder="封装选择器" />
      <BLButton type="primary">封装按钮</BLButton>
    </div>
  );
}
```

## 📦 组件分类

### 🎨 原生 antd 组件
从 antd 直接导出，通过 overrides 配置使用自定义图标：
- `Alert`, `Badge`, `Button`, `Checkbox`, `Input`, `Modal`, `Select` 等

### 🔧 Spark 封装组件  
基于 antd 封装，提供额外功能和样式：
- `BLSelect`, `BLButton`, `BLModal`, `BLForm`, `BLTable` 等

### 🎯 工具函数和 Hooks
- `message`, `notification`
- `useGlobalStyle`, `generateCssVars`
- 各种工具函数

## 🛠 配置说明

### 为什么需要配置 overrides？

Spark Design 使用自定义的图标包 `@agentscope-ai/icons-override-antd` 来替换 antd 默认的图标。通过 overrides 配置，可以让整个项目（包括 antd 内部）都使用我们的自定义图标。

### 包管理器兼容性

- ✅ **npm**: 使用 `overrides` 字段
```json
{
  "overrides": {
    "@ant-design/icons": "@agentscope-ai/icons-override-antd"
  }
}
```

- ✅ **pnpm**: 使用 `pnpm.overrides` 字段  
```json
{
  "pnpm": {
    "overrides": {
      "@ant-design/icons": "@agentscope-ai/icons-override-antd"
    }
  }
}
```

- ✅ **yarn**: 使用 `overrides` 字段

建议同时配置 `overrides` 和 `pnpm.overrides`，确保在不同包管理器下都能正常工作。

### TypeScript 支持

如果使用 TypeScript 且遇到类型错误，可以在 `tsconfig.json` 中添加路径映射：

```json
{
  "compilerOptions": {
    "paths": {
      "@ant-design/icons": ["node_modules/@agentscope-ai/icons-override-antd"]
    }
  }
}
```

### Lightning 支持

使用 Lightning 工具时，需要在 lightning.config.mts 文件中配置：

```javascript
{
  "build": {
    "resolve": {
      "alias": {
        '@ant-design/icons': path.resolve(
          __dirname,
          './node_modules/@agentscope-ai/icons-override-antd',
        )
      }
    }
  }
}
```

### Vite 项目额外配置

某些 Vite 版本可能需要额外的 alias 配置：

```javascript
// vite.config.js
export default {
  resolve: {
    alias: {
      '@ant-design/icons': '@agentscope-ai/icons-override-antd'
    }
  }
}
```

## 🔧 故障排除

### 图标未正确显示？

1. **确认配置**：检查 `package.json` 中的 overrides 配置是否正确
2. **清理依赖**：删除 `node_modules` 和锁文件后重新安装
3. **检查版本**：确保使用兼容的 antd 版本 (^5.18.0)
4. **构建工具**：检查是否需要额外的 alias 配置

### 开发环境和生产环境表现不一致？

这通常是缓存问题，尝试：
- 清理构建缓存
- 添加构建工具的 alias 配置
- 确保 overrides 配置在所有环境中都生效

## 📖 更新日志

查看 [CHANGELOG.md](./CHANGELOG.md) 了解版本更新信息。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 License

MIT
