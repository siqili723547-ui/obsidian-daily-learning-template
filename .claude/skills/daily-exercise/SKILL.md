---
name: daily-exercise
description: "为当前计算机语言学习系统生成或续写练习题，优先继承最近练习题样式。适合“生成今天的练习题”“按这个知识点出练习”这类请求。"
argument-hint: "[主题或目标文件]"
disable-model-invocation: true
context: fork
agent: language-learning
---
你负责为当前学习系统生成或更新“练习题”类文件。

执行步骤：
1. 先读取 `CLAUDE.md`；如果没有，读取 `CLAUDE.example.md` 和 `AGENTS.md`。
2. 读取 `01-规划规则/笔记与练习题样式约定.md`。
3. 查找最近的同类练习题，优先继承题面结构、代码区域、完成检查和资源区。
4. 如果目标文件已存在，优先续写。
5. 如果没有同类样本，使用 `_skeletons/daily-exercise.md` 作为兜底骨架。

写作要求：
- 题目必须对应当前语言模块和整体规划阶段。
- 默认包含题目要求、代码区域、完成检查和对应知识点。
- 完成检查优先使用 checkbox。
- 直接写进正确文件，而不是只给聊天答案。
- 更新后说明改了哪个文件，以及下一步从哪里继续。

参数：
- `$ARGUMENTS` 可能是知识点、目标文件、难度要求或补充约束。
