---
title: "noloop"
headless: true
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArTocNoloop(event)" aria-label="目录导航" title="目录导航" aria-expanded="false">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-noloop-1">猜想陈述</a>
    <a class="ar-toc-l1" href="#ar-noloop-2">研究现状</a>
    <a class="ar-toc-l1" href="#ar-noloop-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-noloop-1">猜想陈述</h3>
<p><strong>no-loop conjecture</strong>：设 $A$ 是有限维代数。若 $A$ 的 Cartan 行列式等于 1，则 $A$ 没有定向循环（即 quiver 中不含有向圈）。</p>

<h3 class="ar-subhead" id="ar-noloop-2">研究现状</h3>
<p><strong>强无环猜想（SNLC）</strong>断言：设 $S$ 是 Artin 代数 $\Lambda$ 的单模。若 $\operatorname{pd}(S)<\infty$，则 $\operatorname{Ext}^1_\Lambda(S,S)=0$。等价地，若 $\operatorname{Ext}^1(S,S)\neq 0$（即该顶点处有环），则 $\operatorname{pd}(S)=\infty$。</p>
<p>该猜想由 Zacharia 提出（见 Auslander–Reiten–Smalø 专著及 Igusa 1990 注记），弱形式在 1980 年代已是熟知问题。主要进展包括：</p>
<ul class="crisis-list">
<li><strong>1969 年 Lenzing</strong>：证明交换情形——有限整体维数环无幂零元；</li>
<li><strong>1990 年 Igusa</strong>：用代数 K-理论证明弱猜想（代数闭域上有限维代数）；</li>
<li><strong>2011 年 Igusa–Liu–Paquette</strong>：对代数闭域上有限维代数（更一般：一大类 Artin 代数，含全部有限维 elementary 代数）<strong>证明强猜想</strong>。核心思想是把 Lenzing 的迹函数局部化，定义 $e$-迹并利用 $e$-有界投射分解；</li>
<li><strong>2013–2014 年</strong>：Diveris–Purin 等给出对称代数若干情形的扩张猜想证明；</li>
<li><strong>2020s</strong>：Koszl 等继续研究分次代数方向的扩张猜想。</li>
</ul>
<p>目前仍开放的问题包括：</p>
<ul class="crisis-list">
<li><strong>一般 Artin 代数</strong>（尤其非分裂情形）的 SNLC 完整证明；</li>
<li><strong>扩张猜想</strong>：若 $\operatorname{Ext}^1(S,S)\neq 0$，则 $\operatorname{Ext}^i(S,S)\neq 0$ 对无穷多个 $i$ 成立。已知单项式代数、特殊双列代数及对称代数情形，一般情形开放。</li>
</ul>

<h3 class="ar-subhead" id="ar-noloop-ref">参考文献</h3>
<ul class="crisis-list">
<li>H. Lenzing, <em>Nilpotente Elemente in Ringen von endlicher globaler Dimension</em>, Math. Z. 108 (1969), 313–324.</li>
<li>K. Igusa, <em>Notes on the no loops conjecture</em>, J. Pure Appl. Algebra 69 (1990), 161–176.</li>
<li>K. Igusa, S. Liu, C. Paquette, <em>A proof of the strong no loop conjecture</em>, Adv. Math. 228 (2011), 2731–2742. (arXiv:1103.5361)</li>
<li>E. L. Green, Ø. Solberg, D. Zacharia, <em>Minimal projective resolutions</em>, Trans. Amer. Math. Soc. 353 (2001), 2915–2939.</li>
<li>K. Diveris, M. Purin, <em>Vanishing of self-extensions over symmetric algebras</em>, J. Pure Appl. Algebra (2014).</li>
</ul>
</div>
</div>
