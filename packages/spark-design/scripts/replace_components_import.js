const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const parser = require('@babel/parser');
const generator = require('@babel/generator');

// 预定义的常见组件列表，作为最后的备用方案
const commonComponents = [
  // hooks
  'useBailianStyle',

  // 从 antd 重新导出的组件
  'Alert',
  'Badge',
  'Checkbox',
  'Input',
  'InputNumber',
  'Progress',
  'Radio',
  'Select',
  'Skeleton',
  'Slider',

  // 从 antd 重新导出的类型
  'AlertProps',
  'BadgeProps',
  'CheckboxProps',
  'DrawerProps',
  'InputNumberProps',
  'InputProps',
  'NotificationArgsProps',
  'PopoverProps',
  'ProgressProps',
  'RadioProps',
  'SelectProps',
  'SkeletonProps',
  'TagProps',

  // 通用组件
  'AlertDialog',
  'AlertDialogProps',
  'Avatar',
  'Button',
  'ButtonProps',
  'Card',
  'CardProps',
  'CodeBlock',
  'CodeBlockLangExtensionsMap',
  'CodeBlockProps',
  'CollapsePanel',
  'CollapsePanelProps',
  'Drawer',
  'Dropdown',
  'DropdownProps',
  'EllipsisTip',
  'EllipsisTipProps',
  'Empty',
  'Form',
  'FormProps',
  'HelpIcon',
  'HelpIconProps',
  'IconButton',
  'IconButtonProps',
  'IconFont',
  'IconFontProps',
  'Image',
  'ImageProps',
  'message',
  'Modal',
  'ModalProps',
  'notification',
  'Pagination',
  'PaginationProps',
  'Popover',
  'RadioButton',
  'RadioButtonProps',
  'SlateEditor',
  'Spinner',
  'Switch',
  'SwitchProps',
  'Tabs',
  'TabsProps',
  'Tag',
  'Tooltip',
  'TooltipProps',

  // 原子组件 (BL Components)
  'BLAlert',
  'BLAlertProps',
  'BLBackTitle',
  'BLBackTitleProps',
  'BLButton',
  'BLButtonProps',
  'BLCardSelector',
  'BLCardSelectorProps',
  'BLDrawer',
  'BLDrawerProps',
  'BLDropdown',
  'BLDropMenu',
  'BLDropMenuProps',
  'BLEllipsisTip',
  'BLForm',
  'BLFormProps',
  'BLModal',
  'BLModalProps',
  'BLPopconfirm',
  'BLPopconfirmProps',
  'BLPopover',
  'BLPopoverProps',
  'BLSearch',
  'BLSearchProps',
  'BLSelect',
  'BLSelectProps',
  'BLTable',
  'BLTooltip',
  'BLTooltipProps',
  'BLUpload',
  'BLUploadDraggerProps',
  'SliderSelector',
  'BLHelpIcon',
  'BLHelpIconProps',
  'BLIconFont',
  'BLIconFontProps',
  'BLIdIcon',
  'BLIdIconProps',
  'BLLoadingIcon',
  'BLLoadingIconProps',
  'BLSlateEditor',
  'BLSliderSelector',
  'BLSliderSelectorProps',
  'BLTag',
  'BLTagPreset',
  'BLTagProps',

  // 百炼组件
  'BLActionsColumn',
  'IBLActionItem',
  'BLAppLayout',
  'BLAppLayoutWithBack',
  'BLAppLayoutProps',
  'BLAppLayoutWithBackProps',
  'BLBackIcon',
  'BLFeeds',
  'BLImgloader',
  'BLVideoPlayer',
  'BLErrorMessage',
  'BLIntroHeaderCard',
  'IntroHeaderCard',
  'IBLIntroHeaderCardProps',
  'IIntroHeaderCardProps',
  'BLModelPriceComp',
  'ModelPriceComp',
  'BLSLRModal',
  'staticRenderer',

  // 高级组件
  'BLDatasetCascader',
  'DatasetGroupPublishStatus',
  'DatasetGroupType',
  'BLFilesInput',
  'FilesInput',
  'BLPaginitionSelect',
  'BLPaginitionSelectProps',
  'IFetchParams',
  'IOption',
  'IPaginitionSelectRef',

  // hooks
  'useGlobalStyle',

  // 其他工具函数和配置
  'getCommodityCodes',
  'delay',
  'safeHtml',
  'fetcherIo',
  'MtopFetchOptions',
  'fetcherPop',
  'IPopOptions',
  'generateCssVars',
  'generateCssVarsByMap',
  'insertMetaCssVars',
  'copy',
  'renderTooltip',
  'waitForDom',
  'waitForFunc',
  'getRegionName',
  'requestPop',
  'AliyunPopOptions',
  'BaseResponse',
  'RequestOptions',
  'requestPopSse',
  'SseOptions',
  'SseResponse',
  'requestSse',

  // 配置提供者
  'BLConfigProvider',
  'DEFAULT_ICON_FONT_URL',
  'ConfigProvider',
  'getCommonConfig',
  'setCommonConfig',
  'useCommonConfig',

  // 字符串工具
  'base64Decoder',
  'base64Encoder',
  'parseJsonSafely',

  // 主题
  'bailianDarkTheme',
  'purpleDarkTheme',
  'bailianTheme',
  'purpleTheme',
  'FileCard',
  'FileIcon',
  'SparkFileCardProps',
  'SparkFileIconProps',
  'carbonDarkTheme',
  'carbonTheme'
];

