---
title: "Gorenstein 同调理论"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-ght-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-ght-1">1　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-ght-1-1">1.1　Gorenstein 投射模</a>
    <a class="ar-toc-l2" href="#ar-ght-1-2">1.2　三个全自反条件 (G1)(G2)(G3)</a>
    <a class="ar-toc-l2" href="#ar-ght-1-3">1.3　Iwanaga–Gorenstein 代数</a>
    <a class="ar-toc-l2" href="#ar-ght-1-4">1.4　稳定范畴 = 奇点范畴</a>
    <a class="ar-toc-l2" href="#ar-ght-1-5">1.5　Gorenstein 维数与 AB-S 类比</a>
    <a class="ar-toc-l1" href="#ar-ght-2">2　核心工具与定理</a>
    <a class="ar-toc-l2" href="#ar-ght-2-1">2.1　(G1)(G2)(G3) 的等价性定理</a>
    <a class="ar-toc-l2" href="#ar-ght-2-2">2.2　独立性问题的完整解答</a>
    <a class="ar-toc-l2" href="#ar-ght-2-3">2.3　Ringel 的 6 维代数与 $\mho$-箭图</a>
    <a class="ar-toc-l2" href="#ar-ght-2-4">2.4　Buchweitz–Happel 等价</a>
    <a class="ar-toc-l2" href="#ar-ght-2-5">2.5　Gorenstein 环的同调刻画</a>
    <a class="ar-toc-l2" href="#ar-ght-2-6">2.6　Gorenstein 投射（预）覆盖的存在性</a>
    <a class="ar-toc-l2" href="#ar-ght-2-7">2.7　与有限维数猜想的联系</a>
    <a class="ar-toc-l2" href="#ar-ght-2-8">2.8　相对化：半对偶化、Ding、$(\mathcal{X},\mathcal{Y})$-Gorenstein</a>
    <a class="ar-toc-l2" href="#ar-ght-2-9">2.9　算法与完整分类：Nakayama 代数等</a>
    <a class="ar-toc-l1" href="#ar-ght-3">3　主要应用与实例</a>
    <a class="ar-toc-l2" href="#ar-ght-3-1">3.1　gentle 代数与特殊双串行代数</a>
    <a class="ar-toc-l2" href="#ar-ght-3-2">3.2　奇点范畴与非交换解消</a>
    <a class="ar-toc-l2" href="#ar-ght-3-3">3.3　矩阵分解</a>
    <a class="ar-toc-l2" href="#ar-ght-3-4">3.4　$\tau$-刚性、Tachikawa 猜想</a>
    <a class="ar-toc-l2" href="#ar-ght-3-5">3.5　单项式范畴与扩张</a>
    <a class="ar-toc-l2" href="#ar-ght-3-6">3.6　更高维与相对高同调</a>
    <a class="ar-toc-l1" href="#ar-ght-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l2" href="#ar-ght-4-1">4.1　与 Gorenstein 对称猜想 / 投射猜想</a>
    <a class="ar-toc-l2" href="#ar-ght-4-2">4.2　与逼近理论、Wakamatsu tilting</a>
    <a class="ar-toc-l2" href="#ar-ght-4-3">4.3　与奇点范畴、稳定范畴</a>
    <a class="ar-toc-l2" href="#ar-ght-4-4">4.4　与 $\tau$-tilting</a>
    <a class="ar-toc-l2" href="#ar-ght-4-5">4.5　总表</a>
    <a class="ar-toc-l1" href="#ar-ght-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-ght-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">

