## <small>4.7.13 (2025-10-27)</small>

- stylefix: slider.input ([59d51e1](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/59d51e1))
- stylefix: Slider.Input 样式修复 ([872bb9c](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/872bb9c))
- stylefix: Slider.Input 样式修复 ([0cade0b](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/0cade0b))
- chore: debug ([ff71f23](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/ff71f23))
- chore: 修复 BLConfigProvider prefix 参数没有透传的问题 ([0340040](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/0340040))
- chore: 版本号和 changelog ([e3da59a](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/e3da59a))
- feat: Modal 废弃 warpStyle ([6c0728a](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/6c0728a))
- feat: Switch 宽度调整 ([49601c3](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/49601c3))
- fix: table body 支持 small 样式 ([f271dec](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/f271dec))

## <small>4.7.12 (2025-10-16)</small>

- fix: Tabs 透传 type 和 centered ([e549092](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/e549092))

## <small>4.7.11 (2025-10-11)</small>

- feat: 解决 cssinjs 反复渲染的性能问题 ([6c84e7a](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/6c84e7a))
- feat!: 删除旧的 createStyle, 修改原来 newCreateStyle 为 createStyle ([322d81a](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/322d81a))

## <small>4.7.9 (2025-09-26)</small>

- fix: cssinjs 样式丢失问题 ([ece0c8d](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/ece0c8d))

## <small>4.7.8 (2025-09-25)</small>

- fix: 优化表格组件样式及重构组件名称 ([522be0d](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/522be0d))
- feat: 修复 Pagination 的 showSizeChange 逻辑 ([eb7f4fa](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/eb7f4fa))

## <small>4.7.1 (2025-09-23)</small>

- fix: 修复 CollapsePanel 组件样式中的 backgroundColor 属性为 background-color ([257bb22](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/257bb22))

## 4.7.0 (2025-09-23)

- feat: modify bailian theme ([7b5d50b](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/7b5d50b))
- feat: bl 组件替换成新版 css in js 方案 ([27e5a82](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/27e5a82))
- feat: 为 CollapsePanel 组件添加 classNames 和 styles 属性以支持语义化样式 ([ea6c3f0](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/ea6c3f0))
- feat: 修改 SliderSelector ([2944d5a](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/2944d5a))
- feat: 删除 ConfigProvider 多余的单例机制,CSS-in-JS 库自动处理样式去重和性能优化，不需要手动管理 ([6079104](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/6079104))
- feat: 原子组件统一使用 css in js ([29f334e](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/29f334e))
- fix: 优化表单组件和全局样式，修复类型忽略注释 ([c57d2ac](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/c57d2ac))

## <small>4.6.7 (2025-09-23)</small>

- fix: collapse panel bg-color update ([b3cf395](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/b3cf395))

## <small>4.6.6 (2025-09-16)</small>

- fix: 优化 Pagination 组件的 itemRender 逻辑，支持自定义图标替换省略号 ([62df1a6](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/62df1a6))
- fix: 优化 Pagination 组件的 showSizeChanger 逻辑，确保根据 props 正确显示分页选项 ([46d7d55](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/46d7d55))
- fix: 修改按钮样式选择器，确保样式应用于特定类型的按钮 ([34b7da4](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/34b7da4))
- fix: 只有百炼国内站大陆版本强制使用中文 ([a94a563](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/a94a563))
- tooltip 修改色值 ([baf5e0e](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/baf5e0e))

## <small>4.6.5 (2025-09-09)</small>

- feat: 在构建文档时新增索引文件生成脚本 ([71fa048](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/71fa048))
- feat(components): 更新 FloatButton 示例以使用新的导入路径 ([3733124](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/3733124))
- feat(components): 更新 HelpIcon 组件以使用新的图标组件 ([40e5f31](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/40e5f31))
- feat(components): 更新 Spinner 组件的 indicator 属性描述 ([9a1d56d](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/9a1d56d))
- feat(components): 更新 Spinner 组件的 showProgress 属性描述 ([c7ee23f](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/c7ee23f))
- feat(components): 添加 FloatButton 组件及其类型定义 ([1958d25](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/1958d25))
- refactor(components): 将 PromptsEditor 组件重命名为 MdEditor ([c713b20](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/c713b20))
- refactor(components): 简化 SparkDropdown 组件 ([d53d3e5](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/d53d3e5))

## <small>4.6.4 (2025-09-05)</small>

