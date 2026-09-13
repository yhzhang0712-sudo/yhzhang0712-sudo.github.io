---
title: "AI 与数学"
hideTitle: true
math: true
---

<div class="ai-tabs ai-panel-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-red active" onclick="switchAiTab('timeline', this)">AI发展史</button>
    <button type="button" class="ai-tab-btn tab-orange" onclick="switchAiTab('agent', this)">Agent</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchAiTab('tools', this)">AI工具</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchAiTab('math', this)">AI与数学</button>
    <button type="button" class="ai-tab-btn tab-purple" onclick="switchAiTab('ethics', this)">AI伦理</button>
  </div>

  <div class="ar-conjectures-divider"></div>

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

<div class="ai-tabs ai-tools-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-blue active" onclick="switchAiToolsTab('chat', this)">对话</button>
    <button type="button" class="ai-tab-btn tab-teal" onclick="switchAiToolsTab('browser', this)">AI 浏览器</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchAiToolsTab('image', this)">图片生成</button>
    <button type="button" class="ai-tab-btn tab-orange" onclick="switchAiToolsTab('video', this)">视频生成</button>
    <button type="button" class="ai-tab-btn tab-violet" onclick="switchAiToolsTab('ppt', this)">PPT 生成</button>
    <button type="button" class="ai-tab-btn tab-red" onclick="switchAiToolsTab('classroom', this)">课堂生成</button>
    <button type="button" class="ai-tab-btn tab-yellow" onclick="switchAiToolsTab('writing', this)">写作文案</button>
    <button type="button" class="ai-tab-btn tab-purple" onclick="switchAiToolsTab('coding', this)">Vibe 编程</button>
    <button type="button" class="ai-tab-btn tab-teal" onclick="switchAiToolsTab('education', this)">教育相关</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchAiToolsTab('research', this)">科研相关</button>
  </div>

