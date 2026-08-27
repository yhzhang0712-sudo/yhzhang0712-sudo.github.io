---
title: "AI 与数学"
hideTitle: true
---

<div class="ai-tabs ai-panel-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-red active" onclick="switchAiTab('timeline', this)">AI发展史</button>
    <button type="button" class="ai-tab-btn tab-orange" onclick="switchAiTab('agent', this)">Agent</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchAiTab('tools', this)">AI工具</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchAiTab('math', this)">AI与数学</button>
    <button type="button" class="ai-tab-btn tab-purple" onclick="switchAiTab('education', this)">AI与教育</button>
  </div>

  <div id="ai-panel-timeline" class="ai-tab-panel active">
    <ul class="ai-timeline">
      <li><span class="ai-year">1943</span>｜<a href="https://zh.wikipedia.org/wiki/%E9%BA%A6%E5%8D%A1%E6%B4%9B-%E7%9A%AE%E8%8C%A8%E7%A5%9E%E7%BB%8F%E5%85%83%E6%A8%A1%E5%9E%8B">MP 神经元模型</a>：用数学模拟神经元，神经网络的思想源头（<a href="https://zh.wikipedia.org/wiki/%E4%BA%BA%E5%B7%A5%E7%A5%9E%E7%BB%8F%E5%85%83">人工神经元</a> 相关）</li>
      <li><span class="ai-year">1950</span>｜<a href="https://zh.wikipedia.org/wiki/%E5%9B%BE%E7%81%B5%E6%B5%8B%E8%AF%95">图灵测试</a>：图灵提出"机器能思考吗"，给出判定智能的标准</li>
      <li><span class="ai-year">1956</span>｜<a href="https://zh.wikipedia.org/wiki/%E8%BE%BE%E7%89%B9%E8%8C%85%E6%96%AF%E4%BC%9A%E8%AE%AE">达特茅斯会议</a>："人工智能"一词正式命名，AI 成为独立学科</li>
      <li><span class="ai-year">1957</span>｜<a href="https://zh.wikipedia.org/wiki/%E6%84%9F%E7%9F%A5%E6%9C%BA">感知机</a>：首个可学习神经网络模型</li>
      <li><span class="ai-year">1966</span>｜<a href="https://zh.wikipedia.org/wiki/ELIZA">ELIZA</a>：首个聊天程序，开启人机对话探索</li>
      <li><span class="ai-year">1969</span>｜<a href="https://zh.wikipedia.org/wiki/%E6%84%9F%E7%9F%A5%E6%9C%BA">《感知机》一书</a>：证明单层网络局限，神经网络跌入第一次寒冬</li>
      <li><span class="ai-year">1986</span>｜<a href="https://zh.wikipedia.org/wiki/%E5%8F%8D%E5%90%91%E4%BC%A0%E6%92%AD%E7%AE%97%E6%B3%95">反向传播算法</a>推广：多层神经网络终于可训练，连接主义悄然复兴</li>
      <li><span class="ai-year">1997</span>｜<a href="https://zh.wikipedia.org/wiki/%E6%B7%B1%E8%93%9D_(%E8%AE%A1%E7%AE%97%E6%9C%BA)">深蓝</a>击败卡斯帕罗夫</li>
      <li><span class="ai-year">1998</span>｜LeNet-5：<a href="https://zh.wikipedia.org/wiki/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C">卷积神经网络</a>（杨立昆用 CNN 实现手写识别，奠定计算机视觉基础）</li>
      <li><span class="ai-year">2006</span>｜<a href="https://zh.wikipedia.org/wiki/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0">深度学习</a>元年：辛顿等人提出深度信念网络，突破深层训练难题</li>
      <li><span class="ai-year">2016</span>｜<a href="https://zh.wikipedia.org/wiki/AlphaGo">AlphaGo</a> 击败李世石</li>
      <li><span class="ai-year">2018</span>｜<a href="https://zh.wikipedia.org/wiki/GPT-1">GPT-1</a></li>
      <li><span class="ai-year">2020</span>｜<a href="https://zh.wikipedia.org/wiki/AlphaFold">AlphaFold 2</a> 破解蛋白质折叠</li>
      <li><span class="ai-year">2022</span>｜<a href="https://zh.wikipedia.org/wiki/ChatGPT">ChatGPT</a> 上线：生成式 AI 进入大众视野</li>
      <li><span class="ai-year">2023</span>｜<a href="https://zh.wikipedia.org/wiki/GPT-4">GPT-4</a> 多模态发布；国产"百模大战"开打</li>
      <li><span class="ai-year">2024</span>｜<a href="https://zh.wikipedia.org/wiki/OpenAI_o1">OpenAI o1</a> 推理模型：AI 开始"慢思考"，数学/代码能力跃升</li>
      <li><span class="ai-year">2025</span>｜<a href="https://zh.wikipedia.org/wiki/DeepSeek">DeepSeek R1</a> 以低成本对标 o1；AI Agent 商业化</li>
    </ul>
  </div>

  <div id="ai-panel-tools" class="ai-tab-panel">
    <ul class="ai-timeline">
      <li><span class="ai-year">对话</span>｜<a href="https://chatgpt.com">ChatGPT</a>（OpenAI）：全能对话助手，多模态交互，推理与编程领先</li>
      <li><span class="ai-year">　　</span>｜<a href="https://claude.ai">Claude</a>（Anthropic）：长文本理解与写作，推理与代码质量高</li>
      <li><span class="ai-year">　　</span>｜<a href="https://www.deepseek.com">DeepSeek</a>：国产开源大模型，数学推理与代码突出，API 成本极低</li>
      <li><span class="ai-year">　　</span>｜<a href="https://kimi.moonshot.cn">Kimi</a>（月之暗面）：超长上下文对话，适合文档分析与长文阅读</li>
      <li><span class="ai-year">　　</span>｜<a href="https://www.doubao.com">豆包</a>（字节跳动）：国民级 AI 助手，融合抖音生态，短视频脚本与文案创作</li>
      <li><span class="ai-year">　　</span>｜<a href="https://yiyan.baidu.com">文心一言</a>（百度）：中文场景优化，金融与教育领域突出</li>
      <li><span class="ai-year">图像</span>｜<a href="https://www.midjourney.com">Midjourney</a>：顶尖艺术风格图像生成，设计师与插画师首选</li>
      <li><span class="ai-year">　　</span>｜<a href="https://stability.ai">Stable Diffusion</a>：开源文生图，可本地部署，社区生态丰富</li>
      <li><span class="ai-year">　　</span>｜<a href="https://openai.com/dall-e-3">DALL·E 3</a>（OpenAI）：集成于 ChatGPT，提示词理解精准</li>
      <li><span class="ai-year">　　</span>｜<a href="https://dreamina.jianying.com">即梦 AI</a>（字节跳动）：中文友好，智能画布修图，电商与短视频创作利器</li>
      <li><span class="ai-year">　　</span>｜<a href="https://www.adobe.com/products/firefly.html">Adobe Firefly</a>：与 Photoshop 生态无缝衔接，图像修复与风格转换</li>
      <li><span class="ai-year">视频</span>｜<a href="https://openai.com/sora">Sora</a>（OpenAI）：高质量长视频生成，模拟物理世界逻辑</li>
      <li><span class="ai-year">　　</span>｜<a href="https://runwayml.com">Runway</a>：文本/图像转视频+视频编辑全能平台</li>
      <li><span class="ai-year">　　</span>｜<a href="https://kling.kuaishou.com">可灵</a>（快手）：国产视频生成标杆，2 分钟 1080p 高清，3D 人物驱动</li>
      <li><span class="ai-year">　　</span>｜<a href="https://pika.art">Pika Labs</a>：快速生成 AI 动画视频，适合短视频与 Vlog</li>
      <li><span class="ai-year">　　</span>｜<a href="https://www.capcut.cn">剪映 AI</a>（字节跳动）：智能剪辑+一键成片，自动添加音乐/字幕/特效</li>
      <li><span class="ai-year">编程</span>｜<a href="https://github.com/features/copilot">GitHub Copilot</a>（微软/OpenAI）：生态整合最强，支持 50+ 语言</li>
      <li><span class="ai-year">　　</span>｜<a href="https://cursor.com">Cursor</a>：基于 VS Code 的 AI IDE，项目级代码理解与重构</li>
      <li><span class="ai-year">　　</span>｜<a href="https://codeium.com/windsurf">Windsurf</a>（Codeium）：Agent 型 AI IDE，本地化计算，有免费版</li>
      <li><span class="ai-year">　　</span>｜<a href="https://tongyi.aliyun.com/lingma">通义灵码</a>（阿里云）：国产编程助手，多语言补全，中文友好</li>
      <li><span class="ai-year">音频</span>｜<a href="https://suno.com">Suno</a>：文字描述生成含人声的完整歌曲，零门槛音乐创作</li>
      <li><span class="ai-year">　　</span>｜<a href="https://elevenlabs.io">ElevenLabs</a>：顶尖 AI 语音合成，120+ 拟真声线，支持声音克隆</li>
      <li><span class="ai-year">　　</span>｜<a href="https://www.udio.com">Udio</a>：前 Google DeepMind 团队打造，精细控制音乐风格</li>
      <li><span class="ai-year">　　</span>｜<a href="https://peiyin.xunfei.cn">讯飞智作</a>（科大讯飞）：一站式音视频生成，支持虚拟主播</li>
      <li><span class="ai-year">办公</span>｜<a href="https://www.notion.com/product/ai">Notion AI</a>：智能笔记整理/会议纪要，支持多人协作</li>
      <li><span class="ai-year">　　</span>｜<a href="https://www.microsoft.com/en-us/microsoft-365/copilot">Microsoft 365 Copilot</a>：深度融合 Word/Excel/PowerPoint</li>
      <li><span class="ai-year">　　</span>｜<a href="https://gamma.app">Gamma</a>：快速生成专业演示幻灯片，AI 排版+配图</li>
      <li><span class="ai-year">　　</span>｜<a href="https://ai.wps.cn">WPS AI</a>（金山办公）：文档生成/数据分析/PPT 制作，国产办公全覆盖</li>
      <li><span class="ai-year">Agent</span>｜<a href="https://www.coze.cn">Coze</a>（字节跳动）：零代码智能体平台，一键发布到微信/抖音</li>
      <li><span class="ai-year">　　</span>｜<a href="https://dify.ai">Dify</a>：开源 LLM 应用开发平台，可视化工作流编排</li>
      <li><span class="ai-year">　　</span>｜<a href="https://www.langchain.com">LangChain</a>：主流 Agent 开发框架，支持工具调用与多步推理</li>
      <li><span class="ai-year">　　</span>｜<a href="https://autogpt.net">AutoGPT</a>：自主任务执行 Agent，探索 AI 自主性边界</li>
    </ul>
  </div>

  <div id="ai-panel-math" class="ai-tab-panel">
    <p style="margin:0 0 1rem;font-size:0.95rem;line-height:1.7;">关于 AI 证明数学问题实时跟进参见 <a href="https://vibemathed.com/" style="color:#2563EB;text-decoration:underline;">https://vibemathed.com/</a></p>
    <div class="year-section">
      <button class="year-toggle collapsed" onclick="toggleYear(this)"><span class="arrow">▼</span> 2019</button>
      <div class="year-content collapsed">
        <ul class="ai-timeline">
          <li><span class="ai-year">12-02</span>｜<a href="https://arxiv.org/abs/1912.01412">Facebook AI：Transformer 进行符号积分与常微分方程求解</a> — 用 Transformer 直接输出积分与 ODE 解，在论文测试集上超过 Mathematica/Matlab</li>
        </ul>
      </div>
    </div>
    <div class="year-section">
      <button class="year-toggle collapsed" onclick="toggleYear(this)"><span class="arrow">▼</span> 2021</button>
      <div class="year-content collapsed">
        <ul class="ai-timeline">
          <li><span class="ai-year">02-03</span>｜<a href="https://www.nature.com/articles/s41586-021-03229-4">Ramanujan Machine 自动生成基本常数的新猜想</a> — 自动搜索出此前未知的连分数猜想，后被人类数学家证明推广</li>
          <li><span class="ai-year">12-01</span>｜<a href="https://deepmind.google/blog/exploring-the-beauty-of-pure-mathematics-in-novel-ways/">DeepMind：机器学习辅助纯数学发现（纽结理论）</a> — 模型发现代数数据与纽结几何的强关联，引导人类给出严格证明</li>
          <li><span class="ai-year">12-01</span>｜<a href="https://deepmind.google/blog/exploring-the-beauty-of-pure-mathematics-in-novel-ways/">DeepMind：机器学习辅助表示论研究</a> — 识别重要组合特征，促成新猜想与算法结构</li>
        </ul>
      </div>
    </div>
    <div class="year-section">
      <button class="year-toggle collapsed" onclick="toggleYear(this)"><span class="arrow">▼</span> 2022</button>
      <div class="year-content collapsed">
        <ul class="ai-timeline">
          <li><span class="ai-year">10-05</span>｜<a href="https://www.nature.com/articles/s41586-022-05172-4">AlphaTensor 发现新的矩阵乘法算法</a> — 强化学习搜索张量分解，在有限域 Z₂ 上将 4×4 矩阵乘法降到 47 次（复数域 48 次由 2025 AlphaEvolve 得到）</li>
        </ul>
      </div>
    </div>
    <div class="year-section">
      <button class="year-toggle collapsed" onclick="toggleYear(this)"><span class="arrow">▼</span> 2023</button>
      <div class="year-content collapsed">
        <ul class="ai-timeline">
          <li><span class="ai-year">12-14</span>｜<a href="https://deepmind.google/blog/funsearch-making-new-discoveries-in-mathematical-sciences-using-large-language-models/">FunSearch 在 cap-set 问题上发现新构造</a> — LLM+演化程序搜索，找到优于已知记录的 cap-set 构造，并用于装箱问题</li>
        </ul>
      </div>
    </div>
    <div class="year-section">
      <button class="year-toggle collapsed" onclick="toggleYear(this)"><span class="arrow">▼</span> 2024</button>
      <div class="year-content collapsed">
        <ul class="ai-timeline">
          <li><span class="ai-year">01-17</span>｜<a href="https://deepmind.google/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/">AlphaGeometry 达到接近 IMO 金牌选手的几何解题水平</a> — 30 道奥赛几何题解出 25 题（金牌选手平均 25.9，前最佳 10 题）</li>
          <li><span class="ai-year">07-25</span>｜<a href="https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/">AlphaProof + AlphaGeometry 2 在 IMO 2024 达到银牌标准</a> — 解出 6 题中的 4 题，得 28/42 分（AlphaProof 以 Lean 为验证环境）</li>
        </ul>
      </div>
    </div>
    <div class="year-section">
      <button class="year-toggle collapsed" onclick="toggleYear(this)"><span class="arrow">▼</span> 2025</button>
      <div class="year-content collapsed">
        <ul class="ai-timeline">
          <li><span class="ai-year">05-14</span>｜<a href="https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/">AlphaEvolve 改进 4×4 复矩阵乘法</a> — 找到复数域 48 次标量乘法构造，改进长期记录</li>
          <li><span class="ai-year">05-14</span>｜<a href="https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/">AlphaEvolve 系统性搜索数学与算法问题</a> — 在约 50 个开放问题上自动搜索，部分得到改进</li>
          <li><span class="ai-year">07-19</span>｜<a href="https://openai.com/index/first-proof-submissions/">OpenAI 通用推理模型在 IMO 2025 达到金牌水平</a> — 取得 35/42 分金牌级成绩</li>
          <li><span class="ai-year">07-21</span>｜<a href="https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/">Gemini Deep Think 在 IMO 2025 达到官方认证金牌水平</a> — 解出 6 题中的 5 题，得 35/42 分，IMO 官方认证</li>
          <li><span class="ai-year">10-27</span>｜<a href="https://arxiv.org/abs/2510.23513">AI-assisted proof 推进 Nesterov 加速法长期问题</a> — 给出长期悬而未决的迭代点收敛性证明（同期有独立人类工作）</li>
          <li><span class="ai-year">11-03</span>｜<a href="https://arxiv.org/abs/2511.02864">Tao 等系统测试 AlphaEvolve 于 67 个数学问题</a> — 多数重现已知最佳构造，部分得到新改进，建立较系统案例库</li>
          <li><span class="ai-year">11-11</span>｜<a href="https://arxiv.org/abs/2511.07721">Tao：有限域 Nikodym 集新构造受 AlphaEvolve/DeepThink 启发</a> — AI 探索给出构造线索，得到改进的新有限域 Nikodym 构造</li>
          <li><span class="ai-year">11-19</span>｜<a href="https://arxiv.org/abs/2511.15135">Tao：AlphaEvolve 数值探索促成 sum-difference 定理</a> — 自动搜索揭示渐近结构，Tao 转化为严格定理与证明</li>
          <li><span class="ai-year">12-08</span>｜<a href="https://terrytao.wordpress.com/2025/12/08/the-story-of-erdos-problem-126/">Tao：Erdős #1026 的 48 小时人类+AI+文献协作</a> — 人机与文献协作拼合，快速得到完整结论</li>
          <li><span class="ai-year">12-16</span>｜<a href="https://arxiv.org/abs/2512.14575">Schmitt：GPT-5/Gemini 发现并组织代数几何证明</a> — 核心证明由 GPT-5 与 Gemini 3 Pro 发现/形成，Claude 辅助写作</li>
        </ul>
      </div>
    </div>
    <div class="year-section">
      <button class="year-toggle collapsed" onclick="toggleYear(this)"><span class="arrow">▼</span> 2026</button>
      <div class="year-content collapsed">
        <ul class="ai-timeline">
          <li><span class="ai-year">01-12</span>｜<a href="https://arxiv.org/abs/2601.07421">Erdős #728：自主 AI 给出完整证明</a> — GPT-5.2 Pro + 形式验证，Lean 核验，首批自主 AI 完整解决的 Erdős 问题之一</li>
          <li><span class="ai-year">01-19</span>｜<a href="https://terrytao.wordpress.com/2026/01/19/rogers-theorem-on-sieving/">Erdős #281：AI 给出漂亮证明，但早有文献蕴含</a> — 后发现有老结果已蕴含该结论</li>
          <li><span class="ai-year">01-29</span>｜<a href="https://arxiv.org/abs/2601.22401">Aletheia 批量扫描 700 个开放 Erdős 问题</a> — 批量评估并自主解决若干，识别多道已有文献答案的问题</li>
          <li><span class="ai-year">01-29</span>｜<a href="https://arxiv.org/abs/2601.21442">Aletheia 自主解决 Erdős #1051</a> — 给定开放问题后自主找到解法</li>
          <li><span class="ai-year">01-30</span>｜<a href="https://arxiv.org/abs/2601.23245">Aletheia：经典群的 eigenweights 结果</a> — 数学内容由 Aletheia 生成，人类改写为论文表述</li>
          <li><span class="ai-year">02-02</span>｜<a href="https://arxiv.org/abs/2602.02450">Aletheia 参与 independence polynomial 两个定理的关键步骤</a> — 关键技术步骤由 Aletheia 获得</li>
          <li><span class="ai-year">02-03</span>｜<a href="https://arxiv.org/abs/2602.03716">AxiomProver 从自然语言独立证明 Fel's Conjecture</a> — 自动生成 Lean/Mathlib 定理陈述与机器验证证明</li>
          <li><span class="ai-year">02-03</span>｜<a href="https://arxiv.org/abs/2602.03722">AxiomProver 解决 Chen–Gendron 的 k-differentials 奇偶性关键猜想</a> — 形式化证明此前阻塞几何结果的猜想</li>
          <li><span class="ai-year">02-04</span>｜<a href="https://arxiv.org/abs/2602.05090">AxiomProver：Almost all primes are partially regular</a> — 证明密度 1 素数满足 partial regularity，推出 partial Vandiver 定理</li>
          <li><span class="ai-year">02-04</span>｜<a href="https://arxiv.org/abs/2602.05095">AxiomProver：square-free digit walks 的"新结果"后发现 1947 已有先例</a> — 自动推导公式并完成 Lean 证明，后知 Mirsky 1947 已得</li>
          <li><span class="ai-year">02-28</span>｜<a href="https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf">Knuth《Claude's Cycles》：Claude 发现 Hamilton 分解构造</a> — 多轮自主探索找到关键构造，Knuth 给出严谨证明</li>
          <li><span class="ai-year">03-19</span>｜<a href="https://arxiv.org/abs/2603.19052">Aletheia：Hodge bundle 无非平凡子丛</a> — 证明 ≥2 曲线模空间上的 Hodge bundle 无子丛</li>
          <li><span class="ai-year">03-23</span>｜<a href="https://arxiv.org/abs/2603.21453">Tao：Local Bernstein 问题中 AI 发现核心引理/证明</a> — 关键证明由 AlphaEvolve/ChatGPT 探索发现</li>
          <li><span class="ai-year">03-31</span>｜<a href="https://arxiv.org/abs/2603.29961">OpenAI：Short proofs of three Erdős problems</a> — 三题核心证明由内部模型产生，人类核验论文化</li>
          <li><span class="ai-year">04-04</span>｜<a href="https://arxiv.org/abs/2604.03789">Rethlas 自主解决 D. D. Anderson 交换代数问题</a> — 构造反例并形式化证明，否定相关猜想</li>
          <li><span class="ai-year">04-08</span>｜<a href="https://arxiv.org/abs/2604.06609">OpenAI：Short proofs of five Erdős problems II</a> — 模型给出五题证明，人类主要负责核验与论文化</li>
          <li><span class="ai-year">04-27</span>｜<a href="https://arxiv.org/abs/2604.24021">QED 多智能体系统攻克 5 个开放应用分析问题中的 3 个</a> — 三个经专家确认正确、原创且非平凡的证明</li>
          <li><span class="ai-year">05-01</span>｜<a href="https://arxiv.org/abs/2605.00301">Tao 等：AI 引出的 Markov 链技巧解决 Erdős #1196、#1217</a> — 把 von Mangoldt 权重与 Markov 链结合，解决 #1196 和 #1217</li>
          <li><span class="ai-year">05-20</span>｜<a href="https://arxiv.org/abs/2605.21718">AxiomProver：Partition Polynomials 六个猜想 + 一个反例</a> — 自动证明六个猜想，并发现 binary log-concavity 猜想为假</li>
          <li><span class="ai-year">05-20</span>｜<a href="https://openai.com/index/model-disproves-discrete-geometry-conjecture/">OpenAI 模型证伪平面 Erdős unit-distance 的方格最优猜想</a> — 构造无限族配置证伪长期核心猜想（Golod–Shafarevich + 无穷类域塔）</li>
          <li><span class="ai-year">05-21</span>｜<a href="https://arxiv.org/abs/2605.22763">DeepMind 形式化代理发现 Anchored GDA 的精确 O(1/t) 收敛结果</a> — 证明精确 O(1/t) 收敛界，发现新参数调度</li>
          <li><span class="ai-year">05-21</span>｜<a href="https://arxiv.org/abs/2605.22763">DeepMind 形式化代理：353 个 Erdős 形式化开放实例中自主解决 9 个</a> — 自动尝试 353 个实例解决 9 个</li>
          <li><span class="ai-year">05-24</span>｜<a href="https://arxiv.org/abs/2605.25259">Rethlas：8 个交换代数及相关开放问题的自主解答合集</a> — 汇集 8 个 AI 生成证明/反例，人类专家验证</li>
          <li><span class="ai-year">06-03</span>｜<a href="https://arxiv.org/abs/2606.05117">Andrews–Dhar 分拆问题：人机协作找到显式双射</a> — AxiomProver 证明并 Lean 验证等分布定理，关键双射人机共同发现</li>
          <li><span class="ai-year">07-07</span>｜<a href="https://arxiv.org/abs/2607.05739">AxiomProver 推进 arctan 整数值猜想到密度 1</a> — 证明整数值须超快增长，例外至多 O(log N)，原猜想对密度 1 成立</li>
          <li><span class="ai-year">07-09</span>｜<a href="https://arxiv.org/abs/2607.20525">GPT-5.5 Pro 自主重构多个实数 sum-product 反例证明</a> — 多次独立运行自主生成正确证伪证明，7/8 次成功</li>
          <li><span class="ai-year">07-19</span>｜<a href="https://x.com/__alpoge__/status/2079028340955197566">Fable 发现三维 Jacobian 猜想反例</a> — 找到三维显式反例，说明经典 Jacobian 猜想在维数 3 为假</li>
          <li><span class="ai-year">07-31</span>｜<a href="https://arxiv.org/abs/2608.00323">AxiomProver 推进 Han–Xiong fractional Gaussian binomial 猜想</a> — 解决所有 r≥1/2 情形，验证所有正有理 r、k≤200</li>
          <li><span class="ai-year">07-31</span>｜<a href="https://arxiv.org/abs/2608.00222">Gao 推广 Jacobian 反例机制到所有 n&gt;2</a> — 将三维反例机制推广到所有 n&gt;2，彻底否定 Jacobian 猜想</li>
          <li><span class="ai-year">08-01</span>｜<a href="https://openai.com/index/ten-advances-in-mathematics/">OpenAI 一口气公布十项数学进展</a> — 涵盖高维 sphere packing 新上界、binary/spherical codes 指数级上界、显式构造 non-sofic groups、证伪 Connes rigidity 猜想、permanent 算术电路新下界（Ω(n² log log n) 电路 / Ω(n⁴/log n) 公式）、一般双人量子博弈的指数型 parallel repetition 定理、Euclidean CVP 困难性改进（近似因子 n^(1/400)）、Ehrhart volume 猜想（所有维数尖锐最大体积 (n+1)ⁿ/n!）、多色 Ramsey 解决 Erdős #183（R_k(3)=k^{Θ(k)}），以及证伪两项 Erdős–Simonovits 型极值图论猜想（对应 #146、#180）</li>
          <li><span class="ai-year">08-10</span>｜<a href="https://www.anthropic.com/research/riemann-zeta">Claude 在黎曼ζ函数零点问题上把临界线比例下界推进到约 67.2%</a> — 推进临界线下界到约 67.2%（黎曼猜想仍未解决）</li>
          <li><span class="ai-year">08-13</span>｜<a href="https://new.qq.com/rain/a/20260813A06C0E00">协和神经外科医师金山木借助 GPT-5.6 自主运行 16 小时证明 Crouzeix 猜想</a> — 困扰数值线性代数界 22 年的 Crouzeix 猜想（自 2004 年提出）由非数学科班背景的北京协和医院神经外科住院医师 Shanmu Jin（金山木）借助 GPT-5.6 自主运行约 16 小时完成，验证者包括猜想提出者 Michel Crouzeix 本人</li>
          <li><span class="ai-year">08-14</span>｜<a href="https://terrytao.wordpress.com/2026/08/14/">Tao 借助 AI 协作证明 Tang–Zhang（唐–张）猜想（n 充分大）</a> — 据知乎用户贴出的 Tao 2026-08-14 博客截图：借助 AI 协作，证明了该猜想在充分大的 n 时成立</li>
          <li><span class="ai-year">08-17</span>｜<a href="https://www.proofatlas.ai/papers/sendov-conjecture/SENDOV_CONJECTURE_PROOF_AUGUST_5_2026.pdf">森多夫猜想（Sendov）被 AI 辅助证明</a> — Lech Mazur 借助 GPT-5.6 Pro 完成对所有次数 n≥2 的计算机辅助证明，配约 9 万行 Lean 4 形式化代码；Tao 数日后消化并重形式化（代码缩至约 1.5 万行），并发现该论证实际证出更强的 Phelps–Rodriguez 猜想（<a href="https://terrytao.wordpress.com/2026/08/12/a-digestion-of-the-proof-of-sendovs-conjecture/">Tao 博客</a>）</li>
          <li><span class="ai-year">08-19</span>｜<a href="https://arxiv.org/abs/2608.19301">刘继豪（Jihao Liu）借助生成式 AI 证伪 Yau–Tian–Donaldson 猜想</a> — 构造一个 K-多稳定（K-polystable）的极化光滑射影五维簇，却不存在常数量曲率 Kähler（cscK）度量，从而证伪 cscK 情形下的 YTD 猜想；论文声明主要结果由生成式 AI（GPT-5.6-sol、Fable 5、Danus 系统）获得</li>
          <li><span class="ai-year">08-24</span>｜<a href="https://alpo.ge/s6.pdf">Alpöge 借助 Claude 构造 S⁶ 的复结构</a> — 哈佛/Anthropic 的 Levent Alpöge 与 Claude 合作，构造出同胚（乃至微分同胚）于六维球面 S⁶ 的紧致复三维流形 X，证明 S⁶ 上存在复结构，攻克自 1948 年提出的 Hopf 问题（六维球面是否有复结构）</li>
          <li><span class="ai-year">08-25</span>｜<a href="https://agihunt.info/en/p/19ffbf0323ce31bd004d0fa4862">Bourgain–Brezis–Sobolev 猜想被 AI 快速攻克</a> — 8 月 4 日 arXiv 出现部分进展论文后，用户让 AI 在两天内给出完整证明；8 月 8 日又出现一篇 AI 辅助的完整解决论文，从部分进展到完全破解仅数日</li>
        </ul>
      </div>
    </div>
    <h3 style="margin-top:1.5rem;color:#2563EB;">辅助数学研究的 Agent</h3>
    <ul class="agent-list">
      <li><span class="agent-name">Ramanujan Machine</span>：自动搜索基本常数的连分数表示，生成可证明的数学猜想，已发现数十个新公式并被人类数学家验证</li>
      <li><span class="agent-name">FunSearch</span>（DeepMind）：LLM + 演化式程序搜索，在 cap-set、装箱等问题上发现超越人类已知记录的新构造</li>
      <li><span class="agent-name">AlphaEvolve</span>（DeepMind）：Gemini 驱动的进化编码智能体，可自动搜索和优化算法，在矩阵乘法、组合几何、数论等 50+ 问题上取得突破</li>
      <li><span class="agent-name">AlphaProof / AlphaGeometry</span>（DeepMind）：神经符号双引擎定理证明系统，AlphaProof 以 Lean 为环境进行强化学习证明搜索，AlphaGeometry 专攻欧氏几何，双双达到 IMO 奖牌水平</li>
      <li><span class="agent-name">AxiomProver</span>：从自然语言数学猜想出发，自动生成 Lean/Mathlib 定理陈述和完整机器验证证明，已独立解决 Fel's Conjecture、Chen–Gendron 猜想等多个开放问题</li>
      <li><span class="agent-name">Aletheia</span>（DeepMind）：批量扫描和评估开放数学问题，在 700 个 Erdős 问题中自主解决多道，并识别已有文献答案的问题</li>
      <li><span class="agent-name">Rethlas</span>：专注于交换代数的自主研究系统，可构造反例并给出形式化证明，已在 Anderson 问题、Boij–Söderberg 理论等 8 个开放问题上取得成果</li>
      <li><span class="agent-name">QED</span>：多智能体数学研究系统，由多个专业 Agent 协作攻克开放问题，已在应用分析领域给出经专家确认的原创证明</li>
      <li><span class="agent-name">Fable</span>（Anthropic）：基于 Claude 的研究系统，发现三维 Jacobian 猜想反例，展现 AI 在代数几何中的原创构造能力</li>
      <li><span class="agent-name">OpenAI 推理模型</span>：通用推理能力直接应用于数学研究，从 IMO 金牌到 Erdős 问题、离散几何猜想证伪，展现跨领域知识连接的原创能力</li>
    </ul>
  </div>

