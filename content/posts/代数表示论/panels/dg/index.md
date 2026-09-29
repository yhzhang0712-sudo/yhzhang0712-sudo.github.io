---
title: "DG 范畴"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-theory-panel-dg-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-dg-1">1　直观与动机</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-dg-2">2　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-dg-2-1">2.1　dg 范畴的定义与例子</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-dg-2-2">2.2　pretriangulated 与 $H^{0}$</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-dg-2-3">2.3　四层结构图</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-dg-3">3　核心工具、定理与证明逻辑</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-dg-3-1">3.1　$H^{0}$ 为何是三角范畴</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-dg-3-2">3.2　dg 模与 Keller 的 $\mathbf{D}(\mathcal{A})$</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-dg-3-3">3.3　Drinfeld 的 dg 商</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-dg-3-4">3.4　Toën 的导出 Morita 理论</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-dg-3-5">3.5　Koszul 对偶（dg 层面的原型）</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-dg-3-6">3.6　Tabuada 的模型结构</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-dg-4">4　主要应用与可手算的例子</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-dg-5">5　与邻近概念的关系</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-dg-6">6　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-dg-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-theory-panel-dg-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\mathcal{A}$</td><td>小 dg 范畴：$\mathrm{Hom}_{\mathcal{A}}(X,Y)$ 为链复形，合成满足 Leibniz 律</td></tr>
<tr><td>$|f|$</td><td>齐次态射 $f$ 的次数</td></tr>
<tr><td>$Z^{0}(\mathcal{A})$，$H^{0}(\mathcal{A})$</td><td>零次闭态射范畴；同伦范畴（对 $Z^{0}$ 取 $H^{0}$）</td></tr>
<tr><td>$\mathrm{Mod}\,\mathcal{A}$</td><td>右 dg 模范畴 $\mathrm{Fun}_{\mathrm{dg}}(\mathcal{A}^{\mathrm{op}},\mathrm{Ch}(k))$</td></tr>
<tr><td>$\mathbf{D}(\mathcal{A})$</td><td>dg 模的导出范畴（Keller 构造）</td></tr>
<tr><td>$\mathrm{per}(\mathcal{A})$</td><td>完美模：由 $\mathcal{A}$ 经平移、锥、直和因子生成</td></tr>
<tr><td>$\mathbf{D}_{\mathrm{fd}}(\mathcal{A})$</td><td>上同调有限模（每个 $H^{i}$ 有限维，仅有限多个非零）</td></tr>
<tr><td>pretriangulated</td><td>对平移与锥封闭的满 dg 子范畴（Bondal–Kapranov）</td></tr>
<tr><td>拟等价 (qe)</td><td>在每个 $\mathrm{Hom}$ 复形上诱导同构、且 $H^{0}$ 本质满的 dg 函子</td></tr>
<tr><td>$\mathrm{Hmo}$</td><td>dg 范畴 / 拟等价 的局部化范畴（Toën）</td></tr>
<tr><td>$A_{\infty}$</td><td>带高阶结合同伦的范畴（与 dg 在特征零下等价）</td></tr>
</tbody>
</table>
<p>约定：①基域特征零（使 $A_{\infty}$ 与 dg 的等价最好用）；②"dg 增强不唯一"与"拟等价"的区分见第 6 节。</p>

<h3 class="ar-subhead" id="ar-theory-panel-dg-1">1　直观与动机</h3>
<div class="ar-intu">
<p><b>一句话</b>：dg 范畴 = "<strong>Hom 是复形</strong>"的范畴；它保留了导出范畴被抹掉的那部分链层面（同伦相干）信息。</p>
<p><b>为什么要升级到 dg</b>：导出范畴 $\mathbf{D}(\mathscr{A})$ 只记住"拟同构之后"的世界，很多构造（函子的复合、取商、模空间、K-理论）在三角范畴层面无法相干地做——因为"锥"只在同构意义下存在，不是函子。dg 范畴让锥、同伦、复合都成为<em>链层面可算</em>的东西。</p>
<p><b>一个类比</b>：三角范畴之于 dg 范畴，就像"同调群"之于"链复形"——前者是后者的投影；很多不变量只能在链层面定义。</p>
<p><b>在表示论里的角色</b>：给 $\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 选一个 dg 增强（= dg 范畴 $\mathcal{A}$ 使 $H^{0}\mathcal{A}\simeq\mathbf{D}^{b}$），就能谈"导出等价是否可提升为 dg 等价"（Broué 猜想、Standard Derived Equivalence）、能构造丛范畴（$\mathrm{per}/\mathbf{D}_{\mathrm{fd}}$）、能定义模空间。</p>
</div>