- 更新版本至 4.6.4，优化主题导入方式，调整类型定义以支持布尔值。 ([8994f8b](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/8994f8b))

## <small>4.6.3 (2025-09-05)</small>

- fix: remove embed from english doc ([985db7a](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/985db7a))
- fix: 修复 tooltip placement 位置异常 ([3757bc5](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/3757bc5))
- fix: 调整 SparkDownLine 组件的大小为 16 ([bf493b9](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/bf493b9))
- fix: 部分组件添加 demo 标题 ([3abd955](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/3abd955))
- fix(Illustrate): 修复对 cssVar.key 的可选链处理 ([d46672d](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/d46672d))
- fix(PromptsEditor): 修复变量选择后未及时渲染的问题 ([adb41b8](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/adb41b8))
- feat: 优化 Breadcrumb 组件交互样式并调整 Tabs 文档格式 ([dc5568a](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/dc5568a))
- feat(Button): 更新按钮组件以支持自定义加载图标 ([1af0502](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/1af0502))
- feat(components): 新增 Markdown 编辑器组件 ([f4f6bf5](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/f4f6bf5))
- feat(components): 新增 PromptsEditor 组件 ([21098f5](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/21098f5))
- feat(PromptsEditor): 优化代码编辑器样式和布局 ([b583bca](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/b583bca))
- feat(PromptsEditor): 增加新建变量功能并优化用户体验 ([d51c3b2](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/d51c3b2))
- feat(PromptsEditor): 新增变量的按钮文本可配置 ([b35afab](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/b35afab))
- feat(PromptsEditor): 添加变量支持并优化编辑器样式 ([2aadfdd](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/2aadfdd))
- feat(PromptsEditor): 添加变量选择输入功能 ([aa5533b](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/aa5533b))
- feat(PromptsEditor): 添加模板变量拖拽功能 ([b12ceda](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/b12ceda))
- style(PromptsEditor): 优化 CodeMirror tooltip 样式 ([f3def83](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/f3def83))
- style(PromptsEditor): 优化代码提示框样式 ([2ecd5db](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/2ecd5db))
- style(PromptsEditor): 更新变量渲染样式 ([a2c1377](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/a2c1377))
- refactor: 在 PromptsEditor 组件中添加 ts-nocheck 注释 ([2ef7244](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/2ef7244))
- refactor(components): 重构 PromptsEditor 组件 ([b3e2f0d](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/b3e2f0d))
- refactor(PromptsEditor): 优化 Prompt 编辑器的样式和功能 ([fa9bd0b](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/fa9bd0b))
- refactor(PromptsEditor): 将 Placeholder 相关代码抽离为单独模块 ([3885fe5](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/3885fe5))
- refactor(组件): 优化变量选择输入组件的代码逻辑 ([a292f67](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/a292f67))

## <small>4.6.2 (2025-09-02)</small>

- feat: 取消 IconFont 的 font-size 枚举 ([748faf5](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/748faf5))

## <small>4.6.1 (2025-08-29)</small>

- feat: InputNumber、Radio 和 Select 组件改成直接从 antd 引入 ([ed5c5f6](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/ed5c5f6))
- feat: 在 index.ts 中添加 Skeleton 组件导出，新增 antd 文档和样式文件的说明 ([99199e8](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/99199e8))
- feat: 更新 Empty 组件样式，调整 SVG 容器的大小和位置，优化 SVG 加载逻辑 ([252bce9](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/252bce9))
- feat: 更新 index.ts，标记 BL 组件即将废弃，添加 FileIcon 组件导出，移除不必要的注释和导出 ([9e76882](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/9e76882))
- feat(Tag): 添加标签色属性并设置默认值 ([a22939c](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/a22939c))
- fix: datePicker disabled cursor bug ([ddf715a](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/ddf715a))
- fix: radiobutton disabled bgColor bugfix ([81a408f](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/81a408f))
- fix: tabs 不设置默认 type ([29e0092](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/29e0092))
- fix: Tabs 传入 items 为空报错 ([adf89c4](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/adf89c4))
- fix: upload demo 图标大小 ([1595180](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/1595180))
- fix: 修改 tab 的 props 的 default ([0f3b40c](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/0f3b40c))
- fix: 字段名 IconUrl 首字母改成小写 ([50132ce](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/50132ce))
- fix: 将 Drawer 组件的高度从固定值 312 修改为 100% ([67a0286](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/67a0286))
- fix: 更新 Tag 相关类型定义 ([95d98ae](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/95d98ae))
- fix: 移除 HelpIcon 组件中的 iconSize 属性 ([680d03e](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/680d03e))

