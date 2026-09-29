---
title: "Gentle Algebra"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-hge-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-hge-1">1　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-hge-1-1">1.1　gentle 代数的定义</a>
    <a class="ar-toc-l2" href="#ar-hge-1-2">1.2　与特殊双串行、字符串代数的关系</a>
    <a class="ar-toc-l2" href="#ar-hge-1-3">1.3　不可分解模：字符串与带</a>
    <a class="ar-toc-l2" href="#ar-hge-1-4">1.4　曲面剖分 ↔ gentle 代数</a>
    <a class="ar-toc-l2" href="#ar-hge-1-5">1.5　基本同调性质</a>
    <a class="ar-toc-l1" href="#ar-hge-2">2　核心工具与定理</a>
    <a class="ar-toc-l2" href="#ar-hge-2-1">2.1　模范畴的几何模型</a>
    <a class="ar-toc-l2" href="#ar-hge-2-2">2.2　导出范畴的几何模型（OPS）</a>
    <a class="ar-toc-l2" href="#ar-hge-2-3">2.3　与部分包裹 Fukaya 范畴的等价</a>
    <a class="ar-toc-l2" href="#ar-hge-2-4">2.4　AAG 不变量及其不完备性</a>
    <a class="ar-toc-l2" href="#ar-hge-2-5">2.5　完全导出不变量：缠绕数与 Arf 不变量</a>
    <a class="ar-toc-l2" href="#ar-hge-2-6">2.6　silting 对象 = 可容许剖分</a>
    <a class="ar-toc-l2" href="#ar-hge-2-7">2.7　gentle 代数是 Iwanaga–Gorenstein 的</a>
    <a class="ar-toc-l2" href="#ar-hge-2-8">2.8　局部化、recollement 与带锥奇点</a>
    <a class="ar-toc-l1" href="#ar-hge-3">3　主要应用与实例</a>
    <a class="ar-toc-l2" href="#ar-hge-3-1">3.1　曲面丛代数</a>
    <a class="ar-toc-l2" href="#ar-hge-3-2">3.2　同调镜像对称中的"中间人"</a>
    <a class="ar-toc-l2" href="#ar-hge-3-3">3.3　dimer 模型与节点栈曲线</a>
    <a class="ar-toc-l2" href="#ar-hge-3-4">3.4　skew-gentle 代数与 Brauer 图代数</a>
    <a class="ar-toc-l2" href="#ar-hge-3-5">3.5　猜想试验场</a>
    <a class="ar-toc-l2" href="#ar-hge-3-6">3.6　$\tau$-tilting 与支撑 $\tau$-倾斜模的弧分类</a>
    <a class="ar-toc-l1" href="#ar-hge-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l2" href="#ar-hge-4-1">4.1　与字符串代数 / 特殊双串行代数</a>
    <a class="ar-toc-l2" href="#ar-hge-4-2">4.2　与丛理论</a>
    <a class="ar-toc-l2" href="#ar-hge-4-3">4.3　与 silting / $\tau$-tilting</a>
    <a class="ar-toc-l2" href="#ar-hge-4-4">4.4　与 Fukaya 范畴 / HMS</a>
    <a class="ar-toc-l2" href="#ar-hge-4-5">4.5　与几何模型面板的分工</a>
    <a class="ar-toc-l2" href="#ar-hge-4-6">4.6　总表</a>
    <a class="ar-toc-l1" href="#ar-hge-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-hge-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">

<h3 class="ar-subhead" id="ar-hge-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$(Q,R)$</td><td>束缚箭图（bound quiver）：箭图 $Q$ 与允许关系集 $R$；$A=kQ/(R)$</td></tr>
<tr><td>$(S,M,P)$</td><td>带标记曲面：$S$ 有向曲面，$M$ 边界标记点，$P$ 内部标记点（穿孔）</td></tr>
<tr><td>$\Delta$</td><td>$(S,M,P)$ 的<em>可容许剖分</em>（admissible dissection）</td></tr>
<tr><td>$A(\Delta)$</td><td>由剖分 $\Delta$ 决定的（局部）gentle 代数</td></tr>
<tr><td>$\eta(\Delta)$</td><td>剖分所决定的<em>线场</em>（line field），缠绕数与 Arf 不变量的载体</td></tr>
<tr><td>$\mathbf{D}^{b}(A)$</td><td>$A$ 的有界导出范畴；$\mathrm{per}(A)$ 为完美复形范畴</td></tr>
<tr><td>$\mathcal{W}(\Sigma)$</td><td>分级标记曲面的<em>部分包裹</em> Fukaya 范畴</td></tr>
<tr><td>$\varphi_{A}:\mathbb{N}^{2}\to\mathbb{N}$</td><td>Avella-Alaminos–Geiss（AAG）组合导出不变量</td></tr>
</tbody>
</table>
<p>约定：①$k$ 为域（多数几何模型结果在 $k$ 任意时成立，经典结果常假定代数闭）；②"gentle"默认有限维、基本（basic）；③本面板聚焦代数与范畴层面，纯几何模型见"Geometric model"面板。</p>

