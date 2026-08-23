---
title: "代数表示论"
hideTitle: true
math: true
---

<div class="ar-section-switch">
  <button type="button" class="ar-sec-btn sec-violet active" onclick="switchArSection('conjectures', this)">核心猜想</button>
  <button type="button" class="ar-sec-btn sec-blue" onclick="switchArSection('theory', this)">基础理论</button>
</div>

<section id="ar-section-conjectures" class="ar-section">

<p class="ar-image-wrap"><img src="/images/conjecture-relations.png" alt="猜想之间的关系图"></p>

<div class="ai-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-red active" onclick="switchArTab('finite', this)">有限维数猜想</button>
    <button type="button" class="ai-tab-btn tab-orange" onclick="switchArTab('nakayama', this)">Nakayama猜想</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchArTab('gorenstein', this)">Gorenstein对称猜想</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchArTab('wakamatsu', this)">Wakamatsu tilting猜想</button>
    <button type="button" class="ai-tab-btn tab-violet" onclick="switchArTab('cartan', this)">Cartan行列式猜想</button>
  </div>

  <div id="ar-panel-finite" class="ai-tab-panel active">
<h3 class="ar-subhead">猜想陈述</h3>
<p>有限维数猜想（Finitistic Dimension Conjecture，简称 FDC）断言：任何 Artin 代数 $\Lambda$ 上，有限投射维数的有限生成模，其投射维数一致有界。即</p>

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
<p><strong>FDC研究的方法：</strong>

</p>

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
  </div>

  <div id="ar-panel-nakayama" class="ai-tab-panel">
<h3 class="ar-subhead">猜想陈述</h3>
<p><strong>经典 Nakayama 猜想</strong>（NC，1958）：若 Artin 代数 $\Lambda$ 的支配维数 $\operatorname{domdim}\Lambda=\infty$，则 $\Lambda$ 是自内射代数（拟 Frobenius 代数）。这里</p>

$$ \operatorname{domdim}\Lambda \;=\; \sup\{\,k : I^{i}\in\mathcal{P}_{\Lambda},\ 0\le i\le k-1\,\}. $$

<p><strong>Tachikawa 第二猜想</strong>（TC2，1970）：自内射代数上，若$\operatorname{Ext}^{i}(M,M)=0$ 对所有 $i>0$，则$M$投射。</p>

<p><strong>广义 Nakayama 猜想</strong>（GNC，Auslander–Reiten，1975）：若 $\operatorname{Ext}^{i}(M,M\oplus\Lambda)=0$ 对所有 $i>0$，则 $M$ 投射。</p>

<p><strong>强 Nakayama 猜想</strong>（SNC, Colby–Fuller, 1990）：设 $A$ 是一个 Artin 代数，$M$ 是 $A$ 上的任意非零模，则总存在一个非负整数 $n \ge 0$，使得</p>

$$ \operatorname{Ext}_A^n(M,\, A) \;\neq\; 0. $$

<h3 class="ar-subhead">研究现状</h3>
<ul class="ar-timeline">
  <li><span class="ar-year">1975</span>Auslander–Reiten 提出广义 Nakayama 猜想（AR 猜想），并证明全体代数上 GNC $\Leftrightarrow$ ARC。</li>
  <li><span class="ar-year">1986</span>Fuller–Zimmermann-Huisgen 用 Cartan 滤过环方法，对一类代数同时建立 GNC 与 Cartan 行列式猜想（<i>Trans. AMS</i> 294, 679–691）。</li>
  <li><span class="ar-year">1995</span>Auslander–Reiten–Smalø证明有限表示型代数满足 ARC。</li>
  <li><span class="ar-year">2000s</span>Zhou–Zimmermann（2012）证明弱对称多项式增长代数满足 ARC；
  <p>Christensen–Holm 证明 Auslander 条件 (AC) 环满足 ARC。</p></li>
  <li><span class="ar-year">2002</span>Huneke–Leuschke 证明含 $\mathbb{Q}$ 的 excellent Cohen–Macaulay 正规域上的 complete intersection 局部环满足 ARC。</li>
  <li><span class="ar-year">2020</span>Ariki–Iyama–Park 指出 Pogorzaly 对 self-injective special biserial 代数的证明部分有误，但稳定等价下 special biserial 时 ARC 成立；

  <li><span class="ar-year">2022</span>陈-方-惠证明  Morita-Gorenstein algebras代数满足 Nakayama 猜想。</li>
  <li><span class="ar-year">2023</span>J. Algebra 623, 42–63（arXiv:2212.06467）证明 skew-gentle 代数满足 ARC。</li>
