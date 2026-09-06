---
title: "gpc"
headless: true
---
<h3 class="ar-subhead">猜想陈述</h3>
<p><strong>Gorenstein 投射猜想（GPC）</strong>：设 $M$ 是 Gorenstein 投射模，若 $\operatorname{Ext}^{i}(M,M)=0$ 对 $i\gg 0$ 成立，则 $M$ 是投射模。</p>

<h3 class="ar-subhead">研究现状</h3>
<ul class="ar-timeline">
  <li><span class="ar-year">2010s</span>对单项式 Gorenstein 代数、若干自内射代数类等特殊类已获证明；系统表述与公开问题清单见 Chen Xiao-Wu 专著附录 C（arXiv:1712.04587）。</li>
  <li><span class="ar-year">现状</span>一般情形仍开放（🔴）。</li>
</ul>

<h3 class="ar-subhead">研究方法</h3>
<p>GPC（Luo–Huang 2008，源自 torsionless 模何时投射）是广义 Nakayama 猜想的特殊情形，在 Gorenstein 代数上与 ARC 重合。文献中的证明呈<b>双轨格局</b>：具体代数类上直接构造/分类 Gorenstein 投射模；抽象层面经 ARC、GNC、FDC 等猜想的传递关系或等价不变性间接推进。</p>
<div class="ar-mmap">
  <div class="ar-mmap-col c-red">
    <div class="ar-mmap-title">直接验证</div>
    <div class="ar-mmap-sub">构造/分类 GP 模，证自正交 ⟹ 投射</div>
    <ul class="ar-mmap-list">
      <li>Ext 消没条件组（自正交 + torsionless）；</li>
      <li>CM-有限 / IG-投射子类筛选；</li>
      <li>单项式代数的 perfect path 组合分类。</li>
    </ul>
  </div>
  <div class="ar-mmap-col c-amber">
    <div class="ar-mmap-title">猜想传递</div>
    <div class="ar-mmap-sub">由更广的同调猜想已知结果推出</div>
    <ul class="ar-mmap-list">
      <li>GNC ⇒ GPC（特殊情形）；</li>
      <li>Gorenstein 代数上 ⟺ ARC；</li>
      <li>有限 finitistic 维数、Araya 余维一法。</li>
    </ul>
  </div>
  <div class="ar-mmap-col c-blue">
    <div class="ar-mmap-title">不变性扩展</div>
    <div class="ar-mmap-sub">等价与扩张把已知结果搬去新类</div>
    <ul class="ar-mmap-list">
      <li>分离等价、奇异性范畴 recollement；</li>
      <li>Frobenius 扩张、excellent extension；</li>
      <li>GP 模邻域（弱 Gorenstein）反证支撑。</li>
    </ul>
  </div>
</div>

<h4 class="ar-mgroup c-red">直接验证：消没条件与模类筛选</h4>
<div class="ar-method c-red">
  <div class="ar-method-head"><span class="ar-method-name">自正交 + torsionless：GPC 的起点</span><span class="ar-m-tag">Luo–Huang 2008</span></div>
  <ul class="ar-m-pts">
    <li>本质：把 Gorenstein 投射性拆成一组 Ext 消没条件，借对偶 $(-)^\ast$ 建立左右对称；</li>
    <li>radical square zero 局部代数：$\operatorname{Ext}^{1}(M,M)=0$ 已足以保证 torsionless 模 $M$ 投射；</li>
    <li>交换 Artin 环：要求 $\operatorname{Ext}^{i}(M,\Lambda)=0\,(i=1,2,3)$ 与 $\operatorname{Ext}^{i}(M,M)=0\,(i=1,2)$ 同时成立，得到「交换 Artin 环上有限生成 GP 模自正交 $\iff$ 投射」，即 GPC 在交换 Artin 环上成立。</li>
  </ul>
</div>
<div class="ar-method c-red">
  <div class="ar-method-head"><span class="ar-method-name">Auslander 型：CM-有限是关键充分条件</span><span class="ar-m-tag">Chen 2008 / Zhang 2012</span></div>
  <ul class="ar-m-pts">
    <li>Chen 的 Gorenstein Auslander 定理：Gorenstein Artin 代数 $A$ 是 CM-有限的 $\iff$ 每个（不必有限生成的）GP $A$-模都是有限生成 GP 模的直和；</li>
    <li>Zhang 由此证明 GPC 对 CM-有限代数、Gorenstein 代数及有限左/右 finitistic 维数代数均成立；</li>
    <li>附带收获：GPC 左右对称（$\Lambda$ 满足 $\iff\Lambda^{\mathrm{op}}$ 满足），优于尚不知对称性的 GNC。</li>
  </ul>
</div>
<div class="ar-method c-red">
  <div class="ar-method-head"><span class="ar-method-name">IG-投射模：既约映射筛选子类</span><span class="ar-m-tag">Luo–Jian 2016</span></div>
  <ul class="ar-m-pts">
    <li>IG-投射模 $M$：分解为不可分解 GP 模 $N$ 的直和，每个 $N$ 接受既约满态射 $P\to N$ 或既约单态射 $N\to P$（$P$ 投射）；</li>
    <li>定理：IG-投射模 $M$ 是投射模 $\iff M$ 自正交——在 IG-投射子类内验证 GPC；</li>
    <li>Luo–Huang 后续推广到交换 Noether 局部环（arXiv:1308.3834）。</li>
  </ul>
