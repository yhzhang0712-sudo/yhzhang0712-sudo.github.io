---
title: "Danus：以事实图谱记忆编排数学推理智能体"
date: 2026-10-05
lastmod: 2026-10-05
math: true
description: "arXiv:2607.06447《Danus: Orchestrating Mathematical Reasoning Agents with Fact-Graph Memory》的中文翻译：以共享事实图谱作为全局记忆，编排主智能体、工作智能体与无状态验证器完成研究级数学推理。"
ShowToc: true
TocOpen: true
hiddenInSectionList: true
---

**原文标题：** Danus: Orchestrating Mathematical Reasoning Agents with Fact-Graph Memory

**arXiv 编号：** [arXiv:2607.06447v2](https://arxiv.org/abs/2607.06447) [cs.AI]，2026 年 7 月 8 日（v2）

**作者：** Jihao Liu¹,²·\*，Guoxiong Gao¹·\*，Zeming Sun²,³·\*，Bin Wu⁴,⁵·\*，Shurui Liu⁶，Jiedong Jiang⁷，Haocheng Ju¹，Leheng Chen¹，Ronnie Cheng⁶，Xiping Zhang⁸，Bin Dong⁵,⁹,¹⁰,¹¹·¶

**机构：**
¹ 北京大学数学科学学院；² 北京大学北京国际数学研究中心（BICMR）；³ 京都大学数理解析研究所（RIMS）；⁴ 天津大学数学学院；⁵ 中关村学院（Zhongguancun Academy）；⁶ 斯坦福大学数学系；⁷ 西湖大学西湖高等研究院；⁸ 同济大学数学科学学院、智能计算与应用教育部重点实验室；⁹ 北京大学北京国际数学研究中心与新基石科学实验室；¹⁰ 北京大学机器学习研究中心；¹¹ 大湾区大学大湾区高等研究院智能计算中心

\* 同等贡献；¶ 通讯作者（dongbin@math.pku.edu.cn）

**开源代码：** https://github.com/frenzymath/Danus

> **译者注：** 本译文由 AI 辅助翻译，仅供学习参考；数学表述以英文原文为准。数学公式与文献引用编号均保留原文记号。术语首次出现时在括号内保留英文原词。

---

## 摘要

近年来，基于大语言模型（LLM）的数学推理智能体已开始挑战研究级问题，并且在若干情形下为开放问题的解决做出了实质贡献。然而，如何有效地扩展（scaling）与编排（orchestrate）这类智能体仍然困难，原因在于：在协调并行证明搜索（parallel proof search）的同时，让中间命题保持有序且可靠，本身就是难题。本文提出 **Danus**——一个面向研究级数学推理的编排系统，其核心是以一个共享的**事实图谱**（fact graph）作为全局记忆管理机制。Danus 由三部分构成：负责规划与协调的**主智能体**（main agent）、并行执行证明搜索的多个**工作智能体**（worker agents），以及在数学命题被准入事实图谱之前对其进行检验的**无状态验证器**（stateless verifier）。每条经过验证的事实都与其证明及逻辑依赖关系一同存储，使系统能够在保持共享证明状态井然有序的前提下增量式地构建长篇论证。主智能体定期总结不断演化的证明状态，将工作智能体调配到有希望的方向上，并通过进度报告支持与人类数学家的交互。我们通过代数几何、奇点理论与组合数学中的六个研究级案例研究对 Danus 进行了评估，展示了事实图谱记忆机制如何使 Danus 构建出长而详尽的数学证明。我们的结果表明，基于事实图谱的编排为扩展面向长时程（long-horizon）研究问题的数学推理智能体提供了一条有效路径。Danus 已开源。

---

## 1 引言

大语言模型（LLM）正日益被用作智能体系统（agentic systems）的推理核心，这类系统能够检索知识、调用工具、执行代码、与外部环境交互，并通过反馈修订自身输出。在这类系统中，性能不仅取决于基座模型，还取决于约束框架（harness）——它决定信息、工具、状态与反馈以何种方式暴露给模型。借助恰当的 harness 工程，基于 LLM 的智能体在需要外部信息、迭代纠错或长时程执行的任务上可以超过非交互式提示基线 [27, 48]。

面向研究级数学推理的智能体也已有若干。**Aletheia 智能体** [16] 构建于 Gemini Deep Think 的高级版本之上，由生成器、验证器与修订器组成，并在三者之间循环迭代。它已自主或半自主地解决了若干 Erdős 问题，并被应用于代数几何 [41]、组合数学 [26] 与表示论 [15] 的研究级问题。**Rethlas 智能体** [21] 的设计旨在模仿人类数学家的工作流程：它配备了针对数学研究定制的技能与工具，并维护一个工作记忆，存放推理过程中产生的中间产物，如构造出的例子、反例与子目标分解方案。Rethlas 已自主处理了交换代数 [18]、泛函分析 [13] 与概率论 [28] 中的若干开放问题，并协助解决了代数几何中的数学研究问题 [40]。**QED 智能体** [5] 由分解器、证明器、结构验证器、细节验证器与调控器组成，将这些功能专一的智能体组织成循环。它已解决了代数几何、偏微分方程、概率论与反问题中的若干研究级问题。**ProofCouncil 系统** [44] 由作者智能体、一个顾问 LLM 议会（council）、批评者智能体与计算智能体组成并循环迭代；在 FirstProof 第二批问题中，它正确解决了 10 题中的 6 题（至多需要小幅修订）[1]。**AI co-mathematician** [49] 是一个智能体式 AI 工作台，协调多个专门智能体来分解问题、探索想法、检索文献、运行计算、起草非正式证明，并迭代地审查和修订输出。它已帮助人类数学家以交互方式解决了群论中的开放问题。

上述智能体大多显式或隐式地包含一个"生成–验证–修订"（generate–verify–revise）循环，而现有多智能体数学推理系统中的"多"，通常指的是角色分工不同的智能体。相比之下，**如何通过增加直接参与证明生成的智能体数量来扩展**围绕生成–验证–修订循环构建的数学推理系统，尚缺乏系统研究。扩展这类智能体并非"多生成几个智能体在同一个问题上工作"那么简单——它需要精细的记忆管理与协调。如果多个智能体的共享记忆处理不当，反而会干扰智能体、传播无关或错误的中间产物，最终损害性能。

为了有效扩展并编排数学推理智能体，我们提出 **Danus**——一个以共享事实图谱（作为全局记忆管理机制）为核心的编排系统。在 Danus 中，一个主智能体负责规划与协调，多个工作智能体执行证明生成；共享事实图谱使中间的（非形式化）已验证事实保持有序，从而使系统能够构建长篇、精细的证明。

Danus 与人类数学家的交互也经过精心设计。主智能体定期将当前证明状态总结为报告，使人类数学家能够查看证明进展，并在必要时经由主智能体给出高层指导。同一份报告也可被主智能体用于咨询 GPT-5.5-pro 等高级系统以获取进一步的数学指导。此外，Danus 包含一个写作系统：一旦目标命题被证明，它便将完成的证明转化为论文式的表述，使最终论证更易于人类读者理解。我们在代数几何、奇点理论与组合数学的若干具有挑战性的研究级问题上展示了 Danus 的有效性，并讨论了事实图谱记忆机制在产出长篇、详尽且正确的证明中所起的作用。我们还明确报告了每个问题所涉及的人类输入，以及数学家在这些例子中如何与 Danus 协作。

本文其余部分组织如下：第 2 节介绍 Danus 系统的设计；第 3 节给出六个案例研究；第 4 节讨论其优势与局限；第 5 节总结全文。

## 2 方法论

Danus 是一个面向研究级数学的自动化系统，构建于前作 Rethlas [21] 的"工作智能体–验证器"（worker–verifier）核心之上。它将一群证明搜索工作智能体与一个无状态验证器耦合到共享记忆上，全部由一个主智能体协调。设计遵循严格的**权力分立**（separation of powers）：主智能体执行全局规划与协调；工作智能体执行具体的证明搜索；验证器是正确性的唯一权威；唯一的一个事实图谱保存所有经过验证的结果，是系统唯一的真相来源（single source of truth）（图 1）。本节依次介绍各组件：2.1 节描述工作流程；2.2 与 2.3 节介绍事实图谱及其外的记忆；2.4 与 2.5 节介绍主智能体、工作智能体与验证器；2.6 节介绍各类智能体的技能与工具；2.7 节介绍总结与论文写作。

> **图 1** Danus 总体架构。左侧：数学家以自然语言提出问题；主智能体（Main agent）负责全局规划与编排，可咨询 GPT-5.5-pro 获取高层策略；主智能体以 assign · start · stop 指挥工作智能体集群（Rethlas 生成智能体 × N，分为 high effort 与 xhigh effort 两档）；各 worker 带有局部记忆；worker 以"提交命题+证明"（submit statement + proof）发送给验证器（Verifier，无状态服务、正确性的唯一权威），验证器给出 feedback（反馈）；验证器将验证过的事实写入（writes verified fact）共享存储；worker 对共享存储可读可写（read · write）。共享存储包含两部分：**全局记忆**（计划·发现·死胡同）与**事实图谱**（验证过的事实·唯一真相来源）。

### 2.1 工作流程概览

这些部件围绕单个问题协同工作，从最初的命题一直到完成的论文。数学家以自然语言向主智能体给出一个问题。主智能体形成初始计划——需要时咨询 GPT-5.5-pro 以获取高层数学策略——并为工作智能体分配方向。工作智能体是并行运行的 Rethlas 生成智能体，从多个方向探索问题，包括构造性（constructive）路线与反证性（refutational）路线。每个工作智能体反复地提出一个可验证的命题及其支撑证明，并提交给验证器；证明通过验证的命题即作为一条**事实**（fact）存储。这些事实构成一个有向无环图（DAG），称为**事实图谱**（fact graph），其边记录逻辑依赖关系。随着工作智能体推进，主智能体定期读取其进展与事实图谱，总结当前状态，咨询 GPT-5.5-pro，并重新分配工作智能体。迭代不会在预设轮数后停止；只有当主智能体确认目标命题（或其否证）已作为验证过的事实出现在事实图谱中时，迭代才停止。随后主智能体可将事实图谱转化为一篇论文，供人类专家审阅。

这种并行探索是与 Rethlas 的主要分野。Rethlas 一次只追求一条推理路线，而 Danus 同时运行多个工作智能体，每个探索问题的不同侧面——例如证明不同的引理、构造反例、或研究玩具例子。这拓宽了探索范围，使长篇、多步的论证变得可行。它同时也引出了事实图谱所要解决的问题：让许多工作智能体为同一个证明做贡献而互不干扰。

### 2.2 事实图谱

> **图 2** 第 3.6 节拟阵切类（matroid tangent-class）案例研究背后的事实图谱：3,157 条验证过的事实、8,616 条依赖边；节点随依赖深度变暗、变大（深度至 54）。各聚类是彼此独立的进攻路线：底部是最终证明从未引用的条件性脚手架（conditional scaffolding）；左侧是 Chern 数界的一次独立再推导；右上是结果的整提升（integral lift），其最终路线进入了证明。

**结构。** 事实图谱是整个系统唯一的真相来源，也是其核心设计元素。它是一个有向无环图（DAG），节点是事实，边记录逻辑依赖关系。一条事实是一个数学命题连同其经验证器检验过的证明；从一条事实指向另一条事实的边，表示第二条事实的证明使用了第一条。工作智能体可以取用图谱中已有的事实：原则上它能访问整张图谱，实际操作中它通过搜索图谱来检索相关事实。当工作智能体提交一个新命题及证明时，它记录该证明所依赖事实的标识符，这些即成为新事实的入边。每个通过验证的命题都被加入图谱，因此图谱不断生长，直至包含目标定理（图 2）。

**为何用图谱而非单一蓝图。** 这一设计正是让众多工作智能体得以协作的关键。在 Rethlas 中，整个结果由一份单一的 Markdown 蓝图承载，其中存放所有支撑引理、定义与最终定理；工作智能体反复编辑这份蓝图，请验证器检验并提出修改建议。与单一蓝图相比，事实图谱有两大优势。

第一，它让每个工作智能体的上下文保持小而聚焦。这种上下文管理之所以重要，是因为语言模型智能体只在只包含相关材料的短上下文中推理最可靠；无关内容既消耗其容量，又干扰其推理。单一蓝图迫使每个工作智能体携带整个累积证明，而事实图谱让每个工作智能体只取用其当前命题所需的事实、每次只提交一条事实，因此即便证明增长到许多页，工作上下文仍然很小。第二，它支持并行工作：单一文件很难被多个工作智能体同时编辑，也很难用于彼此独立的进攻路线；而事实图谱让各方的贡献累积进一个共享结构。

**撤销（Revocation）。** 事实图谱还支持撤销：后来被发现有误的事实，连同直接或传递依赖于它的每一条事实一并移除。这种情况发生在两类场景：被引参考文献有误（通常由智能体在最终审查中发现，或由人类专家指出），或者（更少见的）概念混淆或有缺陷的证明。在我们的运行中，需要撤销的情况极少；这一点在讨论验证可靠性时还会回到（见 4.5 节）。

### 2.3 事实图谱之外的记忆

经过验证的内容存于事实图谱；其余值得保留的内容存于记忆（memory）。记忆不是真相的一部分；它是共享上下文，帮助工作智能体避免重复彼此的失败尝试。记忆分两层。每个工作智能体保有一份私有的**局部记忆**（local memory）——其自身活动的运行日志，主要用于日后分析一条推理路线如何发展。其上是**全局记忆**（global memory），所有工作智能体与主智能体皆可读写。全局记忆记录搜索的中间产物，如计划、有希望的方向、死胡同（dead ends）、构造出的例子与反例。它还记录每次 GPT-5.5-pro 咨询的提示词与回复。两层记忆合在一起，使每个工作智能体不重复自己的局部探索，也让主智能体看到每条搜索分支上发生过的事情，从而保持对推理策略与计划的整体把握。

### 2.4 主智能体

**角色。** 主智能体、工作智能体与验证器是作用于事实图谱和记忆的三类智能体；其中主智能体是相对 Rethlas 的主要新增。它负责搜索的全局规划与编排：形成并持续修订整体证明策略，决定如何分解问题、如何在各工作智能体之间分配力量，判断何时应当放弃一条进攻路线而转向新路线，并与人类专家进行策略性交互；它还执行受托任务，如撰写结果。其工作被限定在这一全局层面：主智能体自身不做具体的数学推导——推导留给工作智能体，且是唯一需要被验证的内容。系统由此维持权力分立，防止引导搜索的智能体把未经验证的数学引入事实图谱。主智能体依据自身对整体结构的理解、对各工作智能体进展的观察、以及全局事实图谱和记忆的内容来形成判断。对于数学上的细节问题，它可以低频咨询 GPT-5.5-pro（至多每小时一次）作为专家参考。于是，其战略决策既立足于对整个运行过程的系统性视角，又在需要处以前沿模型的数学实力加以增强。

**策略循环。** 在运行中，主智能体首先解读人类专家设定的任务，咨询 GPT-5.5-pro 以获取高层战略指导，并为工作智能体分配初始方向。每隔固定时间（每一到两小时），它重新阅读工作智能体的日志、记忆与事实图谱，以理解当前状态与搜索卡住之处，产出状态总结，并向 GPT-5.5-pro 询问下一步战略。该循环反复进行；当主智能体确认问题已被解决时，它通知人类专家并支持下游任务（如论文生成）。在整个过程中，人类可随时与主智能体交互——询问进展、重新定向搜索、调整优先级——而不中断正在运行的工作智能体。2.7 节描述进展与最终结果如何呈现给人类。

**读取全局状态。** 这一角色的难点在于定期总结。主智能体必须通读多层日志文件与一个可能容纳数千条目的事实图谱，同时跟踪多个工作智能体的进展，并将所有内容综合为一份人类或 GPT-5.5-pro 能够据以行动的总结。对如此庞大且不断演化的文件集合进行阅读，需要编码智能体（coding agent）的能力——它们天生擅长在大量代码中导航与阅读。我们评估了若干此类智能体（Codex、Claude Code 与 OpenClaw，分别搭载 GPT-5.5 或 Claude Opus 4.8），最终选择了搭载 Claude Opus 4.8 的 Claude Code——它对这一阅读任务处理得最好；主智能体即构建于其上。

### 2.5 工作智能体与验证服务

**工作智能体。** 主智能体是新的；工作智能体与验证器则继承自 Rethlas 的生成智能体与验证智能体，智能体本身只有微小改动，变化的主要是工作智能体的使用方式。现在，工作智能体在主智能体分配的任务下工作，通常一次只聚焦一个命题（claim）——例如一条引理、一个反例或一个玩具例子——而非整个证明。它反复将该命题提交验证器，并依据验证器反馈进行修订，直至通过；此时该命题作为一条事实进入事实图谱。由于工作智能体保留了 Rethlas 的核心检索机制——建立在定理搜索引擎 Matlas [20] 之上——它能在数学文献中精确搜索相关结果。实践中，每个项目运行三至九个工作智能体，并大致均分为两档推理强度（reasoning-effort）——"high"与"xhigh"（底层 Codex 智能体的强度设定）。刻意将一半工作智能体保留在较低的"high"档，是为了给搜索补充较浅但有用的结论，并增加整个集群推理的多样性。

**验证器。** 验证器作为一个服务运行，工作智能体与主智能体均可调用；它是无状态的：每次提交由一个全新实例评判，事后不留任何痕迹。关键在于，验证器被允许读取事实图谱——当某个证明依赖其他事实时，它能循着引用去检验依赖关系。得益于 Rethlas 中精心工程化的技能与检验流程，验证器在我们测试的问题上几乎没有产生过假阳性（false positives）；在极少数出错情形中，它要么接受了一个含有少量跳步的证明，要么（由于它默认被引参考文献正确）接受了一个依赖错误文献的证明。这两类失误都容易在最终审查中被抓住——这正是事实图谱能可靠充当系统真相来源的原因。完整的"提交–验证–修复"（submit–verify–repair）循环见图 3。

> **图 3** 工作智能体与验证器之间的"提交–验证–修复"循环。worker（一次只证明一个命题）提交（submit）"命题+证明"（statement + proof，引用图谱中已有的事实）→ 验证器（Verifier，无状态、每次提交一个全新实例）读取被引事实（reads cited facts）→ 接受（accept）：验证过的事实存入事实图谱（verified fact stored）；或拒绝（reject）：证明被拒（proof rejected），附带修复提示（repair hints）→ worker 修订并重新提交（revise and resubmit）。

### 2.6 技能、工具与接口

每一类智能体都通过各自的技能（skills）与工具（tools）来履行职责（图 4）。工作智能体与验证器的技能基本原封不动地继承自 Rethlas：工作智能体的技能是推理原语，如构造例子与反例、将目标分解为子目标、直接证明；验证器的技能是证明检验原语，如逐步检查证明、确认被引命题存在且适用。主智能体拥有自己的技能：咨询 GPT-5.5-pro、生成总结与写作。一个小型命令行接口（CLI）让主智能体能够启动工作智能体、分配任务、监控与停止；一组通过模型上下文协议（Model Context Protocol, MCP）暴露的工具让各智能体与事实图谱及全局记忆交互。数学文献检索作为其中一项工具提供，由 Matlas 支撑，工作智能体、主智能体与验证器均可使用。

> **图 4** 三类智能体，各自拥有自己的技能与按角色限定的工具集。
>
> | 主智能体（全局规划与编排） | 工作智能体 × N（自主证明搜索） | 验证器（无状态·正确性唯一权威） |
> |---|---|---|
> | **技能**：initialize、elaboration、consult、human-summary、write-paper | **技能**：obtain-immediate-conclusions、construct-toy-examples、construct-counterexamples、propose-subgoal-decomposition-plans、direct-proving、identify-key-failures、search-math-results、query-memory、verify-proof | **技能**：verify-sequential-statements、check-referenced-statements、synthesize-verification-report |
> | **MCP 工具**：global_memory_add、global_memory_search、fact_search、fact_revoke、Matlas、summary_write、paper_subgraph、paper_write、reference_audit、paper_revise、reference_verify、paper_verify_math；**另加 CLI**：danus new · assign · start · status · stop · list · finalize | **MCP 工具**：global_memory_add、global_memory_search、fact_search、fact_submit、Matlas | **MCP 工具**：Matlas（以文件形式读取事实图谱） |

### 2.7 总结与论文写作

另有两个组件负责产出面向人类专家的系统输出：运行进行中的**总结**（summarization），以及证明完成后的**论文写作**（paper writing）。两者目的不同：总结通过进度报告呈现尚未完成的搜索，使专家能够跟进并引导；论文写作则将验证过的事实图谱转化为可读的手稿——而非事实清单——使专家能够快速检验结果。

**总结。** 进度报告由一个隔离的智能体撰写，它只接收问题陈述与验证过的数学内容，所有关于系统内部的信息都被剥离——因此报告不可能提及作者从未见过的东西。约束它的技能是一组禁令（prohibitions），而非流畅行文的指南：进展永远不用数字估计；只有当一条验证过的事实（没有任何假设待匹配）落实了某个结果时，才能报告"已证明"；默认应报告为更弱的结论。这些禁令的存在是因为模型放任自流时会乐观地总结——一个还差一个假设的条件性论证会被说成"基本完成"——而报告是专家观察整个运行的窗口。同样的纪律（外加一条规则）也约束主智能体为 GPT-5.5-pro 撰写的状态总结（2.4 节）：在那里，每条停滞的路线必须被归类为**方法的失败**（命题本身仍然成立），或**针对命题本身的证据**——这一区分正是主智能体决定是否放弃某条路线的依据。

**论文写作。** Danus 将手稿视为一件新的数学制品：完成的草稿作为整体重新送回验证器检验，并不断修订直至作为"写成的文本"通过验证。事实层面的验证不可平移（does not transfer），因为把图谱转化为线性叙述会创造出从未成为事实的新数学——被压缩的步骤、"只需证明……即可"（it suffices to）的化简、以及陈述几乎但不完全吻合的事实之间的粘合——所以正确的事实可能被缝合成一份错误的手稿，而错误恰恰出在接缝处。当手稿长到无法一次检验时，主智能体将其分解为若干自包含的部分，每部分以指定结果收尾，并将其依赖的结果作为已建立命题携带——这样验证器评判的始终是完整文档，而非片段。凡验证过的证明被压缩成断言之处，都会重新补出原文并完整呈现。第 3.6 节的案例在一次完整运行中记录了这一循环。

## 3 结果

为检验 Danus，我们与多位数学家合作，以 Danus–人类协作的模式开展了一系列实验。本节总结其中一批具有代表性的论文，以展示 Danus 的能力。作为基线，下列每个问题也都（独立于 Danus）提交给了 GPT-5.5-pro 的网页界面；**没有任何一例产出有意义的结果**。

为准确说明协作模式：这些论文是通过人类专家以自然语言指挥 Danus 的交互写成的。每一例中，Danus 的工作都经历了第 2 节所述的两个阶段：**证明搜索**（proof search）——当目标定理作为一条验证过的事实立于事实图谱中时结束；以及**写作阶段**（writing stage）——系统将事实图谱转化为手稿（2.7 节）；人类专家可在任一阶段干预。其中一部分人类输入为所有案例所共有：问题陈述本身；不含数学内容的操作性指令（如请求状态总结、要求产出手稿）；对完成手稿的终审（人类专家确认每个证明）；以及每份手稿完成后人类作者独立于 Danus 所做的修订（主要是数学记号与引用格式的微调，见 4.5 节）。我们称之为**通用输入**（common input）；各小节的"人类输入"部分只记录超出通用输入之外的输入。

### 3.1 叶状结构的最优 bend-and-break

**问题。** Mori 的 bend-and-break 是双有理几何的奠基工具之一：在维数为 $n$ 的光滑射影簇 $X$ 上配丰富除子 $H$，对每条满足 $K_X \cdot C < 0$ 的曲线 $C$，它过 $C$ 的每一点产出一条 $H$-次数至多 $\frac{(n+1)\,H \cdot C}{-K_X \cdot C}$ 的有理曲线，且常数 $n+1$ 是最优的 [19, 37, 38]。对秩为 $r$ 的叶状结构 $\mathcal{F} \subset T_X$（即在奇点轨迹之外把代数簇分解为一族 $r$ 维叶的结构），自然的类比是询问**切于** $\mathcal{F}$ 的有理曲线（即沿叶行进的曲线）的最优常数。已有显式但非最优的常数——Shepherd-Barron 的 $2n$ [45] 与 Bogomolov–McQuillan 的 $2r$ [8]——最优常数此前未知。论文 [35] 解决了它：最优常数是 $r+1$。

> **定理 1（叶状结构的最优 bend-and-break [35]）。** 设 $X$ 是维数为 $n$ 的正规射影簇，$\mathcal{F}$ 是 $X$ 上秩为 $r$ 的叶状结构，$H_1, \dots, H_{n-1}, H$ 是 $X$ 上的丰富除子。设 $C$ 是 $|m_i H_i|$（$m_i \gg 0$）中元素的一般完全交，且 $K_{\mathcal{F}} \cdot C < 0$。则过 $C$ 的一般点存在切于 $\mathcal{F}$ 的有理曲线 $\Sigma$ 满足
> $$H \cdot \Sigma \leq (r+1)\,\frac{H \cdot C}{-K_{\mathcal{F}} \cdot C},$$
> 且常数 $r+1$ 是最优的。

最优常数只依赖叶状结构的秩，不依赖环境维数；当 $r = n$ 时回到经典界，$r = 1$（秩 1 叶状结构）情形亦然；一旦叶状结构的锥定理（cone theorem）可用，它便给出 $K_{\mathcal{F}}$-负极端射线（extremal rays）的最优长度界 $r+1$。

**Danus 如何解决。** 人类专家将问题交给 Danus，并指导它阅读两篇参考文献：Jovinelly–Lehmann–Riedl 的最优 bend-and-break 界 [19] 与 Bogomolov–McQuillan 的工作 [8]。Danus 自行判断 [8] 的记号与 [19] 不兼容，转而采用 Kebekus–Solá Conde–Toma 的工作 [22]。随后 Danus 完成了证明；五个工作智能体并行探索该问题，搜索过程中记录了 63 条验证过的事实与 239 条失败路径。Danus 将验证过的事实图谱转化为手稿；在审阅时，一位人类专家建议 Danus 使用 Campana–Păun 的代数性判别法（algebraicity criterion）[9] 来简化证明；Danus 完成修订并定稿。

**人类输入。** 除通用输入外，人类输入包括两篇初始参考文献，以及来自手稿终审的一个建议：人类专家确认了证明每个细节的正确性，但发现其中一节比必要的更复杂，于是建议上述简化；修订由 Danus 完成。

**该案例说明什么。** 这个案例中，策略由人类专家提供，Danus 的贡献在于执行。第一，它完成了一次持续的合成——自行把一个精巧的技术从普通代数簇移植到叶状设定，连同所需的衔接论证。第二，当所给的参考文献不能令人满意时，它自行找到了更好的替代。


### 3.2 三维叶状结构的 Shokurov 全局指标猜想

**问题。** Shokurov 全局指标猜想（global index conjecture）预言：数值平凡的（numerically trivial）对数 Calabi–Yau 结构都是挠的（torsion），其指标（index）关于维数与系数集一致有界（见 [47]）。用更直白的话说：这类结构的典范类与每条曲线的交度数为零，猜想预言它的某个仅依赖于维数与系数集的正整数倍是线性平凡的。其叶状版本由 [33] 对叶状对数 Calabi–Yau 三元组提出，在二维已知 [42]，在三维开放。论文 [30] 解决了三维情形。

> **定理 2（三维叶状指标定理 [30]）。** 设 $\Gamma \subset [0,1] \cap \mathbb{Q}$ 是满足降链条件（descending chain condition, DCC）的集合。则存在正整数 $I = I(\Gamma)$，使得对每个对数典范（log canonical）叶状三元组 $(X, \mathcal{F}, B)$，其中 $\dim X \leq 3$、$B$ 的系数属于 $\Gamma$、且 $K_{\mathcal{F}} + B \equiv 0$，都有 $I(K_{\mathcal{F}} + B) \sim 0$。此外，若 $\mathcal{F}$ 是典范的（canonical）、非代数可积的（not algebraically integrable），且 $B = 0$，则可取 $I \leq 30$。

这完全解决了 Shokurov 全局指标猜想的三维叶状版本。注意，Shokurov 全局指标猜想对通常代数簇在维数 $\geq 4$ 时仍然开放，因此这是目前该方向上所能期待的最佳叶状结果。

**Danus 如何解决。** 人类专家将问题交给 Danus。Danus 未经提示，按叶状结构的秩（rank）与代数秩（algebraic rank，即其叶的维数，以及其叶为代数叶的最大子叶状结构的维数）把问题分解为五类，人类专家认为这一分类是合理的。五类中的三类，Danus 找到了一个李理论（Lie-theoretic）方法并解决之——这一思路是人类专家没有预料到的。随后它对其余两类——代数可积类（叶为代数叶的那些）——尝试类似方法，未获成功。在人类专家看来，这两类恰恰是人类已有清晰简单方法的那两类，而 Danus 解决的三类才是更难的。之后一位人类专家建议用叶状极小模型纲领（foliated minimal model program，双有理几何的标准简化机制之叶状版本，近期由该人类专家等人发展）来处理剩余两类；借助这一提示，Danus 解决了它们。人类专家随后要求 Danus 证明一个更强的结果——把指标定理从 $B = 0$ 的典范叶状结构推广到具有 DCC 系数的对数典范叶状三元组 $(X, \mathcal{F}, B)$——并提供了指向曲面上极小对数差异的 ACC（升链条件）[3] 以及 Spicer 的某些结果 [46] 的提示。Danus 完成了这一推广。整个运行中，七个工作智能体并行探索，第一轮持续约八小时；事实图谱增长到 784 条验证过的事实，其中 77 条构成定理的支撑闭包（supporting closure）。随后 Danus 将验证过的事实图谱转化为论文。

**人类输入。** 除通用输入外，人类输入包括两次干预，均发生在证明搜索期间：当 Danus 在代数可积类上停滞时，一位人类专家建议使用叶状极小模型纲领，此后 Danus 解决了这些类；人类专家要求更强的结果并提供了上述提示，Danus 随之完成。

**该案例说明什么。** 这次进攻的结构出自 Danus 自身。第一，它在没有任何人类提示的情况下把问题分解为恰当的分类。第二，它从人类专家未曾预期的方向发现了求解方法。第三，当它确实停滞时，人类专家一句简短提示就足够了：它理解了建议并解决了剩余情形。

### 3.3 有理奇点族的全体 Cartier 指标

**问题。** 正规射影代数簇的全体 Cartier 指标（total Cartier index）是其上所有 $\mathbb{Q}$-Cartier Weil 除子的 Cartier 指标的最小公倍数——这里除子是 $\mathbb{Q}$-Cartier 的，如果它的某个正整数倍在每点附近都由单个方程定义；其 Cartier 指标即最小的这种倍数。该指标在族（families）中的行为是奇点如何变化的一个基本问题，正是高维代数簇模空间理论（在 KSBA 纲领 [4, 24] 之后）不断需要的那类结果。Han 与 Jiang 通过在族中运行极小模型纲领，证明了 klt 型簇（一类标准的温和奇点）有界族上的有界性，并提问（[17, 问题 4.5]）：弱得多的有理奇点（rational singularities）假设是否足够。有理奇点在这里构成一条自然边界：该类在极小模型纲领的运算下不稳定——极小模型纲领正是 Han–Jiang 结果以及此类绝大多数有界性定理背后的工具——而且不加假设时指标可以是无穷的（椭圆曲线上的锥已经不成立）。论文 [34] 肯定地回答了该问题。

> **定理 3（族中的全体 Cartier 指标 [34]）。** 设 $k$ 是特征零的代数闭域，$\pi : X \to B$ 是到有限型 $k$-概形的射影态射。则存在正整数 $I$，使得对每个闭点 $b \in B$，只要 $X_b$ 是正规的、射影的、纯维数的、且具有有理奇点，$X_b$ 的全体 Cartier 指标就整除 $I$。

**Danus 如何解决。** 人类专家将问题交给 Danus，最初设定为寻找反例。七个工作智能体并行探索反证性与构造性路线，搜索最终收敛于肯定的答案：Danus 独立发现了一条融合差别显著的不同领域技术的路线——它把这个代数几何问题约化为一个交换代数问题，再把这个问题的核心进一步约化为一个实代数几何问题，并运用 Hadamard 不等式界（一个经典的行列式不等式）等工具加以处理。沿这条路线，Danus 还自主地把问题分类为曲面（余维 2）情形与维数至少为 3（余维至少为 3）的情形，用不同方法分别进攻——曲面上控制奇点的 link（奇点小邻域的边界），高维则使用 Kollár 关于局部 Picard 群的工作 [23]——最后把两者缝合起来。随后 Danus 报告说它完成了除余维 3 情形之外的所有情形，而余维 3 情形它无法解决。一位人类专家检查了运行过程并找到原因：由于拿不到 [23] 的 TeX 源码，Danus 依据 PDF 工作，把假设"维数 $\geq 3$"误读为"维数 $> 3$"。指出这一点后，Danus 修复了论证并完成了证明搜索，系统将事实图谱转化为论文。初稿很差：在把验证过的材料压缩成叙述时，写作把实代数几何中的一条关键引理弄错了，而其底层的验证过的事实是完好的。草稿提交回验证器（2.7 节）后被拒绝；Danus 依据验证器的发现修订，并完成了手稿。

**人类输入。** 除通用输入外，人类输入包括一个修正：一位人类专家把 Danus 在三维情形的失败追溯到对 [23] 假设的误读；修复本身由 Danus 完成。

**该案例说明什么。** 这里的自主性（origination）在领域与规模上都拓宽了。第一，Danus 从远离问题所属主题——极小模型纲领——的地方找到了工具；而且在专家看来，这改变了他们对这类问题可用方法论的认识。第二，它自主分解问题，并在最后把各情形结合起来。第三，它完成了一长串推理，其步骤是宏观尺度的约化——先约化到交换代数，再约化到实代数几何——而非引理尺度的步骤。第四，由于探索同时运行反证性与构造性路线（2.1 节），一场为反例而启动的搜索最终竟以肯定地解决问题告终。第五，当写作阶段把验证过的材料压缩出错时，缺陷被验证环节抓住并在无人干预下修复（2.7 节）。

### 3.4 Matryoshka 数的阶乘渐近

**问题。** 宇宙多面体（cosmohedron）是一种正几何（positive geometry）——非正式地说，是凸多面体的一种推广，其形状编码具有物理意义的量——由 Arkani-Hamed、Figueiredo 与 Vazão 引入，用于在一类宇宙学模型中编码宇宙波函数 [7]。其组合学 [6] 涉及 Matryoshka 数（OEIS A177384 [39]），定义为 $a_1 = 1$ 且 $a_n = \sum_{k=1}^{n-1} (k+1) a_k a_{n-k}$。Kotěšovec 在该 OEIS 条目中猜想 $a_n \sim c \cdot n!\, n^4$，其中 $c \approx 0.0054283$；该猜想被重述为 [6, 猜想 5.7]，其作者写道他们不知道如何证明它。该断言称这些数按阶乘速度增长，并把增长律锁定到精确的乘法常数。短文 [29] 证明了它。

> **定理 4（Matryoshka 渐近 [29]）。** 存在实数 $S$，$0 < S < \infty$，使得
> $$\lim_{n \to \infty} \frac{a_n}{(n+4)!} = \lim_{n \to \infty} \frac{a_n}{n!\, n^4} = S, \qquad 0.00542831750 \leq S \leq 0.00542831848,$$
> 一个宽度小于 $10^{-9}$、包含猜想值的围合区间（enclosure）。

证明是初等的，其中每个常数都是显式的，因此该围合区间——一个被证明包含 $S$ 的区间——是严格的（rigorous）而非数值的；由于 $S$ 没有已知的闭形式，这样的围合区间是对该常数最有意义的最好确定。

**Danus 如何解决。** 人类专家将问题交给 Danus。Danus 完全独立地产出了完整证明：它证明了极限存在，并推导出显式的上界与下界，给出上述经过认证的 $S$ 围合区间。整个运行几乎直奔证明而去：五个工作智能体，从启动到目标定理被验证约九十分钟；事实图谱含 100 条验证过的事实，依赖链深达 15 层，其中 37 条构成定理的支撑闭包；全局记忆仅记录了一次证明尝试，没有死胡同。随后 Danus 将验证过的事实图谱转化为论文，同样无需人类参与。

**人类输入。** 人类输入未超出通用输入：没有提供任何形式的数学指导。

**该案例说明什么。** 这里没有任何人类的数学贡献：Danus 完成了从问题表述到成稿的整条流水线，未借助任何提示。我们还要指出，这个问题来自数学物理的组合学：Danus 的能力范围并不局限于单一数学领域。

### 3.5 经对数向量场的加权齐次性

**问题。** Saito 的一个经典定理 [43] 从代数上刻画了加权齐次（weighted homogeneous）孤立超曲面奇点（$f \in J(f)$，即 Jacobi 理想）；超曲面奇点是加权齐次的，如果在合适的坐标下，只要给坐标赋予适当的正权，其定义多项式就成为齐次的。da Silva Machado 与 Seade [36] 猜想了这一隐藏对称性的两个刻画——不是代数的，而是几何的，用向量场及其在奇点附近的行为来表述。一对姊妹论文肯定地解决了该猜想：一篇完全由人手写作 [32]，另一篇由 Danus 产出 [31]。

> **定理 5（经对数向量场的加权齐次性 [31, 32]）。** 设 $(D, 0) \subset (\mathbb{C}^{n+1}, 0)$ 是一个约化（reduced）孤立超曲面芽（germ），$n \geq 2$，或 $n = 1$ 且 $D$ 不可约。则以下等价：(i) $(D, 0)$ 在合适的坐标下是加权齐次的；(ii) 在合适的坐标下，存在一个全纯对数向量场（holomorphic logarithmic vector field），在实欧氏意义下处处横截（transverse）于 $D$ 的所有小环链（small links）；(iii) 存在一个切于 $D$ 的环境全纯向量场，在原点具有非退化孤立奇点。

这两个新刻画都是几何的，而 Saito 的判别法是代数的。

**Danus 如何解决。** 人类专家将问题交给 Danus，未建议任何路线。Danus 完成了证明，并将验证过的事实图谱转化为一篇论文。与此同时，一位人类专家独立产出了同一猜想的证明；两个证明走的是真正不同的方法，且该专家评论说 Danus 的思路是他们没有预料到的。在审阅 Danus 的论文时，人类专家发现一个漏洞："幂零"（nilpotent）一词在不同文献中的用法不一致，Danus 所依赖的一篇参考文献中的定义本身就是错的，这个缺陷传播进了论证的一个步骤。人类专家指出这一点后，Danus 丢弃了受影响的步骤，找到一篇正确的参考文献替换有缺陷的那篇，大改了证明，并正确地完成了它。搜索的范围远大于最终保留的证明：七个工作智能体、两轮运行，共产出 687 条验证过的事实——另有 23 条在上述修复中被撤销——依赖链深达 21 层，而主定理的支撑闭包只含约十条事实；全局记忆记录了 91 次证明尝试和 49 个反例。

**人类输入。** 除通用输入外，人类输入仅包括论文最终审查中的一项发现：人类专家识别出上述有缺陷的参考文献并向 Danus 指出。随后的证明大改由 Danus 自行完成。

**该案例说明什么。** 这个案例检验了 Danus 面对文献本身缺陷时的表现。第一，它独立产出证明，且走的是人类专家未曾预料的路线。第二，它修复了自己的文献依赖：依赖有缺陷参考文献的事实通过 2.2 节的机制被撤销，一篇正确的参考文献被找到，证明由其余经过验证的部分重建。

### 3.6 拟阵的切类与奇妙紧化

**问题。** 当秩为 $d+1$ 的拟阵（matroid）$M$ 由一个复线性子空间 $L$ 实现（realize）时，De Concini–Procesi 的奇妙模型（wonderful models）[12] 提供了维数为 $d$ 的光滑射影紧化 $W_{L,\mathcal{G}}$，对应 $M$ 的平权（flats）的每个构筑集（building set）$\mathcal{G}$ 各一个；Feichtner–Yuzvinsky [14] 用生成元 $x_F$（由平权 $F \in \mathcal{G}$ 标引）与只涉及拟阵 $M$ 的关系给出了 $W_{L,\mathcal{G}}$ 的 Chow 环表现。这一表现内蕴于拟阵 $M$，因而对每个无环拟阵（loopless matroid，不必可实现）都定义了一个分次环 $A_{\mathbb{Q}}(M, \mathcal{G})$，带最高次映射 $\deg_{M,\mathcal{G}}$；其极大构筑集情形正是 Adiprasito–Huh–Katz [2] 证明拟阵对数凹性（log-concavity）所用的环；Larson–Li–Payne–Proudfoot [25] 构造了组合 K-环 $K(M, \mathcal{G})$，由类 $\tau_F$ 生成。

这本词典中缺失了几何的一块基本拼图：$W_{L,\mathcal{G}}$ 的切丛（tangent bundle）。问题是：对每个无环拟阵与每个包含最高平权（top flat）$E$ 的构筑集，在其整组合 K-环中构造一个切类（tangent class）$T_{M,\mathcal{G}}$，使得 (i) 当 $M$ 由 $L$ 实现时，$T_{M,\mathcal{G}}$ 特化（specialize）为奇妙紧化 $W_{L,\mathcal{G}}$ 的实际切丛的类；(ii) 它的 Hirzebruch–Riemann–Roch 数恢复 Chow 环的分次维数；(iii) 它对组合超平面类的 Chern 数以下界 $\binom{d+1}{k}$（即射影空间 $\mathbb{P}^d$ 的取值）为下界。这种切类的构造与关键性质最近由 Cheng [10] 研究。本案例研究的论文 [11] 先在有理 K-环中构造该类并证明上述三条关键性质，再将其适配到整（integral）版本——独立于 [10] 完成，如下所述，它无法接触 [10]。

> **定理 6（拟阵奇妙模型的整切类 [11]）。** 设 $M$ 是有限非空基集（ground set）$E$ 上秩为 $d+1$ 的无环拟阵，$\mathcal{G}$ 是 $M$ 上包含最高平权 $E$ 的 Feichtner–Yuzvinsky 构筑集。则存在 $K_{\mathbb{Z}}(M, \mathcal{G})$ 中的类 $Q^{\mathbb{Z}}_{M,\mathcal{G}}$，使得
> $$T_{M,\mathcal{G}} := \sum_{F \in \mathcal{G} \setminus \{E\}} (1 - \tau_F)^{-1} - Q^{\mathbb{Z}}_{M,\mathcal{G}}$$
> 是 $K_{\mathbb{Z}}(M, \mathcal{G})$ 的真正元素，在标准 $\tau$-单项式基下具有整数坐标。记其有理化（rationalization）为 $T^{\mathbb{Q}}_{M,\mathcal{G}}$，则：(i) 若 $M$ 由复线性子空间 $L$ 实现，则在整环同构 $K_{\mathbb{Z}}(M, \mathcal{G}) \xrightarrow{\sim} K_0(W_{L,\mathcal{G}})$ 下，$T^{\mathbb{Z}}_{M,\mathcal{G}}$ 映到 $W_{L,\mathcal{G}}$ 的切丛的类；(ii) 对每个 $0 \leq i \leq d$，
> $$\dim_{\mathbb{Q}} A_{\mathbb{Q}}(M, \mathcal{G})_i = (-1)^i \deg_{M,\mathcal{G}}\Bigl(\operatorname{ch}\bigl(\textstyle\bigwedge^i T_{M,\mathcal{G}}\bigr) \cdot \operatorname{td}\bigl(T_{M,\mathcal{G}}\bigr)\Bigr),$$
> 其中 ch 与 td 按形式分裂根（formal splitting-root）意义理解；(iii) 对每个 $0 \leq k \leq d$，
> $$\deg_{M,\mathcal{G}}\bigl(c_k(T_{M,\mathcal{G}}) \cdot \alpha\bigr) \geq \binom{d-k}{k} \binom{d+1}{k}, \qquad \alpha := -x_E.$$

**Danus 如何解决。** 该问题以固定的逐字提示词（verbatim prompt）、且不给出任何求解路线建议的方式，提交给三个系统：GPT-5.5-pro 的网页界面、Rethlas 与 Danus。实验在 [10] 上线 arXiv 之前进行，且 [10] 被刻意对三者屏蔽，因此它们面对的是一个开放问题。前两者都没有产出解答。Rethlas 在该问题上运行三次，没有返回任何通过验证器的结果；其尝试恰恰在问题所诱导的混淆处搁浅——例如可实现拟阵、其奇妙紧化与全排列环面簇（permutohedral toric variety）之间的混淆，或整 K-理论与有理 K-理论之间的混淆。Danus——运行同样的一批工作智能体、对着同一个验证器——解决了问题的有理形式，然后将其适配到整版本。七个工作智能体并行探索构造性与反证性路线约五天。搜索范围远大于最终留下的证明：最终的事实图谱（图 2）容纳 3,157 条验证过的事实，依赖链深达 54 条事实，其中 664 条构成定理的支撑闭包；全局记忆记录 636 次证明尝试、151 个反例和 25 条死胡同。随后 Danus 将验证过的事实图谱转化为论文；把验证过的材料重组为线性叙述引入了新的错误，因此草稿被重新提交给验证器并逐节修正。在人类专家指出已完成的手稿只解决了问题的有理版本（原始命题要求的是整类）之后，Danus 恢复工作并产出整版本的解。实验细节记录于 [11, 附录 B]。

**人类输入。** 除通用输入外，人类输入包括一次数学干预，发生在系统宣布任务完成之后：人类专家指出该解处理的是问题的有理版本而非整版本，Danus 随即产出整版本。人类作者随后检查了论文并认定其正确，仅有一处局部例外：[11, 引理 8.7] 的论证依据（用于 Chern–$\alpha$ 下界）按原文书写是不完整的，该引理在未经有效论证的情况下被当作已证。该引理本身为真且容许一个简短证明（见 [10, 命题 4.19]），这一小漏洞既不影响切类的构造，也不影响 $\mathbb{P}K = \mathrm{Hilb}$ 恒等式。

**该案例说明什么。** 最后这个案例是六次搜索中规模最大的一次，也是我们的实验中最接近 Danus 与其前身受控对比的一次：Rethlas 与 Danus 在相同提示词、相同的工作智能体与验证器模型下运行，因此结果的差异——三次失败运行对一个完整且经验证的解——反映的是围绕模型的编排（orchestration），而非模型本身。这一对比分离出两种能力。第一，Danus 容纳了长得多的推理深度：证明逐条事实增长为数百条命题的验证闭包，长时程设计让运行持续到定理被验证为止，而非预设轮数。第二，Danus 对难度在于细微区分的数学是敏感的：Rethlas 的单行尝试混淆了相邻概念，而在 Danus 中，多个工作智能体同时从不同方向进攻问题——包括反证尝试——且每个命题都必须以后来事实将要使用它的精确形式通过验证器，因此问题所依赖的区分在数百步之后仍然完好。Danus 构造的类恢复了它从未见过的 [10] 的切类及其三条关键性质。

## 4 讨论

第 3 节的案例研究展示了第 2 节的设计所能交付的东西：由数百条验证过的事实构成的证明，在数天内产出，而人类的干预集中在少数决定性节点上。它们同样清楚地展示了边界：手稿仍需专家审阅，且若干次搜索中最难的一步是由人类解锁的。本节讨论这些观察引出的四个问题：4.1 节追问每个模型为何各司其职、装配起来的系统相较其部件增益何在；4.2 节讨论写作阶段如何在流畅与忠实之间取得平衡；4.3 节说明可靠的验证为何是一切的基础；4.4 节讨论这一设计在何种意义上扩展了测试时计算、扩展又在哪里止步。4.5 节汇总实验展现的优势与暴露的局限。

### 4.1 与 GPT-5.5、Claude Opus 4.8、GPT-5.5-pro 及 Rethlas 的比较

模型到角色的分配依据其实测强项。在我们的实验中，GPT-5.5 展现出强于 Claude Opus 4.8 的数学能力，因此工作智能体与验证器运行在搭载 GPT-5.5 的 Codex 智能体上；而搭载 Claude Opus 4.8 的 Claude Code 更适合主智能体的任务——阅读大量不断演化的日志、记忆与容纳数千条目的事实图谱（2.4 节）。GPT-5.5-pro 在三者中数学最强，但持续调用成本过高，故作为低频专家参考使用。我们尚未系统评估 Anthropic 更新的 Fable 5。

以这种方式装配，系统强于其任何部件。harness 可以比原始模型更重要，这在 Rethlas 中已见端倪：一个运行在 GPT-5.4 与 GPT-5.5 上的智能体解决了代数群中一个研究级问题，而 GPT-5.5-pro 经其网页界面产出的却是一个完全错误的证明（[21, §5.1.1]）。此外，没有任何单次模型调用被设计为返回我们案例研究所需长度的、经过验证的证明。即便是 GPT-5.5-pro，充其量给出一个方向的轮廓，且常常是错误的轮廓；直接向它提交我们的问题时，它在任何情形下都未产出有意义的结果（第 3 节）。

因此，本设计的大部分可以读作"从每个模型中诱导出超过直接调用所能获得的东西"的机制。验证器将推理约束于数学严格性：上下文隔离与明文规定检验逻辑的技能，在很大程度上抑制了幻觉与跳步——这是任何直接调用都做不到的，即便是被明确指示在回答前先自查的调用（2.5 节）。反复调用与独立工作智能体吸收了即便最强模型也会犯的错误：一次 GPT-5.5-pro 咨询进入记忆的是指导，永远不会作为真相进入事实图谱；一个错误方向被尝试、被反驳、被记录为死胡同，而一个正确的方向——哪怕十个里只有一个——会被带进验证过的事实。于是，搜索无论 GPT-5.5-pro 提供何种可靠性，都能从中获益。并行化以测试时计算扩展搜索的宽度，事实图谱与记忆则延伸其长度：每个智能体处理一个小任务，而系统在大任务上前进（4.4 节）。

装配后的系统不仅胜过单独调用其模型，也胜过 Rethlas 本身——后者在 Danus 内部实质上仍作为一个单 worker–verifier 循环延续：在同一个问题上、用同样的模型，Rethlas 失败三次，而 Danus 产出了经过验证的解（3.6 节）。

### 4.2 写作流畅与事实忠实之间的平衡

对手稿证明记录的忠实与可读性向相反方向拉扯，且张力随事实图谱的规模增长。最忠实的稿子会把目标定理所依赖的每条事实逐一写出——它是正确的（每条事实都通过了验证），却不可读，在我们的运行规模下要写数百条事实。可读的论文则需要动机、不同于发现顺序的陈述顺序、以及常规细节的省略。但这种改写本身就是数学写作，它引入错误的速率远高于图谱自身。我们在实验中反复见到的特征性失败，是一份结果、构造与路线全都正确的稿子，恰在数条事实被压缩成一处的地方，写出的推理出了错（2.7 节与 3.6 节）。

补救办法是依次追求两个目标：草稿为可读性而写，完成后的稿子必须**按写出的样子**通过验证器。在此之前，它被修订、重新提交——worker 的"提交–验证–修复"循环被抬升到整篇论文——不同之处在于此时面对验证器的是主智能体，且不写任何新事实：每次修订都从图谱中取回既有事实，并把它们表述得更准确（2.5 节与 2.7 节）。这清除了写作阶段的大部分错误，同时论文仍是论文，而非逐条事实的誊本。

剩下的是一个平衡而非解决：稿子仍可能把动机讲得过薄、把步骤压得过头，而要求更多严格性又会把文本推回誊本。最终发布的版本是我们选择的平衡点，残留缺陷很小：第 3 节记录的人类修订主要是记号与引用格式的调整。

### 4.3 验证的重要性

Danus 的验证器取自 Rethlas，并刻意收窄其角色：一个独立的、无状态的服务，只关心眼前文本的正确性（2.5 节）。隔离是本质的：提示一个模型检查自己的工作只能轻度抑制幻觉；检查者必须是一个独立的智能体，其上下文只包含被提交的内容与被引事实、别无其他，且其技能明文规定检验流程。经过这种工程化，验证器几乎从不接受有缺陷的证明：纵观我们的实验，记录在案的少数失误都在最终人工审查中被抓住（4.5 节），而撤销——图谱的修复通道——只需使用一次（3.5 节）。

正是这种精度使事实图谱得以运转。worker 无需重新推导即可信任每条既有事实（2.2 节），因此一条事实的可靠性等于其下方一切的可靠性。3.6 节的定理依赖 664 条支撑事实、链深达 54 条，如此深度的结构随验证器的精度而立、亦随其塌：若验证不精确，误差沿链条累积，上层事实变得不可靠，长时程推理不可能；若验证精确，累积就是安全的。验证器的精度因此是这一架构的承重假设。

验证也改变了人机回路的经济学。在 4.2 节的写作回路中它充当第一裁判：它拒绝的内容由机器修复，永不抵达专家。这很重要，因为瓶颈是人类的检查而非机器的搜索——一两天产出的结果，专家通常要花一两周来检查。真正加速新数学联合生产的，与其说是搜索速度，不如说是验证。

### 4.4 宽度与深度的测试时扩展

这一设计始于一个简单的意图：Rethlas 把它的测试时计算花在一条推理路线上，而我们想把更多计算花在许多条路线同时进行上。单纯增加 worker 会失败：它们都编辑承载整个证明的单一蓝图，每个人的进展都是其他人的干扰（2.2 节）。事实图谱使并行的工作得以相加：它把证明拆分为单个 worker 可以独占的事实，于是贡献得以累积而非相互碰撞，主智能体则把 worker 分散到不同的进攻路线上（2.2 节与 2.4 节）。在 3.6 节的运行中，七个 worker 在五天内构建了 3,157 条验证过的事实；其中只有 664 条支撑定理，其余记录着系统搜索之广。这是**宽度上的扩展**（scaling in width）：增加的计算变成增加的探索。

仅有宽度买到的是许多短的论证，而非一个长的论证；长度来自信任已经建成的、并记住已经尝试过的。验证提供信任：每条事实在进入时都被检验（4.3 节），因此 worker 可以站在 54 条事实深的链条上，而不重新推导其中任何一条。记忆负责记住：原始探索留在局部日志，被提炼的教训升入全局记忆，主智能体的总结把运行状态压缩成一页（2.3 节与 2.4 节）。每一层都浓缩其下一层，于是任何智能体读到的东西保持有界，而系统知道的东西不断增长：执行第十个任务的 worker 从一份总结中继承前九个任务的教训，而非五天的日志。这是**深度上的扩展**（scaling in depth）：一个远超单一上下文窗口的有效推理视界。

两个轴背后的机制并不复杂——一个主智能体、一张事实图谱、以及它们之间的交互逻辑——然而正是它把第 3 节的案例研究与同样的模型、或 Rethlas 本身单独所能产出的东西区分开来（4.1 节）。同样的实验也标出了扩展的止步之处。扩展在"存在通往解的路径、只需找到它"时有效：宽度找到入口，深度把论证带到底。它不创造路径：当解需要一个超出任何单次调用所能提出的想法时，更多的 worker 与更长的视界只会让系统打转，累积起永远无法破题的浅层结论。在我们的实验中，这类僵局是由人类补上缺失的想法而打破的（3.2 节）；对于最深的开放问题，可能没有人能补上它，攻克它们将需要比当前框架更具创造力的智能体框架。

### 4.5 优势与局限

前面各小节各自追问一个问题；作为讨论的收束，我们把 Danus 的能力作为一个整体来总结。在我们的实验中 Danus 展现了许多优势。第一，验证器的质量令人满意：我们总共只观察到极少数验证器错误，其中多数源于被引文献中不精确或有误的陈述（3.5 节）。事实图谱因此能够可靠地充当系统的真相来源。在此基础上，随着主智能体指挥搜索、记忆携带教训前行，Danus 在深度与宽度上拓展了它的工作：它在一轮持续的合成中把一个精巧技术带入新设定（3.1 节），让长时程并行搜索一直运行到目标定理立于验证过的事实之中（3.6 节），并在无人提示的情况下把问题分解为沿构造性与反证性路线推进的部分（3.2 节与 3.3 节）。在这种广度与长度的工作中，Danus 展现了可观的数学能力：有时它在很少或没有人类协助的情况下完成整个证明，其中一例完成了从问题陈述到成稿的整条流水线（3.4 节）；它经由人类专家未曾预料的路线抵达解（3.2 节与 3.5 节），从距离问题自身分支很远的数学分支中取用工具（3.3 节），并且在所给参考文献次优时自行寻找更好的替代（3.1 节）。最后，Danus 展现了一定程度的写作能力：当初稿把一条关键引理写错时，验证器拒绝了草稿，Danus 自动修复了它（3.3 节）；另一份手稿也以同样方式被逐节修正（3.6 节）。

与此同时，实验也暴露了若干不足。仍存在 Danus 未能自行找到正确证明路线、需要人类专家提示的情形（3.2 节）。即便找到了路线，Danus 的论文写作也尚未完全令人满意：引用格式偶尔偏离领域惯例，其记号虽逻辑一致却并非总能防止混淆；这些不完美需要人类专家事后手动调整。在检索文献时，Danus 倾向于满足于数学上够用的参考文献，而非使证明最简的参考文献：3.1 节案例中的简化判别必须由人类专家指出。最后，Danus 依赖它从参考文献中提取的信息，当文献本身有缺陷时可能继承错误；这类错误只能通过专家审查彻底解决：在 3.5 节的案例中，一个错误的定义传播进了论证，直到专家抓住它、依赖它的事实才被撤销（2.2 节）。

## 5 结论

本文提出 Danus——一个以共享事实图谱作为全局记忆管理机制的研究级数学推理编排系统。Danus 分离了全局规划、并行证明搜索与验证：一个主智能体协调整体策略，多个工作智能体并行探索并证明局部命题，一个无状态验证器在候选命题进入事实图谱之前加以检验。通过把每条验证过的事实与其证明及逻辑依赖一起存储，事实图谱使 Danus 能够增量式地积累长篇数学论证，同时保持共享证明状态的有序与可靠。

我们通过代数几何、奇点理论与组合数学中的六个研究级案例研究评估了 Danus。这些例子表明，Danus 能够构建长而细致的证明，把困难问题分解为可处理的子问题，修复有缺陷的证明依赖，并把验证过的事实图谱转化为数学手稿。人类输入的数量在案例之间变化，从没有数学指导到少量高层提示或修正，但在所有情形中 Danus 都执行了实质性的证明构建。

我们的结果表明，基于事实图谱的编排为把基于 LLM 的数学推理智能体扩展到长时程研究问题提供了一种有效机制。通过把并行的局部证明搜索转化为一个有序的、累积的证明构建过程，Danus 使来自不同智能体的许多贡献得以汇入同一个共享的、经过验证的结构。我们相信，这一方向为构建下一代数学研究智能体提供了一个有前景的起点。

## 参考文献

> *（参考文献保留英文原文，与正文引用编号一一对应。）*

[1] Mohammed Abouzaid, Nikhil Srivastava, Rachel Ward, and Lauren Williams. First proof second batch. arXiv preprint arXiv:2606.18119, 2026.

[2] Karim Adiprasito, June Huh, and Eric Katz. Hodge theory for combinatorial geometries. Annals of Mathematics, 188(2):381–452, 2018.

[3] Valery Alexeev. Two two-dimensional terminations. Duke Mathematical Journal, 69(3):527–545, 1993.

[4] Valery Alexeev. Boundedness and K² for log surfaces. International Journal of Mathematics, 5(6):779–810, 1994.

[5] Chenyang An, Qihao Ye, Minghao Pan, and Jiayaun Zhang. QED: An open-source multi-agent system for generating mathematical proofs on open problems. arXiv preprint arXiv:2604.24021, 2026.

[6] Federico Ardila-Mantilla, Nima Arkani-Hamed, Carolina Figueiredo, and Francisco Vazão. Combinatorics of the cosmohedron. arXiv preprint arXiv:2603.03425, 2026.

[7] Nima Arkani-Hamed, Carolina Figueiredo, and Francisco Vazão. Cosmohedra. Journal of High Energy Physics, 2025(11):Paper No. 29, 58 pp., 2025.

[8] Fedor Bogomolov and Michael McQuillan. Rational curves on foliated varieties. In *Foliation theory in algebraic geometry*, pages 21–51. Springer, 2016.

[9] Frédéric Campana and Mihai Păun. Foliations with positive slopes and birational stability of orbifold cotangent bundles. Publications mathématiques de l'IHÉS, 129:1–49, 2019.

[10] Ronnie Cheng. Tangent classes for matroid building sets. arXiv preprint arXiv:2606.22650, 2026.

[11] Ronnie Cheng, Shurui Liu, and Guoxiong Gao. Tangent classes of matroids and wonderful compactifications. arXiv preprint arXiv:2607.05835, 2026.

[12] Corrado De Concini and Claudio Procesi. Wonderful models of subspace arrangements. Selecta Mathematica, 1(3):459–494, 1995.

[13] Xu'an Dou and Zeyu Jin. Degenerate constants in degree inequalities for Sobolev circle maps: on some problems posed by Brezis. arXiv preprint arXiv:2605.24626, 2026.

[14] Eva Maria Feichtner and Sergey Yuzvinsky. Chow rings of toric varieties defined by atomic lattices. Inventiones mathematicae, 155(3):515–536, 2004.

[15] Tony Feng. Eigenweights for arithmetic Hirzebruch proportionality. PNAS Nexus, 5(5):pgag143, 2026.

[16] Tony Feng, Trieu H Trinh, Garrett Bingham, Dawsen Hwang, Yuri Chervonyi, Junehyuk Jung, Joonkyung Lee, Carlo Pagano, Sang-hyun Kim, Federico Pasqualotto, et al. Towards autonomous mathematics research. arXiv preprint arXiv:2602.10177, 2026.

[17] Jingjun Han and Chen Jiang. Total Cartier index of a bounded family. Pure and Applied Mathematics Quarterly, 22(1):171–179, 2026.

[18] Jiedong Jiang, Yixiao Li, Zeming Sun, Yuefeng Wang, Liang Xiao, and Jiahong Yu. On some open problems in commutative algebra resolved by Rethlas. arXiv preprint arXiv:2605.25259, 2026.

[19] Eric Jovinelly, Brian Lehmann, and Eric Riedl. Optimal bounds in bend-and-break. Forum of Mathematics, Pi, 14:e16, 2026.

[20] Haocheng Ju, Leheng Chen, Peihao Wu, Bryan Dai, and Bin Dong. Matlas: A semantic search engine for mathematics. arXiv preprint arXiv:2604.17484, 2026.

[21] Haocheng Ju, Guoxiong Gao, Jiedong Jiang, Bin Wu, Zeming Sun, ShuRui Liu, Leheng Chen, Yutong Wang, Yuefeng Wang, Zichen Wang, Wanyi He, et al. Automated conjecture resolution with formal verification. arXiv preprint arXiv:2604.03789, 2026.

[22] Stefan Kebekus, Luis Solá Conde, and Matei Toma. Rationally connected foliations after Bogomolov and McQuillan. Journal of Algebraic Geometry, 16(1):65–81, 2007.

[23] János Kollár. Maps between local Picard groups. Algebraic Geometry, 3(4):461–495, 2016.

[24] János Kollár and Nicholas I Shepherd-Barron. Threefolds and deformations of surface singularities. Inventiones mathematicae, 91(2):299–338, 1988.

[25] Matt Larson, Shiyue Li, Sam Payne, and Nicholas Proudfoot. K-rings of wonderful varieties and matroids. Advances in Mathematics, 441:109554, 2024.

[26] Joonkyung Lee and Jaehyeon Seo. Lower bounds for multivariate independence polynomials and their generalisations. arXiv preprint arXiv:2602.02450, 2026.

[27] Yoonho Lee, Roshen Nair, Qizheng Zhang, Kangwook Lee, Omar Khattab, and Chelsea Finn. Meta-harness: End-to-end optimization of model harnesses. arXiv preprint arXiv:2603.28052, 2026.

[28] Zhangsong Li. On injectivity of phase retrieval. arXiv preprint arXiv:2606.17922, 2026.

[29] Jihao Liu. Factorial asymptotics of the Matryoshka numbers. Note, https://jihaoliu.org/notes/Matryoshka.pdf, 2026.

[30] Jihao Liu and Sheng Qin. Shokurov's global index conjecture for threefold foliations. arXiv preprint arXiv:2605.22735, 2026.

[31] Jihao Liu and Xiping Zhang. Criteria of isolated weighted homogeneous hypersurface singularities using logarithmic vector fields. arXiv preprint arXiv:2606.29891, 2026.

[32] Jihao Liu and Xiping Zhang. A criteria of weighted homogeneity via logarithmic vector fields. arXiv preprint arXiv:2606.29886, 2026.

[33] Jihao Liu, Fanjun Meng, and Lingyao Xie. Complements, index theorem, and minimal log discrepancies of foliated surface singularities. European Journal of Mathematics, 10(1):Paper No. 6, 2024.

[34] Jihao Liu, Ruicheng Hu, and Sheng Qin. Boundedness of total Cartier indices for rational singularities in families. arXiv preprint arXiv:2605.22782, 2026.

[35] Jihao Liu, Zeming Sun, and Jiedong Jiang. Optimal bend-and-break for foliations. arXiv preprint arXiv:2605.20754, 2026.

[36] Diogo da Silva Machado and Jose Seade. Generic vector fields on isolated complex hypersurface germs. arXiv preprint arXiv:2605.09210, 2026.

[37] Yoichi Miyaoka and Shigefumi Mori. A numerical criterion for uniruledness. Annals of Mathematics, 124(1):65–69, 1986.

[38] Shigefumi Mori. Threefolds whose canonical bundles are not numerically effective. Annals of Mathematics, 116:133–176, 1982.

[39] OEIS Foundation Inc. Entry A177384. The On-Line Encyclopedia of Integer Sequences, https://oeis.org/A177384, 2010.

[40] Xiangyu Pan and Jiahong Yu. Lift-independence problem in the p-adic Simpson correspondence for curves. arXiv preprint arXiv:2605.29947, 2026.

[41] Anand Patel. The simplicity of the Hodge bundle. Proceedings of the National Academy of Sciences, 123(21):e2610183123, 2026.

[42] Jorge Vitório Pereira. On the height of foliated surfaces with vanishing Kodaira dimension. Publicacions matemàtiques, 49(2):363–373, 2005.

[43] Kyoji Saito. Quasihomogene isolierte Singularitäten von Hyperflächen. Inventiones mathematicae, 14(2):123–142, 1971.

[44] Johannes Schmitt, Tim Gehrunger, Jasper Dekoninck, Gergely Bérczi, Uri Kreitner, and Liam Price. ProofCouncil: An LLM agent for solving open mathematical problems. https://github.com/eth-sri/proof-council, 2026.

[45] N. I. Shepherd-Barron. Miyaoka's theorems on the generic seminegativity of $T_X$ and on the Kodaira dimension of minimal regular threefolds. *Flips and abundance for algebraic threefolds*, pages 103–114, 1992.

[46] Calum Spicer. Higher-dimensional foliated Mori theory. Compositio Mathematica, 156(1):1–38, 2020.

[47] Yanning Xu. Complements on log canonical Fano varieties and index conjecture of log Calabi–Yau varieties. PhD thesis, University of Cambridge, 2020.

[48] John Yang, Carlos Jimenez, Alexander Wettig, Kilian Lieret, Shunyu Yao, Karthik Narasimhan, and Ofir Press. SWE-agent: Agent-computer interfaces enable automated software engineering. Advances in Neural Information Processing Systems, 37:50528–50652, 2024.

[49] Daniel Zheng, Ingrid von Glehn, Yori Zwols, Iuliya Beloshapka, Lars Buesing, Daniel M Roy, Martin Wattenberg, Bogdan Georgiev, Tatiana Schmidt, Andrew Cowie, et al. AI co-mathematician: Accelerating mathematicians with agentic AI. arXiv preprint arXiv:2605.06651, 2026.

---

*译文完。原文共 18 页（正文 15 页 + 参考文献），本译文覆盖全部正文内容；图表描述（图 1–4）根据原文图注重建为文字。*





