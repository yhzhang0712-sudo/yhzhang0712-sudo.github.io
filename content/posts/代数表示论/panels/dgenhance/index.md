---
title: "DG enhancement"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-dge-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-dge-1">1　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-dge-1-1">1.1　什么是 dg 增强</a>
    <a class="ar-toc-l2" href="#ar-dge-1-2">1.2　唯一增强与强唯一增强</a>
    <a class="ar-toc-l2" href="#ar-dge-1-3">1.3　增强的其他风味</a>
    <a class="ar-toc-l2" href="#ar-dge-1-4">1.4　增强带来什么</a>
    <a class="ar-toc-l2" href="#ar-dge-1-5">1.5　并非所有三角范畴都能增强</a>
    <a class="ar-toc-l1" href="#ar-dge-2">2　核心工具与定理</a>
    <a class="ar-toc-l2" href="#ar-dge-2-1">2.1　前三角 dg 范畴（Bondal–Kapranov）</a>
    <a class="ar-toc-l2" href="#ar-dge-2-2">2.2　Bondal–Larsen–Lunts 的两个猜想</a>
    <a class="ar-toc-l2" href="#ar-dge-2-3">2.3　Lunts–Orlov 定理</a>
    <a class="ar-toc-l2" href="#ar-dge-2-4">2.4　Canonaco–Stellari：良生成理论</a>
    <a class="ar-toc-l2" href="#ar-dge-2-5">2.5　Antieau：prestable $\infty$-范畴</a>
    <a class="ar-toc-l2" href="#ar-dge-2-6">2.6　CNS 定理：任意 Abel 范畴</a>
    <a class="ar-toc-l2" href="#ar-dge-2-7">2.7　强唯一性与几何推论</a>
    <a class="ar-toc-l2" href="#ar-dge-2-8">2.8　度量路线与可逼近范畴</a>
    <a class="ar-toc-l2" href="#ar-dge-2-9">2.9　唯一性的反例与边界</a>
    <a class="ar-toc-l1" href="#ar-dge-3">3　主要应用与实例</a>
    <a class="ar-toc-l2" href="#ar-dge-3-1">3.1　代数几何</a>
    <a class="ar-toc-l2" href="#ar-dge-3-2">3.2　有限维代数与表示论</a>
    <a class="ar-toc-l2" href="#ar-dge-3-3">3.3　Kuznetsov 分量与范畴 Torelli</a>
    <a class="ar-toc-l2" href="#ar-dge-3-4">3.4　稳定条件</a>
    <a class="ar-toc-l2" href="#ar-dge-3-5">3.5　形变论与 Hochschild 理论</a>
    <a class="ar-toc-l2" href="#ar-dge-3-6">3.6　反例与开放问题</a>
    <a class="ar-toc-l1" href="#ar-dge-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l2" href="#ar-dge-4-1">4.1　导出 Morita 理论</a>
    <a class="ar-toc-l2" href="#ar-dge-4-2">4.2　标准导出等价</a>
    <a class="ar-toc-l2" href="#ar-dge-4-3">4.3　Fourier–Mukai 与 (C2)</a>
    <a class="ar-toc-l2" href="#ar-dge-4-4">4.4　$\infty$-范畴与模型范畴</a>
    <a class="ar-toc-l2" href="#ar-dge-4-5">4.5　可逼近三角范畴</a>
    <a class="ar-toc-l2" href="#ar-dge-4-6">4.6　总表</a>
    <a class="ar-toc-l1" href="#ar-dge-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-dge-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">

