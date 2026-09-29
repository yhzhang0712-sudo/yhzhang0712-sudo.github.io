---
title: "operad"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
<a class="ar-toc-l1" href="#ar-op-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-op-1">1　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-op-1-0">1.0　动机：operad 是"代数类型的编码装置"</a>
    <a class="ar-toc-l2" href="#ar-op-1-1">1.1　对称 operad 的定义</a>
    <a class="ar-toc-l2" href="#ar-op-1-2">1.2　代数 over operad 与基本例子</a>
    <a class="ar-toc-l2" href="#ar-op-1-3">1.3　自由 operad、树与二次 operad</a>
    <a class="ar-toc-l2" href="#ar-op-1-4">1.4　Koszul 对偶与 Koszul operad</a>
    <a class="ar-toc-l2" href="#ar-op-1-5">1.5　operad 之外的"类 operad"结构</a>
    <a class="ar-toc-l1" href="#ar-op-2">2　核心工具与定理</a>
    <a class="ar-toc-l2" href="#ar-op-2-1">2.1　Ginzburg–Kapranov 对偶</a>
    <a class="ar-toc-l2" href="#ar-op-2-2">2.2　生成级数反演</a>
    <a class="ar-toc-l2" href="#ar-op-2-3">2.3　Koszul ⟹ 极小模型与强同伦代数</a>
    <a class="ar-toc-l2" href="#ar-op-2-4">2.4　Koszul 代数：二次代数的对应物</a>
    <a class="ar-toc-l2" href="#ar-op-2-5">2.5　Beilinson–Ginzburg–Soergel 模式</a>
    <a class="ar-toc-l2" href="#ar-op-2-6">2.6　Deligne 猜想与 Gerstenhaber 结构</a>
    <a class="ar-toc-l2" href="#ar-op-2-7">2.7　形变论：$L_{\infty}$ 与 Maurer–Cartan</a>
    <a class="ar-toc-l2" href="#ar-op-2-8">2.8　循环 operad、BV 与 Calabi–Yau</a>
    <a class="ar-toc-l1" href="#ar-op-3">3　主要应用与实例</a>
    <a class="ar-toc-l2" href="#ar-op-3-1">3.1　表示论中的 Koszul 性</a>
    <a class="ar-toc-l2" href="#ar-op-3-2">3.2　Hochschild 上同调上的结构</a>
    <a class="ar-toc-l2" href="#ar-op-3-3">3.3　形变与形式化</a>
    <a class="ar-toc-l2" href="#ar-op-3-4">3.4　组合学：树、分拆格与 dendriform</a>
    <a class="ar-toc-l2" href="#ar-op-3-5">3.5　拓扑与场论中的 operad</a>
    <a class="ar-toc-l2" href="#ar-op-3-6">3.6　与本站主题的接口</a>
    <a class="ar-toc-l1" href="#ar-op-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l2" href="#ar-op-4-1">4.1　与 dg / $A_{\infty}$ 范畴</a>
    <a class="ar-toc-l2" href="#ar-op-4-2">4.2　与 $\infty$-范畴（$\infty$-operad）</a>
    <a class="ar-toc-l2" href="#ar-op-4-3">4.3　与 Koszul 代数</a>
    <a class="ar-toc-l2" href="#ar-op-4-4">4.4　与 Hall 代数、量子群</a>
    <a class="ar-toc-l2" href="#ar-op-4-5">4.5　与丛理论 / Calabi–Yau 范畴</a>
    <a class="ar-toc-l2" href="#ar-op-4-6">4.6　总表</a>
