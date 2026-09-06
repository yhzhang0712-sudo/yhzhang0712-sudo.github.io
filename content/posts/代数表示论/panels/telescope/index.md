---
title: "telescope"
headless: true
---
<h3 class="ar-subhead">猜想陈述</h3>
<p><strong>Telescope 猜想（望远镜猜想）</strong>：设 $\mathcal{T}$ 为带任意余积的<strong>紧生成三角范畴</strong>，$\mathcal{T}^{c}$ 为其紧对象子范畴。称伴随对 $j:\mathcal{T}\rightleftarrows\mathcal{T}':j_{\rho}$（$j_{\rho}$ 全忠实）为 <strong>Bousfield 局部化</strong>；若右伴随 $j_{\rho}$ 保余积，则称为 <strong>smashing 局部化</strong>。猜想断言：</p>

$$ \text{若 } j:\mathcal{T}\rightleftarrows\mathcal{T}' \text{ 是 smashing 局部化，则 } \ker(j)=\{X\in\mathcal{T}: j(X)\simeq 0\} \text{ 由 } \mathcal{T} \text{ 中的紧对象生成} . $$

<p>原始形式（<strong>稳定同伦范畴</strong>，Bousfield 1979 / Ravenel 1984）为：对每个高度 $n$，有限谱的 telescope 局部化 $L_{n}^{f}$ 与 chromatic 局部化 $L_{n}$ 同构（TC$_n$）。若成立，$K(n)$-局部化的具体计算可由望远镜构造实现。该猜想与 <strong>Generalized Smashing Conjecture</strong>（每个 smashing 局部化由紧对象决定）密切相关，也是分类 smashing 局部化与紧对象 thick 子范畴的关键桥梁。</p>

<h3 class="ar-subhead">研究现状</h3>
<ul class="ar-timeline">
  <li><span class="ar-year">1984</span>Ravenel 正式提出（<i>Amer. J. Math.</i> <b>106</b>, 351–414, Conj. 10.5）；TC$_0$、TC$_1$ 先后获证（$p=2$: Mahowald 1982；$p>2$: Miller 1981）。</li>
  <li><span class="ar-year">1992</span>Neeman 证明 $\mathcal{T}=D(R)$（$R$ 交换诺特环）上成立（<i>Topology</i> <b>31</b>, 519–532），并得到 smashing 局部化 ⟷ $D^{\mathrm{perf}}(R)$ 的 thick 子范畴 ⟷ $\operatorname{Spec}(R)$ 的 specialization-closed 子集的三方一一对应。</li>
  <li><span class="ar-year">1994</span>Keller 给出第一个反例：存在交换环 $R$ 使 $D(R)$ 不满足 Telescope 猜想（<i>Manuscripta Math.</i> <b>84</b>, 193–198）；Krause–Šťovíček 随后给出二维赋值环的反例族。</li>
  <li><span class="ar-year">2007–17</span>正向结果不断扩展：Dwyer–Palmieri（截断多项式代数）；Stevenson（absolutely flat 环、超曲面奇点范畴）；Brüning 及 Krause–Šťovíček（<strong>遗传环</strong>，含 $D^{b}(\mathbb{P}^{1}_{k})$，经 Ext-正交对）；Bazzoni–Šťovíček（弱整体维数 $\le 1$ 的环：TC ⟺ 所有同调环满射平坦）；Antieau（Azumaya 代数与分类叠的 étale 局部-整体原理）。</li>
  <li><span class="ar-year">2008</span>Šťovíček 把自入射 Artin 代数稳定模范畴上的 TC 等价转化为幂等理想由恒等态射生成的问题（Krause–Solberg 的余挠对语言），并对 domestic standard selfinjective 与 domestic special biserial 代数验证成立。</li>
  <li><span class="ar-year">2023</span>Burklund–Hahn–Levy–Schlank 用代数 $K$-理论反例<strong>证伪</strong>稳定同伦范畴上的 Telescope 猜想（arXiv:2310.17459）——Ravenel 1984 年七大猜想中最后一个被解决者（否定性解决）。</li>
  <li><span class="ar-year">2024–25</span>Balchin–Tecklenburg 完全分类有限维赋值域导出范畴的 smashing 理想，构造推广 Keller 的无限反例族，并证明 Balmer 谱与 smashing 谱的 Krull 维数可任意相差（<i>J. Pure Appl. Algebra</i> <b>229</b>, 107917）。</li>
</ul>

<p><strong>成立的主要情形：</strong></p>
<ul>
  <li>交换诺特环的导出范畴 $D(R)$（Neeman 1992）；</li>
  <li>遗传环（含有限维遗传代数与 $D^{b}(\mathbb{P}^{1}_{k})$）的导出范畴（Brüning；Krause–Šťovíček 2010）；</li>
  <li>absolutely flat 环、超曲面奇点范畴、正则局部环的完全交商（Stevenson）；</li>
  <li>诺特概形上 Azumaya 代数的导出范畴与诸多分类叠（Antieau）；</li>
  <li>domestic standard selfinjective 与 domestic special biserial 代数的稳定模范畴（Šťovíček 2008）。</li>
