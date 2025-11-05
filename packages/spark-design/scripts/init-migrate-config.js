#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 创建默认配置文件
function createDefaultConfig() {
  const configPath = path.join(process.cwd(), 'migrate.spark.js');

  // 检查配置文件是否已存在
  if (fs.existsSync(configPath)) {
    console.log('⚠️  配置文件 migrate.spark.js 已存在');
    console.log('如需重新生成，请先删除现有配置文件');
    return false;
  }

  const defaultConfigContent = `const path = require('path');

module.exports = {
  // Ant Design 前缀 (根据你的项目调整)
  antPrefix: 'ant',
  
  // 需要处理的目录，使用 path.join 实现跨平台路径
  directories: [
    path.join('src'),
    path.join('src', 'components'),
    path.join('src', 'pages'),
    // 可以添加更多目录，例如:
    // path.join('lib'),
    // path.join('packages', 'ui'),
  ],
  
  // 可以添加其他配置选项 (暂未实现)
  // excludePatterns: ['node_modules', '.git', 'dist'],
  // fileExtensions: ['.css', '.scss', '.less', '.ts', '.tsx', '.html'],
};`;

  try {
    fs.writeFileSync(configPath, defaultConfigContent, 'utf8');
    console.log('✅ 已创建配置文件: migrate.spark.js');
    console.log('');
    console.log('📝 接下来请：');
    console.log('  1. 根据你的项目需求修改 migrate.spark.js 中的配置');
    console.log('  2. 特别注意修改 antPrefix 和 directories 配置');
    console.log('  3. 配置完成后运行: npx migrate-from-bl');
    console.log('');
    console.log('💡 配置说明:');
    console.log('  • antPrefix: CSS 变量的前缀 (如 "ant", "bl" 等)');
    console.log('  • directories: 需要处理的目录列表');
    return true;
  } catch (error) {
    console.error('❌ 创建配置文件失败:', error.message);
    return false;
  }
}

function main() {
  console.log('🚀 初始化 Spark Design 迁移配置...');
  console.log('');

  if (createDefaultConfig()) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

main();
