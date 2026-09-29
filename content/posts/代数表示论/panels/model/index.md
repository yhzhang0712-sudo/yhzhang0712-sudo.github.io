---
title: "model"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-theory-panel-model-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-model-1">1　概念与定义</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-model-2">2　核心工具与定理</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-model-3">3　主要应用与实例</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-model-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-model-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-model-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-theory-panel-model-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\mathcal{M}$</td><td>模型范畴（闭模型范畴）</td></tr>
<tr><td>$\mathrm{We}(\mathcal{M})$</td><td>弱等价类</td></tr>
<tr><td>$\mathrm{Fib}$ / $\mathrm{Cof}$</td><td>纤维化 / 余纤维化</td></tr>
<tr><td>$\mathrm{Ho}(\mathcal{M})$</td><td>同伦范畴（局部化于弱等价）</td></tr>
<tr><td>$\mathcal{R}$、$\mathcal{Q}$</td><td>纤维替换 / 余纤维替换函子</td></tr>
<tr><td>$\mathbb{L}F$、$\mathbb{R}F$</td><td>左 / 右导出函子</td></tr>
<tr><td>$\mathrm{Lwe}$</td><td>左 Quillen 等价</td></tr>
<tr><td>$\mathrm{Cofib}$</td><td>余纤维化生成的态射类（Hasse 图）</td></tr>
</tbody>
</table>
<p>约定：①“闭模型范畴”按 Quillen / Hovey 的公理；②“对象 $X$ 余纤维化 / 纤维化”简称 $X$ 余纤维、$X$ 纤维；③本面板重点在表示论关心的三例：$\mathrm{Ch}(k)$、dg 范畴、稳定模型范畴。</p>

<h3 class="ar-subhead" id="ar-theory-panel-model-1">1　概念与定义</h3>

<h4>1.1　Quillen 公理</h4>
<p><strong>定义</strong>：范畴 $\mathcal{M}$ 配三类态射（弱等价 $\mathrm{We}$、纤维化 $\mathrm{Fib}$、余纤维化 $\mathrm{Cof}$）称为<strong>模型范畴</strong>，若满足：</p>
<ol>
  <li><strong>(MC1) 有限完备与余完备</strong>；</li>
  <li><strong>(MC2) 三选二</strong>：若 $f\circ g$ 中任意两个是弱等价，则第三个也是；</li>
  <li><strong>(MC3) 再TRACT封闭</strong>：三类态射对<em>缩回</em>（retract）封闭；</li>
  <li><strong>(MC4) 提升公理</strong>：对交换方块 $A\to X$、$B\to Y$，若左竖是余纤维化、右竖是纤维化，且两者之一还是弱等价，则存在对角提升 $B\to X$；</li>
  <li><strong>(MC5) 分解公理</strong>：任意态射可函子性地分解为 (余纤维化后接弱等价) 与 (弱等价后接纤维化)。</li>
</ol>
<p>由 (MC4)(MC5) 可推出：弱等价 = “可分解为被同伦逆的态射”的态射类；同伦范畴 $\mathrm{Ho}(\mathcal{M})$ 由局部化得到。</p>

<h4>1.2　同伦范畴与 Whitehead 定理</h4>
<p><strong>定理（Quillen）</strong>：$\mathrm{Ho}(\mathcal{M})$ 中，同时余纤维与纤维的对象（双纤维对象）之间的态射是同构当且仅当它是弱等价（Whitehead 型定理）。这使“同伦范畴中的同构”可被具体构造（用余纤维替换 + 同伦）验证。</p>

<h3 class="ar-subhead" id="ar-theory-panel-model-2">2　核心工具与定理</h3>