<div id="ai-panel-agent" class="ai-tab-panel">

<div class="ai-tabs ai-agent-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-purple active" onclick="switchAiAgentTab('intro', this)">什么是 Agent?</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchAiAgentTab('science', this)">数学科研 Agent</button>
    <button type="button" class="ai-tab-btn tab-orange" onclick="switchAiAgentTab('ppt', this)">PPT Agent</button>
  </div>

  <div id="ai-agent-panel-intro" class="ai-tab-panel active">
<div class="agent-intro">
<h2>什么是 Agent？</h2>
<p class="agent-lead">Agent 可以理解成“<strong>会自己动手干活的 AI</strong>”。你只管告诉它“做什么”，它会自己想办法“怎么做”，中间过程不用你一步一步指挥。</p>
<figure class="agent-figure">
<img src="/images/agent-cycle.png" alt="Agent 的工作循环：感知环境 → 思考决策 → 调用工具 → 获得反馈" loading="lazy" />
<figcaption>Agent 的核心循环：感知 → 思考 → 行动 → 观察</figcaption>
</figure>
<h3>看一个具体实例</h3>
<figure class="agent-figure">
<img src="/images/agent-example.png" alt="实例：让 Agent 查北京今天天气并给穿衣建议" loading="lazy" />
<figcaption>实例：让 Agent 查北京今天天气并给穿衣建议 —— 一次完整的「感知 → 行动 → 观察 → 思考」循环</figcaption>
</figure>
<h3>和普通 AI 聊天有啥不一样？</h3>
<table class="agent-compare">
<thead>
<tr><th>场景</th><th>普通 AI</th><th>Agent</th></tr>
</thead>
<tbody>
<tr><td>问“北京今天几度？”</td><td>答不出来（不知道现在几点了）</td><td>自己查天气，再告诉你</td></tr>
<tr><td>“帮我整理这份表格”</td><td>只能给你文字说明</td><td>自己打开文件、改好、保存</td></tr>
<tr><td>“写个爬虫脚本爬某个网页”</td><td>只给代码示例</td><td>自己写、自己跑、错了自己改</td></tr>
<tr><td>“帮我订一张明天去上海的票”</td><td>只能给建议</td><td>自己查票、比价、下单</td></tr>
</tbody>
</table>
<p>一句话区分：<strong>普通 AI 只会“说”，Agent 会“做”。</strong></p>
<h3>Agent 是怎么“做事”的？</h3>
<p>其实背后只有两件事：</p>
<ul class="agent-list">
<li><span class="agent-name">一个聪明的大脑</span>：就是大家常听说的“大模型”（比如 GPT、Claude），负责想问题、做决定。</li>
<li><span class="agent-name">一双能干活的手脚</span>：让 AI 能上网搜索、读写文件、运行代码、调用其他软件。靠这些“手脚”，AI 才能真的动起来，不只是动嘴。</li>
</ul>
<p>举个例子：你让 Agent “帮查一下明天上海会不会下雨”。</p>
<p>它的大脑先想：“我需要知道明天的天气预报。”<br />然后它的手脚去调用天气 API。<br />拿到结果后，大脑再想：“要不要带伞，要不要提醒用户。”<br />最后用文字告诉你结论。</p>
<p>这一套“想一步、做一步、看结果、再想”的循环，就是 Agent 能干活的秘密。</p>
<h3>新手常问的几个问题</h3>
<ul class="agent-list">
<li><span class="agent-name">“Agent 和机器人有啥区别？”</span><br />机器人是装在硬件里的实体；Agent 是装在电脑里的软件。一个有物理身体，一个没有。</li>
<li><span class="agent-name">“它会不会出错？”</span><br />会。Agent 本质是“边想边做”，中间任何一步都可能错。但它有个好处：错了会自己发现、自己重试，不像传统程序一报错就卡死。</li>
<li><span class="agent-name">“我也能用上吗？”</span><br />能。现在很多聊天 AI 已经在背后悄悄加了 Agent 能力——你让它“上网查一下”“发个邮件”，它就能真的去干。</li>
</ul>
<p class="agent-summary">一句话总结：<strong>Agent = 会动嘴 + 会动手的 AI。</strong>你给它一个目标，它会自己想步骤、找工具、做事情，中间不用你盯着。</p>
</div>
  </div>

  <div id="ai-agent-panel-science" class="ai-tab-panel">
