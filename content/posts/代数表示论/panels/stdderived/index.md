---
title: "Standard Derived Equivalence"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-sde-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-sde-1">1　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-sde-1-1">1.1　Rickard 的导出 Morita 定理</a>
    <a class="ar-toc-l2" href="#ar-sde-1-2">1.2　标准导出等价与 Rickard 问题</a>
    <a class="ar-toc-l2" href="#ar-sde-1-3">1.3　"对象上最接近的标准等价"</a>
    <a class="ar-toc-l2" href="#ar-sde-1-4">1.4　伪恒等（pseudo-identity）与分解</a>
    <a class="ar-toc-l2" href="#ar-sde-1-5">1.5　canonical 导出等价与平坦性</a>
    <a class="ar-toc-l1" href="#ar-sde-2">2　核心工具与定理</a>
    <a class="ar-toc-l2" href="#ar-sde-2-1">2.1　tilting 复形判别准则</a>
    <a class="ar-toc-l2" href="#ar-sde-2-2">2.2　自等价刻画</a>
    <a class="ar-toc-l2" href="#ar-sde-2-3">2.3　Neeman 的公理化正面结果</a>
    <a class="ar-toc-l2" href="#ar-sde-2-4">2.4　正例：遗传代数</a>
    <a class="ar-toc-l2" href="#ar-sde-2-5">2.5　正例：三角代数</a>
    <a class="ar-toc-l2" href="#ar-sde-2-6">2.6　正例：导出离散代数</a>
    <a class="ar-toc-l2" href="#ar-sde-2-7">2.7　否证 I：特征 2 的反例族</a>
    <a class="ar-toc-l2" href="#ar-sde-2-8">2.8　否证 II：任意域上的反例</a>
    <a class="ar-toc-l2" href="#ar-sde-2-9">2.9　时间线一览</a>
    <a class="ar-toc-l1" href="#ar-sde-3">3　主要应用与实例</a>
    <a class="ar-toc-l2" href="#ar-sde-3-1">3.1　Broué 交换亏群猜想与 splendid 等价</a>
    <a class="ar-toc-l2" href="#ar-sde-3-2">3.2　导出不变量与对称代数</a>
    <a class="ar-toc-l2" href="#ar-sde-3-3">3.3　构造反例的机制</a>
    <a class="ar-toc-l2" href="#ar-sde-3-4">3.4　几何类比</a>
    <a class="ar-toc-l2" href="#ar-sde-3-5">3.5　仍为开放的子类</a>
    <a class="ar-toc-l1" href="#ar-sde-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l2" href="#ar-sde-4-1">4.1　与 dg 增强唯一性</a>
    <a class="ar-toc-l2" href="#ar-sde-4-2">4.2　与装饰无关性</a>
    <a class="ar-toc-l2" href="#ar-sde-4-3">4.3　与 silting / tilting 理论</a>
    <a class="ar-toc-l2" href="#ar-sde-4-4">4.4　与 $\tau$-tilting、突变</a>
    <a class="ar-toc-l2" href="#ar-sde-4-5">4.5　总表</a>
    <a class="ar-toc-l1" href="#ar-sde-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-sde-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">

