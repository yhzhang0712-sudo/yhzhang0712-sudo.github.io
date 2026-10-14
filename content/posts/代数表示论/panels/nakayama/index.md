---
title: "nakayama"
headless: true
date: 2026-09-06
---
<h3 class="ar-subhead">猜想陈述</h3>
<p><strong>经典 Nakayama 猜想</strong>（NC，1958）：若 Artin 代数 $\Lambda$ 的支配维数 $\operatorname{domdim}\Lambda=\infty$，则 $\Lambda$ 是自内射代数（拟 Frobenius 代数）。这里</p>

$$ \operatorname{domdim}\Lambda \;=\; \sup\{\,k : I^{i}\in\mathcal{P}_{\Lambda},\ 0\le i\le k-1\,\}. $$

<p><strong>Tachikawa 第二猜想</strong>（TC2，1970）：自内射代数上，若$\operatorname{Ext}^{i}(M,M)=0$ 对所有 $i>0$，则$M$投射。</p>

<p><strong>广义 Nakayama 猜想</strong>（GNC，Auslander–Reiten，1975）：若 $\operatorname{Ext}^{i}(M,M\oplus\Lambda)=0$ 对所有 $i>0$，则 $M$ 投射。</p>

<p><strong>强 Nakayama 猜想</strong>（SNC, Colby–Fuller, 1990）：设 $A$ 是一个 Artin 代数，$M$ 是 $A$ 上的任意非零模，则总存在一个非负整数 $n \ge 0$，使得</p>

$$ \operatorname{Ext}_A^n(M,\, A) \;\neq\; 0. $$

<h3 class="ar-subhead">研究现状</h3>
<ul class="ar-timeline">
  <li><span class="ar-year">1975</span>Auslander–Reiten 提出广义 Nakayama 猜想（AR 猜想），并证明全体代数上 GNC $\Leftrightarrow$ ARC。</li>
  <li><span class="ar-year">1986</span>Fuller–Zimmermann-Huisgen 用 Cartan 滤过环方法，对一类代数同时建立 GNC 与 Cartan 行列式猜想（<i>Trans. AMS</i> 294, 679–691）。</li>
  <li><span class="ar-year">1995</span>Auslander–Reiten–Smalø证明有限表示型代数满足 ARC。</li>
  <li><span class="ar-year">2000s</span>Zhou–Zimmermann（2012）证明弱对称多项式增长代数满足 ARC；
  <p>Christensen–Holm 证明 Auslander 条件 (AC) 环满足 ARC。</p></li>
  <li><span class="ar-year">2002</span>Huneke–Leuschke 证明含 $\mathbb{Q}$ 的 excellent Cohen–Macaulay 正规域上的 complete intersection 局部环满足 ARC。</li>
  <li><span class="ar-year">2020</span>Ariki–Iyama–Park 指出 Pogorzaly 对 self-injective special biserial 代数的证明部分有误，但稳定等价下 special biserial 时 ARC 成立；</li>

  <li><span class="ar-year">2022</span>陈-方-惠证明  Morita-Gorenstein algebras代数满足 Nakayama 猜想。</li>
  <li><span class="ar-year">2023</span>J. Algebra 623, 42–63（arXiv:2212.06467）证明 skew-gentle 代数满足 ARC。</li>
</ul>

<p><strong>NC / GNC / ARC 在以下代数类上成立：</strong></p>
<ul>
    <li>有限表示型代数</li>
    <li>$J^2=0$ 代数</li>
    <li>$J^3=0$ 代数（局部）</li>
    <li>对称双列代数</li>
    <li>弱对称多项式增长代数</li>
    <li>满足 Auslander 条件 (AC) 的环</li>
    <li>skew-gentle 代数</li>
    <li>Morita-Gorenstein algebras代数。</li>
</ul>