<div class="agent-intro">
<h2>数学科研 Agent</h2>
<p class="agent-lead">让 AI 不只是“写数学证明草稿”，而是真正进入数学研究工作流：读文献、形式化猜想、组织多人协作证伪、直到拿到可被 Lean/Coq 验证的完整证明。下面四个系统是目前最值得关注的代表。</p>

<h3><span class="agent-name">Danus</span> · 研究级数学推理编排</h3>
<p><strong>它是什么</strong>：一个面向研究级数学推理的多 Agent 编排系统，arXiv 2607.06447（CS.AI / CL / MA），已开源在 <code>github.com/frenzymath/Danus</code>。</p>
<p><strong>核心机制</strong>：以一个共享的 <em>fact graph</em>（事实 DAG）作为全局记忆，主体 Agent 做高层规划，多个 Worker Agent 并行做证明搜索，一个无状态的 Verifier Agent 校验每一步的逻辑合法性；通过「提交 → 验证 → 修复」循环推进整体证明，并支持事实撤回 + 下游依赖自动删除。</p>
<p><strong>在哪些场景里被验证过</strong>：代数几何、奇点理论、组合数学 6 个研究级案例。</p>
<p><strong>工程实现</strong>：底层用 Claude Code 当主控，Claude Opus 4.8 做状态合成，GPT-5.5-pro 做数学咨询，Matlas 做文献检索。</p>
<p><strong>怎么用</strong>：克隆仓库后按 README 配置 API key，给一个 Lean 形式化的命题陈述，系统会调度多 Agent 并行尝试证明，并产出可被 Lean 验证的完整脚本。</p>