</div>
<div class="ar-method c-red">
  <div class="ar-method-head"><span class="ar-method-name">单项式代数：组合分类</span><span class="ar-m-tag">perfect path</span></div>
  <ul class="ar-m-pts">
    <li>对单项式代数 $A=kQ/I$，perfect path 给出不可分解非投射 GP 模的完整分类，并显式描述二次单项式代数 GP 模的稳定范畴（Chen–Shen–Zhou 2018）；</li>
    <li>连通 radical square zero Artin 代数要么 self-injective、要么 CM-free（Chen, Proc. AMS 2012），直接验证 GPC；</li>
    <li>强 GP 模给出最小测试类：所有强 GP 模投射 $\iff$ 任意强 GP 模 $\operatorname{Ext}^{1}(M,M)=0$ $\iff$ 所有 GP 模投射 $\iff$ $\mathrm{Gpd}=\mathrm{pd}$。</li>
  </ul>
</div>

<h4 class="ar-mgroup c-amber">间接传递：借助更广猜想与奇异性范畴</h4>
<div class="ar-method c-amber">
  <div class="ar-method-head"><span class="ar-method-name">更广猜想的推论</span><span class="ar-m-tag">GNC / ARC / FDC</span></div>
  <ul class="ar-m-pts">
    <li>GPC 是 GNC 的特殊情形：凡 GNC 成立处 GPC 自动成立；</li>
    <li>Gorenstein 代数上 GPC 与 ARC 重合；有限左/右 finitistic 维数代数满足 GPC（Zhang 2012，用 Igusa–Todorov 函数）；</li>
    <li>Araya（J. Algebra 2015）余维一方法：对左 Gorenstein $R$-代数 $\Lambda$（$R$ 交换 Gorenstein），若 ARC 在余维一成立则 ARC 在 $\Lambda$ 上成立；由此当 $\Lambda$ 是 isolated singularity 且 $\dim R\ge 2$ 时所有自正交 GP $\Lambda$-模投射。</li>
  </ul>
</div>
<div class="ar-method c-amber">
  <div class="ar-method-head"><span class="ar-method-name">奇异性范畴与 recollement 约化</span><span class="ar-m-tag">Li–You–Zheng–Zhu 2026</span></div>
  <ul class="ar-m-pts">
    <li>研究幂等元 $e$ 诱导的理想 $ReR$ 何时使 Gorenstein defect category 有 recollement，给出 $R$ 与 $R/ReR$ 的 Gorenstein defect category 间的三角等价；</li>
    <li>得到 $R$ 的 Gorenstein 性与 GPC 的约化条件，在三角矩阵代数上给出应用——把 GPC 化归为「小块」代数上的同一问题。</li>
  </ul>
</div>

<h4 class="ar-mgroup c-blue">不变性传递：等价与扩张</h4>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">分离等价与正交类对应</span><span class="ar-m-tag">Sun–Zhao 2025</span></div>
  <ul class="ar-m-pts">
    <li>GPC 在分离等价（中心投射双模诱导或 Morita 型奇等价）下保持；Gorenstein、CM-有限、CM-free 代数类亦不变（J. Algebra 662, 2025）；</li>
    <li>正交类在分离等价下对应，Wakamatsu tilting 模保持（Zhao–Sun, arXiv:2506.23243）——分离等价类上的问题可整体搬移。</li>
  </ul>
</div>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">Frobenius 扩张与 excellent extension</span><span class="ar-m-tag">扩张传递</span></div>
  <ul class="ar-m-pts">
    <li>南京大学黄朝勇组：Frobenius 扩张 $A/S$ 下用 $(1,1)$-条件与 $(2,2)$-条件传递 Nakayama 类猜想与 GPC；</li>
    <li>Y.-Y. Zhang（arXiv:1702.05902）：$\Gamma$ 是 $\Lambda$ 的 excellent extension 时，GSC、finitistic 维数猜想、Auslander–Gorenstein 猜想、Nakayama 猜想在 $\Lambda$ 与 $\Gamma$ 间等价传递，并处理斜群代数 $\Lambda G$。</li>
  </ul>
</div>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">邻域问题：semi-Gorenstein-projective 与弱 Gorenstein</span><span class="ar-m-tag">Ringel–Zhang 2020</span></div>
  <ul class="ar-m-pts">
    <li>系统研究 semi-GP 模（$\operatorname{Ext}^{i}(M,A)=0,i\ge 1$），引入弱 Gorenstein 代数（semi-GP 全是 GP），构造 6 维代数上非 GP 的 semi-GP 模——表明 $\mathcal{GP}\subsetneq{}^\perp{}^\infty\Lambda$ 可能严格成立；</li>
    <li>Li（2026）证明 virtually Gorenstein Artin 代数是弱 Gorenstein 的，使 Auslander–Gorenstein 猜想、（强）Nakayama 猜想、Tachikawa 第一猜想成立；</li>
    <li>虽不直接证 GPC，但厘清 GP 模与相邻模类的边界，提示 GPC 的证明可能需要超出「消没 $\Rightarrow$ 自正交」的传统框架。</li>
  </ul>
</div>
<p class="ar-mnote"><b>遗留问题：</b>一般 Artin 代数上 GPC 仍未决；GPC 已知左右对称而 GNC 的对称性未知，二者是否等价不清楚；是否存在 CM-无限但不满足 GPC 的代数，目前无反例；GPC 与 ARC 在非 Gorenstein 代数上的相互独立性不明；分离等价、Frobenius 扩张、excellent extension、recollement 能否穷尽所有 Artin 代数仍待研究。</p>

<h3 class="ar-subhead">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> X.-W. Chen, <i>Gorenstein Homological Algebra of Artin Algebras</i>, arXiv:1712.04587（附录 C：公开问题清单）。</p>
