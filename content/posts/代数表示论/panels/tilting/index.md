---
title: "tilting"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-1">1　概念与定义</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-2">2　核心工具与定理</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-3">3　主要应用与实例</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-theory-panel-tilting-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\Lambda$，$A$</td><td>有限维代数（$\Lambda$ 通常为被倾斜的代数，$A$ 为倾斜代数）</td></tr>
<tr><td>$\mathrm{pd}\,M$</td><td>$M$ 的投射维数</td></tr>
<tr><td>$\mathrm{add}(T)$</td><td>$T$ 的有限直和之直和因子</td></tr>
<tr><td>$\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$</td><td>投射模的有界同伦范畴（$\simeq\mathbf{D}^{\mathrm{perf}}(\Lambda)$）</td></tr>
<tr><td>tilted / iterated tilted / cluster-tilted</td><td>一次 / 多次 / 丛倾斜代数（见 1.2）</td></tr>
<tr><td>$\tau$</td><td>Auslander–Reiten 平移</td></tr>
<tr><td>silting 复形</td><td>tilting 复形去掉“正负两方向 $\mathrm{Hom}$ 消失”中正向的条件（只留 $i&gt;0$）</td></tr>
</tbody>
</table>
<p>约定：①“tilting 模”默认指经典（Happel–Ringel）定义，即投射维数 $\le1$；②“tilting 复形”按 Rickard 定义；③两种“tilting”是同一思想在不同层面的实现（见 4.1）。</p>

<h3 class="ar-subhead" id="ar-theory-panel-tilting-1">1　概念与定义</h3>

<h4>1.1　经典 tilting 模（Happel–Ringel）</h4>
<p><strong>定义</strong>：模 $T$ 称为 <strong>tilting 模</strong>，若满足三条：</p>
<ol>
  <li>$\mathrm{pd}\,T\le1$；</li>
  <li>$\mathrm{Ext}^{1}_{\Lambda}(T,T)=0$；</li>
  <li>存在短正合列 $0\to\Lambda\to T_{0}\to T_{1}\to0$，其中 $T_{0},T_{1}\in\mathrm{add}(T)$。</li>
</ol>
<p><strong>定义</strong>：$A=\mathrm{End}_{\Lambda}(T)^{\mathrm{op}}$ 称为<strong>倾斜代数</strong>（tilted algebra），$\Lambda$ 称为<em>被倾斜代数</em>。</p>
<p><strong>Bongartz 完备性引理</strong>：任何“预倾斜”模（满足 (1)(2) 但不一定满足 (3)）都可补成一个 tilting 模——这保证 tilting 模总能被构造，是 tilting 理论可操作性的基础。</p>

<h4>1.2　一般 tilting 模与 Miyashita 推广</h4>
<p>Miyashita 把 (1) 放宽为 $\mathrm{pd}\,T&lt;\infty$、(2) 放宽为 $\mathrm{Ext}^{i}_{\Lambda}(T,T)=0$ 对所有 $i&gt;0$，并保持 (3)（项数相应增多）；此时 $\mathrm{End}_{\Lambda}(T)^{\mathrm{op}}$ 仍与 $\Lambda$ 导出等价（但可能不同调维数）。注意：此版本与“一般化 tilting（Happel–Reiten–Smalø）”又不同，后者还允许 $\mathcal{A}$ 为一般 Abel / 正合范畴（见 2.4）。</p>

<h3 class="ar-subhead" id="ar-theory-panel-tilting-2">2　核心工具与定理</h3>

<h4>2.1　Rickard 定理（导出 Morita 理论）</h4>
<p><strong>定理（Rickard, 1989）</strong>：<strong>设</strong> $\Lambda,A$ 为环。<strong>则</strong>下列等价：</p>
<ol>
  <li>$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)\simeq\mathbf{D}^{b}(\mathrm{mod}\,A)$（或 $\mathbf{D}(\mathrm{Mod}\,\Lambda)\simeq\mathbf{D}(\mathrm{Mod}\,A)$）为三角等价；</li>
  <li>$\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)\simeq\mathbf{K}^{b}(\mathrm{proj}\,A)$ 为三角等价；</li>
  <li>存在 tilting 复形 $\mathbb{P}\in\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$ 使 $\mathrm{End}(\mathbb{P})\cong A$。</li>
</ol>
<p>其中 tilting 复形定义为：$\mathrm{Hom}(\mathbb{P},\mathbb{P}[i])=0$ 对所有 $i\neq0$，且 $\mathbb{P}$ 生成 $\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$。<strong>意义</strong>：把“导出等价”这一抽象条件具体化为可构造的复形，是导出表示论的基础定理（本站“导出单性”“Broué 交换亏群猜想”等条目的核心工具）。</p>

<h4>2.2　Happel 定理（AR 箭图与倾斜）</h4>
<p><strong>定理（Happel）</strong>：设 $\Lambda,A$ 由 tilting 模（或 tilting 复形）相联系，则 $\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)\simeq\mathbf{D}^{b}(\mathrm{mod}\,A)$ 等价把 $\Lambda$-模的 AR 箭图映到 $A$-模 AR 箭图的某个“切片”（slice）；由此可从 $\Gamma(\Lambda)$ 读出 $\Gamma(A)$。</p>

<h4>2.3　Happel–Ringel：倾斜代数与挠对分裂</h4>
<p><strong>定理（Happel–Ringel）</strong>：tilted 代数恰为“遗传代数的 tilting 模的自同态代数”；且此时 $\mathrm{mod}\,A$ 存在挠对 $(\mathcal{T},\mathcal{F})$ 使 $\mathcal{T}$ 由“来自 $\Lambda$ 的模”生成、$\mathcal{F}$ 由“新出现的模”生成——即 $\mathrm{mod}\,A$ 由 $\mathcal{T}$ 与 $\mathcal{F}$ <em>分裂</em>。这是“tilted 代数”名称的来源。</p>