<a class="ar-toc-l1" href="#ar-op-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-op-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-op-0">0　记号与约定</h3>
<p>固定特征零域 $k$；$\mathcal{V}$ 记底对称单oidal范畴（本文取向量空间或链复形）。</p>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\mathcal{P}(n)$</td><td>operad 的 $n$ 元运算空间，带右 $\Sigma_{n}$-作用</td></tr>
<tr><td>$\circ_{i}$</td><td>部分合成 $\mathcal{P}(m)\otimes\mathcal{P}(n)\to\mathcal{P}(m+n-1)$（插入第 $i$ 个输入）</td></tr>
<tr><td>$\gamma$</td><td>全合成 $\mathcal{P}(n)\otimes\mathcal{P}(k_{1})\otimes\cdots\otimes\mathcal{P}(k_{n})\to\mathcal{P}(\sum k_{i})$</td></tr>
<tr><td>$\eta$</td><td>单位 $\mathbf{1}\to\mathcal{P}(1)$</td></tr>
<tr><td>$\mathcal{F}(E)$</td><td>由 $\Sigma$-模 $E$ 生成的<strong>自由 operad</strong>（$n$ 元部分由树张成）</td></tr>
<tr><td>$\mathcal{P}=\mathcal{F}(E)/(R)$</td><td>二次 operad：生成元在 arity 2，关系在 arity 3</td></tr>
<tr><td>$\mathcal{P}^{!}$</td><td><strong>二次对偶 operad</strong> $\mathcal{F}(E^{\vee}\otimes\mathrm{sgn})/(R^{\perp})$</td></tr>
<tr><td>$\mathcal{P}^{\text{¡}}$</td><td><strong>Koszul 对偶 cooperad</strong>（注意：是 cooperad，不是 operad）</td></tr>
<tr><td>$D(-)$，$C(-)$</td><td>cobar 构造（cooperad → dg operad）与 bar 构造</td></tr>
<tr><td>$\mathrm{End}_{A}$</td><td>自同态 operad，$\mathrm{End}_{A}(n)=\mathrm{Hom}(A^{\otimes n},A)$</td></tr>
<tr><td>$A_{\infty}$，$L_{\infty}$，$C_{\infty}$</td><td>强同伦结合 / 李 / 交换代数（即相应 Koszul 极小模型的代数）</td></tr>
<tr><td>$\mathbb{E}_{n}$</td><td>小 $n$-圆盘 operad；$\mathbb{E}_{1}\simeq\mathrm{Ass}$、$\mathbb{E}_{\infty}$ = 全交换（同伦意义）</td></tr>
<tr><td>$\mathcal{W}$</td><td>Boardman–Vogt 的 $\mathcal{W}$-构造（同伦相干化）</td></tr>
</tbody>
</table>
<p>约定：①本文的 operad 默认<strong>对称</strong> operad；②“代数”指 $\mathcal{P}$-代数；③悬挂（suspension）约定依文献而异，引用 Koszul 对偶公式时需核对所用约定；④“Koszul”专指 Operad 层面，勿与“Koszul 代数”混淆（见第 5 节）。</p>

<h3 class="ar-subhead" id="ar-op-1">1　概念与定义</h3>

<h4 id="ar-op-1-0">1.0　动机：operad 是"代数类型的编码装置"</h4>
<p>operad（算子 / 运算子）是一种代数装置，用来<strong>编码一类代数</strong>：它把"结合代数""交换代数""李代数""Poisson 代数"等等统一为"某个 operad 上的代数"。换言之，operad 记录了一个代数结构中<em>所有 $n$ 元运算及其合成规则</em>，而"代数"则是这些运算在具体对象上的实现。</p>
<p>历史上有两次关键转折：</p>
<ul>
  <li><strong>1960 年代（拓扑时期）</strong>：Adams、May、Joyal、Boardman–Vogt、Mac Lane 等在同伦论中引入，用以描述"同伦不变的代数结构"（如 $E_{\infty}$-空间）。Boardman–Vogt 的 $\mathcal{W}$-构造是"同伦相干化"的原型。</li>
  <li><strong>1990 年代（代数复兴）</strong>：Ginzburg–Kapranov、Getzler、Jones、Kapranov、Kontsevich、Manin 等将其移入代数与形变理论，并发现<strong>Koszul 对偶</strong>可推广到 operad。Kontsevich 在 1990–1992 年的文章中预测了这一推广。</li>
</ul>
<p>对代数表示论而言，operad 理论的主要价值在两条线索：<strong>Koszul 对偶</strong>（与 Koszul 代数、范畴 $\mathcal{O}$、拟遗传代数直接相关）与<strong>同伦代数 / 形变论</strong>（与 $A_{\infty}$-范畴、Hochschild 理论、Calabi–Yau 结构相关）。</p>

<h4 id="ar-op-1-1">1.1　对称 operad 的定义与公理</h4>
<p><strong>定义</strong>：一个<strong>对称 operad</strong> $\mathcal{P}$ 由下列<em>数据</em>组成：</p>
<ol>
  <li>一个 <strong>$\Sigma$-模</strong>：对每个 $n\ge0$ 一个对象 $\mathcal{P}(n)$，配右 $\Sigma_{n}$-作用；</li>
  <li><strong>部分合成</strong> $\circ_{i}:\mathcal{P}(m)\otimes\mathcal{P}(n)\to\mathcal{P}(m+n-1)$，$1\le i\le m$；</li>
  <li><strong>单位</strong> $\eta:\mathbf{1}\to\mathcal{P}(1)$。</li>
