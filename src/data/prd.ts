export const prdData = {
  en: `
# PRD — V2 Executive Signals Brief

## Product
AI Chief of Staff for MSP CEOs

## Version
V2 — Executive Signals Brief

## Objective
Deliver a daily CEO-facing briefing that turns PSA + Financial + RMM data into a short list of business exceptions, rising risks, and recommended next steps.

## One-line value proposition
Every morning, the CEO should be able to answer four questions in under 3 minutes:
- What changed?
- Why does it matter?
- Does it need my attention?
- What should happen next?

## 1. Scope
**In scope**
- Daily executive brief
- PSA signals
- Financial signals
- RMM signals
- Cross-domain issue ranking
- Customer watchlist section
- Recommended actions section
- Detail page for issue drill-down
- Client 360 drawer
- Push delivery via Email / Teams DM
- Lightweight web detail experience

**Out of scope**
- Email ingestion / email analysis
- CRM / pipeline / sales forecasting
- Drafting replies
- Sending messages
- Task writeback
- Approval workflows
- Full BI dashboard
- Chat copilot / freeform Q&A
- SOC / NOC operational console
- Full historical reporting suite

## 2. Target user
**Primary user**
- MSP CEO

**Secondary users**
- COO
- Service Manager
- Finance lead
- Leadership team members who may review the same brief later

**User context**
The primary user does not want to browse dashboards every morning.
They want a short, trustworthy summary of what changed across the business and whether intervention is needed.

## 3. Core jobs to be done
**JTBD 1**
When I start my day, I want to know which issues deserve my attention, so I do not waste time reconstructing priorities from multiple systems.

**JTBD 2**
When risk is rising across service, finance, or technical operations, I want to see it early, so I can intervene before it becomes a client or revenue problem.

**JTBD 3**
When I open a flagged issue, I want to quickly understand the evidence and recommended next step, so I can decide whether to act or delegate.

## 4. Experience principles
**4.1 Exception-first**
Only show meaningful changes and threshold breaches. Do not show static KPIs unless they explain an exception.

**4.2 CEO language, not analyst language**
Default to business impact wording, not raw technical metric wording.
*Bad:* Patch compliance fell to 84%.
*Better:* Patch compliance fell below target on a strategic account, increasing security exposure.

**4.3 Short summary, deep drill-down**
The brief should stay concise. Details belong in the issue detail page and client drawer.

**4.4 Cross-domain context matters**
A combined PSA + Financial issue should rank higher than an isolated single-domain issue.

**4.5 No action automation in V2**
Only recommend next steps. Do not send, assign, or write back.

## 5. Information architecture
**Surfaces**
- Push surfaces: Email, Teams DM
- Web surfaces: Daily Executive Signals Brief page, Issue Detail page, Client 360 drawer

## 6. Main page spec (Page A — Daily Executive Signals Brief)
**Purpose:** Give the CEO a 3-minute view of the most important business exceptions today.

**Layout order:**
1. **Header (A1):** Date, generated time, coverage window, and overall status badge (Stable, Watch, Needs Attention).
2. **Overall Read (A2):** A 1-2 sentence AI-generated summary of the day's posture.
3. **Top Issues Today (A3):** Ranked cards of the most critical cross-domain issues. Must include: Rank, Severity, Domains, Entity, What changed, Why it matters, Recommended next step, and CEO Attention flag.
4. **Customers to Watch (A4):** A table of clients with rising or falling risk. Columns: Client, Risk Level, Change (Up/Flat/Down), Main Driver, Domains.
5. **Service Delivery Exceptions (A5):** PSA-specific signals (e.g., Backlog spikes, SLA drops).
6. **Financial Watch Items (A6):** Finance-specific signals (e.g., Overdue AR, Margin drops).
7. **RMM / Resilience Exceptions (A7):** RMM-specific signals (e.g., Backup failures, Server offline).
8. **Recommended Actions (A8):** A consolidated list of all recommended next steps and their suggested owners.
9. **Footer / metadata (A9):** Data sources used, last refresh time, and confidence note.

## 7. Issue Detail Spec (Page B)
**Purpose:** Provide deep context on a specific flagged issue without overwhelming the user.

**Layout order:**
1. **Issue Header (B1):** Severity, Domains, Title, Entity name, Last updated time.
2. **Executive Summary (B2):** 1-2 sentence explanation of the risk.
3. **Why Flagged (B3):** Bulleted list of the specific metric breaches or events that triggered the issue.
4. **Impact Summary (B4):** Business impact categorization (e.g., Client Risk, Revenue Risk).
5. **Recommended Next Step (B5):** Clear action, suggested owner, and CEO attention flag.
6. **Evidence by Domain (B6):** Raw metrics grouped by domain (PSA, Financial, RMM) to prove the AI's reasoning.
7. **Trend Section (B7):** Historical context (e.g., "Worsening for 3 consecutive days").

## 8. Client 360 Drawer Spec (View C)
**Purpose:** A quick slide-out view to understand a specific client's overall health across all domains.

**Layout order:**
1. **Client Summary (C1):** Client Name, Overall Risk Level, Account Type (Strategic/Standard), Revenue Tier, Account Owner.
2. **Why Risky Now (C2):** Brief explanation of the primary risk driver.
3. **Signals by Domain (C3):** Status indicators (High/Watch/Stable) for PSA, Financial, and RMM.
4. **Trend Summary (C4):** 7-day risk trend and consecutive worsening days.
5. **Open Issues (C5):** Clickable list of active issues linked to this client.
6. **Recommended Attention (C6):** Top recommended action for this client and the suggested owner.
  `,
  zh: `
# 产品需求文档 (PRD) — V2 高管信号简报

## 产品
MSP CEO 的 AI 幕僚长

## 版本
V2 — 高管信号简报

## 目标
提供每日面向 CEO 的简报，将 PSA（专业服务自动化）+ 财务 + RMM（远程监控管理）数据转化为业务异常、上升风险和推荐后续步骤的简短列表。

## 一句话价值主张
每天早上，CEO 应该能在 3 分钟内回答四个问题：
- 发生了什么变化？
- 为什么这很重要？
- 需要我的关注吗？
- 接下来应该怎么做？

## 1. 范围
**包含在内 (In scope)**
- 每日高管简报
- PSA 信号
- 财务信号
- RMM 信号
- 跨领域问题排名
- 客户观察列表部分
- 推荐操作部分
- 问题下钻详情页
- 客户 360 度抽屉视图
- 通过电子邮件 / Teams DM 推送交付
- 轻量级 Web 详情体验

**不包含在内 (Out of scope)**
- 邮件摄取 / 邮件分析
- CRM / 管道 / 销售预测
- 起草回复
- 发送消息
- 任务回写
- 审批工作流
- 完整的 BI 仪表板
- 聊天副驾驶 / 自由问答
- SOC / NOC 运营控制台
- 完整的历史报告套件

## 2. 目标用户
**主要用户**
- MSP CEO

**次要用户**
- COO (首席运营官)
- 服务经理
- 财务主管
- 稍后可能查看同一简报的领导团队成员

**用户背景**
主要用户不想每天早上浏览仪表板。
他们想要一份简短、可靠的摘要，了解整个业务发生了什么变化，以及是否需要干预。

## 3. 核心待办任务 (JTBD)
**JTBD 1**
当我开始一天的工作时，我想知道哪些问题值得我关注，这样我就不会浪费时间从多个系统中重建优先级。

**JTBD 2**
当服务、财务或技术运营的风险上升时，我希望及早看到它，以便在它变成客户或收入问题之前进行干预。

**JTBD 3**
当我打开一个被标记的问题时，我想快速了解证据和推荐的后续步骤，以便我可以决定是采取行动还是委派。

## 4. 体验原则
**4.1 异常优先**
仅显示有意义的变化和阈值突破。不要显示静态 KPI，除非它们解释了异常。

**4.2 CEO 语言，而非分析师语言**
默认使用业务影响的措辞，而不是原始的技术指标措辞。
*不好：* 补丁合规率降至 84%。
*更好：* 战略客户的补丁合规率低于目标，增加了安全风险。

**4.3 简短摘要，深度下钻**
简报应保持简洁。详细信息属于问题详情页和客户抽屉。

**4.4 跨领域背景很重要**
结合了 PSA + 财务的问题应比孤立的单领域问题排名更高。

**4.5 V2 中没有操作自动化**
仅推荐后续步骤。不要发送、分配或回写。

## 5. 信息架构
**展示面**
- 推送展示面：电子邮件，Teams DM
- Web 展示面：每日高管信号简报页，问题详情页，客户 360 度抽屉

## 6. 主页规格 (页面 A — 每日高管信号简报)
**目的：** 为 CEO 提供今天最重要的业务异常的 3 分钟视图。

**布局顺序：**
1. **头部 (Header - A1)：** 日期、生成时间、覆盖范围和整体状态徽章（稳定、观察、需要关注）。
2. **整体解读 (Overall Read - A2)：** 由 AI 生成的 1-2 句话摘要，概述当天的业务态势。
3. **今日首要问题 (Top Issues Today - A3)：** 最关键的跨领域问题排名卡片。必须包含：排名、严重程度、领域、实体、发生了什么变化、为什么重要、推荐的后续步骤以及 CEO 关注标记。
4. **需关注的客户 (Customers to Watch - A4)：** 风险上升或下降的客户表格。列：客户、风险等级、变化（上升/持平/下降）、主要驱动因素、领域。
5. **服务交付异常 (Service Delivery Exceptions - A5)：** PSA 特定信号（例如：积压激增、SLA 下降）。
6. **财务观察项目 (Financial Watch Items - A6)：** 财务特定信号（例如：逾期应收账款、利润率下降）。
7. **RMM / 弹性异常 (RMM / Resilience Exceptions - A7)：** RMM 特定信号（例如：备份失败、服务器离线）。
8. **推荐操作 (Recommended Actions - A8)：** 所有推荐后续步骤及其建议负责人的合并列表。
9. **页脚 / 元数据 (Footer / metadata - A9)：** 使用的数据源、最后刷新时间和置信度说明。

## 7. 问题详情页规格 (页面 B)
**目的：** 提供特定标记问题的深度背景信息，而不会让用户感到信息过载。

**布局顺序：**
1. **问题头部 (Issue Header - B1)：** 严重程度、领域、标题、实体名称、最后更新时间。
2. **高管摘要 (Executive Summary - B2)：** 1-2 句话解释风险。
3. **为何标记 (Why Flagged - B3)：** 触发该问题的特定指标突破或事件的项目符号列表。
4. **影响摘要 (Impact Summary - B4)：** 业务影响分类（例如：客户风险、收入风险）。
5. **推荐后续步骤 (Recommended Next Step - B5)：** 明确的操作、建议负责人和 CEO 关注标记。
6. **按领域划分的证据 (Evidence by Domain - B6)：** 按领域（PSA、财务、RMM）分组的原始指标，以证明 AI 的推理。
7. **趋势部分 (Trend Section - B7)：** 历史背景（例如：“连续 3 天恶化”）。

## 8. 客户 360 度抽屉规格 (视图 C)
**目的：** 一个快速滑出的视图，用于了解特定客户在所有领域中的整体健康状况。

**布局顺序：**
1. **客户摘要 (Client Summary - C1)：** 客户名称、整体风险等级、账户类型（战略/标准）、收入层级、客户所有者。
2. **为何现在有风险 (Why Risky Now - C2)：** 对主要风险驱动因素的简短解释。
3. **按领域划分的信号 (Signals by Domain - C3)：** PSA、财务和 RMM 的状态指示器（高/观察/稳定）。
4. **趋势摘要 (Trend Summary - C4)：** 7 天风险趋势和连续恶化天数。
5. **未解决问题 (Open Issues - C5)：** 链接到此客户的活动问题的可点击列表。
6. **推荐关注 (Recommended Attention - C6)：** 针对此客户的首要推荐操作和建议负责人。
  `
};
