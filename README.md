# Obsidian Programming Language Learning Template

一个用于学习计算机语言的 Obsidian 模板。它把整体规划、每日进度、代码练习、复习队列和知识点卡片放在同一套结构里，并通过 Claudian 的语言学习 agent 做进度追踪。

模板只包含空白结构、规则和模板，不包含个人学习记录。

## 必需工具

- `Obsidian`：保存学习系统。
- `Claudian`：启动语言学习 agent，负责读取规划、汇报进度、判断是否落后。
- Claudian 搭载框架二选一：
  - `Codex`：读取 `AGENTS.md`。
  - `Claude`：把 `CLAUDE.example.md` 复制为 `CLAUDE.md` 后读取。

推荐 Obsidian 插件：

- `Templater`：从 `_templater/` 创建周计划、学习进度、笔记和练习题。
- `Tasks`：管理复习队列。
- `QuickAdd`：做快捷入口。

## 部署

### 独立学习仓库

适合把一门语言的学习记录单独放到 GitHub。

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

然后用 Obsidian 打开这个目录。

### 放进已有 Vault

适合已有 Obsidian Vault，只想新增一个学习目录。

1. 把本仓库复制到 Vault 下的独立目录，例如 `java-learning/`。
2. 用 Obsidian 打开 Vault。
3. 在 Claudian 中把工作目录切到这个学习目录，避免 agent 修改其他笔记。

## 初始化

1. 打开 `00-入口/整体学习规划.md`，填写目标语言、阶段路线、语言模块、最低代码产出和落后判断标准。
2. 打开 `00-入口/当前学习上下文.md`，填写当前周、当前模块、今天要做什么。
3. 如果使用 Claude 框架，把 `CLAUDE.example.md` 复制为 `CLAUDE.md`。
4. 如果使用 Templater，把模板目录设置为 `_templater/`。
5. 在 Claudian 新对话里输入：

```text
启动 Java 学习 agent
```

也可以替换成 `Python`、`C++`、`Go` 等目标语言。

启动后，agent 应该先汇报：

- 当前整体规划阶段和当前周次。
- 已完成和未完成的关键产出。
- 复习队列里到期或逾期的内容。
- 当前进度是否正常、轻微落后或明显落后。
- 如果落后，追上进度还差哪些代码产出、笔记、练习或复习登记。

## 目录

- `00-入口/`：整体规划、当前上下文、导航和复习队列。
- `01-规划规则/`：学习节奏和产物样式。
- `02-周记录/`：周计划和每日进度。
- `03-知识点索引/`：知识点卡片。
- `_templater/`：Obsidian 模板。
- `.claude/agents/`：Claudian 语言学习子代理。
- `.claude/skills/`：笔记、练习题和问答整理入口。
- `AGENTS.md`：Codex 框架规则入口。
- `CLAUDE.example.md`：Claude 框架规则入口示例。

## 使用原则

- 先写可追踪的整体规划，再开始每日进度。
- 每个阶段都要落到代码产出：语法示例、练习题、可运行小任务或小项目。
- 周计划和每日进度只追踪当前主线，不临时发散到多个方向。
- AI 规则集中在 `AGENTS.md`、`CLAUDE.example.md` 和 `.claude/`，不要到处复制制度文件。
