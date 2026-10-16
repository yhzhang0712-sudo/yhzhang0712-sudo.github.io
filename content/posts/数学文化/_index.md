---
title: "数学文化"
hideTitle: true
math: true
description: "数学文化专题：刘徽、欧拉、高斯、诺特等数学家小传，希尔伯特 23 问题与千禧年难题，数学教育专题（含麻省理工学院数学系《未来的数学》：人工智能时代数学家的培养、评价与职业走向），菲尔兹奖、阿贝尔奖、沃尔夫数学奖全部获奖者名单与授奖理由，以及三次数学危机、分形等数学科普与数学轶事。"
searchText: "数学文化专题总览。分区：数学人物（202 位数学家小传，按古代、中世纪、近代、现代分期，含生平与代表成就）；数学问题（希尔伯特 23 问题、千禧年七大难题）；数学科普（三次数学危机、分形几何等）；数学教育（未来的数学：MIT 数学系 Etingof 与 Gerovitch 的报告，AI 时代数学家的四大职能、招聘标准、研究生训练与给青年人的建议）；数学大奖（菲尔兹奖、阿贝尔奖、沃尔夫数学奖全部获奖者名单与授奖理由）；数学轶事（微积分发明权之争、庞加莱猜想百年恩怨、伽罗瓦决斗等）。各人物与奖项的详细内容见页面内对应分区。"
cover:
  image: "/images/home-bg.webp"
---

<h1 class="sr-only">数学文化</h1>

<div class="ar-section-switch ar-section-switch-six" role="tablist" aria-label="专题分区切换">
  <button type="button" class="ar-sec-btn sec-violet active" role="tab" id="tab-ar-section-figures" aria-controls="ar-section-figures" aria-selected="true" tabindex="0" onclick="switchMathCulture('figures', this)">数学人物</button>
  <button type="button" class="ar-sec-btn sec-blue" role="tab" id="tab-ar-section-problems" aria-controls="ar-section-problems" aria-selected="false" tabindex="-1" onclick="switchMathCulture('problems', this)">数学问题</button>
  <button type="button" class="ar-sec-btn sec-green" role="tab" id="tab-ar-section-popular" aria-controls="ar-section-popular" aria-selected="false" tabindex="-1" onclick="switchMathCulture('popular', this)">数学科普</button>
  <button type="button" class="ar-sec-btn sec-teal" role="tab" id="tab-ar-section-education" aria-controls="ar-section-education" aria-selected="false" tabindex="-1" onclick="switchMathCulture('education', this)">数学教育</button>
  <button type="button" class="ar-sec-btn sec-purple" role="tab" id="tab-ar-section-awards" aria-controls="ar-section-awards" aria-selected="false" tabindex="-1" onclick="switchMathCulture('awards', this)">数学大奖</button>
  <button type="button" class="ar-sec-btn sec-orange" role="tab" id="tab-ar-section-anecdotes" aria-controls="ar-section-anecdotes" aria-selected="false" tabindex="-1" onclick="switchMathCulture('anecdotes', this)">数学轶事</button>
</div>

<div class="ar-conjectures-divider"></div>

