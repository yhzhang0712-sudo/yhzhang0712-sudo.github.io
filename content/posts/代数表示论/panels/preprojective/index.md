---
title: "Preprojective Algebra"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-ppa-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-ppa-1">1　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-ppa-1-1">1.1　构造与来历</a>
    <a class="ar-toc-l2" href="#ar-ppa-1-2">1.2　变形预投射代数 $\Pi^{\lambda}$</a>
    <a class="ar-toc-l2" href="#ar-ppa-1-3">1.3　有限维性判据</a>
    <a class="ar-toc-l2" href="#ar-ppa-1-4">1.4　2-Calabi–Yau 性质</a>
    <a class="ar-toc-l2" href="#ar-ppa-1-5">1.5　高维预投射代数</a>
    <a class="ar-toc-l1" href="#ar-ppa-2">2　核心工具与定理</a>
    <a class="ar-toc-l2" href="#ar-ppa-2-1">2.1　经典结构定理（Baer–Geigle–Lenzing、Ringel）</a>
    <a class="ar-toc-l2" href="#ar-ppa-2-2">2.2　GLS：刚性模与 2-丛倾斜对象</a>
    <a class="ar-toc-l2" href="#ar-ppa-2-3">2.3　2-CY 范畴的丛结构（BIRS）</a>
    <a class="ar-toc-l2" href="#ar-ppa-2-4">2.4　Keller 的 derived preprojective dg 代数</a>
    <a class="ar-toc-l2" href="#ar-ppa-2-5">2.5　Nakajima 箭图簇 = $\Pi$ 的模空间</a>
    <a class="ar-toc-l2" href="#ar-ppa-2-6">2.6　根与分解：Kac 定理的预投射证明</a>
    <a class="ar-toc-l2" href="#ar-ppa-2-7">2.7　同调性质一览</a>
    <a class="ar-toc-l2" href="#ar-ppa-2-8">2.8　Hall 代数与 BPS 代数</a>
    <a class="ar-toc-l1" href="#ar-ppa-3">3　主要应用与实例</a>
    <a class="ar-toc-l2" href="#ar-ppa-3-1">3.1　丛代数的范畴化</a>
    <a class="ar-toc-l2" href="#ar-ppa-3-2">3.2　Kleinian 奇点与 McKay 对应</a>
    <a class="ar-toc-l2" href="#ar-ppa-3-3">3.3　量子群、晶体基与箭图簇</a>
    <a class="ar-toc-l2" href="#ar-ppa-3-4">3.4　Higgs 范畴（Wu；Keller–Liu）</a>
    <a class="ar-toc-l2" href="#ar-ppa-3-5">3.5　高维组合：棱柱三角剖分</a>
    <a class="ar-toc-l2" href="#ar-ppa-3-6">3.6　$\tau$-tilting 与 Weyl 群</a>
    <a class="ar-toc-l2" href="#ar-ppa-3-7">3.7　同调镜像对称</a>
    <a class="ar-toc-l1" href="#ar-ppa-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l2" href="#ar-ppa-4-1">4.1　与丛范畴 / 丛代数</a>
    <a class="ar-toc-l2" href="#ar-ppa-4-2">4.2　与高维 Auslander–Reiten 理论</a>
    <a class="ar-toc-l2" href="#ar-ppa-4-3">4.3　与 Cohen–Macaulay 模、奇点范畴</a>
    <a class="ar-toc-l2" href="#ar-ppa-4-4">4.4　与 Ginzburg dg 代数、Jacobi 代数</a>
    <a class="ar-toc-l2" href="#ar-ppa-4-5">4.5　与 gentle 代数、几何模型</a>
    <a class="ar-toc-l2" href="#ar-ppa-4-6">4.6　总表</a>
    <a class="ar-toc-l1" href="#ar-ppa-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-ppa-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">