<h3 class="ar-subhead" id="ar-ght-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$A$</td><td>Artin 代数（或双边 Noether 环）；$A\text{-}\mathrm{mod}$ 有限生成左模</td></tr>
<tr><td>$M^{\ast}$</td><td>$\mathrm{Hom}_{A}(M,A)$（右模）；$M$ <strong>自反</strong>指求值映射 $M\to M^{\ast\ast}$ 为同构</td></tr>
<tr><td>$\Omega$，$\mathrm{Tr}$，$\mho$</td><td>合冲；转置；Ringel 的 $\mho$= 极小左 $\mathrm{add}(A)$-逼近的余核（$=\mathrm{Tr}\,\Omega\,\mathrm{Tr}$）</td></tr>
<tr><td>$\mathrm{Gproj}(A)$，$\mathrm{Ginj}(A)$</td><td>Gorenstein 投射 / 入射模类</td></tr>
<tr><td>$\underline{\mathrm{Gproj}}(A)$</td><td>Gorenstein 投射模的稳定范畴（模投射模）</td></tr>
<tr><td>$\mathbf{D}_{\mathrm{sg}}(A)$</td><td>奇点范畴 $\mathbf{D}^{b}(A\text{-}\mathrm{mod})/\mathbf{K}^{b}(A\text{-}\mathrm{proj})$</td></tr>
<tr><td>$\mathrm{G}\text{-}\mathrm{dim}_{R}M$</td><td>Auslander–Bridger 的 Gorenstein 维数</td></tr>
<tr><td>${}^{\perp}A$</td><td>$\{X\mid \mathrm{Ext}^{i}_{A}(X,A)=0,\ i>0\}$；<strong>半 Gorenstein 投射</strong>即 $M\in{}^{\perp}A$</td></tr>
</tbody>
</table>
<p>约定：①"Gorenstein 投射"按 Enochs–Jenda 定义（在交换 Noether 情形即 Auslander–Bridger 的<em>全自反</em>模）；②(A) 条件编号 (G1)(G2)(G3) 依 Avramov–Martsinkovsky 的用法；③未说明时 "Gorenstein 代数" 指 Iwanaga–Gorenstein。</p>

<h3 class="ar-subhead" id="ar-ght-1">1　概念与定义</h3>

<h4 id="ar-ght-1-1">1.1　Gorenstein 投射模</h4>
<p><strong>定义</strong>：$A$-模 $M$ 称为 <strong>Gorenstein 投射</strong>，若存在投射模的<em>完全分解</em>（complete projective resolution）——即一个正合复形</p>
$$\mathbf{P}:\ \cdots\longrightarrow P_{1}\longrightarrow P_{0}\longrightarrow P^{0}\longrightarrow P^{1}\longrightarrow\cdots$$
<p>其中每个 $P_{i},P^{j}$ 投射，且对任意投射模 $Q$，复形 $\mathrm{Hom}_{A}(\mathbf{P},Q)$ 正合——使得 $M\cong\mathrm{Im}(P_{0}\to P^{0})$。等价说法（最常用的可计算形式）：$M$ 是某个投射模合冲的"双向无限"延拓。</p>
<p><strong>历史</strong>：Auslander–Bridger（1969）在交换 Noether 情形引入 <strong>G-维数</strong>与全自反模；Enochs–Jenda（1995）在一般环上命名并系统研究 Gorenstein 投射/入射/平坦模，开启了"相对同调代数"的这一分支：把经典同调代数中的投射、入射、平坦模与相应分解<em>替换</em>为 Gorenstein 版本。</p>

<h4 id="ar-ght-1-2">1.2　三个全自反条件 (G1)(G2)(G3)</h4>
<p>对有限生成模，Gorenstein 投射性有三个可分别检验的条件：</p>
<ul>
  <li><strong>(G1)</strong> $M$ <strong>半 Gorenstein 投射</strong>：$\mathrm{Ext}^{i}_{A}(M,A)=0$ 对所有 $i>0$；</li>
  <li><strong>(G2)</strong> $M^{\ast}$（作为右 $A$-模）半 Gorenstein 投射；</li>
  <li><strong>(G3)</strong> $M$ <strong>自反</strong>（求值映射 $M\to M^{\ast\ast}$ 为同构）。</li>
