---
title: "dg"
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
    <a class="ar-toc-l1" href="#ar-theory-panel-dg-1">1　概念与定义</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-dg-2">2　核心工具与定理</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-dg-3">3　主要应用与实例</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-dg-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-dg-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-dg-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-theory-panel-dg-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\mathcal{A}$</td><td>小 dg 范畴：$\mathrm{Hom}_{\mathcal{A}}(X,Y)$ 为链复形，合成满足 Leibniz 律</td></tr>
<tr><td>$Z^{0}(\mathcal{A})$，$H^{0}(\mathcal{A})$</td><td>零次闭态射范畴；同伦范畴（对 $Z^{0}$ 取 $H^{0}$）</td></tr>
<tr><td>$\mathrm{Mod}\,\mathcal{A}$</td><td>右 dg 模范畴 $\mathrm{Fun}_{\mathrm{dg}}(\mathcal{A}^{\mathrm{op}},\mathrm{Ch}(k))$</td></tr>
<tr><td>$\mathbf{D}(\mathcal{A})$</td><td>dg 模的导出范畴（Keller 构造）</td></tr>
<tr><td>$\mathrm{per}(\mathcal{A})$</td><td>完美模：由 $\mathcal{A}$ 经平移、锥、直和因子生成</td></tr>
<tr><td>$\mathbf{D}_{\mathrm{fd}}(\mathcal{A})$</td><td>上同调有限模（每个 $H^{i}$ 有限维，仅有限多个非零）</td></tr>
<tr><td>pretriangulated</td><td>对平移与锥封闭的满 dg 子范畴（Bondal–Kapranov）</td></tr>
<tr><td>拟等价 (qe)</td><td>$H^{0}$ 在每个对象的闭态射代数上诱导同构的 dg 函子</td></tr>
<tr><td>$\mathrm{Hmo}$</td><td>dg 范畴 / 拟等价 的局部化范畴（Toën）</td></tr>
<tr><td>$A_{\infty}$</td><td>带高阶结合同伦的范畴（与 dg 在特征零下等价）</td></tr>
</tbody>
</table>
<p>约定：①基域特征零（使 $A_{\infty}$ 与 dg 等价）；②“dg 增强不唯一”与“拟等价”的区分见第 5 节。</p>

<h3 class="ar-subhead" id="ar-theory-panel-dg-1">1　概念与定义</h3>

<h4>1.1　定义与基本例子</h4>
<p><strong>定义</strong>：小 dg 范畴 $\mathcal{A}$ 由对象集、每个 $\mathrm{Hom}_{\mathcal{A}}(X,Y)\in\mathrm{Ch}(k)$、合成 $\mathrm{Hom}(X,Y)\otimes\mathrm{Hom}(Y,Z)\to\mathrm{Hom}(X,Z)$（次数 0、满足 Leibniz 律）组成。</p>
<p><strong>标准例子</strong>：</p>
<ul class="agent-list">
<li><span class="agent-name">单对象</span>：$\mathcal{A}$ 由 dg 代数 $A$ 给出，$\mathrm{Hom}=A$；</li>
<li><span class="agent-name">$\mathrm{Ch}(k)$ 的满 dg 子范畴</span>（如完美复形）；</li>
<li><span class="agent-name">$\mathbf{D}^{b}(\mathrm{coh}\,X)$、$\mathbf{D}^{\mathrm{perf}}(X)$ 的 dg 增强</span>（取内射/局部自由解）；</li>
<li><span class="agent-name">Ginzburg dg 代数</span>（3-Calabi–Yau，丛理论的输入，见本页“Cluster Theory”1.4）；</li>
<li><span class="agent-name">Fukaya 范畴</span>（$A_{\infty}$，镜像对称一侧）。</li>
</ul>

<h4>1.2　pretriangulated 与 $H^{0}$</h4>
<p><strong>定义</strong>：满 dg 子范畴 $\mathcal{A}\subseteq\mathrm{Ch}(k)$ 称为 <strong>pretriangulated</strong>，若它对平移 $[1]$、锥与直和因子封闭（等价地，Yoneda 嵌入的像在 $\mathrm{per}$ 内封闭于有限（余）极限）。此时 $H^{0}(\mathcal{A})$ 是三角范畴。</p>
<p><strong>要点</strong>：pretriangulated 化（取其“pretriangulated envelope”）是自由地把一个 dg 范畴变成“像三角范畴”的 dg 范畴的过程；Bondal–Kapranov 的原始动机正是为三角范畴提供增强（例外集合、半正交分解）。</p>