<h3 class="ar-subhead" id="ar-hge-1">1　概念与定义</h3>

<h4 id="ar-hge-1-1">1.1　gentle 代数的定义</h4>
<p><strong>定义</strong>：有限维代数 $A$ 称为 <strong>gentle</strong>，若 $A\cong kQ/(R)$，其中束缚箭图 $(Q,R)$ 满足：</p>
<ol>
  <li>$R$ 只含长度 $2$ 的路；</li>
  <li>每个顶点至多是两个箭图的起点，也至多是两个箭图的终点；</li>
  <li>对每个箭图 $\alpha:x\to y$，至多有一个 $\beta:y\to z$ 使 $\beta\alpha\notin R$，且至多有一个 $\gamma:z\to x$ 使 $\alpha\gamma\notin R$；</li>
  <li>对每个箭图 $\alpha:x\to y$，至多有一个 $\beta:y\to z$ 使 $\beta\alpha\in R$，且至多有一个 $\gamma:z\to x$ 使 $\alpha\gamma\in R$。</li>
</ol>
<p>直观上：gentle 代数是"温和的"字符串代数——关系的分布使每个顶点处的"分支"至多二选一。它由 Assem–Happel（1981）与 Assem–Skowroński（1987）在研究 $\mathbb{A}_{n}$、$\widetilde{\mathbb{A}}_{n}$ 型迭代倾斜代数时引入。</p>

<h4 id="ar-hge-1-2">1.2　与特殊双串行、字符串代数的关系</h4>
<p>包含关系：<strong>gentle $\subset$ 特殊双串行（special biserial）</strong>；特殊双串行代数 $\supset$ 字符串代数，而 gentle 是字符串代数中满足上述"极小性条件"者。特殊双串行代数的稳定自同态代数必为 gentle（Schröer–Zimmermann 的主定理），这是"gentle 类在导出等价下封闭"的证明来源。</p>

<h4 id="ar-hge-1-3">1.3　不可分解模：字符串与带</h4>
<p><strong>定理 1.3（Butler–Ringel, 1987；字符串代数的经典分类）</strong>：字符串代数的不可分解有限维模恰为<strong>字符串模</strong>（string modules）与<strong>带模</strong>（band modules，带一个不可分解 $k[x,x^{-1}]$-模的参数）。gentle 代数亦然。导出范畴层面的不可分解对象由 Bekkert–Merklen（2003）用 Bondarenko 的矩阵问题分类（即"同伦字符串与同伦带"）。因此 gentle 代数是<em>驯顺</em>（tame）且<em>导出驯顺</em>（derived tame）的。</p>

<h4 id="ar-hge-1-4">1.4　曲面剖分 ↔ gentle 代数</h4>
<p><strong>基本对应</strong>：gentle 代数与<strong>带标记有向曲面的可容许剖分</strong> $(S,M,P,\Delta)$ 之间存在双射（差一个同构）：</p>
<ul>
  <li>$\Delta$ 的弧 $\leftrightarrow$ $Q$ 的顶点；</li>
  <li>弧之间的角（端点相邻关系）$\leftrightarrow$ $Q$ 的箭图；</li>
  <li>被 $\Delta$ 切出的"内部多边形"（非单/双角者）$\leftrightarrow$ 长度 $2$ 的零关系。</li>
</ul>
<p>这一对应把 gentle 代数的表示论问题翻译为曲面上的曲线几何，是近十年该领域全部突破的支点。</p>