<h4>2.1　Quillen 伴随与导出函子</h4>
<p><strong>定义</strong>：伴随对 $F:\mathcal{M}\rightleftarrows\mathcal{N}:G$ 称为 <strong>Quillen 伴随</strong>，若 $F$ 保余纤维化与平凡余纤维化（等价地 $G$ 保纤维化与平凡纤维化）。此时 $F$ 的<em>左导出</em>为 $\mathbb{L}F:=G\circ\mathcal{Q}$（先余纤维替换再 $F$），$G$ 的<em>右导出</em>为 $\mathbb{R}G$。</p>
<p><strong>定理</strong>：Quillen 伴随诱导 $\mathrm{Ho}$ 上的伴随 $(\mathbb{L}F\dashv\mathbb{R}G)$；若该伴随为范畴等价，称为 <strong>Quillen 等价</strong>。</p>
<p><strong>要点</strong>：Quillen 等价是“模型范畴层面”的正确等价概念，严格强于“同伦范畴的等价”——这与增强唯一性的主题相通（本站“Infinity Category”2.3、4.3）。</p>

<h4>2.2　三种表示论相关的模型结构</h4>
<table>
<thead><tr><th>模型范畴</th><th>弱等价</th><th>余纤维化</th><th>同伦范畴</th></tr></thead>
<tbody>
<tr><td>$\mathrm{Ch}(k)$（内射模型）</td><td>拟同构</td><td>单项态射（degreewise mono，带分裂余核条件）</td><td>$\mathbf{D}(k)$</td></tr>
<tr><td>$\mathrm{Ch}(k)$（投射模型）</td><td>拟同构</td><td>degreewise 分裂单、余核投射</td><td>$\mathbf{D}(k)$</td></tr>
<tr><td>小 dg 范畴（Tabuada）</td><td>拟等价</td><td>在对象与态射上分别自由添加</td><td>dg 范畴同伦论</td></tr>
<tr><td>稳定模型范畴</td><td>稳定弱等价</td><td>—</td><td>三角范畴</td></tr>
</tbody>
</table>
<p><strong>定理（Schwede–Shipley）</strong>：稳定模型范畴恰为（某谱范畴的）模——这是“稳定 $\infty$-范畴 = $\mathrm{Sp}$-模”定理的模型范畴前身（见本页“Infinity Category”1.3）。</p>

<h4>2.3　组合模型范畴与 $\infty$-范畴的呈现</h4>
<p><strong>定理（Dugger；Lurie）</strong>：每个可呈现 $\infty$-范畴都可由一个组合模型范畴呈现；反之，模型范畴的“单纯化”给出 $\infty$-范畴。<strong>意义</strong>：模型范畴与 $\infty$-范畴不是竞争理论，而是“同一对象的两种呈现”——模型范畴便于具体计算（如 Tabuada 的 dg 范畴模型），$\infty$-范畴便于泛性质与唯一性陈述。</p>

<h4>2.4　Dugger–Shipley：三角等价不足以提升</h4>
<p><strong>定理（Dugger–Shipley；基于 Schlichting 的例子）</strong>：存在 dg 代数 $B,B'$ 使 $\mathbf{D}(B)\simeq\mathbf{D}(B')$（三角等价）但 $B$-Mod 与 $B'$-Mod<em>不</em> Quillen 等价（其稳定模型范畴不同伦等价），甚至 $\mathrm{HH}^{*}$、$\mathrm{THH}^{*}$ 不同。</p>
<p><strong>意义</strong>：这是“同伦范畴的三角等价不足以承载增强信息”的模型范畴版本，与 Lunts–Orlov / CNS 的唯一性定理互为正反两面（见本站“Infinity Category”1.0、2.3）。</p>