<section id="ar-section-figures" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-figures">
<div class="ai-tabs">
  <div class="fig-tools" role="group" aria-label="数学人物检索工具">
    <input type="search" id="fig-search" class="fig-tools-search" placeholder="输入人名检索（支持中文名、原名、key）" autocomplete="off" aria-label="按人名检索数学人物">
    <button type="button" class="fig-era-toggle" id="fig-open-all" onclick="toggleAllFigEras(true)">展开全部</button>
    <button type="button" class="fig-era-toggle" id="fig-close-all" onclick="toggleAllFigEras(false)">收起全部</button>
    <span class="fig-tools-hint" id="fig-search-hint" aria-live="polite"></span>
  </div>
  
  <details class="fig-era era-1">
    <summary class="fig-era-sum"><span class="fig-era-t">一、古代数学时期</span><span class="fig-era-span">上古—公元5世纪前</span><span class="fig-era-n">19 位</span></summary>
    <p class="fig-era-desc">古埃及、巴比伦、希腊、中国、印度等早期文明。数学以实用为主，涉及计数、测量、简单几何和算术，还没有形成严格的逻辑体系。</p>
    <div class="ai-tab-btns" role="tablist" aria-label="古代数学时期学者导航">
      <button type="button" class="ai-tab-btn tab-red active" role="tab" id="tab-ar-mathfigures-panel-ahmose" aria-controls="ar-mathfigures-panel-ahmose" aria-selected="true" tabindex="0" onclick="switchMathFigures('ahmose', this)">阿赫美斯</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-baudhayana" aria-controls="ar-mathfigures-panel-baudhayana" aria-selected="false" tabindex="-1" onclick="switchMathFigures('baudhayana', this)">包达耶那</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-thales" aria-controls="ar-mathfigures-panel-thales" aria-selected="false" tabindex="-1" onclick="switchMathFigures('thales', this)">泰勒斯</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-pythagoras" aria-controls="ar-mathfigures-panel-pythagoras" aria-selected="false" tabindex="-1" onclick="switchMathFigures('pythagoras', this)">毕达哥拉斯</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-zeno" aria-controls="ar-mathfigures-panel-zeno" aria-selected="false" tabindex="-1" onclick="switchMathFigures('zeno', this)">芝诺</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-hippocrates" aria-controls="ar-mathfigures-panel-hippocrates" aria-selected="false" tabindex="-1" onclick="switchMathFigures('hippocrates', this)">希波克拉底</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-archytas" aria-controls="ar-mathfigures-panel-archytas" aria-selected="false" tabindex="-1" onclick="switchMathFigures('archytas', this)">阿尔希塔斯</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-eudoxus" aria-controls="ar-mathfigures-panel-eudoxus" aria-selected="false" tabindex="-1" onclick="switchMathFigures('eudoxus', this)">欧多克索斯</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-euclid" aria-controls="ar-mathfigures-panel-euclid" aria-selected="false" tabindex="-1" onclick="switchMathFigures('euclid', this)">欧几里得</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-archimedes" aria-controls="ar-mathfigures-panel-archimedes" aria-selected="false" tabindex="-1" onclick="switchMathFigures('archimedes', this)">阿基米德</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-eratosthenes" aria-controls="ar-mathfigures-panel-eratosthenes" aria-selected="false" tabindex="-1" onclick="switchMathFigures('eratosthenes', this)">埃拉托斯特尼</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-apollonius" aria-controls="ar-mathfigures-panel-apollonius" aria-selected="false" tabindex="-1" onclick="switchMathFigures('apollonius', this)">阿波罗尼奥斯</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-hipparchus" aria-controls="ar-mathfigures-panel-hipparchus" aria-selected="false" tabindex="-1" onclick="switchMathFigures('hipparchus', this)">喜帕恰斯</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-heron" aria-controls="ar-mathfigures-panel-heron" aria-selected="false" tabindex="-1" onclick="switchMathFigures('heron', this)">海伦</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-ptolemy" aria-controls="ar-mathfigures-panel-ptolemy" aria-selected="false" tabindex="-1" onclick="switchMathFigures('ptolemy', this)">托勒密</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-diophantus" aria-controls="ar-mathfigures-panel-diophantus" aria-selected="false" tabindex="-1" onclick="switchMathFigures('diophantus', this)">丢番图</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-zhaoshuang" aria-controls="ar-mathfigures-panel-zhaoshuang" aria-selected="false" tabindex="-1" onclick="switchMathFigures('zhaoshuang', this)">赵爽</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-liuhui" aria-controls="ar-mathfigures-panel-liuhui" aria-selected="false" tabindex="-1" onclick="switchMathFigures('liuhui', this)">刘徽</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-pappus" aria-controls="ar-mathfigures-panel-pappus" aria-selected="false" tabindex="-1" onclick="switchMathFigures('pappus', this)">帕普斯</button>
    </div>
  </details>
  
  <details class="fig-era era-2">
    <summary class="fig-era-sum"><span class="fig-era-t">二、中世纪数学时期</span><span class="fig-era-span">约5世纪—15世纪</span><span class="fig-era-n">18 位</span></summary>
    <p class="fig-era-desc">欧洲进入“黑暗时代”，数学发展缓慢；中国、印度、阿拉伯地区的数学蓬勃发展，如印度数码、阿拉伯代数、中国方程求解等。这一时期数学开始从具体计算走向系统性理论。</p>
    <div class="ai-tab-btns" role="tablist" aria-label="中世纪数学时期学者导航">
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-zuchongzhi" aria-controls="ar-mathfigures-panel-zuchongzhi" aria-selected="false" tabindex="-1" onclick="switchMathFigures('zuchongzhi', this)">祖冲之</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-aryabhata" aria-controls="ar-mathfigures-panel-aryabhata" aria-selected="false" tabindex="-1" onclick="switchMathFigures('aryabhata', this)">阿耶波多</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-zugeng" aria-controls="ar-mathfigures-panel-zugeng" aria-selected="false" tabindex="-1" onclick="switchMathFigures('zugeng', this)">祖暅</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-brahmagupta" aria-controls="ar-mathfigures-panel-brahmagupta" aria-selected="false" tabindex="-1" onclick="switchMathFigures('brahmagupta', this)">婆罗摩笈多</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-yixing" aria-controls="ar-mathfigures-panel-yixing" aria-selected="false" tabindex="-1" onclick="switchMathFigures('yixing', this)">一行</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-alkhwarizmi" aria-controls="ar-mathfigures-panel-alkhwarizmi" aria-selected="false" tabindex="-1" onclick="switchMathFigures('alkhwarizmi', this)">花拉子米</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-abulwafa" aria-controls="ar-mathfigures-panel-abulwafa" aria-selected="false" tabindex="-1" onclick="switchMathFigures('abulwafa', this)">艾布·瓦法</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-omarkhayyam" aria-controls="ar-mathfigures-panel-omarkhayyam" aria-selected="false" tabindex="-1" onclick="switchMathFigures('omarkhayyam', this)">奥马尔·海亚姆</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-bhaskara2" aria-controls="ar-mathfigures-panel-bhaskara2" aria-selected="false" tabindex="-1" onclick="switchMathFigures('bhaskara2', this)">婆什迦罗二世</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-fibonacci" aria-controls="ar-mathfigures-panel-fibonacci" aria-selected="false" tabindex="-1" onclick="switchMathFigures('fibonacci', this)">斐波那契</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-liye" aria-controls="ar-mathfigures-panel-liye" aria-selected="false" tabindex="-1" onclick="switchMathFigures('liye', this)">李冶</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-nasiruddin" aria-controls="ar-mathfigures-panel-nasiruddin" aria-selected="false" tabindex="-1" onclick="switchMathFigures('nasiruddin', this)">纳西尔丁·图西</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-qinjiushao" aria-controls="ar-mathfigures-panel-qinjiushao" aria-selected="false" tabindex="-1" onclick="switchMathFigures('qinjiushao', this)">秦九韶</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-yanghui" aria-controls="ar-mathfigures-panel-yanghui" aria-selected="false" tabindex="-1" onclick="switchMathFigures('yanghui', this)">杨辉</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-zhushijie" aria-controls="ar-mathfigures-panel-zhushijie" aria-selected="false" tabindex="-1" onclick="switchMathFigures('zhushijie', this)">朱世杰</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-oresme" aria-controls="ar-mathfigures-panel-oresme" aria-selected="false" tabindex="-1" onclick="switchMathFigures('oresme', this)">奥雷斯姆</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-madhava" aria-controls="ar-mathfigures-panel-madhava" aria-selected="false" tabindex="-1" onclick="switchMathFigures('madhava', this)">马达瓦</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-alkashi" aria-controls="ar-mathfigures-panel-alkashi" aria-selected="false" tabindex="-1" onclick="switchMathFigures('alkashi', this)">卡西</button>
    </div>
  </details>
  
  <details class="fig-era era-3">
    <summary class="fig-era-sum"><span class="fig-era-t">三、近代数学时期</span><span class="fig-era-span">约16世纪—18世纪</span><span class="fig-era-n">19 位</span></summary>
    <p class="fig-era-desc">以文艺复兴和科学革命为背景，代数和几何取得重大突破，尤其是笛卡尔创立解析几何、牛顿和莱布尼茨创立微积分，数学进入变量和函数的时代。</p>
    <div class="ai-tab-btns" role="tablist" aria-label="近代数学时期学者导航">
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-cardano" aria-controls="ar-mathfigures-panel-cardano" aria-selected="false" tabindex="-1" onclick="switchMathFigures('cardano', this)">卡尔达诺</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-viete" aria-controls="ar-mathfigures-panel-viete" aria-selected="false" tabindex="-1" onclick="switchMathFigures('viete', this)">韦达</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-napier" aria-controls="ar-mathfigures-panel-napier" aria-selected="false" tabindex="-1" onclick="switchMathFigures('napier', this)">纳皮尔</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-xuguangqi" aria-controls="ar-mathfigures-panel-xuguangqi" aria-selected="false" tabindex="-1" onclick="switchMathFigures('xuguangqi', this)">徐光启</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-kepler" aria-controls="ar-mathfigures-panel-kepler" aria-selected="false" tabindex="-1" onclick="switchMathFigures('kepler', this)">开普勒</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-descartes" aria-controls="ar-mathfigures-panel-descartes" aria-selected="false" tabindex="-1" onclick="switchMathFigures('descartes', this)">笛卡尔</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-fermat" aria-controls="ar-mathfigures-panel-fermat" aria-selected="false" tabindex="-1" onclick="switchMathFigures('fermat', this)">费马</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-pascal" aria-controls="ar-mathfigures-panel-pascal" aria-selected="false" tabindex="-1" onclick="switchMathFigures('pascal', this)">帕斯卡</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-huygens" aria-controls="ar-mathfigures-panel-huygens" aria-selected="false" tabindex="-1" onclick="switchMathFigures('huygens', this)">惠更斯</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-meiwendin" aria-controls="ar-mathfigures-panel-meiwendin" aria-selected="false" tabindex="-1" onclick="switchMathFigures('meiwendin', this)">梅文鼎</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-seki" aria-controls="ar-mathfigures-panel-seki" aria-selected="false" tabindex="-1" onclick="switchMathFigures('seki', this)">关孝和</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-newton" aria-controls="ar-mathfigures-panel-newton" aria-selected="false" tabindex="-1" onclick="switchMathFigures('newton', this)">牛顿</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-leibniz" aria-controls="ar-mathfigures-panel-leibniz" aria-selected="false" tabindex="-1" onclick="switchMathFigures('leibniz', this)">莱布尼茨</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-jbernoulli" aria-controls="ar-mathfigures-panel-jbernoulli" aria-selected="false" tabindex="-1" onclick="switchMathFigures('jbernoulli', this)">雅各布·伯努利</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-euler" aria-controls="ar-mathfigures-panel-euler" aria-selected="false" tabindex="-1" onclick="switchMathFigures('euler', this)">欧拉</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-dalembert" aria-controls="ar-mathfigures-panel-dalembert" aria-selected="false" tabindex="-1" onclick="switchMathFigures('dalembert', this)">达朗贝尔</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-lagrange" aria-controls="ar-mathfigures-panel-lagrange" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lagrange', this)">拉格朗日</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-monge" aria-controls="ar-mathfigures-panel-monge" aria-selected="false" tabindex="-1" onclick="switchMathFigures('monge', this)">蒙日</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-legendre" aria-controls="ar-mathfigures-panel-legendre" aria-selected="false" tabindex="-1" onclick="switchMathFigures('legendre', this)">勒让德</button>
    </div>
  </details>
  
  <details class="fig-era era-4">
    <summary class="fig-era-sum"><span class="fig-era-t">四、现代数学时期</span><span class="fig-era-span">约19 世纪至今</span><span class="fig-era-n">146 位</span></summary>
    <p class="fig-era-desc">以严格化、抽象化与结构化为特征：非欧几何、群论、集合论、拓扑学与泛函分析相继诞生，数学分化为数十个分支，并成为现代科学与技术的基础语言。现代期人物数量远超前三个时期，故再按<b>生年所在世纪</b>细分为五组。</p>

  <details class="sub-era sub-1">
    <summary class="sub-era-sum"><span class="sub-era-t">4.1　十九世纪</span><span class="sub-era-span">生于 1777–1899 年</span><span class="sub-era-n">13 位</span></summary>
    <div class="ai-tab-btns" role="tablist" aria-label="4.1　十九世纪学者导航">
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-gauss" aria-controls="ar-mathfigures-panel-gauss" aria-selected="false" tabindex="-1" onclick="switchMathFigures('gauss', this)">高斯</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-cauchy" aria-controls="ar-mathfigures-panel-cauchy" aria-selected="false" tabindex="-1" onclick="switchMathFigures('cauchy', this)">柯西</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-abel" aria-controls="ar-mathfigures-panel-abel" aria-selected="false" tabindex="-1" onclick="switchMathFigures('abel', this)">阿贝尔</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-galois" aria-controls="ar-mathfigures-panel-galois" aria-selected="false" tabindex="-1" onclick="switchMathFigures('galois', this)">伽罗瓦</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-riemann" aria-controls="ar-mathfigures-panel-riemann" aria-selected="false" tabindex="-1" onclick="switchMathFigures('riemann', this)">黎曼</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-cantor" aria-controls="ar-mathfigures-panel-cantor" aria-selected="false" tabindex="-1" onclick="switchMathFigures('cantor', this)">康托尔</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-poincare" aria-controls="ar-mathfigures-panel-poincare" aria-selected="false" tabindex="-1" onclick="switchMathFigures('poincare', this)">庞加莱</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-hilbert" aria-controls="ar-mathfigures-panel-hilbert" aria-selected="false" tabindex="-1" onclick="switchMathFigures('hilbert', this)">希尔伯特</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-noether" aria-controls="ar-mathfigures-panel-noether" aria-selected="false" tabindex="-1" onclick="switchMathFigures('noether', this)">诺特</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-ramanujan" aria-controls="ar-mathfigures-panel-ramanujan" aria-selected="false" tabindex="-1" onclick="switchMathFigures('ramanujan', this)">拉马努金</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-siegel" aria-controls="ar-mathfigures-panel-siegel" aria-selected="false" tabindex="-1" onclick="switchMathFigures('siegel', this)">西格尔</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-douglas" aria-controls="ar-mathfigures-panel-douglas" aria-selected="false" tabindex="-1" onclick="switchMathFigures('douglas', this)">道格拉斯</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-zariski" aria-controls="ar-mathfigures-panel-zariski" aria-selected="false" tabindex="-1" onclick="switchMathFigures('zariski', this)">扎里斯基</button>
    </div>
  </details>

  <details class="sub-era sub-2">
    <summary class="sub-era-sum"><span class="sub-era-t">4.2　二十世纪上半</span><span class="sub-era-span">生于 1900–1929 年</span><span class="sub-era-n">39 位</span></summary>
    <div class="ai-tab-btns" role="tablist" aria-label="4.2　二十世纪上半学者导航">
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-kolmogorov" aria-controls="ar-mathfigures-panel-kolmogorov" aria-selected="false" tabindex="-1" onclick="switchMathFigures('kolmogorov', this)">柯尔莫哥洛夫</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-cartan" aria-controls="ar-mathfigures-panel-cartan" aria-selected="false" tabindex="-1" onclick="switchMathFigures('cartan', this)">嘉当</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-lewy" aria-controls="ar-mathfigures-panel-lewy" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lewy', this)">莱维</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-godel" aria-controls="ar-mathfigures-panel-godel" aria-selected="false" tabindex="-1" onclick="switchMathFigures('godel', this)">哥德尔</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-leray" aria-controls="ar-mathfigures-panel-leray" aria-selected="false" tabindex="-1" onclick="switchMathFigures('leray', this)">勒雷</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-weil" aria-controls="ar-mathfigures-panel-weil" aria-selected="false" tabindex="-1" onclick="switchMathFigures('weil', this)">韦伊</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-ahlfors" aria-controls="ar-mathfigures-panel-ahlfors" aria-selected="false" tabindex="-1" onclick="switchMathFigures('ahlfors', this)">阿尔福斯</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-krein" aria-controls="ar-mathfigures-panel-krein" aria-selected="false" tabindex="-1" onclick="switchMathFigures('krein', this)">克赖因</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-whitney" aria-controls="ar-mathfigures-panel-whitney" aria-selected="false" tabindex="-1" onclick="switchMathFigures('whitney', this)">惠特尼</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-hua" aria-controls="ar-mathfigures-panel-hua" aria-selected="false" tabindex="-1" onclick="switchMathFigures('hua', this)">华罗庚</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-chern" aria-controls="ar-mathfigures-panel-chern" aria-selected="false" tabindex="-1" onclick="switchMathFigures('chern', this)">陈省身</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-turing" aria-controls="ar-mathfigures-panel-turing" aria-selected="false" tabindex="-1" onclick="switchMathFigures('turing', this)">图灵</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-eilenberg" aria-controls="ar-mathfigures-panel-eilenberg" aria-selected="false" tabindex="-1" onclick="switchMathFigures('eilenberg', this)">艾伦伯格</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-erdos" aria-controls="ar-mathfigures-panel-erdos" aria-selected="false" tabindex="-1" onclick="switchMathFigures('erdos', this)">埃尔德什</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-gelfand" aria-controls="ar-mathfigures-panel-gelfand" aria-selected="false" tabindex="-1" onclick="switchMathFigures('gelfand', this)">盖尔范德</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-ito" aria-controls="ar-mathfigures-panel-ito" aria-selected="false" tabindex="-1" onclick="switchMathFigures('ito', this)">伊藤清</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-kodaira" aria-controls="ar-mathfigures-panel-kodaira" aria-selected="false" tabindex="-1" onclick="switchMathFigures('kodaira', this)">小平邦彦</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-schwartz" aria-controls="ar-mathfigures-panel-schwartz" aria-selected="false" tabindex="-1" onclick="switchMathFigures('schwartz', this)">施瓦茨</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-selberg" aria-controls="ar-mathfigures-panel-selberg" aria-selected="false" tabindex="-1" onclick="switchMathFigures('selberg', this)">塞尔伯格</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-calderon" aria-controls="ar-mathfigures-panel-calderon" aria-selected="false" tabindex="-1" onclick="switchMathFigures('calderon', this)">卡尔德隆</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-bott" aria-controls="ar-mathfigures-panel-bott" aria-selected="false" tabindex="-1" onclick="switchMathFigures('bott', this)">博特</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-keller" aria-controls="ar-mathfigures-panel-keller" aria-selected="false" tabindex="-1" onclick="switchMathFigures('keller', this)">凯勒</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-mostow" aria-controls="ar-mathfigures-panel-mostow" aria-selected="false" tabindex="-1" onclick="switchMathFigures('mostow', this)">莫斯托</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-thom" aria-controls="ar-mathfigures-panel-thom" aria-selected="false" tabindex="-1" onclick="switchMathFigures('thom', this)">托姆</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-singer" aria-controls="ar-mathfigures-panel-singer" aria-selected="false" tabindex="-1" onclick="switchMathFigures('singer', this)">辛格</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-nirenberg" aria-controls="ar-mathfigures-panel-nirenberg" aria-selected="false" tabindex="-1" onclick="switchMathFigures('nirenberg', this)">尼伦伯格</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-roth" aria-controls="ar-mathfigures-panel-roth" aria-selected="false" tabindex="-1" onclick="switchMathFigures('roth', this)">罗特</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-tate" aria-controls="ar-mathfigures-panel-tate" aria-selected="false" tabindex="-1" onclick="switchMathFigures('tate', this)">泰特</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-lax" aria-controls="ar-mathfigures-panel-lax" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lax', this)">拉克斯</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-serre" aria-controls="ar-mathfigures-panel-serre" aria-selected="false" tabindex="-1" onclick="switchMathFigures('serre', this)">塞尔</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-hirzebruch" aria-controls="ar-mathfigures-panel-hirzebruch" aria-selected="false" tabindex="-1" onclick="switchMathFigures('hirzebruch', this)">希策布鲁赫</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-carleson" aria-controls="ar-mathfigures-panel-carleson" aria-selected="false" tabindex="-1" onclick="switchMathFigures('carleson', this)">卡尔森</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-degiorgi" aria-controls="ar-mathfigures-panel-degiorgi" aria-selected="false" tabindex="-1" onclick="switchMathFigures('degiorgi', this)">德乔治</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-grothendieck" aria-controls="ar-mathfigures-panel-grothendieck" aria-selected="false" tabindex="-1" onclick="switchMathFigures('grothendieck', this)">格罗滕迪克</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-moser" aria-controls="ar-mathfigures-panel-moser" aria-selected="false" tabindex="-1" onclick="switchMathFigures('moser', this)">莫泽</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-nash" aria-controls="ar-mathfigures-panel-nash" aria-selected="false" tabindex="-1" onclick="switchMathFigures('nash', this)">纳什</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-sato" aria-controls="ar-mathfigures-panel-sato" aria-selected="false" tabindex="-1" onclick="switchMathFigures('sato', this)">佐藤干夫</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-atiyah" aria-controls="ar-mathfigures-panel-atiyah" aria-selected="false" tabindex="-1" onclick="switchMathFigures('atiyah', this)">阿蒂亚</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-piatetski" aria-controls="ar-mathfigures-panel-piatetski" aria-selected="false" tabindex="-1" onclick="switchMathFigures('piatetski', this)">皮亚捷茨基-夏皮罗</button>
    </div>
  </details>

  <details class="sub-era sub-3">
    <summary class="sub-era-sum"><span class="sub-era-t">4.3　二十世纪前期</span><span class="sub-era-span">生于 1930–1944 年</span><span class="sub-era-n">29 位</span></summary>
    <div class="ai-tab-btns" role="tablist" aria-label="4.3　二十世纪前期学者导航">
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-smale" aria-controls="ar-mathfigures-panel-smale" aria-selected="false" tabindex="-1" onclick="switchMathFigures('smale', this)">斯梅尔</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-tits" aria-controls="ar-mathfigures-panel-tits" aria-selected="false" tabindex="-1" onclick="switchMathFigures('tits', this)">蒂茨</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-hironaka" aria-controls="ar-mathfigures-panel-hironaka" aria-selected="false" tabindex="-1" onclick="switchMathFigures('hironaka', this)">广中平祐</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-hormander" aria-controls="ar-mathfigures-panel-hormander" aria-selected="false" tabindex="-1" onclick="switchMathFigures('hormander', this)">赫尔曼德</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-milnor" aria-controls="ar-mathfigures-panel-milnor" aria-selected="false" tabindex="-1" onclick="switchMathFigures('milnor', this)">米尔诺</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-stein" aria-controls="ar-mathfigures-panel-stein" aria-selected="false" tabindex="-1" onclick="switchMathFigures('stein', this)">施泰因</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-thompson" aria-controls="ar-mathfigures-panel-thompson" aria-selected="false" tabindex="-1" onclick="switchMathFigures('thompson', this)">汤普森</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-chen" aria-controls="ar-mathfigures-panel-chen" aria-selected="false" tabindex="-1" onclick="switchMathFigures('chen', this)">陈景润</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-artin" aria-controls="ar-mathfigures-panel-artin" aria-selected="false" tabindex="-1" onclick="switchMathFigures('artin', this)">阿廷</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-cohen" aria-controls="ar-mathfigures-panel-cohen" aria-selected="false" tabindex="-1" onclick="switchMathFigures('cohen', this)">科恩</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-furstenberg" aria-controls="ar-mathfigures-panel-furstenberg" aria-selected="false" tabindex="-1" onclick="switchMathFigures('furstenberg', this)">富尔斯滕伯格</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-sinai" aria-controls="ar-mathfigures-panel-sinai" aria-selected="false" tabindex="-1" onclick="switchMathFigures('sinai', this)">西奈</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-langlands" aria-controls="ar-mathfigures-panel-langlands" aria-selected="false" tabindex="-1" onclick="switchMathFigures('langlands', this)">朗兰兹</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-arnold" aria-controls="ar-mathfigures-panel-arnold" aria-selected="false" tabindex="-1" onclick="switchMathFigures('arnold', this)">阿诺德</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-mumford" aria-controls="ar-mathfigures-panel-mumford" aria-selected="false" tabindex="-1" onclick="switchMathFigures('mumford', this)">芒福德</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-griffiths" aria-controls="ar-mathfigures-panel-griffiths" aria-selected="false" tabindex="-1" onclick="switchMathFigures('griffiths', this)">格里菲斯</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-novikov" aria-controls="ar-mathfigures-panel-novikov" aria-selected="false" tabindex="-1" onclick="switchMathFigures('novikov', this)">诺维科夫</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-baker" aria-controls="ar-mathfigures-panel-baker" aria-selected="false" tabindex="-1" onclick="switchMathFigures('baker', this)">贝克</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-meyer" aria-controls="ar-mathfigures-panel-meyer" aria-selected="false" tabindex="-1" onclick="switchMathFigures('meyer', this)">梅耶</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-bombieri" aria-controls="ar-mathfigures-panel-bombieri" aria-selected="false" tabindex="-1" onclick="switchMathFigures('bombieri', this)">邦别里</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-quillen" aria-controls="ar-mathfigures-panel-quillen" aria-selected="false" tabindex="-1" onclick="switchMathFigures('quillen', this)">奎伦</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-szemeredi" aria-controls="ar-mathfigures-panel-szemeredi" aria-selected="false" tabindex="-1" onclick="switchMathFigures('szemeredi', this)">塞梅雷迪</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-varadhan" aria-controls="ar-mathfigures-panel-varadhan" aria-selected="false" tabindex="-1" onclick="switchMathFigures('varadhan', this)">瓦拉丹</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-sullivan" aria-controls="ar-mathfigures-panel-sullivan" aria-selected="false" tabindex="-1" onclick="switchMathFigures('sullivan', this)">沙利文</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-uhlenbeck" aria-controls="ar-mathfigures-panel-uhlenbeck" aria-selected="false" tabindex="-1" onclick="switchMathFigures('uhlenbeck', this)">乌伦贝克</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-gromov" aria-controls="ar-mathfigures-panel-gromov" aria-selected="false" tabindex="-1" onclick="switchMathFigures('gromov', this)">格罗莫夫</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-arthur" aria-controls="ar-mathfigures-panel-arthur" aria-selected="false" tabindex="-1" onclick="switchMathFigures('arthur', this)">亚瑟</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-aschbacher" aria-controls="ar-mathfigures-panel-aschbacher" aria-selected="false" tabindex="-1" onclick="switchMathFigures('aschbacher', this)">阿施巴赫</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-deligne" aria-controls="ar-mathfigures-panel-deligne" aria-selected="false" tabindex="-1" onclick="switchMathFigures('deligne', this)">德利涅</button>
    </div>
  </details>

  <details class="sub-era sub-4">
    <summary class="sub-era-sum"><span class="sub-era-t">4.4　二十世纪中期</span><span class="sub-era-span">生于 1945–1964 年</span><span class="sub-era-n">39 位</span></summary>
    <div class="ai-tab-btns" role="tablist" aria-label="4.4　二十世纪中期学者导航">
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-bernstein" aria-controls="ar-mathfigures-panel-bernstein" aria-selected="false" tabindex="-1" onclick="switchMathFigures('bernstein', this)">伯恩斯坦</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-shelah" aria-controls="ar-mathfigures-panel-shelah" aria-selected="false" tabindex="-1" onclick="switchMathFigures('shelah', this)">沙拉赫</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-eliashberg" aria-controls="ar-mathfigures-panel-eliashberg" aria-selected="false" tabindex="-1" onclick="switchMathFigures('eliashberg', this)">埃利亚什伯格</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-kazhdan" aria-controls="ar-mathfigures-panel-kazhdan" aria-selected="false" tabindex="-1" onclick="switchMathFigures('kazhdan', this)">卡日丹</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-lusztig" aria-controls="ar-mathfigures-panel-lusztig" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lusztig', this)">卢斯蒂格</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-margulis" aria-controls="ar-mathfigures-panel-margulis" aria-selected="false" tabindex="-1" onclick="switchMathFigures('margulis', this)">马尔古利斯</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-thurston" aria-controls="ar-mathfigures-panel-thurston" aria-selected="false" tabindex="-1" onclick="switchMathFigures('thurston', this)">瑟斯顿</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-connes" aria-controls="ar-mathfigures-panel-connes" aria-selected="false" tabindex="-1" onclick="switchMathFigures('connes', this)">孔涅</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-kashiwara" aria-controls="ar-mathfigures-panel-kashiwara" aria-selected="false" tabindex="-1" onclick="switchMathFigures('kashiwara', this)">柏原正树</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-caffarelli" aria-controls="ar-mathfigures-panel-caffarelli" aria-selected="false" tabindex="-1" onclick="switchMathFigures('caffarelli', this)">卡法雷利</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-lovasz" aria-controls="ar-mathfigures-panel-lovasz" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lovasz', this)">洛瓦兹</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-fefferman" aria-controls="ar-mathfigures-panel-fefferman" aria-selected="false" tabindex="-1" onclick="switchMathFigures('fefferman', this)">费弗曼</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-yau" aria-controls="ar-mathfigures-panel-yau" aria-selected="false" tabindex="-1" onclick="switchMathFigures('yau', this)">丘成桐</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-schoen" aria-controls="ar-mathfigures-panel-schoen" aria-selected="false" tabindex="-1" onclick="switchMathFigures('schoen', this)">舍恩</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-freedman" aria-controls="ar-mathfigures-panel-freedman" aria-selected="false" tabindex="-1" onclick="switchMathFigures('freedman', this)">弗里德曼</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-mori" aria-controls="ar-mathfigures-panel-mori" aria-selected="false" tabindex="-1" onclick="switchMathFigures('mori', this)">森重文</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-witten" aria-controls="ar-mathfigures-panel-witten" aria-selected="false" tabindex="-1" onclick="switchMathFigures('witten', this)">威滕</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-jones" aria-controls="ar-mathfigures-panel-jones" aria-selected="false" tabindex="-1" onclick="switchMathFigures('jones', this)">琼斯</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-shamir" aria-controls="ar-mathfigures-panel-shamir" aria-selected="false" tabindex="-1" onclick="switchMathFigures('shamir', this)">沙米尔</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-talagrand" aria-controls="ar-mathfigures-panel-talagrand" aria-selected="false" tabindex="-1" onclick="switchMathFigures('talagrand', this)">塔拉格兰</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-sarnak" aria-controls="ar-mathfigures-panel-sarnak" aria-selected="false" tabindex="-1" onclick="switchMathFigures('sarnak', this)">萨纳克</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-wiles" aria-controls="ar-mathfigures-panel-wiles" aria-selected="false" tabindex="-1" onclick="switchMathFigures('wiles', this)">怀尔斯</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-bourgain" aria-controls="ar-mathfigures-panel-bourgain" aria-selected="false" tabindex="-1" onclick="switchMathFigures('bourgain', this)">布尔甘</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-daubechies" aria-controls="ar-mathfigures-panel-daubechies" aria-selected="false" tabindex="-1" onclick="switchMathFigures('daubechies', this)">多贝西</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-drinfeld" aria-controls="ar-mathfigures-panel-drinfeld" aria-selected="false" tabindex="-1" onclick="switchMathFigures('drinfeld', this)">德林费尔德</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-faltings" aria-controls="ar-mathfigures-panel-faltings" aria-selected="false" tabindex="-1" onclick="switchMathFigures('faltings', this)">法尔廷斯</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-lawler" aria-controls="ar-mathfigures-panel-lawler" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lawler', this)">劳勒</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-zelmanov" aria-controls="ar-mathfigures-panel-zelmanov" aria-selected="false" tabindex="-1" onclick="switchMathFigures('zelmanov', this)">泽尔马诺夫</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-alon" aria-controls="ar-mathfigures-panel-alon" aria-selected="false" tabindex="-1" onclick="switchMathFigures('alon', this)">阿隆</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-lions" aria-controls="ar-mathfigures-panel-lions" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lions', this)">利翁斯</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-wigderson" aria-controls="ar-mathfigures-panel-wigderson" aria-selected="false" tabindex="-1" onclick="switchMathFigures('wigderson', this)">维格森</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-beilinson" aria-controls="ar-mathfigures-panel-beilinson" aria-selected="false" tabindex="-1" onclick="switchMathFigures('beilinson', this)">贝林森</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-donaldson" aria-controls="ar-mathfigures-panel-donaldson" aria-selected="false" tabindex="-1" onclick="switchMathFigures('donaldson', this)">唐纳森</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-yoccoz" aria-controls="ar-mathfigures-panel-yoccoz" aria-selected="false" tabindex="-1" onclick="switchMathFigures('yoccoz', this)">约科兹</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-mcmullen" aria-controls="ar-mathfigures-panel-mcmullen" aria-selected="false" tabindex="-1" onclick="switchMathFigures('mcmullen', this)">麦克马伦</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-borcherds" aria-controls="ar-mathfigures-panel-borcherds" aria-selected="false" tabindex="-1" onclick="switchMathFigures('borcherds', this)">博切尔兹</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-legall" aria-controls="ar-mathfigures-panel-legall" aria-selected="false" tabindex="-1" onclick="switchMathFigures('legall', this)">勒加尔</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-gowers" aria-controls="ar-mathfigures-panel-gowers" aria-selected="false" tabindex="-1" onclick="switchMathFigures('gowers', this)">高尔斯</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-kontsevich" aria-controls="ar-mathfigures-panel-kontsevich" aria-selected="false" tabindex="-1" onclick="switchMathFigures('kontsevich', this)">孔采维奇</button>
    </div>
  </details>

  <details class="sub-era sub-5">
    <summary class="sub-era-sum"><span class="sub-era-t">4.5　二十世纪后期至今</span><span class="sub-era-span">生于 1965 年 及以后</span><span class="sub-era-n">26 位</span></summary>
    <div class="ai-tab-btns" role="tablist" aria-label="4.5　二十世纪后期至今学者导航">
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-lafforgue" aria-controls="ar-mathfigures-panel-lafforgue" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lafforgue', this)">拉福格</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-perelman" aria-controls="ar-mathfigures-panel-perelman" aria-selected="false" tabindex="-1" onclick="switchMathFigures('perelman', this)">佩雷尔曼</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-voevodsky" aria-controls="ar-mathfigures-panel-voevodsky" aria-selected="false" tabindex="-1" onclick="switchMathFigures('voevodsky', this)">沃埃沃德斯基</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-werner" aria-controls="ar-mathfigures-panel-werner" aria-selected="false" tabindex="-1" onclick="switchMathFigures('werner', this)">维尔纳</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-okounkov" aria-controls="ar-mathfigures-panel-okounkov" aria-selected="false" tabindex="-1" onclick="switchMathFigures('okounkov', this)">奥孔科夫</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-lindenstrauss" aria-controls="ar-mathfigures-panel-lindenstrauss" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lindenstrauss', this)">林登施特劳斯</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-smirnov" aria-controls="ar-mathfigures-panel-smirnov" aria-selected="false" tabindex="-1" onclick="switchMathFigures('smirnov', this)">斯米尔诺夫</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-ngo" aria-controls="ar-mathfigures-panel-ngo" aria-selected="false" tabindex="-1" onclick="switchMathFigures('ngo', this)">吴宝珠</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-villani" aria-controls="ar-mathfigures-panel-villani" aria-selected="false" tabindex="-1" onclick="switchMathFigures('villani', this)">维拉尼</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-bhargava" aria-controls="ar-mathfigures-panel-bhargava" aria-selected="false" tabindex="-1" onclick="switchMathFigures('bhargava', this)">巴尔加瓦</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-hairer" aria-controls="ar-mathfigures-panel-hairer" aria-selected="false" tabindex="-1" onclick="switchMathFigures('hairer', this)">海雷尔</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-tao" aria-controls="ar-mathfigures-panel-tao" aria-selected="false" tabindex="-1" onclick="switchMathFigures('tao', this)">陶哲轩</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-mirzakhani" aria-controls="ar-mathfigures-panel-mirzakhani" aria-selected="false" tabindex="-1" onclick="switchMathFigures('mirzakhani', this)">米尔扎哈尼</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-birkar" aria-controls="ar-mathfigures-panel-birkar" aria-selected="false" tabindex="-1" onclick="switchMathFigures('birkar', this)">比尔卡尔</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-avila" aria-controls="ar-mathfigures-panel-avila" aria-selected="false" tabindex="-1" onclick="switchMathFigures('avila', this)">阿维拉</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-venkatesh" aria-controls="ar-mathfigures-panel-venkatesh" aria-selected="false" tabindex="-1" onclick="switchMathFigures('venkatesh', this)">文卡特什</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-huh" aria-controls="ar-mathfigures-panel-huh" aria-selected="false" tabindex="-1" onclick="switchMathFigures('huh', this)">许埈珥</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-figalli" aria-controls="ar-mathfigures-panel-figalli" aria-selected="false" tabindex="-1" onclick="switchMathFigures('figalli', this)">菲加利</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-viazovska" aria-controls="ar-mathfigures-panel-viazovska" aria-selected="false" tabindex="-1" onclick="switchMathFigures('viazovska', this)">维亚佐夫斯卡</button>
        <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-duminilcopin" aria-controls="ar-mathfigures-panel-duminilcopin" aria-selected="false" tabindex="-1" onclick="switchMathFigures('duminilcopin', this)">迪米尼-科潘</button>
        <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-maynard" aria-controls="ar-mathfigures-panel-maynard" aria-selected="false" tabindex="-1" onclick="switchMathFigures('maynard', this)">梅纳德</button>
        <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-scholze" aria-controls="ar-mathfigures-panel-scholze" aria-selected="false" tabindex="-1" onclick="switchMathFigures('scholze', this)">朔尔策</button>
        <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-tsimerman" aria-controls="ar-mathfigures-panel-tsimerman" aria-selected="false" tabindex="-1" onclick="switchMathFigures('tsimerman', this)">齐默曼</button>
        <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-deng" aria-controls="ar-mathfigures-panel-deng" aria-selected="false" tabindex="-1" onclick="switchMathFigures('deng', this)">邓煜</button>
        <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-pardon" aria-controls="ar-mathfigures-panel-pardon" aria-selected="false" tabindex="-1" onclick="switchMathFigures('pardon', this)">帕登</button>
        <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-wanghong" aria-controls="ar-mathfigures-panel-wanghong" aria-selected="false" tabindex="-1" onclick="switchMathFigures('wanghong', this)">王虹</button>
    </div>
  </details>
  </details>
  
  