<h3 class="ar-subhead" id="ar-dge-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$k$，$\mathscr{T}$</td><td>固定域；$k$-线性三角范畴（默认 Hom-有限或至少良生成）</td></tr>
<tr><td>$\mathscr{A}$</td><td>dg 范畴；$H^{0}(\mathscr{A})$ 为同伦范畴，$H^{\ast}\mathrm{Hom}_{\mathscr{A}}(X,Y)$ 为 dg 态射复形的上同调</td></tr>
<tr><td>$\mathrm{dgcat}_{k}$，$\mathbf{Hqe}$</td><td>$k$ 上小 dg 范畴的范畴；对拟等价作局部化得到的同伦范畴（Toën、Tabuada）</td></tr>
<tr><td>$\mathrm{pretr}(\mathscr{A})$</td><td>$\mathscr{A}$ 的前三角包（锥、平移闭包）；$\mathscr{A}$ 前三角指 $\mathscr{A}\to\mathrm{pretr}(\mathscr{A})$ 为拟等价</td></tr>
<tr><td>$\mathbf{D}(\mathscr{G})$，$\mathbf{D}^{b}(\mathscr{A})$</td><td>Grothendieck Abel 范畴 / 小 Abel 范畴的（有界）导出范畴</td></tr>
<tr><td>$\mathbf{D}_{\mathrm{qc}}(X)$，$\mathbf{Perf}(X)$</td><td>拟凝聚上同调复形范畴；完美复形范畴</td></tr>
<tr><td>$\check{\mathbf{D}}(\mathscr{G})$，$\widehat{\mathbf{D}}(\mathscr{G})$</td><td>不分离（unseparated）导出范畴 $= \mathbf{K}(\mathrm{Inj}\,\mathscr{G})$；左完备（left completed）导出范畴</td></tr>
<tr><td>"$?$" 装饰</td><td>$?\in\{\varnothing, +, -, b\}$，指无界 / 上有界 / 下有界 / 有界</td></tr>
</tbody>
</table>
<p>约定：①"增强"默认指 dg 增强；②"$\mathscr{T}$ 有唯一增强"指在 $\mathbf{Hqe}$ 中同构意义下唯一（定义 1.2）；③所有范畴均假定在所引定理所需的小性/生成条件下。</p>

<h3 class="ar-subhead" id="ar-dge-1">1　概念与定义</h3>

<h4 id="ar-dge-1-1">1.1　什么是 dg 增强</h4>
<p><strong>定义</strong>：三角范畴 $\mathscr{T}$ 的一个 <strong>dg 增强</strong>是一个前三角 dg 范畴 $\mathscr{A}$，连同三角等价</p>
$$H^{0}(\mathscr{A})\;\xrightarrow{\ \sim\ }\;\mathscr{T}.$$
<p>换言之：把 $\mathscr{T}$ 实现为某个 dg 范畴的同伦范畴。两个增强 $(\mathscr{A},\varphi)$、$(\mathscr{A}',\varphi')$ 视作<em>同一个</em>，若存在 $\mathbf{Hqe}$ 中的同构 $\mathscr{A}\to\mathscr{A}'$ 与 $\varphi,\varphi'$ 相容。</p>
<p><strong>为什么需要它</strong>：三角范畴的公理只记录"存在"锥而不记录<em>如何</em>取锥——映射锥在三角范畴中<em>不是函子的</em>。dg（或 $A_{\infty}$、$\infty$-范畴）层面恢复了这一函子性，从而使 Hochschild 同调、代数 K-理论、形变论、Fourier–Mukai 核等"高阶"结构得以定义。</p>

<h4 id="ar-dge-1-2">1.2　唯一增强与强唯一增强</h4>
<p><strong>定义（唯一增强）</strong>：$\mathscr{T}$ 有<strong>唯一增强</strong>，若其任意两个增强在 $\mathbf{Hqe}$ 中同构。</p>
<p><strong>定义（强唯一增强）</strong>：$\mathscr{T}$ 有<strong>强唯一增强</strong>，若它唯一增强，且任意三角等价 $F:\mathscr{T}\to\mathscr{T}'$（$\mathscr{T}'$ 亦唯一增强）都可提升为 $\mathbf{Hqe}$ 中的同构，即存在 dg 拟等价 $\widetilde{F}:\mathscr{A}\to\mathscr{A}'$ 使 $H^{0}(\widetilde{F})=F$。</p>
<p>两者差别是本质的：唯一性只谈<em>对象</em>，强唯一性还要求<em>态射</em>可提升。Bondal–Larsen–Lunts 把这两层分别记为 (C1) 与 (C2)（见 2.2）。</p>

