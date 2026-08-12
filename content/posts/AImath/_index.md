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
    <p class="ai-empty">内容整理中，敬请期待…</p>
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