{{< ar-panel "ahmose" "active" "ar-mathfigures-panel-" "ahmose" "数学文化/panels/figures" >}}
{{< ar-panel "baudhayana" "-" "ar-mathfigures-panel-" "baudhayana" "数学文化/panels/figures" >}}
{{< ar-panel "thales" "-" "ar-mathfigures-panel-" "thales" "数学文化/panels/figures" >}}

{{< ar-panel "pythagoras" "-" "ar-mathfigures-panel-" "pythagoras" "数学文化/panels/figures" >}}

{{< ar-panel "zeno" "-" "ar-mathfigures-panel-" "zeno" "数学文化/panels/figures" >}}
{{< ar-panel "hippocrates" "-" "ar-mathfigures-panel-" "hippocrates" "数学文化/panels/figures" >}}
{{< ar-panel "archytas" "-" "ar-mathfigures-panel-" "archytas" "数学文化/panels/figures" >}}
{{< ar-panel "eudoxus" "-" "ar-mathfigures-panel-" "eudoxus" "数学文化/panels/figures" >}}
{{< ar-panel "euclid" "-" "ar-mathfigures-panel-" "euclid" "数学文化/panels/figures" >}}

{{< ar-panel "archimedes" "-" "ar-mathfigures-panel-" "archimedes" "数学文化/panels/figures" >}}