<h3 class="ar-subhead" id="ar-sde-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$k$</td><td>固定域（除特别说明外任意特征）；$A,B$ 有限维 $k$-代数</td></tr>
<tr><td>$A\text{-}\mathrm{mod}$，$A\text{-}\mathrm{proj}$</td><td>有限生成左 $A$-模；有限生成投射 $A$-模</td></tr>
<tr><td>$\mathbf{D}^{b}(A)$，$\mathbf{K}^{b}(A\text{-}\mathrm{proj})$</td><td>$\mathbf{D}^{b}(A\text{-}\mathrm{mod})$；$A\text{-}\mathrm{proj}$ 的有界同伦范畴</td></tr>
<tr><td>$X^{\bullet}$</td><td>$B$-$A$-双模复形；$-\otimes^{\mathbf{L}}_{A}X^{\bullet}$ 为导出张量积</td></tr>
<tr><td>$T$</td><td>tilting 复形：$\mathrm{Hom}(T,T[i])=0\ (i\neq0)$ 且 $\mathrm{thick}(T)=\mathbf{K}^{b}(A\text{-}\mathrm{proj})$</td></tr>
<tr><td>$(F,\xi)$</td><td>三角函子：$F$ 为范畴等价，$\xi:F\circ[1]\Rightarrow[1]\circ F$ 为平移同构</td></tr>
<tr><td>$[i]$</td><td>第 $i$ 次平移函子</td></tr>
</tbody>
</table>
<p>约定：①"导出等价"指 $k$-线性三角等价 $\mathbf{D}^{b}(A)\to\mathbf{D}^{b}(B)$；②"$A$ 上 Rickard 问题成立"指 $\mathbf{D}^{b}(A)$ 的<em>每个</em>导出自等价都是标准的（等价于：$A$ 到任意 $B$ 的导出等价都标准，见 2.2）。</p>

<h3 class="ar-subhead" id="ar-sde-1">1　概念与定义</h3>

<h4 id="ar-sde-1-1">1.1　Rickard 的导出 Morita 定理</h4>
<p><strong>定理 1.1（Rickard, 1989/1991）</strong>：对 $k$-代数 $A,B$，以下等价：</p>
<ol>
  <li>存在 $k$-线性三角等价 $\mathbf{D}^{b}(A)\simeq\mathbf{D}^{b}(B)$（对无界情形为 $\mathbf{D}(\mathrm{Mod}\,A)\simeq\mathbf{D}(\mathrm{Mod}\,B)$）；</li>
  <li>存在<strong>双侧 tilting 复形</strong> $X^{\bullet}$（$B$-$A$-双模的有界复形，其单侧均为 tilting 复形且 $\mathrm{End}(X^{\bullet})\cong A$ 自然地），使得</li>
</ol>
$$X^{\bullet}\otimes^{\mathbf{L}}_{A}-:\ \mathbf{D}^{b}(A)\longrightarrow\mathbf{D}^{b}(B)$$
<p>为三角等价。</p>

<h4 id="ar-sde-1-2">1.2　标准导出等价与 Rickard 问题</h4>
<p><strong>定义</strong>：导出等价 $F:\mathbf{D}^{b}(A)\to\mathbf{D}^{b}(B)$ 称为<strong>标准的</strong>（standard），若存在双侧 tilting 复形 $X^{\bullet}$ 使 $F$ 与 $X^{\bullet}\otimes^{\mathbf{L}}_{A}-$ <em>自然同构</em>（作为三角函子）。否则称为<strong>非标准</strong>。</p>
<p><strong>问题 1.2（Rickard, 1991）</strong>：是否<em>每个</em>导出等价都是标准的？</p>
<p>该问题在 2026 年被否证（2.7–2.8）。注意其微妙之处：Rickard 本人已证明每个导出等价在<em>对象</em>层面都与某个标准等价"一样好"。</p>

<h4 id="ar-sde-1-3">1.3　"对象上最接近的标准等价"</h4>
<p><strong>定理 1.3（Rickard, Corollary 3.5）</strong>：给定导出等价 $F:\mathbf{D}^{b}(A)\to\mathbf{D}^{b}(B)$，必存在标准导出等价 $\widetilde{F}:\mathbf{D}^{b}(A)\to\mathbf{D}^{b}(B)$，满足</p>
<ul>
  <li>在由投射 $A$-模构成的满子范畴上 $F=\widetilde{F}$；</li>
  <li>对每个对象 $X^{\bullet}\in\mathbf{D}^{b}(A)$ 有 $F(X^{\bullet})\simeq\widetilde{F}(X^{\bullet})$（同构，但<em>未必函子性</em>）。</li>
</ul>
<p>因此 Rickard 问题精确等价于：上述逐对象同构能否选成<em>自然</em>同构 $F\cong\widetilde{F}$。这解释了为何问题如此棘手——它问的是"函子性"而非"对象层面"的现象。</p>