<h3 class="ar-subhead" id="ar-theory-panel-dg-2">2　概念与定义</h3>

<h4 id="ar-theory-panel-dg-2-1">2.1　定义与基本例子</h4>
<p><strong>定义</strong>：小 <strong>dg 范畴</strong> $\mathcal{A}$ 由对象集、每个 $\mathrm{Hom}_{\mathcal{A}}(X,Y)\in\mathrm{Ch}(k)$（记为 $\mathrm{Hom}^{n}$，微分 $d$ 使 $d^{2}=0$）、以及次数为 $0$ 的链映射（合成）</p>
$$\mathrm{Hom}_{\mathcal{A}}(Y,Z)\otimes\mathrm{Hom}_{\mathcal{A}}(X,Y)\longrightarrow\mathrm{Hom}_{\mathcal{A}}(X,Z)$$
<p>组成（记 $g\circ f$ 为先 $f$ 后 $g$），满足 Leibniz 律：对次数 $|g|$ 的齐次态射 $g$，</p>
$$d(g\circ f)=(dg)\circ f+(-1)^{|g|}\,g\circ(df),$$
<p>且每个对象有严格的单位元。</p>
<p><b>读法</b>：$\mathrm{Hom}^{0}$ 中的闭态射（$df=0$）是"真的态射"；$\mathrm{Hom}^{-1}$ 中的元素给出两个零次闭态射之间的<em>同伦</em>；$d$ 的一次闭态射为零 ⟺ 零调 ⟺ 同伦于 $0$。</p>
<p><strong>标准例子</strong>：</p>
<ul class="agent-list">
<li><span class="agent-name">单对象</span>：$\mathcal{A}$ 由 dg 代数 $A$ 给出，$\mathrm{Hom}=A$（合成 = 乘法）；</li>
<li><span class="agent-name">$\mathrm{Ch}(k)$ 的满 dg 子范畴</span>（如完美复形，$\mathrm{Hom}$ 取通常的 Hom 复形）；</li>
<li><span class="agent-name">$\mathbf{D}^{b}(\mathrm{coh}\,X)$、$\mathbf{D}^{\mathrm{perf}}(X)$ 的 dg 增强</span>（取内射 / 局部自由解）；</li>
<li><span class="agent-name">Ginzburg dg 代数</span>（3-Calabi–Yau，丛理论的输入，见本页「Cluster Theory」）；</li>
<li><span class="agent-name">Fukaya 范畴</span>（$A_{\infty}$，镜像对称一侧）。</li>
</ul>

<h4 id="ar-theory-panel-dg-2-2">2.2　pretriangulated 与 $H^{0}$</h4>
<p><strong>定义</strong>：满 dg 子范畴 $\mathcal{A}\subseteq\mathrm{Ch}(k)$ 称为 <strong>pretriangulated</strong>，若它对平移 $[1]$、锥与直和因子封闭。此时 $H^{0}(\mathcal{A})$ 是三角范畴。</p>
<p><strong>要点</strong>：pretriangulated 化（取 pretriangulated envelope）是"自由地把一个 dg 范畴变成像三角范畴"的过程；Bondal–Kapranov 的原始动机正是为三角范畴提供增强（例外集合、半正交分解）。</p>