</ul>

<p><strong>NC / GNC / ARC 在以下代数类上成立：</strong>
<ul>
    <li>有限表示型代数</li>
    <li>$J^2=0$ 代数</li>
    <li>$J^3=0$ 代数（局部）</li>
    <li>对称双列代数</li>
    <li>弱对称多项式增长代数</li>
    <li>满足 Auslander 条件 (AC) 的环</li>
    <li>skew-gentle 代数</li>
    <li>Morita-Gorenstein algebras代数。</li>
</ul>
</p>

<p><strong>NC研究的方法：</strong>

<h3 class="ar-subhead">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> T. Nakayama, <i>On algebras with complete homology</i>, Nagoya Math. J. <b>13</b> (1958).</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> H. Tachikawa, <i>Quasi-Frobenius Rings and Generalizations</i>, Lecture Notes in Math. 351, Springer, 1973.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> M. Auslander, I. Reiten, <i>On a generalized version of the Nakayama conjecture</i>, Proc. Amer. Math. Soc. <b>52</b> (1975), 69–74.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> K. R. Fuller, B. Zimmermann-Huisgen, <i>On the generalized Nakayama conjecture and the Cartan determinant problem</i>, Trans. Amer. Math. Soc. <b>294</b> (1986), 679–691.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> M. Auslander, I. Reiten, S. O. Smalø, <i>Representation Theory of Artin Algebras</i>, Cambridge Stud. Adv. Math. 36, Cambridge Univ. Press, 1995.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> C. Huneke, G. Leuschke, <i>Two notions of dualities for maximal Cohen–Macaulay modules</i>, 2002.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> L. W. Christensen, H. Holm, <i>The Auslander condition on homologically finite subcategories</i>, Adv. Math. <b>221</b> (2009), 1577–1588.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> D. Zhou, H. Zimmermann, <i>Classifying the Morita algebras of biserial algebras</i>, Beitr. Algebra Geom. <b>53</b> (2012).</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> X. W. Chen, W. Hu, D. M. Qin, Y. Wang, <i>Stable equivalences of Morita type for self-injective algebras</i>, arXiv:2011.00391 (2020).</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> S. Ariki, O. Iyama, S. Park, <i>Special biserial algebras and the Nakayama conjecture</i>, arXiv:2212.06467 (2022).</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> C. C. Xi, <i>Universally Gorenstein algebras and the Nakayama conjecture</i>, 2022.</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> 惠昌常, 陈红星, <i>Nakayama 猜想在 strong Morita 与 virtually Gorenstein 代数上的进展</i>, 宁波大学报告, 2022.</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> R. Schulz, <i>A counterexample to the Nakayama conjecture in the non-Artinian setting</i>, 2023.</p>
  </div>

  <div id="ar-panel-gorenstein" class="ai-tab-panel">
<h3 class="ar-subhead">猜想陈述</h3>
<p>Gorenstein 对称猜想（GSC，Auslander-Reiten， 1975）：设 $\Lambda$ 是 Artin 代数，则：</p>

$$ \operatorname{id}_{\Lambda}\Lambda < \infty \;\Longrightarrow\; \operatorname{id}_{\Lambda^{\mathrm{op}}}\Lambda^{\mathrm{op}} < \infty . $$

相关猜想：
<p><strong>(1) 左右对称</strong>：$\operatorname{Ggldim}A=\operatorname{Ggldim}A^{\mathrm{op}}$；</p>
<p><strong>(2) 自内射维数对称</strong>：$\operatorname{Gid}_{A}A=\operatorname{Gid}_{A^{\mathrm{op}}}A^{\mathrm{op}}$（或其有限性的“当且仅当”对应）；</p>
<p><strong>(3) 投射模类对称</strong>：</p>

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

<p><strong>GSC研究的方法</strong>：</p>

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
  </div>

  <div id="ar-panel-wakamatsu" class="ai-tab-panel">