<h3 class="ar-subhead">2026 年新动态（待核实）</h3>
<p class="ar-mnote"><b>关于本节内容的可靠性说明。</b>以下条目来自 OpenAI 于 <b>2026 年 9 月 23 日</b>在 GitHub 公开的一批数学预印本（仓库 <code>openai/math</code>，当前 719 篇手稿 / 372 个结果族）。这批成果<b>由 OpenAI 内部模型生成，截至发稿未经同行评议</b>；发布后两天内该集合已撤回 3 篇、修订 14 篇，数学界对其发布方式与结论可靠性存在公开争议（多位菲尔兹奖得主及陶哲轩等提出批评）。<br>
因此本面板<b>保留上文的猜想陈述与全部已确立结果不变</b>，仅将新宣称作为「待核实」信息单独登记：<b>在数学界完成独立验证之前，Nakayama 猜想族仍应视为开放问题。</b></p>
<ul class="ar-timeline">
  <li><span class="ar-year">2026</span>《An explicit counterexample to the Auslander–Reiten conjecture》（OpenAI, 2026-09-23）主定理宣称：取 $k=\mathbb{F}_2(q,H_1,H_2)$（$q,H_1,H_2$ 代数无关），存在有限维 $k$-代数 $\Lambda$ 与有限维<b>非投射</b>左 $\Lambda$-模 $Z$ 使
  $$ \operatorname{Ext}^i_\Lambda(Z,Z)\;=\;0\;=\;\operatorname{Ext}^i_\Lambda(Z,\Lambda)\qquad \forall\, i\ge 1 , $$
  <b>若成立即否证 Auslander–Reiten 猜想</b>。该模 $Z$ 是 Gorenstein 投射的，故同一例子也（宣称）否证 <b>Gorenstein 投射猜想</b>；此外生成元形式一并失效：$Z\oplus\Lambda$ 是非投射生成元且无正的自扩张。
    <p>构造细节：$\Lambda/\operatorname{rad}\Lambda\simeq k^8$（8 个单模同构类、分裂），且 <b>$\operatorname{rad}(\Lambda)^4\neq 0$</b>。上列结论在该 $k$ 的<b>任意域扩张</b>后保持，因而也覆盖特征 2 的代数闭域。论文明确指出<b>交换情形未被此构造解决</b>。Lean 形式化条目：<code>OAI.ArExplicit.Statement.main</code>（Comparator 挑战 <code>AuslanderReiten.json</code>）。</p></li>
  <li><span class="ar-year">2026</span>《A counterexample to Tachikawa's second conjecture》（OpenAI, 2026-09-23，同一结果族的姊妹篇）主定理宣称：在同一域 $k$ 上构造有限维<b>对称</b> $k$-代数 $A$ 与非投射有限维左 $A$-模 $M$ 使 $\operatorname{Ext}^i_A(M,M)=0\ \forall i>0$，<b>若成立即否证 Tachikawa 第二猜想</b>；因 $A$ 自内射，同一模满足 $\operatorname{Ext}^i_A(M,M\oplus A)=0$，从而也给出<b>对称代数上的 AR 猜想反例</b>。</li>
  <li><span class="ar-year">2026</span><b>Nakayama 猜想族被否证（Corollary 1.2）</b>：承接上一条 $(A,M)$，对任意域扩张 $K/k$ 令 $\Gamma_K=\operatorname{End}_{A_K}(A_K\oplus M_K)^{\mathrm{op}}$。该推论宣称 $\Gamma_K$ 同时满足三条性质，据此<b>经典、广义、强 Nakayama 猜想以及 Auslander–Gorenstein 猜想均为假</b>：
    <p><b>(1)</b> $\Gamma_K$ 的极小内射分解每一项都是投射模，但 $\operatorname{id}_{\Gamma_K}\Gamma_K=\infty$——否证<b>经典 Nakayama 猜想</b>（并同时否证 Auslander–Gorenstein 猜想：$\operatorname{pd}_{\Gamma_K} I^j=0\le j$ 对所有 $j\ge 0$ 成立，而左侧自内射维数已经无穷）；</p>
    <p><b>(2)</b> 存在非零单模 $S$ 使 $\operatorname{Ext}^i_{\Gamma_K}(S,\Gamma_K)=0$ 对<b>所有 $i\ge 0$</b> 成立（含 $i=0$，即 $\operatorname{Hom}$ 亦消失）——否证<b>强 Nakayama 猜想</b>，并给出广义 Nakayama 猜想的「单模 Ext」形式的失败；</p>
    <p><b>(3)</b> 存在一个<b>投射-内射</b>的 Wakamatsu tilting 模 $W$，它不是 tilting 模——否证 <b>Wakamatsu tilting 猜想</b>（详见本分区对应面板）。</p></li>
  <li><span class="ar-year">2026</span><b>tilting 补模方面的推论（Corollary 8.2）</b>：因 $\Gamma_K$ 违反广义 Nakayama 猜想，依 Buan–Solberg 关于「广义 Nakayama 失效 ⟺ cotilting 补模非唯一」的定理，可对偶得到——存在投射的<b>几乎完备 tilting（almost complete tilting）</b>左 $\Gamma_K^{\mathrm{op}}$-模，具有<b>无穷多个两两非同构的不可分解补模</b>。</li>
