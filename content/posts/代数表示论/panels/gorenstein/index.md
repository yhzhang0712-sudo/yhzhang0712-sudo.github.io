---
title: "gorenstein"
headless: true
---
<h3 class="ar-subhead">猜想陈述</h3>
<p><strong>Gorenstein 对称猜想</strong>（GSC，Auslander-Reiten， 1975）：设 $\Lambda$ 是 Artin 代数，则：</p>

$$ \operatorname{id}_{\Lambda}\Lambda < \infty \;\Longrightarrow\; \operatorname{id}_{\Lambda^{\mathrm{op}}}\Lambda^{\mathrm{op}} < \infty . $$

相关猜想：
<p>(1) 左右对称：$\operatorname{Ggldim}A=\operatorname{Ggldim}A^{\mathrm{op}}$；</p>
<p>(2) 自内射维数对称：$\operatorname{Gid}_{A}A=\operatorname{Gid}_{A^{\mathrm{op}}}A^{\mathrm{op}}$（或其有限性的“当且仅当”对应）；</p>
<p>(3) 投射模类对称：</p>

$$ D(\operatorname{GProj}(A))\;\subseteq\;\operatorname{GInj}(A^{\mathrm{op}}),\qquad D=\operatorname{Hom}_{k}(-,\,k). $$

<p>已证明的相关对称结果：Christensen–Estrada–Thompson 证明 <strong>Gorenstein weak global dimension</strong> 是左右对称不变量；但 $\operatorname{Ggldim}$ 与 Gorenstein weak global dimension 不等价，故不能推出一般有限维代数上的猜想（1）。</p>

<h3 class="ar-subhead">研究现状</h3>
<ul class="ar-timeline">
  <li><span class="ar-year">1969</span>Auslander–Bridger 在双边 Noether 环上引入 G-维数。</li>
  <li><span class="ar-year">1975</span>Auslander–Reiten 提出 GSC：单侧自内射维数有限 ⟹ Gorenstein。</li>
  <li><span class="ar-year">1995</span>Enochs–Jenda 在一般环上定义 Gorenstein 投射/内射模。</li>
  <li><span class="ar-year">2004</span>Holm 系统研究 Gorenstein 同调维数（<i>JPAA</i> 189, 167–193）；Christensen 证明 Noether 环上有限生成模的 G-维数为 0 当且仅当其为 Gorenstein 投射模。</li>
  <li><span class="ar-year">2012</span>Xiong–Zhang 描述三角矩阵 Artin 代数的 $\operatorname{GProj}(\Lambda)$ 并判定 Gorenstein 性。</li>
  <li><span class="ar-year">2020s</span>Christensen–Estrada–Thompson 证明 Gorenstein weak global dimension 左右对称；Marczinzik–Gélinas 在 QF-3 代数上证明 $\operatorname{domdim}=\operatorname{findim}$ 的强版本。</li>
</ul>

<h3 class="ar-subhead">研究方法</h3>
<p>GSC 的证明素材横跨两个世界：<b>交换代数</b>里研究「何时一个环是 Gorenstein」（数值半群环、单项式理想），<b>Artin 代数</b>里研究「单侧自内射维数有限是否自动双侧」。两条路线殊途同归——<b>都在构造一个对偶结构</b>（半群的补对称、复形的 Poincaré 对偶、左右模范畴的维数对称），并让 Gorenstein 性从这个对偶结构中显现出来。</p>
<div class="ar-chain">
  <span class="ar-chain-node"><b>单侧信息</b><small>id 有限 / 组合对称</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>构造对偶结构</b><small>Apéry 补对称 / Serre 对偶 / 余挠理论</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>维数或类型对称</b><small>$t(S)=1$ / 双侧 id 有限</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>Gorenstein</b><small>标准模循环 / GSC 成立</small></span>
</div>

<h4 class="ar-mgroup c-teal">交换侧：把组合对称性翻译成环论 Gorenstein 性</h4>
<div class="ar-method c-teal">
  <div class="ar-method-head"><span class="ar-method-name">数值半群环：Apéry 集直算类型</span><span class="ar-m-tag">Kunz–Herzog</span></div>
  <ul class="ar-m-pts">
    <li>对重数 $m$ 取 Apéry 集 $\mathrm{Ap}(S,m)=\{s\in S: s-m\notin S\}$，伪箔 $PF(S)=-m+\mathrm{Maximals}_{\le_S}\mathrm{Ap}(S,m)$；类型 $t(S)=|PF(S)|$ 即标准模的最小生成元数；</li>
    <li>关键判据链：$S$ 对称 $\iff$ $\mathrm{Ap}(S,m)$ 关于 $\le_S$ 有唯一极大元 $\iff t(S)=1\iff K[S]$ Gorenstein；</li>
    <li>嵌入维数 2 时 Apéry 集天然成链；嵌入维数 3 时 Herzog 定理给出 $I_S$ 的显式生成元——对称时恰为完全交（两个生成元），直接看穿 Gorenstein 性。</li>
  </ul>
</div>
<div class="ar-method c-teal">
  <div class="ar-method-head"><span class="ar-method-name">完全交与 Delorme 粘合：递归构造</span><span class="ar-m-tag">零化子结构</span></div>
  <ul class="ar-m-pts">
    <li>完全交 $K[S]=K[x_1,\dots,x_k]/(f_1,\dots,f_{k-1})$ 的标准模同构于环自身（$\omega_{K[S]}\cong K[S]$）$\Rightarrow$ 自动 Gorenstein——只需验证完全交性；</li>
    <li>Delorme 定理：$K[S]$ 完全交 $\iff S$ 可由 $\mathbb{N}$ 经有限次简单粘合递归构造；粘合操作保持对称性，反向（分裂）可用于判定；</li>
    <li>嵌入维数 4 的对称非完全交情形用 Bresinsky 参数化：定义理想需 5 个生成元，最小自由分解 $0\to S\to S^5\to S^5\to S$ 呈两行对称（Betti 表首尾对称），由分解对称性即知 Gorenstein。</li>
  </ul>