</ol>
<p>满足三条<em>公理</em>（记 $\mu\in\mathcal{P}(m)$、$\nu\in\mathcal{P}(n)$、$\omega\in\mathcal{P}(k)$）：</p>
<ul>
  <li><strong>(A1) 结合性</strong>：$\big(\mu\circ_{i}\nu\big)\circ_{j+n-1}\omega=\big(\mu\circ_{j}\omega\big)\circ_{i}\nu$（当 $1\le j&lt;i$）；$\big(\mu\circ_{i}\nu\big)\circ_{j+i-1}\omega=\mu\circ_{i}\big(\nu\circ_{j}\omega\big)$（当 $i\le j$）；</li>
  <li><strong>(A2) 等变性</strong>：$\circ_{i}$ 与两端的 $\Sigma$-作用相容（$\sigma(\mu\circ_i\nu)\tau$ 按置换的块分解重排）；</li>
  <li><strong>(A3) 单位性</strong>：$\eta$ 对 $\circ_{i}$ 为双边单位。</li>
</ul>
<p><strong>三种等价视角</strong>：①部分合成 $\circ_{i}$；②<strong>全合成</strong> $\gamma:\mathcal{P}(n)\otimes\mathcal{P}(k_{1})\otimes\cdots\otimes\mathcal{P}(k_{n})\to\mathcal{P}(k_{1}+\cdots+k_{n})$（$\circ_{i}$ 与 $\gamma$ 可互相还原）；③$\mathcal{P}$ 是 $\Sigma$-模范畴（带“合成单oidal结构”$\circ$）中的<strong>单oid</strong>。视角 ③ 最能解释为何 operad 与结合代数享有平行的同调代数。</p>

<h4 id="ar-op-1-2">1.2　$\mathcal{P}$-代数与基本例子</h4>
<p><strong>定义</strong>：设 $\mathcal{P}$ 为 operad、$A\in\mathcal{V}$。$A$ 上的 <strong>$\mathcal{P}$-代数结构</strong>是 operad 同态 $\mathcal{P}\to\mathrm{End}_{A}$，其中 $\mathrm{End}_{A}(n):=\mathrm{Hom}(A^{\otimes n},A)$。展开即一族等变映射</p>
$$\mathcal{P}(n)\otimes_{\Sigma_{n}}A^{\otimes n}\longrightarrow A,\qquad n\ge0,$$
<p>满足由 (A1)–(A3) 翻译而来的结合与单位条件。<strong>判别准则</strong>：给 $A$ 一个 $\mathcal{P}$-代数结构 ⟺ 给 operad 同态 $\mathcal{P}\to\mathrm{End}_{A}$。</p>
<p>基本例子见下表；其中 $\mathrm{Ass}(n)=k[\Sigma_{n}]$（正则表示）、$\mathrm{Com}(n)=k$（平凡作用），二者均为二次 operad。</p>

<h4 id="ar-op-1-3">1.3　自由 operad、树与二次 operad</h4>
<ul>
  <li><strong>自由 operad</strong> $\mathcal{F}(M)$ 由 $\Sigma$-模 $M$ 生成，其 $n$ 元部分由<em>以 $M$ 的元标记顶点</em>的（约化）树张成——这是 operad 与组合树论紧密相连的原因。</li>
  <li><strong>二次 operad</strong> $\mathcal{P}=\mathcal{F}(E)/(R)$：生成元 $E$ 集中在二元（arity 2）且带 $\Sigma_{2}$ 作用，关系 $R\subseteq\mathcal{F}(E)(3)$。Ass、Com、Lie 都是二次的。</li>
  <li><strong>二次对偶</strong>：$\mathcal{P}^{!}=\mathcal{F}(E^{\vee}\otimes\mathrm{sgn})/(R^{\perp})$。对二次 operad 定义。</li>
</ul>

<h4 id="ar-op-1-4">1.4　Koszul 对偶与 Koszul operad</h4>
<p><strong>两个对象，务必区分</strong>：设 $\mathcal{P}=\mathcal{F}(E)/(R)$ 二次。</p>
<ul>
  <li><strong>二次对偶（operad）</strong> $\mathcal{P}^{!}:=\mathcal{F}(E^{\vee}\otimes\mathrm{sgn})/(R^{\perp})$——它仍是 <em>operad</em>；</li>
  <li><strong>Koszul 对偶（cooperad）</strong> $\mathcal{P}^{\text{¡}}$——由生成元的悬挂与关系的转置构造（Loday–Vallette 记为 $\mathcal{P}^{\text{¡}}=\mathcal{C}(sE,s^{2}R)$，其中 $\mathcal{C}$ 为余自由 cooperad 函子；悬挂约定依文献而异）。它是 <em>cooperad</em>。</li>