</ul>
<p>三者同时成立 $\iff$ $M$ Gorenstein 投射（定理 2.1）。它们是否<em>独立</em>曾是 Avramov–Martsinkovsky 提出的公开问题，已于近年完全解决（2.2–2.3）。</p>

<h4 id="ar-ght-1-3">1.3　Iwanaga–Gorenstein 代数</h4>
<p><strong>定义</strong>：Artin 代数 $A$ 称为 <strong>Iwanaga–Gorenstein</strong>，若</p>
$$\mathrm{id}\,{}_{A}A<\infty\quad\text{且}\quad \mathrm{id}\,A_{A}<\infty$$
<p>（等价地：$\mathrm{pd}$ 入射模与 $\mathrm{id}$ 投射模均有界）。此时 $\mathrm{Gproj}(A)$ 恰好是"合冲后有界"的模类，且稳定范畴 $\underline{\mathrm{Gproj}}(A)$ 为三角范畴。交换代数中对应的概念是 Gorenstein 环（局部时即 $\mathrm{id}_{R}R<\infty$）。</p>

<h4 id="ar-ght-1-4">1.4　稳定范畴 = 奇点范畴</h4>
<p><strong>定理 1.4（Buchweitz；Happel；Orlov）</strong>：若 $A$ 为 Iwanaga–Gorenstein，则自然函子给出三角等价</p>
$$\underline{\mathrm{Gproj}}(A)\;\xrightarrow{\ \sim\ }\;\mathbf{D}_{\mathrm{sg}}(A)\;=\;\mathbf{D}^{b}(A\text{-}\mathrm{mod})\big/\mathbf{K}^{b}(A\text{-}\mathrm{proj}).$$
<p>交换情形的版本（Buchweitz 1987）：Gorenstein 环上的极大 Cohen–Macaulay 模的稳定范畴 $\simeq$ 奇点范畴，Tate 上同调即其上的 Hom。这把 Gorenstein 同调代数与奇点理论、镜像对称（Orlov 的 Landau–Ginzburg 模型）直接连通。</p>

<h4 id="ar-ght-1-5">1.5　Gorenstein 维数与 AB-S 类比</h4>
<p><strong>定义</strong>：$\mathrm{G}\text{-}\mathrm{dim}_{R}M$ 是最短 Gorenstein 投射分解的长度（Auslander–Bridger）。它满足 Auslander–Buchsbaum 型等式；并有 <strong>Gorenstein 版 Auslander–Buchsbaum–Serre 定理</strong>：局部 Noether 环 $R$ 为 Gorenstein $\iff$ $\mathrm{G}\text{-}\mathrm{dim}_{R}k<\infty$（等价地，所有有限生成模 G-维数有限；Gorenstein 环上 $\mathrm{G}\text{-}\mathrm{dim}_{R}M=\mathrm{depth}\,R-\mathrm{depth}\,M$）。</p>

<h3 class="ar-subhead" id="ar-ght-2">2　核心工具与定理</h3>

<h4 id="ar-ght-2-1">2.1　(G1)(G2)(G3) 的等价性定理</h4>
<p><strong>定理 2.1</strong>：设 $A$ 为 Artin 代数，$M\in A\text{-}\mathrm{mod}$。以下等价：</p>
<ol>
  <li>$M$ 满足 (G1)、(G2)、(G3)；</li>
  <li>$M$ 是 Gorenstein 投射模；</li>
  <li>$M$ 与 $\mathrm{Tr}\,M$ 都是半 Gorenstein 投射模。</li>
</ol>
<p>其中 (1)$\iff$(3) 见 Auslander–Bridger（Prop. 3.8）；(1)$\iff$(2) 见 Christensen（Thm. 4.2.6，该处把证明归功于 Avramov–Buchweitz–Martsinkovsky–Reiten）。注意：$\mathrm{Tr}\,M$ 半 Gorenstein 投射 $\iff$ $M$ 满足 (G2) 与 (G3)。<strong>边界</strong>：$M$ 不有限生成时定理不成立。</p>