<h4 id="ar-hge-1-5">1.5　基本同调性质</h4>
<ul>
  <li><strong>导出等价封闭</strong>（Schröer–Zimmermann, Math. Z. 244 (2003), 515–530）：与 gentle 代数导出等价的代数仍是 gentle。此类"导出等价封闭的自然代数类"极为稀少。</li>
  <li><strong>Iwanaga–Gorenstein</strong>（Geiss–Reiten, 2005）：gentle 代数均为 Iwanaga–Gorenstein（入射模的投射维数、投射模的入射维数均有界）。</li>
  <li><strong>驯顺性与导出驯顺性</strong>：gentle 代数 tame 且 derived tame。</li>
  <li><strong>整体维数</strong>：可任意取到；整体维数有限者对应无穿孔情形的部分子类。</li>
</ul>

<h3 class="ar-subhead" id="ar-hge-2">2　核心工具与定理</h3>

<h4 id="ar-hge-2-1">2.1　模范畴的几何模型</h4>
<p><strong>定理 2.1</strong>：设 $A=A(\Delta)$，则 $\mathrm{mod}\,A$ 的不可分解模由 $(S,M,P)$ 上<em>容许弧的同伦类</em>与<em>带参数的闭曲线</em>分类，不可约态射与 AR 序列由弧的端点沿边界"移动"给出。Baur–Coelho Simões 把这一模型推广到<strong>字符串代数</strong>（arXiv:2403.07810, 2024），用"带标签的铺砌曲面"（labelled tiling）处理，并据此给出 support $\tau$-tilting 模的弧分类。</p>

<h4 id="ar-hge-2-2">2.2　导出范畴的几何模型（OPS）</h4>
<p><strong>定理 2.2（Opper–Plamondon–Schroll, arXiv:1801.09659）</strong>：对<em>分级</em> gentle 代数 $A$，其 ribbon 图产生带边界与边界标记点的有向曲面，使得</p>
<ul>
  <li><strong>对象</strong>：连接标记点的曲线的同伦类、闭曲线的同伦类 $\leftrightarrow$ $\mathbf{D}^{b}(A)$（严格地：由单模生成的三角范畴、$\mathrm{per}(A)$）中不可分解对象的同构类；</li>
  <li><strong>态射</strong>：曲线的（分级）交叉 $\leftrightarrow$ 态射空间的一组基；</li>
  <li><strong>映射锥</strong>：解交叉（resolving crossings） $\leftrightarrow$ 取映射锥；</li>
  <li><strong>AR 平移</strong>：$\tau$ $\leftrightarrow$ 端点沿边界旋转。</li>
</ul>
<p>此外该曲面编码了 AAG 不变量（见 2.4）。</p>

<h4 id="ar-hge-2-3">2.3　与部分包裹 Fukaya 范畴的等价</h4>
<p><strong>定理 2.3（Haiden–Katzarkov–Kontsevich；Lekili–Polishchuk）</strong>：同调光滑（homologically smooth）的分级 gentle 代数 $A$ 满足</p>
$$\mathbf{D}^{b}(A)\;\simeq\;\mathcal{W}(\Sigma),$$
<p>其中 $\Sigma$ 为相应的分级标记曲面，$\mathcal{W}$ 为其部分包裹 Fukaya 范畴。这把 gentle 代数置于同调镜像对称的 A 侧与 B 侧之间，是导出分类问题的关键结构性输入。</p>

<h4 id="ar-hge-2-4">2.4　AAG 不变量及其不完备性</h4>
<p><strong>定义</strong>：Avella-Alaminos–Geiss（J. Pure Appl. Algebra <b>212</b> (2008), 228–243）为每个 gentle 代数 $A$ 构造函数 $\varphi_{A}:\mathbb{N}^{2}\to\mathbb{N}$：它由 $\mathbf{D}^{b}(A)$（等价地：重复代数的稳定范畴）中 AR 箭图分支上平移函子的作用统计给出，但完全由 $(Q,R)$ 组合地算得。若 $A,B$ 导出等价则 $\varphi_{A}=\varphi_{B}$。</p>
<p><strong>不完备性</strong>：存在同 AAG 不变量相同却不导出等价的 gentle 代数（Kalck 的例子等）。故 $\varphi_{A}$ 不是完全不变量，完善它需要额外数据。</p>