<h3 class="ar-subhead" id="ar-theory-panel-dg-2">2　核心工具与定理</h3>

<h4>2.1　dg 模与 Keller 的 $\mathbf{D}(\mathcal{A})$</h4>
<p><strong>定理（Keller）</strong>：对小 dg 范畴 $\mathcal{A}$，右 dg 模范畴 $\mathrm{Mod}\,\mathcal{A}$ 带典范的 dg 结构，其导出范畴 $\mathbf{D}(\mathcal{A})$ 是三角范畴；Yoneda 嵌入 $H^{0}\mathcal{A}\to\mathbf{D}(\mathcal{A})$ 为全忠实。<strong>特例</strong>：$\mathcal{A}$ 由 dg 代数 $A$ 给出时，$\mathbf{D}(\mathcal{A})$ 即 $\mathbf{D}(A)$（右 $A$-模的导出范畴），$\mathrm{per}(A)$ 为紧对象、$\mathbf{D}_{\mathrm{fd}}(A)$ 为“有限维部分”。</p>
<p><strong>意义</strong>：这给出了“从 dg 范畴构造三角范畴”的<em>典范</em>途径，且对 $\mathcal{A}$ 的拟等价函子化（拟等价诱导三角等价）——这是模型范畴或 $\infty$-范畴无法直接给出的“可计算性”。</p>

<h4>2.2　Drinfeld 的 dg 商</h4>
<p><strong>定理（Drinfeld）</strong>：对 dg 范畴的满 dg 子范畴 $\mathcal{B}\subseteq\mathcal{A}$，存在 <strong>dg 商</strong> $\mathcal{A}/\mathcal{B}$（universal，通过 dg 函子刻画），且 $H^{0}(\mathcal{A}/\mathcal{B})\cong H^{0}(\mathcal{A})/H^{0}(\mathcal{B})$（Verdier 商）。</p>
<p><strong>意义</strong>：Verdier 商在 dg 层面的提升，使“取商”可与张量积、函子范畴相容——这是奇点范畴、丛范畴（$\mathrm{per}(\Gamma)/\mathbf{D}_{\mathrm{fd}}$）等构造的技术基础。</p>

<h4>2.3　Toën 的导出 Morita 理论</h4>
<p><strong>定理（Toën）</strong>：局部化范畴 $\mathrm{Hmo}$（dg 范畴 / 拟等价）带对称单oidal结构 $\otimes$ 与内 Hom $\mathbf{R}\mathrm{Hom}(-,-)$，且 $\mathbf{R}\mathrm{Hom}(\mathcal{A},\mathcal{B})$ 的 $H^{0}$ 是“所有三角函子 $\mathbf{D}(\mathcal{A})\to\mathbf{D}(\mathcal{B})$ 可提升为 dg 函子”的那个范畴（在适当假设下）。</p>
<p><strong>推论（Toën–Vaquié）</strong>：可由此构造“$\mathcal{A}$ 中对象的模栈”——统一了表示论中各种模空间（如箭图表示、完美复形的模空间）的构造。</p>

<h4>2.4　Tabuada 的模型结构与加性不变量</h4>
<p>Tabuada 在小 dg 范畴上构造 Quillen 模型结构（弱等价 = 拟等价），给出 dg 范畴的同伦论；并证明加性不变量（$K_{0}$、$\mathrm{HH}$、循环同调）的泛对象由<strong>非交换动机</strong> $\mathcal{M}_{\mathrm{add}}$ 承载（见本页“Infinity Category”2.4）。</p>