## <small>4.6.0 (2025-08-25)</small>

- refactor: 项目入口从 dist 调整为 lib
- fix: 修复 Modal 组件的 onOk 事件处理逻辑，确保关闭模态框时状态正确更新；优化 Spinner 组件示例，调整背景样式以适应不同屏幕宽度。 ([b53469b](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/b53469b))
- fix: 修复 Button box-shadow 样式不生效 ([976752b](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/976752b))
- fix: 去掉全局涟漪 ([5c49695](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/5c49695))
- fix: 限制 tab 颜色 ([f4213fc](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/f4213fc))
- refactor(components): 移除 Tooltip 组件的多余属性 ([3b5c953](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/3b5c953))
- feat: 删除 xConsoleTheme 主题文件 ([02eb301](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/02eb301))
- feat: 废弃 BLSlateEditor ([dd07f14](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/dd07f14))
- feat: 引入主题生成函数，优化主题配置逻辑 ([88fe2d7](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/88fe2d7))
- feat: 更新 @agentscope-ai/icons 依赖至 1.0.2，调整主题生成逻辑，简化主题配置文件，新增主题属性以支持更多组件样式。 ([5440aef](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/5440aef))
- feat: 添加多语言支持和按钮组件 API 文档更新 ([2e3d6bc](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/2e3d6bc))
- feat: 添加英文注释 ([8cebe14](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/8cebe14))
- feat(CodeBlock): 添加 onChange 事件并优化主题适配 ([23d939a](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/23d939a))
- feat(components): 新增 Descriptions 组件并调整组件分类 ([7d17baf](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/7d17baf))
- feat(components): 新增 Statistic 组件并优化其他组件样式 ([9ace0a7](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/9ace0a7))
- feat(components): 添加 Collapse 折叠面板组件 ([55e562c](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/55e562c))
- feat(Image): 新增 Image 组件并优化 Collapse 文档 ([3a8443b](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/3a8443b))
- feat(Modal): 添加确认对话框和不同尺寸的模态窗口 ([18ac396](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/18ac396))
- feat(Modal): 添加预设宽度功能并更新文档 ([e8bf6fd](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/e8bf6fd))
- feat(tooltip): 修改 tooltip 组件的示例代码 ([c7dc260](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/c7dc260))
- perf(ConfigProvider): 优化主题切换性能 ([aa7abe9](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/aa7abe9))
- 为 Dropdown 组件添加新样式，支持可选择菜单项的自定义渲染，优化菜单项的显示逻辑。 ([c8a57c2](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/c8a57c2))
- 修复 Empty 组件样式和图像链接，调整空状态图像的 marginTop 和更新多个图像 URL，以确保更好的展示效果。 ([ceaa788](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/ceaa788))
- 移除 Dropdown 组件中子菜单的样式定义，简化样式代码。 ([de72d8b](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/de72d8b))
- 调整 Drawer 组件的样式和演示，修改边距和宽度设置；更新 Dropdown 组件的触发器为按钮，优化图标显示。 ([06a7031](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/06a7031))
- 重构 Result 组件，移除不必要的样式和属性，简化接口定义，新增纹理显示选项，使用 Empty 组件替代原有结构。 ([32dec0a](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/32dec0a))

## <small>4.5.3 (2025-08-15)</small>

- fix(Slider): 修复滑动器输入组件的初始化值问题 ([dbcff03](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/dbcff03))

## <small>4.5.2 (2025-08-07)</small>

- fix: Modal 传入 closeIcon 时会出现两个关闭按钮 ([5c7408f](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/5c7408f))
- fix: 修复 Input 组件的 className 合并逻辑 ([ceed329](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/ceed329))
- fix: 解决 ConfigProvider 嵌套导致的 message modal notification 静态方法无法消费 theme ([bd55983](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/bd55983))
- feat: 废弃 theme.json 中的 extraCssVariables 字段 ([5642c25](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/5642c25))

## 4.5.1 (2025-08-04)

- feat: 同步支持 antd 5.23.0 Button.loading.icon 属性([6d85941](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/6d85941))

## 4.5.0 (2025-07-30)