<h3 class="ar-subhead" id="ar-ppa-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$Q$</td><td>有限箭图（$Q_{0}$ 顶点、$Q_{1}$ 箭图）；$H=kQ$ 路代数</td></tr>
<tr><td>$\overline{Q}$</td><td>加倍箭图：$Q$ 的每个箭图 $a$ 补上反向箭图 $a^{\ast}$</td></tr>
<tr><td>$\Pi(Q)$</td><td>预投射代数 $k\overline{Q}/(\rho)$，$\rho=\sum_{a\in Q_{1}}\bigl(aa^{\ast}-a^{\ast}a\bigr)$</td></tr>
<tr><td>$\Pi^{\lambda}$</td><td>Crawley-Boevey–Holland 变形预投射代数（$\lambda\in k^{Q_{0}}$）</td></tr>
<tr><td>$\underline{\mathrm{mod}}\,\Pi$</td><td>$\mathrm{mod}\,\Pi$ 的稳定范畴（$\Pi$ 自入射时为三角范畴）</td></tr>
<tr><td>$\mathrm{Sub}\,Q_{J}$</td><td>$\mathrm{mod}\,\Pi$ 中由 $\bigoplus_{j\in J}Q_{j}$ 的有限直和的子模构成的子范畴</td></tr>
<tr><td>$\Pi_{d+1}(A)$</td><td>整体维数 $\le d$ 的代数 $A$ 的 $(d+1)$-预投射代数（高维版本）</td></tr>
<tr><td>$\mathfrak{g}_{Q}$</td><td>$Q$ 对应的对称 Kac–Moody 李代数</td></tr>
</tbody>
</table>
<p>约定：①$k$ 为域（多数结构性结论在任意域成立，几何应用常取 $k=\mathbb{C}$）；②$Q$ 默认无环、连通；③"$d$-CY"指 Serre 函子 $S\cong[d]$。</p>

<h3 class="ar-subhead" id="ar-ppa-1">1　概念与定义</h3>

<h4 id="ar-ppa-1-1">1.1　构造与来历</h4>
<p><strong>定义</strong>：箭图 $Q$ 的<strong>预投射代数</strong>为</p>
$$\Pi(Q)\;=\;k\overline{Q}\Big/\Big(\sum_{a\in Q_{1}}\bigl(aa^{\ast}-a^{\ast}a\bigr)\Big),$$
<p>其中 $\overline{Q}$ 为 $Q$ 的加倍箭图（把每个箭图 $a:i\to j$ 补上反向箭图 $a^{\ast}:j\to i$），关系在每个顶点处取一个"换位子和"（符号约定依文献而定，等价的另一种写法是 $\sum_{a}(a^{\ast}a-aa^{\ast})$）。</p>
<p><strong>来历</strong>：Gelfand–Ponomarev（1979）为理解路代数的表示论而引入它——把 $H=kQ$ 的全部<em>预投射</em>模（preprojective modules）以 Ext 自扩张的方式"粘合"成一个代数。随后 Dlab–Ringel、Baer–Geigle–Lenzing、Ringel 系统研究了其结构。$\Pi(Q)$ 与 $Q$ 的<em>定向无关</em>（换定向得同构代数），这一点从几何定义看更为自然。</p>

<h4 id="ar-ppa-1-2">1.2　变形预投射代数 $\Pi^{\lambda}$</h4>
<p>Crawley-Boevey–Holland（1998）引入<strong>变形预投射代数</strong></p>
$$\Pi^{\lambda}(Q)\;=\;k\overline{Q}\Big/\Big(\sum_{a\in Q_{1}}\bigl(aa^{\ast}-a^{\ast}a\bigr)-\sum_{i\in Q_{0}}\lambda_{i}e_{i}\Big),\qquad \lambda\in k^{Q_{0}},$$
<p>它是 Kleinian 奇点的非交换形变的代数侧对象，也是"矩映射水平集"的代数化：$\Pi^{\lambda}$-模 $\leftrightarrow$ 矩映射取值为 $\lambda$ 的表示。</p>

<h4 id="ar-ppa-1-3">1.3　有限维性判据</h4>
<p><strong>定理 1.3</strong>：$\Pi(Q)$ 有限维 $\iff$ $Q$ 的底层图为 <strong>Dynkin 型</strong>（$\mathbb{A},\mathbb{D},\mathbb{E}$）。非 Dynkin（仿射或 wild）时 $\Pi(Q)$ 无限维。这是最基本的二分，决定了后续理论的两条不同路线：Dynkin 型走"有限维自入射代数 + 稳定范畴"，非 Dynkin 型走"无限维代数 + 有限维模的有界导出范畴"。</p>

