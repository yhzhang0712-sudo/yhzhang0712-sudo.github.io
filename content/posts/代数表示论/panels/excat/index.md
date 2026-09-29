---
title: "excat"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-1">1　概念与定义</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-2">2　核心工具与定理</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-3">3　主要应用与实例</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-theory-panel-excat-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\mathrm{Ch}(\mathscr{A})$</td><td>$\mathscr{A}$ 中链复形范畴</td></tr>
<tr><td>$\mathbf{K}(\mathscr{A})$</td><td>同伦范畴（态射 = 链同伦类）</td></tr>
<tr><td>$\mathbf{D}(\mathscr{A})$</td><td>导出范畴 $=\mathbf{K}(\mathscr{A})[\text{拟同构}^{-1}]$（Verdier 商）</td></tr>
<tr><td>$\mathbf{D}^{b}$，$\mathbf{D}^{+}$，$\mathbf{D}^{-}$</td><td>有界 / 上有界 / 下有界导出范畴</td></tr>
<tr><td>$\mathbf{D}^{\mathrm{perf}}(\Lambda)$</td><td>完美复形（= $\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$，当 $\Lambda$ 有限维）</td></tr>
<tr><td>$H^{i}(X)$</td><td>$X$ 的第 $i$ 次上同调对象</td></tr>
<tr><td>$\mathbb{R}\mathrm{Hom}$</td><td>右导出 Hom（在 $\mathbf{D}(\mathscr{A})$ 中的内 Hom）</td></tr>
<tr><td>t-结构 $(\mathscr{D}^{\le0},\mathscr{D}^{\ge0})$</td><td>Beilinson–Bernstein–Deligne 意义</td></tr>
<tr><td>$\mathscr{D}^{\heartsuit}$</td><td>t-结构的心（Abel 范畴）</td></tr>
</tbody>
</table>
<p>约定：①$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 默认指右模的有界导出范畴；②“拟同构”指所有上同调对象的同构；③本面板用 $\mathbf{D}$ 的粗体区分于“导出函子 $D$”（$D=\mathrm{Hom}_{k}(-,k)$）。</p>

<h3 class="ar-subhead" id="ar-theory-panel-excat-1">1　概念与定义</h3>

<h4>1.1　构造：从链复形到导出范畴</h4>
<p><strong>三步构造</strong>：①$\mathrm{Ch}(\mathscr{A})$（对象 = 链复形，态射 = 链映射）；②链同伦等价的复形视为同构，得同伦范畴 $\mathbf{K}(\mathscr{A})$（这已是三角范畴）；③在 $\mathbf{K}(\mathscr{A})$ 中把拟同构取逆，得<strong>导出范畴</strong> $\mathbf{D}(\mathscr{A})$——形式上是 Verdier 商 $\mathbf{K}(\mathscr{A})/\mathbf{K}_{\mathrm{acyc}}(\mathscr{A})$。</p>
<p><strong>关键点</strong>：步骤 ③ 是<em>局部化</em>而非“取子范畴”。因此 $\mathbf{D}(\mathscr{A})$ 的对象与 $\mathrm{Ch}(\mathscr{A})$ 相同（在非严格意义下），但态射是“roof”（间隔一个拟同构的链映射对）——这正是导出范畴态射难以直接计算的原因。实践中的处理办法是取内射/投射解（K-内射、K-投射复形，Spaltenstein）或用 dg/$\infty$-增强（见本页“DG 范畴”面板）。</p>

<h4>1.2　三角结构与 t-结构</h4>
<p>$\mathbf{D}(\mathscr{A})$ 的平移为 $[1]$（右移一格），区分三角来自复形的<em>区分短正合列</em> $0\to X\to Y\to Z\to0$ 给出的 $X\to Y\to Z\to X[1]$。</p>
<p><strong>标准 t-结构</strong>：$(\mathbf{D}^{\le0},\mathbf{D}^{\ge0})$，其心为 $\mathscr{A}$，且上同调函子 $H^{i}$ 由截断给出：$H^{i}(X)=\tau^{\le i}\tau^{\ge i}X$ 的心。t-结构不唯一——这一点是“导出范畴比其 Abel 心更丰富”的形式化表述。</p>

