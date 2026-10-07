---
title: "数学文化"
hideTitle: true
math: true
description: "数学文化专题：刘徽、欧拉、高斯、诺特等数学家小传，希尔伯特 23 问题与千禧年难题，菲尔兹奖、阿贝尔奖、沃尔夫数学奖全部获奖者名单与授奖理由，以及三次数学危机、分形等数学科普与数学轶事。"
---

<h1 class="sr-only">数学文化</h1>

<div class="ar-section-switch ar-section-switch-five" role="tablist">
  <button type="button" class="ar-sec-btn sec-violet active" role="tab" id="tab-ar-section-figures" aria-controls="ar-section-figures" aria-selected="true" tabindex="0" onclick="switchMathCulture('figures', this)">数学人物</button>
  <button type="button" class="ar-sec-btn sec-blue" role="tab" id="tab-ar-section-problems" aria-controls="ar-section-problems" aria-selected="false" tabindex="-1" onclick="switchMathCulture('problems', this)">数学问题</button>
  <button type="button" class="ar-sec-btn sec-green" role="tab" id="tab-ar-section-popular" aria-controls="ar-section-popular" aria-selected="false" tabindex="-1" onclick="switchMathCulture('popular', this)">数学科普</button>
  <button type="button" class="ar-sec-btn sec-purple" role="tab" id="tab-ar-section-awards" aria-controls="ar-section-awards" aria-selected="false" tabindex="-1" onclick="switchMathCulture('awards', this)">数学大奖</button>
  <button type="button" class="ar-sec-btn sec-orange" role="tab" id="tab-ar-section-anecdotes" aria-controls="ar-section-anecdotes" aria-selected="false" tabindex="-1" onclick="switchMathCulture('anecdotes', this)">数学轶事</button>
</div>

<div class="ar-conjectures-divider"></div>

<section id="ar-section-figures" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-figures">
<div class="ai-tabs">
  <div class="fig-era-bar">
    <button type="button" class="fig-era-toggle" onclick="toggleAllEras(true)">展开全部</button>
    <button type="button" class="fig-era-toggle" onclick="toggleAllEras(false)">收起全部</button>
  </div>
  
  <details class="fig-era era-1" open>
    <summary class="fig-era-sum"><span class="fig-era-t">一、古代数学时期</span><span class="fig-era-span">约公元前6世纪以前</span><span class="fig-era-n">5 位</span></summary>
    <p class="fig-era-desc">古埃及、巴比伦、希腊、中国、印度等早期文明。数学以实用为主，涉及计数、测量、简单几何和算术，还没有形成严格的逻辑体系。</p>
    <div class="ai-tab-btns" role="tablist">
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-apollonius" aria-controls="ar-mathfigures-panel-apollonius" aria-selected="true" tabindex="0" onclick="switchMathFigures('apollonius', this)">阿波罗尼奥斯</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-archimedes" aria-controls="ar-mathfigures-panel-archimedes" aria-selected="false" tabindex="-1" onclick="switchMathFigures('archimedes', this)">阿基米德</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-pythagoras" aria-controls="ar-mathfigures-panel-pythagoras" aria-selected="false" tabindex="-1" onclick="switchMathFigures('pythagoras', this)">毕达哥拉斯</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-euclid" aria-controls="ar-mathfigures-panel-euclid" aria-selected="false" tabindex="-1" onclick="switchMathFigures('euclid', this)">欧几里得</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-thales" aria-controls="ar-mathfigures-panel-thales" aria-selected="false" tabindex="-1" onclick="switchMathFigures('thales', this)">泰勒斯</button>
    </div>
  </details>
  
  <details class="fig-era era-2">
    <summary class="fig-era-sum"><span class="fig-era-t">二、中世纪数学时期</span><span class="fig-era-span">约5世纪—15世纪</span><span class="fig-era-n">2 位</span></summary>
    <p class="fig-era-desc">欧洲进入“黑暗时代”，数学发展缓慢；中国、印度、阿拉伯地区的数学蓬勃发展，如印度数码、阿拉伯代数、中国方程求解等。这一时期数学开始从具体计算走向系统性理论。</p>
    <div class="ai-tab-btns" role="tablist">
      <button type="button" class="ai-tab-btn tab-red active" role="tab" id="tab-ar-mathfigures-panel-liuhui" aria-controls="ar-mathfigures-panel-liuhui" aria-selected="false" tabindex="-1" onclick="switchMathFigures('liuhui', this)">刘徽</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-zuchongzhi" aria-controls="ar-mathfigures-panel-zuchongzhi" aria-selected="false" tabindex="-1" onclick="switchMathFigures('zuchongzhi', this)">祖冲之</button>
    </div>
  </details>
  
  <details class="fig-era era-3">
    <summary class="fig-era-sum"><span class="fig-era-t">三、近代数学时期</span><span class="fig-era-span">约16世纪—18世纪</span><span class="fig-era-n">6 位</span></summary>
    <p class="fig-era-desc">以文艺复兴和科学革命为背景，代数和几何取得重大突破，尤其是笛卡尔创立解析几何、牛顿和莱布尼茨创立微积分，数学进入变量和函数的时代。</p>
    <div class="ai-tab-btns" role="tablist">
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-descartes" aria-controls="ar-mathfigures-panel-descartes" aria-selected="false" tabindex="-1" onclick="switchMathFigures('descartes', this)">笛卡尔</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-fermat" aria-controls="ar-mathfigures-panel-fermat" aria-selected="false" tabindex="-1" onclick="switchMathFigures('fermat', this)">费马</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-lagrange" aria-controls="ar-mathfigures-panel-lagrange" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lagrange', this)">拉格朗日</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-leibniz" aria-controls="ar-mathfigures-panel-leibniz" aria-selected="false" tabindex="-1" onclick="switchMathFigures('leibniz', this)">莱布尼茨</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-newton" aria-controls="ar-mathfigures-panel-newton" aria-selected="false" tabindex="-1" onclick="switchMathFigures('newton', this)">牛顿</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-euler" aria-controls="ar-mathfigures-panel-euler" aria-selected="false" tabindex="-1" onclick="switchMathFigures('euler', this)">欧拉</button>
    </div>
  </details>
  
  <details class="fig-era era-4">
    <summary class="fig-era-sum"><span class="fig-era-t">四、现代数学时期</span><span class="fig-era-span">约19世纪至今</span><span class="fig-era-n">143 位</span></summary>
    <p class="fig-era-desc">以严格化、抽象化与结构化为特征：非欧几何、群论、集合论、拓扑学与泛函分析相继诞生，数学分化为数十个分支，并成为现代科学与技术的基础语言。</p>
    <div class="ai-tab-btns" role="tablist">
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-abel" aria-controls="ar-mathfigures-panel-abel" aria-selected="false" tabindex="-1" onclick="switchMathFigures('abel', this)">阿贝尔</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-atiyah" aria-controls="ar-mathfigures-panel-atiyah" aria-selected="false" tabindex="-1" onclick="switchMathFigures('atiyah', this)">阿蒂亚</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-ahlfors" aria-controls="ar-mathfigures-panel-ahlfors" aria-selected="false" tabindex="-1" onclick="switchMathFigures('ahlfors', this)">阿尔福斯</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-erdos" aria-controls="ar-mathfigures-panel-erdos" aria-selected="false" tabindex="-1" onclick="switchMathFigures('erdos', this)">埃尔德什</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-eliashberg" aria-controls="ar-mathfigures-panel-eliashberg" aria-selected="false" tabindex="-1" onclick="switchMathFigures('eliashberg', this)">埃利亚什伯格</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-eilenberg" aria-controls="ar-mathfigures-panel-eilenberg" aria-selected="false" tabindex="-1" onclick="switchMathFigures('eilenberg', this)">艾伦伯格</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-alon" aria-controls="ar-mathfigures-panel-alon" aria-selected="false" tabindex="-1" onclick="switchMathFigures('alon', this)">阿隆</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-arnold" aria-controls="ar-mathfigures-panel-arnold" aria-selected="false" tabindex="-1" onclick="switchMathFigures('arnold', this)">阿诺德</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-okounkov" aria-controls="ar-mathfigures-panel-okounkov" aria-selected="false" tabindex="-1" onclick="switchMathFigures('okounkov', this)">奥孔科夫</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-aschbacher" aria-controls="ar-mathfigures-panel-aschbacher" aria-selected="false" tabindex="-1" onclick="switchMathFigures('aschbacher', this)">阿施巴赫</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-artin" aria-controls="ar-mathfigures-panel-artin" aria-selected="false" tabindex="-1" onclick="switchMathFigures('artin', this)">阿廷</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-avila" aria-controls="ar-mathfigures-panel-avila" aria-selected="false" tabindex="-1" onclick="switchMathFigures('avila', this)">阿维拉</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-bhargava" aria-controls="ar-mathfigures-panel-bhargava" aria-selected="false" tabindex="-1" onclick="switchMathFigures('bhargava', this)">巴尔加瓦</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-kashiwara" aria-controls="ar-mathfigures-panel-kashiwara" aria-selected="false" tabindex="-1" onclick="switchMathFigures('kashiwara', this)">柏原正树</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-bombieri" aria-controls="ar-mathfigures-panel-bombieri" aria-selected="false" tabindex="-1" onclick="switchMathFigures('bombieri', this)">邦别里</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-baker" aria-controls="ar-mathfigures-panel-baker" aria-selected="false" tabindex="-1" onclick="switchMathFigures('baker', this)">贝克</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-beilinson" aria-controls="ar-mathfigures-panel-beilinson" aria-selected="false" tabindex="-1" onclick="switchMathFigures('beilinson', this)">贝林森</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-birkar" aria-controls="ar-mathfigures-panel-birkar" aria-selected="false" tabindex="-1" onclick="switchMathFigures('birkar', this)">比尔卡尔</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-bernstein" aria-controls="ar-mathfigures-panel-bernstein" aria-selected="false" tabindex="-1" onclick="switchMathFigures('bernstein', this)">伯恩斯坦</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-borcherds" aria-controls="ar-mathfigures-panel-borcherds" aria-selected="false" tabindex="-1" onclick="switchMathFigures('borcherds', this)">博切尔兹</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-bott" aria-controls="ar-mathfigures-panel-bott" aria-selected="false" tabindex="-1" onclick="switchMathFigures('bott', this)">博特</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-bourgain" aria-controls="ar-mathfigures-panel-bourgain" aria-selected="false" tabindex="-1" onclick="switchMathFigures('bourgain', this)">布尔甘</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-chern" aria-controls="ar-mathfigures-panel-chern" aria-selected="false" tabindex="-1" onclick="switchMathFigures('chern', this)">陈省身</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-douglas" aria-controls="ar-mathfigures-panel-douglas" aria-selected="false" tabindex="-1" onclick="switchMathFigures('douglas', this)">道格拉斯</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-drinfeld" aria-controls="ar-mathfigures-panel-drinfeld" aria-selected="false" tabindex="-1" onclick="switchMathFigures('drinfeld', this)">德林费尔德</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-deligne" aria-controls="ar-mathfigures-panel-deligne" aria-selected="false" tabindex="-1" onclick="switchMathFigures('deligne', this)">德利涅</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-deng" aria-controls="ar-mathfigures-panel-deng" aria-selected="false" tabindex="-1" onclick="switchMathFigures('deng', this)">邓煜</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-degiorgi" aria-controls="ar-mathfigures-panel-degiorgi" aria-selected="false" tabindex="-1" onclick="switchMathFigures('degiorgi', this)">德乔治</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-tits" aria-controls="ar-mathfigures-panel-tits" aria-selected="false" tabindex="-1" onclick="switchMathFigures('tits', this)">蒂茨</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-duminilcopin" aria-controls="ar-mathfigures-panel-duminilcopin" aria-selected="false" tabindex="-1" onclick="switchMathFigures('duminilcopin', this)">迪米尼-科潘</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-daubechies" aria-controls="ar-mathfigures-panel-daubechies" aria-selected="false" tabindex="-1" onclick="switchMathFigures('daubechies', this)">多贝西</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-faltings" aria-controls="ar-mathfigures-panel-faltings" aria-selected="false" tabindex="-1" onclick="switchMathFigures('faltings', this)">法尔廷斯</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-fefferman" aria-controls="ar-mathfigures-panel-fefferman" aria-selected="false" tabindex="-1" onclick="switchMathFigures('fefferman', this)">费弗曼</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-figalli" aria-controls="ar-mathfigures-panel-figalli" aria-selected="false" tabindex="-1" onclick="switchMathFigures('figalli', this)">菲加利</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-furstenberg" aria-controls="ar-mathfigures-panel-furstenberg" aria-selected="false" tabindex="-1" onclick="switchMathFigures('furstenberg', this)">富尔斯滕伯格</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-freedman" aria-controls="ar-mathfigures-panel-freedman" aria-selected="false" tabindex="-1" onclick="switchMathFigures('freedman', this)">弗里德曼</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-gelfand" aria-controls="ar-mathfigures-panel-gelfand" aria-selected="false" tabindex="-1" onclick="switchMathFigures('gelfand', this)">盖尔范德</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-galois" aria-controls="ar-mathfigures-panel-galois" aria-selected="false" tabindex="-1" onclick="switchMathFigures('galois', this)">伽罗瓦</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-gowers" aria-controls="ar-mathfigures-panel-gowers" aria-selected="false" tabindex="-1" onclick="switchMathFigures('gowers', this)">高尔斯</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-gauss" aria-controls="ar-mathfigures-panel-gauss" aria-selected="false" tabindex="-1" onclick="switchMathFigures('gauss', this)">高斯</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-godel" aria-controls="ar-mathfigures-panel-godel" aria-selected="false" tabindex="-1" onclick="switchMathFigures('godel', this)">哥德尔</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-griffiths" aria-controls="ar-mathfigures-panel-griffiths" aria-selected="false" tabindex="-1" onclick="switchMathFigures('griffiths', this)">格里菲斯</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-gromov" aria-controls="ar-mathfigures-panel-gromov" aria-selected="false" tabindex="-1" onclick="switchMathFigures('gromov', this)">格罗莫夫</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-grothendieck" aria-controls="ar-mathfigures-panel-grothendieck" aria-selected="false" tabindex="-1" onclick="switchMathFigures('grothendieck', this)">格罗滕迪克</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-hironaka" aria-controls="ar-mathfigures-panel-hironaka" aria-selected="false" tabindex="-1" onclick="switchMathFigures('hironaka', this)">广中平祐</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-hairer" aria-controls="ar-mathfigures-panel-hairer" aria-selected="false" tabindex="-1" onclick="switchMathFigures('hairer', this)">海雷尔</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-hormander" aria-controls="ar-mathfigures-panel-hormander" aria-selected="false" tabindex="-1" onclick="switchMathFigures('hormander', this)">赫尔曼德</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-wiles" aria-controls="ar-mathfigures-panel-wiles" aria-selected="false" tabindex="-1" onclick="switchMathFigures('wiles', this)">怀尔斯</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-hua" aria-controls="ar-mathfigures-panel-hua" aria-selected="false" tabindex="-1" onclick="switchMathFigures('hua', this)">华罗庚</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-whitney" aria-controls="ar-mathfigures-panel-whitney" aria-selected="false" tabindex="-1" onclick="switchMathFigures('whitney', this)">惠特尼</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-cartan" aria-controls="ar-mathfigures-panel-cartan" aria-selected="false" tabindex="-1" onclick="switchMathFigures('cartan', this)">嘉当</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-calderon" aria-controls="ar-mathfigures-panel-calderon" aria-selected="false" tabindex="-1" onclick="switchMathFigures('calderon', this)">卡尔德隆</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-carleson" aria-controls="ar-mathfigures-panel-carleson" aria-selected="false" tabindex="-1" onclick="switchMathFigures('carleson', this)">卡尔森</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-caffarelli" aria-controls="ar-mathfigures-panel-caffarelli" aria-selected="false" tabindex="-1" onclick="switchMathFigures('caffarelli', this)">卡法雷利</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-keller" aria-controls="ar-mathfigures-panel-keller" aria-selected="false" tabindex="-1" onclick="switchMathFigures('keller', this)">凯勒</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-kazhdan" aria-controls="ar-mathfigures-panel-kazhdan" aria-selected="false" tabindex="-1" onclick="switchMathFigures('kazhdan', this)">卡日丹</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-cohen" aria-controls="ar-mathfigures-panel-cohen" aria-selected="false" tabindex="-1" onclick="switchMathFigures('cohen', this)">科恩</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-kolmogorov" aria-controls="ar-mathfigures-panel-kolmogorov" aria-selected="false" tabindex="-1" onclick="switchMathFigures('kolmogorov', this)">柯尔莫哥洛夫</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-krein" aria-controls="ar-mathfigures-panel-krein" aria-selected="false" tabindex="-1" onclick="switchMathFigures('krein', this)">克赖因</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-cauchy" aria-controls="ar-mathfigures-panel-cauchy" aria-selected="false" tabindex="-1" onclick="switchMathFigures('cauchy', this)">柯西</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-kontsevich" aria-controls="ar-mathfigures-panel-kontsevich" aria-selected="false" tabindex="-1" onclick="switchMathFigures('kontsevich', this)">孔采维奇</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-connes" aria-controls="ar-mathfigures-panel-connes" aria-selected="false" tabindex="-1" onclick="switchMathFigures('connes', this)">孔涅</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-quillen" aria-controls="ar-mathfigures-panel-quillen" aria-selected="false" tabindex="-1" onclick="switchMathFigures('quillen', this)">奎伦</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-lafforgue" aria-controls="ar-mathfigures-panel-lafforgue" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lafforgue', this)">拉福格</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-lewy" aria-controls="ar-mathfigures-panel-lewy" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lewy', this)">莱维</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-lax" aria-controls="ar-mathfigures-panel-lax" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lax', this)">拉克斯</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-ramanujan" aria-controls="ar-mathfigures-panel-ramanujan" aria-selected="false" tabindex="-1" onclick="switchMathFigures('ramanujan', this)">拉马努金</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-langlands" aria-controls="ar-mathfigures-panel-langlands" aria-selected="false" tabindex="-1" onclick="switchMathFigures('langlands', this)">朗兰兹</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-lawler" aria-controls="ar-mathfigures-panel-lawler" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lawler', this)">劳勒</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-legall" aria-controls="ar-mathfigures-panel-legall" aria-selected="false" tabindex="-1" onclick="switchMathFigures('legall', this)">勒加尔</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-leray" aria-controls="ar-mathfigures-panel-leray" aria-selected="false" tabindex="-1" onclick="switchMathFigures('leray', this)">勒雷</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-riemann" aria-controls="ar-mathfigures-panel-riemann" aria-selected="false" tabindex="-1" onclick="switchMathFigures('riemann', this)">黎曼</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-lindenstrauss" aria-controls="ar-mathfigures-panel-lindenstrauss" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lindenstrauss', this)">林登施特劳斯</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-lions" aria-controls="ar-mathfigures-panel-lions" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lions', this)">利翁斯</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-roth" aria-controls="ar-mathfigures-panel-roth" aria-selected="false" tabindex="-1" onclick="switchMathFigures('roth', this)">罗特</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-lovasz" aria-controls="ar-mathfigures-panel-lovasz" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lovasz', this)">洛瓦兹</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-lusztig" aria-controls="ar-mathfigures-panel-lusztig" aria-selected="false" tabindex="-1" onclick="switchMathFigures('lusztig', this)">卢斯蒂格</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-margulis" aria-controls="ar-mathfigures-panel-margulis" aria-selected="false" tabindex="-1" onclick="switchMathFigures('margulis', this)">马尔古利斯</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-mcmullen" aria-controls="ar-mathfigures-panel-mcmullen" aria-selected="false" tabindex="-1" onclick="switchMathFigures('mcmullen', this)">麦克马伦</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-mumford" aria-controls="ar-mathfigures-panel-mumford" aria-selected="false" tabindex="-1" onclick="switchMathFigures('mumford', this)">芒福德</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-maynard" aria-controls="ar-mathfigures-panel-maynard" aria-selected="false" tabindex="-1" onclick="switchMathFigures('maynard', this)">梅纳德</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-meyer" aria-controls="ar-mathfigures-panel-meyer" aria-selected="false" tabindex="-1" onclick="switchMathFigures('meyer', this)">梅耶</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-milnor" aria-controls="ar-mathfigures-panel-milnor" aria-selected="false" tabindex="-1" onclick="switchMathFigures('milnor', this)">米尔诺</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-mirzakhani" aria-controls="ar-mathfigures-panel-mirzakhani" aria-selected="false" tabindex="-1" onclick="switchMathFigures('mirzakhani', this)">米尔扎哈尼</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-mostow" aria-controls="ar-mathfigures-panel-mostow" aria-selected="false" tabindex="-1" onclick="switchMathFigures('mostow', this)">莫斯托</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-moser" aria-controls="ar-mathfigures-panel-moser" aria-selected="false" tabindex="-1" onclick="switchMathFigures('moser', this)">莫泽</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-nash" aria-controls="ar-mathfigures-panel-nash" aria-selected="false" tabindex="-1" onclick="switchMathFigures('nash', this)">纳什</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-nirenberg" aria-controls="ar-mathfigures-panel-nirenberg" aria-selected="false" tabindex="-1" onclick="switchMathFigures('nirenberg', this)">尼伦伯格</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-noether" aria-controls="ar-mathfigures-panel-noether" aria-selected="false" tabindex="-1" onclick="switchMathFigures('noether', this)">诺特</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-novikov" aria-controls="ar-mathfigures-panel-novikov" aria-selected="false" tabindex="-1" onclick="switchMathFigures('novikov', this)">诺维科夫</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-pardon" aria-controls="ar-mathfigures-panel-pardon" aria-selected="false" tabindex="-1" onclick="switchMathFigures('pardon', this)">帕登</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-perelman" aria-controls="ar-mathfigures-panel-perelman" aria-selected="false" tabindex="-1" onclick="switchMathFigures('perelman', this)">佩雷尔曼</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-piatetski" aria-controls="ar-mathfigures-panel-piatetski" aria-selected="false" tabindex="-1" onclick="switchMathFigures('piatetski', this)">皮亚捷茨基-夏皮罗</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-tsimerman" aria-controls="ar-mathfigures-panel-tsimerman" aria-selected="false" tabindex="-1" onclick="switchMathFigures('tsimerman', this)">齐默曼</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-jones" aria-controls="ar-mathfigures-panel-jones" aria-selected="false" tabindex="-1" onclick="switchMathFigures('jones', this)">琼斯</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-yau" aria-controls="ar-mathfigures-panel-yau" aria-selected="false" tabindex="-1" onclick="switchMathFigures('yau', this)">丘成桐</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-serre" aria-controls="ar-mathfigures-panel-serre" aria-selected="false" tabindex="-1" onclick="switchMathFigures('serre', this)">塞尔</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-selberg" aria-controls="ar-mathfigures-panel-selberg" aria-selected="false" tabindex="-1" onclick="switchMathFigures('selberg', this)">塞尔伯格</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-szemeredi" aria-controls="ar-mathfigures-panel-szemeredi" aria-selected="false" tabindex="-1" onclick="switchMathFigures('szemeredi', this)">塞梅雷迪</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-sarnak" aria-controls="ar-mathfigures-panel-sarnak" aria-selected="false" tabindex="-1" onclick="switchMathFigures('sarnak', this)">萨纳克</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-mori" aria-controls="ar-mathfigures-panel-mori" aria-selected="false" tabindex="-1" onclick="switchMathFigures('mori', this)">森重文</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-thurston" aria-controls="ar-mathfigures-panel-thurston" aria-selected="false" tabindex="-1" onclick="switchMathFigures('thurston', this)">瑟斯顿</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-shelah" aria-controls="ar-mathfigures-panel-shelah" aria-selected="false" tabindex="-1" onclick="switchMathFigures('shelah', this)">沙拉赫</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-sullivan" aria-controls="ar-mathfigures-panel-sullivan" aria-selected="false" tabindex="-1" onclick="switchMathFigures('sullivan', this)">沙利文</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-shamir" aria-controls="ar-mathfigures-panel-shamir" aria-selected="false" tabindex="-1" onclick="switchMathFigures('shamir', this)">沙米尔</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-schoen" aria-controls="ar-mathfigures-panel-schoen" aria-selected="false" tabindex="-1" onclick="switchMathFigures('schoen', this)">舍恩</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-stein" aria-controls="ar-mathfigures-panel-stein" aria-selected="false" tabindex="-1" onclick="switchMathFigures('stein', this)">施泰因</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-schwartz" aria-controls="ar-mathfigures-panel-schwartz" aria-selected="false" tabindex="-1" onclick="switchMathFigures('schwartz', this)">施瓦茨</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-scholze" aria-controls="ar-mathfigures-panel-scholze" aria-selected="false" tabindex="-1" onclick="switchMathFigures('scholze', this)">朔尔策</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-smale" aria-controls="ar-mathfigures-panel-smale" aria-selected="false" tabindex="-1" onclick="switchMathFigures('smale', this)">斯梅尔</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-smirnov" aria-controls="ar-mathfigures-panel-smirnov" aria-selected="false" tabindex="-1" onclick="switchMathFigures('smirnov', this)">斯米尔诺夫</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-tate" aria-controls="ar-mathfigures-panel-tate" aria-selected="false" tabindex="-1" onclick="switchMathFigures('tate', this)">泰特</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-talagrand" aria-controls="ar-mathfigures-panel-talagrand" aria-selected="false" tabindex="-1" onclick="switchMathFigures('talagrand', this)">塔拉格兰</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-donaldson" aria-controls="ar-mathfigures-panel-donaldson" aria-selected="false" tabindex="-1" onclick="switchMathFigures('donaldson', this)">唐纳森</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-thompson" aria-controls="ar-mathfigures-panel-thompson" aria-selected="false" tabindex="-1" onclick="switchMathFigures('thompson', this)">汤普森</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-tao" aria-controls="ar-mathfigures-panel-tao" aria-selected="false" tabindex="-1" onclick="switchMathFigures('tao', this)">陶哲轩</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-turing" aria-controls="ar-mathfigures-panel-turing" aria-selected="false" tabindex="-1" onclick="switchMathFigures('turing', this)">图灵</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-thom" aria-controls="ar-mathfigures-panel-thom" aria-selected="false" tabindex="-1" onclick="switchMathFigures('thom', this)">托姆</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-varadhan" aria-controls="ar-mathfigures-panel-varadhan" aria-selected="false" tabindex="-1" onclick="switchMathFigures('varadhan', this)">瓦拉丹</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-wanghong" aria-controls="ar-mathfigures-panel-wanghong" aria-selected="false" tabindex="-1" onclick="switchMathFigures('wanghong', this)">王虹</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-werner" aria-controls="ar-mathfigures-panel-werner" aria-selected="false" tabindex="-1" onclick="switchMathFigures('werner', this)">维尔纳</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-wigderson" aria-controls="ar-mathfigures-panel-wigderson" aria-selected="false" tabindex="-1" onclick="switchMathFigures('wigderson', this)">维格森</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-villani" aria-controls="ar-mathfigures-panel-villani" aria-selected="false" tabindex="-1" onclick="switchMathFigures('villani', this)">维拉尼</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-witten" aria-controls="ar-mathfigures-panel-witten" aria-selected="false" tabindex="-1" onclick="switchMathFigures('witten', this)">威滕</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-viazovska" aria-controls="ar-mathfigures-panel-viazovska" aria-selected="false" tabindex="-1" onclick="switchMathFigures('viazovska', this)">维亚佐夫斯卡</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-weil" aria-controls="ar-mathfigures-panel-weil" aria-selected="false" tabindex="-1" onclick="switchMathFigures('weil', this)">韦伊</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-venkatesh" aria-controls="ar-mathfigures-panel-venkatesh" aria-selected="false" tabindex="-1" onclick="switchMathFigures('venkatesh', this)">文卡特什</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-voevodsky" aria-controls="ar-mathfigures-panel-voevodsky" aria-selected="false" tabindex="-1" onclick="switchMathFigures('voevodsky', this)">沃埃沃德斯基</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-ngo" aria-controls="ar-mathfigures-panel-ngo" aria-selected="false" tabindex="-1" onclick="switchMathFigures('ngo', this)">吴宝珠</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-uhlenbeck" aria-controls="ar-mathfigures-panel-uhlenbeck" aria-selected="false" tabindex="-1" onclick="switchMathFigures('uhlenbeck', this)">乌伦贝克</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-kodaira" aria-controls="ar-mathfigures-panel-kodaira" aria-selected="false" tabindex="-1" onclick="switchMathFigures('kodaira', this)">小平邦彦</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-hirzebruch" aria-controls="ar-mathfigures-panel-hirzebruch" aria-selected="false" tabindex="-1" onclick="switchMathFigures('hirzebruch', this)">希策布鲁赫</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-hilbert" aria-controls="ar-mathfigures-panel-hilbert" aria-selected="false" tabindex="-1" onclick="switchMathFigures('hilbert', this)">希尔伯特</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-siegel" aria-controls="ar-mathfigures-panel-siegel" aria-selected="false" tabindex="-1" onclick="switchMathFigures('siegel', this)">西格尔</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-sinai" aria-controls="ar-mathfigures-panel-sinai" aria-selected="false" tabindex="-1" onclick="switchMathFigures('sinai', this)">西奈</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-singer" aria-controls="ar-mathfigures-panel-singer" aria-selected="false" tabindex="-1" onclick="switchMathFigures('singer', this)">辛格</button>
      <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathfigures-panel-huh" aria-controls="ar-mathfigures-panel-huh" aria-selected="false" tabindex="-1" onclick="switchMathFigures('huh', this)">许埈珥</button>
      <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathfigures-panel-arthur" aria-controls="ar-mathfigures-panel-arthur" aria-selected="false" tabindex="-1" onclick="switchMathFigures('arthur', this)">亚瑟</button>
      <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathfigures-panel-ito" aria-controls="ar-mathfigures-panel-ito" aria-selected="false" tabindex="-1" onclick="switchMathFigures('ito', this)">伊藤清</button>
      <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-mathfigures-panel-yoccoz" aria-controls="ar-mathfigures-panel-yoccoz" aria-selected="false" tabindex="-1" onclick="switchMathFigures('yoccoz', this)">约科兹</button>
      <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathfigures-panel-zelmanov" aria-controls="ar-mathfigures-panel-zelmanov" aria-selected="false" tabindex="-1" onclick="switchMathFigures('zelmanov', this)">泽尔马诺夫</button>
      <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathfigures-panel-zariski" aria-controls="ar-mathfigures-panel-zariski" aria-selected="false" tabindex="-1" onclick="switchMathFigures('zariski', this)">扎里斯基</button>
      <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-mathfigures-panel-sato" aria-controls="ar-mathfigures-panel-sato" aria-selected="false" tabindex="-1" onclick="switchMathFigures('sato', this)">佐藤干夫</button>
    </div>
  </details>
  

  <div id="ar-mathfigures-panel-apollonius" class="ai-tab-panel active" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-apollonius">
<div class="agent-intro">
<h2>阿波罗尼奥斯：圆锥曲线之父</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>出生地</strong></td><td>佩尔加（Perga，今土耳其境内）</td></tr>
<tr><td><strong>活动地</strong></td><td>亚历山大城</td></tr>
<tr><td><strong>身份</strong></td><td>数学家、天文学家，被称为"大几何学家"</td></tr>
<tr><td><strong>代表作</strong></td><td>《圆锥曲线论》（Conics，8卷）</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/apollonius.webp" width="360" height="373" alt="阿波罗尼奥斯" loading="lazy"><figcaption>阿波罗尼奥斯</figcaption></figure>
</div>

<h3>一、《圆锥曲线论》</h3>
<p>取一个圆锥面，用不同角度的平面去截，可得到三种曲线——阿波罗尼奥斯是第一个<strong>用统一方式系统研究这三种曲线</strong>的人，并给出了沿用至今的命名：<strong>椭圆（ellipse）</strong>、<strong>抛物线（parabola）</strong>、<strong>双曲线（hyperbola）</strong>。</p>

<h3>二、历史的"重逢"</h3>
<p>阿波罗尼奥斯的成果在古代被评价为"最艰深但也最完美"。此后近两千年，圆锥曲线一直被当作"纯智力体操"。直到17世纪，<strong>开普勒发现行星沿椭圆轨道运行</strong>，<strong>伽利略发现抛出的物体走抛物线</strong>，人们才恍然大悟：宇宙的运行法则，早已被这位希腊人研究透了。</p>
</div>
</div>

<div id="ar-mathfigures-panel-archimedes" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-archimedes">
<div class="agent-intro">
<h2>阿基米德：古代最伟大的数学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>出生地</strong></td><td>西西里岛的叙拉古（Syracuse）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家、物理学家、发明家、工程师</td></tr>
<tr><td><strong>主要领域</strong></td><td>几何学（穷竭法）、力学、流体静力学、数理天文</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/archimedes.webp" width="347" height="460" alt="阿基米德" loading="lazy"><figcaption>阿基米德</figcaption></figure>
</div>

<h3>一、几何学：直逼微积分的穷竭法</h3>
<p>他用正96边形"夹逼"圆周，证明 223/71 &lt; π &lt; 22/7，这是人类第一次为π建立严格的上下界。<strong>球体积公式</strong>：球的体积等于其外切圆柱体积的2/3（V=4/3·πr³），他视此为平生绝作。</p>

<h3>二、流体静力学：阿基米德原理</h3>
<p>"浸在流体中的物体受到向上的浮力，其大小等于排开流体的重量。"这是人类历史上第一条定量的物理定律。</p>

<h3>三、力学：杠杆定律与重心理论</h3>
<p>他给出了杠杆平衡的严格数学证明，留下了那句豪言：<strong>"给我一个支点，我就能撬动地球。"</strong></p>
</div>
</div>

<div id="ar-mathfigures-panel-pythagoras" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-pythagoras">
<div class="agent-intro">
<h2>毕达哥拉斯："万物皆数"的神秘数学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>出生地</strong></td><td>萨摩斯岛（今属希腊）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家、哲学家，毕达哥拉斯学派创始人</td></tr>
<tr><td><strong>主要领域</strong></td><td>几何学、数论、音乐理论、天文学</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/pythagoras.webp" width="345" height="460" alt="毕达哥拉斯" loading="lazy"><figcaption>毕达哥拉斯</figcaption></figure>
</div>

<h3>一、勾股定理</h3>
<p>直角三角形两直角边的平方和等于斜边的平方。毕达哥拉斯学派首次给出了普遍的证明，使它从经验公式升格为数学定理。</p>

<h3>二、"万物皆数"与音乐理论</h3>
<p>学派发现：弦长成简单整数比时，声音才和谐。这一发现震惊了毕达哥拉斯：连音乐这样"感性"的东西都服从数的规律，那么宇宙万物必然都由数支配。由此诞生了<strong>"和谐宇宙"</strong>的观念。</p>

<h3>三、一次思想地震：无理数的发现</h3>
<p>学派成员发现：正方形的对角线与边长之比（√2）无法表示为任何整数之比。这个"不可公度"的发现动摇了学派的根基，引发了历史上<strong>第一次数学危机</strong>。</p>
</div>
</div>

<div id="ar-mathfigures-panel-euclid" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-euclid">
<div class="agent-intro">
<h2>欧几里得：几何学的"立法者"</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>活动地</strong></td><td>埃及亚历山大城（托勒密王朝时期）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家，被称为"几何学之父"</td></tr>
<tr><td><strong>代表作</strong></td><td>《几何原本》（Elements，13卷）</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/euclid.webp" width="360" height="301" alt="欧几里得" loading="lazy"><figcaption>欧几里得</figcaption></figure>
</div>

<h3>一、《几何原本》——公理化方法的诞生</h3>
<p>全书以23个定义、5条公设、5条公理为根基。著名的第五公设（平行公设）后来引发了两千年的争论，最终在19世纪催生了<strong>非欧几何</strong>。每一个命题都从已有命题严格推出，知识因此成为一座"只靠逻辑就能站立"的大厦。</p>

<h3>二、影响与纪念</h3>
<p>自1482年首次印刷出版以来，《几何原本》被译成世界上几乎所有主要语言，明代徐光启与利玛窦合译了前6卷（1607年），"几何"一词即由此而来。月球和火星上都有以他命名的环形山；欧洲空间局2019年发射的空间望远镜被命名为"<strong>欧几里得号</strong>"（Euclid）。</p>
</div>
</div>

<div id="ar-mathfigures-panel-thales" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-thales">
<div class="agent-intro">
<h2>泰勒斯：西方"科学之父"与第一位数学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>出生地</strong></td><td>米利都（今土耳其境内）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家、天文学家、哲学家，"希腊七贤"之首</td></tr>
<tr><td><strong>主要领域</strong></td><td>几何学、天文学、自然哲学</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/thales.webp" width="302" height="460" alt="泰勒斯" loading="lazy"><figcaption>泰勒斯</figcaption></figure>
</div>

<h3>一、从"测量术"到"证明术"</h3>
<p>埃及人量地、巴比伦人算数，都只是经验法则；泰勒斯的贡献在于<strong>把几何命题变成了可逻辑证明的定理</strong>，他因此被视为<strong>第一位数学家</strong>。以他命名或归于他的定理包括：泰勒斯定理（半圆上的圆周角是直角）、等腰三角形两底角相等、对顶角相等、直径平分圆。</p>

<h3>二、影响与纪念</h3>
<p>泰勒斯开创的"<strong>用证明说话</strong>"的理性传统，经由毕达哥拉斯、欧几里得等人发扬，最终形成了整个西方数学与科学的基本范式。月球上有一座环形山以他的名字命名（Thales）。</p>
</div>
</div>

<div id="ar-mathfigures-panel-liuhui" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-liuhui">
<div class="agent-intro">
<h2>刘徽：中国古代数学理论的奠基人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>时代</strong></td><td>魏晋时期</td></tr>
<tr><td><strong>籍贯</strong></td><td>淄乡（今山东邹平一带）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家</td></tr>
<tr><td><strong>代表作</strong></td><td>《九章算术注》（263年）、《海岛算经》</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/liuhui.webp" width="360" height="270" alt="刘徽" loading="lazy"><figcaption>刘徽</figcaption></figure>
</div>

<h3>一、割圆术：中国的"穷竭法"</h3>
<p>刘徽从圆内接正六边形出发，不断倍增边数，用多边形面积逐步逼近圆面积：<strong>"割之弥细，所失弥少，割之又割，以至于不可割，则与圆周合体而无所失矣。"</strong>这正是极限思想的精彩表述。他算到正192边形，得出 π≈3.14；后又推进到3072边形，得 π≈3.1416。</p>

<h3>二、出入相补原理</h3>
<p>"以盈补虚"——用图形割补移置来证明面积、体积公式。这一原理贯穿他对《九章》几何内容的全部证明，是中国古代几何的核心方法。</p>

<h3>三、系统的理论建设</h3>
<p>在《九章算术注》中，刘徽给出了分数运算、比例、盈不足术、开方等算法的理论依据；<strong>明确定义了正负数及其运算法则</strong>——"正负术"，这是世界数学史上最早的负数系统论述（西方直到17世纪才完全接受负数）。</p>

<h3>四、影响与纪念</h3>
<p>刘徽注使《九章算术》从"算法手册"升格为理论体系。月球背面有一座环形山以他命名（Liu Hui）。</p>
</div>
</div>

<div id="ar-mathfigures-panel-zuchongzhi" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-zuchongzhi">
<div class="agent-intro">
<h2>祖冲之：把圆周率推向世界之巅的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>时代</strong></td><td>南朝（宋、齐两代）</td></tr>
<tr><td><strong>籍贯</strong></td><td>范阳郡遒县（今河北涞水），生于建康（今南京）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家、天文学家、机械发明家</td></tr>
<tr><td><strong>代表成就</strong></td><td>圆周率精确到小数点后7位；《大明历》</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/zuchongzhi.webp" width="360" height="202" alt="祖冲之" loading="lazy"><figcaption>祖冲之</figcaption></figure>
</div>

<h3>一、圆周率：3.1415926 &lt; π &lt; 3.1415927</h3>
<p>祖冲之证明圆周率真值介于<strong>3.1415926与3.1415927</strong>之间，并给出两个分数近似值：<strong>约率：22/7</strong>（≈3.142857）；<strong>密率：355/113</strong>（≈3.1415929）。密率355/113是一个"奇迹分数"——用如此小的分母达到如此高的精度，在数学上极为优雅。</p>

<h3>二、《大明历》</h3>
<p>祖冲之于462年上书朝廷，编制新历《大明历》，首次把<strong>岁差</strong>引入历法计算，并测得回归年长度为365.24281481日，与今测值只差约46秒。</p>

<h3>三、祖暅原理</h3>
<p>祖冲之与儿子祖暅之合作解决了球体积公式，提出了"<strong>幂势既同，则积不容异</strong>"——即两个等高处截面积相等的立体，体积必然相等。这就是西方所说的"<strong>卡瓦列里原理</strong>"（17世纪），祖氏父子比他早了1100多年。</p>
</div>
</div>

<div id="ar-mathfigures-panel-descartes" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-descartes">
<div class="agent-intro">
<h2>笛卡尔：坐标系与"我思故我在"</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>法国</td></tr>
<tr><td><strong>生卒</strong></td><td>1596—1650</td></tr>
<tr><td><strong>代表作</strong></td><td>《几何学》（1637）、《方法论》</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/descartes.webp" width="360" height="440" alt="笛卡尔" loading="lazy"><figcaption>笛卡尔</figcaption></figure>
</div>

<h3>一、解析几何：代数与几何的联姻</h3>
<p>1637年他在《方法论》附录《几何学》中提出：<strong>用坐标系把图形变成方程，把方程变成图形</strong>——平面上任意一点由一对数（x, y）确定，曲线就是满足某方程的点集。变量由此进入数学，恩格斯称此为"数学中的转折点"，微积分应运而生。注：法国人费马在同一年代独立提出坐标方法，两人是解析几何的共同创始人。</p>

<h3>二、方法论与哲学</h3>
<p>他在《方法论》中提出四条规则，用普遍怀疑清算一切知识，最终找到不可怀疑的基点：<strong>"我思故我在（Cogito, ergo sum）。"</strong>他还给出折射定律的表述（斯涅尔—笛卡尔定律），提出机械论自然观。</p>
</div>
</div>

<div id="ar-mathfigures-panel-fermat" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-fermat">
<div class="agent-intro">
<h2>费马：业余数学家之王</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>法国（图卢兹）</td></tr>
<tr><td><strong>生卒</strong></td><td>1601—1665</td></tr>
<tr><td><strong>职业</strong></td><td>图卢兹议会的法律顾问（真正的"业余选手"）</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/fermat.webp" width="360" height="445" alt="费马" loading="lazy"><figcaption>费马</figcaption></figure>
</div>

<h3>一、费马大定理：358年的挑战</h3>
<p>在丢番图《算术》的页边，他写下："不可能将一个立方数写成两个立方数之和……对此，我确信已发现了一种美妙的证法，可惜这里空白的地方太小，写不下。"这就是<strong>费马大定理</strong>：当 n&gt;2 时 xⁿ+yⁿ=zⁿ 无正整数解。它折磨数学界三个半世纪，直到<strong>1994年怀尔斯</strong>才最终证明。</p>

<h3>二、近代数论之父</h3>
<p><strong>费马小定理</strong>：若 p 为素数且 a 与 p 互素，则 a^(p−1) ≡ 1 (mod p)——这是初等数论与密码学的基石；<strong>两个平方和定理</strong>：奇素数 p 可表示为两数平方和当且仅当 p≡1 (mod 4)；他还开创了无限递降法。</p>

<h3>三、解析几何与概率论</h3>
<p>1629年前后他已用坐标方法研究轨迹方程，与笛卡尔同为解析几何创始人；他建立求极值的方法并提出"最短时间原理"（费马原理），是变分法的源头；1654年他与帕斯卡通信讨论"赌金分配问题"，共同奠定<strong>概率论</strong>的基础。</p>
</div>
</div>

<div id="ar-mathfigures-panel-lagrange" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-lagrange">
<div class="agent-intro">
<h2>拉格朗日：为数学注入"力学之美"</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>籍贯</strong></td><td>意大利都灵（有法国血统）</td></tr>
<tr><td><strong>生卒</strong></td><td>1736—1813</td></tr>
<tr><td><strong>代表作</strong></td><td>《分析力学》（1788）</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/lagrange.webp" width="360" height="362" alt="拉格朗日" loading="lazy"><figcaption>拉格朗日</figcaption></figure>
</div>

<h3>一、《分析力学》：一部"没有图"的力学圣经</h3>
<p>1788年出版的《分析力学》把全部力学归结为几个普适的变分方程（拉格朗日方程），彻底代数化、公理化——他在序言中自豪地说：全书"<strong>没有一张图</strong>"。今天经典力学、量子场论、机器人控制的底层仍是拉格朗日力学。</p>

<h3>二、变分法与代数方程论</h3>
<p>18岁时他在给欧拉的信中提出等周问题的一般解法——这就是<strong>变分法</strong>的诞生。他研究方程根式解法时发现其技巧本质是<strong>根的置换对称性</strong>，直接启发了阿贝尔与伽罗瓦。</p>

<h3>三、数论与天体力学</h3>
<p>证明了<strong>四平方和定理</strong>；解决了三体问题的周期解——今日的詹姆斯·韦伯望远镜、SOHO 卫星就驻留在日地系统的<strong>拉格朗日点</strong>上。大革命期间他主导制定了<strong>米制</strong>（公制单位），是入葬巴黎先贤祠的科学家之一。</p>
</div>
</div>

<div id="ar-mathfigures-panel-leibniz" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-leibniz">
<div class="agent-intro">
<h2>莱布尼茨：微积分记号的发明者与"最后一位通才"</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>德国（汉诺威）</td></tr>
<tr><td><strong>生卒</strong></td><td>1646—1716</td></tr>
<tr><td><strong>主要成就</strong></td><td>微积分（记号 dx、∫）；二进制；数理逻辑先行者</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/leibniz.webp" width="360" height="445" alt="莱布尼茨" loading="lazy"><figcaption>莱布尼茨</figcaption></figure>
</div>

<h3>一、微积分：更好的记号赢得世界</h3>
<p>他约于1675年独立发明微积分，1684年发表，比牛顿公开任何相关成果都早。他发明的记号直指本质：<strong>dx、dy</strong>（微分）、<strong>∫</strong>（拉长的S，即 summa"求和"）。这些记号如此优越，以致欧拉、柯西体系全部建立在它们之上——<strong>莱布尼茨输掉了优先权之争，却赢得了记号的战争。</strong></p>

<h3>二、二进制与计算器</h3>
<p>1679年前后他发明<strong>二进制</strong>，并注意到中国《易经》六十四卦与二进制的对应。他改进了帕斯卡的加法器，制成能做乘除法的步进计算器，是计算机先驱之一；他梦想的"<strong>普遍文字</strong>"让所有推理都变成计算，正是现代数理逻辑与符号计算的先声。</p>

<h3>三、影响</h3>
<p>他一手创建柏林科学院并任首任院长。德国研究联合会最高奖项即"<strong>莱布尼茨奖</strong>"。今天史学界公论：<strong>牛顿与莱布尼茨独立发明了微积分</strong>。</p>
</div>
</div>

<div id="ar-mathfigures-panel-newton" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-newton">
<div class="agent-intro">
<h2>牛顿：站在巨人肩膀上的科学巨人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>英国</td></tr>
<tr><td><strong>生卒</strong></td><td>1643—1727</td></tr>
<tr><td><strong>代表作</strong></td><td>《自然哲学的数学原理》（1687）</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/newton.webp" width="327" height="460" alt="牛顿" loading="lazy"><figcaption>牛顿</figcaption></figure>
</div>

<h3>一、微积分（流数术）</h3>
<p>1665—1676年间，牛顿建立微积分的系统方法：把变量看作随时间流动的量，导数即"流数"（ẋ）。同时代莱布尼茨独立发明微积分并采用更优记号（dx、∫），两人围绕优先权爆发论战，导致英国与欧陆数学界隔绝近百年。</p>

<h3>二、《原理》：运动三定律与万有引力</h3>
<p>1687年出版的《原理》给出<strong>运动三定律</strong>（惯性、F=ma、作用与反作用）与<strong>万有引力定律</strong>，由同一理论推出开普勒三定律、潮汐成因、彗星轨道、地球扁率、岁差，被誉为科学史上最重要的著作。哈雷彗星的回归（1758年）让牛顿力学一战封神。</p>

<h3>三、光学与名言</h3>
<p>他用三棱镜证明<strong>白光由七色光组成</strong>，发明反射式望远镜。"如果说我看得更远，那是因为我<strong>站在巨人的肩膀上</strong>。"1727年他以国葬规格安葬于威斯敏斯特教堂，是获此殊荣的第一位科学家。</p>
</div>
</div>

<div id="ar-mathfigures-panel-euler" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-euler">
<div class="agent-intro">
<h2>欧拉：历史上最多产的数学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>瑞士（巴塞尔）</td></tr>
<tr><td><strong>生卒</strong></td><td>1707—1783</td></tr>
<tr><td><strong>主要成就</strong></td><td>e^{iπ}+1=0；哥尼斯堡七桥问题；欧拉函数</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/euler.webp" width="356" height="460" alt="欧拉" loading="lazy"><figcaption>欧拉</figcaption></figure>
</div>

<h3>一、创立分析学的通用语言</h3>
<p>今天数学符号的一大半出自欧拉之手：<strong>函数记号 f(x)、自然对数的底 e、虚数单位 i、求和符号 Σ、三角函数记号 sin/cos/tan</strong>……他是第一个把"函数"作为数学核心概念的人，三部名著确立了"分析的化身"的地位。</p>

<h3>二、欧拉恒等式：最美的公式</h3>
<p>由欧拉公式 e^{iθ}=cosθ+i·sinθ，令 θ=π 得 <strong>e^{iπ}+1=0</strong>，把分析（e）、几何（π）、代数（i）、算术（1、0）熔于一炉，被公认为"世界上最美的公式"。</p>

<h3>三、图论与数论</h3>
<p>1736年他解答<strong>哥尼斯堡七桥问题</strong>，这一年被视为图论与拓扑学的诞生年；平面图公式 <strong>V−E+F=2</strong> 称为欧拉示性数。他还解决了"巴塞尔问题"（1+1/4+1/9+…=π²/6），推广费马小定理为<strong>欧拉定理</strong> a^φ(n)≡1 (mod n)——现代密码学的数学源头之一。1771年他双目几乎全盲后，仍靠心算与口述完成毕生约一半的著作。</p>
</div>
</div>

<div id="ar-mathfigures-panel-abel" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-abel">
<div class="agent-intro">
<h2>阿贝尔：闪耀五年便陨落的挪威天才</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>挪威</td></tr>
<tr><td><strong>生卒</strong></td><td>1802—1829（仅26岁）</td></tr>
<tr><td><strong>主要成就</strong></td><td>五次方程无一般根式解；椭圆函数论；阿贝尔群</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/abel.webp" width="360" height="438" alt="阿贝尔" loading="lazy"><figcaption>阿贝尔</figcaption></figure>
</div>

<h3>一、五次方程无一般根式解</h3>
<p>代数方程求根公式走到四次为止。1824年阿贝尔证明了五次方程的求根公式<strong>不存在</strong>，结束了近300年的徒劳探索，更引出"哪些方程可用根式解"的问题——后者由伽罗瓦最终解决。数学中"交换"的代数结构被称为<strong>阿贝尔群</strong>。</p>

<h3>二、椭圆函数论的反转革命</h3>
<p>他与雅可比同时独立地做了一个漂亮的"反转"：不研究椭圆积分，而研究其<strong>反函数——椭圆函数</strong>，发现它们具有双周期性，由此开创了19世纪分析学的中心领域之一。他的毕生杰作《论一类极广泛的超越函数》交给柯西审阅，竟被柯西弄丢，多年后才由刘维尔抢救发表。</p>

<h3>三、纪念</h3>
<p>他一生贫病交加，1829年4月6日去世，<strong>两天后</strong>柏林大学的聘书才寄到。挪威政府2003年设立"<strong>阿贝尔奖</strong>"，与沃尔夫奖、菲尔兹奖并列国际数学最高荣誉。</p>
</div>
</div>

<div id="ar-mathfigures-panel-atiyah" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-atiyah">
<div class="agent-intro">
<h2>迈克尔·阿蒂亚：用K理论重绘几何版图的领路人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1929–2019</td></tr>
<tr><td><strong>籍贯</strong></td><td>英国，伦敦汉普斯特德</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；剑桥大学三一学院、牛津大学（萨维尔几何教授）与爱丁堡大学，曾任普林斯顿高等研究院教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>与希策布鲁赫共创拓扑K理论；与辛格证明阿蒂亚—辛格指标定理；与博特证明推广莱夫谢茨公式的不动点定理</td></tr>
</table>
</div>

<h3>一、从喀土穆到三一学院</h3>
<p>阿蒂亚1929年4月生于伦敦汉普斯特德，父亲是黎巴嫩人，母亲是苏格兰人。他的童年在苏丹喀土穆度过，中学在埃及开罗与亚历山大的维多利亚学院，二战结束后回英国，在曼彻斯特文法学校读完中学，随后服了两年兵役。1949年他进入剑桥大学三一学院，从此与这所学院结下终身缘分。1955年，他在霍奇指导下以《拓扑方法在代数几何中的若干应用》获博士学位，研究领域是代数几何。1961年他转到牛津，1963年成为萨维尔几何教授——牛顿与西尔维斯特都坐过的席位；1962年，年仅32岁的他当选皇家学会会员。1969年他赴普林斯顿高等研究院，三年后回牛津任皇家学会研究教授。1990年他回到剑桥，出任牛顿研究所首任所长，同时担任三一学院院长与皇家学会会长，1997年后又成为爱丁堡大学的荣誉教授。这样横跨几何、行政与公众事务的一生，在英国数学界几乎无人可比。</p>

<h3>二、K理论：把拓扑装进代数</h3>
<p>1950年代末至1960年代初，阿蒂亚与德国数学家弗里德里希·希策布鲁赫共同奠定了<strong>拓扑K理论</strong>的基础。其想法极富阿蒂亚的特色：不去逐个计算空间的上同调群，而是把空间上所有向量丛收集起来，做成一个环，再用这个环去读空间的拓扑信息。这样得到的K理论是一种广义上同调理论，配备着阿蒂亚—希策布鲁赫谱序列，并且具有奇特的周期性。它的威力很快显现：许多原本需要繁复计算的示性类问题，在K理论里变成了干净利落的代数操作。K理论后来成为指标定理的天然舞台，也渗透进算子代数、规范场论与弦论。阿蒂亚一生反复强调，好的数学应当"把两个看似无关的东西连起来"，而K理论正是这种信念最早、也最成功的一次实践。</p>

<h3>三、指标定理：分析等于拓扑</h3>
<p>1963年，阿蒂亚与伊萨多·辛格证明了<strong>阿蒂亚—辛格指标定理</strong>。它处理的问题是：一个紧流形上的椭圆微分算子，其解空间的维数减去伴算子的相应维数（即"指标"），看似是一个依赖方程细节的量，实际上却完全由流形与算子的拓扑不变量算出。这个结论一举统一了十九世纪以来的一大批经典结果——高斯—博内公式、希策布鲁赫符号差定理、黎曼—罗赫定理——把它们收进同一个框架；狄拉克算子与规范场论中瞬子、磁单极的许多计算，其后也都可以靠它完成。同期，阿蒂亚还与拉乌尔·博特合作证明了与莱夫谢茨不动点公式相关的<strong>阿蒂亚—博特定理</strong>，把经典的计数公式推广到椭圆复形的层面。1966年莫斯科国际数学家大会上，他因这三项工作获菲尔兹奖。</p>

<h3>四、影响与荣誉</h3>
<p>2004年，阿蒂亚与辛格共同获阿贝尔奖，理由是"发现并证明指标定理，把拓扑、几何与分析连成一体，并在数学与理论物理之间架起新的桥梁"。他的奖章几乎难以尽数：1961年伯威克奖、1968年皇家奖章、1980年伦敦数学会最高奖德摩根奖章、1988年皇家学会最高奖科普利奖章；1983年受封爵士，1992年获授功绩勋章。他曾任伦敦数学会会长，参与创建欧洲数学会与剑桥牛顿研究所。他的学生中有菲尔兹奖得主西蒙·唐纳森，也有希钦、塞加尔、卢斯蒂格等人，爱德华·威滕亦深受其影响。晚年他转向理论物理，并在公开演讲中反复主张数学与物理应当重新合流。2019年1月11日，他在爱丁堡去世，享年89岁。人们怀念他，不仅因为那些定理，还因为他有一种罕见的天赋：能让听众误以为自己理解了远比实际为多的东西。</p>
</div>
</div>

<div id="ar-mathfigures-panel-ahlfors" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-ahlfors">
<div class="agent-intro">
<h2>拉尔斯·阿尔福斯：把复分析几何化的首届菲尔兹奖得主</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1907–1996</td></tr>
<tr><td><strong>籍贯</strong></td><td>芬兰（后长期在美国工作），生于赫尔辛基</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；哈佛大学（曾任教于赫尔辛基大学、苏黎世大学）</td></tr>
<tr><td><strong>代表成就</strong></td><td>当茹瓦–卡尔曼–阿尔福斯定理；覆盖曲面理论与几何函数论；拟共形映射与泰希米勒理论</td></tr>
</table>
</div>

<h3>一、从赫尔辛基到苏黎世</h3>
<p>1907年，阿尔福斯生于赫尔辛基，母亲在他出生时去世，父亲是工学院的机械工程教授。1924年他进入赫尔辛基大学，很快被芬兰函数论的两位代表人物林德勒夫与奈望林纳注意到。1928年他随奈望林纳前往苏黎世，在那里第一次见到“活着的”当代数学，也第一次听说了当茹瓦猜想。次年，年仅二十二岁的阿尔福斯给出了这个猜想的证明：一个阶为 ρ 的整函数，其渐近值的个数不超过 2ρ。这条今天被称为当茹瓦–卡尔曼–阿尔福斯定理的结果，让他一举进入国际数学界的视野。1930年他在赫尔辛基取得博士学位，随后在图尔库的瑞典语大学任教。</p>

<h3>二、覆盖曲面：首届菲尔兹奖</h3>
<p>1935年阿尔福斯受聘前往哈佛。次年，国际数学家大会在奥斯陆召开，首届菲尔兹奖授予他和美国的杰西·道格拉斯；他获奖的工作，是用覆盖曲面的方法研究与整函数、亚纯函数的反函数相对应的黎曼曲面。在此之前，值分布理论主要依靠解析估计；阿尔福斯把长度、面积、曲率这些几何量引进来，让“函数取某个值多少次”这样的问题获得了拓扑与度量上的直观解释。这套语言后来被称为阿尔福斯理论，几乎凭一己之力开创了几何函数论这一方向。1938年他回赫尔辛基任教授，战时曾为离境赴苏黎世而典当了自己的菲尔兹奖章——这件轶事常被当作那个年代欧洲的注脚。</p>

<h3>三、拟共形映射与泰希米勒理论</h3>
<p>1946年阿尔福斯重返哈佛，1964年成为格劳斯坦讲座教授，直到1977年退休。多数人在这个年纪已转向整理与教学，他却做了相反的事：接手了战时早逝的德国数学家泰希米勒留下的、尚处雏形的理论。他与利普曼·伯斯既是合作者也是竞争者，两人以拟共形映射为工具，把黎曼曲面的模空间从一堆难以把握的构想变成可以计算、可以作图的对象，并围绕它培育出一个国际性的研究学派；克莱因群上的阿尔福斯有限性定理也出自这一时期。1953年出版的《复分析》把他的审美凝固成教材：简洁、经济、几何直观，至今仍是这一领域的标准入门书。</p>

<h3>四、影响与荣誉</h3>
<p>阿尔福斯三次在国际数学家大会上作全会报告，分别是1936年、1962年和1978年，跨度超过四十年，主题始终围绕黎曼曲面的几何。除1936年的菲尔兹奖外，他还获得1968年维胡里奖、1981年沃尔夫数学奖和1982年斯蒂尔奖。他的学生包括加拉贝迪安、詹金斯、马尔登、奥瑟曼、罗伊登等人，被他们私下称为“复变函数先生”。他所倡导的那种全局的、几何的复分析视角，今天仍是纯数学以及物理学中弦理论研究的一个活跃中心。</p>
</div>
</div>

<div id="ar-mathfigures-panel-erdos" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-erdos">
<div class="agent-intro">
<h2>保罗·埃尔德什：没有家的数学流浪者与提问者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1913–1996</td></tr>
<tr><td><strong>籍贯</strong></td><td>匈牙利，生于布达佩斯</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；匈牙利科学院院士，一生无固定的供职机构，以访问学者身份游历各大洲</td></tr>
<tr><td><strong>代表成就</strong></td><td>与塞尔伯格给出素数定理的初等证明；开创组合学中的概率方法；埃尔德什数的原点</td></tr>
</table>
</div>

<h3>一、布达佩斯的天才与流亡</h3>
<p>埃尔德什 1913 年生于布达佩斯，父母都是中学数学教师。他 1934 年在帕兹马尼·彼得大学（今罗兰大学）获博士学位，导师是费耶尔（Lipót Fejér）；随后赴英国曼彻斯特，1938 年因欧洲局势恶化赴美，在普林斯顿高等研究院工作了十年。此后他再没有固定的职位与住所。1954 年美国移民局拒绝为他签发再次入境的签证，他离开圣母大学，从此带着两只手提箱辗转于各大洲，靠东道主提供食宿，日复一日地与人合作做题。他终身未婚，把奖金额度之外几乎所有的钱都用来资助年轻数学家和设立悬赏。1996 年，他在华沙参加会议时突发心脏病去世，距他理想中的离场方式只差一场黑板前的演算。</p>

<h3>二、素数定理的初等证明</h3>
<p>素数定理自 1896 年被证明以来，所有证明都依赖复变函数论与黎曼 ζ 函数，许多人怀疑它与复分析有着无法割断的联系。1949 年前后，埃尔德什与阿特勒·塞尔伯格各自独立地给出一个纯初等的证明，只用实数范围内的估计与不等式。这条结果震动了数论界，因为它击碎了"素数定理本质上属于解析数论"的信念。围绕证明优先权与发表方式的争执，成为两人之间一段长期不愉快的公案，也成了数学社会学中被反复讨论的案例。埃尔德什因这项工作获得 1951 年美国数学会科尔奖。</p>

<h3>三、概率方法与拉姆齐理论</h3>
<p>埃尔德什最广为流传的发明是概率方法：要证明某个组合结构存在，不必把它构造出来，只需证明随机选取时它出现的概率大于零。1947 年他用这一方法给出拉姆齐数下界的首个指数型估计，从此改变了组合学的方法论面貌——许多此前无从下手的极值问题，都被这一思路打开。他还与卡茨证明了埃尔德什–卡茨定理，说明一个整数不同素因子的个数近似服从正态分布，由此开创概率数论。此外，他与塞克雷什的早期工作催生了组合几何中著名的"幸福结局问题"，与柯召、拉多的合作给出今天所称的埃尔德什–柯–拉多定理，与斯通的工作则把图兰型极值问题推广成一般理论。</p>

<h3>四、埃尔德什数与荣誉</h3>
<p>埃尔德什一生发表约一千五百篇论文，合作者超过五百位，是数学史上著述最丰的学者之一。由此衍生出的"埃尔德什数"——某人与他的合著距离——在 1969 年由戈夫曼提出后，成为数学合作网络的通行度量。他获得 1983/84 年度沃尔夫数学奖，授奖理由除了他在数论、组合学、概率论、集合论与数学分析方面的众多贡献，还特别提到他"亲身激励了全世界的数学家"。他习惯为尚未解决的问题开出奖金，从几十美元到上万美元不等；其中关于素数间隙的猜想悬赏最高，直到 2014 年才被解决。他为一代又一代年轻人出题、荐人、垫付路费，被同行称为"数学的大使"。</p>
</div>
</div>

<div id="ar-mathfigures-panel-eliashberg" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-eliashberg">
<div class="agent-intro">
<h2>雅科夫·埃利亚什伯格：为辛拓扑与切触拓扑立规矩的奠基者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1946–</td></tr>
<tr><td><strong>籍贯</strong></td><td>俄罗斯/美国，生于列宁格勒（今圣彼得堡）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；斯坦福大学（曾任教于瑟克特夫卡尔大学）</td></tr>
<tr><td><strong>代表成就</strong></td><td>埃利亚什伯格—格罗莫夫辛刚性定理；切触结构的"紧/过扭"分类与三维球面切触结构的完全分类；复维大于二的 Stein 流形的拓扑刻画</td></tr>
</table>
</div>

<h3>一、从列宁格勒到瑟克特夫卡尔</h3>
<p>1946年12月11日，埃利亚什伯格生于列宁格勒。1972年他在列宁格勒大学取得博士学位，导师是弗拉基米尔·罗赫林，论文讨论光滑映射奇点的手术。由于当时苏联的排犹氛围，他无法留在学术中心，只能远赴科米共和国的瑟克特夫卡尔大学任教；1980年他回到列宁格勒申请出境签证被拒，此后数年成为"被拒绝者"，被切断了与学术界的联系，靠朋友帮忙在工业界带一个计算机软件小组。1988年他终于移居美国，1989年起任斯坦福大学教授至今。这段被迫沉默的岁月并未中断他的思考——1980年代，他正是靠一套组合手法，做出了后来被称为辛刚性的第一批结果。</p>

<h3>二、辛刚性：埃利亚什伯格—格罗莫夫定理</h3>
<p>辛几何研究的是保持辛形式的变换，它看起来比黎曼几何"软"：任何体积形式都可以被微分同胚拉成另一个，似乎没有不变量。格罗莫夫在1980年代用伪全纯曲线改变了这一图景，而埃利亚什伯格几乎同时给出了另一条路：他证明辛微分同胚群在微分同胚群中是 $C^0$ 闭的——一列辛变换若一致收敛到某个微分同胚，那么极限仍然是辛的。这条今天称为埃利亚什伯格—格罗莫夫定理的结果，是辛刚性最早的明确证据之一：辛结构不是可以随意拉伸的东西，它在最弱的拓扑里也守着自己的边界。</p>

<h3>三、切触拓扑的分类</h3>
<p>切触结构是辛结构的奇数维近亲，长期被认为分类复杂到无从下手。埃利亚什伯格的关键一击是把它劈成两类：过扭（overtwisted）与紧（tight）。过扭的那部分服从 h-原理，可以按同伦论的方式分类；紧的那部分则真正带有刚性，需要具体分析。借助这个二分法，他给出了三维球面上切触结构的完全分类。1990年他又给出了复维大于二的 Stein 流形的完全拓扑刻画——这是复几何中少见的一类把重要复流形彻底还原为拓扑数据的定理。与瑟斯顿合作的"共叶状结构"（confoliation）理论，则把叶状结构与切触结构放进同一个框架里讨论。</p>

<h3>四、h-原理与影响荣誉</h3>
<p>h-原理是格罗莫夫引入的一套思想：某些偏微分方程或几何结构的存在性，可以完全化归为同伦论问题。埃利亚什伯格在这个方向上工作了数十年，2002年与米沙切夫合写了《h-原理导引》，成为这一领域的入门标准。他还与吉文塔尔、霍费尔一起奠定了辛场论的基础。2001年他获美国数学会奥斯瓦尔德·维布伦几何奖，2002年当选美国国家科学院院士，2013年与霍费尔共获苏黎世联邦理工的海因茨·霍普夫奖，2016年获瑞典皇家科学院的克拉福德奖，2020年与西蒙·唐纳森共享沃尔夫数学奖，2023年再获"知识前沿奖"。他指导的博士生已有四十余位，其中包括卡茨、墨菲与帕登；斯坦福也由此成为辛与切触拓扑的一个国际中心。</p>
</div>
</div>

<div id="ar-mathfigures-panel-eilenberg" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-eilenberg">
<div class="agent-intro">
<h2>塞缪尔·艾伦伯格：为拓扑学重新奠基的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1913–1998</td></tr>
<tr><td><strong>籍贯</strong></td><td>波兰、美国，生于华沙</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；哥伦比亚大学教授，曾执教于密歇根大学与印第安纳大学</td></tr>
<tr><td><strong>代表成就</strong></td><td>与麦克莱恩创立范畴论及 Eilenberg–Mac Lane 空间；与斯廷罗德建立同调公理；与嘉当合著《同调代数》</td></tr>
</table>
</div>

<h3>一、华沙学派与流亡</h3>
<p>艾伦伯格 1913 年生于华沙一个犹太家庭，在华沙大学接受训练，1936 年在库拉托夫斯基（Kazimierz Kuratowski）与博尔苏克（Karol Borsuk）指导下取得博士学位，论文研究映到圆周上的映射的拓扑应用。那时的华沙学派正处在点集拓扑与代数拓扑的黄金时期。1939 年，在父亲的坚持下他离开波兰赴美，抵达普林顿时受到维布伦与莱夫谢茨的帮助，先在密歇根大学任教——当时该校正在建设拓扑学中心，斯廷罗德也在那里。1947 年他转入哥伦比亚大学，此后一直工作到退休，其间两度出任系主任，1982 年被授予该校最高学术头衔"大学教授"。</p>

<h3>二、公理与范畴</h3>
<p>艾伦伯格最重要的两件工作都始于"重写基础"。其一是与斯廷罗德合作的同调理论公理化：他们把此前各家各派的同调理论统一成一组公理——同伦、正合性、切除、维数与加性公理——使同调不再依赖具体的链复形构造，而成为满足公理的唯一理论。这套同调公理与二人合著的《代数拓扑基础》一起，成为整整一代拓扑学家的入门书。其二与麦克莱恩（Saunders Mac Lane）有关：1945 年二人在研究群扩张时引入了函子与自然变换的语言，随后建立起范畴论。最初它只是描述"自然等价"的技术装置，后来却成为整个现代数学的组织语法。</p>

<h3>三、同调代数与后期的自动机</h3>
<p>1956 年，艾伦伯格与亨利·嘉当合著的《同调代数》问世，把导出函子、投射分解与内射分解等此前散落各处的技术整合为一套标准工具，"嘉当–艾伦伯格分解"由此得名。他与麦克莱恩还引入了只有唯一一个非平凡同伦群的空间，即今天所称的 Eilenberg–Mac Lane 空间，它把同伦论与同调论连接起来，后来还深入到表示论与代数 K 理论。他曾是布尔巴基小组的成员，也是其中少见的非法国人。晚年他转向自动机与形式语言理论，写出多卷本《自动机、语言与机器》，给出正则语言类与有限幺半群伪簇之间的对应关系，即现在所称的艾伦伯格定理。</p>

<h3>四、荣誉与亚洲艺术收藏</h3>
<p>艾伦伯格与阿特勒·塞尔伯格共同获得 1986 年沃尔夫数学奖，次年又获美国数学会斯蒂尔奖；1959 年当选美国国家科学院院士。在数学之外，他是世界上最负盛名的亚洲艺术收藏家之一，藏品以印度、印尼、尼泊尔、泰国、柬埔寨、斯里兰卡与中亚的小型雕塑与器物为主。1987 年他把大部分藏品捐给纽约大都会艺术博物馆，该馆于 1991 至 1992 年举办名为《莲之超越》的特展，并出资在哥伦比亚大学设立以他命名的数学客座教授席位。1998 年他在纽约去世。同事们在悼念文章中称他是"我们最伟大的数学文体家"——这份挑剔的形式感，与他在收藏时的眼光其实是同一种审美。</p>
</div>
</div>

<div id="ar-mathfigures-panel-alon" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-alon">
<div class="agent-intro">
<h2>诺加·阿隆：用多项式与概率重塑组合学的以色列数学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1956–</td></tr>
<tr><td><strong>籍贯</strong></td><td>以色列，生于海法</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿大学，特拉维夫大学荣休教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>组合零点定理与多项式方法；扩展图的谱刻画与 Alon–Boppana 界；与斯宾塞合著《概率方法》</td></tr>
</table>
</div>

<h3>一、从海法到特拉维夫</h3>
<p>1956年，阿隆生于以色列海法，1974年从希伯来 Reali 学校毕业，1979年以最优等成绩毕业于以色列理工学院，1980年在特拉维夫大学取得硕士学位，1983年在耶路撒冷希伯来大学获得博士学位，导师是米哈·佩尔莱斯，论文题为《组合学中的极值问题》。在麻省理工学院做完博士后之后，他1985年回到特拉维夫大学，1988年成为正教授，1999至2001年主持数学科学学院，2018年从特拉维夫荣休并转任普林斯顿大学教授。他发表论文数百篇，一生只写过一本书，而那本书足以定义一个方向。</p>

<h3>二、组合零点定理</h3>
<p>1990年代中期，阿隆提出了组合零点定理（Combinatorial Nullstellensatz）。它的原型是代数几何中的希尔伯特零点定理：一个多项式若在若干点上为零，必落入某个理想。阿隆把它翻译成组合学的语言，变成一句极其好用的判据：只要一个多项式在某个乘积集合上不恒为零，就可以断言在其中存在一个"非零点"。这句话此后成了所谓"多项式方法"的引擎，被用来解决图论、组合学与加性数论中的大量问题，包括四色定理的某些推广。1996年他与纳坦森、鲁饶一起给出了柯西–达文波特定理的推广；1992年与克莱特曼合作解决了1957年由哈德维格与德布伦纳提出的组合几何问题，给出赫利定理的一个深远推广。</p>

<h3>三、扩展图、流算法与概率方法</h3>
<p>阿隆的另一条主线是扩展图：这类图边数很少，却把任意两点之间的连通性保持得极好。他与合作者建立了图的扩展性质与谱性质之间的精确联系，并给出 Alon–Boppana 界——谱间隙究竟能有多好的一个基本限制。扩展图随后出现在网络设计、纠错码、去随机化与复杂性理论的各个角落。1995年他与尤斯特、兹威克提出"染色编码"方法，成为固定参数可解性与生物信息学中的常用技术；1999年与马蒂亚斯、塞盖迪的论文开创了流算法研究——数据流只能过一遍时，哪些统计量还能被估计出来。他还推翻了香农在1956年提出的一个猜想：两个信道的不交并，其香农容量可以远大于两者容量之和，甚至大于其任意固定的幂。</p>

<h3>四、影响与荣誉</h3>
<p>阿隆1989年获厄尔多斯奖，2000年获波利亚奖，2005年获哥德尔奖，2008年获以色列奖，2011年获 EMET 奖，2016年获迪杰斯特拉奖，2019年获帕里斯·卡内拉基斯奖，2021年获美国数学会斯蒂尔数学阐述奖，2022年获邵逸夫数学科学奖，2024年获沃尔夫数学奖。他与乔尔·斯宾塞合著的《概率方法》自1992年首版以来已出到第四版，是这个领域公认的标准教材。他还以"A. Nilli"为笔名发表过论文——这个名字取自他的女儿尼莉。2006年马德里国际数学家大会上，他担任科学委员会主席。阿隆的工作有一种特别的风格：他很少发明庞大的理论机器，而是反复找到那一两句"换个角度就显而易见"的判据。</p>
</div>
</div>

<div id="ar-mathfigures-panel-arnold" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-arnold">
<div class="agent-intro">
<h2>弗拉基米尔·阿诺德：把力学重新写成几何的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1937–2010</td></tr>
<tr><td><strong>籍贯</strong></td><td>苏联／俄罗斯；生于敖德萨</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；莫斯科大学、斯捷克洛夫数学研究所、巴黎第九大学教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>KAM 理论、阿诺德扩散、阿诺德猜想、奇点理论的分类、理想流体的 Euler–Arnold 几何刻画</td></tr>
</table>
</div>

<h3>一、十九岁解决希尔伯特第十三问题</h3>
<p>1937 年 6 月 12 日，阿诺德生于敖德萨。他在莫斯科大学力学数学系读书，师从 Kolmogorov，1959 年毕业，1961 年获副博士学位。还在本科阶段，十九岁的阿诺德就解决了希尔伯特第十三问题：他证明三元连续函数可以表示为二元连续函数的叠加，否定了希尔伯特关于这一表示的猜想；Kolmogorov 随后与他一同把结果推向更完整的形式，即 Kolmogorov–Arnold 叠加定理。这项工作为他赢得莫斯科数学会青年数学家奖。1961 至 1986 年他任教于莫斯科大学，1986 年起转入斯捷克洛夫数学研究所，并从 1993 年起同时任巴黎第九大学教授，每年春秋在巴黎、冬夏在莫斯科。2010 年 6 月 3 日，他在巴黎去世。莫斯科大学力学数学系在那些年里是世界上少见的数学温床，阿诺德既是受益者也是组织者：他主持的讨论班以问题驱动著称，每场都以一串具体例子开场，抽象只在最后一步才出现。</p>

<h3>二、KAM 理论与阿诺德扩散</h3>
<p>在哈密顿系统稳定性这个古老战场上，阿诺德与 Kolmogorov、Moser 共同创立了 KAM 理论：小扰动下，绝大多数不变环面存活下来，运动保持准周期。但他随即指出了另一面。1964 年他构造出例子，说明在多自由度系统中，那些存活的不变环面之间可能存在极缓慢漂移的轨道——无论扰动多小，作用量变量都可以发生显著变化。这个现象被称为阿诺德扩散，它意味着太阳系式的稳定性并非绝对：稳定岛屿之外，仍有幽灵般的通道通向远处。阿诺德的工作由此描绘出复杂系统的典型图景——有序与无序在同一相空间里交错共存，边界处永远潜藏着不可预测性。值得注意的是，阿诺德扩散的存在并不意味着工程意义上的危险：漂移所需的时间通常长得不可思议，天文数字般的尺度让它在太阳系的寿命之内几乎无从显现——这恰恰说明，稳定性问题的答案取决于你问的时间尺度有多长。</p>

<h3>三、奇点、突变与流体的几何</h3>
<p>1970 年代前后，阿诺德剥离出当时流行的"突变论"中纯正的数学内核，即光滑映射的奇点理论，并对低维情形给出分类，把 ADE 型的分类与外尔群、考克斯特群、简单奇点之间的联系展示得清清楚楚。他还把理想不可压缩流体的运动方程重新解释成保体积微分同胚构成的无穷维李群上的测地线方程，一举揭示了流体不稳定性的几何根源，这就是 Euler–Arnold 方程的视角。他提出的阿诺德猜想——辛流形上哈密顿同构的不动点数不少于某个由拓扑决定的下界——催生了 Floer 同调与整个辛拓扑；他与学生 Khovanskii 开创的拓扑伽罗瓦理论，则回答了一类关于方程可解性的经典问题。他在这些方向上留下的往往是可检验的猜想，而不是封闭的体系；正是这些猜想吸引着后来者把辛拓扑、镜像对称与奇点理论逐一接上，形成了今天所说的"阿诺德学派"。</p>

<h3>四、教学、立场与荣誉</h3>
<p>2001 年的沃尔夫数学奖表彰他在动力系统、微分方程与奇点理论等众多数学领域中的深刻而有影响的工作。此前他获 1965 年列宁奖、1982 年首届克拉福德奖（与 Louis Nirenberg 共享）、1992 年罗巴切夫斯基奖、1994 年哈维奖；2001 年又获 Dannie Heineman 数学物理奖，2007 年获俄罗斯联邦国家奖，2008 年获邵逸夫奖。他的《经典力学的数学方法》《常微分方程》等教材被译成多种语言，影响了几代读者。他激烈反对布尔巴基式的抽象教学，那句被广泛引用的"数学是物理学中实验很便宜的那一半"，正是其教育立场的浓缩。他也是莫斯科独立大学的创办者之一，一生喜欢列问题清单，也喜欢提醒同行：概念若不落到具体的例子上，就只是空壳。他留下的《阿诺德问题集》收录了上百道由他提出或收集的问题，至今仍是许多研究生选题的源头；他影响数学的方式，与其说是给出答案，不如说是把正确的问题摆在了所有人面前。</p>
</div>
</div>

<div id="ar-mathfigures-panel-okounkov" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-okounkov">
<div class="agent-intro">
<h2>安德烈·奥孔科夫：在概率、表示论与几何之间架桥的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1969–</td></tr>
<tr><td><strong>籍贯</strong></td><td>俄罗斯、美国，生于莫斯科</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；哥伦比亚大学 Samuel Eilenberg 数学讲席教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>随机分拆与随机分区的极限形状；无穷对称群的表示论；Hilbert 概形的量子上同调；Gromov–Witten 与 Donaldson–Thomas 不变量之间的猜想</td></tr>
</table>
</div>

<h3>一、从莫斯科到芝加哥、伯克利、普林斯顿</h3>
<p>奥孔科夫 1969 年 7 月生于莫斯科，1993 年以最优等成绩在莫斯科国立大学获学士学位，1995 年在同校获博士学位，导师为基里洛夫与奥尔尚斯基。他的第一份工作在芝加哥大学（1996–1999），之后是加州大学伯克利分校（1999–2002）与普林斯顿大学（2002–2010，William S. Tod 讲席教授），最终落脚哥伦比亚大学，出任 Samuel Eilenberg 数学讲席教授。这条轨迹也折射出他研究兴趣的迁移轨迹：从纯粹的表示论，一步步走向它与几何、概率的交叉地带。</p>

<h3>二、表示论里的"随机性"</h3>
<p>他的核心工作围绕无穷对称群的表示论展开。对称群的不可约表示由整数分拆来标记，而把表示论问题与分拆的渐近行为联系起来，就必然会遇见概率：当分拆的尺寸趋于无穷，一个"随机"的分拆长什么样？奥孔科夫与合作者系统地研究了随机分拆与平面分拆的极限形状、边界波动，并揭示出这些问题与随机矩阵理论之间的深刻联系——某些出现在表示论中的渐近分布，正是随机矩阵特征值所遵循的那类分布。由此，原本属于离散数学的分拆恒等式，被赋予了统计物理式的解释。</p>

<h3>三、枚举几何：数曲线与数层</h3>
<p>他的另一条主线是代数几何中的枚举问题。他与潘迪哈里潘德长期合作，研究复平面上点的 Hilbert 概形的量子上同调，把表示论的工具带进 Gromov–Witten 理论。他与毛里克、涅克拉索夫、潘迪哈里潘德共同提出了一组著名猜想，断言三维卡拉比–丘流形的 Gromov–Witten 不变量与 Donaldson–Thomas 不变量之间存在精确的等价关系（常称 MNOP 猜想）。这两套不变量一个"数曲线"，一个"数理想层"，来自完全不同的构造，其等价性的猜想深刻重塑了枚举几何的版图。他还研究了随机曲面与维拉索罗约束等数学物理问题，研究兴趣始终横跨多个领域。</p>

<h3>四、影响与荣誉</h3>
<p>2004 年他获欧洲数学会奖，2006 年在马德里国际数学家大会上获菲尔兹奖，获奖理由是"在概率论、表示论与代数几何之间架桥的贡献"。此后他当选美国国家科学院院士、美国艺术与科学院院士、瑞典皇家科学院院士与中国科学院外籍院士，2018 年在国际数学家大会上作全会报告。他长期服务于国际数学联盟执行委员会，并参与多个研究所与基金会的顾问工作。他所开拓的那些交叉地带，如今已是相当热闹的领域：在那里，一个关于分拆的渐近公式、一个关于模空间的积分，和随机矩阵的一次涨落，往往是同一件事的三个侧面。</p>
</div>
</div>

<div id="ar-mathfigures-panel-aschbacher" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-aschbacher">
<div class="agent-intro">
<h2>迈克尔·阿施巴赫：为有限单群分类收官的群论家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1944–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，阿肯色州小石城</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；加州理工学院 Shaler Arthur Hanisch 讲座教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>有限单群分类计划的核心人物、Aschbacher 极大子群定理、与 Stephen D. Smith 合作完成拟薄群的分类</td></tr>
</table>
</div>

<h3>一、从组合学到群论</h3>
<p>1944 年 4 月 8 日，阿施巴赫生于阿肯色州小石城。1966 年他在加州理工学院获学士学位，1969 年在威斯康星大学麦迪逊分校获博士学位，导师是 Richard Bruck，论文做的是对称区组设计的共线群——那是组合数学，不是有限群。1970 年他回到加州理工学院任教，1976 年成为正教授。做博士后时他才开始对有限单群感兴趣，在群论圈子里算是外来者；1973 年起，他迅速成为有限单群分类计划的核心人物。Gorenstein 曾形容他的登场"极具戏剧性"：一个用组合学眼光看群的人，带来了圈内人没想到的手法，其出成果之密集甚至让一些同行决定转去做别的问题。他曾自嘲当时"并没有接入那个系统"，许多别人已在预印本里得到的结果，他都是自己重新证了一遍才发表；这种独立重做的习惯虽然费时，却让他对整个领域的结构有着旁人没有的把握。</p>

<h3>二、极大子群定理</h3>
<p>有限单群分类的基本策略是：取一个可能的极小反例，研究其中某个元素的中心化子，再由此复原整个结构。阿施巴赫的关键贡献之一，是对典型群的极大子群给出了一套完整的分类：一个典型群的任一极大子群，要么落在若干自然的类别之中，要么就是几乎单的并受到严格限制。这条被称为 Aschbacher 定理（或极大子群定理）的结果，把"可能的子群"这个无边无际的搜索空间压缩成一份可以逐一核查的清单，是整个分类证明得以推进的枢纽之一。它也是后来计算群论中识别矩阵群算法的理论依据。分类工作的逻辑依赖于对"极小反例"的穷举与排除：每排除一种局部结构，就把反例的存在空间削去一块；阿施巴赫的定理把这类排除变成了系统的工程，而不是一次次临时的拼凑。</p>

<h3>三、拟薄群：补上最后的缺口</h3>
<p>1980 年前后，分类工作宣布基本完成，但事后人们发现有一处漏洞：拟薄群的情形没有被真正处理完。这个缺口极难补，因为它涉及二局部子群结构非常特殊的情形，论证冗长且容易出错。阿施巴赫与 Stephen D. Smith 花了多年时间，在 2004 年出版了两卷本《拟薄群的分类》，总篇幅超过一千二百页，才把这个洞彻底填上。至此，历经数十年、上百位数学家参与、原始证明散落在数百篇论文中的有限单群分类定理，才算有了完整的证明。瑞典皇家科学院在授予他 2011 年罗尔夫·肖克奖时，特别提到了这一贡献。有限单群的清单本身也值得一看：除了若干无限族之外，还有二十六个不合群的"散在单群"，其中最大的那个被称为魔群，其元素个数是一个长达五十余位的天文数字，后来还被发现与数论和数学物理有着出人意料的联系。</p>

<h3>四、影响与荣誉</h3>
<p>2012 年的沃尔夫数学奖表彰他在有限群论方面的工作。同年他还获美国数学会斯蒂尔数学阐述奖；此前获 1980 年科尔代数奖（获奖工作是奇阶域上 Chevalley 群的一个刻画），1990 年当选美国国家科学院院士，1992 年当选美国艺术与科学院院士。他的写作以难读著称，同行抱怨过其中的计数论证缺乏解释，合作者有时也觉得共同署名的文章不好读；但这更多来自问题本身的复杂，而非表述的疏忽。他著有《有限群论》《散在群》《三置换群》等专著。阿施巴赫让一个曾经被视为不可能完成的项目真正落了地——顺带也提醒了数学界，长达上万页的证明究竟该如何被检验与信任。他后来写过专文谈分类的现状，坦率地讨论这类超长证明的可靠性问题；在他看来，一个学科的信任机制本身就是需要维护的对象，这与证明一个新定理同样严肃。</p>
</div>
</div>

<div id="ar-mathfigures-panel-artin" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-artin">
<div class="agent-intro">
<h2>迈克尔·阿廷：为模空间造出代数语言的几何学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1934–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国；生于德国汉堡</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；麻省理工学院荣休教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>Artin 逼近定理、代数空间与代数栈、与 Mazur 合作的 étale 同伦论、代数曲面奇点理论（有理奇点与基本闭链）</td></tr>
</table>
</div>

<h3>一、从汉堡到 MIT</h3>
<p>1934 年 6 月 28 日，阿廷生于德国汉堡，父亲是二十世纪最重要的代数学家之一 Emil Artin。因外祖父是犹太人，1937 年全家离开德国赴美，最终定居印第安纳州布卢明顿；他在音乐与语言并重的家庭中长大，德语与英语都是母语。1955 年他在普林斯顿大学获学士学位，1960 年在哈佛大学获博士学位，导师是 Oscar Zariski，论文研究 Enriques 曲面。1960 年代他在法国高等科学研究所参与格罗滕迪克主持的讨论班，为 SGA4 中关于拓扑斯与 étale 上同调的卷册撰稿。此后他长期任教于麻省理工学院，是 MIT 代数几何学派的核心，现为该校荣休教授。他的姐姐 Karin 曾与数学家 John Tate 结婚，家族与二十世纪代数几何的渊源之深几乎无人可比；但他本人走上数学道路并不顺理成章——在普林斯顿读本科时，他先后试过物理与化学，最后只是因为觉得数学处在科学光谱的理论一端、便于转行，才选了它。</p>

<h3>二、逼近定理与代数空间</h3>
<p>阿廷关心的一个基本问题是：概形范畴中哪些函子是可表示的？围绕这个问题，他证明了以他命名的逼近定理：若一个形式解在足够高阶上满足方程组，那么就存在真正的（代数的或解析的）解逼近它。这条结果把形式幂级数的世界与真实解的世界连了起来，成为局部代数与形变理论的标准工具；与之配套的"存在性定理"则给出了可表示性的判别准则。在这个过程中，他引入了代数空间的概念——比概形更宽，却仍能用 étale 拓扑来研究——它后来与代数栈一起成为模空间理论的基础语言。今天人们谈论模空间时所用的那套表述，很大程度上是由他塑造的。代数空间的想法源于一个很实际的困难：某些从形变与商的角度自然出现的对象并不是概形；与其把它们排除在外，不如把范畴稍微放宽，让 étale 拓扑仍能运转。这一步看似只是技术处理，却让"模空间"这个概念第一次有了可以在其中工作的栖身之处。</p>

<h3>三、曲面、奇点与后来的转向</h3>
<p>他与 Barry Mazur 合作定义了 étale 同伦型，为代数簇提供了一个新的同伦不变量；与 Peter Swinnerton-Dyer 合作，解决了椭圆 K3 曲面以及有限域上椭圆曲线束情形的 Shafarevich–Tate 猜想。他对代数曲面奇点理论有根本贡献，有理奇点与基本闭链的概念都出自他的工作；他还在代数簇的形变理论上做了奠基性的研究。1980 年代以后，他的兴趣转向非交换代数，特别是非交换环的几何方面，如今被公认为非交换代数几何的权威。他的学生包括 Eric Friedlander、David Harbater、Zinovy Reichstein 与 Amnon Yekutieli。他讲授的代数几何课程在 MIT 延续了数十年，讲义被一代代学生复印传阅；同事回忆，他改学生论文时常常把一整页证明压缩成三行，然后说"这里其实不需要任何东西"。</p>

<h3>四、影响与荣誉</h3>
<p>2013 年的沃尔夫数学奖表彰他对代数几何的根本贡献，与他同年分享该奖的是 George Mostow。他 2002 年获美国数学会终身成就斯蒂尔奖，2005 年获哈佛百年奖章，2015 年获美国国家科学奖章。他是美国国家科学院院士、美国艺术与科学院院士，也是荷兰皇家艺术与科学院外籍院士与莫斯科数学会荣誉会士，并获得汉堡大学与安特卫普大学的名誉博士学位。1966 年他应邀在莫斯科国际数学家大会上报告"概形的 étale 拓扑"。阿廷身上有一种少见的品质：他既参与建造了格罗滕迪克那套最抽象的基础，又始终把具体的例子和可计算的问题握在手里。他晚年热心于非交换代数几何，也关心数学教育；在他看来，抽象的语言若不能让人算出一个新的例子，就没有完成它的任务。这种判断力，是他从扎里斯基那里学到的最宝贵的东西。</p>
</div>
</div>

<div id="ar-mathfigures-panel-avila" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-avila">
<div class="agent-intro">
<h2>阿图尔·阿维拉：以重整化为统一原则的动力系统大家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1979–</td></tr>
<tr><td><strong>籍贯</strong></td><td>巴西、法国双重国籍，生于里约热内卢</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；苏黎世大学教授（2018 年起），法国国家科研中心（CNRS）研究主任，里约热内卢 IMPA 研究员</td></tr>
<tr><td><strong>代表成就</strong></td><td>与 Svetlana Jitomirskaya 合作解决"十杯马丁尼问题"；与 Marcelo Viana 合作证明 Zorich–Kontsevich 猜想；建立单频准周期薛定谔算子的全局理论</td></tr>
</table>
</div>

<h3>一、里约少年、IMPA 与二十一岁的博士</h3>
<p>阿维拉十六岁时在加拿大举行的 1995 年国际数学奥林匹克上夺得金牌，并由此获得巴西纯粹与应用数学研究所（IMPA）的奖学金，一边在里约的圣本笃中学与圣奥古斯丁中学读高中，一边开始攻读硕士学位，1997 年拿到硕士学位，随后又在里约热内卢联邦大学取得学士学位。十九岁那年他着手撰写博士论文，2001 年在 IMPA 获得博士学位，年仅二十一岁，导师是 Welington de Melo，论文研究单峰映射在拓扑与度量视角下的分岔。此后他赴法国做博士后，合作导师是 1994 年菲尔兹奖得主 Jean-Christophe Yoccoz。2003 年起他任职于 CNRS，2008 年成为该机构史上最年轻的研究主任（directeur de recherche）；2009 年起同时担任 IMPA 的 Armínio Fraga 讲座特邀研究员，长年在里约与巴黎两地穿梭；2018 年 9 月起任苏黎世大学数学教授。</p>

<h3>二、十杯马丁尼问题</h3>
<p>动力系统圈子里流传着一个带酒味的悬赏。美国数学物理学家 Barry Simon 提出了一类准周期薛定谔算子（almost Mathieu 算子）的谱结构问题：对任意无理频率与非零耦合参数，算子的谱是否是一个康托尔集——即一个处处有洞、没有内点的分形？它在物理上对应着著名的"霍夫斯塔特蝴蝶"能谱图案。Mark Kac 许诺：谁解决了它，就请谁喝十杯马丁尼。2005 年，二十六岁的阿维拉与 Svetlana Jitomirskaya 给出了肯定的答案，这个悬置二十五年的问题由此得名"十杯马丁尼问题"（ten martini problem）。同年稍后，他又与 Marcelo Viana 证明了 Zorich–Kontsevich 猜想：紧黎曼曲面上阿贝尔微分模空间上的 Teichmüller 流，其非平凡李亚普诺夫指数两两不同。这两个结果一个通向数学物理，一个通向平坦曲面的动力学，却出自同一人之手——这种横跨能力此后一直伴随着他。</p>

<h3>三、重整化：把混乱折叠成自相似</h3>
<p>阿维拉工作的方法论核心是重整化（renormalization）。这一思想借自统计物理：把一个系统在尺度变换下反复"放大—重标"，看它是否收敛到某种自相似的极限对象；一旦收敛，原系统的复杂行为就可以由这个极限对象来刻画。他系统地把重整化发展成动力系统的统一原则：一维实动力系统与一维全纯动力系统、区间交换变换与平移流、准周期薛定谔算子，这些看似不相邻的方向，在他手里被同一套框架串了起来。他因此构建了单频准周期薛定谔算子的全局理论，这一工作发表在《Acta Mathematica》上，被视为该领域近二十年最重要的进展之一；他还研究了区间交换变换的典型遍历性质，并研究过动力台球（dynamical billiards）等问题，还因关于准周期薛定谔算子几乎可约性猜想的工作，在 2017 年于克拉科夫作 Łojasiewicz 讲座。菲尔兹奖的颁奖词说他"以重整化作为统一原则，改变了动力系统这一领域的面貌"，指的正是这一层。</p>

<h3>四、影响与荣誉</h3>
<p>2014 年，阿维拉在首尔举行的国际数学家大会上获菲尔兹奖，成为首位来自拉丁美洲、也是首位来自葡语世界的获奖者。此前他已获 2005 年法兰西学院 Peccot 课程、2006 年 CNRS 铜质奖章与 Salem 奖、克莱研究奖、2008 年欧洲数学会奖、2009 年法国科学院雅克·埃尔布朗大奖、2011 年 Michael Brin 动力系统奖与 2013 年 TWAS 奖；2015 年获法国荣誉军团骑士勋章，2019 年当选美国国家科学院外籍院士。他曾是 2010 年国际数学家大会的全体报告人，长期担任《Ergodic Theory and Dynamical Systems》等刊物的编委，并指导了来自 IMPA、巴黎七大等处的多名博士生。他在访谈中称，de Melo、Lyubich 与 Yoccoz 是对他影响最深的合作者，而 Bourgain 的工作在他转向新领域时给了关键启发。他的经历也让巴西的数学培养体系——尤其是 IMPA 那条从少年奥赛直通博士的路径——成为国际关注的焦点。</p>
</div>
</div>

<div id="ar-mathfigures-panel-bhargava" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-bhargava">
<div class="agent-intro">
<h2>曼朱尔·巴尔加瓦：重铸高斯复合律的数的几何学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1974–</td></tr>
<tr><td><strong>籍贯</strong></td><td>加拿大、美国双重国籍，生于安大略省汉密尔顿</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿大学 Brandon Fradd（1983 届）数学讲座教授，兼任莱顿大学 Stieltjes 数论教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>提出高次复合律（higher composition laws），用以参数化并计数四次与五次环；证明 15 定理并与 Jonathan Hanke 合作证明 290 定理；与合作者证明按高度排序时椭圆曲线的平均秩有界</td></tr>
</table>
</div>

<h3>一、从哈佛少年到怀尔斯的门生</h3>
<p>巴尔加瓦出生于加拿大安大略省汉密尔顿的一个印度裔家庭，主要在纽约长岛长大。母亲 Mira Bhargava 是霍夫斯特拉大学的数学家，也是他最早的数学老师。他十四岁便修完了中学的全部数学与计算机课程，1992 年以毕业生代表身份从 Plainedge 高中毕业；1996 年在哈佛大学获学士学位并当选 Phi Beta Kappa，本科期间的研究即获得 1996 年 Morgan 奖，并孕育出后来被称为"巴尔加瓦阶乘"（Bhargava factorial）的概念——这是对波利亚一个长期悬置猜想的回应，后来发表于《美国数学月刊》。随后他赴普林斯顿，在 Andrew Wiles 指导下于 2001 年完成博士论文《高次复合律》。2003 年，普林斯顿聘他为终身正教授，是继 Charles Fefferman 与 Andrew Wiles 之后该校史上第三年轻的终身教授。</p>

<h3>二、高次复合律：高斯的配方被重写了一遍</h3>
<p>十九世纪初，高斯给出了二元二次型复合律，这是整个代数数论与类群理论的起点。此后两百年，没有人知道它在更高次数上是否有对应物。巴尔加瓦的博士工作彻底改写了这一局面：他用一种被称为"巴尔加瓦立方"（Bhargava cube）的几何—组合构造，一举得到了十四个全新的类高斯复合律。所谓"小秩的环"，指的是作为加法群秩为二、三、四、五的那些环，它们在数域的类群与单位群理论中占据核心位置。巴尔加瓦的方法之所以被归入"数的几何"，是因为他并不直接列举代数对象，而是把参数化问题转化为格点在某些区域中的计数问题，再用几何工具估计。复合律带来的参数化一经获得，判别式的渐近分布、类群行为等算术问题便迎刃而解——他据此确定了四次与五次数域判别式的渐近密度，并证明了 Cohen–Lenstra–Martinet 类群启发式的首批情形。国际数学联盟的颁奖词称他"发展了数的几何中的强有力新方法，用以计数小秩的环"，指的正是这部分工作。</p>

<h3>三、15 定理、290 定理与椭圆曲线的平均秩</h3>
<p>在二次型表示论里有一个优雅的老问题：哪些整值二次型能表示出所有正整数？Conway 与 Schneeberger 的"15 定理"说，只需验证前十五个数即可，但证明一直缺失。巴尔加瓦给出了一个新证明，并把定理推广到奇数集、素数集等其他数集上；他与 Jonathan Hanke 合作进一步证明了 290 定理。另一条主线是椭圆曲线。人们长期猜测，把所有椭圆曲线按高度排序时，其莫德尔–韦伊秩的平均值是有界的——这一问题与 Birch 和 Swinnerton-Dyer 猜想及 Goldfeld 猜想的预期紧密相连。巴尔加瓦与 Arul Shankar 合作证明了平均秩确有上界，这意味着大多数椭圆曲线的秩并不高；此后他又与 Shankar、Christopher Skinner、张伟等推进，证明了正比例的椭圆曲线满足 BSD 猜想及其秩的相关结论。他还证明了多数超椭圆曲线在有理数域上没有有理点。在插值与 p 进分析方向，他发展的新方法也被用于研究二次型的表示问题与理想类群的结构。这些工作合起来，几乎重塑了当代"数的几何"这一分支的版图。</p>

<h3>四、影响与荣誉</h3>
<p>2014 年，巴尔加瓦在首尔获菲尔兹奖。此前他已获 2003 年 Merten M. Hasse 奖、2005 年 Blumenthal 奖、克莱研究奖与 SASTRA 拉马努金奖、2008 年美国数学会 Cole 奖、2011 年费马奖与 2012 年 Infosys 奖；2015 年获印度政府颁发的莲花士勋章（Padma Bhushan），2019 年当选英国皇家学会院士，2010 年起受聘为莱顿大学 Stieltjes 数论讲席教授。他指导的学生包括 Wei Ho、Alison Miller、Evan O'Dorney、Melanie Wood、Arul Shankar、Piper Harron 等一批活跃的青年数论学者。他还是一位造诣颇深的塔布拉鼓手，曾师从 Zakir Hussain，并随祖父研习梵文与印度古代数学史——他多次谈到七世纪印度数学家婆罗摩笈多对高次复合律的启发。2026 年 2 月，他成为纽约国家数学博物馆（MoMath）的首任馆长。</p>
</div>
</div>

<div id="ar-mathfigures-panel-kashiwara" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-kashiwara">
<div class="agent-intro">
<h2>柏原正树：代数分析的缔造者与晶体基的发现者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1947–</td></tr>
<tr><td><strong>籍贯</strong></td><td>日本，茨城县结城市（近东京）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；京都大学数理解析研究所（RIMS）名誉教授与项目教授，京都大学高等研究院（KUIAS）特任教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>D-模理论、SKK 论文、晶体基（crystal bases）、Riemann–Hilbert 对应、《流形上的层》；2025年阿贝尔奖</td></tr>
</table>
</div>

<h3>一、佐藤学派与代数分析</h3>
<p>柏原正树1947年生于日本茨城县结城市，父亲在农林省工作，全家常因调动而搬迁。让他爱上代数的是一道叫"鹤龟算"的题目：已知头与脚的总数，求鹤与龟各有多少。他着迷的是那种"把方法一般化，用来解决一整类问题"的感觉。在东京大学，他选了佐藤干夫（1928–2023）的研究生讨论班，从此走进一个新领域——佐藤创立的代数分析，主张用代数的工具去理解函数与线性偏微分方程的性质，把微分方程的解看作"层"的截面。读研究生期间，他随佐藤与河合隆裕赴法国，在那里遇到了一生的合作者皮埃尔·沙皮拉。</p>

<h3>二、D-模：把微分方程变成代数</h3>
<p>1970年，二十三岁的柏原在佐藤指导下完成硕士论文，为 D-模理论奠定了基础。思路是把微分算子装进一个环（微分算子环），把微分方程的解视作这个环上的模，于是分析的问题被翻译成代数与几何的问题。这篇论文此后二十五年里只有日文版，影响却早已跨国界，最终被译成英文。1973年，他与佐藤、河合隆裕联名发表的文章（被称为"SKK 论文"）证明了代数分析中的两项关键结果。他1971年转入京都大学数理解析研究所（RIMS），1974年获京都大学博士学位，此后任名古屋大学副教授，1977年赴麻省理工学院，1978年起长驻 RIMS，并两度出任所长。</p>

<h3>三、晶体基：量子群的组合之钥</h3>
<p>1990年，柏原提出了量子群的晶体基（crystal bases）。量子群源自统计力学中的格点模型，其结构复杂难解；晶体基的妙处在于，它让量子群在某种极限下退化为一个有向图——即"晶体图"——把连续、代数的对象压缩成离散的组合对象。这一工具让表示论中大批悬而未决的问题得以攻克，并在几何、拓扑与纽结理论中继续发挥作用。同年他与沙皮拉合著的《流形上的层》出版，他后来称这是自己最重要的著作之一。他一生与七十多位数学家合作，有些想法甚至以未发表的形式在同行间流传，例如被称作"柏原西瓜切割定理"的结果。</p>

<h3>四、影响与荣誉</h3>
<p>柏原1981年获弥永奖，1988年与河合隆裕共同获朝日奖并获日本学士院奖，2007年当选日本学士院院士，2018年获国际数学联盟陈省身奖章与京都奖，2020年获日本瑞宝重光章，2023与2024年两度获国际基础科学大会前沿科学奖。2025年，他"因对代数分析与表示论的基础贡献，特别是 D-模理论的发展与晶体基的发现"获阿贝尔奖，成为该奖首位亚洲得主。2010年退休后他转为 RIMS 名誉教授，并以项目教授身份继续研究，2019年起兼任京都大学高等研究院特任教授；他还把陈省身奖章的部分奖金捐给了 RIMS。</p>
</div>
</div>

<div id="ar-mathfigures-panel-bombieri" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-bombieri">
<div class="agent-intro">
<h2>恩里科·邦别里：横跨素数与极小曲面的分析大师</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1940–</td></tr>
<tr><td><strong>籍贯</strong></td><td>意大利，米兰</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿高等研究院 IBM John von Neumann 数学教授（荣休）</td></tr>
<tr><td><strong>代表成就</strong></td><td>大筛法与 Bombieri–Vinogradov 定理、局部 Bieberbach 猜想、与 De Giorgi 和 Giusti 合作解决高维 Bernstein 问题</td></tr>
</table>
</div>

<h3>一、大筛法与素数的平均分布</h3>
<p>素数在算术级数中如何分布，是解析数论的中心问题之一。狄利克雷定理只给出渐近主项，而对单个模的余项所能证明的界，至今仍远不能满足需要——广义黎曼假设若成立则可以，但它仍未获证。邦别里的切入点是退一步求平均：他证明，当模在一个范围内取平均时，余项的平均大小远小于单个情形所能证明的界。这就是<strong>Bombieri–Vinogradov 定理</strong>（又称 Bombieri 中值定理，与 A. I. 维诺格拉多夫并称）。它是大筛法最漂亮的应用之一，在大量场合可以替代尚未证明的广义黎曼假设，成为筛法与素数分布研究中的标准工具。大筛法本身源于林尼克（Yuri Linnik）与雷尼（Alfréd Rényi）的开创，邦别里 1965 年发表在《Mathematika》上的《On the large sieve》把它打磨成一件锋利的通用工具；他与达文波特合作的《Small differences between prime numbers》则是筛法与素数间距研究的经典。1976 年，邦别里又发展出称为"渐近筛"的技术，进一步拓展了筛法的适用边界。</p>

<h3>二、单叶函数与局部 Bieberbach 猜想</h3>
<p>比伯巴赫猜想（Bieberbach conjecture）是单叶函数论中长期悬而未决的核心问题：单位圆盘上的单叶解析函数，其泰勒系数应当满足怎样的估计。邦别里在 1967 年前后（发表于《Inventiones Mathematicae》）处理了该猜想的<strong>局部形式</strong>，即系数估计在某种渐近意义下的情形。他引入的方法与视角深刻影响了后续研究，为 1984 年德布朗热（Louis de Branges）最终证明完整猜想准备了条件。细看他一生的几项成名作，会发现一条共同的线索：面对一个关于极值或上界的猜想，他不急于正面强攻，而是先把问题改造成一个可以估计、可以计算的形状——素数分布如此，单叶函数的系数如此，极小曲面也是如此。这项工作与他在素数方面的工作看起来相隔极远，却共享同一种气质：把一个关于极值的猜想，转化为可以用分析与变分手段处理的问题。</p>

<h3>三、极小曲面与 Bernstein 问题</h3>
<p>从 1960 年代中期起，邦别里把相当一部分精力投向极小曲面，更一般地是高维欧氏空间中的极小子流形，其中不少工作与恩尼奥·德乔治（Ennio De Giorgi）、恩里科·朱斯蒂（Enrico Giusti）合作。Bernstein 问题是这一领域的经典难题：欧氏空间中定义在整个平面上的极小图，是否必为平面？伯恩斯坦本人解决了二维情形；而高维的答案要微妙得多。1969 年，邦别里与德乔治、朱斯蒂彻底解决了这个问题——他们证明在维数不低于八时，Bernstein 定理不再成立，即存在非平凡的整极小图；结合西蒙斯等人此前对低维情形的正结果，这个问题由此画上句号。这项工作是几何变分学与偏微分方程正则性理论的一座里程碑，也把极小曲面研究与几何测度论紧紧绑在一起。邦别里此后在变分问题与椭圆方程上继续耕耘，1974 年温哥华国际数学家大会上他正是以《Variational problems and elliptic equations》为题作全会报告。</p>

<h3>四、影响与荣誉</h3>
<p>邦别里 1940 年 11 月 26 日生于米兰，1963 年在米兰大学取得学位（导师乔瓦尼·里奇），随后赴剑桥三一学院随达文波特深造。他先后任教于卡利亚里大学、比萨大学（1966–1974）与比萨高等师范学校（1974–1977），1977 年移居美国，任普林斯顿高等研究院数学学院教授，2011 年转为荣休，职衔为 IBM John von Neumann 数学教授。1974 年温哥华国际数学家大会上他获菲尔兹奖并作全会报告；此外还获得卡乔波利奖（1966）、费尔特里内利奖（1976）、巴尔赞奖（1980）、约瑟夫·杜布奖（2008，因与瓦尔特·古布勒合著的《Heights in Diophantine Geometry》）、费萨尔国王国际奖（2010，与陶哲轩共享）与克拉福德奖（2020）。他也是法国科学院、美国国家科学院、林琴科学院与欧洲科学院院士。1980 年他补上了有限单群分类中缺失的一环——特征 3 的 Ree 型群的唯一性证明。他还是出了名的义务审稿人，曾为佩尔·恩夫洛关于不变子空间问题的复杂论文审稿。学生中有翁贝托·扎尼耶。</p>
</div>
</div>

<div id="ar-mathfigures-panel-baker" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-baker">
<div class="agent-intro">
<h2>艾伦·贝克：让超越数论进入可计算时代的数论家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1939–2018</td></tr>
<tr><td><strong>籍贯</strong></td><td>英国，伦敦</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；剑桥大学纯粹数学教授、三一学院院士</td></tr>
<tr><td><strong>代表成就</strong></td><td>贝克定理（Gelfond–Schneider 定理的推广）、代数数对数线性型的有效下界、Thue 方程解的有效上界</td></tr>
</table>
</div>

<h3>一、从希尔伯特第七问题出发</h3>
<p>1900 年希尔伯特在他那份著名的问题清单里提出第七问题：当底数取一个不等于 0 或 1 的代数数、指数取一个无理代数数时，所得的幂是否必定超越。1934 年 Gelfond 与 Schneider 各自独立给出了肯定回答，但他们的定理一次只能对付一个底数配一个指数。艾伦·贝克把这一结果推广到了任意多个因子的乘积：只要若干个底数都不取 0 或 1、若干个指数都是无理代数数，并且这些指数与 1 放在一起在有理数域上线性无关，那么由它们相乘得到的那个数必定是超越数。这条后来被称为贝克定理的结论，一举生产出大批此前数学家从未辨识过的超越数，也正是 1970 年菲尔兹奖授予他的直接理由。有意思的是，希尔伯特本人曾预言黎曼假设会比这类数的超越性更早被解决；事实恰好相反，图兰（Paul Turán）在尼斯大会的报告里专门提到这一点，以衬托贝克成就的分量。贝克的学术起点在伦敦大学学院，他是哈罗德·达文波特（Harold Davenport）的学生，随后转到剑桥三一学院，1964 年获博士学位，论文题目为《Some Aspects of Diophantine Approximation》。</p>

<h3>二、线性型对数与"有效"的意义</h3>
<p>如果说定理本身是一枚果实，那么贝克真正锻造的利器是摘取它的方法：对代数数对数的线性组合给出下界估计。此前这类估计大多只具有存在性——人们知道某个量非零，却无法说出它究竟有多小。贝克给出的下界是<strong>有效的</strong>，即其中出现的常数原则上可以具体地算出来。这一区别在数论中至关重要：它把超越数论从"知道存在"推进到了"能够计算"。贝克在 1966 至 1967 年发表的系列论文《Linear forms in the logarithms of algebraic numbers》奠定了这套技术，此后它成为整个超越数论与丢番图逼近的标准工具，其中的常数形式也被后来的学者反复改进与精细化，并催生了以 Baker、Wüstholz 等人为代表的有效方法学派。同一套估计随即被用于处理代数数域的类数与单位群问题——贝克本人与斯塔克（Harold Stark）分别在这一方向上取得成果，使得某些此前被认为无从着手的分类问题终于可以收官。</p>

<h3>三、丢番图方程的可计算边界</h3>
<p>有效性的直接回报体现在方程求解上。沿着 Axel Thue、Carl Ludwig Siegel 与 Klaus Roth 开辟的道路，人们早已知道一类二元型方程的解只有有限多个，但证明给出的界是不可计算的，因而无法穷举。贝克改变了局面：对于形如 $f(x,y)=m$ 的 Thue 方程，其中 $f$ 是次数不小于 3 的不可约整系数二元型，他证明存在一个仅依赖于次数与系数的可有效计算的界，使得任何一组解的两个坐标绝对值都不超过它。理论上讲，这类方程的全部解从此可以被逐一列出。此后有效方法又被推广到 S-单位方程等更一般的情形，成为今天显式求解一大类丢番图方程的常规手段。贝克还把这套方法系统地带入丢番图几何与丢番图分析，让一度只能定性讨论的问题变成可以逐案算清的问题，从而拓宽了整个领域的可能性边界。</p>

<h3>四、影响与荣誉</h3>
<p>1970 年尼斯国际数学家大会上，三十一岁（按通行记载）的贝克获得菲尔兹奖；1972 年他又获剑桥大学亚当斯奖。1974 年他出任剑桥大学纯粹数学教授，直至 2006 年转为荣休，并自 1964 年起终身担任三一学院院士。他是英国皇家学会院士、美国数学会首批会士，也是印度国家科学院外籍院士。他的《Transcendental Number Theory》（1975）与《A Concise Introduction to the Theory of Numbers》是数论学生的常备读物。他培养出约翰·科茨（John Coates）、罗杰·希思-布朗（Roger Heath-Brown）、戴维·马瑟（David Masser）等一批数论中坚。1999 年苏黎世曾为他六十寿辰举办数论会议，会后结集为《A Panorama of Number Theory or The View from Baker's Garden》。2018 年 2 月 4 日，他因严重中风在剑桥去世。贝克一生低调，几乎不谈自己的定理有多难；但他留下的那些下界，把超越数论从一门"证明某个数是超越的"的艺术，变成了一门能给出具体数值的学科。</p>
</div>
</div>

<div id="ar-mathfigures-panel-beilinson" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-beilinson">
<div class="agent-intro">
<h2>亚历山大·贝林森：用几何重写表示论的奠基者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1957–</td></tr>
<tr><td><strong>籍贯</strong></td><td>俄罗斯/美国，生于莫斯科</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；芝加哥大学（曾任教于麻省理工学院）</td></tr>
<tr><td><strong>代表成就</strong></td><td>反常层理论（与伯恩斯坦、德利涅）；贝林森—伯恩斯坦局部化与 Kazhdan–Lusztig 猜想的证明；动机上同调的贝林森猜想；手征代数（与德林费尔德）</td></tr>
</table>
</div>

<h3>一、莫斯科的第二数学学校</h3>
<p>1957年6月13日，贝林森生于莫斯科，父亲是物理学家。七年级后他转入著名的第二数学学校，那里的课由大学教授与研究生主持；1972年，经帕尔申引荐，他走进了盖尔范德的讨论班——在莫斯科大学主楼十四层的大教室里，晚六点到七点是自由讨论，七点盖尔范德出现，讨论常常延续到夜里十点。他报考莫斯科大学数学系落第（当时系里对犹太姓氏考生的系统性排斥人所共知），转而进入师范学院，后来反倒觉得这是件幸事。1977年他转到莫斯科大学，师从尤里·马宁；第一篇论文研究射影空间上的凝聚层，与伯恩斯坦—盖尔范德—盖尔范德几乎同时得到的相同结论一起，第一次让代数几何界看清：凝聚层的导出范畴本身就是代数簇的不变量。</p>

<h3>二、局部化与 Kazhdan–Lusztig 猜想</h3>
<p>1979年卡日丹与卢斯蒂格提出的多项式与猜想，把不可约表示的特征标归结为一类组合对象的计算，当时无人知道从何下手。1981年，贝林森与伯恩斯坦宣布了一个证明：他们把李代数的表示"铺开"到旗簇上，使之成为其上的 D-模——这套今天称为贝林森—伯恩斯坦局部化的机制，不单解决了猜想（布雷林斯基与柏原也独立给出了证明），而且给出了整个表示范畴的几何图景。同一时期，他与伯恩斯坦、德利涅在1982年的《Faisceaux pervers》中引入反常层与 t-结构，把导出范畴的语言真正推到了拓扑与表示论的中心：分解定理与相交上同调从此有了自然的家。</p>

<h3>三、动机与贝林森猜想</h3>
<p>1982年，贝林森提出了一组关于动机上同调的猜想：代数簇应当有一列"动机上同调群"，它们是某个阿贝尔群复形的超上同调，并通过一条动机谱序列与代数 K 理论相联，其形状与拓扑中的 Atiyah–Hirzebruch 谱序列如出一辙。他还猜测 L 函数在整数点的特殊值可以用调节子（regulator）表示出来，把数论中最深的几类猜想放进了同一个框架。这些猜想至今大部分仍未获证明，却直接催生了沃耶沃茨基的概形同伦论，也让"动机"从一个哲学式的设想变成了可以具体操作的领域。</p>

<h3>四、从手征代数到芝加哥</h3>
<p>1988年贝林森在朗道理论物理研究所取得博士学位，此前已在该所从事研究，1988至1998年任麻省理工学院教授，之后转任芝加哥大学至今。1990年代起他与德林费尔德合作重建顶点代数理论，2004年出版《Chiral Algebras》，成为共形场论、弦论与几何 Langlands 纲领的代数基础。1985年他获莫斯科数学会奖，1999年获奥斯特洛夫斯基奖，2017年当选美国国家科学院院士，2018年与德林费尔德共享沃尔夫数学奖，2020年又与卡日丹共享邵逸夫数学科学奖。他那一代莫斯科数学家习惯把谈话当作研究的手段，而贝林森把这种习惯变成了定理：他几乎从不写纯技术性的论文，每一篇都试图换掉问题的地基。</p>
</div>
</div>

<div id="ar-mathfigures-panel-birkar" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-birkar">
<div class="agent-intro">
<h2>考切尔·比尔卡尔：为法诺簇划定边界的双有理几何学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1978–</td></tr>
<tr><td><strong>籍贯</strong></td><td>伊朗裔库尔德人，英国国籍，生于伊朗库尔德斯坦省马里万县</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；清华大学丘成桐数学科学中心教授（2021 年起全职加入），此前任剑桥大学教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>证明 Shokurov 补除子有界性猜想与 Borisov–Alexeev–Borisov（BAB）猜想，确立法诺簇的有界性；与 Cascini、Hacon、McKernan 合作解决对数翻转存在性、对数典范环有限生成与一般型代数簇极小模型存在性</td></tr>
</table>
</div>

<h3>一、从库尔德山村到诺丁汉</h3>
<p>比尔卡尔出生于伊朗西部库尔德斯坦省马里万县的一个农村家庭，家里有六个孩子，成长于两伊战争的年代；最初的数学启蒙来自几位兄长。他在德黑兰大学读完数学本科，2000 年获学士学位，同年以难民身份移居英国并申请政治庇护——他后来把自己的名字改为 Caucher Birkar，在库尔德语中意为"迁徙的数学家"。2001 至 2004 年，他在诺丁汉大学攻读博士，导师是 Ivan Fesenko 与 Vyacheslav Shokurov，2003 年获伦敦数学会 Cecil King 旅行奖学金，被评为该年度最有前途的博士生。此后他在华威大学做了两年研究，2006 年进入剑桥大学，历任讲师、高级讲师、Reader 与教授，2015 年晋升为数学教授。他的办公室里挂着两张格罗滕迪克的照片——那位同样以难民身份成为菲尔兹奖得主的数学家，是他最敬重的人；他始终强调，自己的库尔德身份属于文化认同，而非民族主义或政治立场。</p>

<h3>二、极小模型纲领：一场持续数十年的合围</h3>
<p>代数几何的一个宏大目标是给所有代数簇分类，如同生物学给物种分类。二十世纪末成形的"极小模型纲领"（minimal model program）就是这套分类的路线图：通过一系列被称为翻转（flip）与收缩的手术，把复杂的代数簇逐步化简为少数几种典范模型。比尔卡尔与 Paolo Cascini、Christopher Hacon、James McKernan 合作，在 Shokurov 以及 Hacon–McKernan 前期工作的基础上，一举解决了纲领中最核心的几道关卡：对数翻转的存在性、对数典范环的有限生成性，以及一般型对数代数簇极小模型的存在性。别的研究者（如 Hacon 与许晨阳）也独立得到了部分结果。他还在对数典范奇点的框架下证明了极小模型与丰度猜想的关键情形，与合作者几乎完成了特征足够大的域上三维簇的极小模型纲领，并与张伟合作解决了饭高猜想中"关于底"的那一半，把这一经典问题化归到小平维数为零的特殊情形。</p>

<h3>三、BAB 猜想：法诺簇终究是有限的</h3>
<p>法诺簇（Fano variety）是一类反典范丛为正的代数簇，某种意义上它们是代数几何里"最正"的对象，也被视为分类理论的基本砖块。一个古老的问题是：给定维数与奇性条件，这类簇是否只有有限多个形变族？这就是 Borisov–Alexeev–Borisov 猜想，它关乎法诺簇的有界性（boundedness）。有界性的含义可以这样理解：所有满足条件的法诺簇只落在有限多个代数族之中，因而可以用有限多个参数族来描述——这既是分类的前提，也是构造其模空间的前提。比尔卡尔独立证明了它，同时证明了 Shokurov 关于补除子有界性的猜想——后者是他手中的关键技术：补除子（complement）的存在性让他能对奇性加以一致的控制，从而把有界性问题从局部推向全局。这两个结果的组合，使人们对法诺簇的"家族谱系"第一次有了整体的、有限的把握。2018 年国际数学联盟的颁奖词，正是表彰他"证明了法诺簇的有界性以及对极小模型纲领的贡献"。</p>

<h3>四、影响与荣誉</h3>
<p>比尔卡尔的菲尔兹奖经历本身就成了一段数学界的逸事：2018 年 8 月 1 日，在里约热内卢举行的国际数学家大会开幕式上，他刚领到奖章，装在公文包里的奖牌和钱包就在会场失窃；大会组织方在 8 月 4 日为他举行了特别补授仪式，于是有人打趣说他成了"第一个两次获得菲尔兹奖的人"。他此前获 2010 年 Leverhulme 奖与巴黎数学科学基金会奖，2016 年获美国数学会 Moore 研究论文奖；2019 年当选英国皇家学会院士与欧洲科学院院士，同年获萨拉丁大学荣誉博士学位，2021 年获诺丁汉大学名誉教授。在丘成桐的邀请下，他于 2021 年全职加入清华大学丘成桐数学科学中心，开设"双有理几何"课程，指导多名博士后与博士生，并推动清华大学与帝国理工学院、加拿大菲尔兹数学研究所开展博士后联合培养；2025 年 9 月获颁清华大学"金光求真讲席教授"，同年当选中国科学院外籍院士。他曾说，希望自己的奖章能让世界上四千万库尔德人的嘴角露出一丝微笑。</p>
</div>
</div>

<div id="ar-mathfigures-panel-bernstein" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-bernstein">
<div class="agent-intro">
<h2>约瑟夫·伯恩斯坦：为 D-模与表示论搭起几何骨架的数学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1945–</td></tr>
<tr><td><strong>籍贯</strong></td><td>俄罗斯/以色列，生于莫斯科</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；特拉维夫大学（曾任教于哈佛大学）</td></tr>
<tr><td><strong>代表成就</strong></td><td>Bernstein–Sato 多项式；BGG 理论；反常层的发现；贝林森—伯恩斯坦局部化与 Kazhdan–Lusztig 猜想的证明；Bernstein 中心与 Bernstein 分解</td></tr>
</table>
</div>

<h3>一、莫斯科的奥林匹克少年</h3>
<p>1945年，伯恩斯坦生于莫斯科，中学时代就拿下国际数学奥林匹克的金牌。他在莫斯科大学接受训练，很早就进入盖尔范德的圈子，与盖尔范德父子（伊斯雷尔与谢尔盖）长期合作。1970年代，他与两位盖尔范德一起研究范畴 O 与 Verma 模，引入了今天称为 BGG 分解的结果，把一个抽象代数里的表示范畴，重新描述成可以用组合方式计算的对象。他在二十六岁前后的博士工作中，发展出一套关于带多项式系数的微分算子的代数理论，并引入了后来以他命名的多项式。1980年代他曾长期在哈佛大学任教，1993年移民以色列，出任特拉维夫大学教授。</p>

<h3>二、Bernstein–Sato 多项式</h3>
<p>给定一个多项式，是否存在一个微分算子和一个单变量多项式，使得算子作用在它的幂上等于该多项式作用在低一次的幂上？伯恩斯坦证明这样的多项式一定存在，并且它是一个非常特殊的、根全为有理数的对象，今天称为 Bernstein–Sato 多项式（也称 b-函数）。它编码了原多项式的奇点性质：它的根决定了相关的局部 ζ 函数与渐近展开，也决定了 D-模理论中许多基本操作是否可行。这条原本来自表示论的结果，后来成了代数几何、奇点理论与数理逻辑中的通用工具；所谓"伯恩斯坦不等式"——外尔代数上模的维数下界——同样是这套理论的一个副产品。</p>

<h3>三、反常层与 Kazhdan–Lusztig 猜想</h3>
<p>1982年，伯恩斯坦与贝林森、德利涅在《Faisceaux pervers》中引入了反常层。奇异空间上的上同调理论此前一直缺少一个"表现良好"的范畴：相交上同调不是通常意义下的层，无法纳入标准的六函子体系。反常层与 t-结构提供了这个范畴，分解定理从此有了自然的家。几乎同时，他与贝林森证明了卡日丹—卢斯蒂格猜想：他们用局部化把李代数的表示铺开成旗簇上的 D-模，让猜想变成了一个几何命题。这项工作与反常层一起，奠定了今天所说的几何表示论的基础——沃尔夫基金会的授奖理由正是他们在创立几何表示论中的作用。</p>

<h3>四、p-adic 群与影响荣誉</h3>
<p>在此后的几十年里，伯恩斯坦把同样的几何直觉带进了 p-adic 群的表示论。他引入了后来以他命名的中心与分解：Bernstein 中心控制着光滑表示范畴的整体结构，Bernstein 分解则把这个范畴切成由惯性类标记的若干块，使 p-adic 群的表示论第一次有了可以分类的组织方式。他还为自守形式的解析理论提供了新的途径。他的写作以简洁、彻底清晰、追求根本答案著称，学生们常把他的一句标准挂在嘴边：如果证明写不出来，说明还没有真正理解。2026年，他与大卫·卡日丹共同获得沃尔夫数学奖，表彰他们在表示论、自守形式与代数几何方面的基础工作，以及创建几何表示论的作用。</p>
</div>
</div>

<div id="ar-mathfigures-panel-borcherds" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-borcherds">
<div class="agent-intro">
<h2>理查德·博切尔兹：让魔群与模函数相遇的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1959–</td></tr>
<tr><td><strong>籍贯</strong></td><td>英国，生于南非开普敦</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；美国加州大学伯克利分校教授，曾长期任教于剑桥大学</td></tr>
<tr><td><strong>代表成就</strong></td><td>证明康韦–诺顿"魔群月光"猜想；引入顶点算子代数与广义 Kac–Moody 代数（博切尔兹代数）</td></tr>
</table>
</div>

<h3>一、一个不该出现的巧合</h3>
<p>二十世纪有限单群分类的最后一项成果，是那个被称作"魔群"（Monster）的庞然大物，它的元素个数约为 $8 \times 10^{53}$。1978 年前后，麦凯注意到一件荒唐的事：模函数 $j$ 的傅里叶展开中，第二个系数 196884 恰好等于魔群最小非平凡不可约表示的维数 196883 加一。这在当时像一句玩笑——两个领域之间没有任何已知的通道。康韦与诺顿随后把这一系列巧合整理成"魔群月光猜想"（monstrous moonshine），断言存在一个以魔群为对称群的无穷维分次模，其分次维数正是那些模函数的系数。猜想提出后十余年间无人能证，它的证明需要的工具，当时还没有被造出来。</p>

<h3>二、造工具：顶点代数与博切尔兹代数</h3>
<p>博切尔兹在剑桥三一学院师从约翰·康韦，博士论文研究利奇格（Leech lattice）与其他格。正是康韦对格、球堆积与有限群的热情，把他引向了月光问题。他首先在 1986 年前后系统发展了顶点算子代数（vertex operator algebra）——这套结构原本来自弦论中"在时空某点插入一个场"的物理直觉，被他提炼成严格的代数对象。接着他构造了一类新的无穷维李代数，即今天所说的广义 Kac–Moody 代数或博切尔兹代数，其单根允许"虚"根，从而容纳月光所需的那种病态对称。有了这套代数，他造出了一个被戏称为"假魔群"的李代数，并证明它的分母函数正是所期待的那些模函数。1992 年，康韦–诺顿猜想被完整证明。奇妙之处在于：证明的骨架不是群论，而是弦论借来的语言。</p>

<h3>三、自守形式与物理的回声</h3>
<p>月光定理并没有封闭成一个孤立的漂亮结果。博切尔兹由此发展出一整族带奇点的自守形式——它们在格拉斯曼流形等空间上取无穷乘积形式，其奇点沿着某些根的超平面分布。这类"博切尔兹乘积"后来反复出现在弦论与超对称规范理论的计数问题中，比如某些黑洞态数目的统计。反过来说，物理的直觉也不止一次为他提供了猜想：他多次强调，自己在月光问题上的关键思路，来自把物理学家眼中理所当然的东西翻译成数学家可以验证的命题。这种在两个学科之间往返的方式，是他全部工作的底色。</p>

<h3>四、影响与荣誉</h3>
<p>1998 年在柏林举行的第 23 届国际数学家大会上，博切尔兹与孔采维奇、高尔斯、麦克马伦一同获颁菲尔兹奖，获奖理由明确提到顶点代数、博切尔兹代数、月光猜想的证明以及一类新的自守无穷乘积。此前他已获得 1992 年欧洲数学会奖与伦敦数学会怀特海奖，1994 年当选英国皇家学会院士，2014 年当选美国国家科学院院士。自 1999 年起他任教于加州大学伯克利分校，近年研究兴趣转向量子场论。他公开谈及自己可能具有阿斯伯格综合征相关的特质，这段自述也使他在公众视野中成为"数学天才"形象的另一种、更诚实的版本。</p>
</div>
</div>

<div id="ar-mathfigures-panel-bott" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-bott">
<div class="agent-intro">
<h2>拉乌尔·博特：用莫尔斯理论量出空间周期的几何学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1923–2005</td></tr>
<tr><td><strong>籍贯</strong></td><td>匈牙利裔美国籍；生于匈牙利布达佩斯</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；哈佛大学教授（曾任 William Casper Graustein 讲座教授）</td></tr>
<tr><td><strong>代表成就</strong></td><td>Bott 周期性定理、Morse–Bott 函数、Atiyah–Bott 不动点定理、Borel–Weil–Bott 定理</td></tr>
</table>
</div>

<h3>一、从电路网络到代数拓扑</h3>
<p>1923 年 9 月 24 日，博特生于布达佩斯，父亲有奥地利血统，母亲是匈牙利犹太人；他在捷克斯洛伐克的布拉迪斯拉发长大，1938 年全家迁往加拿大，二战期间他在加拿大陆军服役于欧洲。他在麦吉尔大学读的是电气工程，1945 年获学士学位、次年获硕士学位，随后转向数学，1949 年在卡内基理工学院（今卡内基梅隆大学）取得博士学位，导师是 Richard Duffin，论文题目就叫《电网络理论》。他与 Duffin 一起证明了滤波器综合的一条基本定理：给定正实函数，能否用无源的电感电容网络把它实现出来。此后他先后任职于密歇根大学与普林斯顿高等研究院，1959 年加入哈佛大学，在那里工作到 1999 年。他常说，自己把"网络看成调和理论的离散版本"，正是电路里的拓扑直觉把他领进了代数拓扑。他在高等研究院结识 Arnold Shapiro 并与之合作，从此彻底转向纯数学；从工程到数学的这段弯路，反而给了他一种罕见的思考方式——先对具体结构有图像，再谈抽象。</p>

<h3>二、周期性定理</h3>
<p>1950 年代后期，博特用莫尔斯理论研究李群的同伦群，得到了那个以他命名的周期性定理：酉群与正交群的同伦群呈现出周期二与周期八的循环模式。这条结果把看似杂乱的高维同伦群整理成一张有韵律的表，是 K 理论与后来的指标定理得以建立的地基。为做这件事，他推广了莫尔斯理论——允许临界点构成非退化的临界子流形，这就是今天所说的 Morse–Bott 函数。它比原版更贴合带对称性的空间，也因此成为处理有群作用的流形的标准工具。有人把周期性定理比作化学中的元素周期表；博特本人则乐于强调，它其实来自一个朴素的念头：把空间上的环路看成某个函数空间里的点。这一定理的证明长达数十页，核心技巧是把莫尔斯理论用到李群的路径空间上：那里的临界点正是测地线，而它们的指标恰好按周期重复出现。</p>

<h3>三、与阿蒂亚的长期合作</h3>
<p>1960 年代起，博特与 Michael Atiyah 的合作持续了数十年。他们共同给出 Atiyah–Bott 不动点定理，把 Lefschetz 不动点定理与 Riemann–Roch 型公式熔为一炉，这一定理最初被人按讨论会的地点戏称为"伍兹霍尔不动点定理"；博特对指标定理本身的形成也有关键贡献。1980 年代，两人又转向规范场论：用黎曼曲面上的杨–米尔斯方程，算出稳定向量丛模空间的拓扑信息，开辟了用无穷维莫尔斯理论研究模空间的新路。此外，他与 Borel、Weil 的工作汇成了 Borel–Weil–Bott 定理，用全纯层与上同调来构造李群的表示。博特的风格是"用最少的技术抓住最硬的事实"，他很少为推广而推广，却总能挑中那些后来被证明是枢纽的问题；阿蒂亚曾说，与博特合作最大的享受，是他总能在冗长的计算中途指出哪一步其实不必做。</p>

<h3>四、影响与荣誉</h3>
<p>2000 年的沃尔夫数学奖表彰他在拓扑与微分几何中的深刻发现，及其对李群、微分算子与数学物理的应用。此前他获 1964 年 Veblen 几何奖、1987 年美国国家科学奖章、1990 年斯蒂尔奖；2005 年当选英国皇家学会外籍会员。他的学生包括 Stephen Smale、Daniel Quillen、Robert MacPherson 与 Peter Landweber，几乎覆盖了其后几十年拓扑学与代数几何的半壁江山。他 1993 至 1995 年间出版的四卷本《文集》记录了这段历程。2005 年 12 月 20 日，博特在加州圣迭戈因癌症去世。他在晚年的一次访谈里说，自己最喜欢的数学，是那种"把两个看起来毫不相干的东西接在一起"的瞬间。他的四卷本《文集》按主题编排，几乎可以当作二十世纪后半叶几何学的一部侧记来读：从电路、莫尔斯理论、叶状结构一直到规范场，跨度之大，在同代数学家中并不多见。</p>
</div>
</div>

<div id="ar-mathfigures-panel-bourgain" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-bourgain">
<div class="agent-intro">
<h2>布尔甘：横跨分析各支的解题圣手</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1954–2018</td></tr>
<tr><td><strong>籍贯</strong></td><td>比利时，生于奥斯坦德</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿高等研究院教授，此前任教于伊利诺伊大学厄巴纳-香槟分校与法国高等科学研究所</td></tr>
<tr><td><strong>代表成就</strong></td><td>巴拿赫空间几何与高维凸性；调和分析、算术组合与卡克亚问题；非线性色散偏微分方程；与德梅特、古斯合作证明维诺格拉多夫均值定理</td></tr>
</table>
</div>

<h3>一、奥斯坦德起步的比利时人</h3>
<p>1954年2月28日，让·布尔甘生于比利时海滨城市奥斯坦德。他在布鲁塞尔自由大学（荷语）读数学，1977年获博士学位，导师是<strong>弗雷迪·德尔班</strong>，1981年至1985年在该校任教授。1985年起他同时在伊利诺伊大学厄巴纳-香槟分校与巴黎南郊的高等科学研究所任职，1994年转赴普林斯顿高等研究院，此后一直留在那里，直至去世；2012年至2014年间还兼任加州大学伯克利分校的访问学者。他长期担任《数学年刊》编委。2015年，比利时国王菲利普授予他男爵爵位。2014年末他被诊断出胰腺癌，2018年12月22日在比利时邦海登的一家医院去世，享年六十四岁。</p>

<h3>二、巴拿赫空间与高维凸性</h3>
<p>布尔甘的学术版图之广，在当代数学家中极为罕见，而他最先闯出声名的领域是<strong>巴拿赫空间的几何</strong>与高维凸几何。他与<strong>维塔利·米尔曼</strong>等人在凸体的局部理论中做出了一系列奠基性工作，1987年与米尔曼在马勒猜想上取得进展。1985年他证明了著名的<strong>布尔甘嵌入定理</strong>，说明任意度量空间都可以以可控的失真嵌入到维数远低于原空间的 lp 空间之中，这一结果后来在理论计算机科学与高维数据分析中被反复使用。他还提出了至今仍未完全解决的<strong>切片问题</strong>：一个凸体的体积与它的超平面截面体积之间，是否存在普适的常数比。这些工作共同塑造了人们对"高维空间究竟长什么样"的认识。</p>

<h3>三、调和分析、数论与偏微分方程</h3>
<p>进入1990年代，布尔甘几乎以一人之力开启了色散型非线性偏微分方程的现代时期：他建立了一整套框架，用以判断这类方程的解是否良态、波包如何在时间中相互干涉，并证明了 KdV 方程初值问题解的唯一性。他还在遍历论中解决了长期停滞的问题，在解析数论与调和分析中取得突破，2000年把<strong>卡克亚问题</strong>与算术组合联系起来，为这一经典难题注入了全新的方法。2015年，他与<strong>奇普里安·德梅特</strong>、<strong>拉里·古斯</strong>合作证明了维诺格拉多夫均值定理，这是解析数论中悬置数十年的核心猜想。他一生发表论文五百余篇，是普通研究型数学家产量的数倍。同行回忆，向他讲述自己的研究是件令人紧张的事：他常常当场从帽子里变出一套新技巧，把别人苦斗数月的问题轻松解决。</p>

<h3>四、影响与荣誉</h3>
<p>1994年苏黎世国际数学家大会上，布尔甘获菲尔兹奖，获奖理由涵盖了数学分析的若干核心议题：巴拿赫空间几何、高维凸性、调和分析、遍历论，以及数学物理中的非线性偏微分方程——在所有这些彼此相距甚远的领域，他都对长期停滞的问题取得了惊人突破。此前他已获1983年萨勒姆奖、1990年埃利·嘉当奖、1991年奥斯特罗夫斯基奖；此后又获2009年乌克兰国家科学院维尔纳茨基金质奖章、2010年<strong>邵逸夫数学奖</strong>、2012年与<strong>陶哲轩</strong>共同获得的克拉福德数学奖、2016年费尔特里内利奖、2017年数学突破奖，2018年获美国数学会斯蒂尔终身成就奖。他于2008年当选欧洲科学院院士，2009年当选瑞典皇家科学院外籍院士，2011年当选美国国家科学院院士。他深刻影响了陶哲轩等一代分析学家，其论文以思路跳跃、难以卒读著称，但其中的深刻思想，总会回报那些愿意坚持读下去的人。</p>
</div>
</div>

<div id="ar-mathfigures-panel-chern" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-chern">
<div class="agent-intro">
<h2>陈省身：整体微分几何的奠基者与引路人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1911–2004</td></tr>
<tr><td><strong>籍贯</strong></td><td>中国、美国，生于浙江嘉兴</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；南开数学研究所（今陈省身数学研究所）创办人，曾任西南联合大学、芝加哥大学、加州大学伯克利分校教授，美国国家数学科学研究所首任所长</td></tr>
<tr><td><strong>代表成就</strong></td><td>陈类与高斯–博内–陈公式；纤维丛理论的发展；陈–西蒙斯微分式</td></tr>
</table>
</div>

<h3>一、从嘉兴到普林斯顿</h3>
<p>1911 年，陈省身生于浙江嘉兴。1926 年考入南开大学数学系，1930 年毕业，随后在清华大学取得硕士学位；1934 年赴德国汉堡大学，师从布拉施克（Wilhelm Blaschke），两年后获博士学位。接着他到巴黎跟随法国几何学家埃利·嘉当（Élie Cartan）工作一年——这段经历被他本人视为一生中最关键的转折，嘉当的活动标架法从此成为他最趁手的工具。1937 年他回国，在西南联合大学任教至 1943 年；同年应邀赴普林斯顿高等研究院，在战争年代的美国完成了他最重要的两件工作。此后他任教于芝加哥大学与加州大学伯克利分校，1981 年出任美国国家数学科学研究所首任所长。</p>

<h3>二、陈类与高斯–博内–陈公式</h3>
<p>高斯–博内公式本来是二维曲面上的一条经典定理：把曲面各点的曲率积起来，得到的正是它的欧拉示性数。长期以来，人们不知道高维情形该怎样内蕴地表述。1944 年，陈省身给出了高维闭黎曼流形上这一公式的内蕴证明——不必把流形嵌入外围空间，而是用联络与曲率形式直接在流形上完成计算，这条公式后来被称为高斯–博内–陈公式。紧接着，他又为复向量丛定义了一族示性类，即今天所说的陈类。陈类把"丛有多扭曲"这一拓扑信息写成可以用曲率表示出来的微分形式，同时它本身又是拓扑不变量。它一出现就成了代数几何、复几何与指标理论的通用货币：几乎每一条"用曲率算拓扑"的定理，最终都要归结到陈类上。</p>

<h3>三、纤维丛、陈–西蒙斯与物理</h3>
<p>陈省身对纤维丛理论的发展，使整体微分几何从研究单个流形升级为研究流形上的结构。1974 年，他与西蒙斯（James Simons）合作发表《特征形式与几何不变量》，构造出后来以二人命名的陈–西蒙斯微分式。这个原本属于微分几何的三次形式，几十年后成了理论物理的标准语言：它在拓扑量子场论、规范场论与凝聚态物理中反复出现。陈省身晚年常说，数学中真正深刻的结构总会自己找到应用，陈–西蒙斯理论正是最好的例子。此外，他推广了齐性空间上的积分几何，建立基本的运动学公式，并发展出高维复流形上的值分布理论，其影响一直延伸到代数数论。</p>

<h3>四、影响与荣誉</h3>
<p>陈省身与埃尔德什共同获得 1983/84 年度沃尔夫数学奖，获奖理由是他对整体微分几何的杰出贡献深刻影响了整个数学。此外他还获得 1975 年美国国家科学奖章、美国数学会斯蒂尔终身成就奖与首届邵逸夫数学科学奖。他是中央研究院首届院士、美国国家科学院院士、英国皇家学会外籍会员，1994 年当选中国科学院首批外籍院士。1972 年后他多次回国讲学；1985 年创办南开数学研究所，把它办成立足国内、面向世界的数学人才基地，2000 年起定居南开。2002 年北京国际数学家大会推举他为名誉主席。他于 2004 年在天津逝世。2009 年国际数学联盟设立以他命名的陈省身奖，一颗小行星也被命名为"陈省身星"。</p>
</div>
</div>

<div id="ar-mathfigures-panel-douglas" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-douglas">
<div class="agent-intro">
<h2>杰西·道格拉斯：解出普拉托问题的美国几何分析家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1897–1965</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，生于纽约市</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；纽约市立学院（曾任教于麻省理工学院、哥伦比亚大学）</td></tr>
<tr><td><strong>代表成就</strong></td><td>普拉托问题的一般解；变分学反问题的解；极小曲面理论</td></tr>
</table>
</div>

<h3>一、一个悬了两百年的问题</h3>
<p>把一根弯成任意形状的铁丝浸入肥皂液，再取出来，铁丝上会蒙上一层薄膜——自然界总是让这层膜的面积极小。1760年拉格朗日提出了相应的数学问题：给定一条闭曲线，是否存在以它为边界、面积最小的曲面。十九世纪比利时物理学家普拉托用实验系统地研究过它，问题因此得名普拉托问题。黎曼、魏尔斯特拉斯、施瓦茨、勒贝格都碰过它，但一直没有人能证明这样的曲面一定存在。</p>

<h3>二、1931年的解</h3>
<p>杰西·道格拉斯1897年生于纽约，1916年以优异成绩毕业于纽约市立学院，1920年在哥伦比亚大学取得博士学位，导师是卡斯纳。此后他获得四年期的国家研究基金，先后在普林斯顿、哈佛、芝加哥、巴黎和哥廷根流动，始终盯着普拉托问题。1927年至1931年间他发表了一系列论文，最终在1931年的长文中给出完整解答：他不再直接极小化面积，而是改用与参数化相关的能量泛函，绕开了参数变换带来的困难，从而证明了极小曲面的存在性。几乎同时，蒂博尔·拉多也独立得到了解，两人的名字从此与这个问题连在一起。</p>

<h3>三、变分反问题与纽约讲台</h3>
<p>1930年道格拉斯受聘为麻省理工学院助理教授，1934年晋升副教授，1934—1935年任普林斯顿高等研究院研究员，1938—1939年再度成为该院成员。1940年与1941年他两度获得古根海姆基金，之后任教于布鲁克林学院和哥伦比亚大学。1955年他回到母校纽约市立学院任教授，在那里教到1965年去世。除极小曲面外，他还解决了变分学的反问题——把问题调转过来问：给定一族曲线，它们何时恰好是某个变分问题的极值曲线。</p>

<h3>四、影响与荣誉</h3>
<p>1936年，道格拉斯与拉尔斯·阿尔福斯共同成为首届菲尔兹奖得主，获奖理由正是他对普拉托问题的解决。1943年美国数学会授予他博歇纪念奖，表彰他在极小曲面方面的三篇论文；1946年他当选美国国家科学院院士。普拉托问题并未因他的解答而终结，反而敞开了一个领域：极小曲面的正则性、高维与一般流形情形、以及几何测度论中的种种推广，都是此后数十年几何分析的主题。肥皂膜这个日常现象，由此汇成了现代几何学中一条绵延不绝的支流。</p>
</div>
</div>

<div id="ar-mathfigures-panel-drinfeld" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-drinfeld">
<div class="agent-intro">
<h2>德林费尔德：朗兰兹纲领与量子群的架桥者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1954–</td></tr>
<tr><td><strong>籍贯</strong></td><td>乌克兰裔美国籍，生于苏联乌克兰哈尔科夫（今哈尔基夫）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；芝加哥大学哈里·普拉特·贾德森杰出服务教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>以德林费尔德模证明函数域上 GL2 的朗兰兹猜想；提出"量子群"并联系杨–巴克斯特方程；与贝林森重建顶点代数的手征代数理论</td></tr>
</table>
</div>

<h3>一、少年满分金牌与马宁门下</h3>
<p>1954年2月14日，德林费尔德出生在哈尔科夫一个犹太数学家庭。1969年，年仅十五岁的他代表苏联参加在布加勒斯特举行的国际数学奥林匹克，以四十分的满分摘得金牌，是当时取得满分的最年轻选手。同年他进入莫斯科国立大学，1974年毕业，此后在斯捷克洛夫数学研究所深造，1978年获副博士学位，1988年获科学博士学位。他的博士导师是<strong>尤里·马宁</strong>，那位把代数几何、数论与理论物理贯通于一身的大家。1981年至1999年，他任职于哈尔科夫低温物理与工程研究所的数学物理部门；1999年1月赴美，此后一直任教于芝加哥大学。早年的奥林匹克经历与莫斯科学派的训练，为他日后在两个相距甚远的领域同时发力埋下了伏笔。</p>

<h3>二、德林费尔德模：函数域上的朗兰兹猜想</h3>
<p>朗兰兹纲领1967年问世时，被视为一种非交换的类域论：它预言伽罗瓦表示与某些自守形式之间存在自然的一一对应，而"自然"由 L 函数的一致性来保证。然而这一条件是纯算术的，无法直接搬到一般的函数域上。1974年，二十岁的德林费尔德宣布证明了正特征整体域上 GL2 的朗兰兹猜想。为完成这一证明，他引入了一类全新的对象，最初称为<strong>椭圆模</strong>，今天通称<strong>德林费尔德模</strong>。他的思路是：用这些模的模空间上所谓"束"（shtuka）的平展上同调，去实现伽罗瓦表示与自守形式之间的对应。1983年他又发表短文，把朗兰兹猜想的范围大幅扩展，指出可以不用自守形式，而用自守的反常层或自守 D-模来表述，自守性与朗兰兹对应则可借赫克算子的作用来理解。这一视角催生了此后蓬勃发展的几何朗兰兹纲领。</p>

<h3>三、量子群与数学物理</h3>
<p>"量子群"这个词正是由德林费尔德命名的，指的是作为单李代数形变的那些霍普夫代数；几乎同时，日本的<strong>神保道夫</strong>独立得到了同类对象。德林费尔德把它们与<strong>杨–巴克斯特方程</strong>联系起来——后者是统计力学模型可解的必要条件——并把霍普夫代数推广为拟霍普夫代数，引入<strong>德林费尔德扭</strong>，用以分解与拟三角霍普夫代数相对应的 R 矩阵。在数学物理方面，他与马宁合作构造了杨–米尔斯瞬子的模空间（即 ADHM 构造，阿蒂亚与希钦独立得到同一结果），给出量子反散射方法的代数形式，并提出孤子理论中的德林费尔德–索科洛夫约化。2004年，他与<strong>亚历山大·贝林森</strong>合著《手征代数》，以与坐标无关的方式重建了顶点代数理论，这对二维共形场论、弦论和几何朗兰兹纲领都日益重要。</p>

<h3>四、影响与荣誉</h3>
<p>1990年在京都召开的国际数学家大会上，德林费尔德与琼斯、森重文、威滕一同获得菲尔兹奖，获奖理由正是他在朗兰兹纲领与量子群这两个领域带来的决定性突破——这两项工作各自引出了一整片后续研究的森林。此后他于1992年当选乌克兰科学院院士，2008年当选美国艺术与科学院院士，2016年当选美国国家科学院院士。2018年，他与同代的另一位大家共同分享<strong>沃尔夫数学奖</strong>；2023年又获<strong>邵逸夫数学科学奖</strong>。他开创的几何朗兰兹纲领至今仍是表示论、代数几何与场论交汇处最活跃的领域之一，而他那种把看似无关的结构并置起来、让它们彼此照明的风格，也深刻地影响了整整一代数学家。</p>
</div>
</div>

<div id="ar-mathfigures-panel-deligne" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-deligne">
<div class="agent-intro">
<h2>皮埃尔·德利涅：为韦伊猜想收官的代数几何大家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1944–</td></tr>
<tr><td><strong>籍贯</strong></td><td>比利时，布鲁塞尔埃特尔贝克（Etterbeek）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿高等研究院数学学院教授（荣休），曾任法国高等科学研究所（IHÉS）永久成员</td></tr>
<tr><td><strong>代表成就</strong></td><td>韦伊猜想的完全证明（有限域上的黎曼猜想类比）、Ramanujan–Petersson 猜想、权与混合 Hodge 理论、Deligne–Mumford 栈、反常层（perverse sheaves）</td></tr>
</table>
</div>

<h3>一、从布鲁塞尔到 IHÉS</h3>
<p>德利涅 1944 年 10 月 3 日生于布鲁塞尔的埃特尔贝克。他的数学启蒙颇为传奇：兄长比他年长七岁，早早给他讲负数相乘；中学老师杰夫·奈斯（Jef Nijs）把布尔巴基的《集合论》借给这个中学生，并把他的天赋介绍给雅克·蒂茨——蒂茨为他延后讲座的故事传为佳话：一次德利涅因中学活动缺席，蒂茨干脆把课推迟一周。他从布鲁塞尔自由大学毕业，1965 至 1966 年在巴黎高等师范学校听格罗滕迪克的课，1968 年获布鲁塞尔自由大学博士学位，1972 年在巴黎南大学（奥赛）以《Théorie de Hodge》完成第二篇博士论文，导师正是格罗滕迪克。1965 年起他在 IHÉS 工作，最初做的是 Zariski 主定理在概形框架下的推广；1970 年成为该所历史上最年轻的永久成员。1984 年他移师普林斯顿高等研究院。</p>

<h3>二、韦伊猜想的最后一环</h3>
<p>韦伊猜想是二十世纪代数几何的纲领性难题，它断言有限域上的代数簇，其 zeta 函数应当具有与黎曼 zeta 函数高度平行的性质：有理函数性、函数方程，以及一条"黎曼假设"——即 Frobenius 自同态的特征值具有某个精确的绝对值。前两条已由格罗滕迪克等人用 étale 上同调解决，第三条却迟迟攻不下来。1973 年（论文发表于 1974 年）德利涅完成了它：他为 Frobenius 特征值给出了所需的估计，从而把有限域上的黎曼猜想彻底证明。这项工作被公认为二十世纪代数几何的高峰之一，一个直接推论是久悬的 Ramanujan–Petersson 猜想对权大于 1 的模形式成立（权 1 的情形来自他与塞尔的合作）。它还带来了 Lefschetz 超平面定理与经典指数和的新估计等一大批成果。韦伊猜想由韦伊在 1940 年代末提出，格罗滕迪克用 étale 上同调把它变成一个可以着手的问题，而德利涅完成了最后、也最难的一步；他的证明把 Lefschetz 铅笔技术推到极致，并借助模形式理论的深刻结果，被后人视为二十世纪最出人意料的长证明之一。</p>

<h3>三、统一代数几何与代数数论</h3>
<p>德利涅的影响远超一条猜想。他在 Hodge 理论中引入"权"（weights）的观念，并在复几何的对象上加以检验；与穆西里·吕斯提格（George Lusztig）合作，用 étale 上同调构造李型有限群的表示；与拉波波特（Michael Rapoport）从精细的算术角度研究模空间，应用于模形式；与芒福德合作给出曲线模空间的新描述，催生了 Deligne–Mumford 栈（今日代数栈理论的标准对象）；他与贝林森、伯恩斯坦、加贝共同发展了反常层（perverse sheaves）理论。在 Hodge 理论方面，他引入权与混合 Hodge 结构的观念，为研究奇点与非紧簇的上同调提供了统一框架。针对格罗滕迪克纲领中缺失的"动机"理论，他定义了绝对 Hodge 类作为替代品，在许多场合绕开了尚未解决的 Hodge 猜想。1980 年他发表了更为一般的黎曼假设形式（即人们常说的"Weil II"），把这一思想推到更广阔的情形。这些工作把代数几何、表示论与数论编织成一张网，韦伊猜想的证明只是网上最亮的一个结。</p>

<h3>四、影响与荣誉</h3>
<p>1978 年赫尔辛基国际数学家大会上，德利涅获菲尔兹奖；此后又获亨利·庞加莱奖（1974）、克拉福德奖（1988，与格罗滕迪克共享）、巴尔赞奖（2004）、沃尔夫数学奖（2008，与芒福德、格里菲斯共享）与阿贝尔奖（2013）。阿贝尔奖的颁奖理由称他"对代数几何作出了开创性贡献，并因此对数论、表示论及相关领域产生了变革性影响"。他是普林斯顿高等研究院数学学院荣休教授，也是多国科学院的外籍院士。德利涅被同行称为罕见的"既能建造理论又能解决难题"的数学家；他常说，从格罗滕迪克那里学到的是不要以证明的困难为荣——困难意味着我们还没有理解，而理想的状态是画出一幅让证明变得显然的风景。</p>
</div>
</div>

<div id="ar-mathfigures-panel-deng" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-deng">
<div class="agent-intro">
<h2>邓煜：从硬球碰撞推导出流体方程</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1989–</td></tr>
<tr><td><strong>籍贯</strong></td><td>中国，广东深圳</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；芝加哥大学教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>从稀薄气体的硬球动力学严格导出玻尔兹曼方程；从非线性色散系统导出波动力学方程；以概率方法研究非线性薛定谔方程动力学</td></tr>
</table>
</div>

<h3>一、深圳、北大与普林斯顿</h3>
<p>邓煜 1989 年生于广东深圳，小学、中学均就读于深圳。2006 年，他代表中国参加第 47 届国际数学奥林匹克竞赛并夺得金牌，次年保送进入北京大学数学科学学院；2009 年转学至麻省理工学院，两年后取得学士学位，2015 年在普林斯顿大学获数学博士学位。此后他先在纽约大学柯朗数学科学研究所做博士后，2018 年起任南加州大学助理教授，2024 年加入芝加哥大学任教授。他的研究横跨偏微分方程、动力学理论、调和分析与统计物理，关心的是一个古老而根本的问题：微观的粒子如何涌现出宏观的方程。</p>

<h3>二、希尔伯特第六问题：从牛顿到玻尔兹曼</h3>
<p>1900 年，希尔伯特在巴黎提出二十三个问题，其中第六问题要求为物理学建立严格的公理化基础。它最具体的分支之一是：从遵循牛顿力学、彼此弹性碰撞的硬球粒子系统出发，严格推导出描述稀薄气体的玻尔兹曼方程。这一推导的难点在于时间尺度——朗道曾指出碰撞的瞬时性，而玻尔兹曼方程描述的是大量碰撞累积后的长期行为，两者之间的严格衔接长期缺失。2024 至 2025 年间，邓煜与扎希尔·哈尼（Zaher Hani）、马骁合作，用累积量解析法与切割算法，首次在长时间尺度上完成了从硬球粒子系统到玻尔兹曼方程的严格推导，一举取得这项悬置一百二十五年的问题的核心进展，并建立起从牛顿硬球动力学到玻尔兹曼方程、再到流体力学方程的完整链条。</p>

<h3>三、波动力学与概率方法</h3>
<p>他另一条重要的研究线索，是非线性色散系统的波动力学理论。大量相互作用的波在长时间演化中遵循所谓波湍流的动理学方程，而要从原始的非线性薛定谔方程严格导出这类方程，需要处理极其复杂的共振结构与相位的随机化。邓煜引入概率方法，把波的初始相位视作随机变量，从而在不破坏方程结构的前提下控制住高阶项的累积，完成了一系列此前只能由物理学家以非严格方式论证的推导。这些工作让"波湍流"这一长期停留在物理直觉层面的理论，第一次有了扎实的数学地基。</p>

<h3>四、影响与荣誉</h3>
<p>2026 年 7 月，在费城召开的国际数学家大会上，邓煜因在偏微分方程领域的工作获颁菲尔兹奖，与同为北京大学 2007 级本科校友的王虹一同成为首批中国籍菲尔兹奖得主。此前他已获得斯隆研究奖、世界华人数学家大会数学金奖、美国数学会艾森巴德数学物理奖与克雷研究奖等荣誉。他也以活跃的公共写作著称，长期在中文网络社区与公众交流前沿数学。在他看来，突发灵感与前期积累缺一不可——这句话或许正是他这一代人工作方式最朴素的写照。</p>
</div>
</div>

<div id="ar-mathfigures-panel-degiorgi" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-degiorgi">
<div class="agent-intro">
<h2>恩尼奥·德乔治：让极小曲面重新变得光滑的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1928–1996</td></tr>
<tr><td><strong>籍贯</strong></td><td>意大利，生于莱切</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；比萨高等师范学校教授，曾执教于墨西拿大学</td></tr>
<tr><td><strong>代表成就</strong></td><td>解决希尔伯特第十九问题（德乔治–纳什定理）；卡乔波利集与几何测度论；Γ-收敛</td></tr>
</table>
</div>

<h3>一、莱切、罗马与比萨</h3>
<p>德乔治 1928 年生于意大利南部普利亚大区的莱切，父亲是中学教师。1946 年他进入罗马大学，原本注册工程专业，很快在皮科内（Mauro Picone）的影响下转向数学，1950 年毕业并进入皮科内主持的计算应用研究所工作。1958 年他出任墨西拿大学数学分析教授，第二年便转入比萨高等师范学校，此后在那里任教近四十年。比萨本就有深厚的分析传统，德乔治把它变成了一个国际性的中心：学生从世界各地涌来，讨论班常年不断。他本人生活简朴，一生未婚，把大部分精力与收入都用在数学与他人身上。</p>

<h3>二、希尔伯特第十九问题</h3>
<p>希尔伯特第十九问题问的是：变分问题中出现的正则极小元，是否必定是解析的？用偏微分方程的语言说，就是系数仅有可测性的椭圆方程，其解是否足够光滑。在德乔治之前，人们连两个变量以外的情形都无从下手。1957 年，二十九岁的他证明：散度型一致椭圆方程，只要系数有界可测，其解必定是赫尔德连续的。这一步越过了此前所有方法都无法逾越的门槛；几乎同时，纳什（John Nash）完全独立地得到了类似结果。这条定理今天被称为德乔治–纳什定理，希尔伯特第十九问题由此解决。人们普遍认为，若只有一人完成，1958 年的菲尔兹奖非他莫属。</p>

<h3>三、极小曲面、周长与 Γ-收敛</h3>
<p>德乔治的贡献不止于一个定理。他为此发展了自己的几何测度论：1958 年前后他定义了有限周长的集合（他称之为卡乔波利集），并证明了相应的紧性定理，使"面积最小的曲面"这类对象终于有了严格的栖身之所。1969 年，他与邦别里、朱斯蒂合作彻底解决了伯恩斯坦问题：极小图必为超平面这一结论只在维数不超过八时成立，九维以上存在反例——邦别里因此获得 1974 年菲尔兹奖。1970 年代他提出 Γ-收敛，为"一列变分问题收敛到另一个变分问题"提供了精确框架，如今已是均匀化、相变与图像分割的标准工具。他晚年还与安布罗西奥合作建立特殊有界变差函数空间，处理带自由不连续面的变分问题。</p>

<h3>四、比萨学派与荣誉</h3>
<p>德乔治是二十世纪意大利分析学派的领袖，门下与影响所及包括安布罗西奥、达尔马索、布莱德斯、马尔切利尼等人，卡法雷利（Luis Caffarelli）也深受其影响。他获得 1960 年卡乔波利奖、1973 年意大利总统奖，1990 年获沃尔夫数学奖；他是林琴科学院、教皇科学院与法国科学院院士，1995 年当选美国国家科学院院士。他长期投身人权活动，是大赦国际的积极参与者，1966 至 1973 年间每年都赴厄立特里亚的阿斯马拉讲学。1996 年他在比萨去世。比萨高等师范学校设有以他命名的数学研究中心；他还留下大量关于数学基础与数学之美的思考文字，在其中他把数学视为与伦理、信仰相通的一种智慧。</p>
</div>
</div>

<div id="ar-mathfigures-panel-tits" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-tits">
<div class="agent-intro">
<h2>雅克·蒂茨：把代数群盖成几何建筑的群论宗师</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1930–2021</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国（原比利时籍），生于比利时于克勒</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；法兰西公学院、波恩大学、布鲁塞尔自由大学</td></tr>
<tr><td><strong>代表成就</strong></td><td>Tits 建筑（buildings）理论；(B, N) 对；Tits 替代；Tits 群与 Tits 度量；球型建筑的分类</td></tr>
</table>
</div>

<h3>一、布鲁塞尔的神童</h3>
<p>蒂茨1930年8月12日生于比利时于克勒，父亲是大学教授。他在布鲁塞尔自由大学求学，1950年、年仅二十岁便在 Paul Libois 指导下取得博士学位。此后他先后任教于布鲁塞尔自由大学（至1964年）与波恩大学（1964–1974）。1974年，为了到法兰西公学院任教，他改入法国籍——按当时比利时法律不允许双重国籍，他因此放弃了比利时国籍。他在法兰西公学院主持群论讲席，直至2000年成为荣休教授。</p>

<h3>二、Tits 建筑：为代数群造一座房子</h3>
<p>十九世纪末，克莱因的"埃尔朗根纲领"把几何归约为群，几何被置于代数之下；蒂茨把方向反了过来，用几何去还原代数。他引入的"建筑"是一种由线段、三角形、四面体等单形拼接而成的组合与几何混合的对象，其中有"公寓""房间""墙"，而代数群则作为自同构群作用其上。有了这套结构，李型群、p 进群的分类与结构问题就有了可触摸的骨架；相关的 (B, N) 对理论成为研究李型群的基本工具。他还完成了秩至少三的不可约球型建筑的完整分类，并与合作者独立构造出高秩建筑，从而直接造出相应的群。</p>

<h3>三、Tits 替代与其它</h3>
<p>在群论的另一侧，"Tits 替代"给出一条干净的分野：一个线性群要么包含非阿贝尔自由子群，要么近似可解——两者必居其一。这条二择一律后来成为几何群论与动力系统中的常用判据。此外，以他命名的还有 Tits 群、Tits 度量、Tits 锥、Kneser–Tits 猜测以及 Freudenthal–Tits 魔方等一长串概念。作为布尔巴基小组的"名誉"成员，他参与推广了考克斯特的工作，"考克斯特数""考克斯特群""考克斯特图"这些通行术语即出自他的手笔。他自称偏爱"可以摸得到的数学"。</p>

<h3>四、影响与荣誉</h3>
<p>蒂茨1979年成为法国科学院院士，另为挪威科学与文学院、欧洲科学院、荷兰皇家艺术与科学院等机构成员，1992年成为美国国家科学院外籍院士。他获1962年 François Deruyts 奖、1993年沃尔夫数学奖，表彰其在"代数群与其它类群的构造理论，特别是 buildings 理论"上的贡献；1996年获德国数学会康托尔奖章，并获德国"功勋勋章"。2008年，他与 John G. Thompson 共同获得阿贝尔奖，理由是"代数方面的深刻成就，特别是塑造了现代群论"。2021年12月5日，蒂茨在巴黎逝世，享年91岁。</p>
</div>
</div>

<div id="ar-mathfigures-panel-duminilcopin" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-duminilcopin">
<div class="agent-intro">
<h2>于戈·迪米尼-科潘：为相变写下严格证明</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1985–</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；日内瓦大学教授，法国高等科学研究所（IHÉS）终身教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>解决统计物理中相变概率理论的长期问题，尤其是三维与四维情形；伊辛模型临界行为与渗流理论</td></tr>
</table>
</div>

<h3>一、从路易大帝预科到日内瓦</h3>
<p>于戈·迪米尼-科潘 1985 年 8 月 26 日出生。他在巴黎路易大帝中学读完 MPSI 与 MP* 预科班，随后进入巴黎高等师范学校，并在巴黎第十一大学取得硕士学位，2008 年赴日内瓦大学，在菲尔兹奖得主斯坦尼斯拉夫·斯米尔诺夫指导下攻读博士学位，2012 年毕业并继续做博士后研究，之后留校任教，2013 年起任助理教授，如今同时担任日内瓦大学教授与法国高等科学研究所终身教授。他这一代概率学家成长于二维共形不变性被严格证明的年代，起点已经很高，而他要面对的是难度陡增的三维与四维。</p>

<h3>二、渗流与临界点：从二维跨向高维</h3>
<p>统计物理中许多模型——伊辛模型、Potts 模型、自回避行走、渗流——都有一个临界温度，在这一点上系统从无序跳到有序，物理量呈现幂律行为。二维情形因为有共形不变性与施拉姆–洛纳演化（SLE）这一利器，已被理解得相当透彻；但从二维跨到三维，几乎所有工具同时失效。迪米尼-科潘的工作正是补上这块空缺：他与合作者建立了不同模型之间新的联系，发展出一套能在三维乃至更高维使用的渗流与随机游动技术，证明了若干此前只能由物理学家用非严格方法"预测"的结论。他与斯米尔诺夫对伊辛模型临界界面收敛到 SLE 的研究，也成为这一领域被反复引用的范式。</p>

<h3>三、四维：平凡性的严格证明</h3>
<p>四维的情形尤为特殊，它是所谓的临界维数，物理学家早已预言此处的标度极限是"平凡"的，即量子场论退化成自由场，但严格证明长期缺席。迪米尼-科潘与艾森曼（Michael Aizenman）等合作，证明了临界伊辛模型与四次场论标度极限的边缘平凡性，把这一困扰学界数十年的论断写成了定理。这项工作不仅需要概率论，还需要重整化群的思想、图展开的精细控制以及大量的组合技巧。它的意义超出模型本身：它说明在临界维数上，我们熟悉的连续极限会以人们未曾料到的方式塌缩。</p>

<h3>四、影响与荣誉</h3>
<p>2022 年，迪米尼-科潘因"解决统计物理学中相变概率理论的长期问题，特别是在三维与四维情形"获颁菲尔兹奖。此前他已先后获得江诗丹顿奖、罗洛·戴维逊奖、欧洲数学会奖、洛埃夫国际概率奖、法兰西科学院雅克·埃尔布朗大奖与数学新视野奖，并当选欧洲科学院院士。他也是一位活跃的写作者与讲授者，圣弗卢尔概率暑期学校等处的讲义广为流传，培养了新一代概率论研究者。在他的工作之后，"二维已被解决、高维仍然开放"这句老话，需要重写了。</p>
</div>
</div>

<div id="ar-mathfigures-panel-daubechies" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-daubechies">
<div class="agent-intro">
<h2>英格丽·多贝西：让小波真正紧起来的应用调和分析家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1954–</td></tr>
<tr><td><strong>籍贯</strong></td><td>比利时/美国，生于比利时豪特哈伦</td></tr>
<tr><td><strong>身份</strong></td><td>数学家、物理学家；杜克大学（曾任教于普林斯顿大学、罗格斯大学）</td></tr>
<tr><td><strong>代表成就</strong></td><td>紧支撑规范正交小波的构造（多贝西小波）；双正交 CDF 小波；小波理论在图像压缩与信号处理中的应用</td></tr>
</table>
</div>

<h3>一、从物理到小波</h3>
<p>1954年8月17日，多贝西生于比利时的豪特哈伦，父亲是煤矿工程师，家里的数学问题都由他回答。她1975年在布鲁塞尔自由大学取得物理学学位，1980年在同一所学校获得物理学博士学位，此后留校任研究教授。1987年她移居美国，进入新泽西的贝尔实验室数学研究中心。小时候她给自己缝娃娃衣服，觉得"把平的布片拼成不平的曲面"这件事妙不可言；睡前她会在心里算二的幂——多年后她才知道，未来的丈夫也有同样的习惯。这两件小事恰好预示了她一生的两个主题：局部与整体的关系，以及二分式的尺度。</p>

<h3>二、紧支撑正交小波</h3>
<p>傅里叶变换把信号拆成不同频率的正弦波，但正弦波铺满整条时间轴，无法定位"什么时候发生了什么"。莫尔莱与格罗斯曼在1980年代提出连续小波变换，用一段会衰减的小波在时间—频率平面上开窗；问题是如何离散化并精确重建。1988年，多贝西发表了那篇著名的论文，构造出具有紧支撑的规范正交小波基：它们在有限区间之外恒等于零，因而计算量有限，却可以做到任意阶的光滑性，还能严格无失真地重建信号。此前人们以为紧支撑、正交、光滑三者不可兼得，她证明三者可以兼得，代价只是把光滑性与支撑长度按一个明确的规则交换。1992年的《小波十讲》把这套理论写成了一本可以学的书。</p>

<h3>三、从指纹库到 JPEG 2000</h3>
<p>多贝西小波几乎立刻走出了数学：1993年起美国联邦调查局用它压缩数字化指纹档案；JPEG 2000 图像压缩标准把多贝西小波写进了核心算法；她与合作者构造的双正交 CDF 小波同样是标准的一部分。医学成像、地震数据处理、偏微分方程的数值求解，都因此得到了一种能同时看清全局与局部的语言。她后来又把兴趣转向曲面比对，构造出用于比较三维形状的数学工具，相关方法已用于动画制作与生物医学研究。小波成了少数几个"从定理到工业标准只需几年"的数学对象之一。</p>

<h3>四、影响与荣誉</h3>
<p>多贝西1993年当选美国艺术与科学院院士，1998年当选美国国家科学院院士，2015年当选美国国家工程院院士与欧洲科学院院士，2019年当选德国科学院院士，2024年当选英国皇家学会外籍会员。她是美国数学会斯蒂尔奖（数学阐述奖与开创性贡献奖）得主，也曾获麦克阿瑟奖、阿斯图里亚斯亲王奖与欧莱雅—联合国教科文组织世界杰出女科学家奖。2011至2014年她担任国际数学联盟主席，是首位出任这一职务的女性，任内比利时国王授予她女爵称号。2023年她获得沃尔夫数学奖，成为该奖设立以来第一位女性得主；2025年又获美国国家科学奖章与英国皇家学会贝克里安奖章。</p>
</div>
</div>

<div id="ar-mathfigures-panel-faltings" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-faltings">
<div class="agent-intro">
<h2>格尔德·法尔廷斯：给丢番图方程的海洋划出边界的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1954–</td></tr>
<tr><td><strong>籍贯</strong></td><td>德国，盖尔森基兴</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；马克斯·普朗克数学研究所（波恩）荣休所长，曾任伍珀塔尔大学与普林斯顿大学教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>莫德尔猜想的证明（法尔廷斯定理）、Mordell–Lang 猜想的证明、法尔廷斯乘积定理、$p$ 进 Hodge 理论</td></tr>
</table>
</div>

<h3>一、一条猜想，六十年</h3>
<p>法尔廷斯 1954 年生于当时的西德盖尔森基兴，中学时代就在全国数学竞赛中获奖，博士毕业后曾以访问学者身份在哈佛大学工作一年。二十八岁那年，也就是 1982 年，他成为德国伍珀塔尔大学的正式教授；次年，他证明了悬置六十余年的<strong>莫德尔猜想</strong>，几乎一夜之间闻名于世。这条猜想由莫德尔在 1922 年提出：亏格大于二的代数曲线，其有理点只有有限多个。作为特例，它蕴含次数不低于四的光滑平面曲线（包括费马曲线）上的有理点有限性，因而是费马大定理研究道路上一次决定性的推进——尽管它离完全解决费马问题仍差着一口气。</p>

<h3>二、绕开丢番图逼近的另一条路</h3>
<p>法尔廷斯的证明之所以令专家震惊，在于他根本没有走当时主流的丢番图逼近路线。他的策略是先解决<strong>泰特猜想</strong>的一个重要情形与<strong>沙法列维奇猜想</strong>——后者断言具有良好约化的阿贝尔簇在同种意义下只有有限多个——再由阿贝尔簇的模空间与曲线的雅可比簇把结论拉回到曲线上。这条路径把数论问题转换为算术代数几何中关于模空间与高度函数的结构性论证，从而把一整套新技术引入丢番图几何：阿贝尔簇的半稳定约化、高度理论、算术曲面上线丛的度量与相交数等工具，从此成为这一领域的通用语言。1986 年，他因"用算术代数几何方法、主要因证明莫德尔猜想"而获得菲尔兹奖。</p>

<h3>三、Mordell–Lang 与更新的工具</h3>
<p>1989 年，保罗·沃伊塔沿着魏伊与西格尔开创的传统路线给出了莫德尔猜想的另一种证明。法尔廷斯受此启发，发展出一个新工具——<strong>法尔廷斯乘积定理</strong>，它推广了罗特定理证明中的关键结果。借助这一工具，他在 1991 年证明了远比莫德尔猜想广泛的 <strong>Mordell–Lang 猜想</strong>：阿贝尔簇的子簇上的有理点，全部落在有限多个阿贝尔子簇的平移之并中。同一篇论文里他还证明了朗所猜想的、阿贝尔簇仿射子簇上整点有限性。1994 年，他与吉斯贝特·维斯特霍尔茨用乘积定理给出了罗特定理及其多维推广——施密特子空间定理——的新证明。此外，他在 $p$ 进 Hodge 理论中亦贡献卓著，证明了泰特与丰坦提出的若干主要猜想，并把这一理论推广到非阿贝尔情形，即所谓的 $p$ 进辛普森对应。</p>

<h3>四、影响与荣誉</h3>
<p>1985 年法尔廷斯出任普林斯顿大学教授，其间多次访问普林斯顿高等研究院；1994 年他举家回到德国，加入波恩的马克斯·普朗克数学研究所并任所长。担任所长赋予他极大的研究自由，而他本人也吸引大批人才，使波恩成为世界范围内算术代数几何的中心之一；2023 年起他转为该所荣休所长，仍继续从事研究。他的荣誉包括菲尔兹奖（1986 年）、<strong>邵逸夫奖</strong>（2015 年）、康托尔奖章（2017 年）、德国功勋勋章 Pour le Mérite（2024 年），以及<strong>2026 年阿贝尔奖</strong>——挪威科学与文学院的授奖理由为"表彰他在算术几何中引入强有力的工具，并解决了莫德尔与朗提出的一些长期未决的丢番图猜想"。阿贝尔委员会的评价称他的工作"至今仍是现代丢番图几何的中流砥柱"。</p>
</div>
</div>

<div id="ar-mathfigures-panel-fefferman" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-fefferman">
<div class="agent-intro">
<h2>查尔斯·费弗曼：为多复变找到正确推广的分析大师</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1949–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，华盛顿特区</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿大学 Herbert E. Jones, Jr. '43 大学数学教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>$H^1$ 与 BMO 空间的对偶、严格伪凸域双全纯映射的边界光滑延拓、奇异积分与 Carleson 定理的多变量推广、非退化线性偏微分方程局部可解性</td></tr>
</table>
</div>

<h3>一、一条神童式的路径</h3>
<p>费弗曼 1949 年 4 月 18 日生于华盛顿特区的一个犹太家庭。他十四岁进入马里兰大学，十五岁以德文发表第一篇科学论文，十七岁取得数学与物理双学士学位，二十岁在普林斯顿大学获博士学位，导师是调和分析大家埃利亚斯·施泰因（Elias Stein），论文题目为《Inequalities for Strongly Singular Convolution Operators》。二十二岁他成为芝加哥大学正教授，是美国大学史上最年轻的正教授；二十四岁（按通行记载）回到普林斯顿任正教授，1984 年起担任 Herbert E. Jones, Jr. '43 大学数学教授至今。他的弟弟罗伯特·费弗曼也是数学家，曾任芝加哥大学物理科学部主任；费弗曼家的学术气息之浓，由此可见一斑。他早年在马里兰、芝加哥与普林斯顿三地之间快速流转的经历，也让"施泰因学派"的分析风格随之扩散到美国最重要的几个分析学中心。</p>

<h3>二、$H^1$ 与 BMO 的对偶</h3>
<p>调和分析在 1960 至 1970 年代经历了一次深刻的改造。1961 年人们从另一角度发现了有界平均振动函数空间 BMO；而它与哈代空间 $H^1$ 之间那种出人意料的简洁关系——二者互为对偶——则是费弗曼在 1971 年发现的（与施泰因的工作密切相关）。这一发现把 Calderón–Zygmund 奇异积分理论、乘子理论与哈代空间理论一举统一起来，使 $H^1$ 有了不依赖解析函数的实变刻画，也让 BMO 从此成为调和分析与偏微分方程的常用语言。沿着同一方向，他从 1970 年起把卡尔森（Lennart Carleson）关于三角级数几乎处处收敛的结果向多变量推广并构造出反例；1973 年他给出了卡尔森定理的一个简化证明，并在此过程中揭示出三角级数收敛问题与奇异积分算子这两个看似无关的领域之间存在深刻的内在联系，由此推动了整个领域的大发展。几乎同时，他还解决了圆盘乘子这一经典悬案：他证明球的特征函数除 $p=2$ 之外并不是 $L^p$ 上的傅里叶乘子，从而终结了人们对高维球乘子的指望。这个反例清晰划出了欧氏空间维数与乘子有界性之间的界线，也催生了其后几十年关于 Bochner–Riesz 平均与局部化的一整片研究。</p>

<h3>三、多复变：找到低维结果的正确推广</h3>
<p>多复变函数论与单复变有着根本差别：单复变中单连通区域之间的双全纯等价（黎曼映射定理）在高维完全失效，因此单复变的方法无法照搬。1974 年费弗曼证明了一个此前许多人尝试未果的定理：具有光滑边界的两个严格伪凸区域之间的双全纯映射，可以光滑地延拓到边界上。他用独创的方法绕开了维数带来的障碍，这项工作是 1978 年菲尔兹奖引文中"多项创新革新了多复分析研究，找到了经典低维结果的正确推广"的核心依据。在此之前，他还研究过伪凸域上 Bergman 核在边界之外的渐近性质；在偏微分方程方面，1973 年他给出了非退化线性偏微分方程局部可解性的一个充分必要条件，使这个问题得到完满解决。这些结果与 Bergman 核的渐近分析一起，已成为研究伪凸域边界正则性与多复变边值问题的标准工具；他也因此被公认为把经典（低维）分析的结果"正确地"推广到高维的那个人。</p>

<h3>四、影响与荣誉</h3>
<p>费弗曼 1971 年获塞勒姆奖（Salem Prize），1976 年成为首届艾伦·T·沃特曼奖（Alan T. Waterman Award）得主，1978 年在赫尔辛基国际数学家大会上获菲尔兹奖，时年二十九岁；1979 年当选美国国家科学院院士，此后又获伯格曼奖（1992）、博谢纪念奖（2008）、沃尔夫数学奖（2017）与 BBVA 基金会基础科学知识前沿奖（2021）。他还是美国艺术与科学院、美国哲学学会成员。他的研究疆域极广，除调和分析与多复变外，还包括数学物理、流体动力学（Navier–Stokes 方程）、几何、神经网络、数理金融与谱分析。他的学生包括马泰·马凯东（Matei Machedon）与路易斯·塞科（Luis A. Seco）；两个女儿中，莱妮·费弗曼是作曲家，尼娜·费弗曼是计算生物学家。</p>
</div>
</div>

<div id="ar-mathfigures-panel-figalli" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-figalli">
<div class="agent-intro">
<h2>阿莱西奥·菲加利：把最优传输炼成通用工具的变分学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1984–</td></tr>
<tr><td><strong>籍贯</strong></td><td>意大利（瑞士永久居民），生于罗马</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；苏黎世联邦理工学院（ETH Zürich）讲席教授（2016 年起），2019 年起兼任该校数学研究所（FIM）所长</td></tr>
<tr><td><strong>代表成就</strong></td><td>最优传输映射的正则性理论及其与 Monge–Ampère 方程的联系；与 Maggi、Pratelli 合作证明各向异性等周不等式的尖锐定量形式；在几何与泛函不等式稳定性、自由边界问题与随机矩阵上的系列工作</td></tr>
</table>
</div>

<h3>一、比萨、里昂与两位导师</h3>
<p>菲加利 1984 年 4 月生于罗马，就读于罗马的 Vivona 古典高中。2002 年他考入比萨高等师范学校，用不到四年时间完成了通常需要五年的学业——即便以高师的严苛标准衡量，这样的速度也属罕见。他随 Luigi Ambrosio 学习，2006 年获硕士学位，随后在比萨高师与里昂高等师范学院之间攻读联合博士，另一位导师正是 2010 年菲尔兹奖得主塞德里克·维拉尼；2007 年，二十三岁的他以《最优传输与极小作用量测度》获得博士学位，论文由比萨高师出版社出版并立即获得关注。此后他先在尼斯任 CNRS 研究员，2008 年赴巴黎综合理工任 Hadamard 教授，2009 年转往美国得克萨斯大学奥斯汀分校，历任副教授、正教授与 R. L. Moore 讲座教授；2014 年他在苏黎世联邦理工学院担任 Nachdiplom 讲师，2016 年正式加盟并任讲席教授，2019 年起出任该校数学研究所（FIM）所长。</p>

<h3>二、最优传输的正则性：从蒙日到康托洛维奇</h3>
<p>最优传输的原始问题是工程性的：如何以最小的总代价把一堆土运到另一处。Monge 在十八世纪把它写成一个数学问题，康托洛维奇在二十世纪给出松弛形式，此后它成为连接偏微分方程、几何与概率的一座枢纽。菲加利的主攻方向是其中的"正则性"：那个最优的运输映射到底有多光滑？这个问题直接决定了相关的 Monge–Ampère 方程是否有经典解。他与 Guido de Philippis 合作，证明了 Monge–Ampère 方程解的二阶导数具有高阶可积性，并得到了 Monge–Ampère 型方程的部分正则性结果，这两项工作成为该领域近十余年引用最广的成果之一。他还利用最优传输的技巧改进了各向异性等周不等式：与 Francesco Maggi、Aldo Pratelli 合作，他给出了这一不等式的一个尖锐的定量版本，即所谓"稳定性"形式——它回答的是这样一个问题：如果一个形状几乎达到最佳常数，它是否一定接近那个被称为 Wulff 形的最优晶体形状。这类"定量"结果如今已成为几何不等式研究的标准范式。</p>

<h3>三、不等式、自由边界与随机矩阵</h3>
<p>他的研究面极宽，且始终围绕同一套工具箱。在泛函不等式方向，他与 Eric Carlen 合作分析了 Gagliardo–Nirenberg 不等式与对数 Hardy–Littlewood–Sobolev 不等式的稳定性，并由此得到临界质量 Keller–Segel 方程的定量收敛率。在偏微分方程方向，他把 DiPerna–Lions 理论用于理解具有粗糙位势的薛定谔方程的半经典极限，也用于刻画 Vlasov–Poisson 方程弱解的拉格朗日结构，并与合作者研究描述大气与海洋大尺度运动的半地转方程（semigeostrophic equations）的整体适定性。与 Joaquim Serra 合作，他证明了带边界反应项的 De Giorgi 猜想在五维及以下成立，并改进了 Caffarelli 关于障碍问题（obstacle problem）奇异点结构的经典结果。他还研究 Hamilton–Jacobi 方程与弱 KAM 理论的联系，与 Gonzalo Contreras、Ludovic Rifford 合作证明紧曲面上 Aubry 集的通有双曲性。近年他与 Alice Guionnet 合作，把最优传输的新型技术引入随机矩阵，证明了多矩阵模型的普适性结果。</p>

<h3>四、影响与荣誉</h3>
<p>2018 年，菲加利在里约热内卢获菲尔兹奖，理由是"对最优传输理论及其在偏微分方程、度量几何与概率中的应用的贡献"。此前他已获 2008 年 Carlo Miranda 奖与 Giuseppe Borgia 奖、2010 年 Iapichino 奖与 Anile 奖、2011–2012 年法兰西学院 Peccot-Vimont 奖与 Peccot 课程、2012 年欧洲数学会奖、2015 年 Stampacchia 金质奖章、2016 年 O'Donnell 奖与 2017 年 Feltrinelli 奖；2024 年他还获得苏黎世联邦理工学院表彰卓越教学的"金猫头鹰"奖。他是欧洲科学院院士，获颁意大利共和国功绩骑士勋章与多个荣誉博士学位，并有小行星 438523 以他的名字命名。他发表论文一百五十余篇，长期担任多个研究所的科学顾问，也常作公众演讲。在维拉尼之后，菲加利这一代人把最优传输从一门漂亮的理论变成了可以随手取用的工具——今天当人们要处理一个带约束的变分问题或一个退化的椭圆方程时，最优传输往往是第一个被想到的思路。</p>
</div>
</div>

<div id="ar-mathfigures-panel-furstenberg" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-furstenberg">
<div class="agent-intro">
<h2>希勒尔·富尔斯滕伯格：把概率与动力学带进数论的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1935–</td></tr>
<tr><td><strong>籍贯</strong></td><td>以色列（生于德国柏林，1939年移居美国，1965年移居以色列）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；耶路撒冷希伯来大学爱因斯坦数学研究所荣休教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>素数无穷多的拓扑动力学证明、Szemerédi 定理的遍历论证明、Furstenberg 边界与随机游走理论；2006/07年沃尔夫奖、2020年阿贝尔奖</td></tr>
</table>
</div>

<h3>一、一个"不存在的人"</h3>
<p>希勒尔·富尔斯滕伯格1935年生于柏林的一个犹太家庭。1939年，一家人在"水晶之夜"后逃离纳粹德国，父亲没能熬过这段旅程；他与母亲、妹妹在纽约华盛顿高地的正统犹太社区长大。他就读于叶史瓦大学，1955年二十岁时取得学士与硕士学位，随后到普林斯顿大学，1958年在萨洛蒙·博赫纳指导下以《预测理论》获博士学位。他早年的论文涉猎之广，竟让数学界流传起一个说法："富尔斯滕伯格"不是一个人，而是一群数学家共用的笔名。</p>

<h3>二、用拓扑证明素数无穷多</h3>
<p>还在本科阶段，他就在《美国数学月刊》上发表了《论素数的无穷性》（1955），用拓扑动力学的方法重证了欧几里得的古老定理。思路是在整数集上引入一种由算术 progression 生成的拓扑，素数在其中既开又闭，若素数只有有限多个，则会导致紧性与周期性互相矛盾。这颗种子十年后长成了大树——1977年，他把遍历论引入组合数论，证明了塞梅雷迪定理：任何正密度的整数子集都包含任意长的等差数列。此后他与卡茨内尔森合作把结果推广到多维，即 Furstenberg–Katznelson 定理。1981年的专著《遍历论中的回归与组合数论》把这套方法确立为通行工具，后来关于素数中存在任意长等差数列的工作，都站在这条路线上。</p>

<h3>三、随机游走、边界与刚性</h3>
<p>富尔斯滕伯格的另一条主线，是用随机游走研究群与对称空间。他引入了今日以他命名的"Furstenberg 边界"（群的 Poisson 边界），并以此研究半单李群上的随机游走与调和函数，这些工具后来在格的结构与刚性理论的研究中起了关键作用。他还与凯斯滕合作研究随机矩阵乘积的 Lyapunov 指数，在齐性流、对称空间上的分析与拓扑动力学方面留下了持久影响；"不交性"（disjointness）等由他引入的概念则成为遍历论中的标准语言。</p>

<h3>四、影响与荣誉</h3>
<p>1959至1960年他在麻省理工学院任 C. L. E. Moore 讲师，1961年起任教于明尼苏达大学，1965年移居以色列，加入耶路撒冷希伯来大学爱因斯坦数学研究所，直至2003年退休。他培养出亚历山大·卢博茨基、维塔利·别格尔森、尤瓦尔·佩雷斯、塔玛尔·齐格勒等一批数学家，帮助以色列成为世界数学重镇。他1974年当选以色列科学与人文学院院士，1989年当选美国国家科学院院士，1993年获以色列奖与哈维奖，2004年获 EMET 奖，2006/07年获沃尔夫数学奖，2020年与格里戈里·马尔古利斯共同获得阿贝尔奖，以表彰他们"率先把概率论与动力学的方法用于群论、数论与组合学"。</p>
</div>
</div>

<div id="ar-mathfigures-panel-freedman" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-freedman">
<div class="agent-intro">
<h2>迈克尔·弗里德曼：在四维旷野上完成拓扑分类的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1951–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，加利福尼亚州洛杉矶</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；微软 Station Q（加州大学圣塔芭芭拉分校）创始负责人，曾任加州大学圣迭戈分校教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>四维庞加莱猜想的证明、单连通紧致四维流形的拓扑分类、E8 流形与奇异四维空间的存在</td></tr>
</table>
</div>

<h3>一、从伯克利退学到普林斯顿</h3>
<p>弗里德曼 1951 年 4 月 21 日生于洛杉矶，父亲是航空工程师兼作家，母亲曾做演员。他进入加州大学伯克利分校后只读了两个学期便退学，同一年他给普林斯顿教授拉尔夫·福克斯写了一封信，竟因此被录取为研究生；1968 年他转入普林斯顿，1973 年在<strong>威廉·布劳德</strong>指导下以论文《余维二割补术》获博士学位。此后他回伯克利任讲师，1975 年成为普林斯顿高等研究院成员，1976 年赴加州大学圣迭戈分校任助理教授，1982 年晋升教授，1985 年出任 Charles Lee Powell 数学讲席。这段颇为不寻常的履历，预告了他日后那种以直觉开路、以大手笔取胜的风格。</p>

<h3>二、四维庞加莱猜想的证明</h3>
<p>二十世纪七十年代末，四维拓扑是一片公认的荒原：维数五以上的割补术畅通无阻，三维有几何化纲领的曙光，唯独四维既没有足够的空间来做一般位置的移动，又无法借用几何结构。弗里德曼的突破在于抓住<strong>卡森柄</strong>这一当时刚出现不久的对象，证明了在基本群满足适当条件时，卡森柄实际上同伦等价于标准的二维手柄——这正是割补术在四维能否运行的枢纽。由此他在 1982 年发表的《四维流形的拓扑学》中完成了单连通紧致四维流形的拓扑分类，证明交截形式与一个被称为 Kirby–Siebenmann 不变量的量合起来构成完全的分类不变量，并特别推出<strong>四维庞加莱猜想</strong>：与四维球面同伦等价的紧致四维流形必与其同胚。他同时指出，每个幺模二次型都可作为某个四维流形的交截形式出现，其中包括那个著名的 E8 型。</p>

<h3>三、两个四维世界与后来的转向</h3>
<p>把弗里德曼的分类与唐纳森从规范理论得到的限制放在一起，会得到一个令人眩晕的结论：E8 型对应的拓扑四维流形根本不可能带光滑结构；进一步，欧氏四维空间上存在与通常结构拓扑等价却不微分同胚的<strong>奇异光滑结构</strong>——弗里德曼与罗比恩·柯比对此亦有关键贡献。这是所有维数中唯一发生此种现象的情形，四维因此成为拓扑与光滑之间裂痕最深的地方。1990 年代起，弗里德曼的兴趣转向应用拓扑学与数学物理，涉及等离子体物理与磁流体力学；他后来加入微软，在加州大学圣塔芭芭拉分校创立并领导 <strong>Station Q</strong> 研究团队，把拓扑学带进量子计算，尤其是拓扑量子计算与任意子的理论研究——那套试图用辫结的拓扑稳定性来对抗量子退相干的思路，正是他早年低维拓扑训练的遥远回响。</p>

<h3>四、影响与荣誉</h3>
<p>弗里德曼于 1986 年在伯克利国际数学家大会上获菲尔兹奖，同年获美国数学会奥斯瓦尔德·维布伦几何奖，获奖理由均为他对四维流形分类的解决。此前他已获斯隆研究奖（1980 年）与<strong>麦克阿瑟奖</strong>（1984 年），1984 年当选美国国家科学院院士，1985 年当选美国艺术与科学院院士；1987 年获美国<strong>国家科学奖章</strong>，1994 年获古根海姆奖。他还曾在 1983 年华沙与 1998 年柏林的国际数学家大会上作邀请报告。他的学生包括 Ian Agol 与王正汉等，二人分别在三维拓扑与拓扑量子计算的代数结构上做出了重要工作。</p>
</div>
</div>

<div id="ar-mathfigures-panel-gelfand" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-gelfand">
<div class="agent-intro">
<h2>盖尔范德：把分析、代数与物理缝在一起的通才</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1913–2009</td></tr>
<tr><td><strong>籍贯</strong></td><td>苏联／美国，今乌克兰敖德萨州奥克尼镇</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；莫斯科大学、罗格斯大学</td></tr>
<tr><td><strong>代表成就</strong></td><td>巴拿赫代数中的盖尔范德表示与盖尔范德–马祖尔定理，盖尔范德–奈马克定理与 GNS 构造，复半单李代数表示论，盖尔范德–列维坦反散射积分方程；创办盖尔范德讨论班</td></tr>
</table>
</div>

<h3>一、没有中学文凭的研究生</h3>
<p>1913年9月2日，他生于乌克兰敖德萨州小镇奥克尼的一个犹太家庭。据他自述，因为父亲经营磨坊，他在苏维埃时代被中学开除；他没有读完中学，也没有念本科，十九岁便凭显而易见的才华被莫斯科大学直接录取为研究生，导师是安德雷·柯尔莫哥洛夫，1935年获得博士学位。此后他长期任教于莫斯科大学与斯捷克洛夫数学研究所，1989年移居美国，先后在哈佛大学与麻省理工学院短暂任职，最终落脚罗格斯大学，2009年10月5日在新不伦瑞克逝世。</p>

<h3>二、巴拿赫代数与群表示</h3>
<p>他的名字挂在二十世纪数学的许多路口上：巴拿赫代数理论中的盖尔范德表示与盖尔范德–马祖尔定理，C*代数中的盖尔范德–奈马克定理以及由此而来的 GNS 构造，广义函数理论中的盖尔范德–希洛夫空间，复半单李代数表示论中的 Verma 模与伯恩斯坦–盖尔范德–盖尔范德对应，逆散射问题中的盖尔范德–列维坦积分方程，还有盖尔范德–基里洛夫维数、盖尔范德–采特林基和一般超几何函数。这些成果彼此看似遥远，却共享同一种气质：为抽象结构找到一个能算、能用的具体表示，并把它用到下一个问题上去。</p>

<h3>三、盖尔范德讨论班</h3>
<p>1943年起，他在莫斯科大学主持讨论班，一直持续到1989年5月，此后又移师罗格斯大学继续。这个讨论班不以"讲完一本书"为目标，而是摆出一个问题，一路追到它与别的领域的接缝处；听众常常要在黑板上被追问到无处可退。从这里走出的一代数学家中有塞梅雷迪（Endre Szemerédi）、基里洛夫（Alexandre Kirillov）、伯恩斯坦（Joseph Bernstein）、卡日丹（David Kazhdan）、弗伦克尔（Edward Frenkel）等。他还写过生物学与医学方面的文章，晚年因在数学教育上的工作获1994年麦克阿瑟奖。</p>

<h3>四、影响与荣誉</h3>
<p>1978年，他与卡尔·西格尔共同获得首届沃尔夫数学奖，授奖理由提到他在泛函分析与群表示方面的工作，以及对数学许多领域及其应用的开创性贡献。此外他还获得维格纳奖章（1980）、京都奖（1989）与美国数学会斯蒂尔奖（2005），并早在1977年当选英国皇家学会外籍会员。他留下的不只是一串以他命名的定理，更是一种信念：数学的各个分支本是一体，讨论班就是把它们重新缝起来的针与线。</p>
</div>
</div>

<div id="ar-mathfigures-panel-galois" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-galois">
<div class="agent-intro">
<h2>伽罗瓦：20岁陨落、照亮整个数学的流星</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>法国</td></tr>
<tr><td><strong>生卒</strong></td><td>1811—1832（仅20岁）</td></tr>
<tr><td><strong>主要成就</strong></td><td>创立群论与伽罗瓦理论；判定方程根式可解的条件</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/galois.webp" width="324" height="460" alt="伽罗瓦" loading="lazy"><figcaption>伽罗瓦</figcaption></figure>
</div>

<h3>一、生平：落榜、入狱与决斗</h3>
<p>伽罗瓦生于巴黎近郊，15岁读到勒让德《几何原理》与拉格朗日著作后决意献身数学，却<strong>两次报考巴黎综合理工学院落榜</strong>。17岁起接连投稿法兰西科学院：第一篇被柯西弄丢，第二篇因傅里叶病逝而失踪，1831年第三篇被泊松判为"不知所云"。同期他投身共和革命，两度入狱。1832年5月30日凌晨因决斗腹部中弹，次日去世。决斗前夜通宵写下"科学遗嘱"，页边留下："<strong>我没有时间了，我没有时间了！</strong>"</p>

<h3>二、伽罗瓦理论：彻底解决根式解问题</h3>
<p>拉格朗日看出解法藏在"根的置换"里，阿贝尔证明了五次方程无一般根式解；伽罗瓦更进一步，给每个方程配上一个<strong>群</strong>，提出划时代判据：<strong>一个方程能用根式求解，当且仅当它的群是"可解群"。</strong>由此一举回答三百年悬案，并解决了正n边形尺规作图的判定条件。</p>

<h3>三、群论：对称的数学</h3>
<p>他首次系统使用"群"的概念。此后几何中有变换群与克莱因的"爱尔兰根纲领"，物理中粒子分类与守恒律（诺特定理）都是群论，密码学中有限域（伽罗瓦域 GF(2⁸)）支撑着二维码、AES加密与纠错编码。<strong>"对称即群"</strong>是20世纪科学最重要的观念革命之一。1846年刘维尔整理并发表其手稿，世界才读懂这位20岁青年的思想。</p>
</div>
</div>

<div id="ar-mathfigures-panel-gowers" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-gowers">
<div class="agent-intro">
<h2>蒂莫西·高尔斯：把组合学带进巴拿赫空间的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1963–</td></tr>
<tr><td><strong>籍贯</strong></td><td>英国，生于威尔特郡马尔伯勒</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；剑桥大学皇家学会研究教授、三一学院院士，2020 年起兼任法兰西学院组合学讲席教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>与莫雷解决无条件基本序列问题；给出 Szemerédi 定理的首个有效定量界；提出 Gowers 一致性范数</td></tr>
</table>
</div>

<h3>一、巴拿赫空间的"坏"结构</h3>
<p>二十世纪的巴拿赫空间理论一直在追问：无穷维空间究竟能有多规矩？人们希望每个无穷维巴拿赫空间都含有一个"像样"的子空间——例如与经典的 $c_0$ 或 $\ell^p$ 同构，或者至少允许一组无条件基。1990 年，高尔斯在剑桥三一学院完成博士论文《巴拿赫空间中的对称结构》，导师是贝拉·博洛巴什。随后他构造出一个几乎没有任何对称性的巴拿赫空间，一举否证了若干悬置多年的猜想。1992 年，他与贝尔纳·莫雷合作解决了"无条件基本序列问题"：并非每个无穷维巴拿赫空间都含有带无条件 Schauder 基的无穷维子空间。这项工作把"空间可以坏到什么程度"的边界，一下子推到了令人不安的位置。</p>

<h3>二、从正则性引理到 Szemerédi 定理</h3>
<p>此后高尔斯转向组合数学与组合数论，也把他早年训练出的分析直觉一并带了过去。1997 年他证明 Szemerédi 正则性引理所要求的界必然是"塔型"的，即高得几乎无法使用；这条结果说明想靠正则性引理拿到漂亮的定量结论是走不通的。但他同时走出了一条新路：1998 年他给出了 Szemerédi 定理的第一个有效定量界，即不含 $k$ 项等差数列的集合 $\{1,\dots,N\}$ 的子集，其大小有一个可以明确写出的上界。这个证明里的一件关键工具后来被称为 Balog–Szemerédi–高尔斯定理，在加性组合中反复被使用。</p>

<h3>三、Gowers 范数：给"随机性"一把尺子</h3>
<p>为了处理等差数列问题，高尔斯引入了一族如今称为 Gowers 一致性范数的工具。它的想法可以这样理解：一个集合或函数到底有多"均匀"，能不能被低次相位函数所察觉，需要一个可计算的标尺。有了这把尺子，"结构化"与"拟随机"的二分变得可以操作，分解定理、转移原理等一整套方法随之成型。这项工作被本·格林与陶哲轩接过去继续发展，最终导向格林–陶定理：素数中包含任意长的等差数列。2003 年高尔斯又建立了超图的正则性引理，2005 年提出拟随机群的概念。</p>

<h3>四、影响与荣誉</h3>
<p>1998 年柏林国际数学家大会上，高尔斯因"连接泛函分析与组合学"的工作获颁菲尔兹奖。他 1996 年获欧洲数学会奖，1999 年当选皇家学会院士，2012 年因对数学的贡献被授予骑士爵位，后又获伦敦数学会德摩根奖章与皇家学会西尔维斯特奖章。在学术之外，他是同时代最愿意公开说话的数学家之一：他主编《普林斯顿数学指南》，写《数学：一个非常简短的介绍》，并因对学术出版定价的批评而广为人知。2009 年前后，他在自己的博客上发起"Polymath 计划"，把尚未解决的研究问题公开抛给所有愿意参与的人，用评论区和维基页面协同推进证明，为大规模协作式数学研究做了一次认真的实验。</p>
</div>
</div>

<div id="ar-mathfigures-panel-gauss" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-gauss">
<div class="agent-intro">
<h2>高斯：数学王子</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>德国（不伦瑞克—哥廷根）</td></tr>
<tr><td><strong>生卒</strong></td><td>1777—1855</td></tr>
<tr><td><strong>代表作</strong></td><td>《算术研究》（1801）</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/gauss.webp" width="357" height="460" alt="高斯" loading="lazy"><figcaption>高斯</figcaption></figure>
</div>

<h3>一、19岁：正十七边形尺规作图</h3>
<p>1796年，19岁的高斯想通<strong>正十七边形可用尺规作出</strong>，这是自古希腊以来两千年悬而未决的问题，他因此下定决心终身从事数学，并要求把十七边形刻在自己的墓碑上。</p>

<h3>二、《算术研究》：数论成为系统的科学</h3>
<p>1801年出版的《算术研究》把数论第一次建成完整体系：<strong>同余记号（≡）、二次互反律</strong>（他称之为"算术的黄金定理"，先后给出8种证明）、分圆理论、二次型理论。他说："数学是科学的女王，<strong>数论是数学的女王</strong>。"</p>

<h3>三、谷神星与微分几何</h3>
<p>1801年他用新发明的轨道计算方法预言了失踪小行星谷神星的位置，半年后它如预测现身；他为此发展了<strong>最小二乘法</strong>，并给出正态分布的严格论证——<strong>正态分布因此被称为"高斯分布"</strong>。1827年《曲面的一般研究》建立曲面的内蕴几何，提出<strong>高斯曲率</strong>与"绝妙定理"，他私下研究过非欧几何但未发表。座右铭："<strong>宁可少些，但要好些</strong>（Pauca sed matura）。"</p>
</div>
</div>

<div id="ar-mathfigures-panel-godel" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-godel">
<div class="agent-intro">
<h2>哥德尔：用不完备定理震惊数学与哲学的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>奥地利（维也纳），后半生定居美国普林斯顿</td></tr>
<tr><td><strong>生卒</strong></td><td>1906—1978</td></tr>
<tr><td><strong>主要成就</strong></td><td>不完备性定理（1931）；完备性定理；选择公理相对相容性</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/godel.webp" width="347" height="460" alt="哥德尔" loading="lazy"><figcaption>哥德尔</figcaption></figure>
</div>

<h3>一、不完备性定理：数学的"边界公告"</h3>
<p>1931年他证明了两条震撼世界的定理：<strong>第一不完备定理</strong>——任何包含算术的、相容的公理化系统中，都存在既不能证明也不能证伪的命题；<strong>第二不完备定理</strong>——这样的系统无法证明自身的相容性。证明核心是天才的"<strong>哥德尔编码</strong>"与自指结构。它击碎了希尔伯特纲领的最终目标，却开创了递归论、模型论两大领域，并间接启发了图灵。</p>

<h3>二、完备性定理与集合论</h3>
<p>1929年他证明<strong>一阶逻辑的完备性定理</strong>；1938年证明<strong>选择公理与连续统假设相对于 ZFC 是相容的</strong>，与后来科恩的力迫法合起来，宣告这两大百年难题"不可在 ZFC 内判定"。</p>

<h3>三、轶事</h3>
<p>他1940年移居美国，与<strong>爱因斯坦</strong>成为日日散步的挚友，爱因斯坦说"上班的真正动机是与哥德尔一起走路回家"。1949年他给爱因斯坦场方程找到一个允许时间旅行的旋转宇宙解（"哥德尔宇宙"）。他被誉为"自亚里士多德以来最伟大的逻辑学家"。</p>
</div>
</div>

<div id="ar-mathfigures-panel-griffiths" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-griffiths">
<div class="agent-intro">
<h2>菲利普·格里菲斯：让霍奇结构动起来的代数几何家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1938–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，北卡罗来纳州罗利</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿高等研究院教授（1991–2003 年任院长），曾任哈佛大学、杜克大学教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>霍奇结构的变分理论与格里菲斯横截性、周期映射与周期域、与 Harris 合著《代数几何原理》、Clemens–Griffiths 对 Lüroth 问题的反例</td></tr>
</table>
</div>

<h3>一、从北卡罗来纳到高等研究院</h3>
<p>1938 年 10 月 18 日，格里菲斯生于北卡罗来纳州罗利。1959 年他在维克森林学院获学士学位，1962 年在普林斯顿大学获博士学位，导师是 Donald Spencer，论文研究齐性复流形。此后他先后任职于加州大学伯克利分校与普林斯顿大学，1972 至 1983 年任哈佛大学教授，1983 至 1991 年任杜克大学教务长与 James B. Duke 讲座教授，1991 至 2003 年出任普林斯顿高等研究院院长，之后继续在该院数学学院任教至 2009 年，此后为荣休教授。他长期担任 Science Initiative Group 主席，支持非洲数学的发展。他职业生涯的另一条线是与陈省身的长期合作，两人一同研究外微分系统与阿贝尔积分的几何。格里菲斯一生的取向可以概括成一句话：让超越方法与经典几何互相说明。他既不放弃复流形上的分析，也不放弃十九世纪几何学家留下的那些具体定理；这种双向的忠实，是他区别于同代许多抽象派代数几何学家的标志。</p>

<h3>二、霍奇结构的变分与周期映射</h3>
<p>格里菲斯最核心的贡献，是把霍奇结构从静态的对象变成会随参数变化的对象。给定一个代数簇族，其各阶上同调群的霍奇分解如何随参数移动？他在 1960 年代建立起变分霍奇结构的理论，证明周期映射满足一条横截性条件——霍奇滤过的变化被限制在切空间的某个特定子丛中，这条结论今天被称作格里菲斯横截性。由此，周期映射的像必须落在受这条约束支配的周期域里，而这一约束成为研究代数簇模空间的强有力工具。他把这套超越方法与经典的阿贝尔积分周期理论接起来，让代数几何重新获得了用分析与微分几何说话的能力。横截性的意义在于，它把"周期映射的像落在哪里"这个含糊的问题，变成了一个可以用微分系统去算的问题；此后关于周期映射的像与霍奇轨迹的一整条研究线索，正是由此出发的。</p>

<h3>三、合作、反例与那本教科书</h3>
<p>他与 Joe Harris 合作，揭示了阿贝尔经典加法定理与几何中庞斯莱闭合定理之间的内在联系，把十九世纪的几何重新安放在现代语言之中。1972 年他与 Herbert Clemens 给出一个三维的反例，说明存在单有理而非有理的三维代数簇，从而否定了 Lüroth 问题的一般形式；Manin 与 Iskovskikh 也独立得到了类似结果。他与 Harris 合写的《代数几何原理》是复代数几何的标准教材，几十年来一直是进入这一领域的门径。此外，他在外微分系统、微分几何与偏微分方程的几何方面也有重要工作。他的学生包括 Joe Harris、Mark Green、David Morrison、Wilfried Schmid 与 Andrew Sommese。这批人后来各自把变分霍奇结构带进了不同方向：从曲线模空间、卡拉比–丘流形与镜像对称，到表示论中的霍奇理论，都能追溯到他在哈佛与杜克时期的那间讨论班。</p>

<h3>四、影响与荣誉</h3>
<p>2008 年的沃尔夫数学奖由他与 Pierre Deligne、David Mumford 共同获得，表彰他关于霍奇结构变分、阿贝尔积分周期理论的工作以及对复微分几何的贡献。同年他还获 Brouwer 奖章；1971 年即获斯蒂尔奖，2014 年又获美国数学会终身成就斯蒂尔奖与国际数学联盟的陈省身奖章。他 1979 年当选美国国家科学院院士，1992 年入选美国哲学会，2019 年成为俄罗斯科学院外籍院士。他把陈省身奖章的奖金捐出，设立了奖励非洲青年数学家的 AMMSI–格里菲斯奖。在担任高等研究院院长的十二年里，他把一个以纯粹研究著称的机构，办成了全球数学家的公共会客厅。他任内推动了研究院与各区域数学组织的合作，并长期主持旨在支持发展中国家数学的 Science Initiative Group；对他而言，几何学里的"横截性"与学术组织中的"连通性"其实是同一种直觉——重要的不只是对象本身，还有它们如何随参数变化而彼此相连。</p>
</div>
</div>

<div id="ar-mathfigures-panel-gromov" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-gromov">
<div class="agent-intro">
<h2>米哈伊尔·格罗莫夫：重绘几何版图的革命者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1943–</td></tr>
<tr><td><strong>籍贯</strong></td><td>俄罗斯/法国，生于苏联博克西托戈尔斯克</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；法国高等科学研究所（IHÉS）、纽约大学</td></tr>
<tr><td><strong>代表成就</strong></td><td>h 原理与凸积分；辛几何不可挤压定理与伪全纯曲线；多项式增长群定理；双曲群与几何群论；Gromov–Hausdorff 收敛</td></tr>
</table>
</div>

<h3>一、列宁格勒与罗赫林学派</h3>
<p>格罗莫夫1943年12月23日生于苏联博克西托戈尔斯克，父母都是病理学家，母亲时任军医，在他出生时才从前线撤下。九岁时母亲送他一本《数学的享受》，从此勾起了他的好奇心。他在列宁格勒大学读数学，1965年获硕士学位、1969年获博士学位，1973年完成博士后论文，导师是 Vladimir Rokhlin。1970年他受邀在尼斯国际数学家大会作报告，却未能获准出境。后来他离开苏联，成为法国高等科学研究所（IHÉS）的永久成员，并任纽约大学教授。</p>

<h3>二、h 原理：柔性与刚性的辩证法</h3>
<p>格罗莫夫的 h 原理（h 指同伦）处理微分关系与偏微分不等式：只要满足某个同伦论层面的条件，几何问题往往不是被方程卡死，而是留出了极大的自由度。这一观点既解释了纳什 C¹ 嵌入定理那种"看似不可能却真能做到"的现象，也催生了凸积分理论，近年还被用来理解不可压缩流体解的正则性。在辛几何中，他引入伪全纯曲线，并证明著名的不可挤压定理：一个球无法用辛变换挤进半径更小的圆柱——辛几何由此在柔性之中显出刚性，成为一个独立学科。</p>

<h3>三、把群当成空间来度量</h3>
<p>格罗莫夫把群本身当作几何对象：取有限生成群的凯莱图，配上词度量，群就成了一个度量空间。由此他证明了一个里程碑式的定理——有限生成群若其增长是多项式阶的，则它必为几乎幂零群。这一结果把"代数的增长率"与"群的结构"直接联系起来，开创了几何群论。他还提出双曲群与 Gromov 边界，为一大类群赋予了负曲率空间的直觉；他引入的 Gromov–Hausdorff 收敛则让一族黎曼流形可以"收敛"到某个极限空间，为整体黎曼几何的紧性理论提供了语言。</p>

<h3>四、影响与荣誉</h3>
<p>格罗莫夫是美国国家科学院外籍院士、法国科学院院士、英国皇家学会外籍会员。他获1981年美国数学会 Veblen 几何奖、1984年 Élie Cartan 奖、1993年沃尔夫数学奖（表彰其在整体黎曼与辛几何、代数拓扑、几何群论与偏微分方程理论方面的工作）、1997年 Steele 奖与罗巴切夫斯基奖章、1999年巴尔赞奖、2002年京都奖、2004年 Nemmers 奖、2005年波约伊奖。2009年，他因"对几何的革命性贡献"获阿贝尔奖。他的学生中有多位当代活跃的几何学家，而以"格罗莫夫"冠名的概念贯穿几何、拓扑与群论，成为现代数学中辨识度最高的名字之一。</p>
</div>
</div>

<div id="ar-mathfigures-panel-grothendieck" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-grothendieck">
<div class="agent-intro">
<h2>亚历山大·格罗滕迪克：以概型重建代数几何的孤独革新者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1928–2014</td></tr>
<tr><td><strong>籍贯</strong></td><td>生于德国柏林，长期居留法国（晚年入法国籍）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；法国高等科学研究所（IHÉS，1958—1970），后任蒙彼利埃大学教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>概型理论（EGA、SGA）；格罗滕迪克—黎曼—罗赫定理；以"东北论文"革新同调代数；引入格罗滕迪克群与环，开创K理论</td></tr>
</table>
</div>

<h3>一、无国籍者的早年</h3>
<p>1928年3月，格罗滕迪克生于柏林，父母都是投身无政府主义运动的人。1933年纳粹上台后他们逃离德国，父亲后来被关进法国韦尔内集中营，1942年死于奥斯维辛；他与母亲被拘于法国南部的里厄克罗集中营，靠着一位牧师的庇护才得以活下来。战后母子定居蒙彼利埃附近，他在那里几乎是自学地琢磨"体积"这个概念，用他自己的话说，这段孤独的思考让他独自重新发现了勒贝格积分。经人引荐到巴黎后，他才发现自己远不是世界上唯一的数学家。他在南锡随让·迪厄多内与洛朗·施瓦茨做博士论文，1953年以《拓扑张量积与核空间》获学位，此后几年就已成为拓扑向量空间理论的一流专家。因为出身而无国籍，他无法担任公职，又不愿以服兵役换取入籍，只好远走巴西与美国堪萨斯任教；正是在这段时期，他的兴趣从泛函分析转向了代数几何。</p>

<h3>二、"东北论文"：同调代数的重生</h3>
<p>1957年，格罗滕迪克在日本的《东北数学杂志》上发表了《同调代数的若干要点》，这篇后来被简称为<strong>"东北论文"</strong>的文章，通常被视为现代同调代数的起点。此前同调代数主要是在模的范畴里操作，依赖逐个元素去追踪；他转而把对象放到<strong>阿贝尔范畴</strong>这一抽象框架中，用内射分解与导出函子来定义上同调，并指出层论里的上同调不过是这一套机制的特例。其结果是：从代数到拓扑到几何，凡是想定义"上同调"的地方，都可以用同一套语言一遍搞定。这种"把具体经验提炼为普适机制"的手法，是他一生工作的底色。菲尔兹奖的获奖理由中专门提到这篇论文，说他以此"革新了同调代数"。</p>

<h3>三、概型：代数几何的重写</h3>
<p>1958年，格罗滕迪克加入新成立的法国高等科学研究所，此后十年，他和同仁把代数几何整个重写了一遍。核心是<strong>概型</strong>这一概念：它把代数几何的研究对象从具体的方程解集，扩展为可由任意交换环局部地粘合出来的空间，从而使这门学科在很大程度上还原为交换代数，同时也为数论提供了几何语言。他与迪厄多内合写的《代数几何基础》（EGA）以及布尔马里讨论班的系列记录（SGA），成为整整一代人的"圣经"；他提出的<strong>格罗滕迪克群与格罗滕迪克环</strong>由此诞生了K理论，格罗滕迪克—黎曼—罗赫定理把古典的黎曼—罗赫定理推广到任意维数的代数簇。他还建立了平展上同调与ℓ进上同调理论，为韦伊猜想备好了工具——他的学生德利涅正是沿着这条路，在1970年代完成了韦伊猜想的证明。</p>

<h3>四、退出、隐居与身后</h3>
<p>1966年格罗滕迪克获菲尔兹奖，但他拒绝前往莫斯科领奖，以示对苏联的抗议。1970年，因发现研究所的部分经费来自国防部门，他从IHÉS辞职，此后与数学界渐行渐远，转向反战与生态议题，创办过"生存与生活"组织。他在蒙彼利埃大学任教至1988年退休，其间写下了两千来页的自省式著作《收获与播种》。1988年，瑞典皇家科学院把克拉福德奖授予他和德利涅，他拒绝接受，理由是退休金已足够生活、奖项赋予研究者过高的地位、且自己早已离开科学界。1990年他搬到比利牛斯山区的小村拉塞尔，把全部数学手稿留在身后，开始了彻底的隐居，并要求不再传播自己的著作。2014年11月13日，他在法国阿列日省去世，享年86岁。他生前远离学界，身后却被公认为二十世纪最具影响力的数学家之一；今天翻开任何一本代数几何教材，格罗滕迪克拓扑、格罗滕迪克上同调、格罗滕迪克环这些词都会反复出现。</p>
</div>
</div>

<div id="ar-mathfigures-panel-hironaka" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-hironaka">
<div class="agent-intro">
<h2>广中平祐：把奇点一一抚平的代数几何学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1931–2026</td></tr>
<tr><td><strong>籍贯</strong></td><td>日本，山口县</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；哈佛大学教授、京都大学教授（后任京都大学数理解析研究所所长、山口大学校长）</td></tr>
<tr><td><strong>代表成就</strong></td><td>特征零域上任意维代数簇的奇点解消定理、爆发（blow-up）理论、实解析几何中子解析集理论</td></tr>
</table>
</div>

<h3>一、从山口到哈佛</h3>
<p>广中平祐 1931 年 4 月 9 日生于日本山口县的一个大家庭，1954 年从京都大学理学部毕业，随后进入该校研究生院。1956 年是他人生的转折点：受秋月康夫邀请访日的奥斯卡·扎里斯基（Oscar Zariski）在京都讲学，年轻的广中得以向这位当世代数几何大家陈述自己的工作。扎里斯基一句"也许你可以来哈佛"，把他带进了现代代数几何的中心。他出身于一个子女众多的家庭，少年时家境并不宽裕；中学时代正值战后，他一边读书一边做工，直到考入京都大学才得以系统地学习数学，并在秋月康夫的指导下接触到现代代数的前沿。1957 年他赴美，1960 年在哈佛取得博士学位，博士论文《On the Theory of Birational Blowing-up》系统发展了"爆发"这一操作——用一个子空间的所有法方向把它替换掉——并揭示这类操作如何组织同一个空间的不同双有理模型。读书期间他与亚历山大·格罗滕迪克结为好友，1959 至 1960 年应邀访问法国高等科学研究所（IHÉS）。此后他先后任教于布兰代斯大学与哥伦比亚大学，1968 年回到哈佛。</p>

<h3>二、奇点解消：任意维的定理</h3>
<p>代数簇的奇点是几何学最顽固的障碍：在奇点处，分支可能相交、尖点可能生成，局部结构复杂到让多数有力的几何与分析工具失效。所谓解消，就是用一个光滑簇 $Y$ 与一个在奇点集之外不改变任何东西的正常映射来替换原簇，从而在光滑世界里讨论原本的问题。扎里斯基只对曲线与曲面（维数不超过 3 的情形）证明了这一点，而广中在 1964 年完成了一般情形：在特征为零的域上，任意维数的代数簇都可解消，他还进一步安排奇点集的原像具有简单正规交叉，即局部看起来像坐标平面横截相交。证明依靠细致的情形分析与多步归纳，其难度在数学史上几乎独一无二；格罗莫夫曾评价它"至今没有被超越，也没有被简化"。需要说明的是，广中的定理只覆盖特征为零的域：正特征（特征 $p$）情形的解消至今仍只在部分维数上得到解决，这也反衬出他那条定理在特征零世界里的完整与彻底。这项工作为他赢得了 1970 年的菲尔兹奖。</p>

<h3>三、复解析与实解析几何中的后续</h3>
<p>广中的贡献远不止于解消定理。他早期研究奇异空间在族中的变化，找出了维数、正规性、奇点性质在特殊化之下保持稳定的条件；他构造了一族著名的光滑紧复空间，其一般成员是凯勒（Kähler）的而特殊成员不是，暴露出复几何中出人意料的不稳定性；他还在"平坦化"（flattening）上取得强有力结果——通过改造一族变化的空间，使其纤维表现得整齐一致。在实解析几何中，他参与奠定了子解析集（subanalytic sets）的现代理论，证明这类可能相当复杂的集合仍具有良好的有限性、可分层与可三角化性质。这些工作共同塑造了后来双有理几何、霍奇理论与实解析几何的基本语言。今天，"先做解消再讨论"几乎是处理奇异代数簇时的默认动作：他在奇点与光滑之间架起的那道桥，早已是整个领域无须解释的常识。</p>

<h3>四、影响与荣誉</h3>
<p>1970 年尼斯国际数学家大会上，三十九岁的广中获菲尔兹奖，同年获日本学士院奖；1975 年获日本文化勋章，1976 年当选日本学士院院士，1969 年当选美国艺术与科学院院士，2004 年获法国荣誉军团骑士勋章。1975 年起他兼任京都大学教授，1983 至 1985 年担任京都大学数理解析研究所所长；1996 至 2002 年出任家乡的山口大学校长。他极为重视人才培养：1980 年起为日本高中生举办暑期研讨班，后又扩展到日美大学生，持续二十余年；1984 年他创立日本数学科学协会为这些活动与留学生提供资助。他的学生中包括 2022 年菲尔兹奖得主许埈珥。他在日本是家喻户晓的学者，与指挥家小泽征尔交谊甚笃。广中平祐于 2026 年 3 月 18 日在东京逝世，享年九十四岁；他解消了奇点，却常说正是那些不规则性给了世界以深度。</p>
</div>
</div>

<div id="ar-mathfigures-panel-hairer" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-hairer">
<div class="agent-intro">
<h2>马丁·海雷尔：为随机偏微分方程造出正则结构的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1975–</td></tr>
<tr><td><strong>籍贯</strong></td><td>奥地利、英国双重国籍，生于瑞士日内瓦</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；伦敦帝国理工学院教授，并任洛桑联邦理工学院（EPFL）教授，此前曾任教于华威大学与纽约大学库朗研究所</td></tr>
<tr><td><strong>代表成就</strong></td><td>创立正则结构（regularity structures）理论，为奇异随机偏微分方程提供系统的解与适定性框架；在 Hörmander 定理、非马尔可夫系统遍历论与粗糙路径理论上的工作</td></tr>
</table>
</div>

<h3>一、日内瓦的物理博士与沃威克的十年</h3>
<p>海雷尔出生于日内瓦一个数学氛围浓厚的家庭，父亲 Ernst Hairer 是日内瓦大学的数值分析教授。他 1994 年在日内瓦的 Collège Claparède 完成中学学业，随后进入日内瓦大学，1998 年 7 月获数学学士、同年 10 月获物理硕士，2001 年 11 月在 Jean-Pierre Eckmann 指导下获得物理学博士，论文题为《随机偏微分方程的渐近行为》。博士毕业后他先到纽约大学库朗研究所工作，随即长期任教于英国华威大学，2014 年获聘华威 Regius 数学教授，后转任帝国理工学院，并在洛桑联邦理工学院兼任教授。少年时代他对软件与音频处理颇有兴趣，曾开发 macOS 平台上的音频编辑软件 Amadeus，并在此后多年持续维护，还在 2007 年获得 Macworld 杂志颁发的 Eddy 奖——这在顶尖数学家中是相当罕见的副业。他在沃威克的那些年里，先后系统处理了 Hörmander 定理的若干变体、随机系统 Lyapunov 函数的构造、非马尔可夫系统的遍历性理论以及多尺度分析与均匀化方法。</p>

<h3>二、当噪声太粗糙，方程就写不出导数</h3>
<p>随机偏微分方程（SPDE）描述的是被随机噪声驱动的演化系统：湍流、界面生长、种群扩散、金融市场的微观结构，都可以写成这类方程。麻烦在于，物理上最重要的那类噪声——时空白噪声——极其粗糙，它甚至不是一个函数，而是一个广义函数。方程的解因而也粗糙到无法求导，而方程里偏偏又写着导数，甚至写着导数的平方。最著名的例子是 Kardar、Parisi 与 Zhang 在 1986 年提出的界面生长方程（KPZ 方程），它描述随机沉积表面的演化，其中恰恰出现了梯度平方这样的非线性项。经典微积分在此彻底失效：你不能对不存在的东西做乘法。二十世纪的应对办法是逐个问题打补丁，为 KPZ 方程、随机量化方程等分别设计特殊技巧，既繁琐又不通用。海雷尔想解决的正是这个根子上的困难：能不能造出一套通用的微积分，让这类"病态"方程可以被系统处理？</p>

<h3>三、正则结构：给病态函数配一副骨架</h3>
<p>2014 年前后，海雷尔提出了正则结构（regularity structures）理论。其思路可以概括为两步：先为解在每一点附近建立一套"局部展开"的代数框架，用一族抽象符号承载不同正则性的项，这些符号构成一个配备重正化群作用的分次代数；再证明在噪声的具体实现下，这套抽象展开能唯一地对应到真正的解，并且解连续依赖于输入。换句话说，他给每个病态的函数配了一副"骨架"，骨架上的代数运算是良定义的，重正化则负责把发散的部分系统地剔除——这部分尤其关键，因为重正化群作用保证了所得的极限与物理学家用其他方法得到的结果一致，而不是某种人为的收敛。这套框架一举解决了此前只能个案处理的一大批方程。它与 Terry Lyons 的粗糙路径（rough paths）理论一脉相通，但适用范围广阔得多，也让重正化这一源自量子场论的技术获得了严格的数学形式。</p>

<h3>四、影响与荣誉</h3>
<p>2014 年，海雷尔在首尔获菲尔兹奖，理由是"对随机偏微分方程理论的杰出贡献，特别是为这类方程创建了正则结构理论"。此前他已获 2008 年伦敦数学会 Whitehead 奖与 Philip Leverhulme 奖、2009 年 Wolfson 研究功绩奖、2013 年费马奖、2014 年 Fröhlich 奖；2020 年独得 2021 年数学突破奖，此后又获 2022 年费萨尔国王奖与 ESI 奖章。他 2014 年当选英国皇家学会院士与美国数学会会士，2015 年成为奥地利科学院通讯院士，2021 年当选中国科学院外籍院士，也是德国国家科学院 Leopoldina 院士，并获封爵士（KBE）。他担任《Probability Theory and Related Fields》《Nonlinear Differential Equations and Applications》《Annales Henri Poincaré》等刊物的编委，也参与苏黎世联邦理工数学研究所、亨利·庞加莱研究所与奥伯沃尔夫数学研究所的科学指导工作。如今"正则结构"已是概率论与数学物理的标准词汇，围绕它形成的一整代研究者正把这套工具推向更奇异的方程。</p>
</div>
</div>

<div id="ar-mathfigures-panel-hormander" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-hormander">
<div class="agent-intro">
<h2>拉尔斯·赫尔曼德：线性偏微分方程现代体系的奠基人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1931–2012</td></tr>
<tr><td><strong>籍贯</strong></td><td>瑞典，布莱金厄省米耶尔比</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；隆德大学教授（1968—1996），曾任教于斯德哥尔摩大学、斯坦福大学与普林斯顿高等研究院</td></tr>
<tr><td><strong>代表成就</strong></td><td>线性偏微分算子的一般理论；伪微分算子与傅里叶积分算子；亚椭圆性判别条件；四卷本《线性偏微分算子的分析》</td></tr>
</table>
</div>

<h3>一、从米耶尔比到隆德</h3>
<p>1931年1月，赫尔曼德生在瑞典南部布莱金厄省的小镇米耶尔比，父亲是当地的小学教师。他在隆德读完中学，1948年毕业，1950年取得隆德大学的硕士学位，随后跟随马塞尔·里兹读研究生——里兹是泛函分析名家弗里杰什·里兹的弟弟，也是赫尔曼德中学数学老师的老师。最初的几年他做的是古典函数论与调和分析，他自己后来回忆说那些尝试"没搞出什么名堂"，却是极好的训练。里兹退休后，研究偏微分方程的拉尔斯·戈尔丁接任教授，赫尔曼德也随之转向了这门学科。中间他因服兵役中断过一年，1955年以《论一般偏微分算子的理论》获得博士学位。此后的十年里，他在芝加哥大学、堪萨斯大学、明尼苏达大学和纽约的库朗研究所之间辗转，也在斯德哥尔摩大学任过教授，并在美国几所大学之间往返，最终回到隆德。他的导师戈尔丁评价说，在线性微分算子理论中，许多人都有贡献，但最深刻、最重要的结果属于赫尔曼德。</p>

<h3>二、线性微分算子的一般理论</h3>
<p>1962年斯德哥尔摩国际数学家大会上，赫尔曼德获颁菲尔兹奖，获奖工作是对线性偏微分方程的研究——而其中的问题线索，可以一直追溯回1900年大会上希尔伯特提出的那些著名问题之一。他的贡献并不只是解出某个具体方程，而是为整个领域造出了一套可通用的语言与判据。对常系数算子，他弄清了基本解的存在性与结构，把"方程何时有解"这个含混的问题变成了可以精确刻画的问题；对变系数算子，他给出了局部可解性与正则性的系统条件，并提出了判断一类"向量场平方和"算子是否具有亚椭圆性的著名条件。今天人们谈论一个偏微分算子是否光滑化它的解、解在哪些方向上多光滑，用的正是他搭建的框架。这种把分析学从"逐题攻关"推进为"一般理论"的做法，是他全部工作最鲜明的印记。</p>

<h3>三、微局部分析：在相空间里看方程</h3>
<p>1960年代中期，赫尔曼德与科恩、尼伦伯格等人几乎同时系统地引入了<strong>伪微分算子</strong>，把奇异积分算子、微分算子与它们的逆统一进一个代数里；随后他又与迪伊斯特玛特合作建立了<strong>傅里叶积分算子</strong>理论，为波动方程与几何光学的精确化处理提供了工具。沿着这条路线长成的<strong>微局部分析</strong>，其核心想法是：解的奇性不只是空间中的一个点集，而是相空间中的位置与方向，即所谓的波前集。可以说，微局部分析把"看方程"的分辨率提高了一倍，让奇性沿着什么方向传播也变得可以追踪。1970年尼斯国际数学家大会上，他作了全会报告，主题正是这一新兴领域；1984年至1986年间他出任米塔-列夫勒研究所所长。1968年他当选瑞典皇家科学院院士，此后长期以隆德为学术根据地。</p>

<h3>四、影响与荣誉</h3>
<p>除1962年的菲尔兹奖外，赫尔曼德于1988年获沃尔夫数学奖，2006年获美国数学会的斯蒂尔数学阐述奖——获奖理由正是他四卷本巨著《线性偏微分算子的分析》，评委称很难在数学史上找到另一部涵盖如此之广、又如此之深的"阐述性"著作。他的《多复变函数论导引》同样是多复变课程长期沿用的标准教材。1996年他从隆德大学退休，保留荣休教授头衔。与许多以短篇论文立身的数学家不同，他留下的更多是一部部厚重而自足的书，这些书至今仍是分析学者的案头工具。2012年11月25日，他在隆德去世，享年81岁。如果说偏微分方程这门学科在二十世纪后半叶从技巧集合变成了一门有骨架的理论，那么赫尔曼德正是那副骨架最主要的搭建者之一。</p>
</div>
</div>

<div id="ar-mathfigures-panel-wiles" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-wiles">
<div class="agent-intro">
<h2>安德鲁·怀尔斯：终结三百年悬案的数论骑士</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1953–</td></tr>
<tr><td><strong>籍贯</strong></td><td>英国，生于英格兰剑桥</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；牛津大学（皇家学会研究教授、首位数学钦定讲座教授）、普林斯顿大学</td></tr>
<tr><td><strong>代表成就</strong></td><td>证明半稳定椭圆曲线的模性定理，从而证明费马大定理；与 Coates 合作证明岩泽理论主猜想</td></tr>
</table>
</div>

<h3>一、十岁那年的图书馆</h3>
<p>怀尔斯1953年4月11日生于英格兰剑桥，父亲是神学家，后任牛津大学神学钦定讲座教授。他在剑桥度过童年，十岁那年放学路过社区图书馆，翻到一本讲费马大定理的书：一个他这样的孩子就能读懂的问题，却三百年无人能证。他后来回忆，"从那一刻起我就知道我永远不会放下它"。1974年他在牛津默顿学院毕业，随后到剑桥克莱尔学院攻读博士，在 John Coates 指导下完成关于互反律与 Birch–Swinnerton-Dyer 猜想的论文。1981年他赴普林斯顿大学任教，后又两度回到牛津。</p>

<h3>二、从费马到椭圆曲线</h3>
<p>费马断言，方程 $x^n+y^n=z^n$ 在 n 大于 2 时没有正整数解。这个悬置三百五十余年的断言，在1980年代被一条意想不到的链条接到了椭圆曲线上：Frey 指出，若费马方程有解，就能造出一条性质极其诡异的椭圆曲线，它似乎不该是模的；1986年 Ken Ribet 证明了这种曲线确实不可能是模的。于是，只要证明所有半稳定椭圆曲线都满足谷山–志村猜想（即模性定理），费马大定理便随之成立。读到 Ribet 的结果后，怀尔斯决定动手，并为此几乎隐身工作了七年。</p>

<h3>三、裂缝与修补</h3>
<p>1993年，他在剑桥宣布了自己的证明，引起轰动；但随后的审稿中发现关键一处论证存在缝隙。补救近一年未果之后，1994年9月19日他忽然找到新的思路——改用与学生 Richard Taylor 合作发展起来的一套方法（后称 Taylor–Wiles 方法）绕开了缺口。1995年，两篇论文正式发表，其中一篇与 Taylor 合著，给出了半稳定椭圆曲线模性定理的完整证明，费马大定理就此落定。这一证明不仅是终点，更提供了新工具：此后 Taylor 与其他数学家借助他的方法，完成了完整模性定理的证明。</p>

<h3>四、影响与荣誉</h3>
<p>怀尔斯1995/96年获沃尔夫数学奖，1996年获英国皇家学会皇家奖章与美国国家科学院数学奖，1997年获科尔数论奖、麦克阿瑟奖学金与沃尔夫斯凯尔奖，1998年获费萨尔国王国际科学奖与国际数学联盟银质奖章，2005年获邵逸夫奖。他于2000年获封大英帝国爵级司令勋章，2011年回到牛津任皇家学会研究教授，2018年成为牛津大学首位数学钦定讲座教授。2016年获阿贝尔奖，授奖理由为"通过半稳定椭圆曲线的模性猜想给出了费马大定理的惊人证明，开启了数论的新纪元"；2017年获皇家学会科普利奖章。他本人认为，自己不只是证明了一个定理，而是把整个数论推向了朗兰兹纲领。</p>
</div>
</div>

<div id="ar-mathfigures-panel-hua" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-hua">
<div class="agent-intro">
<h2>华罗庚：从杂货店学徒到数学大师</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1910年11月12日—1985年6月12日</td></tr>
<tr><td><strong>籍贯</strong></td><td>江苏省金坛县（今常州市金坛区）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家、教育家，中国科学院院士</td></tr>
<tr><td><strong>主要领域</strong></td><td>解析数论、典型群、矩阵几何学、多复变函数论、优选学与统筹学</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/hua.webp" width="318" height="395" alt="华罗庚" loading="lazy"><figcaption>华罗庚</figcaption></figure>
</div>

<h3>一、逆境中的起点：自学成才的少年</h3>
<p>1910年，华罗庚出生于江苏金坛一个小商人家庭，父亲经营一间小杂货铺。他初中就读于金坛中学，因家贫交不起学费，<strong>初中毕业后被迫辍学</strong>，回到店里站柜台。他借来仅有几本的数学教材和杂志，一边看店一边自学，常常算题入迷，把算错的账目找上门来，乡亲们因此叫他"罗呆子"。他用五年时间自学完了高中和大学低年级的全部数学课程。</p>

<p>1928年，华罗庚在金坛中学任庶务兼会计，19岁那年不幸染上伤寒，卧床半年，病愈后<strong>左腿落下终身残疾</strong>，走路要左腿先画一个大圆圈，右腿再迈上一小步。身体的残疾没有击垮他，反而激发了他破釜沉舟的决心。</p>

<p>1930年，年仅19岁的华罗庚在上海《科学》杂志发表重要论文——<strong>《苏家驹之代数的五次方程式解法不能成立之理由》</strong>，指出了当时一位大学教授论文中的错误。这篇文章惊动了清华大学数学系主任<strong>熊庆来</strong>，他力排众议，于1931年把华罗庚调入清华大学。华罗庚从助理员做起，只用了一年半就攻下数学系全部课程，随后被破格提拔为助教、讲师。</p>

<h3>二、走向世界的数学家</h3>
<p>1936年，华罗庚经数学家维纳推荐，以访问学者身份前往英国<strong>剑桥大学</strong>。在两年里发表了十几篇高水准论文，在<strong>华林问题、塔里问题、素数分布</strong>等解析数论难题上取得一系列重要成果，其中关于高斯问题研究的成果被学术界称为"<strong>华氏定理</strong>"。</p>

<p>抗日战争爆发后，1938年华罗庚放弃在英国的优越条件，<strong>回国任西南联合大学教授</strong>。在昆明物质极度匮乏的日子里，他完成了经典专著<strong>《堆垒素数论》</strong>，这部著作后来被译成俄、英、德、匈等多国文字出版，成为20世纪解析数论的经典文献。</p>

<p>1950年，华罗庚毅然<strong>放弃美国的终身教职和优厚待遇，携全家回国</strong>。在归国途中，他写下了著名的《致中国全体留美学生的公开信》："梁园虽好，非久居之乡。归去来兮！……为了国家民族，我们应当回去……"</p>

<h3>三、学术贡献：他留下了什么</h3>
<p><strong>解析数论</strong>：改进并推广了哈代—李特尔伍德的圆法，与王元合作证明了哥德巴赫猜想研究中的重要里程碑成果（"2+3"），该成果被国际数学界称为"<strong>华—王方法</strong>"。</p>

<p><strong>典型群与矩阵几何</strong>：开创了中国在这两个领域的系统研究，其成果"<strong>华氏算子</strong>"（典型域上的偏微分方程理论）获得1956年首届<strong>国家自然科学一等奖</strong>。</p>

<p><strong>优选法与统筹学</strong>：20世纪60年代起，他历时20余年，跑遍全国20多个省，向工人农民推广"<strong>双法</strong>"——优选法（0.618法）与统筹法，使数百万人接触到数学方法，被认为是<strong>数学大规模服务国民经济的世界性创举</strong>。</p>

<h3>四、精神与人格</h3>
<p>华罗庚总结自己的读书法为"<strong>由薄到厚，再由厚到薄</strong>"——先下死功夫把书读透，再提炼精髓化为己用。他甘当人梯，善于发现人才。发现陈景润的故事尤为动人：华罗庚读到陈景润质疑自己论文的文章后，不仅不恼，反而把这位厦门大学资料室的小职员调入中科院。他的名言"<strong>聪明在于勤奋，天才在于积累</strong>"至今广为传诵。</p>

<h3>五、生命落幕</h3>
<p>1985年6月12日，华罗庚应邀在日本东京大学作学术报告。演讲结束后，他在讲台上突发心脏病，倒在了他奉献一生的讲坛上，终年74岁。正如他晚年的自勉："<strong>祖国需要，分秒必争。</strong>"</p>
</div>
</div>
<div id="ar-mathfigures-panel-whitney" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-whitney">
<div class="agent-intro">
<h2>惠特尼：把几何直觉做成严格定理的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1907–1989</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，纽约市</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；哈佛大学、普林斯顿高等研究院</td></tr>
<tr><td><strong>代表成就</strong></td><td>惠特尼嵌入定理、斯蒂费尔–惠特尼示性类与惠特尼和、拟阵理论的创立、奇点理论与几何积分论的奠基</td></tr>
</table>
</div>

<h3>一、从图着色到光滑流形</h3>
<p>1907年3月23日生于纽约市，父亲是纽约最高法院法官，祖父威廉·德怀特·惠特尼是耶鲁的语言学家与梵文学者，外祖父西蒙·纽科姆则是天文学家与数学家。他在耶鲁大学先后取得哲学学士（1928）与音乐学士（1929），随后到哈佛大学读数学，1932年在乔治·伯克霍夫指导下获博士学位，论文题为《图的着色》，其中给出了四色问题的一个图论等价形式。此后他在哈佛任教，1946年成为正教授；1952年转赴普林斯顿高等研究院，1977年退休，1989年5月10日在普林斯顿逝世。</p>

<h3>二、嵌入、浸入与示性类</h3>
<p>他的名字主要与光滑流形连在一起。惠特尼嵌入定理表明，任意 $n$ 维光滑流形都可以嵌入到 $2n$ 维欧氏空间之中，这一结果后来还被进一步改进；与之相关的浸入、自相交数、惠特尼和以及惠特尼示性类（今称斯蒂费尔–惠特尼类），构成了微分拓扑与代数拓扑之间最早修通的几座桥。他的方法以几何与直觉见长，却总能把直觉翻译成严格的证明——这正是那个年代拓扑学最需要的东西。1946年他应美国数学会之邀，在康奈尔作了关于可微流形的学术讨论会演讲。</p>

<h3>三、拟阵、奇点与几何积分</h3>
<p>1935年，他从线性相关性中抽象出拟阵（matroid）的概念，为组合学与拟阵理论这一大片领域奠基；同一时期他还刻画了平面图的对偶性。他对欧氏空间之间映射的奇点所做的早期研究，后来成为奇点理论与突变理论的重要来源。战后他又转向代数拓扑与积分论的交互（几何积分论）以及复的整体分析，把几何测度的想法引入流形研究，为后来的几何测度论铺了路。</p>

<h3>四、影响与荣誉</h3>
<p>他1945年当选美国国家科学院院士，1976年获美国国家科学奖章，1982年与马克·克赖因共同获沃尔夫数学奖，1985年获斯蒂尔终身成就奖。他还长期担任《美国数学杂志》与《数学评论》的编辑，1943至1945年间在美国国防研究委员会数学小组服务。1979至1982年他出任国际数学教育委员会主席，晚年把大量精力投入中小学数学教育。他一生热爱音乐与登山，骨灰按其遗愿安放于瑞士的当布朗什峰顶。</p>
</div>
</div>

<div id="ar-mathfigures-panel-cartan" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-cartan">
<div class="agent-intro">
<h2>嘉当：多复变、同调代数与整整一代学生</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1904–2008</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，南锡</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；斯特拉斯堡大学、巴黎高等师范学院、巴黎大学</td></tr>
<tr><td><strong>代表成就</strong></td><td>全纯域必为伪凸域，滤子与超滤，嘉当定理，与艾伦伯格合著《同调代数》，主持巴黎高师讨论班</td></tr>
</table>
</div>

<h3>一、嘉当家的第二个数学家</h3>
<p>1904年7月8日生于南锡，父亲是著名数学家埃利·嘉当。他五岁时父亲受聘索邦，全家迁往巴黎。1923年他考入巴黎高等师范学院，1928年在保罗·蒙泰尔指导下获博士学位。此后他先在卡昂的中学任教一年，又到里尔大学任教两年，1931年起在斯特拉斯堡大学任职，1936年成为该校教授。早在1931年前后，他就与图伦（Peter Thullen）合作证明了多复变函数论中的一个经典结果：全纯域一定是伪凸域。他与父亲还合作过关于有界圆型域变换的论文。</p>

<h3>二、滤子、超滤与新语言</h3>
<p>1937年，他引入"滤子"与"超滤"的概念，为一般拓扑学与收敛理论提供了一套干净的语言，至今仍是标准工具。此后他把注意力转向多复变中的层与解析空间，嘉当定理成为这一方向的标志性结果。1940年起他在巴黎大学任教，并从1940年至1965年在巴黎高等师范学院（于尔姆街）任教；其间除1945至1947两年回到斯特拉斯堡外，一直在巴黎。1969年他转往奥赛理学院（即后来的巴黎南大学），1975年退休。</p>

<h3>三、巴黎高师的讨论班</h3>
<p>1945年起，他在巴黎高等师范学院主持讨论班，主题涵盖多复变分析、层论、谱序列与代数拓扑；1948至1964年间出版了十五卷讨论班文集，成为一代人的共同参考。1950至1951年的讨论班重新整理了勒雷的工作，引入模的分解与导出函子等概念，直接推动了同调代数的成型；1956年他与艾伦伯格（Samuel Eilenberg）合著的《同调代数》则是该领域的奠基之作。他的学生中，让-皮埃尔·塞尔与勒内·托姆后来都获得菲尔兹奖，中国数学家吴文俊也曾受他指导。</p>

<h3>四、影响与荣誉</h3>
<p>他是布尔巴基学派的创始人之一，1935年参与创立该学派，也是其中最活跃的成员之一，并曾为该学派在巴黎高师专门设立职位。1980年获沃尔夫数学奖，授奖理由是他在代数拓扑、复变量与同调代数方面的开创性工作，以及对一代数学家的启发性领导。1974年当选法兰西科学院院士，1976年获法国国家科学研究中心金质奖章，1967至1970年任国际数学联合会主席，并主持了1970年尼斯国际数学家大会的菲尔兹奖评选。2008年8月13日，他在巴黎逝世，享年104岁。</p>
</div>
</div>

<div id="ar-mathfigures-panel-calderon" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-calderon">
<div class="agent-intro">
<h2>阿尔贝托·卡尔德隆：奇异性积分的大师与芝加哥学派的开创者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1920–1998</td></tr>
<tr><td><strong>籍贯</strong></td><td>阿根廷、美国，生于门多萨</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；芝加哥大学教授，曾任教于麻省理工学院、俄亥俄州立大学与普林斯顿高等研究院</td></tr>
<tr><td><strong>代表成就</strong></td><td>Calderón–Zygmund 奇异积分算子理论；柯西问题唯一性；伪微分算子与卡尔德隆反问题</td></tr>
</table>
</div>

<h3>一、从工程师到分析学家</h3>
<p>卡尔德隆 1920 年生于阿根廷门多萨，父亲是泌尿科医生，母亲早逝后他曾被送往瑞士苏黎世附近的一所寄宿学校。因为父亲认定靠数学无法谋生，他在布宜诺斯艾利斯大学改读工程，1947 年取得土木工程师资格，进入阿根廷国家石油公司地球物理部门的实验室。在那里他接触到一类实际问题：能否通过在边界上做电学测量，反推出物体内部的电导率？这个来自石油勘探的问题，后来演变成以他命名的卡尔德隆反问题。1948 年，芝加哥大学的齐格蒙德（Antoni Zygmund）访问布宜诺斯艾利斯，发现了他并邀请其赴美；1949 年他带着洛克菲勒基金会的资助抵达芝加哥，1950 年在齐格蒙德指导下获得博士学位。</p>

<h3>二、Calderón–Zygmund 理论</h3>
<p>经典分析中有一类"奇异积分"：核函数在奇点附近衰减得太慢，积分甚至不绝对收敛，只能按主值理解，希尔伯特变换与里斯变换就是典型例子。1952 年，卡尔德隆与齐格蒙德在《数学学报》上发表长文，系统建立起奇异积分算子的理论，其核心是一件今天称为 Calderón–Zygmund 分解的工具：把任意一个可积函数拆成一个"好"的部分与一列集中在小方块上的"坏"部分，对前者用平方可积估计，对后者利用核的抵消性质逐个处理。这套方法立刻成为偏微分方程的引擎——椭圆方程解的先验估计与正则性理论，几乎都要归结到奇异积分在各类函数空间上的有界性。</p>

<h3>三、唯一性、伪微分算子与反问题</h3>
<p>1958 年他证明了一类偏微分方程柯西问题解的唯一性，这项工作要求处理系数极不光滑的情形，用到的正是他自己的奇异积分技术，其结果后来被广泛用于唯一延拓性问题。此后他与瓦扬古合作，把伪微分算子推广到符号不光滑的情形，得到今天所称的 Calderón–Vaillancourt 有界性定理。1977 年他研究利普希茨曲线上的柯西积分，证明这类曲线上的奇异积分算子仍然有界，一举解决了当时围绕柯西积分的一个中心猜想。1980 年他回到早年那个地球物理问题，发表关于反边值问题的论文，提出从边界测量恢复内部系数的可能性与基本方法，这条路线后来发展成电阻抗层析成像的数学理论。</p>

<h3>四、芝加哥学派与荣誉</h3>
<p>卡尔德隆先后任教于俄亥俄州立大学、普林斯顿高等研究院、麻省理工学院与芝加哥大学，1985 年从芝加哥退休。他与齐格蒙德在那里开创了芝加哥"硬分析"学派（又称 Calderón–Zygmund 学派），把三角级数、奇异积分与偏微分方程拧成一套统一的技艺，门下出了肯尼格（Carlos Kenig）、萨多斯基（Cora Sadosky）、克里斯（Michael Christ）等一批分析学家。他的工作还延伸到插值空间理论与遍历理论，并在信号处理、地球物理与层析成像中得到了实际应用。他获得美国数学会博歇纪念奖，1989 年同时获斯蒂尔奖与沃尔夫数学奖，1991 年获美国国家科学奖章。1998 年他在芝加哥去世；反问题国际协会以他的名字设立了卡尔德隆奖。</p>
</div>
</div>

<div id="ar-mathfigures-panel-carleson" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-carleson">
<div class="agent-intro">
<h2>伦纳特·卡尔森：让傅里叶级数回到"逐点收敛"的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1928–</td></tr>
<tr><td><strong>籍贯</strong></td><td>瑞典，生于斯德哥尔摩</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；乌普萨拉大学、瑞典皇家理工学院、加州大学洛杉矶分校教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>卡尔森定理（L² 函数傅里叶级数几乎处处收敛）；H∞ 代数上的日冕定理新证明；卡尔森测度</td></tr>
</table>
</div>

<h3>一、一个悬了四十年的猜想</h3>
<p>1913年，俄国数学家鲁津提出一个看上去朴素得近乎天真的问题：一个平方可积函数的傅里叶级数，是否在几乎处处收敛回这个函数本身？此后的四十年里，正反两方面的证据越积越多——柯尔莫哥洛夫甚至构造出可积函数其傅里叶级数处处发散的反例，让许多人怀疑鲁津猜想的答案是"不"。1966年，三十八岁的卡尔森给出了肯定的证明：<strong>L² 函数的傅里叶级数几乎处处收敛</strong>。这条结果后来被称为卡尔森定理（与 Hunt 推广到 L<sup>p</sup> 后又称卡尔森–亨特定理），它终结了古典调和分析最著名的一桩悬案，也把"收敛"这个最古老的问题重新拉回分析学的核心。</p>

<h3>二、证明里长出来的工具</h3>
<p>卡尔森的证明之所以影响深远，不只因为结论，更因为方法。为了处理级数部分和的最大函数，他引入了后来以他命名的<strong>卡尔森测度</strong>——用一种几何条件刻画测度对 Hardy 空间的控制能力，从此成为调和分析、偏微分方程与算子理论里的标准语言。此前几年，他还为 H<sup>∞</sup> 代数上的<strong>日冕定理</strong>给出了一个新证明：把"单位圆盘上是否有界的解析函数能否由有限多个函数生成单位理想"这样的代数问题，化归为一类可估计的积分问题。这种"把硬分析拆成一串可加总的小估计"的手艺，是瑞典分析学派留给后世最实用的遗产。</p>

<h3>三、从复分析到动力系统</h3>
<p>卡尔森的视野从未局限在傅里叶分析。他在拟共形映射、泰希米勒空间与克莱因群上有一系列基础工作；六十岁以后，他又转身进入光滑动力系统的世界，与贝内迪克斯合作研究二维映射的奇怪吸引子，用实分析的技术处理此前主要靠几何直觉处理的现象。2006年阿贝尔奖的授奖词因此把两个看似相距遥远的领域并列在一起：表彰他<strong>"对调和分析与光滑动力系统理论的深刻而开创性的贡献"</strong>。</p>

<h3>四、影响与荣誉</h3>
<p>1968至1984年间，卡尔森出任斯德哥尔摩米塔-列夫勒研究所所长，把它从一座纪念性建筑改造成活跃的国际研究中心，一大批调和分析与复分析的重要工作在那里完成。他先后获得1992年沃尔夫数学奖（与汤普森同届）和2006年阿贝尔奖，另获罗蒙诺索夫金质奖章等荣誉。他培养的学生与合作者遍布欧洲与北美的分析学界；而对每一个学傅里叶分析的人来说，他的名字都和那句最朴素的结论连在一起——<strong>级数最终会收敛回来</strong>。</p>
</div>
</div><div id="ar-mathfigures-panel-caffarelli" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-caffarelli">
<div class="agent-intro">
<h2>路易斯·卡法雷利：非线性偏微分方程正则性理论的大师</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1948–</td></tr>
<tr><td><strong>籍贯</strong></td><td>阿根廷（后入美国籍），布宜诺斯艾利斯</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；得克萨斯大学奥斯汀分校教授（Sid W. Richardson 基金会 Regents 讲席）</td></tr>
<tr><td><strong>代表成就</strong></td><td>自由边值问题与障碍问题的正则性理论、蒙日–安培方程的正则性、完全非线性椭圆方程、纳维–斯托克斯方程的部分正则性（与 Kohn、Nirenberg）；2012年沃尔夫奖、2023年阿贝尔奖</td></tr>
</table>
</div>

<h3>一、从布宜诺斯艾利斯到明尼苏达</h3>
<p>路易斯·卡法雷利1948年生于布宜诺斯艾利斯。高中最后一年，他旁听了工程与数学两门课程，比较之下选择了数学。1968年他在布宜诺斯艾利斯大学取得硕士学位，1972年在卡利克斯托·卡尔德隆指导下获博士学位，论文关于雅可比级数的共轭与可求和性。次年他到明尼苏达大学做博士后，研究方向在那里发生了转折：他听了汉斯·莱维关于调和分析的系列讲座，被莱维提出的"障碍问题"彻底吸引，为此从头学起，从此一头扎进非线性偏微分方程与自由边值问题。</p>

<h3>二、自由边界：冰融化时的界面</h3>
<p>在许多物理问题中，解的"光滑区域"与"不光滑区域"的分界本身是未知的，这条分界就是自由边界：冰块融化时水与冰的界面、水渗过多孔介质的湿润前沿、最优停时问题中的执行边界，都是它的化身。1977年，卡法雷利在《数学学报》发表《高维自由边界的正则性》，证明在相当一般的情形下这条界面除了一个很小的奇异集之外是光滑的，从而把该领域从零散的二维技巧提升为系统的高维理论。他与萨尔萨合著的《自由边界问题的几何方法》、与卡布雷合著的《完全非线性椭圆方程》，成为该领域的标准参考书。</p>

<h3>三、蒙日–安培方程与纳维–斯托克斯</h3>
<p>他的另一项代表作是关于蒙日–安培方程的正则性理论。这个出现在微分几何与最优传输问题中的完全非线性方程，其解的凸性与光滑性长期是难点；卡法雷利建立了至今仍被反复使用的内部正则性结果，并由此影响了最优传输理论的发展。此外，他与罗伯特·科恩、路易·尼伦伯格合作，在1982年给出了纳维–斯托克斯方程弱解的"部分正则性"结果：可能的奇点集在抛物意义下的维数不超过一。四十余年过去，这仍是该问题上最好的结果之一，完整正则性至今悬而未决，是千禧年大奖难题之一。</p>

<h3>四、影响与荣誉</h3>
<p>卡法雷利先后任教于明尼苏达大学、纽约大学库朗研究所、芝加哥大学，1986至1996年在普林斯顿高等研究院任教授，此后长期任职于得克萨斯大学奥斯汀分校。他1984年获博赫尔纪念奖，1991年当选美国国家科学院院士，1994年成为宗座科学院院士，2005年获罗尔夫·肖克奖，2009年获斯蒂尔终身成就奖，2012年获沃尔夫数学奖，2013年获所罗门·莱夫谢茨奖章，2018年获邵逸夫奖。2023年，他"因对非线性偏微分方程正则性理论的开创性贡献"获阿贝尔奖，成为首位出生于南美洲的阿贝尔奖得主。他发表论文三百余篇，与一百三十多位数学家合作过，指导了三十余名博士生。</p>
</div>
</div>

<div id="ar-mathfigures-panel-keller" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-keller">
<div class="agent-intro">
<h2>约瑟夫·凯勒：让波学会拐弯的应用数学宗师</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1923–2016</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，新泽西州帕特森</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；纽约大学库朗数学科学研究所教授、斯坦福大学数学与机械工程教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>几何衍射理论、Einstein–Brillouin–Keller 半经典量子化方法、渐近分析在波动与流体问题中的系统应用</td></tr>
</table>
</div>

<h3>一、从帕特森到库朗研究所</h3>
<p>1923 年 7 月 31 日，凯勒生于新泽西州帕特森，父母是从俄国逃出的犹太移民。他 1943 年在纽约大学获学士学位，1948 年在 Richard Courant 指导下获博士学位，论文研究薄曲壳对电磁波的反射与透射。毕业后他留在纽约大学，直到 1979 年才转赴斯坦福大学任数学与机械工程教授，1993 年成为荣休教授。战争期间与战后，他参与过用声呐探测潜艇与水雷的工作，这段经历逼着他去弄清声波在水中如何衰减、反射、畸变——日后那套衍射理论的最初动机，就来自军舰与海洋。他的弟弟 Herbert B. Keller 也是知名应用数学家，任教于加州理工学院。库朗研究所战后那种"数学要能解决实际问题"的空气对凯勒影响至深；他后来在斯坦福同时挂名数学系与机械工程系，正是这种取向的自然延伸。</p>

<h3>二、几何衍射理论</h3>
<p>经典的几何光学只能处理直线传播的射线，遇到障碍物的边缘与尖角便失效。凯勒在 1962 年发表的《Geometrical Theory of Diffraction》中给出了出路：他为边缘、顶点以及光滑曲面上的爬行波分别引入新的射线族，每条衍射射线都带有自己的振幅与相位，其系数可以由局部的规范问题算出来。于是声波、电磁波、弹性波在复杂结构中的传播，都能用射线方法近似求解，而不必正面硬解一个几乎无从下手的边值问题。这套方法后来成为雷达截面计算、隐身技术、天线设计与地震波建模的标准工具。与其说它是一条定理，不如说它是一种语言：把"波遇到尖角会怎样"翻译成了工程师能直接使用的公式。这套理论还预言了"爬行波"：波会沿着凸体的阴影边界绕行，因而能进入几何光学认为完全遮蔽的区域——这一预言后来被反复验证，也成为雷达与声呐设计中的常识。在超声速流动中，以他命名的 Keller 锥描述了扰动传播的范围。</p>

<h3>三、EBK 量子化与渐近分析</h3>
<p>在量子力学里，凯勒延续 Einstein 与 Brillouin 的思路，给出了一套半经典量子化条件——如今称 EBK 方法——用以计算可积系统的能级；对不可积系统，他则研究能级间距的统计规律，成为量子混沌研究的先声。他更普遍的技术武器是渐近分析：对没有精确解的问题，先找出小参数或大参数，再构造展开式。他用这把钥匙开过的锁包括中子输运、随机介质中的波传播、神经脉冲的传导、哺乳动物视觉系统的发育、蠕虫与蛇的运动方式。1970 年代他还研究过水下核爆是否会在比基尼环礁引发海啸，为美国政府的判断提供过数学依据。他长年参与伍兹霍尔海洋研究所的地球物理流体动力学暑期项目，与流体力学家一起工作，把渐近方法带进了海洋与大气问题的建模。</p>

<h3>四、影响与荣誉</h3>
<p>1996/7 年度沃尔夫数学奖表彰他在电磁、光学与声波传播，以及流体、固体、量子与统计力学方面的创新性贡献。此前他获得 1976 与 1977 年 Lester R. Ford 奖、1983 年冯·诺伊曼奖、1984 年 Timoshenko 奖章，1988 年获美国国家科学奖章，1996 年获 Nemmers 奖。他培养的学生包括 George Papanicolaou、Bernard Matkowsky 等人。凯勒还拿过两次搞笑诺贝尔奖：1999 年因算出茶壶壶嘴如何不滴水，2012 年因解释慢跑者上下起伏时马尾辫为何左右摆动。同行称他为"应用数学院长"，他的讲座以清楚著称——在纽约大学的圣诞演讲里，他讲过如何给篮球队排名，那套思路后来被人重新发明，用于网页排序。2016 年 9 月 7 日，他在加州帕洛阿尔托家中去世，享年九十三岁。他一生发表数百篇论文，合作者遍布物理、工程与生物学；他给自己定的标准始终朴素：一个好的近似，既要给出正确的量级，也要让人明白为什么。</p>
</div>
</div>

<div id="ar-mathfigures-panel-kazhdan" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-kazhdan">
<div class="agent-intro">
<h2>大卫·卡日丹：用性质 (T) 与多项式改写表示论的数学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1946–</td></tr>
<tr><td><strong>籍贯</strong></td><td>俄罗斯出生/以色列，生于莫斯科</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；耶路撒冷希伯来大学（曾任教于哈佛大学）</td></tr>
<tr><td><strong>代表成就</strong></td><td>Kazhdan 性质 (T)；Kazhdan–Lusztig 多项式与猜想；Springer 纤维与仿射赫克代数；几何表示论与 Langlands 纲领</td></tr>
</table>
</div>

<h3>一、莫斯科的少年数学家</h3>
<p>1946年，卡日丹生于莫斯科。他与数学的缘分始于一个"家庭协议"——每周可以有一天不去上学，于是他有了大把自己读书的时间。他的才华很早就被注意到，曾被邀请与著名数学家伊斯雷尔·盖尔范德的儿子一起工作；在莫斯科的各种数学小组里，他逐渐形成了一种看待数学的方式：数学是一种依靠交谈、合作与在复杂中发现秩序的文化。他后来长期任教于哈佛大学，之后转到耶路撒冷希伯来大学。除了数学，他还对哲学与犹太思想抱有持久兴趣，曾在波士顿随约瑟夫·B·索洛维契克拉比学习。</p>

<h3>二、性质 (T)：一个不变量的长影</h3>
<p>二十多岁时，卡日丹解决了塞尔伯格提出的两个重大问题；从中提炼出的一个概念，今天称为 Kazhdan 性质 (T)。它说的是：某些群的所有酉表示里，只要"几乎"有不变向量，就一定真的有不变向量——近似不变与不变之间没有空隙。这个听上去相当技术性的性质，成了群论中的一块基石：它给出了一大类群的刚性，使马尔古利斯得以构造出第一批显式扩展图，也在几何、逻辑与算子代数中反复出现。一个为了回答数论问题而发明的条件，最后长成了一整个方向，这大概是它最好的注脚。</p>

<h3>三、Kazhdan–Lusztig 多项式与几何表示论</h3>
<p>1979年，卡日丹与卢斯蒂格为赫克代数定义了一组新基，其结构常数是后来以他们命名的一族多项式，并猜想这些多项式给出不可约表示特征标的组合答案。这一猜想的证明——由贝林森—伯恩斯坦与布雷林斯基—柏原分别给出——把表示论的核心计算彻底几何化，由此催生的几何表示论如今是数学中最活跃的方向之一。卡日丹还系统研究了 Springer 纤维与仿射赫克代数，把它们与 Langlands 纲领联系起来；他在这个纲领上的工作，目标是在数论、几何与调和分析之间建立起一整套猜想性的联系。此外，他对辛流形理论也作了基础性贡献。</p>

<h3>四、影响与荣誉</h3>
<p>卡日丹1990年获麦克阿瑟奖，2010年获罗斯柴尔德奖，2012年获以色列奖（数学与计算机科学），2016年获 EMET 奖，2020年与贝林森共享邵逸夫数学科学奖。2013年他在耶路撒冷遭遇车祸重伤，此后康复并继续工作。他被公认为几何表示论的奠基者之一，其影响不只在定理，更在于他那一代莫斯科数学家特有的工作方式：把不同领域的语言并置，直到它们显出同一个形状。2026年，他与约瑟夫·伯恩斯坦共同获得沃尔夫数学奖，获奖理由是在表示论、自守形式与代数几何方面的基础工作，以及他们在创建几何表示论中的作用。</p>
</div>
</div>

<div id="ar-mathfigures-panel-cohen" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-cohen">
<div class="agent-intro">
<h2>保罗·科恩：为集合论造出"力迫法"的逻辑学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1934–2007</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，新泽西州朗布兰奇（长滩）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；斯坦福大学教授，曾任教于罗切斯特大学、麻省理工学院，并两度访学普林斯顿高等研究院</td></tr>
<tr><td><strong>代表成就</strong></td><td>创立力迫法，证明连续统假设与选择公理对集合论公理系统的独立性</td></tr>
</table>
</div>

<h3>一、从布鲁克林到芝加哥</h3>
<p>科恩1934年4月生于新泽西州朗布兰奇的一个犹太移民家庭，在布鲁克林长大。1950年，十六岁的他从纽约史岱文森高中毕业，随后入读布鲁克林学院；听说芝加哥大学的研究生院只要求两年大学经历，他便在1953年肄业前往芝加哥，1954年获硕士学位，1958年在调和分析大家安东尼·济格蒙德指导下获博士学位，论文题目是关于三角级数唯一性理论。他最初成名于分析而非逻辑：1959年他证明了局部紧群上任何可积函数都是两个可积函数的卷积，解决了鲁丁提出的一个问题；1960年前后他又在利特尔伍德猜想上取得突破，并因此获得1964年的博谢纪念奖。他还留下了以他名字命名的科恩—休伊特分解定理。1957年起他先后在罗切斯特大学、麻省理工学院任教，1959年至1961年在普林斯顿高等研究院做研究员，1961年转入斯坦福大学，此后一直留在那里，直至2004年成为荣休教授。</p>

<h3>二、力迫法：从旧宇宙里长出新宇宙</h3>
<p>1963年，科恩发明了<strong>力迫法</strong>。思路可以这样理解：给定一个满足ZF公理的集合论模型，往里"添进"一个新的、在原有模型中不出现但与之相容的集合，然后把模型扩充为包含它的最小模型。新添的集合是被"力迫"进来的，它的存在方式由一套偏序集与通有滤子精确控制；而扩充过程足够温和，不会破坏原有的公理。于是，要证明某个命题不可证，只需造出两个模型，一个让它成立，另一个让它不成立。这项技术把"不可证明性"从哲学式的争论变成了可以动手计算的工程，至今仍是公理集合论最基本、也最常用的工具。科恩用它在几个月内解决了一个悬置六十余年的问题。阿隆佐·丘奇在1966年莫斯科大会上评论说，哥德尔—科恩的结果及其后续推广意味着：集合论不是一个，而是许多个。</p>

<h3>三、希尔伯特第一问题的落幕</h3>
<p>康托尔提出连续统假设：在可数无穷与实数集的基数之间，不存在其他基数。1900年，希尔伯特把它列在自己那张著名问题清单的第一位。1930年代末至1940年，哥德尔用可构造宇宙证明：若ZF无矛盾，则连续统假设不可能被否证，即它不会被推翻。但"不会被推翻"不等于"会被证明"。科恩用新的方法证明了另一半——连续统假设也无法从这些公理中推出。两者合起来，连续统假设独立于ZFC公理系统：在这个系统中，它既不能证真，也不能证伪。科恩还用同样的方法证明了选择公理相对于ZF公理的独立性。希尔伯特当年期待的那个"唯一答案"，就此被证明在标准公理下并不存在。科恩后来把这项工作写成《集合论与连续统假设》一书，于1966年出版，成为一代人的入门读物。</p>

<h3>四、影响与荣誉</h3>
<p>1966年莫斯科国际数学家大会上，科恩获菲尔兹奖；1967年他又获美国国家科学奖章。时至今日，这仍是唯一一枚授予数理逻辑工作的菲尔兹奖。评奖词之外，这项工作的意义早已溢出逻辑之外：力迫法重塑了整个集合论的研究方式，围绕独立性结果长出了一个活跃的领域，关于实数集基数、关于选择公理变体的大量现代研究都以它为地基。科恩本人却在证明完连续统假设之后重新回到分析领域，还研究过偏微分方程与数论，1969年给出阿克思—科亨定理的构造性证明。他的学生中有彼德·萨那克。除数学外，他会多种语言，会拉小提琴与钢琴，还在斯坦福的合唱团里唱歌。2007年3月23日，他在加利福尼亚州斯坦福去世，享年72岁。</p>
</div>
</div>

<div id="ar-mathfigures-panel-kolmogorov" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-kolmogorov">
<div class="agent-intro">
<h2>柯尔莫哥洛夫：为概率奠基，为湍流定标</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1903–1987</td></tr>
<tr><td><strong>籍贯</strong></td><td>苏联，坦波夫</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；莫斯科大学</td></tr>
<tr><td><strong>代表成就</strong></td><td>概率论公理化（《概率论基础》），湍流 K41 标度律与柯尔莫哥洛夫微尺度，柯尔莫哥洛夫–西奈熵，柯尔莫哥洛夫复杂度</td></tr>
</table>
</div>

<h3>一、概率论的公理化</h3>
<p>1903年生于坦波夫，此后长期任教于莫斯科大学。1933年，他的《概率论基础》以德文出版，用测度论为概率论建立了公理体系：概率是满足可数可加性的规范化测度，随机变量是可测函数，条件期望由拉东–尼科迪姆导数给出。在此之前，概率论已经积累了大量漂亮的成果，却始终缺少这样一块地基；正是这套公理让它成为一门可以与分析、代数平起平坐的严格学科，也让鞅、马尔可夫过程与随机微分方程有了统一的立足点。</p>

<h3>二、K41：湍流的标度律</h3>
<p>1941年，他提出湍流的统计理论：在高雷诺数下，惯性区间内的能量谱与波数的三分之五次幂成反比，这就是著名的"三分之五次幂律"；同时他还给出了耗散尺度的估计，即今天所说的柯尔莫哥洛夫微尺度。这套理论并不试图追踪每一个涡旋，只问能量如何在尺度之间传递、在哪里被耗散掉，却给出了流体力学中最经得起实验检验的定量预测之一，至今仍是湍流模型与标度分析的出发点。</p>

<h3>三、遍历论、复杂性与叠加定理</h3>
<p>在动力系统与遍历论中，他引入后来以他与西奈命名的熵不变量，为"一个系统究竟有多随机"提供了可以计算的刻度。在算法信息论中，他以一个对象的描述长度来定义其复杂性，形成"柯尔莫哥洛夫复杂度"，并由此引出不可压缩性与随机性的刻画。他还与阿诺德一起回应希尔伯特第十三问题，给出连续函数的叠加表示定理；他关于近可积哈密顿系统中不变环面在微小扰动下存留的想法，则成为 KAM 理论的先声。</p>

<h3>四、影响与荣誉</h3>
<p>1980年获沃尔夫数学奖，授奖理由是他在傅里叶分析、概率论、遍历论与动力系统中的深刻原创发现。他创立了莫斯科大学的概率论与数理统计学派，学生中包括伊斯拉埃尔·盖尔范德、弗拉基米尔·阿诺德、雅科夫·西奈等一批二十世纪下半叶的重要数学家，他还长期主持面向天才少年的数学寄宿学校工作。1987年他在莫斯科逝世。今天，从随机过程的教科书到湍流的工程模型，几乎每一页都能遇到他的名字。</p>
</div>
</div>

<div id="ar-mathfigures-panel-krein" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-krein">
<div class="agent-intro">
<h2>克赖因：在敖德萨撑起泛函分析的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1907–1989</td></tr>
<tr><td><strong>籍贯</strong></td><td>苏联（乌克兰），基辅</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；敖德萨大学、敖德萨建筑工程学院</td></tr>
<tr><td><strong>代表成就</strong></td><td>克赖因–米尔曼定理，克赖因空间（不定度规空间），矩量问题的克赖因条件，克赖因–鲁特曼定理与塔纳卡–克赖因对偶</td></tr>
</table>
</div>

<h3>一、没有本科学位的数学家</h3>
<p>1907年4月3日生于基辅一个犹太木材商人之家，少年时便显露出数学才能，十四岁就开始参加讨论班。他十七岁离家前往敖德萨，1926年被切博塔廖夫（Nikolai Chebotaryov）收为研究生，1929年毕业并留校任教，1934年升为教授，1939年获博士学位。他从未取得本科学位，学术生涯又长期受反犹歧视的困扰——两度被解聘，却写出了三百余篇论文与专著。1930年代，他在敖德萨大学创建了一个世界领先的泛函分析研究中心。</p>

<h3>二、矩量问题、算子扩张与不定度规</h3>
<p>他的工作围绕巴拿赫空间的几何、矩量问题、算子理论、积分方程与核函数展开。1940年，他与达维德·米尔曼（David Milman）证明了克赖因–米尔曼定理：局部凸空间中的紧凸集是其极端点集的闭凸包。他还系统研究带有不定度规的空间，即今天所说的克赖因空间，以及其中的埃尔米特算子展开理论；克赖因–鲁特曼定理、克赖因–斯穆良定理、矩量问题的克赖因条件、阿希耶泽–克赖因–法瓦尔常数、马尔可夫–克赖因定理与塔纳卡–克赖因对偶，都以他命名。他的风格是把代数、分析与几何拧在一起，去解决古典与现代的具体问题。</p>

<h3>三、从力学问题到反散射</h3>
<p>他的研究始终贴着力学与物理的具体问题。二战期间学校疏散，1941至1944年他在古比雪夫工业学院任理论力学教授；1944年回到敖德萨，却很快被大学解聘，此后长期在敖德萨海运工程学院、敖德萨建筑工程学院任理论力学教授，晚年兼任乌克兰科学院物理化学研究所顾问。失去大学阵地之后，他从1949年起直到去世，仍定期主持一个数学小组的活动，或在自己家中聚谈。他在弦的振动、散射理论与逆问题上的工作，与后来的反散射方法、Toda 格子的研究密切相关，也使圣彼得堡学派中切比雪夫、马尔可夫与李雅普诺夫的传统在算子理论中获得了新的生命。</p>

<h3>四、影响与荣誉</h3>
<p>1982年，他与哈斯勒·惠特尼共同获沃尔夫数学奖，授奖理由称他"把数学分析的全部力量用于函数论、算子理论、概率与数学物理的问题"，并称赞他的数学风格、个人领导力与正直树立了卓越的标杆——但当时他不被允许出境出席颁奖典礼。他的学生包括奈马克（Mark Naimark）、戈赫贝格（Israel Gohberg）、阿达米扬（Vadym Adamyan）与利夫希茨（Mikhail Livsic）等。1968年他当选美国艺术与科学院荣誉院士，1979年当选美国国家科学院外籍院士。1989年10月17日他在敖德萨逝世；2008年1月，敖德萨大学主行政楼上为他揭幕了纪念牌。</p>
</div>
</div>

<div id="ar-mathfigures-panel-cauchy" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-cauchy">
<div class="agent-intro">
<h2>柯西：让数学重新"严谨"起来</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>法国</td></tr>
<tr><td><strong>生卒</strong></td><td>1789—1857</td></tr>
<tr><td><strong>主要成就</strong></td><td>极限与连续的严格定义；柯西积分定理与积分公式</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/cauchy.webp" width="332" height="460" alt="柯西" loading="lazy"><figcaption>柯西</figcaption></figure>
</div>

<h3>一、分析学的严格化</h3>
<p>在牛顿—欧拉时代，无穷小量、连续、收敛都是"看得懂但说不清"的直觉概念。柯西在《分析教程》（1821）中给出<strong>极限、连续、导数、定积分</strong>的严格定义（后由魏尔斯特拉斯完善为 ε-δ 语言），首创<strong>柯西收敛准则</strong>，这场"分析严格化运动"是19世纪数学最重要的自我革命。</p>

<h3>二、复变函数论的奠基人</h3>
<p>他创立了复分析：<strong>柯西积分定理</strong>与<strong>柯西积分公式</strong>、留数理论——复分析至今是数学中最优美的分支之一，量子场论、信号处理都以它为语言。他还证明了微分方程解的存在唯一性（柯西—利普希茨定理），并在弹性力学中建立应力张量概念。</p>

<h3>三、轶事</h3>
<p>他论文多达789篇，仅次于欧拉，巴黎科学院不得不限制单篇论文页数。如果说欧拉教会数学家"怎么算"，柯西则规定了"<strong>什么才算被证明了</strong>"。</p>
</div>
</div>

<div id="ar-mathfigures-panel-kontsevich" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-kontsevich">
<div class="agent-intro">
<h2>马克西姆·孔采维奇：在物理直觉里造几何的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1964–</td></tr>
<tr><td><strong>籍贯</strong></td><td>俄罗斯、法国，生于苏联希姆基</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；法国高等科学研究所（IHÉS）教授，迈阿密大学杰出教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>任意泊松流形的形变量子化公式；孔采维奇积分（纽结不变量）；稳定映射模空间与 Witten 猜想的证明；动机积分</td></tr>
</table>
</div>

<h3>一、波恩的三年与 Witten 猜想</h3>
<p>孔采维奇的父亲是苏联东方学家列夫·孔采维奇。他在全苏数学奥林匹克中名列第二，进入莫斯科大学，却在 1985 年未取得学位便离开，转入信息传输问题研究所做研究。在那里发表的论文引起了波恩马普研究所的注意，他被邀请访问三个月。就在访问即将结束时，他参加了一次为期五天的会议 Arbeitstagung，在会上勾勒出 Witten 猜想的一个证明思路，令阿蒂亚等在场数学家大为惊讶——访问期随即延长到三年。次年他完成了证明，并于 1992 年在波恩大学在唐·扎吉尔指导下取得博士学位，论文处理的是爱德华·威滕关于两种量子引力模型等价的猜想。</p>

<h3>二、形变量子化：一个普适公式</h3>
<p>孔采维奇最被引用的结果之一，是他对任意泊松流形给出的形变量子化。量子化的经典表述要求把泊松括号提升为非交换的星乘积，此前只在特殊情形下可行。他证明：任意泊松流形都存在形式形变量子化，并且给出了一个完全显式的公式，其系数由某些构型空间的积分给出，形状与费曼图展开惊人地相似。此后他把这个"图展开"的思路反复使用：1995 年前后他引入稳定映射的模空间，可视作拓扑弦论中费曼积分的严格数学表述；他还证明了 Dixmier 猜想与雅可比猜想等价，把两个看似无关的难题焊在了一起。</p>

<h3>三、纽结、镜像对称与动机积分</h3>
<p>在纽结理论中，他引入了后来以他命名的孔采维奇积分：用类似费曼积分的复杂积分定义纽结与链环的拓扑不变量，推广了经典的高斯环绕数，并成为统一的 Vassiliev 不变量。在枚举几何与镜像对称方面，他提出的稳定映射模空间与其上的相交数理论，为计算有理曲线数目提供了系统工具。他还发明了"动机积分"（motivic integration），把 $p$ 进积分的思想移植到代数几何，用 motives 的语言来度量某些无限维空间，在奇点理论与弦论的计数问题中产生了深远影响。</p>

<h3>四、影响与荣誉</h3>
<p>1998 年柏林国际数学家大会上，孔采维奇获得菲尔兹奖，获奖理由涵盖代数几何、拓扑与数学物理，包括证明稳定曲线模空间上相交数的 Witten 猜想、构造纽结的普适 Vassiliev 不变量，以及泊松流形的形式量子化。此前他已获 1992 年欧洲数学会奖与奥托·哈恩奖章、1997 年亨利·庞加莱奖；此后又获 2008 年克拉福德奖、2012 年邵逸夫奖与基础物理学突破奖，以及数学突破奖。1999 年他加入法国籍，2002 年当选法国科学院院士，1995 年起任 IHÉS 常任教授。他的风格被同行形容为：先给出一个令人不安的简洁答案，再让整个领域花上十年去理解它。</p>
</div>
</div>

<div id="ar-mathfigures-panel-connes" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-connes">
<div class="agent-intro">
<h2>阿兰·孔涅：为"非交换"的空间造几何的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1947–</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，德拉吉尼昂</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；法国高等科学研究所（IHÉS）与法兰西公学教授，亦曾任教俄亥俄州立大学、范德堡大学</td></tr>
<tr><td><strong>代表成就</strong></td><td>III 型因子与单射因子的分类、循环上同调、非交换几何的创立、Baum–Connes 猜想</td></tr>
</table>
</div>

<h3>一、III 型因子的分类</h3>
<p>孔涅 1947 年 4 月 1 日生于法国德拉吉尼昂，1966 年至 1970 年就读于巴黎高等师范学校，1973 年在<strong>雅克·迪克斯米耶</strong>指导下以《III 型因子的分类》获博士学位。冯·诺依曼代数的因子分类中，III 型一度是最混乱、也最顽固的一块：它不像 I 型、II 型那样拥有良好的迹与维数函数。孔涅用模自同构群这一由富田–竹崎理论提供的结构，把 III 型因子按所谓 $S$ 不变量细分，从而完成了这一类型的一般分类与结构定理，并给出超有限因子自同构的分类；他同时几乎完全解决了<strong>单射因子</strong>的分类问题。这项工作在 1982 年为他带来菲尔兹奖，颁奖词特别提到他在算子代数理论中的这些成果，以及把 C* 代数用于叶状结构与一般微分几何的工作。</p>

<h3>二、叶状结构与循环上同调</h3>
<p>孔涅很早就意识到，算子代数不该只是"非交换测度论"，它应当能描述几何对象。典型例子是<strong>叶状结构</strong>：一片叶子铺成的空间往往没有好的拓扑，其"商空间"甚至不是 Hausdorff 的，但为其构造的 C* 代数却完好地承载了全部信息，叶状结构的拓扑不变量可以从这个代数的 K 理论中读出。为了让这类非交换空间也有微分形式的类比，他在 1980 年代初引入<strong>循环上同调</strong>，作为非交换微分几何的第一步；它同时是德拉姆上同调在代数语境下的自然替身。沿着这条线索，他与鲍姆合作提出 <strong>Baum–Connes 猜想</strong>，把群的 K 理论与等变 K 同调联系起来，成为指标理论中最重要的猜想之一。他提出的<strong>孔涅嵌入问题</strong>则在几十年后才被量子信息理论的方法否定解决。</p>

<h3>三、非交换几何</h3>
<p>1990 年代以来，孔涅把这些想法系统化为<strong>非交换几何</strong>：如果说盖尔范德对偶告诉我们交换的 C* 代数就是拓扑空间，那么把交换性这一条件撤去，得到的就是"非交换空间"，而谱三元组、狄拉克算子与指标配对等工具让我们仍能在其上测量距离、做微分、算曲率。1994 年出版的《非交换几何》成为这一领域的纲领性著作。这套框架甚至被他推向粒子物理：在非交换标准模型中，希格斯场被解释为某种"内空间"上的联络分量。这类尝试在主流物理界仍有争议，但它展现的野心——让几何语言在没有点的空间上继续有效——已深刻改变了算子代数与数论的交界地带。</p>

<h3>四、影响与荣誉</h3>
<p>孔涅自 1979 年起担任 IHÉS 的 Léon Motchane 讲席教授，1984 年至 2017 年出任法兰西公学分析与几何讲席，其间在范德堡大学（2003–2011 年）与俄亥俄州立大学（2012–2020 年）兼任教职，现为法兰西公学与 IHÉS 的荣休教授。除 1982 年菲尔兹奖外，他还获得法国国家科研中心银质奖章（1977 年）、安培奖（1980 年）、克莱研究奖（2000 年）、克拉福德奖（2001 年）与法国国家科研中心金质奖章（2004 年）。他 1983 年当选法国科学院院士，并先后成为丹麦、挪威、俄罗斯、美国等国科学院的外籍院士，1997 年成为美国国家科学院外籍院士。他曾是布尔巴基学派成员，学生包括 Jean-Benoît Bost 与 Georges Skandalis。</p>
</div>
</div>

<div id="ar-mathfigures-panel-quillen" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-quillen">
<div class="agent-intro">
<h2>丹尼尔·奎伦：高阶代数 K 理论的总设计师</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1940–2011</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，新泽西州奥兰治</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；麻省理工学院教授，后任牛津大学莫德林学院 Waynflete 纯粹数学讲席教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>高阶代数 K 理论的 Q 构造、Quillen–Suslin 定理（塞尔猜想）、模型范畴理论、有理同伦论</td></tr>
</table>
</div>

<h3>一、从偏微分方程到同伦论</h3>
<p>奎伦 1940 年生于新泽西州奥兰治，1959 年即成为普特南竞赛会士。他在哈佛大学连读学位，1961 年获学士，1964 年在<strong>拉乌尔·博特</strong>指导下以一篇关于超定线性偏微分方程组的形式性质的论文获博士学位，随后进入麻省理工学院。两次法国之行改变了他的学术口味：1968–1969 年作为斯隆研究员在巴黎深受<strong>格罗滕迪克</strong>影响，1969–1970 年在普林斯顿高等研究院又受<strong>阿蒂亚</strong>熏染，1973–1974 年再以古根海姆研究员身份重返巴黎。代数几何的格罗滕迪克传统与拓扑 K 理论的阿蒂亚传统在他身上交汇，为即将到来的突破备好了素材。在此之前，他已用有限群的模表示论技巧证明了同伦论中的<strong>亚当斯猜想</strong>，并指出复配边的形式群律本质上就是那个普适的形式群律。</p>

<h3>二、高阶代数 K 理论：Q 构造</h3>
<p>代数 K 理论源自格罗滕迪克在代数几何中的构想，也被阿蒂亚与希策布鲁赫搬进拓扑学，但如何定义"高阶"K 群长期悬而未决。1972 年，奎伦用同伦论的语言给出了答案：他引入 <strong>Q 构造</strong>，把 Exact 范畴的 K 群定义为一个空间的同伦群，一举打通了从范畴到空间的通道。菲尔兹奖的颁奖词正指向这项工作——这一新工具成功地把几何与拓扑的方法和思想用于表述并解决代数中的重大问题，尤其是环论与模论中的问题。同一时期他还证明了塞尔关于仿射空间上代数向量丛平凡性的猜想（与苏斯林独立同时完成，合称 <strong>Quillen–Suslin 定理</strong>），并由此引出 Bass–Quillen 猜想。1975 年他获美国数学会科尔代数奖，1978 年在赫尔辛基国际数学家大会上获菲尔兹奖。</p>

<h3>三、模型范畴与有理同伦论</h3>
<p>比单个定理更深远的，是奎伦造工具的能力。他在 1967 年的《同伦代数》中系统建立了<strong>模型范畴</strong>理论，给出一套在任意范畴中"做同伦论"的公理化框架，如今所称的 Kan–Quillen 模型结构即为其典型样本；这套语言后来成为代数拓扑、表示论乃至范畴论的共同基础设施。他与<strong>丹尼斯·苏利文</strong>各自独立开创了<strong>有理同伦论</strong>，1969 年的论文《Rational homotopy theory》把空间的同伦型在有理化后与微分分次代数对应起来，让"扔掉挠"这件看似粗暴的事变得可以精算。此外，他引入的 Quillen 行列式线丛、Quillen 度量以及 Mathai–Quillen 形式体系，至今仍活跃在指标理论与数学物理中。</p>

<h3>四、影响与荣誉</h3>
<p>1984 年至 2006 年，奎伦出任牛津大学莫德林学院 Waynflete 纯粹数学讲席教授，退休后于 2011 年 4 月 30 日因阿尔茨海默病并发症在佛罗里达去世，享年七十岁。他 1978 年当选美国国家科学院院士，学生包括 Kenneth Brown、Varghese Mathai 等人。前美国数学会主席<strong>海曼·巴斯</strong>在他获奖那年写下的一段评价，大体可以概括他的风格："数学天赋往往或表现为解题，或表现为建理论。像奎伦这样罕见的人，让我们看到艰深具体的难题被极具力量与广度的一般观念、被来自不同领域的统一方法所解决。他深刻影响了整整一代年轻代数学家与拓扑学家的看法乃至思维习惯——研读他的工作，不只为了获得知识，也为了受到熏陶。"</p>
</div>
</div>

<div id="ar-mathfigures-panel-lafforgue" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-lafforgue">
<div class="agent-intro">
<h2>洛朗·拉福格：把朗兰兹对应推上函数域的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1966–</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，生于上塞纳省安东尼</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；华为技术（法国）拉格朗日数学与计算研究中心高级专家，曾任法国高等科学研究所教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>证明函数域上 GL(n) 的朗兰兹对应（即特征为正的代数曲线函数域上的整体朗兰兹猜想）</td></tr>
</table>
</div>

<h3>一、朗兰兹纲领的一道窄门</h3>
<p>朗兰兹纲领设想在数论（伽罗瓦表示）与分析（自守形式）之间建立一张宏大的对应表，被许多人称为数学的"大统一"构想。在数域上它极其困难，数学家于是转向一条相对可达的平行路径：把有理数域换成有限域上代数曲线的函数域。在那里，几何的工具可以大显身手。1970–80 年代，同为菲尔兹奖得主的德林费尔德在函数域情形证明了 GL(2) 的朗兰兹对应，用他称作 shtuka 的对象构造出了相应的模空间。此后二十余年，把这一结果推广到任意秩的 GL(n)，成为该领域公认的核心难题。</p>

<h3>二、沿着德林费尔德的路走到 GL(n)</h3>
<p>拉福格 1986 年入读巴黎高等师范学院，随后在巴黎第十一大学奥赛校区的算术与代数几何小组，师从热拉尔·洛蒙完成博士论文，1994 年获博士学位，并长期在法国国家科学研究中心任职。他的突破正是延续德林费尔德的思路：为更高秩的群构造并控制相应的 shtuka 模空间，处理其紧化、上同调与迹公式，最终证明在函数域上 GL(n) 的自守表示与 $n$ 维伽罗瓦表示之间存在朗兰兹对应。这项工作要求同时驾驭代数几何、表示论与调和分析，被公认为朗兰兹纲领在世纪之交最重大的进展之一。2000 年他出任法国高等科学研究所（IHÉS）数学教授，同年兼任巴黎萨克雷大学教授。</p>

<h3>三、之后的转向：从数论到拓扑斯</h3>
<p>2002 年北京国际数学家大会上，拉福格因在数论与代数几何上的开创性贡献获颁菲尔兹奖，次年当选法兰西科学院院士。2021 年，他离开任职二十余年的 IHÉS，加入华为技术（法国）拉格朗日数学与计算研究中心，研究方向转向拓扑斯（topos）理论及其在通信与人工智能中的潜在应用。按格罗滕迪克的看法，拓扑斯是"空间"概念的极大推广：模空间这一几何问题与上同调不变量这一拓扑—代数构造，可以在同一个一般框架下被重新表述。拉福格近年在中国多所高校开设相关短课程与研讨班，也长期参与中法数学人才联合培养。</p>

<h3>四、影响与荣誉</h3>
<p>他的定理是函数域上朗兰兹纲领的一块基石，此后文森特·拉福格（其弟）等人沿着这一脉络推进，继续扩展对应的适用范围。拉福格中学时代曾两度在国际数学奥林匹克中获银牌。除菲尔兹奖外，他是法兰西科学院院士与法国国家科学研究中心高级研究员。在法国国内，他也因参与关于中小学数学与法语教育改革的公开讨论而为人所知，主张基础教育应回到更扎实的知识与技能训练。对年轻数学学生来说，他提供了一个值得记取的范例：一个宏大的纲领问题，往往需要先在更容易的"平行世界"里被彻底解决，才会在原来的世界里显出形状。</p>
</div>
</div>

<div id="ar-mathfigures-panel-lewy" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-lewy">
<div class="agent-intro">
<h2>汉斯·莱维：给偏微分方程设下边界的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1904–1988</td></tr>
<tr><td><strong>籍贯</strong></td><td>德国、美国，生于布雷斯劳（今波兰弗罗茨瓦夫）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；加州大学伯克利分校教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>无解的光滑线性偏微分方程（Lewy 反例）；Monge–Ampère 方程的先验估计；与库朗、弗里德里希斯的 CFL 条件</td></tr>
</table>
</div>

<h3>一、从哥廷根到伯克利</h3>
<p>莱维 1904 年生于德国布雷斯劳，1926 年在哥廷根大学取得博士学位，导师是偏微分方程与变分学的大师库朗（Richard Courant）。1928 年，他与库朗、弗里德里希斯合作发表一篇关于数学物理方程差分方法的论文，其中提出的稳定性条件，至今仍以三人姓氏的首字母被称为 CFL 条件。1933 年纳粹上台后他被迫离开德国的职位，先到美国的布朗大学，1935 年转往加州大学伯克利分校，此后长期在那里任教。1950 年，他因拒绝签署加州大学董事会要求的忠诚宣誓而被解职，一度在哈佛与斯坦福度过两年，直到该宣誓被加州最高法院裁定违宪才得以复职。</p>

<h3>二、一个没有解的方程</h3>
<p>1957 年，莱维发表了一篇不到五页的短文，构造出一个系数任意光滑的线性偏微分方程，它在任何开集上都不存在解。在此之前，人们默认"光滑系数的线性方程总是局部可解的"——柯西–柯瓦列夫斯卡娅定理至少在解析系数时保证了这一点。莱维的例子说明，光滑性与解析性之间的鸿沟远比想象中深：方程可以写得极其漂亮，却连一个局部解都不存在。这个反例像一枚钉子，把"局部可解性"从此钉成一个必须单独论证的问题，催生了后来关于主型算子、亚椭圆性与局部可解性条件的整条研究路线。1979 年，美国数学会把斯蒂尔奖授予这项工作。</p>

<h3>三、Monge–Ampère 方程与自由边界</h3>
<p>莱维更大量的工作集中在非线性方程与几何问题上。1930 年代他给出 Monge–Ampère 方程解的先验估计，为后来的存在性理论铺路；他研究凸曲面的闵可夫斯基问题，把整体微分几何与非线性椭圆方程连在一起。1946 年他处理斜海滩上的水波，1948 年与弗里德里希斯研究码头问题，这些都是自由边值问题的早期范本。1951 年他讨论具部分自由边界的极小曲面，把变分学与几何测度问题引入伯克利。1959 至 1960 年他访问正在兴起的比萨数学中心，帮助把变分不等式这一新方向带进意大利。</p>

<h3>四、荣誉与伯克利岁月</h3>
<p>莱维在 1972 年退休后仍继续研究。他获得 1984/85 年度沃尔夫数学奖，授奖理由是他"开创了偏微分方程中许多如今已成经典且必不可少的发展"。他是美国国家科学院与美国艺术与科学院院士，也是罗马林琴科学院的外籍院士，1986 年获波恩大学荣誉博士学位。1988 年他因白血病在伯克利去世。在同事的记忆里，他不爱写长篇，也不追求体系的完整，但每一次出手都指向一个真正卡住整个领域的难点；伯克利在偏微分方程上的传统，很大程度上是由他一个人带起来的。</p>
</div>
</div>

<div id="ar-mathfigures-panel-lax" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-lax">
<div class="agent-intro">
<h2>彼得·拉克斯：从激波到可积系统的偏微分方程大师</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1926–2025</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国（生于匈牙利布达佩斯）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；纽约大学库朗数学科学研究所</td></tr>
<tr><td><strong>代表成就</strong></td><td>双曲守恒律理论；Lax 等价定理；Lax–Friedrichs 与 Lax–Wendroff 数值格式；Lax 对与可积系统；Lax–Milgram 引理</td></tr>
</table>
</div>

<h3>一、布达佩斯少年与洛斯阿拉莫斯</h3>
<p>拉克斯1926年5月1日生于布达佩斯一个犹太家庭，父母都是医生，家中曾为年少的他请来匈牙利逻辑学家 Rózsa Péter 做家庭教师。1941年11月全家经里斯本辗转赴美。他就读纽约史岱文森高中时并未上数学课，却参加数学竞赛队，期间结识了冯·诺伊曼、库朗与爱尔特希。1944年他应征入伍，1945至1946年被派往新墨西哥州的洛斯阿拉莫斯，参与曼哈顿计划。战后他回到纽约大学，1947年获学士学位、1949年获博士学位，导师为 K. O. Friedrichs。</p>

<h3>二、双曲守恒律与数值格式</h3>
<p>拉克斯的工作主线是偏微分方程，尤其是非线性双曲型方程。他证明了这类方程弱解的存在性，引入熵条件来挑选物理上正确的解，并与 James Glimm 合作分析解随时间的长期行为。他提出的 Lax–Friedrichs 与 Lax–Wendroff 格式至今仍是计算流体力学的标准工具。更根本的是"Lax 等价定理"：对适定的线性问题，相容性加稳定性即等价于收敛。这一条把数值分析从经验手艺变成了有判据的学科，其影响直达天气预报与飞机设计的日常计算。</p>

<h3>三、Lax 对与可积系统</h3>
<p>1970年代，拉克斯在孤立子研究中提出"Lax 对"：把一个非线性演化方程改写为一对线性算子的交换关系，于是原本难以驾驭的非线性方程忽然拥有了一整套守恒量。这一想法成为可积系统理论的标准语言，也让反散射方法得以系统展开。此外，他与 Ralph Phillips 合作建立的散射理论框架用于刻画波动解随时间的长期特性，其影响远及数论；Lax–Milgram 引理则成为证明弱解存在性的日常工具；他还开创了傅里叶积分算子理论，并提出了迟至2003年才被证明的"Lax 猜想"。</p>

<h3>四、影响与荣誉</h3>
<p>拉克斯自1951年起任教于纽约大学，1972年库朗数学科学研究所成立时出任首任所长至1980年，此后仍活跃于科研与公共事务——他1982年关于超级计算机的报告（俗称"拉克斯报告"）推动了美国计算科学基础设施的建设。他是美国国家科学院与美国艺术与科学院院士，并当选法国科学院、苏联科学院、匈牙利科学院的外籍或本国院士。1986年他获美国国家科学奖章，1987年获沃尔夫数学奖，2005年获阿贝尔奖，挪威科学院称他是"同代最多才多艺的数学家"。他一生指导五十余位博士生。2025年5月16日，拉克斯在纽约家中逝世，享年99岁。</p>
</div>
</div>

<div id="ar-mathfigures-panel-ramanujan" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-ramanujan">
<div class="agent-intro">
<h2>拉马努金：从马德拉斯账房里走出的"数学之仙"</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>印度（泰米尔纳德邦）</td></tr>
<tr><td><strong>生卒</strong></td><td>1887—1920（仅32岁）</td></tr>
<tr><td><strong>主要领域</strong></td><td>数论、无穷级数、连分数、分拆理论、θ函数</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/ramanujan.webp" width="353" height="460" alt="拉马努金" loading="lazy"><figcaption>拉马努金</figcaption></figure>
</div>

<h3>一、"那封信"：与哈迪的世纪相遇</h3>
<p>他没受过正规高等数学训练，靠一本《纯粹数学概要》自学并独自推导了里面全部结论。1913年他把研究成果寄给剑桥的<strong>G. H. 哈迪</strong>，信中120条公式令哈迪震骇——其中包括一个估计分拆数的三重无穷级数公式。哈迪后来说这封信是"我一生中最浪漫的事件"，并断定他与欧拉、雅可比同级别。</p>

<h3>二、分拆理论与仿θ函数</h3>
<p>他与哈迪合作，用"<strong>圆法</strong>"给出分拆数 p(n) 的精确渐近公式；分拆函数的同余性质（如 p(5n+4)≡0 mod 5）被誉为"数论中最美的定理"。他临终前研究的"<strong>仿θ函数</strong>"在2002年后被严格化，并与模形式理论对接——而模形式正是怀尔斯证明费马大定理的工具；物理学家还发现他的公式可用于计算<strong>黑洞熵</strong>。</p>

<h3>三、轶事</h3>
<p>哈迪探病时说"我来的出租车号码1729挺无聊"，拉马努金脱口而出："不，那是个非常有意思的数！它是<strong>能用两种方式表示为两个立方数之和的最小正整数</strong>（1³+12³=9³+10³=1729）。"——这类数从此被称为"<strong>的士数</strong>"。印度将他的诞辰12月22日定为"国家数学日"。</p>
</div>
</div>

<div id="ar-mathfigures-panel-langlands" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-langlands">
<div class="agent-intro">
<h2>罗伯特·朗兰兹：为大统一理论绘制蓝图的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1936–</td></tr>
<tr><td><strong>籍贯</strong></td><td>加拿大（后兼美国籍），不列颠哥伦比亚省新威斯敏斯特</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿高等研究院荣休教授（Hermann Weyl 讲席）</td></tr>
<tr><td><strong>代表成就</strong></td><td>朗兰兹纲领、Eisenstein 级数的一般理论、L-群与函子性原理、玉河数猜想的证明；1995/96年沃尔夫奖、2018年阿贝尔奖</td></tr>
</table>
</div>

<h3>一、一封写给韦伊的信</h3>
<p>1967年1月，三十岁的罗伯特·朗兰兹给安德烈·韦伊写了一封信。信的开头带着谦辞，说这些念头"可能只是幻想"，随后却铺开了一整套猜想：数论中由伽罗瓦群控制的算术对象，与分析和表示论中由自守形式控制的对象，或许其实是同一件事的两种语言。朗兰兹1936年生于加拿大不列颠哥伦比亚省的新威斯敏斯特，16岁进入不列颠哥伦比亚大学，1957年获学士学位、1958年获硕士学位，1960年在耶鲁大学取得博士学位，论文关于李半群的表示。此后他任教于普林斯顿大学与耶鲁大学（其间一度在土耳其中东技术大学工作），1972年成为普林斯顿高等研究院的 Hermann Weyl 讲席教授，办公室正是爱因斯坦用过的那一间。</p>

<h3>二、Eisenstein 级数与 L-群</h3>
<p>纲领不是凭空落下的。此前朗兰兹已经完成两项重量级工作：他为高秩约化群建立了 Eisenstein 级数的解析理论，把马斯、罗尔克与塞尔伯格在秩一群上的结果推广开来，从而描述了算术商空间的连续谱，并证明所有自守形式都由尖点形式与 Eisenstein 级数的留数生成。由此，他证明了任意有理数域上单连通 Chevalley 群的玉河数猜想（韦伊猜想），并得到了一大批 L-函数的亚纯延拓与弱函数方程，而在那之前人们甚至不知道这些函数能否延拓。正是在那封信里，他引入了后来被称为 L-群的对象，并提出了"函子性"（functoriality）原理：两个群之间的同态，应当诱导出它们自守表示之间的对应。</p>

<h3>三、互反律：数学的大统一</h3>
<p>朗兰兹纲领的野心，是把已知的各种互反律统一在一个框架里——经典的阿贝尔类域论把伽罗瓦群的特征与乘法群的特征对应起来，艾希勒与志村把上半平面的 Hasse–Weil zeta 函数与 Hecke 的自守 L-函数对应起来，而纲领宣称这类对应只是更普遍图景的特例。它因此被形容为"数学的大统一理论"。最著名的一次兑现，是它把谷山–志村–韦伊型互反律变成费马大定理的关键环节，怀尔斯的证明正是沿着这条线索完成的。此后数十年，"基变换"、"内窥"（endoscopy）以及几何朗兰兹纲领陆续展开，成为当代数学最庞大的合作工程之一。</p>

<h3>四、影响与荣誉</h3>
<p>朗兰兹1980年获杰弗里–威廉姆斯奖，1982年获美国数学会科尔奖，1995/96年获沃尔夫数学奖，2005年获斯蒂尔奖，2006年获内默斯奖，2007年获邵逸夫奖，2018年"因提出连接表示论与数论的远见卓识的纲领"获阿贝尔奖，2019年获加拿大勋章。他的学生包括詹姆斯·阿瑟、托马斯·黑尔斯与黛安娜·谢尔斯塔德。2007年他转为荣休教授，2020年正式退休。八十年代他还一度转向渗流与统计物理，近年又回到自守形式的研究——六十余年里，他给整个领域留下的不是一两个定理，而是一张至今仍在被绘制的地图。</p>
</div>
</div>

<div id="ar-mathfigures-panel-lawler" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-lawler">
<div class="agent-intro">
<h2>格雷戈里·劳勒：用擦除环随机游走读出共形不变性的概率学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1955–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，生于弗吉尼亚州亚历山德里亚</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；芝加哥大学（曾任教于杜克大学、康奈尔大学）</td></tr>
<tr><td><strong>代表成就</strong></td><td>擦除环随机游走的系统理论；与施拉姆、维尔纳证明平面模型的共形不变性；布朗运动边界维数为三分之四</td></tr>
</table>
</div>

<h3>一、随机游走的精细结构</h3>
<p>1955年7月14日，劳勒生于弗吉尼亚州的亚历山德里亚。1976年他在弗吉尼亚大学取得学士学位，1979年在普林斯顿大学获得博士学位，导师是爱德华·纳尔逊，学位论文讨论的正是自避随机游走。此后他在杜克大学任教至2001年，又转往康奈尔大学，2006年起任芝加哥大学教授。劳勒关心的是随机游走与布朗运动的精细结构：它们会自我相交多少次，交点集合有多大，边界有多曲折。这类问题在统计物理中对应临界现象下的界面，在数学上却长期缺少工具——"维数"这类粗粒度的量好算，真正的分布与极限却难以把握。</p>

<h3>二、擦除环与共形不变性</h3>
<p>擦除环随机游走（loop-erased random walk）是劳勒自1980年前后系统研究的对象：让一个粒子随机游走，每走出一条闭环就把环擦掉，只留下不带环的轨迹。它看似只是自避游走的一个近亲，却出人意料地可解。劳勒证明了它在二维格点上具有标度极限，并算出其维数；更关键的是，他与施拉姆、维尔纳一起证明：这个极限是共形不变的——把区域用共形映射变形，极限的分布只按映射的方式改变。2004年发表于《概率论年刊》的长文确立了平面擦除环游走与一致生成树界面的共形不变性，把复分析重新请回了概率论。</p>

<h3>三、SLE 与布朗环测度</h3>
<p>施拉姆在2000年引入的施拉姆–勒夫纳演化（SLE），给出了一族由单个参数控制的、共形不变的平面随机曲线。劳勒与施拉姆、维尔纳的合作把这些曲线与离散模型对上号：二维布朗运动的边界维数恰为三分之四这一长期猜想，由三人在2001年证明；自避游走与临界渗流的界面也陆续被纳入同一框架。2006年三人共同获得美国工业与应用数学学会的波利亚奖。此后劳勒转向布朗环测度等平面连续模型，2018年在里约热内卢的国际数学家大会上作全会报告，讲的正是"共形不变的环测度"。他的《平面上的共形不变过程》已成为这一方向的标准参考书。</p>

<h3>四、影响与荣誉</h3>
<p>劳勒是美国艺术与科学院院士、美国数学会会士、数理统计学会会士，2013年当选美国国家科学院院士。他参与创办了《Electronic Journal of Probability》，并曾任《Annals of Probability》与《Journal of the American Mathematical Society》的编委。2019年，他与勒加尔共享沃尔夫数学奖，获奖理由是"对擦除环与随机游走的全面而开创性的研究"。劳勒那一代概率学家赶上了与统计物理重新汇合的时机；他的特别贡献在于，把"擦掉环"这样一句近乎儿戏的规则，变成了一扇通往共形不变世界的门。</p>
</div>
</div>

<div id="ar-mathfigures-panel-legall" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-legall">
<div class="agent-intro">
<h2>让-弗朗索瓦·勒加尔：为随机几何造出布朗球面的概率学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1959–</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，生于布列塔尼的莫尔莱</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；巴黎-萨克雷大学（曾任教于巴黎第六大学、巴黎高等师范学院）</td></tr>
<tr><td><strong>代表成就</strong></td><td>布朗蛇的构造；连续随机树与布朗映射的标度极限；布朗球面的唯一性与普适性</td></tr>
</table>
</div>

<h3>一、从巴黎高师到布朗世界</h3>
<p>1959年11月15日，勒加尔生于布列塔尼的莫尔莱。1978年他进入巴黎高等师范学院，1982年在巴黎第六大学（皮埃尔与玛丽·居里大学）取得博士学位，导师是马克·约尔。约尔对莱维笔下那个布朗世界的痴迷感染了他：处处连续、处处不可微的曲线，在他眼里不是病态的反例，而是自然界最普遍的形状。1983年起他在法国国家科研中心与巴黎六大工作，1988年成为巴黎六大教授，1997至2007年任教于巴黎高师并两度负责数学教学，2006年起转到奥赛，即今天的巴黎-萨克雷大学。</p>

<h3>二、布朗蛇与超过程</h3>
<p>勒加尔最重要的发明之一是"布朗蛇"。分支过程描述的是一群粒子随机生灭、随机移动的演化；要把它们的家谱连同空间位置一起编码，需要一件能同时记录"谁是谁的后代"和"在哪儿"的工具。布朗蛇正是这样一件工具：它是一条由布朗运动驱动的、可以不断长出新枝又缩回的蛇形路径，其高度过程给出家谱，其横向摆动给出位置。借助它，勒加尔把超过程与一类非线性偏微分方程的解对应起来——例如方程 $\Delta u = u^2$ 的正解——让概率与分析之间多了一条可双向通行的桥。这套理论在1999年苏黎世联邦理工的讲义《空间分支过程、随机蛇与偏微分方程》中有系统的讲述。</p>

<h3>三、随机树与布朗球面</h3>
<p>1990年代初，奥尔多维茨等人提出了连续随机树（CRT）：把有限树的离散图极限取出来，得到一个由布朗游程编码的随机实数树。勒加尔与合作者证明了各种随机树、随机图与随机平面映射的标度极限都收敛到它——平面上的随机三角剖分、随机四角剖分，无论细分规则如何，尺度放大后都长成同一个对象。真正困难的是唯一性：这个极限对象是不是只有一个？2013年前后，勒加尔证明了布朗映射（也称布朗球面）的唯一性与普适性，米耶蒙也独立得到了相应结果。这项工作把二维量子引力中物理学家只能靠启发式方法猜测的"随机曲面"，变成了一个数学上存在、唯一且可计算的随机度量空间。</p>

<h3>四、影响与荣誉</h3>
<p>勒加尔1986年获罗洛·戴维森奖，1997年获莱昂与米歇尔·勒夫概率论国际奖，2005年获费马奖与索菲·热尔曼大奖，2009年获法国国家科研中心银质奖章，2013年当选法国科学院院士。2014年他在首尔国际数学家大会上作全会报告，2019年与格雷戈里·劳勒共享沃尔夫数学奖，此后又获西班牙对外银行基金会"知识前沿奖"。他指导过十余位博士生，其中最著名的是温德林·维尔纳——2006年的菲尔兹奖得主，其关于施拉姆–勒夫纳演化的工作与勒加尔的随机路径研究一脉相承。勒加尔的文字以清晰著称，他的《布朗运动、鞅与随机积分》已是概率论方向的标准研究生教材。</p>
</div>
</div>

<div id="ar-mathfigures-panel-leray" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-leray">
<div class="agent-intro">
<h2>勒雷：把拓扑方法送进微分方程的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1906–1998</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，尚特奈（今属南特）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；南锡大学、巴黎大学、法兰西公学院</td></tr>
<tr><td><strong>代表成就</strong></td><td>Navier–Stokes 方程弱解理论（勒雷–霍普夫解），勒雷–绍德尔度，层论与谱序列的开创</td></tr>
</table>
</div>

<h3>一、流体方程的弱解</h3>
<p>1906年11月7日生于南特附近的尚特奈。1926至1929年就读于巴黎高等师范学院，1933年获博士学位。1934年，他发表了研究粘性流体充满空间时运动的重要论文，为三维 Navier–Stokes 方程弱解的研究奠定基础——今天所说的勒雷–霍普夫弱解即源于此；他不仅讨论解的存在性，还指出解只在有限时间内保持光滑，其后湍流才会出现。同一年，他与尤利乌斯·绍德尔（Juliusz Schauder）发现了一个拓扑不变量，今称勒雷–绍德尔度，并用来证明在解不唯一时偏微分方程解的存在性。</p>

<h3>二、战俘营里的大学</h3>
<p>1939年二战爆发时勒雷是法国军官，1940年被俘，被关押在奥地利埃德尔巴赫的战俘营，直到1945年。他担心自己在流体力学上的专长会被德国人征用去做战时工作，于是对外自称是拓扑学家，只做拓扑问题。他与难友们办起一所"战俘营中的大学"，他本人担任校长；缺少文献，他只能依靠从苏黎世的霍普夫那里辗转得到的几篇论文，加上自己独立的推演前进。战后他把这段工作整理为《战俘营中讲授的代数拓扑》。</p>

<h3>三、层与谱序列</h3>
<p>正是在被囚禁的几年里，他提出了层（faisceau）的概念与连续映射的谱序列。在他看来，代数拓扑不应只研究空间本身所附的代数不变量，还应当研究连续映射（即一个"表示"）所携带的拓扑不变量。这两件工具后来被许多人发展完善，各自成为同调代数与现代代数几何的基本装备；勒雷覆盖、勒雷谱序列、勒雷–希尔施定理都以他命名。1950年前后，他又回到偏微分方程领域，研究依赖于时间的双曲型方程与柯西问题，并把留数理论推广到复流形上。</p>

<h3>四、影响与荣誉</h3>
<p>战后他任巴黎大学教授（1945—1947），随后任法兰西公学院教授直至1978年。1979年获沃尔夫数学奖，授奖理由是他开创性地发展并把拓扑方法应用于微分方程的研究。他还获得费尔特里内利奖（1971）与罗蒙诺索夫金质奖章（1988），并当选多国科学院院士。1998年11月10日，他在法国拉博勒逝世。后人对他有一句评价：他是第一位现代分析学家——因为在他的手里，函数不再是一张复杂的变量对应表，而是无穷维空间中的一个点。</p>
</div>
</div>

<div id="ar-mathfigures-panel-riemann" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-riemann">
<div class="agent-intro">
<h2>黎曼：给爱因斯坦预备了几何的短命天才</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>德国（汉诺威王国）</td></tr>
<tr><td><strong>生卒</strong></td><td>1826—1866（仅39岁）</td></tr>
<tr><td><strong>主要成就</strong></td><td>黎曼几何；黎曼猜想；黎曼面；黎曼积分</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/riemann.webp" width="360" height="393" alt="黎曼" loading="lazy"><figcaption>黎曼</figcaption></figure>
</div>

<h3>一、黎曼几何：弯曲空间的数学</h3>
<p>1854年就职演讲《论作为几何基础的假设》中，他把高斯的曲面论推广到任意维度、任意曲率的空间，定义了<strong>黎曼度量</strong>。半个多世纪后，<strong>爱因斯坦1915年以黎曼几何为语言建立广义相对论</strong>——引力即时空的弯曲。高斯听完演讲后罕见地盛赞其"超越了所有期待"。</p>

<h3>二、黎曼猜想：数学第一难题</h3>
<p>1859年论文《论小于给定值的素数个数》中，他研究 ζ 函数并提出：<strong>ζ 函数的所有非平凡零点都位于实部为 1/2 的直线上</strong>。它是克雷数学研究所悬赏100万美元的七大千禧难题之一，被公认为当今数学最重要的未解问题；这篇8页论文同时创立了解析数论。</p>

<h3>三、黎曼面与复分析</h3>
<p>他首创<strong>黎曼面</strong>（把多值复函数"铺"在多层曲面上研究），引入连通性、拓扑维数的思想——既是复分析的深化，也是拓扑学的源头之一。黎曼积分、黎曼球面、黎曼张量、柯西—黎曼方程……他几乎每篇论文都开辟一个方向。</p>
</div>
</div>

<div id="ar-mathfigures-panel-lindenstrauss" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-lindenstrauss">
<div class="agent-intro">
<h2>埃隆·林登斯特劳斯：用测度刚性打通遍历论与数论的以色列数学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1970–</td></tr>
<tr><td><strong>籍贯</strong></td><td>以色列，生于耶路撒冷</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；耶路撒冷希伯来大学爱因斯坦数学研究所、普林斯顿大学教授，2024 年起任普林斯顿高等研究院数学学院常任教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>高秩对角作用在齐性空间上的测度刚性定理；与 Einsiedler、Katok 合作在正熵假设下推进 Littlewood 猜想；与 Bourgain 合作攻克算术量子唯一遍历性猜想的关键情形</td></tr>
</table>
</div>

<h3>一、一个数学世家的耶路撒冷少年</h3>
<p>林登斯特劳斯出生在一个不太寻常的家庭：父亲 Joram Lindenstrauss 正是 Johnson–Lindenstrauss 引理的那位同名者，母亲 Naomi Lindenstrauss 是理论计算机科学家，妹妹 Ayelet 后来也成了数学家。那则著名的引理说，一堆高维点集可以在几乎保持两两距离的前提下被随机投影到低维空间，它是今天高维数据降维的理论基石之一——这个背景值得一提，因为林登斯特劳斯后来的工作也总是在"看似压缩的信息里保留刚性结构"。他中学就读于希伯来大学附属中学，1988 年代表以色列参加国际数学奥林匹克并获铜牌，服役期间还获得过以色列国防奖。随后他进入国防军的 Talpiot 人才培养项目，同时在希伯来大学读书：1991 年拿到数学与物理双学士，1995 年获硕士学位，1999 年在 Benjamin Weiss 指导下完成博士论文《动力系统的熵性质》。此后他先后在普林斯顿高等研究院、斯坦福大学任职，2003 至 2005 年间是克莱数学研究所的长期获奖研究员，2004 年起任普林斯顿大学教授，2009 年又受聘于母校希伯来大学。</p>

<h3>二、测度刚性：把不可见的对称性逼出来</h3>
<p>他的核心工作在遍历论的一个经典主题——测度刚性（measure rigidity）。问题是这样的：在一个齐性空间上，一个看起来很"大"的群作用，其不变测度是否只能由少数几种代数结构产生？这一脉络的源头是 Furstenberg 那个著名的问题：如果一个概率测度同时被乘以 2 和乘以 3 这两种互不相称的作用保持，它是否只能是 Lebesgue 测度——换言之，对称性是否多到足以逼出唯一性。Furstenberg 与 Margulis 进一步猜想，高秩的对角作用其遍历不变测度必有代数来源。林登斯特劳斯证明了这一方向的奠基性结果，把九十年代一度停滞的工具推到了新的高度。这项工作真正的分量在它的外溢效应：与 Manfred Einsiedler、Anatole Katok 合作，他借助测度刚性得到了丢番图逼近中著名的 Littlewood 猜想的重大进展——该猜想断言对任意实数 α、β，总有无限多个正整数 n 使 n 与 nα、nβ 的小数部分之乘积足够小。在附加正熵假设后，他们证明了除了一个零维的例外集之外猜想成立，这是迄今对例外集最深刻的控制。</p>

<h3>三、从数论到量子唯一遍历性</h3>
<p>同样的思路还通向了模形式领域。Rudnick 与 Sarnak 曾猜想，算术曲面上拉普拉斯算子的特征函数在高能极限下会均匀铺开，这就是所谓算术量子唯一遍历性猜想。林登斯特劳斯在一组两篇的论文中（其中一篇与 Jean Bourgain 合作）取得了决定性进展，最终由 Kannan Soundararajan 完成证明。此外，他与 Einsiedler、Philippe Michel、Akshay Venkatesh 合作研究算术空间中环面周期轨道的分布，推广了 Minkowski 与 Linnik 的经典定理。还有一条常被忽略却影响深远的线索：他与 Benjamin Weiss 系统研究了 Gromov 在 1999 年引入的平均维数（mean dimension）——这个不变量用来衡量无穷维动力系统的复杂度，与嵌入问题密切相关；他提出了小边界性质及其基本猜想，这些问题至今仍在牵引着一个活跃的分支。这些工作的共同点是：把遍历论的技术当作一把钥匙，去开数论的老锁。</p>

<h3>四、影响与荣誉</h3>
<p>2010 年，在海得拉巴召开的国际数学家大会上，林登斯特劳斯成为首位获得菲尔兹奖的以色列人，获奖理由正是"遍历论中测度刚性的结果及其在数论中的应用"。此前他已先后获得 Blumenthal 奖（2001）、与 Soundararajan 共享的 Salem 奖（2003）、欧洲数学会奖（2004），以及 2009 年的费马奖与 Erdős 奖。他长期担任《Duke Mathematical Journal》《Journal d'Analyse Mathématique》等刊物的编委，入选以色列科学与人文学院与欧洲科学院，2014 年秋还担任过加州大学伯克利分校的 Miller 访问教授。他的工作让"用动力学做数论"从一批零散技巧变成了一套成形的范式；今天在齐性动力系统与丢番图逼近的交叉地带，后来者几乎都要从他的定理出发。</p>
</div>
</div>

<div id="ar-mathfigures-panel-lions" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-lions">
<div class="agent-intro">
<h2>利翁斯：由应用驱动的非线性方程大师</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1956–</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，生于滨海阿尔卑斯省格拉斯</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；法兰西公学院"偏微分方程及其应用"讲席教授，巴黎综合理工教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>与克兰德尔共同提出黏性解理论；玻尔兹曼方程的第一个完整解；与拉斯里共同创立平均场博弈论</td></tr>
</table>
</div>

<h3>一、数学世家里的应用数学选择</h3>
<p>1956年8月11日，皮埃尔-路易·利翁斯生于法国南部的格拉斯。他的父亲<strong>雅克-路易·利翁斯</strong>是法国现代应用数学的奠基者之一，曾任国际数学联盟主席。1975年他进入巴黎高等师范学校（于尔姆），1977年毕业；他放弃了数学教师资格考试这条常规道路，转而投身应用数学研究，1979年在皮埃尔与玛丽·居里大学获博士学位，导师是<strong>哈伊姆·布雷齐</strong>。他曾在巴黎第九大学（多菲纳）任教，1994年正是在那里工作时获得菲尔兹奖；2002年起出任法兰西公学院"偏微分方程及其应用"讲席教授，同时任职于巴黎综合理工，2014年起又兼任芝加哥大学访问教授。</p>

<h3>二、黏性解：给不可微的解一个说法</h3>
<p>利翁斯最广泛传播的贡献，是1983年与<strong>迈克尔·克兰德尔</strong>合作的论文《哈密顿–雅可比方程的黏性解》。最优控制与微分博弈中的值函数几乎总是不光滑的，而哈密顿–雅可比方程的经典解理论对此束手无策，此前也缺乏一个既唯一又稳定的广义解框架。两人引入的<strong>黏性解</strong>概念，巧妙地用"在一点与光滑检验函数相切"的方式重述方程，一举同时解决了存在性、唯一性与稳定性。这一思想迅速成为非线性偏微分方程、随机控制与微分博弈的标准工具，其影响远远超出了它诞生时所针对的那类方程。此后利翁斯在变分法、集中紧性等议题上也做出了一系列奠基工作。</p>

<h3>三、从玻尔兹曼方程到平均场博弈</h3>
<p>利翁斯选题始终由应用牵引，但其数学含金量从未打折。他是第一个给出<strong>玻尔兹曼方程</strong>完整解并附以证明的人——这个稀薄气体动理学的基本方程，此前只有各种部分结果。进入21世纪后，他与经济学家<strong>让-米歇尔·拉斯里</strong>共同发展出<strong>平均场博弈论</strong>：当博弈中的参与者数量极大、彼此同质时，可用一个"平均场"来描述整体分布，把海量个体的互动问题化归为一组耦合的偏微分方程——一条向前演化的输运方程，加上一条向后求解的哈密顿–雅可比–贝尔曼方程。两人自2006年起发表的系列论文奠定了这一理论，如今它在经济学、金融学、交通流与群体行为建模中已被广泛使用。他也培养了一批出色的学生，其中包括2010年菲尔兹奖得主<strong>塞德里克·维拉尼</strong>。</p>

<h3>四、影响与荣誉</h3>
<p>1994年苏黎世国际数学家大会上，利翁斯获菲尔兹奖，表彰他横跨概率论与偏微分方程的诸多贡献，以及在非线性方程方面那些选题始终由应用驱动的优美工作。此前他已获1983年法兰西公学院佩科讲座、1986年法国科学院保尔·杜瓦斯托–埃米尔·布吕泰奖与1992年安培奖。他曾三次在国际数学家大会作报告（1983年华沙、1990年京都、1994年苏黎世），2000年任法国国立工艺博物馆邀请教授。他是爱丁堡赫里奥特-瓦特大学、洛桑联邦理工学院（2010）、纳尔维克大学学院（2014）与香港城市大学的荣誉博士，并被列为高被引研究者。平均场博弈论作为一个由数学家与经济学家共同开启的领域，至今仍在快速扩张，这也再次印证了利翁斯那句生涯写照：最好的应用数学，从不与应用保持距离。</p>
</div>
</div>

<div id="ar-mathfigures-panel-roth" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-roth">
<div class="agent-intro">
<h2>克劳斯·罗特：终结代数数逼近难题的英国数论家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1925–2015</td></tr>
<tr><td><strong>籍贯</strong></td><td>德国出生，英国籍；生于布雷斯劳（今波兰弗罗茨瓦夫）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；伦敦帝国理工学院、伦敦大学学院</td></tr>
<tr><td><strong>代表成就</strong></td><td>罗特定理（代数数的有理逼近）；不含三项等差数列的集合密度为零；偏差理论与大筛法</td></tr>
</table>
</div>

<h3>一、从布雷斯劳到伦敦</h3>
<p>1925年，克劳斯·罗特生于德国布雷斯劳（今波兰弗罗茨瓦夫）的一个犹太家庭。1933年为躲避纳粹，全家迁往伦敦。他就读于圣保罗中学，随后进入剑桥大学彼得学院，还担任过剑桥国际象棋队的第一台，却因为考试时极度紧张，最后只拿到三等荣誉学位——当时的导师甚至劝他去找一份“偏统计的商业工作”。幸而达文波特看出了他解题能力上的真才，安排他到伦敦大学学院，在西奥多·埃斯特曼名义指导下做研究，1948年获硕士学位，1950年获博士学位。此后他在伦敦大学学院任教，1961年升为教授。</p>

<h3>二、代数数逼近的终局</h3>
<p>1909年，图埃证明了代数数不能被有理数逼近得太好，其后西格尔改进了其中的指数。剩下的问题是：这个指数能否压到任意接近 2。1955年罗特给出了答案：若 α 是代数无理数，则对任意 ε>0，满足 $|\alpha-p/q|<1/q^{2+\varepsilon}$ 的有理数 p/q 只有有限多个。这就是罗特定理，它终结了自刘维尔以来一整条关于代数数有理逼近的线索，而且这里的指数已经无法再改进。1958年，他因这项工作获得菲尔兹奖，成为首位获此奖的英国数学家。</p>

<h3>三、等差数列与偏差</h3>
<p>罗特的另一项著名工作与数列的稀疏性有关。1935年，埃尔德什与图兰猜想：如果一个自然数的集合不含三项等差数列，那么它的密度必为零。1952年罗特证明了这一点——这是后来塞迈雷迪定理乃至格林–陶定理这条脉络的起点。此外，他还在大筛法、分布的不规则性（即偏差理论）、海布罗恩三角形问题、正方形内填装小正方形等问题上留下重要结果，并与人合著了关于整数序列的专著《Sequences》。1966年他转任伦敦帝国理工学院教授，1988年退休。</p>

<h3>四、影响与荣誉</h3>
<p>罗特1960年当选英国皇家学会会士，1983年获伦敦数学会德摩根奖章，1991年获皇家学会西尔维斯特奖章。2015年11月，他在苏格兰因弗内斯去世。他的工作风格被同行形容为“把棘手的问题拆到能算为止”：不追求宏大的理论架构，而是在一个个具体而顽固的问题上下手，每次都推进一步。这种克制，与他早年那张三等荣誉的成绩单放在一起看，恰成一种意味深长的对照。</p>
</div>
</div>

<div id="ar-mathfigures-panel-lovasz" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-lovasz">
<div class="agent-intro">
<h2>拉兹洛·洛瓦兹：把组合学推向数学中心的匈牙利人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1948–</td></tr>
<tr><td><strong>籍贯</strong></td><td>匈牙利，布达佩斯</td></tr>
<tr><td><strong>身份</strong></td><td>数学家与计算机科学家；罗兰大学荣休教授，曾任微软研究院高级研究员、匈牙利科学院院长</td></tr>
<tr><td><strong>代表成就</strong></td><td>洛瓦兹局部引理、Kneser 猜想的证明、LLL 格基约化算法、图的极限理论（与 Szegedy）；1999年沃尔夫奖、2021年阿贝尔奖</td></tr>
</table>
</div>

<h3>一、从奥赛金牌到图论</h3>
<p>拉兹洛·洛瓦兹1948年生于布达佩斯，就读于法泽卡什·米哈伊中学，1963年获国际数学奥林匹克银牌，1964至1966年连获三枚金牌。保罗·埃尔德什很早把他引荐进图论的世界，从此组合学多了一位能把代数与几何带进来的作者。1970年他在匈牙利科学院取得副博士学位，导师是提博尔·加莱，1971年在罗兰大学获博士学位。他先后任塞格德大学几何讲席、罗兰大学计算机科学讲席，1993年赴耶鲁大学，1999年加入微软研究院任高级研究员，2006年回到罗兰大学主持数学研究所，2018年退休，现为阿尔弗雷德·雷尼数学研究所研究员。</p>

<h3>二、局部引理与洛瓦兹 θ 函数</h3>
<p>1970年代，他与埃尔德什共同发展出与概率方法互补的工具，其中最著名的是"洛瓦兹局部引理"：当一族坏事件各自概率不大、且每个事件只依赖于少数其他事件时，可以断言所有坏事件同时不发生的概率为正——这为证明"稀有图的存在性"提供了标准技术，在算法设计与可满足性问题中被反复使用。同一时期，他用线性代数与拓扑方法证明了 Kneser 猜想，并引入了后来以他命名的 θ 函数，给出香农容量的上界，从而定出五边形图的香农容量。他还提出了至今未解决的 Erdős–Faber–Lovász 猜想。</p>

<h3>三、LLL 算法与图的极限</h3>
<p>1982年，他与阿尔扬·伦斯特拉、亨德里克·伦斯特拉提出 LLL 格基约化算法，能在多项式时间内把格的一组基化为"近似正交"的基。这个算法后来被用于多项式因式分解，也成为检验多种公钥密码体制安全性的基石，被吉尔·卡莱称为"最基本的算法之一"，唐纳德·克努特则称洛瓦兹是自己的"组合学英雄"之一。进入二十一世纪，他与鲍拉日·塞格迪提出图的极限理论：一个稠密图序列的极限不是图，而是一个定义在单位正方形上的对称可测函数（graphon），从而为大规模网络的研究提供了连续的视角。</p>

<h3>四、影响与荣誉</h3>
<p>洛瓦兹1979年获波利亚奖，1982年与2012年两度获富尔克森奖，1999年同时获得沃尔夫数学奖与高德纳奖，2001年获哥德尔奖，2006年获冯·诺伊曼理论奖，2008年获塞切尼奖，2010年获京都奖基础科学奖，2021年与阿维·维格森共享阿贝尔奖。他还长期承担学术组织工作：2007至2010年任国际数学联盟主席，2014至2020年任匈牙利科学院院长。他的研究横跨离散数学、理论计算机科学与组合优化，正是他这一代人把这两个领域推到了现代数学的中心位置。</p>
</div>
</div>

<div id="ar-mathfigures-panel-lusztig" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-lusztig">
<div class="agent-intro">
<h2>乔治·卢斯蒂格：把有限域上的群表示彻底算清的表示论大家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1946–</td></tr>
<tr><td><strong>籍贯</strong></td><td>罗马尼亚裔美国数学家，生于蒂米什瓦拉</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；麻省理工学院（曾任教于华威大学）</td></tr>
<tr><td><strong>代表成就</strong></td><td>Deligne–Lusztig 理论；Kazhdan–Lusztig 基、多项式与猜想；特征标层；量子群的典范基</td></tr>
</table>
</div>

<h3>一、从蒂米什瓦拉到普林斯顿</h3>
<p>1946年，卢斯蒂格生于罗马尼亚的蒂米什瓦拉。1963年高中毕业后他去布加勒斯特读数学，1968年大学毕业，随后在蒂米什瓦拉大学做了半年助教。1969年他前往普林斯顿高等研究院从事研究，1971年在普林斯顿大学取得硕士与博士学位。此后六年他在英国华威大学任教，1974年晋升教授；1978年他转往麻省理工学院，此后再未离开，1999至2009年担任诺伯特·维纳讲席教授，后又出任阿卜杜-努尔数学讲席教授。1977年伦敦数学会授予他伯威克奖时，他不过三十出头。</p>

<h3>二、Deligne–Lusztig 理论</h3>
<p>有限域上的约化群（例如特殊线性群、辛群）有多少个不可约表示、每个的特征标是什么，是二十世纪表示论的中心问题之一。1970年代，卢斯蒂格与德利涅合作构造了今天称为 Deligne–Lusztig 的表示：他们不再在群本身上数元素，而是转到与群相伴的代数簇上，用 Étale 上同调把表示"取"出来。这一想法一举给出了有限域上约化群不可约表示的完整刻画。围绕它发展出来的一整套技术——Étale 上同调、对偶群的作用、交叉上同调、特征标层、几乎特征与非交换傅里叶变换——后来成了整个领域的通用工具箱。</p>

<h3>三、Kazhdan–Lusztig 多项式</h3>
<p>1979年，卢斯蒂格与卡日丹一起为考克斯特群（特别是外尔群）的赫克代数定义了一组新基，今天称为 Kazhdan–Lusztig 基，其结构常数是一族多项式。他们随后提出猜想：这些多项式恰好给出不可约模在 Verma 模合成列中的重数，从而决定了半单李代数不可约表示的特征标。这个猜想把表示论中最基本的计算问题翻译成了一道组合题，很快由贝林森—伯恩斯坦的局部化定理与布雷林斯基—柏原的工作分别证明；由此长出的几何表示论，成了此后几十年最活跃的方向之一。卢斯蒂格还与沃根合作给出 Kazhdan–Lusztig 算法的一个变种，得到 Lusztig–Vogan 多项式，它是理解实约化群及其酉表示的基础。</p>

<h3>四、量子群与影响荣誉</h3>
<p>1980年代末以后，卢斯蒂格把注意力转向量子群：他引入了典范基（也称全局晶体基），提出 Lusztig 型（允许在单位根处特殊化并与模表示相联系）、量子 Frobenius 与小量子群，并建立了它们与仿射李代数表示论的联系。这些工作让量子群从物理学家手里的形式代数，变成了有结构、有基、有组合的严谨对象。1983年他当选英国皇家学会院士，1985年获美国数学会科尔代数奖，1999年获荷兰数学会布劳威尔奖章，2008年获美国数学会斯蒂尔终身成就奖，2014年获邵逸夫数学科学奖，2022年获沃尔夫数学奖。他在麻省理工培养了一长串学生，从德孔奇尼到何旭华，如今分布在表示论的各个分支。</p>
</div>
</div>

<div id="ar-mathfigures-panel-margulis" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-margulis">
<div class="agent-intro">
<h2>格里戈里·马尔古利斯：用遍历论撬开李群之门的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1946–</td></tr>
<tr><td><strong>籍贯</strong></td><td>原苏联（后入美国籍），莫斯科</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；耶鲁大学教授，早年任职于苏联科学院信息传输问题研究所</td></tr>
<tr><td><strong>代表成就</strong></td><td>超刚性定理与算术性定理、正规子群定理、Oppenheim 猜想的证明、膨胀图的首批显式构造</td></tr>
</table>
</div>

<h3>一、莫斯科的早慧与遍历论的入口</h3>
<p>马尔古利斯 1946 年生于莫斯科，1962 年十六岁时即在国际数学奥林匹克竞赛中获得银牌。他此后就读于莫斯科大学，在<strong>雅科夫·西奈</strong>指导下研究遍历论，1970 年以关于阿诺索夫流的论文获得博士学位。这篇学位论文已显出不俗的创造力：他构造出一种后来被称为 <strong>Bowen–Margulis 测度</strong>的不变测度，借此揭示了双曲空间几何的新性质。与<strong>大卫·卡日丹</strong>合作的早期工作给出了关于离散群的 <strong>Kazhdan–Margulis 定理</strong>，成为该领域的基本结果。由于犹太出身，这位当时全苏最出色的青年数学家之一无法在莫斯科大学谋得职位，只能长期供职于级别低得多的信息传输问题研究所——恰恰是那里的同事向他提起"膨胀图"，他几天之内就用表示论构造出首批显式例子，后来在计算机科学中影响深远。</p>

<h3>二、超刚性：把李群中的格钉死</h3>
<p>1975 年前后，马尔古利斯证明了半单李群中格的<strong>超刚性定理</strong>：在分裂秩不小于二的条件下，格的任一表示或者具有有限像，或者可以延拓为周围李群的表示。这一结果强化了 Mostow 刚性定理，并立即推出<strong>算术性定理</strong>——秩不小于二的不可约格必定是算术格，即与某个由整数矩阵定义的子群相差有限指标。人们原本只能"构造"算术格，却无法判断一个抽象定义的格是否算术；马尔古利斯把这道鸿沟填平，为格的分类扫清了道路。同一时期他还证明了<strong>正规子群定理</strong>，其证明把顺从群理论与表示论中的 Kazhdan 性质 (T) 以一种出人意料的方式拧在一起。1978 年，年仅三十二岁的他因此获得菲尔兹奖，但苏联当局拒发签证，他未能赴赫尔辛基领奖。</p>

<h3>三、从 Oppenheim 猜想到齐性动力学</h3>
<p>马尔古利斯最富方法论意义的贡献，是把遍历论搬进数论。他在 1980 年代中期证明了 1929 年提出的 <strong>Oppenheim 猜想</strong>：一个非退化、且不是有理系数形式之实数倍的不定二次型，在整数点上取到的值在实数中稠密。此前人们沿 Hardy–Littlewood 圆法苦攻半个世纪而不得；他的做法是把问题翻译成齐性空间上的轨道闭包问题，再用动力系统的语言处理。比结论更重要的是这条思路本身，它催生了如今称为<strong>齐性动力学</strong>的整个方向。此后若干位菲尔兹奖得主——包括林登施特劳斯、米尔扎哈尼与文卡泰什——的工作，都建立在他开辟的这片土地上。</p>

<h3>四、影响与荣誉</h3>
<p>1979 年起马尔古利斯方可出国访问，1991 年受聘耶鲁大学并任教至今，现为该校 Erastus L. De Forest 数学讲席教授。他先后当选美国国家科学院院士（2001 年）与美国艺术与科学院院士，并获得罗巴切夫斯基奖（1996 年）、洪堡研究奖（1995 年）、<strong>沃尔夫数学奖</strong>（2005 年）与<strong>阿贝尔奖</strong>（2020 年，与希勒尔·弗斯滕伯格共享，表彰其"开创性地把概率与动力学方法用于群论、数论与组合学"），由此成为少数同时囊括菲尔兹奖、沃尔夫奖与阿贝尔奖的数学家之一。他的学生包括 Emmanuel Breuillard、Hee Oh 等。2008 年有期刊专文罗列他的主要成果，篇幅逾五十页——这大概是对一位数学家"密度"最别致的致敬。</p>
</div>
</div>

<div id="ar-mathfigures-panel-mcmullen" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-mcmullen">
<div class="agent-intro">
<h2>柯蒂斯·麦克马伦：用重正化解剖混沌的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1958–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，生于加利福尼亚州伯克利</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；哈佛大学 Cabot 数学教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>复动力系统中的重正化理论；Mandelbrot 集与 Julia 集的刚性及局部连通性结果；证明高次多项式不存在普遍收敛的纯迭代求根算法</td></tr>
</table>
</div>

<h3>一、从牛顿法到不可能定理</h3>
<p>麦克马伦 1980 年以最优等成绩毕业于威廉姆斯学院，随后在哈佛大学丹尼斯·沙利文指导下于 1985 年完成博士论文《有理映射族与迭代求根算法》。这篇论文解决了一个朴素却顽固的问题：能不能像牛顿法解二次方程那样，设计一种"对几乎所有初值都收敛"的迭代方法去求任意多项式的根？他证明对三次多项式这样的算法存在，而对次数不小于四的多项式则根本不存在。这条"不可能定理"把一个古老的计算问题变成了动力系统的刚性问题，也预告了他此后全部的风格：把具体的问题翻译成几何，然后让几何给出判决。</p>

<h3>二、重正化：在自相似中找刚性</h3>
<p>复动力系统研究的是有理映射迭代下轨道的长期行为，其可视化成果——Julia 集与 Mandelbrot 集——早已为公众所知，但它们的拓扑结构长期难以处理。麦克马伦从物理的重正化群中借来了核心思想：当一个动力系统在小尺度上重现自身时，反复"放大—重标度"的操作构成一个重正化算子，而该算子的不动点决定了系统的普遍行为。沿着这条路线，他给出了沙利文在复动力系统中若干定理的新证明，也处理了瑟斯顿关于双曲三维流形的一些结果，并写成《重正化与纤维化于圆周上的三维流形》《复动力系统与重正化》两部专著。他用重正化证明了 Mandelbrot 集的某些局部连通性结果，并指出这类集合具有一种"通用性"：Mandelbrot 集的小副本会以意想不到的方式出现在其他参数族中。</p>

<h3>三、双曲几何、Teichmüller 理论与弹球</h3>
<p>他的另一条主线是双曲几何与 Teichmüller 理论。他在 Teichmüller 空间上的迭代、无穷小极值映射的刚性与非刚性等方面做出了一系列结果，证明某些情形下空间是"刚性"的——几乎不允许连续变形，而在另一些情形下又出人意料地柔软。他还研究了有理映射与克莱因群的关系，把复动力系统与双曲三维流形这两个领域反复对接；近年又把兴趣投向台球轨迹在 Teichmüller 曲线与希尔伯特模曲面上的行为。他的工作整体呈现出一种罕见的品质：既拥有计算机实验提供的直观图像，又始终给出完全严格的证明。</p>

<h3>四、影响与荣誉</h3>
<p>1990 年京都国际数学家大会上他是邀请报告人，1991 年获塞勒姆奖，1998 年在柏林国际数学家大会上获菲尔兹奖。他先后任教于普林斯顿大学（1987–1990）、加州大学伯克利分校（1990–1997），1997 年加入哈佛大学，并曾担任哈佛数学系主任。2004 年获古根海姆基金，2007 年当选美国国家科学院院士，2011 年获洪堡研究奖。他的博士学生中包括玛丽亚姆·米尔扎哈尼——首位获得菲尔兹奖的女性数学家，这条师承线索也常被视作他影响的一部分。</p>
</div>
</div>

<div id="ar-mathfigures-panel-mumford" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-mumford">
<div class="agent-intro">
<h2>大卫·芒福德：为模空间立法的代数几何家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1937–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国（生于英国），英格兰西萨塞克斯郡沃思（Worth）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；布朗大学应用数学分部大学教授（荣休），曾任哈佛大学教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>模簇的存在性与结构、几何不变量理论（GIT）、代数曲面与阿贝尔簇的代数理论、Mumford–Shah 泛函</td></tr>
</table>
</div>

<h3>一、模空间：给几何对象分类的空间</h3>
<p>几何学家常常希望把所有同类对象收集成一个空间：这个新空间的每一个点，代表原来那类对象的一个同构类。这样的空间称为<strong>模空间</strong>。它是否存在、是否可以用代数几何的语言（概形）来构造，是二十世纪中叶代数几何最棘手的问题之一。芒福德 1961 年的哈佛博士论文《Existence of the moduli scheme for curves of any genus》，正是为任意亏格的曲线构造出模概形，这构成了他学术生涯的第一块基石。1974 年温哥华国际数学家大会上，泰特（John Tate）介绍他的工作时说：芒福德的主要成就，是对模簇——即那些点参数化某类几何对象同构类的簇——的存在性与结构问题发起的一场极为成功的多路进攻。这句话后来成了对他工作最常被引用的概括。模空间的观念此后贯穿他的全部研究生涯：曲线的模空间及其紧化、阿贝尔簇的模空间、向量丛与层的模空间，都由他或他的后继者逐一建立起来，成为今日代数几何中最常用的基础设施之一。</p>

<h3>二、几何不变量理论</h3>
<p>要构造模空间，就必须处理"商"的问题：把一个参数空间按某个群的作用等同起来，所得的商往往不是好的空间，除非把不稳定的点剔除。芒福德的做法，是把希尔伯特的<strong>不变量理论</strong>重新激活，并把它嫁接到格罗滕迪克的概形语言之上，形成了一套判别"好商"的标准与构造程序。这就是他 1965 年出版的《Geometric Invariant Theory》（几何不变量理论），后来又与福加蒂、柯万合作增补为第二、第三版。这本书把意大利学派遗留的直觉、希尔伯特的经典工具与格罗滕迪克的新语言熔于一炉，从此成为构造模空间的标准教科书：曲线、曲面、向量丛、层的模空间，几乎都要向它借力。希尔伯特当年处理的是多项式环上的不变量，芒福德则让这套理论适用于格罗滕迪克的概形与层，并把它推广到特征 $p$ 与更一般的群作用；"稳定性"这个由他厘清的概念，如今已是模空间理论的日常用语。</p>

<h3>三、代数曲面、theta 函数与"红皮书"</h3>
<p>芒福德还在代数曲面理论上留下了多项重要贡献。他延续扎里斯基的路线，把意大利学派关于代数曲面的工作做得既代数化又严格，并与邦别里合作处理了特征 $p$ 情形下的恩里克斯分类。在阿贝尔簇方面，1966 至 1967 年他连续发表《On the Equations Defining Abelian Varieties》，指出 theta 函数的代数含量远比人们想象的丰富——只要借助有限的海森堡群类比，就足以支撑起这套理论的主要部分，由此复兴了 theta 函数的经典理论。他关于概形论的讲义曾以油印本在哈佛流传多年，被装订在红色硬纸封里，后来由施普林格出版为《The Red Book of Varieties and Schemes》，与《代数几何原理》（EGA）并列为当时仅有的入门读物。他与德利涅合作给出的曲线模空间新描述，后来被视为代数栈理论（Deligne–Mumford 栈）的导引，数十年后又在弦理论的问题中派上用场。此外他还是环面嵌入（toroidal embedding）理论的奠基者之一，并在教学上投入甚多——从克莱因群极限集计算的入门读物，到参与编写的多变量微积分教材，都出自他的手笔。</p>

<h3>四、影响与荣誉</h3>
<p>芒福德 1937 年 6 月 11 日生于英格兰西萨塞克斯，父亲是英国人、母亲是美国人，后入哈佛，1955、1956 年两度成为普特南竞赛优胜者，1957 年学士、1961 年获博士学位，导师是扎里斯基。他长期任教于哈佛，1981 至 1984 年任数学系主任，1996 年转赴布朗大学投身应用数学，现为该校应用数学分部大学教授（荣休）。1980 年代起他把研究重心转向视觉与模式理论，与沙阿（Jayant Shah）提出的 Mumford–Shah 泛函成为图像分割中的经典模型。他 1974 年获菲尔兹奖，1987 至 1992 年为麦克阿瑟基金会研究员，此后获邵逸夫奖（2006）、斯蒂尔奖（2007）、沃尔夫数学奖（2008，与德利涅、格里菲斯共享）与美国国家科学奖章（2010）。他 1991 至 1994 年任国际数学联盟副主席，1995 至 1998 年任主席，门下有阿夫纳·阿什、亨利·吉耶、织田孝夫、艾玛·普雷维亚托、乔纳森·沃尔与朱松纯等学生。</p>
</div>
</div>

<div id="ar-mathfigures-panel-maynard" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-maynard">
<div class="agent-intro">
<h2>詹姆斯·梅纳德：素数间隙难题的破解者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1987–</td></tr>
<tr><td><strong>籍贯</strong></td><td>英国，英格兰切姆斯福德</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；牛津大学教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>证明存在无穷多对间隔不超过 600 的素数；证明埃尔德什关于大素数间隙的猜想；与库库洛普洛斯共同证明达芬–谢弗猜想</td></tr>
</table>
</div>

<h3>一、一个被劝退的题目</h3>
<p>詹姆斯·梅纳德 1987 年 6 月 10 日生于英格兰切姆斯福德。他在剑桥大学完成本科与硕士，随后到牛津大学，2013 年在罗杰·希思-布朗指导下取得博士学位。读博之初，导师曾劝他不要碰素数间隙问题——那是个几百年来几乎无人推动的硬骨头。二十六岁的梅纳德没有听从，几个月后，他给出了一个更简洁、更强的结果。此后他在蒙特利尔大学数学研究中心做博士后，回到牛津后于 2017 年成为研究教授。他的性格里有种"要么着迷、要么彻底放弃"的劲儿，而素数恰好是他着迷的那类问题：表述简单，却深不见底。</p>

<h3>二、素数间隙：从张益唐到 600</h3>
<p>2013 年，张益唐证明了存在无穷多对间隔有限的素数，把孪生素数猜想的攻坚推进了一大步。梅纳德几乎同时独立地给出了一个更简单的筛法论证，不仅重新得到有界间隙的结论，还把间隔的上界压到 600；随后的多项式计划（Polymath）协作又在此基础上继续改进。他还把方法扩展到更一般的情形，证明对任意给定的整数个数，都存在无穷多个包含同样多素数的有界区间。在相反方向上，他证明了埃尔德什关于大素数间隙的猜想，与福特、格林、科尼亚金、陶哲轩的合作工作几乎同时得到同样结论。素数一会儿挤得极近、一会儿又隔开极远，这幅图景在他手里被描摹得清晰了许多。</p>

<h3>三、丢番图逼近与达芬–谢弗猜想</h3>
<p>梅纳德的另一条主线是丢番图逼近：用有理数去逼近无理数能做到多好。1941 年提出的达芬–谢弗猜想，是关于在允许分母自由选取的条件下、逼近误差序列可测意义的完整刻画，长期是这一领域的中心难题。2019 年，梅纳德与库库洛普洛斯（Dimitris Koukoulopoulos）合作证明了它。这项工作的难度在于：分母与误差之间纠缠成一张极其复杂的图，而他们找到了把这张图拆成可控结构的办法。此外，他还证明了任意给定的一位数字，都存在无穷多个十进制展开中不含该数字的素数——一个听起来像是趣味题、却需要深刻筛法的结果。</p>

<h3>四、影响与荣誉</h3>
<p>2022 年，梅纳德因"对解析数论的贡献，带来了对素数结构与丢番图逼近理解的重大进展"获颁菲尔兹奖。此前他已获得萨斯特拉·拉马努金奖、怀特海德奖、欧洲数学会奖，2020 年又获得美国数学会科尔数论奖。他是当代筛法最重要的革新者之一：别人用筛法做筛选，他却改造筛法本身，使之能处理多重相关性与稀疏集合。他的成功也让一段老话重新成立——在数论里，一个表述只需一行的问题，有时会耗费一个世纪。</p>
</div>
</div>

<div id="ar-mathfigures-panel-meyer" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-meyer">
<div class="agent-intro">
<h2>伊夫·梅耶：小波分析理论的主要奠基者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1939–</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，巴黎（童年在突尼斯度过）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；巴黎-萨克雷高等师范学校名誉教授，法国科学院院士</td></tr>
<tr><td><strong>代表成就</strong></td><td>Meyer 小波与多分辨率分析、模型集与准晶体理论、Calderón–Zygmund 算子理论；2017年阿贝尔奖</td></tr>
</table>
</div>

<h3>一、从调和分析到"时间—频率"的窗口</h3>
<p>调和分析关心的是如何把一个信号拆成不同频率的成分。傅里叶变换给出了漂亮的答案，却把信号摊平在整条时间轴上，看不出某个频率究竟在何时出现；加窗傅里叶变换试图补救，但窗的大小固定，时域与频域的分辨率此消彼长。伊夫·梅耶1939年生于巴黎，童年在突尼斯度过，1957年以第一名考入巴黎高等师范学校，1966年在斯特拉斯堡大学取得博士学位，师从让-皮埃尔·卡昂。他早年的工作横跨调和分析、算子理论与数论，关于 Pisot 数与 Salem 数的研究以及对 Calderón–Zygmund 算子的贡献，为后来的一系列技术打下了地基；此后他还用调和分析的工具处理纳维–斯托克斯方程的温和解，始终保持着对"计算方法如何反哺数学"的兴趣。</p>

<h3>二、Meyer 小波与多分辨率分析</h3>
<p>八十年代中期，小波分析还只是一堆零散的例子：地质学家让·莫莱为处理地震数据造出过经验性的小波，理论家们则各说各话。梅耶的介入改变了局面。他证明了可以构造出在频域中紧支撑、光滑且构成标准正交基的小波（今称 Meyer 小波），并系统建立了多分辨率分析（multiresolution analysis）的框架：把函数空间按尺度层层剖分，每一层只记录相邻尺度之间的细节。1990年出版的《小波与算子》把散乱的结果锻造成逻辑连贯的理论。与他长期合作的斯特凡·马拉特说，梅耶的工作既不能归入纯粹数学，也不能归入应用数学或计算机科学，只能说"了不起"。</p>

<h3>三、准晶体：一份迟到的回响</h3>
<p>早在六十年代，梅耶就引入了"模型集"（model sets）的理论，用以刻画那些并非周期、却保有某种秩序的点集。这在当时是数论与调和分析的内部问题，二十多年后却意外获得了物理学意义：八十年代被发现的准晶体，正是这种非周期有序结构的物质形态，彭罗斯拼图是最著名的例子；2011年诺贝尔化学奖授予了准晶体的发现者达恩·谢赫特曼，而梅耶的理论早已为它们准备好了数学描述。同一年，梅耶还证明模型集可用于从部分频带信息中重建信号，为压缩感知提供了数学工具。</p>

<h3>四、影响与荣誉</h3>
<p>梅耶先后任教于巴黎南大学、巴黎综合理工学院、巴黎第九大学与卡尚高等师范学校，1993年当选法国科学院院士，2014年成为美国国家科学院外籍院士。他的学生超过五十人，许多人成为法国及世界各国的研究骨干。他分别在1970年尼斯、1983年华沙、1990年京都三次国际数学家大会上作邀请报告，1970年获萨勒姆奖，2010年获高斯奖，2017年"因在小波分析的数学理论发展中发挥的关键作用"获阿贝尔奖，2020年又获阿斯图里亚斯女亲王奖。今天从图像压缩标准到引力波信号的处理，都运行着他参与建立的算法。</p>
</div>
</div>

<div id="ar-mathfigures-panel-milnor" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-milnor">
<div class="agent-intro">
<h2>约翰·米尔诺：微分拓扑的开创者与怪球的发现者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1931–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，新泽西州奥兰治</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；纽约州立大学石溪分校杰出教授，曾任教于普林斯顿大学与普林斯顿高等研究院</td></tr>
<tr><td><strong>代表成就</strong></td><td>发现七维怪球，开创微分拓扑；h-配边理论；代数K理论；奇点理论中的米尔诺数与米尔诺纤维化</td></tr>
</table>
</div>

<h3>一、普林斯顿的神童</h3>
<p>米尔诺1931年2月生于新泽西州奥兰治，本科与研究生都在普林斯顿度过。他连续于1949年和1950年成为普特南数学竞赛的优胜者，更令人惊叹的是，他在十七岁时关于纽结全曲率的论文就被《数学年刊》接受，1950年发表——那是对博苏克一个问题的解答，也顺带给出了后来以他名字命名的法里—米尔诺定理。1951年获学士学位，1954年在拉尔夫·福克斯指导下以《链环的同痕》获博士学位，文中引入的链环群与米尔诺不变量至今仍是纽结理论的基本工具。1953年，尚未正式取得博士学位的他已被聘为普林斯顿的教员，1960年升为教授，1962年出任亨利·普特南讲座教授。他的老师福克斯、同事纳什——他曾在公共休息室里与纳什下盲棋、玩后来被称作"六贯棋"的游戏——构成了那段日子的背景。他在这个环境里迅速从纽结转向流形，从此再没有离开过"形状"这件事。</p>

<h3>二、怪球：一个不该存在的球面</h3>
<p>1956年，米尔诺构造出一个流形：从拓扑上看它与标准的七维球面完全一样，从可微结构上看却与之不同。这个结果在当时近乎挑衅——人们默认"拓扑相同的球面就是同一个光滑球面"，而米尔诺正是由两套论证相互矛盾才起疑的。用他自己的话说，一个论证能证明某个流形存在，另一个却证明它不存在，矛盾出在那个从未被写下的假设上。这个怪物后来被称为<strong>怪球</strong>。紧接着，他与米歇尔·凯尔维尔合作完成了球面上所有微分结构的清点工作，证明七维球面上一共有28种互不相同微分结构。这个发现宣告了<strong>微分拓扑</strong>这门学科的诞生，此后数十年间对球面与流形的研究占据了拓扑学的中心舞台，并催生了若干枚菲尔兹奖。他还推翻了组合拓扑中悬置已久的主猜想，并为此发展了微丛理论。</p>

<h3>三、从K理论到动力系统</h3>
<p>米尔诺的触角远不止拓扑。在代数方面，他引入的<strong>米尔诺K理论</strong>（连同1971年的《代数K理论导引》）成为该领域的经典；在奇点理论中，他1968年的专著《复超曲面的奇点》被视为这一分支影响最大的单篇著作，其中诞生的<strong>米尔诺数</strong>与<strong>米尔诺纤维化</strong>至今是标准术语；他与摩尔关于霍普夫代数的决定性工作，让拓扑学家开始系统地使用这套工具，他自己也借此厘清了斯廷罗德代数的结构。近几十年他的主战场转向动力系统，尤其是低维全纯动力系统，1999年出版的《单复变动力系统》是复动力学的重要教材。他另有一批以清晰著称的著作——《微分拓扑》《莫尔斯理论》《h-配边定理讲义》《特征类》，被公认为数学写作的范本。</p>

<h3>四、影响与荣誉</h3>
<p>1962年，年仅31岁的米尔诺因微分拓扑方面的工作获菲尔兹奖；1989年获沃尔夫数学奖，评奖词称赞他"在几何上富于巧思与原创性的发现，从代数、组合与可微的观点打开了拓扑学的重要新视野"；2011年获阿贝尔奖，理由是"在拓扑、几何与代数中的开创性发现"。他还先后三次获得美国数学会的斯蒂尔奖——1982年原创贡献奖、2004年数学阐述奖、2011年终身成就奖，是唯一包揽菲尔兹奖、沃尔夫奖、阿贝尔奖与全部三项斯蒂尔奖的数学家。1967年他获美国国家科学奖章，1963年当选美国国家科学院院士。他的学生包括马瑟、斯皮瓦克、福克曼、西本曼等人，数学的许多角落都以他的名字命名：怪球、米尔诺纤维化、米尔诺数、米尔诺K理论、米尔诺—瑟斯顿揉搓理论，以及多个领域中的米尔诺猜想。他长期在石溪分校主持数学科学研究所，至今仍在写作与思考。</p>
</div>
</div>

<div id="ar-mathfigures-panel-mirzakhani" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-mirzakhani">
<div class="agent-intro">
<h2>玛丽亚姆·米尔扎哈尼：用模空间丈量黎曼曲面动力学的几何学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1977–2017</td></tr>
<tr><td><strong>籍贯</strong></td><td>伊朗、美国，生于德黑兰</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；斯坦福大学教授（2008 年起），此前任普林斯顿大学助理教授与克莱数学研究所研究员</td></tr>
<tr><td><strong>代表成就</strong></td><td>给出模空间体积的递推公式并据此重新证明 Witten 猜想；与 Alex Eskin 合作证明 Teichmüller 流闭不变集的"魔杖"刚性定理；紧双曲面上简单闭测地线计数的渐近公式</td></tr>
</table>
</div>

<h3>一、从德黑兰的法尔赞内甘到哈佛</h3>
<p>米尔扎哈尼出生于德黑兰，小时候更迷恋文学，梦想当作家，数学成绩一度并不出众。她就读于专为天赋学生设立的法尔赞内甘学校，校长是一位坚信男女应当享有平等教育机会的女性。在校长的支持下，她参加了 1994 年在香港与 1995 年在多伦多举行的两届国际数学奥林匹克，均获金牌，1994 年仅差一分满分，1995 年取得满分——她是首位在 IMO 上获得满分的伊朗学生。1999 年她从谢里夫理工大学取得数学学士学位，随即赴美，2004 年在哈佛大学获博士学位，导师是菲尔兹奖得主 Curt McMullen，论文题为《双曲曲面上的简单测地线与曲线模空间的体积》。此后她任克莱数学研究所研究员与普林斯顿大学助理教授，2008 年 9 月起任斯坦福大学教授，直至去世。</p>

<h3>二、模空间的体积与 Witten 猜想</h3>
<p>她最著名的工作围绕黎曼曲面的模空间展开。模空间可以理解为一本"目录"：它的每一个点对应着一个给定拓扑类型的曲面，因此关于曲面的整体性问题可以转化为这个空间上的几何与测度问题。米尔扎哈尼给出了模空间体积的一个递推公式——体积表示为其边界元数量的多项式，其出发点是 McShane 恒等式，一个关于双曲曲面上简单测地线长度的恒等式，她把它推广并积分到模空间上。这一公式让她得以计算 Weil–Petersson 体积，并由此给出了 Kontsevich 与 Witten 关于模空间上重言类相交数公式的一个全新证明。这个"Witten 猜想"原先由 Kontsevich 用矩阵模型证明，牵涉二维量子引力的物理直觉；米尔扎哈尼的证明则完全在双曲几何与 Teichmüller 理论内部完成，提供了一种全然不同的理解。她还证明了紧双曲面上简单闭测地线数量的渐近增长公式，回答了曲面几何中一个看起来朴素却长久悬置的计数问题。</p>

<h3>三、地震流与"魔杖"定理</h3>
<p>在动力学方向上，她与 Alex Eskin 及 Amir Mohammadi 合作，证明了关于 Teichmüller 流不变闭集的刚性定理：这类闭集必然是某个低维流形上的周期轨道闭包，其结构被完全刻画。这项工作因为威力惊人而在同行中被戏称为"魔杖"（magic wand）定理——此前许多只能靠特殊技巧处理的动力学问题，一旦引用这一定理便迎刃而解。她还研究了模空间上 Thurston 地震流的遍历性质，把地震映射这一几何操作与模空间上的测度联系起来。这些结果的共同风格是：她总能把一个几何对象的计数、体积与动力学行为串成一条链，而链的两端往往分属看似无关的两个领域。熟悉她的人说她习惯在巨大的草稿纸上作画，把复杂的结构一点点铺开、涂色，再从中找出那条隐藏的线索。</p>

<h3>四、影响与荣誉</h3>
<p>2014 年，米尔扎哈尼在首尔举行的国际数学家大会上获菲尔兹奖，成为该奖自 1936 年设立以来的首位女性得主，也是首位获此奖的伊朗人；颁奖词表彰她"对黎曼曲面及其模空间的动力学与几何的杰出贡献"。她还曾获 2009 年 Blumenthal 奖与 2014 年克莱研究奖。她有一句常被引用的话：数学的美只展现给更有耐心的追随者。2013 年确诊乳腺癌后，她仍坚持研究与教学；2017 年 7 月，年仅四十岁的她在加州逝世，消息震动了整个数学界——斯坦福校长称她激励了成千上万女性投身数学与科学，伊朗总统鲁哈尼发表声明悼念，伊朗多家报纸更打破惯例，刊出她未戴头巾的照片以示敬意。她的丈夫 Jan Vondrák 是捷克裔理论计算机科学家，两人有一女 Anahita。她的早逝留下了一批尚未展开的想法，也留下了一个被她彻底改变的研究领域；在伊朗与世界各地，如今有多个以她命名的奖学金、讲座与青少年数学项目延续着这份影响。</p>
</div>
</div>

<div id="ar-mathfigures-panel-mostow" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-mostow">
<div class="agent-intro">
<h2>乔治·莫斯托：发现高维双曲流形刚性的几何学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1923–2017</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，马萨诸塞州波士顿</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；耶鲁大学 Henry Ford II 讲座教授，曾任美国数学会主席</td></tr>
<tr><td><strong>代表成就</strong></td><td>Mostow 强刚性定理（高维双曲流形的拓扑决定其几何）、Mostow–Palais 定理、与 Deligne 合作关于格的公度性与超几何单值群的工作</td></tr>
</table>
</div>

<h3>一、从波士顿到耶鲁</h3>
<p>1923 年 7 月 4 日，莫斯托生于马萨诸塞州波士顿，父母是二十世纪初从乌克兰移居美国的犹太人。他就读波士顿拉丁学校，后在哈佛大学学习，1943 年获学士学位，1948 年在 Garrett Birkhoff 指导下获博士学位，论文讨论局部李变换群的可延拓性。他先后任教于雪城大学与约翰斯·霍普金斯大学，1961 年转入耶鲁大学，任 Henry Ford II 讲座教授，1999 年退休。他还曾于 1982 至 1992 年任普林斯顿高等研究院理事、1957 年获古根海姆奖学金，1987 至 1988 年出任美国数学会主席。2017 年 4 月 4 日，他在康涅狄格州哈姆登去世。据他自述，刚性定理的关键灵感是在开车等红灯时想到的。他的父母是从乌克兰移居美国的犹太人，家里并不以学术为业；莫斯托少年时在波士顿拉丁学校接受严格的古典教育，据说正是这种训练养成了他把一个论证反复打磨到无可削减的习惯。</p>

<h3>二、强刚性定理</h3>
<p>莫斯托研究半单李群中的格——即使得商空间紧致的离散子群。1970 年代初他证明：在不含紧因子与中心的半单李群中，两个格之间的同构必定延拓为李群本身的解析同构，唯一的例外是二维实特殊线性群模去中心后所得的群。应用于双曲几何，结论极为震撼：维数不小于三、体积有限的双曲流形，其几何结构被基本群唯一决定——体积、闭测地线的长度谱，一切几何量都成了拓扑不变量。二维情形则完全不同：黎曼曲面有连续的模空间，可以任意变形，同一个拓扑型上可以承载一整个连续族的几何。正是在三维及以上，"柔软"让位给了"刚硬"。他的专著《局部对称空间的强刚性》系统阐述了这一理论。证明的核心工具是拟共形映射：格之间的同构先在无穷远边界上诱导出一个拟共形映射，而在三维及以上，这种映射具有足够的正则性，迫使它其实是共形的——一旦共形，几何便被完全锁定。二维之所以例外，正因为平面上的拟共形映射太多太软。</p>

<h3>三、刚性的回响</h3>
<p>莫斯托发现的刚性现象很快成为一类现象的原型。Margulis 沿着这条线证明了高秩半单李群中格的算术性（超刚性），并因此获菲尔兹奖；Thurston 的三维流形分类纲领，把刚性作为基本构件之一；Perelman 证明几何化猜想、进而解决庞加莱猜想的论证，同样建立在刚性之上。此外，莫斯托还与 Pierre Deligne 合作研究复双曲空间等距群 PU(1,n) 中格的公度性，以及超几何函数的单值群，构造出一批非算术格的例子。他还留下了 Mostow–Palais 定理、Mostow 分解与 Hochschild–Mostow 群等以他命名的结果。在李理论中，他关于可解李群与李代数上同调的工作，以及 Mostow–Palais 关于齐性空间的定理，至今仍是标准教材中的内容。</p>

<h3>四、影响与荣誉</h3>
<p>2013 年的沃尔夫数学奖表彰他对几何与李群理论的根本开创性贡献。此前他于 1974 年当选美国国家科学院院士，1993 年因《局部对称空间的强刚性》一书获美国数学会斯蒂尔奖。他 1970 年在尼斯国际数学家大会上作特邀报告，题目就是"局部对称空间的刚性"。有评论指出，他的刚性工作构成了三位菲尔兹奖得主——Margulis、Thurston 与 Perelman——研究中的关键一环；这份"幕后"的影响力，比任何单项荣誉都更能说明他的位置。莫斯托一生低调，他的定理却把几何学里"可以变形"与"不可变形"的分界线划得清清楚楚。他在耶鲁任教近四十年，培养了整整一代几何与李群方向的学生；耶鲁在他去世时的悼念文里说，他为人温和而严谨，唯一的"强硬"都留在了数学里。耶鲁数学系在他退休后仍长期保有一间以讨论班为核心的活动室，那几乎是他留下的、不成文的遗产。</p>
</div>
</div>

<div id="ar-mathfigures-panel-moser" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-moser">
<div class="agent-intro">
<h2>于尔根·莫泽：在混沌边缘守住稳定性的分析大家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1928–1999</td></tr>
<tr><td><strong>籍贯</strong></td><td>德国／瑞士；生于哥尼斯堡（今俄罗斯加里宁格勒）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；纽约大学库朗数学科学研究所教授、苏黎世联邦理工学院教授，曾任国际数学联盟主席</td></tr>
<tr><td><strong>代表成就</strong></td><td>KAM 定理（保面积映射的不变曲线定理）、Moser 迭代法与 Harnack 不等式、Moser–Trudinger 不等式、Nash–Moser 反函数定理</td></tr>
</table>
</div>

<h3>一、从哥廷根到苏黎世</h3>
<p>莫泽 1928 年 7 月 4 日生于哥尼斯堡，1947 至 1952 年在哥廷根大学学习，1952 年在 Franz Rellich 指导下获博士学位，随后做过 Carl Ludwig Siegel 的助手。1953 年他以富布赖特奖学金赴美，此后学术生涯一路上升：1957 年任麻省理工学院副教授，1960 年成为纽约大学库朗数学科学研究所教授，并在 1967 至 1970 年间出任所长；1980 年转赴苏黎世联邦理工学院，1984 至 1995 年主持该校数学研究所。他与库朗之女 Gertrude 成婚。1999 年 12 月 17 日，他在苏黎世去世。这段横跨两洲的履历并不是简单的迁徙，而是他把哥廷根的分析传统与美国对非线性问题的敏感缝在一起的轨迹；同事们回忆，在他眼里"纯粹"与"应用"之分从未真正存在。哥廷根战后的重建给他的第一课，是如何在文献稀缺的条件下自己把问题重新推导一遍；他后来常说，正是这种"把问题做透"的习惯，让他敢于在 KAM 这样需要极长计算的方向上坚持到底。</p>

<h3>二、KAM 理论与不变曲线</h3>
<p>莫泽最广为人知的工作关乎一个古老问题：太阳系是否稳定。1954 年 Kolmogorov 提出了思路，1960 年代初莫泽与阿诺德各自独立给出了完整证明，三人姓氏构成了 KAM 理论。简言之：对一个接近可积的哈密顿系统，只要扰动足够小且满足非退化条件，绝大多数不变环面就不会被摧毁，只是发生轻微变形；那些存活下来的准周期轨道构成正测度集合，像礁石一样分隔着相空间。莫泽 1962 年关于天体力学中不变曲线的论文，给出了保面积扭转映射版本的严格论证，这条结果后来被称作莫泽扭转定理。它把自庞加莱以来对稳定性的悲观预言改成了一幅分层的图景：在混沌的海洋里，稳定岛屿的面积并不为零。KAM 的证明之所以难，在于扰动级数中的小除数会让朴素的迭代发散；莫泽的办法是把牛顿迭代与逐次光滑化结合，每一步只恢复有限的光滑性，却能让收敛不被小除数吃掉——这正是后来 Nash–Moser 技术的源头。</p>

<h3>三、迭代、不等式与非线性的工具箱</h3>
<p>如果说 KAM 是他的招牌，那么他锻造的工具影响更远。研究椭圆与抛物型偏微分方程解的正则性时，莫泽发明了一种由低次积分范数逐步递推放大到一致估计的迭代技巧，如今被称作 Moser 迭代法；它给出的 Harnack 不等式是后来 De Giorgi–Nash–Moser 理论的一块基石，让弱解的正则性第一次可以在很一般的系数下讨论。他与 Trudinger 合作得到的 Moser–Trudinger 不等式刻画了临界指数情形下的 Sobolev 嵌入，成为共形几何与分析中的标准工具。此外，为处理 KAM 证明中小除数造成的"导数损失"，他与 Nash 各自发展出一套带光滑化算子的反函数定理，即 Nash–Moser 迭代，同样是非线性分析中的常备武器。值得一提的还有他在复几何中的工作：他为实超曲面在复空间中的边界建立了正规形理论，把 CR 几何中一类基本的局部分类问题化简为代数问题，这条结果今天被称作 Moser 正规形。</p>

<h3>四、影响与荣誉</h3>
<p>1994/5 年度沃尔夫数学奖表彰他"关于哈密顿力学稳定性的基础工作，以及对非线性微分方程的深刻而有影响的贡献"。此前他还获得 1968 年 Birkhoff 奖、1969 年 James Craig Watson 奖章、1984 年 Brouwer 奖章与 1992 年康托尔奖章；1983 至 1986 年担任国际数学联盟主席。他的学生名单极长，包括 Conley、Rabinowitz、Eliasson、Pöschel 等人，其中许多人后来成为动力系统与偏微分方程领域的中坚。莫泽生前不大谈自己的方法有多难，只强调要"看得宽"；他留下的那些迭代与不等式，如今写在每一部非线性分析教科书的正文里，而不是脚注里。莫泽还是一位出色的学术组织者：他在苏黎世主持数学研究所期间，把它办成了欧洲非线性分析与动力系统的中心；他参与创办的期刊与系列会议，至今仍是这一领域的枢纽。他写下的那些估计式里没有一句多余的话，正如同事所说，他拥有对整个数学的非凡广阔的视野。</p>
</div>
</div>

<div id="ar-mathfigures-panel-nash" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-nash">
<div class="agent-intro">
<h2>约翰·纳什：从博弈均衡到等距嵌入的天才</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1928–2015</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，西弗吉尼亚州布卢菲尔德</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿大学、麻省理工学院</td></tr>
<tr><td><strong>代表成就</strong></td><td>纳什均衡与非合作博弈；纳什嵌入定理；De Giorgi–Nash 定理（希尔伯特第十九问题）；Nash–Moser 定理</td></tr>
</table>
</div>

<h3>一、普林斯顿的二十八页博士论文</h3>
<p>纳什1928年6月13日生于西弗吉尼亚州布卢菲尔德，父亲是阿巴拉契亚电力公司的电气工程师，母亲婚前是教师。他在卡内基理工学院先读化学工程，后转化学，再转数学，1948年同时获学士与硕士学位，1950年在普林斯顿大学获博士学位，导师为 Albert W. Tucker。那篇题为《非合作博弈》的博士论文只有二十八页，却奠定了现代博弈论的基础。1951年他赴麻省理工学院任教，此后数年把主要精力投向偏微分方程与微分几何。1959年起他出现精神疾病症状，被诊断为精神分裂症，曾两度入院治疗；1970年后病情逐渐缓解，1980年代中期重返学术工作。</p>

<h3>二、纳什嵌入定理</h3>
<p>1950年代，纳什解决了几何学中一个基本问题：任意黎曼流形能否等距嵌入欧氏空间？他证明的光滑情形表明，黎曼的内蕴观点与经典的外蕴观点在原则上等价——任何黎曼几何都能光滑地实现为欧氏空间的一个子流形。他证明的非光滑 C¹ 情形（后经 Kuiper 改进）更出人意料：那些看似被高斯曲率等几何不变量明令禁止的嵌入，其实仍然做得到。挪威科学院称这些结果是"二十世纪几何分析中最具原创性的成果之一"，并指出它正是格罗莫夫凸积分理论的核心，也启发了近年关于不可压缩流体正则性的研究。</p>

<h3>三、希尔伯特第十九问题与正则性</h3>
<p>在偏微分方程一侧，纳什与恩尼奥·德乔吉各自独立地给出了一般维数下线性椭圆方程解的 Hölder 估计，并且不要求方程系数具有任何正则性。这一 De Giorgi–Nash 定理解决了希尔伯特第十九问题——解析椭圆积分泛函的极小元是否必为解析函数，一个悬置近六十年的问题。在为达成这一结果而发展的方法中，他还引入了后来被称为 Nash–Moser 定理的迭代技术的雏形，成为处理"导数损失"问题的经典工具。此外他还证明了黎曼流形可以实现为实代数簇。</p>

<h3>四、影响与荣誉</h3>
<p>纳什因博弈论的开创性工作与海萨尼、泽尔腾共享1994年诺贝尔经济学奖；"纳什均衡"如今已是经济学、计算机科学、演化生物学、人工智能乃至军事理论中的通用概念。他另获1978年冯·诺伊曼理论奖与1999年美国数学会 Steele 奖，1996年当选美国国家科学院院士。2015年，他与路易·尼伦伯格共同获得阿贝尔奖。令人痛惜的是，就在从奥斯陆领奖返家的途中，他与妻子艾丽西亚在新泽西遭遇车祸，于5月23日去世，享年86岁。西尔维娅·娜萨1998年的传记《美丽心灵》与2001年的同名电影，使他的故事为公众所熟知。</p>
</div>
</div>

<div id="ar-mathfigures-panel-nirenberg" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-nirenberg">
<div class="agent-intro">
<h2>路易·尼伦伯格：用不等式驯服偏微分方程的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1925–2020</td></tr>
<tr><td><strong>籍贯</strong></td><td>加拿大/美国，生于加拿大安大略省汉密尔顿</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；纽约大学库朗数学科学研究所</td></tr>
<tr><td><strong>代表成就</strong></td><td>Gagliardo–Nirenberg 插值不等式与 Sobolev 不等式；John–Nirenberg 有界平均振动空间；Newlander–Nirenberg 定理；Agmon–Douglis–Nirenberg 估计；Gidas–Ni–Nirenberg 对称性定理</td></tr>
</table>
</div>

<h3>一、从蒙特利尔到库朗研究所</h3>
<p>尼伦伯格1925年2月28日生于加拿大安大略省汉密尔顿，成长于蒙特利尔一个讲意第绪语的犹太移民家庭，父亲教希伯来语；他对数学的最初兴趣，正来自这位希伯来语家教出的谜题。1945年他在麦吉尔大学获数学与物理双学士学位，随后经人引荐赴纽约大学，1947年获硕士学位，1949年在 James Stoker 指导下获博士学位——他的博士论文解决了自1916年起悬置的韦尔问题：给定线元的闭凸曲面能否实现。此后的整个学术生涯他都留在纽约大学，1970至1972年出任库朗数学科学研究所所长。</p>

<h3>二、几何问题的分析解法</h3>
<p>除韦尔问题外，尼伦伯格还给出了球面嵌入三维欧氏空间的基本嵌入定理，解决了闵可夫斯基问题以及与波戈列洛夫各自独立处理的韦尔问题——即在给定高斯曲率或黎曼度量的条件下实现球面。在复几何一侧，Newlander–Nirenberg 定理给出了近复结构成为真正复结构的判据，把可积性问题化归为一个偏微分方程组。这些工作共同把他塑造成几何分析这一方向的奠基者之一：用分析的硬功夫去解决几何的古典问题。</p>

<h3>三、不等式与正则性理论</h3>
<p>尼伦伯格是运用不等式的大师，同事称他的方法与视角异常清晰。Gagliardo–Nirenberg 插值不等式与 Gagliardo–Nirenberg–Sobolev 不等式给出了用导数控制函数大小的精确刻度，是偏微分方程与变分法的日常工具；他与 Fritz John 引入的有界平均振动（BMO）空间，在调和分析中成为 Hardy 空间的自然替代。在正则性方面，他与 Agmon、Douglis 合作建立的 Lp 估计推广了经典的 Schauder 理论，在应用问题中极为有用；他与 Gidas、Ni 合作的对称性结果则表明，一大类非线性椭圆方程的正解必然继承方程本身的对称性。</p>

<h3>四、影响与荣誉</h3>
<p>尼伦伯格一生指导四十五位博士生，发表论文一百五十余篇，其中九成以上是与他人合作的——他始终偏爱合作，也乐于提携年轻人。他1959年获 Bôcher 纪念奖，1982年获克拉福德奖（与阿诺德共享），1994年与2014年两度获美国数学会 Steele 奖，1995年获美国国家科学奖章，2010年获首届陈省身奖章。2015年，他与约翰·纳什共同获得阿贝尔奖，授奖理由是"对非线性偏微分方程理论及其在几何分析中应用的卓越而开创性的贡献"。2020年1月26日，他在纽约曼哈顿逝世，享年94岁。小行星11796以他的名字命名。</p>
</div>
</div>

<div id="ar-mathfigures-panel-noether" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-noether">
<div class="agent-intro">
<h2>埃米·诺特：抽象代数之母</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>德国（埃尔朗根），后半生流亡美国</td></tr>
<tr><td><strong>生卒</strong></td><td>1882—1935</td></tr>
<tr><td><strong>主要成就</strong></td><td>诺特定理（对称性与守恒律）；环论与理想论；诺特环</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/noether.webp" width="360" height="344" alt="诺特" loading="lazy"><figcaption>诺特</figcaption></figure>
</div>

<h3>一、诺特定理：对称性与守恒律一一对应</h3>
<p>1915—1918年，为帮助理解广义相对论中的能量问题，诺特证明了一个数学物理的"超级定理"：<strong>每一个连续对称性对应一个守恒量</strong>——时间平移不变⇒能量守恒，空间平移不变⇒动量守恒，空间旋转不变⇒角动量守恒。它被称为"现代物理学最重要的定理之一"。</p>

<h3>二、抽象代数的奠基</h3>
<p>1921年《环中的理想论》等论文把代数从"运算技巧"改造成"<strong>结构科学</strong>"：她系统发展了环、理想、模、同态的抽象理论，证明了三个同构定理。满足升链条件的环被称为<strong>诺特环</strong>。她使"数学家研究的是结构，而不是计算"成为20世纪数学的主旋律。</p>

<h3>三、在偏见中执教</h3>
<p>女性被排斥于学术之外的年代，她多年无薪无职位地做研究。希尔伯特为她争取讲师资格时反驳道："<strong>先生们，我不认为候选人的性别是反对她当讲师的理由。大学终究不是澡堂。</strong>"1933年纳粹上台后她被解除教职，流亡美国，1935年去世，年仅53岁。爱因斯坦悼文称她为"自女性接受高等教育以来最重要的女数学家"。</p>
</div>
</div>

<div id="ar-mathfigures-panel-novikov" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-novikov">
<div class="agent-intro">
<h2>谢尔盖·诺维科夫：在拓扑学与数学物理之间架桥的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1938–2024</td></tr>
<tr><td><strong>籍贯</strong></td><td>苏联／俄罗斯，高尔基市（今下诺夫哥罗德）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；莫斯科大学、斯捷克洛夫数学研究所、朗道理论物理研究所、马里兰大学</td></tr>
<tr><td><strong>代表成就</strong></td><td>有理庞特里亚金类的拓扑不变性、诺维科夫猜想（高阶签名）、Adams–Novikov 谱序列、KdV 方程的有限带解</td></tr>
</table>
</div>

<h3>一、一个数学世家的早年</h3>
<p>谢尔盖·彼得罗维奇·诺维科夫 1938 年 3 月 20 日生于高尔基市（今下诺夫哥罗德），成长在一个数学气氛极浓的家庭：父亲彼得·诺维科夫以否定地解决群的字问题闻名，母亲柳德米拉·凯尔迪什与舅父姆斯季斯拉夫·凯尔迪什也都是重要的数学家。1955 年他进入莫斯科大学，1960 年毕业，随后在米哈伊尔·波斯特尼科夫指导下完成副博士与博士学位（分别为 1964 年与 1965 年）。学生时代关于 Steenrod 代数上同调的工作就已引起同行注意，并让他获得莫斯科数学会青年数学家奖。1966 年他当选苏联科学院通讯院士，1971 年起主持朗道理论物理研究所数学部，1983 年出任莫斯科大学高等几何与拓扑教研室主任。</p>

<h3>二、庞特里亚金类的拓扑不变性</h3>
<p>庞特里亚金类是微分流形的基本示性类，本由切丛的光滑结构定义，看上去与所取的微分结构纠缠在一起。1965 年诺维科夫证明了它们的<strong>有理</strong>部分其实是拓扑不变量：两个同胚的光滑流形具有相同的有理庞特里亚金类。这一结果把微分拓扑与拓扑学之间的一道裂缝缝合起来，是当时拓扑学最重大的成就之一，也是 1970 年菲尔兹奖引文的核心。循着同一思路，他还证明了由基本群的同调代数所产生的庞特里亚金–希策布鲁赫特殊积分在同伦下的不变性，并由此提出关于"高阶签名"的<strong>诺维科夫猜想</strong>。这个猜想此后成为拓扑学中最具生命力的纲领之一，与外科理论、指标定理、算子代数乃至格罗莫夫的工作交织在一起，至今仍在推动研究。</p>

<h3>三、配边、谱序列与可积系统</h3>
<p>诺维科夫早年的另一条战线是配边理论。他指出，把同调论信息转化为同伦群计算的 Adams 谱序列，可以适配到以配边与 K 理论为代表的新上同调理论上，由此产生了如今稳定同伦论的基本工具——Adams–Novikov 谱序列，并在球面稳定同伦群的计算上取得实质进展。与此同时，他与布劳德、沙利文、沃尔一同成为高维流形分类的<strong>外科理论</strong>的奠基者之一。他在叶状结构方面也有经典结果：证明了三维球面上的二维叶状结构必存在紧叶。1970 年代起他把注意力转向数学物理，1974 年处理 KdV 方程的周期问题时提出了一个革命性观念——周期情形下 Sturm–Liouville 算子的谱应被视为一条黎曼面（谱曲线），本征函数则是雅可比簇上的亚纯函数。由此诞生的有限带积分理论，经由 KP 层级与 θ 函数，又把他引向关于 Riemann–Schottky 问题的诺维科夫猜想（后由盐田隆弘于 1986 年证明）。1980 年代初，他还是 Morse–Novikov 理论（多值泛函与闭 1-形式的莫尔斯理论）的创建者之一，并与舒宾（Mikhail Shubin）一同引入 Novikov–Shubin 不变量。他还把拓扑工具带进理论物理：从齐性宇宙学模型在奇点附近的定性研究，到磁场中薛定谔算子色散关系上的陈数，都留下了他的痕迹，其中有些工作甚至走在了实验发现之前。</p>

<h3>四、影响与荣誉</h3>
<p>诺维科夫 1967 年获列宁奖，1970 年成为历史上第一位获菲尔兹奖的苏联数学家；此后又获罗巴切夫斯基国际奖（1981）、沃尔夫数学奖（2005）与俄罗斯科学院罗蒙诺索夫大金质奖章（2020）。他是俄罗斯科学院院士、美国国家科学院院士、林琴科学院与宗座科学院院士，也是伦敦数学会荣誉会员。1985 至 1996 年他担任莫斯科数学会主席，并长期担任《数学科学的成就》杂志主编；1996 年他移职美国马里兰大学，同时保留在朗道研究所、莫斯科大学与斯捷克洛夫数学研究所的工作。他创建了享誉世界的"几何与数学物理"讨论班与学派，门下有博戈莫洛夫、布赫施塔别尔、杜布罗文、米先科、泰马诺夫、佐里奇等众多数学家，其中二十四人成为科学博士，指导的副博士论文逾四十篇。他也是俄国科学院欧拉金质奖章与波戈柳博夫金质奖章得主。2024 年 6 月 6 日，诺维科夫逝世，享年八十六岁。</p>
</div>
</div>

<div id="ar-mathfigures-panel-pardon" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-pardon">
<div class="agent-intro">
<h2>约翰·帕登：跨越几何与拓扑壁垒的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1989–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，北卡罗来纳州教堂山</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；纽约州立大学石溪分校西蒙斯几何与物理中心教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>解决格罗莫夫的结失真问题；证明三维希尔伯特–史密斯猜想；虚拟基本闭链的新方法与全纯曲线计数；证明 MNOP 猜想</td></tr>
</table>
</div>

<h3>一、本科生发表四大顶刊</h3>
<p>约翰·帕登 1989 年生于美国北卡罗来纳州教堂山，父亲是杜克大学的数学教授。高中阶段他连续三年代表美国参加国际信息学奥林匹克竞赛，收获三枚金牌。2007 年他进入普林斯顿大学攻读数学，大四那年解决了自己从高中起就在琢磨的一个问题——米哈伊尔·格罗莫夫 1983 年提出的关于结的失真度的问题，论文以独立作者身份发表在《数学年刊》上，这在本科生中极为罕见。求学期间他还系统学习了中文，取中文名白杰文，参加"汉语桥"世界大学生中文比赛并获得美国东部赛区冠军。2011 年他以最高荣誉毕业，赴斯坦福大学攻读博士。</p>

<h3>二、三维希尔伯特–史密斯猜想</h3>
<p>读博第一年，帕登就把低维拓扑的精细工具与几何、群作用的想法熔于一炉，证明了三维情形的希尔伯特–史密斯猜想：它断言一个局部紧群若能有效地作用在流形上，就必须是李群，换言之，p 进数这类"病态"的群无法真正作用在三维流形上。这个问题自20世纪中期起悬置多年，与变换群理论的核心结构密切相关。帕登的证明被视作低维拓扑的一次技巧展示，也确立了他处理"刚性"问题的名声。2015 年他获得斯坦福大学博士学位，次年便被普林斯顿大学聘为数学系正教授，年仅二十七岁。</p>

<h3>三、重建辛几何的基础</h3>
<p>帕登此后的工作转向辛几何与接触拓扑的基础构造。辛几何中许多不变量依赖对模空间做"虚拟基本闭链"的计数，而在存在边界、退化与奇异性的情形下，这一构造长期缺乏统一处理。他给出了新的虚拟基本闭链方法，并以此研究某些流形的深谷范畴（Fukaya category）与全纯曲线的计数，为 Floer 同调一类现代工具奠定了更稳固的地基。2023 年，他又证明了卡拉比–丘三维流形上的 MNOP 猜想，把 Gromov–Witten 理论与 Donaldson–Thomas 理论之间长期悬置的对应关系推进一步。2022 年，他加入石溪大学西蒙斯几何与物理中心。</p>

<h3>四、影响与荣誉</h3>
<p>2026 年，帕登因"在辛几何中的成就，包括虚拟基本闭链的新方法、某些流形的深谷范畴与全纯曲线计数，以及对几何与拓扑其它领域的贡献"获得菲尔兹奖。此前他已获得美国数学会摩根奖、美国国家科学基金会沃特曼奖、克雷研究奖与数学新视野奖等。同行常用"破壁人"形容他：他打破的往往不只是某一个猜想，而是不同数学领域之间那道看似天然存在的墙——代数、几何、分析、拓扑、概率，被他以出人意料的方式组合起来。而他当年在汉语桥舞台上说过的中文，也成了数学圈里流传的一段佳话。</p>
</div>
</div>

<div id="ar-mathfigures-panel-perelman" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-perelman">
<div class="agent-intro">
<h2>格里戈里·佩雷尔曼：用里奇流终结庞加莱猜想的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1966–</td></tr>
<tr><td><strong>籍贯</strong></td><td>俄罗斯，生于列宁格勒（今圣彼得堡）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；曾任职于圣彼得堡俄罗斯科学院斯捷克洛夫数学研究所，2005 年后退出职业数学界</td></tr>
<tr><td><strong>代表成就</strong></td><td>证明庞加莱猜想与瑟斯顿三维流形几何化猜想；早年证明黎曼几何中的灵魂猜想</td></tr>
</table>
</div>

<h3>一、一个早熟的几何学家</h3>
<p>佩雷尔曼 1966 年 6 月 13 日生于列宁格勒一个犹太家庭，父亲是电气工程师，母亲是数学教师。他就读于以数理见长的圣彼得堡第 239 中学，1982 年十六岁时代表苏联参加国际数学奥林匹克，以满分获金牌。此后他在圣彼得堡大学数学力学系深造，1990 年获博士学位，导师为亚历山德罗夫与布拉戈，论文题目是《欧氏空间中的鞍曲面》。他在亚历山德罗夫空间上做出的一系列工作，与布拉戈、格罗莫夫、佩特鲁宁等人的研究交织在一起，很早就显示出他对"非光滑"几何对象的掌控力。1994 年，他证明了悬置二十年未决的灵魂猜想（soul conjecture），一举确立了自己在几何分析中的地位。</p>

<h3>二、里奇流：让空间自己变圆</h3>
<p>庞加莱猜想问的是：一个单连通的闭三维流形，是否必定是三维球面？瑟斯顿的几何化猜想则给出更宏大的图景——任何三维流形都可以切成若干块，每块带有八种标准几何之一。里奇流的思路由哈密顿提出：让流形的度量按照一个类似热方程的规则演化，期望不均匀的地方被逐步抹平。障碍在于演化过程中会出现奇点，曲率在某些区域爆炸。2002 年 11 月至 2003 年，佩雷尔曼在 arXiv 上贴出三篇预印本，系统地给出了对奇点的分析与"带手术的里奇流"的完整控制，从而证明了几何化猜想，庞加莱猜想作为其特例随之解决。他没有宣布自己解决了什么，行文近乎冷淡，只是把论证写在了那里。</p>

<h3>三、拒绝：奖章、奖金与隐居</h3>
<p>数学界花了数年时间去验证与补全这些论证，最终确认无误。2006 年，国际数学联盟在马德里国际数学家大会上授予他菲尔兹奖，他拒绝接受，也没有到场，成为史上第一位拒绝该奖的数学家。此前 1996 年欧洲数学会的奖项他也已拒绝。2010 年 3 月，克莱数学研究所宣布他满足了千禧年大奖的获奖条件；7 月，他拒绝了这一百万美元奖金，理由是自己的工作"欠了"哈密顿早期贡献一笔债，若哈密顿不与他共享，这份荣誉便不成立。2005 年 12 月，他从斯捷克洛夫数学研究所辞职，2006 年表示已退出职业数学界，此后长期在圣彼得堡隐居，几乎不接受任何采访。他对外界的表态一贯简短：他对名声与金钱没有兴趣，只想不被打扰。</p>

<h3>四、影响与荣誉</h3>
<p>2006 年，《科学》杂志把这一证明评为当年的年度突破，这是数学结果首次获此称号。佩雷尔曼虽然离开了学术舞台，他引入的奇点分析与手术技术却持续塑造着几何分析这一学科，几何化猜想也成为现代拓扑学的基本框架。与那些用奖章、讲座席位、学派传承来度量的数学家不同，他的"影响"更多是一种关于数学本身应当如何被对待的示范：证明是否正确，与它是否被颁奖、被署名、被颂扬，是两件彼此独立的事。今天，每当有人谈起里奇流，那三篇冷静的预印本和它们作者的沉默，总会一同被提起。</p>
</div>
</div>

<div id="ar-mathfigures-panel-piatetski" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-piatetski">
<div class="agent-intro">
<h2>伊利亚·皮亚捷茨基-夏皮罗：自守形式的逆定理与齐性域</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1929–2009</td></tr>
<tr><td><strong>籍贯</strong></td><td>苏联、以色列、美国，生于莫斯科</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；特拉维夫大学与耶鲁大学教授，曾任职于莫斯科凯尔迪什应用数学研究所</td></tr>
<tr><td><strong>代表成就</strong></td><td>Piatetski-Shapiro 素数定理；有界齐性域的分类；自守形式的逆定理与 L-函数构造</td></tr>
</table>
</div>

<h3>一、莫斯科：从数论到自守形式</h3>
<p>皮亚捷茨基-夏皮罗 1929 年生于莫斯科一个犹太家庭。他在莫斯科大学力学数学系完成学业后，因出身原因未能获得研究生名额，由格尔丰德帮助进入莫斯科师范学院，1954 年在布赫什塔布指导下获博士学位，同年又在斯捷克洛夫数学研究所取得科学博士学位。毕业后他被分配到卡卢加当中学教师，1958 年才进入凯尔迪什应用数学研究所，此后在这里工作了十六年，其间兼任莫斯科大学教授。这一时期他最重要的工作是与盖尔范德（Israel Gelfand）的合作：两人把自守形式理论从经典的模形式推广到一般的半单李群上，为后来朗兰兹纲领的表示论语言打下了地基。</p>

<h3>二、齐性域、离散群与素数</h3>
<p>他的另一条主线是齐性复域与离散群。与金迪金、温贝格合作，他完成了有界齐性域的分类，并构造出一个四维的非对称齐性域，解决了嘉当（Élie Cartan）提出的相应问题。他还解决了塞勒姆（Raphaël Salem）关于三角级数展开唯一性的一个著名问题，并建立了有界对称空间上算术群的一般理论。早在 1950 年代初，他就证明了关于素数分布的一条经典结果：对于略大于 1 的常数 c，把 n 的 c 次幂逐项取整后所得的数列中仍有无穷多个素数，且可以写出渐近公式——这类素数今天被称为 Piatetski-Shapiro 素数，它是人们第一次把素数定理推广到"稀疏的非整数次幂序列"上去。</p>

<h3>三、逆定理、L-函数与 K3 曲面</h3>
<p>他最有影响的工作之一，是自守形式的逆定理。通常人们从自守表示出发构造 L-函数并研究其解析性质，逆定理则反向设问：如果一个狄利克雷级数及其所有扭转都具有所要求的函数方程与有界性，它是否必定来自某个自守表示？他与科格德尔（James Cogdell）共同发展了这套理论，使之成为证明函子性的主要入口。在这一框架中，自守表示的局部信息由佐武参数给出，全局对象则由 L-函数串联，两者通过逆定理彼此印证。他还在 1960 年代与沙法列维奇解决了 K3 曲面的托雷利问题，并与金兹堡、拉利斯合作，为经典群的自守表示构造出全套 L-函数。</p>

<h3>四、移民、荣誉与传承</h3>
<p>1973 年他为妻儿办理出境手续，次年自己申请移居以色列，随即失去使用数学图书馆与学术资源的权利，处境引起国际数学界的广泛关注；1976 年他终于取得签证，1977 年起同时在特拉维夫大学与耶鲁大学任职。他 1978 年当选以色列科学与人文学院院士，1981 年获以色列奖，1992 年获古根海姆奖，1990 年与德乔治共同获得沃尔夫数学奖。他先后在 1966 年莫斯科国际数学家大会作全会报告，1978 年赫尔辛基与 2002 年北京的会议上作邀请报告。晚年他虽因病行动困难、言语受阻，仍坚持出席世界各地的会议。2009 年他在特拉维夫去世，门下弟子包括科格德尔、苏德里、拉德尼克等一批表示论与自守形式方向的代表人物。</p>
</div>
</div>

<div id="ar-mathfigures-panel-tsimerman" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-tsimerman">
<div class="agent-intro">
<h2>雅各布·齐默曼：用 o-极小性驯服算术几何</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1988–</td></tr>
<tr><td><strong>籍贯</strong></td><td>加拿大，生于苏联喀山</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；多伦多大学教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>证明 Siegel 模簇上的安德烈–奥尔特猜想与志村簇上的一般情形；解决 Griffiths 关于周期映射像代数性的猜想；与合作者证明 Ax–Schanuel 猜想</td></tr>
</table>
</div>

<h3>一、两枚 IMO 金牌与两年本科</h3>
<p>雅各布·齐默曼 1988 年 4 月 26 日生于苏联喀山，幼年随家人先迁往以色列，1996 年定居加拿大多伦多。他 2003 年与 2004 年连续两届代表加拿大参加国际数学奥林匹克，两度夺金，第二次更以满分完成比赛。十六岁他进入多伦多大学，两年后即取得数学学士学位，2011 年在普林斯顿大学获得博士学位，导师是彼得·萨纳克。此后他在哈佛大学担任初级研究员，2014 年回到多伦多大学任助理教授，如今是该校数学系教授。他的成长轨迹几乎每一段都比常规提前，但在研究上，他却以慢工出细活著称。</p>

<h3>二、安德烈–奥尔特猜想</h3>
<p>安德烈–奥尔特猜想关心的是志村簇上特殊点——尤其是具有复乘的 CM 点——的分布规律：这些点是否只在代数子簇以特殊方式出现时才密集成群？这一猜想自提出起悬置近四十年，是算术几何的核心难题之一。齐默曼与皮拉（Jonathan Pila）合作，把模型论中的 Pila–Wilkie 计数定理与算术几何的深度结果结合起来，证明了 Siegel 模簇上的安德烈–奥尔特猜想；此后他又把一般情形归约到平均化的 Colmez 猜想，并借助他人对该猜想的证明完成全貌，2021 年与皮拉、尚卡尔（Ananth Shankar）等合作给出了一般志村簇情形的完整证明。这条路径把逻辑学与数论罕见地缝在了一起。</p>

<h3>三、o-极小性与 Griffiths 猜想</h3>
<p>如果说安德烈–奥尔特猜想是他最著名的战果，那么真正改变整个领域方法论的，是他对 o-极小性（o-minimality）的改造与推广。o-极小结构来自模型论，本是用来刻画"温和"的实几何对象、排除病态集合的语言；齐默曼把它发展成复代数几何与算术几何中的基础工具，与巴克尔（Benjamin Bakker）、布吕纳巴布（Yohan Brunebarbe）合作建立了 o-极小版的 GAGA 理论，并借此解决了 Griffiths 关于周期映射像的拟射影性猜想——即周期映射的像究竟是不是代数簇的问题。他还与莫毅明、皮拉合作证明了志村簇上的 Ax–Schanuel 猜想。此外，他在数域类群挠元的定量估计、算术统计与超越数论上也有重要成果。</p>

<h3>四、影响与荣誉</h3>
<p>2026 年，齐默曼因"把 o-极小性重塑为算术与复代数几何的基本方法，以及他在证明诸多核心猜想中的作用"获得菲尔兹奖，并成为首位在加拿大高校任职的菲尔兹奖得主。此前他已获得萨斯特拉·拉马努金奖、里本博伊姆奖、加拿大数学会考克斯特–詹姆斯奖、数学新视野奖与奥斯特洛夫斯基奖，2025 年当选英国皇家学会院士。他的工作示范了一种罕见的跨学科力量：来自逻辑学的技术，竟能解开数论中最硬的结。</p>
</div>
</div>

<div id="ar-mathfigures-panel-jones" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-jones">
<div class="agent-intro">
<h2>琼斯：从算子代数走来的纽结多项式发现者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1952–2020</td></tr>
<tr><td><strong>籍贯</strong></td><td>新西兰，生于吉斯伯恩</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；加州大学伯克利分校教授，后任范德堡大学史蒂文森讲席教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>琼斯多项式；II1 因子子因子的指标理论；平面代数（planar algebra）</td></tr>
</table>
</div>

<h3>一、从吉斯伯恩到日内瓦</h3>
<p>1952年12月31日，沃恩·琼斯出生在新西兰北岛东海岸的吉斯伯恩，在剑桥镇长大，先后就读圣彼得学校与奥克兰文法学校，1972年在奥克兰大学获理学学士，次年获硕士。随后他远赴瑞士，1979年在日内瓦大学取得博士学位，导师是<strong>安德烈·海夫利格</strong>，学位论文题为《有限群在超有限 II1 因子上的作用》，并为他赢得瓦什隆·康斯坦丁奖。1980年他移居美国，先后任教于加州大学洛杉矶分校（1980–1981）与宾夕法尼亚大学（1981–1985），1985年起任加州大学伯克利分校教授，直至2011年；此后转任范德堡大学史蒂文森讲席教授，同时保留伯克利荣休教授与奥克兰大学杰出校友教授的身份。他终生以新西兰人的身份自豪，1990年在京都领取菲尔兹奖时，穿的是一件新西兰橄榄球球衣。</p>

<h3>二、指标：一个出人意料的离散序列</h3>
<p>琼斯的主业是<strong>冯·诺依曼代数</strong>，即由<strong>阿兰·康奈斯</strong>大大推进的算子代数分支。他最早的工作给出有限群在 II1 型冯·诺依曼代数上作用的完全分类；接着，他为一个 II1 因子的子因子定义了"指标"，并算出了它可能取的值。结果令所有人意外：指标并非可以连续变化，而是被限制在一串离散值上——形如四乘以圆周率的某种有理分割之余弦的平方——再加上一段连续的区间。这一发现彻底改变了该领域看待自身的方式，也顺带产出一族全新的辫群表示。正是从这族表示出发，琼斯跨入了另一个学科。</p>

<h3>三、琼斯多项式与量子拓扑</h3>
<p>1984年前后，琼斯注意到上述辫群表示可以经马尔可夫迹组装成一个纽结不变量，这就是今日所说的<strong>琼斯多项式</strong>。它来自一个完全出人意料的方向：发源于冯·诺依曼代数理论，而非纽结理论自身。这个新不变量威力惊人，一举解决了纽结理论中若干悬置已久的经典问题，包括交错纽结图的极小交叉数问题（泰特猜想的一部分）与某些纽结的手性判定。它很快被考夫曼的括号模型重新诠释，又被推广为 HOMFLY 等更一般的多项式，并极大提升了整个数学界对低维拓扑的兴趣，催生了后来统称<strong>量子拓扑</strong>的新领域。1989年，<strong>威滕</strong>进一步把它解释为三维陈–西蒙斯理论中威尔逊圈的路径积分期望值，从而在纽结、共形场论与统计力学之间架起了桥。琼斯晚年还发展了平面代数，用以统一处理子因子与纽结不变量，并研究汤普森群 F 与 T 的表示。</p>

<h3>四、影响与荣誉</h3>
<p>1990年的菲尔兹奖授予琼斯，表彰他这一"来源出人意料"的贡献。同年他当选英国皇家学会会士，1991年获新西兰皇家学会卢瑟福奖章并由奥克兰大学授予荣誉理学博士，1992年当选澳大利亚科学院通讯院士并获伯克利米勒讲席，同年被国际打结者公会推举为终身名誉副会长。他的祖国也给了他最高规格的承认：2002年获新西兰功绩勋章，2009年改授爵士同级勋衔。2010年，新西兰皇家学会设立以他命名的<strong>琼斯奖章</strong>；2012年他当选美国数学会会士。2020年9月6日，琼斯因一场严重耳部感染引发的并发症在美国去世，享年六十七岁。从算子代数的一个技术性结果，到改写整个低维拓扑的版图，琼斯的故事至今仍是"数学内部意外联通"最精彩的例子之一。</p>
</div>
</div>

<div id="ar-mathfigures-panel-yau" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-yau">
<div class="agent-intro">
<h2>丘成桐：几何分析的建筑大师</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>籍贯</strong></td><td>广东汕头，成长于香港</td></tr>
<tr><td><strong>身份</strong></td><td>清华大学讲席教授，哈佛大学荣休教授</td></tr>
<tr><td><strong>主要荣誉</strong></td><td>菲尔兹奖（1982）、沃尔夫奖（2010）、克拉福德奖（1994）</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/yau.webp" width="360" height="360" alt="丘成桐" loading="lazy"><figcaption>丘成桐</figcaption></figure>
</div>

<h3>一、卡拉比猜想与"卡拉比—丘流形"</h3>
<p>1976年，27岁的丘成桐证明了<strong>卡拉比猜想</strong>，其几何推论——<strong>卡拉比—丘流形</strong>——在1984年被弦理论家发现正是六维"内藏空间"的候选：<strong>我们宇宙的额外维可能蜷缩在卡拉比—丘流形中</strong>。这一名词从此进入物理学与大众文化的词典。</p>

<h3>二、几何分析的创立</h3>
<p>他与孙理察等人发展出以<strong>非线性偏微分方程为工具研究几何</strong>的系统方法，代表作包括<strong>正质量猜想</strong>（广义相对论中孤立系统总质量非负）、蒙日—安培方程、极小曲面与调和映射的系列突破，使其成为此后40年微分几何的主流范式。</p>

<h3>三、荣誉与教育情怀</h3>
<p>他是第一位获<strong>菲尔兹奖</strong>的华人数学家（1982年，时年33岁），创办<strong>丘成桐数学科学中心（清华）</strong>、求真书院，设立丘成桐中学科学奖、大学生数学竞赛，倡导"为中国培养本土的世界级数学家"。名言："<strong>数学的审美，与文学的境界是相通的。</strong>"</p>
</div>
</div>

<div id="ar-mathfigures-panel-serre" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-serre">
<div class="agent-intro">
<h2>让-皮埃尔·塞尔：用层与谱序列重塑现代数学的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1926–</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，生于东比利牛斯省巴日</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；法兰西公学院（曾任法国国家科研中心研究员）</td></tr>
<tr><td><strong>代表成就</strong></td><td>球面同伦群与勒雷–塞尔谱序列；《代数凝聚层》（FAC）与《代数几何与解析几何》（GAGA）；椭圆曲线的开像定理</td></tr>
</table>
</div>

<h3>一、球面的同伦群</h3>
<p>1926年塞尔生于法国南部小镇巴日，父母都是药剂师。1945年他进入巴黎高等师范学校，1948年在数学教师资格会考中名列第一，1951年在索邦取得博士学位，导师是亨利·嘉当。他的博士论文处理的是纤维化的勒雷–塞尔谱序列——这个工具今天在每本代数拓扑教材中都有一席之地。此后他与嘉当合作，借助艾伦伯格–麦克莱恩空间逐个计算球面的同伦群，这在当时是拓扑学的核心难题之一。1948年前后他加入布尔巴基学派，是最年轻的成员。1954年，二十七岁的塞尔获得菲尔兹奖，至今仍是史上最年轻的得主。</p>

<h3>二、FAC 与 GAGA：用层重写复几何</h3>
<p>获奖后他几乎立刻换了方向。1955年的《代数凝聚层》（FAC）用扎里斯基拓扑配上一族局部环的层，重新定义了代数簇，证明了仿射簇上凝聚层的高次上同调为零，并把射影空间上的凝聚层与多项式环上的分次模对应起来——上同调从此可以用纯代数手段计算。紧接着的《代数几何与解析几何》（GAGA，1956）说明：在复数域上的射影簇，每个凝聚解析层唯一地来自某个凝聚代数层，且上同调保持不变。塞尔用层的语言重述并推广了复变函数论的主要结果，也让代数几何第一次真正拥有了统一的技术底座。</p>

<h3>三、转向数论：伽罗瓦表示与模性</h3>
<p>1959年以后，塞尔的兴趣转向群论与数论，尤其是伽罗瓦表示与模形式。1972年他证明了关于椭圆曲线的开像定理：在没有复乘的情形下，由椭圆曲线的泰特模所给出的伽罗瓦表示，其像在相应的乘积中是开子群——这条结果至今是该领域的出发点之一。此外，他提出的模性猜想（后由哈雷与温特贝格尔证明）、关于伽罗瓦上同调的“猜想 II”（仍未解决）等，持续塑造着当代数论的问题清单。</p>

<h3>四、影响与荣誉</h3>
<p>1956年塞尔当选法兰西公学院代数与几何讲席教授，时年二十九岁，任职至1994年退休，此后为名誉教授。除1954年菲尔兹奖外，他还获得1985年巴尔赞奖、1987年法国国家科研中心金奖、1995年斯蒂尔数学阐释奖、2000年沃尔夫数学奖，并在2003年成为首位阿贝尔奖得主，表彰他“在赋予拓扑、代数几何与数论等众多领域以现代形式方面发挥的关键作用”。他的写作以简洁著称，影响所及，从格罗腾迪克、德利涅一直到怀尔斯。2026年9月，他迎来百岁诞辰。</p>
</div>
</div>

<div id="ar-mathfigures-panel-selberg" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-selberg">
<div class="agent-intro">
<h2>阿特勒·塞尔伯格：解析数论的独行巨匠与筛法宗师</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1917–2007</td></tr>
<tr><td><strong>籍贯</strong></td><td>挪威（后长期在美国工作），生于朗格松</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿高等研究院</td></tr>
<tr><td><strong>代表成就</strong></td><td>塞尔伯格筛法；ζ函数零点的临界线定理；素数定理的初等证明；塞尔伯格迹公式</td></tr>
</table>
</div>

<h3>一、战时的孤独与临界线上的零点</h3>
<p>1917年，塞尔伯格生于挪威朗格松的一个教师家庭，父亲是数学教师，几位兄长中有三人后来也成了数学家。中学时代他读到拉马努金的文集，被其中的数学与人格双重吸引，从此转向数论。1935年他进入奥斯陆大学，1939年获硕士学位。二战爆发后德军占领挪威，他在几乎与外界隔绝的状态下独自工作，其间还因抵抗入侵而数次入狱。1943年他在奥斯陆取得博士学位。战后人们才知道他在那些岁月里得到的一个结果：黎曼ζ函数的零点中有正比例的一部分落在临界线上——这是关于黎曼猜想最早的非平凡进展之一。</p>

<h3>二、塞尔伯格筛法</h3>
<p>战后塞尔伯格转向此前几乎被忽视的筛法。1947年他提出了今天称为塞尔伯格筛的方法：它不像布伦筛那样层层筛选，而是用一组待定的权系数去构造上界，把问题化为一个可以优化的二次型。这个想法既简洁又强韧，尤其擅长给出上界估计，后来成为陈景润在哥德巴赫猜想相关工作中使用的重要工具，也是现代筛法的标准配置之一。</p>

<h3>三、素数定理的初等证明</h3>
<p>1948年，塞尔伯格与保罗·埃尔德什各自独立地给出了素数定理的初等证明。此前人们普遍相信，这个定理本质上依赖复分析——尤其是ζ函数在临界带附近的非零性——不可能只用实数范围内的初等方法获得。塞尔伯格先得到一个初等的渐近公式，两人以此为出发点各自完成了证明，也因此引发了一场关于优先权的不愉快争论。他还把这一思路推广到算术级数中的素数，给出了狄利克雷定理的初等证明。</p>

<h3>四、影响与荣誉</h3>
<p>1947年起塞尔伯格赴美，除1948—1949年在雪城大学外，他长期任职于普林斯顿高等研究院，直到2007年8月在普林斯顿去世。1956年他发表了塞尔伯格迹公式，把离散群的谱与相应流形上的闭测地线联系起来，成为自守形式理论、表示论乃至数学物理的基本工具；以他命名的还有塞尔伯格ζ函数、兰金–塞尔伯格方法、塞尔伯格积分等。1986年他获沃尔夫数学奖，2002年获挪威贡内鲁斯奖章，同年获阿贝尔奖荣誉奖。他是把数论、谱理论与离散群拧成一股绳的人，也让人们重新意识到：“初等”并不等于“容易”。</p>
</div>
</div>

<div id="ar-mathfigures-panel-szemeredi" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-szemeredi">
<div class="agent-intro">
<h2>安德烈·塞梅雷迪：在混沌中认出等差数列的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1940–</td></tr>
<tr><td><strong>籍贯</strong></td><td>匈牙利/美国，生于匈牙利布达佩斯</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；罗格斯大学、匈牙利科学院阿尔弗雷德·雷尼数学研究所</td></tr>
<tr><td><strong>代表成就</strong></td><td>塞梅雷迪定理（正整数集中任意长等差数列）；塞梅雷迪正则性引理；Szemerédi–Trotter 定理；Hajnal–Szemeredi 定理；AKS 排序网络</td></tr>
</table>
</div>

<h3>一、从医学院退学到莫斯科</h3>
<p>塞梅雷迪1940年8月21日生于布达佩斯。父母希望他从医，他念了半年医学院便辍学——"我不确定自己能承担那样的工作和责任"——又进工厂做工，最后才转学数学。在布达佩斯的罗兰大学，他的才华被爱尔特希发现并受到提携；1965年获硕士学位，1970年在莫斯科大学获博士学位，导师是以色列·盖尔范德。这段师徒关系源自一次拼写差错：他原本想跟亚历山大·盖尔丰德学习，却误投到盖尔范德门下。自1986年起，他任罗格斯大学新泽西州计算机科学讲席教授，同时是匈牙利科学院阿尔弗雷德·雷尼数学研究所的终身研究员。</p>

<h3>二、塞梅雷迪定理</h3>
<p>1936年，爱尔特希与图兰猜想：只要一个自然数集合具有正的上密度，其中就含有任意长的等差数列。罗特1953年解决了三项的情形；塞梅雷迪1969年证明四项，1975年证明一般情形，这就是塞梅雷迪定理。爱尔特希曾为这个猜想悬赏一千美元并按约付给了他。这条定理回答了一个朴素得近乎幼稚的问题——足够"稠密"的数集里必有规律——却动用了极其艰深的工具，其思想催生出加性组合这一整个领域；后来它又被用遍历论与调和分析的方法反复证明，由此在离散数学与动力系统之间凿开了通道。</p>

<h3>三、正则性引理与工具箱</h3>
<p>1975年那篇证明中引入的一个引理，日后被称为塞梅雷迪正则性引理：任意足够大的图都可以剖分成若干块，使得块与块之间的连边在统计意义上近似随机。它先以受限形式出现，1978年给出一般形式。这条引理成了极值图论、图的性质检验与图极限理论的通用扳手——凡是对随机图成立的结果，往往都能借它搬到一般图上。此外还有关联几何中的 Szemerédi–Trotter 定理、图论中的 Hajnal–Szemeredi 定理，以及他与 Ajtai、Komlós 合作构造的最优深度排序网络。</p>

<h3>四、影响与荣誉</h3>
<p>塞梅雷迪是匈牙利科学院通讯院士（1982）与院士（1987）、美国国家科学院院士（2010）、欧洲科学院院士（2012）。他先后获 Grünwald 奖（1967、1968）、Rényi 奖（1973）、1975年 SIAM 波利亚奖、匈牙利科学院奖（1979），2008年同时获得美国数学会 Steele 奖与瑞典皇家科学院 Rolf Schock 奖，2012年获匈牙利塞切尼奖与阿贝尔奖。2010年七十寿辰之际，雷尼研究所与波约伊数学会在布达佩斯为他举办学术会议，并出版纪念文集《不规则的头脑》，书中说他"有着不规则的头脑，思维方式与多数数学家不同"。他已发表论文二百余篇。</p>
</div>
</div>

<div id="ar-mathfigures-panel-sarnak" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-sarnak">
<div class="agent-intro">
<h2>彼得·萨纳克：在数论与量子混沌之间牵线的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1953–</td></tr>
<tr><td><strong>籍贯</strong></td><td>南非／美国；生于南非约翰内斯堡</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿大学 Eugene Higgins 讲座教授、普林斯顿高等研究院教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>算术量子混沌与量子唯一遍历猜想、随机矩阵与 L 函数零点的联系、Ramanujan 图与扩展图、薄群与仿射筛法</td></tr>
</table>
</div>

<h3>一、从约翰内斯堡到普林斯顿</h3>
<p>1953 年 12 月 18 日，萨纳克生于南非约翰内斯堡，童年有三年在以色列度过。他在金山大学获学士与荣誉学士学位，1980 年在斯坦福大学获博士学位，导师是 Paul Cohen——那位用强制法证明连续统假设独立性的逻辑学家。此后他先后任职于纽约大学库朗数学科学研究所、斯坦福大学与普林斯顿大学，1996 至 1999 年任普林斯顿大学数学系主任，2002 年起任 Eugene Higgins 讲座教授；他在普林斯顿高等研究院两度任研究员，2007 年起为该院教授，并长期担任《数学年刊》的编委。从金山大学到斯坦福的这段转向，让他同时具备了硬分析的计算能力与对数论结构的直觉；这种双重背景后来成了他的标志——他总能把一个看似纯分析的问题，翻译成可以用自守形式去算的问题。</p>

<h3>二、量子混沌与算术量子遍历</h3>
<p>萨纳克最先系统地把数论工具引入量子混沌的研究。一个在经典意义下混沌的系统，其量子化版本的本征函数会怎样分布？他提出了量子唯一遍历猜想：负曲率流形上拉普拉斯算子的本征函数在高频极限下都在相空间中均匀化。借助自守形式与 L 函数的深刻结果，他证明了这一猜想在若干算术情形下的版本，把此前看似无从下手的问题变成了可以推进的计划；Lindenstrauss 与 Anantharaman 后来的工作正是沿着他开辟的路线前进。"算术量子混沌"这个说法本身就出自他手。这条线索的意义在于，它把"波的分布"与"素数及 L 函数的分布"这两件看似无关的事接在了一起：算术提供的额外对称性，恰好给出了物理情形下无法获得的工具。他还研究了算术曲面上尖形式的存在性，并由此否证了 Selberg 的一个猜想。</p>

<h3>三、随机矩阵、L 函数与稀疏图</h3>
<p>在与 Zeev Rudnick 的合作中，萨纳克计算了黎曼 ζ 函数零点的高阶关联函数，把 Montgomery 与 Odlyzko 关于零点统计与随机矩阵本征值统计之间联系的经验观察，提升为可以验证与推广的理论；1999 年他与 Nicholas Katz 合作的关于 L 函数族低零点统计的工作，进一步确立了随机矩阵理论在解析数论中的地位。他与 Lubotzky、Phillips 用数论构造出 Ramanujan 图——谱隙最优的扩展图，在计算机科学与组合学中影响深远。近年他又发展出薄群的算术理论与仿射筛法，把数论、分析、组合学、动力学、几何与谱理论揉在一起，开辟了一片新的交叉地带。仿射筛法要问的是，经典筛法在"稀疏"的轨道上是否仍然有效——例如一个整值多项式的值中到底有多少个素数；他与合作者把扩张图与筛法结合起来，给出了过去完全无法触及的答案；这套方法如今已被用来处理整值多项式、轨道上的素数分布等一整类问题。</p>

<h3>四、影响与荣誉</h3>
<p>2014 年的沃尔夫数学奖表彰他在分析、数论、几何与组合学方面的深刻贡献。此前他获 1998 年 Pólya 奖、2001 年 Ostrowski 奖、2003 年 Conant 奖与 2005 年科尔数论奖，2019 年获英国皇家学会西尔维斯特奖章，2024 年又获邵逸夫数学科学奖，获奖理由是发展了薄群的算术理论与仿射筛法。他是美国国家科学院院士、英国皇家学会院士、美国哲学会与美国艺术与科学院院士。他指导的学生包括 Akshay Venkatesh、Kannan Soundararajan、Harald Helfgott、Alex Eskin、William Duke 与 Alex Kontorovich 等，其中多人已成为各自方向的一流人物。萨纳克的特点是跑得广：他常常在两个素不相识的领域之间指出一条路，然后让别人去把它走完。他乐于把想法与问题直接交给学生，从不计较署名；熟悉他的人说，与他讨论一小时之后，你往往会带着一个比来时更好的问题离开。他还长期主持多个研究所的科学顾问委员会，把这种跨学科的品味带进了数学的组织工作之中。</p>
</div>
</div>

<div id="ar-mathfigures-panel-mori" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-mori">
<div class="agent-intro">
<h2>森重文：给三维代数簇分类的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1951–</td></tr>
<tr><td><strong>籍贯</strong></td><td>日本，生于爱知县名古屋市</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；京都大学数理解析研究所教授，后任京都大学高等研究院院长</td></tr>
<tr><td><strong>代表成就</strong></td><td>确立极小模型纲领（森纲领）并证明三维极小模型的存在性；提出极值射线与锥定理；证明翻转定理；解决哈茨霍恩猜想</td></tr>
</table>
</div>

<h3>一、从名古屋到京都，再到哈佛</h3>
<p>1951年2月23日，森重文生于名古屋。1969年他进入京都大学理学部——据说是因为那一年东京大学的入学考试被中止——1973年毕业，1975年获硕士学位并留校任助手，1978年获博士学位，导师是<strong>永田雅宜</strong>。1977年至1980年他任哈佛大学助理教授，1980年转赴名古屋大学，历任讲师、副教授，1988年升为教授，其间1985年至1987年任哥伦比亚大学访问教授。1990年起他任京都大学数理解析研究所教授，2011年至2014年出任该所所长，2016年起担任京都大学高等研究院院长。2015年至2018年，他出任<strong>国际数学联盟主席</strong>，是该组织历史上首位来自东亚的领导人。</p>

<h3>二、极值射线与锥定理</h3>
<p>代数几何的中心任务是给代数簇分类。曲线的分类由黎曼奠定基础，先用亏格这样的离散量做粗分类，再用连续参数做细分类。曲面的粗分类则花了约一百年，才由<strong>小平邦彦</strong>等人严格完成。可见维数每增加一，难度便陡增；到1970年前后，三维簇的分类几乎被视为不可想象之事。森重文的入手点是：传统的曲面分类依赖<strong>极小模型</strong>这一概念，而三维簇上极小模型一般会失效。他转而考察曲线锥的结构，发现了<strong>极值射线</strong>这一关键对象，并证明锥定理，说明负典范除子的部分由可数多条极值射线张成，且每条射线都对应一个收缩态射。这一整套技术把"如何往下走一步"变成了一个可以操作的几何问题。此外，他在1979年还证明了哈茨霍恩猜想：切丛丰富的射影流形必为射影空间。</p>

<h3>三、翻转与三维极小模型的完成</h3>
<p>真正的技术高峰是<strong>翻转</strong>（flip）。收缩一条极值射线时，得到的可能是不同维数的像，也可能是一个小的双有理改造，此时目标空间会出现难以容忍的奇点，必须再施行一次手术才能继续。森重文在1988年发表的长文《Flip theorem and the existence of minimal models for 3-folds》中证明了三维翻转的存在性，从而完成了整个纲领。他的洞见是：只要允许极小模型带上某些温和的奇点（终端奇点），曲面的那套逻辑就可以推广到三维。此后他与<strong>扬诺什·科拉尔</strong>合作，给出三维翻转的完全分类。整个纲领把三维簇的分类一分为二：大多数簇有极小模型，剩下的法诺簇单独处理。从制定纲领到完成证明，他用了大约十年。</p>

<h3>四、影响与荣誉</h3>
<p>1990年京都国际数学家大会上，森重文获菲尔兹奖，表彰他完成了当时代数几何中"最深刻、最激动人心"的进展。同年他还获得美国数学会<strong>科尔奖</strong>（代数分支，表彰那篇关于翻转定理与三维极小模型存在性的论文）与日本学士院奖（与饭高茂、川又雄二郎共同获奖），并获颁文化功劳者。此前他已获1983年弥永奖、1984年中日文化奖、1988年日本数学会秋季奖与井上奖。此后又有2004年藤原奖、2019年小平邦彦奖、2020年京都府文化奖特别成就奖，2021年获<strong>文化勋章</strong>。他于1992年当选美国艺术与科学院外籍荣誉院士，1998年当选日本学士院会员，2016年当选俄罗斯科学院外籍院士，2017年当选美国国家科学院外籍院士。把极小模型纲领推向更高维，至今仍是代数几何最前沿的方向之一；他先后在京都指导了藤野修、小高雄二等多位学生，他们已是这一领域的中坚。</p>
</div>
</div>

<div id="ar-mathfigures-panel-thurston" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-thurston">
<div class="agent-intro">
<h2>威廉·瑟斯顿：让三维流形住进八种几何的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1946–2012</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，华盛顿特区</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；康奈尔大学教授，曾任教普林斯顿大学、加州大学伯克利分校与戴维斯分校，并任伯克利数学科学研究所（MSRI）所长</td></tr>
<tr><td><strong>代表成就</strong></td><td>几何化猜想与三维流形的八种几何、双曲 Dehn 手术定理、曲面微分同胚的分类、叶状结构理论</td></tr>
</table>
</div>

<h3>一、叶状结构的登场</h3>
<p>瑟斯顿 1946 年 10 月 30 日生于华盛顿特区，1967 年毕业于佛罗里达州的 New College，1972 年在加州大学伯克利分校获博士学位，导师为<strong>莫里斯·赫希</strong>，论文题为《作为圆丛的三维流形的叶状结构》。他患有先天性斜视，立体视觉受损，母亲在他幼年时训练他从二维图像重建三维形体——后来他本人乐于把这个细节与自己的几何直觉联系起来。1970 年代初他在叶状结构理论中接连解决一大批悬置问题，效率高到令同行却步：据说当时有导师劝学生不要进入这个领域，因为瑟斯顿正在"把这个课题清扫干净"。1974 年他成为普林斯顿大学正教授，1976 年获维布伦几何奖。</p>

<h3>二、双曲三维流形与几何化猜想</h3>
<p>1970 年代末，瑟斯顿把注意力转向三维流形。此前人们手上只有零星的三维双曲流形例子；他借助<strong>Dehn 手术</strong>这一已知手段，构造出无穷多个双曲三维流形族，并在哈肯流形上证明了三维双曲结构存在的完整刻画。由此浮现出一幅惊人的图景：绝大多数三维流形其实是双曲的。顺着这条线索，他提出<strong>几何化猜想</strong>——任何闭三维流形都可以沿球面与环面切开，每个碎块都带有八种标准几何之一的结构，其中双曲几何是内容最丰富、也最常见的一种。这一猜想把庞加莱猜想作为特例包含在内。1982 年他因此获得菲尔兹奖，颁奖词称赞他革新了二维与三维拓扑研究，展现出分析、拓扑与几何之间深刻的相互作用。</p>

<h3>三、看得见的数学与二十四问</h3>
<p>瑟斯顿信奉一种"重直觉、轻形式"的写作与思考方式：他著名的普林斯顿讲义《三维流形的几何与拓扑》流传多年，启发了整整一代研究者；他也是纯粹数学中早期使用计算机的人之一，激励 Jeffrey Weeks 开发出双曲流形计算程序 SnapPea。他对曲面微分同胚的分类（即 Nielsen–Thurston 分类）把每个映射类归结为周期的、可约的或伪阿诺索夫的三选一，成为低维拓扑与动力系统的标准工具。他还在晚年提出著名的<strong>"瑟斯顿二十四问"</strong>，列出三维几何与拓扑中尚未解决的核心问题，至今仍被当作该领域的研究地图。2002 年前后，格里戈里·佩雷尔曼用里奇流证明了整个几何化猜想，从而也证明了庞加莱猜想，兑现了他二十年前的预言。</p>

<h3>四、影响与荣誉</h3>
<p>瑟斯顿 1991 年回到伯克利，1992 年至 1997 年出任 MSRI 所长，任内推动的若干教育与交流项目后来成为各国研究所的标配；此后他任教于加州大学戴维斯分校（1996–2003 年），2003 年起任康奈尔大学 Jacob Gould Schurman 数学讲席教授。他 1983 年当选美国国家科学院院士，先后获维布伦奖（1976 年）、艾伦·T·沃特曼奖（1979 年）、2012 年的勒罗伊·P·斯蒂尔奖等重要荣誉。他的博士学生阵容蔚为大观，包括 Danny Calegari、Richard Canary、Benson Farb、David Gabai、William Goldman、Richard Kenyon、Steven Kerckhoff、Yair Minsky、Oded Schramm、Richard Schwartz、Jeffrey Weeks 等。2012 年 8 月 21 日，他因黑色素瘤在纽约州罗切斯特去世，享年六十五岁。</p>
</div>
</div>

<div id="ar-mathfigures-panel-shelah" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-shelah">
<div class="agent-intro">
<h2>萨哈龙·沙拉赫：于不可判定处凿出定理的逻辑学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1945–</td></tr>
<tr><td><strong>籍贯</strong></td><td>以色列，耶路撒冷</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；希伯来大学数理逻辑 A. Robinson 讲座教授、罗格斯大学杰出访问教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>真强制法（proper forcing）、PCF 理论、模型论的分类理论与 Morley 问题的解决、Whitehead 问题的独立性</td></tr>
</table>
</div>

<h3>一、从几何到逻辑</h3>
<p>1945 年 7 月 3 日，沙拉赫生于耶路撒冷，父亲是以色列诗人与政治活动家 Yonatan Ratosh。小学时他想当科学家，但起初钟情于物理与生物；九年级接触几何之后，他在自述里说，"建立在极少数公理上的一整套定理与证明"牢牢抓住了他，十五岁便决定做数学。1964 年他在特拉维夫大学获学士学位，随后在以色列国防军服役，1967 年获硕士学位，1969 年在希伯来大学取得博士学位，导师是 Michael O. Rabin，论文研究稳定理论。他先后在普林斯顿大学与加州大学洛杉矶分校短暂停留，之后回到希伯来大学，1974 年成为教授，1978 年起担任数理逻辑讲座教授；自 1986 年起，他同时是罗格斯大学的杰出访问教授。他的博士论文研究稳定理论，那时模型论还是一门以逐个分类理论为主的学问；沙拉赫从一开始就嫌问题的尺度太小，他要的是一把能同时量出所有理论的工具。</p>

<h3>二、分类理论与稳定性</h3>
<p>在模型论中，沙拉赫完成了被称为"分类理论"的庞大计划：他为一阶理论引入了一系列分界线，用稳定性、超稳定性等性质把理论分层，并证明处于不同层的理论具有截然不同的模型个数函数。由此他解决了 Morley 问题，把 Morley 关于范畴性的结果推广到不可数语言的情形。这套框架如今主导了模型论的一大半：人们不再逐个研究理论，而是先判断它落在哪条线的哪一侧。他承接了 Morley 的问题，却彻底改变了提法——从"某个理论有多少个模型"变成"什么样的结构性质决定了模型的个数"。这套理论写进了他的《分类理论》以及此后的若干专著；对许多人来说，它把模型论从一门"做结构"的艺术，变成了一门有明确纲领、有可划分层次的学科。</p>

<h3>三、真强制法与 PCF 理论</h3>
<p>在集合论中，沙拉赫发明了"真强制"的概念，为迭代强制论证提供了在极限步骤仍能保住第一个不可数基数不被坍塌的一般准则，成为此后几十年最有力的工具之一。更难的是他创建的 PCF 理论（可能共尾性理论）。连续统假设这样的基本基数算术问题在 ZFC 中不可判定，按常理人们以为这一整片领域只能得到相对相容性结果；沙拉赫却证明，ZFC 本身就能给出关于奇异基数幂运算的非平凡上界——例如，若连续统小于第一个奇异基数，那么该基数大小集合的可数子集个数就可以被估出来。这些是货真价实的定理，而不是独立性结果，他 1994 年的专著《基数算术》系统总结了这套理论。此外他还构造了每个真子群都可数的不可数群，证明 Whitehead 问题独立于 ZFC，并给出范德瓦尔登数的第一个原始递归上界。沙拉赫的定理常常带着一种奇特的风格：结论完全是 ZFC 中的事实，证明却要用极精细的组合工具与强制构造；他用这些结果说明，不可判定的阴影之下，仍有一大片可以被真正知道的陆地。</p>

<h3>四、影响与荣誉</h3>
<p>2001 年的沃尔夫数学奖表彰他对数理逻辑与集合论的众多根本贡献及其在数学其它部分的应用。此前的荣誉包括 1977 年 Erdős 奖、1982 年罗斯柴尔德奖、1983 年 Karp 奖、1992 年 Pólya 奖、1998 年以色列奖；2000 年匈牙利科学院又把波约伊奖授予他的《基数算术》。此后他还获 2011 年 EMET 奖、2013 年斯蒂尔奖与 2018 年肖克奖。沙拉赫以多产著称，与两百余位合作者发表了近千篇论文，他的论文档案本身已成为逻辑学界的公共基础设施。他的写作以艰深闻名，可一旦读懂，人们就会发现其中几乎没有冗余：他习惯从一个问题出发直接把工具造出来，然后把工具留给所有人。他也乐于把未解决的问题连同部分进展一起公开，让后来者接着往下做；在逻辑学界，这种开放的工作方式几乎与他的定理一样有影响力。以色列奖与沃尔夫奖的颁奖词里，都特别提到他为一个又一个原本被认为无从下手的问题提供了工具。</p>
</div>
</div>

<div id="ar-mathfigures-panel-sullivan" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-sullivan">
<div class="agent-intro">
<h2>丹尼斯·沙利文：在拓扑、几何与动力学之间架桥的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1941–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，密歇根州休伦港</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；纽约市立大学研究生院 Albert Einstein 讲席教授，石溪大学杰出教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>空间的局部化与完备化、有理同伦论、无游荡域定理、字符串拓扑（与 Chas）；2010年沃尔夫奖、2022年阿贝尔奖</td></tr>
</table>
</div>

<h3>一、把空间逐个素数地拆开</h3>
<p>丹尼斯·沙利文1941年生于密歇根州休伦港，不久后随家人迁往休斯敦。他进莱斯大学时读的是化学工程，二年级遇到一致化定理的一个特例而转学数学——任何形如气球的曲面，无论形状是香蕉还是米开朗基罗的大卫像，都能贴到正球面上，且每一点各方向上的伸缩完全一致。1963年他获学士学位，1966年在普林斯顿大学威廉·布劳德指导下获博士学位。1970年的一份讲义里，他提出了一个大胆的想法：拓扑空间本身也可以像代数对象那样被"逐个素数地局部化"与"完备化"。这套语言此后成为高维流形分类的标准工具，他与布劳德、诺维科夫、沃尔一道成为割补理论（surgery theory）的奠基者，并与卡森一道否定了 Hauptvermutung。</p>

<h3>二、有理同伦论：把拓扑交给微分形式</h3>
<p>他的另一个突破，是考察"把所有素数都忽略掉之后还剩下什么"。他与丹尼尔·奎伦在1960年代末到1970年代各自给出了完整答案，创立了有理同伦论；沙利文的模型建立在微分形式之上，让一部分代数拓扑真正变得可计算，并能直接与几何和分析对接。他与德利涅、格里菲思、摩根的合作把这套工具推进到代数几何与 Hodge 理论。他还独立证明了亚当斯猜想，提出了后来由海恩斯·米勒证明的"沙利文猜想"，并证明五维以上的流形总可以提升为 Lipschitz 结构，从而让分析方法得以介入——而与唐纳森的合作则表明，四维情形并非如此。</p>

<h3>三、从 Klein 群到字符串拓扑</h3>
<p>在动力系统一侧，沙利文建立了 Klein 群与有理映射迭代之间的"词典"，以可测复结构为枢纽。他证明了有理映射没有游荡域，解决了法图六十年前提出的猜想，并用类似方法为费根鲍姆倍周期分岔的普适性给出了概念性证明，把它重写为奇怪吸引子上光滑结构的唯一性。他与瑟斯顿推广的密度猜想，以及他在重整化上的先验界，如今都是共形动力学的基本原则。1999年，他与莫伊拉·蔡斯在自由环路空间的同调上发现了新的乘法（蔡斯–沙利文积），由此开创了字符串拓扑。近年他又把注意力投向流体，试图用拓扑与重整化的语言理解三维空间中的流动。</p>

<h3>四、影响与荣誉</h3>
<p>沙利文曾在沃里克大学、加州大学伯克利分校、麻省理工学院与巴黎南大学工作，1974年成为法国高等科学研究所（IHÉS）的终身教授，1981年出任纽约市立大学研究生院 Albert Einstein 讲席，1996年加入石溪大学，次年离开 IHÉS。他参与创办了西蒙斯几何与物理中心。他1971年获奥斯瓦尔德·维布伦几何奖，1981年获法国科学院埃利·嘉当奖，1983年当选美国国家科学院院士，1994年获费萨尔国王国际奖，2004年获美国国家科学奖章，2006年获斯蒂尔奖，2010年获沃尔夫数学奖，2014年获巴尔赞奖，2022年"因在最广泛意义下对拓扑学的开创性贡献，特别是其代数、几何与动力学方面"获阿贝尔奖。他的学生包括柯蒂斯·麦克马伦。</p>
</div>
</div>

<div id="ar-mathfigures-panel-shamir" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-shamir">
<div class="agent-intro">
<h2>阿迪·沙米尔：把密码学变成数学的 RSA 共同发明人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1952–</td></tr>
<tr><td><strong>籍贯</strong></td><td>以色列，生于特拉维夫</td></tr>
<tr><td><strong>身份</strong></td><td>密码学家、计算机科学家；魏茨曼科学研究所（曾任教于麻省理工学院）</td></tr>
<tr><td><strong>代表成就</strong></td><td>RSA 公钥密码体制；沙米尔秘密共享；差分密码分析（与比哈姆）；费奇—菲亚特—沙米尔身份识别方案</td></tr>
</table>
</div>

<h3>一、从特拉维夫到 MIT</h3>
<p>1952年7月6日，沙米尔生于特拉维夫。1973年他在特拉维夫大学取得数学学士学位，1975年与1977年在魏茨曼科学研究所分别获得计算机科学硕士与博士学位，导师是佐哈尔·曼纳。在华威大学做过一年博士后之后，他于1977至1980年在麻省理工学院工作，随后回到魏茨曼，1984年成为教授，此后再未离开；2006年起他也在巴黎高等师范学院任客座教授。1970年代末的密码学还处在"设计—被攻破—再设计"的循环里，几乎没有任何可以证明的东西；沙米尔与合作者做的事情，是把这个循环换成单向函数这样一条数学假设。</p>

<h3>二、RSA：把钥匙拆成两半</h3>
<p>1977年前后，沙米尔与麻省理工学院的罗纳德·李维斯特、伦纳德·阿德曼一起提出了 RSA 公钥密码体制。它的思路极其干净：两个大素数相乘容易，反过来把乘积分解却被认为极难。于是加密密钥可以公开，解密密钥留在自己手里——"钥匙"第一次可以被拆成两半而不泄露秘密。这个方案今天运行在互联网传输、银行与信用卡产业的底层，是绝大多数安全通信的地基。2002年，三人共同获得美国计算机协会的图灵奖。</p>

<h3>三、秘密共享与差分密码分析</h3>
<p>1979年，沙米尔提出秘密共享方案：把一个秘密（比如导弹发射密码）拆成若干份，任意足够多的份数可以复原，少于这个数目则得不到任何信息。构造只用到了一条简单的事实——平面上的若干个点唯一确定一个次数低一阶的多项式。这个方案后来成为分布式密钥管理、门限签名与安全多方计算的标准部件。1980年代末，沙米尔与学生埃利·比哈姆发现差分密码分析：通过比较明文对的差与密文对的差，可以系统地攻击分组密码，著名的 DES 正是在这一方法下暴露了它的内部结构。后来人们才知道，IBM 与美国国家安全局早已掌握这一技术并保密多年。他还在可视密码、Merkle–Hellman 背包体制的破解、以及 TWIRL 与 TWINKLE 两种大数分解装置的设计上留下了自己的名字。</p>

<h3>四、影响与荣誉</h3>
<p>密码学之外，沙米尔对理论计算机科学也有基础性贡献：他给出了 2-可满足性问题的第一个线性时间算法，并在伦德、福特诺、卡洛夫与尼桑的工作基础上证明了交互式证明系统的能力恰好等于 PSPACE。他1983年获厄尔多斯奖，1987年获魏茨曼奖，1996年与李维斯特、阿德曼共同获得帕里斯·卡内拉基斯奖，2005年当选美国国家科学院外籍院士，2008年获以色列奖，2018年当选英国皇家学会外籍院士，2024年获沃尔夫数学奖。在以色列，他的名字几乎就是"密码学"的同义词；而他自己更愿意强调，这门学科的全部困难在于：你必须先假设对手比你聪明。</p>
</div>
</div>

<div id="ar-mathfigures-panel-schoen" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-schoen">
<div class="agent-intro">
<h2>理查德·舍恩：把偏微分方程织进微分几何的几何分析大家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1950–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，生于俄亥俄州塞利纳</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；斯坦福大学（巴斯讲席教授，1987年起），后任加州大学欧文分校杰出教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>与丘成桐合作证明正质量定理；完全解决 Yamabe 问题；与布伦德尔合作证明可微球面定理</td></tr>
</table>
</div>

<h3>一、从俄亥俄农场到斯坦福</h3>
<p>1950年10月23日，舍恩生于俄亥俄州的塞利纳，在附近的福特里卡沃里一个农场长大，家里十三个孩子中排行第十。清晨要先干完农活才去上学，而他后来回忆，开着拖拉机翻地是"思考的好时候"。两位读数学的哥哥把他带进了这个方向：1972年他从代顿大学毕业，同年进入斯坦福大学读研究生。二年级时他遇见刚到任的丘成桐，当时他正跟莱昂·西蒙读极小超曲面；三人很快开始合作，舍恩正式成为西蒙与丘成桐共同指导的博士生，1977年以一篇关于几何变分问题存在性与正则性的论文取得博士学位。此后他先后在纽约大学库朗研究所、加州大学伯克利分校任教，1987年回到斯坦福。</p>

<h3>二、正质量定理</h3>
<p>广义相对论中有一个朴素却要害的问题：孤立物理系统的总能量（即 ADM 质量）是否非负？它关系到时空的稳定性，数学上却悬置多年。1977至1978年，丘成桐在伯克利访问，两人开始正面进攻。他们用的是几何分析的办法：若质量为负，就可以构造出一张特殊的极小曲面，再用稳定极小曲面的曲率估计与相应的稳定性不等式逼出矛盾。1979年和1981年的两篇论文完成了证明，1982年又把结论推广到 Bondi 质量——即随着引力辐射流失的能量也不曾为负。几年后威滕用旋量给出了另一条证明，但舍恩—丘成桐的方法把极小曲面与标量曲率这两件工具焊在了一起，此后一直是几何分析的标准配置。</p>

<h3>三、Yamabe 问题与标量曲率</h3>
<p>Yamabe 问的是：紧致流形上的每个黎曼度量，能否通过共形变换变成标量曲率为常数的度量。特鲁丁格与奥班处理了其中大部分情形，留下最难的、恰好与正质量定理相关的那一部分。1984年，舍恩正是用刚刚得到的正质量定理补上了这块缺口，给出了完整解答。此后他与丘成桐系统研究正标量曲率流形的拓扑限制，与格罗莫夫、劳森等人的工作一起构成了标量曲率的刚性图景。2007年前后，他与学生布伦德尔借助里奇流证明了可微球面定理：截面曲率严格大于四分之一且不超过一的单连通流形，必然微分同胚于标准球面。从极小曲面到共形几何再到曲率流，他的工作始终贯穿着同一个信念——偏微分方程不只是工具，它本身就是几何的一部分。</p>

<h3>四、影响与荣誉</h3>
<p>舍恩1983年获麦克阿瑟奖，1988年当选美国艺术与科学院院士，1989年获博歇纪念奖，1991年当选美国国家科学院院士。2017年，他与查尔斯·费弗曼共同获得沃尔夫数学奖，获奖理由正是"对几何分析的贡献，以及对偏微分方程与微分几何之间相互关联的理解"；同年他还获得海因茨·霍普夫奖、罗巴切夫斯基奖章与罗尔夫·朔克奖。他的学生中有布雷、埃斯科巴、弗雷泽、黄兰璇、明科齐、内维斯等人，如今都活跃在几何分析一线。舍恩为人低调，同事都叫他里克；他早年从农场带来的那种先干活、再说话的耐心，几十年后变成了微分几何中一整片可估计、可计算、可推广的版图。</p>
</div>
</div>

<div id="ar-mathfigures-panel-stein" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-stein">
<div class="agent-intro">
<h2>埃利亚斯·施泰因：把调和分析写成教科书的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1931–2018</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国；生于比利时安特卫普</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿大学 Albert Baldwin Dod 讲座教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>Stein 插值定理、Cotlar–Stein 几乎正交性引理、Tomas–Stein 限制定理、Fefferman–Stein 的 Hardy 空间与 BMO 理论</td></tr>
</table>
</div>

<h3>一、从安特卫普到普林斯顿</h3>
<p>1931 年 1 月 13 日，施泰因生于比利时的安特卫普，父母是犹太人；1940 年德军入侵后全家出逃，1941 年抵达美国，定居曼哈顿上西区。1949 年他毕业于史岱文森高中，同窗中包括后来的菲尔兹奖得主 Paul Cohen；随后入芝加哥大学，1955 年在 Antoni Zygmund 指导下获博士学位。他先在麻省理工学院任教，1958 年回芝加哥大学，1963 年成为普林斯顿大学教授，此后终身在那里工作，长期出任 Albert Baldwin Dod 讲座教授，2012 年退休。2018 年 12 月 23 日，他因淋巴瘤并发症去世。普林斯顿数学系在悼念文中称他是"数学界的巨人"。从安特卫普到纽约再到芝加哥，这条逃亡与求学之路留给他的，是一种对具体计算的持久耐心；他后来要求学生先把手算清楚，再谈结构，这种风格贯穿了他全部的著作。</p>

<h3>二、奇异积分、插值与 Hardy 空间</h3>
<p>施泰因的工作沿着 Calderón–Zygmund 开辟的方向，却把它引到了全新的地形。他提出带参数族算子的复插值定理（Stein 插值），给出"几乎正交性"的概念与 Cotlar–Stein 引理，使得一大类算子之和的有界性变得可以处理；他证明的极大原理说明，在很宽的条件下，几乎处处收敛性与极大算子的有界性其实是同一件事。他与 Fefferman 共同建立的 Hardy 空间与 BMO 空间的对偶理论，把 Hardy 空间从单变量的复方法里解放出来，推广到了多变量的实变情形。这些结果合起来，构成了二十世纪下半叶调和分析的骨架。他的《奇异积分与函数的可微性质》把这些散落的结果第一次收成了体系，从此成为这一领域的标准参考；人们今天谈论奇异积分时的术语与划分方式，很大程度上仍是他定下的。</p>

<h3>三、限制现象与跨学科的嗅觉</h3>
<p>他还是最早看清傅立叶变换"限制现象"的人之一：一个函数的傅立叶变换虽然定义在整个空间上，却可以在某些低维曲面上良定义并有估计，这就是 Tomas–Stein 限制定理。这条看似技术性的结果，日后成为色散方程、锥上 Strichartz 估计与堆垒数论的枢纽。在半单李群上卷积的研究中，他发现了 Kunze–Stein 现象，又找出了经典群的若干新的酉表示，纠正了此前通行的错误认识。施泰因敏锐地意识到经典傅立叶分析、表示论与多复变偏微分方程三者之间的隐秘联系，并最早系统地加以开掘——这种跨学科的嗅觉，是他那一代分析学家中最出色的。他还系统研究了多复变中的 Cauchy–Szegő 积分与 Neumann 问题的正则性，把调和分析的算子方法与复几何的边值问题接在一起；这些工作让"欧氏傅里叶分析"这几个字有了比字面宽得多的外延。</p>

<h3>四、影响与荣誉</h3>
<p>1999 年的沃尔夫数学奖表彰他对经典与"欧氏"傅立叶分析的贡献，以及"通过富有感染力的教学与写作对新一代分析学家产生的非凡影响"。他 1984 与 2002 年两度获斯蒂尔奖，1993 年获肖克奖，2005 年获伯格曼奖，并获美国国家科学奖章。他指导过五十余位博士，其中包括两位菲尔兹奖得主 Charles Fefferman 与陶哲轩。他与 Rami Shakarchi 合写的《普林斯顿分析讲义》四卷，把本科分析课程重新组织成一个整体，成为世界各地高年级本科生与研究生的标准读物。这套书的写法源自他长期坚持的一个主张：分析学的各个分支本是一门课，不该被拆成互不相干的几门。他把一生几乎都留在普林斯顿：一间办公室、一块黑板、几代学生。他还是普林斯顿大学出版社多年的实际操盘者之一，并两度出任数学系主任；普林斯顿的调和分析讨论班在他主持下持续数十年，成为整个领域公认的训练场。他的教科书之所以难以被替代，不只是因为内容全，更因为每一处证明都替读者想好了下一步该怎么走。</p>
</div>
</div>

<div id="ar-mathfigures-panel-schwartz" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-schwartz">
<div class="agent-intro">
<h2>洛朗·施瓦茨：为δ函数立法的分布理论奠基人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1915–2002</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，生于巴黎</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；巴黎综合理工学院、巴黎第七大学（曾任教于南锡大学）</td></tr>
<tr><td><strong>代表成就</strong></td><td>分布（广义函数）理论，《分布理论》（1950—1951）；施瓦茨核定理、施瓦茨空间</td></tr>
</table>
</div>

<h3>一、δ函数的合法性危机</h3>
<p>二十年代的量子力学需要一种“怪东西”：狄拉克δ函数，它在原点以外处处为零，在原点处无穷大，而在整个实轴上的积分却等于一。物理学家用它描述点电荷、质点这类高度集中的对象，算得又快又准；但对数学家来说，它根本不是函数——没有任何普通函数能满足这些条件。这个矛盾悬了几十年，成为分析学里一道公开的裂缝。</p>

<h3>二、分布：把函数换成“作用”</h3>
<p>洛朗·施瓦茨1915年生于巴黎，出身于一个阿尔萨斯裔的犹太科学世家，舅公是数学家阿达玛。1934年他进入巴黎高等师范学校，1937年在教师资格会考中名列第二。二战期间，他因犹太裔和托洛茨基主义者的双重身份被迫隐姓埋名（化名塞利马丹），在迁往克莱蒙费朗的斯特拉斯堡大学工作。1944—1945年短暂停留格勒诺布尔后，他听从德尔萨特与迪厄多内的建议去了南锡大学。正是1945年前后，他找到了弥合那道裂缝的办法：不去问一个“广义函数”在每一点取什么值，而问它作用在什么样的试验函数上、给出什么数。函数由此从“取值的规则”变成“作用的机器”，求导则通过分部积分转移到试验函数身上——于是任何分布都可以无限次求导。这就是分布理论。1950—1951年，两卷本《分布理论》出版，把它写成了一套完整的体系。</p>

<h3>三、南锡学派与一批学生</h3>
<p>施瓦茨在南锡待了七年，那里很快成为法国分析学的中心之一。贝尔纳·马尔格朗热、雅克–路易·利翁斯、弗朗索瓦·布吕阿、亚历山大·格罗腾迪克都出自他门下——格罗腾迪克的名字后来属于代数几何，但他最初受的训练正是在南锡完成的分析。1952年施瓦茨进入巴黎大学理学院，1958年起在巴黎综合理工学院任教，1965年创办了以他名字命名的洛朗–施瓦茨数学中心（今天综合理工的 CMLS）。他因签署关于阿尔及利亚战争的《121人宣言》被军方主管的综合理工停止授课两年，1963年才重返讲台。</p>

<h3>四、影响与荣誉</h3>
<p>1950年在马萨诸塞州坎布里奇召开的国际数学家大会上，施瓦茨作为全会报告人获得菲尔兹奖，成为首位获此奖的法国数学家；因为政治立场，他为赴美领奖颇费周折。1975年他当选法国科学院院士。分布理论的影响远远超出了它诞生的动机：偏微分方程的基本解、傅里叶分析、位势论、谱理论，乃至后来的伪微分算子与微局部分析，都建立在这一语言之上——物理学家凭直觉使用了多年的工具，终于有了严格的位置。施瓦茨本人兴趣广博，同时是一位蝴蝶收藏家，晚年还以《一个数学家与世纪的纠缠》为题写了自传。</p>
</div>
</div>

<div id="ar-mathfigures-panel-scholze" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-scholze">
<div class="agent-intro">
<h2>彼得·朔尔策：以完美胚空间重写 p 进几何</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1987–</td></tr>
<tr><td><strong>籍贯</strong></td><td>德国，德累斯顿</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；波恩大学教授，波恩马克斯·普朗克数学研究所所长</td></tr>
<tr><td><strong>代表成就</strong></td><td>引入完美胚（perfectoid）空间，变革 p 进域上的算术代数几何；给出 p 进域上一般线性群的局部朗兰兹对应；建立棱柱上同调</td></tr>
</table>
</div>

<h3>一、三年拿到博士学位的德累斯顿少年</h3>
<p>彼得·朔尔策 1987 年 12 月 11 日生于德国德累斯顿。中学时代他四次代表德国出征国际数学奥林匹克，收获三枚金牌和一枚银牌。进入波恩大学后，他只用了三个学期便读完本科，再用两个学期读完硕士，2012 年在波恩取得博士学位，导师是菲尔兹奖得主格尔德·法尔廷斯，博士论文题为《Perfectoid Spaces》——正是这篇论文日后改变了整个领域。同年，年仅二十四岁的他被波恩大学直接聘为 W3 教授，成为德国历史上最年轻的教授之一；2014 年又受聘为加州大学伯克利分校校长讲席教授，2018 年起出任波恩马克斯·普朗克数学研究所所长。这样的晋升速度，在现代数学史上极为罕见。</p>

<h3>二、完美胚空间：把混合特征换成特征 p</h3>
<p>算术代数几何长期面对一个尴尬：p 进域的特征为零，却带着残留的 p 进制算术，许多在特征 p 中行之有效的工具在那里失效。朔尔策的完美胚空间给出了一条通道——通过建立所谓的倾斜（tilting）等价，把 p 进域上某些高度非平凡的几何对象，与特征 p 的对应物精确配对。于是 Frobenius 映射重新可用，等特征世界里积累的技术被整体搬运过来，一大批关于 p 进簇上同调的猜想随之松动。他还由此给出了 p 进域上一般线性群的局部朗兰兹对应的新构造，为伽罗瓦表示与自守形式之间的对应提供了全新的几何入口。</p>

<h3>三、新的上同调：棱柱与凝聚</h3>
<p>完美胚空间带来的不只是单个定理，而是一整套重写 p 进上同调的语言。朔尔策与巴特（Bhargav Bhatt）、莫罗（Matthew Morrow）合作建立的棱柱上同调（prismatic cohomology），把此前彼此割裂的晶体上同调、de Rham 上同调、平展上同调等理论收纳进同一个框架，使它们之间的插值关系变得透明。此后他又与克劳森（Dustin Clausen）共同发展凝聚数学（condensed mathematics），试图为同时含代数与拓扑结构的对象提供更稳固的基础。这些工作把 p 进霍奇理论从一堆技巧整理成一套可以系统地向下传递的方法论，也让一批年轻数学家得以在此基础上继续推进。</p>

<h3>四、影响与荣誉</h3>
<p>2018 年里约热内卢国际数学家大会上，朔尔策因"通过引入完美胚空间改变 p 进域上的算术代数几何，及其在伽罗瓦表示中的应用和新上同调理论的发展"获颁菲尔兹奖。此前他已当选德国国家科学院院士，2022 年又当选英国皇家学会外籍院士。他的风格是以极少的定义撬动极大的结构：不靠繁复计算，而靠找到正确的对象。波恩因此重新成为算术几何的世界中心之一，而完美胚这一概念早已越出 p 进几何，渗入了表示论、代数拓扑乃至数学物理的讨论之中。</p>
</div>
</div>

<div id="ar-mathfigures-panel-smale" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-smale">
<div class="agent-intro">
<h2>斯蒂芬·斯梅尔：高维庞加莱猜想的攻克者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1930–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，密歇根州弗林特</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；加州大学伯克利分校荣休教授，曾任教于芝加哥大学、哥伦比亚大学与香港城市大学</td></tr>
<tr><td><strong>代表成就</strong></td><td>证明五维及以上的广义庞加莱猜想；h-配边定理与手柄体分解；斯梅尔马蹄与结构稳定性</td></tr>
</table>
</div>

<h3>一、从密歇根到里约的海滩</h3>
<p>斯梅尔1930年7月生于密歇根州弗林特，1948年入密歇根大学。他起初成绩并不起眼，读研究生时平均成绩只是C，系主任一度要让他退学；被这一激，他才开始认真起来，1957年在拉乌尔·博特指导下以《黎曼流形上的正则曲线》获博士学位，随后到芝加哥大学任讲师。真正让他成名的是在巴西做博士后期间的经历——他后来不无挑衅地说，自己最好的工作是在里约的海滩上做出来的。这句话在当时引起不小的风波，却也道出了他工作方式的一个特点：先把问题在脑子里翻来覆去地摆弄，直到结构自己显形，再落笔书写。他1960年获斯隆研究奖并进入伯克利，1961年短暂赴哥伦比亚，1964年回到伯克利，此后长期执教于此，1995年成为荣休教授，之后又到香港城市大学任教。他还是一位知名的矿物收藏家，藏品之丰曾结集出版。</p>

<h3>二、高维庞加莱猜想与h-配边</h3>
<p>庞加莱猜想问的是：一个单连通的闭三维流形，是否一定同胚于三维球面。推广到高维后，这个问题反而变得可以下手——维数越高，可用的空间越多。1958年斯梅尔先以<strong>球面外翻</strong>震惊了微分拓扑界：他证明三维空间中的球面可以在不产生折痕的条件下连续地翻过来，这在直觉上是不可能的，因此被称为斯梅尔悖论。紧接着，他证明了五维及以上的广义庞加莱猜想，关键的武器是<strong>手柄体分解</strong>——把流形拆成一节节手柄，再逐节化简——以及由此建立的<strong>h-配边定理</strong>：两个互成h-配边的单连通高维流形其实是同一个流形。1966年莫斯科国际数学家大会上，他因这项工作获菲尔兹奖。剩下两个维度则要等得更久：四维最终由弗里德曼解决，三维由佩雷尔曼完成，至此庞加莱猜想才算彻底落地。</p>

<h3>三、马蹄：混沌的几何图像</h3>
<p>大约在1960年代，斯梅尔把注意力从拓扑转向了<strong>动力系统</strong>。他的第一个标志性贡献是<strong>斯梅尔马蹄</strong>：把一个方形区域拉伸、折弯再放回去，反复迭代之下，点集的轨迹变得极其复杂。这个简单的几何图像一举解释了一类普遍现象——局部的拉伸折叠会产生对初值极端敏感的长期行为，也就是后来被称为混沌的东西。他由此提出<strong>结构稳定性</strong>的概念与摩尔斯—斯梅尔系统的理论，问的不是"这个系统怎么解"，而是"这个系统在小扰动下是否还是同一个样子"，从而把动力系统从求解变成了分类。他还勾勒出一整套研究纲领，供后来者沿着做下去。1998年，他仿照希尔伯特1900年的先例，列出了十八个他认为应在二十一世纪解决的数学问题，其中包含黎曼猜想、P与NP问题、纳维—斯托克斯方程解的存在性与光滑性，以及尚未被证明的庞加莱猜想。</p>

<h3>四、影响与荣誉</h3>
<p>斯梅尔1966年同时获得菲尔兹奖与维布伦几何奖。领奖那次莫斯科之行也成了著名的插曲：他在当地召开记者会，公开批评美国在越南的立场、苏联对匈牙利的干涉以及知识分子所受的待遇，回国后研究资助未能续期，还曾被众议院非美活动委员会传唤——他一直是活跃的政治参与者。此后他陆续获得1988年的肖夫内奖、1996年的美国国家科学奖章，以及2006/2007年度的沃尔夫数学奖，获奖领域横跨微分拓扑、动力系统与数理经济学。他后期把莫尔斯理论用于经济学的一般均衡分析，也涉足计算理论与生物学，晚年关注算法与数值分析。他的学生中有鲍恩、帕里斯、古肯海默等动力系统领域的中坚。2000年，一颗小行星以他的名字命名。年过九旬的他，仍在追问那些还没被解开的形状问题。</p>
</div>
</div>

<div id="ar-mathfigures-panel-smirnov" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-smirnov">
<div class="agent-intro">
<h2>斯坦尼斯拉夫·斯米尔诺夫：给渗流与伊辛模型戴上共形眼镜的概率论者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1970–</td></tr>
<tr><td><strong>籍贯</strong></td><td>俄罗斯，生于列宁格勒（今圣彼得堡）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；瑞士日内瓦大学教授（2003 年起），圣彼得堡国立大学切比雪夫实验室创始主任（2010 年起）</td></tr>
<tr><td><strong>代表成就</strong></td><td>证明三角格上临界点渗流的共形不变性与 Cardy 公式；证明二维临界伊辛模型的共形不变性，为统计物理的共形不变性普适性猜想奠定严格基础</td></tr>
</table>
</div>

<h3>一、239 中学、两枚金牌与加州理工</h3>
<p>斯米尔诺夫就读于圣彼得堡著名的 239 中学——那所数学精英学校走出了许多后来蜚声国际的数学家。中学时期他两度参加国际数学奥林匹克并取得满分，斩获两枚金牌。1992 年他毕业于圣彼得堡国立大学数学与力学系，之后赴美，1996 年在加州理工学院获得博士学位，博士论文题为《Julia 集的谱分析》，导师是分析学家 Nikolai Makarov。博士后阶段他先后在耶鲁大学、普林斯顿高等研究院与波恩的马克斯·普朗克数学研究所工作，1998 年加盟斯德哥尔摩皇家理工学院，2003 年转到日内瓦大学，任分析、数学物理与概率研究组的教授。他的研究领域横跨复分析、动力系统与概率论，这一点在他的成名作中体现得淋漓尽致。</p>

<h3>二、三角格上的渗流与 Cardy 公式</h3>
<p>渗流（percolation）是统计物理里最简单的模型之一：想象一张无限大的三角格，每个格子以概率 p 被随机染色，问是否存在一条贯穿整个区域的染色通道。物理学家凭直觉与数值实验相信：在临界概率处，模型的宏观行为与格子的具体形状无关，而且具有共形不变性——即任何保角变换都不改变其极限形态。John Cardy 用共形场论的方法给出了一个精确的穿越概率公式，但它长达数十年只是"物理上正确"。斯米尔诺夫在 2001 年给出了严格的数学证明：对三角格上的点渗流，Cardy 公式成立，且极限确实共形不变。他的关键构造是一类离散全纯观测量——在三角格上，某些可观测函数满足离散版本的 Cauchy–Riemann 关系，共形不变性因而转化为这些量在极限下必然收敛到全纯函数。这一结果随即与 Oded Schramm 引入的 SLE（Schramm–Loewner 演化）接通，人们由此确认三角格渗流的标度极限正是指数为 6 的那条 SLE 曲线，整个理论变得近乎完整。</p>

<h3>三、伊辛模型与普适性的边界</h3>
<p>渗流只是第一块拼图。更具挑战的是伊辛模型——描述晶格上自旋相互作用的经典磁体模型，它在临界点的行为被认为与渗流共享某种深层共性。斯米尔诺夫继而证明了二维临界伊辛模型的共形不变性，把上述方法推广到一类完全不同的格上模型。这项工作的重要性在于它直指"普适性"（universality）：为什么微观细节千差万别的物理系统，在临界点上却表现出完全相同的临界指数与标度极限？共形不变性正是普适性猜想的数学内核。他引入的离散全纯与仿费米子观测量方法，被合作者与后继者推广到随机簇模型、自避行走等一系列二维格模型，逐渐形成了一整套"证明普适性"的技术路线。人们第一次能在非平凡模型中同时验证 Cardy 型公式与共形结构，概率论、复分析与理论物理之间的通道由此彻底打开。</p>

<h3>四、影响与荣誉</h3>
<p>2010 年，斯米尔诺夫获菲尔兹奖，获奖理由是"证明了统计物理中渗流与平面伊辛模型的共形不变性"。此前他已获 1997 年圣彼得堡数学会奖、2001 年克莱研究奖、与 Oded Schramm 共享的 2001 年 Salem 奖、Göran Gustafsson 奖、2002 年 Rollo Davidson 奖与 2004 年欧洲数学会奖。2010 年他回到圣彼得堡，创建了圣彼得堡国立大学的切比雪夫实验室并担任首任主任，致力于把俄罗斯本土的概率与数学物理传统重新接到国际前沿，他还参与组织圣彼得堡的概率与统计物理学术活动，并参与 2022 年国际数学家大会的相关筹备工作。他也是瑞典皇家科学院与美国数学会的会士，并获得约瑟夫·傅里叶大学荣誉博士学位。在更广泛的意义上，他那一代人对临界现象的处理方式，把一度属于理论物理直觉的领地转化成了能被证明的定理领土。</p>
</div>
</div>

<div id="ar-mathfigures-panel-tate" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-tate">
<div class="agent-intro">
<h2>约翰·泰特：代数数论基本概念的铸造者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1925–2019</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，明尼苏达州明尼阿波利斯</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；哈佛大学、得克萨斯大学奥斯汀分校</td></tr>
<tr><td><strong>代表成就</strong></td><td>泰特论文（阿代尔环上的调和分析）；泰特上同调与类域论的上同调处理；泰特模、泰特曲线、沙法列维奇–泰特群；Lubin–Tate 形式群；刚性解析几何</td></tr>
</table>
</div>

<h3>一、从明尼阿波利斯到普林斯顿</h3>
<p>泰特1925年3月13日生于明尼苏达州明尼阿波利斯，父亲是明尼苏达大学物理学教授，并长期担任《物理评论》主编。他1946年在哈佛大学获学士学位，随后进入普林斯顿大学攻读物理博士，不久转入数学系，1950年在埃米尔·阿廷指导下完成博士论文《数域上的傅里叶分析与赫克ζ函数》。这篇后来被称为"泰特论文"的工作，日后成为现代自守形式与 L 函数理论的基石之一。</p>

<h3>二、用阿代尔重写类域论</h3>
<p>泰特论文的要点是：把数域上的解析工具搬到阿代尔环与伊德尔类群之上，借助阿代尔环的自对偶性做调和分析，从而以极为紧凑、对称的方式重新得到赫克ζ函数的解析延拓与函数方程。差不多同时，岩泽健吉独立得到了类似理论。此后泰特与阿廷合作，用群上同调处理整体类域论，并引入今天所称的泰特上同调群——先前依赖中心可除代数计算布劳尔群的繁复做法，在他手里变得结构清晰。由此他进一步开拓了伽罗华上同调：Poitou–Tate 对偶、沙法列维奇–泰特群，以及与代数 K 理论的联系。</p>

<h3>三、遍布数论的"泰特"前缀</h3>
<p>在数论文献里，"泰特"是一个密度极高的前缀：泰特模、泰特曲线、泰特上同调、沙法列维奇–泰特群、Néron–Tate 高度、Hodge–Tate 分解、Lubin–Tate 形式群、Honda–Tate 定理、Sato–Tate 猜想、泰特猜想、泰特算法……他还与 Jonathan Lubin 用形式群重构了局部类域论，并开创了刚性解析几何。面对"你是理论建构者还是解题者"的提问，他自认是理论建构者、甚至猜想制造者，而非解题者——"我不擅长解题，比如我绝不可能在奥数里取胜"。他用这些基本概念替后人划定了战场。</p>

<h3>四、影响与荣誉</h3>
<p>泰特先后任教于普林斯顿大学、哥伦比亚大学与哈佛大学（1954–1990），1990年转赴得克萨斯大学奥斯汀分校，出任 Sid W. Richardson 基金会讲席教授，2009年荣休后回到哈佛任荣休教授，并在奥斯汀建起一支有国际影响的数论队伍。他是美国国家科学院院士（1969）、法国科学院外籍院士、伦敦数学会荣誉会士。他获1956年科尔数论奖、1995年 Steele 终身成就奖、2002/03年沃尔夫数学奖（与佐藤干夫共享，表彰其"创立代数数论中的基本概念"）。2010年获阿贝尔奖，理由是"对数论巨大而持久的影响"。他指导过四十余位博士生。2019年10月16日，泰特在马萨诸塞州列克星敦逝世，享年94岁。</p>
</div>
</div>

<div id="ar-mathfigures-panel-talagrand" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-talagrand">
<div class="agent-intro">
<h2>米歇尔·塔拉格兰：为随机性定出精确刻度的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1952–</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，贝济耶（成长于里昂）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；法国国家科学研究中心（CNRS）研究主任（1985–2017），巴黎朱西厄数学研究所泛函分析团队</td></tr>
<tr><td><strong>代表成就</strong></td><td>随机过程上确界的一般链理论（majorizing measures）、集中不等式、自旋玻璃 Parisi 公式的严格证明；2019年邵逸夫奖、2024年阿贝尔奖</td></tr>
</table>
</div>

<h3>一、在里昂开始的数学</h3>
<p>米歇尔·塔拉格兰1952年生于法国，在里昂长大，父亲是数学教授，母亲教法语。五岁时他因遗传疾病失去一只眼睛；十年后另一只眼睛也出现危险，他因此休学半年，出于对失明的恐惧而拼命自学，也正是在这段时间发现了自己在数学与物理上的天分。他在里昂大学读数学，1974年进入法国国家科学研究中心（CNRS），1977年在巴黎第六大学取得博士学位，导师是古斯塔夫·肖凯。此后他一直在泛函分析与概率之间工作，1985年起任研究主任，直到2017年退休；他长期隶属巴黎朱西厄数学研究所的泛函分析团队，并在美国俄亥俄州立大学任教十余年。</p>

<h3>二、上确界：给随机过程量体裁衣</h3>
<p>他关心的最基本的问题是：一个随机过程在一族指标上取到的最大值有多大？这看似朴素，却是理解随机现象的关键——如果海浪高度是一个随机过程，那么"明年最大的浪会有多高"就是它的上确界。高斯过程的情形长期只有粗糙的估计。塔拉格兰用"控制测度"（majorizing measures）与"一般链"（generic chaining）的方法，给出了有界高斯过程的完整刻画：上确界的大小可以由指标空间的一个几何量精确描述，而且这个刻画是必要且充分的。这项工作在1990年代完成，把抽象随机过程理论整个改写了一遍，《一般链》一书至今是该领域的权威参考。</p>

<h3>三、集中不等式：为何随机反而更稳定</h3>
<p>第二个主题是测度的集中。直觉上，一个量依赖的随机因素越多，它的波动应该越大；事实常常相反——若一个量依赖许多独立变量，却对其中任何一个都不太敏感，那么它的波动会异常小，几乎像常数一样。塔拉格兰为这一现象定出了精确的定量不等式，其形式简洁而威力巨大，被统称为塔拉格兰不等式。这类结果迅速溢出概率论的边界，成为统计学（经验过程）、随机矩阵、理论计算机科学与统计力学（无序系统）中共用的工具。</p>

<h3>四、自旋玻璃与荣誉</h3>
<p>他的第三项成就落在数学物理：自旋玻璃是一种特殊的物质形态，物理学家乔治·帕里西因相关研究获2021年诺贝尔物理学奖，而其中"Parisi 公式"的严格证明，正是由塔拉格兰用概率与泛函分析的工具补完的。他在两卷本自旋玻璃专著中写道：理论物理学家发现了奇妙的新数学大陆，却用自己的方法探索它，这本书试图用数学的方法重新走一遍。塔拉格兰1995年获勒夫奖，1997年获费马奖，1998年在柏林国际数学家大会上作全体报告，2004年当选法国科学院院士，2011年获法国荣誉军团骑士勋章，2019年获邵逸夫奖，2022年获波兰科学院巴拿赫奖章，2024年"因在概率论与泛函分析方面的开创性贡献"获阿贝尔奖。他也是一名马拉松跑者，个人主页上的第一句话是"数学给你翅膀"。</p>
</div>
</div>

<div id="ar-mathfigures-panel-donaldson" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-donaldson">
<div class="agent-intro">
<h2>西蒙·唐纳森：用规范场论切开四维光滑结构的数学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1957–</td></tr>
<tr><td><strong>籍贯</strong></td><td>英国，剑桥</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；伦敦帝国理工学院纯粹数学教授，纽约州立大学石溪分校西蒙斯几何与物理中心常任成员</td></tr>
<tr><td><strong>代表成就</strong></td><td>唐纳森定理与四维流形的光滑结构、奇异四维欧氏空间的存在、唐纳森不变量、Kähler 几何与 K 稳定性方面的工作</td></tr>
</table>
</div>

<h3>一、从帆船设计到牛津的瞬子</h3>
<p>唐纳森 1957 年 8 月 20 日生于英国剑桥，少年时一度痴迷于帆船设计，为了弄懂船体理论而提前自学了大量数学，从此走上数学之路。1976 年他入读剑桥大学彭布罗克学院，1979 年获学士学位；1980 年起在牛津大学伍斯特学院攻读博士，最初师从<strong>奈杰尔·希钦</strong>，随后转入<strong>迈克尔·阿蒂亚</strong>门下。当时阿蒂亚与希钦的研究氛围正围绕着杨–米尔斯方程与瞬子展开，希钦建议他去攻一道二人几年前提出的猜想。唐纳森同时动用偏微分方程与拓扑两套工具，进展极快；还在读博二年级的 1982 年，他就得到了那个令数学界震惊的结果，并于 1983 年在《Self-dual connections and the topology of smooth 4-manifolds》一文中发表。阿蒂亚后来回忆说，这篇论文"震惊了数学界"。</p>

<h3>二、唐纳森定理与奇异四维空间</h3>
<p>要理解这个结果的分量，需要把它与弗里德曼的工作对照着看。弗里德曼在拓扑范畴内完成了单连通四维流形的分类并证明四维庞加莱猜想；唐纳森处理的却是带光滑结构的四维流形，他考察四维流形上杨–米尔斯瞬子模空间，从中读出交截形式的强限制——这就是<strong>唐纳森定理</strong>：某些在拓扑上完全可行的交截形式，在光滑范畴中根本无法实现。两者合起来的推论极为反常：欧氏四维空间存在与通常结构不同却与之拓扑等价的微分结构，即所谓<strong>奇异四维空间</strong>；而且四维是唯一出现这种现象的维数。这些奇异空间甚至含有无法被装入任何光滑嵌入三维球面的紧集。1986 年，他在伯克利国际数学家大会上获菲尔兹奖。</p>

<h3>三、从规范理论到代数几何</h3>
<p>唐纳森的意义不只在于几个定理，更在于他逆转了数学与物理之间惯常的输送方向：杨–米尔斯方程是麦克斯韦电磁方程的推广，瞬子源自量子场论，而他把这些物理工具用来解决纯粹数学中的拓扑问题。此后他继续沿着这条道路扩展，构造出以他命名的多项式不变量，并启发了后来更易用、更简洁的塞伯格–维滕不变量。近年他的工作重心转向 Kähler 几何与代数几何的交汇处，涉及<strong>唐纳森–托马斯理论</strong>、K 稳定性与丘–田–唐纳森猜想——后者把 Fano 流形上是否存在常标量曲率 Kähler 度量这一分析问题，翻译成代数几何中的稳定性条件。1990 年他与彼得·克罗海默合著的《四维流形的几何》，至今仍是这一领域的标准入门书。</p>

<h3>四、影响与荣誉</h3>
<p>唐纳森 1983 年获牛津博士学位后任万灵学院初级研究员，1983–1984 学年在普林斯顿高等研究院，1985 年回牛津任 Wallis 数学教授；此后曾任教斯坦福大学，1999 年前后转入伦敦帝国理工学院，2014 年加入石溪分校西蒙斯几何与物理中心并任常任成员。除 1986 年菲尔兹奖外，他还获得伦敦数学会初级怀特海德奖（1985 年）、皇家奖章（1992 年）、克拉福德奖（1994 年）、波利亚奖（1999 年）、费萨尔国王国际奖（2006 年）、内默斯奖（2008 年）、邵逸夫数学奖（2009 年，与克利福德·托布斯共享）、维布伦几何奖（2019 年，与陈秀雄、孙崧共享）与<strong>沃尔夫数学奖</strong>（2020 年）。他是英国皇家学会会士与美国国家科学院外籍院士，2012 年因对数学的贡献获封爵士。</p>
</div>
</div>

<div id="ar-mathfigures-panel-thompson" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-thompson">
<div class="agent-intro">
<h2>约翰·汤普森：改写有限单群版图的群论家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1932–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，堪萨斯州渥太华（Ottawa, Kansas）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；佛罗里达大学研究生研究教授，曾任剑桥大学 Rouse Ball 数学教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>与 Walter Feit 合作的奇阶定理（非循环有限单群的阶为偶数）、极小有限单群的确定、Thompson 群 Th、逆 Galois 问题的判据</td></tr>
</table>
</div>

<h3>一、奇阶定理：一篇占满一期杂志的论文</h3>
<p>有限群论在二十世纪中叶的核心工程，是列出所有的有限单群——它们如同化学元素，是构成一切有限群的合成因子。1963 年，约翰·汤普森与沃尔特·法伊特（Walter Feit）在《Pacific Journal of Mathematics》上发表了题为《Solvability of Groups of Odd Order》的论文，证明著名的<strong>奇阶定理</strong>：任何非循环（非交换）的有限单群，其阶必为偶数；等价的说法是，每个奇数阶的有限群都可解。这个结论此前被认为无从下手，而两人的证明长达二百五十余页，整整占满了《Pacific Journal of Mathematics》的一期。这篇论文不仅扫清了分类道路上最顽固的一块礁石，更重要的是它引入的一整套技术——局部分析、信号化子函子、对极大子群的精细控制——为整个分类工程提供了范式。这项工作为汤普森赢得 1965 年美国数学会科尔代数奖，并成为他 1970 年菲尔兹奖的主要依据。</p>

<h3>二、N-群论文与极小单群</h3>
<p>获奖引文特别提到的另一项工作，是汤普森的 N-群论文。所谓 N-群，是指每个非平凡可解子群的正规化子都可解的有限单群；汤普森对这类群给出了完整分类。作为这项分类的副产品，他确定了所有<strong>极小有限单群</strong>——即所有真子群都可解的单群。这一结果直接把有限单群分类的"底线"勾勒出来：它告诉人们，真正困难的情形只可能发生在更复杂的结构之中；换言之，分类工作的地图第一次有了边界。这套 N-群论文篇幅浩大、技术繁复，与奇阶定理一起被视为分类工程的真正起点——在此之前，完全分类有限单群被许多人当作无望的梦想，在此之后，它成了一项被认为可以完成的事业。更重要的是，汤普森在文中发明的一整套手法——对局部子群结构的精细分析、汤普森唯一性定理与因子化技巧——后来成为分类证明中被反复调用的组件，渗入数十位作者的工作。1981 年宣布完成的分类定理，篇幅逾万页，凝聚数百位数学家的论文，而汤普森的工作始终是其骨架。</p>

<h3>三、从分类工程到逆 Galois 问题</h3>
<p>汤普森的深刻影响并不止于分类本身。二十六个散在单群中有一个以他命名：Thompson 群 Th。他还给出了一个判定有限群能否作为 Galois 群出现的准则，其重要推论之一是最大的散在单群——怪物群（Monster）——确实是某个有理数域扩张的 Galois 群，这是逆 Galois 问题上的里程碑。此外，他在表示论、编码理论以及有限射影平面理论（例如十阶射影平面不存在性的相关工作）中都有重要贡献。人们谈论有限群论时，会用到汤普森唯一性定理、汤普森传递性定理、汤普森因子化这些以他命名的工具；它们早已不是某篇论文的结论，而是整个学科的共同词汇。他的博士论文本身就已经解决了悬置约六十年的问题：Frobenius 核的幂零性，当时曾见诸《纽约时报》的报道。</p>

<h3>四、影响与荣誉</h3>
<p>汤普森 1932 年 10 月 13 日生于堪萨斯州渥太华，1955 年在耶鲁大学获学士学位，1959 年在芝加哥大学获博士学位，导师是桑德斯·麦克莱恩（Saunders Mac Lane）。他先后任教于哈佛大学（1961–62）、芝加哥大学（1962–68），1970 年赴英国出任剑桥大学 Rouse Ball 数学教授，任职至 1993 年，此后转任佛罗里达大学研究生研究教授，同时是剑桥大学纯粹数学荣休教授。1970 年尼斯国际数学家大会上他获菲尔兹奖，布劳尔（Richard Brauer）的引文特别提到他对极小有限单群的确定；此后又获伦敦数学会 Senior Berwick 奖（1982）、英国皇家学会西尔维斯特奖章（1985）、沃尔夫数学奖（1992）、美国国家科学奖章（2000）、阿贝尔奖（2008，与雅克·蒂茨共享）以及德摩根奖章（2013）。他是美国国家科学院院士、英国皇家学会会士、挪威科学院与林琴科学院院士，并拥有牛津大学荣誉理学博士学位。</p>
</div>
</div>

<div id="ar-mathfigures-panel-tao" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-tao">
<div class="agent-intro">
<h2>陶哲轩：当今世界最著名的"神童数学家"</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>澳大利亚籍华裔（父母为香港移民）</td></tr>
<tr><td><strong>职位</strong></td><td>美国加州大学洛杉矶分校（UCLA）教授</td></tr>
<tr><td><strong>主要领域</strong></td><td>调和分析、偏微分方程、组合数论、加法组合学</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/tao.webp" width="345" height="460" alt="陶哲轩" loading="lazy"><figcaption>陶哲轩</figcaption></figure>
</div>

<h3>一、一路"跳级"的神童</h3>
<p>他7岁自学微积分，10、11、12岁三次参加<strong>国际数学奥林匹克（IMO）</strong>，分获铜、银、金牌——<strong>13岁摘金的纪录至今无人打破</strong>。他17岁到普林斯顿攻读博士，21岁获博士学位，24岁成为 UCLA 正教授，是该校历史上最年轻的正教授。</p>

<h3>二、格林—陶定理：素数中的长龙</h3>
<p>2004年他与本·格林证明了<strong>格林—陶定理</strong>：<strong>素数序列中存在任意长的等差数列</strong>。这项工作融合了遍历理论与解析数论，是21世纪"加法组合学"的里程碑，也是他2006年<strong>菲尔兹奖</strong>（时年31岁）的核心成果之一。</p>

<h3>三、多面手与开放数学</h3>
<p>他在 Kakeya 猜想与限制性估计、<strong>压缩感知</strong>（MRI 提速、雷达与无线通信的底层技术）、埃尔德什差异问题等方向都有突破。他发起 <strong>PolyMath</strong> 众包数学项目，坚持把证明细节公开在个人博客上，被称为"世界上最开放的一流数学家"。他说："<strong>我的多数工作来自长时间的苦思，而非灵光一现</strong>。"</p>
</div>
</div>

<div id="ar-mathfigures-panel-turing" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-turing">
<div class="agent-intro">
<h2>图灵：计算机科学与人工智能之父</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>英国</td></tr>
<tr><td><strong>生卒</strong></td><td>1912—1954</td></tr>
<tr><td><strong>主要成就</strong></td><td>图灵机（1936）；破译 Enigma 密码；图灵测试；形态发生理论</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/turing.webp" width="345" height="460" alt="图灵" loading="lazy"><figcaption>图灵</figcaption></figure>
</div>

<h3>一、图灵机：定义了"什么是计算"</h3>
<p>1936年，24岁的图灵为回答希尔伯特的"判定问题"发明了"<strong>图灵机</strong>"：一条纸带、一个读写头、一张状态表，竟能模拟一切可能的计算。他证明了存在通用图灵机，并证明<strong>停机问题不可判定</strong>——与哥德尔不完备定理互为镜像。<strong>今天每一台电脑，都是通用图灵机的工程实现。</strong></p>

<h3>二、布莱切利园：战争中的超级解密者</h3>
<p>1939年他进入英国密码破译总部布莱切利园，设计关键解密装置"<strong>炸弹机</strong>"破译德军 Enigma 密码，使盟军掌握德军 U 艇动向。历史学家估计，布莱切利园的工作使二战<strong>缩短约两年，挽救了上千万人的生命</strong>。</p>

<h3>三、图灵测试与悲剧结局</h3>
<p>1950年他发表《计算机器与智能》，提出著名的<strong>模仿游戏</strong>（图灵测试）——人工智能哲学的第一块基石。1952年他因同性恋行为被捕并被迫接受激素治疗，1954年去世，年仅41岁。2009年英国政府正式道歉，2013年女王签署皇家赦免，2021年他的头像印上英国50英镑纸币；计算机界最高奖即以他命名——"<strong>图灵奖</strong>"。</p>
</div>
</div>

<div id="ar-mathfigures-panel-thom" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-thom">
<div class="agent-intro">
<h2>勒内·托姆：配边理论的创立者与突变论之父</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1923–2002</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，生于杜省蒙贝利亚尔</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；法国高等科学研究院（曾任教于格勒诺布尔大学、斯特拉斯堡大学）</td></tr>
<tr><td><strong>代表成就</strong></td><td>配边理论与托姆空间、托姆同构、托姆横截性定理；奇点理论与分层集；突变理论</td></tr>
</table>
</div>

<h3>一、配边：给流形分类</h3>
<p>1923年勒内·托姆生于法国蒙贝利亚尔，1943年进入巴黎高等师范学校，1946年通过教师资格会考，1951年在巴黎大学取得博士学位，导师是亨利·嘉当。他的博士论文题为《球面纤维空间与斯廷罗德平方》，配边理论的基础已经埋在其中。配边的想法朴素得惊人：若两个 n 维闭流形共同构成某个 n+1 维带边流形的边界，就说它们配边。按这个等价关系给流形分类，问题竟能转化为同伦论中的计算——托姆构造了今天称为托姆空间的对象，用斯廷罗德运算刻画特征类，最终定出了无向配边环的结构。</p>

<h3>二、广义上同调的第一个范例</h3>
<p>1958年，托姆因这套工作获得菲尔兹奖。它的意义不止于分类本身：配边是第一个真正意义上的广义上同调理论，它表明“流形”这类几何对象可以被装进同伦论的机器里计算。此后拓扑 K 理论、配边理论的各种变体接踵而至，代数拓扑的方法论由此整体改写。托姆同构、托姆横截性定理这些以他命名的工具，至今仍是微分拓扑的日常用语。</p>

<h3>三、奇点、稳定性与突变理论</h3>
<p>1950年代中期以后，托姆转向奇点理论：一个光滑映射在何处不可避免地“皱起来”，这些皱褶又有哪些典型形态。他发展了分层集与分层映射的理论，证明了描述惠特尼分层集局部锥形结构的同痕定理（今称托姆–马瑟同痕定理），并推动证明了拓扑稳定映射在两个光滑流形之间构成稠密集——最后的完成归功于马瑟。1968—1972年间，他把这套想法推广为突变理论：连续的原因如何产生不连续的结果，水沸腾、结构屈曲、船倾覆、胚胎发育中的形变，都可以放在这个框架里讨论。1972年的《结构稳定性与形态发生》让他声名远播，甚至溢出数学之外。</p>

<h3>四、影响与荣誉</h3>
<p>托姆先后任教于格勒诺布尔大学（1953—1954）和斯特拉斯堡大学（1954—1963，1957年任教授），此后转入法国高等科学研究院，在那里工作到1990年。1970年获布劳威尔奖章，1976年获冯·诺伊曼讲座奖，同年当选法国科学院院士。他的影响确实越出了数学：达利以《燕尾》和《欧洲的拓扑劫持》两幅画向他致敬；而他晚年的大量写作集中于科学哲学与认识论，并重新审视了亚里士多德的科学观。2002年10月，他在巴黎南郊的比尔河畔比雷特去世。</p>
</div>
</div>

<div id="ar-mathfigures-panel-varadhan" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-varadhan">
<div class="agent-intro">
<h2>瓦拉丹：给罕见事件定价的概率论大家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1940–</td></tr>
<tr><td><strong>籍贯</strong></td><td>印度/美国，生于印度马德拉斯（今金奈）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；纽约大学库朗数学科学研究所</td></tr>
<tr><td><strong>代表成就</strong></td><td>大偏差的统一理论；与 Stroock 合作的扩散过程鞅问题；Donsker–Varadhan 理论；《多维扩散过程》</td></tr>
</table>
</div>

<h3>一、从马德拉斯到加尔各答</h3>
<p>瓦拉丹1940年1月2日生于印度马德拉斯（今金奈）的一个泰米尔婆罗门家庭，1953年随家迁往加尔各答。他在金奈总统学院获学士学位（1959）与硕士学位（1960），1963年在加尔各答的印度统计研究所获博士学位，导师是著名统计学家 C. R. Rao——答辩时 Rao 特意请来柯尔莫哥洛夫出席。1956至1963年间，他与另三位年轻人并称印度统计研究所的"四杰"，那里当时是印度概率论与统计学最活跃的据点。</p>

<h3>二、扩散过程与鞅问题</h3>
<p>1963年秋，经 Monroe Donsker 推荐，瓦拉丹来到纽约大学库朗数学科学研究所做博士后，此后一生未再离开：助理教授、副教授，1972年成为正教授，并两度出任所长（1980–1984、1992–1994）。他与 Daniel Stroock 长期合作，用所谓"鞅问题"的框架重新处理扩散过程——不再先构造随机微分方程的解，而是直接刻画使某些量成为鞅的概率测度。这套方法把伊藤的随机微积分打磨得既严格又灵活，二人合著的《多维扩散过程》成为该领域的标准文献。</p>

<h3>三、大偏差的统一理论</h3>
<p>概率论擅长描述"典型"行为，而罕见事件——保险业的巨额赔付、通信系统的突发拥塞、统计物理中的相变——长期只有零散的估计结果。瓦拉丹给出了统一的框架：在相当一般的条件下，罕见事件的概率以指数速率衰减，衰减的速率由一个"速率函数"刻画，而这个速率函数由系统的基本结构唯一决定。于是量子场论、统计物理、种群动力学、计量金融与交通工程中彼此孤立的估计，被收拢到同一套语言之下；它也极大增强了用计算机模拟稀有事件的能力。近半个世纪以来，大偏差理论已成为现代概率论的核心支柱之一。</p>

<h3>四、影响与荣誉</h3>
<p>瓦拉丹是美国国家科学院与美国艺术与科学院院士，并当选第三世界科学院、英国皇家学会、印度科学院、美国数学会与工业与应用数学会的会士。他获1994年 Birkhoff 奖、1996年美国数学会 Steele 奖（表彰他与 Stroock 关于扩散过程的工作），2008年获印度政府莲花士勋章，2010年获美国国家科学奖章，2023年获莲花装勋章。2007年，他因"对概率论的根本贡献，特别是创建了大偏差的统一理论"而获得阿贝尔奖，阿贝尔委员会评价他的工作"具有巨大的概念力量与超越时代的美感"。</p>
</div>
</div>

<div id="ar-mathfigures-panel-wanghong" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-wanghong">
<div class="agent-intro">
<h2>王虹：破解三维挂谷猜想的调和分析学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1991–</td></tr>
<tr><td><strong>籍贯</strong></td><td>中国，广西桂林</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；法国高等科学研究所（IHES）终身教授，纽约大学柯朗数学科学研究所教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>与约书亚·扎尔共同证明三维挂谷猜想；把多尺度与解耦方法用于平面波动方程的局部光滑猜想；傅里叶限制、Falconer 距离集与平面 Furstenberg 集的重大进展</td></tr>
</table>
</div>

<h3>一、桂林、北大与巴黎</h3>
<p>王虹 1991 年生于广西桂林。2007 年，十六岁的她考入北京大学地球与空间科学学院，次年转入数学科学学院，2011 年获学士学位。随后她赴法国，2014 年同时取得巴黎综合理工学院的工程师学位与巴黎第十一大学（今巴黎-萨克雷大学）的数学硕士学位；在法国期间她一度转向建筑学实习半年，最终还是回到数学。2019 年，她在麻省理工学院获得博士学位，师从拉里·古思（Larry Guth）。此后她先后在普林斯顿高等研究院做博士后、在加州大学洛杉矶分校任助理教授，2023 年起任纽约大学柯朗数学科学研究所副教授，2025 年晋升教授；同年法国高等科学研究所宣布聘她为数学学科终身教授，她是该所历史上首位女性终身教授。</p>

<h3>二、解耦与局部光滑：让波包各归各位</h3>
<p>王虹的主战场是调和分析与几何测度论——研究波、频率与集合大小之间关系的学科，问题往往表述简单、证明艰深。她把多尺度归纳与解耦（decoupling）技术引入平面波动方程的局部光滑猜想：直观地说，一个波包在传播中会被拉平，而拉平多少，取决于不同频率成分之间能否被有效地拆开核算。她与合作者沿着这一思路，把此前只能得到部分结果的情形推进到接近最优的界。她还与古思、约塞维奇（Alex Iosevich）、欧雨濛等合作，在二维的 Falconer 距离集问题上取得重大突破，并与任开元合作完全解决了平面上的 Furstenberg 集猜想。</p>

<h3>三、一根针与三维挂谷猜想</h3>
<p>挂谷问题问的是：一根无限细的针要在空间中转过所有方向，最少需要多大的区域？二维情形答案早已清楚，三维却困住了几代数学家，包括陶哲轩在内的许多人都在上面留下过进展。2025 年 2 月，王虹与英属哥伦比亚大学的约书亚·扎尔（Joshua Zahl）在预印本平台发表一篇一百二十七页的论文，用精细的多尺度归纳与"化整为零、各个击破"的策略，证明三维空间中挂谷集的闵可夫斯基维数与豪斯多夫维数均为 3，猜想就此解决。陶哲轩称这是"几何测度论领域的惊人进步"；由于挂谷猜想是调和分析中一系列核心猜想的基石，它的证明为整座大厦补上了最关键的一块。</p>

<h3>四、影响与荣誉</h3>
<p>2026 年 7 月，王虹因在调和分析与几何测度论上的工作获颁菲尔兹奖，成为继米尔扎哈尼与维亚佐夫斯卡之后历史上第三位女性菲尔兹奖得主，并与邓煜一同成为首批中国籍菲尔兹奖得主。此前她已获得塞勒姆奖、奥斯特洛夫斯基奖、克雷研究奖与数学新视野奖。她不是那种死磕型的数学家，常说"累了就休息，不累就学一些"，也坦言曾经在数学与建筑之间犹豫过；但正是这种松弛而持久的节奏，陪她走完了那根针在三维空间里转过所有方向的一百多年旅程。</p>
</div>
</div>

<div id="ar-mathfigures-panel-werner" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-werner">
<div class="agent-intro">
<h2>温德林·维尔纳：给二维随机曲线画出共形轮廓的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1968–</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，生于西德科隆，1977 年取得法国国籍</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；剑桥大学 Rouse Ball 数学教授，曾任教于巴黎南大学与苏黎世联邦理工学院</td></tr>
<tr><td><strong>代表成就</strong></td><td>与劳勒、施拉姆共同发展随机 Loewner 演化（SLE）；证明平面布朗运动外边界的豪斯多夫维数为 $\frac{4}{3}$；共形圈丛</td></tr>
</table>
</div>

<h3>一、在巴黎第六大学的布朗运动</h3>
<p>维尔纳生于科隆，父母在他九个月大时迁往法国，他 1977 年成为法国公民。中学在凡尔赛的 Hoche 中学读预科，1987 至 1991 年就读巴黎高等师范学院，1993 年在巴黎第六大学（皮埃尔与玛丽·居里大学）取得博士学位，导师是让–弗朗索瓦·勒加尔，论文研究平面布朗运动的若干性质。1991 至 1997 年他在法国国家科学研究中心做研究，其间在剑桥做过为期两年的莱布尼茨研究员。此后的教职依次是巴黎南大学（1997–2013，同时自 2005 年起也在高师任教）、苏黎世联邦理工学院（2013–2023），现为剑桥大学 Rouse Ball 数学教授。</p>

<h3>二、随机 Loewner 演化：一条被驱动的曲线</h3>
<p>二维临界系统的界面——渗流的边界、伊辛模型的畴壁、回路擦除随机游走的轨迹——长期以来被物理学家认为在共形变换下不变，但缺少严格对象来描述它们。施拉姆提出的想法极为巧妙：用 Loewner 方程，由一维布朗运动作驱动，生成一族随机平面曲线，这就是随机 Loewner 演化（SLE）。维尔纳与劳勒、施拉姆一道把这套理论发展为可计算的工具，并由此解决了一个悬置多年的猜想：平面布朗运动的外边界（前沿）的豪斯多夫维数等于 $\frac{4}{3}$，这正是曼德布罗特早年的预测。三人因此共同获得 2006 年 SIAM 乔治·波利亚奖。他还与斯米尔诺夫合作，对二维渗流给出了临界指数的严格结果。</p>

<h3>三、共形不变性与共形圈丛</h3>
<p>在 SLE 之后，维尔纳继续推进这一方向：与劳勒、施拉姆证明回路擦除随机游走与一致生成树在标度极限下的共形不变性；独立构造了自回避闭路上的共形不变测度；与谢菲尔德合作给出共形圈丛（CLE）的马尔可夫刻画与"圈汤"构造。共形圈丛可以理解为 SLE 的多圈版本，它描述的是一整族互不相交的随机闭曲线，而不是单独一条——这正是临界平面模型中"所有界面同时存在"的情形。这些工作把共形场论对二维临界现象的预测，逐一翻译成概率论中可以证明的命题。</p>

<h3>四、影响与荣誉</h3>
<p>2006 年在马德里国际数学家大会上，维尔纳获颁菲尔兹奖，获奖理由是他对随机 Loewner 演化的发展、二维布朗运动的几何以及共形场论的贡献，他也是首位以概率论研究获此奖的数学家。此前他已获 1998 年罗洛·戴维森奖、1999 年法国科学院 Doistau–Blutet 奖、2000 年欧洲数学会奖、2001 年费马奖、2003 年雅克·埃尔布朗大奖与 2005 年 Loève 奖；2008 年当选法国科学院院士，后又当选德国利奥波德科学院院士、欧洲科学院院士及英国皇家学会外籍会员。他也长期投入数学普及，每年面向公众做多场演讲。二维随机几何在他手中成了一门精确的科学：那些看起来毛躁、无序的边界，其实服从一套由共形对称完全决定的法则。</p>
</div>
</div>

<div id="ar-mathfigures-panel-wigderson" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-wigderson">
<div class="agent-intro">
<h2>阿维·维格森：追问随机性究竟值多少的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1956–</td></tr>
<tr><td><strong>籍贯</strong></td><td>以色列（兼美国籍），海法</td></tr>
<tr><td><strong>身份</strong></td><td>数学家与理论计算机科学家；普林斯顿高等研究院 Herbert H. Maass 教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>困难性与随机性（与 Impagliazzo、Nisan）、零知识证明的普适性（与 Goldreich、Micali）、zig-zag 积与扩展图；2021年阿贝尔奖、2023年图灵奖</td></tr>
</table>
</div>

<h3>一、从海法到复杂性理论</h3>
<p>阿维·维格森1956年生于以色列海法，父母是纳粹大屠杀的幸存者。他毕业于海法的希伯来瑞利学校，1980年在以色列理工学院取得学士学位，随后赴普林斯顿大学，1983年在理查德·利普顿指导下以《计算复杂性研究》获博士学位。他先后在加州大学伯克利分校、IBM 阿尔马登研究中心与伯克利数学科学研究所做过短期工作，1986年回到以色列任耶路撒冷希伯来大学教职，1991年成为正教授；1999年他同时在普林斯顿高等研究院获得职位，2003年放弃希伯来大学的教席，全职转入高等研究院。他被认为是把计算复杂性理论从零散的技巧拓展成一个宏大领域的人。</p>

<h3>二、硬币可以被去掉吗</h3>
<p>维格森最关心的是随机性在计算中的地位。随机算法往往比确定性算法更简单、更快，可随机性本身是否真有价值？他与诺姆·尼桑、拉塞尔·因帕利亚佐一道给出了一个影响深远的结果：如果某个问题确实需要指数规模的电路才能计算（即相应的困难性假设成立），那么所有用掷硬币求解的多项式时间算法，都可以被去随机化为一个几乎同样快的确定性算法。换句话说，在允许某些假设的前提下，随机性是可以被"兑换"掉的。这一"困难性与随机性"的范式，把复杂性下界与算法设计这两件看似不相干的事焊接在了一起。</p>

<h3>三、零知识证明与扩展图</h3>
<p>他与奥德·戈德赖希、西尔维奥·米卡利合作证明：任何 NP 中的命题都可以用零知识（zero-knowledge）方式证明——验证者被说服，却得不到除了"命题为真"以外的任何信息。这既奠定了现代密码学中零知识证明的基础，也给出了深刻的复杂性后果。另一项标志性工作是他与奥默·赖因戈尔德、萨利尔·瓦德汗提出的 zig-zag 积：用小图的组合构造大图，得到强扩展图。这个把复杂性理论、图论与群论打通的工具，直接导向了赖因戈尔德关于无向连通性可在对数空间内求解的结果。</p>

<h3>四、影响与荣誉</h3>
<p>维格森1994年获内万林纳奖，2009年获哥德尔奖，2011年当选美国艺术与科学院院士，2013年当选美国国家科学院院士，2018年成为计算机协会会士，2019年获高德纳奖，2023年获迪杰斯特拉奖。2021年，他与拉兹洛·洛瓦兹共同获得阿贝尔奖，表彰两人"对理论计算机科学与离散数学的基础贡献，以及把他们塑造成现代数学中心领域的引领作用"；2023年，他又因"对计算理论中随机性的理解所做出的贡献"获图灵奖。他的学生包括多瑞特·阿哈罗诺夫与然·拉茨。在阿贝尔奖与图灵奖之间，维格森本人就是那个把数学与计算重新连成一片的人。</p>
</div>
</div>

<div id="ar-mathfigures-panel-villani" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-villani">
<div class="agent-intro">
<h2>塞德里克·维拉尼：替动力论方程写下收敛速率的法国数学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1973–</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，生于布里夫拉盖亚尔德（Brive-la-Gaillarde）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；里昂第一大学（原里昂高等师范学院）教授，2009 至 2017 年任巴黎亨利·庞加莱研究所所长</td></tr>
<tr><td><strong>代表成就</strong></td><td>与 Clément Mouhot 合作给出非线性朗道阻尼的第一个数学处理；与 Laurent Desvillettes 合作证明玻尔兹曼方程远离平衡初值向平衡态的快速收敛；在最优传输及其几何应用上的系统工作</td></tr>
</table>
</div>

<h3>一、高师、利翁与里昂</h3>
<p>维拉尼就读于路易大帝中学的预科班，1992 年以入学考试第四名的成绩进入巴黎高等师范学院，此后一直读到 1996 年，并留校任 agrégé préparateur。1998 年他在巴黎第九大学（Paris-Dauphine）获得博士学位，导师是 1994 年菲尔兹奖得主 Pierre-Louis Lions，博士论文正是关于玻尔兹曼方程的数学理论。2000 年他成为里昂高等师范学院数学教授，此后长期在里昂工作；2009 年 7 月起出任巴黎亨利·庞加莱研究所所长，直至 2017 年，把这家历史悠久的研究所办成了一个活跃的国际化平台。他曾在佐治亚理工学院、加州大学伯克利分校与普林斯顿高等研究院担任访问职位，研究方向横跨偏微分方程、黎曼几何与数学物理，而贯穿其中的主线始终是"一个系统如何走向平衡"。</p>

<h3>二、朗道阻尼：一种看不见的衰减</h3>
<p>等离子体物理中有一个奇异现象：即使不考虑粒子间的碰撞，电场扰动也会随时间衰减，这就是朗道在 1946 年预言的"朗道阻尼"（Landau damping）。其物理机制是波与粒子之间的共振能量交换：速度接近波相速度的粒子与波交换能量，宏观上表现为扰动的平滑衰减，而个体粒子并未损失能量，能量只是被"藏"进了速度分布的精细结构中。数学上的困难正在于此——要在傅里叶空间中控制那些不断积累的小分母，而牛顿迭代恰好提供了驯服它们的手段。维拉尼与 Clément Mouhot 合作，首次给出了非线性系统中朗道阻尼的严格数学处理，证明在解析或足够光滑（Gevrey 类）的初值条件下，扰动确实按预期衰减。这项工作把牛顿方法的收敛性、模式间的相互作用与等离子体回声等物理直觉全部翻译成可控的估计，技术难度极高，也是他 2010 年菲尔兹奖的核心依据之一。</p>

<h3>三、玻尔兹曼方程与最优传输</h3>
<p>他的另一条主线是玻尔兹曼方程，即稀薄气体动理论的基石方程。与 Laurent Desvillettes 合作，他首次证明了对于远离平衡的初值，方程的解会以何种速率趋于 Maxwell 平衡分布——此前人们只能处理接近平衡的小扰动情形。他还与 Giuseppe Toscani 合作研究相关的熵方法，证明了所谓的 Cercignani 猜想，即熵产生与熵之间的不等式；与 Radjesvarane Alexandre 合作讨论掠式碰撞的正则化效应，把 DiPerna–Lions 理论推广到奇异碰撞核。在最优传输方面，他与 Felix Otto 揭示了 Talagrand 浓度不等式、对数 Sobolev 不等式与扩散方程之间的深层联系；与 John Lott 合作，他为一般的度量测度空间定义了里奇曲率下界（即"曲率–维数"条件的综合表述），证明了该定义的稳定性，并解决了 Gromov 提出的若干公开问题。他的两卷本专著《最优传输：旧与新》至今是该领域的标准参考，围绕该主题开设的课程讲义也被广泛用于研究生教学。</p>

<h3>四、影响与荣誉</h3>
<p>2010 年维拉尼在海得拉巴获菲尔兹奖。此前他已获 2001 年路易·阿尔芒奖、2003 年法兰西学院 Peccot-Vimont 奖、2007 年法国科学院雅克·赫布兰奖、2008 年欧洲数学会奖，以及 2009 年的庞加莱奖与费马奖；2012 年当选欧洲科学院院士，2016 年当选宗座科学院院士。他的另一重身份是科普写作者：2012 年出版的《活着的定理》（Théorème vivant）以日记体记录了一个定理诞生的全部焦虑与狂喜，英译本名为《一个定理的诞生》，是罕见地把数学研究过程写得让外行也能读下去的作品；他还两次在英国皇家研究院发表公众演讲，并于 2016 年在温哥华的 TED 大会演讲。2017 年他当选法国国民议会议员（埃松省第五选区），任至 2022 年，并担任议会科技评估办公室副主席，成为法国数学界在媒体与政坛最具辨识度的发言人之一。他那标志性的 Byron 式长发、彩色领结与蜘蛛胸针，也为他赢得了"数学界的 Lady Gaga"这一戏称。</p>
</div>
</div>

<div id="ar-mathfigures-panel-witten" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-witten">
<div class="agent-intro">
<h2>威滕：用物理洞见改写数学的物理学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1951–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，生于马里兰州巴尔的摩</td></tr>
<tr><td><strong>身份</strong></td><td>理论物理学家；普林斯顿高等研究院自然科学学院查尔斯·西蒙尼教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>广义相对论正能定理的旋量证明；琼斯多项式的量子场论解释与拓扑量子场论；塞伯格–威滕理论与四维流形不变量；M 理论</td></tr>
</table>
</div>

<h3>一、从历史系到理论物理</h3>
<p>1951年8月26日，爱德华·威滕生于巴尔的摩一个犹太家庭，父亲<strong>路易斯·威滕</strong>是研究引力的理论物理学家。他少年时志在新闻与政治，曾在《新共和》《国家》上发表文章，1971年从布兰迪斯大学毕业时拿的是历史学学士、辅修语言学，随后为<strong>乔治·麦戈文</strong>的总统竞选工作了半年，又在密歇根大学读过一个学期的经济学研究生。1973年他进入普林斯顿大学攻读应用数学，很快转入物理系，1976年在<strong>戴维·格罗斯</strong>指导下获博士学位。此后他在哈佛大学做博士后与初级研究员，1980年至1987年任普林斯顿大学物理学教授，1987年起长期任职于普林斯顿高等研究院。</p>

<h3>二、正能定理与超对称</h3>
<p>威滕最早震动数学界的工作，是1981年对广义相对论<strong>正能定理</strong>的证明。该定理断言孤立引力系统的总能量非负，此前已由舍恩与丘成桐用极小曲面方法证明；威滕另辟蹊径，用旋量与超引力中的方法给出了一个简洁得多的新证明，展示了超对称思想在几何问题中的力量。紧接着他在1982年发表《超对称与莫尔斯理论》，用超对称量子力学的语言重塑莫尔斯不等式，把拓扑与谱分析之间的旧联系放在了一个全新的框架里。这类工作奠定了他此后几十年的基调：把物理学家手里那些"物理上显然"的直觉，翻译成数学家可以接受并进一步推进的严格陈述。</p>

<h3>三、琼斯多项式与四维流形</h3>
<p>1989年，威滕发表《量子场论与琼斯多项式》，指出琼斯多项式可以解释为三维<strong>陈–西蒙斯理论</strong>中威尔逊圈的期望值，即用费曼积分给出的一个拓扑不变量。这一解释不仅为琼斯多项式提供了全新的来源，也开启了他所称的<strong>拓扑量子场论</strong>（后人称"威滕型"），并派生出一系列新不变量。1990年，他把二维引力与模空间上的相交理论联系起来，提出后来所称的<strong>威滕猜想</strong>，由<strong>康采维奇</strong>在1992年证明。1994年，他与<strong>内森·塞伯格</strong>合作的塞伯格–威滕理论，从超对称规范场论中读出一组全新的四维流形不变量，其计算难度远低于唐纳森不变量，却在许多问题上给出同样甚至更强的结果。1995年，他提出<strong>M 理论</strong>的构想，把此前互不相容的五种超弦理论统一到一个框架之中，被视为该理论的实际奠基者。</p>

<h3>四、影响与荣誉</h3>
<p>1990年，威滕成为首位获得菲尔兹奖的物理学家。授奖辞称他反复以物理洞见的精彩应用，为数学界带来新的深刻定理——这句话几乎就是他学术生涯的写照。他的荣誉清单极长：1982年麦克阿瑟奖，1985年国际理论物理中心狄拉克奖章与爱因斯坦奖章，1986年艾伦·沃特曼奖，1998年丹尼·海涅曼奖与克莱因奖章，2000年内默斯数学奖，2001年克雷研究奖，2002年美国国家科学奖章，2005年哈维奖，2006年亨利·庞加莱奖，2008年克拉福德数学奖，2010年洛伦兹奖章与牛顿奖章，2012年基础物理突破奖，2014年京都奖。他1984年当选美国艺术与科学院院士，1988年当选美国国家科学院院士，1999年当选英国皇家学会外籍院士，2000年成为法国科学院准会员。他的学生包括瓦法、文小刚、古科夫等一批活跃在弦论与数学物理交界处的物理学家。</p>
</div>
</div>

<div id="ar-mathfigures-panel-viazovska" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-viazovska">
<div class="agent-intro">
<h2>玛丽娜·维亚佐夫斯卡：八维球堆积的终结者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1984–</td></tr>
<tr><td><strong>籍贯</strong></td><td>乌克兰，生于基辅</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；瑞士洛桑联邦理工学院（EPFL）教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>证明 E8 格给出八维空间中相同球体的最密堆积；与合作者解决二十四维的利奇格堆积；傅里叶分析中的插值与极值问题</td></tr>
</table>
</div>

<h3>一、基辅、波恩与模形式</h3>
<p>玛丽娜·维亚佐夫斯卡 1984 年生于乌克兰基辅。她中学时进入基辅一所专门培养自然科学人才的学校，本科毕业于基辅大学数学系，硕士就读于德国凯泽斯劳滕工业大学，随后在波恩大学马克斯·普朗克数学研究所取得博士学位，研究方向是模函数与特殊闭链。2012 至 2013 年间她在法国高等科学研究所做博士后。这段训练给了她一件关键武器：对模形式这一高度受限却又高度有力的对象家族，她有着近乎直觉的熟悉度，而日后解决球堆积问题的那把钥匙，正是一种特殊的模形式。</p>

<h3>二、八维：一只"魔函数"</h3>
<p>球堆积问题问的是：同样大小的球在给定维数的空间中，最多能占多大比例。三维的开普勒猜想直到近年才借助大量计算机验证被证明；而八维与二十四维反倒更早被解决，因为那里存在异常对称的格——E8 格与利奇格，它们的密度明显高于任何已知的随机构造。此前科恩与库马尔已用线性规划方法给出八维密度的一个上界，与 E8 格的密度极其接近，只差最后一步。2016 年，维亚佐夫斯卡完成了这一步：她构造出一个满足苛刻符号条件的辅助函数——一个由模形式拼装出的"魔函数"——使线性规划的上界恰好等于 E8 格的密度。问题就此关闭。</p>

<h3>三、二十四维与合作</h3>
<p>八维结果公布后，解决二十四维的竞赛随即开始。维亚佐夫斯卡与科恩（Henry Cohn）、库马尔（Abhinav Kumar）、米勒（Stephen Miller）、拉德琴科（Danylo Radchenko）组成团队，在极短的时间内完成了利奇格情形的证明。二十四维的情形更复杂，需要的是满足向量值条件的模形式，难度远非八维可比，这项工作也因此被视为对模形式构造能力的一次极限考验。除此之外，她在傅里叶分析中的极值问题与插值问题上也有重要贡献，包括球面点分布的能量极小化等问题，这些内容与堆积问题共享同一套技术骨架。</p>

<h3>四、影响与荣誉</h3>
<p>2022 年，维亚佐夫斯卡因"证明 E8 格给出八维空间中相同球体的最密堆积，并对相关的极值问题与傅里叶分析中的插值问题做出贡献"获颁菲尔兹奖，成为继伊朗数学家玛丽亚姆·米尔扎哈尼之后历史上第二位女性菲尔兹奖得主。此前她已获得塞勒姆奖、费马奖与数学新视野奖等一系列奖项。她的证明以洁净和出人意料著称：没有庞大的计算，只有一件被精确打磨的工具落在了正确的位置。在一个常被认为"需要暴力"的问题上，她给出的是一件手工艺品的解法。</p>
</div>
</div>

<div id="ar-mathfigures-panel-weil" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-weil">
<div class="agent-intro">
<h2>韦伊：把代数几何搬进数论的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1906–1998</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，巴黎</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；斯特拉斯堡大学、圣保罗大学、芝加哥大学、普林斯顿高等研究院</td></tr>
<tr><td><strong>代表成就</strong></td><td>韦伊猜想（有限域上代数簇的黎曼假设类比）与曲线情形的证明，《代数几何基础》，阿代尔环与韦伊群</td></tr>
</table>
</div>

<h3>一、从巴黎到阿拉哈巴德</h3>
<p>1906年5月6日生于巴黎一个阿尔萨斯犹太家庭，是哲学家西蒙娜·韦伊的兄长。他在巴黎、罗马与哥廷根求学，1928年获博士学位；在德国期间与卡尔·西格尔结下友谊。1930年起，他赴印度阿里格尔穆斯林大学任教两年，其后长期在斯特拉斯堡大学任教。他自1920年自学梵文，一生对古希腊拉丁文献、印度教与梵文文学保持浓厚兴趣。二战爆发时他正在北欧旅行，在芬兰因被误作间谍而遭逮捕；回到法国后又因兵役问题入狱，获释后于1941年赴美，先后在哈弗福德学院与利哈伊大学任教，1945至1947年任教于巴西圣保罗大学。</p>

<h3>二、韦伊猜想</h3>
<p>1949年，他提出后来被称为"韦伊猜想"的著名设想：把有限域上的代数簇与黎曼猜想作类比，设想存在一套上同调理论，使得该类簇在有限域扩张上点的个数可由一个ζ函数的零极点来控制。他本人在曲线的情形证明了关键的一步，所使用的主要工具是雅可比簇。这套猜想把数论、代数几何与拓扑推到同一张桌子上，此后二十余年成为代数几何的主线，并最终由德利涅（Pierre Deligne）在1970年代完成。</p>

<h3>三、数论与代数几何的统一</h3>
<p>他更大的贡献在于为这两个领域提供了共用的语言。《代数几何基础》给出了后来通行的抽象代数簇框架，让"在任意域上做几何"成为可以严格操作的事情；阿代尔环与类域论中的韦伊群，成为后来朗兰兹纲领的早期部件之一。他的抽象从不脱离算术的动机——对费马型方程与莫德尔猜想的持续关心，让他的理论始终带着具体的数论味道；他晚年写作的《数论：从汉穆拉比到勒让德》更是把这种历史感写得淋漓尽致。</p>

<h3>四、影响与荣誉</h3>
<p>他是布尔巴基学派的核心创始人之一，该学派1935年正式成立，深刻重塑了二十世纪数学的写作方式与组织方式。1979年获沃尔夫数学奖，授奖理由是他以富有启发性的方式把代数几何方法引入数论。他还获得京都奖（1994）与斯蒂尔奖（1980），1966年当选英国皇家学会外籍会员。1958年起任普林斯顿高等研究院教授直至1976年。1998年8月6日，他在普林斯顿逝世。</p>
</div>
</div>

<div id="ar-mathfigures-panel-venkatesh" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-venkatesh">
<div class="agent-intro">
<h2>阿克沙伊·文卡特什：数论与动力系统的综合者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1981–</td></tr>
<tr><td><strong>籍贯</strong></td><td>印度裔，澳大利亚公民（长期在美国任职），生于印度新德里</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿高等研究院教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>综合解析数论、齐性动力学、拓扑与表示论，解决算术对象等分布等长期悬置的问题</td></tr>
</table>
</div>

<h3>一、从珀斯到普林斯顿</h3>
<p>阿克沙伊·文卡特什 1981 年 11 月 21 日生于印度新德里，在澳大利亚珀斯长大。他 1997 年便在西澳大利亚大学取得数学与物理荣誉理学学士学位，随后赴普林斯顿大学，2002 年在彼得·萨纳克指导下获得博士学位，年仅二十岁。此后他历任麻省理工学院摩尔讲师、纽约大学柯朗数学科学研究所副教授，2008 年被斯坦福大学聘为教授，2018 年转任普林斯顿高等研究院教授。与他合作过的同行常说，他的阅读面之宽在同龄人中少有：数论、表示论、遍历理论、代数拓扑他都信手拈来，而正是这种宽度，构成了他所有重要工作的底色。</p>

<h3>二、让动力系统走进数论：等分布问题</h3>
<p>文卡特什最鲜明的贡献，是把齐性动力学的方法系统引入数论。所谓等分布问题，通俗地说，是问一族算术对象在空间中是否均匀地铺开——比如二次型的表示、格点在各种区域中的落点。传统解析数论在此类问题上常陷入繁复的估计，而齐性动力学提供了另一种视角：把计数问题翻译成一条轨道在齐性空间上的分布问题，再用混合性与刚性定理去控制它。文卡特什沿着这条路线，与合作者一起解决了若干悬置多年的林尼克型问题，把此前只能得到渐近上界的情形推进到精确的渐近公式，也让"动力学方法"成为解析数论的标准装备之一。</p>

<h3>三、拓扑、表示论与类群</h3>
<p>他的工作很少只用一个领域的工具。在类群的研究中，他与埃伦伯格（Jordan Ellenberg）合作，用表示论的方法给出数域类群中挠元数量的界，改进了此前长期停滞的结果；在算术群与局部对称空间方面，他与贝热龙（Nicolas Bergeron）等合作研究挠同调的增长，把拓扑不变量与自守形式的世界连接起来。近年来他还尝试把导出代数几何与同调代数的语言引入算术问题，探索"定量化上同调"的框架。这种跨域的能力，使他的论文常常同时出现在数论、表示论与几何的参考文献里。</p>

<h3>四、影响与荣誉</h3>
<p>2018 年，文卡特什因"综合解析数论、齐性动力学、拓扑与表示论，解决了诸如算术对象等分布等长期悬而未决的问题"获得菲尔兹奖。此后他于 2019 年当选英国皇家学会院士，2023 年当选美国国家科学院院士。他也是那种罕见的善于写作的数学家，讲义与综述以清晰、节制、结构感强著称，影响了许多后来者进入数论与动力系统的交叉地带。在年轻一代眼中，他代表了一种理想的数学人格：不追逐一时的热门，而是耐心地在几个领域之间修路。</p>
</div>
</div>

<div id="ar-mathfigures-panel-voevodsky" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-voevodsky">
<div class="agent-intro">
<h2>弗拉基米尔·沃埃沃德斯基：为代数簇造出同伦论的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1966–2017</td></tr>
<tr><td><strong>籍贯</strong></td><td>俄罗斯、美国，生于莫斯科，逝于美国普林斯顿</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿高等研究院教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>建立动机上同调与 $\mathbb{A}^1$ 同伦论，证明 Milnor 猜想与（motivic）Bloch–Kato 猜想；后期创立单价基础（univalent foundations）</td></tr>
</table>
</div>

<h3>一、一份改变方向的手稿</h3>
<p>沃埃沃德斯基的父亲是俄罗斯科学院核研究所高能轻子实验室的负责人，母亲是化学家。他在莫斯科大学读本科时被开除——理由是不去上课、成绩不合格。大学一年级时，他的第一位学术导师给他一份格罗滕迪克几个月前提交给 CNRS 的《纲领草案》（Esquisse d'un Programme）；为了读懂它，他专门学了法语，并由此开始了自己的研究。他没有正式的本科学位，却凭几篇独立发表的文章被推荐到哈佛，1992 年在戴维·卡日丹指导下获得博士学位。这条非典型的路径，预示了他此后对"什么才算一个可靠的证明"的执念。</p>

<h3>二、给代数几何装上同伦论</h3>
<p>代数簇的世界是刚性的：没有连续性，也就没有通常意义下的同伦。格罗滕迪克曾梦想，为代数簇构造的众多上同调理论都应当源自一个共同的"母理论"——motives 的理论。沃埃沃德斯基朝着这个梦想迈出了决定性的一步：他与法比安·莫雷尔一道为概形引入了同伦论，即所谓的 $\mathbb{A}^1$ 同伦论，把仿射线当成"区间"，从而在代数几何中定义出可收缩、可形变的概念。在这个框架上，他给出了现在公认正确形式的动机上同调，并与苏斯林、弗里德兰德合著《闭链、转移与动机同调理论》，把这一理论系统写出来。</p>

<h3>三、Milnor 猜想与 Bloch–Kato 猜想</h3>
<p>有了新工具，他攻下了一个具体的老问题：Milnor 猜想断言域的 Milnor K 理论与它的 étale 上同调之间存在一个自然同构。这个猜想连接着二次型理论、伽罗瓦上同调与代数 K 理论，此前久攻不下。沃埃沃德斯基用动机上同调给出了证明，这项成果直接为他带来了 2002 年的菲尔兹奖。2009 年 1 月，在法国高等科学研究所纪念格罗滕迪克的会议上，他宣布证明了完整的 Bloch–Kato 猜想，其最终证明于随后数年整理发表。德利涅曾回忆，初见动机上同调的基本定义时他认为"这太过天真，不可能行得通"，而事实是他错了。</p>

<h3>四、影响与荣誉</h3>
<p>1998 年柏林国际数学家大会上他作全会报告，2002 年在北京获菲尔兹奖，获奖理由是为代数簇发展新的上同调理论。自 2002 年起他任普林斯顿高等研究院教授。此后他做出了第二次、也许是更激进的转向：为马丁–洛夫类型论在单纯集中构造了单价模型，提出单价公理，倡导以同伦类型论为基础的"单价基础"，并主持开发 UniMath 形式化库，希望能让复杂数学证明由计算机逐行验证——他担心的是数学文献中会潜伏无人察觉的错误。2016 年哥德堡大学授予他荣誉博士学位。2017 年 9 月 30 日，他因动脉瘤在普林斯顿家中去世，年仅五十一岁。他的两座纪念碑立在相隔很远的地方：一座是动机上同调，一座是让机器也能读懂的数学基础。</p>
</div>
</div>

<div id="ar-mathfigures-panel-ngo" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-ngo">
<div class="agent-intro">
<h2>吴宝珠：为朗兰兹纲领补上基本引理的越南数学家</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1972–</td></tr>
<tr><td><strong>籍贯</strong></td><td>越南、法国双重国籍，生于河内</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；芝加哥大学 Francis and Rose Yuen 杰出服务教授，2011 年起兼任越南数学高级研究所（VIASM）科学主任</td></tr>
<tr><td><strong>代表成就</strong></td><td>2008 年给出李代数情形的基本引理证明，从而完成朗兰兹纲领中"基本引理"的全部情形；引入 Hitchin 纤维化与反常层（perverse sheaves）等代数几何方法</td></tr>
</table>
</div>

<h3>一、从河内天才少年到巴黎高师</h3>
<p>吴宝珠出生于河内一个知识分子家庭，父亲是力学研究所的物理学教授，母亲是一家草药医院的副主任医师。他的启蒙教育在一所由教育家创办的实验小学度过，十五岁考入河内自然科学大学附属天赋学生数学专修班；高中时期两度代表越南出战国际数学奥林匹克，均获金牌，其中一次取得满分——他是越南首位两获 IMO 金牌的中学生。中学毕业时他本打算去布达佩斯留学，却因东欧剧变后匈牙利取消了对越南学生的奖学金而计划落空。转机来自法国科学院常任秘书 Paul Germain 的一次登门拜访：他亲自到吴家劝说，并为这位少年争取到法国政府的奖学金。吴宝珠先是进入巴黎第六大学，1992 年考入巴黎高等师范学院，1997 年在巴黎第十一大学（Paris-Sud）取得博士学位，导师是 Gérard Laumon。</p>

<h3>二、基本引理：一座迟到了三十年的桥</h3>
<p>他因之获奖的工作，是朗兰兹纲领中那道被称为"基本引理"（fundamental lemma）的关卡。加拿大数学家 Robert Langlands 与 Diana Shelstad 在研究迹公式时，需要一个把不同群上的轨道积分联系起来的恒等式；它长期停留在猜想状态，却又是整套纲领能否运转的枢纽——因为稳定迹公式的比较，即把一个约化群的迹公式与其内窥群（endoscopic group）的稳定迹公式对齐，完全依赖这个恒等式。没有它，从迹公式通向自守表示分类与互反律的整条链条都只是空中楼阁。三十年间，无数人绕过它、假设它、或者只在特殊情形验证它。吴宝珠与 Laumon 先是在酉群情形取得突破，此后他独自在 2008 年证明了李代数情形的基本引理；结合 Jean-Loup Waldspurger 此前从该结果推出更强形式的推导，整个基本引理在所有情形下宣告完成。Peter Sarnak 对此有一个著名的比喻：就像河对岸的人一直在等着有人把桥扔过来，桥一搭上，对岸所有人三十年的工作突然都被证实了。</p>

<h3>三、Hitchin 纤维化与反常层的工具箱</h3>
<p>这项证明的威力来自方法的转换。原本是一个组合与数论味道极重的轨道积分恒等式，被他重新解释为一个几何问题：基本引理中出现的局部轨道积分，可以用 Hitchin 纤维化中出现的仿射 Springer 纤维来理解——粗略地说，那些积分被实现为某些几何对象上同调的计数，恒等式于是变成几何对象之间的等价。一旦把问题搬到这个舞台上，几何表示论的整套机器，尤其是反常层（perverse sheaves）的理论，就可以开动起来。这种"用代数几何的语言重述数论难题"的做法，是二十世纪末以来朗兰兹纲领最重要的技术转向之一，也让一批原本无法下手的轨道积分问题有了统一框架。他与 Laumon 的贡献在 2004 年获克莱数学研究所研究奖，其最终的通用证明被《时代》周刊列入 2009 年度十大科学发现。</p>

<h3>四、影响与荣誉</h3>
<p>2010 年 8 月，在海得拉巴的国际数学家大会上，吴宝珠成为首位获得菲尔兹奖的越南人。此前他已获得 2007 年的 Oberwolfach 奖与索菲·热尔曼奖，2011 年获法国荣誉军团骑士勋章，2012 年当选美国数学会会士。他的职业轨迹本身也像一座桥：1998 至 2005 年任职于巴黎第十三大学的 CNRS，2005 年成为巴黎第十一大学教授，同年以三十三岁的年龄成为越南历史上最年轻的教授；2007 年起同时在普林斯顿高等研究院与河内数学研究所工作，2010 年 9 月 1 日加入芝加哥大学。他一直致力于改善越南本土的研究条件，出任 VIASM 科学主任，参与青少年数学普及，还与作家合写过面向儿童的越南语数学读物。他曾说自己想做的，是在亚洲、欧洲与美洲之间搭起一条可以来回走动的通道——这一姿态也被媒体称为"三个大陆的教授"。</p>
</div>
</div>

<div id="ar-mathfigures-panel-uhlenbeck" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-uhlenbeck">
<div class="agent-intro">
<h2>卡伦·乌伦贝克：几何分析的奠基者与首位女性阿贝尔奖得主</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1942–</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，俄亥俄州克利夫兰</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；得克萨斯大学奥斯汀分校数学荣休教授，普林斯顿高等研究院杰出访问教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>调和映射的存在性与泡泡树紧化（与 Sacks）、规范场的紧性与库仑规范、杨–米尔斯方程的小能量正则性；2019年阿贝尔奖</td></tr>
</table>
</div>

<h3>一、从变分法到几何分析</h3>
<p>卡伦·乌伦贝克1942年生于俄亥俄州克利夫兰，父亲是工程师，母亲是教师兼画家。她1964年在密歇根大学取得学士学位，随后进入纽约大学库朗研究所，又随丈夫转往布兰迪斯大学，1966年获硕士学位、1968年获博士学位，导师是理查德·帕莱斯，论文题为《变分法与整体分析》。毕业后她曾在麻省理工学院与加州大学伯克利分校做临时职位；碍于当时大学普遍实行的"反裙带"规则，夫妻二人很难在同一所学校同时获得教职，她直到1971年才在伊利诺伊大学厄巴纳-香槟分校获得正式职位，1976年转往该校芝加哥分校，此后又任教于芝加哥大学，最终长期任职于得克萨斯大学奥斯汀分校，担任 Sid W. Richardson 基金会 Regents 讲席。</p>

<h3>二、泡泡树：把奇点看见</h3>
<p>她与乔纳森·萨克斯在1981年的合作回答了一个基本问题：给定黎曼流形，二维球面到其中的极小浸入（或调和映射）是否存在。困难在于，一列能量有界的调和映射并不紧——能量会在某些点上集中，形成"气泡"，气泡上还会长出新的气泡。乌伦贝克与萨克斯给出了这种"泡泡树"（bubble tree）结构的精确描述：能量在有限多个尺度上分层集中，剥去这些气泡之后剩下的部分光滑收敛。这一图景后来成为几何分析的标准范式，从杨–米尔斯场到平均曲率流，凡遇序列紧性失效之处，人们都会想起这个层层剥离的分级结构。</p>

<h3>三、规范理论与杨–米尔斯方程</h3>
<p>在规范理论方面，乌伦贝克的贡献同样是基础性的。她证明了当曲率满足适当的可积条件时，可以选取规范使联络获得所需的正则性（通常称为乌伦贝克紧性定理与库仑规范的存在性），这使"取一列联络的极限"成为合法操作，为唐纳森等人用规范理论研究四维流形铺平了道路。1982年她又给出了杨–米尔斯方程的小能量正则性定理：只要能量足够小，弱解便是光滑的，奇点不可能凭空出现。她还研究了到李群的调和映射与手征模型，这类工作把她带进了可积系统的领域。</p>

<h3>四、影响与荣誉</h3>
<p>乌伦贝克1983年获麦克阿瑟奖，1986年当选美国国家科学院院士，1988年作诺特讲座，2000年获美国国家科学奖章，2007年获斯蒂尔奖；1990年她在京都国际数学家大会上作全体报告，而在此之前仅有埃米·诺特在1932年作过女性数学家的全体报告。2019年，她因"对几何偏微分方程、规范理论与可积系统的开创性成就"成为阿贝尔奖首位女性得主，2020年再获斯蒂尔奖。她把一半奖金捐给了鼓励女性与少数群体从事数学研究的机构，并参与创办了帕克城数学研究所与普林斯顿高等研究院的"女性与数学"项目。</p>
</div>
</div>

<div id="ar-mathfigures-panel-kodaira" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-kodaira">
<div class="agent-intro">
<h2>小平邦彦：代数几何日本学派的开创者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1915–1997</td></tr>
<tr><td><strong>籍贯</strong></td><td>日本，生于东京</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；东京大学、学习院大学（曾任教于普林斯顿大学、斯坦福大学）</td></tr>
<tr><td><strong>代表成就</strong></td><td>调和积分理论与凯勒流形；小平消灭定理与小平嵌入定理；小平–斯潘塞形变理论；紧复曲面分类</td></tr>
</table>
</div>

<h3>一、两次毕业</h3>
<p>1915年小平邦彦生于东京。1935年他进入东京帝国大学数学科，1938年毕业后又转入物理学科读了三年，1941年再度毕业——先数学后物理的训练，在他后来的工作中留下了痕迹。战争年代他在近乎隔绝的条件下自学，独自啃下了当时还很艰深的霍奇理论。1949年，他以关于黎曼流形中调和场的工作获东京大学理学博士学位；同年应外尔邀请赴普林斯顿高等研究院。此后他先后任教于约翰斯·霍普金斯大学、普林斯顿大学、哈佛大学和斯坦福大学。</p>

<h3>二、调和积分与凯勒流形</h3>
<p>他在日本完成的关于调和积分的三篇论文，是对霍奇理论的重新奠基。霍奇本人的表述带有旧时代分析学的痕迹，小平把它与算子理论、继而与层上同调的现代技术对齐：他用层上同调处理调和积分，得到了紧凯勒流形上的一系列消灭与嵌入结果，并由此证明这类流形其实是霍奇流形，可以嵌入复射影空间。1954年，他因这些工作获得菲尔兹奖，成为首位获此奖的日本人。</p>

<h3>三、消灭定理、嵌入定理与曲面分类</h3>
<p>以他命名的小平消灭定理与小平嵌入定理，至今仍是代数几何的基本工具。1950年代末，他与斯潘塞合作，把黎曼关于模数的思想推广为高维复结构的形变理论，识别出控制形变的层上同调群，从而说明模空间在一般情况下的维数与障碍所在——这就是小平–斯潘塞理论，也间接影响了后来格罗腾迪克那套风格迥异的方案。再往后，他转向紧复解析曲面的结构与分类，用一个不变量（小平维数）把曲面划分为有理曲面、椭圆曲面、K3曲面等类型，并为每一类建立了极小模型。</p>

<h3>四、影响与荣誉</h3>
<p>1967年小平回到日本，任东京大学教授，1975年退休后受聘于学习院大学。他是代数几何日本学派的奠基人，门下培养了贝利、饭高茂、宫冈洋一等一代数学家；晚年他还深度参与了日本的数学教育改革，并留下《解析入门》《复分析》等教材。除1954年的菲尔兹奖外，他还获得1957年日本学士院奖与文化勋章，1984/85年度沃尔夫数学奖，并当选日本学士院会员以及美国国家科学院外籍院士。1997年7月，他在山梨县甲府市去世。</p>
</div>
</div>

<div id="ar-mathfigures-panel-hirzebruch" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-hirzebruch">
<div class="agent-intro">
<h2>弗里德里希·希策布鲁赫：德国数学的重建者与连接者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1927–2012</td></tr>
<tr><td><strong>籍贯</strong></td><td>德国，生于威斯特法伦的哈姆</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；波恩大学教授，波恩马克斯·普朗克数学研究所创始所长</td></tr>
<tr><td><strong>代表成就</strong></td><td>高维黎曼–罗赫定理；符号差定理；与阿蒂亚共同开创拓扑 K 理论</td></tr>
</table>
</div>

<h3>一、战后德国的数学起点</h3>
<p>希策布鲁赫 1927 年生于德国威斯特法伦的哈姆，父亲是一所中学的校长兼数学教师。1945 年他进入明斯特大学学习数学与物理，随后到苏黎世联邦理工学院，在霍普夫（Heinz Hopf）门下学习拓扑，1950 年在明斯特取得博士学位，论文关于四维黎曼曲面。1952 至 1954 年他在普林斯顿高等研究院工作——那两年正是法国学派把层论与示性类引入拓扑与复分析的时期，他几乎第一时间拿到了这些新工具。1955 至 1956 年他任普林斯顿大学副教授，1956 年起任波恩大学教授，直至 1993 年退休。</p>

<h3>二、黎曼–罗赫定理与符号差定理</h3>
<p>经典的黎曼–罗赫定理只适用于代数曲线，它给出曲线上线性系维数与亏格之间的关系。把它推广到任意维的代数簇，是代数几何的中心难题之一。1954 年，希策布鲁赫证明了高维的黎曼–罗赫定理：等式的一侧是代数几何中的不变量（层的欧拉示性数），另一侧是可以由陈类与托德类算出的拓扑量。为达成这一步，他先证明了符号差定理，把可微流形的符号差用庞特里亚金数表示出来。这两条结果被写进 1956 年的专著《代数几何中的拓扑方法》，成为后来阿蒂亚–辛格指标定理的直接先声：没有希策布鲁赫的公式，指标定理就没有可供推广的原型。</p>

<h3>三、K 理论与数论的汇合</h3>
<p>1950 年代末，希策布鲁赫与阿蒂亚合作把拓扑 K 理论引入几何研究，并给出微分流形上的黎曼–罗赫定理，这项工作让 K 理论从代数几何中的一种工具，变成拓扑学里的标准语言。另一方面，他把模形式、希尔伯特模曲面与代数数论连接到一起：他与扎吉尔（Don Zagier）合写的《阿蒂亚–辛格指标定理与初等数论》，把指标定理的求值变成数论中具体恒等式的来源。这种"拓扑提供公式、数论提供证据"的往返，是他后期工作的鲜明风格，也使波恩成为少数几个同时精通拓扑与数论的地方。</p>

<h3>四、波恩与数学的组织者</h3>
<p>希策布鲁赫被公认为二战后重建德国数学的关键人物。1957 年他在波恩创办一年一度的工作会议（Arbeitstagung），只讲最新的进展，很快成为欧洲最具影响力的会议之一；1969 年他发起"理论数学"特别研究领域；1980 年马克斯·普朗克学会在波恩设立数学研究所，由他出任首任所长直至 1995 年。他还参与重建了位于黑森林的奥伯沃尔法赫数学研究所。他两度出任德国数学会主席，1990 年任两德统一后的首届联合会主席，1990 至 1994 年任欧洲数学会首任主席。他获得 1988 年沃尔夫数学奖、1989 年罗巴切夫斯基奖与 2004 年德国数学会康托尔奖章。2012 年他在波恩去世。</p>
</div>
</div>

<div id="ar-mathfigures-panel-hilbert" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-hilbert">
<div class="agent-intro">
<h2>希尔伯特：数学的"总司令"与23个问题</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>国籍</strong></td><td>德国（柯尼斯堡—哥廷根）</td></tr>
<tr><td><strong>生卒</strong></td><td>1862—1943</td></tr>
<tr><td><strong>代表成就</strong></td><td>1900年提出23个数学问题；希尔伯特空间；几何基础公理化</td></tr>
</table>
<figure class="fig-photo"><img src="/images/mathematicians/hilbert.webp" width="339" height="460" alt="希尔伯特" loading="lazy"><figcaption>希尔伯特</figcaption></figure>
</div>

<h3>一、1900年巴黎演讲：23个问题</h3>
<p>1900年8月，38岁的希尔伯特在国际数学家大会上提出<strong>23个悬而未决的问题</strong>，为20世纪数学制定了议程——此后百年，解决一个希尔伯特问题就意味着登上数学的珠峰。演讲结尾的信念刻在他的墓碑上："<strong>我们必须知道，我们必将知道。</strong>（Wir müssen wissen. Wir werden wissen.）"</p>

<h3>二、几何基础与希尔伯特空间</h3>
<p>1899年《几何基础》以严格方式重建欧几里得几何，为"公理化方法"树立范式，其名言："<strong>必须能够在思想上用桌子、椅子、啤酒杯代替点、线、面</strong>"。他把积分方程升华为无限维空间理论——<strong>希尔伯特空间</strong>，20年后成为量子力学的数学语言。</p>

<h3>三、数学基础之争</h3>
<p>面对集合论悖论，他发起"<strong>形式主义纲领</strong>"，试图把数学形式化并证明其无矛盾性。1931年<strong>哥德尔不完备定理</strong>表明该纲领在原形式下无法完全实现——但它激发的元数学研究恰恰催生了图灵与计算机。他将哥廷根建成了"世界数学的麦加"。</p>
</div>
</div>

<div id="ar-mathfigures-panel-siegel" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-siegel">
<div class="agent-intro">
<h2>西格尔：数论、模函数与三体问题的三面手</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1896–1981</td></tr>
<tr><td><strong>籍贯</strong></td><td>德国，柏林</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；法兰克福大学、哥廷根大学、普林斯顿高等研究院</td></tr>
<tr><td><strong>代表成就</strong></td><td>丢番图逼近中的西格尔改进（图埃—西格尔—罗斯链条），二次型的解析理论，多复变自守函数与西格尔模形式，《天体力学讲义》</td></tr>
</table>
</div>

<h3>一、一位孤高的数论家</h3>
<p>1896年12月31日生于柏林，1915年入柏林大学，在弗罗贝尼乌斯的影响下起步，随后转赴哥廷根，受希尔伯特、兰道与外尔的熏陶，1920年在哥廷根获博士学位。他曾自述，一度因为哈代在数论上的光芒而想放弃数论、转向天体力学——正是这次转向，使他后来在三体问题的"小分母"困难上做出划时代的工作。他先后执教于法兰克福大学与哥廷根大学，1940年赴普林斯顿高等研究院，1945年任该所教授，1951年5月回到哥廷根，1960年退休，1981年4月在哥廷根逝世。</p>

<h3>二、丢番图逼近与二次型</h3>
<p>在丢番图逼近中，他改进了图埃（Axel Thue）关于代数数何以被有理数逼近的结果，把指数推进到约 $2\sqrt{n}$ 的量级；此后戴森（Freeman Dyson）与罗斯（Klaus Roth）继续改进，罗斯最终以最佳指数为这条"图埃—西格尔—戴森—罗斯"的链条收官，并因此获菲尔兹奖。他还系统发展了二次型的解析理论，在希尔伯特第十一问题（系数为代数数的二次型）的方向上取得重要结果，并在超越数论中研究了一类重要的函数。</p>

<h3>三、多复变与天体力学的另一面</h3>
<p>在多复变函数论中，他给出了典型域的分类，研究辛几何与多变量自守函数，为离散子群及相应的模函数论开辟了方向；今天所说的西格尔上半空间与西格尔模形式即以他命名。他与莫泽（Jürgen Moser）合著的《天体力学讲义》（1971），把三体问题中拉格朗日特解邻近的渐近行为处理得干净利落，其中的小分母估计至今仍是标准工具。数论与天体力学看上去相距很远，在他手里却被同一套解析估计贯穿起来。</p>

<h3>四、影响与荣誉</h3>
<p>1978年，他与伊斯拉埃尔·盖尔范德共同获得首届沃尔夫数学奖，授奖理由提到他对数论、多复变函数论与天体力学的贡献。1968年他当选美国国家科学院外籍院士。西格尔治学极严、性格孤高，却留下大量讲义；他的四卷本《西格尔全集》与那些讲义，使哥廷根的数论传统在战后得以延续并重新成为世界性的中心之一。</p>
</div>
</div>

<div id="ar-mathfigures-panel-sinai" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-sinai">
<div class="agent-intro">
<h2>雅科夫·西奈：为混沌标上刻度的遍历论巨匠</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1935–</td></tr>
<tr><td><strong>籍贯</strong></td><td>俄罗斯/美国，生于苏联莫斯科</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿大学、莫斯科大学、朗道理论物理研究所</td></tr>
<tr><td><strong>代表成就</strong></td><td>柯尔莫哥洛夫–西奈熵；西奈台球及其遍历性证明；Sinai–Ruelle–Bowen 测度；Pirogov–Sinai 理论；西奈随机游动</td></tr>
</table>
</div>

<h3>一、莫斯科的几何学血脉</h3>
<p>西奈1935年9月21日生于莫斯科一个学术家庭。外祖父韦尼阿明·卡甘曾任莫斯科大学微分几何教研室主任，对他影响至深；父母都是微生物学家。他在莫斯科大学读完本科与硕士，1960年获博士学位，导师是安德烈·柯尔莫哥洛夫。此后他长期在莫斯科大学工作，1971年起任教授，同时兼任苏联科学院朗道理论物理研究所高级研究员。1993年，他加入普林斯顿大学数学系任教授，并曾出任托马斯·琼斯数学物理讲席教授。</p>

<h3>二、柯尔莫哥洛夫–西奈熵</h3>
<p>一个决定性系统，尽管理论上由初值完全确定，实际演化却可能难以预测。西奈与柯尔莫哥洛夫给出了衡量这种"不可预测程度"的尺度——柯尔莫哥洛夫–西奈熵：熵为零的系统完全可预测，熵为正的系统其不可预测程度由熵值大小定量刻画。这一概念把遍历论从"是否遍历"的定性判断推进到定量层次，也让"混沌"一词从此有了可计算的内涵。它如今是动力系统、信息论与统计物理共用的基本语言。</p>

<h3>三、西奈台球与遍历性</h3>
<p>1963年，西奈提出"动力台球"：一个粒子在正方形边界内无损弹射，正中再放一个圆形障碍。他证明了这个系统的遍历性——从长时间看，粒子在任一区域停留的时间比例近似正比于该区域的面积。这是人类首次严格证明一个具体的、由确定性方程支配的动力学系统具有遍历性，为统计力学的遍历假设提供了第一个真实模型。同年他还宣布证明了限制在盒子中的 n 个硬球气体的遍历假设，但完整证明始终没有发表；1987年他坦言当年的宣布为时过早，而这一问题至今仍未解决。</p>

<h3>四、影响与荣誉</h3>
<p>西奈是俄罗斯科学院、美国国家科学院、美国艺术与科学院、欧洲科学院与英国皇家学会等机构的成员。他先后获1986年玻尔兹曼奖章、1990年 Dannie Heineman 数学物理奖、1992年狄拉克奖、1997年沃尔夫数学奖、2002年 Nemmers 奖、2008年拉格朗日奖、2009年亨利·庞加莱奖、2013年美国数学会 Steele 终身成就奖与2015年 Marcel Grossmann 奖。2014年，他因"对动力系统、遍历论与数学物理的根本贡献"获阿贝尔奖。他指导过五十余位学生，其中多人已成为各自领域的领军人物，形成了影响深远的学派。</p>
</div>
</div>

<div id="ar-mathfigures-panel-singer" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-singer">
<div class="agent-intro">
<h2>艾沙多·辛格：指标定理的缔造者与数学物理的架桥人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1924–2021</td></tr>
<tr><td><strong>籍贯</strong></td><td>美国，密歇根州底特律</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；麻省理工学院、加州大学伯克利分校</td></tr>
<tr><td><strong>代表成就</strong></td><td>与 Michael Atiyah 共同证明阿蒂亚–辛格指标定理（1962）；Ambrose–Singer 定理；Ray–Singer 挠率；Kadison–Singer 问题</td></tr>
</table>
</div>

<h3>一、从底特律到芝加哥：一条绕行的路</h3>
<p>辛格1924年5月3日生于底特律，父母是波兰犹太移民，父亲做印刷工、母亲做裁缝。他在密歇根大学读物理，1944年提前毕业从军，赴菲律宾任雷达军官：白天为菲律宾陆军办通信学校，夜里靠函授课程补数学，只为读懂相对论与量子力学。退伍后他进入芝加哥大学，本打算回到物理，却被数学留住，1948年获硕士学位，1950年在 Irving Segal 指导下获博士学位。此后他先后任教于加州大学洛杉矶分校、哥伦比亚大学与普林斯顿大学，并在高等研究院工作一年，1956年回到麻省理工学院，1970年起担任诺伯特·维纳教授，1979年转赴加州大学伯克利分校任米勒教授。</p>

<h3>二、阿蒂亚–辛格指标定理</h3>
<p>1962年，辛格与英国数学家迈克尔·阿蒂亚合作证明的指标定理，是二十世纪数学的分水岭之一。它说的是：一个椭圆微分算子的解析指标——方程解空间维数与余核维数之差——完全可以由底流形与向量丛的拓扑不变量（示性类）算出来。一边是分析、一边是拓扑，两边算出的数必须相等，这本身就是一条极强的约束。这条等式不仅把此前互不搭界的领域焊在一起，也为后来规范场论中的反常消去、瞬子计数等物理问题提供了现成的数学语言。</p>

<h3>三、挠率、规范场与"卡迪森–辛格"</h3>
<p>除指标定理外，辛格的名字还散布在 Ambrose–Singer 定理、Ray–Singer 挠率、Atiyah–Hitchin–Singer 定理以及卡迪森–辛格问题之上。1980年代以后，他与阿蒂亚的工作与理论物理深度纠缠：指标定理被物理学家重新发现为描述反常与指数定理的自然工具，辛格本人也积极推动数学与物理的对话。1980年代初在伯克利任教期间，他与陈省身、Calvin Moore 共同发起创办了美国国家数学科学研究所（MSRI），为美国数学界留下了一处持久的公共平台。</p>

<h3>四、影响与荣誉</h3>
<p>辛格是美国国家科学院、美国艺术与科学院、美国哲学会与挪威科学与文学院院士。他获1969年 Bôcher 纪念奖、1983年美国国家科学奖章、1988年 Wigner 奖章以及2000年美国数学会 Steele 终身成就奖。2004年，他与阿蒂亚共同获得第二届阿贝尔奖，授奖辞称他们"发现并证明了指标定理，把拓扑学、几何学与分析结合到一起，并在数学与理论物理之间架设新桥梁方面发挥了杰出作用"。他共指导数十位博士生，其中多人成为几何与拓扑领域的中坚。2021年2月11日，辛格在马萨诸塞州逝世，享年96岁。</p>
</div>
</div>

<div id="ar-mathfigures-panel-huh" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-huh">
<div class="agent-intro">
<h2>许埈珥：把霍奇理论带进组合学</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1983–</td></tr>
<tr><td><strong>籍贯</strong></td><td>韩裔美国，生于美国加利福尼亚州</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；普林斯顿大学教授，韩国高等科学院（KIAS）杰出教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>证明几何格的 Dowling–Wilson 猜想与拟阵的 Heron–Rota–Welsh 猜想，发展洛伦兹多项式理论，证明强梅森猜想</td></tr>
</table>
</div>

<h3>一、从奇点理论走进组合学</h3>
<p>许埈珥 1983 年生于美国加利福尼亚，两岁时随家人回到韩国。他本科就读于首尔大学，主修物理与天文，成绩并不出众，一度考虑做科学记者。转折出现在他读本科最后一年：菲尔兹奖得主广中平祐到首尔大学开设一年的代数几何课程，讲奇异点理论。一百多名学生陆续退课，他留了下来，并自此跟随广中平祐读研究生。2009 年他在首尔大学取得硕士学位后赴美，先在伊利诺伊大学厄巴纳-香槟分校，后转至密歇根大学，2014 年在穆斯塔策（Mircea Mustață）指导下获得博士学位，论文题为关于拟阵与置换多面体簇上代数环的正性。他把奇点理论里那套关于"正性"的直觉，带进了原本属于离散数学的问题。</p>

<h3>二、色多项式与 Rota 猜想</h3>
<p>还在读博士期间，许埈珥就证明了悬置四十余年未被解决的里德–霍格猜想，它断言图的色多项式系数具有单峰性——先增后减，像一座山丘。这类"系数是单峰的""系数是对数凹的"命题，在组合学中到处都是，看似初等，却往往极难证明，因为它们缺少可用的代数结构。许埈珥与阿迪普拉西托（Karim Adiprasito）、卡茨（Eric Katz）合作，把拟阵特征多项式的对数凹性——即海伦–罗塔–威尔士猜想，也就是著名的罗塔猜想——转化为代数簇上某些类的正性问题，用霍奇理论中的硬莱夫谢茨定理一举解决。他还与王伯潼合作证明了几何格上的道林–威尔逊猜想。</p>

<h3>三、洛伦兹多项式：一座通用的桥</h3>
<p>更重要的是，这些结果背后的思想被提炼成了独立的理论。许埈珥与布兰登（Petter Brändén）共同发展了洛伦兹多项式理论：它统一了此前分散的多种"正性"或"凹性"证明，把连续变量与离散变量的处理方式放在同一套语言下。有了这座桥，许多原本被视为技术性、需要各自硬啃的组合不等式，变成了某种凸性条件的自然推论，强梅森猜想即在此框架下被证明。这套理论如今已是组合学与代数几何交叉研究的标准工具，其影响范围远超最初的那几个猜想。</p>

<h3>四、影响与荣誉</h3>
<p>2022 年，许埈珥因"把霍奇理论的思想带入组合学，证明几何格的道林–威尔逊猜想、拟阵的海伦–罗塔–威尔士猜想，发展洛伦兹多项式理论并证明强梅森猜想"获得菲尔兹奖，同年又获麦克阿瑟基金会的"天才奖"。此前他还获得布拉瓦尼克国家青年科学家奖与数学新视野奖。他的经历本身也成为一种象征：少年时数学成绩平平、一度想当诗人，中途被一道难题之外的东西——一位老师讲的课——吸引而转向数学。他常提醒年轻人，在恰当的时候懂得放弃，与坚持同样重要。</p>
</div>
</div>

<div id="ar-mathfigures-panel-arthur" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-arthur">
<div class="agent-intro">
<h2>詹姆斯·亚瑟：把迹公式铸成朗兰兹纲领重器的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1944–</td></tr>
<tr><td><strong>籍贯</strong></td><td>加拿大，安大略省哈密尔顿</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；多伦多大学教授，曾任美国数学会主席</td></tr>
<tr><td><strong>代表成就</strong></td><td>Arthur–Selberg 迹公式、Arthur 参数与 Arthur 猜想（A-包）、正交群与辛群自守表示的内窥分类</td></tr>
</table>
</div>

<h3>一、朗兰兹的学生</h3>
<p>1944 年 5 月 18 日，亚瑟生于加拿大安大略省哈密尔顿。1962 年他毕业于上加拿大学院，1966 年在多伦多大学获学士学位、1967 年获硕士学位，1970 年在耶鲁大学获博士学位，导师是 Robert Langlands，论文分析实秩为一的半单李群上的缓增分布。他在耶鲁任教至 1976 年，随后转赴杜克大学，1978 年起回到多伦多大学任教授。1976 至 2002 年间，他四次赴普林斯顿高等研究院做访问学者。他曾任美国数学会主席，并长期在国际数学联盟执委会与高等研究院理事会任职。他选择去耶鲁读博士，正是因为 Langlands 在那里；那篇关于实秩为一的半单李群上缓增分布的学位论文，把他直接放进了表示论与调和分析的交汇处，此后五十余年，他几乎没有离开过这块地方。</p>

<h3>二、Arthur–Selberg 迹公式</h3>
<p>Selberg 迹公式把谱的数据（拉普拉斯算子的本征值）与几何的数据（闭测地线的长度）用一个恒等式联系起来，但它最初只在秩为一的情形成立。亚瑟用数十年时间，把它推广到一般的约化群。这项工作之所以艰巨，是因为一般情形下公式的每一项都需要稳定化、需要与内窥群相互比较，还要处理非紧商空间带来的连续谱。他一步步建立起一般迹公式的完整形式——带权重的、稳定的、内窥的版本——使它成为朗兰兹纲领中最有力的工具之一。亚瑟本人说过，这个公式里那些有时显得古怪的量，如今看来各有其位置。这项工作的时间跨度本身就说明了难度：从 1970 年代的初步形式，到稳定迹公式与精细的内窥理论，他几乎是独自撑起了这条线，为整个领域提供了一件别人可以放心使用的重武器。</p>

<h3>三、Arthur 参数与内窥分类</h3>
<p>在推广迹公式的同时，亚瑟提出了一组以他命名的猜想，预言自守表示应当如何按 Arthur 参数分组——这些参数涉及一个假想的 Langlands 群的表示，并引入了 A-包的概念，用以刻画同一参数下所有相关的表示。2013 年，他出版专著《表示的内窥分类：正交群与辛群》，用迹公式证明了朗兰兹函子性原则在一些重要情形下的完整结论：正交群与辛群的自守表示可以被系统地分类。这本书被视为数十年来自守形式领域最重要的单项成果之一。此后他转向 Langlands 提出的"超越内窥"计划，试图用迹公式处理一般情形的函子性。A-包的意义在于，它把过去零散的、须逐个验证的自守表示组织成以参数为单位的族；有了这个组织方式，人们才得以讨论"哪些表示属于同一个包"这类此前根本无法表述的问题。</p>

<h3>四、影响与荣誉</h3>
<p>2015 年的沃尔夫数学奖表彰他关于迹公式的巨大工作，以及对自守表示理论的根本贡献。他 1987 年获加拿大皇家学会 Synge 奖，1993 年获加拿大数学会 Jeffery–Williams 奖，1997 年获 CRM–Fields–PIMS 奖与 Tory 奖章，1999 年获加拿大科学与工程金奖，2017 年获美国数学会终身成就斯蒂尔奖。他是加拿大皇家学会院士、英国皇家学会院士、美国艺术与科学院外籍荣誉院士与美国国家科学院外籍院士；1983 与 1998 年在国际数学家大会作报告，2014 年在首尔大会作全会报告，讲的就是 L 函数与自守表示。加拿大数学界把他视为二战之后本国最重要的数学家之一，他在多伦多度过的四十余年，也让这所大学成了表示论的重镇。亚瑟曾说自己小时候并非数学神童，支撑他走下来的是对数学"魔力与力量"的着迷——这种着迷最终变成了朗兰兹纲领上最重的一件工具。Langlands 本人曾专文介绍他的工作，题为《迹公式及其应用：詹姆斯·亚瑟的工作导引》；在多伦多，他主持的讨论班与夏季学校把一代年轻的表示论者带进了这个方向。</p>
</div>
</div>

<div id="ar-mathfigures-panel-ito" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-ito">
<div class="agent-intro">
<h2>伊藤清：为随机运动建立微积分的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1915–2008</td></tr>
<tr><td><strong>籍贯</strong></td><td>日本，生于三重县员辨郡（今员辨市）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；京都大学教授，京都大学数理解析研究所所长，后任康奈尔大学教授</td></tr>
<tr><td><strong>代表成就</strong></td><td>伊藤积分与伊藤公式；随机微分方程与扩散过程理论；随机分析的创立</td></tr>
</table>
</div>

<h3>一、布朗运动与无法定义的积分</h3>
<p>伊藤清 1915 年生于日本三重县，1938 年毕业于东京帝国大学理学部，1945 年获理学博士学位。他早年在政府统计部门任职，同时研读柯尔莫哥洛夫与保罗·莱维的概率论著作。1920 年代，维纳（Norbert Wiener）已经在数学上构造出布朗运动这一随机过程，但有一个障碍始终没有跨过：布朗运动的样本路径几乎处处不可求长，总变差无穷大，因此黎曼–斯蒂尔杰斯积分那套经典工具对它完全失效。人们可以对随机现象"写"出微分方程，却无法严格定义其中的积分项，整个理论就悬在了半空。战后他到名古屋帝国大学任教，正是从这里开始正面处理这个问题。</p>

<h3>二、伊藤积分与伊藤公式</h3>
<p>伊藤的做法是把积分改成一种极限：不要求逐条路径地求和，而是在均方收敛的意义上定义关于布朗运动的积分。这个定义出人意料地自然——只要被积函数在时间上"不偷看未来"，即只依赖到当前时刻为止的信息，积分就良定义，并且具有鞅性质。这就是今天所称的伊藤积分。随之而来的伊藤公式，是这套演算的链式法则：与牛顿–莱布尼茨公式相比，它多出一个二阶项。这一项不是技术上的修正，而是布朗运动本身涨落的直接后果；正是它让"对随机过程做微积分"成为一门可以操作的学科。这项工作是在第二次世界大战期间日本相对隔绝的学术环境中完成的，更显其分量。</p>

<h3>三、随机微分方程与扩散过程</h3>
<p>以此为基石，伊藤建立起随机微分方程的理论：方程的驱动项是布朗运动，解是一条随时间演化的随机轨迹，即今天所说的伊藤过程或扩散过程。1952 年他任京都大学教授，在那里讲授概率论并培养了一整代日本概率学者；此后他访问普林斯顿高等研究院、奥胡斯大学，1969 年赴康奈尔大学任教，1976 至 1979 年出任京都大学数理解析研究所所长。他还研究维纳混沌、莱维过程与一般扩散过程。二十世纪后期，这套理论走出了数学：它成为控制论、群体遗传学、滤波与信号处理的基本语言，最著名的例子是期权定价的布莱克–斯科尔斯模型。据说斯科尔斯见到伊藤时专门上前握手致意，称没有他的公式就没有那个模型。</p>

<h3>四、影响与荣誉</h3>
<p>伊藤清获得 1987 年沃尔夫数学奖，授奖理由是对纯概率论与应用概率论的根本贡献，尤其是随机微分与积分演算的创立。此后他又获 1998 年京都奖与 2006 年首届高斯奖，后者表彰其数学工作"在数学之外产生了广泛影响"。他是日本学士院会员、法国科学院外籍院士与美国国家科学院外籍院士，2003 年获选为文化功劳者，去世前数周获颁日本文化勋章。与许多理论数学家不同，他在生前就看到自己的抽象构造成为金融市场的日常工具。2008 年他在京都去世，享年 93 岁；随机分析如今已是概率论中最活跃的分支之一，而所有使用它的著作，开篇都要写下伊藤公式。</p>
</div>
</div>

<div id="ar-mathfigures-panel-yoccoz" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-yoccoz">
<div class="agent-intro">
<h2>约科兹：给稳定性划出精确边界的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1957–2016</td></tr>
<tr><td><strong>籍贯</strong></td><td>法国，生于巴黎</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；法兰西公学院"微分方程与动力系统"讲席教授，此前任教巴黎南大学</td></tr>
<tr><td><strong>代表成就</strong></td><td>圆微分同胚可微共轭的 Brjuno 条件及其最优性；约科兹拼图与二次多项式重正化；一维小除数理论与复 Brjuno 函数</td></tr>
</table>
</div>

<h3>一、路易大帝中学与巴黎高师</h3>
<p>1957年5月29日，让-克里斯托夫·约科兹生于巴黎。他就读于路易大帝中学，1973年在国际数学奥林匹克获银牌，1974年获金牌。1975年他进入巴黎高等师范学校（于尔姆），1977年通过数学教师资格考试，随后赴巴西服兵役。1985年，他在巴黎综合理工的洛朗–施瓦茨数学中心取得国家博士学位，论文题为《圆微分同胚的中心化子与可微共轭》，导师是<strong>米歇尔·埃尔曼</strong>。此后他任职于巴黎南大学（奥赛），1996年起出任法兰西公学院"微分方程与动力系统"讲席教授，直至去世。他是<strong>布尔巴基</strong>成员。2016年9月3日，他在巴黎去世，享年五十九岁。</p>

<h3>二、圆微分同胚：追寻最优的算术条件</h3>
<p>约科兹最著名的结果，回答了一个看似朴素却极难的问题：一个圆微分同胚何时能通过可微的（乃至解析的）变量替换，化为刚性旋转？答案取决于旋转数的算术性质——若它离有理数太近，线性化会因为"小除数"而失败。这一线索由西格尔、阿诺尔德与埃尔曼等人逐步推进，阿诺尔德给出了解析情形的丢番图条件，随后布鲁诺（Brjuno）改进了它。约科兹证明了<strong>Brjuno 条件</strong>不仅是充分的，也是必要的：它精确地划出了可线性化与不可线性化的分界，此前的任何条件都无法再放宽。这一工作体现于他1984年发表于《高等师范学校科学年刊》的论文，以及1995年那部长篇专著《一维小除数》中的《西格尔定理、布鲁诺数与二次多项式》。后来他又与马尔米、穆萨合作，把 Brjuno 函数推广到复数情形。</p>

<h3>三、约科兹拼图与复动力系统</h3>
<p>在复动力系统一侧，约科兹发明了今天通称<strong>约科兹拼图</strong>的组合工具：把平面按若干条轨道切割成小块，用这些小块的嵌套关系来编码轨道的动力学。凭借这套技术，他处理了二次多项式的重正化，证明了 Julia 集的局部连通性等一系列此前无法触及的结果，并揭示了许多参数空间中的刚性现象。法兰西公学院的悼文称他的证明"拥有罕见的解析威力、惊人的几何直觉与超凡的组合掌控力"。他还在实动力系统与双曲动力学中留下重要工作，例如与帕利斯合作研究大豪斯多夫维数双曲集的同宿相切，与卡勒森、琼斯合作的《朱利亚与约翰》，以及与勒卡尔韦合作关于平面同胚在不动点附近的指标定理。</p>

<h3>四、影响与荣誉</h3>
<p>1994年苏黎世国际数学家大会上，约科兹获菲尔兹奖，授奖理由是他证明了动力系统的稳定性性质——既包括太阳系那样的动力学稳定性，也包括系统在参数扰动下整体性质是否保持的结构稳定性。此前他已获1984年法国国家科研中心铜质奖章、1985年 IBM 数学奖、1987年法兰西公学院克洛德–安托万·佩科基金讲座、1988年<strong>萨勒姆奖</strong>；1990年在京都国际数学家大会作邀请报告，1991年获法国科学院雅费奖并成为法国大学研究院成员。1994年他当选法国科学院院士与巴西科学院院士，1995年获法国荣誉军团骑士勋位，1998年获巴西国家科学功绩大十字勋章，2004年成为发展中国家科学院（TWAS）通讯院士。他的学生包括克鲁瓦西耶、佩雷斯–马尔科、里韦拉–莱特列尔等一批活跃的动力系统学者；在悼念文章中，阿兰·康奈斯、艾蒂安·吉斯与皮埃尔-路易·利翁斯称他是"动力系统理论的世界领军者"。</p>
</div>
</div>

<div id="ar-mathfigures-panel-zelmanov" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-zelmanov">
<div class="agent-intro">
<h2>泽尔马诺夫：终结受限伯恩赛德问题的人</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1955–</td></tr>
<tr><td><strong>籍贯</strong></td><td>俄罗斯裔美国籍，生于苏联哈巴罗夫斯克（伯力）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；加州大学圣迭戈分校教授，后任南方科技大学讲席教授及杰曼诺夫数学中心主任</td></tr>
<tr><td><strong>代表成就</strong></td><td>解决受限伯恩赛德问题；建立无限维约当代数结构理论，解决约当–冯·诺依曼–维格纳问题；证明 Engel 恒等式蕴涵幂零性</td></tr>
</table>
</div>

<h3>一、新西伯利亚的代数训练</h3>
<p>1955年9月7日，叶菲姆·泽尔马诺夫生于苏联远东城市哈巴罗夫斯克的一个犹太家庭。1972年，十七岁的他进入新西伯利亚国立大学，1980年在该校获副博士学位，1985年在列宁格勒国立大学获科学博士学位。此后他在苏联科学院西伯利亚分院数学研究所工作，1987年离开苏联，1990年定居美国。他先后任威斯康星大学麦迪逊分校教授（1990–1994）、芝加哥大学教授（1994–1995）、耶鲁大学教授（1995–2002），2002年起任加州大学圣迭戈分校讲席教授，并兼任韩国高等科学研究院杰出教授。2019年他出任中国南方科技大学杰曼诺夫数学中心创始主任，2022年全职加入南科大任讲席教授。</p>

<h3>二、约当代数与 Engel 恒等式</h3>
<p>泽尔马诺夫的本行是<strong>非结合代数</strong>。他早期研究无限维情形下的<strong>约当代数</strong>，证明了格伦尼恒等式在某种意义下生成了所有成立的恒等式，并在此基础上把有限维约当代数的完整结构理论推广到无限维，从而解决了1938年由约当、冯·诺依曼与维格纳提出的经典问题——他们当年正是在寻找量子力学的代数基础时提出这一问题的。随后他转向<strong>李代数</strong>，在无限维情形下证明了 Engel 恒等式蕴涵幂零性，即著名的恩格尔问题的李代数版本。这项工作表面上是纯代数的内部结构问题，却意外地提供了打开群论中一扇大门的钥匙。</p>

<h3>三、受限伯恩赛德问题的解决</h3>
<p>1902年，伯恩赛德提出一个问题：一个有限生成、且每个元素的阶都整除某个固定指数的群，是否必为有限群？这就是<strong>伯恩赛德问题</strong>，后来被证明答案是否定的——存在这样的无限群。但它的"受限"版本依然悬置：给定生成元个数与指数，满足条件的有限群是否只有有限多个？等价地说，是否存在一个最大的有限 m 生成指数 n 群。泽尔马诺夫出人意料地用李代数的工具回答了它：1990年他解决了奇数指数的情形，1991年解决二群的情形，两者合起来给出完整的肯定答案。他的证明依赖上一节提到的那两项关于约当代数与恩格尔恒等式的结果，并把它们与限制李代数、Zassenhaus 滤过等结构结合起来。<strong>大英百科全书</strong>评论说，这一证明"大概不可能由传统的群论专家或李论专家完成"，正是他横跨多个代数分支的广阔视野，才让这桩悬了一个世纪的公案得以了结。他还著有《幂零环与周期群》（1992）。</p>

<h3>四、影响与荣誉</h3>
<p>1994年苏黎世国际数学家大会上，泽尔马诺夫获菲尔兹奖，表彰他解决了受限伯恩赛德问题——尽管这一问题并非他的主攻方向。此前他已在1983年华沙与1990年京都两次国际数学家大会上作邀请报告。他于1996年当选美国艺术与科学院院士，2001年当选<strong>美国国家科学院院士</strong>，时年四十七岁，是该院数学部最年轻的院士；他还是韩国科学院与工程院、西班牙皇家科学院的外籍院士，2012年成为美国数学会会士。此外他获加拿大阿尔伯塔大学（2011）、乌克兰基辅舍甫琴科国立大学（2012）、西班牙梅嫩德斯·佩拉约国际大学（2015）与英国林肯大学（2016）的荣誉博士学位，2004年主讲图兰纪念讲座。他指导学生包括马丁·卡萨博夫等人，并长期致力于在中国南方建设基础数学的国际研究平台。</p>
</div>
</div>

<div id="ar-mathfigures-panel-zariski" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-zariski">
<div class="agent-intro">
<h2>扎里斯基：给代数几何换上代数的骨架</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1899–1986</td></tr>
<tr><td><strong>籍贯</strong></td><td>俄罗斯帝国（后入美国籍），科布林（今属白俄罗斯）</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；约翰斯·霍普金斯大学、哈佛大学</td></tr>
<tr><td><strong>代表成就</strong></td><td>扎里斯基拓扑、正规簇、代数曲面与三维代数簇的奇点解消、扎里斯基主定理；《代数曲面》《交换代数》</td></tr>
</table>
</div>

<h3>一、从科布林到罗马</h3>
<p>1899年4月24日生于俄罗斯帝国科布林（今属白俄罗斯）的一个犹太家庭，原名 Osher Zaritsky。他先在基辅大学求学，1920年转赴罗马大学，成为意大利代数几何学派的弟子，师从卡斯泰尔诺沃（Guido Castelnuovo）、恩里克斯与塞韦里，1924年完成学位论文，题目属伽罗瓦理论——据说正是这篇论文发表时，他把名字改成了 Oscar Zariski。这段罗马岁月给了他一生受用的几何直觉，也给了他日后要克服的东西。</p>

<h3>二、用交换代数重写基础</h3>
<p>1927年，他在莱夫谢茨（Solomon Lefschetz）的帮助下赴美，任职于约翰斯·霍普金斯大学，1937年升为正教授。1935年他出版《代数曲面》，系统总结意大利学派的工作；也正是在写这本书的过程中，他对意大利学派在双有理几何上依赖直觉、缺乏严格性的做法彻底不满。他的解决办法是诉诸交换代数：扎里斯基拓扑、正规簇、赋值理论与"胀开"（blowing up），让奇点解消有了可靠的语言。他证明了代数曲面的奇点解消定理并提出正规簇的概念，进而攻克了三维代数簇的奇点解消难题。</p>

<h3>三、扎里斯基主定理与哈佛学派</h3>
<p>他提出的扎里斯基主定理，在1949年用交换代数重新表述，1951年又给出加强形式，后来被纳入格罗滕迪克的纲领并得到极大推广。1946至1947年他任伊利诺伊大学研究教授，1947年起任哈佛大学教授，直至1969年退休。他在哈佛培养出芒福德（David Mumford）、广中平祐、迈克尔·阿廷（Michael Artin）、阿比安卡（Shreeram Abhyankar）、哈茨霍恩（Robin Hartshorne）、克莱曼（Steven Kleiman）与李普曼（Joseph Lipman）等一批引领下一代代数几何的学生，因此被称为美国代数几何学派的奠基者。晚年他还与塞缪尔（Pierre Samuel）合著了两卷本《交换代数》。</p>

<h3>四、影响与荣誉</h3>
<p>他1944年因三维代数簇奇点解消的工作获美国数学会科尔代数奖，同年当选美国国家科学院院士，1965年获美国国家科学奖章，1981年与拉尔斯·阿尔福斯共同获沃尔夫数学奖，同年又获斯蒂尔奖；1969至1970年任美国数学会主席。他的主要论文收入四卷本《扎里斯基文集》。1986年7月4日，他在马萨诸塞州布鲁克莱恩逝世，享年87岁。</p>
</div>
</div>

<div id="ar-mathfigures-panel-sato" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathfigures-panel-sato">
<div class="agent-intro">
<h2>佐藤干夫：为分析装上一副代数眼镜的开创者</h2>
<div class="fig-head">
<table class="agent-table">
<tr><td><strong>生卒</strong></td><td>1928–2023</td></tr>
<tr><td><strong>籍贯</strong></td><td>日本，东京</td></tr>
<tr><td><strong>身份</strong></td><td>数学家；京都大学数理解析研究所教授（后任所长）</td></tr>
<tr><td><strong>代表成就</strong></td><td>超函数与微函数理论、D-模与完整量子场论、KP 层次与佐藤格拉斯曼流形、佐藤–泰特猜想、伯恩斯坦–佐藤多项式</td></tr>
</table>
</div>

<h3>一、从战后东京到超函数</h3>
<p>1928 年 4 月 18 日，佐藤干夫生于东京。战争严重扰乱了他的学业，东京大轰炸中家宅被烧毁，他当过送煤工，也当过中学教师，数学与物理主要靠自学。1952 年他在东京大学取得学士学位，此后在弥永昌吉的提携下进入东京大学，1963 年以《超函数论》获博士学位。他先后在大阪大学与东京大学任教，1970 年转入京都大学数理解析研究所，1987 至 1991 年任所长。1959 至 1960 年间，他提出超函数理论：把超函数定义为全纯函数的边界值，从而得到一个比分布更宽、且在微分运算下封闭的对象。这个想法在当时由泛函分析主导的分析学界显得格格不入，却开启了后来被称为"代数分析"的方向——用代数几何的工具处理分析问题。超函数比分布更宽，是因为它不要求对象由泛函给出，而只要求它是全纯函数的边界值；这个看似只是换一种说法的定义，实际上把分析放进了层与上同调的语言里。</p>

<h3>二、微局部分析与 D-模</h3>
<p>他接着引入微函数，把线性偏微分方程的研究推进到余切丛上：许多在底流形上看似局部的奇性，其实是余切丛中某个对象的投影，"微局部"这个视角由此诞生，波前集的概念也随之获得了自然的家。这条线索与格罗滕迪克的局部上同调理论汇合，最终长成今天的 D-模理论；其中的完整系统理论，刻画那些被过度决定到解空间有限维的微分方程组。1970 年代他与神保道夫、三轮哲二合作，发展出完整量子场论，用这套语言处理可积系统与关联函数。柏原正树、河合隆裕、三轮哲二、神保道夫等人构成所谓"佐藤学派"，把京都变成了这个方向的世界中心。所谓微局部，通俗地说就是"在相空间里看奇性"：一个解的奇点不仅有位置，还有方向；把方向一并记下来之后，线性偏微分方程的结构才第一次被完整地看见。</p>

<h3>三、孤子、KP 层次与佐藤–泰特猜想</h3>
<p>佐藤还把无穷维格拉斯曼流形引入了非线性波的研究。孤子方程——KdV 方程及其一整族推广——的解，可以编码为某个无穷维格拉斯曼流形上的点，方程的演化对应于流形上的一条简单动力学；这给出了 KP 层次（Kadomtsev–Petviashvili 层次）的统一图景，把此前零散的孤子技巧收拢成一个几何结构。在数论中，他与泰特提出的佐藤–泰特猜想，刻画椭圆曲线在没有复乘时 Frobenius 迹角分布的统计规律；这条猜想悬置了半个世纪，直到 2000 年代才被 Clozel、Harris、Shepherd-Barron 与 Taylor 等人证明，成为朗兰兹纲领的一大战果。他还因前齐性向量空间理论与伯恩斯坦–佐藤多项式闻名。佐藤的思考方式常常先于时代：他提出的概念往往要过十年甚至更久，才被别的领域以别的名字重新发现，这也是他的工作在很长一段时间里难以被归类的原因。</p>

<h3>四、影响与荣誉</h3>
<p>2002/3 年度沃尔夫数学奖表彰他创立"代数分析"——包括超函数与微函数理论、完整量子场论，以及孤子方程的统一理论。此前他获 1969 年朝日奖、1976 年日本学士院奖、1987 年藤原奖，1997 年获罗尔夫·肖克奖；1984 年被日本政府选定为文化功劳者，1993 年成为美国国家科学院外籍院士。他还曾在国际数学家大会上作全会报告。佐藤写作不多，也极少参加学术会议，从不刻意推广自己的想法；Pierre Schapira 后来说，他在数学上的胆量与格罗滕迪克相仿——敢于把分析当作代数几何来做。2023 年 1 月 9 日，他在京都的家中去世，享年九十四岁。美国数学会的纪念文集里，来自法国、日本与美国的多位数学家共同回忆了他；文中反复出现的一个词是"远见"——他发明的语言，如今写在 D-模与表示论的每一部标准教材里。</p>
</div>
</div>


</div>
</section>

<section id="ar-section-problems" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-problems" hidden>
<div class="ai-tabs">
  <div class="ai-tab-btns" role="tablist">
    <button type="button" class="ai-tab-btn tab-teal active" role="tab" id="tab-ar-mathproblems-panel-hilbert" aria-controls="ar-mathproblems-panel-hilbert" aria-selected="true" tabindex="0" onclick="switchMathProblems('hilbert', this)">希尔伯特23问题</button>
    <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathproblems-panel-millennium" aria-controls="ar-mathproblems-panel-millennium" aria-selected="false" tabindex="-1" onclick="switchMathProblems('millennium', this)">千禧年问题</button>
    <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathproblems-panel-fourcolor" aria-controls="ar-mathproblems-panel-fourcolor" aria-selected="false" tabindex="-1" onclick="switchMathProblems('fourcolor', this)">四色定理</button>
  </div>

  <div id="ar-mathproblems-panel-hilbert" class="ai-tab-panel active" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathproblems-panel-hilbert">
<h2>希尔伯特1900年23个问题</h2>

<h3>问题1：连续统基数问题</h3>
<p>研究实数集基数。连续统假设 CH：不存在严格介于可数与实数集基数之间的基数。<strong>结论：独立性结果。</strong>哥德尔（1938）证 CH 相容于 ZFC；Cohen（1963）用力迫法证 CH 不能被 ZFC 证明。</p>

<h3>问题2：算术公理的相容性</h3>
<p>证明算术公理不会导致矛盾。哥德尔第二不完备定理（1931）表明一致系统不能证明自身一致性；根岑（1936）以超穷归纳证明皮亚诺算术相容性，但方法超出有限主义。<strong>结论：否定解决（就希尔伯特原初目标）。</strong></p>

<h3>问题3：等底等高四面体体积相等</h3>
<p>体积相等的多面体是否总能剖分为彼此全等的多面体？德恩（1900）引入德恩不变量，证明答案是否定的。Sydler（1965）证明体积与德恩不变量共同刻画三维剪刀全等。<strong>结论：否定解决。</strong></p>

<h3>问题4：直线作为最短距离问题</h3>
<p>刻画哪些几何空间使直线成为最短连线（测地线）。Pogorelov（1973）解决了一个主要严格化版本。<strong>结论：取决于精确表述。</strong></p>

<h3>问题5：去掉可微性后的连续变换群</h3>
<p>局部欧氏拓扑群是否必为李群。Gleason–Montgomery–Zippin（1952）证明是；Yamabe（1953）简化证明。<strong>结论：已解决。</strong></p>

<h3>问题6：物理学公理的数学处理</h3>
<p>以公理方法处理概率论、力学等物理学。柯尔莫哥洛夫（1933）完成概率论公理化；量子力学公理化框架建立。2025年Deng–Hani–Ma（arXiv:2503.01839）从牛顿力学严格导出流体方程。<strong>结论：开放（纲领性）。</strong></p>

<h3>问题7：某些数的无理性与超越性</h3>
<p>Gelfond–Schneider 定理（1934）证明：若 α≠0,1 代数、β 代数无理，则 α^β 超越。<strong>结论：已解决（核心代数幂情形）。</strong></p>

<h3>问题8：素数问题与黎曼假设</h3>
<p>推进素数分布理论，黎曼假设断言所有非平凡零点位于临界线 Re(s)=1/2。<strong>结论：开放。</strong>数值验证已覆盖极高高度，但一般证明仍未出现。</p>

<h3>问题9：一般数域中的互反律</h3>
<p>对任意代数数域证明幂剩余一般互反律。Artin 互反律（1927）完成 Abel 情形。<strong>结论：已解决（Abel 情形）。</strong></p>

<h3>问题10：丢番图方程可解性判定</h3>
<p>是否存在判定任意整系数丢番图方程整数解可解性的通用算法。MRDP 定理（1970）表明不存在。<strong>结论：否定解决（不可判定）。</strong></p>

<h3>问题11：任意代数系数的二次型</h3>
<p>推广二次域中的二次型理论。Hasse–Minkowski 定理（1921–24）给出数域上二次型局部-整体分类。<strong>结论：已解决（核心）。</strong></p>

<h3>问题12：Kronecker 定理向任意代数域的推广</h3>
<p>将 Kronecker 关于 Abel 域的定理推广到任意代数域。类域论已给出抽象回答。<strong>结论：部分解决。</strong>显式类域论及非 Abel 推广仍开放。</p>

<h3>问题13：七次方程与二元函数</h3>
<p>七次方程的根能否表示为二元函数的有限复合。连续情形：肯定解决（Kolmogorov–Arnold）；光滑情形（C^k）：否定（Vituškin）；代数情形：仍未解决。<strong>结论：取决于精确表述。</strong></p>

<h3>问题14：某些完备函数系的有限性</h3>
<p>不变式环是否有限生成。Nagata（1959）构造反例。<strong>结论：否定解决。</strong></p>

<h3>问题15：Schubert 枚举演算的严格基础</h3>
<p>严格化 Schubert 枚举几何。相交理论与 Chow 环公理化完成基础性工作。<strong>结论：已解决（严格基础）。</strong></p>

<h3>问题16：实代数曲线与曲面的拓扑</h3>
<p>实代数曲线分支数与多项式向量场极限环。次数≤7曲线已完全分类；极限环最大数目仍开放。<strong>结论：部分解决。</strong></p>

<h3>问题17：定号形式表为平方和</h3>
<p>实闭域上正定元素可表为平方和（Artin 定理，1927）；Pfister（1967）给出 2^n 精确界。<strong>结论：已解决。</strong></p>

<h3>问题18：由全等多面体构造空间</h3>
<p>n维空间群有限分类（Bieberbach，1911）；最密球堆积：8维（Viazovska，2017）与24维（2017）已解决，其余维度仍开放。<strong>结论：部分解决。</strong></p>

<h3>问题19：变分问题解是否解析</h3>
<p>正则变分问题的解是否必然解析。椭圆条件下具有高度正则性。<strong>结论：已解决（核心获肯定）。</strong></p>

<h3>问题20：一般边值问题</h3>
<p>建立一般边值问题的可解性理论。椭圆型理论成熟；非线性、退化情形不能一并覆盖。<strong>结论：部分解决（纲领性）。</strong></p>

<h3>问题21：具有指定单值群的线性微分方程</h3>
<p>Riemann–Hilbert 问题。Deligne（1970）正则奇异情形解决；一般情形取决于精确表述。<strong>结论：取决于精确表述。</strong></p>

<h3>问题22：用自守函数单值化解析关系</h3>
<p>单连通 Riemann 曲面共形等价于球面/平面/圆盘（Poincaré–Koebe，1907）。<strong>结论：已解决。</strong></p>

<h3>问题23：进一步发展变分法方法</h3>
<p>继续发展变分法。催生直接法、极小曲面、几何测度论、最优控制等。<strong>结论：研究纲领。</strong></p>

<h3>总体格局</h3>
<p><strong>13题已有明确结论</strong>（8题肯定解决、4题否定解决、1题独立性结果）；3题取决于精确表述；6题含开放内容；1题属研究纲领。</p>

<h3>参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> D. Hilbert, <i>Mathematical Problems</i> (1902), https://www.gutenberg.org/cache/epub/71655/pg71655-images.html</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> I. Grattan-Guinness, "A Sideways Look at Hilbert's Twenty-three Problems", <i>Notices AMS</i> (2000).</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> MacTutor: "Hilbert's Problems", https://mathshistory.st-andrews.ac.uk/Extras/Hilbert_Problems</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> Encyclopedia of Mathematics: "Hilbert Problems".</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> Simons Foundation (2026): https://www.simonsfoundation.org/2026/06/18/solved-unsolved-and-unsolvable-the-status-of-hilberts-23-problems-in-mathematics/</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> S. Morris, <i>Bull. AMS</i> 58 (2021), No. 1（Hilbert 13）。</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> MathWorld: "Hilbert's Problems".</p>
  </div>

  <div id="ar-mathproblems-panel-millennium" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathproblems-panel-millennium">
<h2>千禧年大奖难题</h2>

<p>千禧年大奖难题（Millennium Prize Problems）由克雷数学研究所（CMI）于<strong>2000年5月24日</strong>在巴黎宣布，共<strong>7题</strong>，每题悬赏<strong>100万美元</strong>。其精神类似于1900年希尔伯特的23个问题，但更聚焦于"已被长期研究、仍具核心困难"的少数问题。</p>

<p><strong>状态速览（截至2026年9月12日）：</strong></p>
<ul>
  <li>✅ <strong>庞加莱猜想</strong>已由 Perelman 解决（2002–2003，2006年授菲尔兹奖，2010年授千禧年奖，均拒领）；</li>
  <li>❓ 其余六题（P/NP、霍奇、黎曼、杨-米尔斯、纳维-斯托克斯、BSD）均按 CMI 公开状态列为<strong>未解决</strong>；</li>
  <li>⚠️ <strong>纳维-斯托克斯（2026年9月动态）</strong>：OpenAI 宣布构造出受迫三维 N-S 方程的光滑有限时间爆破解并附 Lean 形式化证明，CMI 回应称"apparently been settled"但评审 deliberately unhurried；截至2026-09-12尚未认定，学界验证仍在进行。</li>
</ul>

<h3>一、P versus NP 问题</h3>
<p><strong>问题表述：</strong>$\mathsf{P}=\mathsf{NP}\ ?$ 若 SAT 有多项式时间算法，则 $\mathsf{P}=\mathsf{NP}$；已知 $\mathsf{P}\subseteq \mathsf{NP}$。</p>
<p><strong>研究进展：</strong>Cook（1971）证明 SAT 是 NP 完全；Karp（1972）给出21个 NP 完全问题；至今未证明。<strong>状态：开放。</strong></p>

<h3>二、霍奇猜想（Hodge Conjecture）</h3>
<p><strong>问题表述：</strong>复光滑射影代数簇 $X$ 上的每个 $\mathrm{Hdg}^p(X)$ 类都是闭代数子簇的 Poincaré 对偶类的有理线性组合。整系数版本被 Atiyah–Hirzebruch（1962）反例否定，千禧年采用有理系数。</p>
<p><strong>研究进展：</strong>Lefschetz（1924）证明 (1,1) 定理；对 Abel 簇、许多特殊射影簇验证；一般情形未决。<strong>状态：开放。</strong></p>

<h3>三、庞加莱猜想（Poincaré Conjecture，✅已解决）</h3>
<p><strong>问题表述：</strong>单连通闭三维流形 $M$ 必同胚于 $S^3$。</p>
<p><strong>研究进展：</strong>Perelman（2002–2003）发三篇预印本，用 Ricci 流与手术证明几何化猜想；Kleiner–Lott、Morgan–Tian 验证确认。<strong>状态：已解决（唯一已解决的千禧年问题）。</strong></p>

<h3>四、黎曼假设（Riemann Hypothesis）</h3>
<p><strong>问题表述：</strong>$\zeta(s)$ 的所有非平凡零点位于临界线 $s=1/2+it$。等价于 $\pi(x)=\mathrm{Li}(x)+O(\sqrt{x}\log x)$。</p>
<p><strong>研究进展：</strong>Hardy（1914）证临界线无穷多零点；Conrey（1989）证至少40%在临界线；数值验证至前 $10^{13}$ 零点；Guth–Maynard（2024）大幅改进零点密度估计。<strong>状态：开放。</strong></p>

<h3>五、杨-米尔斯存在性与质量间隙</h3>
<p><strong>问题表述：</strong>在四维欧氏空间构建量子杨-米尔斯理论，使谱在真空以上存在严格正间隙 $\Delta>0$。</p>
<p><strong>研究进展：</strong>Gross–Wilczek（1973）证渐近自由；Wilson（1974）格点规范理论；格点 QCD 大规模模拟显示正质量间隙；四维严格存在 + 质量间隙未证明。<strong>状态：开放。</strong></p>

<h3>六、纳维-斯托克斯存在性与光滑性</h3>
<p><strong>问题表述：</strong>三维不可压缩 Navier–Stokes 方程光滑初值是否产生全局光滑解，或存在有限时间爆破。</p>
<p><strong>研究进展：</strong>Leray（1934）证有限动能弱解全局存在；Caffarelli–Kohn–Nirenberg（1977/1982）部分正则性；<strong>2026年9月6日</strong> Alpöge–Buckmaster 公布受迫 Euler 光滑爆破；<strong>2026年9月8/9日</strong> OpenAI 宣布构造受迫三维 N-S 光滑爆破解附 Lean 形式化证明；CMI（2026-09-11）回应"apparently been settled"但评审未完成。<strong>状态：接近解决但尚未认定（截至2026-09-12）。</strong></p>

<h3>七、伯奇与斯温纳顿-戴尔猜想（BSD）</h3>
<p><strong>问题表述：</strong>弱 BSD：$\mathrm{ord}_{s=1}L(E,s)=\operatorname{rank}E(\mathbb Q)$。强 BSD 进一步写领先项与 $\Omega_E, \mathrm{Reg}_E, |\Sha|, c_p, |E(\mathbb Q)_{\rm tors}|$ 的关系。</p>
<p><strong>研究进展：</strong>Gross–Zagier（1986）公式；Kolyvagin（1989）证解析秩≤1时 BSD；Wiles–Taylor 模性定理；Skinner–Urban 等 Iwasawa 方向推进。一般秩≥2仍开放。<strong>状态：开放。</strong></p>

<h3>参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> CMI 官方问题页：https://www.claymath.org/millennium-problems/</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> Perelman 预印本：arXiv:math/0211159, arXiv:math/0303109, arXiv:math/0307245</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> OpenAI N-S 声明（2026-09-08/09）：待同行验证中</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> Alpöge–Buckmaster（2026-09-06）：受迫 Euler 光滑爆破</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> CMI 回应（2026-09-11）："apparently been settled, deliberately unhurried"</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> Gross–Zagier（1986）；Kolyvagin（1989）；Skinner–Urban 等</p>
  </div>

  <div id="ar-mathproblems-panel-fourcolor" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathproblems-panel-fourcolor">
<h2>四色定理：一张地图引发的 153 年数学长征</h2>

<h3>一、从一张地图说起</h3>
<p>1852 年，英国人弗兰西斯·格思里（Francis Guthrie）在给一张英国地图涂色时注意到一件事：无论地图多么复杂，<strong>四种颜色好像总是够用</strong>——每个区域只需一种颜色，且任何两个接壤的区域不同色。他和弟弟弗雷德里克反复试画都找不到反例，于是写信请教伦敦大学的教授德·摩根（De Morgan）。这个问题从此进入数学史。</p>

<p class="ar-image-wrap"><img src="/images/fig1_map.webp" width="1200" height="959" alt="四色地图示例"></p>

<h3>二、定理的准确表述</h3>
<p>四色定理有两种标准的等价说法。</p>
<p><strong>地图版（原始形式）：</strong>把平面（或球面）划分为有限多个连通区域。若两个区域拥有<strong>一段公共边界曲线</strong>（只在有限个点相碰不算相邻），则必可给每个区域指定 4 种颜色之一，使得任何相邻的两个区域颜色不同。</p>
<p><strong>图论版（现代标准形式）：</strong><strong>每个平面图 G 都满足色数 χ(G) ≤ 4。</strong>换言之，任何平面图的顶点都可以用至多 4 种颜色正常着色。</p>

<h3>三、四个基本概念</h3>
<p><strong>1. 图（graph）。</strong>点和连线的集合：点叫顶点，线叫边。</p>
<p><strong>2. 平面图（planar graph）。</strong>能画在平面上且<strong>任何两条边不相交</strong>的图。</p>
<p><strong>3. 对偶图（dual graph）。</strong>给地图的每个区域放一个顶点；两个区域接壤，就在对应顶点间连一条边。</p>
<p><strong>4. 色数 χ(G)。</strong>给 G 的顶点正常着色（相邻顶点异色）所需的最少颜色数。</p>

<p class="ar-image-wrap"><img src="/images/fig2_dual.webp" width="1200" height="465" alt="地图与对偶图"></p>
<p class="ar-image-wrap"><img src="/images/fig3_k4k5.webp" width="1200" height="638" alt="K4 与 K5"></p>

<h3>四、Kempe 链：一个站了 11 年的"证明"</h3>
<p>1879 年，伦敦律师兼数学家肯普（A. B. Kempe）发表了一个看似无懈可击的证明。</p>

<p class="ar-image-wrap"><img src="/images/fig4_kempe.webp" width="1200" height="1103" alt="Kempe 链"></p>

<p>1890 年，希伍德（P. Heawood）找出致命漏洞：<strong>两条 Kempe 链可以在别处相互缠绕</strong>，"红绿互换"这一步会波及另一条链的颜色，推理因此失效。</p>

<h3>五、计算机登台：1976 年的革命</h3>
<p>1976 年，伊利诺伊大学的阿佩尔（K. Appel）与哈肯（W. Haken）在科赫（J. Koch）协助下完成了这一纲领：他们构造了一个含 <strong>1936 个可约构形</strong>的不可避免集，计算机累计运行<strong>一千多个小时</strong>，逐一完成验证。四色定理终于成立。</p>

<p class="ar-image-wrap"><img src="/images/fig5_timeline.webp" width="1200" height="568" alt="时间线"></p>

<p>后续发展：</p>
<ul>
  <li><strong>1996 年</strong>，罗伯逊、桑德斯、西摩、托马斯（RSST）给出大幅简化的新证明，构形数降到 <strong>633 个</strong>；</li>
  <li><strong>2005 年</strong>，贡蒂埃（G. Gonthier）把证明完整编码进<strong>Coq 证明助手</strong>，由计算机对"证明本身"做形式化检查。</li>
</ul>

<h3>六、四色的"边界"</h3>
<ul>
  <li><strong>4 不能再少：</strong>K₄ 说明 4 是下界；四色定理说明 4 是上界。</li>
  <li><strong>三色什么时候够？</strong>格勒茨奇定理（1959）：不含三角形的平面图一定可以 3-着色。</li>
  <li><strong>计算复杂性：</strong>对一般图判断"能否 3-着色"是 NP-完全问题；平面图上 3-着色同样困难。</li>
</ul>

<h3>七、参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> R. Wilson, <i>Four Colors Suffice: How the Map Problem Was Solved</i>, Princeton University Press.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> Appel & Haken, <i>Illinois Journal of Mathematics</i> 21 (1977).</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> Robertson–Sanders–Seymour–Thomas, <i>J. Combin. Theory B</i> 70 (1997).</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> G. Gonthier, "A computer-checked proof of the Four Colour Theorem" (2005).</p>
  </div>
</div>
</section>

<section id="ar-section-popular" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-popular" hidden>
<div class="ai-tabs">
  <div class="ai-tab-btns" role="tablist">
    <button type="button" class="ai-tab-btn tab-teal active" role="tab" id="tab-ar-mathpopular-panel-crisis1" aria-controls="ar-mathpopular-panel-crisis1" aria-selected="true" tabindex="0" onclick="switchMathPopular('crisis1', this)">第一次数学危机</button>
    <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathpopular-panel-crisis2" aria-controls="ar-mathpopular-panel-crisis2" aria-selected="false" tabindex="-1" onclick="switchMathPopular('crisis2', this)">第二次数学危机</button>
    <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathpopular-panel-crisis3" aria-controls="ar-mathpopular-panel-crisis3" aria-selected="false" tabindex="-1" onclick="switchMathPopular('crisis3', this)">第三次数学危机</button>
    <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-mathpopular-panel-coastline" aria-controls="ar-mathpopular-panel-coastline" aria-selected="false" tabindex="-1" onclick="switchMathPopular('coastline', this)">英国海岸线有多长</button>
    <button type="button" class="ai-tab-btn tab-yellow" role="tab" id="tab-ar-mathpopular-panel-prisoner" aria-controls="ar-mathpopular-panel-prisoner" aria-selected="false" tabindex="-1" onclick="switchMathPopular('prisoner', this)">从囚徒困境看博弈论</button>
  </div>

<div id="ar-mathpopular-panel-crisis1" class="ai-tab-panel active" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathpopular-panel-crisis1">
<div class="crisis-article">
<h2 class="crisis-title">第一次数学危机：不可公度量的发现与解决</h2>
<h3 class="crisis-h3">——从"万物皆数"的崩塌到实数理论的建成</h3>
<blockquote class="crisis-quote">
<p><strong>摘要</strong>：第一次数学危机源于公元前 5 世纪古希腊时期不可公度量（无理数）的发现。正方形对角线与边不可公度这一事实，摧毁了毕达哥拉斯学派"万物皆数"的核心信条，迫使希腊数学转向几何化路线并确立了公理化演绎传统。危机的古典解决方案是欧多克索斯的比例论；完全解决则迟至 19 世纪，由戴德金、康托尔、魏尔斯特拉斯等人的实数构造完成，历时约两千三百年——这本身就是数学史上罕见的景观。本文系统综述此次危机的历史背景、数学内核、深远影响与两阶段解决路径。</p>
</blockquote>
<hr class="crisis-hr">
<h3 class="crisis-h3">一、什么是"数学危机"</h3>
<p>"数学危机"并非数学被彻底推翻的时刻，而是指<strong>数学基础层面出现无法在现有理论框架内消解的矛盾</strong>，迫使数学家重新审视最基本的概念——什么是数、什么是连续、什么是证明——并在此过程中重建更深层的理论。</p>
<p>第一次数学危机是这一现象的历史原型：它不是"多发现一类数"的技术问题，而是<strong>一种世界观被逻辑证明证伪</strong>的基础性事件。数学史家 M. 克莱因（Morris Kline）在《古今数学思想》中对其经过与后果有系统梳理。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">二、危机的背景："万物皆数"的毕达哥拉斯世界观</h3>
<p>公元前 6 至 5 世纪，毕达哥拉斯学派建立了古希腊第一个系统化的数学-哲学纲领。其核心信条是：</p>
<blockquote class="crisis-quote">
<p><strong>"万物皆数"（ἀριθμὸν τὰ πάντα）——宇宙的一切关系最终都可以用整数或整数之比来表达。</strong></p>
</blockquote>
<p>这里的"数"专指正整数（及其比，即今日的有理数）。这一信条并非空洞的玄想，而是建立在大量经验成功之上：</p>
<ul class="crisis-list">
<li><strong>和声学</strong>：弦长之比与音程对应——1:2 得八度、3:4 得四度、2:3 得五度；</li>
<li><strong>几何学</strong>：毕达哥拉斯定理 $a^2+b^2=c^2$ 对一切直角三角形成立；</li>
<li><strong>天文学</strong>：天体运行体现"宇宙和谐"（"天体音乐"之说）。</li>
</ul>
<p>学派的信条隐含了一个关键假设——<strong>任意两条线段都是可公度的（commensurable）</strong>，即存在某个公共单位，使得两条线段的长度都是它的整数倍。只有在这个假设下，一切长度、面积、体积之比才能化为整数之比，"量"才能被"数"完全接管。</p>
<p>换言之，"万物皆数"的世界观站在一根支柱上：<strong>整数之比穷尽了量的关系</strong>。这根支柱即将被一个最简单的几何对象砸断。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">三、危机的爆发：正方形对角线的不可公度性</h3>
<h4 class="crisis-h4">3.1 发现</h4>
<p>危机的具体触发点是数学史上最著名的定理之一：</p>
<blockquote class="crisis-quote">
<p><strong>正方形的对角线与边不可公度</strong>，即对角线与边长之比 $\sqrt{2}$ 不能表示为任何整数之比。</p>
</blockquote>
<p>传统叙事（经普罗克洛斯等人转述）将发现归于毕达哥拉斯学派的希帕索斯（Hippasus，约公元前 470 年），并传说他因泄露这一"破坏和谐"的秘密而被抛入大海。传说细节虽不可考，但发现本身的冲击是确凿的：<strong>几何直觉上最简单的对象——正方形的对角线——竟然无法纳入"数"的体系。</strong> 要么修改"万物皆数"，要么承认数学自相矛盾。</p>
<h4 class="crisis-h4">3.2 证明</h4>
<p>其证明沿用至今，是反证法的典范。设对角线与边可公度，则</p>
<p class="crisis-math">$$\sqrt{2} = \frac{p}{q}$$</p>
<p>其中 $p, q$ 为互素正整数。两边平方：</p>
<p class="crisis-math">$$p^2 = 2q^2$$</p>
<p>于是 $p^2$ 是偶数，故 $p$ 是偶数，记 $p = 2k$；代回得 $q^2 = 2k^2$，同理 $q$ 也是偶数。$p, q$ 同为偶数，与二者互素矛盾。∎</p>
<p>这一证明的杀伤力在于：它<strong>否定的不是一个定理，而是一个世界观</strong>。整数及其比不足以覆盖连续的几何量——"数"与"量"出现了裂缝。而且此裂缝无法靠修补缝合：$\sqrt{3}$、$\sqrt{5}$、黄金比……不可公度量源源不断地涌现，任何"把比当数"的操作随时可能踩空。</p>
<h4 class="crisis-h4">3.3 为何是危机而非新发现</h4>
<p>用现代眼光看，这只是发现了无理数，似乎谈不上"危机"。但对当时的数学体系而言：</p>
<ol class="crisis-oln">
<li><strong>没有概念容器</strong>：希腊人没有任何理论框架容纳"不是整数之比的量"——他们甚至不认为这类对象是"数"；</li>
<li><strong>连锁坍塌</strong>：面积、体积、比例、相似形等大量已有结果都建立在"可公度"假设之上，需要逐一重审；</li>
<li><strong>方法论动摇</strong>：如果最简单的几何对象都超出数的掌控，数学凭什么自称把握了宇宙的结构？</li>
</ol>
<hr class="crisis-hr">
<h3 class="crisis-h3">四、危机的深层影响</h3>
<p>第一次危机的后果远比"多发现一类数"深远：</p>
<h4 class="crisis-h4">4.1 算术权威的衰落与几何转向</h4>
<p>由于整数比理论失效，古希腊数学家转而以几何量本身为基础：量不需要被表示为数，只需讨论其比例关系。这直接塑造了欧几里得《几何原本》的结构——前四卷与第六卷以几何为主，而算术（第 7–9 卷）与量的比例（第 5 卷）被严格分开处理。有学者认为，希腊数学此后"用几何代数"（以线段的长短表示代数关系）的传统，正是这次危机留下的"创伤性防御"：<strong>回避数与无限，退守于直观可靠的几何</strong>。这一转向的代价巨大——代数与数论的发展因此迟滞，直到 16–17 世纪才由韦达、笛卡尔等人逐步恢复数与形的统一。</p>
<h4 class="crisis-h4">4.2 穷竭法的诞生</h4>
<p>阿基米德等人为处理曲边形面积、圆周长等问题发展了穷竭法（method of exhaustion），通过"双边逼近 + 归谬法"绕开了直接的无限过程。这一方法严谨但笨重，希腊数学因此与"无限"保持了长达两千年的距离——这道防线的松动，要到 17 世纪微积分诞生，而那松动恰恰埋下了第二次数学危机（无穷小量之争）。</p>
<h4 class="crisis-h4">4.3 演绎证明范式的确立</h4>
<p>危机表明经验归纳不足以保证数学命题的普遍性（测量再精确也无法排除 √2 是某个巨大分数的可能）。希腊数学由此转向<strong>演绎证明</strong>：从少数不证自明的公理出发，逻辑地推出全部结论。欧几里得《几何原本》的公理化体系，本质上是第一次危机的制度化遗产。这是危机馈赠给数学的最宝贵的礼物——<strong>数学从此成为"证明的科学"</strong>。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">五、古典方案：欧多克索斯的比例论</h3>
<p>约公元前 370 年，欧多克索斯（Eudoxus）在《几何原本》第五卷中给出了比例的精巧定义（欧几里得《几何原本》定义 V.5）：</p>
<blockquote class="crisis-quote">
<p>当取第一、第三量的<strong>任意等倍数</strong>，以及第二、第四量的<strong>任意等倍数</strong>时，若前者之间依次有大于、等于、小于的关系，则后者之间也依次有相应的关系，则称第一量与第二量之比等于第三量与第四量之比。</p>
</blockquote>
<p>用现代语言说：$a/b = c/d$ 当且仅当对一切正整数 $m, n$，</p>
<p class="crisis-math">$$ma \gtrless nb \iff mc \gtrless nd$$</p>
<p>这个定义完全不依赖"比是一个数"，只依赖量的倍数之间的序关系，因而对可公度与不可公度的量<strong>一视同仁</strong>。它实质上给出了实数序结构的一种早期公理化，其思想与 19 世纪戴德金分割惊人地相似——戴德金本人明确承认其构造直接继承自欧多克索斯。</p>
<p>但必须看到，欧多克索斯方案是"半解决"：</p>
<ul class="crisis-list">
<li>它让数学家能<strong>操作</strong>不可公度量（比例论 + 穷竭法支撑了从欧几里得到阿基米德的整个黄金时代）；</li>
<li>却仍未回答"无理数是什么"——比例论处理的是几何量之间的关系，无理数作为独立的数对象，仍悬而未决。</li>
</ul>
<p>可以说，古典方案是<strong>绕过问题而非解决问题</strong>。真正的闭合要等待数概念的再一次革命。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">六、现代方案：实数的构造与危机的最终解决</h3>
<p>真正的解决发生在 19 世纪，而且与第二次数学危机的解决（分析严格化）互为表里。三大构造并行提出：</p>
<h4 class="crisis-h4">6.1 戴德金分割（Dedekind, 1872）</h4>
<p>把有理数集 $\mathbb{Q}$ 按任意不交、非空、下闭的方式分成两类 $A \cup B$，这样的"分割"（Schnitt）本身就定义了一个实数。$\sqrt{2}$ 就是分割</p>
<p class="crisis-math">$$A = \{q \in \mathbb{Q} : q^2 < 2 \text{ 或 } q \le 0\}, \qquad B = \{q \in \mathbb{Q}: q > 0,\ q^2 > 2\}$$</p>
<p>数不再"是"某个比值对象，而是<strong>有理数域中的一个位置</strong>。这一构造直接继承欧多克索斯的思想。</p>
<h4 class="crisis-h4">6.2 康托尔基本列（Cantor, 1872）</h4>
<p>把实数定义为有理数柯西序列的等价类。$\sqrt{2}$ 是序列</p>
<p class="crisis-math">$$1,\ 1.4,\ 1.41,\ 1.414,\ \ldots$$</p>
<p>所在的等价类。这一构造与极限理论天然契合，凸显了实数系的<strong>完备性</strong>——完备性正是有理数系所缺、而极限运算所必需的性质（有理数列 $1, 1.4, 1.41, \ldots$ 的"极限"在有理数中无处安放）。</p>
<h4 class="crisis-h4">6.3 魏尔斯特拉斯方案</h4>
<p>通过无穷小数（有理数的十进逼近列）定义实数，思路类似但表述更贴近分析习惯。</p>
<p>三种构造被证明相互等价，共同确立了一个定理式的结论：</p>
<blockquote class="crisis-quote">
<p><strong>存在唯一的（在序同构意义下）完备阿基米德有序域 $\mathbb{R}$，它是有理数域的最小完备扩张。</strong></p>
</blockquote>
<p>至此，$\sqrt{2}$ 不再是"逻辑怪物"，而是实数连续统中一个地位与 1、2 完全平等的点。第一次危机历时约两千三百年，最终闭合。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">七、哲学意涵</h3>
<ol class="crisis-oln">
<li><strong>直觉与逻辑的分工</strong>。这次危机中，几何直觉是正确的（对角线确实有一个"长度"），错误的只是"该长度必为整数之比"的信念。危机的标准形态由此显现：<strong>不是结论错了，而是说不清结论为什么对</strong>。</li>
</ol>
<ol class="crisis-oln">
<li><strong>离散与连续的裂缝</strong>。危机的核心是整数（离散）与几何量（连续）之间的断裂。此后每一次数的系统能力扩张——有理数 → 实数 → 复数 → 集合论——都可以视为对"连续直觉要求符号系统扩展自身"这一压力的回应。</li>
</ol>
<ol class="crisis-oln">
<li><strong>严格性的代价与收益</strong>。希腊人以牺牲代数为代价换来了演绎范式；两千年后，实数理论以严格的构造重新赎回损失。危机没有削弱数学，反而锻造了数学之为数学的品格——<strong>从公理出发的演绎、对每一概念的无情澄清</strong>。</li>
</ol>
<ol class="crisis-oln">
<li><strong>亚里士多德的无限禁令</strong>。危机时期数学家接受了亚里士多德"潜无限合法、实无限非法"的立场，与无限保持距离。这道禁令的两千年保质期，将在第二次危机（无穷小）与第三次危机（集合论）中被先后检验、松动、有条件解除。</li>
</ol>
<hr class="crisis-hr">
<h3 class="crisis-h3">八、结语</h3>
<p>第一次数学危机讲述的是人类以离散符号把握连续世界时遭遇的第一道裂缝：整数之比被证明不能穷尽量的关系。希腊人的回应是退守几何、确立公理与证明——这为数学赢得了方法论，却把"数是什么"的追问悬置了两千年。直到 19 世纪实数理论建成，无理数才获得严格的定义与合法的身份。这场危机留给数学的双重遗产——<strong>演绎证明的范式</strong>与<strong>对基础的无尽追问</strong>——至今仍是数学这门学科的定义性特征。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">参考文献</h3>
<ol class="crisis-oln">
<li>Kline, M. <em>Mathematical Thought from Ancient to Modern Times</em>（《古今数学思想》），Oxford University Press, 1972. 中译本：上海科学技术出版社，2014.</li>
<li>Boyer, C. B. &amp; Merzbach, U. C. <em>A History of Mathematics</em>, 3rd ed., Wiley, 2011.</li>
<li>Euclid. <em>Elements</em>（《几何原本》），尤以第五卷（比例论）、第十卷（不可公度理论述）为核心；中译本：译林出版社，2014.</li>
<li>Dedekind, R. <em>Stetigkeit und irrationale Zahlen</em>（《连续性与无理数》），1872.</li>
<li>Cantor, G. "Über die Ausdehnung eines Satzes aus der Theorie der trigonometrischen Reihen", <em>Mathematische Annalen</em>, 1872.</li>
<li>Fowler, D. <em>The Mathematics of Plato's Academy</em>, 2nd ed., Oxford University Press, 1999.（对希腊比例论与不可公度性的现代学术重构）</li>
<li>李文林. 《数学史概论》（第三版），高等教育出版社，2011.</li>
<li>张顺燕. 《数学的思想、方法和应用》，北京大学出版社，2003.</li>
</ol>
</div>
</div>
<div id="ar-mathpopular-panel-crisis2" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathpopular-panel-crisis2">
<div class="crisis-article">
<h2 class="crisis-title">第二次数学危机：无穷小量的合法性之争</h2>
<h3 class="crisis-h3">——从"消失量的幽灵"到 ε-δ 语言的严格重建</h3>
<blockquote class="crisis-quote">
<p><strong>摘要</strong>：第二次数学危机围绕微积分中"无穷小量"的逻辑地位展开。牛顿与莱布尼茨创立的微积分在应用上节节胜利，其基础却依赖一个"既非零又非可忽略"的骑墙概念——无穷小量。1734 年贝克莱的诘难将这一逻辑矛盾公之于众；此后近两个世纪，经柯西的极限理论、魏尔斯特拉斯的 ε-δ 语言、以及戴德金与康托尔的实数构造，分析学完成了"算术化"重建，危机宣告解决。非标准分析事后证明：莱布尼茨的直觉并非必然矛盾，矛盾的只是 17 世纪未分化的概念系统。本文系统综述此次危机的来龙去脉、解决路径与哲学意涵。</p>
</blockquote>
<hr class="crisis-hr">
<h3 class="crisis-h3">一、什么是"数学危机"</h3>
<p>"数学危机"并非数学被彻底推翻的时刻，而是指<strong>数学基础层面出现无法在现有理论框架内消解的矛盾</strong>，迫使数学家重新审视最基本的概念，并在此过程中重建更深层的理论。</p>
<p>第二次数学危机的独特之处在于：<strong>矛盾并未导致计算失效</strong>。微积分一路攻城略地，力学、天文学、工程学的成果辉煌夺目；失效的只是"解释"——没有人能说清这些计算为什么合法。这种"成果与基础的失衡"贯穿了 17、18 两个世纪，构成了危机的完整形态。数学史家 M. 克莱因（Morris Kline）在《古今数学思想》中对这段"带病扩张"的历史有详尽记述。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">二、危机的背景：微积分的诞生与"使用中的矛盾"</h3>
<h4 class="crisis-h4">2.1 牛顿与莱布尼茨的核心操作</h4>
<p>17 世纪下半叶，牛顿与莱布尼茨（各自独立）创立微积分。其核心操作是：对量 $x$ 给予一个增量 $o$（牛顿记作"瞬"或最后比中的量，莱布尼茨记作 $dx$），展开运算后再把含 $o$ 的项<strong>丢弃</strong>，从而得到变化率或切线。</p>
<p>以莱布尼茨式的推导为例，求 $y = x^2$ 的导数：</p>
<p class="crisis-math">$$y + dy = (x + dx)^2 = x^2 + 2x\,dx + (dx)^2$$</p>
<p class="crisis-math">$$\frac{dy}{dx} = 2x + dx$$</p>
<p>随后"由于 $dx$ 是无穷小，故舍去 $dx$"，得</p>
<p class="crisis-math">$$y' = 2x$$</p>
<h4 class="crisis-h4">2.2 一目了然的矛盾</h4>
<p><strong>$dx$ 要么非零——那它作为加项不可随意丢弃；要么为零——那整个增量过程无从发生。</strong> 无穷小量在这个框架里扮演着"既小于任何正数又大于零"的骑墙角色。</p>
<p>牛顿本人对此有所觉察。他先后提出"最初与最后比""流数法"等说法试图自圆：增量先"生长"出来参与运算，随后"消失"只留下比值。但这一表述始终在"消失的量"与"生成的比"之间摇摆——量在消失的哪个瞬间被取比值？消失之后还谈得上"比"吗？问题并未解决，只是换了一套措辞。</p>
<p>莱布尼茨则诉诸"无穷小是相对的、有用的虚构"以及"连续性原理"，同样未能给出逻辑上无懈可击的辩护。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">三、危机的爆发：贝克莱的诘难</h3>
<p>1734 年，爱尔兰主教乔治·贝克莱（George Berkeley）发表《分析学家；或致一位不信神的数学家》，对微积分的逻辑基础发起摧毁性攻击。其矛头名义上指向数学家对宗教的攻击（针对天文学家哈雷），逻辑批评却精准而刻毒：</p>
<h4 class="crisis-h4">3.1 逻辑矛盾</h4>
<p>牛顿在计算 $x^n$ 的流数时，先假设增量 $o$ 非零（否则无法作除法、无法约去公因子），化简后又假设 $o$ 为零（否则不能舍弃含 $o$ 的项）。贝克莱讥讽这些无穷小量是<strong>"消失量的幽灵"（ghosts of departed quantities）</strong>——</p>
<blockquote class="crisis-quote">
<p>"依靠双重错误得到了正确的结果：先通过一个不合理的假设（非零），又通过一个不相容的假设（为零）。"</p>
</blockquote>
<h4 class="crisis-h4">3.2 类比归谬</h4>
<p>贝克莱进一步指出：数学家责备神学家在信仰中接受矛盾，而微积分的推理并不更严格——这是"以更晦涩的神秘代替更清晰的真理"。</p>
<h4 class="crisis-h4">3.3 公允的评价</h4>
<p>应当公允地指出：贝克莱的攻击虽有神学动机，其逻辑批评却<strong>完全成立</strong>。这不是恶意构陷，而是一份合格的"逻辑审计报告"：它没有否定微积分结论的正确性（结论大多对），而是否定了其<strong>辩护体系</strong>。这正是数学危机的典型形态——<strong>辩护体系无法覆盖已被接受的发现</strong>。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">四、18 世纪：应用胜利与基础欠账</h3>
<p>整个 18 世纪，微积分呈现出"一手凯歌、一手烂账"的奇特局面。</p>
<p><strong>应用端</strong>：伯努利家族、欧拉、达朗贝尔、拉格朗日将微积分发展为力学、天体力学、光学的通用语言；欧拉的《无穷分析引论》把分析推向函数理论的宏大体系。</p>
<p><strong>基础端</strong>：各家补救均未成功——</p>
<ul class="crisis-list">
<li><strong>欧拉</strong>：把无穷小当作"恰好为零的数"，试图以零的运算规则化解矛盾（但零不能作除数，问题依旧）；</li>
<li><strong>达朗贝尔</strong>：提出"极限是分析的真正基础"，留下名言"无穷小量是严格思维的代用品"，但其极限观念仍是动态而含糊的；</li>
<li><strong>拉格朗日</strong>：试图完全绕开无穷小与极限，以泰勒幂级数重构分析（任意函数 = 幂级数展开），但幂级数的收敛性、以及"并非一切函数都可展开"的反例，使这条路走不通。</li>
</ul>
<p>欠账在累积：级数求和的谬误（如 $1-1+1-1+\cdots$ 的多值"求和"）、函数概念的混乱、连续与可导的混淆，不断提醒数学家——大厦的逻辑地基仍未验收。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">五、危机的实质：三个概念的纠缠</h3>
<p>第二次危机表面上是"无穷小量是什么"的语义混乱，深层则是三个概念的重叠纠缠：</p>
<ol class="crisis-oln">
<li><strong>极限</strong>：变量逼近的过程（潜无限）；</li>
<li><strong>无穷小</strong>：被当作静态对象的"无限小量"（实无限）；</li>
<li><strong>导数</strong>：一个特定的比值 $\dfrac{\Delta y}{\Delta x}$ 在 $\Delta x \to 0$ 时的归宿。</li>
</ol>
<p>未分化地混用这三者，矛盾不可避免。这提示了一个深刻的教训：<strong>危机的解决不可能靠在旧框架内修补措辞，而必须引入新的、更精细的概念分层。</strong> 事实正是如此——极限论把"无穷小"降格为"过程"，ε-δ 语言再把"过程"翻译为"静态逻辑结构"，两层概念替代之后，骑墙的存在物才彻底退场。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">六、危机的解决：分析算术化</h3>
<h4 class="crisis-h4">6.1 柯西：极限概念的严格化</h4>
<p>奥古斯丁·路易·柯西（Cauchy）在《分析教程》（1821）等著作中，把分析重建在极限概念之上：</p>
<blockquote class="crisis-quote">
<p>当一个变量逐次取值无限趋近某个定值，使得与该定值之差可以小于任意给定的量时，该定值称为这个变量的<strong>极限</strong>。</p>
</blockquote>
<p>在此基础上，柯西给出连续性、导数与定积分的现代定义雏形：</p>
<ul class="crisis-list">
<li><strong>导数</strong>：$\dfrac{f(x+\alpha)-f(x)}{\alpha}$ 在 $\alpha \to 0$ 时的极限；</li>
<li><strong>定积分</strong>：分割—求和—取极限。</li>
</ul>
<p><strong>无穷小量在他的体系中降格为"以零为极限的变量"</strong>——不再是一个神秘的存在，而是一个过程。骑墙的静态无穷小由此被消解。</p>
<p>不过柯西的表述仍带有"变量趋近"的动态直觉，且其极限概念隐含依赖实数的完备性——而实数系本身尚未严格定义（这正是第一次危机遗留的问题）。</p>
<h4 class="crisis-h4">6.2 魏尔斯特拉斯：ε-δ 语言</h4>
<p>魏尔斯特拉斯（Weierstrass）完成了最后一步：把所有动态语言翻译为<strong>静态的量词逻辑</strong>。导数定义变为：</p>
<p class="crisis-math">$$f'(x_0) = \lim_{h \to 0} \frac{f(x_0+h) - f(x_0)}{h}$$</p>
<p class="crisis-math">$$\iff \forall \varepsilon > 0,\ \exists \delta > 0,\ \forall h\ \bigl(0 < |h| < \delta \Rightarrow \left|\tfrac{f(x_0+h)-f(x_0)}{h} - f'(x_0)\right| < \varepsilon\bigr)$$</p>
<p>在这个定义中，<strong>没有任何东西在"流动"</strong>：极限是一个由全称/存在量词刻画的静态逻辑结构，无穷小量彻底退场。</p>
<p>魏尔斯特拉斯还以一系列病态函数震撼学界——最著名的是<strong>处处连续却处处不可导的函数</strong>（1872 年报告中由其学生 du Bois-Reymond 呈报）。这类函数证明：直觉不仅不严格，而且<strong>不可靠</strong>——"连续曲线处处有切线"的百年信念被推翻。严格化因此不是学究式的修饰，而是必需品。</p>
<h4 class="crisis-h4">6.3 实数理论与"分析算术化"</h4>
<p>柯西-魏尔斯特拉斯的极限理论需要完备的数域作支撑。1872 年，戴德金（分割）与康托尔（柯西序列等价类）分别发表实数构造，1889 年皮亚诺给出自然数公理，分析的整个链条由此闭合：</p>
<p class="crisis-math">$$\mathbb{N} \xrightarrow{\text{皮亚诺公理}} \text{自然数} \xrightarrow{\text{有理数构造}} \mathbb{Q} \xrightarrow{\text{戴德金/康托尔}} \mathbb{R} \xrightarrow{\text{柯西/魏尔斯特拉斯}} \text{极限—连续—导数—积分}$$</p>
<p>这一运动史称<strong>"分析算术化"（arithmetization of analysis）</strong>：分析的全部概念最终被还原为整数及其逻辑运算。至此第二次危机宣告解决。</p>
<p><strong>值得特别注意的是</strong>：这次危机的解决方案——实数理论——恰好同时是第一次数学危机的最终闭合（√2 正是实数连续统中的一个点）。两场危机在 1872 年汇于同一个解，构成数学史上罕见的"双闭环"。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">七、尾声：无穷小量的"复活"</h3>
<p>20 世纪 60 年代，罗宾逊（Abraham Robinson）的非标准分析（1961 年提出，1966 年成书）利用模型论方法，在严格逻辑基础上构造了包含<strong>真实无穷小量</strong>的数域——超实数域 $^*\mathbb{R}$。</p>
<p>在 $^*\mathbb{R}$ 中，无穷小是一个<strong>逻辑上相容的合法数对象</strong>，只是不满足阿基米德性质（即不存在整数倍的累加能超过某个数）。莱布尼茨的直觉在事后两百年被证明是可以严格化的——这并非推翻标准分析，而是证明：</p>
<blockquote class="crisis-quote">
<p><strong>"无穷小"并非必然矛盾，矛盾的只是 17 世纪那个未分化的概念系统。</strong></p>
</blockquote>
<p>危机的终结因此更具意味：被否定的从来不是想法本身，而是其粗糙的逻辑形态。给思想定罪容易，给思想找到合法的逻辑居所难——数学的进步以后者的方式完成。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">八、哲学意涵</h3>
<ol class="crisis-oln">
<li><strong>"双重错误"为何总能得到正确结果</strong>。贝克莱指出早期微积分"靠双重错误得正确结果"。严格化之后的解释是：微积分的计算实质上在操作一个线性主部（微分），丢弃的高阶项恰好不影响极限值。矛盾出在<strong>表述</strong>而非<strong>算法</strong>——算法的深层结构（线性近似）本来就是对的。</li>
</ol>
<ol class="crisis-oln">
<li><strong>危机是概念分层的催化剂</strong>。极限、无穷小、导数三个概念的纠缠，迫使数学家发明 ε-δ 语言这一"概念显微镜"。此后数学对"定义"的苛刻程度全面升级：测度、概率、维数等概念都在 20 世纪初经历了类似的"贝克莱式审计 + 严格化重建"。</li>
</ol>
<ol class="crisis-oln">
<li><strong>应用成功不等于理论合法</strong>。18 世纪的教训表明：外部成功可以为理论争取时间，但不能替代基础审查。物理直觉可以引导发现，数学的可靠性最终必须由演绎结构担保。</li>
</ol>
<ol class="crisis-oln">
<li><strong>潜无限与实无限之争的阶段性裁决</strong>。柯西-魏尔斯特拉斯方案以潜无限（逼近过程）取代实无限（无穷小对象），可视为亚里士多德禁令的胜利；但非标准分析随后表明实无限可以有条件地合法化。这道悬案要到第三次危机（集合论悖论）才真正摊牌。</li>
</ol>
<hr class="crisis-hr">
<h3 class="crisis-h3">九、结语</h3>
<p>第二次数学危机是"成功掩盖矛盾"的教科书案例：微积分带着逻辑漏洞征服了科学世界，而漏洞的弥补花了两百年。危机的解决没有靠任何天才的一句话，而靠一条完整的重建链——极限概念（柯西）→ 量词化语言（魏尔斯特拉斯）→ 实数理论（戴德金、康托尔）→ 自然数公理（皮亚诺）。这场运动教会数学两件事：<strong>给每个概念一个无歧义的定义，给每个定义一个可核查的逻辑结构</strong>。如果说第一次危机教会数学"证明"，那么第二次危机教会数学"定义"——两者合起来，就是现代数学的方法论本身。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">参考文献</h3>
<ol class="crisis-oln">
<li>Kline, M. <em>Mathematical Thought from Ancient to Modern Times</em>（《古今数学思想》），Oxford University Press, 1972. 中译本：上海科学技术出版社，2014.</li>
<li>Boyer, C. B. &amp; Merzbach, U. C. <em>A History of Mathematics</em>, 3rd ed., Wiley, 2011.</li>
<li>Berkeley, G. <em>The Analyst: A Discourse Addressed to an Infidel Mathematician</em>, 1734.</li>
<li>Cauchy, A.-L. <em>Cours d'analyse de l'École Royale Polytechnique</em>, 1821.</li>
<li>Dedekind, R. <em>Stetigkeit und irrationale Zahlen</em>（《连续性与无理数》），1872.</li>
<li>Cantor, G. "Über die Ausdehnung eines Satzes aus der Theorie der trigonometrischen Reihen", <em>Mathematische Annalen</em>, 1872.</li>
<li>Weierstrass, K. 有关解析函数与连续不可导函数的讲义及报告（1872 年柏林科学院报告，由 du Bois-Reymond 记述）.</li>
<li>Robinson, A. <em>Non-standard Analysis</em>, North-Holland, 1966.</li>
<li>Grabiner, J. <em>The Origins of Cauchy's Rigorous Calculus</em>, MIT Press, 1981.（关于柯西严格化之历史来源的专题研究）</li>
<li>李文林. 《数学史概论》（第三版），高等教育出版社，2011.</li>
<li>张顺燕. 《数学的思想、方法和应用》，北京大学出版社，2003.</li>
</ol>
</div>
</div>
<div id="ar-mathpopular-panel-crisis3" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathpopular-panel-crisis3">
<div class="crisis-article">
<h2 class="crisis-title">第三次数学危机：集合论悖论与确定性的边界</h2>
<h3 class="crisis-h3">——从罗素悖论到哥德尔不完备定理</h3>
<blockquote class="crisis-quote">
<p><strong>摘要</strong>：第三次数学危机源于 19 世纪末 20 世纪初集合论中相继发现的悖论。1902 年罗素悖论的提出表明：被寄予"数学基础"厚望的朴素集合论内部即含矛盾。围绕悖论，逻辑主义、形式主义、直觉主义三大学派展开基础大论战；1931 年哥德尔不完备定理宣告希尔伯特纲领原始形态失败，同时催生了证明论、递归论、模型论等数理逻辑分支。与前两次危机不同，第三次危机没有"解决"，而是被"理解"了——绝对确定性被证明不在数学的天命之中，数学从"确定性的堡垒"转变为"在可证明范围内追求最大严格性的开放事业"。本文系统综述此次危机的起因、论战、定理及其哲学后果，作为前两次危机综述的延伸篇。</p>
</blockquote>
<hr class="crisis-hr">
<h3 class="crisis-h3">一、引言：危机叙事的第三幕</h3>
<p>前两次数学危机（不可公度量的发现、无穷小量之争）的完整综述见姊妹篇。此处的关键衔接点是 1872 年这个年份：这一年，戴德金与康托尔发表实数构造，<strong>同时闭合了第一次危机（无理数何以为数）与第二次危机（极限立于何地）</strong>。</p>
<p>闭合的方式是把数学基础逐层还原：</p>
<p class="crisis-math">$$\text{分析} \to \text{实数} \to \text{有理数} \to \text{自然数} \to \text{集合}$$</p>
<p>到 19 世纪末，集合论（康托尔所创）被视为一切数学的最终地基。1884 年前后，康托尔本人已在通信中察觉超穷集合论的困难；1895–1897 年间，布拉利-福尔蒂悖论、康托尔悖论相继出现；1902 年罗素悖论以最简形式引爆——<strong>数学的地基本身裂开了</strong>。这就是第三次数学危机。</p>
<p>与前两次危机不同，这次危机的矛盾不是"直觉信念被证伪"，而是<strong>逻辑本身的自相缠绕</strong>：悖论是从集合论公认的操作规则中严格推导出来的，无懈可击。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">二、背景：集合论登上基础王座</h3>
<h4 class="crisis-h4">2.1 康托尔的超穷集合论</h4>
<p>1874 年起，康托尔（Georg Cantor）建立了集合与超穷数的理论：一一对应可以比较无穷的大小，实数集不可数（对角线法，1891），无穷不止一个层级——可数无穷 $\aleph_0$ 之后还有不可数的无穷。</p>
<p>这在当时是惊世骇俗的：它直接<strong>违反了亚里士多德以来"实无限非法"的古老禁令</strong>（该禁令曾在第二次危机中以潜无限论的形式短暂"复辟"）。克罗内克等数学家激烈反对，称康托尔为"科学的骗子"；而希尔伯特则为康托尔辩护，留下名言——</p>
<blockquote class="crisis-quote">
<p><strong>"没有人能把我们从康托尔创造的乐园中驱逐出去。"</strong></p>
</blockquote>
<h4 class="crisis-h4">2.2 基础还原方案的乐观</h4>
<p>到 1900 年，数学家普遍相信基础问题已近解决。希尔伯特在第二届国际数学家大会（巴黎，1900）上提出的 23 个问题中，<strong>第二问题正是"算术公理的相容性"</strong>，其乐观预设是：经由适当的公理化，数学的相容性可以被严格证明。弗雷格的《算术基础》正致力于把算术还原为逻辑。</p>
<p>谁也没有料到，摧毁这一切的悖论，将直接送达弗雷格的案头。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">三、危机的爆发：从悖论到罗素悖论</h3>
<h4 class="crisis-h4">3.1 悖论序列</h4>
<ul class="crisis-list">
<li><strong>布拉利-福尔蒂悖论（1897）</strong>：一切序数构成的集合仍有更大的序数，故"一切序数的集合"自相矛盾；</li>
<li><strong>康托尔悖论（1899，书信中）</strong>：一切集合的集合（全集）的基数应最大，但它的幂集基数必然更大——"最大的基数"不存在，而全集又应当存在；</li>
<li><strong>罗素悖论（1902）</strong>：最简、最致命的一击。</li>
</ul>
<h4 class="crisis-h4">3.2 罗素悖论：朴素集合论的死刑判决</h4>
<p>1902 年 6 月，罗素致信弗雷格。悖论表述如下：</p>
<blockquote class="crisis-quote">
<p>考虑"所有不属于自身的集合"构成的集合 $R = \{x \mid x \notin x\}$。问：$R \in R$ 是否成立？</p>
<p>- 若 $R \in R$，则按定义 $R \notin R$；</p>
<p>- 若 $R \notin R$，则按定义 $R \in R$。</p>
<p>两种情形都矛盾。∎</p>
</blockquote>
<p>这个悖论的可怕之处在于：</p>
<ol class="crisis-oln">
<li><strong>只用最基本的逻辑词项</strong>（"属于""所有""否定"），不涉及任何数学技术概念；</li>
<li><strong>从朴素集合论的两条公认原则严格推出</strong>：概括原则（任意性质可界定一个集合）+ 允许集合作为元素；</li>
<li><strong>直接命中基础还原的终点</strong>：弗雷格的算术逻辑化体系恰好建立在概括原则之上。</li>
</ol>
<p>弗雷格在回信中的坦白成为数学史的著名文献之一：</p>
<blockquote class="crisis-quote">
<p>"算术会发生动摇，这对我来说几乎是不可承受的……您的发现是我所遇到的最沉重的打击。"（大意）</p>
</blockquote>
<p>应当指出：<strong>罗素悖论并非纯粹数学内部的"计算矛盾"，而是一次逻辑分层失败</strong>——"属于"关系被不加限制地应用于所有层次，混淆了"对象"与"谈论对象的性质"的元层次。这与第二次危机中"极限—无穷小—导数"的概念纠缠如出一辙：危机总是表现为<strong>概念层次未被区分</strong>。</p>
<h4 class="crisis-h4">3.3 一个通俗镜像</h4>
<p>理发师悖论是罗素悖论的通俗版："村里的理发师只给所有不给自己刮脸的人刮脸。"问：他给不给自己刮脸？——两难。不过此比喻在严格性上有限制（"刮脸"的日常语义可避开二难），它只是辅助直觉的镜像，不是等价形式。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">四、三大学派的基础论战</h3>
<p>为拯救数学，三大学派提出三条不同的重建路线：</p>
<h4 class="crisis-h4">4.1 逻辑主义（Logicism）：罗素、弗雷格</h4>
<p><strong>纲领</strong>：数学概念可还原为逻辑概念，数学定理可从逻辑公理演绎得出。</p>
<p><strong>成果与困境</strong>：罗素与怀特海的《数学原理》（<em>Principia Mathematica</em>, 1910–1913）采用<strong>类型论</strong>（简单类型论 + 分支类型论）化解悖论——对象分层：个体在第 0 层，个体的集合在第 1 层，集合的集合在第 2 层……"属于"只允许从低层指向高层，自指结构在语法上被禁止。</p>
<p>代价高昂：分支类型论为规避"恶性循环"引入的可归约性公理显得 ad hoc，体系笨重，且最终仍需逻辑之外的公理（如无穷公理、还原公理），"数学即逻辑"的还原并未真正完成。</p>
<h4 class="crisis-h4">4.2 形式主义（Formalism）：希尔伯特</h4>
<p><strong>纲领</strong>：数学是形式符号系统；把数学公理化、形式化之后，用<strong>有穷方法</strong>（finitary methods，直观可靠的组合式推理）证明该系统的相容性——只要能证明"1=0 不可推出"，全部数学即告安全。</p>
<p>这是希尔伯特纲领（Hilbert's Program）的核心。其雄心在于：<strong>不放弃任何经典数学（包括实无限），同时用绝对可靠的元数学为它担保。</strong></p>
<p><strong>成果与困境</strong>：希尔伯特与阿克曼、贝尔奈斯等人为数论片段建立了相容性证明，纲领一度进展顺利——直到 1931 年哥德尔定理给出其原始形态不可逾越的边界。</p>
<h4 class="crisis-h4">4.3 直觉主义（Intuitionism）：布劳威尔</h4>
<p><strong>纲领</strong>：数学是心智的构造活动；逻辑规律是构造的产物而非先于数学的真理。<strong>排中律</strong>（$P \vee \neg P$ 恒真）只在有穷情形可靠，对无穷总体不适用——一个命题既未被证明也未被否证，是合法的中间状态。</p>
<p><strong>成果与困境</strong>：布劳威尔重建了构造性分析（连续函数的构造性理论等），其学生海丁给出直觉主义逻辑的形式系统。代价是：经典数学的大片领土（良序原理、许多存在性定理）在直觉主义框架内失效，多数数学家无法接受这种"自断手足"的方案。</p>
<h4 class="crisis-h4">4.4 公理化集合论：第四条路</h4>
<p>除三大学派外，实际影响最深远的方案是<strong>公理化集合论</strong>：保留经典数学，但用公理体系为集合论"限权"。策梅洛 1908 年提出公理系统，经弗兰克尔、斯科姆等完善，形成 <strong>ZFC</strong>（Zermelo–Fraenkel 集合论 + 选择公理）。其核心策略是<strong>限制概括原则</strong>：并非任意性质都可造集，只有公理明确允许的方式（分离、配对、幂集、替换……）可以造集。罗素悖论中的 $\{x \mid x \notin x\}$ 在 ZFC 内不可造，悖论就此失效。</p>
<p>ZFC 成为 20 世纪数学实际的工作基础——但它是"避雷"方案而非"根治"方案：它保证了（在元理论可靠的前提下）已知悖论造不出来，却不提供相容性的绝对证明。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">五、戏剧性结局：哥德尔不完备定理</h3>
<h4 class="crisis-h4">5.1 定理内容</h4>
<p>1930 年 9 月，哥德尔（Kurt Gödel）在柯尼斯堡会议上宣布；1931 年发表论文《论〈数学原理〉及有关系统中的形式不可判定命题》。核心结果两条：</p>
<blockquote class="crisis-quote">
<p><strong>第一不完备定理</strong>：任何<strong>相容的</strong>、包含初等算术的形式系统 $S$，必存在命题 $G$，使 $G$ 与 $\neg G$ 在 $S$ 中都不可证明。</p>
<p><strong>第二不完备定理</strong>：任何这样的系统 $S$，其<strong>相容性命题</strong> $\mathrm{Con}(S)$ 在 $S$ 自身内部不可证明。</p>
</blockquote>
<h4 class="crisis-h4">5.2 证明的机巧：对角线 + 自指</h4>
<p>哥德尔的构造是数学史上最精巧的论证之一：</p>
<ol class="crisis-oln">
<li><strong>哥德尔编码</strong>：把符号、公式、证明统统编码为自然数，使元数学命题变为算术命题；</li>
<li><strong>对角线引理</strong>：对任意性质 $\varphi$，可构造命题 $G$ 使 $S$ 证明"$G \iff \varphi(\ulcorner G \urcorner)$"——命题谈论自身的性质；</li>
<li><strong>取 $\varphi(x)$ = "x 不可证明"</strong>，得 $G$ 意为"<strong>G 在 S 中不可证明</strong>"；</li>
<li>若 $S$ 证明 $G$，则 $S$ 不相容；若 $S$ 证明 $\neg G$，同样矛盾。故相容的 $S$ 中 $G$ 不可判定；</li>
<li>第二定理进一步表明："$S$ 相容"恰好可用 $G$ 的算术替身表达，从而在 $S$ 内不可证。</li>
</ol>
<p>技术上的关键在于：自指不再是悖论（罗素悖论式），而是<strong>真理</strong>——$G$ 在标准模型中实际为真，只是不可证。悖论与不可判定命题的区别，正是"自指 + 否定"与"自指 + 受控"的区别。</p>
<h4 class="crisis-h4">5.3 对三大学派的裁决</h4>
<ul class="crisis-list">
<li><strong>对形式主义</strong>：第二定理直接否定了希尔伯特纲领的原始目标——用有穷方法在系统内证明系统相容。希尔伯特与贝尔奈斯调整了纲领（放宽元数学方法），证明论作为学科存续至今（根岑 1936 年以超穷归纳证明 PA 相容即其成果），但"绝对担保"已成泡影。</li>
<li><strong>对逻辑主义</strong>：数学不能完全还原为逻辑——不仅因还原工程未完成，更因任何足够强的演绎系统必有逻辑手段不可判定的真理。</li>
<li><strong>对直觉主义</strong>：哥德尔 1930 年代的工作（如经典算术对直觉主义算术的相对相容性）表明两大传统各有边界，谁也没有"独占真理"。</li>
</ul>
<h4 class="crisis-h4">5.4 后续图景：分岔的集合论宇宙</h4>
<p>不完备性的后果在集合论中持续发酵。哥德尔（1938）与科恩（1963）的<strong>可构造性与力迫法</strong>证明：<strong>连续统假设（CH）与 ZFC 相互独立</strong>——既不能证真，也不能证伪。"数学真理是否唯一"由此成为严肃问题：</p>
<ul class="crisis-list">
<li><strong>柏拉图主义/实在论</strong>：CH 有客观真值，只是 ZFC 不足以决定，需寻找新公理（大基数假设等）；</li>
<li><strong>形式主义/多元论</strong>：CH 在不同模型中真假不同，集合论宇宙可能是"多宇宙"而非"独一宇宙"。</li>
</ul>
<p>这场至今未决的争论，正是第三次危机余波的当代形态。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">六、危机的"解决"方式：被理解而非被消灭</h3>
<p>第三次危机与前两次的根本差异在于其<strong>结局形态</strong>：</p>
<table class="crisis-table"><thead><tr><th></th><th>第一次</th><th>第二次</th><th>第三次</th></tr></thead><tbody>
<tr><td>矛盾来源</td><td>直觉信念被证伪</td><td>概念层次未分化</td><td>逻辑自指的结构性产物</td></tr>
<tr><td>解决形态</td><td>实数构造：彻底闭合</td><td>分析算术化：彻底闭合</td><td><strong>被理解、被驯化、被管理</strong></td></tr>
<tr><td>确定性结局</td><td>数学获得实数连续统</td><td>分析获得严格地基</td><td><strong>绝对确定性被证明不存在</strong></td></tr>
</tbody></table>
<p>"被理解"的具体含义：</p>
<ol class="crisis-oln">
<li><strong>悖论被定位</strong>：类型论与公理化集合论表明，悖论源于无限制的自指与概括；只要对"集合"限权、对"层次"分层，已知悖论即不可再现；</li>
<li><strong>不完备被证明是内禀的</strong>：哥德尔定理表明任何包含算术的相容系统必然"漏题"——这不是工程缺陷，而是算术真理的结构属性；</li>
<li><strong>不确定性被管理</strong>：ZFC + 追加公理（选择公理、决定性公理、大基数）的研究成为常态，数学家在承认基础多元的前提下继续工作。</li>
</ol>
<hr class="crisis-hr">
<h3 class="crisis-h3">七、与前两次危机的比较</h3>
<h4 class="crisis-h4">7.1 同一演化链的第三环</h4>
<p>三次危机共享同一条演化链：</p>
<p><strong>直觉公理 → 反例/悖论 → 局部修补失效 → 概念重建 → 更严格的新基础</strong></p>
<ul class="crisis-list">
<li>第一次危机：可公度假设 → √2 → 几何转向 → 实数理论；</li>
<li>第二次危机：无穷小直觉 → 贝克莱 → 极限论 → 分析算术化（终点：集合论）；</li>
<li>第三次危机：集合作为普遍容器 → 罗素悖论 → 三大学派论战 → ZFC + 元数学觉悟。</li>
</ul>
<p>每一次危机的解决方案都恰好成为下一次危机的<strong>现场</strong>：比例论为实数理论预演了思想，实数理论把基础重担交给集合论，而集合论在王座上裂开。</p>
<h4 class="crisis-h4">7.2 关键差异</h4>
<ol class="crisis-oln">
<li><strong>矛盾的位置不同</strong>。前两次危机的矛盾在"数学对象"层面（量、无穷小）；第三次在"逻辑"层面——自指与概括的结构问题。因此前两次的解决是<strong>构造新对象/新语言</strong>，第三次的解决是<strong>反思数学自身的表达装置</strong>（元数学的诞生）。</li>
</ol>
<ol class="crisis-oln">
<li><strong>失败者与幸存者不同</strong>。前两次危机中，旧的直觉虽被修正但大体幸存；第三次危机中，三个基础纲领<strong>全部以原始形态失败或受限</strong>——逻辑主义还原未成，形式主义被第二定理击中，直觉主义主动收缩阵地。幸存的是 ZFC 这种"实用主义避雷方案"加上一种新的元态度。</li>
</ol>
<ol class="crisis-oln">
<li><strong>危机是否有终点不同</strong>。前两次有明确的闭合时刻（约公元前 370 年的古典闭合、1872 年的现代闭合）；第三次没有闭合时刻——连续统假设的独立性与大基数研究表明，基础问题是一个<strong>开放的、可能永远开放的研究领域</strong>。</li>
</ol>
<hr class="crisis-hr">
<h3 class="crisis-h3">八、哲学意涵</h3>
<ol class="crisis-oln">
<li><strong>绝对确定性的终结</strong>。哥德尔定理是数学史上罕见的现象：<strong>数学用自身的严格手段，划定了自身严格性的边界</strong>。这并非失败主义的理由——不完备≠不可靠：ZFC 至今未发现矛盾，日常数学在其框架内安然无恙。终结的是"终极基础一劳永逸"的梦想，而非数学的可靠性本身。</li>
</ol>
<ol class="crisis-oln">
<li><strong>自指的辩证法</strong>。罗素悖论与哥德尔定理揭示：自指既是危险的（悖论）又是富饶的（不可判定命题、对角线法、图灵停机问题、递归论）。危险与富饶的分界在于对自指的<strong>控制</strong>。这一区分后来深刻影响了计算机科学——图灵恰是在哥德尔工作的直接启发下定义了可计算性。</li>
</ol>
<ol class="crisis-oln">
<li><strong>基础多元主义的兴起</strong>。第三次危机之后的数学基础研究不再追求"唯一正确的地基"，而是比较不同的基础方案（ZFC、直觉主义、类型论/同伦类型论 HoTT、范畴论基础）的适用范围与解释力。基础从"神学的教条"变成"工程的选型"。</li>
</ol>
<ol class="crisis-oln">
<li><strong>危机叙事的终点</strong>。把三次危机连读可见一条上升弧线：第一次危机确立了<strong>证明</strong>，第二次危机确立了<strong>定义</strong>，第三次危机则确立了<strong>元数学的自省</strong>——数学不再只是对象层面的科学，同时是关于自身方法与限度的科学。从这个意义上说，第三次危机留给数学的不是某条定理，而是一种自觉。</li>
</ol>
<hr class="crisis-hr">
<h3 class="crisis-h3">九、结语</h3>
<p>第三次数学危机始于数学地基上的一道裂缝：被托付了全部确定性的集合论，竟从自身最朴素的原理中产出了矛盾。三大学派的论战没有产出胜利者，却产出了一门关于数学自身的科学；哥德尔定理没有摧毁数学，却永久改写了数学的自我理解——<strong>确定是分层的、局部的、有边界的，而这丝毫不妨碍数学的强大</strong>。与前两次危机相比，第三次危机没有终章：连续统假设的悬而未决、集合论宇宙的独一或多重之争，至今仍在延续。或许这正是它最深的启示——数学的确定性从来不是一座完工的大厦，而是一场永续的、自我批判的建设。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">参考文献</h3>
<ol class="crisis-oln">
<li>Kline, M. <em>Mathematical Thought from Ancient to Modern Times</em>（《古今数学思想》），Oxford University Press, 1972. 中译本：上海科学技术出版社，2014.</li>
<li>van Heijenoort, J. (ed.) <em>From Frege to Gödel: A Source Book in Mathematical Logic, 1879–1931</em>, Harvard University Press, 1967.（弗雷格—罗素通信、哥德尔原始论文等一手文献英译）</li>
<li>Russell, B. 致 Frege 信（1902-06-16）；Frege 回信（1902-06-22）. 载于上书.</li>
<li>Whitehead, A. N. &amp; Russell, B. <em>Principia Mathematica</em>, Cambridge University Press, 1910–1913.</li>
<li>Zermelo, E. "Untersuchungen über die Grundlagen der Mengenlehre I", <em>Mathematische Annalen</em>, 1908.</li>
<li>Gödel, K. "Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I", <em>Monatshefte für Mathematik und Physik</em>, 1931.</li>
<li>Gödel, K. <em>The Consistency of the Continuum Hypothesis</em>, Princeton University Press, 1940.</li>
<li>Cohen, P. "The Independence of the Continuum Hypothesis", <em>PNAS</em>, 1963–1964.</li>
<li>Gentzen, G. "Die Widerspruchsfreiheit der reinen Zahlentheorie", <em>Mathematische Annalen</em>, 1936.</li>
<li>Hilbert, P. &amp; Bernays, P. <em>Grundlagen der Mathematik</em>, Springer, 1934/1939.</li>
<li>Heyting, A. <em>Intuitionism: An Introduction</em>, North-Holland, 1956.</li>
<li>Hamkins, J. D. "The Set-Theoretic Multiverse", <em>Review of Symbolic Logic</em>, 2012.</li>
<li>李文林. 《数学史概论》（第三版），高等教育出版社，2011.</li>
<li>汪芳庭. 《公理集合论》，科学出版社，2004.</li>
</ol>
</div>
</div>

<div id="ar-mathpopular-panel-coastline" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathpopular-panel-coastline">
<div class="crisis-article">
<h2 class="crisis-title">英国海岸线有多长？</h2>
<h3 class="crisis-h3">——从测量悖论到分形几何</h3>
<blockquote class="crisis-quote">
<p><strong>摘要</strong>：一个国家或地区的海岸线究竟有多长？这个看似查查地图就能回答的问题，在 20 世纪引发了数学与地理学的双重困惑：对同一段海岸线，用不同长度的尺子测量，会得到截然不同且没有公认上限的结果。本报告以英国海岸线长度悖论为线索，回顾理查森的实证发现与曼德博 1967 年的经典解答，介绍自相似性、分形维数等核心概念；说明海岸线在理想化意义下长度趋于无穷、其恰当的定量刻画是分形维数而非长度；并简述分形几何在地理、生物、材料与金融等领域的深远影响。海岸线悖论提示我们：测量结果隐含着尺度这一前提，面对复杂对象，应当寻找不依赖尺度的特征量。</p>
<p><strong>关键词</strong>：海岸线悖论；分形；自相似；分形维数；尺度依赖</p>
</blockquote>
<hr class="crisis-hr">
<h3 class="crisis-h3">一、引言：一个"测不准"的长度</h3>
<p>"英国的海岸线到底有多长？"这个问题听起来像一道地理填空题：翻开地图量一量，再乘以比例尺即可。然而，正是这个朴素的问题，在 20 世纪动摇了人们对"长度"与"测量"的常识性理解，并最终催生了一门全新的几何学——分形几何。</p>
<p>故事要从英国科学家刘易斯·弗赖·理查森（Lewis Fry Richardson）说起。他在 1961 年发表的一项关于邻国冲突的统计研究的附录中，提出了一个问题：国界与海岸线究竟该如何计量？他查阅各国资料后发现，对同一条边界，不同国家的官方记录差异大得惊人：西班牙与葡萄牙之间的边界，葡萄牙记载约 987 公里，西班牙却记载约 1214 公里；荷兰与比利时之间的边界，两方记录分别约为 380 公里和 449 公里。</p>
<p>如此巨大的差异显然不能用测量误差来解释。理查森进一步用"沿地图折线拼接"的办法做了系统测算，发现一个奇特的规律：<strong>使用的尺子越短，测得的长度就越大</strong>，而且总长度并不像测量圆周长那样趋于某个稳定值。这个发现在当时几乎无人问津，直到 1967 年，法裔美籍数学家伯努瓦·曼德博（Benoit Mandelbrot）在《科学》杂志发表著名论文《英国海岸线有多长？——统计自相似与分形维数》，才给出深刻而完整的解答。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">二、悖论的产生：尺子越短，海岸线越长</h3>
<p>要理解这个悖论，先把"测量"操作定义清楚。经典做法是用一根长度为 ε 的直尺，沿海岸最外沿一段一段拼接折线，直至绕行一圈；若共拼了 N 段，则测得总长</p>
<p class="crisis-math">$$L(\varepsilon) = N(\varepsilon) \times \varepsilon$$</p>
<p>对于光滑曲线，例如圆，尺子越短误差越小，$L(\varepsilon)$ 会收敛到确定的周长——这正是我们直觉中"真实长度"的来源。</p>
<p>海岸线却完全不同。把地图越放越大，你会看到海湾里嵌着小海湾，半岛尖端伸出更小的半岛，礁石上还有更细密的锯齿。每当尺子缩短，原先被"跨过"的弯曲就被计入长度，总长随之增加；而更小尺度的新细节仍会继续显现。海岸线似乎在每一个尺度上都保持"同样程度的粗糙"，长度因此步步攀升、不见尽头。</p>
<p>为什么光滑曲线没有这个问题？数学上，用折线逼近圆周时，误差随 ε 的缩小而快速衰减，所有被"跨过"的弧段总长只占一个越来越小的比例，最终趋于零；而海岸线的细节并不会消失，每一次缩短尺子都会从新的弯曲中"长出"实实在在的长度。两者之别，正在于结构是否随尺度细化而"用之不竭"。</p>
<p>理查森用数据把这一现象总结成简洁的幂律：$\log L$ 与 $\log \varepsilon$ 大致落在一条直线上，即</p>
<p class="crisis-math">$$L(\varepsilon) = C \cdot \varepsilon^{1-D}$$</p>
<p>其中 $D$ 是刻画海岸线粗糙程度的正数。在双对数坐标下，这条直线的斜率恰为 $1-D$（见图1）。如果海岸线像圆一样光滑，$D$ 会趋近 1，长度收敛；而对真实海岸线，$D$ 明显大于 1，此时让 ε 无限缩小，$L$ 将趋于无穷。<strong>"海岸线无限长"并非夸张修辞，而是幂律结构在数学上的必然结论。</strong></p>
<figure class="crisis-figure"><img src="/images/fractal/coastline-fig1.webp" width="1100" height="715" alt="海岸线长度随测量尺度变化的示意图（双对数坐标）" loading="lazy"><figcaption>图1　海岸线长度随测量尺度变化的示意图（双对数坐标；直线斜率为 1−D，D 为分形维数）</figcaption></figure>
<hr class="crisis-hr">
<h3 class="crisis-h3">三、分形：局部是整体的缩影</h3>
<p>曼德博给这类形状起了名字：<strong>分形</strong>（fractal），词根取自拉丁语 <em>fractus</em>，意为"破碎、不规则"。分形的共同特征是<strong>自相似性</strong>——局部在统计意义上重复着整体的形态，并且这种相似跨越很宽的尺度范围。云的边缘、树枝的分叉、河流的支流网络，都具有类似性质。</p>
<p>理解分形最经典的模型是<strong>科赫曲线</strong>（Koch curve）。从一条直线段开始，把中间三分之一"挖去"，向外隆起一个等边三角形；再对新生成的每一段重复同样操作（见图2）。每迭代一次，曲线总长变为原来的 $4/3$ 倍；迭代无穷多次后，这条曲线在任意小的范围内都无限曲折，总长趋于无穷大，却被限制在有限的区域里——一条"无限长的线"可以围出"有限的面积"，这正是经典几何语言失效的地方。</p>
<figure class="crisis-figure"><img src="/images/fractal/coastline-fig2.webp" width="1100" height="209" alt="科赫曲线的迭代构造" loading="lazy"><figcaption>图2　科赫曲线的迭代构造：每一步长度增加为原来的 4/3 倍，最终长度趋于无穷</figcaption></figure>
<p>如何刻画这类"比线更复杂、又不足以填满一个面"的对象？曼德博引入了<strong>分形维数</strong>。设想把一个图形分成 $N$ 个与整体相似的小副本，每个副本按比例 $1/r$ 缩小，则维数定义为：</p>
<p class="crisis-math">$$D = \frac{\ln N}{\ln(1/r)}$$</p>
<p>对普通线段：可分成 $N=2$ 段，每段为原来的 $1/2$，$D=\ln 2/\ln 2=1$；对正方形：$N=4$、$r=1/2$，$D=\ln 4/\ln 2=2$。而对科赫曲线：整体放大 $3$ 倍后，其中的任何一段自身都由 $4$ 个小副本拼成，故其维数为</p>
<p class="crisis-math">$$D_{\text{Koch}} = \frac{\ln 4}{\ln 3} \approx 1.2619$$</p>
<p>分形维数可以是分数，它度量的是图形如何"填充空间"：$D$ 越接近 1，对象越接近光滑曲线；$D$ 越接近 2，对象越曲折稠密、越接近填满一个平面。对海岸线而言，<strong>维数而非长度，才是其更本质的几何指纹</strong>。</p>
<p>这个结论并不玄妙，完全可以亲手验证。找来同一地区两种比例尺的地图，用两脚规（或一段棉线）以不同的开度 ε 沿海岸拼接，记录每组的段数并算出 $L(\varepsilon)$；再把 ε 与 L 取对数、在坐标纸上描点。你会发现这些点确实近似排成一条直线，直线的斜率就给出当地海岸线的分形维数估计——这正是理查森当年的做法，也是今天课堂上常见的分形探究实验。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">四、给海岸线"量维"：从数据到维数</h3>
<p>曼德博重新分析了理查森的原始数据，指出各国边界记录的巨大差异，正源于它们各自不同的分形维数：一条边界或海岸线的粗糙程度不同，其长度随尺子缩短而膨胀的速度也不同。他把代表性测算结果整理成一张著名的对照表（见表1）。</p>
<table class="crisis-table">
<thead><tr><th>对象</th><th>分形维数 D</th><th>形态特征</th></tr></thead>
<tbody>
<tr><td>南非海岸线</td><td>约 1.02</td><td>平直光滑，接近普通曲线</td></tr>
<tr><td>澳大利亚海岸线</td><td>约 1.13</td><td>有海湾但整体平缓</td></tr>
<tr><td>葡萄牙陆地边界</td><td>约 1.14</td><td>较为规则</td></tr>
<tr><td>德国陆地边界（1899年地图）</td><td>约 1.15</td><td>较为规则</td></tr>
<tr><td>英国西海岸</td><td>约 1.25</td><td>半岛与海湾密布，极为破碎</td></tr>
<tr><td>挪威海岸线</td><td>约 1.52</td><td>冰川侵蚀峡湾，极度曲折</td></tr>
</tbody>
</table>
<p><em>表1　若干海岸线与国界的分形维数估计值（数据据 Mandelbrot, 1967；挪威值引自 Feder, 1988）</em></p>
<p>这张表揭示了维数的地理含义：它与海岸线的地质成因和侵蚀历史密切相关。南非海岸构造平稳、浪蚀均匀，$D$ 接近 1；英国西海岸沉降与海侵作用显著，岬角与海湾层层嵌套，$D$ 约为 1.25；挪威海岸被第四纪冰川反复刨蚀出密集峡湾，$D$ 高达 1.52，是已知最曲折的海岸线之一。可以说，$D$ 是海岸线在漫长地质演化中留下的"粗糙度指纹"。</p>
<p>分形维数也解释了制图学中的一个实际困扰：不同比例尺的地图不能直接比较长度。把地图从百万分之一放大到十万分之一，原本被简化掉的岬角与湾澳重新出现，长度数字随之改变。<strong>制图综合的本质，正是人为设定一个最小尺度，把分形"截断"成一条普通曲线。</strong></p>
<hr class="crisis-hr">
<h3 class="crisis-h3">五、那么，英国海岸线到底有多长？</h3>
<p>严格地说，这个问题没有唯一答案。在理想化的数学模型下，自然海岸线在可观测的每一尺度上都存在更细的结构，因此当尺子无限缩短时，长度趋向无穷。曼德博的回答是：<strong>海岸线的长度并非其固有属性</strong>，提问的正确方式应当是"在什么尺度下量、用什么维数刻画"。</p>
<p>现实测量总是在有限尺度下进行的，答案因此取决于测量目的与规范。粗尺度的概查适用于航海图与国土统计；细尺度的测量则用于海岸带管理、湿地调查等精细场景。正因如此，不同资料给出的英国海岸线长度从约 <strong>1.1 万公里到近 1.8 万公里</strong>不等——差异如此悬殊，却都"没有算错"，恰恰是尺度依赖性的直接体现。</p>
<p>进入卫星遥感和数字地图时代后，人们可以在多个尺度上自动重测海岸线，幂律关系被一再验证；同时海岸线本身也在随潮汐涨落、泥沙淤积和海岸工程而动态变化。换言之，海岸线的长度不仅在空间尺度上没有唯一值，在时间维度上同样没有恒定值——<strong>固定答案从一开始就不存在</strong>。</p>
<p>从这个意义上说，海岸线悖论带来的不是挫败，而是解放：与其追问一个不存在的"真实长度"，不如转向尺度不变的量。分形维数不随尺子长短而改变，才是描述海岸线几何品格的恰当参数。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">六、从一个悖论到一门新几何学</h3>
<p>1967 年的论文之后，曼德博于 1982 年出版《大自然的分形几何学》，系统建立了分形理论。他的名言概括了这场变革的精神：</p>
<blockquote class="crisis-quote">
<p>"云不是球，山不是锥，海岸线不是圆，树皮不是光滑的面，闪电也不是沿直线行进的。"</p>
</blockquote>
<p>欧几里得几何擅长处理理想光滑的对象，而自然界的常态是粗糙、破碎与多尺度。此后几十年，分形几何成为众多领域的通用语言：在地理信息系统中，多尺度表达与地图综合以分形原理为基础；水文学家用分形描述水系与河网的发育；生理学家发现气管与血管的分支结构，使肺能在有限体积内摊开巨大的气体交换面积；材料学家用断裂面的维数评估材料韧性；工程师设计了覆盖多个频段的分形天线；经济学家则在金融价格序列中发现了显著的分形统计特征。</p>
<p>海岸线悖论还留下一个重要的方法论警示：<strong>任何测量结果都隐含着"尺度"这一前提参数</strong>。面对细节无穷的复杂对象，先问清测量在哪个尺度上进行，再寻找不依赖尺度的特征量，这是现代科学研究复杂系统的基本素养。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">七、结语</h3>
<p>"英国海岸线有多长"，一个近乎孩子气的问题，最终得到的回答却是：<strong>没有唯一长度，因为海岸线是分形。</strong>理查森的实测数据与曼德博的几何洞察共同说明：当被测对象足够复杂时，问题本身可能需要被重新表述——长度不再适用，维数登上舞台。这是 20 世纪科学中最漂亮的"提问升级"之一。</p>
<p>下一次在海边眺望曲折的岸线，或在地图上描摹半岛与海湾时，不妨记得：你看到的每一层粗糙里都藏着更细的粗糙，而刻画这份无穷层次的语言，正是分形几何。科学的进步，有时就始于对最平凡问题的较真。</p>
<p><strong>留给读者的三个延伸思考</strong>：</p>
<ol class="crisis-oln">
<li>把科赫曲线的三段式构造用在等边三角形的三条边上，得到"科赫雪花"，它的周长和面积各自是有限还是无限？</li>
<li>若某段海岸线的分形维数为 1.5，当尺子缩短为原来的十分之一时，测得长度大约变为多少倍？</li>
<li>环顾身边，还有哪些事物在统计意义上是分形的？</li>
</ol>
<hr class="crisis-hr">
<h3 class="crisis-h3">参考文献</h3>
<ol class="crisis-oln">
<li>Richardson, L. F. The problem of contiguity: an appendix of statistics of deadly quarrels[J]. <em>General Systems Yearbook</em>, 1961, 6: 139-187.</li>
<li>Mandelbrot, B. B. How long is the coast of Britain? Statistical self-similarity and fractional dimension[J]. <em>Science</em>, 1967, 156(3775): 636-638.</li>
<li>Mandelbrot, B. B. <em>The Fractal Geometry of Nature</em>[M]. New York: W. H. Freeman, 1982.</li>
<li>Feder, J. <em>Fractals</em>[M]. New York: Plenum Press, 1988.</li>
</ol>
</div>
</div>

<div id="ar-mathpopular-panel-prisoner" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathpopular-panel-prisoner">
<div class="crisis-article">
<h2 class="crisis-title">从囚徒困境看博弈论：生活中的策略智慧</h2>
<h3 class="crisis-h3">——当最优选择取决于别人的选择</h3>
<blockquote class="crisis-quote">
<p><strong>摘要</strong>：博弈论（Game Theory）研究的是当你的最优选择取决于别人的选择时，你该如何决策。本文从经典的囚徒困境出发，介绍占优策略、纳什均衡、智猪博弈、协调博弈、斗鸡博弈、重复博弈等核心概念，并通过公共物品博弈、拍卖与"赢家的诅咒"、猜拳与混合策略等生活化例子，展示博弈论如何解释军备竞赛、价格战、公地悲剧、交通规则等现实现象。核心结论是：个体理性不等于集体理性；改变收益结构可以改变结局；长期视角下，合作能通过"以牙还牙"等策略自发涌现。</p>
</blockquote>
<hr class="crisis-hr">
<h3 class="crisis-h3">一、引言：什么是博弈论？</h3>
<p>博弈论研究的是<strong>当你的最优选择取决于别人的选择时，你该如何决策</strong>。它听起来高深，其实无处不在：两家奶茶店打价格战、室友商量谁打扫卫生、你和朋友选择看哪部电影——只要你做决定时要"猜"别人的反应，你就身处一场博弈之中。</p>
<p>博弈论的一个重要分支诞生于冷战时期的美国兰德公司（RAND Corporation），而让它真正"出圈"的，是那个后来家喻户晓的模型——<strong>囚徒困境</strong>。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">二、囚徒困境：背叛还是合作？</h3>
<h4 class="crisis-h4">2.1 经典设定</h4>
<p>两名嫌疑人甲和乙因共同作案被捕，警方将其分开审讯，各自面临选择：</p>
<ul class="crisis-list">
<li><strong>坦白（背叛对方）</strong></li>
<li><strong>抵赖（与同伴合作，保持沉默）</strong></li>
</ul>
<p>警方给出的规则是：</p>
<table class="crisis-table">
<thead><tr><th></th><th>乙：抵赖</th><th>乙：坦白</th></tr></thead>
<tbody>
<tr><td><strong>甲：抵赖</strong></td><td>各判 1 年</td><td>甲判 10 年，乙当庭释放</td></tr>
<tr><td><strong>甲：坦白</strong></td><td>甲当庭释放，乙判 10 年</td><td>各判 5 年</td></tr>
</tbody>
</table>
<h4 class="crisis-h4">2.2 数学分析：什么是"占优策略"</h4>
<p>用数字表示收益（判刑越短收益越高，取负值，比如判 1 年记为 -1）：</p>
<table class="crisis-table">
<thead><tr><th></th><th>乙：抵赖</th><th>乙：坦白</th></tr></thead>
<tbody>
<tr><td><strong>甲：抵赖</strong></td><td>(-1, -1)</td><td>(-10, 0)</td></tr>
<tr><td><strong>甲：坦白</strong></td><td>(0, -10)</td><td>(-5, -5)</td></tr>
</tbody>
</table>
<p>站在甲的角度推理：</p>
<ul class="crisis-list">
<li>如果乙抵赖：我坦白得 0（释放）＞ 抵赖得 -1 → <strong>坦白更好</strong></li>
<li>如果乙坦白：我坦白得 -5 ＞ 抵赖得 -10 → <strong>坦白更好</strong></li>
</ul>
<p>也就是说，<strong>无论乙怎么选，甲坦白都更划算</strong>。这样的策略叫做<strong>占优策略（Dominant Strategy）</strong>。由于两人处境完全对称，乙也会得出同样的结论。于是双方都选择坦白，各判 5 年。</p>
<h4 class="crisis-h4">2.3 悲剧所在：纳什均衡 ≠ 集体最优</h4>
<p>（坦白，坦白）这个结果组合，就是<strong>纳什均衡</strong>：给定对方的选择，任何一方单独改变策略都不会变得更好。谁单独反悔谁吃亏，所以这个结果"稳如泰山"。</p>
<p>但注意：如果两人<strong>都抵赖</strong>，各判 1 年，明明是双赢！可惜（抵赖，抵赖）不是纳什均衡——每个人都有强烈的动机偷偷背叛，去换取当庭释放。</p>
<blockquote class="crisis-quote">
<p><strong>囚徒困境的核心洞见：个体理性 ≠ 集体理性。每个人都做出对自己"最优"的选择，加总起来却是最糟糕的结果。</strong></p>
</blockquote>
<p>这就是为什么军备竞赛、价格战、公海过度捕捞、办公室加班内卷会反复上演——它们的结构都是囚徒困境。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">三、不止是困境：其他经典博弈模型</h3>
<h4 class="crisis-h4">3.1 智猪博弈：搭便车问题</h4>
<p>大猪和小猪同关一个猪圈，按下食槽边的按钮要付出 2 份体力，出料 10 份。小猪的占优策略是<strong>等</strong>——按按钮反而又累又亏；大猪明知小猪在等，只好自己去按。</p>
<blockquote class="crisis-quote">
<p><strong>现实映射</strong>：小公司模仿大公司的研发成果、股市散户跟风机构、"搭便车"行为。实力弱的一方往往选择等待，实力强的一方不得不承担成本。</p>
</blockquote>
<h4 class="crisis-h4">3.2 协调博弈：靠左走还是靠右走？</h4>
<p>迎面走来的两个人，一个向左、一个向右闪，结果撞在一起；双方选同一边，则顺利通过。这里有两个纳什均衡：（左，左）和（右，右），没有占优策略，关键是<strong>双方要协调到同一个均衡上</strong>。</p>
<blockquote class="crisis-quote">
<p><strong>现实映射</strong>：交通规则、行业标准（为什么键盘排列是 QWERTY？）、技术标准之争（充电接口统一）。一旦协调成功，就会形成强大的"路径依赖"。</p>
</blockquote>
<h4 class="crisis-h4">3.3 斗鸡博弈：谁先眨眼？</h4>
<p>两辆车迎面相向而行，谁先转向谁"怂"，都不转则同归于尽：</p>
<table class="crisis-table">
<thead><tr><th></th><th>对方转向</th><th>对方不转</th></tr></thead>
<tbody>
<tr><td><strong>我转向</strong></td><td>丢脸但安全（0）</td><td>惨败（-10）</td></tr>
<tr><td><strong>我不转</strong></td><td>大胜（10）</td><td>同归于尽（-100）</td></tr>
</tbody>
</table>
<p>最危险的局面恰恰在于：<strong>双方都想通过表现"绝不退缩"来吓退对方</strong>。</p>
<blockquote class="crisis-quote">
<p><strong>现实映射</strong>：古巴导弹危机、商业谈判中的"极限施压"、马路上互不相让的"路怒"。破解之道往往是"可信的承诺"或"故意自断后路"（如把方向盘扔出窗外，让对方确信你退无可退）。</p>
</blockquote>
<hr class="crisis-hr">
<h3 class="crisis-h3">四、重复博弈：一锤子买卖 vs 抬头不见低头见</h3>
<p>一次性囚徒困境中背叛是必然的。但如果博弈<strong>无限重复</strong>呢？</p>
<p>美国学者阿克塞尔罗德（Robert Axelrod）在 1980 年举办了一场著名的计算机锦标赛：征集各种策略程序进行两两对决，反复进行囚徒困境博弈。</p>
<p>结果冠军是一个最简单的策略——<strong>以牙还牙（Tit for Tat）</strong>，规则只有两条：</p>
<ol class="crisis-oln">
<li>第一轮选择<strong>合作</strong>；</li>
<li>之后每一轮<strong>模仿对方上一轮的选择</strong>。</li>
</ol>
<p>它为什么能赢？因为它同时具备四个品质：</p>
<ul class="crisis-list">
<li><strong>善良</strong>：从不首先背叛；</li>
<li><strong>可激怒</strong>：立刻惩罚背叛，不让对方占便宜；</li>
<li><strong>宽容</strong>：对方回头，立刻原谅，不记仇；</li>
<li><strong>清晰</strong>：规则简单，对方一眼看懂。</li>
</ul>
<blockquote class="crisis-quote">
<p><strong>核心结论：只要博弈会重复、彼此还会再见面，合作就能自发涌现。</strong>未来足够重要时，背叛的短期好处就抵不过失去长期合作的损失。</p>
</blockquote>
<p>这解释了为什么：一次性交易容易欺诈（旅游景点宰客），而长期关系更重信誉（社区小店不敢坑熟客）。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">五、更多生活化的例子</h3>
<h4 class="crisis-h4">例子 1：公共物品博弈——寝室卫生难题</h4>
<p>四个室友，打扫整个寝室要付出个人成本，但干净的收益人人共享：</p>
<ul class="crisis-list">
<li>你打扫：付出 10，自己只享受 1/4 的收益，还免费让三人搭了便车；</li>
<li>你不打扫：如果别人打扫，你白赚。</li>
</ul>
<p>每个人的占优策略都是"偷懒"→ 结果寝室脏乱差，<strong>这就是"公地悲剧"</strong>。</p>
<p>现实解法：轮值表（让策略可预测）、罚钱（改变收益结构）、荣誉激励（把"被人瞧不起"的成本算进收益）。</p>
<h4 class="crisis-h4">例子 2：拍卖与"赢家的诅咒"</h4>
<p>拍卖一块油田，你对储量有估计，别人也有。谁出价最高谁赢——但想想看：<strong>所有竞标者中，你对油田的估计最乐观，往往也意味着最不准</strong>。赢下拍卖的那一刻，你可能已经高估了它的价值。</p>
<blockquote class="crisis-quote">
<p>启示：在竞争性博弈中，不要只问"我能不能赢"，还要问"我赢了之后意味着什么"。</p>
</blockquote>
<h4 class="crisis-h4">例子 3：猜拳与混合策略</h4>
<p>石头剪刀布是最简单的<strong>零和博弈</strong>：你赢的就是我输的。它的唯一纳什均衡是<strong>混合策略</strong>——三种手势各以 1/3 概率随机出。一旦你有任何规律，就会被对手利用。</p>
<blockquote class="crisis-quote">
<p>启示：在对抗性场合，<strong>可预测就是最大的弱点</strong>。足球点球大战中，门将和射手确实都在随机化自己的选择，这一点已被大量真实比赛数据分析证实。</p>
</blockquote>
<hr class="crisis-hr">
<h3 class="crisis-h3">六、博弈论教会我们的三件事</h3>
<ol class="crisis-oln">
<li><strong>把别人的反应纳入自己的计算。</strong>你的最优选择从来不是孤立的，"换位思考"在博弈论中不是美德，而是基本功。</li>
<li><strong>改变收益，就能改变结局。</strong>囚徒困境不是宿命。签订合同（背叛罚款）、建立声誉机制、引入第三方执行，本质都是在改写博弈的收益表，让合作成为新的纳什均衡。</li>
<li><strong>长期视角瓦解一次性背叛的诱惑。</strong>如果打算长久相处，就别玩"一锤子买卖"的逻辑——善良、可激怒、宽容、清晰的"以牙还牙"，或许就是普通人最朴素的处世算法。</li>
</ol>
<hr class="crisis-hr">
<h3 class="crisis-h3">延伸阅读</h3>
<ul class="crisis-list">
<li>冯·诺依曼 & 摩根斯坦《博弈论与经济行为》（1944，奠基之作）</li>
<li>约翰·纳什：非合作博弈与纳什均衡（电影《美丽心灵》原型）</li>
<li>托马斯·谢林《冲突的策略》（2005 年诺贝尔奖，承诺与威慑）</li>
<li>罗伯特·阿克塞尔罗德《合作的进化》（重复博弈与以牙还牙）</li>
<li>约翰·梅纳德·史密斯《演化与博弈论》（ESS 与复制子方程）</li>
<li>迪克西特 & 奈尔伯夫《策略思维》（面向大众的最佳入门）</li>
<li>Nisan 等《算法博弈论》（PPAD、机制设计与计算视角，进阶）</li>
</ul>
<blockquote class="crisis-quote">
<p><strong>一句话总结：博弈论不是教你算计别人，而是帮你看清"为什么会有这样的局面"，以及"如何设计规则让大家都过得更好"。</strong></p>
</blockquote>
</div>
</div>

</div>
</section>

<section id="ar-section-awards" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-awards" hidden>
<div class="ai-tabs">
  <div class="ai-tab-btns" role="tablist">
    <button type="button" class="ai-tab-btn tab-yellow active" role="tab" id="tab-ar-mathawards-panel-fields" aria-controls="ar-mathawards-panel-fields" aria-selected="true" tabindex="0" onclick="switchMathAwards('fields', this)">菲尔兹奖</button>
    <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-mathawards-panel-abel" aria-controls="ar-mathawards-panel-abel" aria-selected="false" tabindex="-1" onclick="switchMathAwards('abel', this)">阿贝尔奖</button>
    <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-mathawards-panel-wolf" aria-controls="ar-mathawards-panel-wolf" aria-selected="false" tabindex="-1" onclick="switchMathAwards('wolf', this)">沃尔夫数学奖</button>
  </div>

  <div id="ar-mathawards-panel-fields" class="ai-tab-panel active" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathawards-panel-fields">
<h2 class="ai-math-title">菲尔兹奖：给四十岁以下数学家的桂冠</h2>
<p>诺贝尔奖里没有数学，于是数学界自己造了两顶冠冕。菲尔兹奖由加拿大数学家约翰·查尔斯·菲尔兹捐资设立，1936 年首次颁发，此后每四年在国际数学家大会（ICM）上颁出二至四枚，只授予<b>获奖当年元旦前未满四十岁</b>的数学家——它奖励的不仅是已有成就，更是对未来工作的期许。奖章正面是阿基米德头像，背面刻着那句拉丁铭文：<i>"汇聚自全球的数学家，因卓越的著作而授予"</i>。奖金额度并不惊人（约 1.5 万加元），江湖地位却无人能及。</p>
<p>1936 至 2022 年共有 64 人获奖，2026 年费城大会又添 4 位，<strong>邓煜</strong>与<strong>王虹</strong>成为首批中国籍得主。下表按年份列出全部获奖者与 IMU 官方授奖理由；<strong>点击人名可跳转到「数学人物」中该数学家的小传</strong>。</p>
<h3>历届获奖者（1936–2026）</h3>
<table class="award-table">
<tr><th style="width:5.5rem">年份</th><th style="width:11rem">获奖者</th><th>获奖理由</th></tr>
<tr><td class="aw-year">1936</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('ahlfors'); return false;">阿尔福斯</a></td><td>研究整函数与亚纯函数反函数的黎曼曲面所对应的覆盖曲面，开创了一个分析学新领域</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('douglas'); return false;">道格拉斯</a></td><td>在普拉托问题上作出重要工作——寻找由给定边界所确定的极小曲面</td></tr>
<tr><td class="aw-year">1950</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('schwartz'); return false;">施瓦茨</a></td><td>创立分布理论，一种受理论物理中狄拉克 δ 函数启发的新广义函数概念</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('selberg'); return false;">塞尔伯格</a></td><td>推广 Brun 筛法；取得黎曼 ζ 函数零点的重大结果；给出素数定理的初等证明（与 Erdős 合作），并推广到任意算术级数中的素数</td></tr>
<tr><td class="aw-year">1954</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('kodaira'); return false;">小平邦彦</a></td><td>调和积分理论的重大结果及其在 Kähler 流形（特别是代数簇）上的大量应用；用层上同调证明这类簇是 Hodge 流形</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('serre'); return false;">塞尔</a></td><td>球面同伦群的重大结果，尤其是谱序列方法的运用；用层重新表述并推广复变函数论的主要结果</td></tr>
<tr><td class="aw-year">1958</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('roth'); return false;">罗特</a></td><td>1955 年解决著名的 Thue–Siegel 问题（有理数对代数数的逼近）；1952 年证明不含三项等差数列的序列密度为零（Erdős–Turán 1935 年猜想）</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('thom'); return false;">托姆</a></td><td>1954 年发明并发展代数拓扑中的配边理论；这一流形分类从根本上运用同伦论，成为广义上同调理论的首要范例</td></tr>
<tr><td class="aw-year">1962</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('hormander'); return false;">赫尔曼德</a></td><td>偏微分方程工作，特别是对线性微分算子一般理论的贡献；相关问题可追溯到 1900 年大会的希尔伯特问题之一</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('milnor'); return false;">米尔诺</a></td><td>证明七维球面可以有多种微分结构，由此开创微分拓扑这一领域</td></tr>
<tr><td class="aw-year">1966</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('atiyah'); return false;">阿蒂亚</a></td><td>与 Hirzebruch 合作 K 理论；与 Singer 共同证明复流形上椭圆算子的指标定理；与 Bott 合作证明与 Lefschetz 公式相关的不动点定理</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('cohen'); return false;">科恩</a></td><td>用力迫法证明集合论中选择公理与广义连续统假设的独立性；后者是 1900 年大会的希尔伯特第一问题</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('grothendieck'); return false;">格罗滕迪克</a></td><td>在 Weil 与 Zariski 工作的基础上实现代数几何的根本进展；引入 K 理论思想（格罗滕迪克群与环）；以著名的“Tohoku 论文”革新同调代数</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('smale'); return false;">斯梅尔</a></td><td>在微分拓扑中证明 n≥5 的广义庞加莱猜想；引入手柄体方法解决这一及相关问题</td></tr>
<tr><td class="aw-year">1970</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('baker'); return false;">贝克</a></td><td>推广 Gelfond–Schneider 定理（希尔伯特第七问题的解），并由此生成此前未被识别的超越数</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('hironaka'); return false;">广中平祐</a></td><td>把 Zariski 只对维数 ≤3 证明的代数簇奇点解消定理推广到任意维数</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('novikov'); return false;">诺维科夫</a></td><td>拓扑学的重要进展，最著名的是证明可微流形庞特里亚金类的拓扑不变性；包括对 Thom 空间上同调与同伦的研究</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('thompson'); return false;">汤普森</a></td><td>与 Feit 共同证明所有非循环有限单群的阶为偶数；其后续工作确定了极小有限单群</td></tr>
<tr><td class="aw-year">1974</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('bombieri'); return false;">邦别里</a></td><td>素数、单叶函数与局部 Bieberbach 猜想、多复变函数论、偏微分方程与极小曲面（特别是高维 Bernstein 问题）方面的重大贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('mumford'); return false;">芒福德</a></td><td>模簇（其点参数化某类几何对象同构类的簇）的存在性与结构问题；对代数曲面理论的多项重要贡献</td></tr>
<tr><td class="aw-year">1978</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('deligne'); return false;">德利涅</a></td><td>解决关于有限域上黎曼猜想的三个韦伊猜想；其工作极大统一了代数几何与代数数论</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('fefferman'); return false;">费弗曼</a></td><td>若干创新革新了多维复分析的研究，找到了经典（低维）结果的正确推广</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('margulis'); return false;">马尔古利斯</a></td><td>对李群结构的创新性分析，工作涉及组合学、微分几何、遍历论、动力系统与李群</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('quillen'); return false;">奎伦</a></td><td>高阶代数 K 理论的主要构建者——一种成功运用几何与拓扑方法表述并解决代数重大问题的新工具</td></tr>
<tr><td class="aw-year">1982</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('connes'); return false;">孔涅</a></td><td>算子代数理论：III 型因子的一般分类与结构定理、超有限因子自同构的分类、单射因子的分类，以及 C* 代数对叶状结构与微分几何的应用</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('thurston'); return false;">瑟斯顿</a></td><td>革新二维与三维拓扑研究，展现分析、拓扑与几何的相互作用；提出很大一类闭三维流形带有双曲结构的思想</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('yau'); return false;">丘成桐</a></td><td>微分方程方面的贡献，以及对代数几何中卡拉比猜想、广义相对论中正质量猜想、实与复蒙日–安培方程的贡献</td></tr>
<tr><td class="aw-year">1986</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('donaldson'); return false;">唐纳森</a></td><td>主要因四维流形拓扑的工作，特别是证明欧氏四维空间上存在不同于通常结构的微分结构</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('faltings'); return false;">法尔廷斯</a></td><td>用算术代数几何方法，主要因证明莫德尔猜想而获奖</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('freedman'); return false;">弗里德曼</a></td><td>发展四维流形拓扑分析的新方法，成果之一是四维庞加莱猜想的证明</td></tr>
<tr><td class="aw-year">1990</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('drinfeld'); return false;">德林费尔德</a></td><td>朗兰兹纲领与量子群两大领域取得决定性突破，引发大量后续研究</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('jones'); return false;">琼斯</a></td><td>纽结多项式工作，发现了现在所称的琼斯多项式；其来源出人意料——源于冯·诺依曼代数理论，解决了纽结理论的若干经典问题</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('mori'); return false;">森重文</a></td><td>近十余年代数几何最深刻、最激动人心的进展——森的极小模型纲领，与三维代数簇的分类问题相关</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('witten'); return false;">威滕</a></td><td>虽是物理学家，数学素养却少有数学家能及；一再以物理洞察的精彩应用带给数学界新的深刻定理</td></tr>
<tr><td class="aw-year">1994</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('bourgain'); return false;">布尔甘</a></td><td>触及数学分析的若干核心议题——Banach 空间几何、高维凸性、调和分析、遍历论与数学物理中的非线性偏微分方程，在长期停滞的问题上取得惊人突破</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('lions'); return false;">利翁斯</a></td><td>贡献涵盖从概率论到偏微分方程的多个领域，在非线性方程方面做出若干优美工作，其问题选择始终由应用驱动</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('yoccoz'); return false;">约科兹</a></td><td>动力系统理论，被视为该领域最出色的专家之一</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('zelmanov'); return false;">泽尔马诺夫</a></td><td>解决受限伯恩赛德问题</td></tr>
<tr><td class="aw-year">1998</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('borcherds'); return false;">博切尔兹</a></td><td>Kac–Moody 代数、自守形式方面的工作，尤其是证明了魔群月光猜想</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('gowers'); return false;">高尔斯</a></td><td>Banach 空间理论与组合学方面的贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('kontsevich'); return false;">孔采维奇</a></td><td>数学物理、代数几何与拓扑方面的贡献，包括形变量子化、动机积分与纽结不变量</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('mcmullen'); return false;">麦克马伦</a></td><td>复动力系统与双曲几何方面的工作</td></tr>
<tr><td class="aw-year">2002</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('lafforgue'); return false;">拉福格</a></td><td>证明函数域上 GL(n) 的朗兰兹对应，是朗兰兹纲领的重大突破</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('voevodsky'); return false;">沃埃沃德斯基</a></td><td>发展动机上同调与动机同伦论，并证明了 Milnor 猜想</td></tr>
<tr><td class="aw-year">2006</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('okounkov'); return false;">奥孔科夫</a></td><td>在概率论、表示论与代数几何之间架桥的贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('perelman'); return false;">佩雷尔曼</a></td><td>对几何的贡献，以及对里奇流分析与几何结构的革命性洞察（他拒绝领受该奖章）</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('tao'); return false;">陶哲轩</a></td><td>对偏微分方程、组合学、调和分析与加性数论的贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('werner'); return false;">维尔纳</a></td><td>发展随机 Loewner 演化、二维布朗运动的几何与共形场论</td></tr>
<tr><td class="aw-year">2010</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('lindenstrauss'); return false;">林登施特劳斯</a></td><td>遍历论中测度刚性的结果及其在数论中的应用</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('ngo'); return false;">吴宝珠</a></td><td>通过引入新的代数几何方法证明了自守形式理论中的基本引理</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('smirnov'); return false;">斯米尔诺夫</a></td><td>证明统计物理中渗流与平面 Ising 模型的共形不变性</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('villani'); return false;">维拉尼</a></td><td>证明非线性朗道阻尼以及玻尔兹曼方程趋于平衡</td></tr>
<tr><td class="aw-year">2014</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('avila'); return false;">阿维拉</a></td><td>对动力系统理论的深刻贡献，以重整化作为统一原则改变了这一领域的面貌</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('bhargava'); return false;">巴尔加瓦</a></td><td>发展数的几何中的强有力新方法，用以计数小秩的环并界定椭圆曲线的平均秩</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('hairer'); return false;">海雷尔</a></td><td>对随机偏微分方程理论的杰出贡献，特别是为这类方程创建了正则结构理论</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('mirzakhani'); return false;">米尔扎哈尼</a></td><td>对黎曼曲面及其模空间的动力学与几何的杰出贡献</td></tr>
<tr><td class="aw-year">2018</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('birkar'); return false;">比尔卡尔</a></td><td>证明 Fano 簇的有界性，以及对极小模型纲领的贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('figalli'); return false;">菲加利</a></td><td>对最优传输理论及其在偏微分方程、度量几何与概率中的应用的贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('scholze'); return false;">朔尔策</a></td><td>通过引入 perfectoid 空间改变 p 进域上的算术代数几何，应用于伽罗瓦表示，并发展了新的上同调理论</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('venkatesh'); return false;">文卡特什</a></td><td>综合解析数论、齐性动力学、拓扑与表示论，解决了诸如算术对象等分布等长期悬而未决的问题</td></tr>
<tr><td class="aw-year">2022</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('duminilcopin'); return false;">迪米尼-科潘</a></td><td>解决统计物理中相变概率理论的长期问题，特别是三维与四维情形</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('huh'); return false;">许埈珥</a></td><td>把 Hodge 理论的思想带进组合学，证明几何格的 Dowling–Wilson 猜想、拟阵的 Heron–Rota–Welsh 猜想，发展 Lorentzian 多项式理论，并证明强 Mason 猜想</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('maynard'); return false;">梅纳德</a></td><td>对解析数论的贡献，带来了素数结构理解与丢番图逼近的重大进展</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('viazovska'); return false;">维亚佐夫斯卡</a></td><td>证明 E8 格给出八维空间中相同球体的最密堆积，并对相关的极值问题与傅里叶分析中的插值问题做出贡献</td></tr>
<tr><td class="aw-year">2026</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('deng'); return false;">邓煜</a></td><td>偏微分方程领域的工作，包括从稀薄气体的硬球动力学严格导出玻尔兹曼方程、从非线性色散系统导出波动动力学方程，以及对非线性薛定谔方程动力学的概率方法研究</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('pardon'); return false;">帕登</a></td><td>辛几何中的成就，包括虚拟基本闭链的新方法、某些流形的 Fukaya 范畴与全纯曲线计数，以及三维流形上群作用与纽结理论方面的贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('tsimerman'); return false;">齐默曼</a></td><td>把 o-极小性重塑为算术与复代数几何的基本方法，并参与证明包括 Griffiths 关于周期映射像代数性的猜想、Siegel 模簇的 André–Oort 猜想在内的诸多核心猜想</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('wanghong'); return false;">王虹</a></td><td>调和分析与几何测度论方向的研究，包括把多尺度与解耦方法应用于平面波动方程的局部光滑猜想，以及在傅里叶限制、Falconer 距离集、平面 Furstenberg 集与三维挂谷问题上的重大进展</td></tr>
</table>
  </div>

  <div id="ar-mathawards-panel-abel" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathawards-panel-abel">
<h2 class="ai-math-title">阿贝尔奖：弥补诺贝尔缺口的终身成就奖</h2>
<p>挪威政府为纪念本国天才数学家尼尔斯·亨利克·阿贝尔，于 2003 年设立阿贝尔奖，由挪威科学与文学院每年颁出，奖金 750 万挪威克朗。它不设年龄限制，表彰的是<strong>一生的开创性贡献</strong>，正好补上菲尔兹奖只奖青年的另一端，因此常被称作"数学界的诺贝尔奖"。阿贝尔本人 26 岁死于肺结核，生前贫困潦倒；两百年后以他命名的奖项，成了数学界最大的荣誉之一。</p>
<h3>历届获奖者（2003–2026）</h3>
<table class="award-table">
<tr><th style="width:5.5rem">年份</th><th style="width:11rem">获奖者</th><th>获奖理由</th></tr>
<tr><td class="aw-year">2003</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('serre'); return false;">塞尔</a></td><td>在塑造拓扑、代数几何与数论等众多数学分支的现代形态中发挥关键作用</td></tr>
<tr><td class="aw-year">2004</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('atiyah'); return false;">阿蒂亚</a></td><td>与 Singer 共同发现并证明指标定理，把拓扑、几何与分析结合到一起，并在数学与理论物理之间架设新桥梁方面发挥杰出作用</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('singer'); return false;">辛格</a></td><td>同上，与阿蒂亚共同获得</td></tr>
<tr><td class="aw-year">2005</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('lax'); return false;">拉克斯</a></td><td>对偏微分方程理论及其应用、以及其解的计算做出的开创性贡献</td></tr>
<tr><td class="aw-year">2006</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('carleson'); return false;">卡尔森</a></td><td>对调和分析与光滑动力系统理论的深刻而开创性的贡献</td></tr>
<tr><td class="aw-year">2007</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('varadhan'); return false;">瓦拉丹</a></td><td>对概率论的根本贡献，特别是创建了大偏差的统一理论</td></tr>
<tr><td class="aw-year">2008</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('thompson'); return false;">汤普森</a></td><td>代数方面的深刻成就，特别是塑造了现代群论</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('tits'); return false;">蒂茨</a></td><td>同上，与汤普森共同获得</td></tr>
<tr><td class="aw-year">2009</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('gromov'); return false;">格罗莫夫</a></td><td>对几何的革命性贡献</td></tr>
<tr><td class="aw-year">2010</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('tate'); return false;">泰特</a></td><td>对数论巨大而持久的影响</td></tr>
<tr><td class="aw-year">2011</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('milnor'); return false;">米尔诺</a></td><td>拓扑、几何与代数中的开创性发现</td></tr>
<tr><td class="aw-year">2012</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('szemeredi'); return false;">塞梅雷迪</a></td><td>对离散数学与理论计算机科学的根本贡献，以及这些贡献对加性数论与遍历论深远持久的影响</td></tr>
<tr><td class="aw-year">2013</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('deligne'); return false;">德利涅</a></td><td>对代数几何的开创性贡献，及其对数论、表示论与相关领域带来的变革性影响</td></tr>
<tr><td class="aw-year">2014</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('sinai'); return false;">西奈</a></td><td>对动力系统、遍历论与数学物理的根本贡献</td></tr>
<tr><td class="aw-year">2015</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('nash'); return false;">纳什</a></td><td>对非线性偏微分方程理论及其在几何分析中应用的卓越而开创性的贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('nirenberg'); return false;">尼伦伯格</a></td><td>同上，与纳什共同获得</td></tr>
<tr><td class="aw-year">2016</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('wiles'); return false;">怀尔斯</a></td><td>通过半稳定椭圆曲线的模性猜想给出了费马大定理的惊人证明，开启了数论的新纪元</td></tr>
<tr><td class="aw-year">2017</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('meyer'); return false;">梅耶</a></td><td>在小波分析的数学理论发展中发挥的关键作用</td></tr>
<tr><td class="aw-year">2018</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('langlands'); return false;">朗兰兹</a></td><td>提出连接表示论与数论的远见卓识的纲领</td></tr>
<tr><td class="aw-year">2019</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('uhlenbeck'); return false;">乌伦贝克</a></td><td>对几何偏微分方程、规范理论与可积系统的开创性成就，以及其工作对分析、几何与数学物理的根本影响</td></tr>
<tr><td class="aw-year">2020</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('furstenberg'); return false;">富尔斯滕伯格</a></td><td>率先把概率论与动力学的方法用于群论、数论与组合学</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('margulis'); return false;">马尔古利斯</a></td><td>同上，与富尔斯滕伯格共同获得</td></tr>
<tr><td class="aw-year">2021</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('lovasz'); return false;">洛瓦兹</a></td><td>对理论计算机科学与离散数学的基础贡献，以及把这两个领域塑造成现代数学中心领域的引领作用</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('wigderson'); return false;">维格森</a></td><td>同上，与洛瓦兹共同获得</td></tr>
<tr><td class="aw-year">2022</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('sullivan'); return false;">沙利文</a></td><td>对最广泛意义下拓扑学的开创性贡献，特别是其代数、几何与动力学方面</td></tr>
<tr><td class="aw-year">2023</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('caffarelli'); return false;">卡法雷利</a></td><td>对非线性偏微分方程正则性理论的开创性贡献，包括自由边值问题与蒙日–安培方程</td></tr>
<tr><td class="aw-year">2024</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('talagrand'); return false;">塔拉格兰</a></td><td>在概率论与泛函分析方面的开创性贡献，以及在数学物理与统计学中的杰出应用</td></tr>
<tr><td class="aw-year">2025</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('kashiwara'); return false;">柏原正树</a></td><td>对代数分析与表示论的基础贡献，特别是 D-模理论的发展与晶体基的发现</td></tr>
<tr><td class="aw-year">2026</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('faltings'); return false;">法尔廷斯</a></td><td>在算术几何中引入强有力的工具，并解决了 Mordell 与 Lang 关于丢番图方程的长期猜想</td></tr>
</table>
  </div>

  <div id="ar-mathawards-panel-wolf" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathawards-panel-wolf">
<h2 class="ai-math-title">沃尔夫数学奖：奖励"整整一生"的工作</h2>
<p>沃尔夫奖由发明家、外交家里卡多·沃尔夫捐资，1978 年起由以色列沃尔夫基金会每年颁发，含农业、化学、数学、医学、物理与艺术六个领域，每项奖金 10 万美元。沃尔夫数学奖的授奖词里反复出现一句话：<i>"它常常表彰一整个学术生命的成就"</i>——许多得主获奖时已功成名就，也有不少人在获沃尔夫奖之后又摘下阿贝尔奖，被视为数学大奖的"预言家"。</p>
<h3>历届获奖者（1978–2026）</h3>
<table class="award-table">
<tr><th style="width:5.5rem">年份</th><th style="width:11rem">获奖者</th><th>获奖理由</th></tr>
<tr><td class="aw-year">1978</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('gelfand'); return false;">盖尔范德</a></td><td>泛函分析、群表示方面的工作，以及对数学众多领域及其应用的开创性贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('siegel'); return false;">西格尔</a></td><td>数论、多复变函数论与天体力学方面的贡献</td></tr>
<tr><td class="aw-year">1979</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('leray'); return false;">勒雷</a></td><td>发展并把拓扑方法应用于微分方程研究的开创性工作</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('weil'); return false;">韦伊</a></td><td>以富有启发性的方式把代数几何方法引入数论</td></tr>
<tr><td class="aw-year">1980</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('cartan'); return false;">嘉当</a></td><td>代数拓扑、复变量、同调代数方面的开创性工作，以及对一代数学家的启发性领导</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('kolmogorov'); return false;">柯尔莫哥洛夫</a></td><td>傅里叶分析、概率论、遍历论与动力系统中的深刻原创发现</td></tr>
<tr><td class="aw-year">1981</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('ahlfors'); return false;">阿尔福斯</a></td><td>几何函数论中的开创性发现与强有力新方法的创立</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('zariski'); return false;">扎里斯基</a></td><td>通过与交换代数相融合，创造了代数几何的现代进路</td></tr>
<tr><td class="aw-year">1982</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('whitney'); return false;">惠特尼</a></td><td>代数拓扑、微分几何与微分拓扑方面的基础工作</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('krein'); return false;">克赖因</a></td><td>对泛函分析及其应用的根本贡献</td></tr>
<tr><td class="aw-year">1983/84</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('chern'); return false;">陈省身</a></td><td>对整体微分几何的杰出贡献，深刻影响了整个数学</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('erdos'); return false;">埃尔德什</a></td><td>数论、组合学、概率、集合论与数学分析的众多贡献，并亲身激励了全世界的数学家</td></tr>
<tr><td class="aw-year">1984/85</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('kodaira'); return false;">小平邦彦</a></td><td>对复流形与代数簇研究的杰出贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('lewy'); return false;">莱维</a></td><td>开创偏微分方程中许多如今已成经典且必不可少的发展</td></tr>
<tr><td class="aw-year">1986</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('eilenberg'); return false;">艾伦伯格</a></td><td>代数拓扑与同调代数方面的基础工作</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('selberg'); return false;">塞尔伯格</a></td><td>数论以及离散群与自守形式方面的深刻原创工作</td></tr>
<tr><td class="aw-year">1987</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('ito'); return false;">伊藤清</a></td><td>对纯概率论与应用概率论的根本贡献，特别是创立了随机微分与积分演算</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('lax'); return false;">拉克斯</a></td><td>对分析与应用数学众多领域的杰出贡献</td></tr>
<tr><td class="aw-year">1988</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('hirzebruch'); return false;">希策布鲁赫</a></td><td>结合拓扑、代数几何与微分几何、代数数论的杰出工作，以及对数学合作与研究的推动</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('hormander'); return false;">赫尔曼德</a></td><td>现代分析中的基础工作，特别是把伪微分算子与傅里叶积分算子应用于线性偏微分方程</td></tr>
<tr><td class="aw-year">1989</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('calderon'); return false;">卡尔德隆</a></td><td>关于奇异积分算子的开创性工作及其在偏微分方程重要问题中的应用</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('milnor'); return false;">米尔诺</a></td><td>几何上巧妙而高度原创的发现，从代数、组合与可微的观点开启了拓扑学的新视野</td></tr>
<tr><td class="aw-year">1990</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('degiorgi'); return false;">德乔治</a></td><td>偏微分方程与变分学中的创新思想与根本成就</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('piatetski'); return false;">皮亚捷茨基-夏皮罗</a></td><td>齐性复域、离散群、表示论与自守形式领域的根本贡献</td></tr>
<tr><td class="aw-year">1992</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('carleson'); return false;">卡尔森</a></td><td>傅里叶分析、复分析、拟共形映射与动力系统方面的根本贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('thompson'); return false;">汤普森</a></td><td>对有限群理论各方面的深刻贡献及其与其它数学分支的联系</td></tr>
<tr><td class="aw-year">1993</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('gromov'); return false;">格罗莫夫</a></td><td>对整体黎曼与辛几何、代数拓扑、几何群论与偏微分方程理论的革命性贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('tits'); return false;">蒂茨</a></td><td>对代数群及其它类群结构理论的开创性与基础性贡献，特别是 buildings 理论</td></tr>
<tr><td class="aw-year">1994/95</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('moser'); return false;">莫泽</a></td><td>关于哈密顿力学稳定性的基础工作，以及对非线性微分方程深刻而有影响的贡献</td></tr>
<tr><td class="aw-year">1995/96</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('langlands'); return false;">朗兰兹</a></td><td>数论、自守形式与群表示领域的开拓性工作与非凡洞察</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('wiles'); return false;">怀尔斯</a></td><td>数论及相关领域的惊人贡献、对基本猜想的重大推进，并解决了费马大定理</td></tr>
<tr><td class="aw-year">1996/97</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('keller'); return false;">凯勒</a></td><td>在电磁、光学、声波传播，以及流体、固体、量子与统计力学方面的创新贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('sinai'); return false;">西奈</a></td><td>统计力学中数学严格方法、动力系统遍历论及其物理应用的根本贡献</td></tr>
<tr><td class="aw-year">1999</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('lovasz'); return false;">洛瓦兹</a></td><td>组合学、理论计算机科学与组合优化方面的杰出贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('stein'); return false;">施泰因</a></td><td>对经典与“欧氏”傅里叶分析的贡献，以及通过出色的教学与写作对新一代分析学家的非凡影响</td></tr>
<tr><td class="aw-year">2000</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('bott'); return false;">博特</a></td><td>拓扑与微分几何中的深刻发现及其在李群、微分算子与数学物理中的应用</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('serre'); return false;">塞尔</a></td><td>对拓扑、代数几何、代数与数论的众多根本贡献，及其富有启发性的演讲与写作</td></tr>
<tr><td class="aw-year">2001</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('arnold'); return false;">阿诺德</a></td><td>在动力系统、微分方程与奇点理论等众多数学领域中的深刻而有影响的工作</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('shelah'); return false;">沙拉赫</a></td><td>对数理逻辑与集合论的众多根本贡献及其在数学其它部分的应用</td></tr>
<tr><td class="aw-year">2002/03</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('sato'); return false;">佐藤干夫</a></td><td>创立“代数分析”，包括超函数与微函数理论、完整量子场论与孤子方程的统一理论</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('tate'); return false;">泰特</a></td><td>创立代数数论中的基本概念</td></tr>
<tr><td class="aw-year">2005</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('margulis'); return false;">马尔古利斯</a></td><td>对代数的巨大贡献，特别是半单李群中格的理论，及其在遍历论、表示论、数论、组合与测度论中的惊人应用</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('novikov'); return false;">诺维科夫</a></td><td>对代数拓扑与微分拓扑、数学物理的根本开创性贡献，特别是引入代数几何方法</td></tr>
<tr><td class="aw-year">2006/07</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('smale'); return false;">斯梅尔</a></td><td>开创性贡献，对微分拓扑、动力系统、数理经济学等数学分支的形成起了根本作用</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('furstenberg'); return false;">富尔斯滕伯格</a></td><td>遍历论、概率、拓扑动力学、对称空间上的分析与齐性流方面的深刻贡献</td></tr>
<tr><td class="aw-year">2008</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('deligne'); return false;">德利涅</a></td><td>混合 Hodge 理论、韦伊猜想、Riemann–Hilbert 对应，以及对算术的贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('griffiths'); return false;">格里菲斯</a></td><td>Hodge 结构变分、阿贝尔积分周期理论，以及对复微分几何的贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('mumford'); return false;">芒福德</a></td><td>代数曲面、几何不变量理论，以及奠定曲线与 θ 函数现代代数模理论的基础</td></tr>
<tr><td class="aw-year">2010</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('yau'); return false;">丘成桐</a></td><td>几何分析方面的工作，对几何与物理众多领域产生了深远而戏剧性的影响</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('sullivan'); return false;">沙利文</a></td><td>代数拓扑与共形动力学方面的创新贡献</td></tr>
<tr><td class="aw-year">2012</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('aschbacher'); return false;">阿施巴赫</a></td><td>有限群理论方面的工作</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('caffarelli'); return false;">卡法雷利</a></td><td>偏微分方程方面的工作</td></tr>
<tr><td class="aw-year">2013</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('mostow'); return false;">莫斯托</a></td><td>对几何与李群理论的根本开创性贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('artin'); return false;">阿廷</a></td><td>对代数几何的根本贡献，其数学成就之深度与广度令人惊叹</td></tr>
<tr><td class="aw-year">2014</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('sarnak'); return false;">萨纳克</a></td><td>分析、数论、几何与组合学方面的深刻贡献</td></tr>
<tr><td class="aw-year">2015</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('arthur'); return false;">亚瑟</a></td><td>迹公式的巨大工作与自守表示理论方面的根本贡献</td></tr>
<tr><td class="aw-year">2017</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('schoen'); return false;">舍恩</a></td><td>几何分析的贡献，以及对偏微分方程与微分几何之间关联的理解</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('fefferman'); return false;">费弗曼</a></td><td>多变量复分析、偏微分方程与次椭圆问题等若干数学领域的贡献</td></tr>
<tr><td class="aw-year">2018</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('beilinson'); return false;">贝林森</a></td><td>在几何与数学物理的交叉处取得了重要进展</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('drinfeld'); return false;">德林费尔德</a></td><td>同上，与贝林森共同获得</td></tr>
<tr><td class="aw-year">2019</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('legall'); return false;">勒加尔</a></td><td>对随机过程理论的若干深刻而优雅的贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('lawler'); return false;">劳勒</a></td><td>对擦除环与随机游走全面而开创性的研究</td></tr>
<tr><td class="aw-year">2020</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('donaldson'); return false;">唐纳森</a></td><td>微分几何与拓扑方面的贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('eliashberg'); return false;">埃利亚什伯格</a></td><td>同上，与唐纳森共同获得（辛拓扑与切触拓扑的奠基性工作）</td></tr>
<tr><td class="aw-year">2022</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('lusztig'); return false;">卢斯蒂格</a></td><td>表示论及相关领域的开创性贡献</td></tr>
<tr><td class="aw-year">2023</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('daubechies'); return false;">多贝西</a></td><td>小波理论与应用调和分析方面的工作</td></tr>
<tr><td class="aw-year">2024</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('shamir'); return false;">沙米尔</a></td><td>对数学密码学的根本贡献</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('alon'); return false;">阿隆</a></td><td>对组合学与理论计算机科学的根本贡献</td></tr>
<tr><td class="aw-year">2026</td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('bernstein'); return false;">伯恩斯坦</a></td><td>表示论、自守形式与代数几何方面的基础工作，以及他们在创立几何表示论中的作用</td></tr>
<tr><td class="aw-year"></td><td><a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('kazhdan'); return false;">卡日丹</a></td><td>同上，与伯恩斯坦共同获得</td></tr>
</table>
<p class="aw-note">说明：沃尔夫奖个别年份因未达标准而空缺，包括 1991、1998、2004、2009、2011、2016、2021、2025 年；另有若干年份跨年颁发（如 1983/84、2006/07），上表按官方年份标注。</p>
  </div>

</div>
</section>

<section id="ar-section-anecdotes" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-anecdotes" hidden>
<div class="ai-tabs">
  <div class="ai-tab-btns" role="tablist">
    <button type="button" class="ai-tab-btn tab-teal active" role="tab" id="tab-ar-mathanecdotes-panel-calculus" aria-controls="ar-mathanecdotes-panel-calculus" aria-selected="true" tabindex="0" onclick="switchMathAnecdotes('calculus', this)">微积分发明权之争</button>
    <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-mathanecdotes-panel-poincare" aria-controls="ar-mathanecdotes-panel-poincare" aria-selected="false" tabindex="-1" onclick="switchMathAnecdotes('poincare', this)">庞加莱猜想百年恩怨</button>
    <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-mathanecdotes-panel-galois" aria-controls="ar-mathanecdotes-panel-galois" aria-selected="false" tabindex="-1" onclick="switchMathAnecdotes('galois', this)">伽罗瓦决斗</button>
  </div>

  <div id="ar-mathanecdotes-panel-calculus" class="ai-tab-panel active" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathanecdotes-panel-calculus">
<div class="crisis-article">
<h2 class="crisis-title">微积分发明权之争：一场持续百年的“世纪骂战”</h2>
<h3 class="crisis-h3">一封信引发的风波</h3>
<p>1699年，伦敦皇家学会。一位名叫法蒂奥·德·杜利尔的瑞士数学家发表文章，公然宣称：牛顿是微积分的“第一位发明者”，而莱布尼兹——充其量算个“第二发明者”，说不定还从牛顿那里“借鉴”了点什么。</p>
<p>这句话像一根火柴，扔进了积攒了三十年的火药桶。</p>
<p>要知道，在那之前，牛顿和莱布尼兹表面上还算客气。莱布尼兹曾在1687年写信称赞牛顿的《自然哲学之数学原理》是“本世纪最辉煌的成就”，牛顿也回信说双方“在通信中从未有过不快”。两人隔着英吉利海峡互相致意，看起来像是学术圈的一对神仙友谊。</p>
<p>可惜，微积分这块蛋糕太大了——它改变了人类理解运动、面积、速度、变化的方式，是数学史上最耀眼的明珠。谁都想要“发明者”这个头衔。</p>
<h3 class="crisis-h3">三十年前：两条互不相识的路</h3>
<p>把时钟拨回1675年。二十九岁的莱布尼兹作为外交官出访伦敦，顺手加入了皇家学会。他此行见到了不少英国数学家，还看了一些牛顿私下流传的手稿片段——后来这场诉讼中，这一点被反复拿出来说事。</p>
<p>而牛顿呢？他早在1665到1666年，也就是二十三四岁那年，就在伍尔索普乡下老家的农场里琢磨出了“流数术”——因为伦敦大瘟疫，剑桥停课，他回乡避难，闲得发慌，顺便把微积分、光学和万有引力的雏形都想了一遍。数学史上管这两年叫牛顿的“奇迹年”。</p>
<p>不过牛顿有个毛病：不愿发表。他把流数术写进手稿，锁进抽屉，只给信任的朋友看。用现在的话说，他攒了个惊世骇俗的项目，却迟迟不肯公之于众。</p>
<p>莱布尼兹则相反。1675年他在巴黎的日记里写下积分符号 ∫，1676年又造出微分记号 d，1684年在《教师学报》上正式发表了第一篇微积分论文。也就是说，<strong>全世界读到微积分，先是读到莱布尼兹的版本</strong>。</p>
<p>牛顿直到1693年才第一次在正式出版物中提到流数术，而完整阐述，要等到1704年《光学》的数学附录。</p>
<h3 class="crisis-h3">挑战赛：一晚上解开“最速降线”</h3>
<p>争论正式打响之前，还有一段广为流传的插曲。</p>
<p>1696年，约翰·伯努利向“全欧洲最聪明的数学家”发出挑战：求最速降线——一颗小球在重力作用下沿什么曲线下滑最快？他给了六个月期限，应者寥寥。应莱布尼兹的请求，期限又延长了半年。</p>
<p>据说挑战书送到牛顿手里时，他刚从皇家铸币厂下班——对，那时的牛顿已经是铸币厂督办，正忙着抓假币贩子。他看到题目，一个晚上就解了出来，然后匿名寄给皇家学会。伯努利看到答案，一眼认出作者，留下了那句名言：</p>
<blockquote class="crisis-quote">
<p>“从狮子的利爪，我认出了狮子。”</p>
</blockquote>
<p>莱布尼兹则劝牛顿别再匿名投稿了，公开出来切磋多好。这本是一段惺惺相惜的佳话，谁能想到几年后，两人会彻底翻脸。</p>
<h3 class="crisis-h3">骂战升级：从学术分歧到公开指控</h3>
<p>1704年，牛顿在《光学》附录里首次系统发表流数术。随后《教师学报》上出现一篇匿名书评，暗指牛顿的流数术不过是莱布尼兹微积分的“另一种记号”。牛顿认定这篇书评出自莱布尼兹之手——虽然从无实锤，但梁子就此结死。</p>
<p>1708年，牛津的天文学教授凯尔再次声明“牛顿才是第一发明人”，莱布尼兹忍无可忍，向皇家学会正式申诉。</p>
<p>于是皇家学会成立了一个“公正调查委员会”。问题是——学会会长正是牛顿本人。</p>
<p>1712年，委员会发布调查报告《商报》（Commercium Epistolicum），结论毫无悬念：牛顿是微积分的第一发明人，莱布尼兹涉嫌抄袭。更绝的是，牛顿在报告后面匿名附上一篇长文，把莱布尼兹驳得体无完肤；据说连那份报告本身，都是牛顿亲手起草、委员会照单签收的。裁判、球员、裁判长，都是同一个人。</p>
<p>莱布尼兹在大陆方面自然不服。他提出一个至今仍显机锋的辩护：承认牛顿先想到，与承认我自己独立发明了微积分，并不矛盾——他打了个比方：<strong>正如承认阿里斯托芬是最早的喜剧作家，和承认某部喜剧是我自己写的，两者并不冲突。</strong>意思是：最早想到，和独立做出并发表，是两回事。</p>
<h3 class="crisis-h3">一句话、一场国骂、两个结局</h3>
<p>这场争斗后来彻底变形了。英国学界把莱布尼兹骂作“骗子”和“盗贼”，欧陆学者则反唇相讥，说牛顿的流数术晦涩难懂、符号粗劣。数学界实际分裂成两个阵营：英国用牛顿的点记号 ẋ，欧陆用莱布尼兹的 dx——今天全世界的数学课本证明，后者的记号确实更好用。</p>
<p>1716年11月，莱布尼兹在汉诺威去世，出席葬礼的只有他的秘书一个人。直到死前，他还在为发明权愤愤不平地写信。</p>
<p>多年后，有人问起牛顿当年的心境，据说他留下了那句著名却真假难辨的评论：</p>
<blockquote class="crisis-quote">
<p>“我用第二种方法打破了莱布尼兹的腰。”</p>
</blockquote>
<p>至于那句被安在牛顿头上、用来回应胡克的“站在巨人的肩膀上”——倒真是在这场论争之前写的。只是后人更愿意把它读作牛顿的谦逊，而忘了写它的人，同样可以为了一项发明的归属寸土不让。</p>
<h3 class="crisis-h3">后来的公论</h3>
<p>今天，数学史的主流结论早已平静下来：牛顿和莱布尼兹各自独立发明了微积分。牛顿更早（1665年前后），莱布尼兹更先发表（1684年），且两人路径不同——牛顿从运动与速度出发，莱布尼兹从切线与求和出发，记号体系也完全两样。抄袭之说，基本可以排除。</p>
<p>真正可悲的是代价：这场骂战让英国数学在整整一个世纪里固守牛顿的记号，与欧陆主流割裂，分析力学的前沿几乎被法国人包揽。有英国学者哀叹，18世纪上半叶的英国数学界“没有一个值得记住的名字”。</p>
<p>两颗最聪明的大脑，为了一块本可以共享的丰碑，耗尽了余生最好的友谊。而微积分本身毫发无损——它只是安静地躺在 dx 和 ẋ 的记号里，等着全人类来用它。</p>
</div>
</div>
<div id="ar-mathanecdotes-panel-poincare" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathanecdotes-panel-poincare">
<div class="crisis-article">
<h2 class="crisis-title">庞加莱猜想百年恩怨</h2>
<h3 class="crisis-h3">——流形宿命与数学江湖的野闻录</h3>
<blockquote class="crisis-quote">
<p><strong>摘要</strong>：1904年，庞加莱随手写下的一句话——"一个闭的、单连通的三维空间，是不是一定就是一个三维球面？"——成了数学界悬了一百年的天问。本文以公开报道与学界流传的轶事为底本，梳理从庞加莱提出猜想、斯梅尔与弗里德曼解决高维情形、哈密尔顿开创Ricci流纲领，到佩雷尔曼2002–2003年三篇预印本"惊鸿一瞥"、2006年"封顶风波"与《纽约客》特稿、以及佩雷尔曼先后拒绝菲尔兹奖与千禧年大奖的完整时间线。江湖恩怨、脚注战争、媒体叙事与数学验证交错上演，最终庞加莱猜想改姓"定理"，而数学本身毫发无损。</p>
</blockquote>
<hr class="crisis-hr">
<h3 class="crisis-h3">一、百年悬案：一个折磨数学界一百年的问题</h3>
<p>1904年，巴黎，亨利·庞加莱在一份论文里顺手写下一句话：一个闭的、单连通的三维空间，是不是一定就是一个三维球面？</p>
<p>他自己也拿不准。于是他补了一句"这个问题似乎值得注意"，然后去忙别的了。</p>
<p>谁能想到，这一句随手一写，成了数学界悬了一百年的天。拓扑学家们前赴后继，把高维的兄弟问题一个个解决掉——五维以上，1961年斯梅尔拿下；四维，1982年弗里德曼收官。领奖台上觥筹交错，唯独三维那把椅子空着，落满了灰。</p>
<p>江湖上开始流传一句丧气话：<strong>三维是所有维度里最刁钻的</strong>。低维不老实，高维不费劲，数学家们管这叫"低维诅咒"。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">二、圣彼得堡来的"扫地僧"</h3>
<p>时间快进到2002年11月11日。arXiv预印本网站上，悄无声息地出现了一篇论文，标题枯燥得像电话黄页：《熵公式与Ricci流的几何应用》。</p>
<p>署名：格里戈里·佩雷尔曼。单位：空白。</p>
<p>这位大哥是何方神圣？圣彼得堡人，犹太裔，早年是苏联奥数神童，拿过国际数学奥赛满分金牌。九十年代漂到美国，在伯克利、MSRI等地晃了一圈，跟Ricci流的开山祖师理查德·哈密尔顿有过一面之缘。1995年前后，他回俄罗斯，进了斯特克洛夫研究所——那地方如今在民间被称为"扫地僧培养基地"。</p>
<p>据说他1996年被授予欧洲数学学会青年数学家大奖，他不去领；有一家著名学府高薪相邀，他回信说钱太多了，没法安心做数学。同行们将信将疑，直到2002年这三篇论文砸出来。</p>
<p><strong>2002年11月、2003年3月、2003年7月，三篇预印本，加起来不到一千页的周边材料，庞加莱猜想（顺带还有更难的几何化猜想）被塞进了七十几页正文。</strong></p>
<p>没有新闻发布，没有发布会，甚至论文里连"证明庞加莱猜想"这句话都没正面写过——他只是淡淡地说，推论自然成立。江湖规矩：真正的剑客从不大喊。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">三、美国东海岸的"巡回讲学"</h3>
<p>2003年春天，佩雷尔曼拎着背包飞到美国，在MIT、普林斯顿、石溪、哥伦比亚轮流开讲。场面蔚为壮观——数学界大半个江湖都来了：丘成桐来了，哈密尔顿来了，几十年没露面的老先生也拄着拐来了。</p>
<p>讲台上的佩雷尔曼瘦得吓人，指甲很长，据说留着是为了弹钢琴的某个执念。他讲得极快，全场鸦雀无声，没人提得出像样的问题。</p>
<p>散场后，江湖传闻满天飞。有人追问："那最难的手术部分呢？"佩雷尔曼耸耸肩："手术部分？哈密尔顿早就处理好了。"——这句话后来被反复咀嚼。而哈密尔顿本人听完报告，评价颇有宗师风范：这小子比我想得远。</p>
<p>也有冷眼旁观的。有人背后嘀咕：这论文七十几页，关键处跳步，术语自己造，不给细节，"这是证明还是路线图？"数学界的规矩是铁律：<strong>预印本不算数，同行验完货才算数</strong>。于是北美各路豪杰组队夜战，克莱纳、洛特等人逐行做批注笔记，摩根和田刚组织研讨班写书——一验就是三年。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">四、"封顶"风波</h3>
<p>如果说2003年是佩雷尔曼的巡回演出，2006年就是江湖真正的腥风血雨。</p>
<p>2006年6月，《亚洲数学期刊》刊出一篇三百多页的长文，作者是中山大学的朱熹平与美国里海大学的曹怀东，题为《庞加莱猜想与几何化猜想的哈密尔顿–佩雷尔曼证明：信息论方法》。编辑是丘成桐。论文致谢里，曹怀东明确说：这套纲领的奠基人是哈密尔顿。</p>
<p>但先声夺人的是媒体叙事。此前几天，国内多家媒体报道了北大的一次报告会，丘成桐以"盖楼"作喻：哈密尔顿打了地基，佩雷尔曼砌了墙，<strong>"最后封顶的是中国数学家"</strong>。一时间标题满天飞："百年猜想被中国学者彻底破解"。</p>
<p>西方数学圈炸了锅。有人阴阳怪气：封顶？那图纸是谁画的？砖是谁烧的？</p>
<p>6月20日前后，丘成桐在石溪的研讨会上放话说佩雷尔曼的证明"有漏洞、不完整"，需要后人修补；而另一边，克莱数学研究所的专家小组（约翰·摩根、田刚等）的审读工作也接近完成，结论却是：佩雷尔曼的框架成立，补齐的是技术细节而非根本缺环。两种说法针尖对麦芒，摆在同一个江湖里。</p>
<p>更微妙的是，摩根–田刚的专著《Ricci流与庞加莱猜想》与朱曹论文几乎同期问世，谁先谁后、谁详谁略、谁的脚注引用了谁的版本，成了此后多年论文脚注里绵延不绝的暗战。数学史上，脚注战争的惨烈程度从不亚于正文的战争。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">五、《纽约客》与"流形宿命"</h3>
<p>压垮体面的最后一根稻草，在2006年8月落下来。</p>
<p>《纽约客》杂志刊出长篇特稿，标题就叫<strong>《Manifold Destiny（流形宿命）》</strong>，作者之一西尔维娅·娜萨——写《美丽心灵》拿过普利策奖的那位。文章把这场江湖恩怨写成了传奇小说：一位清心寡欲的俄国隐士，一篇扔在arXiv上不要版权、不要名分的证明，一场围绕着"谁配拥有荣耀"的东岸豪门暗斗。配图把相关人物画成了棋局上的角色，杂志的图片说明里那几个字的措辞，被当事人认为格外刺眼。</p>
<p>文章一出，舆论海啸。被写到的那一方震怒，律师函发往编辑部；《纽约客》随后对个别细节做了更正，但大叙事再也没能翻盘。中文网络江湖里，此事从此多了一个别号——<strong>"几何十年恩怨录"</strong>。至于当年到底谁说了什么，各家的回忆录各执一词，至今吵不出定论。野史写到这儿，只能摊手：各位看官，公道自在人心。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">六、马德里：领奖台上的空椅子</h3>
<p>2006年8月22日，马德里，国际数学家大会。</p>
<p>菲尔兹奖颁奖礼上，西班牙国王亲自颁奖。叫到格里戈里·佩雷尔曼的名字时，台上没有动静。<strong>他没来。</strong>——这是菲尔兹奖八十年历史上第一位拒绝领奖的人。</p>
<p>国际数学联盟主席约翰·鲍尔曾专程飞圣彼得堡，两次登门劝驾。据鲍尔的转述，佩雷尔曼平静地说：如果大家承认我的工作是正确的，这已经够了；我不用为了再得一个奖而站在台上。</p>
<p>同一天，大会请丘成桐做一小时报告介绍庞加莱猜想的解决历程。报告厅里他花了大量篇幅梳理哈密尔顿–佩雷尔曼纲领与后续工作。台下的媒体记者们竖着耳朵，等着听有没有一句提到"封顶"。坊间对这个报告的解读分成了两派，各说各话，又是一场没有终点的战争。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">七、一百万美元，和一扇不开的门</h3>
<p>2010年3月18日，克莱研究所正式宣布：佩雷尔曼的证明经受了考验，<strong>千禧年大奖成立，一百万美元，他的</strong>。</p>
<p>全世界都在等佩雷尔曼的反应。等来的消息是：他拒绝了。</p>
<p>据说他托人捎了一句话，大意是：哈密尔顿的贡献不在我之下，凭什么奖只给一个人；而某些机构的行事方式，让他"在道义上无法接受"。他还补了一句流传甚广的：<strong>"我对钱和名气不感兴趣。"</strong></p>
<p>自此之后，他彻底隐居在圣彼得堡一个叫库普奇诺的居民区，和母亲住在一套老公寓里。有记者不死心，跑去敲门。开门的瞬间，记者还没开口，就被告知：门口正好有朋友在等我。门关上了。从此再没人拍到过他的正面新闻照片，只有邻居偶尔说起，看见他在院子里散步，穿一件旧毛衣，"像一个再普通不过的退休老头"。</p>
<p>数学江湖给他起了个外号：<strong>数学界的托尔斯泰</strong>——出了名，散了财，退了江湖。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3">尾声</h3>
<p>庞加莱猜想由此从"猜想"改姓"定理"。如今教科书里一行冷冰冰的句子，背后站着四代人：庞加莱留下的天问，哈密尔顿铸的剑（Ricci流，1982），佩雷尔曼的惊鸿三篇（2002–2003），以及全球数学家整整三年的逐行验尸。</p>
<p>这场百年恩怨里没有真正的输家——数学赢了。至于面子、奖金、封顶与脚注，都不过是流形上的一个同伦，最终都缩回到一个点。</p>
<p>野史到此为止。正史在书架上，但江湖的传闻永远比正史热闹。</p>
</div>
</div>
<div id="ar-mathanecdotes-panel-galois" class="ai-tab-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-ar-mathanecdotes-panel-galois">

</div>

</div>
</section>

<script>
function switchMathCulture(id, btn) {
  document.querySelectorAll('.ar-sec-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('#ar-section-figures, #ar-section-problems, #ar-section-popular, #ar-section-awards, #ar-section-anecdotes').forEach(function (s) { s.setAttribute('hidden', ''); });
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

/* 从「数学大奖」名单跳转到「数学人物」中对应人物的面板 */
function toggleAllEras(open) {
  document.querySelectorAll('details.fig-era').forEach(function (d) { d.open = open; });
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
  switchMathFigures(id, btn);
  var sec = document.getElementById('ar-section-figures');
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
</script>