<div id="ai-tools-panel-chat" class="ai-tab-panel active">
<div class="agent-intro">
<h3 class="ai-tools-title">对话类</h3>
<ul class="ai-timeline">
<li><span class="ai-year">工具</span>｜<a href="https://chatgpt.com" target="_blank" rel="noopener">ChatGPT</a>：生态最大：GPT-5 + Agent 模式 + 插件；agent 执行公认强项</li>
<li><span class="ai-year">工具</span>｜<a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>：写作与分析质量"可拿去答辩"；超长文档处理；MCP 协议发起者</li>
<li><span class="ai-year">工具</span>｜<a href="https://gemini.google.com" target="_blank" rel="noopener">Gemini</a>：百万级上下文 + 原生多模态；与 Google 全家桶联动；3.1 Pro 推理领先</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.deepseek.com" target="_blank" rel="noopener">DeepSeek</a> <span class="ai-tools-cn">🇨🇳</span>：开源 + 极致性价比；数学/代码传统强项；免费网页版</li>
<li><span class="ai-year">工具</span>｜<a href="https://grok.com" target="_blank" rel="noopener">Grok</a>：独占 X 实时数据流；Grok 4 进入推理第一梯队</li>
<li><span class="ai-year">工具</span>｜<a href="https://kimi.moonshot.cn" target="_blank" rel="noopener">Kimi</a> <span class="ai-tools-cn">🇨🇳</span>：长文本起家，中文长文档问答体验好</li>
<li><span class="ai-year">工具</span>｜<a href="https://tongyi.aliyun.com" target="_blank" rel="noopener">通义千问</a> <span class="ai-tools-cn">🇨🇳</span>：开源家族最全（Qwen3），中文生态完善</li>
<li><span class="ai-year">工具</span>｜<a href="https://chatglm.cn" target="_blank" rel="noopener">智谱清言 GLM</a> <span class="ai-tools-cn">🇨🇳</span>：对话+Agent+视觉全栈；AutoGLM 能操作手机/网页</li>
</ul>
<p class="ar-mnote"><strong>选型口诀</strong>：写作分析 Claude，agent 执行 ChatGPT，Google 生态 Gemini，省钱 DeepSeek。</p>
</div>
</div>
<div id="ai-tools-panel-browser" class="ai-tab-panel">
<div class="agent-intro">
<h3 class="ai-tools-title">AI 浏览器（2026 年爆发的新品类）</h3>
<ul class="ai-timeline">
<li><span class="ai-year">工具</span>｜<a href="https://www.perplexity.ai/comet" target="_blank" rel="noopener">Perplexity Comet</a>：agentic 浏览器先锋，2026 年 3 月起免费、全平台覆盖；边浏览边委托任务</li>
<li><span class="ai-year">工具</span>｜<a href="https://openai.com/index/chatgpt-atlas/" target="_blank" rel="noopener">ChatGPT Atlas</a>：OpenAI 官方浏览器：网页内直接唤起 ChatGPT 操作（目前 Mac 优先）</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.diabrowser.com" target="_blank" rel="noopener">Dia</a>：The Browser Company 出品（Arc 团队）：整页对话、多标签聚合提问，体验最顺滑（Mac only）</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.microsoft.com/edge" target="_blank" rel="noopener">Edge + Copilot 模式</a>：微软官方 AI 化：侧边栏 Copilot + 浏览器级 agent，Windows 用户零成本</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.google.com/chrome/" target="_blank" rel="noopener">Chrome + Gemini</a>：全球最大装机量 + Gemini 内嵌（"跟页面对话"原生集成）</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.quark.cn" target="_blank" rel="noopener">夸克</a> <span class="ai-tools-cn">🇨🇳</span>：国内 AI 浏览器顶流：AI 搜索 + 网盘 + 搜题一体化，学生群体渗透率高</li>
<li><span class="ai-year">工具</span>｜<a href="https://fellou.ai" target="_blank" rel="noopener">Fellou</a>：纯 agentic 浏览器路线：跨网页自动执行工作流</li>
</ul>
</div>
</div>
<div id="ai-tools-panel-image" class="ai-tab-panel">
<div class="agent-intro">
<h3 class="ai-tools-title">图片生成</h3>
<ul class="ai-timeline">
<li><span class="ai-year">工具</span>｜<a href="https://www.midjourney.com" target="_blank" rel="noopener">Midjourney</a>：美学天花板，风格化出图</li>
<li><span class="ai-year">工具</span>｜<a href="https://chatgpt.com" target="_blank" rel="noopener">GPT Image（ChatGPT 内置）</a>：指令遵循最好：改图、图中写字</li>
<li><span class="ai-year">工具</span>｜<a href="https://gemini.google.com" target="_blank" rel="noopener">Nano Banana（Gemini）</a>：角色一致性编辑最强，爆品</li>
<li><span class="ai-year">工具</span>｜<a href="https://stability.ai" target="_blank" rel="noopener">Flux / Stable Diffusion</a>：开源自部署；LoRA/ControlNet 可控性无可替代</li>
<li><span class="ai-year">工具</span>｜<a href="https://ideogram.ai" target="_blank" rel="noopener">Ideogram</a>：图内文字渲染最准（海报/封面刚需）</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.recraft.ai" target="_blank" rel="noopener">Recraft</a>：设计师向：矢量图、品牌风格统一</li>
<li><span class="ai-year">工具</span>｜<a href="https://dreamina.jianying.com" target="_blank" rel="noopener">即梦</a> <span class="ai-tools-cn">🇨🇳</span>：字节系，中文语境 + 商用素材友好</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.napkin.ai" target="_blank" rel="noopener">Napkin AI</a>：文字→示意图/流程图，做讲义插图神器（教师/科研双修）</li>
</ul>
</div>
</div>
<div id="ai-tools-panel-video" class="ai-tab-panel">
<div class="agent-intro">
<h3 class="ai-tools-title">视频生成</h3>
<ul class="ai-timeline">
<li><span class="ai-year">工具</span>｜<a href="https://deepmind.google/models/veo/" target="_blank" rel="noopener">Google Veo 3.1</a>：2026 综合最强：原生同步生成音频（对白/音效）</li>
<li><span class="ai-year">工具</span>｜<a href="https://openai.com/sora" target="_blank" rel="noopener">Sora 2</a>：物理一致性与叙事镜头强；免费档水印低分辨率</li>
<li><span class="ai-year">工具</span>｜<a href="https://kling.kuaishou.com" target="_blank" rel="noopener">可灵 Kling 3.0</a> <span class="ai-tools-cn">🇨🇳</span>：国产第一梯队，动作幅度与时长领先</li>
<li><span class="ai-year">工具</span>｜<a href="https://runwayml.com" target="_blank" rel="noopener">Runway Gen-4.5</a>：影视工业流：角色/场景一致性控制最细</li>
<li><span class="ai-year">工具</span>｜<a href="https://seed.bytedance.com" target="_blank" rel="noopener">Seedance</a> <span class="ai-tools-cn">🇨🇳</span>：字节 Seed，商用实测性价比高</li>
<li><span class="ai-year">工具</span>｜<a href="https://hailuoai.com" target="_blank" rel="noopener">Hailuo 海螺</a> <span class="ai-tools-cn">🇨🇳</span>：MiniMax 出品，快速出片</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.heygen.com" target="_blank" rel="noopener">HeyGen / Synthesia</a>：数字人口播视频：一段文案→真人形象播报（录课/宣传常用）</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.guiji.ai" target="_blank" rel="noopener">硅基智能</a> <span class="ai-tools-cn">🇨🇳</span>：国产数字人代表，教师录课/知识付费常用</li>
</ul>
</div>
</div>
<div id="ai-tools-panel-ppt" class="ai-tab-panel">
<div class="agent-intro">
<h3 class="ai-tools-title">PPT 生成</h3>
<ul class="ai-timeline">
<li><span class="ai-year">工具</span>｜<a href="https://gamma.app" target="_blank" rel="noopener">Gamma</a>：综合首选：一句话→完整演示文稿，卡片式排版，导出 PPTX/PDF</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.beautiful.ai" target="_blank" rel="noopener">Beautiful.ai</a>：设计规则引擎：放内容自动排版，改数据全局联动</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.canva.com" target="_blank" rel="noopener">Canva Magic Design</a>：设计平台一体化：PPT+海报+图全包</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.plusdocs.com" target="_blank" rel="noopener">Plus AI / SlidesAI</a>：原生嵌在 Google Slides/PowerPoint 里的生成插件，老用户无缝</li>
<li><span class="ai-year">工具</span>｜<a href="https://ai.wps.cn" target="_blank" rel="noopener">WPS AI</a> <span class="ai-tools-cn">🇨🇳</span>：一键生成可编辑 PPTX，Office 式编辑，国内办公首选</li>
<li><span class="ai-year">工具</span>｜<a href="https://zhiwen.xfyun.cn" target="_blank" rel="noopener">讯飞智文</a> <span class="ai-tools-cn">🇨🇳</span>：文档→课件/讲稿，教育向优化（教师常用）</li>
<li><span class="ai-year">工具</span>｜<a href="https://manus.im" target="_blank" rel="noopener">Manus / Gamma Agent 模式</a>：agent 式：给主题自动调研→配图→出整套片子</li>
</ul>
</div>
</div>
<div id="ai-tools-panel-classroom" class="ai-tab-panel">
<div class="agent-intro">
<h3 class="ai-tools-title">课堂生成（教师备课/课件/习题）</h3>
<ul class="ai-timeline">
<li><span class="ai-year">工具</span>｜<a href="https://www.magicschool.ai" target="_blank" rel="noopener">MagicSchool AI</a>：教师端全球头部：80+ 备课工具（教案/习题/评分标准/IEP），教师周省约 10 小时</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.khanmigo.ai" target="_blank" rel="noopener">Khanmigo（教师版）</a>：可汗学院出品：教案生成 + 苏格拉底式引导设计</li>
<li><span class="ai-year">工具</span>｜<a href="https://web.diffit.me" target="_blank" rel="noopener">Diffit</a>：一键把任意材料改写成不同难度等级的分级阅读材料 + 配习题</li>
<li><span class="ai-year">工具</span>｜<a href="https://curipod.com" target="_blank" rel="noopener">Curipod</a>：互动课堂：AI 生成带投票/抢答的实时课件</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.briskteaching.com" target="_blank" rel="noopener">Brisk Teaching</a>：Chrome 插件：在网页/Slides 上直接生成课件、改作业反馈</li>
<li><span class="ai-year">工具</span>｜<a href="https://quizizz.com" target="_blank" rel="noopener">Quizizz AI / Quizlet</a>：习题/闪卡自动生成 + 课堂游戏化测验</li>
<li><span class="ai-year">工具</span>｜<a href="https://easinote.seewo.com" target="_blank" rel="noopener">希沃白板（AI 课件）</a> <span class="ai-tools-cn">🇨🇳</span>：国内课堂装机主力：互动课件生成 + 移动授课</li>
<li><span class="ai-year">工具</span>｜<a href="https://xinghuo.xfyun.cn" target="_blank" rel="noopener">讯飞星火教师助手</a> <span class="ai-tools-cn">🇨🇳</span>：教案+课件+作业设计一体，贴合国内课标</li>
</ul>
</div>
</div>
<div id="ai-tools-panel-writing" class="ai-tab-panel">
<div class="agent-intro">
<h3 class="ai-tools-title">写作 / 文案类（"小龙虾"条目：按写作理解，如另有所指告诉我）</h3>
<ul class="ai-timeline">
<li><span class="ai-year">工具</span>｜<a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>：创意写作文笔最细腻，长篇一致性最好</li>
<li><span class="ai-year">工具</span>｜<a href="https://chatgpt.com" target="_blank" rel="noopener">ChatGPT</a>：结构化内容/博客/研究型长文最稳</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.sudowrite.com" target="_blank" rel="noopener">Sudowrite</a>：英文小说专用：扩写、改写、"故事引擎"</li>
<li><span class="ai-year">工具</span>｜<a href="https://ibiling.cn" target="_blank" rel="noopener">笔灵 AI</a> <span class="ai-tools-cn">🇨🇳</span>：中文网文：大纲搭建、全篇续写</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.jasper.ai" target="_blank" rel="noopener">Jasper / Copy.ai</a>：品牌营销文案流水线（多语种）</li>
<li><span class="ai-year">工具</span>｜<a href="https://wenku.baidu.com" target="_blank" rel="noopener">百度文库 AI</a> <span class="ai-tools-cn">🇨🇳</span>：小红书爆款文案批量生成：语音/文本双输入，零门槛</li>
<li><span class="ai-year">工具</span>｜<a href="https://xiezuocat.com" target="_blank" rel="noopener">秘塔写作猫</a> <span class="ai-tools-cn">🇨🇳</span>：中文校对润色标杆</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.deepl.com/write" target="_blank" rel="noopener">DeepL Write</a>：英文润色最自然（论文/邮件刚需）</li>
</ul>
</div>
</div>
<div id="ai-tools-panel-coding" class="ai-tab-panel">
<div class="agent-intro">
<h3 class="ai-tools-title">Vibe 编程（提示词→应用）</h3>
<ul class="ai-timeline">
<li><span class="ai-year">工具</span>｜<a href="https://cursor.com" target="_blank" rel="noopener">Cursor</a>：AI 原生 IDE 标杆：仓库级语义索引 + Composer 多文件重构</li>
<li><span class="ai-year">工具</span>｜<a href="https://claude.com/product/claude-code" target="_blank" rel="noopener">Claude Code</a>：终端原生 agent：整仓读改、自主跑测试/git，agentic 第一梯队</li>
<li><span class="ai-year">工具</span>｜<a href="https://lovable.dev" target="_blank" rel="noopener">Lovable</a>：Vibe coding 出圈之作：对话式生成全栈应用并一键部署，非程序员友好</li>
<li><span class="ai-year">工具</span>｜<a href="https://bolt.new" target="_blank" rel="noopener">Bolt.new</a>：浏览器里即时生成+运行全栈项目，所见即所得</li>
<li><span class="ai-year">工具</span>｜<a href="https://v0.dev" target="_blank" rel="noopener">v0（Vercel）</a>：UI/前端生成之王：文字→React 组件页面</li>
<li><span class="ai-year">工具</span>｜<a href="https://replit.com" target="_blank" rel="noopener">Replit Agent</a>：云端 IDE 内置 agent：从想法到上线全托管</li>
<li><span class="ai-year">工具</span>｜<a href="https://github.com/features/copilot" target="_blank" rel="noopener">GitHub Copilot</a>：补全之王，融合最深、企业采用率最高</li>
<li><span class="ai-year">工具</span>｜<a href="https://codeium.com/windsurf" target="_blank" rel="noopener">Windsurf</a>：Cascade 自动感知工程上下文的 agent 式 IDE</li>
<li><span class="ai-year">工具</span>｜<a href="https://openai.com/codex/" target="_blank" rel="noopener">Codex CLI</a>：OpenAI 终端 agent，GPT-5 系驱动</li>
</ul>
</div>
</div>
<div id="ai-tools-panel-education" class="ai-tab-panel">
<div class="agent-intro">
<h3 class="ai-tools-title">教育相关（学习/辅导/批改）</h3>
<ul class="ai-timeline">
<li><span class="ai-year">工具</span>｜<a href="https://www.khanmigo.ai" target="_blank" rel="noopener">Khanmigo</a>：苏格拉底式 AI 家教（不直接给答案，引导思考）</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.duolingo.com" target="_blank" rel="noopener">Duolingo Max</a>：语言学习 + GPT-4 级对话角色扮演/错题讲解</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.mathgpt.com" target="_blank" rel="noopener">学而思九章 MathGPT</a> <span class="ai-tools-cn">🇨🇳</span>：数学专用大模型，解题步骤讲解</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.doubao.com" target="_blank" rel="noopener">豆包</a> <span class="ai-tools-cn">🇨🇳</span>：国内学生免费答疑顶流（拍照解题/口语陪练）</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.gauthmath.com" target="_blank" rel="noopener">Gauth / Question.AI</a> <span class="ai-tools-cn">🇨🇳</span>：拍照解题出海双雄</li>
<li><span class="ai-year">工具</span>｜<a href="https://hiecho.youdao.com" target="_blank" rel="noopener">有道 Hi Echo</a> <span class="ai-tools-cn">🇨🇳</span>：AI 英语口语私教</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.songshuai.com" target="_blank" rel="noopener">松鼠 AI</a> <span class="ai-tools-cn">🇨🇳</span>：自适应学习：知识点级诊断+推题</li>
<li><span class="ai-year">工具</span>｜<a href="https://apps.ankiweb.net" target="_blank" rel="noopener">Anki + AI 插件</a>：记忆卡 + 自动生成卡片/出题，应试记忆王</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.xueersi.com" target="_blank" rel="noopener">讯飞/学而思/作业帮 学习机</a> <span class="ai-tools-cn">🇨🇳</span>：硬件形态：护眼屏 + 家长管控 + 精准学</li>
</ul>
</div>
</div>
<div id="ai-tools-panel-research" class="ai-tab-panel">
<div class="agent-intro">
<h3 class="ai-tools-title">科研相关 ⭐</h3>
<h4 class="ai-tools-sub">检索与综述</h4>
<ul class="ai-timeline">
<li><span class="ai-year">工具</span>｜<a href="https://www.semanticscholar.org" target="_blank" rel="noopener">Semantic Scholar</a>：免费学术搜索 + 引文图谱 + TLDR</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.connectedpapers.com" target="_blank" rel="noopener">Connected Papers / ResearchRabbit</a>：引文网络可视化，摸清一个方向的谱系</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.undermind.ai" target="_blank" rel="noopener">Undermind</a>：深度文献挖掘：agentic 多轮检索，冷门问题召回强</li>
<li><span class="ai-year">工具</span>｜<a href="https://elicit.com" target="_blank" rel="noopener">Elicit / Consensus</a>：LLM 批量抽取论文结论→结构化综述表</li>
<li><span class="ai-year">工具</span>｜<a href="https://scite.ai" target="_blank" rel="noopener">Scite</a>：引用语境分析：这篇论文被引用时是支持还是反驳</li>
</ul>
<h4 class="ai-tools-sub">数学/形式化</h4>
<ul class="ai-timeline">
<li><span class="ai-year">工具</span>｜<a href="https://leanprover-community.github.io" target="_blank" rel="noopener">Lean 4 + mathlib</a>：形式化数学标准；定义-定理-证明机器可验证</li>
<li><span class="ai-year">工具</span>｜<a href="https://deepmind.google" target="_blank" rel="noopener">AlphaProof Nexus</a>：DeepMind：Gemini 3.1 + Lean 智能体，2026-05 解出 9 个 Erdős 问题（300+ 候选）</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.wolfram.com" target="_blank" rel="noopener">Wolfram / Mathematica</a>：符号计算金标准</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.sagemath.org" target="_blank" rel="noopener">GAP(QPA) / SageMath / Magma / Macaulay2</a>：计算代数四大件：群表示、quiver 代数、交换代数</li>
<li><span class="ai-year">工具</span>｜<a href="https://mathpix.com" target="_blank" rel="noopener">Mathpix</a>：数学 OCR：截图→LaTeX，准确率极高</li>
<li><span class="ai-year">工具</span>｜<a href="https://ar5iv.labs.arxiv.org" target="_blank" rel="noopener">ar5iv</a>：arXiv 转 HTML，公式阅读体验远超 PDF</li>
</ul>
<h4 class="ai-tools-sub">写作与管理</h4>
<ul class="ai-timeline">
<li><span class="ai-year">工具</span>｜<a href="https://notebooklm.google.com" target="_blank" rel="noopener">NotebookLM</a>：自建文献库问答 + 双人播客式音频概览</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.zotero.org" target="_blank" rel="noopener">Zotero + LLM 插件</a>：文献管理器内直接对话式读 PDF</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.overleaf.com" target="_blank" rel="noopener">Overleaf（+AI）</a>：协作 LaTeX 标配，接入 LLM 补全</li>
<li><span class="ai-year">工具</span>｜<a href="https://www.deepl.com" target="_blank" rel="noopener">DeepL</a>：学术翻译最自然</li>
<li><span class="ai-year">工具</span>｜<a href="https://storm.genie.stanford.edu" target="_blank" rel="noopener">STORM（斯坦福）</a>：自动生成带引用的综述式长文初稿</li>
</ul>
</div>
</div>

  </div>

  </div>

  <div id="ai-panel-math" class="ai-tab-panel">
    <h2 class="ai-math-title">AI战绩</h2>
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
          <li><span class="ai-year">10-05</span>｜<a href="https://www.nature.com/articles/s41586-022-05172-4">AlphaTensor 发现新的矩阵乘法算法</a> — 强化学习搜索张量分解，在有限域 $\mathbb{Z}_2$ 上将 4×4 矩阵乘法降到 47 次（复数域 48 次由 2025 AlphaEvolve 得到）</li>
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
          <li><span class="ai-year">07-25</span>｜<a href="https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/">AlphaProof + AlphaGeometry 2 在 IMO 2024 达到银牌标准</a> — 解出 6 题中的 4 题，得 $28/42$ 分（AlphaProof 以 Lean 为验证环境）</li>
        </ul>
      </div>
    </div>
    <div class="year-section">
      <button class="year-toggle collapsed" onclick="toggleYear(this)"><span class="arrow">▼</span> 2025</button>
      <div class="year-content collapsed">
        <ul class="ai-timeline">
          <li><span class="ai-year">05-14</span>｜<a href="https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/">AlphaEvolve 改进 4×4 复矩阵乘法</a> — 找到复数域 48 次标量乘法构造，改进长期记录</li>
          <li><span class="ai-year">05-14</span>｜<a href="https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/">AlphaEvolve 系统性搜索数学与算法问题</a> — 在约 50 个开放问题上自动搜索，部分得到改进</li>
          <li><span class="ai-year">07-19</span>｜<a href="https://openai.com/index/first-proof-submissions/">OpenAI 通用推理模型在 IMO 2025 达到金牌水平</a> — 取得 $35/42$ 分金牌级成绩</li>
          <li><span class="ai-year">07-21</span>｜<a href="https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/">Gemini Deep Think 在 IMO 2025 达到官方认证金牌水平</a> — 解出 6 题中的 5 题，得 $35/42$ 分，IMO 官方认证</li>
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
          <li><span class="ai-year">03-19</span>｜<a href="https://arxiv.org/abs/2603.19052">Aletheia：Hodge bundle 无非平凡子丛</a> — 证明 $\ge 2$ 曲线模空间上的 Hodge bundle 无子丛</li>
          <li><span class="ai-year">03-23</span>｜<a href="https://arxiv.org/abs/2603.21453">Tao：Local Bernstein 问题中 AI 发现核心引理/证明</a> — 关键证明由 AlphaEvolve/ChatGPT 探索发现</li>
          <li><span class="ai-year">03-31</span>｜<a href="https://arxiv.org/abs/2603.29961">OpenAI：Short proofs of three Erdős problems</a> — 三题核心证明由内部模型产生，人类核验论文化</li>
          <li><span class="ai-year">04-04</span>｜<a href="https://arxiv.org/abs/2604.03789">Rethlas 自主解决 D. D. Anderson 交换代数问题</a> — 构造反例并形式化证明，否定相关猜想</li>
          <li><span class="ai-year">04-08</span>｜<a href="https://arxiv.org/abs/2604.06609">OpenAI：Short proofs of five Erdős problems II</a> — 模型给出五题证明，人类主要负责核验与论文化</li>
          <li><span class="ai-year">04-27</span>｜<a href="https://arxiv.org/abs/2604.24021">QED 多智能体系统攻克 5 个开放应用分析问题中的 3 个</a> — 三个经专家确认正确、原创且非平凡的证明</li>
          <li><span class="ai-year">05-01</span>｜<a href="https://arxiv.org/abs/2605.00301">Tao 等：AI 引出的 Markov 链技巧解决 Erdős #1196、#1217</a> — 把 von Mangoldt 权重与 Markov 链结合，解决 #1196 和 #1217</li>
          <li><span class="ai-year">05-20</span>｜<a href="https://arxiv.org/abs/2605.21718">AxiomProver：Partition Polynomials 六个猜想 + 一个反例</a> — 自动证明六个猜想，并发现 binary log-concavity 猜想为假</li>
          <li><span class="ai-year">05-20</span>｜<a href="https://openai.com/index/model-disproves-discrete-geometry-conjecture/">OpenAI 模型证伪平面 Erdős unit-distance 的方格最优猜想</a> — 构造无限族配置证伪长期核心猜想（Golod–Shafarevich + 无穷类域塔）</li>
          <li><span class="ai-year">05-21</span>｜<a href="https://arxiv.org/abs/2605.22763">DeepMind 形式化代理发现 Anchored GDA 的精确 $O(1/t)$ 收敛结果</a> — 证明精确 $O(1/t)$ 收敛界，发现新参数调度</li>
          <li><span class="ai-year">05-21</span>｜<a href="https://arxiv.org/abs/2605.22763">DeepMind 形式化代理：353 个 Erdős 形式化开放实例中自主解决 9 个</a> — 自动尝试 353 个实例解决 9 个</li>
          <li><span class="ai-year">05-24</span>｜<a href="https://arxiv.org/abs/2605.25259">Rethlas：8 个交换代数及相关开放问题的自主解答合集</a> — 汇集 8 个 AI 生成证明/反例，人类专家验证</li>
          <li><span class="ai-year">06-03</span>｜<a href="https://arxiv.org/abs/2606.05117">Andrews–Dhar 分拆问题：人机协作找到显式双射</a> — AxiomProver 证明并 Lean 验证等分布定理，关键双射人机共同发现</li>
          <li><span class="ai-year">07-07</span>｜<a href="https://arxiv.org/abs/2607.05739">AxiomProver 推进 arctan 整数值猜想到密度 1</a> — 证明整数值须超快增长，例外至多 $O(\log N)$，原猜想对密度 1 成立</li>
          <li><span class="ai-year">07-09</span>｜<a href="https://arxiv.org/abs/2607.20525">GPT-5.5 Pro 自主重构多个实数 sum-product 反例证明</a> — 多次独立运行自主生成正确证伪证明，7/8 次成功</li>
          <li><span class="ai-year">07-19</span>｜<a href="https://x.com/__alpoge__/status/2079028340955197566">Fable 发现三维 Jacobian 猜想反例</a> — 找到三维显式反例，说明经典 Jacobian 猜想在维数 3 为假</li>
          <li><span class="ai-year">07-31</span>｜<a href="https://arxiv.org/abs/2608.00323">AxiomProver 推进 Han–Xiong fractional Gaussian binomial 猜想</a> — 解决所有 $r\ge 1/2$ 情形，验证所有正有理 $r$、$k\le 200$</li>
          <li><span class="ai-year">07-31</span>｜<a href="https://arxiv.org/abs/2608.00222">Gao 推广 Jacobian 反例机制到所有 $n > 2$</a> — 将三维反例机制推广到所有 $n > 2$，彻底否定 Jacobian 猜想</li>
          <li><span class="ai-year">08-01</span>｜<a href="https://openai.com/index/ten-advances-in-mathematics/">OpenAI 一口气公布十项数学进展</a> — 涵盖高维 sphere packing 新上界、binary/spherical codes 指数级上界、显式构造 non-sofic groups、证伪 Connes rigidity 猜想、permanent 算术电路新下界（$\Omega(n^2 \log\log n)$ 电路 / $\Omega(n^4/\log n)$ 公式）、一般双人量子博弈的指数型 parallel repetition 定理、Euclidean CVP 困难性改进（近似因子 $n^{1/400}$）、Ehrhart volume 猜想（所有维数尖锐最大体积 $(n+1)^n/n!$）、多色 Ramsey 解决 Erdős #183（$R_k(3)=k^{\Theta(k)}$），以及证伪两项 Erdős–Simonovits 型极值图论猜想（对应 #146、#180）</li>
          <li><span class="ai-year">08-10</span>｜<a href="https://www.anthropic.com/research/riemann-zeta">Claude 在黎曼ζ函数零点问题上把临界线比例下界推进到约 67.2%</a> — 推进临界线下界到约 67.2%（黎曼猜想仍未解决）</li>
          <li><span class="ai-year">08-13</span>｜<a href="https://new.qq.com/rain/a/20260813A06C0E00">GPT-5.6 自主运行 16 小时证明 Crouzeix 猜想</a> — 困扰数值线性代数界 22 年的 Crouzeix 猜想（自 2004 年提出）由非数学科班背景的北京协和医院神经外科住院医师 Shanmu Jin（金山木）借助 GPT-5.6 自主运行约 16 小时完成，验证者包括猜想提出者 Michel Crouzeix 本人</li>
          <li><span class="ai-year">08-14</span>｜<a href="https://terrytao.wordpress.com/2026/08/14/">Tao 借助 AI 协作证明 Tang–Zhang（唐–张）猜想（n 充分大）</a> — 据知乎用户贴出的 Tao 2026-08-14 博客截图：借助 AI 协作，证明了该猜想在充分大的 n 时成立</li>
          <li><span class="ai-year">08-17</span>｜<a href="https://www.proofatlas.ai/papers/sendov-conjecture/SENDOV_CONJECTURE_PROOF_AUGUST_5_2026.pdf">森多夫猜想（Sendov）被 AI 辅助证明</a> — Lech Mazur 借助 GPT-5.6 Pro 完成对所有次数 $n \ge 2$ 的计算机辅助证明，配约 9 万行 Lean 4 形式化代码；Tao 数日后消化并重形式化（代码缩至约 1.5 万行），并发现该论证实际证出更强的 Phelps–Rodriguez 猜想（<a href="https://terrytao.wordpress.com/2026/08/12/a-digestion-of-the-proof-of-sendovs-conjecture/">Tao 博客</a>）</li>
          <li><span class="ai-year">08-19</span>｜<a href="https://arxiv.org/abs/2608.19301">刘继豪（Jihao Liu）借助生成式 AI 证伪 Yau–Tian–Donaldson 猜想</a> — 构造一个 K-多稳定（K-polystable）的极化光滑射影五维簇，却不存在常数量曲率 Kähler（cscK）度量，从而证伪 cscK 情形下的 YTD 猜想；论文声明主要结果由生成式 AI（GPT-5.6-sol、Fable 5、Danus 系统）获得</li>
          <li><span class="ai-year">08-24</span>｜<a href="https://alpo.ge/s6.pdf">Alpöge 借助 Claude 构造 S⁶ 的复结构</a> — 哈佛/Anthropic 的 Levent Alpöge 与 Claude 合作，构造出同胚（乃至微分同胚）于六维球面 S⁶ 的紧致复三维流形 X，证明 S⁶ 上存在复结构，攻克自 1948 年提出的 Hopf 问题（六维球面是否有复结构）</li>
          <li><span class="ai-year">08-25</span>｜<a href="https://agihunt.info/en/p/19ffbf0323ce31bd004d0fa4862">Bourgain–Brezis–Sobolev 猜想被 AI 快速攻克</a> — 8 月 4 日 arXiv 出现部分进展论文后，用户让 AI 在两天内给出完整证明；8 月 8 日又出现一篇 AI 辅助的完整解决论文，从部分进展到完全破解仅数日</li>
          <li><span class="ai-year">09-08</span>｜<a href="https://openai.com/index/navier-stokes-solution">OpenAI 宣布解决 Navier–Stokes 千禧年难题</a> — 约 10,000 个自主 AI Agent 协作约 50–88 小时，证明三维 Navier–Stokes 方程在特定条件下会出现有限时间奇点（blow up）；结果已用 Lean 形式化验证，但 Clay 数学研究所尚未正式认定，且存在与 NYU/Anthropic 团队的优先权争议</li>
        </ul>
      </div>
    </div>
  </div>