<h3 class="ar-subhead" id="ar-theory-panel-excat-2">2　核心工具与定理</h3>

<h4>2.1　有限维代数的导出范畴（Happel）</h4>
<p><strong>定理（Happel）</strong>：<strong>设</strong> $\Lambda$ 有限维代数。<strong>则</strong>：</p>
<ol>
  <li>$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 的态射空间有限维、Krull–Schmidt；</li>
  <li>典范函子 $\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)\to\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 为满嵌入，且其像为紧对象；</li>
  <li>$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 自带几乎分裂结构，其 AR 箭图是导出等价的不变量。</li>
</ol>
<p><strong>特例</strong>：$\mathrm{gl.dim}\,\Lambda&lt;\infty\iff \mathbf{D}^{b}(\mathrm{mod}\,\Lambda)=\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$（每个复形同构于其投射解）。</p>

<h4>2.2　导出函子与 $\mathbb{R}\mathrm{Hom}$</h4>
<p>$\mathrm{Hom}$ 与 $\otimes$ 都需要<em>导出</em>：$\mathbb{R}\mathrm{Hom}_{\Lambda}(M,N)$ 用 $N$ 的 K-内射解（或 $M$ 的 K-投射解）计算，其 $H^{0}$ 为普通 $\mathrm{Ext}^{0}=\mathrm{Hom}$、$H^{i}$ 为 $\mathrm{Ext}^{i}$。于是经典同调代数（Ext、Tor、导出函子）统一为导出范畴内的态射计算。</p>
<p><strong>双线性形式（表示论的核心工具）</strong>：对有限维代数，$\mathrm{Hom}_{\mathbf{D}}(M,N[i])=\mathrm{Ext}^{i}_{\Lambda}(M,N)$，且由 $D=\mathrm{Hom}_{k}(-,k)$ 得</p>
$$D\,\mathrm{Hom}_{\mathbf{D}}(M,N[i])\ \cong\ \mathrm{Hom}_{\mathbf{D}}(N,M[i])$$
<p>（$D^{b}(\mathrm{mod}\,\Lambda)$ 与其对偶范畴的对偶性）。这是 Auslander–Reiten 公式在导出层面的根源。</p>

<h4>2.3　Verdier 商与奇点范畴</h4>
<p><strong>定义（Orlov）</strong>：奇点范畴为</p>
$$\mathbf{D}_{\mathrm{sg}}(\Lambda):=\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)\ /\ \mathbf{K}^{b}(\mathrm{proj}\,\Lambda).$$
<p><strong>定理</strong>：$\mathbf{D}_{\mathrm{sg}}(\Lambda)=0\iff\Lambda$ 正则（有限全局维数）。更一般地，$\mathbf{D}_{\mathrm{sg}}$ 度量“非正则性”，是导出不变量（对诺特概形亦然，见本页“Approximable”面板 2.10）。奇点范畴同时是 Buchweitz 与 Orlov 的独立发现（后者用“D-brane of type B”的语言），与稳定范畴 $\underline{\mathrm{CM}}(\Lambda)$ 相通（Gorenstein 情形）。</p>