</ul>
<p><strong>cobar 构造与 Koszul 性</strong>：$D(\mathcal{P}^{\text{¡}})$ 是一个 dg operad，带自然的 dg operad 同态 $D(\mathcal{P}^{\text{¡}})\to\mathcal{P}$。</p>
<p><strong>定义</strong>：$\mathcal{P}$ 称为 <strong>Koszul</strong>，若 $D(\mathcal{P}^{\text{¡}})\to\mathcal{P}$ 为拟同构（即 $D(\mathcal{P}^{\text{¡}})$ 是 $\mathcal{P}$ 的一种分解）。此时：</p>
<ul>
  <li>$D(\mathcal{P}^{\text{¡}})$ 给出 $\mathcal{P}$-代数形变的<em>典范</em> $L_{\infty}$-代数（形变模空间 = Maurer–Cartan 元模空间）；</li>
  <li>$D(\mathcal{P}^{\text{¡}})$-代数正是<strong>强同伦 $\mathcal{P}$-代数</strong>（如 $A_{\infty}$、$L_{\infty}$、$C_{\infty}$）；</li>
  <li>$\mathcal{P}^{!}$ 亦为 Koszul，且 $(\mathcal{P}^{!})^{!}\cong\mathcal{P}$。</li>
</ul>
<p><strong>关键例子</strong>：$\mathrm{Lie}^{!}\cong\mathrm{Com}$、$\mathrm{Com}^{!}\cong\mathrm{Lie}$、$\mathrm{Ass}^{!}\cong\mathrm{Ass}$；$\mathrm{Ass}$、$\mathrm{Com}$、$\mathrm{Lie}$ 三者都是 Koszul。</p>

<h4 id="ar-op-1-5">1.5　operad 之外的"类 operad"结构</h4>
<p>许多结构需要比 operad 更灵活的框架（允许多输入多输出、带圈、带模结构）：</p>
<ul>
  <li><strong>循环 / 模ular operad</strong>：允许输出的置换与"自缩并"（用于模空间 $\overline{\mathcal{M}}_{g,n}$、量子场论）；</li>
  <li><strong>PROP / properad / dioperad / ½PROP</strong>：多输入多输出；</li>
  <li><strong>permutad / pre-permutad</strong>：更 exotic 的类 operad 结构；</li>
  <li><strong>operadic category</strong>（Batanin–Markl）：为上述所有结构提供统一环境，使 Koszul 对偶与 Koszul 性可在一般"operadic 范畴"上建立（arXiv:2105.05198，Compositionality 2023）。</li>
</ul>

<h3 class="ar-subhead" id="ar-op-2">2　核心工具与定理</h3>

<h4 id="ar-op-2-1">2.1　Ginzburg–Kapranov 对偶</h4>
<p><strong>定理 2.1（Ginzburg–Kapranov, Duke Math. J. 1994）</strong>：<strong>设</strong> $\mathcal{P}=\mathcal{F}(E)/(R)$ 为二次 operad（生成元在 arity 2、关系在 arity 3）。<strong>则</strong>存在二次对偶 operad $\mathcal{P}^{!}$ 与 Koszul 对偶 cooperad $\mathcal{P}^{\text{¡}}$，满足</p>
$$\mathrm{Lie}^{!}\cong\mathrm{Com},\qquad \mathrm{Com}^{!}\cong\mathrm{Lie},\qquad \mathrm{Ass}^{!}\cong\mathrm{Ass},$$
<p>且 $\mathrm{Ass}$、$\mathrm{Com}$、$\mathrm{Lie}$ 均为 Koszul，故 $D(\mathcal{P}^{\text{¡}})\xrightarrow{\sim}\mathcal{P}$ 给出它们的极小模型。</p>
<p><strong>要点与边界</strong>：(i) 该文把结合代数的 Koszul 对偶（Priddy 等）提升到 operad 层面，是 1990 年代 operad 复兴的技术核心；(ii) 与结合代数不同，<strong>operad 的 Koszul 性是实质条件而非默认成立</strong>——验证 Koszul 性需要专门方法（如“分配格 / 重写律”判据）；(iii) 二次 ⟹ Koszul 的蕴含<em>不成立</em>。</p>

<h4 id="ar-op-2-2">2.2　生成级数反演</h4>
<p>若 $\mathcal{P}(n)$ 有限维，定义生成级数 $f^{\mathcal{P}}(x)=\sum_{n\ge1}(-1)^{n}\frac{\dim\mathcal{P}(n)}{n!}x^{n}$。$\mathcal{P}$ Koszul 时，$\mathcal{P}$ 与 $\mathcal{P}^{!}$ 的 Koszul 复形无环，从而</p>
$$f^{\mathcal{P}}\big(f^{\mathcal{P}^{!}}(x)\big)=x,$$
<p>即两个生成级数关于<em>复合</em>互逆。这为整数序列提供组合解释，也给出一个可计算的 Koszul 性检验（必要条件）。</p>

