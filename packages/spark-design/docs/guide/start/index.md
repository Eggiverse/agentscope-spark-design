---
title: 1. 安装
group:
  title: 开发
  order: 1
---

## 安装

为了避免各个仓库/子业务的 global 样式改动互相影响，只推荐用 npm 包的形式引入，并且设置业务自己的样式前缀

```shell
# 根据需要选择一个安装即可
tnpm install -S @ali/agentscope-ai-design --save # 内网包
tnpm install -S @agentscope-ai/design --save # 外网包
```

注：为了文档编写统一，文档中的 demo 统一从对外包名引入组件：@agentscope-ai/design，使用内网包时注意替换成 @ali/agentscope-ai-design

## 版本与包名

仓库地址: https://code.alibaba-inc.com/liveme-console/spark-design <br/>
def：https://space.o2.alibaba-inc.com/app/483981/iteration <br/>
门户站点：https://pre-bailian.console.aliyun.com/spark-design

### 对内版

https://anpm.alibaba-inc.com/package/@ali/agentscope-ai-design?tab=versions&all-versions=1 <br/>
以下是版本介绍：<br/>
0.0.1-beta.[时间戳] 是为了固定一个版本用来更新站点文档，不建议使用；<br/>
0.0.3-beta.[时间戳] 是对外版本的预发版本，裁剪了历史包袱，新业务都推荐使用这个版本。<br/>
正式包（从 4.1.0 开始迭代） ，是对内的完整版本。<br/>

### 对外版

https://www.npmjs.com/package/@agentscope-ai/design?activeTab=versions <br/>