<h3 class="ar-subhead" id="ar-theory-panel-dg-3">3　主要应用与实例</h3>
<ul class="agent-list">
<li><span class="agent-name">三角范畴的增强</span>：$\mathbf{D}^{b}(\mathrm{coh}\,X)$、$\mathbf{D}_{\mathrm{qc}}(X)$、$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 的标准 dg 增强；增强唯一性见本页“DG enhancement”热点面板。</li>
<li><span class="agent-name">丛理论</span>：Ginzburg dg 代数 $\Gamma(Q,W)$ 的 $\mathrm{per}/\mathbf{D}_{\mathrm{fd}}$ 给出广义丛范畴。</li>
<li><span class="agent-name">反射性 dg 范畴</span>（Kuznetsov–Shinder）：$\mathbf{D}_{\mathrm{perf}}$ 与 $\mathbf{D}_{\mathrm{fd}}$ 的对偶——见本页“Infinity Category”3.2。</li>
<li><span class="agent-name">模空间与形变</span>：Toën–Vaquié 的模栈；$\mathrm{HH}^{\bullet}$ 控制形变。</li>
<li><span class="agent-name">与本站猜想的接口</span>：Broué 猜想的“块代数导出等价”本质上要 dg 层面陈述（dg 增强的等价）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-dg-4">4　与邻近概念的关系</h3>
<ul class="agent-list">
<li><span class="agent-name">与 $A_{\infty}$</span>：特征零下等价（最小模型定理）；$A_{\infty}$ 适合“最小化”，dg 适合“构造”。</li>
<li><span class="agent-name">与稳定 $\infty$-范畴</span>：$k$-线性稳定 $\infty$-范畴的同伦论等价于 dg 范畴的同伦论（Cohn、Haugseng）；dg nerve 给出通道（本页“Infinity Category”1.4）。</li>
<li><span class="agent-name">与模型范畴</span>：Tabuada 模型结构给出 dg 范畴的同伦论； dg 范畴是“链复形富化的范畴”的模型。</li>
<li><span class="agent-name">与导出范畴</span>：$\mathbf{D}(\mathcal{A})$ 的构造即“从增强得到三角范畴”；反向（从三角范畴找增强）是增强唯一性问题。</li>
<li><span class="agent-name">与本站面板</span>：本站“DG enhancement”“Standard Derived Equivalence”“Infinity Category”“Cluster Theory”四个面板都以 dg 范畴为工作层。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-dg-5">5　常见混淆与易错点</h3>
<ul class="agent-list">
<li><span class="agent-name">$\mathcal{A}$ ≠ $H^{0}(\mathcal{A})$</span>：dg 范畴携带高阶信息；$H^{0}$ 是投影。说“两个 dg 范畴同构”与“$H^{0}$ 三角等价”完全不同。</li>
<li><span class="agent-name">拟等价 ≠ Morita 等价</span>：拟等价（$H^{0}$ 在闭态射上诱导同构）严格强于 Morita 等价（$\mathrm{per}$ 等价）。$\mathcal{A}\to$ 其 pretriangulated envelope 是 Morita 等价而非拟等价。</li>
<li><span class="agent-name">pretriangulated 是性质不是构造</span>：任意 dg 范畴都可 pretriangulate（自由加入平移与锥），但结果一般<em>不再小</em>（需取幂等完备化）。</li>
<li><span class="agent-name">dg 商 ≠ Verdier 商</span>：dg 商在 dg 层面是泛的，$H^{0}$ 才给出 Verdier 商；把二者等同会丢失“商函子的提升”这一信息。</li>
<li><span class="agent-name">$\mathrm{per}$ 与 $\mathbf{D}_{\mathrm{fd}}$ 的区别</span>：$\mathrm{per}(\mathcal{A})$ 由 $\mathcal{A}$ 生成（紧对象），$\mathbf{D}_{\mathrm{fd}}(\mathcal{A})$ 由“上同调有限”刻画；对有限维代数 $A$，$\mathrm{per}(A)=\mathbf{K}^{b}(\mathrm{proj}\,A)$ 而 $\mathbf{D}_{\mathrm{fd}}(A)=\mathbf{D}^{b}(\mathrm{mod}\,A)$。</li>
<li><span class="agent-name">特征零假设</span>：$A_{\infty}$ 与 dg 的等价在任意基环上仍成立（Cohn–Haugseng），但“最小模型”与传递定理的常见表述依赖特征零；引用时须核对。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-dg-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> G. M. Kelly, <i>Chain maps inducing zero homology maps</i>, Proc. Cambridge Philos. Soc. <b>61</b> (1965), 847–854.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> A. I. Bondal, M. M. Kapranov, <i>Enhanced triangulated categories</i>, Math. USSR-Sb. <b>70</b> (1991), 93–107.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> V. Drinfeld, <i>DG quotients of DG categories</i>, J. Algebra <b>272</b> (2004), 643–691.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> B. Keller, <i>On differential graded categories</i>, ICM Vol. II, 151–190, Eur. Math. Soc., Zürich, 2006.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> B. Toën, <i>The homotopy theory of dg-categories and derived Morita theory</i>, Invent. Math. <b>167</b> (2007), 615–667.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> B. Toën, M. Vaquié, <i>Moduli of objects in dg-categories</i>, Ann. Sci. École Norm. Sup. <b>40</b> (2007), 387–444.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> G. Tabuada, <i>Invariants additifs de DG-catégories</i>, Int. Math. Res. Not. <b>2005</b>, 3309–3339.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> L. Cohn, <i>Differential Graded Categories are k-linear Stable Infinity Categories</i>, arXiv:1308.2587.</p>
</div>
</div>