<h4 id="ar-hge-2-5">2.5　完全导出不变量：缠绕数与 Arf 不变量</h4>
<p><strong>定理 2.5（Amiot–Plamondon–Schroll, Selecta Math. (N.S.) <b>29</b> (2023), no. 2, Paper No. 30）</strong>：设 $A,A'$ 分别对应剖分曲面 $(S,M,P,\Delta)$、$(S',M',P',\Delta')$。则</p>
$$A\ \text{与}\ A'\ \text{导出等价}\ \iff\ \exists\ \text{保向同胚}\ \Phi:(S,M,P)\to(S',M',P')\ \text{使}\ \Phi^{\ast}\bigl(\eta(\Delta)\bigr)\ \text{与}\ \eta(\Delta')\ \text{同伦}.$$
<p>即：导出等价类 = 线场 $\eta(\Delta)$ 的同伦类（模曲面同胚）。进一步用<strong>缠绕数</strong>（winding numbers）与某个 $\mathbb{Z}_{2}$ 上二次型的 <strong>Arf 不变量</strong>把该条件翻译为<em>数值</em>完全不变量。</p>
<p>分级（graded）情形的完全不变量由 Opper 与 Lekili–Polishchuk 的工作给出。<strong>结论</strong>：gentle 代数的<em>导出分类问题已解决</em>（🟢，2023）；未加细的 AAG 不变量<em>不</em>完备（🔴，已有反例）。</p>

<h4 id="ar-hge-2-6">2.6　silting 对象 = 可容许剖分</h4>
<p><strong>定理 2.6（APS, 同上）</strong>：$A(\Delta)$ 的 silting 对象恰由 $(S,M,P)$ 的<strong>可容许剖分</strong>给出。推论：silting 突变 ↔ 分级弧的替换（若干情形下即四边形中对角线的翻转）。这把 silting 理论的组合学完全几何化，也是定理 2.5 证明的技术核心。</p>

<h4 id="ar-hge-2-7">2.7　gentle 代数是 Iwanaga–Gorenstein 的</h4>
<p><strong>定理 2.7（Geiss–Reiten, 2005）</strong>：gentle 代数都是 Iwanaga–Gorenstein。APS 用几何模型给出新证明：不可分解入射模 $I$ 对应某条弧 $\gamma$，Nakayama 函子把 $\gamma$ 变为两端沿边界移动的有限弧，故 $I$ 的投射维数有限。由此 $\mathbf{D}_{\mathrm{sing}}(A)$ 可经由 Gorenstein 投射模的稳定范畴研究。</p>

<h4 id="ar-hge-2-8">2.8　局部化、recollement 与带锥奇点</h4>
<p><strong>定理 2.8（Bodin, arXiv:2407.04374, 2025）</strong>：对 $\mathrm{per}(A)$ 中由<em>球面带对象</em>（对应简单闭曲线）生成的子范畴作局部化，得到一个 recollement，其中间项为某个新分级代数的导出范畴；这类代数被称为<strong>分级捏合 gentle 代数</strong>（graded pinched gentle algebras），并与带<em>锥奇点</em>的分级标记曲面双射；几何上局部化 = 收缩该闭曲线。</p>

<h3 class="ar-subhead" id="ar-hge-3">3　主要应用与实例</h3>

<h4 id="ar-hge-3-1">3.1　曲面丛代数</h4>
<p>Fomin–Shapiro–Thurston、Fock–Goncharov 把<em>曲面丛代数</em>与三角剖分联系起来，而 gentle 代数正是"三角剖分/剖分"的代数侧影子（弧 ↔ 顶点、角 ↔ 箭图）。这解释了为何 gentle 代数同时出现在丛代数、Fukaya 范畴与表示论三条线索中。</p>

<h4 id="ar-hge-3-2">3.2　同调镜像对称中的"中间人"</h4>
<p>gentle 代数是部分包裹 Fukaya 范畴的<em>形式生成元</em>的自同态代数（HKK17），反过来任意分级 gentle 代数都来自某个分级标记曲面（LP、OPS、BCS 等）。因此它们充当 HMS 中 A 侧（辛几何）与 B 侧（代数几何 / 节点栈曲线上的凝聚层，Lekili–Polishchuk）之间的可算中介。</p>

<h4 id="ar-hge-3-3">3.3　dimer 模型与节点栈曲线</h4>
<p>gentle 代数出现在 dimer 模型（Bocklandt 等）与<em>节点栈曲线</em>（nodal stacky curves）上凝聚层导出范畴的研究中：后者与部分 wrapped Fukaya 范畴对应，其 tilting 丛的自同态代数往往为 gentle。这提供了与代数几何、理论物理的接口。</p>

<h4 id="ar-hge-3-4">3.4　skew-gentle 代数与 Brauer 图代数</h4>
<p><strong>skew-gentle 代数</strong>（Geiß–de la Peña）在特征 $\neq2$ 时是 gentle 代数对二阶循环群的斜群代数，其不可分解对象由 Bekkert–Marcos–Merklen 分类，并有相应的几何模型。Brauer 图代数（= 对称特殊多重串行代数）则与 decorated hypergraph 对应，虽非 gentle，但共享"曲面/图 + 曲线"的方法论。</p>

<h4 id="ar-hge-3-5">3.5　猜想试验场</h4>
<p>由于不可分解对象与态射都能显式写出，gentle 代数是检验同调猜想的首选试验场：Brauer–Thrall 型问题、导出离散性（gentle 且导出离散者已被分类）、Gorenstein 对称性、silting/$\tau$-tilting 的有限性、以及"曲面组合学能否构造反例"（Schroll 2025 海德堡报告即以构造反例为主题之一）。</p>

<h4 id="ar-hge-3-6">3.6　$\tau$-tilting 与支撑 $\tau$-倾斜模的弧分类</h4>
<p>support $\tau$-tilting 模、two-term silting 复形与曲面上的<strong>弧的相容组</strong>（triangulations / dissections）一一对应；对字符串代数的版本见 Baur–Coelho Simões (arXiv:2403.07810)。这使 $\tau$-tilting 有限性、$g$-向量扇等问题在 gentle 情形获得组合判据。</p>

<h3 class="ar-subhead" id="ar-hge-4">4　与邻近概念的关系</h3>

<h4 id="ar-hge-4-1">4.1　与字符串代数 / 特殊双串行代数</h4>
<p>包含链：gentle $\subsetneq$ 字符串 $\subsetneq$ 特殊双串行。字符串与带模的分类对所有字符串代数成立；而"导出等价封闭"与"Iwanaga–Gorenstein"是 gentle 特有的强性质。</p>

<h4 id="ar-hge-4-2">4.2　与丛理论</h4>
<p>丛代数来自曲面三角剖分，gentle 代数来自剖分；两者的突变/翻转操作在几何模型下统一（silting 突变 ↔ 翻转）。详见"Cluster Theory"面板。</p>

<h4 id="ar-hge-4-3">4.3　与 silting / $\tau$-tilting</h4>
<p>silting 对象 ↔ 可容许剖分（2.6）；two-term silting ↔ support $\tau$-tilting ↔ 三角剖分/铺砌。gentle 情形是这套对应最完整的实例。</p>

<h4 id="ar-hge-4-4">4.4　与 Fukaya 范畴 / HMS</h4>
<p>$\mathbf{D}^{b}(A)\simeq\mathcal{W}(\Sigma)$（同调光滑情形）把 gentle 代数的导出不变量翻译为曲面的线场同伦类与 Arf 不变量，是 2.5 的几何根源。</p>

<h4 id="ar-hge-4-5">4.5　与几何模型面板的分工</h4>
<p>本面板以"代数类"为中心；"Geometric model"面板以"方法"为中心，覆盖更多代数类（字符串、skew-gentle、丛范畴、Nakayama 等）的曲面/组合模型。</p>

<h4 id="ar-hge-4-6">4.6　总表</h4>
<table>
<thead><tr><th>性质 / 问题</th><th>结论</th><th>主要依据</th></tr></thead>
<tbody>
<tr><td>表示型</td><td>tame（字符串 + 带）</td><td>Butler–Ringel 1987</td></tr>
<tr><td>导出型</td><td>derived tame；不可分解对象可分类</td><td>Bekkert–Merklen 2003</td></tr>
<tr><td>导出等价下封闭</td><td>是 🟢</td><td>Schröer–Zimmermann 2003</td></tr>
<tr><td>Iwanaga–Gorenstein</td><td>是 🟢</td><td>Geiss–Reiten 2005；APS 几何新证</td></tr>
<tr><td>AAG 不变量完备性</td><td>否 🔴（有反例）</td><td>AAG 2008；反例见 Kalck</td></tr>
<tr><td>导出分类（完全不变量）</td><td>已解决 🟢</td><td>APS, Selecta Math 29 (2023) 30</td></tr>
<tr><td>silting 对象的刻画</td><td>= 可容许剖分 🟢</td><td>APS 2023</td></tr>
<tr><td>与 Fukaya 范畴的关系</td><td>同调光滑时 $\mathbf{D}^{b}(A)\simeq\mathcal{W}(\Sigma)$</td><td>HKK 2017；Lekili–Polishchuk</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-hge-5">5　常见混淆与易错点</h3>
<ul>
  <li><strong>"AAG 不变量完备"是错的</strong>：它不完备；完备的是 APS 用缠绕数 + Arf 不变量加细后的不变量。</li>
  <li><strong>gentle $\neq$ 特殊双串行</strong>：前者是后者的极小性子类；"稳定自同态代数是 gentle"这一结论不能反向套用。</li>
  <li><strong>分级与不分级不同</strong>：完全导出不变量的表述在分级情形需额外数据（分级弧的度数/线场的提升）。</li>
  <li><strong>$\mathbf{D}^{b}(A)$ 与 $\mathrm{per}(A)$</strong>：OPS 的几何模型直接给出 $\mathrm{per}$（及由单模生成的三角范畴）；$\mathbf{D}^{b}$ 的有限维上同调版本需额外结果（Booth–Goodbody–Opper）。</li>
  <li><strong>文献年份</strong>：APS 预印本 2019（arXiv:1904.02555），正式发表 2023；引用时勿混。</li>
  <li><strong>Iwanaga–Gorenstein 不等于整体维数有限</strong>：gentle 代数可具无限整体维数。</li>
</ul>

<h3 class="ar-subhead" id="ar-hge-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> I. Assem, D. Happel, <i>Generalized tilted algebras of type $\mathbb{A}_{n}$</i>, Comm. Algebra <b>9</b> (1981), 2101–2125.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> I. Assem, A. Skowroński, <i>Iterated tilted algebras of type $\widetilde{\mathbb{A}}_{n}$</i>, Math. Z. <b>195</b> (1987), 269–290.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> M. C. R. Butler, C. M. Ringel, <i>Auslander–Reiten sequences with few middle terms and applications to string algebras</i>, Comm. Algebra <b>15</b> (1987), 145–179.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> J. Schröer, A. Zimmermann, <i>Stable endomorphism algebras of modules over special biserial algebras</i>, Math. Z. <b>244</b> (2003), 515–530.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> V. Bekkert, H. A. Merklen, <i>Indecomposables in derived categories of gentle algebras</i>, Algebr. Represent. Theory <b>6</b> (2003), 285–302.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> C. Geiss, I. Reiten, <i>Gentle algebras are Gorenstein</i>, in: Representations of Algebras and Related Topics, Fields Inst. Commun. <b>45</b> (2005), 129–133.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> D. Avella-Alaminos, C. Geiss, <i>Combinatorial derived invariants for gentle algebras</i>, J. Pure Appl. Algebra <b>212</b> (2008), 228–243.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> F. Haiden, L. Katzarkov, M. Kontsevich, <i>Flat surfaces and stability structures</i>, Publ. Math. IHÉS <b>126</b> (2017), 247–318.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> S. Opper, P.-G. Plamondon, S. Schroll, <i>A geometric model for the derived category of gentle algebras</i>, arXiv:1801.09659（v7, 2025）.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> C. Amiot, P.-G. Plamondon, S. Schroll, <i>A complete derived invariant for gentle algebras via winding numbers and Arf invariants</i>, arXiv:1904.02555; Selecta Math. (N.S.) <b>29</b> (2023), Paper No. 30.</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> Y. Lekili, A. Polishchuk, <i>Derived equivalences of gentle algebras via Fukaya categories</i>（预印本 2019；发表版见 <i>J. Topol.</i> / 数学期刊合集，以 arXiv 版本为准）.</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> S. Opper, <i>On auto-equivalences and complete derived invariants of gentle algebras</i>（2019，分级情形的完全不变量）.</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> K. Baur, R. Coelho Simões, <i>A geometric model for the module category of a string algebra</i>, arXiv:2403.07810 (2024).</p>
<p class="ar-ref"><span class="ar-ref-no">[14]</span> P. Bodin, <i>Recollements for graded gentle algebras from spherical band objects</i>, arXiv:2407.04374 (2025).</p>
<p class="ar-ref"><span class="ar-ref-no">[15]</span> V. Bekkert, E. N. Marcos, H. A. Merklen, <i>Indecomposables in derived categories of skewed-gentle algebras</i>, Comm. Algebra <b>31</b> (2003), 2615–2654.</p>
</div>
</div>