<h3><span class="agent-name">ClawsGO Science</span> · 科研云端助理</h3>
<p><strong>它是什么</strong>：ClawsGO 旗下面向科研场景的云端 AI 助理，定位 <a href="https://clawsgo.ai/">clawsgo.ai</a> 上的「Research-grade intelligence for long and complex tasks」。任务跑在云端专用机器上，不占本地算力，电脑合上也能继续推进。</p>
<p><strong>核心机制</strong>：用「集群 Agent」模式处理复杂课题——把任务拆给一组并行 Agent，每个 Agent 背后根据步骤挑选最合适的模型（Claude 5 / GPT 5.6 / Claude Opus 5），过程逐步可追溯、跨角度交叉验证，最后合成一份可引用的成品而不是对话日志。</p>
<p><strong>支持的能力</strong>：长时执行（数小时不中断、中断后自动续跑）、每条结论都标注来源、会自动学习你的偏好（格式/习惯用语），任务需要新能力时还会自己去找技能。</p>
<p><strong>适合谁</strong>：不想自己搭集群、本地又跑不动长任务的研究者；想随时关电脑、回来就能看到结果的工程/科研团队。</p>

<h3><span class="agent-name">ScienceClaw</span> · MIT LAMM 实验室 · 去中心化科研 Swarm</h3>
<p><strong>它是什么</strong>：MIT 马克斯·布勒（Markus J. Buehler）LAMM 团队发布的开源科研多 Agent 框架，论文 <a href="https://arxiv.org/abs/2603.14312">arXiv:2603.14312</a>，代码 <a href="https://github.com/lamm-mit/scienceclaw">github.com/lamm-mit/scienceclaw</a>，自托管、开源。</p>
<p><strong>核心机制</strong>：三件套——① <em>300+ 可组合科研技能</em>（按主题挑选 5-12 个技能组成链路）；② <em>Artifact DAG 谱系</em>（每次技能调用都生成 UUID + SHA-256 内容哈希 + 父节点指针的不可变 artifact，全过程可追溯）；③ <em>ArtifactReactor 无中央协调</em>（Agent 把未满足的研究需求广播到全局索引，其他 Agent 用「压力评分」自动响应，无需任何任务分配）。同时有 Paraxiom Trust Layer 做 PQC 后量子密码学鉴证，Coherence Shield 做幻觉过滤。</p>
<p><strong>已经产出的真实成果</strong>：4 个独立研究课题——① SSTR2 受体肽设计；② 抗冲击轻量化陶瓷筛选；③ 跨域共振（蟋蟀翅膀 / 声子晶体 / 巴赫众赞歌）的桥接研究；④ 城市形态与晶界演化的形式类比。</p>
<p><strong>怎么用</strong>：克隆仓库 → <code>python3 -m venv .venv</code> → <code>./install_scienceclaw_command.sh</code> → <code>python3 setup.py</code> 注册 Agent；单次任务用 <code>scienceclaw-post --agent MyAgent --topic "..."</code>，多 Agent 协作用 <code>scienceclaw-investigate "..."</code>，心跳守护进程 6 小时一轮自动巡检。</p>

