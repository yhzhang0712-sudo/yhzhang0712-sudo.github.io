---
title: "cluster"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
<a class="ar-toc-l1" href="#ar-ct-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-ct-1">1　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-ct-1-0">1.0　动机：从丛代数到丛范畴</a>
    <a class="ar-toc-l2" href="#ar-ct-1-1">1.1　丛范畴的定义</a>
    <a class="ar-toc-l2" href="#ar-ct-1-2">1.2　2-Calabi–Yau 与丛倾斜对象</a>
    <a class="ar-toc-l2" href="#ar-ct-1-3">1.3　丛特征标与丛变量</a>
    <a class="ar-toc-l2" href="#ar-ct-1-4">1.4　广义丛范畴与 Ginzburg dg 代数</a>
    <a class="ar-toc-l2" href="#ar-ct-1-5">1.5　高维丛范畴</a>
    <a class="ar-toc-l1" href="#ar-ct-2">2　核心工具与定理</a>
    <a class="ar-toc-l2" href="#ar-ct-2-1">2.1　轨道范畴的三角化</a>
    <a class="ar-toc-l2" href="#ar-ct-2-2">2.2　丛丛对应定理</a>
    <a class="ar-toc-l2" href="#ar-ct-2-3">2.3　突变与交换三角</a>
    <a class="ar-toc-l2" href="#ar-ct-2-4">2.4　Amiot 定理</a>
    <a class="ar-toc-l2" href="#ar-ct-2-5">2.5　Geiss–Leclerc–Schröer 范畴化</a>
    <a class="ar-toc-l2" href="#ar-ct-2-6">2.6　丛倾斜代数的同调性质</a>
    <a class="ar-toc-l2" href="#ar-ct-2-7">2.7　带势箭图与 QP 突变</a>
    <a class="ar-toc-l2" href="#ar-ct-2-8">2.8　有限型与突变有限性</a>
    <a class="ar-toc-l1" href="#ar-ct-3">3　主要应用与实例</a>
    <a class="ar-toc-l2" href="#ar-ct-3-1">3.1　无环箭图与遗传代数</a>
    <a class="ar-toc-l2" href="#ar-ct-3-2">3.2　Dynkin 型预投射代数</a>
    <a class="ar-toc-l2" href="#ar-ct-3-3">3.3　Cohen–Macaulay 模与奇点</a>
    <a class="ar-toc-l2" href="#ar-ct-3-4">3.4　$m$-丛范畴与高维组合</a>
    <a class="ar-toc-l2" href="#ar-ct-3-5">3.5　与 $\tau$-tilting 的词典</a>
    <a class="ar-toc-l2" href="#ar-ct-3-6">3.6　曲面模型与 gentle 代数</a>
    <a class="ar-toc-l1" href="#ar-ct-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l2" href="#ar-ct-4-1">4.1　与 $\tau$-tilting 理论</a>
    <a class="ar-toc-l2" href="#ar-ct-4-2">4.2　与高维 Auslander–Reiten 理论</a>
    <a class="ar-toc-l2" href="#ar-ct-4-3">4.3　与 silting 理论</a>
    <a class="ar-toc-l2" href="#ar-ct-4-4">4.4　与 Calabi–Yau 代数及形变论</a>
    <a class="ar-toc-l2" href="#ar-ct-4-5">4.5　与 Hall 代数、量子群</a>
    <a class="ar-toc-l2" href="#ar-ct-4-6">4.6　总表</a>
