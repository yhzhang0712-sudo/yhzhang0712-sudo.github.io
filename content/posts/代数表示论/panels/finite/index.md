---
title: "finite"
headless: true
---
<h3 class="ar-subhead">猜想陈述</h3>
<p><strong>有限维数猜想（FDC, Bass, 1960）</strong>：任何 Artin 代数 $\Lambda$ 上，有限投射维数的有限生成模，其投射维数一致有界。即</p>

$$ \operatorname{findim}\Lambda \;=\; \sup\{\,\operatorname{pd}_{\Lambda}M : M\in\operatorname{mod}\Lambda,\ \operatorname{pd}_{\Lambda}M<\infty\,\} \;<\; \infty . $$

<p>其中 $\operatorname{findim}\Lambda$ 称为 $\Lambda$ 的<strong>有限维数</strong>。该猜想由 Bass 于 1960 年作为“猜想 II”提出；同篇的“猜想 I”（小有限维数与大有限维数相等 $\operatorname{findim}=\operatorname{Findim}$）已由 Zimmermann-Huisgen 在 1992 年用单项式代数反例否定（$\operatorname{findim}=n$，$\operatorname{Findim}=n+1$）。</p>

<h3 class="ar-subhead">研究现状</h3>
<ul class="ar-timeline">
  <li><span class="ar-year">1960</span>Bass 提出两个猜想，并证明根基平方零代数上 $\operatorname{findim}$ 有限。</li>
  <li><span class="ar-year">1971</span>Auslander 证明表示有限代数满足 $\operatorname{findim}\le 1$。</li>
  <li><span class="ar-year">1992</span>Zimmermann-Huisgen 用 $J^3=0$ 的单项式代数否定猜想 I（<i>Invent. Math.</i> 108, 369–383）。</li>
  <li><span class="ar-year">2005</span>Igusa–Todorov 引入 $\Psi$-函子，证明 $\operatorname{repdim}\le 3$ 时 $\operatorname{findim}$ 有限；Smalø（2000）给出 $\operatorname{Findim}-\operatorname{findim}$ 任意大之例。</li>
  <li><span class="ar-year">2010s</span>Chan–Iyama–Marczinzik 证明 Cohen–Macaulay Artin 代数 $\operatorname{findim}\le 2$；
    <p>Geiß–Reiten 证明 gentle 代数 $\operatorname{findim}\le 1$；</p>
    <p>Rickard（2018）建立内射生成导出范畴刻画。</p></li>
  <li><span class="ar-year">2020</span>Ringel 给出 Nakayama 代数的显式公式 
  $$\operatorname{findim}=\max_S\min\{\operatorname{pd}S,\operatorname{pd}I(S)\}.$$</li>
  <li><span class="ar-year">2022</span>Gélinas 用 delooping level 控制 $\operatorname{findim}$，并证明两个单点正支配维数代数的情形；Marczinzik 进一步强化此结果。</li>
  <li><span class="ar-year">2024</span>Cummings 证明 $\operatorname{findim}$ 左右对称等价于 FDC；
  <p>Kershaw 构造 delooping level 无限的反例。</p></li>
  <li><span class="ar-year">2025</span>Giatagantzidis 发展箭头消去约化技术。</li>
</ul>

<p><strong>FDC 在以下代数类上成立：</strong></p>
<ul>
  <li>表示有限代数（$\operatorname{findim}\le 1$，Auslander 1971）；</li>
  <li>Nakayama 代数（显式公式，Ringel 2020/21）；</li>
  <li>gentle 代数（Gorenstein 维数 $\le 1$，Geiß–Reiten）；</li>
  <li>Cohen–Macaulay Artin 代数（$\operatorname{findim}\le 2$，Chan–Iyama–Marczinzik）；</li>
  <li>Gorenstein 代数（$\operatorname{findim}\le$ Gorenstein 维数）；</li>
  <li>$\operatorname{repdim}\le 3$ 的 Artin 代数（Igusa–Todorov $\Psi$-函子）；</li>
  <li>Igusa–Todorov 代数；</li>
  <li>两个单点正支配维数代数（Gélinas 2022）；</li>
  <li>表示有限代数上模的自同态代数（Wei 2008）。</li>
