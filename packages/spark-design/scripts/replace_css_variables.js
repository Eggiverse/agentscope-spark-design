const fs = require('fs');
const path = require('path');
// 读取替换映射文件
const getReplaceMap = (antPrefix) => {
  return {
    '--bl-color-primary': `--${antPrefix}-color-primary`,
    '--bl-color-text': `--${antPrefix}-color-text`,
    '--bl-color-text-heading': `--${antPrefix}-color-text-heading;`,
    '--bl-color-bg-base': `--${antPrefix}-color-bg-base`,
    '--bl-color-border': `--${antPrefix}-color-border`,
    '--bl-font-family': `--${antPrefix}-font-family`,
    '--bl-color-primary-base': `--${antPrefix}-color-primary`,
    '--bl-color-link': `--${antPrefix}-color-link`,
    '--bl-color-link-hover': `--${antPrefix}-color-link-hover`,
    '--bl-control-item-bg-hover': `--${antPrefix}-control-item-bg-hover`,
    '--bl-color-text-label': `--${antPrefix}-color-text-label`,
    '--bl-color-text-description': `--${antPrefix}-color-text-description`,
    '--bl-color-text-disabled': `--${antPrefix}-color-text-disabled`,
    '--bl-color-bg-container': `--${antPrefix}-color-bg-container`,
    '--bl-color-bg-container-disabled': `--${antPrefix}-color-bg-container-disabled`,
    '--bl-color-text-base': `--${antPrefix}-color-text-base`,
    '--bl-color-bg-layout': `--${antPrefix}-color-bg-layout`,
    '--bl-color-fill': `--${antPrefix}-color-fill`,
    '--bl-color-fill-quaternary': `--${antPrefix}-color-fill-quaternary`,
    '--bl-color-warning': `--${antPrefix}-color-warning`,
    '--bl-color-icon': `--${antPrefix}-color-icon`,
    '--bl-color-primary-bg': `--${antPrefix}-color-primary-bg`,
    '--bl-color-text-placeholder': `--${antPrefix}-color-text-placeholder`,
    '--bl-color-fill-tertiary': `--${antPrefix}-color-fill-tertiary`,
    '--bl-color-error': `--${antPrefix}-color-error`,
    '--bl-color-icon-hover': `--${antPrefix}-color-icon-hover`,
    '--bl-color-split': `--${antPrefix}-color-split`,
    '--bl-color-split-secondary': `--${antPrefix}-color-fill-secondary`,
    '--bl-color-info': `--${antPrefix}-color-info`,
    '--bl-color-text-light-solid': `--${antPrefix}-color-text-light-solid`,
    '--bl-color-border-secondary': `--${antPrefix}-color-border-secondary`,
    '--bl-box-shadow': `--${antPrefix}-box-shadow`,
    '--bl-box-shadow-2': `--${antPrefix}-box-shadow-secondary`,
    '--bl-color-fill-secondary': `--${antPrefix}-color-fill-secondary`,
    '--bl-color-success': `--${antPrefix}-color-success`,
    '--bl-color-bg-text-hover': `--${antPrefix}-color-bg-text-hover`,
    '--bl-control-item-bg-active': `--${antPrefix}-control-item-bg-active`,
    '--bl-control-item-bg-active-hover': `--${antPrefix}-control-item-bg-active-hover`,
    '--bl-color-error-base': `--${antPrefix}-color-error`,
    '--bl-color-success-bg': `--${antPrefix}-color-success-bg`,
    '--bl-scrollbar-padding-width': `--${antPrefix}-padding-xxs`,
    '--bl-padding': `--${antPrefix}-padding`,
    '--bl-padding-md': `--${antPrefix}-padding-md`,
    '--bl-padding-lg': `--${antPrefix}-padding-lg`,
    '--bl-border-radius': `--${antPrefix}-border-radius`,
    '--bl-border-radius-lg': `--${antPrefix}-border-radius-lg`,
    '--bl-color-5': `--${antPrefix}-color-primary-bg`,
    '--bl-color-primary-active': `--${antPrefix}-color-primary-active`,
    '--bl-color-primary-hover': `--${antPrefix}-color-primary-hover`,
    '--bl-color-primary-bg-hover': `--${antPrefix}-color-primary-bg-hover`,
    '--bl-color-bg-mask': `--${antPrefix}-color-bg-mask`,
    '--bl-table-td-hover-bg-color': `--${antPrefix}-color-fill-quaternary`,
    '--bl-page-header-height': `--${antPrefix}-control-height-lg`,
    '--bl-font-size': `--${antPrefix}-font-size`,
    '--bl-page-margin': `--${antPrefix}-margin`,
    '--bl-font-size-sm': `--${antPrefix}-font-size-sm`,
    '--bl-color-primary-border': `--${antPrefix}-color-primary-border`,
    '--bl-color-primary-border-hover': `--${antPrefix}-color-primary-border-hover`,
    '--bl-tooltip-bg': `--${antPrefix}-color-bg-spotlight`,
    '--bl-color-3': `--${antPrefix}-color-primary-text`,
    '--bl-color-4': `--${antPrefix}-color-primary-border`,
    '--bl-color-info-bg': `--${antPrefix}-color-info-bg`,
    '--bl-color-info-border': `--${antPrefix}-color-info-border`,
    '--bl-control-item-bg-active-disabled': `--${antPrefix}-control-item-bg-active-disabled`,
  };
};

// 针对单个文件替换CSS变量
function replaceCssVariables({ filePath, antPrefix }) {
  let content = fs.readFileSync(filePath, 'utf8');
  const replaceMap = getReplaceMap(antPrefix);
  Object.keys(replaceMap).forEach((oldVar) => {
    const newVar = replaceMap[oldVar];
    const regex = new RegExp(oldVar, 'g');
    content = content.replace(regex, newVar);
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

// 递归遍历目录并替换CSS变量
function traverseDirectory({ dir, antPrefix }) {
  // 检查目录是否存在
  if (!fs.existsSync(dir)) {
    console.warn(`⚠️  目录不存在，跳过: ${dir}`);
    return;
  }

  try {
    fs.readdirSync(dir).forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // 忽略 node_modules 目录
        if (file === 'node_modules') return;
        traverseDirectory({ dir: filePath, antPrefix });
      } else if (
        filePath.endsWith('.css') ||
        filePath.endsWith('.scss') ||
        filePath.endsWith('.less') ||
        filePath.endsWith('.ts') ||
        filePath.endsWith('.tsx') ||
        filePath.endsWith('.html')
      ) {
        replaceCssVariables({ filePath, antPrefix });
      }
    });
  } catch (error) {
    console.warn(`⚠️  处理目录时出错: ${dir}, 错误: ${error.message}`);
  }
}

function main({ antPrefix, directories }) {
  console.log(`处理目录: ${directories.join(', ')}`);

  directories.forEach((directory) => {
    console.log(`正在处理目录: ${directory}`);
    traverseDirectory({ dir: directory, antPrefix });
  });

  console.log('CSS变量替换完成!');
}

module.exports = {
  main,
};