- docs: add readme ([905ecd2](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/905ecd2))
- fix: getLang 方法获取语言优先级 cookie > 环境变量 > 默认值 ([324cbac](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/324cbac))
- fix: icons-svg-override-antd bugfix ([e0feb25](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/e0feb25))
- fix: spark-design i18n getLang function update ([9449ba5](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/9449ba5))
- feat: 同步语雀文档 ([e4e1a67](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/e4e1a67))
- feat(AlertDialog): 为对话框添加自定义样式类 ([81d9fac](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/81d9fac))
- feat(components): 新增 Table 组件并调整相关示例 ([356f176](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/356f176))
- feat(Drawer): add custom close icon ([0cecafb](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/0cecafb))
- feat(icon): 添加 iconSize 属性并优化相关组件 ([b1cd29c](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/b1cd29c))
- feat(Message): 添加 message 的 hooks 用法并更新 ConfigProvider ([9e32631](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/9e32631))
- feat(Slider): 新增 Slider 组件及其输入框，更新文档和演示示例 ([50e6072](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/50e6072))
- chore: alertdialog 增加返回值 ([857ff72](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/857ff72))
- feat: 增加 Slider.Input ([e3e5a5c](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/e3e5a5c))
- build: 替换 icons 包名 ([0ed64ba](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/0ed64ba))
- refactor: 回滚在 ConfigProvider 的 holderRender 中添加全局样式 ([120b1b9](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/120b1b9))
- refactor(AlertDialog): 重构 AlertDialog 组件 ([01c4d0e](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/01c4d0e))
- theme: 更新主题文件，添加 box-shadow-input 样式以增强输入框的阴影效果 ([f1f2906](http://gitlab.alibaba-inc.com/liveme-console/spark-design/commit/f1f2906))

## 4.1.1

### Features

@ali/bailian-ui 更改包名，迁移到@ali/spark-design
不再默认透出 antd 的所有组件，新增 Spark Design 基础组件，其中有部分组件与 antd 组件重名，会存在不兼容 antd 的情况，列举如下：

- Tag: bordered 默认为 false
- Card：title 为 null
- Spinner：size 不生效

原 css variables 以及 GLOBAL_CSS_VARIABLES 废弃，请使用替换脚本
BLTriggerModal 改名

## [4.0.1](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/compare/publish/4.0.0...publish/4.0.1) (2025-03-07)

### Bug Fixes

- less 转 cssinjs 时，!important 样式丢失修复 ([5a96d6b](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/5a96d6bdf9afdd2da944cd0962135fd7584d26d3))

## [4.0.0](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/compare/publish/3.4.1...publish/4.0.0) (2025-02-17)

### Features

- BLBuyLoadingModal 添加 demo,test, 样式文件转为 css in js ([c8244db](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/c8244db2da3c535d5f0555a06942f0fb737a6cab))
- BreakChange 全局样式改为使用 cssinjs 方案，可通过 BLConfigProvider 或者 useBailianStyle 引入 ([5624531](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/5624531400559641e4284c5d51450d842517b743))
- BreakChange FilesInput、ModelPriceComp、IntroHeaderCard 分别更名为 BLFilesInput、BLModelPriceComp、BLIntroHeaderCard ([3bcfde9](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/3bcfde90f7d2e0f10967521f1cb0a63fb31e2690))
- BreakChange GLOBAL_CSS_VARIABLES 改成 BAILIAN_CSS_VARIABLES ([377cb51](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/377cb51945fdbdd6178145998c47571a9aa43bc7))
- BreakChange GLOBAL_CSS_VARIABLES 改成函数,支持传入 prefix 前缀 ([fb1bd2b](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/fb1bd2bec0777918b1051fb4af36d65874dfae80))
- BreakChange 删除 useAntdContext, 因为 antd ConfigProvider holderRender 可以代替 ([5b9fcb6](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/5b9fcb6242844f4f4de7de66e1cd5e92386758f5))
- BreakChange 废弃 BLBreadcrumb ([f4ce0c9](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/f4ce0c9fe8b7d96aa85c3c2c82eefd22c7b97221))
- 新增 useCommonConfig，全局样式跟随前缀变化 ([ee1d187](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/ee1d187c0e4b3c01931e09335839bf701cea6e71))

## [3.4.1](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/compare/publish/3.4.0...publish/3.4.1) (2025-01-22)

### Features

- 修改 svg 图片为 url 地址 ([4dda44f](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/4dda44f289c4117932e40e2d3938064a6ff18b1a))

## [3.4.0](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/compare/publish/3.3.0...publish/3.4.0) (2025-01-20)

### Features

- 添加 BLFeeds, BLImgloader, BLVideoPlayer 组件

## [3.3.0](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/compare/publish/3.2.0...publish/3.3.0) (2025-01-10)

### Bug Fixes

- BLConfigProvider 传的 prefixCls 保存到 commonConfig 的 antPrefix 字段，使嵌套的 BLConfigProvider 可以获取 ([9dac0b0](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/9dac0b0a7500b0021aa5d99ae30fd363335dae8f))
- BLSelect loading 无效 ([5a9b9ed](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/5a9b9ed8aaf24a20328ba655da4eff796faa601f))

### Features

- 添加 fetcherPop, IPopOptions 基础 requestPop 封装用于百炼请求 pop ([f0c54e8](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/f0c54e8c593255c75fdb939d89d4ce9445a3a9bf))
- BLSLRModal 按钮尺寸修改 ([109f087](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/109f08732fcaf50ce313b6a60162bfa7aecc6122))
- fetcher、xmlRequest 位置调整 ([d9e0dd2](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/d9e0dd218534b167fa38f7e2096282c71eb8556f))
- libs 新增 getRegionName 方法，返回 regionId 对应的某语言的名称 ([5270c4a](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/5270c4a83c6deb8e71509dfe59ea8d6e7f685cad))
- libs 添加 getLang、isCN 方法 ([622d2d4](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/622d2d45aea1397165b1d375c3aa8296063879f3))
- xconsole 主题变量修改 ([1374643](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/1374643a6a5701172cc5943f014ba373a72217d1))

## [3.2.0](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/compare/publish/3.1.0...publish/3.2.0) (2024-12-20)

### Bug Fixes

- BLDatasetCascader 的 index.module.less 改为 index.less ([e603534](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/e6035345f05ae2a340a7fa1434650daf950be989))
- BLForm.Item 的 labelCol 属性不生效 ([10c5b33](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/10c5b338b8ab0b82a87db7d1c2e51e50c4842a9a))

### Features

- dependencies 增加 query-string 和 ahooks ([023d522](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/023d522d622c3b7fe75a4f90465b65ebad6867cc))
- query-string 版本号改成 7.1.3,解决可选链没有被编译的问题 ([518658a](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/518658ac6dab4d696210e37a2c0871ae486f9766))
- style XConsole 主题色值修改 ([02c8dad](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/02c8dadc0116f15c0c8138918e09bce6748f7be1))
- 导出 BLCssVariables，方便外部独立引入变量 ([1d98679](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/1d98679b391424dd4265b2b3777cd333a9499505))

## [3.1.0](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/compare/publish/3.0.0...publish/3.1.0) (2024-12-06)

### Bug Fixes

- BLForm 的 label margin 不生效 ([0e5896f](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/0e5896fd37b38c058abd555900532b15a1f30d12))
- BLPopconfirm children 入参类型提示 ([cea5ce5](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/cea5ce589f8103480d5cf8d30dfa19a36f88fa0b))
- BLSelect 定制 search icon 导致多选框光标定位错误 ([5ff921e](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/5ff921e4f0efe568686a52f5ae6da2cf05d14f7f))

### Features

- bl-icon 升级 1.2，解决图标样式优先级问题 ([e96a786](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/e96a786b5fbb37b517d1530603f11108eaba9a03))
- BLIconFont 改为当 type 是以 icon-开头的，自动添加 bl-前缀 ([886f447](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/886f4476caf66eeaf342f8d378810844d6c7f150))
- BLModal 改为自定义组件 ([5c7472e](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/5c7472e3b35e9adad21daed1f94bb4b439c2b572))
- BLPopconfirm 允许没有 title ([398cf0c](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/398cf0c38fa76c4185bab510fbbe3d6b1b074a14))

## [3.0.0](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/compare/publish/2.2.0...publish/3.0.0) (2024-11-29)

### Bug Fixes

- BLActionsColumn 的'更多'去掉 margin, 因为引用的 BLDropdown 给箭头 icon 添加了 margin ([e30c9f8](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/e30c9f81bad5a2bdee49b09064c83bc40b1eae5b))
- BLForm 恢复之前逻辑 ([ddff254](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/ddff254a5679973a781e54cfebb7604a37694a23))
- BLTooltip overlayInnerStyle => overlayClassName ([11e5c53](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/11e5c539fe372b78240bcf9bb22a603bf0baa414))
- table token 修改 ([08c30ad](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/08c30ad71f101105a312af8e64ba3b1866c14a44))

### Features

- 部分公共组件图标替换为 svg 图标，避免其他业务中引入时图标未展示问题 ([27cb085](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/27cb08577b87d1c97efefd5b5d0c37dd9495ec02))
- 废弃 BLBreadcrumb 组件,不再在站点上透出,,改为 BLBackTitle. BLBackTitle 删除了冗余的 pathList,backButton,hiddenBread,backCls 参数 ([4d92d45](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/4d92d45de09d33435ff85755b849077e98359351))
- 取消 BLForm 的 labelWidth 属性.改成用 antd 自带的 labelCol ([740f986](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/740f98645671a5b32ca559328c480ff9a3736dbf))
- 新增 BLBackTitle ([f72ec78](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/f72ec78e44979d698161a1d4541574b36ce300db))
- 新增 useStyle；主题变量设置添加的 style 改为添加到 head 中 ([c4e6b85](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/c4e6b85d07fd37b74398dcb82bb0c02cd3f87e26))
- BLConfigProvider 增加 style 参数 ([34217b0](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/34217b0b7b3c4c708681d938de2d4f313de58684))
- BLForm API 新增 labelWidth,删除无用的 iszhCN 和 type ([c3bbffb](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/c3bbffb9cff3677960ee7c5c26fe54736d276942))
- BLSLRModal 允许 serviceName roleName policyName 不传,若不传则不展示相应 UI ([25aeffc](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/25aeffc03ffb164ad7576a85649fa0e8301ee58a))
- BLSLRModal 允许 serviceName roleName policyName 不传,若不传则不展示相应 UI ([e8be980](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/e8be9809b8bfa7ff70bd69ca98ce3fd28e92a7cc))
- BreakChange BLConfigProvider 的 iconFontUrl 改为默认不加载 ([200c299](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/200c2997ef9f78eda324b885aff15078bed26372))
- css 变量配置放到 BlConfigProvider 组件中，用于避免主子应用主题冲突，BlConfigProvider 会增加一层 div(BreakChange) ([564b1a4](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/564b1a41bc5ace07c6a12f53ea12c9f03073b106))

## [2.2.0](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/compare/publish/2.1.1...publish/2.2.0) (2024-11-24)

### Features

- XConsole 主题配置 ([a688e5d](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/a688e5dccfd22ce1904c9afd461e8e6227e26c4d))
- 新增 parseJsonSafely, base64Encoder, base64Decoder 方法 ([642d890](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/642d890d6656eaa0135659cbbd49ff9dd2a048da))
- 新增资源链接 ([9690d14](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/9690d148ab80b8d25ba53767ac3aab99118e1c5c))

## [2.1.1](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/compare/publish/2.1.0...publish/2.1.1) (2024-11-18)

### Bug Fixes

- BLModal footer 显示不正常 ([279e738](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/279e738a999c1b01e62b91aeb3600e91bdc60f18))
- BLSLRModal 授权失败窗不会弹出 ([6a246e9](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/6a246e9832881686ac882520bc8550beca62486d))
- BLUpload 没有走到默认 beforeUpload ([6f03e35](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/6f03e35c7d422d2b0d420e9637176edfe3d391ac))

### Features

- BLUpload.Dragger 的 beforeUpload 回调增加 preCheckSuccess 入参,当内置上传前检查失败后,props.beforeUpload 仍会被执行,但入参 preCheckSuccess 为 false, 同时不会触发上传事件 ([bbf5efa](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/bbf5efa0f65790899dc8123ba66a8fb1397c686f))

## [2.1.0](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/compare/publish/2.0.3...publish/2.1.0) (2024-11-15)

### Features

- 添加 requestSse,requestPop,requestPopSse 三个请求方法 ([6375c59](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/6375c59ed12db5eb043d34099d40079e6e52a5f8))
- 更新翻译文案 ([343068c](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/343068c826328567caeeab0e272ff56d02eb3a13))
- 新增单元测试 ([9c86ee2](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/9c86ee2428e4f882d1be7891333ad708cad9a3a9))
- 新增导出`waitForDom`, `waitForFunc`，`delay`方法 ([e193c66](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/e193c661b690f62ab285e01765f081cca1f21f0d))
- XConsole 主题配置修改 ([b0a7058](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/b0a70583ba51aa2c800bb92aa03bb3f79976fe3c))

## [2.0.3](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/compare/publish/2.0.2...publish/2.0.3) (2024-11-08)

### Features

- antd token Tooltip 的 padding 设置为 12px ([6c56288](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/6c56288875302754ef94d2b3397b7c905d4fbac4))
- bailian-ui 架构重构 ([d52f982](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/d52f982d03eb68f9563a60164439f6a2c3af7b78))
- BLSelect icon 颜色更换成--bl-color-text-placeholder ([f31718c](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/f31718c1f3969beab3a67f56eb58158c5704d369))
- 导出 XCONSOLE_CSS_VARIABLES，外部可通过传递 cssVariables 到 BlConfigProvider 来修改主题 ([5a36a7c](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/5a36a7ced216bab10a4f676edda7ffa573375a70))
- 新增自定义主题配置，方便临时调整验证 ([7d05d31](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/7d05d319f12f75df78703126358ce5326ad6f28d))

## [2.0.2](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/compare/publish/2.0.1...publish/2.0.2) (2024-11-01)

### Bug Fixes

- antd styles table 漏改的 efm_ant 改为@{ant-prefix} ([7119fcc](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/7119fccfef89cec048c13b8cc58994c8f9cacb38))
- BLDatasetCascader 滚动到底加载下一页的判断逻辑放宽松点 ([1f71cac](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/1f71cac459a43e6eea560ef1b89dbb63434bd2a3))
- BLPaginitionSelect 兼容浏览器缩放带来的小数问题 ([70a627d](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/70a627dc654cf0a2d3ef5b469c1d9c83e0e43fbc))
- dompurify 依赖项 ([a15edd9](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/a15edd91ef5680f1dd6af357aefb4a8e0df129b5))
- 依赖 query-string、classnames、ahooks 丢失修复 ([d8fbce1](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/d8fbce15fd10be42f50fdad4ac31405c6de30402))
- 包裹 App 会导致全局性样式问题 ([d2f0a85](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/d2f0a8593d7ba6e18d8bdaf23af5092686b365f2))
- 取消 react-router-dom 依赖 ([15494e4](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/15494e4aacf442606ffcfc92c8d05716c3e4f014))
- 开发时使用 BLTag 传 noBorder、noBackground， 浏览器有 warning 修复 ([c6daeaa](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/c6daeaa1c537ad75294382083fb4217988eca85e))

### Features

- BLActionsColumn 改用 BLDropdown 为了 hover 时 arrow icon 自动变为向上 ([fbcabcf](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/fbcabcf6f6cd8683fdedbb0b7a0f33af4568f4df))
- BLBackIcon ([020246d](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/020246d6f24d04182a98e143beee0116a73e8280))
- BLBackIcon ([ee5688f](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/ee5688f97df7d4de28270a4da832f2d3e1150e7f))
- BLBackIcon BLDropdown BLSelect ([90b61f5](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/90b61f5f5c4dd2801fceb52342731ea6db2c863d))
- BLDropdown 改为默认不显示 arrow icon, 添加 showIcon 属性时才显示 ([7495313](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/749531345e4b068c5bd2c9fdd1e1ca2e6bf78119))
- BLTag 更改 icon ([cb15822](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/cb15822b70f00376a6b438903442b5aa5ebf33dd))
- Message ([56c9f1d](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/56c9f1d9a947205640c8c01d30fe5bae3acc1b7b))
- Message 和 BLForm ([55ba788](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/55ba7880d128d9ce2d2c7bff7463098d13da971c))
- version 改为 2.0.2 ([269ca60](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/269ca607718bf1293e6bc19cfa9496bd4443b3de))
- 增加`npm run changelog`生成 Changelog ([cde877c](http://gitlab.alibaba-inc.com/liveme-console/bailian-ui/commit/cde877c5885e13601e729003ad48fc9478d618f1))

## 2.0.1 <span style="color: red; background-color: yellow;padding: 4px 8px;border-radius: 4px; font-size: 14px;">不兼容更新</span>

修改 bailian 内置的 css variables 前缀，例如`var(--color-primary)`改成`var(--bl-color-primary)`

## 1.0.0

正式第一版发布
