---
title: "gpc"
headless: true
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArTocGpc(event)" aria-label="目录导航" title="目录导航" aria-expanded="false">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-gpc-1">猜想陈述</a>
    <a class="ar-toc-l1" href="#ar-gpc-2">研究现状</a>
    <a class="ar-toc-l1" href="#ar-gpc-ce">猜想反例</a>
    <a class="ar-toc-l2" href="#ar-gpc-ce-1">反例陈述</a>
    <a class="ar-toc-l2" href="#ar-gpc-ce-2">代数构造与基本性质</a>
    <a class="ar-toc-l2" href="#ar-gpc-ce-3">投射分解与自扩张计算</a>
    <a class="ar-toc-l1" href="#ar-gpc-3">研究方法</a>
    <a class="ar-toc-l2" href="#ar-gpc-3-1">直接验证：消没条件与模类筛选</a>
    <a class="ar-toc-l2" href="#ar-gpc-3-2">间接传递：借助更广猜想与奇异性范畴</a>
    <a class="ar-toc-l2" href="#ar-gpc-3-3">不变性传递：等价与扩张</a>
    <a class="ar-toc-l1" href="#ar-gpc-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-gpc-1">猜想陈述</h3>
<p><strong>Gorenstein 投射猜想（GPC）</strong>：设 $M$ 是 Gorenstein 投射模，若 $\operatorname{Ext}^{i}(M,M)=0$ 对 $i\gg 0$ 成立，则 $M$ 是投射模。</p>

<h3 class="ar-subhead" id="ar-gpc-2">研究现状</h3>
<ul class="ar-timeline">
  <li><span class="ar-year">2010s</span>对单项式 Gorenstein 代数、若干自内射代数类等特殊类已获证明；系统表述与公开问题清单见 Chen Xiao-Wu 专著附录 C（arXiv:1712.04587）。</li>
</ul>

<h3 class="ar-subhead" id="ar-gpc-ce">猜想反例</h3>
<p>上面“猜想陈述”所写的形式是：Gorenstein 投射模 $M$ 满足 $\operatorname{Ext}^{i}(M,M)=0$ 对 <em>i≫0</em> 成立，则 $M$ 投射。这是把“所有正次数自扩张消失”放宽为“充分高次自扩张消失”之后的<strong>更强断言</strong>（条件更少，却要推出同样的投射性）。下面的反例表明该形式<strong>并不成立</strong>；GPC 真正仍开放的版本是“对所有 $i>0$ 均消失”的强假设形式。</p>

<h4 id="ar-gpc-ce-1">反例陈述</h4>
<p><strong>命题 1（反例）</strong>：设 $k=\mathbb{C}$。令
$$A:=k\langle x,y\rangle/\bigl(x^{2},\,y^{2},\,xy+2yx\bigr),$$
并定义左 $A$-模
$$M:=k v\oplus k w,$$
其左乘作用为
$$xv=yv=w,\qquad xw=yw=0$$
（$v,w$ 为基向量）。则</p>
<ul>
  <li>$M$ 是<strong>非投射的 Gorenstein 投射模</strong>；</li>
  <li>$\operatorname{Ext}^{1}_{A}(M,M)\cong k$；</li>
  <li>$\operatorname{Ext}^{i}_{A}(M,M)=0$ 对所有 $i\ge 2$。</li>
</ul>
<p>换言之，仅要求“充分高次”自扩张消失（此处 $i\ge 2$ 之后全部为零），<strong>并不能</strong>推出 $M$ 的投射性。</p>

<h4 id="ar-gpc-ce-2">代数构造与基本性质</h4>
<ul>
  <li><strong>基与关系</strong>：$A$ 在 $k$ 上以 $\{1,x,y,xy\}$ 为基（$\dim_{k}A=4$）；由关系式 $xy+2yx=0$ 得 $yx=-\tfrac12 xy$。</li>
  <li><strong>Frobenius 结构</strong>：取线性泛函 $\lambda:A\to k$ 提取元素的 $xy$-系数，则配对 $(a,b)\mapsto\lambda(ab)$ 在基下的矩阵可逆，故 $A$ 为 <strong>Frobenius 代数</strong>，从而<strong>自内射</strong>（左投射模即左内射模）。</li>
  <li><strong>局部性</strong>：设 $J=(x,y)$，则 $J^{3}=0$ 且 $A/J\cong k$，故 $A$ 是局部代数。局部代数上的有限生成投射模必自由；而 $\dim_{k}M=2$ 不是 $\dim_{k}A=4$ 的倍数，故 $M$ 不可能是投射模。</li>
  <li><strong>Gorenstein 投射性</strong>：对有限维自内射（特别地 Frobenius）代数上的任意有限生成模，拼接一个投射分解与一个内射余分解，即可得到双向无界的完全正合投射复形，故均为 Gorenstein 投射模。因此 $M$ 为 Gorenstein 投射模。</li>
</ul>