{{< ar-panel "eratosthenes" "-" "ar-mathfigures-panel-" "eratosthenes" "数学文化/panels/figures" >}}
{{< ar-panel "apollonius" "-" "ar-mathfigures-panel-" "apollonius" "数学文化/panels/figures" >}}

{{< ar-panel "hipparchus" "-" "ar-mathfigures-panel-" "hipparchus" "数学文化/panels/figures" >}}
{{< ar-panel "heron" "-" "ar-mathfigures-panel-" "heron" "数学文化/panels/figures" >}}
{{< ar-panel "ptolemy" "-" "ar-mathfigures-panel-" "ptolemy" "数学文化/panels/figures" >}}
{{< ar-panel "diophantus" "-" "ar-mathfigures-panel-" "diophantus" "数学文化/panels/figures" >}}
{{< ar-panel "zhaoshuang" "-" "ar-mathfigures-panel-" "zhaoshuang" "数学文化/panels/figures" >}}
{{< ar-panel "liuhui" "-" "ar-mathfigures-panel-" "liuhui" "数学文化/panels/figures" >}}

{{< ar-panel "pappus" "-" "ar-mathfigures-panel-" "pappus" "数学文化/panels/figures" >}}
{{< ar-panel "zuchongzhi" "-" "ar-mathfigures-panel-" "zuchongzhi" "数学文化/panels/figures" >}}