<h4 id="ar-dge-1-3">1.3　增强的其他风味</h4>
<ul>
  <li><strong>dg 增强 / $A_{\infty}$ 增强</strong>：在域上二者等价——Canonaco–Ornaghi–Stellari 证明 $\mathrm{dgcat}$、上同调单位 $A_{\infty}$ 范畴、严格单位 $A_{\infty}$ 范畴三者的拟等价局部化两两等价，故"是否存在 / 是否唯一"不随风味改变。</li>
  <li><strong>稳定 $\infty$-范畴增强</strong>：Lurie 框架下的增强。一般而言稳定 $\infty$-增强比 dg 增强<em>更多</em>（Antieau），故对 $\infty$-增强证明唯一性在某种意义下更强。</li>
  <li><strong>拓扑（谱）增强</strong>：Schwede–Shipley 的 Morita 理论表明：紧生成拓扑三角范畴 $\simeq$ 某个谱范畴的导出范畴，是代数情形的对偶物。</li>
  <li><strong>模型范畴</strong>：Quillen 模型结构（Dugger–Shipley、Tabuada）提供"增强"的另一种严格化载体。</li>
</ul>

<h4 id="ar-dge-1-4">1.4　增强带来什么</h4>
<ul>
  <li>映射锥的<strong>函子性</strong>与高阶同伦相干性（$A_{\infty}$ 结构）；</li>
  <li><strong>Hochschild / 循环同调与 K-理论</strong>：Keller、Tabuada 的不变量在 dg 层面定义，且为拟等价不变量；</li>
  <li><strong>Fourier–Mukai 与核</strong>：正合函子 = $\mathbf{Hqe}$ 中的态射（在几何情形），Orlov 表示性定理的表述依赖增强；</li>
  <li><strong>形变论</strong>：$\mathrm{HH}^{2}$ 控制 dg 范畴的形变，Keller 的 deformed Calabi–Yau 完备化即在此层面操作；</li>
  <li><strong>稳定条件</strong>：Bridgeland 稳定条件空间及其$\,$"$\mathrm{Stab}$"函子性需 dg 层面数据；</li>
  <li><strong>非交换动机、Kuznetsov 分量、范畴 Torelli</strong>：都以唯一增强为技术前提。</li>
</ul>

<h4 id="ar-dge-1-5">1.5　并非所有三角范畴都能增强</h4>
<p>增强<em>不总是存在</em>。已知反例分两代：</p>
<ul>
  <li><strong>Muro–Schwede–Strickland</strong>（Invent. Math. 170 (2007), 231–241）：拓扑起源的例子，不线性于域，且依赖特征的特殊算术（$2\neq0$ 但 $4=0$）。</li>
  <li><strong>Rizzardo–Van den Bergh</strong>（Ann. of Math. 191 (2020), 393–437）：给出<em>特征零域上 $k$-线性</em>三角范畴不接受任何 $A_{\infty}$（等价于 dg）增强的第一个例子。取 $n\ge14$、$R=k[x_{1},\dots,x_{n}]$、$K=\mathrm{Frac}(R)$，由 $\eta\in T^{n}_{R/k}$ 非零构造 $k[\varepsilon]$-线性 $A_{\infty}$-形变 $R_{\eta}$，则存在以 $\langle\mathbf{D}(K),\,\mathbf{D}(R_{\eta})\rangle$ 为半正交分解的三角范畴，它无 $A_{\infty}$-增强。该文同时肯定回答了 Canonaco–Stellari 综述中的问题 3.8。</li>
</ul>

<h3 class="ar-subhead" id="ar-dge-2">2　核心工具与定理</h3>

<h4 id="ar-dge-2-1">2.1　前三角 dg 范畴（Bondal–Kapranov）</h4>
<p><strong>定理 2.1</strong>：Bondal–Kapranov（1991）引入<em>前三角 dg 范畴</em>：若 $\mathscr{A}$ 前三角，则 $H^{0}(\mathscr{A})$ 带有典范三角结构。这是"dg 范畴 $\Rightarrow$ 三角范畴"的方向；反方向（给三角范畴找 dg 范畴）即增强问题。</p>

