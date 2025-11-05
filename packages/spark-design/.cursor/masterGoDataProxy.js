/**
 * MasterGo 数据代理处理器
 *
 * 功能：处理和清理从 MasterGo 导出的设计稿数据，包括：
 * 1. 清理和标准化组件数据
 * 2. 处理节点样式和属性
 * 3. 移除不必要的样式和属性
 * 4. 标准化 CSS Token 格式
 */

// token的前缀。这个根据不同项目可能需要修改
const tokenPrefix = '';

// 标准组件列表
// 标准组件有些交互响应是内置的，需要删除相关数据
const commonComponentList = [
  'Button',
  'Input-Basic',
  'Modal',
  'Alert',
  'AlertDialog',
  'Drawer',
  'Dropdown',
  'Card',
  'Pagination',
  'Progress',
  'Select',
  'Tabs',
  'Slider',
  'IconButton',
  'Tag',
  'Empty',
  'RadioGroup',
  'Checkbox',
  'Skeleton',
];

// 部分组件完全忽略最外层的样式
// 这里只删除 components中的样式，如果是二次定制的样式，会在node中保留。所以不影响定制
const ignoreComponentStyleList = [
  ...commonComponentList,
  'ModalHeader',
  'ModalFooter',
  'MenuItem',
  'TabItem',
  'CheckboxItem',
  'Illustrate',
  'RadioItem',
  'TableContent',
  'Table&ListHeader',
  'StepNumber',
  'Line-竖',
  'StepsItem',
];

// 部分组件完全忽略所有子元素样式。大部分情况无需定制这些组件，所以可以这么做
const ignoreComponentChildrenStyleList = ['RadioItem', 'Button', 'Input-Basic', 'Empty'];

// 部分组件完全删除所有子元素。
// 仅通过props设置的元素可以删除所有子元素
// -> 是路径模式，用于匹配嵌套组件
const ignoreComponentChildrenList = [
  'Pagination',
  'Progress',
  'Slider',
  'Empty->Texture',
  'Empty->Illustrate',
];

/**
 * 判断值是否为字符串类型
 * @param {any} value - 要检查的值
 * @returns {boolean} 是否为字符串
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * 将字符串首字母转为大写
 * @param {string} str - 输入字符串
 * @returns {string} 首字母大写的字符串
 */
function firstCharUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 解析和标准化 CSS Token
 * 将设计稿中的 token 转换为项目标准格式
 * @param {string} key - 属性键名
 * @param {string} value - 属性值
 * @returns {string} 处理后的 token 值
 */
function parseToken(key, value) {
  // 如果是 CSS Token 相关的属性
  if (key.toLowerCase().includes('csstoken')) {
    // 提取 token 名称（字母数字和连字符组合）
    let tokenList = value.match(/[0-9a-zA-z-]+[0-9a-zA-z]$/);
    let token = tokenList && tokenList[0];

    if (token) {
      // 移除各种前缀，统一使用项目前缀
      token = token
        .replace('spark-', '')
        .replace('bl-', '')
        .replace('ag-ant-', '')
        .replace('efm_ant-', '');
      token = `${token.split('-').map((d) => firstCharUpper(d)).join('')}`;
      // 返回 CSS 变量格式
      return token;
    }
  }

  return value;
}

/**
 * 判断节点是否在指定的组件列表中
 * 支持路径模式匹配（如 "Empty->Texture"）
 * @param {Object} node - 节点对象
 * @param {Array<string>} list - 组件名称列表
 * @returns {boolean} 是否在列表中
 */
function nodeIsInList(node, list) {
  let inList = false;

  list.forEach((name) => {
    const path = name.split('->');
    // 处理路径模式匹配
    if (path.length > 1) {
      const nodePath = node.path.concat([node.componentName || firstCharUpper(node.name)]);
      let pathIndex = 0;
      let nodePathIndex = 0;

      // 逐级匹配路径
      while (pathIndex < path.length && nodePathIndex < nodePath.length) {
        if (path[pathIndex] === nodePath[nodePathIndex]) {
          pathIndex++;
        }
        nodePathIndex++;
      }

      // 如果路径完全匹配
      if (pathIndex === path.length) {
        inList = true;
      }
    } else {
      // 直接组件名匹配
      if (node.componentName === name) {
        inList = true;
      }
    }
  });

  return inList;
}