<h4 id="ar-theory-panel-dg-2-3">2.3　四层结构（一图看全局）</h4>
<figure class="ar-cd">
<svg viewBox="0 0 560 268" width="560" height="268" role="img" aria-label="dg 范畴到 Z^0、H^0、导出范畴的四层结构">
  <defs>
    <marker id="arh-dg-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.3">
    <rect x="18" y="10" width="330" height="40" rx="7"/>
    <rect x="18" y="76" width="330" height="40" rx="7"/>
    <rect x="18" y="142" width="330" height="40" rx="7"/>
    <rect x="18" y="208" width="330" height="40" rx="7"/>
  </g>
  <g stroke="currentColor" stroke-width="1.3" fill="none" marker-end="url(#arh-dg-a)">
    <line x1="183" y1="52" x2="183" y2="72"/>
    <line x1="183" y1="118" x2="183" y2="138"/>
    <line x1="183" y1="184" x2="183" y2="204"/>
  </g>
  <g fill="currentColor" font-size="12.5" text-anchor="middle">
    <text x="183" y="35">dg 范畴 𝒜：Hom 是复形</text>
    <text x="183" y="101">Z⁰𝒜：零次闭态射（普通范畴）</text>
    <text x="183" y="167">H⁰𝒜：同伦范畴（三角范畴）</text>
    <text x="183" y="233">D(𝒜)：dg 模的导出范畴</text>
  </g>
  <g fill="currentColor" font-size="11.5" text-anchor="start">
    <text x="196" y="66">取零次闭态射 Z⁰</text>
    <text x="196" y="132">模去同伦（模掉零调的）</text>
    <text x="196" y="198">Yoneda：𝒜 ↪ per(𝒜) ⊆ D(𝒜)</text>
    <text x="360" y="35">含链层面 / 同伦相干信息</text>
    <text x="360" y="101">忘掉所有非零次信息</text>
    <text x="360" y="167">三角范畴（ cones 只到同构）</text>
    <text x="360" y="233">三角 + 可算（替换 / 商 / 模空间）</text>
  </g>
</svg>
<figcaption>从 dg 范畴往下每走一层都丢掉一部分信息：$Z^{0}$ 忘掉非零次，$H^{0}$ 忘掉同伦，$\mathbf{D}(\mathcal{A})$ 则重新把"模"加回来以便计算。</figcaption>
</figure>

<h3 class="ar-subhead" id="ar-theory-panel-dg-3">3　核心工具、定理与证明逻辑</h3>

<h4 id="ar-theory-panel-dg-3-1">3.1　$H^{0}$ 为何是三角范畴（证明骨架）</h4>
<div class="ar-proof">
<div class="ar-proof-hd"><span class="ar-proof-tag">证明思路</span>把三角公理翻译成链层面的恒等式</div>
<div class="ar-pf">
<div class="ar-pf-step"><span class="ar-pf-n">1</span><b>先补结构</b>：任意 dg 范畴可自由地 pretriangulate（把平移、锥作为形式对象加入），得到 pretriangulated $\mathcal{A}^{\mathrm{pretr}}$。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">2</span><b>平移与锥</b>：$H^{0}$ 上 $[1]$ 由复形平移给出；$f:X\to Y$ 的锥由"二项矩阵"微分 $d_{\mathrm{Cone}(f)}=\begin{pmatrix}d_{Y}&f\\0&d_{X[1]}\end{pmatrix}$ 显式给出。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">3</span><b>逐条验公理</b>：TR1–TR4（存在、旋转、态射扩充、八面体）分别对应 $\mathrm{Ch}(k)$ 中具体的链映射与链同伦——"交换"在 $H^{0}$ 里成立，因为在链层面只差一个同伦。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">4</span><b>结论</b>：$H^{0}(\mathcal{A}^{\mathrm{pretr}})$ 是三角范畴；$\mathcal{A}$ pretriangulated 时 $H^{0}(\mathcal{A})$ 已是三角范畴。</div>
</div>
<p class="ar-pf-key"><b>一句话关键</b>：三角范畴的公理"之所以成立"，是因为它们都是链复形层面的<em>恒等式或同伦</em>；dg 范畴就是把这些同伦显式记下来的账本。</p>
</div>

<h4 id="ar-theory-panel-dg-3-2">3.2　dg 模与 Keller 的 $\mathbf{D}(\mathcal{A})$</h4>
<p><strong>定理（Keller）</strong>：对小 dg 范畴 $\mathcal{A}$，右 dg 模范畴 $\mathrm{Mod}\,\mathcal{A}$ 带典范的 dg 结构，其导出范畴 $\mathbf{D}(\mathcal{A})$ 是三角范畴；Yoneda 嵌入 $H^{0}\mathcal{A}\to\mathbf{D}(\mathcal{A})$ 为全忠实。<strong>特例</strong>：$\mathcal{A}$ 由 dg 代数 $A$ 给出时，$\mathbf{D}(\mathcal{A})$ 即 $\mathbf{D}(A)$，$\mathrm{per}(A)$ 为紧对象、$\mathbf{D}_{\mathrm{fd}}(A)$ 为"有限维部分"。</p>
<p><strong>意义</strong>：这给出"从 dg 范畴构造三角范畴"的<em>典范</em>途径，且对 $\mathcal{A}$ 的拟等价函子化（拟等价诱导三角等价）——这是单看三角范畴时得不到的可计算性。</p>