<h3 class="ar-subhead">猜想陈述</h3>
<p>设 $A$ 为 Artin 代数，$T$ 为 <strong>Wakamatsu tilting 模</strong>，即满足：
<ul>
  <li>(W1) $T\in\operatorname{mod}A$；</li>
  <li>(W2) $\operatorname{Ext}^{i}_{A}(T,T)=0$ 对所有 $i>0$（$T$ self-orthogonal）；</li>
  <li>(W3) 存在正合列
$$ 0\to A\to T_0\to T_1\to T_2\to\cdots ,\qquad T_i\in\operatorname{add}T , $$
</li>
</ul>
<p>且对每个 $i\ge 0$，像 $\operatorname{Im}f_i\in{}^{\perp}T=\{X:\operatorname{Ext}^{1}_{A}(X,T)=0\}$。

<strong>Wakamatsu tilting 猜想</strong>（WTC，Beligiannis-Reiten，2003）：若 $\operatorname{pd}_{A}T<\infty$，则 $T$ 是 classical tilting 模。</p>


<h3 class="ar-subhead">研究现状</h3>
<ul class="ar-timeline">
  <li><span class="ar-year">1990</span>Wakamatsu 将 tilting 模推广为允许无限投射维数的广义 tilting 模（<i>J. Algebra</i> 134, 289–325），源于自内射代数稳定等价研究。</li>
  <li><span class="ar-year">2004</span>Huang 引入 $U$-支配维数，证明 Wakamatsu tilting 模 ${}_A U$ 与 $U_{\Gamma}$ 的 $U$-支配维数相等。</li>
  <li><span class="ar-year">2007</span>Beligiannis–Reiten 系统提出并讨论 WTC，建立与 GNC、GSC 等猜想的联系。</li>
  <li><span class="ar-year">2009</span>Zhu–Ding 在左 coherent 环上研究 FP-injective dimension，给出 WTC 的部分答案。</li>
  <li><span class="ar-year">2004</span>Mantese–Reiten 证明 WTC 对 Gorenstein Artin 代数成立。</li>
  <li><span class="ar-year">2008</span>Wei 证明 $\operatorname{repdim}\le 3$ 的 Artin 代数及其 Auslander 生成元的自同态代数上 GNC、WTC、GSC 同时成立。</li>
  <li><span class="ar-year">2023</span>Enomoto 对表示有限代数引入 projectively Wakamatsu tilting 模，证明四项等价。</li>
  <li><span class="ar-year">2024</span>Divaani-Aazar–Fallah–Tousi 证明 GARC 蕴含 WTC（<i>Arch. Math.</i> 125 (2025), 291–302），并利用 tensorly faithful 模证明 left Artinian local 环与有限群群环情形。</li>
</ul>

<h3 class="ar-subhead">前沿成果</h3>
<p><strong>WTC 在以下代数类上成立：</strong>
<ul>
  <li>Gorenstein Artin 代数（Mantese–Reiten）；</li>
  <li>表示有限代数；</li>
  <li>left Artinian local 环与有限群群环 $R[G]$（Divaani-Aazar–Fallah–Tousi 2024）；</li>
  <li>$\operatorname{repdim}\le 3$ 的 Artin 代数及其自同态代数（Wei 2008）。</li>
</ul>
</p>

<p><strong>WTC研究的方法：</strong>

<h3 class="ar-subhead">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> T. Wakamatsu, <i>Stable equivalence of self-injective algebras and a generalization of tilting modules</i>, J. Algebra <b>134</b> (1990), 289–325.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> A. Beligiannis, I. Reiten, <i>Homological and Homotopical Aspects of Torsion Theories</i>, Mem. Amer. Math. Soc. <b>188</b>, 2007.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> Z. Y. Huang, <i>U-dominant dimensions and Wakamatsu tilting modules</i>, arXiv:math/0409150 (2004).</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> J. Mantese, I. Reiten, <i>Wakamatsu tilting modules</i>, J. Algebra <b>278</b> (2004), 532–548.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> J. Wei, <i>Auslander–Reiten conjecture and Gorenstein algebra</i>, arXiv:0803.3364 (2008).</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> H. Enomoto, <i>Projectively Wakamatsu tilting modules for representation-finite algebras</i>, arXiv:2301.13498 (2023).</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> B. Zhu, N. Q. Ding, <i>Wakamatsu tilting modules over left coherent rings</i>, arXiv:math/0602572 (2006).</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> K. Divaani-Aazar, A. Mahin Fallah, M. Tousi, <i>On the Wakamatsu tilting conjecture</i>, Arch. Math. <b>125</b> (2025), 291–302（arXiv:2407.06353, 2024）。</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> R. Schulz, <i>Boundedness and periodicity of modules over QF rings</i>, J. Algebra <b>101</b> (1986), 450–469（GARC/ARC 反例）。</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> <i>Higher Morita–Tachikawa correspondence</i>, arXiv:2304.01370 (2023).</p>
  </div>

  <div id="ar-panel-cartan" class="ai-tab-panel">