<div id="ai-panel-agent" class="ai-tab-panel">

<div class="ai-tabs ai-agent-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-purple active" onclick="switchAiAgentTab('intro', this)">什么是 Agent</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchAiAgentTab('science', this)">数学科研 Agent</button>
    <button type="button" class="ai-tab-btn tab-orange" onclick="switchAiAgentTab('ppt', this)">PPT Agent</button>
    <button type="button" class="ai-tab-btn tab-teal" onclick="switchAiAgentTab('worldmodel', this)">世界模型</button>
  </div>

  <div id="ai-agent-panel-intro" class="ai-tab-panel active">
<div class="agent-intro">
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

  <div id="ai-agent-panel-worldmodel" class="ai-tab-panel">
<div class="agent-intro">
<p class="agent-lead">世界模型（World Model）是<strong>对环境动力学的内部可模拟表征</strong>：给定当前状态与动作，预测环境下一步如何演化，从而支持预测、想象与规划。如果说 LLM 让 AI 学会了“说”，世界模型则是让 AI 学会“在脑子里演一遍世界怎么变”。</p>

<h3><span class="agent-name">是什么</span> · 从“心智模型”到智能核心组件</h3>
<p>思想可追溯至 Craik（1943）的“心智模型”与强化学习中的 model-based RL；作为深度学习术语确立于 Ha &amp; Schmidhuber（2018）的《World Models》。其后 LeCun（2022）在 I-JEPA 路线中把“世界模型”推为通向高级智能的核心组件，李飞飞（2026）则提出功能性三分：<strong>渲染器</strong>（生成影像）、<strong>模拟器</strong>（理解几何与物理）、<strong>规划器</strong>（支持决策）。</p>
<p>形式上，世界模型学习转移分布 $p(s_{t+1} \mid s_t, a_t)$。关键设计选择是<strong>在哪个空间预测</strong>：像素空间（生成式）、隐空间（潜变量式）或显式 3D 表示。三个核心组件：<strong>表征</strong>（把观测压缩为低维状态）、<strong>动力学</strong>（状态转移预测器）、<strong>记忆</strong>（长时程一致性）。</p>
<p>价值在于三件事：①<strong>想象</strong>——不与真实环境交互即可 rollout 未来，用于规划与评估；②<strong>样本效率</strong>——model-based 方法远胜 model-free；③<strong>数据引擎</strong>——合成交互数据训练下游策略（机器人、自动驾驶的核心用法）。</p>