<h4 id="ar-dge-2-2">2.2　Bondal–Larsen–Lunts 的两个猜想</h4>
<p>Bondal–Larsen–Lunts（2004，关于 pretriangulated 范畴的 Grothendieck 环）提出：</p>
<ul>
  <li><strong>(C1)</strong>：设 $X$ 为拟射影概形，则 $\mathbf{D}^{b}(\mathrm{coh}\,X)$ 与 $\mathbf{Perf}(X)$ 有唯一 dg 增强；</li>
  <li><strong>(C2)</strong>：设 $X_{1},X_{2}$ 光滑射影，则 $\mathbf{D}^{b}(\mathrm{coh}\,X_{1})\to\mathbf{D}^{b}(\mathrm{coh}\,X_{2})$ 的<em>每个</em>正合函子都提升为 $\mathbf{Hqe}$ 中的态射。</li>
</ul>
<p>(C1) 已被一系列工作逐步证实（2.3–2.6），并在极大一般性上成立；(C2) <em>已被否证</em>：Rizzardo–Van den Bergh–Neeman（Invent. Math. 216 (2019), 927–1004）给出光滑射影簇之间不可由 Fourier–Mukai 核表示的正合函子（Orlov 表示性定理的"忠实满"假设不可去），Raedschelders–Rizzardo–Van den Bergh（Compos. Math. 158 (2022), 1254–1267）进一步说明这不是病态现象。</p>

<h4 id="ar-dge-2-3">2.3　Lunts–Orlov 定理</h4>
<p><strong>定理 2.3（Lunts–Orlov, 2010）</strong>：设 $\mathscr{G}$ 为 Grothendieck Abel 范畴且带有一组<em>紧生成元的小集</em>，则 $\mathbf{D}(\mathscr{G})$ 有唯一 dg 增强。推论：若 $X$ 拟紧分离且有足够局部自由层，则 $\mathbf{D}(\mathrm{Qcoh}\,X)$ 唯一增强；若 $X$ 拟射影，则 $\mathbf{D}^{b}(\mathrm{coh}\,X)$ 与 $\mathbf{Perf}(X)$ 唯一增强。</p>

<h4 id="ar-dge-2-4">2.4　Canonaco–Stellari：良生成理论</h4>
<p><strong>定理 2.4（Canonaco–Stellari, 2018）</strong>：对<em>任意</em> Grothendieck Abel 范畴 $\mathscr{G}$（不要求有紧生成元小集），$\mathbf{D}(\mathscr{G})$ 有唯一 dg 增强。工具是 Neeman 的<em>良生成</em>（well generated）三角范畴理论。推论：$\mathbf{D}(\mathrm{Qcoh}\,X)$ 对任意概形、任意代数栈唯一增强。</p>

<h4 id="ar-dge-2-5">2.5　Antieau：prestable $\infty$-范畴</h4>
<p><strong>定理 2.5（Antieau, 2018；arXiv:1812.01526）</strong>：用 Lurie 的 prestable $\infty$-范畴给出概念性新证明并强化前述结果：对<em>小</em> Abel 范畴 $\mathscr{A}$，$\mathbf{D}^{?}(\mathscr{A})$（$?=b,+,-,\varnothing$）均有唯一增强；对局部凝聚的 Grothendieck 范畴，不分离导出范畴 $\check{\mathbf{D}}(\mathscr{G})$ 也唯一增强。文中亦给出大量拟凝聚层、几乎模、局部上同调的例子。</p>

<h4 id="ar-dge-2-6">2.6　CNS 定理：任意 Abel 范畴</h4>
<p><strong>定理 2.6（Canonaco–Neeman–Stellari, 2021；Forum Math. Sigma 10 (2022), Paper No. e92, 65 pp.）</strong>：</p>
<ol>
  <li>设 $\mathscr{A}$ 为<em>任意</em> Abel 范畴，则 $\mathbf{D}^{?}(\mathscr{A})$（$?=\varnothing,+,-,b$）<strong>全部</strong>有唯一 dg 增强；</li>
  <li>若 $\mathscr{A}$ 为 Grothendieck Abel 范畴，则 $\check{\mathbf{D}}(\mathscr{A})$ 与 $\widehat{\mathbf{D}}(\mathscr{A})$（不分离与左完备）亦有唯一 dg 增强；</li>
  <li>若 $X$ 拟紧拟分离，则 $\mathbf{D}_{\mathrm{qc}}(X)$ 与 $\mathbf{Perf}(X)$ 有唯一 dg 增强。</li>