<h3 class="ar-subhead">猜想陈述</h3>
<p>
<strong>Cartan 行列式猜想（CDC）：</strong>设 $\Lambda$ 是有限整体维数（$\operatorname{gl.dim}\Lambda<\infty$）的 Artin 代数，则其 Cartan 矩阵 $C(\Lambda)$ 的行列式等于 1。

Cartan 矩阵定义为 $c_{ij}=[P_i:S_j]$，其中 $S_1,\dots,S_n$ 是两两不同构的简单左模，$P_i$ 是 $S_i$ 的投射覆盖，$[P_i:S_j]$ 是简单模 $S_j$ 在 $P_i$ 的合成列中出现的重数。

<h3 class="ar-subhead">研究现状</h3>
<ul class="ar-timeline">
  <li><span class="ar-year">1954</span>Eilenberg 证明有限整体维数 Artin 代数 $\det C=\pm 1$。</li>
  <li><span class="ar-year">1983</span>Zacharia 证明整体维数 $\le 2$ 的 Artin 代数满足 CDC；
  <p>Wilson 证明整体维数有限的有限维正分次代数 $\det C=1$。</p></li>
  <li><span class="ar-year">1985</span>Burgess–Fuller–Voss–Zimmermann-Huisgen 证明串（左string）环上 $\det C=1\Leftrightarrow\operatorname{gl.dim}<\infty$；<p>Green–Gustafson–Zacharia 证明整体维数 $\le 2$ 代数对任意单模 $S$ 有 $\operatorname{Ext}^{2}(S,S)=0$。</p></li>
  <li><span class="ar-year">1986</span>Fuller–Zimmermann-Huisgen 用 Cartan 滤过环方法同时证明 GNC 与 CDC，对含 $J^3=0$ 的一类代数给出肯定回答，并证明 no-loop 性质 $\operatorname{Ext}^{1}(S,S)=0$。</li>
  <li><span class="ar-year">1989</span>Burgess–Fuller 证明拟遗传 Artin 代数满足 CDC。</li>
  <li><span class="ar-year">1992</span>Igusa 建立“分次 Cartan 行列式 = 相对循环同调的 Euler 特征”的 Igusa 公式。</li>
  <li><span class="ar-year">1998</span>Saorín 将 Wilson 方法推广到任意交换幺半群分次代数，证明强恰当分次的 aperiodic 交换幺半群代数满足 CDC。</li>
  <li><span class="ar-year">2014</span>Han–Qin 引入 $n$-recollement 与 $1$-derived-simple 代数，证明 CDC 对所有有限维代数成立当且仅当对所有 $1$-derived-simple 代数成立。</li>
  <li><span class="ar-year">2017</span>Ingalls–Paquette 通过幂等子代数与 Yoneda Ext-代数给出约简。</li>
  <li><span class="ar-year">2020</span>Han 将 Hirzebruch–Riemann–Roch 公式推广到有限整体维数基本代数。</li>
  <li><span class="ar-year">2026</span>Chen–Xi 对矩阵中心化子代数给出 Cartan 行列式显式公式并完全验证 CDC。</li>
</ul>

<p><strong>CDC 在以下代数类上成立：</strong>
<ul>
<li>整体维数 $\le 2$（Zacharia 1983；Green–Gustafson–Zacharia 1985）;</li>
<li>正分次代数（Wilson 1983）;</li>
<li>Cartan 滤过环含 $J^3=0$（Fuller–Zimmermann-Huisgen 1986）string（左string）环（Burgess–Fuller–Voss–Zimmermann-Huisgen 1985，且有强形式 $\det C=1\Leftrightarrow\operatorname{gl.dim}<\infty$）;</li>
<li>拟遗传 Artin 代数（Burgess–Fuller 1989）;</li>
<li>矩阵中心化子代数（Chen–Xi 2026，且该类上五项等价：拟遗传 $\Leftrightarrow\operatorname{gl.dim}<\infty\Leftrightarrow\operatorname{gl.dim}\le 2\Leftrightarrow I_c=\varnothing\Leftrightarrow\det C=1$）。</li>
</ul></p>

