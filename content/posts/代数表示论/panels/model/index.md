---
title: "Model Category"
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
    <a class="ar-toc-l1" href="#ar-theory-panel-model-1">1　直观与动机</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-model-2">2　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-model-2-1">2.1　Quillen 公理</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-model-2-2">2.2　同伦范畴与 Whitehead 型定理</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-model-3">3　核心工具、定理与证明逻辑</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-model-3-1">3.1　局部化为什么良定义</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-model-3-2">3.2　Quillen 伴随与导出函子</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-model-3-3">3.3　表示论关心的模型结构</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-model-3-4">3.4　组合模型范畴与 $\infty$-呈现</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-model-3-5">3.5　Dugger–Shipley：三角等价不足以提升</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-model-4">4　主要应用与可手算的例子</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-model-5">5　与邻近概念的关系</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-model-6">6　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-model-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-theory-panel-model-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\mathcal{M}$</td><td>模型范畴（闭模型范畴）</td></tr>
<tr><td>$\mathrm{We}(\mathcal{M})$</td><td>弱等价类（本面板常记 $W$）</td></tr>
<tr><td>$\mathrm{Fib}$ / $\mathrm{Cof}$</td><td>纤维化 / 余纤维化</td></tr>
<tr><td>平凡（余）纤维化</td><td>同时是弱等价的（余）纤维化</td></tr>
<tr><td>$\mathrm{Ho}(\mathcal{M})$</td><td>同伦范畴 $=\mathcal{M}[W^{-1}]$</td></tr>
<tr><td>$Q$、$R$</td><td>余纤维替换 / 纤维替换函子</td></tr>
<tr><td>$\mathbb{L}F$、$\mathbb{R}F$</td><td>左 / 右导出函子</td></tr>
<tr><td>LLP / RLP</td><td>左 / 右提升性质（对某类态射）</td></tr>
</tbody>
</table>
<p>约定：①"闭模型范畴"按 Quillen / Hovey 的公理；②"$X$ 余纤维 / 纤维"是"$\varnothing\to X$ / $X\to *$ 为（余）纤维化"的简称；③本面板重点在表示论关心的几例：$\mathrm{Ch}(R)$、小 dg 范畴、稳定模型范畴。</p>

<h3 class="ar-subhead" id="ar-theory-panel-model-1">1　直观与动机</h3>
<div class="ar-intu">
<p><b>一句话</b>：模型范畴 = 给一个范畴装上"哪些态射算同伦等价 + 哪些对象适合做分解"这套装置，使得<strong>局部化 $\mathcal{M}[W^{-1}]$ 可以真正被算出来</strong>。</p>
<p><b>问题从哪来</b>：想把拟同构全部倒过来得到 $\mathbf{D}(\mathscr{A})$，直接做会遇到两个麻烦：① 集合论——局部化后的态射类可能"太大"；② 计算——态射是 roof，无法直接算。模型范畴用<em>余纤维 / 纤维替换</em>把 roof 换成"普通态射"，两个麻烦一起解决。</p>
<p><b>三类的分工</b>：弱等价 = 想倒过来的那些态射；余纤维化 = "好对象"用来做左替换（投射分解的抽象版）；纤维化 = "好对象"用来做右替换（内射分解的抽象版）。</p>
<p><b>与同调代数的对照</b>：投射分解 = 余纤维替换，内射分解 = 纤维替换，$\mathrm{Hom}$ 的导出 = 先替换再作用。模型范畴就是把这套流程抽象成五条公理。</p>
</div>

<h3 class="ar-subhead" id="ar-theory-panel-model-2">2　概念与定义</h3>