<h3><span class="agent-name">MechMath Agent Team（MMAT）</span> · 中科院数学院 · 数学研究全周期副驾驶</h3>
<p><strong>它是什么</strong>：中科院数学与系统科学研究院（数学科学国家重点实验室）高小山团队发布的论文 <a href="https://arxiv.org/abs/2607.04394">arXiv:2607.04394</a>，定位「数学研究全周期的 LLM 副驾驶」。</p>
<p><strong>核心机制</strong>：<em>三方 Harness 架构</em>——① 控制平面（Control Plane）做调度；② 执行平面（Execution Plane）做隔离工作区与文件式交接，避免上下文污染；③ 增强平面（Augmentation Plane）做人在回路干预。架构上实例化 3 个专门 Agent：<em>KB-Manager</em>（知识库管理员）、<em>NL-Prover</em>（自然语言证明器）、<em>FL-Prover</em>（形式语言证明器，编译 Lean 4 验证脚本），通过「Inform → Formalize → Feedback → Archive」闭环产出可被 Lean 验证的数学证明。</p>
<p><strong>已攻克的开放问题</strong>：两个月的部署里解决了数论、代数复杂性理论、微分代数、算子代数、不等式 5 个领域共 <strong>11 个开放问题</strong>，并由 Lean 4 完成形式化。例如：OEIS A287616「每个非负整数可写为三角数+五角数+七角数之和」、OEIS A080170 二项式 gcd 判据、$n=9$ Vasc 循环不等式正实数情形。</p>
<p><strong>与其它数学 Agent 的区别</strong>：从最初的「凑证明」思路升级到「提交 Lean 验证」是质变——证明的正确性不再依赖 LLM 自我评估，而是由 Lean 4 内核做终极判定。这也是当前形式化数学（formalization）赛道的主流方向。</p>
</div>
  </div>

  <div id="ai-agent-panel-ppt" class="ai-tab-panel">
