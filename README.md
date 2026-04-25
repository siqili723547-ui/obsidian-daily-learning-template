# Obsidian Daily Learning Template

一个可复用的 Obsidian 学习系统模板，用来管理长期学习中的入口、计划、进度、复习和知识点沉淀。

这个仓库只保留空白结构、少量规则和模板，不包含个人学习记录。

## 快速开始

1. Clone 或下载本仓库。
2. 用 Obsidian 打开这个目录，或复制到你的 Vault 里。
3. 打开 `00-入口/学习系统导航.md`。
4. 先填写 `00-入口/整体学习规划.md`，确定长期目标、阶段路线和当前主线；规划必须能追踪，不能只写宽泛愿景。
5. 再填写 `00-入口/当前学习上下文.md`，把整体规划落到当前周和今天。
6. 配置 `Claudian`，再在 Claudian 里选择搭载框架：Codex 框架读取 `AGENTS.md`；Claude 框架读取 `CLAUDE.md`。
7. 如果使用 Templater，把 `_templater/` 设置为模板目录。

## 必需工具

这个模板的核心不是单纯存 Markdown，而是让 Claudian 搭载的 agent 根据整体规划持续做进度追踪。必须准备：

- `Obsidian`：保存规划、周记录、每日进度、复习队列和知识点卡片。
- `Claudian`：作为 AI 协作入口。
- Claudian 搭载框架二选一：
  - `Codex` 框架：读取 `AGENTS.md`。
  - `Claude` 框架：把 `CLAUDE.example.md` 复制为 `CLAUDE.md` 后读取。

如果没有 Claudian，也可以手动填写这些 Markdown 文件，但不会自动判断进度是否落后，也不会自动给出追赶建议。

## 推荐插件

这些 Obsidian 插件不是硬性依赖，但推荐安装：

- `Templater`：用于从 `_templater/` 快速创建周计划、学习进度、笔记和练习题。
- `Tasks`：用于管理复习队列里的 D+1 / D+3 / D+7 回顾任务。
- `QuickAdd`：用于把“新建学习进度”“新建周计划”“登记复习任务”做成快捷入口。

建议先只启用 `Templater`，跑通一周后再加 `Tasks` 和 `QuickAdd`。

## 目录

- `00-入口/`：整体规划、导航、当前上下文和复习队列。
- `01-规划规则/`：少量人工需要理解的学习节奏和产物样式。
- `02-周记录/`：示例周计划和每日进度结构。
- `03-知识点索引/`：知识点卡片示例。
- `_templater/`：可复制或给 Templater 使用的模板。
- `AGENTS.md`：给 Claudian + Codex 框架读取的执行规则。
- `CLAUDE.example.md`：给 Claudian + Claude 框架复制为 `CLAUDE.md` 的兼容规则。

## 设计取舍

模板仓库只保留必要约定：

- 用户负责填主线、阶段、卡点和实际完成情况。
- 整体规划负责决定方向和进度判断标准，周计划和每日进度只负责追踪执行。
- 模板负责提供稳定结构。
- Claudian 搭载的 agent 负责读取整体规划、汇报当前进度、判断是否落后并给出追赶差距。
- AI 规则集中在 `AGENTS.md` / `CLAUDE.example.md`，Claudian 按所选 Codex / Claude 框架读取对应入口，避免到处散落重复制度。

先写整体规划，再跑通 7 天，然后按自己的学科和节奏改模板。