/**
 * 递归移除节点列表中所有节点的样式
 * @param {Array} nodeList - 节点列表
 */
function removeAllStyle(nodeList) {
  if (Array.isArray(nodeList)) {
    nodeList.forEach((node) => {
      delete node.prefixClass;
      if (node.children) {
        removeAllStyle(node.children);
      }
    });
  }
}

/**
 * 清理节点样式中的无用属性
 * 主要清理文本相关的冗余属性
 * @param {Object} node - 节点对象
 */
function clearStyle(node) {
  if (node.prefixClass && node.prefixClass.text) {
    let textList = node.prefixClass.text;

    // 确保是数组格式
    if (!Array.isArray(textList)) {
      textList = [textList];
    }

    // 清理文本样式中的无用属性
    textList.forEach((d) => {
      delete d.fontName; // 删除字体名称
      delete d.localizedFontName; // 删除本地化字体名称
      delete d.referrer; // 删除引用信息

      // 删除默认字重（400为正常字重）
      if (d.fontWeight == 400) {
        delete d.fontWeight;
      }
    });
  }
}

/**
 * 预处理节点样式和组件信息
 * 包括 token 转换、属性重命名、状态处理等
 * @param {Object} node - 节点对象
 */
function preFixStyle(node) {
  // 处理样式属性
  if (node.prefixClass) {
    Object.keys(node.prefixClass).forEach((key) => {
      const value = node.prefixClass[key];

      // 转换 token 格式
      node.prefixClass[key] = parseToken(key, value);

      // 重命名 itemSpacing 为 gap
      if (key === 'itemSpacing') {
        node.prefixClass.gap = value;
        delete node.prefixClass.itemSpacing;
      }

      // 处理文本相关属性
      if (key === 'text') {
        node.prefixClass.text.forEach((d) => {
          // 为文本属性应用 token 转换
          Object.keys(d).forEach((k) => {
            d[k] = parseToken(k, d[k]);
          });

          // 提取对应文本内容
          d.characters = node.characters.slice(d.start, d.end);
        });

        // 删除原始字符数据
        delete node.characters;
      }
    });
  }

  // 处理组件信息
  if (Array.isArray(node.componentInfo)) {
    let hasHover = false;

    // 过滤掉 hover 相关的组件信息，并清理无用属性
    node.componentInfo = node.componentInfo
      .filter((item) => {
        if (
          (isString(item.value) && item.value.toLowerCase().includes('hover')) ||
          (isString(item.name) && item.name.toLowerCase().includes('hover'))
        ) {
          hasHover = true;
          return false;
        }

        return true;
      })
      .map((d) => {
        // 删除无用的组件信息属性
        delete d.alias;
        delete d.componentSetProperAlias;
        delete d.type;

        return d;
      });

    // 将组件信息数组转换为对象格式
    const componentInfo = {};
    node.componentInfo.forEach((item) => {
      componentInfo[item.name] = item.value;
    });
    node.componentInfo = componentInfo;

    // 如果检测到 hover 状态，标记节点状态
    if (hasHover) {
      node.status = 'hover';
    }
  }

  // 处理组件名称
  if (isString(node.componentName)) {
    // 标准化组件名称：去除多余空格，首字母大写
    node.componentName = node.componentName
      .replaceAll('  ', ' ')
      .split(' ')
      .map((d) => {
        return firstCharUpper(d);
      })
      .join('');

    // 将所有图标组件统一命名为 IconFont
    if (
      node.componentName.includes('Icon-') ||
      node.componentName.includes('Icon/') ||
      node.componentName.includes('Icon_')
    ) {
      node.componentName = 'IconFont';
    }

    // 如果是标准组件，删除状态信息
    if (nodeIsInList(node, commonComponentList)) {
      delete node.status;
    }

    // 如果需要忽略子元素样式，则移除所有子元素样式
    if (nodeIsInList(node, ignoreComponentChildrenStyleList)) {
      removeAllStyle(node.children);
    }
  }

  // 如果需要完全忽略子元素，则删除 children 属性
  if (nodeIsInList(node, ignoreComponentChildrenList)) {
    delete node.children;
  }
}