<h4 id="ar-sde-1-4">1.4　伪恒等（pseudo-identity）与分解</h4>
<p><strong>定义</strong>：三角自等价 $(F,\xi):\mathbf{D}^{b}(A)\to\mathbf{D}^{b}(A)$（或 $\mathbf{K}^{b}(A\text{-}\mathrm{proj})\to\mathbf{K}^{b}(A\text{-}\mathrm{proj})$）称为<strong>伪恒等</strong>，若 $F$ 固定所有<em>对象</em>，且固定 $A\text{-}\mathrm{mod}[i]$（相应地 $A\text{-}\mathrm{proj}[i]$）对所有 $i\in\mathbb{Z}$。</p>
<p><strong>分解定理（Chen）</strong>：任意导出等价可<em>唯一</em>分解为"一个伪恒等 $\circ$ 一个 canonical 导出等价"。这把 Rickard 问题归约为伪恒等是否为恒等三角函子的自然同构。</p>
<p><strong>判据（Hu–Xi–Zhang, 2026）</strong>：设 $A$ 为域上有限维代数，则 Rickard 问题对 $A$ 成立<strong>当且仅当</strong>每个固定所有<em>截断三角</em>（truncated triangle）的伪恒等 $(F,\mathrm{id}):\mathbf{K}^{b}(A\text{-}\mathrm{proj})\to\mathbf{K}^{b}(A\text{-}\mathrm{proj})$ 都自然同构于恒等三角函子 $(\mathrm{id},\mathrm{id})$。此前只需检查"所有伪恒等"，此判据把检查范围缩小到 $\xi=\mathrm{id}$ 且固定截断三角者。</p>

<h4 id="ar-sde-1-5">1.5　canonical 导出等价与平坦性</h4>
<p>Chen 引入（不要求平坦的）<strong>canonical 导出等价</strong>：与某个 tilting 复形典范相伴的导出等价。在<em>平坦</em>情形（特别地，代数定义在域上时），canonical 与 Rickard 意义下的 standard 一致。这一概念使非平坦基（如 $\mathbb{Z}$ 上）的讨论成为可能。</p>

<h3 class="ar-subhead" id="ar-sde-2">2　核心工具与定理</h3>

<h4 id="ar-sde-2-1">2.1　tilting 复形判别准则</h4>
<p><strong>定理 2.1（Rickard）</strong>：$T\in\mathbf{K}^{b}(A\text{-}\mathrm{proj})$ 为 tilting 复形 $\iff$ $\mathrm{Hom}_{\mathbf{K}}(T,T[i])=0\ (i\neq 0)$ 且 $\mathrm{thick}(T)=\mathbf{K}^{b}(A\text{-}\mathrm{proj})$；此时 $B=\mathrm{End}(T)^{\mathrm{op}}$ 与 $A$ 导出等价。这是所有"标准性"讨论的构造性基础。</p>

<h4 id="ar-sde-2-2">2.2　自等价刻画</h4>
<p><strong>命题 2.2</strong>：Rickard 问题对 $A$ 成立 $\iff$ 对每个代数 $B$，$\mathbf{D}^{b}(A)\to\mathbf{D}^{b}(B)$ 的导出等价都标准。故只需研究<em>自等价</em>（$B=A$）；反之亦然。这一等价性是所有正/反例研究的组织原则。</p>

<h4 id="ar-sde-2-3">2.3　Neeman 的公理化正面结果</h4>
<p>Neeman 从<em>三角之间态射</em>的角度研究该问题：通过给三角范畴的公理系统<em>添加</em>额外公理（即要求三角范畴带有更强的结构），可得肯定答案。这说明标准性问题本质上关乎"三角范畴这一语言是否足以表达函子性"——与 dg 增强层面的 (C2) 问题同源。</p>

<h4 id="ar-sde-2-4">2.4　正例：遗传代数</h4>
<p><strong>定理 2.4</strong>：从<em>遗传代数</em>出发的任意导出等价都是 canonical 的（Chen, <i>Selecta Math.</i> <b>31</b> (2025), no. 5）；在域上由 1.5 知 canonical = standard，故遗传代数上 Rickard 问题成立。</p>