</ul>
<p><strong>反例与正面结果并不冲突——边界在哪里：</strong>上述 Listing「NC / GNC / ARC 在以下代数类上成立」的诸条目<b>依然有效</b>，因为反例代数落在这些类的<b>外面</b>：
(a) 上文中 $J^3=0$ 类的正面结果（Zhang–Zhou 等对 $\operatorname{rad}^3=0$ 分裂代数的 ARC）不适用于此处——前面提到的 AR 反例代数满足 $\operatorname{rad}(\Lambda)^4\neq 0$，论文第 9 节专门证明了这一点；
(b) 上文的 <b>Schulz 反例（参考文献 [13]）</b> 属于非 Artin 代数（除环上代数）或「最终消失」而非「全次数消失」的情形，与此处要求的 $\forall i>0$ 全消失不同——这也是先前容忍此类反例、猜想仍被认为可能成立的原因。
换言之，<b>新宣称并未推翻任何已发表定理，而是把反例推进到此前方法刚好够不到的那一侧。</b></p>
<p><strong>蕴含链的反向印证</strong>：如上所列链条 $\operatorname{FDC}\Rightarrow\operatorname{SNC}\Rightarrow\operatorname{GNC}\Rightarrow\operatorname{NC}$ 的<b>逆否命题</b>给出 $\neg\operatorname{NC}\Rightarrow\neg\operatorname{GNC}\Rightarrow\neg\operatorname{SNC}\Rightarrow\neg\operatorname{FDC}$。既然同一批预印本同时宣称上列四个猜想连同 FDC 全部失败，此二者在<b>逻辑方向上彼此自洽</b>。但这只能说明两个宣称互不矛盾，<b>不能作为其中任何一个成立的证据</b>——两条路径出自同一作者（同一模型）、同一批生成，不构成独立验证。</p>

<h3 class="ar-subhead">研究方法</h3>
<p><strong>总体战略</strong>：中山猜想族由一条蕴含链串起——</p>
<div class="ar-chain">
  <span class="ar-chain-node"><b>FDC</b><small>有限维数</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>SNC</b><small>强中山</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>GNC</b><small>广义中山</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>NC</b><small>经典中山</small></span>
</div>
<p class="ar-chain-note">（Chen–Hu–Qin–Wang 2020）故对某类代数证明 findim 有限（FDC）即“买一送三”同时获得 SNC / GNC / NC——这是主流间接路线；直接验证 GNC/NC 虽只覆盖较弱环节，但常给出独立的结构信息。NC 对自内射代数空转，真正要排除的是“非自内射却 $\operatorname{domdim}\Lambda=\infty$”的代数，即证明该类中 <b>domdim 无穷 ⇒ 自内射</b>。按所用结构工具可分为四条路线：</p>