<h3><span class="agent-name">经典范式</span> · Ha &amp; Schmidhuber 的 World Models（2018）</h3>
<p>最小可用的世界模型，三个模块分工：<strong>V（Vision）</strong>为变分自编码器，把 2D 像素帧压缩为隐向量 z；<strong>M（Memory）</strong>为混合密度网络-RNN（MDN-RNN），学习 $p(z_{t+1} \mid z_t, a_t, h_t)$，即隐空间动力学；<strong>C（Controller）</strong>为 tiny 线性网络，输入 [z, h] 输出动作。训练诀窍是<strong>“在梦里学习”</strong>：先用真实轨迹训练 V 与 M，再完全在 M 的想象轨迹中训练 C——controller 简单到过拟合都难，抗动力学误差累积。它确立了“生成式环境 + 内生训练”的完整闭环，是后来所有路线的原型。</p>

<h3><span class="agent-name">Dreamer 系列</span> · 隐空间想象的强化学习标杆</h3>
<p>Dreamer（Hafner 等，2019→V3，2023）是目前最成熟的 model-based RL 家族。核心是 <strong>RSSM（循环状态空间模型）</strong>：隐状态 = 确定部分（GRU，承记忆）+ 随机部分（隐变量，承不确定性），从观测序列自监督学习。学成后<strong>策略训练完全在想象中进行</strong>：从真实隐状态出发，用学习的动力学 rollout 数十步“梦境”，在此之上跑 actor-critic，无需真实环境交互。</p>
<p>DreamerV3 以<strong>单一超参数</strong>横跨 150+ 任务（含首个无人类数据采集 Minecraft 钻石），证明世界模型可作通用 RL 引擎；DayDreamer 变体把闭环搬到真机器人物理世界，1 小时学会行走。</p>