{{< ar-panel "aryabhata" "-" "ar-mathfigures-panel-" "aryabhata" "数学文化/panels/figures" >}}
{{< ar-panel "zugeng" "-" "ar-mathfigures-panel-" "zugeng" "数学文化/panels/figures" >}}
{{< ar-panel "brahmagupta" "-" "ar-mathfigures-panel-" "brahmagupta" "数学文化/panels/figures" >}}
{{< ar-panel "yixing" "-" "ar-mathfigures-panel-" "yixing" "数学文化/panels/figures" >}}
{{< ar-panel "alkhwarizmi" "-" "ar-mathfigures-panel-" "alkhwarizmi" "数学文化/panels/figures" >}}
{{< ar-panel "abulwafa" "-" "ar-mathfigures-panel-" "abulwafa" "数学文化/panels/figures" >}}
{{< ar-panel "omarkhayyam" "-" "ar-mathfigures-panel-" "omarkhayyam" "数学文化/panels/figures" >}}
{{< ar-panel "bhaskara2" "-" "ar-mathfigures-panel-" "bhaskara2" "数学文化/panels/figures" >}}
{{< ar-panel "fibonacci" "-" "ar-mathfigures-panel-" "fibonacci" "数学文化/panels/figures" >}}
{{< ar-panel "liye" "-" "ar-mathfigures-panel-" "liye" "数学文化/panels/figures" >}}
{{< ar-panel "nasiruddin" "-" "ar-mathfigures-panel-" "nasiruddin" "数学文化/panels/figures" >}}
{{< ar-panel "qinjiushao" "-" "ar-mathfigures-panel-" "qinjiushao" "数学文化/panels/figures" >}}
{{< ar-panel "yanghui" "-" "ar-mathfigures-panel-" "yanghui" "数学文化/panels/figures" >}}
{{< ar-panel "zhushijie" "-" "ar-mathfigures-panel-" "zhushijie" "数学文化/panels/figures" >}}
{{< ar-panel "oresme" "-" "ar-mathfigures-panel-" "oresme" "数学文化/panels/figures" >}}
{{< ar-panel "madhava" "-" "ar-mathfigures-panel-" "madhava" "数学文化/panels/figures" >}}
{{< ar-panel "alkashi" "-" "ar-mathfigures-panel-" "alkashi" "数学文化/panels/figures" >}}
{{< ar-panel "cardano" "-" "ar-mathfigures-panel-" "cardano" "数学文化/panels/figures" >}}
{{< ar-panel "viete" "-" "ar-mathfigures-panel-" "viete" "数学文化/panels/figures" >}}
{{< ar-panel "napier" "-" "ar-mathfigures-panel-" "napier" "数学文化/panels/figures" >}}
{{< ar-panel "xuguangqi" "-" "ar-mathfigures-panel-" "xuguangqi" "数学文化/panels/figures" >}}
{{< ar-panel "kepler" "-" "ar-mathfigures-panel-" "kepler" "数学文化/panels/figures" >}}
{{< ar-panel "descartes" "-" "ar-mathfigures-panel-" "descartes" "数学文化/panels/figures" >}}

{{< ar-panel "fermat" "-" "ar-mathfigures-panel-" "fermat" "数学文化/panels/figures" >}}

{{< ar-panel "pascal" "-" "ar-mathfigures-panel-" "pascal" "数学文化/panels/figures" >}}
{{< ar-panel "huygens" "-" "ar-mathfigures-panel-" "huygens" "数学文化/panels/figures" >}}
{{< ar-panel "meiwendin" "-" "ar-mathfigures-panel-" "meiwendin" "数学文化/panels/figures" >}}
{{< ar-panel "seki" "-" "ar-mathfigures-panel-" "seki" "数学文化/panels/figures" >}}
{{< ar-panel "newton" "-" "ar-mathfigures-panel-" "newton" "数学文化/panels/figures" >}}

{{< ar-panel "leibniz" "-" "ar-mathfigures-panel-" "leibniz" "数学文化/panels/figures" >}}

{{< ar-panel "jbernoulli" "-" "ar-mathfigures-panel-" "jbernoulli" "数学文化/panels/figures" >}}
{{< ar-panel "euler" "-" "ar-mathfigures-panel-" "euler" "数学文化/panels/figures" >}}

{{< ar-panel "dalembert" "-" "ar-mathfigures-panel-" "dalembert" "数学文化/panels/figures" >}}
{{< ar-panel "lagrange" "-" "ar-mathfigures-panel-" "lagrange" "数学文化/panels/figures" >}}

{{< ar-panel "monge" "-" "ar-mathfigures-panel-" "monge" "数学文化/panels/figures" >}}
{{< ar-panel "legendre" "-" "ar-mathfigures-panel-" "legendre" "数学文化/panels/figures" >}}
{{< ar-panel "gauss" "-" "ar-mathfigures-panel-" "gauss" "数学文化/panels/figures" >}}

{{< ar-panel "cauchy" "-" "ar-mathfigures-panel-" "cauchy" "数学文化/panels/figures" >}}

{{< ar-panel "abel" "-" "ar-mathfigures-panel-" "abel" "数学文化/panels/figures" >}}

{{< ar-panel "galois" "-" "ar-mathfigures-panel-" "galois" "数学文化/panels/figures" >}}

{{< ar-panel "riemann" "-" "ar-mathfigures-panel-" "riemann" "数学文化/panels/figures" >}}

{{< ar-panel "cantor" "-" "ar-mathfigures-panel-" "cantor" "数学文化/panels/figures" >}}

{{< ar-panel "poincare" "-" "ar-mathfigures-panel-" "poincare" "数学文化/panels/figures" >}}

{{< ar-panel "hilbert" "-" "ar-mathfigures-panel-" "hilbert" "数学文化/panels/figures" >}}

{{< ar-panel "noether" "-" "ar-mathfigures-panel-" "noether" "数学文化/panels/figures" >}}

{{< ar-panel "ramanujan" "-" "ar-mathfigures-panel-" "ramanujan" "数学文化/panels/figures" >}}

{{< ar-panel "siegel" "-" "ar-mathfigures-panel-" "siegel" "数学文化/panels/figures" >}}

{{< ar-panel "douglas" "-" "ar-mathfigures-panel-" "douglas" "数学文化/panels/figures" >}}

{{< ar-panel "zariski" "-" "ar-mathfigures-panel-" "zariski" "数学文化/panels/figures" >}}

{{< ar-panel "kolmogorov" "-" "ar-mathfigures-panel-" "kolmogorov" "数学文化/panels/figures" >}}

{{< ar-panel "cartan" "-" "ar-mathfigures-panel-" "cartan" "数学文化/panels/figures" >}}

{{< ar-panel "lewy" "-" "ar-mathfigures-panel-" "lewy" "数学文化/panels/figures" >}}

{{< ar-panel "godel" "-" "ar-mathfigures-panel-" "godel" "数学文化/panels/figures" >}}

{{< ar-panel "leray" "-" "ar-mathfigures-panel-" "leray" "数学文化/panels/figures" >}}

{{< ar-panel "weil" "-" "ar-mathfigures-panel-" "weil" "数学文化/panels/figures" >}}

{{< ar-panel "ahlfors" "-" "ar-mathfigures-panel-" "ahlfors" "数学文化/panels/figures" >}}

{{< ar-panel "krein" "-" "ar-mathfigures-panel-" "krein" "数学文化/panels/figures" >}}

{{< ar-panel "whitney" "-" "ar-mathfigures-panel-" "whitney" "数学文化/panels/figures" >}}

{{< ar-panel "hua" "-" "ar-mathfigures-panel-" "hua" "数学文化/panels/figures" >}}
{{< ar-panel "chern" "-" "ar-mathfigures-panel-" "chern" "数学文化/panels/figures" >}}

{{< ar-panel "turing" "-" "ar-mathfigures-panel-" "turing" "数学文化/panels/figures" >}}

{{< ar-panel "eilenberg" "-" "ar-mathfigures-panel-" "eilenberg" "数学文化/panels/figures" >}}

{{< ar-panel "erdos" "-" "ar-mathfigures-panel-" "erdos" "数学文化/panels/figures" >}}

{{< ar-panel "gelfand" "-" "ar-mathfigures-panel-" "gelfand" "数学文化/panels/figures" >}}

{{< ar-panel "ito" "-" "ar-mathfigures-panel-" "ito" "数学文化/panels/figures" >}}

{{< ar-panel "kodaira" "-" "ar-mathfigures-panel-" "kodaira" "数学文化/panels/figures" >}}