<div class="ar-mmap">
  <div class="ar-mmap-col c-red">
    <div class="ar-mmap-title">A 组合-分类</div>
    <div class="ar-mmap-sub">分类不可分解模，把合冲/内射分解做成显式组合计算</div>
    <ul class="ar-mmap-list">
      <li>Nakayama / 单项式代数</li>
      <li>根基幂零（$J^2=0$, $J^3=0$, $J^{2l+1}=0$）</li>
      <li>特殊双列（string/band）</li>
    </ul>
  </div>
  <div class="ar-mmap-col c-blue">
    <div class="ar-mmap-title">B 同调不变量</div>
    <div class="ar-mmap-sub">寻找控制 findim 的函数/条件，免于分类</div>
    <ul class="ar-mmap-list">
      <li>Igusa–Todorov / IT 代数</li>
      <li>depth / dell（去循环层）</li>
      <li>内射生成（导出范畴）</li>
    </ul>
  </div>
  <div class="ar-mmap-col c-amber">
    <div class="ar-mmap-title">C 约化</div>
    <div class="ar-mmap-sub">构造“变小”的运算，传递 findim 有限性</div>
    <ul class="ar-mmap-list">
      <li>幂等元约化 / 删箭删点</li>
      <li>箭头删除 / 根基扩张</li>
    </ul>
  </div>
  <div class="ar-mmap-col c-green">
    <div class="ar-mmap-title">D Gorenstein / CM</div>
    <div class="ar-mmap-sub">以 Gorenstein 投射（CM）模为棱镜直接攻 GNC</div>
    <ul class="ar-mmap-list">
      <li>CM-finite / C-正交有限</li>
      <li>domdim = findim</li>
    </ul>
  </div>
</div>

<h4 class="ar-mgroup c-red">组合-分类：显式分解</h4>
<div class="ar-method c-red">
  <div class="ar-method-head"><span class="ar-method-name">Nakayama 代数</span><span class="ar-m-tag">样板</span><span class="ar-m-tag">FDC 显式</span></div>
  <ul class="ar-m-pts">
    <li><b>结构工具</b>：uniserial 分类 + Kupisch 序列 $\Rightarrow$ 不可分解模由“顶点的单模 + 长度”完全参数化；</li>
    <li><b>关键机制</b>：合冲保持不可分解（或为零）——pd 退化为<b>轨道长度</b>，轨道在有限个不可分解模间周期化；</li>
    <li><b>显式结果</b>：$\operatorname{findim}=\max_S\min\{\operatorname{pd}S,\operatorname{pd}I(S)\}$ 且与 dell 取等（Ringel 2021）；Sen 构造<b>合冲滤子代数</b> $\varepsilon(\Lambda)$，把 findim、$\varphi$-dim、Gorenstein 维数、支配维数统一压进上界 $2r$（$r$ 为关系个数）。</li>
  </ul>
</div>
<div class="ar-method c-red">
  <div class="ar-method-head"><span class="ar-method-name">单项式代数</span><span class="ar-m-tag">路径组合学</span></div>
  <ul class="ar-m-pts">
    <li>路径组合使极小投射分解显式：GKK 1991 证 FDC；BZH 1992 给出二阶合冲 $\Omega^2$ 的完整图像——理解该类的钥匙；</li>
    <li><b>方法论启示</b>：同一套工具构造出 $\operatorname{Findim}=\operatorname{findim}+1$ 的反例——组合透明度既能证猜也能造反例。</li>
  </ul>