<h4 id="ar-ght-2-2">2.2　独立性问题的完整解答</h4>
<p><strong>问题（Avramov–Martsinkovsky）</strong>：(G1)、(G2)、(G3) 是否相互独立？</p>
<ul>
  <li><strong>Jorgensen–Şega（2006）</strong>：给出满足 (G1)+(G3) 但不满足 (G2) 的例子，以及满足 (G2)+(G3) 但不满足 (G1) 的例子（8 维交换代数）。</li>
  <li><strong>Marczinzik（2017）</strong>：非交换代数上的半 Gorenstein 投射但非 Gorenstein 投射的模。</li>
  <li><strong>Ringel–Zhang</strong>：补上缺失的最后一种——满足 (G1)+(G2) 但不满足 (G3) 的模（见 2.3）。</li>
</ul>
<p><strong>定理 2.2</strong>：对 Artin 代数，(G1)、(G2)、(G3) <strong>相互独立</strong>（🟢）。这是"半 Gorenstein 投射 $\neq$ Gorenstein 投射"这一反直觉现象的完整刻画。</p>

<h4 id="ar-ght-2-3">2.3　Ringel 的 6 维代数与 $\mho$-箭图</h4>
<p>Ringel 提出研究 6 维局部代数</p>
$$\Lambda=\Lambda(q)\;=\;k\langle x,y,z\rangle\big/\bigl(x^{2},\,y^{2},\,z^{2},\,yz,\,xy+qyx,\,xz-zx,\,zy-zx\bigr),\qquad 0\neq q\in k,$$
<p>及其 3 维模 $M(\alpha)$（$xv=\alpha v',\ yv=v',\ zv=v''$）。</p>
<p><strong>定理 2.3</strong>：若 $q$ 的乘法阶 $o(q)$ 无限，则 $M(q)$ 是<strong>双半 Gorenstein 投射</strong>的（$M$ 与 $M^{\ast}$ 都半 Gorenstein 投射，$M(q)^{\ast}\cong(x-y)\Lambda$），但<em>不是无挠的</em>（not torsionless），故 (G3) 失败，从而不是 Gorenstein 投射。反之若 $\alpha$ 不在 $q$ 生成的循环群中，则 $M(\alpha)$ 是 Gorenstein 投射的（$M(0)$ 甚至是 $\Omega$-周期 1 的）。</p>
<p><strong>工具：$\mho$-算子与 $\mho$-箭图</strong>。$\mho X:=\mathrm{Coker}(X\to$ 极小左 $\mathrm{add}(A)$-逼近$)$，它是 $\Omega$ 的逆，且 $\mho=\mathrm{Tr}\,\Omega\,\mathrm{Tr}$。把每个不可分解非投射模置于一个顶点、当 $X$ 无挠时画箭头 $X\to\mho X$，所得箭图即 $\mho$-箭图；顶点所在路径的形状直接读出该模是"半 Gorenstein 投射 / $\infty$-无挠 / 自反 / Gorenstein 投射"中的哪一种。</p>
<p><strong>相关概念</strong>：<em>左弱 Gorenstein 代数</em>（${}^{\perp}A=\mathrm{gp}(A)$）为半 Gorenstein 投射模的好行为提供了等价刻画（例如"每个半 Gorenstein 投射模都无挠/自反"）。</p>

<h4 id="ar-ght-2-4">2.4　Buchweitz–Happel 等价</h4>
<p>见 1.4。要点：Iwanaga–Gorenstein 假设保证"合冲无限延拓"存在；在非 Gorenstein 情形，$\underline{\mathrm{Gproj}}(A)$ 与 $\mathbf{D}_{\mathrm{sg}}(A)$ 的联系需换成"Gorenstein 投射逼近"与相对版本的语言，一般不再等价。</p>

