const path = require('path');

module.exports = {
  // Ant Design 前缀
  antPrefix: 'ant',

  // 需要处理的目录，使用 path.join 实现跨平台路径
  directories: [
    path.join('src'),
    path.join('src', 'components'),
    path.join('src', 'pages'),
    // 可以添加更多目录
  ],

  // 可以添加其他配置选项
  // excludePatterns: ['node_modules', '.git', 'dist'],
  // fileExtensions: ['.css', '.scss', '.less', '.ts', '.tsx', '.html'],
};