{{< ar-panel "schwartz" "-" "ar-mathfigures-panel-" "schwartz" "数学文化/panels/figures" >}}

{{< ar-panel "selberg" "-" "ar-mathfigures-panel-" "selberg" "数学文化/panels/figures" >}}

{{< ar-panel "calderon" "-" "ar-mathfigures-panel-" "calderon" "数学文化/panels/figures" >}}

{{< ar-panel "bott" "-" "ar-mathfigures-panel-" "bott" "数学文化/panels/figures" >}}

{{< ar-panel "keller" "-" "ar-mathfigures-panel-" "keller" "数学文化/panels/figures" >}}

{{< ar-panel "mostow" "-" "ar-mathfigures-panel-" "mostow" "数学文化/panels/figures" >}}

{{< ar-panel "thom" "-" "ar-mathfigures-panel-" "thom" "数学文化/panels/figures" >}}

{{< ar-panel "singer" "-" "ar-mathfigures-panel-" "singer" "数学文化/panels/figures" >}}

{{< ar-panel "nirenberg" "-" "ar-mathfigures-panel-" "nirenberg" "数学文化/panels/figures" >}}

{{< ar-panel "roth" "-" "ar-mathfigures-panel-" "roth" "数学文化/panels/figures" >}}

{{< ar-panel "tate" "-" "ar-mathfigures-panel-" "tate" "数学文化/panels/figures" >}}

{{< ar-panel "lax" "-" "ar-mathfigures-panel-" "lax" "数学文化/panels/figures" >}}

{{< ar-panel "serre" "-" "ar-mathfigures-panel-" "serre" "数学文化/panels/figures" >}}

{{< ar-panel "hirzebruch" "-" "ar-mathfigures-panel-" "hirzebruch" "数学文化/panels/figures" >}}

{{< ar-panel "carleson" "-" "ar-mathfigures-panel-" "carleson" "数学文化/panels/figures" >}}{{< ar-panel "degiorgi" "-" "ar-mathfigures-panel-" "degiorgi" "数学文化/panels/figures" >}}

{{< ar-panel "grothendieck" "-" "ar-mathfigures-panel-" "grothendieck" "数学文化/panels/figures" >}}

{{< ar-panel "moser" "-" "ar-mathfigures-panel-" "moser" "数学文化/panels/figures" >}}

{{< ar-panel "nash" "-" "ar-mathfigures-panel-" "nash" "数学文化/panels/figures" >}}

{{< ar-panel "sato" "-" "ar-mathfigures-panel-" "sato" "数学文化/panels/figures" >}}

{{< ar-panel "atiyah" "-" "ar-mathfigures-panel-" "atiyah" "数学文化/panels/figures" >}}

{{< ar-panel "piatetski" "-" "ar-mathfigures-panel-" "piatetski" "数学文化/panels/figures" >}}

{{< ar-panel "smale" "-" "ar-mathfigures-panel-" "smale" "数学文化/panels/figures" >}}

{{< ar-panel "tits" "-" "ar-mathfigures-panel-" "tits" "数学文化/panels/figures" >}}

{{< ar-panel "hironaka" "-" "ar-mathfigures-panel-" "hironaka" "数学文化/panels/figures" >}}

{{< ar-panel "hormander" "-" "ar-mathfigures-panel-" "hormander" "数学文化/panels/figures" >}}

{{< ar-panel "milnor" "-" "ar-mathfigures-panel-" "milnor" "数学文化/panels/figures" >}}

{{< ar-panel "stein" "-" "ar-mathfigures-panel-" "stein" "数学文化/panels/figures" >}}

{{< ar-panel "thompson" "-" "ar-mathfigures-panel-" "thompson" "数学文化/panels/figures" >}}

{{< ar-panel "chen" "-" "ar-mathfigures-panel-" "chen" "数学文化/panels/figures" >}}

{{< ar-panel "artin" "-" "ar-mathfigures-panel-" "artin" "数学文化/panels/figures" >}}

{{< ar-panel "cohen" "-" "ar-mathfigures-panel-" "cohen" "数学文化/panels/figures" >}}

{{< ar-panel "furstenberg" "-" "ar-mathfigures-panel-" "furstenberg" "数学文化/panels/figures" >}}

{{< ar-panel "sinai" "-" "ar-mathfigures-panel-" "sinai" "数学文化/panels/figures" >}}

{{< ar-panel "langlands" "-" "ar-mathfigures-panel-" "langlands" "数学文化/panels/figures" >}}

{{< ar-panel "arnold" "-" "ar-mathfigures-panel-" "arnold" "数学文化/panels/figures" >}}

{{< ar-panel "mumford" "-" "ar-mathfigures-panel-" "mumford" "数学文化/panels/figures" >}}

{{< ar-panel "griffiths" "-" "ar-mathfigures-panel-" "griffiths" "数学文化/panels/figures" >}}

{{< ar-panel "novikov" "-" "ar-mathfigures-panel-" "novikov" "数学文化/panels/figures" >}}

{{< ar-panel "baker" "-" "ar-mathfigures-panel-" "baker" "数学文化/panels/figures" >}}

{{< ar-panel "meyer" "-" "ar-mathfigures-panel-" "meyer" "数学文化/panels/figures" >}}

{{< ar-panel "bombieri" "-" "ar-mathfigures-panel-" "bombieri" "数学文化/panels/figures" >}}

{{< ar-panel "quillen" "-" "ar-mathfigures-panel-" "quillen" "数学文化/panels/figures" >}}

{{< ar-panel "szemeredi" "-" "ar-mathfigures-panel-" "szemeredi" "数学文化/panels/figures" >}}

{{< ar-panel "varadhan" "-" "ar-mathfigures-panel-" "varadhan" "数学文化/panels/figures" >}}

{{< ar-panel "sullivan" "-" "ar-mathfigures-panel-" "sullivan" "数学文化/panels/figures" >}}

{{< ar-panel "uhlenbeck" "-" "ar-mathfigures-panel-" "uhlenbeck" "数学文化/panels/figures" >}}

{{< ar-panel "gromov" "-" "ar-mathfigures-panel-" "gromov" "数学文化/panels/figures" >}}

{{< ar-panel "arthur" "-" "ar-mathfigures-panel-" "arthur" "数学文化/panels/figures" >}}

{{< ar-panel "aschbacher" "-" "ar-mathfigures-panel-" "aschbacher" "数学文化/panels/figures" >}}

{{< ar-panel "deligne" "-" "ar-mathfigures-panel-" "deligne" "数学文化/panels/figures" >}}

{{< ar-panel "bernstein" "-" "ar-mathfigures-panel-" "bernstein" "数学文化/panels/figures" >}}

{{< ar-panel "shelah" "-" "ar-mathfigures-panel-" "shelah" "数学文化/panels/figures" >}}

{{< ar-panel "eliashberg" "-" "ar-mathfigures-panel-" "eliashberg" "数学文化/panels/figures" >}}

{{< ar-panel "kazhdan" "-" "ar-mathfigures-panel-" "kazhdan" "数学文化/panels/figures" >}}

{{< ar-panel "lusztig" "-" "ar-mathfigures-panel-" "lusztig" "数学文化/panels/figures" >}}

{{< ar-panel "margulis" "-" "ar-mathfigures-panel-" "margulis" "数学文化/panels/figures" >}}

{{< ar-panel "thurston" "-" "ar-mathfigures-panel-" "thurston" "数学文化/panels/figures" >}}

{{< ar-panel "connes" "-" "ar-mathfigures-panel-" "connes" "数学文化/panels/figures" >}}

{{< ar-panel "kashiwara" "-" "ar-mathfigures-panel-" "kashiwara" "数学文化/panels/figures" >}}

{{< ar-panel "caffarelli" "-" "ar-mathfigures-panel-" "caffarelli" "数学文化/panels/figures" >}}

{{< ar-panel "lovasz" "-" "ar-mathfigures-panel-" "lovasz" "数学文化/panels/figures" >}}

{{< ar-panel "fefferman" "-" "ar-mathfigures-panel-" "fefferman" "数学文化/panels/figures" >}}

{{< ar-panel "yau" "-" "ar-mathfigures-panel-" "yau" "数学文化/panels/figures" >}}

{{< ar-panel "schoen" "-" "ar-mathfigures-panel-" "schoen" "数学文化/panels/figures" >}}

{{< ar-panel "freedman" "-" "ar-mathfigures-panel-" "freedman" "数学文化/panels/figures" >}}

{{< ar-panel "mori" "-" "ar-mathfigures-panel-" "mori" "数学文化/panels/figures" >}}

{{< ar-panel "witten" "-" "ar-mathfigures-panel-" "witten" "数学文化/panels/figures" >}}

{{< ar-panel "jones" "-" "ar-mathfigures-panel-" "jones" "数学文化/panels/figures" >}}

{{< ar-panel "shamir" "-" "ar-mathfigures-panel-" "shamir" "数学文化/panels/figures" >}}

{{< ar-panel "talagrand" "-" "ar-mathfigures-panel-" "talagrand" "数学文化/panels/figures" >}}

{{< ar-panel "sarnak" "-" "ar-mathfigures-panel-" "sarnak" "数学文化/panels/figures" >}}

{{< ar-panel "wiles" "-" "ar-mathfigures-panel-" "wiles" "数学文化/panels/figures" >}}

{{< ar-panel "bourgain" "-" "ar-mathfigures-panel-" "bourgain" "数学文化/panels/figures" >}}

{{< ar-panel "daubechies" "-" "ar-mathfigures-panel-" "daubechies" "数学文化/panels/figures" >}}

{{< ar-panel "drinfeld" "-" "ar-mathfigures-panel-" "drinfeld" "数学文化/panels/figures" >}}

{{< ar-panel "faltings" "-" "ar-mathfigures-panel-" "faltings" "数学文化/panels/figures" >}}

{{< ar-panel "lawler" "-" "ar-mathfigures-panel-" "lawler" "数学文化/panels/figures" >}}

{{< ar-panel "zelmanov" "-" "ar-mathfigures-panel-" "zelmanov" "数学文化/panels/figures" >}}

{{< ar-panel "alon" "-" "ar-mathfigures-panel-" "alon" "数学文化/panels/figures" >}}

{{< ar-panel "lions" "-" "ar-mathfigures-panel-" "lions" "数学文化/panels/figures" >}}

{{< ar-panel "wigderson" "-" "ar-mathfigures-panel-" "wigderson" "数学文化/panels/figures" >}}

{{< ar-panel "beilinson" "-" "ar-mathfigures-panel-" "beilinson" "数学文化/panels/figures" >}}

{{< ar-panel "donaldson" "-" "ar-mathfigures-panel-" "donaldson" "数学文化/panels/figures" >}}

{{< ar-panel "yoccoz" "-" "ar-mathfigures-panel-" "yoccoz" "数学文化/panels/figures" >}}