<h4 id="ar-theory-panel-model-2-1">2.1　Quillen 公理</h4>
<p><strong>定义</strong>：范畴 $\mathcal{M}$ 配三类态射（弱等价 $W$、纤维化 $\mathrm{Fib}$、余纤维化 $\mathrm{Cof}$）称为<strong>模型范畴</strong>，若满足：</p>
<ol>
  <li><strong>(MC1) 有限完备与余完备</strong>（有所有有限极限 / 余极限）；</li>
  <li><strong>(MC2) 三选二</strong>：若 $f$、$g$、$g f$ 中任意两个是弱等价（只要 $gf$ 有定义），则第三个也是；</li>
  <li><strong>(MC3) 收缩封闭</strong>：三类态射都对 retract（收缩）封闭；</li>
  <li><strong>(MC4) 提升公理</strong>：见下图——平凡余纤维化对纤维化有 LLP，余纤维化对平凡纤维化有 LLP；</li>
  <li><strong>(MC5) 分解公理</strong>：任意态射 $f$ 都可以（函子性地）写成 $f=p\circ i$，其中两种分解都存在——(a) $i$ 为平凡余纤维化、$p$ 为纤维化；(b) $i$ 为余纤维化、$p$ 为平凡纤维化。</li>
</ol>
<figure class="ar-cd">
<svg viewBox="0 0 380 200" width="380" height="200" role="img" aria-label="提升公理方块：i 余纤维化、p 纤维化，存在对角提升">
  <defs>
    <marker id="arh-mod-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>
  </defs>
  <g stroke="currentColor" stroke-width="1.4" fill="none" marker-end="url(#arh-mod-a)">
    <line x1="96" y1="46" x2="264" y2="46"/>
    <line x1="96" y1="146" x2="264" y2="146"/>
    <line x1="68" y1="60" x2="68" y2="132"/>
    <line x1="292" y1="60" x2="292" y2="132"/>
  </g>
  <line x1="80" y1="140" x2="258" y2="56" stroke="currentColor" stroke-width="1.3" fill="none" stroke-dasharray="5 4" marker-end="url(#arh-mod-a)"/>
  <g fill="currentColor" font-size="15" text-anchor="middle">
    <text x="56" y="42">A</text>
    <text x="56" y="158">B</text>
    <text x="312" y="42">X</text>
    <text x="312" y="158">Y</text>
  </g>
  <g fill="currentColor" font-size="12" text-anchor="middle">
    <text x="180" y="34">u</text>
    <text x="180" y="166">v</text>
    <text x="42" y="100">i</text>
    <text x="322" y="100">p</text>
    <text x="152" y="88">∃ h</text>
  </g>
</svg>
<figcaption>提升公理 (MC4)：给定交换方块（$pu=vi$），若 $i$ 是平凡余纤维化、或 $p$ 是平凡纤维化，则存在对角提升 $h:B\to X$ 使两个三角都交换。这是模型范畴全部计算能力的来源。</figcaption>
</figure>

<h4 id="ar-theory-panel-model-2-2">2.2　同伦范畴与 Whitehead 型定理</h4>
<p><strong>定理（Quillen）</strong>：对<em>双纤维</em>对象（既余纤维又纤维）之间的态射，"是弱等价"与"是（左 = 右）同伦等价"等价；这也给出 $\mathrm{Ho}(\mathcal{M})$ 中同构的具体判别法。此外 $\mathrm{Ho}(\mathcal{M})(X,Y)$ 可用 $[QX,RY]$（替换后的同伦类）计算，从而是<em>集合</em>（不再有集合论隐患）。</p>

<h3 class="ar-subhead" id="ar-theory-panel-model-3">3　核心工具、定理与证明逻辑</h3>