<h4 id="ar-ght-2-5">2.5　Gorenstein 环的同调刻画</h4>
<p>交换 Noether 局部环 $(R,\mathfrak{m},k)$：</p>
$$R\ \text{Gorenstein}\iff \mathrm{G}\text{-}\mathrm{dim}_{R}k<\infty\iff \mathrm{G}\text{-}\mathrm{dim}_{R}M<\infty\ \text{对所有有限生成}\ M.$$
<p>且 Gorenstein 环上 $\mathrm{G}\text{-}\mathrm{dim}_{R}M=\mathrm{depth}R-\mathrm{depth}M$。这是把"环的 Gorenstein 性"完全同调化的经典结论，也是 Gorenstein 同调代数区别于一般相对同调理论的核心优势。</p>

<h4 id="ar-ght-2-6">2.6　Gorenstein 投射（预）覆盖的存在性</h4>
<p>经典同调代数中投射分解<em>总是存在</em>；Gorenstein 版本则不然：</p>
<ul>
  <li><strong>公开问题</strong>：对哪些环 $R$，$\mathrm{Mod}(R)$ 中所有模都有 Gorenstein 投射（预）覆盖？一般情形仍未解决（🟡）。</li>
  <li><strong>已知结果</strong>：Estrada–Iacob–Yeomans：$R$ 右凝聚且左 $n$-perfect $\Rightarrow$ $\mathcal{GP}(R)$ 是特殊预覆盖类；Cortés-Izurdiaga–Šaroch：$(\mathcal{GP}(R),\mathcal{GP}(R)^{\perp})$ 总是<em>遗传</em>余挠对，完备性（从而预覆盖存在）在"所有投射模对某正则基数 $\lambda$ 为 $\lambda$-纯入射"时成立。</li>
  <li>更精细的讨论（Ding 投射、Auslander 类、Hovey 三元组、对偶对）见 Becerril 等近年工作。</li>
</ul>

<h4 id="ar-ght-2-7">2.7　与有限维数猜想的联系</h4>
<p>Gorenstein 同调代数与同调猜想之间存在双向通道：</p>
<ul>
  <li><strong>Auslander–Reiten 条件</strong>：$\mathcal{P}(R)^{<\infty}_{\mathrm{fin}}$ 反变有限 $\Rightarrow$ 第二有限维数猜想（Second FDC）对 Artin 代数成立；</li>
  <li><strong>Moradifar–Šaroch</strong>：$\mathcal{GP}(R)^{<\infty}_{\mathrm{fin}}$ 反变有限 $\Rightarrow$ Second FDC（左 Artin 环），并与 $\mathcal{P}^{<\infty}_{\mathrm{fin}}$ 的反变有限性相互制约；</li>
  <li>因此"Gorenstein 投射模类的反变有限性"是 Second FDC 的一条可行路径，也是当前活跃方向。</li>
</ul>

<h4 id="ar-ght-2-8">2.8　相对化：半对偶化、Ding、$(\mathcal{X},\mathcal{Y})$-Gorenstein</h4>
<p>Gorenstein 同调的相对化是当前的主流扩展：</p>
<ul>
  <li>相对<strong>半对偶化双模</strong> ${}_{S}C_{R}$ 的 $C$-Gorenstein 投射/入射模（Holm–Jørgensen、White、Huang–Liu–Xu）；</li>
  <li><strong>弱 Wakamatsu tilting</strong>（w-tilting）模、<strong>Ding 投射</strong>模等放宽版本的类；</li>
  <li>Abel 范畴框架下的 $(\mathcal{X},\mathcal{Y})$-Gorenstein 范畴与相应（整体）同调维数、比较引理、与 Foxby 类（Auslander/Bass 类）的关系；</li>
  <li>环扩张上的相对 Gorenstein 投射/入射模、平凡（square-zero）扩张上的强 Gorenstein 投射模等。</li>
</ul>