<h3 class="ar-subhead" id="ar-theory-panel-excat-3">3　主要应用与实例</h3>
<ul class="agent-list">
<li><span class="agent-name">导出等价</span>：tilting 复形 / Rickard 定理（见本页“Tilting 理论”2.1）；Broué 交换亏群猜想的框架。</li>
<li><span class="agent-name">AR 理论的推广</span>：$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 的 AR 箭图 $\mathbb{Z}\Delta/G$ 型不变量（Happel）。</li>
<li><span class="agent-name">半正交分解</span>：例外集合、导出表示论（代数簇上的 $\mathbf{D}^{b}(\mathrm{coh})$）。</li>
<li><span class="agent-name">与本站猜想的接口</span>：有限维数猜想（$\mathrm{findim}$ 在导出等价下的行为）、Gorenstein 对称猜想（奇点范畴与稳定范畴的对称性）、无环猜想（$\mathbf{D}^{b}$ 中有无“双向无限”对象）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-excat-4">4　与邻近概念的关系</h3>
<ul class="agent-list">
<li><span class="agent-name">与 DG 范畴</span>：$\mathbf{D}(\mathscr{A})$ 一般有多个 dg 增强；增强唯一性是定理（Lunts–Orlov），见本页“DG 范畴”“DG enhancement”面板。</li>
<li><span class="agent-name">与 $\infty$-范畴</span>：$k$-线性稳定 $\infty$-范畴的同伦范畴即线性三角范畴（Cohn），导出范畴是可读的投影。</li>
<li><span class="agent-name">与可逼近性</span>：$\mathbf{D}(R)$ 可逼近（$G=R$、标准 t-结构），其内在子范畴（$\mathbf{D}^{-},\mathbf{D}^{b},\mathbf{K}^{b}(\mathrm{proj})$ 等）由 preferred t-结构确定——见本页“Approximable”3.1 的标准词典。</li>
<li><span class="agent-name">与张量三角几何</span>：$\mathbf{D}^{\mathrm{perf}}(R)$、$\mathbf{D}^{\mathrm{perf}}(X)$ 是 tt-几何的主要输入（本页“张量三角几何”面板）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-excat-5">5　常见混淆与易错点</h3>
<ul class="agent-list">
<li><span class="agent-name">$\mathbf{K}(\mathscr{A})$ ≠ $\mathbf{D}(\mathscr{A})$</span>：前者态射是链同伦类，后者还要把拟同构取逆；对 Abel 范畴 $\mathscr{A}$ 二者一般不同。</li>
<li><span class="agent-name">$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ ≠ $\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$</span>：二者相等<em>当且仅当</em> $\mathrm{gl.dim}\,\Lambda&lt;\infty$。对一般代数（如自入射代数），投射维数无穷的模不能被投射解代替。</li>
<li><span class="agent-name">t-结构不唯一</span>：$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 上可有多种 t-结构（如经 tilting 得到的“ twisted”t-结构）；心随之变化。说“导出范畴的心”必须指明是哪个 t-结构。</li>
<li><span class="agent-name">态射不是集合</span>：$\mathrm{Hom}_{\mathbf{D}}(M,N)$ 应理解为 $\mathbb{R}\mathrm{Hom}$ 的 $H^{0}$；更高次的 $H^{i}$ 是 $\mathrm{Ext}^{i}$。只取 $H^{0}$ 会丢失同调信息。</li>
<li><span class="agent-name">Verdier 商不典范</span>：商函子只是三角函子，其“局部化”由泛性质刻画；把商当作“取子范畴”会导致错误。</li>
<li><span class="agent-name">$\mathbf{D}^{\mathrm{perf}}$ vs. $\mathbf{D}^{b}$</span>：$\mathbf{D}^{\mathrm{perf}}(\Lambda)=\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$ 总是紧对象子范畴；$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 更大，二者相差的正是奇点范畴。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-excat-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> D. Happel, <i>Triangulated Categories in the Representation Theory of Finite-Dimensional Algebras</i>, LMS Lecture Note Ser. <b>119</b>, Cambridge Univ. Press, 1988.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> J.-L. Verdier, <i>Des catégories dérivées des catégories abéliennes</i>, Astérisque <b>239</b> (1996).</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> A. A. Beilinson, J. Bernstein, P. Deligne, <i>Faisceaux pervers</i>, Astérisque <b>100</b> (1982)（t-结构的原始文献）.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> N. Spaltenstein, <i>Resolutions of unbounded complexes</i>, Compositio Math. <b>65</b> (1988), 121–154.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> D. Orlov, <i>Triangulated categories of singularities and D-branes of type B</i>, 2004（奇点范畴）.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> S. I. Gelfand, Yu. I. Manin, <i>Methods of Homological Algebra</i>, 2nd ed., Springer, 2003.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> B. Keller, <i>On differential graded categories</i>, ICM Vol. II, 151–190, 2006（增强视角）.</p>
</div>
</div>