<h4 id="ar-sde-2-5">2.5　正例：三角代数</h4>
<p><strong>定理 2.5</strong>：对<em>三角代数</em>（上三角矩阵代数 $\begin{pmatrix}A&M\\0&B\end{pmatrix}$ 及其推广），Rickard 问题有肯定答案。相关工作的原始出处见 arXiv:2608.09062 的参考文献 [4]。</p>

<h4 id="ar-sde-2-6">2.6　正例：导出离散代数</h4>
<p>Vossieck 引入的<strong>导出离散代数</strong>（derived discrete algebras）是检验同调猜想的标准试验场。已知：</p>
<ul>
  <li>Chen–Zhang：有限整体维数的导出离散代数之间的导出等价都是标准的；</li>
  <li>Bobiński–Ciborski（arXiv:2409.05158, 2024）：<em>任意</em>导出离散代数之间的导出等价都是标准的——结合"导出等价保持整体维数的有限性"与 Chen–Zhang 的结果统一证明；</li>
  <li>Hu–Xi–Zhang（2026）用其判据（1.4）给出若干情形的简短新证明。</li>
</ul>

<h4 id="ar-sde-2-7">2.7　否证 I：特征 2 的反例族</h4>
<p><strong>定理 2.7（Hu–Xi–Zhang, arXiv:2608.09062, 2026）</strong>：存在<em>无穷多个</em>有限维代数之间的非标准导出等价，从而<strong>否定</strong>回答 Rickard 问题。反例出现在特征 $2$ 的域上。作者同时给出问题为真的充要条件（1.4 的判据），并猜想特征 $\neq2$ 时答案仍为正。</p>

<h4 id="ar-sde-2-8">2.8　否证 II：任意域上的反例</h4>
<p><strong>定理 2.8（Jinbi Zhang, arXiv:2608.15031, 2026）</strong>：上述猜想不成立——在<em>任意域</em>上都存在非标准导出自等价；每个域都承认无穷多个带此类自等价的有限维代数。证明与特征无关，关键工具是<strong>截断多项式代数上矩阵的 supertrace 恒等式</strong>；另给出有限域上的第二个反例族。结论：Rickard 问题在<em>每个域</em>上都有否定答案（🔴）。</p>

<h4 id="ar-sde-2-9">2.9　时间线一览</h4>
<table>
<thead><tr><th>年份</th><th>事件</th><th>状态</th></tr></thead>
<tbody>
<tr><td>1989–1991</td><td>Rickard 建立导出 Morita 理论，并提出标准性问题</td><td>问题提出 🟡</td></tr>
<tr><td>1990s–2010s</td><td>Neeman 给出公理化正面结果；遗传、三角等代数类的正例</td><td>部分肯定 🟢</td></tr>
<tr><td>2023–2024</td><td>Chen–Zhang、Bobiński–Ciborski：导出离散代数上答案肯定</td><td>部分肯定 🟢</td></tr>
<tr><td>2025</td><td>Chen：canonical 导出等价；遗传代数情形 canonical（域上 = standard）</td><td>部分肯定 🟢</td></tr>
<tr><td>2026-08</td><td>Hu–Xi–Zhang：特征 2 上无穷多非标准导出等价；给出充要判据</td><td>否定（特征 2）🔴</td></tr>
<tr><td>2026-08</td><td>J. Zhang：任意域上均存在非标准导出自等价（supertrace 恒等式）</td><td>全面否定 🔴</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-sde-3">3　主要应用与实例</h3>

<h4 id="ar-sde-3-1">3.1　Broué 交换亏群猜想与 splendid 等价</h4>
<p>在模表示论中，Rickard 引入的 <strong>splendid 等价</strong>（由置换模构造的 tilting 复形给出的导出等价）天然是<em>标准</em>的，并且承载局部（亏群）信息，是 Broué 交换亏群猜想的核心工具。标准性在此不是障碍而是资源：人们需要的正是"可由具体双模复形实现"的等价。</p>