<h4 id="ar-theory-panel-model-3-1">3.1　局部化为什么良定义（模型范畴存在的理由）</h4>
<div class="ar-proof">
<div class="ar-proof-hd"><span class="ar-proof-tag">证明思路</span>从公理到"可算的局部化"</div>
<div class="ar-pf">
<div class="ar-pf-step"><span class="ar-pf-n">1</span><b>造替换</b>：由 (MC5)，$\varnothing\to X$ 分解为 $\varnothing\to QX\to X$（余纤维化后接平凡纤维化）⟹ 每个 $X$ 有余纤维替换 $QX$；对偶地有纤维替换 $RX$。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">2</span><b> roof 变普通态射</b>：$\mathrm{Ho}(\mathcal{M})(X,Y)\cong[QX,RY]$（同伦类）；由 (MC4) 可证同伦关系在双纤维对象上是等价关系，且复合良定。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">3</span><b>弱等价 ⟺ 同伦等价</b>：对双纤维对象，$f$ 弱等价 $\iff$ $f$ 有同伦逆（用 (MC4) 的两次提升构造逆）。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">4</span><b>结论</b>：于是 $\mathcal{M}[W^{-1}]$ 的态射可用同伦类计算 ⟹ 是局部小范畴，且 $W$ 在其中的像正是同构。</div>
</div>
<p class="ar-pf-key"><b>一句话关键</b>：<b>(MC5) 给出替换、(MC4) 给出提升</b>——这两条公理合起来把"倒箭头"变成"做替换 + 取同伦类"。导出范畴的 K-投射 / K-内射分解正是它的特例。</p>
</div>

<h4 id="ar-theory-panel-model-3-2">3.2　Quillen 伴随与导出函子</h4>
<p><strong>定义</strong>：伴随对 $F:\mathcal{M}\rightleftarrows\mathcal{N}:G$ 称为 <strong>Quillen 伴随</strong>，若 $F$ 保余纤维化与平凡余纤维化（等价地 $G$ 保纤维化与平凡纤维化）。此时</p>
$$\mathbb{L}F:=F\circ Q_{\mathcal{M}}\quad(\text{先余纤维替换再作用 }F),\qquad \mathbb{R}G:=G\circ R_{\mathcal{N}}\quad(\text{先纤维替换再作用 }G).$$
<p><strong>定理</strong>：Quillen 伴随诱导 $\mathrm{Ho}$ 上的伴随 $(\mathbb{L}F\dashv\mathbb{R}G)$；若该伴随为范畴等价，称为 <strong>Quillen 等价</strong>。</p>
<p><strong>要点</strong>：Quillen 等价是"模型范畴层面"的正确等价概念，严格强于"同伦范畴的等价"——这与增强唯一性的主题相通（见本页「Infinity Category」）。</p>

<h4 id="ar-theory-panel-model-3-3">3.3　表示论关心的几种模型结构</h4>
<table>
<thead><tr><th>模型范畴</th><th>弱等价</th><th>余纤维化 / 纤维化（典型描述）</th><th>同伦范畴</th></tr></thead>
<tbody>
<tr><td>$\mathrm{Ch}(R)$（投射模型，Hovey）</td><td>拟同构</td><td>纤维化 = 逐项满射；余纤维化由 LLP 决定（余纤维对象 ≈ dg-投射复形）</td><td>$\mathbf{D}(R)$</td></tr>
<tr><td>$\mathrm{Ch}(R)$（内射模型）</td><td>拟同构</td><td>余纤维化 = 逐项单射；纤维对象 ≈ K-内射复形</td><td>$\mathbf{D}(R)$</td></tr>
<tr><td>$\mathrm{Ch}_{\ge0}(R)$（Quillen 原始）</td><td>拟同构</td><td>纤维化 = 正次数逐项满射；余纤维对象 = 逐项投射</td><td>$\mathbf{D}_{\ge0}(R)$</td></tr>
<tr><td>小 dg 范畴（Tabuada）</td><td>拟等价</td><td>在对象与态射上分别自由添加</td><td>dg 范畴同伦论</td></tr>
<tr><td>稳定模型范畴（Hovey）</td><td>稳定弱等价</td><td>由平移与（余）纤维序列刻画</td><td>三角范畴</td></tr>
</tbody>
</table>
<p><strong>定理（Schwede–Shipley）</strong>：稳定模型范畴恰为（某谱范畴的）模——这是"稳定 $\infty$-范畴 = $\mathrm{Sp}$-模"定理的模型范畴前身。</p>
<p class="ar-mnote"><b>提醒</b>：上表中"余纤维化 / 纤维化"的显式描述随有界 / 无界、投射 / 内射而变（无界情形需 dg-投射、K-内射等概念，见 Spaltenstein）；引用具体结论前须核对所用版本。</p>