</ol>
<p>其中 (1) 对 $?=b$ 的部分解决了此前长期公开的问题；(2) 中 $\widehat{\mathbf{D}}$ 的情形曾由 Antieau 列为公开问题（Question 8.1）。该文的特点是完全不使用 $\infty$-范畴，把论证拉回三角/dg 范畴的语言。</p>

<h4 id="ar-dge-2-7">2.7　强唯一性与几何推论</h4>
<p>CNS 的构造同时给出<strong>强唯一性</strong>：对几何范畴，任意三角等价都能提升到 dg 层面（配合 Canonaco–Neeman–Stellari 的几何唯一性结果 arXiv:2101.04404）。典型应用：</p>
<ul>
  <li><strong>Kuznetsov 分量</strong>（cubic fourfold、Gushel–Mukai 簇、四次二重立体）：由"可容许子范畴 = 某个 Abel 范畴的有界导出范畴"的判别准则，得到强唯一增强，并推出形如 $\mathbf{D}^{b}(\mathrm{coh}\,X_{1})\to\mathbf{Ku}(X_{2})$ 的等价为 Fourier–Mukai 型（arXiv:2203.13864），印证 Kuznetsov 猜想；</li>
  <li><strong>装饰无关性</strong>：推广 Rickard 的经典结果——若左凝聚环 $R,S$ 的某一种装饰的导出范畴三角等价，则全部装饰都等价；最新版本适用于拟紧拟分离概形及带支撑条件的相对版本（arXiv:2402.04605）。</li>
</ul>

<h4 id="ar-dge-2-8">2.8　度量路线与可逼近范畴</h4>
<p>Neeman 自 2018 年起发展的<strong>可逼近三角范畴</strong>与<em>三角范畴上的度量</em>理论给出一条全新的唯一性路线：可逼近性使 $\mathscr{T}^{c}$、$\mathscr{T}^{b}_{c}$ 等子范畴成为<em>内在</em>的（不依赖增强），从而把 $H^{0}$ 层的等价提升为增强层的同构。这一思路在 Canonaco–Neeman–Stellari 的"$\mathscr{T}^{c}$ 与 $\mathscr{T}^{b}_{c}$ 互相决定"系列论文（2018）、"弱可逼近范畴的子范畴过渡"（arXiv:2402.04605）与"度量与增强"（arXiv:2607.12865）中逐步展开，并再次推出/推广 Rickard 型定理。</p>

<h4 id="ar-dge-2-9">2.9　唯一性的反例与边界</h4>
<ul>
  <li><strong>增强存在但不唯一</strong>：Rizzardo–Van den Bergh，<em>A note on non-unique enhancements</em>（Proc. AMS 147 (2019), 451–453）——域上三角范畴增强不唯一的第一个例子。故"唯一性"是实质性假设，而非常态。</li>
  <li><strong>一般 dg 代数</strong>：对 dg 代数 $A$，$\mathbf{D}(A)$ 的唯一增强问题在一般情形仍依赖可逼近性等额外输入；Neeman 的公开问题表中列为待解问题之一。</li>
  <li><strong>左完备导出范畴</strong>：$\widehat{\mathbf{D}}(\mathscr{G})$ 没有纯三角范畴的内在刻画，其唯一性只能靠 CNS 型定理获得。</li>
</ul>

<h3 class="ar-subhead" id="ar-dge-3">3　主要应用与实例</h3>