</div>
<div class="ar-method c-red">
  <div class="ar-method-head"><span class="ar-method-name">根基幂零（低 Loewy 长度）</span><span class="ar-m-tag">$J^2=0$ / $J^3=0$ / $J^{2l+1}=0$</span></div>
  <ul class="ar-m-pts">
    <li>$J^3=0$：用根基滤过把投射分解“分层”控制（GHZ 1991）；Huisgen 1993 用<b>储存同调信息的矩阵群</b>给出 gldim $\le n^2-n$、findim $\le n^2+1$ 的定量界；</li>
    <li>$J^{2l+1}=0$ 且 $A/J^l$ 表示有限：Draxler–Happel 1992 证 GNC；正分次 + $J^3=0$：Fuller–Zimmermann-Huisgen 1986 用<b>带滤过的模范畴</b>逐层追踪内射分解；</li>
    <li>$J^2=0$：Gélinas 2021 证 $\operatorname{findim}(\Lambda^{\mathrm{op}})=\operatorname{dell}(\Lambda)$ 恒成立。</li>
    <li><b>局限</b>：低 Loewy 红利随长度迅速衰减，$J^4=0$ 及以上一般情形不在覆盖内。</li>
  </ul>
</div>
<div class="ar-method c-red">
  <div class="ar-method-head"><span class="ar-method-name">特殊双列代数</span><span class="ar-m-tag">string/band</span></div>
  <ul class="ar-m-pts">
    <li>Xu 2013 引入从有界导出范畴出发的<b>广义 Igusa–Todorov 函数</b>，补上 string/band 组合与函数控制之间的缺口（单项式允许部分系数关系，组合介于透明与不可控之间）。</li>
  </ul>
</div>
<p class="ar-mnote"><b>推广障碍</b>：依赖“完全分类 + 合冲不可分解封闭 + 轨道有限/周期”三条件同时成立；对一般 artin 代数三者全部失效。</p>

<h4 class="ar-mgroup c-blue">同调不变量：免于分类</h4>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">IT 代数（Igusa–Todorov）</span><span class="ar-m-tag">Wei 2009</span></div>
  <ul class="ar-m-pts">
    <li>$\varphi$ 函数在 IT 代数上行为良好 $\Rightarrow$ FDC；类包含 repdim $\le 3$、$J^3=0$、单项式、左单列等此前逐类战果——把路线 A 的多个结果收编进一个框架；</li>
    <li>2-IT 对“投射模的自同态代数”封闭：若一切拟遗传代数都是 2-IT（Dlab–Ringel），则 FDC 全面成立；</li>
    <li>开放问题：一切 artin 代数是否都是 IT 代数？</li>
  </ul>
</div>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">depth / dell 夹逼</span><span class="ar-m-tag">Gélinas 2022</span></div>
  <ul class="ar-m-pts">
    <li><b>深度</b> depth 给出 findim 下界，<b>去循环层</b> dell 给出上界（$\operatorname{findim}(\Lambda^{\mathrm{op}})\le\operatorname{dell}(\Lambda)$）；dell 有限 $\Leftrightarrow$ 某伴随对单位映射分裂 + 无挠性判据；</li>
    <li>与 Auslander–Bridger grade 条件挂钩——复活了 Colby 1985 “双重对偶函子与 NC”的路线；已在 Nakayama 代数与 $J^2=0$ 上取等。</li>
  </ul>
</div>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">内射生成（导出范畴）</span><span class="ar-m-tag">Rickard / Cummings / Shaul</span></div>
  <ul class="ar-m-pts">
    <li>内射模生成无界导出范畴 $D(\Lambda)$ $\Rightarrow$ FDC；Noether 交换环已证（Rickard 2019）；非交换有限维代数开放；</li>
    <li>Cummings 2024：FDC $\Leftrightarrow$ findim 左右对称 $\Leftrightarrow$ 内射生成——三问绑为一体；</li>
    <li>Shaul 用无环内射复形把 Gorenstein 对称猜想纳入同一框架（可推广到 DG 环）。</li>
  </ul>
</div>