<h4 id="ar-ght-2-9">2.9　算法与完整分类：Nakayama 代数等</h4>
<p>Ringel 及其合作者给出若干可完整计算的例子：</p>
<ul>
  <li><strong>Nakayama 代数</strong>：其 <em>Gorenstein 核</em>（Gorenstein core）是某个自入射 Nakayama 代数的模范畴；并有快速算法判定 Gorenstein 投射模；</li>
  <li>$kQ[x]/(x^{2})$：非投射的不可分解 Gorenstein 投射模与 $Q$ 的表示一一对应；</li>
  <li>$\mathbb{A}$ 型预投射代数作为子模范畴的商范畴出现；</li>
  <li>不可分解<em>完全微分模</em>与箭图表示之间的双射（Ringel）。</li>
</ul>

<h3 class="ar-subhead" id="ar-ght-3">3　主要应用与实例</h3>

<h4 id="ar-ght-3-1">3.1　gentle 代数与特殊双串行代数</h4>
<p><strong>定理 3.1（Geiss–Reiten, 2005）</strong>：gentle 代数均为 Iwanaga–Gorenstein（几何模型的证明见"Gentle Algebra"面板 2.7）。于是 $\underline{\mathrm{Gproj}}(A)\simeq\mathbf{D}_{\mathrm{sg}}(A)$ 可用曲面上的弧计算：不可分解入射模对应有限弧，经 Nakayama 函子（端点沿边界移动）仍为有限弧，故其投射维数有限。特殊双串行/字符串代数的 Gorenstein 投射模亦可用字符串与带直接描述。</p>

<h4 id="ar-ght-3-2">3.2　奇点范畴与非交换解消</h4>
<p>由定理 1.4，$\underline{\mathrm{Gproj}}(A)$ 是奇点范畴的"有限模型"。在交换代数几何中，$\mathrm{CM}(R)$ 的加生成元 $M$ 给出 <strong>非交换平展解消</strong>（NCCR, Van den Bergh）$\mathrm{End}_{R}(M)$；$\mathrm{Gproj}$ 的稳定范畴则是相应 Landau–Ginzburg 模型的 B 型 D-膜范畴（Orlov）。</p>

<h4 id="ar-ght-3-3">3.3　矩阵分解</h4>
<p>对超曲面（或更一般的 Gorenstein 环），矩阵分解范畴与 $\underline{\mathrm{CM}}(R)$、$\mathbf{D}_{\mathrm{sg}}(R)$ 等价（Eisenbud；Buchweitz；Orlov）。这为 Gorenstein 同调提供了完全可计算的模型，也是近期"单项式范畴与矩阵分解比较"（2025）等工作的背景。</p>

<h4 id="ar-ght-3-4">3.4　$\tau$-刚性、Tachikawa 猜想</h4>
<p>近期工作引入 <strong>Gorenstein 投射 $\tau$-刚性模</strong>，给出其与某个自同态代数上模的双射，并用之部分回答 <strong>Tachikawa 第一猜想</strong>；另定义"$\tau$-tilting free 代数"的 Gorenstein 版本。这把 Gorenstein 同调与 $\tau$-tilting 理论连接起来。</p>

<h4 id="ar-ght-3-5">3.5　单项式范畴与扩张</h4>
<p>单项式范畴（monomorphism category）的 Gorenstein 投射模、平凡环扩张上的强 Gorenstein 投射模、以及相对版本（ring extensions）提供了大量可算例子，也检验了 (G1)(G2)(G3) 的独立性边界。</p>

<h4 id="ar-ght-3-6">3.6　更高维与相对高同调</h4>
<p>在 $n$-丛倾斜子范畴 $\mathcal{M}\subseteq\mathcal{A}$ 上，可建立 <strong>Auslander–Solberg 意义下的相对高同调</strong>：以 $\mathrm{Ext}^{n}_{\mathcal{M}}(-,-)$ 的加法子双函子 $F$ 为基，定义 $n$-正合列的相对理论，证明相对 $n$-AR 对偶公式与 Grothendieck 群结果。这是"Gorenstein 同调 $\times$ 高维 AR 理论"的交叉方向（2025）。</p>

<h3 class="ar-subhead" id="ar-ght-4">4　与邻近概念的关系</h3>