<h4 id="ar-dge-3-1">3.1　代数几何</h4>
<p>$X$ 拟射影 $\Rightarrow$ $\mathbf{D}^{b}(\mathrm{coh}\,X)$、$\mathbf{Perf}(X)$ 唯一增强（Lunts–Orlov）；$X$ Noetherian 且有足够局部自由层时同样成立（Canonaco–Stellari 的改进）；$X$ 任意概形或代数栈 $\Rightarrow$ $\mathbf{D}(\mathrm{Qcoh}\,X)$ 唯一增强；$X$ 拟紧拟分离 $\Rightarrow$ $\mathbf{D}_{\mathrm{qc}}(X)$、$\mathbf{Perf}(X)$ 唯一增强（CNS）。这使"由 $\mathbf{D}^{b}(\mathrm{coh}\,X)$ 重构 $X$"（Bondal–Orlov、范畴 Torelli）具有严格的意义。</p>

<h4 id="ar-dge-3-2">3.2　有限维代数与表示论</h4>
<p>有限维代数 $A$ 的模范畴 $\mathrm{mod}\,A$ 是小 Abel 范畴，故由定理 2.6，</p>
$$\mathbf{D}^{b}(\mathrm{mod}\,A),\ \mathbf{D}^{-}(\mathrm{mod}\,A),\ \mathbf{D}^{+}(\mathrm{mod}\,A),\ \mathbf{D}(\mathrm{Mod}\,A)$$
<p>均有唯一 dg 增强。这是导出 Morita 理论、silting/tilting 理论、$\tau$-tilting 理论中"标准型"问题得以提出的前提（见"Standard Derived Equivalence"面板 2.x）。</p>

<h4 id="ar-dge-3-3">3.3　Kuznetsov 分量与范畴 Torelli</h4>
<p>半正交分解的余分量（Kuznetsov 分量）往往不是任何概形的导出范畴，但仍可是某个 Abel 范畴的导出范畴——判别准则（有界 t-结构 + 心诱导自Abel 范畴的心）配合 CNS 的强唯一性，给出这些分量的强唯一增强及 Fourier–Mukai 型结论（arXiv:2203.13864）。</p>

<h4 id="ar-dge-3-4">3.4　稳定条件</h4>
<p>Bridgeland 稳定条件定义在三角范畴上，但其空间 $\mathrm{Stab}(\mathscr{T})$ 的诸多结构（如与 dg 范畴形变的关系、 Bridgeland 同调镜像对称猜想）需要 dg 层面数据；增强唯一性保证"稳定条件空间"是三角范畴的不变量，从而不因所选增强而变。</p>

<h4 id="ar-dge-3-5">3.5　形变论与 Hochschild 理论</h4>
<p>dg 范畴的 Hochschild 上同调 $\mathrm{HH}^{\ast}(\mathscr{A})$ 控制其形变；$A_{\infty}$/$A_{n}$ 语言下的高阶乘法正是 Rizzardo–Van den Bergh 构造"无模型范畴"的杠杆。Keller 的（变形）Calabi–Yau 完备化把 Ginzburg dg 代数、preprojective 代数统一进同一框架。</p>

<h4 id="ar-dge-3-6">3.6　反例与开放问题</h4>
<ul>
  <li>哪些自然出现的三角范畴<em>没有</em>增强？已知例子均人工构造；尚无"自然"的代数/几何例子被广泛接受。</li>
  <li>$\widehat{\mathbf{D}}(\mathscr{G})$ 的内在（三角范畴层面）刻画缺失。</li>
  <li>一般 dg 代数的 $\mathbf{D}(A)$ 唯一性问题（与可逼近性、$H^{\ast}(A)$ 的有界性相关）。</li>
  <li>正特征与整系数情形的边界。</li>
</ul>

<h3 class="ar-subhead" id="ar-dge-4">4　与邻近概念的关系</h3>

<h4 id="ar-dge-4-1">4.1　导出 Morita 理论</h4>
<p>Rickard 的经典定理（代数）与 Keller 的 dg 版本（dg 范畴）说明：在增强层面，导出等价由 tilting 复形/双模给出。增强唯一性把这些 $H^{0}$ 层结论提升为"等价类与提升"的严格陈述。</p>

