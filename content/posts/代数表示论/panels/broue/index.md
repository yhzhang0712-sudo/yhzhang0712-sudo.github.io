---
title: "broue"
headless: true
---
<h3 class="ar-subhead">猜想陈述</h3>
<p><strong>Broué 交换亏群猜想（Broué's Abelian Defect Group Conjecture, 1988/1990）</strong>：设 $G$ 为有限群，$\ell$ 为素数，$(K,\mathcal{O},k)$ 为 $G$ 的全体子群的分裂 $\ell$-模系统。设 $B$ 为 $\mathcal{O}G$（或 $kG$）的块代数，$P$ 为 $B$ 的亏群（defect group）。若 $P$ 为<strong>交换群</strong>，则 $B$ 与其在 $N_G(P)$ 中的 Brauer 对应块 $b$ <strong>导出等价</strong>（derived equivalent）：</p>

$$ D^b(B\text{-mod}) \;\simeq\; D^b(b\text{-mod}) . $$

<p>其中 $D^b(\cdot\text{-mod})$ 为有界导出范畴。该猜想由 Michel Broué 于 1988 年提出，正式发表于 <i>Astérisque</i> <b>181–182</b> (1990)。它体现块论"局部控制全局"纲领：块的表示论应完全由其亏群正规化子中的局部结构所决定，且蕴含（阿贝尔亏群块的）Alperin–McKay 猜想。</p>

<h3 class="ar-subhead">细化与推广</h3>
<ul>
  <li><strong>Rickard 细化（splendid equivalence）</strong>：导出等价可由<strong>splendid Rickard 复形</strong>实现，即每个项都是顶点含于亏群的 $p$-置换模的 Rickard 复形（Rickard 1996）。</li>
  <li><strong>Kessar–Linckelmann 细化（2018）</strong>：对<strong>任意</strong>完备离散赋值环 $\mathcal{O}$（不要求分裂剩余域），$\mathcal{O}Gb$ 与其 Brauer 对应块之间存在 splendid Rickard 等价。该细化蕴含 Navarro 与 Turull 的 Alperin–McKay 细化（Boltje）。</li>
  <li><strong>几何版本</strong>：对有限约化群与 unipotent 块，Broué 提出用（抛物型）Deligne–Lusztig 簇的上同调复形诱导导出等价的版本；Broué–Malle–Michel 处理大素数 $\Phi_d$-块情形。</li>
</ul>

<h3 class="ar-subhead">研究现状</h3>
<ul class="ar-timeline">
  <li><span class="ar-year">1990</span>Broué 正式发表猜想（<i>Astérisque</i> <b>181–182</b>, 61–92）。</li>
  <li><span class="ar-year">1996–98</span>Rickard、Rouquier 证明<strong>循环亏群</strong>块情形：导出等价（且可做强形式）。</li>
  <li><span class="ar-year">2008</span>Chuang–Rouquier 用 $\mathfrak{sl}_2$-范畴化证明：同构亏群的对称群块两两 splendidly Rickard 等价，从而对称群与一般线性群 $\mathrm{GL}_n(q)$（非定义特征）情形成立（<i>Ann. of Math.</i> <b>167</b>, 245–298）——迄今最大突破。</li>
  <li><span class="ar-year">2011–15</span>Koshitani–Noeske 等逐一验证散在单群 $\mathrm{Co}_1$、$\mathrm{Co}_3$、$J_4$、$2.\mathrm{HS}$、$\mathrm{O'N}$、$\mathrm{HS}$ 的若干块（多含强形式）。</li>
  <li><span class="ar-year">2014–15</span>Dudas–Varagnolo–Vasserot 用范畴化证明酉群 $\mathrm{GU}_n(q)$ 与经典群 $\mathrm{SO}_{2n+1}(q)$、$\mathrm{Sp}_{2n}(q)$（奇数线性素数）的 unipotent 块；配合 Bonnafé–Dat–Rouquier 约化定理。</li>
  <li><span class="ar-year">2018</span>Kessar–Linckelmann 提出非分裂系数环上的细化版本（Springer Proc. Math. Stat. <b>242</b>, 181–212），并证明循环亏群块的细化成立。</li>
  <li><span class="ar-year">2022–23</span>Huang–Li–Zhang 证明细化版本对交错群、$\mathrm{SL}(2,p^n)/\mathrm{GL}(2,p^n)$、$\mathrm{SL}_n(q)/\mathrm{GL}_n(q)$（定义特征）与 $\mathrm{GL}_n(q)$ unipotent 块（非定义特征）成立；Huang 处理 Klein 四元亏群块。</li>
  <li><span class="ar-year">2025</span>Du–Huang 把 Kleshchev–Livesey 的对称/交错群双覆盖 RoCK 块 Morita 与 splendid Rickard 等价下降至 $\mathbb{Z}_p$，证明其细化猜想；系列论文推进 $\mathrm{SO}_{2n+1}(q)$ 奇数线性素<strong>全部</strong>块（先孤立 RoCK 块）。</li>
</ul>

<p><strong>已成立的主要情形：</strong></p>
<ul>
  <li>循环亏群块（Rickard 1996；Rouquier 1998）；</li>
  <li>对称群与一般线性群 $\mathrm{GL}_n(q)$（非定义特征）（Chuang–Rouquier 2008）；</li>
  <li>交错群（Marcus；细化版本 Huang 等）；</li>
  <li>Klein 四元亏群块（Huang 2023）；</li>
  <li>散在单群若干块（Koshitani–Noeske 等）；</li>
  <li>酉群 $\mathrm{GU}_n(q)$、经典群 $\mathrm{SO}_{2n+1}(q)$/$\mathrm{Sp}_{2n}(q)$ 的线性素 unipotent 块（Dudas–Varagnolo–Vasserot）；</li>
  <li>$\mathrm{SL}(2,p^n)$、$\mathrm{GL}(2,p^n)$ 及定义特征线性群（Huang–Li–Zhang）；</li>
  <li>$p$-可解群与惯性块的若干情形。</li>
</ul>

<h3 class="ar-subhead">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> M. Broué, <i>Isométries parfaites, types de blocs, catégories dérivées</i>, Astérisque <b>181–182</b> (1990), 61–92.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> J. Rickard, <i>Splendid equivalences: derived categories and permutation modules</i>, Proc. London Math. Soc. (3) <b>72</b> (1996), 331–358.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> R. Rouquier, <i>The derived category of blocks with cyclic defect groups</i>, in: Derived Equivalences for Group Rings, Lecture Notes in Math. <b>1685</b>, Springer, 1998, 199–220.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> J. Chuang, R. Rouquier, <i>Derived equivalences for symmetric groups and $\mathfrak{sl}_2$-categorification</i>, Ann. of Math. (2) <b>167</b> (2008), 245–298.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> R. Kessar, M. Linckelmann, <i>Descent of equivalences and character bijections</i>, in: Geometric and Topological Aspects of the Representation Theory of Finite Groups, Springer Proc. Math. Stat. <b>242</b>, Springer, 2018, 181–212.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> X. Huang, P. Li, J. Zhang, <i>The strengthened Broué abelian defect group conjecture for $\mathrm{SL}(2,p^n)$ and $\mathrm{GL}(2,p^n)$</i>, J. Algebra <b>633</b> (2023), 114–137.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> X. Huang, <i>Descent of splendid Rickard equivalences in alternating groups</i>, J. Algebra (2024); arXiv:2111.10922.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> Y. Du, X. Huang, <i>On RoCK blocks of double covers of symmetric and alternating groups and the refined Broué conjecture</i>, arXiv:2510.02147 (2025).</p>
