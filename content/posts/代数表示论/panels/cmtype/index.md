---
title: "cmtype"
headless: true
---
<h3 class="ar-subhead">问题陈述</h3>
<p>
<strong>CM Type of Brauer–Thrall 猜想：</strong>设 $\Lambda$ 为 Artin 代数。称 $\Lambda$ 是 <strong>CM-bounded</strong>（Cohen–Macaulay 有界型），若其所有不可分解有限生成 Gorenstein-投射左 $\Lambda$-模的长度一致有界。Chen 提出问题：<strong>每个 CM-bounded Artin 代数是否必为 CM-finite（即仅有有限个不可分解 Gorenstein-投射模同构类）？</strong>
</p>

<p>
这一问题可视为 <strong>Brauer–Thrall 第一定理在 Gorenstein-投射模范畴中的相对形式</strong>：经典 Brauer–Thrall I 断言"有界表示型 ⇒ 有限表示型"，而此处将"投射模"换为"Gorenstein-投射模"，将"维数"换为"长度"，在更广泛的 Artin 代数（不必 Gorenstein）上提出同样问题。
</p>

<h3 class="ar-subhead">研究现状</h3>
<ul class="ar-timeline">
  <li><span class="ar-year">2020</span>Chen 在附录中正式提出此问题（<i>arXiv:2008.11457</i>，附录 C, Problem E），并证明：当 $\Lambda$ 为 Gorenstein 时，CM-finite 等价于每个 Gorenstein-投射模都是有限生成的直和。</li>
  <li><span class="ar-year">2026</span>Liu 证明一般情形：对任意左 Artinian 环 $R$ 的 resolving 子范畴 $\mathcal{X}$，以下三个条件等价——(1) $\mathcal{X}$ 有限型；(2) $\mathcal{X}$ 有界型；(3) $\mathcal{X}$ 中不可分解对象的最小生成元个数一致有界（<i>Bounded resolving and coresolving subcategories over Artinian rings</i>）。</li>
  <li><span class="ar-year">2026</span>作为上述定理的直接推论，<strong>每个 CM-bounded Artin 代数必为 CM-finite</strong>（Corollary 1.2）。这完全肯定了 Chen 的猜想，并给出了更一般的相对版本。</li>
</ul>

<p><strong>已解决的关键特例与推广：</strong></p>
<ul>
  <li><strong>Gorenstein 代数：</strong>Chen 2020 已证明 CM-finite ⟺ 每个 Gorenstein-投射模均为有限生成直和；</li>
  <li><strong>任意 Artin 代数：</strong>Liu 2026 通过 resolving 子范畴的有限型/有界型等价定理，将结论推广到任意 Artin 代数，并给出对偶的 coresolving 版本；</li>
  <li><strong>最小生成元刻画：</strong>有界型等价于不可分解对象的最小生成元个数一致有界，提供了可计算的数值判据。</li>
</ul>

<h3 class="ar-subhead">核心方法</h3>
<div class="ar-chain">
  <span class="ar-chain-node"><b>Resolving 子范畴</b><small>含投射模，闭于直和项、扩张、上核</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>Functor 环</b><small>Harada–Sai 引理</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>Flat 函子均投射</b><small>有界型 ⇒ 平坦函子投射性</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>Beligiannis 判据</b><small>有限型 ⟺ 函子环有限表示型</small></span>
</div>
<p class="ar-mnote">关键一步：Harada–Sai 引理说明有界型迫使所有平坦加法函子变为投射，从而函子环满足有限表示型条件，再由 Beligiannis 的表示-有限判据得出有限型。</p>

<h3 class="ar-subhead">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> Y. Han, <i>Hirzebruch–Riemann–Roch and Lefschetz type formulas for finite dimensional algebras</i>, arXiv:2008.11457 (2020).</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> J. Liu, <i>Bounded resolving and coresolving subcategories over Artinian rings</i> (2026).</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> A. Beligiannis, <i>Relative homological algebra and purity in triangulated categories</i>, J. Algebra <b>227</b> (2000), 268–361.</p>