<h4 id="ar-ppa-1-4">1.4　2-Calabi–Yau 性质</h4>
<p>预投射代数是 2-Calabi–Yau 现象的两大源头之一（另一是丛范畴）：</p>
<ul>
  <li><strong>Dynkin 型</strong>：$\Pi(Q)$ 是有限维<em>自入射</em>代数，其稳定范畴 $\underline{\mathrm{mod}}\,\Pi(Q)$ 是 <strong>2-Calabi–Yau</strong> 三角范畴（Geiss–Leclerc–Schröer）。</li>
  <li><strong>非 Dynkin 型</strong>：有限维 $\Pi(Q)$-模的有界导出范畴为 2-CY（GLS，见 Iyama–Oppermann 的综述性引用）。</li>
</ul>
<p>这正是"预投射代数可以范畴化丛代数"的结构性原因：2-CY 性保证 $\mathrm{Ext}^{1}$ 的对称性与交换关系的出现。</p>

<h4 id="ar-ppa-1-5">1.5　高维预投射代数</h4>
<p><strong>定义（Iyama–Oppermann）</strong>：设 $A$ 整体维数 $\le d$，其 <strong>$(d+1)$-预投射代数</strong>为张量代数</p>
$$\Pi_{d+1}(A)\;=\;T_{A}\bigl(\mathrm{Ext}^{d}_{A}(DA,\,A)\bigr).$$
<p>$d=1$ 时（$A=kQ$，$Q$ 无环）回到经典 $\Pi(Q)$（这给出 Crawley-Boevey 描述的高维推广）。<strong>定理</strong>：若 $A$ 是 $d$-表示有限的，则 $\Pi_{d+1}(A)$ 自入射，且其稳定范畴是 $(d+1)$-CY，且等于稳定 $d$-Auslander 代数的 $(d+1)$-Amiot 丛范畴。</p>

<h3 class="ar-subhead" id="ar-ppa-2">2　核心工具与定理</h3>

<h4 id="ar-ppa-2-1">2.1　经典结构定理（Baer–Geigle–Lenzing、Ringel）</h4>
<p>Baer–Geigle–Lenzing 对驯顺遗传代数建立了预投射代数的结构（它是 Noetherian 的、与驯顺 Hereditary 代数的预投射分支密切相关）；Ringel（1998）系统讨论了 $\Pi(Q)$ 的模范畴、根系与 AR 结构。这些工作奠定了"$\Pi$ 是把遗传代数的预投射分支内化为一个代数"的图景。</p>

<h4 id="ar-ppa-2-2">2.2　GLS：刚性模与 2-丛倾斜对象</h4>
<p><strong>定理 2.2（Geiss–Leclerc–Schröer）</strong>：设 $Q$ 为 Dynkin 型 $\Delta$，$M$ 为刚性 $\Pi(Q)$-模（$\mathrm{Ext}^{1}_{\Pi}(M,M)=0$），则 $M$ 的非同构不可分解直和因子个数<em>至多</em>等于 $\Delta$ 的正根个数。更强地，GLS 在稳定范畴中构造了 <strong>2-丛倾斜对象</strong>。由此 $\underline{\mathrm{mod}}\,\Pi(Q)$ 成为丛代数范畴化的舞台。</p>

<h4 id="ar-ppa-2-3">2.3　2-CY 范畴的丛结构（BIRS）</h4>
<p><strong>定理 2.3（Buan–Iyama–Reiten–Scott）</strong>：对有限无环箭图 $Q$ 对应的 Coxeter 群 $W$ 与元素 $w\in W$，取理想 $I_{w}\subseteq\Pi$（由 $w$ 的既约表达式给出），则子范畴 $\mathrm{Sub}(\Pi/I_{w})$ 的稳定范畴是 2-CY 的；$w$ 取 Coxeter 元素时回到 $\underline{\mathrm{mod}}\,\Pi$。这类范畴带有丛结构（丛倾斜对象、突变、丛特征标），并用于范畴化代数群的幂零子簇/部分旗簇的坐标环。</p>

<h4 id="ar-ppa-2-4">2.4　Keller 的 derived preprojective dg 代数</h4>
<p>Keller 的（变形）Calabi–Yau 完备化理论把预投射代数放进了 dg 框架：对整体维数 $\le d$ 的代数 $A$，其 <em>derived $(d+1)$-preprojective dg 代数</em> $\boldsymbol{\Pi}_{d+1}(A)$ 是 $(d+1)$-CY 的 dg 代数，且</p>
$$H^{0}\bigl(\boldsymbol{\Pi}_{d+1}(A)\bigr)\;\cong\;\Pi_{d+1}(A),$$
<p>即经典（以及高维）预投射代数是对应 dg 代数的 $0$ 次上同调（Iyama–Oppermann 明确指出并利用）。这也是 Amiot 丛范畴与高维丛范畴研究的枢纽。</p>

