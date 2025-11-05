<analysis_phase>
按照一下顺序处理指定文件

【第一步：文件重命名】
1. 将指定路径下的 `index.md` 重命名成 `index.zh-CN.md`
  - 若 `index.md` 和 `index.zh-CN.md` 都不存在，则新建 `index.zh-CN.md` 文件
【第二步：添加demo】
1. 参考示例文件 `src/components/commonComponents/Button/index.zh-CN.md` 修改文件格式
2. 查找指定路径下 `demo` 文件夹中所有tsx文件，按照顺序添加到 `index.zh-CN.md`
  - 注意，不要重复使用 tsx 文件
</analysis_phase>