<h4 id="ar-ght-4-1">4.1　与 Gorenstein 对称猜想 / 投射猜想</h4>
<p>博客"重要猜想"栏的 <strong>Gorenstein 对称猜想</strong>（$\mathrm{id}\,{}_{A}A<\infty\Rightarrow \mathrm{id}\,A_{A}<\infty$；等价地：有限整体维数 $\iff$ 有限自我入射维数）与 <strong>Gorenstein 投射猜想</strong>（Gorenstein 代数上 $\mathrm{Gproj}$ 的某些有限性/周期性）正属于本面板的语言体系；Ringel 的反例技术（$\mho$-箭图、短局部代数）是这些猜想的主要试验工具。</p>

<h4 id="ar-ght-4-2">4.2　与逼近理论、Wakamatsu tilting</h4>
<p>Gorenstein 投射（预）覆盖问题本质上是<em>逼近理论</em>问题；弱 Wakamatsu tilting 模提供了放宽版的相对同调框架（参见"Wakamatsu tilting 猜想"面板）。</p>

<h4 id="ar-ght-4-3">4.3　与奇点范畴、稳定范畴</h4>
<p>定理 1.4 是本分支的枢纽：Gorenstein 条件 $\Rightarrow$ 稳定范畴 = 奇点范畴。非 Gorenstein 时二者分离，需用"Gorenstein 投射逼近"与上同调 $\mathrm{Ext}_{\mathcal{GP}}$ 替代。</p>

<h4 id="ar-ght-4-4">4.4　与 $\tau$-tilting</h4>
<p>见 3.4：Gorenstein 投射 $\tau$-刚性模把两个理论缝合；另一方面，Iwanaga–Gorenstein 性在许多"可算"代数类（gentle 等）上成立，使 $\tau$-tilting 有限性的研究能借助奇点范畴。</p>

<h4 id="ar-ght-4-5">4.5　总表</h4>
<table>
<thead><tr><th>问题 / 性质</th><th>状态</th><th>依据</th></tr></thead>
<tbody>
<tr><td>(G1)+(G2)+(G3) $\iff$ Gorenstein 投射</td><td>定理 🟢</td><td>Auslander–Bridger；Christensen</td></tr>
<tr><td>三条件独立性</td><td>已解决（独立）🟢</td><td>Jorgensen–Şega 2006；Marczinzik 2017；Ringel–Zhang</td></tr>
<tr><td>$\underline{\mathrm{Gproj}}(A)\simeq\mathbf{D}_{\mathrm{sg}}(A)$</td><td>Iwanaga–Gorenstein 时成立 🟢</td><td>Buchweitz；Happel；Orlov</td></tr>
<tr><td>Gorenstein 环的同调刻画</td><td>$\mathrm{G}\text{-}\dim k<\infty$ 🟢</td><td>Auslander–Bridger</td></tr>
<tr><td>Gorenstein 投射预覆盖的一般存在性</td><td>开放 🟡</td><td>Estrada–Iacob–Yeomans 等的部分结果</td></tr>
<tr><td>Gorenstein 投射与 Second FDC</td><td>部分联系 🟡</td><td>Moradifar–Šaroch；Auslander–Reiten</td></tr>
<tr><td>gentle 代数 Iwanaga–Gorenstein</td><td>是 🟢</td><td>Geiss–Reiten 2005</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-ght-5">5　常见混淆与易错点</h3>
<ul>
  <li><strong>半 Gorenstein 投射 $\neq$ Gorenstein 投射</strong>：仅有 (G1) 不够；反例构造本身是深刻结果。</li>
  <li><strong>"Gorenstein 代数"有两种用法</strong>：Iwanaga–Gorenstein（双侧 $\mathrm{id}$ 有限）与交换情形的 Gorenstein 环；Artin 代数上默认前者。</li>
  <li><strong>$\mathrm{Gproj}$ 稳定范畴与奇点范畴的等价需要 Gorenstein 假设</strong>，不能无条件使用。</li>
  <li><strong>有限生成性</strong>：定理 2.1 对非有限生成模不成立。</li>
  <li><strong>覆盖面</strong>：Gorenstein 投射<em>分解</em>的存在性不是自动的，与经典同调代数有本质差别。</li>
  <li><strong>$\mho$ 与 $\Omega$</strong>：$\mho$ 是 $\Omega$ 的逆（在适用范围内），$\mho=\mathrm{Tr}\,\Omega\,\mathrm{Tr}$；不要把 $\mho$-箭图当作 AR 箭图。</li>
  <li><strong>年份</strong>：Gao–Lu–Zhang 的综述（arXiv:2505.12637, 2025）系统总结 Ringel 2012–2023 年间的贡献，引用具体定理时应回溯原始论文（文中标为 [RZ4] 等）。</li>