<h4 id="ar-ppa-2-5">2.5　Nakajima 箭图簇 = $\Pi$ 的模空间</h4>
<p>Nakajima 箭图簇是 $\Pi(Q)$（或 $\Pi^{\lambda}$）的<em>加框稳定表示</em>的精细模空间。Nakajima 在其上构造了量子环代数 $U_{q}(L\mathfrak{g}_{Q})$ 的作用（K 理论）与 Yangian $Y_{\hbar}(\mathfrak{g}_{Q})$ 的作用（Borel–Moore 同调，Varagnolo）。因此预投射代数是几何表示论中"量子群表示得以实现"的代数基础。</p>

<h4 id="ar-ppa-2-6">2.6　根与分解：Kac 定理的预投射证明</h4>
<p>Crawley-Boevey 在变形预投射代数框架下研究表示的分解与矩映射水平集，给出 Kac 定理（不可分解表示存在 $\iff$ 维数向量为根）的证明途径，并刻画 $\Pi^{\lambda}$-模的分解型。这把"根的组合学"与"$\Pi$ 的表示论"牢固地绑定。</p>

<h4 id="ar-ppa-2-7">2.7　同调性质一览</h4>
<table>
<thead><tr><th>性质</th><th>Dynkin 型</th><th>非 Dynkin 型</th></tr></thead>
<tbody>
<tr><td>维数</td><td>有限</td><td>无限</td></tr>
<tr><td>代数类型</td><td>有限维自入射</td><td>Noetherian（非有限维）</td></tr>
<tr><td>2-CY 载体</td><td>$\underline{\mathrm{mod}}\,\Pi$</td><td>$\mathbf{D}^{b}(\mathrm{mod}\,\Pi)$（有限维模）</td></tr>
<tr><td>2-丛倾斜对象</td><td>存在（GLS）</td><td>依子类而定</td></tr>
<tr><td>典型应用</td><td>有限型丛代数范畴化</td><td>一般 Kac–Moody 型、箭图簇、CoHA</td></tr>
</tbody>
</table>

<h4 id="ar-ppa-2-8">2.8　Hall 代数与 BPS 代数</h4>
<p>预投射代数的表示模栈上同调给出 <strong>cohomological Hall 代数</strong>（CoHA）：Yang–Zhao 构造了一般定向上同调理论 $A$ 下 $Q$ 的 CoHA，并证明它作用在 Nakajima 箭图簇的 $A$-同调上，与 Yangian 的 Borel 子代数作用比较（并与 Lusztig 的模表示猜想相关）。Davison–Hennecart–Schlegel Mejia（arXiv:2303.12592）证明：2-CY Abel 范畴的 BPS 代数同构于某个广义 Kac–Moody 李代数包络代数正部分，其主要例子即预投射代数的表示范畴；推论包括 Bozec–Schiffmann 尖点多项式正性猜想的一般情形证明、Nakajima 箭图簇上同调的分解等。K 理论版（preprojective K-theoretic Hall algebra ↔ Okounkov–Smirnov 量子仿射代数）在若干情形仍是猜想。</p>

<h3 class="ar-subhead" id="ar-ppa-3">3　主要应用与实例</h3>

<h4 id="ar-ppa-3-1">3.1　丛代数的范畴化</h4>
<p>Dynkin 型的 $\underline{\mathrm{mod}}\,\Pi$（以及 BIRS 的 $\mathrm{Sub}(\Pi/I_{w})$）给出有限型丛代数、以及 Grassmann 型/部分旗型丛代数的加性范畴化：丛变量 ↔ 可达的不可分解刚性对象，丛 ↔ 丛倾斜对象，突变 ↔ 替换。Jensen–King–Su 用阶（orders）与 Cohen–Macaulay 模实现了 Grassmann 情形，Jensen–King–Su 之后被推广到任意 Dynkin 型与任意顶点子集（Geiss–Leclerc–Schröer 及其后续）。</p>