</div>
<div class="ar-method c-teal">
  <div class="ar-method-head"><span class="ar-method-name">单项式理想：Stanley–Reisner 拓扑</span><span class="ar-m-tag">Alexander 对偶 + Hochster 公式</span></div>
  <ul class="ar-m-pts">
    <li>单纯复形 $\Delta$ 的 Betti 数由诱导子复形的简约同调给出（Hochster 公式），Gorenstein 性 $\iff$ $\Delta$ 为 Gorenstein$^\ast$ 复形（链接同调集中于顶维、$|\Delta|$ 广义球面）；</li>
    <li>Alexander 对偶把 Cohen–Macaulay 性翻译成对偶理想的线性分解，Gorenstein 性对应<b>对称分解</b>；</li>
    <li>余维 3 的 Buchsbaum–Eisenbud 结构定理：$I$ 由 $(2n+1)\times(2n+1)$ 反对称矩阵的 $2n$ 阶 Pfaffian 生成，最小自由分解自带镜像对称 $0\to S\to S^{2n+1}\xrightarrow{A}S^{2n+1}\to S$。</li>
  </ul>
</div>

<h4 class="ar-mgroup c-violet">Artin 代数侧：把单侧同调维数翻成左右对称</h4>
<div class="ar-method c-violet">
  <div class="ar-method-head"><span class="ar-method-name">virtually Gorenstein：余挠理论路线</span><span class="ar-m-tag">Beligiannis</span></div>
  <ul class="ar-m-pts">
    <li>基础事实：$\mathrm{id}_\Lambda(\Lambda)\le 1 \iff \mathrm{id}_{\Lambda^{\mathrm{op}}}(\Lambda^{\mathrm{op}})\le 1$（Bongartz 补推论）——低维情形天然对称；</li>
    <li>virtually Gorenstein 条件（$\mathcal{GP}^\perp={}^\perp\mathcal{GI}$）把左右两侧的 Gorenstein 对象族配对，GSC 在此类上成立（Beligiannis 2007）；</li>
    <li>方法要点：用余挠理论把「内射维数有限」翻译成模范畴里的正交配对，再借配对对称性传回另一侧。</li>
  </ul>
</div>
<div class="ar-method c-violet">
  <div class="ar-method-head"><span class="ar-method-name">导出范畴：零调内射复形判据</span><span class="ar-m-tag">Shaul 2023</span></div>
  <ul class="ar-m-pts">
    <li>把 GSC 转译为无界导出范畴 $\mathcal{D}(\Lambda)$ 的性质：在有对偶复形的交换 Noether 环上，任何<b>上有界零调内射复形必零同伦</b>；</li>
    <li>对非交换 Noether 环，该性质与 GSC <b>等价</b>——于是 GSC 变成内射复形的刚性定理；</li>
    <li>优势：可沿 Noether 环、DG-环方向推广，把「有限性对称」纳入导出范畴的框架。</li>
  </ul>
</div>

<p class="ar-mnote"><b>统一观点：</b>一切路线都在构造「对偶结构」——数值半群的补对称、Stanley–Reisner 复形的 Alexander 对偶、Artin 代数的左右内射维数，再让 Gorenstein 性（标准模循环 / 自内射维数对称）从中涌现。方法可迁移：Apéry 集 → $d$-对称与几乎对称半群分类；Pfaffian/Hilbert–Burch → 余维 2、3 的 Gorenstein 理想分类；粘合 → 高嵌入维数半群的递归构造；导出范畴 → Noether 环与 DG-环的 Gorenstein 对称性。</p>

<h3 class="ar-subhead">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> M. Auslander, M. Bridger, <i>Stable Module Theory</i>, Mem. Amer. Math. Soc. <b>94</b>, 1969.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> E. E. Enochs, O. M. G. Jenda, <i>Gorenstein injective and projective modules</i>, Math. Z. <b>220</b> (1995), 611–633.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> H. Holm, <i>Gorenstein homological dimensions</i>, J. Pure Appl. Algebra <b>189</b> (2004), 167–193.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> L. W. Christensen, A. Frankild, H. Holm, <i>On Gorenstein projective, injective and flat dimensions</i>, J. Algebra <b>302</b> (2006), 231–279.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> A. Beligiannis, <i>On algebras with virtually Gorenstein projective modules</i>, J. Algebra <b>288</b> (2005), 137–211.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> L. Xiong, P. Zhang, <i>Gorenstein projective modules over triangular matrix Artin algebras</i>, 2012.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> L. W. Christensen, E. Estrada, J. D. Thompson, <i>Gorenstein weak global dimension is symmetric</i>, Math. Nachr. (2021).</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> L. Gélinas, <i>Dominant dimension and finitistic dimension</i>, 2022.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> 周国栋团队, <i>Bounded extension $B\subset A$ 上 Gorenstein 投射稳定范畴等价</i>, 杭州师范大学报告, 2023.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> S. Khatami, S. Yassemi, <i>Gorenstein injective dimension of modules over local rings</i>, arXiv:math/0306020 (2003).</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> W. Li, <i>On a proof of the Gorenstein Symmetry Conjecture</i>, arXiv:2607.28011 (2026), 预印本待审。</p>