const sparkDesignComponents = commonComponents;
console.log(`总共读取到 ${sparkDesignComponents.length} 个导出组件`);

async function main({ directories }) {
  // 1. 找到所有引用@ali/bailian-ui的地方，替换为从@ali/agentscope-ai-design引入，如果有之前bailian-ui存在，spark-design不存在的组件，重新改为从antd引入
  directories.forEach(async (directory) => {
    try {
      const files = await glob(`${directory}/**/*.@(tsx|ts)`);
      let modifiedCount = 0;

      files.forEach((file) => {
        const content = fs.readFileSync(file, 'utf8');
        const ast = parser.parse(content, {
          sourceType: 'module',
          plugins: ['jsx', 'typescript'],
        });

        let needModify = false;
        let antdImports = new Set();
        let sparkDesignImports = new Set();
        let bailianUIImports = new Set();

        ast.program.body.forEach((node) => {
          // 处理 @ali/bailian-ui 的导入
          if (
            node.type === 'ImportDeclaration' &&
            node.source.value === '@ali/bailian-ui'
          ) {
            node.specifiers.forEach((specifier) => {
              // 添加安全检查
              if (specifier && specifier.imported && specifier.imported.name) {
                bailianUIImports.add(specifier.imported.name);
                needModify = true;
              }
            });
          }

          // 处理 @ali/agentscope-ai-design 的导入
          if (
            node.type === 'ImportDeclaration' &&
            node.source.value === '@ali/agentscope-ai-design'
          ) {
            node.specifiers.forEach((specifier) => {
              if (specifier && specifier.imported && specifier.imported.name) {
                if (sparkDesignComponents.includes(specifier.imported.name)) {
                  sparkDesignImports.add(specifier.imported.name);
                } else {
                  antdImports.add(specifier.imported.name);
                  needModify = true;
                }
              }
            });
          }
        });

        // 处理从 @ali/bailian-ui 导入的组件
        bailianUIImports.forEach((component) => {
          if (sparkDesignComponents.includes(component)) {
            // 如果组件在 spark-design 中存在，迁移到 spark-design
            sparkDesignImports.add(component);
          } else {
            // 如果组件在 spark-design 中不存在，迁移到 antd
            antdImports.add(component);
          }
        });

        if (needModify) {
          // 移除 @ali/bailian-ui 的导入
          ast.program.body = ast.program.body.filter((node) => {
            return !(
              node.type === 'ImportDeclaration' &&
              node.source.value === '@ali/bailian-ui'
            );
          });

          // 移除不存在的组件的 @ali/agentscope-ai-design import
          ast.program.body = ast.program.body.filter((node) => {
            if (
              node.type === 'ImportDeclaration' &&
              node.source.value === '@ali/agentscope-ai-design'
            ) {
              node.specifiers = node.specifiers.filter((specifier) =>
                sparkDesignImports.has(specifier.imported.name),
              );
              return node.specifiers.length > 0;
            }
            return true;
          });

          // 添加或更新 @ali/agentscope-ai-design 的导入
          if (sparkDesignImports.size > 0) {
            // 检查是否已存在 @ali/agentscope-ai-design 的导入
            let sparkDesignImportNode = ast.program.body.find(
              (node) =>
                node.type === 'ImportDeclaration' &&
                node.source.value === '@ali/agentscope-ai-design',
            );

            if (sparkDesignImportNode) {
              // 更新现有的导入，添加新的组件
              // 为了安全起见，将import type改为普通import
              sparkDesignImportNode.importKind = 'value';

              // 同时将现有的 specifier 也改为普通 import
              sparkDesignImportNode.specifiers.forEach((spec) => {
                if (spec.importKind) {
                  spec.importKind = 'value';
                }
              });

              const existingImports = new Set(
                sparkDesignImportNode.specifiers.map(
                  (spec) => spec.imported.name,
                ),
              );

              sparkDesignImports.forEach((component) => {
                if (!existingImports.has(component)) {
                  sparkDesignImportNode.specifiers.push({
                    type: 'ImportSpecifier',
                    importKind: 'value', // 确保是普通的import
                    imported: { type: 'Identifier', name: component },
                    local: { type: 'Identifier', name: component },
                  });
                }
              });
            } else {
              // 创建新的 @ali/agentscope-ai-design 导入
              const newSparkDesignImport = {
                type: 'ImportDeclaration',
                importKind: 'value',
                specifiers: Array.from(sparkDesignImports).map((name) => ({
                  type: 'ImportSpecifier',
                  importKind: 'value',
                  imported: { type: 'Identifier', name },
                  local: { type: 'Identifier', name },
                })),
                source: {
                  type: 'StringLiteral',
                  value: '@ali/agentscope-ai-design',
                },
              };
              ast.program.body.unshift(newSparkDesignImport);
            }
          }

          // 添加或更新 antd 的导入
          if (antdImports.size > 0) {
            // 检查是否已存在 antd 的导入
            let antdImportNode = ast.program.body.find(
              (node) =>
                node.type === 'ImportDeclaration' &&
                node.source.value === 'antd',
            );

            if (antdImportNode) {
              // 更新现有的导入，添加新的组件
              // 为了安全起见，将import type改为普通import
              antdImportNode.importKind = 'value';

              // 同时将现有的 specifier 也改为普通 import
              antdImportNode.specifiers.forEach((spec) => {
                if (spec.importKind) {
                  spec.importKind = 'value';
                }
              });

              const existingImports = new Set(
                antdImportNode.specifiers.map((spec) => spec.imported.name),
              );

              antdImports.forEach((component) => {
                if (!existingImports.has(component)) {
                  antdImportNode.specifiers.push({
                    type: 'ImportSpecifier',
                    importKind: 'value', // 确保是普通的import
                    imported: { type: 'Identifier', name: component },
                    local: { type: 'Identifier', name: component },
                  });
                }
              });
            } else {
              // 创建新的 antd 导入
              const newAntdImport = {
                type: 'ImportDeclaration',
                importKind: 'value',
                specifiers: Array.from(antdImports).map((name) => ({
                  type: 'ImportSpecifier',
                  importKind: 'value',
                  imported: { type: 'Identifier', name },
                  local: { type: 'Identifier', name },
                })),
                source: { type: 'StringLiteral', value: 'antd' },
              };
              ast.program.body.unshift(newAntdImport);
            }
          }

          try {
            // 重写文件内容
            const newContent = generator.default(ast, {
              comments: true,
              jsescOption: { minimal: true },
            }).code;
            fs.writeFileSync(file, newContent, 'utf8');

            // 输出修改详情
            let changeDetails = [];
            if (bailianUIImports.size > 0) {
              const toSparkDesign = Array.from(bailianUIImports).filter(
                (comp) => sparkDesignComponents.includes(comp),
              );
              const toAntd = Array.from(bailianUIImports).filter(
                (comp) => !sparkDesignComponents.includes(comp),
              );

              if (toSparkDesign.length > 0) {
                changeDetails.push(
                  `将 ${toSparkDesign.join(
                    ', ',
                  )} 从 @ali/bailian-ui 迁移到 @ali/agentscope-ai-design`,
                );
              }
              if (toAntd.length > 0) {
                changeDetails.push(
                  `将 ${toAntd.join(', ')} 从 @ali/bailian-ui 迁移到 antd`,
                );
              }
            }

            // 处理原本就在 @ali/agentscope-ai-design 但不存在的组件
            const originalSparkToAntd = Array.from(antdImports).filter(
              (comp) => !bailianUIImports.has(comp),
            );
            if (originalSparkToAntd.length > 0) {
              changeDetails.push(
                `将 ${originalSparkToAntd.join(
                  ', ',
                )} 从 @ali/agentscope-ai-design 迁移到 antd`,
              );
            }

            console.log(`已修改文件: ${file}`);
            if (changeDetails.length > 0) {
              changeDetails.forEach((detail) => console.log(`  - ${detail}`));
            }
            modifiedCount++;
          } catch (e) {
            console.log('生成代码时出错:', e, ast.program);
          }
        }
      });

      console.log(`处理完成! 共修改了 ${modifiedCount} 个文件。`);
    } catch (e) {
      console.log('执行脚本时出错:', e);
    }
  });
}

module.exports = {
  main,
};