{{< ar-panel "mcmullen" "-" "ar-mathfigures-panel-" "mcmullen" "数学文化/panels/figures" >}}

{{< ar-panel "borcherds" "-" "ar-mathfigures-panel-" "borcherds" "数学文化/panels/figures" >}}

{{< ar-panel "legall" "-" "ar-mathfigures-panel-" "legall" "数学文化/panels/figures" >}}

{{< ar-panel "gowers" "-" "ar-mathfigures-panel-" "gowers" "数学文化/panels/figures" >}}

{{< ar-panel "kontsevich" "-" "ar-mathfigures-panel-" "kontsevich" "数学文化/panels/figures" >}}

{{< ar-panel "lafforgue" "-" "ar-mathfigures-panel-" "lafforgue" "数学文化/panels/figures" >}}

{{< ar-panel "perelman" "-" "ar-mathfigures-panel-" "perelman" "数学文化/panels/figures" >}}

{{< ar-panel "voevodsky" "-" "ar-mathfigures-panel-" "voevodsky" "数学文化/panels/figures" >}}

{{< ar-panel "werner" "-" "ar-mathfigures-panel-" "werner" "数学文化/panels/figures" >}}

{{< ar-panel "okounkov" "-" "ar-mathfigures-panel-" "okounkov" "数学文化/panels/figures" >}}

{{< ar-panel "lindenstrauss" "-" "ar-mathfigures-panel-" "lindenstrauss" "数学文化/panels/figures" >}}

{{< ar-panel "smirnov" "-" "ar-mathfigures-panel-" "smirnov" "数学文化/panels/figures" >}}

{{< ar-panel "ngo" "-" "ar-mathfigures-panel-" "ngo" "数学文化/panels/figures" >}}

{{< ar-panel "villani" "-" "ar-mathfigures-panel-" "villani" "数学文化/panels/figures" >}}

{{< ar-panel "bhargava" "-" "ar-mathfigures-panel-" "bhargava" "数学文化/panels/figures" >}}

{{< ar-panel "hairer" "-" "ar-mathfigures-panel-" "hairer" "数学文化/panels/figures" >}}

{{< ar-panel "tao" "-" "ar-mathfigures-panel-" "tao" "数学文化/panels/figures" >}}

{{< ar-panel "mirzakhani" "-" "ar-mathfigures-panel-" "mirzakhani" "数学文化/panels/figures" >}}

{{< ar-panel "birkar" "-" "ar-mathfigures-panel-" "birkar" "数学文化/panels/figures" >}}

{{< ar-panel "avila" "-" "ar-mathfigures-panel-" "avila" "数学文化/panels/figures" >}}

{{< ar-panel "venkatesh" "-" "ar-mathfigures-panel-" "venkatesh" "数学文化/panels/figures" >}}

{{< ar-panel "huh" "-" "ar-mathfigures-panel-" "huh" "数学文化/panels/figures" >}}

{{< ar-panel "figalli" "-" "ar-mathfigures-panel-" "figalli" "数学文化/panels/figures" >}}

{{< ar-panel "viazovska" "-" "ar-mathfigures-panel-" "viazovska" "数学文化/panels/figures" >}}

{{< ar-panel "duminilcopin" "-" "ar-mathfigures-panel-" "duminilcopin" "数学文化/panels/figures" >}}

{{< ar-panel "maynard" "-" "ar-mathfigures-panel-" "maynard" "数学文化/panels/figures" >}}

{{< ar-panel "scholze" "-" "ar-mathfigures-panel-" "scholze" "数学文化/panels/figures" >}}

{{< ar-panel "tsimerman" "-" "ar-mathfigures-panel-" "tsimerman" "数学文化/panels/figures" >}}

{{< ar-panel "deng" "-" "ar-mathfigures-panel-" "deng" "数学文化/panels/figures" >}}

{{< ar-panel "pardon" "-" "ar-mathfigures-panel-" "pardon" "数学文化/panels/figures" >}}

{{< ar-panel "wanghong" "-" "ar-mathfigures-panel-" "wanghong" "数学文化/panels/figures" >}}


</div>
</section>

<section id="ar-section-problems" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-problems" hidden>
<div class="ai-tabs">
  <div class="ai-tab-btns" role="tablist" aria-label="内容小节导航">
    <button type="button" class="ai-tab-btn tab-teal active" role="tab" id="tab-ar-mathproblems-panel-hilbert" aria-controls="ar-mathproblems-panel-hilbert" aria-selected="true" tabindex="0" onclick="switchMathProblems('hilbert', this)">希尔伯特23问题</button>
    <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathproblems-panel-millennium" aria-controls="ar-mathproblems-panel-millennium" aria-selected="false" tabindex="-1" onclick="switchMathProblems('millennium', this)">千禧年问题</button>
    <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathproblems-panel-fourcolor" aria-controls="ar-mathproblems-panel-fourcolor" aria-selected="false" tabindex="-1" onclick="switchMathProblems('fourcolor', this)">四色定理</button>
  </div>

{{< ar-panel "hilbert" "active" "ar-mathproblems-panel-" "hilbert" "数学文化/panels/problems" >}}

{{< ar-panel "millennium" "-" "ar-mathproblems-panel-" "millennium" "数学文化/panels/problems" >}}

{{< ar-panel "fourcolor" "-" "ar-mathproblems-panel-" "fourcolor" "数学文化/panels/problems" >}}
</div>
</section>

<section id="ar-section-popular" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-popular" hidden>
<div class="ai-tabs">
  <div class="ai-tab-btns" role="tablist" aria-label="内容小节导航">
    <button type="button" class="ai-tab-btn tab-teal active" role="tab" id="tab-ar-mathpopular-panel-crisis1" aria-controls="ar-mathpopular-panel-crisis1" aria-selected="true" tabindex="0" onclick="switchMathPopular('crisis1', this)">第一次数学危机</button>
    <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathpopular-panel-crisis2" aria-controls="ar-mathpopular-panel-crisis2" aria-selected="false" tabindex="-1" onclick="switchMathPopular('crisis2', this)">第二次数学危机</button>
    <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathpopular-panel-crisis3" aria-controls="ar-mathpopular-panel-crisis3" aria-selected="false" tabindex="-1" onclick="switchMathPopular('crisis3', this)">第三次数学危机</button>
    <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathpopular-panel-coastline" aria-controls="ar-mathpopular-panel-coastline" aria-selected="false" tabindex="-1" onclick="switchMathPopular('coastline', this)">英国海岸线有多长</button>
    <button type="button" class="ai-tab-btn tab-yellow" role="tab" id="tab-ar-mathpopular-panel-prisoner" aria-controls="ar-mathpopular-panel-prisoner" aria-selected="false" tabindex="-1" onclick="switchMathPopular('prisoner', this)">从囚徒困境看博弈论</button>
  </div>

{{< ar-panel "crisis1" "active" "ar-mathpopular-panel-" "crisis1" "数学文化/panels/popular" >}}
{{< ar-panel "crisis2" "-" "ar-mathpopular-panel-" "crisis2" "数学文化/panels/popular" >}}
{{< ar-panel "crisis3" "-" "ar-mathpopular-panel-" "crisis3" "数学文化/panels/popular" >}}

{{< ar-panel "coastline" "-" "ar-mathpopular-panel-" "coastline" "数学文化/panels/popular" >}}

{{< ar-panel "prisoner" "-" "ar-mathpopular-panel-" "prisoner" "数学文化/panels/popular" >}}

</div>
</section>

<section id="ar-section-education" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-education" hidden>
<div class="ai-tabs">
  <div class="ai-tab-btns" role="tablist" aria-label="内容小节导航">
    <button type="button" class="ai-tab-btn tab-teal active" role="tab" id="tab-ar-matheducation-panel-future" aria-controls="ar-matheducation-panel-future" aria-selected="true" tabindex="0" onclick="switchMathEducation('future', this)">未来的数学</button>
  </div>

{{< ar-panel "future" "active" "ar-matheducation-panel-" "future" "数学文化/panels/education" >}}

</div>
</section>

<section id="ar-section-awards" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-awards" hidden>
<div class="ai-tabs">
  <div class="ai-tab-btns" role="tablist" aria-label="内容小节导航">
    <button type="button" class="ai-tab-btn tab-yellow active" role="tab" id="tab-ar-mathawards-panel-fields" aria-controls="ar-mathawards-panel-fields" aria-selected="true" tabindex="0" onclick="switchMathAwards('fields', this)">菲尔兹奖</button>
    <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathawards-panel-abel" aria-controls="ar-mathawards-panel-abel" aria-selected="false" tabindex="-1" onclick="switchMathAwards('abel', this)">阿贝尔奖</button>
    <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathawards-panel-wolf" aria-controls="ar-mathawards-panel-wolf" aria-selected="false" tabindex="-1" onclick="switchMathAwards('wolf', this)">沃尔夫数学奖</button>
  </div>

{{< ar-panel "fields" "active" "ar-mathawards-panel-" "fields" "数学文化/panels/awards" >}}

{{< ar-panel "abel" "-" "ar-mathawards-panel-" "abel" "数学文化/panels/awards" >}}

{{< ar-panel "wolf" "-" "ar-mathawards-panel-" "wolf" "数学文化/panels/awards" >}}

</div>
</section>


<section id="ar-section-anecdotes" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-anecdotes" hidden>
<div class="ai-tabs">
  <div class="ai-tab-btns" role="tablist" aria-label="内容小节导航">
    <button type="button" class="ai-tab-btn tab-teal active" role="tab" id="tab-ar-mathanecdotes-panel-calculus" aria-controls="ar-mathanecdotes-panel-calculus" aria-selected="true" tabindex="0" onclick="switchMathAnecdotes('calculus', this)">微积分发明权之争</button>
    <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathanecdotes-panel-poincare" aria-controls="ar-mathanecdotes-panel-poincare" aria-selected="false" tabindex="-1" onclick="switchMathAnecdotes('poincare', this)">庞加莱猜想百年恩怨</button>
    <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathanecdotes-panel-galois" aria-controls="ar-mathanecdotes-panel-galois" aria-selected="false" tabindex="-1" onclick="switchMathAnecdotes('galois', this)">伽罗瓦决斗</button>
    <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathanecdotes-panel-fermatnote" aria-controls="ar-mathanecdotes-panel-fermatnote" aria-selected="false" tabindex="-1" onclick="switchMathAnecdotes('fermatnote', this)">费马的挑衅</button>
    <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathanecdotes-panel-quintic" aria-controls="ar-mathanecdotes-panel-quintic" aria-selected="false" tabindex="-1" onclick="switchMathAnecdotes('quintic', this)">五次方程不可解</button>
    <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathanecdotes-panel-taxicab" aria-controls="ar-mathanecdotes-panel-taxicab" aria-selected="false" tabindex="-1" onclick="switchMathAnecdotes('taxicab', this)">拉马努金与1729</button>
    <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathanecdotes-panel-lostnotebook" aria-controls="ar-mathanecdotes-panel-lostnotebook" aria-selected="false" tabindex="-1" onclick="switchMathAnecdotes('lostnotebook', this)">迷失的手稿</button>
    <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathanecdotes-panel-cubic" aria-controls="ar-mathanecdotes-panel-cubic" aria-selected="false" tabindex="-1" onclick="switchMathAnecdotes('cubic', this)">三次方程的背叛</button>
    <button type="button" class="ai-tab-btn tab-yellow" role="tab" id="tab-ar-mathanecdotes-panel-cantorset" aria-controls="ar-mathanecdotes-panel-cantorset" aria-selected="false" tabindex="-1" onclick="switchMathAnecdotes('cantorset', this)">康托尔集合论</button>
    <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathanecdotes-panel-oneplustwo" aria-controls="ar-mathanecdotes-panel-oneplustwo" aria-selected="false" tabindex="-1" onclick="switchMathAnecdotes('oneplustwo', this)">陈景润：1+2</button>
    <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathanecdotes-panel-erdosnumber" aria-controls="ar-mathanecdotes-panel-erdosnumber" aria-selected="false" tabindex="-1" onclick="switchMathAnecdotes('erdosnumber', this)">埃尔德什数</button>
  </div>

