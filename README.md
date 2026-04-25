# Obsidian Programming Language Learning Template

一个专门用于学习计算机语言的 Obsidian 模板，用来管理语言学习中的整体规划、语法模块、代码练习、阶段进度、复习和知识点沉淀。

这个仓库只保留空白结构、少量规则和模板，不包含个人学习记录。

## 快速开始

1. Clone 或下载本仓库。
2. 用 Obsidian 打开这个目录，或复制到你的 Vault 里。
3. 打开 `00-入口/学习系统导航.md`。
4. 先填写 `00-入口/整体学习规划.md`，确定目标语言、阶段路线、语法模块和当前主线；规划必须能追踪，不能只写宽泛愿景。
5. 再填写 `00-入口/当前学习上下文.md`，把整体规划落到当前周和今天。
6. 配置 `Claudian`，再在 Claudian 里选择搭载框架：Codex 框架读取 `AGENTS.md`；Claude 框架读取 `CLAUDE.md`。
7. 在 Claudian 新对话里输入“启动 Java 学习 agent”或“启动 Python 学习 agent”，让 `.claude/agents/language-learning.md` 接手进度追踪。
8. 如果使用 Templater，把 `_templater/` 设置为模板目录。

## 必需工具

这个模板的核心不是单纯存 Markdown，而是让 Claudian 搭载的 agent 根据整体规划持续做进度追踪。必须准备：

- `Obsidian`：保存规划、周记录、每日进度、复习队列、知识点卡片和代码练习记录。
- `Claudian`：作为 AI 协作入口。
- Claudian 搭载框架二选一：
  - `Codex` 框架：读取 `AGENTS.md`。
  - `Claude` 框架：把 `CLAUDE.example.md` 复制为 `CLAUDE.md` 后读取。
- `.claude/agents/language-learning.md`：Claudian 的语言学习子代理入口，用来支持“启动某语言学习 agent”。

如果没有 Claudian，也可以手动填写这些 Markdown 文件，但不会自动判断进度是否落后，也不会自动给出追赶建议。

## 部署教程

### 方式一：作为独立学习仓库

适合想把某一门语言的学习记录单独放到 GitHub 的情况。

1. 在 GitHub 上用本仓库创建自己的仓库，或直接 clone 到本地：

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. 用 Obsidian 打开这个目录。
3. 打开 `00-入口/整体学习规划.md`，先填目标语言、阶段路线、语言模块和进度判断标准。
4. 打开 `00-入口/当前学习上下文.md`，把整体规划落到当前周和今天。
5. 如果使用 Claudian + Claude 框架，把 `CLAUDE.example.md` 复制为 `CLAUDE.md`；如果使用 Claudian + Codex 框架，直接保留 `AGENTS.md`。
6. 在 Claudian 新对话里输入“启动 Java 学习 agent”或“启动 Python 学习 agent”。
7. 确认 agent 启动后会先汇报当前进度、是否落后、追上进度还差哪些产出。

### 方式二：放进已有 Obsidian Vault

适合已经有一个大的 Vault，只想把这个学习系统作为其中一个子目录。

1. 把本仓库复制到 Vault 下的一个独立目录，例如 `java-learning/` 或 `python-learning/`。
2. 用 Obsidian 打开 Vault，并进入这个学习目录。
3. 在 Claudian 中把工作目录切到这个学习目录，避免 agent 修改 Vault 里的其他笔记。
4. 按上面的步骤填写 `整体学习规划.md` 和 `当前学习上下文.md`。
5. 在 Claudian 新对话里启动对应语言的学习 agent。

### 部署后检查

完成部署后，至少检查这些内容：

- `00-入口/整体学习规划.md` 已经写清目标语言、阶段、最低代码产出和落后判断标准。
- `00-入口/当前学习上下文.md` 已经写清当前周、当前模块和今天要做什么。
- Claudian 能识别 `.claude/agents/language-learning.md`。
- 使用 Claude 框架时，仓库根目录存在 `CLAUDE.md`。
- 使用 Codex 框架时，仓库根目录存在 `AGENTS.md`。
- Obsidian 的 Templater 模板目录指向 `_templater/`。

## 推荐插件

这些 Obsidian 插件不是硬性依赖，但推荐安装：

- `Templater`：用于从 `_templater/` 快速创建周计划、学习进度、笔记和练习题。
- `Tasks`：用于管理复习队列里的 D+1 / D+3 / D+7 回顾任务。
- `QuickAdd`：用于把“新建学习进度”“新建周计划”“登记复习任务”做成快捷入口。

建议先只启用 `Templater`，跑通一周后再加 `Tasks` 和 `QuickAdd`。

## 目录

- `00-入口/`：语言学习整体规划、导航、当前上下文和复习队列。
- `01-规划规则/`：少量人工需要理解的学习节奏和产物样式。
- `02-周记录/`：示例周计划和每日进度结构。
- `03-知识点索引/`：知识点卡片示例。
- `_templater/`：可复制或给 Templater 使用的模板。
- `.claude/agents/`：给 Claudian 使用的语言学习子代理。
- `.claude/skills/`：给子代理调用的笔记、练习题和问答整理入口。
- `AGENTS.md`：给 Claudian + Codex 框架读取的执行规则。
- `CLAUDE.example.md`：给 Claudian + Claude 框架复制为 `CLAUDE.md` 的兼容规则。

## 设计取舍

模板仓库只保留必要约定：

- 用户负责填目标语言、主线、阶段、卡点和实际完成情况。
- 整体规划负责决定语言学习路线和进度判断标准，周计划和每日进度只负责追踪执行。
- 每个阶段都要落到代码产出：语法示例、练习题、可运行小任务或小项目。
- Claudian 的语言学习子代理负责读取整体规划、汇报当前进度、判断是否落后并给出追赶差距。
- AI 规则集中在 `AGENTS.md` / `CLAUDE.example.md`，Claudian 按所选 Codex / Claude 框架读取对应入口，避免到处散落重复制度。

先写整体规划，再跑通 7 天，然后按自己的目标语言和学习节奏改模板。
