// 创建一个写入流

const must_includes = ['src/components', 'src/hooks'];

const must_ignore = [
  'src/components/BLComponents', // 旧的BL组件，停止维护
  '.md', // markdown暂时不用翻译
  'demo', // demo暂时不用翻译
  'src/libs/region/constant.ts', // region中英文不用翻译
  '.test', // 单元有测试不翻译
  // 'BLSlateEditor', // 这个组件貌似不是最新的，先不更新
];

function isDemoDirectory(path) {
  return path.includes('demo');
}

const extractArray = [
  {
    name: 'components',
    sourcePath: `src`,
    fileType: 'ts',
    prettier: true,
    include: (path) => {
      for (let i = 0; i < must_includes.length; ++i) {
        const white = must_includes[i];
        if (path.includes(white)) {
          return true;
        }
      }
      return false;
    },
    exclude: (path) => {
      let isDemo = isDemoDirectory(path);
      if (isDemo) return true;
      for (let i = 0; i < must_ignore.length; ++i) {
        const black = must_ignore[i];
        if (path.includes(black)) {
          return true;
        }
      }
      return false;
    },
    macro: {
      path: 'src/i18n',
      method: '$i18n.get({id:"$key$",dm:"$defaultMessage$"})',
      import: 'import $i18n from "@/i18n"',
      keySplitter: '.',
      placeholder: (variable) => {
        return `{${variable}}`;
      },
      dependencies: ['@halofe/global-locale', '@halofe/global-string-format'],
    },
    // 避免提取 console.log 里的中文字符
    matchCopy: (text, path) => {
      // console.log(path); ! important 不要这样 log path , 会造成程序卡死. 可以这样 console.log(path.toString());
      const parentPath = path.parentPath.toString();
      if (parentPath.includes('no_i18n')) {
        return false;
      }
      const isConsoleLog = /^console\.\w+\(/gi.test(parentPath);
      const isRegExp = /^new RegExp\((.|\n)+\)/gi.test(parentPath); // 避免提取new RegExp正则
      return /[^\x00-\xff]/.test(text) && !isConsoleLog && !isRegExp; // ^\x00-\xff 表示匹配中文字符
    },
    babel: {
      allowImportExportEverywhere: true,
      decoratorsBeforeExport: true,
      plugins: [
        'asyncGenerators',
        'classProperties',
        'decorators-legacy',
        'doExpressions',
        'exportExtensions',
        'exportDefaultFrom',
        'typescript',
        'functionSent',
        'functionBind',
        'jsx',
        'objectRestSpread',
        'dynamicImport',
        'numericSeparator',
        'optionalChaining',
        'optionalCatchBinding',
      ],
    },
    // 是否跳过确认对话
    noInquirer: true,
    // 是否要将文案自动导入美杜莎
    isNeedUploadCopyToMedusa: true,
    sourceLang: 'zh-CN',
    // 从美杜莎导入文案
    import: {
      type: 'json',
      path: 'src/i18n',
      medusa: {
        appName: 'broadscope-bailian-web', // string 美杜莎 app name: https://mds-portal.alibaba-inc.com/applications
        tag: ['tongyi-B'], // string 文案tag 非必填
      },
    },
  },
];

module.exports = {
  extract: extractArray,
};