<h4 id="ar-sde-3-2">3.2　导出不变量与对称代数</h4>
<p>Rickard 证明：导出等价保持中心 $Z(A)$、保持 Hochschild 上同调作为<em>分次代数</em>的结构（$k$-平坦时；更精细地，Keller 证明移位分次 Lie 代数结构亦不变），并保持"对称代数"性质。这些结果的论证都在标准（或 canonical）等价的框架内完成，因此标准性的失效不影响不变量本身，但提醒我们"三角等价"比"双模实现"更灵活。</p>

<h4 id="ar-sde-3-3">3.3　构造反例的机制</h4>
<p>两代反例的共同思路是构造<em>非平凡伪恒等</em>：它在对象上是恒等，却带有非平凡的平移同构 $\xi$（或与截断三角的交互异常），从而无法自然同构于恒等三角函子。特征 2 的构造依赖该特征的特殊算术；J. Zhang 的构造则用截断多项式代数上的 supertrace 恒等式取代之，因而与特征无关。</p>

<h4 id="ar-sde-3-4">3.4　几何类比</h4>
<p>代数几何中对应的问题是"正合函子是否 Fourier–Mukai 型"，即 Bondal–Larsen–Lunts 的 (C2)。它同样已被否证（Rizzardo–Van den Bergh–Neeman, Invent. Math. 216 (2019)）。两条线索高度平行：都可归因于"三角范畴层面丢失了函子性数据"，都需提升到 dg/增强层面才获得函子性。</p>

<h4 id="ar-sde-3-5">3.5　仍为开放的子类</h4>
<ul>
  <li>标准性在哪些自然代数类上仍成立？（遗传、三角、导出离散之外者，如自入射代数、gentle 代数、Nakayama 代数等）</li>
  <li>非标准自等价是否总是来自伪恒等？分解定理给出部分答案，但结构分类尚缺。</li>
  <li>与 Broué 猜想的关系：splendid 等价为标准等价，故标准性失效不直接影响猜想，但提示需更细致地处理"等价的几何/局部来源"。</li>
</ul>

<h3 class="ar-subhead" id="ar-sde-4">4　与邻近概念的关系</h3>

<h4 id="ar-sde-4-1">4.1　与 dg 增强唯一性</h4>
<p>增强唯一性（(C1)）与标准性相互独立：即使 $\mathbf{D}^{b}(\mathrm{mod}\,A)$ 有唯一 dg 增强（CNS 定理保证），正合函子仍可能<em>不</em>提升为 dg 态射（(C2) 已否证）；而 Rickard 问题的失败也可视作这一现象在代数侧的表现。参见"DG enhancement"面板 2.2、4.2。</p>

<h4 id="ar-sde-4-2">4.2　与装饰无关性</h4>
<p>Rickard 的装饰无关性定理（若左凝聚环 $R,S$ 某一种装饰的导出范畴等价，则全部装饰都等价）及其概形版本（Canonaco–Haesemeyer–Neeman–Stellari, arXiv:2402.04605）处理的是<em>范畴</em>层面的独立性；标准性处理的是<em>函子</em>层面的可提升性。二者互补。</p>

<h4 id="ar-sde-4-3">4.3　与 silting / tilting 理论</h4>
<p>tilting 复形给出标准等价；silting 对象给出更广的等价来源（two-term silting 对应 support $\tau$-tilting）。标准性问题可重述为：由 silting 对象诱导的等价是否总可由双侧 tilting 复形实现为标准形。</p>

<h4 id="ar-sde-4-4">4.4　与 $\tau$-tilting、突变</h4>
<p>$\tau$-tilting 理论中的突变（Adachi–Iyama–Reiten）在 $\mathbf{K}^{b}(\mathrm{proj})$ 层面操作，与伪恒等的研究对象相同；这解释了为何"固定所有对象却非平凡"的自等价能在该框架内被发现。</p>