<h4 id="ar-op-2-3">2.3　Koszul ⟹ 极小模型与强同伦代数</h4>
<p><strong>定理 2.3</strong>：$\mathcal{P}$ Koszul 时，$D(\mathcal{P}^{\text{¡}})$ 是其极小模型，从而给出：$\mathcal{P}$-代数形变的<em>典范</em>控制 $L_{\infty}$-代数（Maurer–Cartan 元模空间 = 形变模空间）；以及"强同伦 $\mathcal{P}$-代数"的概念。后者的关键性质是<strong>传递性</strong>：强同伦结构可沿弱同伦等价传递——这正是 $A_{\infty}$、$L_{\infty}$ 结构在 dg 范畴论与 Fukaya 范畴中无处不在的原因。</p>

<h4 id="ar-op-2-4">2.4　Koszul 代数：二次代数的对应物</h4>
<p>在<em>代数</em>（而非 operad）层面，对应理论是 <strong>Koszul 代数</strong>（Priddy）：设 $A$ 为 $\mathbb{N}$-分次代数，$A_{0}$ 半单。$A$ 称为 Koszul，若 $\mathrm{Ext}^{\bullet}_{A}(A_{0},A_{0})$ 由次数 1 生成（等价地，极小分次自由分解是"线性的"）。此时 Yoneda 代数 $E(A)=\mathrm{Ext}^{\bullet}_{A}(A_{0},A_{0})$ 与 $A$ 的二次对偶 $A^{!}$ 一致，且 $(A^{!})^{!}\cong A$。</p>
<p><strong>表示论意义</strong>：Koszul 性把"代数 $A$ 的同调复杂度"与"其对偶 $A^{!}$ 的代数结构"绑定，使 $\mathrm{Ext}$-代数可被显式计算。这是拟遗传代数、Auslander 型代数、Koszul 环上模范畴研究的标准工具。</p>

<h4 id="ar-op-2-5">2.5　Beilinson–Ginzburg–Soergel 模式</h4>
<p><strong>定理 2.5（BGS, J. Amer. Math. Soc. 1996）</strong>：在半单复 Lie 代数（或 Kac–Moody）的范畴 $\mathcal{O}$ 中，奇异块与另一块之间存在 Koszul 对偶：一个块的标准 Koszul 代数与另一块的 Koszul 对偶对应，且中心特征与有限性条件的组合数据互换。更一般地，Braden–Licata–Proudfoot–Webster 在 Gale 对偶与 Koszul 对偶的框架下组合地构造了大量 Koszul 对偶代数对。这构成 operad 式 Koszul 对偶思想在<em>表示论</em>中最深刻的落地。</p>

<h4 id="ar-op-2-6">2.6　Deligne 猜想与 Gerstenhaber 结构</h4>
<p>Gerstenhaber（1963）证明结合代数 $A$ 的 Hochschild 上同调 $HH^{\bullet}(A)$ 带 <strong>Gerstenhaber 代数</strong>结构（一个次数 0 的 cup 积 + 一个次数 $-1$ 的李括号，满足 Leibniz 规则）。<strong>Deligne 猜想</strong>断言这一结构来自小圆盘 operad $\mathbb{E}_{2}$ 的链 operad 在 Hochschild 复形上的作用；该猜想已由 Kontsevich–Soibelman、McClure–Smith、Tamarkin、Voronov 等多方证明。</p>
<p><strong>表示论相关性</strong>：$HH^{\bullet}(A)$ 是 $A$ 的形变理论的控制代数；Gerstenhaber 结构正是"形变之间如何相容"的编码。这是 operad 与本页"Hochschild / 形变"题材最直接的连接点。</p>

<h4 id="ar-op-2-7">2.7　形变论：$L_{\infty}$ 与 Maurer–Cartan</h4>
<p>形变理论的标准原理：任何"代数 / 范畴 / 复流形"的形变由某个<strong>微分分次李代数</strong>（更一般地 $L_{\infty}$-代数）$\mathfrak{g}$ 的 Maurer–Cartan 方程 $\mathrm{d}\alpha+\tfrac12[\alpha,\alpha]=0$ 的解模去规范作用来控制。对 Koszul operad $\mathcal{P}$，该 $\mathfrak{g}$ 可由 $D(\mathcal{P}^{\text{¡}})$<em>典范</em>构造。Kontsevich 的<strong>形式化定理</strong>（Poisson 流形上函数的微分分次李代数为形式的，从而给出形变量化）是这一原理最著名的应用。</p>