<h4 id="ar-dge-4-2">4.2　标准导出等价</h4>
<p>Rickard 1991 年问"是否每个导出等价都是标准的（即同构于某双侧 tilting 复形的导出张量积）"。该问题在 2026 年被否证（见"Standard Derived Equivalence"面板）。这与增强唯一性相互独立：即使增强唯一，标准性问题仍可能因"提升不唯一 / 不自然同构"而失败。</p>

<h4 id="ar-dge-4-3">4.3　Fourier–Mukai 与 (C2)</h4>
<p>Orlov 表示性定理：光滑射影簇之间<em>忠实满</em>的正合函子必为 Fourier–Mukai 型。(C2) 主张去掉忠实满假设仍成立，已被 RVdBN 2019 否证；后续工作（RRVdB 2022）说明反例普遍存在（维数 $\ge3$ 且带 tilting 丛的光滑射影簇均可作源）。</p>

<h4 id="ar-dge-4-4">4.4　$\infty$-范畴与模型范畴</h4>
<p>稳定 $\infty$-范畴（Lurie）、谱范畴 + 模型结构（Schwede–Shipley、Dugger–Shipley）、dg 范畴三者给出同一现象的三种严格化。Antieau 的结果说明 $\infty$-增强在数量上更多，故"$\infty$-增强唯一"更强；而 dg/$A_{\infty}$ 在域上的局部化等价使代数侧的结论风味无关。</p>

<h4 id="ar-dge-4-5">4.5　可逼近三角范畴</h4>
<p>可逼近性提供"内在子范畴"与度量工具，是 2024 年之后唯一性证明的新引擎（见"前沿理论 / Approximable"面板）。它与 CNS 定理互补：前者给出结构性机制，后者给出 Abel/几何范畴的确定性结论。</p>

<h4 id="ar-dge-4-6">4.6　总表</h4>
<table>
<thead><tr><th>范畴</th><th>增强唯一性</th><th>主要依据</th></tr></thead>
<tbody>
<tr><td>$\mathbf{D}^{?}(\mathscr{A})$，$\mathscr{A}$ 任意 Abel</td><td>唯一（全部装饰）</td><td>CNS 2022（定理 2.6）</td></tr>
<tr><td>$\mathbf{D}(\mathscr{G})$，$\mathscr{G}$ Grothendieck</td><td>唯一</td><td>Canonaco–Stellari 2018；Lunts–Orlov 的特例</td></tr>
<tr><td>$\check{\mathbf{D}}$、$\widehat{\mathbf{D}}(\mathscr{G})$</td><td>唯一（Grothendieck 情形）</td><td>CNS 2022；局部凝聚情形先由 Antieau 得 $\check{\mathbf{D}}$</td></tr>
<tr><td>$\mathbf{D}^{b}(\mathrm{coh}\,X)$、$\mathbf{Perf}(X)$</td><td>唯一；几何情形强唯一</td><td>Lunts–Orlov；CNS 2101.04404</td></tr>
<tr><td>$\mathbf{D}_{\mathrm{qc}}(X)$、$\mathbf{Perf}(X)$，$X$ qcqs</td><td>唯一</td><td>CNS 2022</td></tr>
<tr><td>Kuznetsov 分量（若干）</td><td>强唯一</td><td>arXiv:2203.13864 + CNS</td></tr>
<tr><td>一般 $\mathbf{D}(A)$，$A$ dg 代数</td><td>部分已知 / 有反例风险</td><td>见 2.9</td></tr>
<tr><td>一般三角范畴</td><td>可能不存在（RVdB 2020）；可能存在但不唯一（RVdB 2019）</td><td>见 1.5、2.9</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-dge-5">5　常见混淆与易错点</h3>
<ul>
  <li><strong>"唯一增强" $\neq$ "所有正合函子可提升"</strong>：(C1) 与 (C2) 是两个层次，(C2) 是错的。</li>
  <li><strong>唯一 = 在 $\mathbf{Hqe}$ 中同构</strong>，不是说"存在一个唯一的 dg 范畴"：增强的选择有函子性自由度。</li>
  <li><strong>dg 与 $A_{\infty}$ 在域上等价，但与 $\infty$-增强不等价</strong>（后者更多）。</li>
  <li><strong>增强存在性不是自动的</strong>：Rizzardo–Van den Bergh 的特征零例子是实质性定理，而非技术性反例。</li>
  <li><strong>$\mathbf{D}^{b}(\mathrm{coh}\,X)$ 与 $\mathbf{Perf}(X)$ 不同</strong>（$X$ 奇异时），两者的唯一性结果来源也不同。</li>
  <li><strong>"强唯一 $\Rightarrow$ 唯一"反之不然</strong>；引用文献时需注意作者证明的是哪一层。</li>
  <li><strong>发表年份易混</strong>：Canonaco–Neeman–Stellari 的预印本是 2021（arXiv:2101.04404），正式发表于 Forum Math. Sigma <b>10</b> (2022) e92；Lunts–Orlov 预印本 2009、发表 2010。</li>