<h4 id="ar-ppa-3-2">3.2　Kleinian 奇点与 McKay 对应</h4>
<p>设 $R$ 为 $\Delta$ 型二维简单超曲面奇点（Kleinian 奇点）的完备局部环。Auslander 的经典结果：$R$ 的 Cohen–Macaulay 模范畴 $\mathrm{CM}(R)$ 为有限型，若 $M$ 取遍其不可分解对象的一个代表之直和，则</p>
$$\mathrm{End}_{R}(M)\;\cong\;\Pi(Q),$$
<p>其中 $Q$ 的底层图即 $\Delta$ 的 Dynkin 图。于是 $\underline{\mathrm{CM}}(R)\simeq\underline{\mathrm{mod}}\,\Pi(Q)$ 为 2-CY。这把预投射代数与 McKay 对应、奇点的非交换解消（Van den Bergh 的 NCCR）连接起来。</p>

<h4 id="ar-ppa-3-3">3.3　量子群、晶体基与箭图簇</h4>
<p>Nakajima 箭图簇（$=\Pi$ 的稳定表示模空间）实现了量子仿射代数与 Yangian 的表示；Lusztig 的典范基与 Kashiwara 的晶体基可通过 $\Pi$ 的表示（半典范基、Kashiwara–Saito 的几何构造）理解；CoHA/BPS 代数则把这一图景升格为范畴级陈述（2.8）。</p>

<h4 id="ar-ppa-3-4">3.4　Higgs 范畴（Wu；Keller–Liu）</h4>
<p>Yilin Wu（2023）引入 <strong>Higgs 范畴</strong>——一类精确 dg 范畴，用以（加性地）范畴化带<em>不可逆</em>系数的丛代数；基本例子正是 Dynkin 箭图的预投射代数的有限维模范畴（Geiss–Leclerc–Schröer 用它范畴化极大幂幺子群的坐标环）。Keller 与 Miantao Liu 的近期工作（2025，Keller 在 SIMIS 的报告）用 <strong>Gorenstein 投射 dg 模</strong>描述 Higgs 范畴，证明了 Merlin Christ 猜想的一个等价，并把 Goncharov–Shen 的三旗簇对称性提升到范畴层面。</p>

<h4 id="ar-ppa-3-5">3.5　高维组合：棱柱三角剖分</h4>
<p><strong>定理（Iyama–Williams, IMRN 2024, no. 13, 10236–10254）</strong>：$\mathbb{A}$ 型预投射代数的 support $\tau$-tilting 对、two-term silting 复形、以及单纯形乘积棱柱 $\Delta_{n-1}\times\Delta_{1}$（或其内部单形）的三角剖分之间存在一系列自然双射，从而把"高维三角剖分的组合学"与"预投射代数的表示论"连接起来。这是"几何模型"向三维以上推进的代表性结果。</p>

<h4 id="ar-ppa-3-6">3.6　$\tau$-tilting 与 Weyl 群</h4>
<p>Mizuno 等证明：Dynkin 型预投射代数的 support $\tau$-tilting 模与相应 Weyl 群的元素之间存在双射（并结合 $g$-向量、$c$-向量的组合学）。这为"$\tau$-tilting 有限性"与有限 Weyl 群提供了典范例子，也与 Iyama–Williams 的多面体三角剖分图像相容。</p>

<h4 id="ar-ppa-3-7">3.7　同调镜像对称</h4>
<p>近期工作（Hong–Lau–Tan, arXiv:2608.05764, 2026）在局部化同调镜像对称框架下，把带高秩平坦丛的浸入拉格朗日膜的 Floer 理论与<em>变形</em>预投射代数（一般复矩映射水平上的 Nakajima 箭图簇）对应起来，为 ADHM 与仿射 ADE 型浸入构造了到变形预投射代数的镜像函子。这说明预投射代数同样是辛几何侧的天然对象。</p>

<h3 class="ar-subhead" id="ar-ppa-4">4　与邻近概念的关系</h3>

<h4 id="ar-ppa-4-1">4.1　与丛范畴 / 丛代数</h4>
<p>丛范畴 $\mathscr{C}_{Q}=\mathbf{D}^{b}(H)/(\tau^{-1}[1])$ 与 $\underline{\mathrm{mod}}\,\Pi(Q)$（Dynkin 型）同为 2-CY；二者并不一般等价，但 Amiot 的广义丛范畴理论把它们统一到"Ginzburg dg 代数 / 势"的框架下。详见"Cluster Theory"面板。</p>