</ul>
<p><strong>失败的情形：</strong>Keller 的交换环反例（1994）、二维赋值环（Krause–Šťovíček）、稳定同伦范畴（Burklund–Hahn–Levy–Schlank 2023）、有限维赋值域无限反例族（Balchin–Tecklenburg 2025）。</p>

<h3 class="ar-subhead">研究方法</h3>
<p>对稳定同伦范畴 $\mathcal{S}p$ 上的原始形式 TC$_n$，证明策略分两类：<b>正面证明</b>利用 §1 的等价链条把 TC$_n$ 化归为两个<b>可计算对象</b>的比对——$L_{T(n)}$ 侧（$v_n$-周期同伦，ANSS 可算）与 $L_{K(n)}$ 侧（K-理论/Bousfield 类可算）；<b>否定构造</b>则需造出 $K(n)$-局部非零而 $T(n)$-零化的谱。正面路线目前仅走通 $n=0,1$，否定路线（BHLS 2023）一锤定音。</p>
<div class="ar-chain">
  <span class="ar-chain-node"><b>TC$_n$</b><small>$L_{T(n)}X \simeq L_{K(n)}X$，$X$ 型 $n$ 有限</small></span>
  <span class="ar-chain-arrow">⇔</span>
  <span class="ar-chain-node"><b>等价链条</b><small>$\langle T(n)\rangle=\langle K(n)\rangle$ ⟺ 有限谱望远镜=色局部化 ⟺ 紧对象均是 $T(n)$-局部</small></span>
  <span class="ar-chain-arrow">⇔</span>
  <span class="ar-chain-node"><b>两侧可计算比对</b><small>$L_{T(n)}$：$v_n$-周期同伦（ANSS）· $L_{K(n)}$：K-理论 / Morava E / $G_n$</small></span>
</div>

<h4 class="ar-mgroup c-blue">一般约化：把 TC$_n$ 变成可操作的命题</h4>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">恒成立方向 $\langle T(n)\rangle\subseteq\langle K(n)\rangle$</span><span class="ar-m-tag">域谱论证</span></div>
  <ul class="ar-m-pts">
    <li>$T(n)$ 是 $K(n)$-局部谱：$K(n)$ 为域谱故 $K(n)_\ast(Z\wedge T(n))\cong K(n)_\ast Z\otimes_{K(n)_\ast}K(n)_\ast T(n)=0$，即 $Z\wedge T(n)$ 是 $K(n)$-零化的；由 $T(n)$ 的 $K(n)$-局部性 $T(n)_\ast Z\cong[\Sigma^\ast Z,T(n)]=0$；</li>
    <li>推论：TC$_n$ 只差一个方向——是否存在 $K(n)$-局部非零而 $T(n)$-零化的对象。</li>
  </ul>
</div>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">等价链条（Ravenel / Ohkawa / Hopkins–Smith）</span><span class="ar-m-tag">有限化</span></div>
  <ul class="ar-m-pts">
    <li>TC$_n \iff\langle T(n)\rangle=\langle K(n)\rangle\iff$ 对所有有限谱 $X$：$L_n^fX\simeq L_nX\iff$ 对所有型 $n$ 有限谱 $X$：$L_{T(n)}X\simeq L_{K(n)}X\iff$ $K(n)$-局部范畴的每个紧对象都是 $T(n)$-局部的；</li>
    <li><b>Ohkawa 定理</b>：每个 Bousfield 类等于它所检测的有限谱类的 join——配合 $K(n)$ 是域谱、$K(n)_\ast A\ne0\iff\operatorname{type}(A)\le n$，Bousfield 类层面的不等式原则上可落到有限谱上；</li>
    <li><b>厚子范畴定理 + 周期性定理</b>：有限谱按型分层、$v_n$-自映射存在且本质唯一，使 $T(n)$ 良定，且 $K(n)$-局部范畴的紧对象恰为 $L_{K(n)}X$（$X$ 型 $n$ 有限）；</li>
    <li>$L_{T(n)}$ 是 smashing 局部化（望远镜局部化均 smashing），用于有限化论证。</li>
  </ul>
</div>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">$K(n)$-局部范畴侧（Hovey–Strickland）</span><span class="ar-m-tag">结构事实</span></div>
  <ul class="ar-m-pts">
    <li>紧对象 $=L_{K(n)}$（型 $n$ 有限谱）；$L_{K(n)}S$ 的 $\pi_\ast$ 由 Morava E-理论与稳定群 $G_n$ 控制；</li>
    <li>$K(n)$-局部范畴是 $n$-重半可加的（CSY 2020）：$C_p^{\times n}$-范数存在、$C_p^{\times(n+1)}$-范数消没。</li>
  </ul>
</div>