<h3 class="ar-subhead" id="ar-theory-panel-model-3">3　主要应用与实例</h3>
<ul class="agent-list">
<li><span class="agent-name">导出函子的计算</span>：$\mathbb{R}\mathrm{Hom}$、$\mathbb{L}\otimes$ 用余纤维 / 纤维替换实现，是同调代数的标准技术。</li>
<li><span class="agent-name">dg 范畴的同伦论</span>：Tabuada 模型结构 + Toën 的导出 Morita 理论（本页“DG 范畴”2.3）。</li>
<li><span class="agent-name">稳定模型范畴与三角范畴</span>：Hovey、Schwede–Shipley；为“增强”提供可操作的呈现。</li>
<li><span class="agent-name">Bousfield 局部化</span>：在模型范畴内实现“把某类态射取逆”，对应三角范畴的 smashing / Verdier 商（与望远镜猜想相关，见本页“张量三角几何”2.6）。</li>
<li><span class="agent-name">与本站面板</span>：本站“DG 范畴”“Infinity Category”面板中提到的所有“模型范畴侧”结果都以此为基础。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-model-4">4　与邻近概念的关系</h3>
<ul class="agent-list">
<li><span class="agent-name">与 $\infty$-范畴</span>：模型范畴是“带弱等价的范畴”的呈现；$\infty$-范畴是“同伦论本身”。Quillen 等价 ↔ $\infty$-范畴等价（在适当意义下）。</li>
<li><span class="agent-name">与 derivator</span>：derivator 是“记录所有图范畴上的导出函子”的中间结构，弱于 $\infty$-范畴但强于三角范畴（本站“Infinity Category”4.4）。</li>
<li><span class="agent-name">与导出范畴</span>：$\mathbf{D}(\mathscr{A})$ 的存在性（Verdier 商）在模型范畴中有对应（Bousfield–Friedlander 型构造）；而“同伦范畴的三角结构”由模型结构保证。</li>
<li><span class="agent-name">与 operad</span>：模型范畴为“同伦不变的代数结构”（$E_{\infty}$、$A_{\infty}$）提供承载；$\mathcal{W}$-构造（Boardman–Vogt）在模型范畴中实现 operad 的同伦相干化（本站“Operad Theory”3.5）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-model-5">5　常见混淆与易错点</h3>
<ul class="agent-list">
<li><span class="agent-name">弱等价不是同构</span>：模型范畴中“同构”指 $\mathrm{Ho}(\mathcal{M})$ 的同构；把弱等价当同构是初学错误。</li>
<li><span class="agent-name">Quillen 等价 ≠ 同构</span>：Quillen 等价允许“在 $\mathrm{Ho}$ 上等价”但底层函子非同构；只有“同构于单位”的说法才指严格等价。</li>
<li><span class="agent-name">导出函子必须替换</span>：$\mathbb{L}F$ 不是 $F$，必须先余纤维替换；直接用 $F$ 计算一般得不到右结果（对非余纤维对象）。</li>
<li><span class="agent-name">“同伦范畴的等价”不足以承载不变量</span>：Dugger–Shipley / Schlichting 说明三角等价不蕴含 $K$ 理论、$\mathrm{HH}$ 一致（本站“Infinity Category”1.0）。</li>
<li><span class="agent-name">不是所有范畴都能配上模型结构</span>：模型结构需满足 (MC1)–(MC5)；把“三类态射”随便指定并不构成模型范畴。</li>
<li><span class="agent-name">组合模型范畴的限制</span>：很多“存在性”定理（如 Dugger 的呈现定理）要求组合性（presentable + 生成），非组合的模型范畴不满足。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-model-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> D. G. Quillen, <i>Homotopical Algebra</i>, Lecture Notes in Math. <b>43</b>, Springer, 1967.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> M. Hovey, <i>Model Categories</i>, Math. Surveys Monogr. <b>63</b>, AMS, 1999.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> W. G. Dwyer, J. Spaliński, <i>Homotopy theories and model categories</i>, in: Handbook of Algebraic Topology, 73–126, North-Holland, 1995.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> P. S. Hirschhorn, <i>Model Categories and Their Localizations</i>, Math. Surveys Monogr. <b>99</b>, AMS, 2003.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> D. Dugger, <i>Combinatorial model categories have presentations</i>, Adv. Math. <b>164</b> (2001), 177–201.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> S. Schwede, B. Shipley, <i>Stable model categories are categories of modules</i>, Topology <b>42</b> (2003), 103–153.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> D. Dugger, B. Shipley, <i>$K$-theory and derived equivalences</i>, arXiv:math/0209084; Duke Math. J. <b>124</b> (2004), 587–617.</p>
</div>
</div>