<h4 id="ar-theory-panel-model-3-4">3.4　组合模型范畴与 $\infty$-范畴的呈现</h4>
<p><strong>定理（Dugger；Lurie）</strong>：每个可呈现 $\infty$-范畴都可由一个组合模型范畴呈现；反之，模型范畴的"单纯化"给出 $\infty$-范畴。<strong>意义</strong>：模型范畴与 $\infty$-范畴不是竞争理论，而是同一对象的两种呈现——模型范畴便于具体计算（如 Tabuada 的 dg 范畴模型），$\infty$-范畴便于泛性质与唯一性陈述。</p>

<h4 id="ar-theory-panel-model-3-5">3.5　Dugger–Shipley：三角等价不足以提升</h4>
<p><strong>定理（Dugger–Shipley；基于 Schlichting 的例子）</strong>：存在 dg 代数 $B,B'$ 使 $\mathbf{D}(B)\simeq\mathbf{D}(B')$（三角等价）但 $B$-Mod 与 $B'$-Mod<em>不</em> Quillen 等价（其稳定模型范畴不同伦等价），甚至 $\mathrm{HH}^{*}$、$\mathrm{THH}^{*}$ 不同。</p>
<p><strong>意义</strong>：这是"同伦范畴的三角等价不足以承载增强信息"的模型范畴版本，与 Lunts–Orlov / CNS 的唯一性定理互为正反两面。</p>