<a class="ar-toc-l1" href="#ar-ct-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-ct-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-ct-0">0　记号与约定</h3>
<p>固定代数闭域 $k$。下标 $Q$ 表示“由箭图 $Q$ 决定”。</p>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$Q$，$Q_{0}$</td><td>有限无环箭图及其顶点集（$Q_{0}=\{1,\dots,n\}$）</td></tr>
<tr><td>$H=kQ$</td><td>$Q$ 的路代数（$Q$ 无环时 $H$ 为遗传代数）</td></tr>
<tr><td>$\tau$</td><td>Auslander–Reiten 平移 $\tau=D\mathrm{Tr}$</td></tr>
<tr><td>$S$</td><td>Serre 函子；对遗传代数有 $S=\tau[1]$，故 $\tau^{-1}[1]=S^{-1}[2]$</td></tr>
<tr><td>$\mathscr{C}_{Q}$</td><td>丛范畴 $\mathbf{D}^{b}(H)/(\tau^{-1}[1])$</td></tr>
<tr><td>$\pi$</td><td>商（轨道）函子 $\mathbf{D}^{b}(H)\to\mathscr{C}_{Q}$</td></tr>
<tr><td>$\mathrm{Ext}^{1}_{\mathscr{C}}(X,Y)$</td><td>$\mathrm{Hom}_{\mathscr{C}}(X,Y[1])$，右端 $[1]$ 是 $\mathscr{C}$ 的平移（<em>不是</em> $\mathbf{D}^{b}(H)$ 的）</td></tr>
<tr><td>$\mathrm{add}(T)$，$|X|$</td><td>$T$ 的有限直和之直和因子；$X$ 的非同构不可分解直和因子个数</td></tr>
<tr><td>$(Q,W)$，$\Gamma(Q,W)$</td><td>带势箭图及其 Ginzburg dg 代数（3-Calabi–Yau）</td></tr>
<tr><td>$\mathrm{per}(\Gamma)$，$\mathbf{D}_{\mathrm{fd}}(\Gamma)$</td><td>$\Gamma$ 的完美模 / 有限维（上同调有限）模范畴</td></tr>
<tr><td>$\Pi$，$\underline{\mathrm{mod}}\,\Pi$</td><td>预投射代数及其稳定模范畴</td></tr>
<tr><td>$\underline{\mathrm{CM}}(R)$</td><td>交换 Gorenstein 环 $R$ 的稳定 Cohen–Macaulay 模范畴</td></tr>
</tbody>
</table>
<p>约定：①“范畴”默认 Hom-有限、Krull–Schmidt、$k$-线性；②“$d$-Calabi–Yau”指存在 Serre 函子 $S$ 且 $S\cong[d]$；③丛变量与丛倾斜对象的对应依赖初始丛（系数）的选择，本文均取标准初始丛。</p>

<h3 class="ar-subhead" id="ar-ct-1">1　概念与定义</h3>

<h4 id="ar-ct-1-0">1.0　动机：从丛代数到丛范畴</h4>
<p>Fomin–Zelevinsky 于 2002 年前后引入<strong>丛代数</strong>（cluster algebra），用以刻画 Lusztig 典范基与全正性中的组合结构：一组由<em>突变</em>（mutation）生成的变量（丛变量）与多项式关系。2003 年 Marsh–Reineke–Zelevinsky 注意到无环丛代数的组合与<em>箭图表示</em>之间存在对应（丛应大致对应 tilting 模）；Buan–Marsh–Reineke–Reiten–Todorov（BMRRT）随后把这一观察提升为范畴层面的构造——<strong>丛范畴</strong>——从而使"突变"获得内在的范畴论解释。</p>
<p>简短地说：丛理论 = 用 <strong>2-Calabi–Yau 三角范畴</strong>（Hom-有限、Krull–Schmidt）来<em>加性范畴化</em>丛代数：丛变量 ↔ 不可分解刚性对象，丛 ↔ 丛倾斜对象，突变 ↔ 丛倾斜对象的替换。</p>

<h4 id="ar-ct-1-1">1.1　丛范畴的定义与基本性质</h4>
<p><strong>定义</strong>：设 $Q$ 无环、$H=kQ$。$Q$ 的<strong>丛范畴</strong>为轨道范畴</p>
$$\mathscr{C}_{Q}:=\mathbf{D}^{b}(H)\big/\big(\tau^{-1}[1]\big)\;\cong\;\mathbf{D}^{b}(H)\big/\big(S^{-1}[2]\big),$$
<p>即对象与 $\mathbf{D}^{b}(H)$ 相同，而态射取</p>
$$\mathrm{Hom}_{\mathscr{C}_{Q}}(X,Y)=\bigoplus_{p\in\mathbb{Z}}\mathrm{Hom}_{\mathbf{D}^{b}(H)}\big(X,(S^{-1}[2])^{p}Y\big).$$
<p>记 $\pi:\mathbf{D}^{b}(H)\to\mathscr{C}_{Q}$ 为商函子。</p>
<p><strong>商函子的性质（三条直接结论）</strong>：</p>
<ol>
  <li>$\pi$ <strong>稠密</strong>：$\mathscr{C}_{Q}$ 的每个对象都同构于某个 $\pi(X)$；</li>
  <li>$\pi(X)\cong\pi(Y)$ <strong>当且仅当</strong> $Y\cong(S^{-1}[2])^{p}X$ 对某个 $p\in\mathbb{Z}$；</li>
  <li>由此得到不可分解对象的完整清单：</li>
</ol>
$$\mathrm{ind}\,\mathscr{C}_{Q}\;=\;\mathrm{ind}(\mathrm{mod}\,H)\ \sqcup\ \{\,P_{i}[1]\mid i\in Q_{0}\,\},$$
<p>即“$H$ 的全体不可分解模”加上“全体不可分解投射模的平移”。<strong>注意</strong>：$\mathscr{C}_{Q}$ <em>不是</em> $\mathbf{D}^{b}(H)$ 的子范畴，$\pi$ 也不是嵌入。</p>
<p><strong>2-Calabi–Yau 性</strong>：由定义 $S\cong[2]$ 在 $\mathscr{C}_{Q}$ 中成立，故 $\mathscr{C}_{Q}$ 为 2-CY；等价地 $\mathrm{Ext}^{1}_{\mathscr{C}}(X,Y)\cong D\,\mathrm{Ext}^{1}_{\mathscr{C}}(Y,X)$。这是交换关系得以出现的结构性保证。</p>
<p><strong>三角结构（Keller 定理，见 2.1）</strong>：一般轨道范畴<em>不是</em>三角范畴；$\mathscr{C}_{Q}$ 三角化是实质性的定理，且 $\pi$ 为三角函子。</p>