<h4 id="ar-op-2-8">2.8　循环 operad、BV 与 Calabi–Yau</h4>
<p>当 $A$ 带有额外的<em>对称 / Calabi–Yau</em>结构（如 Frobenius 代数、对称代数、Calabi–Yau 范畴的自同态代数），$HH^{\bullet}(A)$ 上的 Gerstenhaber 结构可提升为 <strong>Batalin–Vilkovisky 代数</strong>结构（多一个平方为零的二阶算子 $\Delta$，由 Connes 的 $B$ 算子诱导）；链层面则由<strong>循环 Deligne 猜想</strong>描述（循环 operad / 带框小圆盘 operad 作用）。Tradler、Menichi、Kaufmann 等分别给出不同版本。这条线索把 operad 理论直接接到本页的 Calabi–Yau、Gorenstein 与 Hochschild 题材。</p>

<h3 class="ar-subhead" id="ar-op-3">3　主要应用与实例</h3>

<h4 id="ar-op-3-1">3.1　表示论中的 Koszul 性</h4>
<ul>
  <li><strong>Koszul 代数与拟遗传代数</strong>：BGG 范畴 $\mathcal{O}$ 的块、Schur 代数、某些 Auslander 代数的 Koszul 性是标准检验项；Koszul ⟹ $\mathrm{Ext}$-代数可控 ⟹ 可用 Koszul 对偶进行"对偶化"研究。</li>
  <li><strong>BGS 对偶</strong>（2.5）：Koszul 对偶把范畴 $\mathcal{O}$ 的不同块联系起来，是表示论中"对偶性"的主要实现之一。</li>
  <li><strong>N-Koszul / 高阶 Koszul</strong>：把二次推广到 $N$-齐次（Berger 等），用于某些 Artin–Schelter 正则代数与高维表示论。</li>
</ul>

<h4 id="ar-op-3-2">3.2　Hochschild 上同调上的结构</h4>
<p>$HH^{\bullet}(A)$ 的 Gerstenhaber / BV 结构已广泛用于：代数的形变分类、Poisson 结构与形变量化的比较、以及<strong>非交换代数几何</strong>中"Hochschild 上同调 = 非交换的多向量场"这一解释（ Kontsevich、Ginzburg）。对 Calabi–Yau / 对称情形，BV 结构给出额外的"散度型"算子，与 Calabi–Yau 范畴的拓扑场论解释相通。</p>

<h4 id="ar-op-3-3">3.3　形变与形式化</h4>
<p>operad 的 Koszul 极小模型提供了"形变的控制代数"的<em>典范</em>构造，避免了手工构造 $L_{\infty}$ 结构。应用包括：Kontsevich 形变量化、Poisson 流形的形式化、以及 dg 范畴 / $A_{\infty}$ 范畴的形变理论（与本站"DG enhancement""Standard Derived Equivalence"两个热点面板直接相关）。</p>

<h4 id="ar-op-3-4">3.4　组合学：树、分拆格与 dendriform</h4>
<ul>
  <li><strong>自由代数与树</strong>：自由 dendriform 代数由平面二叉有根树张成；其上的级数与复合构成量子电动力学的重整化群（Loday 的著名例子）。</li>
  <li><strong>分拆格的同调</strong>：分拆格给出链复形，其同调为对称群的表示；operad 视角 + Koszul 对偶可把它识别为对偶 operad 的运算空间（Fresse），并可推广到分拆格的各种变体。</li>
</ul>

<h4 id="ar-op-3-5">3.5　拓扑与场论中的 operad</h4>
<p>小圆盘 operad $\mathbb{E}_{n}$、Swiss-cheese operad、 factorization algebra（Costello–Gwilliam）为拓扑场论与"observables"提供代数骨架；$\mathbb{E}_{n}$-代数的中心与 Hochschild 上同调的关系（Deligne 猜想的高维版本、$E_{n}$-Hochschild）是当前活跃的交叉区。</p>

<h4 id="ar-op-3-6">3.6　与本站主题的接口</h4>
<ul>
  <li><strong>Koszul ⟶ Koszul 代数 ⟶ 拟遗传 / 范畴 $\mathcal{O}$</strong>：本站"Gorenstein 同调理论""标准导出等价"热点面板的背景工具之一。</li>
  <li><strong>$A_{\infty}$ / dg ⟶ dg enhancement</strong>：Koszul operad 的传递定理是 $A_{\infty}$ 结构得以在导出等价下传递的技术来源。</li>
  <li><strong>CY / BV ⟶ 分数 Calabi–Yau、Gorenstein</strong>：BV 与 Calabi–Yau 的连接可用于检验某些（分数）Calabi–Yau 范畴的 Hochschild 不变量。</li>
  <li><strong>诚实说明</strong>：operad 理论是本站"前沿理论"六个方向中与代数表示论<em>距离最远</em>的一个；其价值主要在提供语言与工具（Koszul 对偶、同伦代数、形变控制），而非直接给出表示论的分类定理。</li>