</ul>

<h3 class="ar-subhead" id="ar-ght-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> M. Auslander, M. Bridger, <i>Stable Module Theory</i>, Mem. Amer. Math. Soc. <b>94</b> (1969)（G-维数与全自反模）.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> E. E. Enochs, O. M. G. Jenda, <i>Gorenstein injective and projective modules</i>, Math. Z. <b>220</b> (1995), 611–633.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> L. W. Christensen, <i>Gorenstein Dimensions</i>, Lecture Notes in Math. <b>1747</b>, Springer, 2000.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> R.-O. Buchweitz, <i>Maximal Cohen–Macaulay modules and Tate cohomology over Gorenstein rings</i>（1987，未发表手稿；见其后续发表版本）.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> D. Orlov, <i>Triangulated categories of singularities and D-branes in Landau–Ginzburg models</i>, Tr. Mat. Inst. Steklova <b>246</b> (2004), 240–262.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> D. A. Jorgensen, L. M. Şega, <i>Nonvanishing cohomology and classes of Gorenstein modules</i>, Adv. Math. <b>206</b> (2006), 576–619.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> R. Marczinzik, <i>On the submodule poset of a Nakayama algebra</i> 及相关工作（2017；半 Gorenstein 投射反例）.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> C. M. Ringel, P. Zhang 的系列论文（[RZ1]–[RZ4]，2017–2023）：半 Gorenstein 投射模、$\mho$-箭图、$\Lambda(q)$ 与独立性定理.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> N. Gao, X.-S. Lu, P. Zhang, <i>Claus Michael Ringel's main contributions to Gorenstein-projective modules</i>, arXiv:2505.12637 (2025).</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> S. Estrada, A. Iacob, K. Yeomans, <i>Gorenstein projective precovers</i>, Rend. Semin. Mat. Univ. Padova <b>138</b> (2017), 79–99.</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> M. Cortés-Izurdiaga, J. Šaroch, <i>Precovering classes of modules and the "small" finitistic dimension conjecture</i>（及相关余挠对结果）.</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> P. Moradifar, J. Šaroch, <i>Finitistic dimension conjectures via Gorenstein projective modules</i>, arXiv:2105.14669.</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> V. Becerril, <i>Some remarks on Gorenstein projective precovers</i>, arXiv:2403.10727（v3, 2025）.</p>
<p class="ar-ref"><span class="ar-ref-no">[14]</span> C. Geiss, I. Reiten, <i>Gentle algebras are Gorenstein</i>, Fields Inst. Commun. <b>45</b> (2005), 129–133.</p>
<p class="ar-ref"><span class="ar-ref-no">[15]</span> R. Hafezi, J. Asadollahi, Y. Zhang, <i>Relative higher homology and representation theory</i>, J. Pure Appl. Algebra <b>229</b> (2025), no. 5, 107924.</p>
<p class="ar-ref"><span class="ar-ref-no">[16]</span> Hui Liu 等, <i>Applications of Gorenstein projective $\tau$-rigid modules</i>, J. Algebra Appl. (2025).</p>
</div>
</div>