<p><strong>CDC研究的方法：</strong></p>

<h3 class="ar-subhead">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> S. Eilenberg, <i>Algebras of cohomologically finite dimension</i>, Comment. Math. Helv. <b>28</b> (1954), 310–319.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> D. Zacharia, <i>On the Cartan matrix of an Artin algebra of global dimension two</i>, J. Algebra <b>82</b> (1983), 353–357.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> G. V. Wilson, <i>The Cartan map on categories of graded modules</i>, J. Algebra <b>85</b> (1983), 390–398.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> W. D. Burgess, K. R. Fuller, E. R. Voss, B. Zimmermann-Huisgen, <i>The Cartan matrix as an indicator of finite global dimension for Artinian rings</i>, Proc. Amer. Math. Soc. <b>95</b> (1985), 157–165.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> E. L. Green, W. H. Gustafson, D. Zacharia, <i>On Artin rings of global dimension two</i>, J. Algebra <b>92</b> (1985), 375–379.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> K. R. Fuller, B. Zimmermann-Huisgen, <i>On the generalized Nakayama conjecture and the Cartan determinant problem</i>, Trans. Amer. Math. Soc. <b>294</b> (1986), 679–691.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> W. D. Burgess, K. R. Fuller, <i>On quasi-hereditary rings</i>, Proc. Amer. Math. Soc. <b>106</b> (1989), 321–328.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> K. Igusa, <i>Cyclic homology and the determinant of the Cartan matrix</i>, J. Pure Appl. Algebra <b>83</b> (1992), 101–119.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> M. Saorín, <i>Monoid gradings on algebras and the Cartan determinant conjecture</i>, Proc. Edinburgh Math. Soc. <b>41</b> (1998), 539–551.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> Y. Han, Y. Qin, <i>Reducing homological conjectures by n-recollements</i>, arXiv:1410.3223 (2014).</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> C. Ingalls, C. Paquette, <i>Homological behavior of idempotent subalgebras and Ext algebras</i>, arXiv:1703.08725 (2017).</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> Y. Han, <i>Hirzebruch–Riemann–Roch and Lefschetz type formulas for finite dimensional algebras</i>, arXiv:2008.11457 (2020).</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> B. Steinberg, <i>The modular representation theory of monoids and a conjecture on the Cartan determinant</i>, arXiv:2305.08251 (2023).</p>
<p class="ar-ref"><span class="ar-ref-no">[14]</span> F. Eisele, <i>A counterexample to a conjecture on Cartan determinants of monoid algebras</i>, arXiv:2306.14002 (2023).</p>
<p class="ar-ref"><span class="ar-ref-no">[15]</span> Z. Chen, C. C. Xi, <i>Singular equivalences and homological conjectures</i>, arXiv:2603.20643 (2026).</p>
  </div>
</div>

</section>

<section id="ar-section-theory" class="ar-section" hidden>

<div class="ai-tabs ar-theory-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-red active" onclick="switchArTheory('artheory', this)">Auslander-Reiten理论</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchArTheory('gabriel', this)">Gabriel定理</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchArTheory('tilting', this)">Tilting理论</button>
  </div>

  <div id="ar-theory-panel-artheory" class="ai-tab-panel active">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-theory-panel-gabriel" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-theory-panel-tilting" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>
</div>

</section>

<script>
function switchArSection(id, btn) {
  document.querySelectorAll('.ar-sec-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('.ar-section').forEach(function (s) { s.setAttribute('hidden', ''); });
  document.getElementById('ar-section-' + id).removeAttribute('hidden');
}
function switchArTab(id, btn) {
  // 仅作用于"核心猜想"这个 Tab 组
  var group = btn.closest('.ai-tabs');
  group.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  group.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  group.querySelector('#ar-panel-' + id).classList.add('active');
}
function switchArTheory(id, btn) {
  // 仅作用于"基础理论"这个 Tab 组
  var group = btn.closest('.ai-tabs');
  group.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  group.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  group.querySelector('#ar-theory-panel-' + id).classList.add('active');
}
</script>