<h3><span class="agent-name">V-JEPA 2</span> · LeCun 路线：在潜空间预测，而非重建像素</h3>
<p>JEPA（联合嵌入预测架构）的立场：像素级生成迫使模型浪费容量预测不可预测的细节（纹理、光照），<strong>理解应发生在抽象表征空间</strong>。架构三件套：encoder E 把上下文与目标编码为表征；predictor 在潜空间预测目标表征；配合非对称防坍缩机制训练。</p>
<p><strong>V-JEPA 2</strong>（Meta，2025）在百万小时互联网视频上自监督预训练，达成 SOTA 视觉理解与预测；<strong>V-JEPA 2-AC</strong> 加动作条件预测器，机器人零样本部署到全新实验室即可抓取物体——无需机器人专属数据。这是“规划 = 在潜空间做 rollout + 优化动作序列”路线的代表作。</p>

<h3><span class="agent-name">Genie 3</span> · 文本生成交互世界的通用引擎</h3>
<p>DeepMind 的 Genie 系列走“视频生成 + 可控性”路线：从无标注视频隐式学习<strong>动作潜在变量</strong>（哪些像素变化源于“我做了什么”）。<strong>Genie 3</strong>（2025-08）输入文本即生成分钟级、720p、<strong>24fps 实时可交互环境</strong>：用户键入动作，模型自回归地渲染下一帧，环境状态持续演化。</p>
<p>标志性能力是<strong>可提示世界事件（promptable world events）</strong>：运行中插入“放一群斑马进来”等指令改变世界；以及跨分钟尺度的<strong>视觉记忆一致性</strong>——走远再回来，场景基本不变。机制上是高容量自回归潜在动力学 + 长时程记忆检索，训练数据是海量视频（无需动作标签）。定位：通用环境模拟器，为 agent 训练生成无限课程。</p>

<h3><span class="agent-name">NVIDIA Cosmos</span> · 面向物理 AI 的世界基础模型平台</h3>
<p>Cosmos（2025-01 发布，2026-03 迭代至 <strong>Cosmos 3</strong>）把世界模型工程化为平台：<strong>视频管线</strong>（curator 切分标注海量视频）→ <strong>视频分词器</strong>（把视频压成离散 token）→ <strong>世界基础模型 WFM</strong>（扩散式与自回归式两条技术路线）→ <strong>后训练</strong>（适配机器人/自动驾驶域，文本、视频、轨迹多种条件输入）。</p>
<p>WFM 用于两件事：大规模合成交互数据；<strong>作为策略的神经模拟器</strong>。2026-02 的 <strong>Cosmos Policy</strong> 直接把机器人控制策略后训练到 Predict-2 世界模型上，验证“世界模型即训练底座”的范式；Cosmos 3 进一步统一合成世界生成、视觉推理与动作模拟，部分模型 Apache 2.0 开源，已成物理 AI 事实标准之一。</p>

<h3><span class="agent-name">其他值得注意的系统</span></h3>
<ul class="agent-list">
<li><span class="agent-name">Sora 2（OpenAI）</span>：大规模视频扩散；OpenAI 宣称“世界模拟器”，物理一致性有争议（物体永续性时好时坏），代表像素生成路线的上限与局限。</li>
<li><span class="agent-name">World Labs Marble（2025-11）</span>：图/文/视频输入 → <strong>持久 3D 场景</strong>（高斯泼溅 + 碰撞网格），生成与显式几何融合，空间智能路线代表。</li>
<li><span class="agent-name">GameNGen / Oasis</span>：神经游戏引擎：扩散模型逐帧渲染完整游戏（DOOM/我的世界），交互由历史帧隐条件化。</li>
<li><span class="agent-name">腾讯混元 3D 世界模型 🇨🇳</span>：文/图 → 3D 场景，国产在 3D 世界生成方向的代表。</li>
</ul>
<p>2025–2026 的总体趋势是<strong>路线融合</strong>：生成式模型提供视觉先验，显式 3D（NeRF/3DGS）提供几何一致性，潜空间预测提供可控抽象——Marble、Cosmos 3 都是融合产物。</p>