<h4 id="ar-gpc-ce-3">投射分解与自扩张计算</h4>
<ul>
  <li>对任意 $a\in k^{\times}$ 记 $u_{a}:=x-ay$；右乘映射 $r_{u_{a}}:A\to A,\ b\mapsto bu_{a}$ 是左 $A$-线性的。直接计算得
  $$\operatorname{im}r_{u_{a}}=k(x-ay)\oplus kxy=Au_{a},\qquad \ker r_{u_{a}}=k(x-2ay)\oplus kxy=Au_{2a}.$$</li>
  <li>满射 $A\to M,\ b\mapsto bv$ 的核为 $A(x-y)$，故 $M\cong A/A(x-y)$。令 $d_{n}:=r_{x-2^{\,n}y}$（$n\ge0$），得到极小投射分解 $\cdots\to A\xrightarrow{d_{2}}A\xrightarrow{d_{1}}A\to A\to M\to0$，所有像均落在 Jacobson 根 $J$ 中。</li>
  <li>取 $\operatorname{Hom}_{A}(-,M)$（经 $\operatorname{Hom}_{A}(A,M)\cong M$）得上链复形 $0\to M\xrightarrow{\delta^{0}}M\xrightarrow{\delta^{1}}M\to\cdots$，其中 $\delta^{n}$ 由预合成 $d_{n}$ 给出：$\delta^{n}(v)=(1-2^{\,n})w,\ \delta^{n}(w)=0$，且 $\delta^{0}=0$。当 $n\ge1$ 时 $1-2^{\,n}\neq0$，故 $\ker\delta^{n}=k w=\operatorname{im}\delta^{n}$。于是
  $$\operatorname{Ext}^{1}_{A}(M,M)=\frac{\ker\delta^{1}}{\operatorname{im}\delta^{0}}\cong k,\qquad \operatorname{Ext}^{i}_{A}(M,M)=\frac{\ker\delta^{i}}{\operatorname{im}\delta^{i-1}}=0\quad(i\ge2).$$</li>
</ul>
<p class="ar-mnote"><b>意义：</b>该反例表明，一旦把 GPC 的“自扩张全部消失”减弱为“仅在充分高次消失”，结论便不再成立——这正击中了上文“猜想陈述”中 $i\gg 0$ 这一写法。因此 GPC 真正值得研究的仍是“对所有 $i>0$ 自扩张消失”的强假设形式；研究现状与方法一节所证的，也恰是这一强形式在各类特殊代数上的结果。</p>

<h3 class="ar-subhead" id="ar-gpc-3">研究方法</h3>
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

<h4 class="ar-mgroup c-red" id="ar-gpc-3-1">直接验证：消没条件与模类筛选</h4>
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

<h4 class="ar-mgroup c-amber" id="ar-gpc-3-2">间接传递：借助更广猜想与奇异性范畴</h4>
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

<h4 class="ar-mgroup c-blue" id="ar-gpc-3-3">不变性传递：等价与扩张</h4>
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
    <li>南京大学黄兆勇组：Frobenius 扩张 $A/S$ 下用 $(1,1)$-条件与 $(2,2)$-条件传递 Nakayama 类猜想与 GPC；</li>
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

<h3 class="ar-subhead" id="ar-gpc-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> X.-W. Chen, <i>Gorenstein Homological Algebra of Artin Algebras</i>, arXiv:1712.04587（附录 C：公开问题清单）。</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> K. Erdmann, <i>Ext-finite modules for weakly symmetric algebras with radical cube zero</i>, arXiv:1511.01418 (2015), §4.1（量子外代数反例背景与模结构）。</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> R. Luo, <i>On the Gorenstein projective conjecture: IG-projective modules</i>, J. Algebra <b>2016</b>, doi:10.1142/S0219498816501176.</p>
</div>
</div>

<script>
/* 面板目录下拉按钮（Gorenstein 投射猜想 gpc 面板） */
(function () {
  function getToc(el) { return el ? el.closest('.ar-toc') : null; }
  function setAria(toc, open) {
    var btn = toc && toc.querySelector('.ar-toc-btn');
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  window.toggleArTocGpc = function (e) {
    if (e) { e.stopPropagation(); e.preventDefault(); }
    var toc = getToc(e && e.currentTarget);
    if (!toc) return;
    var open = toc.classList.toggle('open');
    setAria(toc, open);
  };
  if (!window.__arTocGpcBound) {
    window.__arTocGpcBound = true;
    document.addEventListener('click', function (ev) {
      document.querySelectorAll('.ar-toc.open').forEach(function (toc) {
        if (toc.contains(ev.target) && ev.target.closest('.ar-toc-drop a')) {
          toc.classList.remove('open'); setAria(toc, false);
        } else if (!toc.contains(ev.target)) {
          toc.classList.remove('open'); setAria(toc, false);
        }
      });
    });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') {
        document.querySelectorAll('.ar-toc.open').forEach(function (toc) {
          toc.classList.remove('open'); setAria(toc, false);
        });
      }
    });
  }
})();
</script>