<h4 class="ar-mgroup c-amber">约化：传递有限性</h4>
<div class="ar-method c-amber">
  <div class="ar-method-head"><span class="ar-method-name">幂等元约化</span><span class="ar-m-tag">Bravo–Paquette 2020</span></div>
  <ul class="ar-m-pts">
    <li>若单模 $S$ 有有限 pd，则 findim $\Lambda$ 有限 $\Rightarrow$ findim $(1-e)\Lambda(1-e)$ 有限（$e$ 支撑 $S$ 的本原幂等元）；由此恢复删箭结果。</li>
  </ul>
</div>
<div class="ar-method c-amber">
  <div class="ar-method-head"><span class="ar-method-name">删箭 / 删点 / 箭头删除</span><span class="ar-m-tag">Green–Psaroudakis–Solberg / Erdmann 等</span></div>
  <ul class="ar-m-pts">
    <li>删箭 $\leftrightarrow$ cleft extension，删点 $\leftrightarrow$ recollement，两类运算保持 findim 有限性的判定（GPS 2021）；</li>
    <li>商掉 $\Lambda\alpha\Lambda$（单项式箭头）：Green 非交换 Gröbner 基保证单项式性传递（Erdmann 等 2025）——单项式代数是该路线的试验田。</li>
  </ul>
</div>
<div class="ar-method c-amber">
  <div class="ar-method-head"><span class="ar-method-name">根基幂扩张 / 代数扩张</span><span class="ar-m-tag">Wang–Xi / Guo</span></div>
  <ul class="ar-m-pts">
    <li>沿根基幂扩张（Wang–Xi 2017）与一般代数扩张（Guo 2019）在相对维数条件下传递 findim 有限性；</li>
    <li>根基保持映射 + 拟一致 Loewy 长度（Giatagantzidis 2025）给出新的有限性反射。</li>
  </ul>
</div>
<p class="ar-mnote"><b>隐忧</b>：约化给出的是“传递”而非“终止性”——目前没有约化序列被证明必然终止于已知类；其实际产出是“极小反例”的结构约束（若 FDC 有反例，必有对约化运算极小的反例）。</p>

<h4 class="ar-mgroup c-green">Gorenstein / CM：直接进攻</h4>
<div class="ar-method c-green">
  <div class="ar-method-head"><span class="ar-method-name">CM-finite / C-正交有限</span><span class="ar-m-tag">Zhang 2012 / 2013</span></div>
  <ul class="ar-m-pts">
    <li>CM 模只有有限多个 $\Rightarrow$ 极小内射分解的“必经节点”有限；正交-无挠条件迫使内射模无法绕开这些节点，从而 GNC 成立（Zhang 2012）；C-正交有限代数上 GNC 成立（2013），Gorenstein CM-finite 为其特例。</li>
  </ul>
</div>
<div class="ar-method c-green">
  <div class="ar-method-head"><span class="ar-method-name">domdim = findim</span><span class="ar-m-tag">Gélinas 2021</span></div>
  <ul class="ar-m-pts">
    <li>“恰有一个非内射不可分解投射模”的代数上 $\operatorname{domdim}(\Lambda)=\operatorname{findim}(\Lambda)$（Marczinzik 猜想加强版）——把 NC 的前提（domdim 无穷）与 findim 无穷直接挂钩，附带该类 Gorenstein 对称猜想。</li>
  </ul>
</div>
<div class="ar-method c-green">
  <div class="ar-method-head"><span class="ar-method-name">稳定等价与 Morita-Gorenstein</span><span class="ar-m-tag">Ariki–Iyama–Park / Chen–Fang–Xi</span></div>
  <ul class="ar-m-pts">
    <li>Ariki–Iyama–Park 2023：稳定等价下 self-injective special biserial 代数满足 ARC（并修正 Pogorzaly 证明中的缺陷）；</li>
    <li>Chen–Fang–Xi 2022：Morita-Gorenstein 代数满足 Nakayama 猜想。</li>
  </ul>
</div>

