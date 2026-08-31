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
