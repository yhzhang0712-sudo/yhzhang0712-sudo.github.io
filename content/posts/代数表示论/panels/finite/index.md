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