</ul>

<h3 class="ar-subhead" id="ar-op-4">4　与邻近概念的关系</h3>

<h4 id="ar-op-4-1">4.1　与 dg / $A_{\infty}$ 范畴</h4>
<p>$A_{\infty}$-代数正是 $\mathrm{Ass}$ 的强同伦代数（即 $D(\mathrm{Ass}^{\text{¡}})$-代数）；$L_{\infty}$、$C_{\infty}$ 同理。Koszul 性保证传递定理，使 $A_{\infty}$ 结构可沿弱等价搬运——这是 dg 增强与 Fukaya 范畴理论得以运作的技术基础。</p>

<h4 id="ar-op-4-2">4.2　与 $\infty$-范畴（$\infty$-operad）</h4>
<p>Lurie《Higher Algebra》把 operad 理论提升到 $\infty$-范畴：$\mathbb{E}_{n}$-代数、$\infty$-operad、以及 $\mathbb{E}_{\infty}$-环谱。在此层面，operad 与稳定 $\infty$-范畴、谱的 smash 积、派生代数几何融为一体；$\infty$-operad 也是陈述"$\mathbb{E}_{n}$-代数的中心"等定理的恰当语言。</p>

<h4 id="ar-op-4-3">4.3　与 Koszul 代数</h4>
<p>二者是同一思想的两个层面：operad 层面编码"运算类型"，代数层面编码"具体关系"。Koszul 代数的二次对偶 $A^{!}$ 与 operad 的二次对偶 $\mathcal{P}^{!}$ 形式平行；$\mathrm{Ass}$ 的 Koszul 性恰恰是"为什么 $A_{\infty}$-代数存在"的 operad 层面理由。</p>

<h4 id="ar-op-4-4">4.4　与 Hall 代数、量子群</h4>
<p>operad 在此的角色是间接的：一方面，Hall 代数与 Ringel–Green 的量子群实现常需 $A_{\infty}$ / dg 语言才能给出相干构造；另一方面，某些"代数 operad"（如 dendriform、pre-Lie）与组合 Hopf 代数、重整化理论同源，而后者与 Hall 代数共享"关联代数 + 余关联余代数"的结构。</p>

<h4 id="ar-op-4-5">4.5　与丛理论 / Calabi–Yau 范畴</h4>
<p>接口有二：①Ginzburg dg 代数（3-CY）是丛理论的核心 dg 输入，其构造与（循环）$A_{\infty}$ 结构、势的形变密切相关；②Calabi–Yau 范畴的 Hochschild 上同调带 BV 结构（2.8），而 CY 性质又是丛范畴（2-CY）与分数 CY 猜想的共同语言。</p>