<h4>2.4　推广：quasi-tilted 与 silting</h4>
<ul class="agent-list">
<li><span class="agent-name">quasi-tilted</span>（Happel–Reiten–Smalø）：用“倾角 $\le1$ 的切片代数”刻画，允许一般（未必遗传）的被倾斜代数；</li>
<li><span class="agent-name">silting</span>（Aihara–Iyama）：在三角范畴中用“只对 $i&gt;0$ 消失”替换双向消失，从而得到<em>突变总可进行</em>的理论（经典 tilting 突变会失败）；</li>
<li><span class="agent-name">$\tau$-tilting</span>（Adachi–Iyama–Reiten）：在模范畴上的 silting 理论，恢复经典 tilting 的组合学（见本页“$\tau$-tilting 理论”面板）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-tilting-3">3　主要应用与实例</h3>
<ul class="agent-list">
<li><span class="agent-name">BGP 反射函子</span>：Gabriel 定理中构造不可分解模的反射函子即最早的 tilting 实例。</li>
<li><span class="agent-name">Brauer 树代数</span>：对称表示有限代数的导出等价类由 Brauer 树编码，tilting 复形的突变对应 Kauer 移动（见本页“Standard Derived Equivalence”面板 1.4）。</li>
<li><span class="agent-name">Broué 交换亏群猜想</span>：猜测块代数与其 Brauer 对应块代数导出等价——这是 tilting 复形理论的主要动机之一（本站“Broué 交换亏群猜想”面板）。</li>
<li><span class="agent-name">计算工具</span>：tilting 复形的分类、导出 Picard 群、silting 突变图（Aihara）等。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-tilting-4">4　与邻近概念的关系</h3>
<ul class="agent-list">
<li><span class="agent-name">与 $\tau$-tilting</span>：投射维数 $\le1$ 时二者一致；一般情形 $\tau$-tilting 更完备（突变总可进行），且 support $\tau$-倾斜对 ↔ 两项 silting 复形。</li>
<li><span class="agent-name">与丛理论</span>：丛倾斜代数是“2-CY 范畴中丛倾斜对象的自同态代数”，与 tilted 代数平级但机制不同（前者经 2-CY，后者经 $\mathrm{pd}\le1$ + 遗传）。</li>
<li><span class="agent-name">与 Gorenstein 同调</span>：tilting 模的存在性常用于检验 Gorenstein 性（如 Happel 关于 Gorenstein 代数的定理）；Gorenstein 投射模是 tilting 模在 Gorenstein 情形的类似物。</li>
<li><span class="agent-name">与导出范畴</span>：tilting 复形是 $\mathbf{K}^{b}(\mathrm{proj})$ 内部的“生成元”，因此 tilting 理论本质上是导出范畴的生成理论——这也是它与可逼近性理论（Neeman 的度量与生成）相邻的原因。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-tilting-5">5　常见混淆与易错点</h3>
<ul class="agent-list">
<li><span class="agent-name">三条条件缺一不可</span>：仅满足 (1)(2) 的“预倾斜”模不一定是 tilting（Bongartz 完备性给出补全，但不等于它自己就是 tilting）。</li>
<li><span class="agent-name">tilted ≠ iterated tilted ≠ cluster-tilted</span>：三者分别对应“倾斜一次/多次（经倾斜代数再倾斜）/经 2-CY 丛倾斜”，生成机制不同；例：iterated tilted 未必 tilted。</li>
<li><span class="agent-name">tilting 模 vs. tilting 复形</span>：前者在模范畴（pd 限制），后者在 $\mathbf{K}^{b}(\mathrm{proj})$（无 pd 限制）；Rickard 定理把导出等价完全归约到后者。</li>
<li><span class="agent-name">“生成”条件的形式</span>：Rickard 定理的生成条件是“经平移、取锥、直和因子生成”，等价于 thick 生成；只写“add 生成”会得到错误的类。</li>
<li><span class="agent-name">silting vs. tilting</span>：silting 只要求正向消失，故允许 $i&lt;0$ 的自同态非零；很多“tilting 复形”的文献结论只对 silting 成立。</li>
<li><span class="agent-name">导出等价的方向性</span>：Rickard 定理给出的等价 $\mathbf{D}^{b}(\Lambda)\simeq\mathbf{D}^{b}(A)$ 是<em>存在性</em>；具体函子需由 tilting 复形构造，且可能不唯一（导出 Picard 群）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-tilting-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> D. Happel, <i>Triangulated Categories in the Representation Theory of Finite-Dimensional Algebras</i>, LMS Lecture Note Ser. <b>119</b>, 1988.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> J. Rickard, <i>Morita theory for derived categories: a bicategorical approach</i>（导出 Morita 理论）, J. London Math. Soc. <b>39</b> (1989), 436–456.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> D. Happel, C. M. Ringel, <i>Tilted algebras</i>, Trans. Amer. Math. Soc. <b>274</b> (1982), 399–443.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> Y. Miyashita, <i>Tilting modules of finite projective dimension</i>, Math. Z. <b>193</b> (1986), 113–146.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> D. Happel, I. Reiten, S. O. Smalø, <i>Tilting in abelian categories and quasitilted algebras</i>, Mem. Amer. Math. Soc. <b>120</b> (1996), no. 575.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> T. Adachi, O. Iyama, I. Reiten, <i>$\tau$-tilting theory</i>, arXiv:1210.1036; Compos. Math. <b>150</b> (2014), 415–452.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> T. Aihara, O. Iyama, <i>Silting mutation in triangulated categories</i>, J. London Math. Soc. <b>85</b> (2012), 633–668.</p>
</div>
</div>