<h4 id="ar-theory-panel-dg-3-3">3.3　Drinfeld 的 dg 商</h4>
<p><strong>定理（Drinfeld）</strong>：对 dg 范畴的满 dg 子范畴 $\mathcal{B}\subseteq\mathcal{A}$，存在 <strong>dg 商</strong> $\mathcal{A}/\mathcal{B}$（由 dg 函子的泛性质刻画），且 $H^{0}(\mathcal{A}/\mathcal{B})\cong H^{0}(\mathcal{A})/H^{0}(\mathcal{B})$（即 Verdier 商）。</p>
<p><b>证明逻辑</b>：① 形式地加入一个"把 $\mathcal{B}$ 中对象变成可缩"的闭态射（或等价地，用 Drinfeld 的"锥的迭代"构造）；② 验证所得 dg 范畴满足泛性质；③ 取 $H^{0}$ 并用 3.1 的三角结构比对，识别出它就是 Verdier 商。</p>
<p><strong>意义</strong>：dg 商使"取商"与张量积、函子范畴相容——这是奇点范畴、丛范畴（$\mathrm{per}(\Gamma)/\mathbf{D}_{\mathrm{fd}}$）等构造的技术基础。</p>

<h4 id="ar-theory-panel-dg-3-4">3.4　Toën 的导出 Morita 理论</h4>
<p><strong>定理（Toën）</strong>：局部化范畴 $\mathrm{Hmo}$（dg 范畴 / 拟等价）带对称 monoidal 结构 $\otimes$ 与内 Hom $\mathbf{R}\mathrm{Hom}(-,-)$，且 $\mathbf{R}\mathrm{Hom}(\mathcal{A},\mathcal{B})$ 的 $H^{0}$ 描述"可提升为 dg 函子"的那部分三角函子 $\mathbf{D}(\mathcal{A})\to\mathbf{D}(\mathcal{B})$（在适当假设下）。</p>
<p><strong>推论（Toën–Vaquié）</strong>：可由此构造"$\mathcal{A}$ 中对象的模栈"——统一了箭图表示、完美复形等各类模空间的构造。</p>

<h4 id="ar-theory-panel-dg-3-5">3.5　Koszul 对偶（dg 层面的原型）</h4>
<p>对二次代数 $A=T(V)/(R)$，其 <strong>Koszul 对偶</strong>为 $A^{!}=T(V^{*})/(R^{\perp})$；$A$ 为 Koszul 代数时 $A^{!}\cong\mathrm{Ext}^{\bullet}_{A}(k,k)$，且 $(A^{!})^{!}\cong A$。在 dg / $A_{\infty}$ 层面，这推广为</p>
$$A^{!}\simeq\mathbf{R}\mathrm{Hom}_{A}(k,k),$$
<p>即"用自扩张代数代替原代数"——这是 dg 范畴最古老也最直观的动机之一。</p>
<figure class="ar-cd">
<svg viewBox="0 0 460 130" width="460" height="130" role="img" aria-label="Koszul 对偶：A 与 A^! 互为对偶">
  <defs>
    <marker id="arh-dg-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.3">
    <rect x="20" y="30" width="150" height="46" rx="8"/>
    <rect x="290" y="30" width="150" height="46" rx="8"/>
  </g>
  <g stroke="currentColor" stroke-width="1.3" fill="none" marker-end="url(#arh-dg-b)">
    <line x1="176" y1="44" x2="284" y2="44"/>
    <line x1="284" y1="70" x2="176" y2="70"/>
  </g>
  <g fill="currentColor" font-size="13" text-anchor="middle">
    <text x="95" y="59">A（二次代数）</text>
    <text x="365" y="59">A^! = Ext^•_A(k,k)</text>
  </g>
  <g fill="currentColor" font-size="11.5" text-anchor="middle">
    <text x="230" y="36">Koszul 对偶</text>
    <text x="230" y="88">(A^!)^! ≅ A</text>
  </g>
  <text x="230" y="116" font-size="11.5" fill="currentColor" text-anchor="middle">典型例子：对称代数 S(V) ⟷ 外代数 Λ(V*)</text>