<div class="ar-mtake">
  <p><b>方法论转折：</b>从“哪类代数行”（组合分类）→“什么函数性质行”（IT、depth/dell）→“什么约化运算行”（cleft / recollement / 箭头删除）。FDC 是性价比最高的进攻点——验证一类的 FDC 即免费获得 SNC/GNC/NC，且与左右对称、内射生成等价（Cummings），是猜想族的“总线接口”。</p>
  <p><b>试金石：</b>Nakayama 代数让两类方法会师——组合路线给出 findim = dell 的取等（Ringel），不变量/派生路线印证左右对称；若要深入研究，Nakayama 代数是最佳切入点。</p>
</div>

<h3 class="ar-subhead">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> T. Nakayama, <i>On algebras with complete homology</i>, Nagoya Math. J. <b>13</b> (1958).</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> H. Tachikawa, <i>Quasi-Frobenius Rings and Generalizations</i>, Lecture Notes in Math. 351, Springer, 1973.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> M. Auslander, I. Reiten, <i>On a generalized version of the Nakayama conjecture</i>, Proc. Amer. Math. Soc. <b>52</b> (1975), 69–74.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> K. R. Fuller, B. Zimmermann-Huisgen, <i>On the generalized Nakayama conjecture and the Cartan determinant problem</i>, Trans. Amer. Math. Soc. <b>294</b> (1986), 679–691.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> M. Auslander, I. Reiten, S. O. Smalø, <i>Representation Theory of Artin Algebras</i>, Cambridge Stud. Adv. Math. 36, Cambridge Univ. Press, 1995.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> C. Huneke, G. Leuschke, <i>Two notions of dualities for maximal Cohen–Macaulay modules</i>, 2002.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> L. W. Christensen, H. Holm, <i>The Auslander condition on homologically finite subcategories</i>, Adv. Math. <b>221</b> (2009), 1577–1588.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> D. Zhou, H. Zimmermann, <i>Classifying the Morita algebras of biserial algebras</i>, Beitr. Algebra Geom. <b>53</b> (2012).</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> X. W. Chen, W. Hu, D. M. Qin, Y. Wang, <i>Stable equivalences of Morita type for self-injective algebras</i>, arXiv:2011.00391 (2020).</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> S. Ariki, O. Iyama, S. Park, <i>Special biserial algebras and the Nakayama conjecture</i>, arXiv:2212.06467 (2022).</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> C. C. Xi, <i>Universally Gorenstein algebras and the Nakayama conjecture</i>, 2022.</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> 惠昌常, 陈红星, <i>Nakayama 猜想在 strong Morita 与 virtually Gorenstein 代数上的进展</i>, 宁波大学报告, 2022.</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> R. Schulz, <i>A counterexample to the Nakayama conjecture in the non-Artinian setting</i>, 2023.</p>
<p class="ar-ref"><span class="ar-ref-no">[14]</span> OpenAI, <i>An explicit counterexample to the Auslander–Reiten conjecture</i>, preprint, 2026-09-23. <b>（未经同行评议，见「2026 年新动态」节说明）</b>
  <br><code>https://github.com/openai/math/tree/main/preprints/An-explicit-counterexample-to-the-Auslander-Reiten-conjecture-September-23-2026</code></p>
<p class="ar-ref"><span class="ar-ref-no">[15]</span> OpenAI, <i>A counterexample to Tachikawa's second conjecture</i>, preprint, 2026-09-23.（Theorem 1.1 + Corollary 1.2 / 1.3 / 8.2）<b>（未经同行评议）</b>
  <br><code>https://github.com/openai/math/tree/main/preprints/A-counterexample-to-Tachikawas-second-conjecture-September-23-2026</code></p>
<p class="ar-ref"><span class="ar-ref-no">[16]</span> OpenAI, <i>openai/math</i> 仓库 <code>README.md</code>、<code>history.md</code> 与 <code>lean/formalization.yaml</code>（含撤稿与修订记录、Lean 形式化清单）, 2026-10。</p>