{{< ar-panel "calculus" "active" "ar-mathanecdotes-panel-" "calculus" "数学文化/panels/anecdotes" >}}
{{< ar-panel "poincare" "-" "ar-mathanecdotes-panel-" "poincare" "数学文化/panels/anecdotes" >}}
{{< ar-panel "galois" "-" "ar-mathanecdotes-panel-" "galois" "数学文化/panels/anecdotes" >}}

{{< ar-panel "fermatnote" "-" "ar-mathanecdotes-panel-" "fermatnote" "数学文化/panels/anecdotes" >}}

{{< ar-panel "quintic" "-" "ar-mathanecdotes-panel-" "quintic" "数学文化/panels/anecdotes" >}}

{{< ar-panel "taxicab" "-" "ar-mathanecdotes-panel-" "taxicab" "数学文化/panels/anecdotes" >}}

{{< ar-panel "lostnotebook" "-" "ar-mathanecdotes-panel-" "lostnotebook" "数学文化/panels/anecdotes" >}}

{{< ar-panel "cubic" "-" "ar-mathanecdotes-panel-" "cubic" "数学文化/panels/anecdotes" >}}

{{< ar-panel "cantorset" "-" "ar-mathanecdotes-panel-" "cantorset" "数学文化/panels/anecdotes" >}}

{{< ar-panel "oneplustwo" "-" "ar-mathanecdotes-panel-" "oneplustwo" "数学文化/panels/anecdotes" >}}


{{< ar-panel "erdosnumber" "-" "ar-mathanecdotes-panel-" "erdosnumber" "数学文化/panels/anecdotes" >}}

</div>
</section>

<script>
function switchMathCulture(id, btn) {
  document.querySelectorAll('.ar-sec-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('.ar-section').forEach(function (s) { s.setAttribute('hidden', ''); });
  document.getElementById('ar-section-' + id).removeAttribute('hidden');
}

function switchMathAnecdotes(id, btn) {
  var group = btn.closest('.ai-tabs');
  group.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  group.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  var panel = group.querySelector('#ar-mathanecdotes-panel-' + id);
  panel.classList.add('active');
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(panel, { delimiters: [ {left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false} ], throwOnError: false });
  }
}

function switchMathProblems(id, btn) {
  var group = btn.closest('.ai-tabs');
  group.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  group.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  group.querySelector('#ar-mathproblems-panel-' + id).classList.add('active');
}

function switchMathPopular(id, btn) {
  var group = btn.closest('.ai-tabs');
  group.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  group.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  var panel = group.querySelector('#ar-mathpopular-panel-' + id);
  panel.classList.add('active');
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(panel, { delimiters: [ {left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false} ], throwOnError: false });
  }
}

function switchMathAwards(id, btn) {
  var group = btn.closest('.ai-tabs');
  group.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  group.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  group.querySelector('#ar-mathawards-panel-' + id).classList.add('active');
}

function switchMathEducation(id, btn) {
  var group = btn.closest('.ai-tabs');
  group.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  group.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  var panel = group.querySelector('#ar-matheducation-panel-' + id);
  panel.classList.add('active');
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(panel, { delimiters: [ {left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false} ], throwOnError: false });
  }
}

/* 从「数学大奖」名单跳转到「数学人物」中对应人物的面板 */
function gotoMathFigure(id) {
  var secBtn = document.getElementById('tab-ar-section-figures');
  if (!secBtn) return;
  switchMathCulture('figures', secBtn);
  var btn = document.getElementById('tab-ar-mathfigures-panel-' + id);
  var panel = document.getElementById('ar-mathfigures-panel-' + id);
  if (!btn || !panel) return;
  var era = btn.closest('details.fig-era');
  if (era) era.open = true;
  var sub = btn.closest('details.sub-era');
  if (sub) sub.open = true;
  switchMathFigures(id, btn);
  var sec = document.getElementById('ar-section-figures');
  if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* 在「数学轶事」内部跳转到另一条轶事 */
function gotoMathAnecdote(id) {
  var secBtn = document.getElementById('tab-ar-section-anecdotes');
  if (!secBtn) return;
  switchMathCulture('anecdotes', secBtn);
  var btn = document.getElementById('tab-ar-mathanecdotes-panel-' + id);
  if (!btn) return;
  switchMathAnecdotes(id, btn);
  var sec = document.getElementById('ar-section-anecdotes');
  if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function switchMathFigures(id, btn) {
  var group = btn.closest('.ai-tabs');
  group.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  group.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  var panel = document.getElementById('ar-mathfigures-panel-' + id);
  if (!panel) return;
  panel.classList.add('active');
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(panel, { delimiters: [ {left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false} ], throwOnError: false });
  }
}

/* ─── 数学人物：展开全部 / 收起全部 ─── */
function toggleAllFigEras(open) {
  var box = document.getElementById('ar-section-figures');
  if (!box) return;
  box.querySelectorAll('details.fig-era, details.sub-era').forEach(function (d) { d.open = open; });
}

/* ─── 数学人物：按人名检索（中文名 / 原名 / key / 生卒年） ─── */
(function () {
  var input = document.getElementById('fig-search');
  var hint = document.getElementById('fig-search-hint');
  var box = document.getElementById('ar-section-figures');
  if (!input || !box) return;

  /* 为每个按钮预存可检索文本：按钮名 + 面板里的原名/生卒/国籍 */
  var btns = Array.prototype.slice.call(box.querySelectorAll('.ai-tab-btn'));
  var rows = btns.map(function (b) {
    var key = (b.getAttribute('onclick') || '').match(/'([^']+)'/);
    key = key ? key[1] : '';
    var label = (b.textContent || '').trim();
    var panel = document.getElementById('ar-mathfigures-panel-' + key);
    var extra = '';
    if (panel) {
      /* 只取 fig-head 表格里的原名、生卒、国籍，避免把正文全量塞进来 */
      var head = panel.querySelector('.fig-head') || panel;
      extra = (head.textContent || '').replace(/\s+/g, ' ').slice(0, 400);
    }
    return { btn: b, key: key, label: label,
             hay: (label + ' ' + key + ' ' + extra).toLowerCase() };
  });

  /* 完全同名优先，其次名字包含，再次正文命中 */
  function rank(r, q) {
    var l = r.label.toLowerCase();
    if (l === q) return 0;
    if (l.indexOf(q) >= 0) return 1;
    return 2;
  }

  function clearMarks() {
    rows.forEach(function (r) {
      r.btn.classList.remove('fig-hide', 'fig-hit');
      r.btn.removeAttribute('data-fig-rank');
      var d = r.btn.closest('details');
      if (d) d.classList.remove('fig-hit');
    });
  }

  function apply(q) {
    q = q.trim().toLowerCase();
    clearMarks();
    if (!q) {
      if (hint) hint.textContent = '';
      box.querySelectorAll('details.fig-era, details.sub-era').forEach(function (d) {
        d.classList.remove('fig-hit');
        d.style.display = '';
      });
      return;
    }
    var hits = 0;
    var hitEras = new Set();
    rows.forEach(function (r) {
      if (r.hay.indexOf(q) >= 0) {
        r.btn.classList.add('fig-hit');
        r.btn.setAttribute('data-fig-rank', String(rank(r, q)));
        hits++;
        var era = r.btn.closest('details.fig-era');
        var sub = r.btn.closest('details.sub-era');
        if (era) { era.open = true; hitEras.add(era); }
        if (sub) { sub.open = true; hitEras.add(sub); }
      } else {
        r.btn.classList.add('fig-hide');
      }
    });
    hitEras.forEach(function (d) { d.classList.add('fig-hit'); });
    /* 完全无命中的子分组直接藏起来，避免留下大片空白 */
    box.querySelectorAll('details.sub-era').forEach(function (d) {
      var any = d.querySelector('.ai-tab-btn.fig-hit');
      d.style.display = any ? '' : 'none';
    });
    if (hint) hint.textContent = hits ? ('命中 ' + hits + ' 位' + (best ? '，最相关：' + best.label : '')) : '没有匹配的人物';
  }

  var best = null;

  /* 把同名/近名的命中排到所属分组的最前面 */
  function reorderHits() {
    if (!best) return;
    box.querySelectorAll('.ai-tab-btns').forEach(function (wrap) {
      var hits = Array.prototype.slice.call(wrap.querySelectorAll('.ai-tab-btn.fig-hit'));
      if (hits.length < 2) return;
      hits.sort(function (a, b) {
        var d = (parseInt(a.getAttribute('data-fig-rank') || '2', 10)) -
                (parseInt(b.getAttribute('data-fig-rank') || '2', 10));
        return d;
      });
      hits.forEach(function (btn) {
        wrap.insertBefore(btn, wrap.firstChild);
      });
    });
  }

  input.addEventListener('input', function () {
    best = null;
    apply(input.value);
    if (input.value.trim()) {
      var q = input.value.trim().toLowerCase();
      var cands = rows.filter(function (r) { return r.hay.indexOf(q) >= 0; });
      cands.sort(function (a, b) { return rank(a, q) - rank(b, q); });
      best = cands.length ? cands[0] : null;
      if (best) { reorderHits(); if (hint) hint.textContent = '命中 ' + cands.length + ' 位，最相关：' + best.label; }
    }
  });
  input.addEventListener('search', function () { input.dispatchEvent(new Event('input')); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; best = null; apply(''); }
  });

  /* 回车跳到最相关的那一位 */
  input.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    var target = best ? best.btn : box.querySelector('.ai-tab-btn.fig-hit');
    if (target) { target.click(); target.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  });
})();
</script>