</ul>

<h3 class="ar-subhead" id="ar-dge-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> A. I. Bondal, M. M. Kapranov, <i>Enhanced triangulated categories</i>, Math. USSR Sb. <b>70</b> (1991), 93–107.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> A. Bondal, M. Larsen, V. Lunts, <i>Grothendieck ring of pretriangulated categories</i>, Int. Math. Res. Not. <b>2004</b>, no. 29, 1461–1495.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> V. Lunts, D. Orlov, <i>Uniqueness of enhancement for triangulated categories</i>, J. Amer. Math. Soc. <b>23</b> (2010), 853–908.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> A. Canonaco, P. Stellari, <i>Uniqueness of dg enhancements for the derived category of a Grothendieck category</i>, J. Eur. Math. Soc. <b>20</b> (2018), 2607–2641.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> A. Canonaco, M. Ornaghi, P. Stellari, <i>Localizations of the category of $A_{\infty}$ categories and internal Homs</i>, Doc. Math. <b>25</b> (2020), 1223–1273（arXiv:1811.07830）.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> B. Antieau, <i>On the uniqueness of $\infty$-categorical enhancements of triangulated categories</i>, arXiv:1812.01526 (2018).</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> A. Canonaco, A. Neeman, P. Stellari, <i>Uniqueness of enhancements for derived and geometric categories</i>, arXiv:2101.04404; Forum Math. Sigma <b>10</b> (2022), Paper No. e92, 65 pp.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> A. Rizzardo, M. Van den Bergh, <i>A note on non-unique enhancements</i>, Proc. Amer. Math. Soc. <b>147</b> (2019), 451–453.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> A. Rizzardo, M. Van den Bergh, A. Neeman, <i>An example of a non-Fourier–Mukai functor between derived categories of coherent sheaves</i>, Invent. Math. <b>216</b> (2019), 927–1004.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> A. Rizzardo, M. Van den Bergh, <i>A $k$-linear triangulated category without a model</i>, Ann. of Math. (2) <b>191</b> (2020), 393–437.</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> T. Raedschelders, A. Rizzardo, M. Van den Bergh, <i>New examples of non-Fourier–Mukai functors</i>, Compos. Math. <b>158</b> (2022), 1254–1267.</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> F. Muro, S. Schwede, N. Strickland, <i>Triangulated categories without models</i>, Invent. Math. <b>170</b> (2007), 231–241.</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> A. Canonaco, C. Haesemeyer, A. Neeman, P. Stellari, <i>The passage among the subcategories of weakly approximable triangulated categories</i>, arXiv:2402.04605 (2024).</p>
<p class="ar-ref"><span class="ar-ref-no">[14]</span> A. Canonaco, A. Neeman, P. Stellari, <i>Metrics on triangulated categories and their enhancements</i>, arXiv:2607.12865 (2026).</p>
<p class="ar-ref"><span class="ar-ref-no">[15]</span> 应用示例：arXiv:2203.13864（Kuznetsov 分量的强唯一增强与 Fourier–Mukai 型等价）。</p>
<p class="ar-ref"><span class="ar-ref-no">[16]</span> G. Jasso, H. Krause, S. Schroll, <i>Rickard's Derived Morita Theory: Review and Outlook</i>, arXiv:2509.06369 (2025, v2 2026).</p>
</div>
</div>