<h4 id="ar-ppa-4-2">4.2　与高维 Auslander–Reiten 理论</h4>
<p>高维预投射代数 $\Pi_{d+1}(A)$ 是 $d$-表示有限代数研究的核心：其稳定范畴为 $(d+1)$-CY 且带 $(d+1)$-丛倾斜对象。这是"高维 AR 理论"与"预投射代数"的交汇处。</p>

<h4 id="ar-ppa-4-3">4.3　与 Cohen–Macaulay 模、奇点范畴</h4>
<p>由 3.2，Dynkin 型预投射代数即 Kleinian 奇点的 CM 模范畴的自同态代数；更一般地，$\underline{\mathrm{CM}}(R)$ 型 2-CY 范畴是 Higgs 范畴、丛结构的另一大来源。Gorenstein 投射 dg 模则用于描述 Higgs 范畴（3.4）。</p>

<h4 id="ar-ppa-4-4">4.4　与 Ginzburg dg 代数、Jacobi 代数</h4>
<p>Keller 的框架把 $\Pi_{d+1}(A)$ 解释为 derived $(d+1)$-preprojective dg 代数的 $H^{0}$；带势箭图 $(Q,W)$ 的 Jacobi 代数 $J(Q,W)$ 同样是某个 3-CY Ginzburg dg 代数的 $H^{0}$。两者是同一"CY 完备化"机器的不同输出。</p>

<h4 id="ar-ppa-4-5">4.5　与 gentle 代数、几何模型</h4>
<p>Amiot 的"gentle 代数的预投射代数"等结果把 gentle 情形纳入 $\Pi$ 的框架；而 $\mathbb{A}$ 型预投射代数的 $\tau$-tilting 组合学又与棱柱三角剖分对应（3.5），构成"曲面/多面体模型"的另一分支。</p>

<h4 id="ar-ppa-4-6">4.6　总表</h4>
<table>
<thead><tr><th>对象 / 问题</th><th>结论</th><th>依据</th></tr></thead>
<tbody>
<tr><td>$\Pi(Q)$ 有限维</td><td>$\iff Q$ Dynkin</td><td>Gelfand–Ponomarev；Dlab–Ringel</td></tr>
<tr><td>Dynkin 型稳定范畴</td><td>2-CY</td><td>GLS</td></tr>
<tr><td>非 Dynkin 型</td><td>$\mathbf{D}^{b}(\mathrm{mod}\,\Pi)$ 为 2-CY</td><td>GLS（见 Iyama–Oppermann）</td></tr>
<tr><td>Dynkin 型刚性模规模</td><td>$\le$ 正根个数；稳定范畴有 2-丛倾斜对象</td><td>GLS</td></tr>
<tr><td>Kleinian 奇点</td><td>$\mathrm{End}_{R}(M)\cong\Pi(Q)$</td><td>Auslander</td></tr>
<tr><td>高维版本</td><td>$\Pi_{d+1}(A)=T_{A}\mathrm{Ext}^{d}(DA,A)$；$d$-表示有限 ⟹ 自入射、$(d+1)$-CY</td><td>Iyama–Oppermann</td></tr>
<tr><td>CoHA / BPS 代数</td><td>$\Pi$ 的表示模栈给出（广义）Kac–Moody 代数</td><td>Yang–Zhao；Davison–Hennecart–Schlegel Mejia</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-ppa-5">5　常见混淆与易错点</h3>
<ul>
  <li><strong>关系的符号约定</strong>：$\sum(aa^{\ast}-a^{\ast}a)$ 与 $\sum(a^{\ast}a-aa^{\ast})$ 只差整体符号，给出同构代数；引用时不必纠缠。</li>
  <li><strong>有限维只在 Dynkin 型成立</strong>：把 Dynkin 型的结论（自入射、稳定范畴 2-CY）直接搬到仿射/wild 型是错的。</li>
  <li><strong>$\underline{\mathrm{mod}}\,\Pi$ 与 $\mathbf{D}^{b}(\mathrm{mod}\,\Pi)$ 不同</strong>：Dynkin 型看稳定范畴，非 Dynkin 型看有界导出范畴，二者不可互换。</li>
  <li><strong>$\Pi$ 与丛范畴不等价</strong>（一般情形）：只在特定类型/特定构造下才有三角等价，常需 Amiot 的广义丛范畴作中介。</li>
  <li><strong>2-丛倾斜对象 vs 丛倾斜对象</strong>：前者出现在 $\mathrm{mod}\,\Pi$（Abel 侧），后者出现在 2-CY 三角范畴侧，定义中的正交方向写法不同。</li>
  <li><strong>文献年份</strong>：GLS 系列有多篇（2005–2008），引用时注明具体篇名与年代，勿笼统称"GLS"。</li>