</ul>
<h3 class="ar-subhead">研究方法</h3>
<p>各已证代数类的证明，本质可归结为少数主线的反复运用——<strong>把投射维数的增长控制为某个可刻画量</strong>（合冲轨道、根层组合、子代数结构、Gorenstein 对称性或导出范畴的生成条件）。按策略可分为两翼：</p>
<div class="ar-mmap">
  <div class="ar-mmap-col c-blue">
    <div class="ar-mmap-title">化归型：把未知代数压回已知类</div>
    <div class="ar-mmap-sub">“目标端”是 gl.dim 有限或自入射的平凡代数</div>
    <ul class="ar-mmap-list">
      <li>根嵌入与子代数传递（EHIS）</li>
      <li>特征倾斜与标准分层（AHLU）</li>
      <li>根幂扩张与链化归（Xi）</li>
    </ul>
  </div>
  <div class="ar-mmap-col c-teal">
    <div class="ar-mmap-title">控制型：在已知结构内一致界住 pd</div>
    <div class="ar-mmap-sub">把 findim 有限化为排除病态分解</div>
    <ul class="ar-mmap-list">
      <li>根层组合分析（GHZ）</li>
      <li>Igusa–Todorov 函数</li>
      <li>Gorenstein 厚子范畴 / 内射生成</li>
    </ul>
  </div>
</div>
<p class="ar-mnote">两类方法由 <b>Huisgen-Zimmermann 的同调多米诺效应</b>（<i>Invent. Math.</i> 1992）相连：某单模 $\operatorname{pd}S=\infty$ 当且仅当存在 pd 任意大的有限 pd 模——“证明 findim 有限”等价于“排除一类病态极小分解”，各类证明的差别仅在于用何种结构实现这一排除。</p>

<h4 class="ar-mgroup c-red">化归型：压向平凡端</h4>
<div class="ar-method c-red">
  <div class="ar-method-head"><span class="ar-method-name">平凡化</span><span class="ar-m-tag">目标端</span></div>
  <ul class="ar-m-pts">
    <li><b>整体维数有限</b>：gl.dim $A<\infty\Rightarrow\operatorname{findim}A\le\operatorname{gl.dim}A$——拟遗传（Schur、$q$-Schur、Hecke）、分段遗传代数属此；</li>
    <li><b>自入射</b>：有限 pd 模必投射，$\operatorname{findim}=0$——群代数块、有限维 Hopf 代数属此；</li>
    <li>本身不含新技术，却是各化归链压缩的终点。</li>
  </ul>
</div>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">根嵌入与子代数传递</span><span class="ar-m-tag">EHIS 2004</span></div>
  <ul class="ar-m-pts">
    <li>若 $f:A\to B$ 为<b>根嵌入</b>（共享 Jacobson 根）且 $B$ 表示有限，则 $C_f:=A\oplus A^*\oplus N$（$N$ 取遍 $B$ 的不可分解模）使 $\operatorname{End}_A(C_f)$ <b>拟遗传</b>且 gl.dim $\le 3$，从而 $\operatorname{repdim}A\le 3$；</li>
    <li>特殊双列代数按维数归纳、逐步降维到表示有限基例；Schroll 2018 以 radical embedding + splitting 推广至特殊多序列代数。</li>
  </ul>
</div>
<div class="ar-method c-violet">
  <div class="ar-method-head"><span class="ar-method-name">特征倾斜与标准分层</span><span class="ar-m-tag">AHLU 2000</span></div>
  <ul class="ar-m-pts">
    <li>标准分层代数存在<b>特征倾斜模</b> $T$，使 $A/\operatorname{ann}T$ 整体维数有限——不要求 gl.dim 有限，而是借标准模滤过获得 pd 的间接控制；</li>
    <li>findim 可由 pd $T$ 计算。</li>
  </ul>
</div>
<div class="ar-method c-green">
  <div class="ar-method-head"><span class="ar-method-name">根幂扩张与链化归</span><span class="ar-m-tag">Xi 学派</span></div>
  <ul class="ar-m-pts">
    <li>沿<b>根幂理想扩张</b>传递 findim 有限性（扩张右有界、$I\cdot\operatorname{rad}B$ 满足理想条件等）；</li>
    <li>配合链 $A=A_0\supseteq A_1\supseteq\cdots\supseteq A_n$（$A_n$ 表示有限）把一般代数压缩回已证类；近年的 radical preservation 与箭头消去（Giatagantzidis 2025）进一步精化。</li>
  </ul>
</div>

<h4 class="ar-mgroup c-teal">控制型：给出 pd 的一致上界</h4>
<div class="ar-method c-teal">
  <div class="ar-method-head"><span class="ar-method-name">根层组合分析</span><span class="ar-m-tag">GHZ 学派</span></div>
  <ul class="ar-m-pts">
    <li>当关系受限（幂零、单项式）时，极小投射分解的根层由单模重数组合刻画，合冲算子 $\Omega$ 有显式图论模型：GKK 1991 证单项式代数上 $\operatorname{IFPD}(A)\lt n-1$，Igusa–Zacharia 用“合冲对”加强为 $\operatorname{id}M<\dim\operatorname{rad}A$；</li>
    <li>Mochizuki 1965 处理 $J^2=0$；GHZ 1991 处理 $J^3=0$。</li>
  </ul>
