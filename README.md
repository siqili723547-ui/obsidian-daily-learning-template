# Obsidian Programming Language Learning Template

A Claudian-powered Obsidian template for planning, tracking, and reviewing programming language learning.

Click **Use this template** on GitHub to create your own programming language learning vault.

一个用于学习计算机语言的 Obsidian 模板。它把整体规划、每日进度、代码练习、复习队列和知识点卡片放在同一套结构里，并通过 Claudian 的语言学习 agent 做进度追踪。

模板只包含空白结构、规则和模板，不包含个人学习记录。

## 工作流程

**初始化**

`Use this template` → 用 Obsidian 打开仓库 → 启动目标语言学习 agent → 告诉 Claudian 学习目标、时间、基础和期限 → 写入整体规划和当前上下文

**每周**

告诉 Claudian 本周可用时间 → 生成本周周计划 → 明确本周最低代码产出

**每天**

启动语言学习 agent → 先汇报当前进度 → 写入笔记、练习题和代码产出 → 更新学习进度和复习队列

**落后时**

先补缺口 → 再开启新主题

## 必需工具

- `Obsidian`：保存学习系统。
- `Claudian`：启动语言学习 agent，负责读取规划、汇报进度、判断是否落后。
- Claudian 搭载框架二选一：
  - `Codex`：直接读取 `AGENTS.md`，不需要额外复制规则文件。
  - `Claude`：需要把 `CLAUDE.example.md` 复制一份，并把副本改名为 `CLAUDE.md`。Claudian 会读取 `CLAUDE.md` 作为项目规则。

不要求额外安装 Obsidian 插件。复习队列、周计划、学习进度和快捷入口都可以直接通过 Claudian 维护。

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

## 初始化教程

初始化只做一次，目标是让 Claudian 生成可追踪的整体规划和当前学习上下文。

1. 如果使用 Claude 框架，把 `CLAUDE.example.md` 复制一份，并把副本改名为 `CLAUDE.md`；如果使用 Codex 框架，跳过这一步。
2. 在 Claudian 新对话里启动目标语言的学习 agent：

```text
启动 Java 学习 agent
```

也可以替换成 `Python`、`C++`、`Go` 等目标语言。

3. 把学习要求告诉 agent，让它写入 `00-入口/整体学习规划.md` 和 `00-入口/当前学习上下文.md`。

示例：

```text
我想从零开始学 Java，每周学习 5 天，每天 1 小时。
请帮我生成一个可追踪的整体规划，并写进对应文件。
规划里要包含阶段路线、语言模块、每阶段最低代码产出和落后判断标准。
```

初始化完成后，至少确认：

- `整体学习规划.md` 已经包含目标语言、阶段路线、语言模块、最低代码产出和落后判断标准。
- `当前学习上下文.md` 已经包含当前阶段、当前模块、当前周和下一步最小动作。
- agent 能在启动时先汇报当前进度，而不是直接生成内容。

## 投入使用教程

初始化完成后，每次学习都通过 Claudian 推进，不需要自己手动维护计划文件。

### 周初

告诉 Claudian 本周可用时间，让它根据整体规划生成本周 `周计划.md`。

示例：

```text
这周我能学 5 天，每天 1 小时。
请根据整体规划生成本周计划，并写进本周周计划文件。
```

### 每天开始

在 Claudian 新对话里输入：

```text
启动 Java 学习 agent
```

agent 应该先汇报：

- 当前整体规划阶段和当前周次。
- 已完成和未完成的关键产出。
- 复习队列里到期或逾期的内容。
- 当前进度是否正常、轻微落后或明显落后。
- 如果落后，追上进度还差哪些代码产出、笔记、练习或复习登记。

### 学习中

让 Claudian 把当天笔记、练习题和代码产出写进对应日期目录，不只停留在聊天记录里。

### 学习后

告诉 Claudian 今天实际完成了什么，让它更新当天 `学习进度.md`、明天第一步和复习点。

### 周末

让 Claudian 检查本周是否完成代码产出；如果落后，先补缺口，再进入下一组语言模块。

如果你的实际流程和上面不一致，优先检查：

- 是否已经让 Claudian 写入整体规划，而不是直接开始每日记录。
- 每天是否留下可运行或可检查的代码产出。
- agent 启动后是否先汇报进度，而不是直接生成内容。
- 落后时是否先补缺口，而不是继续开新主题。

## 目录

- `00-入口/`：整体规划、当前上下文、导航和复习队列。
- `01-规划规则/`：学习节奏和产物样式。
- `02-周记录/`：周计划和每日进度。
- `03-知识点索引/`：知识点卡片。
- `_skeletons/`：文件骨架。Claudian 找不到同类样本时会读取这里作为兜底结构。
- `.claude/agents/`：Claudian 语言学习子代理。
- `.claude/skills/`：笔记、练习题和问答整理入口。
- `AGENTS.md`：Codex 框架规则入口。
- `CLAUDE.example.md`：Claude 框架规则入口示例。

## 学习方式

- 先让 Claudian 写入可追踪的整体规划，再开始每日进度。
- 每天只推进当前语言主线里的少量任务。
- 每个阶段都留下可检查的代码产出，例如语法示例、练习题、可运行小任务或小项目。
- 如果进度落后，先补缺口，再开启新主题。