<div class="agent-intro">
<h2>PPT Agent</h2>
<p class="agent-lead">让 AI 帮你做演示文稿，不再只是“写大纲+贴文字”，而是直接生成可编辑、可演讲、可二次美化的完整 PPT。下面两个工具是这类 Agent 的代表。</p>

<h3><span class="agent-name">OpenMAIC</span> · 清华 MAIC · 多 Agent 互动课堂</h3>
<p><strong>它是什么</strong>：清华大学 THU-MAIC 团队开源的「<em>Open Multi-Agent Interactive Classroom</em>」平台，<a href="https://github.com/THU-MAIC/OpenMAIC">github.com/THU-MAIC/OpenMAIC</a>，2026-06-28 v0.3.0 起从 AGPL-3.0 改为 <em>MIT 许可证</em>，可商用。</p>
<p><strong>核心机制</strong>：多 Agent 编排——AI 老师 + AI 同学实时授课、讨论、互动；两阶段管线（Outline → Scenes）。支持的「场景类型」远超普通 PPT：① 语音讲解幻灯片（含聚光灯 + 激光笔动画）；② 互动测验（单选/多选/简答 + AI 实时判分）；③ HTML 互动模拟（物理仿真/流程图/小游戏）；④ 项目制学习 PBL（角色扮演 + 里程碑 + 交付物）；⑤ 白板实时绘图与公式书写。</p>
<p><strong>导出与生态</strong>：可导出<em>可编辑 .pptx 幻灯片</em>或<em>交互式 .html 网页</em>；通过 OpenClaw 集成飞书、Slack、Telegram 等 20+ 即时通讯渠道，用 <code>clawhub install openmaic</code> 一行命令即可在聊天应用里直接生成课堂；支持 OpenAI、Anthropic、Gemini、DeepSeek、Qwen、Kimi、MiniMax、GLM 等 20+ 模型与本地 Ollama。</p>
<p><strong>适合谁</strong>：教师/培训师想批量做教学课件、自学者想要「AI 同学陪练」、公司内训做标准化讲义。</p>