</div>
<div class="ar-method c-amber">
  <div class="ar-method-head"><span class="ar-method-name">Igusa–Todorov 函数</span><span class="ar-m-tag">统一框架</span></div>
  <ul class="ar-m-pts">
    <li>设 $\varphi(M):=\min\{\,d:\Omega^dM\in\operatorname{add}(M\oplus M_1\oplus\cdots\oplus M_n)\,\}$，则 $\operatorname{pd}M\le\varphi(M)+\varphi(\Omega M)+2$；</li>
    <li>$\operatorname{repdim}A\le 3$ 时存在生成-余生成模 $M$ 使任意 $X$ 落入 $0\to X\to M_0\to M_1\to\tau^{-1}X\to 0$（$M_i\in\operatorname{add}M$），pd 被一致界住——一次性覆盖特殊双列/弦代数（EHIS）、稳定遗传（Xi）、表示有限（repdim $\le 2$）、$J^3=0$、每根层至多 3 个不可分解模等；</li>
    <li>局限：Rouquier 证 repdim 可任意大（外代数张量幂），该框架受 ceiling 限制。</li>
  </ul>
</div>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">Gorenstein 同调对称</span><span class="ar-m-tag">Beligiannis</span></div>
  <ul class="ar-m-pts">
    <li>对左 Gorenstein Artin 代数 $\Lambda$：右 Gorenstein $\Leftrightarrow$ findim $\Lambda<\infty$ $\Leftrightarrow$ $\operatorname{Thick}(\operatorname{proj}\Lambda)$ 在 mod $\Lambda$ 中<b>反变有限</b>；</li>
    <li>双侧 Gorenstein 代数由此满足 FDC；该定理同时表明：FDC 整体成立将推出 Gorenstein 对称猜想。</li>
  </ul>
</div>
<div class="ar-method c-violet">
  <div class="ar-method-head"><span class="ar-method-name">导出范畴内射生成</span><span class="ar-m-tag">Rickard 2019</span></div>
  <ul class="ar-m-pts">
    <li>若 $D(\operatorname{Mod-}A)$ 中由内射模生成的最小局部化三角子范畴为整个 $D$，则 findim $A<\infty$；</li>
    <li>全部 Noether 交换环满足此条件——目前唯一给出交换世界系统证据、且在导出等价下保持的充分条件。</li>
  </ul>
</div>

<div class="ar-mtake">
  <p><b>突破口：</b>化归型（EHIS 根嵌入、Xi 链、Cummings 左右对称等价）与控制型（IT 函数、Gorenstein 厚子范畴、内射生成）尚未交汇——一般证明最可能出现在两类方法的结合处：将 Xi 型链化归与 IT 型控制函数结合，或将 Gorenstein 对称与内射生成统一为充分条件网络。</p>
</div>

<h3 class="ar-subhead">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> H. Bass, <i>On the ubiquity of Hopfian modules</i>, Trans. Amer. Math. Soc. <b>95</b> (1960), 466–488.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> M. Auslander, <i>Representation dimension of Artin algebras</i>, Queen Mary College Math. Notes, 1971.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> B. Zimmermann-Huisgen, <i>Homological domino effects and the first finitistic dimension conjecture</i>, Invent. Math. <b>108</b> (1992), 369–383.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> K. Igusa, S. O. Smalø, G. Todorov, <i>Finite projectivity and contravariant finiteness</i>, Proc. Amer. Math. Soc. <b>109</b> (1990), 937–941.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> H. Krause, <i>The spectrum of a locally finite algebra</i>, 1998.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> K. Igusa, G. Todorov, <i>On the finitistic global dimension conjecture for Artin algebras</i>, Contemp. Math. <b>374</b> (2005), 201–204.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> D. Smalø, <i>The extremal structure of Ext</i>, 2000.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> J. Wei, <i>Auslander–Reiten conjecture and Gorenstein algebra</i>, arXiv:0803.3364 (2008).</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> L. Angeleri-Hügel, J. Trlifaj, <i>Tilting theory and the finitistic dimension conjecture</i>, 2002.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> J. Rickard, <i>The finiteness of the finitistic dimension</i>, arXiv:1804.09801 (2018).</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> C. M. Ringel, <i>The finitistic dimension of a Nakayama algebra</i>, 2020/21.</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> D. Gélinas, <i>One-point support vertex algebras</i>, 2022.</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> D. Cummings, <i>A note on the finitistic dimension conjecture</i>, Bull. London Math. Soc. <b>56</b> (2024), 624–633.</p>
<p class="ar-ref"><span class="ar-ref-no">[14]</span> D. Kershaw, <i>Infinite delooping level examples</i>, 2024.</p>
<p class="ar-ref"><span class="ar-ref-no">[15]</span> P. Giatagantzidis, <i>Reduction by arrow cancellations</i>, arXiv:2506.23747, arXiv:2507.12978 (2025).</p>