<h4 id="ar-op-4-6">4.6　总表</h4>
<table>
<thead><tr><th>邻近概念</th><th>关系方向</th><th>主要见证</th></tr></thead>
<tbody>
<tr><td>Koszul 代数</td><td>operad 对偶的代数层面；$\mathrm{Ext} = A^{!}$</td><td>Priddy；BGS</td></tr>
<tr><td>$A_{\infty}$ / $L_{\infty}$</td><td>Koszul ⟹ 强同伦代数 + 传递性</td><td>Ginzburg–Kapranov；Loday–Vallette</td></tr>
<tr><td>$\infty$-operad</td><td>operad 的 $\infty$-提升；$\mathbb{E}_{n}$-代数</td><td>Lurie《Higher Algebra》</td></tr>
<tr><td>Hochschild 理论</td><td>$HH^{\bullet}$ 带 Gerst / BV 结构（Deligne 猜想）</td><td>Gerstenhaber；Deligne 猜想的诸证明</td></tr>
<tr><td>范畴 $\mathcal{O}$ / 拟遗传代数</td><td>Koszul 对偶的实现场</td><td>BGS；BLPW</td></tr>
<tr><td>Calabi–Yau 范畴</td><td>CY ⟹ BV 结构；Ginzburg dg 代数</td><td>Tradler；Menichi；Kontsevich–Soibelman</td></tr>
<tr><td>PROP / properad / operadic 范畴</td><td>operad 的一般化与统一 Koszul 理论</td><td>Vallette；Batanin–Markl 2105.05198</td></tr>
<tr><td>组合学（树、分拆格）</td><td>自由 operad 由树张成；Koszul ⟹ 生成级数互逆</td><td>Loday；Fresse</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-op-5">5　常见混淆与易错点</h3>
<ul class="agent-list">
  <li><span class="agent-name">$\mathcal{P}^{!}$ 与 $\mathcal{P}^{\text{¡}}$ 不是同一个东西</span>：前者是<em> operad</em>（二次对偶），后者是<em>cooperad</em>（Koszul 对偶）。记号只差一个倒置感叹号，混淆会导致 $D(\mathcal{P}^{!})$ 与 $D(\mathcal{P}^{\text{¡}})$ 的误用。</li>
  <li><span class="agent-name">“二次” $≠$ “Koszul”</span>：二次只是对偶可行的前提；Koszul 性要求 $D(\mathcal{P}^{\text{¡}})\to\mathcal{P}$ 为拟同构，须单独验证。生成级数反演（2.2）只在 Koszul 时成立。</li>
  <li><span class="agent-name">强同伦代数不是对偶 operad 的代数</span>：$A_{\infty}$-代数是 $D(\mathrm{Ass}^{\text{¡}})$-代数；虽然 $\mathrm{Ass}^{!}\cong\mathrm{Ass}$，但 $A_{\infty}$ 绝非 $\mathrm{Ass}$-代数——极小模型来自 <em>cobar</em>，不是来自二次对偶。</li>
  <li><span class="agent-name">operad 单输出，PROP 多输出</span>：需要多输入多输出（如双代数、Frobenius 代数、Coalgebra 与代数并存）时必须改用 PROP / properad / dioperad，不能硬套 operad。</li>
  <li><span class="agent-name">$\mathbb{E}_{1}\simeq\mathrm{Ass}$ 是同伦意义</span>：小圆盘 operad 与 $\mathrm{Ass}$ 之间是<em>准同构</em>（弱等价），不是同构；链层面的 $\mathbb{E}_{1}$-代数才是 $A_{\infty}$-代数。</li>
  <li><span class="agent-name">operad 的 Koszul 性 vs. Koszul 代数</span>：两者是同一思想的两个层面（前者编码“运算类型”，后者编码“具体关系”），但不可互换；由 $\mathrm{Ass}$ 的 Koszul 性<em>不能</em>推出具体某个代数 $A$ 是 Koszul 代数。</li>
  <li><span class="agent-name">悬挂约定</span>：Koszul 对偶 cooperad 的构造涉及悬挂，不同文献约定不同；直接引用 $\mathcal{P}^{\text{¡}}$ 的公式前须核对约定。</li>
</ul>

<h3 class="ar-subhead" id="ar-op-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> J.-L. Loday, B. Vallette, <i>Algebraic Operads</i>, Grundlehren der Mathematischen Wissenschaften <b>346</b>, Springer, 2012.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> V. Ginzburg, M. Kapranov, <i>Koszul duality for operads</i>, Duke Math. J. <b>76</b> (1994), 203–272（重印本 arXiv:0709.1228）; Erratum, Duke Math. J. <b>80</b> (1995), 293.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> M. Kontsevich, <i>Formal (non)commutative symplectic geometry</i>, in: The Gelfand Mathematical Seminars 1990–1992, 173–187, Birkhäuser, 1993.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> B. Fresse, <i>Koszul duality of operads and homology of partition posets</i>, in: Homotopy Theory: Relations with Algebraic Geometry, Group Cohomology, and Algebraic $K$-theory, Contemp. Math., AMS（预印本 arXiv:math/0301365）.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> S. B. Priddy, <i>Koszul resolutions</i>, Trans. Amer. Math. Soc. <b>152</b> (1970), 39–60.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> A. Beilinson, V. Ginzburg, W. Soergel, <i>Koszul duality patterns in representation theory</i>, J. Amer. Math. Soc. <b>9</b> (1996), 473–527.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> M. Gerstenhaber, <i>The cohomology structure of an associative ring</i>, Ann. of Math. <b>78</b> (1963), 267–288.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> B. Vallette, <i>A Koszul duality for PROPs</i>, Trans. Amer. Math. Soc. <b>359</b> (2007), 4865–4943.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> M. Batanin, M. Markl, <i>Koszul duality for operadic categories</i>, arXiv:2105.05198; Compositionality <b>5</b> (2023), no. 4.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> J.-L. Loday, <i>Operads and combinatorics</i>（FPSAC 讲义）; <i>Dialgebras and related operads</i>, Lecture Notes in Math. <b>1763</b> (2001), 7–66.</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> J. Lurie, <i>Higher Algebra</i>（含 $\infty$-operad 与 $\mathbb{E}_{n}$-代数）, 2017.</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> B. Keller, <i>On differential graded categories</i>, ICM Vol. II, 151–190, Eur. Math. Soc., Zürich, 2006（$A_{\infty}$ / dg 侧综述）.</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> J. M. Boardman, R. M. Vogt, <i>Homotopy Invariant Algebraic Structures on Topological Spaces</i>, Lecture Notes in Math. <b>347</b>, Springer, 1973（operad 与 $\mathcal{W}$-构造的源头之一）.</p>
</div>
</div>