<h4 id="ar-ct-1-2">1.2　2-Calabi–Yau 与丛倾斜对象</h4>
<p><strong>定义</strong>：设 $\mathscr{C}$ 为 Hom-有限 Krull–Schmidt 2-CY 三角范畴。对象 $T$ 称为<strong>刚性</strong>，若 $\mathrm{Hom}_{\mathscr{C}}(T,T[1])=0$；称为<strong>丛倾斜</strong>（cluster-tilting），若 $T$ 刚性且</p>
$$\mathrm{add}(T)=\{X\in\mathscr{C}\mid \mathrm{Hom}_{\mathscr{C}}(T,X[1])=0\}.$$
<p><strong>为何只需写一个正交方向</strong>：由 Serre 对偶与 $S\cong[2]$ 得</p>
$$\mathrm{Hom}_{\mathscr{C}}(T,X[1])\ \cong\ D\,\mathrm{Hom}_{\mathscr{C}}(X,T[1]),$$
<p>故“$\mathrm{Hom}(T,X[1])=0$”与“$\mathrm{Hom}(X,T[1])=0$”互为等价。这正是 2-CY 假设带来的关键简化；在一般（非 CY）三角范畴或 Abel 范畴中两个方向必须<em>分别</em>要求——高维 AR 理论中 $d$-丛倾斜子范畴的定义（见“高维AR理论”面板 1.1）正是如此。</p>
<p><strong>直接推论</strong>：丛倾斜对象 $T$ 给出</p>
<ul>
  <li><strong>丛倾斜代数</strong> $A:=\mathrm{End}_{\mathscr{C}}(T)^{\mathrm{op}}$；</li>
  <li><strong>商范畴</strong> $\mathscr{C}/\mathrm{add}(T)\simeq\mathrm{mod}\,A$（Koenig–Zhu 定理的 2-CY 特例）；</li>
  <li>$|T|=|H|=n$（$T$ 恰有 $n$ 个不可分解直和因子，$n=|Q_{0}|$）。</li>
</ul>