</svg>
<figcaption>Koszul 对偶：$A$ 与"其自扩张代数"互为对偶；对称代数与外代数是最常见的一对。</figcaption>
</figure>

<h4 id="ar-theory-panel-dg-3-6">3.6　Tabuada 的模型结构与加性不变量</h4>
<p>Tabuada 在小 dg 范畴上构造 Quillen 模型结构（弱等价 = 拟等价），给出 dg 范畴的同伦论；并证明加性不变量（$K_{0}$、$\mathrm{HH}$、循环同调）的泛对象由<strong>非交换动机</strong> $\mathcal{M}_{\mathrm{add}}$ 承载（见本页「Infinity Category」）。</p>

<h3 class="ar-subhead" id="ar-theory-panel-dg-4">4　主要应用与可手算的例子</h3>
<div class="ar-ex">
<div class="ar-ex-hd">例 1：集中在零次的代数（最小例子）</div>
<p>把普通代数 $\Lambda$ 看成"只有 $\mathrm{Hom}^{0}=\Lambda$"的 dg 代数（单对象 dg 范畴）。此时 dg 模 = $\Lambda$-模的<em>复形</em>，$\mathbf{D}(\Lambda)$ 就是通常的导出范畴，$H^{0}$ 的态射 $=\mathrm{Hom}_{\mathbf{D}}$，而 $\mathrm{Hom}$ 复形的 $H^{n}=\mathrm{Ext}^{n}$——这正是"导出范畴 3.2"的内容在 dg 语言下的重述，也是入门时最该先算的例子。</p>
</div>
<div class="ar-ex">
<div class="ar-ex-hd">例 2：Koszul 对偶的两个极端</div>
<p>$A=S(V)$（对称代数，交换、无限整体维数）的对偶是 $A^{!}=\Lambda(V^{*})$（外代数，有限维）。这一对在表示论与同调代数中反复出现：外代数上的 $\mathrm{Ext}$ 代数回到多项式环，反之亦然；Beilinson 的 $\mathbb{P}^{n}$ 半正交分解就是它在几何上的显现。</p>
</div>
<ul class="agent-list">
<li><span class="agent-name">三角范畴的增强</span>：$\mathbf{D}^{b}(\mathrm{coh}\,X)$、$\mathbf{D}_{\mathrm{qc}}(X)$、$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 的标准 dg 增强；增强唯一性见本页「DG enhancement」。</li>
<li><span class="agent-name">丛理论</span>：Ginzburg dg 代数 $\Gamma(Q,W)$ 的 $\mathrm{per}/\mathbf{D}_{\mathrm{fd}}$ 给出广义丛范畴。</li>
<li><span class="agent-name">反射性 dg 范畴</span>（Kuznetsov–Shinder）：$\mathbf{D}_{\mathrm{perf}}$ 与 $\mathbf{D}_{\mathrm{fd}}$ 的对偶。</li>
<li><span class="agent-name">模空间与形变</span>：Toën–Vaquié 的模栈；$\mathrm{HH}^{\bullet}$ 控制形变。</li>
<li><span class="agent-name">与本站猜想的接口</span>：Broué 猜想的"块代数导出等价"本质上要在 dg 层面陈述（dg 增强的等价）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-dg-5">5　与邻近概念的关系</h3>
<ul class="agent-list">
<li><span class="agent-name">与 $A_{\infty}$</span>：特征零下等价（最小模型定理）；$A_{\infty}$ 适合"最小化"，dg 适合"构造"。</li>
<li><span class="agent-name">与稳定 $\infty$-范畴</span>：$k$-线性稳定 $\infty$-范畴的同伦论等价于 dg 范畴的同伦论（Cohn、Haugseng）；dg nerve 给出通道。</li>
<li><span class="agent-name">与模型范畴</span>：Tabuada 模型结构给出 dg 范畴的同伦论；dg 范畴是"链复形富化的范畴"的模型（见「Model Category」）。</li>
<li><span class="agent-name">与导出范畴</span>：$\mathbf{D}(\mathcal{A})$ 的构造即"从增强得到三角范畴"；反向（从三角范畴找增强）是增强唯一性问题。</li>
<li><span class="agent-name">与 tilting</span>：dg 版本的 tilting（Keller）给出 dg 范畴的 Morita 等价，是导出 Morita 理论的 dg 形式。</li>
<li><span class="agent-name">与本站面板</span>：本站「DG enhancement」「Standard Derived Equivalence」「Infinity Category」「Cluster Theory」四个面板都以 dg 范畴为工作层。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-dg-6">6　常见混淆与易错点</h3>
<ul class="agent-list">
<li><span class="agent-name">$\mathcal{A}$ ≠ $H^{0}(\mathcal{A})$</span>：dg 范畴携带高阶信息；$H^{0}$ 是投影。"两个 dg 范畴拟等价"与"$H^{0}$ 三角等价"完全不同（后者弱得多）。</li>
<li><span class="agent-name">拟等价 ≠ Morita 等价</span>：拟等价（在每个 $\mathrm{Hom}$ 复形上诱导同构、$H^{0}$ 本质满）严格强于 Morita 等价（$\mathrm{per}$ 等价）。$\mathcal{A}\to\mathcal{A}^{\mathrm{pretr}}$ 是 Morita 等价而非拟等价。</li>
<li><span class="agent-name">pretriangulated 化"不一定还小"</span>：自由加入平移与锥后再做幂等完备化，可能越出小范畴的范围；引用时要注意 universe 的约定。</li>
<li><span class="agent-name">dg 商 ≠ Verdier 商</span>：dg 商在 dg 层面是泛的，取 $H^{0}$ 才给出 Verdier 商；把二者等同会丢掉"商函子的提升"这一信息。</li>
<li><span class="agent-name">$\mathrm{per}$ 与 $\mathbf{D}_{\mathrm{fd}}$ 的区别</span>：$\mathrm{per}(\mathcal{A})$ 由 $\mathcal{A}$ 生成（紧对象），$\mathbf{D}_{\mathrm{fd}}(\mathcal{A})$ 由"上同调有限"刻画；对有限维代数 $A$，$\mathrm{per}(A)=\mathbf{K}^{b}(\mathrm{proj}\,A)$ 而 $\mathbf{D}_{\mathrm{fd}}(A)=\mathbf{D}^{b}(\mathrm{mod}\,A)$。</li>
<li><span class="agent-name">符号约定</span>：Leibniz 律中的 $(−1)^{|f|}$ 与"合成的次数约定"（上同调 / 同调编号）随文献而异；跨文献引用公式前先对齐约定。</li>
<li><span class="agent-name">特征零假设</span>：$A_{\infty}$ 与 dg 的等价在一般基环上也有相应版本（Cohn–Haugseng），但"最小模型"与传递定理的常见表述依赖特征零。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-dg-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> A. I. Bondal, M. M. Kapranov, <i>Enhanced triangulated categories</i>, Math. USSR-Sb. <b>70</b> (1991), 93–107.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> V. Drinfeld, <i>DG quotients of DG categories</i>, J. Algebra <b>272</b> (2004), 643–691.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> B. Keller, <i>On differential graded categories</i>, ICM Vol. II, 151–190, Eur. Math. Soc., Zürich, 2006.（最佳入门综述）</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> B. Toën, <i>The homotopy theory of dg-categories and derived Morita theory</i>, Invent. Math. <b>167</b> (2007), 615–667.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> B. Toën, M. Vaquié, <i>Moduli of objects in dg-categories</i>, Ann. Sci. École Norm. Sup. <b>40</b> (2007), 387–444.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> G. Tabuada, <i>Invariants additifs de DG-catégories</i>, Int. Math. Res. Not. <b>2005</b>, 3309–3339.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> L. Cohn, <i>Differential graded categories are $k$-linear stable infinity categories</i>, arXiv:1308.2587.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> A. Polishchuk, L. Positselski, <i>Quadratic Algebras</i>, Univ. Lecture Ser. <b>37</b>, AMS, 2005.（Koszul 对偶）</p>
</div>
</div>