/**
 * 递归清理所有节点的样式和路径信息
 * @param {Array} nodeList - 节点列表
 * @returns {Array} 处理后的节点列表
 */
function clearAllNodeStyle(nodeList) {
  return nodeList.map((node) => {
    // 初始化路径信息
    if (!node.path) {
      node.path = [];
    }

    // 清理样式和预处理
    clearStyle(node);
    preFixStyle(node);

    // 递归处理子节点
    if (node.children) {
      node.children.forEach((child) => {
        // 继承父节点路径
        child.path = node.path.concat([]);

        // 将当前组件名添加到子节点路径中
        if (isString(node.componentName)) {
          child.path.push(node.componentName);
        }
      });
      clearAllNodeStyle(node.children);
    }
    return node;
  });
}

/**
 * 递归清除节点路径信息
 * @param {Array} nodeList - 节点列表
 * @returns {Array} 清除路径后的节点列表
 */
function clearNodePath(nodeList) {
  nodeList.forEach((node) => {
    delete node.path;
    if (node.children) {
      clearNodePath(node.children);
    }
  });

  return nodeList;
}

/**
 * 清理和过滤组件列表
 * 只保留在节点树中实际使用的组件
 * @param {Array} componentList - 组件列表
 * @param {Array} nodeList - 节点列表
 * @returns {Array} 过滤和清理后的组件列表
 */
function clearComponent(componentList, nodeList) {
  // 递归查找组件是否在节点树中被使用
  const fn = (id, nodeList) => {
    if (nodeList.find((d) => d.componentId === id)) {
      return true;
    }

    return nodeList
      .filter((d) => d.children && d.children.length > 0)
      .find((d) => fn(id, d.children));
  };

  // 过滤出实际使用的组件
  const filterNodeList = componentList.filter((d) => {
    return fn(d.id, nodeList);
  });

  // 清理组件样式和属性
  return clearAllNodeStyle(filterNodeList)
    .map((d) => {
      // 删除 name 属性
      delete d.name;
      return d;
    })
    .map((node) => {
      // 如果组件在忽略样式列表中，只保留尺寸信息
      if (nodeIsInList(node, ignoreComponentStyleList)) {
        const size = {
          sampleWidth: node.prefixClass.sampleWidth,
          sampleHeight: node.prefixClass.sampleHeight,
        };
        node.prefixClass = size;
      }

      // 如果组件需要移除子元素，标记并删除
      if (nodeIsInList(node, ignoreComponentChildrenList)) {
        node.removeChildren = true;
        delete node.children;
      }

      // 清理不需要的属性
      delete node.componentInfo;
      delete node.status;

      return node;
    });
}

/**
 * 主要导出函数：处理 MasterGo 数据
 * @param {Object} data - 包含 nodes 和 components 的原始数据
 * @param {Array} data.nodes - 节点列表
 * @param {Array} data.components - 组件列表
 * @returns {Object} 处理后的数据，包含清理后的 nodes 和 components
 */
exports.default = function (data) {
  const { nodes, components } = data;
  try {
    return {
      // 清理节点数据：处理样式、路径等信息
      nodes: clearNodePath(clearAllNodeStyle(nodes)),
      // 清理组件数据：过滤、处理和标准化组件
      components: clearNodePath(clearComponent(components, nodes)),
    };
  } catch (error) {
    // 如果处理出错，返回原始数据
    return data;
  }
};
