// 通过命令行下载所有文档
// node .cursor/updateDoc.js 4.2.0
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 默认版本号
const DEFAULT_VERSION = '4.4.0';

// 获取版本号（从命令行参数或使用默认值）
const version = process.argv[2] || DEFAULT_VERSION;

// 目标下载目录
const downloadDir = path.join(__dirname, 'agentscope-ai-design-md');

// 确保下载目录存在
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

/**
 * 发起HTTPS请求获取数据
 * @param {string} url 请求地址
 * @returns {Promise<string>} 响应数据
 */
function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          if (res.statusCode === 200) {
            resolve(data);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
          }
        });
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}

/**
 * 下载文件并保存到本地
 * @param {string} url 文件URL
 * @param {string} filePath 本地保存路径
 * @returns {Promise<void>}
 */
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);

    https
      .get(url, (response) => {
        if (response.statusCode === 200) {
          response.pipe(file);

          file.on('finish', () => {
            file.close();
            resolve();
          });
        } else {
          file.close();
          fs.unlink(filePath, () => {}); // 删除部分下载的文件
          reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
        }
      })
      .on('error', (err) => {
        file.close();
        fs.unlink(filePath, () => {}); // 删除部分下载的文件
        reject(err);
      });
  });
}

/**
 * 主函数
 */
async function main() {
  try {
    console.log(`开始获取版本 ${version} 的文档列表...`);

    // 构建API URL
    const listUrl = `https://dev.g.alicdn.com/code/npm/@agentscope-ai/design/${version}/md/list.json`;

    // 获取文件列表
    const listData = await httpsGet(listUrl);
    const listJson = JSON.parse(listData);

    if (!listJson.list || !Array.isArray(listJson.list)) {
      throw new Error('响应数据中没有找到有效的list数组');
    }

    console.log(`找到 ${listJson.list.length} 个文档文件`);

    // 下载所有文件
    for (let i = 0; i < listJson.list.length; i++) {
      const fileName = listJson.list[i];
      const fileUrl = `https://dev.g.alicdn.com/code/npm/@agentscope-ai/design/${version}/md/${fileName}`;
      const localPath = path.join(downloadDir, fileName);

      try {
        console.log(`正在下载 (${i + 1}/${listJson.list.length}): ${fileName}`);
        await downloadFile(fileUrl, localPath);
        console.log(`✓ 下载完成: ${fileName}`);
      } catch (error) {
        console.error(`✗ 下载失败: ${fileName}`, error.message);
      }
    }

    console.log('\n所有文档下载完成！');
    console.log(`文档保存位置: ${downloadDir}`);
  } catch (error) {
    console.error('执行失败:', error.message);
    process.exit(1);
  }
}

// 执行主函数
main();