<h4 id="ar-sde-4-5">4.5　总表</h4>
<table>
<thead><tr><th>代数类 / 情形</th><th>Rickard 问题</th><th>依据</th></tr></thead>
<tbody>
<tr><td>遗传代数</td><td>肯定 🟢</td><td>Chen 2025（canonical ⟹ 域上 standard）</td></tr>
<tr><td>三角代数</td><td>肯定 🟢</td><td>见 arXiv:2608.09062 参考文献 [4]</td></tr>
<tr><td>导出离散代数</td><td>肯定 🟢</td><td>Chen–Zhang；Bobiński–Ciborski 2024</td></tr>
<tr><td>特征 2 的某些代数</td><td>否定 🔴</td><td>Hu–Xi–Zhang 2026</td></tr>
<tr><td>任意域上的某些代数</td><td>否定 🔴</td><td>J. Zhang 2026</td></tr>
<tr><td>一般有限维代数</td><td>否定 🔴（问题已解决）</td><td>综合 2.7–2.8</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-sde-5">5　常见混淆与易错点</h3>
<ul>
  <li><strong>"对象上一致"不等于"函子同构"</strong>：定理 1.3 常被误读为肯定答案；Rickard 问题问的正是自然同构。</li>
  <li><strong>问题已于 2026 年否证</strong>：截至本面板更新日期，Rickard 问题在<em>任意域</em>上都有否定答案，不能再写作"开放问题"。</li>
  <li><strong>canonical $\neq$ standard</strong>：二者在平坦（特别是域上）情形一致，非平坦基上不同。</li>
  <li><strong>标准性失效不破坏导出不变量</strong>：中心、Hochschild 上同调、对称性等仍为导出不变量。</li>
  <li><strong>与 (C2) 的类比</strong>：几何侧的 (C2) 与代数侧的标准性是两个不同的问题，虽同源，但结论需分别引用。</li>
  <li><strong>作者易混</strong>：两篇 2026 年反例论文作者分别是 Wei Hu、Changchang Xi、Jin Zhang（特征 2）与 Jinbi Zhang（任意域），为不同工作。</li>
</ul>

<h3 class="ar-subhead" id="ar-sde-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> J. Rickard, <i>Morita theory for derived categories</i>, J. London Math. Soc. (2) <b>39</b> (1989), 436–456.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> J. Rickard, <i>Derived equivalences and derived functors</i>, J. London Math. Soc. (2) <b>43</b> (1991), 37–48（Rickard 问题见此文）.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> D. Vossieck, <i>The algebras with discrete derived category</i>, J. Algebra <b>243</b> (2001), 168–176.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> G. Bobiński, T. Ciborski, <i>Derived equivalences for the derived discrete algebras are standard</i>, arXiv:2409.05158 (2024).</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> X.-W. Chen, <i>Pre-weight structures, pseudo-identities and canonical derived equivalences</i>, Selecta Math. (N.S.) <b>31</b> (2025), no. 5.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> W. Hu, C. Xi, J. Zhang, <i>Rickard's question on standard derived equivalences</i>, arXiv:2608.09062 (2026，v2 2026-09-02).</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> J. Zhang, <i>Non-standard derived equivalences over arbitrary fields</i>, arXiv:2608.15031 (2026).</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> G. Jasso, H. Krause, S. Schroll, <i>Rickard's Derived Morita Theory: Review and Outlook</i>, arXiv:2509.06369 (2025，v2 2026-04-10).</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> A. Rizzardo, M. Van den Bergh, A. Neeman, <i>An example of a non-Fourier–Mukai functor between derived categories of coherent sheaves</i>, Invent. Math. <b>216</b> (2019), 927–1004.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> A. Canonaco, C. Haesemeyer, A. Neeman, P. Stellari, <i>The passage among the subcategories of weakly approximable triangulated categories</i>, arXiv:2402.04605 (2024).</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> T. Adachi, O. Iyama, I. Reiten, <i>$\tau$-tilting theory</i>, Compos. Math. <b>150</b> (2014), 415–452.</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> B. Keller, <i>Hochschild cohomology and derived Picard groups</i>, J. Pure Appl. Algebra <b>190</b> (2004), 177–196.</p>
</div>
</div>