</ul>

<h3 class="ar-subhead" id="ar-ppa-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> I. M. Gelfand, V. A. Ponomarev, <i>Model algebras and representations of graphs</i>, Funct. Anal. Appl. <b>13</b> (1979), 157–166.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> D. Baer, W. Geigle, H. Lenzing, <i>The preprojective algebra of a tame hereditary Artin algebra</i>, Comm. Algebra <b>15</b> (1987), 425–457.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> W. Crawley-Boevey, M. P. Holland, <i>Noncommutative deformations of Kleinian singularities</i>（变形预投射代数 $\Pi^{\lambda}$）, Duke Math. J. <b>92</b> (1998), 605–635.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> C. M. Ringel, <i>The preprojective algebra of a quiver</i>, in: Algebras and Modules II, CMS Conf. Proc. <b>24</b> (1998), 467–480.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> C. Geiss, B. Leclerc, J. Schröer, <i>Rigid modules over preprojective algebras</i>, Invent. Math. <b>165</b> (2006), 589–632.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> C. Geiss, B. Leclerc, J. Schröer, <i>Auslander algebras and initial seeds for cluster algebras</i>, J. London Math. Soc. <b>75</b> (2007), 718–740.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> A. B. Buan, O. Iyama, I. Reiten, J. Scott, <i>Cluster structures for 2-Calabi–Yau categories and unipotent groups</i>, Compos. Math. <b>145</b> (2009), 1035–1079.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> B. Keller, <i>Deformed Calabi–Yau completions</i>（with an appendix by M. Van den Bergh）, J. Reine Angew. Math. <b>654</b> (2011), 125–180.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> O. Iyama, S. Oppermann, <i>Stable categories of higher preprojective algebras</i>, Adv. Math. <b>244</b> (2013), 23–68.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> H. Nakajima, <i>Quiver varieties and Kac–Moody algebras</i>, Duke Math. J. <b>91</b> (1998), 515–560.</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> Y. Yang, G. Zhao, <i>The cohomological Hall algebra of a preprojective algebra</i>, arXiv:1407.7994; Proc. Lond. Math. Soc. <b>116</b> (2018), 1029–1074.</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> B. Davison, L. Hennecart, S. Schlegel Mejia, <i>BPS algebras and generalised Kac–Moody algebras from 2-Calabi–Yau categories</i>, arXiv:2303.12592 (2023, v5 2025).</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> B. Jensen, A. King, X. Su, <i>A categorification of Grassmannian cluster algebras</i>, Proc. Lond. Math. Soc. <b>113</b> (2016), 185–212（arXiv:1309.7301）.</p>
<p class="ar-ref"><span class="ar-ref-no">[14]</span> O. Iyama, N. J. Williams, <i>Triangulations of prisms and preprojective algebras of type $\mathbb{A}$</i>, Int. Math. Res. Not. IMRN <b>2024</b>, no. 13, 10236–10254.</p>
<p class="ar-ref"><span class="ar-ref-no">[15]</span> Y. Mizuno, <i>Classifying $\tau$-tilting modules over preprojective algebras of Dynkin type</i>, Math. Z. <b>277</b> (2014), 665–690.</p>
<p class="ar-ref"><span class="ar-ref-no">[16]</span> H. Hong, S.-C. Lau, J. Tan, <i>Mirror functor for deformed preprojective algebras</i>, arXiv:2608.05764 (2026).</p>
<p class="ar-ref"><span class="ar-ref-no">[17]</span> M. Auslander, <i>Rational singularities and almost split sequences</i>, Trans. Amer. Math. Soc. <b>293</b> (1986), 511–531（Kleinian 奇点的 CM 模与 $\Pi$）.</p>
<p class="ar-ref"><span class="ar-ref-no">[18]</span> 近期方向：Y. Wu, <i>Higgs categories</i>（2023）；B. Keller（与 M. Liu 合作）关于 Higgs 范畴与 Gorenstein 投射 dg 模的报告（SIMIS, 2025-12）。</p>
</div>
</div>