<h4 id="ar-ct-1-3">1.3　丛特征标与丛变量</h4>
<p><strong>丛特征标</strong>（Caldero–Chapoton 映射；Palu 的一般形式）是从 $\mathscr{C}_{Q}$ 的对象到丛代数的映射</p>
$$X_{?}:\ \mathrm{Obj}(\mathscr{C}_{Q})\longrightarrow \mathbb{Q}(x_{1},\dots,x_{n}),$$
<p>其定义由对象的（拟）表示论数据经欧拉示性数 / $F$-多项式给出。关键性质：它把<em>直和</em>送到<em>乘积</em>，并把交换三角送到<strong>交换关系</strong>：若 $\mathrm{Ext}^{1}(L,M)$ 一维，则有非分裂三角 $L\to B\to M\to L[1]$ 与 $M\to B'\to L\to M[1]$，且</p>
$$X_{L}\,X_{M}=X_{B}+X_{B'}.$$
<p>这正是丛代数突变公式的范畴论来源。</p>

<h4 id="ar-ct-1-4">1.4　广义丛范畴与 Ginzburg dg 代数</h4>
<p>丛范畴最初只对<em>遗传</em>代数定义。Amiot 将其推广到全局维数 $\le 2$ 的有限维代数，以及（更常用的）到<em>带势箭图</em> $(Q,W)$：设 $\Gamma=\Gamma(Q,W)$ 为相应的 <strong>Ginzburg dg 代数</strong>（3-Calabi–Yau dg 代数），则</p>
$$\mathscr{C}_{(Q,W)}:=\mathrm{per}(\Gamma)\big/\mathbf{D}_{\mathrm{fd}}(\Gamma)$$
<p>为 2-CY 三角范畴且带丛倾斜对象，称为<strong>广义丛范畴</strong>。当 $W=0$ 且 $Q$ 无环时它还原为经典丛范畴。这提供了 3-CY 世界（Ginzburg dg 代数、Kontsevich–Soibelman $A_{\infty}$ 代数，两者 Koszul 对偶）与 2-CY 世界之间的系统桥梁。</p>
<p>一个被反复检验的<strong>猜想</strong>：特征零下<em>每个</em>带丛倾斜对象的 2-CY 三角范畴都同构于某个带势箭图的广义丛范畴。该猜想对所有已知例子成立，但一般情形仍开放。</p>

<h4 id="ar-ct-1-5">1.5　高维丛范畴</h4>
<p>Keller 的三角化证明同时给出：把 $\tau$ 与 $[m]$ 粘合得到的轨道范畴 $\mathscr{C}^{(m)}_{Q}=\mathbf{D}^{b}(H)/(\tau^{-1}[m])$ 也是三角范畴，且为 <strong>$(m+1)$-Calabi–Yau</strong>，称为 <strong>$m$-丛范畴</strong>（高维丛范畴）。$m=1$ 即经典丛范畴。它们与丛代数的联系不如 $m=1$ 直接，但自身的组合学（tilting 对象的集合、有色箭图突变、广义结合体 Fomin–Reading、多边形中的弧）十分丰富，并自然地与高维 Auslander–Reiten 理论交汇（见 4.2）。</p>

<h3 class="ar-subhead" id="ar-ct-2">2　核心工具与定理</h3>

<h4 id="ar-ct-2-1">2.1　轨道范畴的三角化</h4>
<p><strong>定理 2.1（Keller）</strong>：设 $H$ 为无环箭图的路代数。则 $\mathscr{C}_{Q}=\mathbf{D}^{b}(H)/(\tau^{-1}[1])$ 具有三角范畴结构，且自然函子 $\mathbf{D}^{b}(H)\to\mathscr{C}_{Q}$ 为三角函子。更一般地，$\mathbf{D}^{b}(H)/(\tau^{-1}[m])$ 三角化且为 $(m+1)$-CY。注意：一般三角范畴的轨道范畴<em>不是</em>三角范畴，故此结论是实质性的。</p>

<h4 id="ar-ct-2-2">2.2　丛丛对应定理</h4>
<p><strong>定理 2.2（BMRRT；Caldero–Chapoton–Schiffler 对 $A_{n}$ 型的独立几何版本）</strong>：<strong>设</strong> $Q$ 为有限无环箭图，$\mathscr{A}_{Q}$ 为相应的无环丛代数（取标准初始丛）。<strong>则</strong>丛特征标 $X_{?}$ 诱导双射</p>
$$\{\mathscr{C}_{Q}\ \text{中不可分解刚性对象的同构类}\}\ \xrightarrow{\ \sim\ }\ \{\mathscr{A}_{Q}\ \text{的丛变量}\},$$
<p>并且在此双射下，<strong>丛</strong>恰好对应<strong>丛倾斜子集</strong>（即两两满足 $\mathrm{Ext}^{1}_{\mathscr{C}}=0$ 的刚性不可分解对象组）。此外若 $\mathrm{Ext}^{1}_{\mathscr{C}}(L,M)$ 一维，则 1.3 的两个交换三角给出广义交换关系 $X_{L}X_{M}=X_{B}+X_{B\'}$。</p>
<p><strong>边界</strong>：该定理依赖 $Q$ 无环（从而 $\mathscr{A}_{Q}$ 为<em>无环</em>丛代数，且丛范畴由 $\mathbf{D}^{b}(H)$ 直接构造）。带势 / 非无环情形需换成 Amiot 的广义丛范畴（定理 2.4）与相应的丛特征标，且“丛变量 ↔ 刚性对象”的对应需要额外假设。</p>

<h4 id="ar-ct-2-3">2.3　突变与交换三角</h4>
<p><strong>定理 2.3（Iyama–Yoshino 型突变）</strong>：<strong>设</strong> $\mathscr{C}$ 为 Hom-有限 Krull–Schmidt 2-CY 三角范畴，$T=T_{0}\oplus\bar{T}$ 为<em>基本</em>丛倾斜对象且 $T_{0}$ 不可分解。<strong>则</strong>存在（至同构唯一的）不可分解对象 $T_{0}^{*}\not\cong T_{0}$ 与两个交换三角</p>
$$T_{0}\longrightarrow B\longrightarrow T_{0}^{*}\longrightarrow T_{0}[1],\qquad T_{0}^{*}\longrightarrow B\'\longrightarrow T_{0}\longrightarrow T_{0}^{*}[1],$$
<p>其中 $B,B\'\in\mathrm{add}(\bar{T})$，且 $T_{0}^{*}\oplus\bar{T}$ 仍为丛倾斜对象。该操作称为丛倾斜对象的<strong>突变</strong>。</p>
<p><strong>三层翻译</strong>：在范畴侧是“替换一个直和因子”；在丛倾斜代数 $A=\mathrm{End}_{\mathscr{C}}(T)^{\mathrm{op}}$ 侧对应 tilting 模的突变；在丛代数侧对应丛的突变（2.2 的双射把三者等同）。Iyama–Yoshino 的原始动机是<em>刚性 Cohen–Macaulay 模</em>，其突变理论是当代 2-CY 范畴学的标准工具。</p>

<h4 id="ar-ct-2-4">2.4　Amiot 定理</h4>
<p><strong>定理 2.4（Amiot）</strong>：设 $(Q,W)$ 为 Jacobi-有限带势箭图，$\Gamma(Q,W)$ 其 Ginzburg dg 代数。则 $\mathrm{per}(\Gamma)/\mathbf{D}_{\mathrm{fd}}(\Gamma)$ 为 Hom-有限 2-CY 三角范畴，且带丛倾斜对象。对全局维数 $\le 2$ 的有限维代数 $A$，同样有广义丛范畴 $\mathscr{C}_{A}$，并可用于研究 $A$ 的表示论。</p>
<p>与 Yang 综述（arXiv:1811.07553）一并阅读，可看清 2-CY 与 3-CY 两个世界的双向通道：从 Ginzburg dg 代数（3-CY，带 simple-minded collection）取商得 2-CY（带丛倾斜对象）；反向由 2-CY + 丛倾斜对象重建 3-CY 数据。</p>

<h4 id="ar-ct-2-5">2.5　Geiss–Leclerc–Schröer 范畴化</h4>
<p>无环情形之外最重要的一类 2-CY 范畴来自 <strong>预投射代数</strong>：设 $\Pi$ 为 Dynkin 型预投射代数（全局维数无穷），其模范畴的稳定范畴 $\underline{\mathrm{mod}}\,\Pi$ 为 2-CY 且带 2-cluster-tilting 对象。Geiss–Leclerc–Schröer 用它范畴化了复单连通半单 Lie 群极大幂单子群坐标环上的丛代数结构（借助 Lusztig 的半典范基），并推广到偏旗簇的多重齐次坐标环与 Kac–Moody 群的某些幂单胞腔。这构成丛理论在 <em>Lie 论</em>中的主战场。</p>

<h4 id="ar-ct-2-6">2.6　丛倾斜代数的同调性质</h4>
<p><strong>定理 2.6（Keller–Reiten）</strong>：丛倾斜代数是 <strong>Gorenstein</strong> 的（Gorenstein 维数 $\le 1$）且<em>稳定 Calabi–Yau</em>（其稳定范畴为 2-CY 或 3-CY，视约定）。这把丛倾斜代数纳入本页"Gorenstein 对称猜想 / Gorenstein 投射猜想"等条目所处的同调框架，也解释了为何丛倾斜代数成为检验 Gorenstein 型猜想的重要例子族。相关地，Koenig–Zhu 的一般定理给出：对三角范畴 $\mathscr{C}$ 与丛倾斜子范畴 $\mathscr{X}$，商 $\mathscr{C}/\mathscr{X}$ 为 Abel 范畴，且 Gorenstein 维数至多 1。</p>

<h4 id="ar-ct-2-7">2.7　带势箭图与 QP 突变</h4>
<p>Derksen–Weyman–Zelevinsky 建立带势箭图（quiver with potential, QP）及其表示的<em>约化</em>与<em>突变</em>理论，给出丛代数突变在 QP 层面的严格对应；Jacobian 代数 $\mathcal{P}(Q,W)$ 是丛倾斜代数的主要来源之一。与 Amiot 定理结合，形成"丛代数 $\leftrightarrow$ QP 突变 $\leftrightarrow$ 2-CY 范畴突变"的三角对应。</p>

<h4 id="ar-ct-2-8">2.8　有限型与突变有限性</h4>
<p><strong>定理 2.8</strong>：无环箭图 $Q$ 的丛代数$\mathscr{A}_{Q}$ 为<em>有限型</em>（丛变量有限）当且仅当 $Q$ 的底图为 Dynkin 图（Fomin–Zelevinsky 的有限型分类，与 Gabriel 定理形式一致）；在范畴侧，这等价于 $\mathscr{C}_{Q}$ 只有有限多个不可分解刚性对象，也等价于 $\mathscr{C}_{Q}$ 只有有限多个丛倾斜对象。</p>
<p><strong>高维有限型</strong>：$m$-丛范畴的"2-表示有限"与"表示-维数"型问题由 Iyama–Oppermann、Herschend–Iyama 等系统研究，是"高维 AR 理论"面板的直接素材。</p>

<h3 class="ar-subhead" id="ar-ct-3">3　主要应用与实例</h3>

<h4 id="ar-ct-3-1">3.1　无环箭图与遗传代数</h4>
<table>
<thead><tr><th>丛代数侧</th><th>丛范畴侧</th></tr></thead>
<tbody>
<tr><td>初始丛 $(x_{1},\dots,x_{n})$</td><td>丛倾斜对象 $H=kQ$（作为 $\mathscr{C}_{Q}$ 的对象）</td></tr>
<tr><td>丛变量</td><td>不可分解刚性对象</td></tr>
<tr><td>丛</td><td>基本丛倾斜对象</td></tr>
<tr><td>丛突变</td><td>丛倾斜对象的交换（2.3）</td></tr>
<tr><td>交换关系</td><td>交换三角（1.3）</td></tr>
<tr><td>有限型</td><td>$Q$ 为 Dynkin</td></tr>
</tbody>
</table>

<h4 id="ar-ct-3-2">3.2　Dynkin 型预投射代数</h4>
<p>$\underline{\mathrm{mod}}\,\Pi$（$\Pi$ 为 Dynkin 型预投射代数）给出最重要的非无环 2-CY 例子：它范畴化 Lie 论中的丛结构（2.5）。此外，对 Coxeter 群元素 $w$，Buan–Iyama–Reiten–Scott 等构造了与 $w$ 相关的 2-cluster-tilting 子范畴，把范畴论与 Coxeter 组合学深度绑定。</p>

<h4 id="ar-ct-3-3">3.3　Cohen–Macaulay 模与奇点</h4>
<p>稳定 Cohen–Macaulay 模范畴是另一批重要的 2-CY 范畴：对孤立奇点 $R$，$\underline{\mathrm{CM}}(R)$ 常在适当维数下为 2-CY，其 2-cluster-tilting 子范畴的存在性（Amiot–Iyama–Reiten）是活跃课题。典型具体成果包括 Grassmannian 丛代数的范畴化（Jensen–King–Su，arXiv:1309.7301）：用 Cohen–Macaulay 模给出 Grassmannian 丛代数的加性范畴化。</p>

<h4 id="ar-ct-3-4">3.4　$m$-丛范畴与高维组合</h4>
<ul>
  <li><strong>tilting 对象的集合</strong>：$m$-丛范畴中 tilting 对象的组合学（Wraalsen、Zhou、Zhu）在 $m\ge1$ 时保持大量 $m=1$ 的性质。</li>
  <li><strong>多边形模型</strong>（Baur–Marsh）：Dynkin 型 $\mathbb{A}$、$\mathbb{D}$ 下用（带孔/无孔）多边形中的弧建模 tilting 对象的组合。</li>
  <li><strong>广义结合体</strong>（Thomas；Zhu）：与 Fomin–Reading 广义结合体的联系。</li>
  <li><strong>有色箭图突变</strong>（Buan–Thomas）：对任意有限箭图描述 tilting 对象集合的突变组合学。</li>
</ul>

<h4 id="ar-ct-3-5">3.5　与 $\tau$-tilting 的词典</h4>
<p>设 $\mathscr{C}$ 为带丛倾斜对象 $T$ 的 2-CY 范畴，$A=\mathrm{End}_{\mathscr{C}}(T)^{\mathrm{op}}$。Adachi–Iyama–Reiten 的基本定理给出双射</p>
$$\{\mathscr{C}\ \text{中基本刚性对象}\}\ \longleftrightarrow\ \{A\ \text{上基本 }\tau\text{-刚性模}\},\qquad \{\mathscr{C}\ \text{中基本丛倾斜对象}\}\ \longleftrightarrow\ \{A\ \text{上基本 support }\tau\text{-倾斜模}\}.$$
<p>该双射后来被多方推广（Yang–Zhu 的相对丛倾斜对象；Fu–Geng–Liu 的相对刚性对象；Iyama–Jørgensen–Yang 的 silting 版本；Zhou–Zhu 的两项弱 $\mathscr{R}$-丛倾斜子范畴）。详见本页"$\tau$-tilting理论"面板。</p>

<h4 id="ar-ct-3-6">3.6　曲面模型与 gentle 代数</h4>
<p>带标记曲面的三角剖分、弧与翻转（flip）给出的丛代数（Fomin–Shapiro–Thurston）可由曲面关联代数（gentle 代数）的丛范畴范畴化；这条线索把丛理论与本页"gentle 导出分类""Geometric model"两个热点面板连成一体，也是近年（含 2026 年）最活跃的组合—几何交叉区之一。</p>

<h3 class="ar-subhead" id="ar-ct-4">4　与邻近概念的关系</h3>

<h4 id="ar-ct-4-1">4.1　与 $\tau$-tilting 理论</h4>
<p>$\tau$-tilting 理论（Adachi–Iyama–Reiten）可视为丛理论的"<em>去掉 2-CY 假设</em>"版本：以 $\mathrm{Hom}(M,\tau M)=0$ 代替 $\mathrm{Ext}^{1}$ 消失，从而在<em>任意</em>有限维代数上保留"突变 + 完备性"的组合学。二者由 3.5 的双射直接衔接：2-CY 范畴 $\mathscr{C}$ 的丛倾斜对象 ↔ 丛倾斜代数 $A$ 的 support $\tau$-倾斜模。另一条接口是 silting：support $\tau$-倾斜对 ↔ 两项 silting 复形。</p>

<h4 id="ar-ct-4-2">4.2　与高维 Auslander–Reiten 理论</h4>
<p>高维 AR 理论把 2-cluster-tilting 子范畴一般化为 $n$-cluster-tilting 子范畴（Iyama），并发展 $n$-几乎分裂序列、$n$-abelian / $n$-exact 范畴（Jasso）。丛理论可视为 $n=2$ 时的<em>三角</em>侧面，高维 AR 理论则是<em> Abel / 正合</em>侧面；$m$-丛范畴与 $(m+1)$-CY 性质是两者的交汇点之一。</p>

<h4 id="ar-ct-4-3">4.3　与 silting 理论</h4>
<p>丛倾斜代数 $A$ 的 support $\tau$-倾斜模 ↔ $\mathbf{K}^{b}(\mathrm{proj}A)$ 中两项 silting 复形；在更一般的三角范畴中，silting 子范畴替换丛倾斜子范畴，Iyama–Jørgensen–Yang 给出了"两项 silting 子范畴 ↔ support $\tau$-倾斜子范畴"的一般双射。于是形成三角链条：丛倾斜（2-CY）⟶ $\tau$-倾斜（模范畴）⟶ silting（三角范畴）。</p>

<h4 id="ar-ct-4-4">4.4　与 Calabi–Yau 代数及形变论</h4>
<p>Ginzburg dg 代数（3-CY）是丛理论的主要 dg 输入；它与 Kontsevich–Soibelman 的 $A_{\infty}$ 代数 Koszul 对偶，两者的 Koszul 对偶性在 $\infty$-范畴语言下最自然（见"Infinity Category"面板 3.3）。丛倾斜代数与 Jacobian 代数的形变理论（势的形变）由 Derksen–Weyman–Zelevinsky 与 Keller 的形变理论给出。</p>

<h4 id="ar-ct-4-5">4.5　与 Hall 代数、量子群</h4>
<p>Caldero–Chapoton 映射的原始形式正是"丛代数 = 箭图表示的 Hall 代数"这一观点：丛变量由表示的同调数据（欧拉示性数 + $F$-多项式）给出，与 Ringel 的 Hall 代数、Lusztig 的典范基理论同源。这把丛理论与量子群、表示论的组合表示层面直接连通。</p>

<h4 id="ar-ct-4-6">4.6　总表</h4>
<table>
<thead><tr><th>邻近概念</th><th>关系方向</th><th>主要见证</th></tr></thead>
<tbody>
<tr><td>丛代数（Fomin–Zelevinsky）</td><td>被 2-CY 范畴加性范畴化</td><td>BMRRT；Caldero–Chapoton</td></tr>
<tr><td>$\tau$-tilting</td><td>去掉 2-CY 后的一般化；由 AIR 双射衔接</td><td>AIR；Yang–Zhu；IJY</td></tr>
<tr><td>silting</td><td>两项 silting ↔ support $\tau$-倾斜；三角侧一般化</td><td>AIR；IJY</td></tr>
<tr><td>高维 AR 理论</td><td>$n$-cluster-tilting 的 Abel 侧；$n=2$ 与丛理论交汇</td><td>Iyama；Jasso</td></tr>
<tr><td>预投射代数 / Lie 论</td><td>$\underline{\mathrm{mod}}\,\Pi$ 为 2-CY，范畴化 Lie 论丛结构</td><td>Geiss–Leclerc–Schröer</td></tr>
<tr><td>Cohen–Macaulay 模 / 奇点</td><td>$\underline{\mathrm{CM}}(R)$ 常为 2-CY</td><td>Amiot–Iyama–Reiten；Jensen–King–Su</td></tr>
<tr><td>Ginzburg dg 代数（3-CY）</td><td>取商得 2-CY 广义丛范畴</td><td>Amiot；Keller；Yang</td></tr>
<tr><td>gentle 代数 / 曲面模型</td><td>曲面丛代数的范畴化</td><td>Fomin–Shapiro–Thurston；Baur–Marsh</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-ct-5">5　常见混淆与易错点</h3>
<ul class="agent-list">
  <li><span class="agent-name">两个 $[1]$ 不是一回事</span>：丛范畴 $\mathscr{C}_{Q}$ 的平移与 $\mathbf{D}^{b}(H)$ 的平移不同；$\mathrm{Ext}^{1}_{\mathscr{C}}$ 按 $\mathscr{C}$ 的平移计算。</li>
  <li><span class="agent-name">$\mathscr{C}_{Q}$ 不是 $\mathbf{D}^{b}(H)$ 的子范畴</span>：它是<em>轨道商</em>，$\pi$ 稠密但把 $Y$ 与 $(S^{-1}[2])^{p}Y$ 等同；不可分解对象由 1.1 的清单给出。</li>
  <li><span class="agent-name">2-CY 的“丛倾斜” vs. 高维 AR 的“$n$-cluster-tilting”</span>：前者在<em>三角</em>范畴中、依赖 2-CY（两个正交方向自动等价）；后者在 <em>Abel / 正合</em>范畴中、需显式写两个方向。$n=d=2$ 时两者相关但结构不同，参数约定不可直接套用。</li>
  <li><span class="agent-name">丛倾斜代数 Gorenstein $≠$ 有限全局维数</span>：Keller–Reiten 给出 Gorenstein 维数 $\le1$ 与稳定 CY 性，但丛倾斜代数通常全局维数无穷。</li>
  <li><span class="agent-name">$m$-丛范畴与丛代数无直接联系</span>：$m\ge2$ 时 $m$-丛范畴是 $(m+1)$-CY，其 tilting 对象的组合学独立于丛代数（Buan 的综述明确指出这一点）。</li>
  <li><span class="agent-name">丛特征标依赖初始丛</span>：带系数与不带系数的丛代数给出的 $X_{?}$ 不同；引用“丛变量 ↔ 刚性对象”时须说明系数系统。</li>
  <li><span class="agent-name">“所有 2-CY 范畴都是广义丛范畴”仍是猜想</span>：特征零下对所有已知例子成立，一般情形未解决（见 1.4）。</li>
</ul>

<h3 class="ar-subhead" id="ar-ct-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> S. Fomin, A. Zelevinsky, <i>Cluster algebras I: Foundations</i>, J. Amer. Math. Soc. <b>15</b> (2002), 497–529.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> A. B. Buan, R. Marsh, M. Reineke, I. Reiten, G. Todorov, <i>Tilting theory and cluster combinatorics</i>, arXiv:math/0402054; Adv. Math. <b>204</b> (2006), 572–618.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> B. Keller, <i>Triangulated orbit categories</i>, Doc. Math. <b>10</b> (2005), 551–581.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> B. Keller, <i>Cluster algebras, quiver representations and triangulated categories</i>, arXiv:0807.1960; in: Triangulated Categories, LMS Lecture Note Ser. <b>375</b> (2010), 76–160.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> B. Keller, I. Reiten, <i>Cluster-tilted algebras are Gorenstein and stably Calabi–Yau</i>, Adv. Math. <b>211</b> (2007), 123–151.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> C. Amiot, <i>On generalized cluster categories</i>, arXiv:1101.3675（综述）; <i>Cluster categories for algebras of global dimension 2 and quivers with potential</i>, Ann. Inst. Fourier <b>59</b> (2009), 2525–2590.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> O. Iyama, Y. Yoshino, <i>Mutation in triangulated categories and rigid Cohen–Macaulay modules</i>, Invent. Math. <b>172</b> (2008), 117–168.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> C. Geiss, B. Leclerc, J. Schröer, <i>Rigid modules over preprojective algebras</i>, Invent. Math. <b>165</b> (2006), 589–632.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> P. Caldero, F. Chapoton, <i>Cluster algebras as Hall algebras of quiver representations</i>, Comment. Math. Helv. <b>81</b> (2006), 595–616.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> Y. Palu, <i>Cluster characters for triangulated categories</i>, Ann. Inst. Fourier <b>58</b> (2008), 2221–2248.</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> H. Derksen, J. Weyman, A. Zelevinsky, <i>Quivers with potentials and their representations I: Mutations</i>, Selecta Math. <b>14</b> (2008), 59–119.</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> S. Koenig, B. Zhu, <i>From triangulated categories to abelian categories: cluster tilting in a general framework</i>, Math. Z. <b>258</b> (2008), 143–160.</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> O. Iyama, <i>Higher-dimensional Auslander–Reiten theory on maximal orthogonal subcategories</i>, Adv. Math. <b>210</b> (2007), 22–50.</p>
<p class="ar-ref"><span class="ar-ref-no">[14]</span> D. Yang, <i>The interplay between 2- and 3-Calabi–Yau triangulated categories</i>, arXiv:1811.07553; 中文版见《中国科学：数学》<b>48</b> (2018).</p>
<p class="ar-ref"><span class="ar-ref-no">[15]</span> A. B. Buan, <i>An introduction to higher cluster categories</i>, Bull. Iranian Math. Soc. <b>37</b> (2011), no. 2, 171–203.</p>
<p class="ar-ref"><span class="ar-ref-no">[16]</span> B. Jensen, A. King, X. Su, <i>A categorification of Grassmannian cluster algebras</i>, arXiv:1309.7301.</p>
<p class="ar-ref"><span class="ar-ref-no">[17]</span> T. Adachi, O. Iyama, I. Reiten, <i>$\tau$-tilting theory</i>, arXiv:1210.1036; Compos. Math. <b>150</b> (2014), 415–452.</p>
</div>
</div>