<h3><span class="agent-name">世界模型 vs LLM</span></h3>
<table class="agent-compare">
<thead>
<tr><th>维度</th><th>世界模型</th><th>LLM</th></tr>
</thead>
<tbody>
<tr><td>建模对象</td><td>状态<strong>转移</strong> $p(s'\mid s,a)$：时空动力学</td><td>token 序列分布：语言/符号统计规律</td></tr>
<tr><td>训练数据</td><td>视频、交互轨迹、仿真</td><td>网络文本（二手的世界描述）</td></tr>
<tr><td>空间感知</td><td>原生（几何、视角、遮挡）</td><td>无原生空间 grounding，靠文本间接获得</td></tr>
<tr><td>“思考”方式</td><td>想象中 rollout + 规划（MPC/actor-critic）</td><td>链式思维：语言空间自回归外推</td></tr>
<tr><td>误差模式</td><td>动力学漂移，可被环境反馈在线纠正</td><td>幻觉：流畅地编造事实，难自察</td></tr>
<tr><td>输出</td><td>环境（帧/状态/3D 场景）</td><td>文本/符号</td></tr>
<tr><td>典型应用</td><td>机器人、自动驾驶、agent 环境训练、游戏</td><td>知识问答、写作、代码、语言接口</td></tr>
</tbody>
</table>
<p><strong>互补而非替代。</strong>具体差异在四个层面：</p>
<ul class="agent-list">
<li><span class="agent-name">知识的来源不同</span>：LLM 的物理直觉来自人类文字对世界的二手描述，是统计性回声；世界模型从视频与交互中直接估计动力学，具有一手的时空 grounding。LeCun 的著名论点即在于此：自回归语言预测不足以产生真正的世界理解，且逐 token 生成的误差会复合累积，缺乏规划所需的“先想多步再行动”结构。</li>
<li><span class="agent-name">推理的机制不同</span>：LLM 的推理是把中间步骤写出来（CoT），本质是语言空间的条件采样；世界模型的推理是<strong>反事实模拟</strong>——在内部引擎里改一个变量、rollout 看后果，这正是物理直觉、操控与长期规划需要的算子。</li>
<li><span class="agent-name">失真方式不同</span>：LLM 幻觉是语义层面的自信编造；世界模型会“画面糊掉、物体穿模”，但误差暴露在观测层，可与环境真实反馈对齐修正。二者可靠性评估逻辑因此完全不同。</li>
<li><span class="agent-name">工程形态正在合流</span>：当前最强系统多取混合架构：<strong>LLM 当规划器/语义接口，世界模型当模拟器</strong>（如 agent 训练用 Genie 造环境、SIMA 执行；机器人用 VLA + Cosmos 合成数据）。LLM 提供知识先验与指令理解，世界模型提供物理一致性与想象力。</li>
</ul>
<p>一个有用的类比：LLM 像读过万卷书的图书管理员——说得头头是道但没骑过车；世界模型像在沙坑里摔过跤的孩子——用身体记得世界怎么转。AGI 叙事下，二者缺一。</p>

<h3><span class="agent-name">挑战与展望</span></h3>
<p>主要瓶颈：<strong>长时程一致性</strong>（记忆与物体永续性仍难超分钟级）、<strong>误差累积</strong>（rollout 越长越漂移）、<strong>评测标准缺失</strong>（物理一致性无公认 benchmark）、<strong>sim-to-real 差距</strong>。方向上：李飞飞的三分类（渲染/模拟/规划）正走向统一的<strong>世界基础模型</strong>；与 LLM/agent 的闭环融合、面向机器人与自动驾驶的物理 AI 落地，是未来两年最确定的两大主线。</p>
<p class="ar-mnote"><strong>参考脉络</strong>：Ha &amp; Schmidhuber 2018；Hafner et al. DreamerV3 2023；LeCun 2022；Meta V-JEPA 2 2025；DeepMind Genie 3 2025-08；NVIDIA Cosmos 2025-01/2026-03；World Labs Marble 2025-11；李飞飞 2026-06。</p>
</div>
  </div>

</div>
</div>

  <div id="ai-panel-philosophy" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ai-panel-ethics" class="ai-tab-panel">
    <div class="ai-tabs ai-agent-tabs">
      <div class="ai-tab-btns">
        <button type="button" class="ai-tab-btn tab-teal active" onclick="switchAiEthicsTab('evolution', this)">AI伦理演进史</button>
        <button type="button" class="ai-tab-btn tab-red" onclick="switchAiEthicsTab('leiden', this)">人工智能与数学莱顿宣言</button>
        <button type="button" class="ai-tab-btn tab-orange" onclick="switchAiEthicsTab('misalignment', this)">《人工智能在数学中的严重错位》宣言</button>
        <button type="button" class="ai-tab-btn tab-teal" onclick="switchAiEthicsTab('uppsala', this)">《乌普萨拉科学家伦理准则》</button>
      </div>
      <div id="ai-ethics-panel-evolution" class="ai-tab-panel active">
        <div class="agent-intro">
          <p class="agent-lead">AI 伦理的讨论早已从科幻担忧，演变为一场<strong>牵动全球治理、重塑人类未来</strong>的深刻讨论。其关注点随技术能力的跃迁不断深化：早期奠基（1950–2000）→ 理论深化与初步治理（2000–2015）→ 生成式 AI 爆发与治理回应（2022–2024）→ 走向系统治理与全球共识（2024 至今）。</p>
          <h3>演进时间线</h3>
          <ul class="ai-timeline">
            <li><span class="ai-year">1950</span>｜阿西莫夫提出「机器人三定律」，首次系统探讨人机关系</li>
            <li><span class="ai-year">1960-70</span>｜维纳等人提出「机器应服务人类需求」，奠定控制论伦理基础</li>
            <li><span class="ai-year">2000s</span>｜「价值对齐」概念兴起，追求 AI 与人类价值对齐成为核心研究纲领</li>
            <li><span class="ai-year">2016</span>｜欧盟《通用数据保护条例》(GDPR) 出台，开启全球数据立法先河</li>
            <li><span class="ai-year">2022</span>｜ChatGPT 引爆生成式 AI，虚假信息、深度伪造、学术伦理引发全球大讨论</li>
            <li><span class="ai-year">2023</span>｜中国发布《生成式人工智能服务管理暂行办法》，率先进行专项监管</li>
            <li><span class="ai-year">2024</span>｜欧盟《人工智能法案》生效，中美欧形成三大治理模式</li>
            <li><span class="ai-year">2025</span>｜联合国框架下推动全球 AI 治理对话，中国倡导「以人为本」的全球倡议</li>
            <li><span class="ai-year">2026</span>｜讨论聚焦超级智能风险，「智能契约伦理」等前瞻性理论框架被提出</li>
          </ul>
          <h3>核心争论一：主体地位之争 —— AI 是「物」还是「人」？</h3>
          <ul class="agent-list">
            <li><span class="agent-name">反对赋予 AI 主体地位（主流观点）</span>：AI 本质是人类创造的工具，不具备自我意识、自由意志与道德责任能力。赋予其主体地位不仅贬损人类独特的尊严与价值，更会造成「责任真空」——损害发生时无法有效追责，最终将责任转嫁给无辜的人。正如康德所言，人是「目的本身」，AI 只能是手段。</li>
            <li><span class="agent-name">支持有限法律主体</span>：部分学者主张随 AI 自主性增强，可考虑「有限法律主体」或「电子人格」以清晰分配风险与责任——但这是实用主义方案，并非在哲学上承认 AI 与人类平等。</li>
            <li><span class="agent-name">核心共识</span>：全球伦理框架普遍强调 AI 必须始终是「物」，坚守人类的主体地位与尊严；争论的真正价值在于迫使人类更清晰地界定何以为「人」。</li>
          </ul>
          <h3>核心争论二：价值对齐困境 —— 如何让 AI 理解并遵循我们的价值？</h3>
          <ul class="agent-list">
            <li><span class="agent-name">自上而下的规范贯彻</span>：尝试把「不伤害」「公平」等既有伦理原则编码为算法指令——但人类价值复杂、模糊且充满矛盾，难以完全形式化。</li>
            <li><span class="agent-name">自下而上的经验学习</span>：让 AI 从海量数据中自主归纳道德原则——但训练数据本身可能含偏见，导致 AI「学坏」，输出歧视性内容。</li>
            <li><span class="agent-name">迈向「价值共生」</span>：对齐不应是静态单向的，而应是人与机器在互动中共同理解、动态调适与共同演进的过程，需要技术、哲学、制度与社会对话协同推进。</li>
          </ul>
          <h3>核心争论三：责任归属难题 —— 当 AI 犯错，谁来「埋单」？</h3>
          <ul class="agent-list">
            <li><span class="agent-name">传统「用户责任」模式</span>：用户对 AI 输出负责（如自动驾驶事故中驾驶员担责）——但在高级别自动驾驶或智能体独立决策时并不公平，用户已无法有效监督或干预。</li>
            <li><span class="agent-name">多级责任体系</span>：建立开发、部署、使用多方参与的责任体系——开发者保证产品安全可靠，部署者履行告知与监督义务，使用者在权限范围内合理使用。欧盟《人工智能法案》正朝此方向努力。</li>
            <li><span class="agent-name">「可推定责任」原则</span>：生成式 AI 内容引发侵权时，平台无法证明自己无过错即需担责，防止其以「技术中立」为由推卸治理义务。</li>
          </ul>
          <h3>核心争论四：人类主体性危机 —— 我们会被 AI「异化」吗？</h3>
          <ul class="agent-list">
            <li><span class="agent-name">自主性侵蚀</span>：过度依赖算法决策，人类独立思考与批判性思维可能退化，逐步习惯将判断与选择权让渡给机器。</li>
            <li><span class="agent-name">认知操控与信息茧房</span>：精准个性化推荐与深度伪造可能塑造、操纵甚至污染人类的信息环境与认知过程，侵蚀社会信任。</li>
            <li><span class="agent-name">情感依赖与人际关系异化</span>：情感陪伴类 AI 可能诱发过度依赖，模糊虚拟与现实的边界，干扰正常人际交往。</li>
            <li><span class="agent-name">应对之道：坚守人的主体性</span>：通过教育、法律与社会共识，守护人的自主性、目的性、创造性与伦理性——技术应<strong>增强而非替代人类</strong>。</li>
          </ul>
          <h3>全球三大治理模式</h3>
          <ul class="agent-list">
            <li><span class="agent-name">欧盟模式：强监管优先</span>：「权利本位」+「风险预防」。《人工智能法案》《通用数据保护条例》(GDPR) 为全球提供最严格标准与可借鉴框架，强调人类监督、透明度与基本权利；挑战在于可能抑制创新、抬高企业合规成本。</li>
            <li><span class="agent-name">美国模式：创新驱动优先</span>：「市场主导」+「灵活治理」。《AI 权利法案蓝图》+ 各州分散立法与部门协同。鼓励创新竞争、反应灵活；但监管碎片化且滞后，消费者权益保护可能不足。</li>
            <li><span class="agent-name">中国模式：发展安全并重</span>：「统筹协调」+「敏捷治理」。《生成式人工智能服务管理暂行办法》《人工智能安全治理框架》+ 伦理审查与备案制度。高效协同、部分领域监管走在前列；创新与风控的最佳平衡仍需持续探索。</li>
            <li><span class="agent-name">全球协作与竞争</span>：联合国、G20、OECD 等平台推动全球对话与共识构建；中国《全球人工智能治理倡议》强调发展、安全、治理三方面责任，反对技术霸权与封锁，代表全球南方国家的声音。</li>
          </ul>
          <h3>前沿探索：未来讨论的焦点</h3>
          <ul class="agent-list">
            <li><span class="agent-name">「智能契约伦理」与「伦理学家 AI」</span>：为应对超级智能风险，提出人与 AI 订立动态「伦理契约」，冲突时由人类商谈决定；并设想构建作为「契约构建者」的「伦理学家 AI」辅助治理，代表工程化与制度化方向。</li>
            <li><span class="agent-name">「球状风险」与存在论转向</span>：超级智能时代，风险不再是外部冲击，而是人机互动这一新存在结构内部的不稳定性——需从存在论层面重新思考人机关系。</li>
            <li><span class="agent-name">数字人权框架</span>：AI 伦理正与数字人权紧密结合，人的尊严、自由、平等权须在数智时代得到保障与延伸。「让人放心，把人放大」成为「智能向善」的双重维度——既确保安全可控，更确保赋能于人。</li>
            <li><span class="agent-name">全球南方视角与数字鸿沟</span>：AI 治理不能被少数科技巨头与发达国家主导，须关注全球南方国家关切，防止 AI 加剧全球不平等，确保技术红利普惠共享。</li>
          </ul>
          <p class="agent-summary"><strong>总结</strong>：当前 AI 伦理讨论早已超越「电车难题」，深入文明、权力与存在的层面。核心张力在于——如何既享受技术革命的巨大红利，又有效驾驭其风险，确保技术发展始终服务于人类的整体福祉与自由解放。AI 的未来，不在于它多么像人，而在于它能否始终作为人类文明有益的延伸。</p>
        </div>
      </div>
      <div id="ai-ethics-panel-leiden" class="ai-tab-panel">
        <div class="agent-intro">
          <p class="agent-lead">2026 年 6 月 2 日，16 位来自 15 所高校的数学家发布《人工智能与数学莱顿宣言》（Leiden Declaration on Artificial Intelligence and Mathematics），呼吁全球数学界正视 AI 对学科核心价值的冲击——<strong>不主张禁止 AI，而是为负责任地使用 AI 建立共同规范</strong>。宣言获国际数学联盟（IMU）正式背书。</p>
          <p><a href="https://leidendeclaration.ai/" style="color:#2563EB;text-decoration:underline;">▶ 阅读宣言全文（leidendeclaration.ai）</a></p>
          <h3>缘起</h3>
          <p>2025 年 9 月，荷兰莱顿大学洛伦兹中心举办「数学研究机械化」研讨会，60 余位数学家、计算机科学家、哲学家与社会科学家讨论 AI 对数学研究的冲击；会后 16 人工作组历经 8 个月起草修订，咨询了 30 余位独立数学家，终成 11 页宣言。</p>
          <h3>AI 给数学带来的五大威胁</h3>
          <ul class="agent-list">
            <li><span class="agent-name">结果不可靠</span>：数学建立在严谨证明之上，但 AI 可能产出看似可信、错误却几乎不可见（almost invisible）的「证明」；</li>
            <li><span class="agent-name">缺乏署名与版权问题</span>：AI 模型常不引用所依赖的人类工作，引发认可与知识产权问题；</li>
            <li><span class="agent-name">依赖与不平等</span>：研究者可能被迫依赖最新专有 AI 与昂贵算力才能产出有竞争力的成果，加剧研究者间的不平等；</li>
            <li><span class="agent-name">成果过度炒作</span>：新闻稿与博客常绕过科学审查夸大 AI 能力、低估人类贡献，强化「AI 无所不能」的叙事；</li>
            <li><span class="agent-name">丧失自主性</span>：当技术可行性或商业利益主导研究方向时，数学有丧失研究议程自主性的风险，且许多数学领域正被卷入战争、大规模监控、政治操弄与环境损害等伦理问题。</li>
          </ul>
          <h3>对各方建议</h3>
          <ul class="agent-list">
            <li><span class="agent-name">对研究者</span>：如实披露 AI 使用、为成果正确性负责、恰当引用前人工作、参与公共讨论；</li>
            <li><span class="agent-name">对机构与资助方</span>：制定 AI 用于发表与评审的政策、维持既有审视标准、在评审流程中纳入宣言价值；</li>
            <li><span class="agent-name">对政府</span>：监管、公共基础设施投资、评估 AI 系统主张时借助专家意见；</li>
            <li><span class="agent-name">对商业 AI 公司</span>：尊重数学共同体的价值与自主性，确保透明与恰当署名。</li>
          </ul>
          <h3>反响</h3>
          <p>发布当天即获逾 130 位学者联署，现已超 2300 人签署。两位菲尔兹奖得主背书：Scholze 称「数学研究的目标是人对数学的理解，数学只能在人类数学家共同体中繁荣」；Tao 称「AI 潜力巨大但也伴随风险，宣言在二者间找到了极好的平衡」。《自然》发表社论支持。2026 年 7 月费城国际数学家大会（ICM）围绕宣言展开讨论。</p>
        </div>
      </div>
      <div id="ai-ethics-panel-misalignment" class="ai-tab-panel">
        <div class="agent-intro">
          <p class="agent-lead">2026 年 9 月 11 日，陶哲轩（Terence Tao）等 <strong>25 位菲尔兹奖得主</strong>联合发布《人工智能在数学中的严重错位》（A Severe Misalignment of AI in Mathematics）宣言，紧急警告 AI 公司以「解题跑分」为导向的使用方式正与数学共同体的核心目标发生<strong>严重错位</strong>。宣言同步发布于 <a href="https://mathandai.org/" style="color:#2563EB;text-decoration:underline;">mathandai.org</a>。</p>
          <h3>宣言背景</h3>
          <p><strong>直接导火索：OpenAI 攻克 Navier–Stokes 千禧年难题</strong></p>
          <p>2026 年 9 月 8 日，OpenAI 宣布用约 <strong>1 万个并行 AI 智能体</strong>，耗时约 <strong>88 小时</strong>，交换 <strong>270 万条消息</strong>，生成约 <strong>1300 亿输出 Token</strong>，产出一篇 <strong>166 页论文</strong>，证明三维 Navier–Stokes 方程在特定条件下会出现有限时间奇点（blow up）。算力估算为<strong>数百万美元</strong>（零售价约 600 万美元），远超 Clay 数学研究所悬赏的 100 万美元奖金（OpenAI 称不打算领取）。结果已用 Lean 完成形式化验证，但独立评审仍在进行。</p>
          <p><strong>署名与剽窃争议</strong></p>
          <p>NYU 数学家 <strong>Tristan Buckmaster</strong> 与 Anthropic 研究员 <strong>Levent Alpöge</strong> 此前一直在研究相关流体方程，并在 OpenAI 公布前夜发布了自己的成果。Buckmaster 称 OpenAI 曾提议让他<strong>单独署名</strong> Navier–Stokes 成果论文，<strong>条件是排除 Alpöge</strong>（因其任职于竞对 Anthropic）。OpenAI 研究员 Sébastien Bubeck 否认此说法并道歉；OpenAI 承认「不能排除」源自用户使用产品的去标识化数据帮助改进了模型，但称双方证明「显著不同」。此争议正是声明中「<strong>严重的成果归属和剽窃问题</strong>」的现实写照。</p>
          <p><strong>陶哲轩的说明</strong></p>
          <blockquote>「我很荣幸成为以下声明的 <strong>25 位首批签署人之一</strong>——所有签署者都是菲尔兹奖得主。这份声明源于我们<strong>过去一周的讨论</strong>……并（类似于《莱顿宣言》）邀请更多人联署。（遗憾的是，我们没有时间像莱顿那样进行更充分的协商；但我们认为形势紧迫，需要尽早发表。）」</blockquote>
          <h3>宣言内容</h3>
          <p><strong>核心结论（一句话）</strong></p>
          <blockquote>「数学关心的从来不是「答案是否正确」，而是「我们是否理解了它」。AI 公司把「攻克多少著名难题」当作模型能力的跑分基准，与数学共同体以「概念理解与洞见」为核心的目标<strong>严重错位（severely misaligned）</strong>。批量生产「真/假」结论，可能摧毁孕育新思想的沃土，而非为其注入生命。」</blockquote>
          <p>声明<strong>不反对 AI</strong>，明确承认 AI 有加速真正数学研究的潜力；它反对的是<strong>以营销和跑分为导向的使用方式</strong>。</p>
          <p><strong>宣言全文（中英对照）</strong></p>
          <p><em>原文（English）</em></p>
          <blockquote>Over the last few months, the mathematical capabilities of LLMs have improved dramatically, to the point that they can solve major outstanding problems in many fields of mathematics. However, the push by AI companies to solve mathematical problems as a benchmark is detrimental to the science of mathematics, and to the mathematical community. <strong>The goals of the AI companies and the goals of the mathematical community are severely misaligned.</strong></blockquote>
          <p><em>中文译文</em></p>
          <p>过去几个月，大语言模型的数学能力突飞猛进，已能解决数学众多领域中长期悬而未决的重大问题。然而，AI 公司将「攻克数学问题」当作<strong>能力评测基准（benchmark）</strong>来推动的做法，对数学这门科学、对数学共同体都是有害的。<strong>AI 公司的目标与数学共同体的目标之间存在严重错位。</strong></p>
          <p>我们认为，这属于更广泛的「对齐」问题的一部分，也正影响着其他科学和创造性职业乃至整个社会。</p>
          <p><strong>数学研究致力于理解</strong>形状、数以及自然现象的基本结构。经过一代代人的积累，数学建立起由精妙思想、方法、抽象概念及其他工具构成的庞大体系，用以理解数学世界的全貌；而现代技术与科学又建立在这些数学工具之上。</p>
          <p>著名问题常常充当这片疆域中的<strong>地标和灯塔</strong>——人们借此衡量对数学全貌的理解是否进步。解决其中一个问题，历来是<strong>新洞见与新方法</strong>出现的确凿标志；随后数学共同体会通过讲座、讨论、简化这一漫长而艰辛的过程加以研究。这些过程无一例外<strong>需要时间，并建立在人与人的互动之上</strong>。</p>
          <p>近几个月，AI 在解决重大数学问题上的成功甚至在数学圈外登上头条。但<strong>解题只是工具和代理指标</strong>，数学研究的首要目标是<strong>概念性的理解与洞见</strong>。在 AI 领域忘记这一点，可能使工具反过来损害它本应服务的目标。</p>
          <p>事实上，以越来越快的速度<strong>批量生产「真/假」命题</strong>，可能摧毁孕育新思想的沃土，而非为其注入生命。这些解答往往被<strong>仓促公布</strong>——没有时间进行恰当的撰写、提炼新方法与新思想、引用他人的相关在先工作。正如所有创造性职业一样，这引发了严重的<strong>成果归属与剽窃问题</strong>。</p>
          <p>此外，如果没有愿意投入其中、把这些思想<strong>发展并融入数学经典（canon）</strong>的数学家，AI 构想出的思想就永远不会真正「活起来」，数学家之间至关重要的人类<strong>传承链</strong>也将断裂。</p>
          <p>我们正在目睹<strong>对智力劳动的普遍威胁</strong>：AI 使用的结果与其最初目的之间的错位。在许多领域，多年训练传统上不仅是为了产出最终答案或产品，也是为了培养理解力，以及提出新问题、新思想的能力。然而，建立在海量人类既有工作之上的 AI 系统，正越来越有能力直接产出这类工作的成果——于是这些目标不再一致。</p>
          <p>数学共同体当下面临的问题，与其他科学和创造性职业面临的如出一辙，也预示着全人类可能面临的问题：<strong>当 AI 改变工作的方式时，我们如何确保自己不会忘记，这项工作最初究竟是为了实现什么？</strong></p>
          <p><strong>AI 有潜力增强并加速真正的数学研究与理解。</strong>数学作为一种职业，需要以多种方式适应这些变化。然而，这些变化最终是造福这一领域还是造成破坏，在很大程度上取决于<strong>掌控这项新技术的人所做的决定</strong>。这些问题必须紧迫地加以解决——在数学共同体内部、在开发这些技术的公司层面，以及更广泛地在全社会。</p>
          <h3>签署情况</h3>
          <p>宣言由陶哲轩等 25 位菲尔兹奖得主联合发起（按获奖年份排序，横跨 1978–2026 近半个世纪）。联署页面（mathandai.org/endorsers）截至 9 月 12 日已开放给全体数学工作者，<strong>联署人数仍在增长</strong>（不同媒体 9 月 12 日报导时约为 1400–1687 人，需以官网实时数据为准）。</p>
        </div>
      </div>
      <div id="ai-ethics-panel-uppsala" class="ai-tab-panel">
      <div class="agent-intro">
        <p class="agent-lead"><strong>《乌普萨拉科学家伦理准则》</strong>（The Uppsala Code of Ethics for Scientists）是 1984 年由瑞典乌普萨拉大学科学伦理研讨会制定的科研伦理文件，首次系统将科学家对<strong>成果社会后果</strong>的个体责任写入可执行准则。它早于现代 AI 伦理讨论，但至今仍是科技伦理治理的重要参照。</p>
        <h3>准则背景</h3>
        <p><strong>制定缘起</strong></p>
        <p>20 世纪后期，科学技术的军事化、工业化应用风险日益凸显，而当时主流科研伦理主要聚焦于数据诚信、学术规范等内部问题，对"研究成果被用于武器、压迫、生态破坏"等外部社会后果关注不足。为填补这一空白，乌普萨拉大学自 1981 年起组织跨学科研讨，将科研责任落实到研究者个人的良心与专业自律。</p>
        <p><strong>时间线</strong></p>
        <ul class="agent-list">
          <li><span class="agent-name">1981 年</span>：乌普萨拉大学一群科学家开始定期聚会探讨研究伦理问题；</li>
          <li><span class="agent-name">1982 年底</span>：准则初稿流传；</li>
          <li><span class="agent-name">1984 年 1 月</span>：研讨会发布准则最终版本（Uppsala, Sweden, January 1984）；</li>
          <li><span class="agent-name">1984 年 12 月</span>：正式发表于 <em>Journal of Peace Research</em>, Vol. 21, No. 4, pp. 311–316。</li>
        </ul>
        <p><strong>原作者</strong></p>
        <p>Bengt Gustafsson、Lars Rydén、Gunnar Tibell、Peter Wallensteen。第一句由挪威特隆赫姆的 Harald Wergeland 教授提议，作为科学家誓词的建议。</p>
        <p><strong>制定动机</strong></p>
        <p>准则的核心关切是：科学研究不应仅以"求真"为唯一目标，研究者还须对其成果的<strong>应用后果</strong>负责，尤其是在和平、战争、人权与生态环境等领域。准则认为仅靠机构监管或政治约束不足以保证全球安全，需要唤醒科学家的<strong>个体伦理自觉</strong>——"我们视本准则所涉及的伦理困境为个人层面的良心问题"。</p>
        <h3>准则完整内容</h3>
        <p><strong>科学家伦理准则</strong></p>
        <p>科学研究对人类具有重大意义，是不可或缺的活动——它关乎我们描述和理解世界、我们的物质条件、社会生活与福祉。研究有助于解决人类面临的重大问题，如核战争威胁、环境破坏以及地球资源分配不均。此外，科学研究作为纯粹的知识探索也是合理且有价值的，应在方法与成果的自由交流中进行。然而，研究也可能直接或间接地加剧人类的问题。本科学家伦理准则正是出于对科学研究之应用与后果的关切而制定。尤其，现代技术战争的潜在危害如此之大，以至于科学家是否还应支持武器研发，在伦理上已值得怀疑。</p>
        <p>本准则面向<strong>个体科学家</strong>；首先应由他/她本人来评估自己研究的后果。这种评估总是困难的，且常常不可能做到。科学家通常既不能掌控研究成果，也不能掌控其应用，在许多情况下甚至无法掌控工作的规划。然而，这绝不能阻止个体科学家真诚地持续判断其研究的可能后果，使这些判断为人所知，并回避其认为不道德的研究。</p>
        <p>在此背景下，应特别考虑以下各点：</p>
        <ol class="agent-list">
          <li><span class="agent-name">生态义务</span>：研究的方向应确保其<strong>应用及其他后果</strong>不会造成重大的<strong>生态破坏</strong>。</li>
          <li><span class="agent-name">代际安全义务</span>：研究的方向应确保其后果不会使<strong>当代与后代</strong>更难过上<strong>安全的生活</strong>。因此，科学努力<strong>不应以开发用于战争或压迫的应用或技能为目标</strong>。</li>
          <li><span class="agent-name">人权义务</span>：研究的方向亦不应使其后果与<strong>国际协定</strong>中表达的<strong>基本人权</strong>（公民、政治、经济、社会和文化权利）相冲突。</li>
          <li><span class="agent-name">程序责任义务</span>：科学家负有<strong>特别责任</strong>，认真评估其研究的后果并予以<strong>公开</strong>。若科学家判断其正在进行或参与的研究与本准则相冲突，则应<strong>停止</strong>此类研究，并<strong>公开陈述</strong>其判断的理由。此类判断应同时考量负面后果的<strong>可能性</strong>与<strong>严重程度</strong>。</li>
        </ol>
        <p>科学界<strong>迫切地</strong>有义务支持那些因本准则所述理由而被迫停止研究的同行。</p>
        <blockquote>注：准则由引言文字与四点内容共同构成。恳请在出版时不得将四点从上下文中割裂。</blockquote>
        <p style="text-align:right;"><em>瑞典，乌普萨拉（1984 年 1 月）</em></p>
        <h3>现实意义</h3>
        <p>在 <strong>AI 治理、合成生物学、双用途技术（dual-use）</strong>兴起的背景下，该准则常被引作样板，强调科研伦理"<strong>不只管不造假，还要管成果被用来干啥</strong>"。典型应用场景包括：</p>
        <ul class="agent-list">
          <li><span class="agent-name">自主武器系统</span>（致命性自主武器）；</li>
          <li><span class="agent-name">大规模监控技术</span>；</li>
          <li><span class="agent-name">生物试剂开源模型与合成生物学</span>。</li>
        </ul>
        <p>RAND 研究报告将其与帕格沃什（Pugwash）传统并列为"要求研究者作为个体反思社会影响、回避支持战争或压迫的研究"的代表性准则。</p>
      </div>
    </div>
    </div>
  </div>
  <div id="ai-panel-leiden" class="ai-tab-panel" style="display:none;"></div>
</div>

<script>
function switchAiTab(id, btn) {
  document.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  document.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  var panel = document.getElementById('ai-panel-' + id);
  panel.classList.add('active');
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(panel, { delimiters: [ {left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false} ], throwOnError: false });
  }
  if (id === 'ethics') {
    var ethicsTabBtn = document.querySelector('.ai-tab-btn[onclick*="evolution"]');
    if (ethicsTabBtn) switchAiEthicsTab('evolution', ethicsTabBtn);
  }
  if (id === 'agent') {
    var agentTabBtn = document.querySelector('.ai-tab-btn[onclick*="intro"]');
    if (agentTabBtn) switchAiAgentTab('intro', agentTabBtn);
  }
}

function switchAiAgentTab(id, btn) {
  var tabs = btn.closest('.ai-agent-tabs');
  if (!tabs) return;
  tabs.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  tabs.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  document.getElementById('ai-agent-panel-' + id).classList.add('active');
}

function switchAiEthicsTab(id, btn) {
  var tabs = btn.closest('.ai-agent-tabs');
  if (!tabs) return;
  tabs.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  tabs.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  document.getElementById('ai-ethics-panel-' + id).classList.add('active');
}

function switchAiToolsTab(id, btn) {
  var tabs = btn.closest('.ai-tools-tabs');
  if (!tabs) return;
  tabs.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  tabs.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  var panel = document.getElementById('ai-tools-panel-' + id);
  if (!panel) return;
  panel.classList.add('active');
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(panel, { delimiters: [ {left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false} ], throwOnError: false });
  }
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