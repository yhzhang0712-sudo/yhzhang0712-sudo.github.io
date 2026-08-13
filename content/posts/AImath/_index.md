---
title: "AI 与数学"
---

<div class="ai-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-red active" onclick="switchAiTab('timeline', this)">AI大事记</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchAiTab('tools', this)">AI工具</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchAiTab('math', this)">AI解决数学问题</button>
  </div>

  <div id="ai-panel-timeline" class="ai-tab-panel active">
    <ul class="ai-timeline">
      <li><span class="ai-year">1943</span>｜<a href="https://zh.wikipedia.org/wiki/%E9%BA%A6%E5%8D%A1%E6%B4%9B%E5%85%8B-%E7%9A%AE%E8%8C%A8%E7%A5%9E%E7%BB%8F%E5%85%83%E6%A8%A1%E5%9E%8B">MP 神经元模型</a>：用数学模拟神经元，神经网络的思想源头（<a href="https://zh.wikipedia.org/wiki/%E4%BA%BA%E5%B7%A5%E7%A5%9E%E7%BB%8F%E5%85%83">人工神经元</a> 相关）</li>
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
</script>