<h3 class="ar-subhead" id="ar-theory-panel-model-4">4　主要应用与可手算的例子</h3>
<div class="ar-ex">
<div class="ar-ex-hd">例 1：模型结构如何给出导出范畴</div>
<p>在 $\mathrm{Ch}(R)$ 上取投射模型结构（弱等价 = 拟同构）。此时：余纤维替换 $QX\to X$ 就是"取 dg-投射分解"，纤维替换 $X\to RX$ 就是"取 K-内射分解"。于是 $\mathrm{Ho}(\mathrm{Ch}(R))=\mathbf{D}(R)$，且 $\mathrm{Ho}$ 里的 $\mathrm{Hom}$ 正是 $\mathrm{Hom}_{\mathbf{D}}$；$\mathbb{R}\mathrm{Hom}$ 与 $\mathbb{L}(-\otimes-)$ 就是"先替换再作用"。这就是同调代数里"取分解"的标准操作被公理化后的样子。</p>
</div>
<div class="ar-ex">
<div class="ar-ex-hd">例 2：Dold–Kan 对应</div>
<p>单纯 Abel 群范畴 $s\mathbf{Ab}$ 与非负链复形范畴 $\mathrm{Ch}_{\ge0}(\mathbf{Ab})$ 等价（Dold–Kan），且这一等价把 $s\mathbf{Ab}$ 上经典的（Quillen）模型结构搬到 $\mathrm{Ch}_{\ge0}$ 上。它是"同调代数 = 同伦论的一个分支"这一观点最 concrete 的入口：链复形就是一类特殊的单纯对象。</p>
</div>
<ul class="agent-list">
<li><span class="agent-name">导出函子的计算</span>：$\mathbf{R}\mathrm{Hom}$、$\mathbf{L}\otimes$ 用替换实现，是同调代数的标准技术。</li>
<li><span class="agent-name">dg 范畴的同伦论</span>：Tabuada 模型结构 + Toën 的导出 Morita 理论（见「DG 范畴」3.4）。</li>
<li><span class="agent-name">稳定模型范畴与三角范畴</span>：Hovey、Schwede–Shipley；为"增强"提供可操作的呈现。</li>
<li><span class="agent-name">Bousfield 局部化</span>：在模型范畴内实现"把某类态射取逆"，对应三角范畴的 smashing / Verdier 商（与望远镜猜想相关，见「张量三角几何」）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-model-5">5　与邻近概念的关系</h3>
<ul class="agent-list">
<li><span class="agent-name">与 $\infty$-范畴</span>：模型范畴是"带弱等价的范畴"的呈现，$\infty$-范畴是"同伦论本身"；Quillen 等价 ↔ $\infty$-范畴等价（在适当意义下）。</li>
<li><span class="agent-name">与 dg 范畴</span>：dg 范畴（及其 Tabuada 模型结构）是链复形富化的模型；$k$-线性稳定 $\infty$-范畴 ↔ dg 范畴（Cohn）。</li>
<li><span class="agent-name">与导出范畴</span>：$\mathbf{D}(\mathscr{A})$ 正是 $\mathrm{Ch}(\mathscr{A})$ 上模型结构的同伦范畴；"三角结构"由模型结构保证（Hovey）。</li>
<li><span class="agent-name">与 derivator</span>：derivator 记录"所有图范畴上的导出函子"，弱于 $\infty$-范畴但强于三角范畴。</li>
<li><span class="agent-name">与 operad</span>：模型范畴为"同伦不变的代数结构"（$E_{\infty}$、$A_{\infty}$）提供承载；Boardman–Vogt 的 $\mathcal{W}$-构造在模型范畴中实现 operad 的同伦相干化（见「Operad Theory」）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-model-6">6　常见混淆与易错点</h3>
<ul class="agent-list">
<li><span class="agent-name">弱等价不是同构</span>：$\mathcal{M}$ 里的"同构"仍指严格同构；弱等价只在 $\mathrm{Ho}(\mathcal{M})$ 里变成同构。</li>
<li><span class="agent-name">$\mathbb{L}F=F\circ Q$，不是 $G\circ Q$</span>：左导出是"先余纤维替换<em>再作用 $F$</em>"；把伴随右伴随 $G$ 写进来是常见笔误。</li>
<li><span class="agent-name">Quillen 等价 ≠ 同构、≠ 三角等价</span>：Quillen 等价强于"同伦范畴等价"（它要求伴随结构相容）；把它与"$\mathrm{Ho}$ 上等价"混用会丢失信息（见 3.5）。</li>
<li><span class="agent-name">导出函子必须替换</span>：直接用 $F$ 作用在任意对象上一般得不到正确结果（只有作用在余纤维 / 纤维对象上才安全）。</li>
<li><span class="agent-name">"同伦范畴的等价"不足以承载不变量</span>：Dugger–Shipley / Schlichting 的例子说明三角等价不蕴含 $K$ 理论、$\mathrm{HH}$ 一致。</li>
<li><span class="agent-name">不是所有范畴都能配上模型结构</span>：三类态射必须满足 (MC1)–(MC5)；随意指定不构成模型范畴。</li>
<li><span class="agent-name">有界 / 无界的差别</span>：$\mathrm{Ch}_{\ge0}$ 上 Quillen 原始的构造最直观；无界 $\mathrm{Ch}(R)$ 上的投射 / 内射模型结构需要 dg-投射 / K-内射等概念，描述不能照搬。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-model-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> D. G. Quillen, <i>Homotopical Algebra</i>, Lecture Notes in Math. <b>43</b>, Springer, 1967.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> M. Hovey, <i>Model Categories</i>, Math. Surveys Monogr. <b>63</b>, AMS, 1999.（第 2 章复形上的模型结构）</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> W. G. Dwyer, J. Spaliński, <i>Homotopy theories and model categories</i>, in: Handbook of Algebraic Topology, 73–126, North-Holland, 1995.（最佳入门）</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> P. S. Hirschhorn, <i>Model Categories and Their Localizations</i>, Math. Surveys Monogr. <b>99</b>, AMS, 2003.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> D. Dugger, <i>Combinatorial model categories have presentations</i>, Adv. Math. <b>164</b> (2001), 177–201.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> S. Schwede, B. Shipley, <i>Stable model categories are categories of modules</i>, Topology <b>42</b> (2003), 103–153.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> D. Dugger, B. Shipley, <i>$K$-theory and derived equivalences</i>, Duke Math. J. <b>124</b> (2004), 587–617.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> N. Spaltenstein, <i>Resolutions of unbounded complexes</i>, Compositio Math. <b>65</b> (1988), 121–154.（无界情形的替换）</p>
</div>
</div>