<h4 class="ar-mgroup c-green">正面路线：TC$_0$ 与 TC$_1$（n=0,1 已证）</h4>
<div class="ar-method c-green">
  <div class="ar-method-head"><span class="ar-method-name">$n=0$：平凡情形</span><span class="ar-m-tag">有理化</span></div>
  <ul class="ar-m-pts">
    <li>$T(0)$ = 度数 $p$ 自映射的望远镜（有理化），$K(0)=HQ$，$L_{T(0)}=L_{K(0)}=$ 有理化——TC$_0$ 平凡成立。</li>
  </ul>
</div>
<div class="ar-method c-green">
  <div class="ar-method-head"><span class="ar-method-name">$n=1$（$p$ 奇）：Ravenel 1984</span><span class="ar-m-tag">Bousfield K-理论计算</span></div>
  <ul class="ar-m-pts">
    <li>策略：按等价链条归结为对型 1 有限谱 $X$ 比较两侧的显式计算；</li>
    <li>$L_{K(1)}$ 侧：Bousfield 用 K-理论与 Adams 运算显式描述 $K(1)$-局部化；对球面 $L_{K(1)}S\simeq\operatorname{fiber}(\psi^q-1:KU_p\to KU_p)$，$q\in\mathbb{Z}_p^\times$ 为 $(\mathbb{Z}/p)^\times$ 生成元的提升，其同伦群即 <b>im $J$</b>：$\pi_{2k-1}\cong\mathbb{Z}/p^{v_p(k)+1}$，$\pi_{2k}=0$；</li>
    <li>$L_{T(1)}$ 侧（$v_1$-周期同伦）与 $L_{K(1)}$ 侧比对一致，TC$_1$ 得证（Mahowald $p=2$ / Miller $p>2$ 亦覆盖 $p=2$）。</li>
  </ul>
</div>

<h4 class="ar-mgroup c-red">否定路线：BHLS 反例（2023）的方法骨架</h4>
<div class="ar-method c-red">
  <div class="ar-method-head"><span class="ar-method-name">造「$K(n)$-局部非零而 $T(n)$-零化」的谱</span><span class="ar-m-tag">K-理论反例</span></div>
  <ul class="ar-m-pts">
    <li>Burklund–Hahn–Levy–Schlank（arXiv:2310.17459）用代数 K-理论构造反例，<b>证伪</b>稳定同伦范畴上的 TC——Ravenel 1984 七大猜想中最后一个被解决者（否定性解决）；</li>
    <li>方法要点：把「$T(n)$-零化而 $K(n)$-局部非零」翻译为可在 $K(n)$-局部范畴中检测的代数不变量，再经有限化链条落实为谱层面的构造（本文件反例主体未展开，细节以原文为准）。</li>
  </ul>
</div>
<p class="ar-mnote"><b>TC 的三层含义：</b>TC$_n$ 的望远镜局部化=色局部化这一原始同伦论形式（$n\le1$ 真、一般 $n$ 假）；TC 在交换环导出范畴 $D(R)$ 上恰为「smashing 局部化由紧对象生成」，Noether 环为真、一般交换环有反例（Keller 1994；Balchin–Tecklenburg 2025 推广为无限反例族）；TC 在自入射 Artin 代数稳定模范畴上化为幂等理想问题（Šťovíček 2008，domestic 类为真）。三层面共享同一核心：<b>局部化核的紧生成性</b>。</p>

<h3 class="ar-subhead">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> A. K. Bousfield, <i>The Boolean algebra of spectra</i>, Comment. Math. Helv. <b>54</b> (1979), 368–377.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> D. C. Ravenel, <i>Localization with respect to certain periodic homology theories</i>, Amer. J. Math. <b>106</b> (1984), 351–414.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> A. Neeman, <i>The chromatic tower for $D(R)$</i>, Topology <b>31</b> (1992), 519–532.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> B. Keller, <i>A remark on the generalized smashing conjecture</i>, Manuscripta Math. <b>84</b> (1994), 193–198.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> H. Krause, J. Šťovíček, <i>The telescope conjecture for hereditary rings via Ext-orthogonal pairs</i>, Adv. Math. <b>225</b> (2010), 2341–2364.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> S. Bazzoni, J. Šťovíček, <i>Smashing localizations of rings of weak global dimension at most one</i>, Adv. Math. <b>305</b> (2017), 351–401.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> J. Šťovíček, <i>Telescope conjecture, idempotent ideals, and the transfinite radical</i>, arXiv:0802.2189 (2008).</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> B. Antieau, <i>A local-global principle for the telescope conjecture</i>, Adv. Math. <b>395</b> (2022), 108157.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> R. Burklund, J. Hahn, I. Levy, T. Schlank, <i>K-theoretic counterexamples to Ravenel's telescope conjecture</i>, arXiv:2310.17459 (2023).</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> S. Balchin, F. Tecklenburg, <i>Classifying smashing ideals in derived categories of valuation domains</i>, J. Pure Appl. Algebra <b>229</b> (2025), 107917.</p>