<h3><span class="agent-name">ppt-master（hugohe3）</span> · 原生可编辑 PPTX 生成器</h3>
<p><strong>它是什么</strong>：开发者 <em>Hugo He</em>（hugohe3）的开源 PPT 生成 Skill，<a href="https://github.com/hugohe3/ppt-master">github.com/hugohe3/ppt-master</a>，Apache-2.0 许可证，ClawHub 上的常驻排名 #493，9.4K 下载量，5 星。</p>
<p><strong>核心机制</strong>：「SVG → DrawingML 转换器」——先生成页面 SVG，再 <code>svg_to_pptx</code> 转换为<em>真正的 PowerPoint 原生形状</em>（不是把 SVG 当图片贴进 PPT），所以输出是<em>双击即可编辑</em>的 .pptx（Office 2016+ 完美支持）。工作流六阶段：① 项目初始化 → ② 模板选择（需确认）→ ③ 策略师阶段八项确认 → ④ 可选图片生成 → ⑤ 执行器阶段生成 SVG + 演讲稿 → ⑥ 后处理导出 PPTX。</p>
<p><strong>差异化优势</strong>：① 原生形状导出（不像很多工具是把 SVG 截图当图贴）；② 支持<em>填模板</em>（把你已有的 .pptx 给 AI，让它把新内容填进你的设计里）；③ 8 套预设风格（consultant / tech / general / google_style 等）；④ 可选 native-objects 模式把图表/表格转为真正的 PowerPoint chart 对象。</p>
<p><strong>怎么用</strong>：方式 A 下载 ZIP 解压 → <code>pip install -r requirements.txt</code>；方式 B <code>git clone</code>（推荐，后续 <code>update_repo.py</code> 一键更新）；方式 C 通过 Claude Code 插件市场 <code>/plugin marketplace add hugohe3/ppt-master</code>；在 IDE 里打开项目目录、把 PDF/Markdown/图片放到 <code>projects/</code>，告诉 AI「请用 projects/q3-report/sources/report.pdf 生成 PPT」即可。</p>
</div>
  </div>

</div>
</div>

  <div id="ai-panel-philosophy" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ai-panel-education" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>
</div>

<script>
function switchAiTab(id, btn) {
  document.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  document.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  document.getElementById('ai-panel-' + id).classList.add('active');
}

function switchAiAgentTab(id, btn) {
  var tabs = btn.closest('.ai-agent-tabs');
  if (!tabs) return;
  tabs.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  tabs.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  document.getElementById('ai-agent-panel-' + id).classList.add('active');
}

function toggleYear(btn) {
  var content = btn.nextElementSibling;
  var arrow = btn.querySelector('.arrow');
  if (content.classList.contains('collapsed')) {
    content.classList.remove('collapsed');
    btn.classList.remove('collapsed');
    arrow.textContent = '▼';
  } else {
    content.classList.add('collapsed');
    btn.classList.add('collapsed');
    arrow.textContent = '▶';
  }
}
</script>