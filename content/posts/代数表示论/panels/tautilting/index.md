---
title: "tautilting"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
<a class="ar-toc-l1" href="#ar-tau-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-tau-1">1　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-tau-1-0">1.0　动机：把"突变"推广出遗传代数</a>
    <a class="ar-toc-l2" href="#ar-tau-1-1">1.1　$\tau$-刚性模与 $\tau$-倾斜模</a>
    <a class="ar-toc-l2" href="#ar-tau-1-2">1.2　support $\tau$-倾斜对与两项 silting</a>
    <a class="ar-toc-l2" href="#ar-tau-1-3">1.3　2-Calabi–Yau 范畴中的对应</a>
    <a class="ar-toc-l2" href="#ar-tau-1-4">1.4　$\tau$-垂直范畴与约化</a>
    <a class="ar-toc-l2" href="#ar-tau-1-5">1.5　挠类、$g$-向量与 brick</a>
    <a class="ar-toc-l1" href="#ar-tau-2">2　核心工具与定理</a>
    <a class="ar-toc-l2" href="#ar-tau-2-1">2.1　Adachi–Iyama–Reiten 基本定理</a>
    <a class="ar-toc-l2" href="#ar-tau-2-2">2.2　完备性：突变总是可以进行</a>
    <a class="ar-toc-l2" href="#ar-tau-2-3">2.3　$\tau$-倾斜约化</a>
    <a class="ar-toc-l2" href="#ar-tau-2-4">2.4　与函子有限挠类的双射</a>
    <a class="ar-toc-l2" href="#ar-tau-2-5">2.5　brick 与 semibrick</a>
    <a class="ar-toc-l2" href="#ar-tau-2-6">2.6　$g$-向量扇与壁—室结构</a>
    <a class="ar-toc-l2" href="#ar-tau-2-7">2.7　$\tau$-丛态射范畴与 picture 群</a>
    <a class="ar-toc-l2" href="#ar-tau-2-8">2.8　$\tau$-倾斜有限性</a>
    <a class="ar-toc-l1" href="#ar-tau-3">3　主要应用与实例</a>
    <a class="ar-toc-l2" href="#ar-tau-3-1">3.1　任意有限维代数的统一框架</a>
    <a class="ar-toc-l2" href="#ar-tau-3-2">3.2　silting 与导出等价</a>
    <a class="ar-toc-l2" href="#ar-tau-3-3">3.3　丛代数、$g$-向量与 $F$-多项式</a>
    <a class="ar-toc-l2" href="#ar-tau-3-4">3.4　gentle / skew-gentle 代数（2026）</a>
    <a class="ar-toc-l2" href="#ar-tau-3-5">3.5　高维推广 $\tau_{d}$</a>
    <a class="ar-toc-l2" href="#ar-tau-3-6">3.6　基域扩张下的行为（2025）</a>
    <a class="ar-toc-l1" href="#ar-tau-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l2" href="#ar-tau-4-1">4.1　与经典 tilting 理论</a>
    <a class="ar-toc-l2" href="#ar-tau-4-2">4.2　与 silting 理论</a>
    <a class="ar-toc-l2" href="#ar-tau-4-3">4.3　与丛理论</a>
    <a class="ar-toc-l2" href="#ar-tau-4-4">4.4　与高维 Auslander–Reiten 理论</a>
    <a class="ar-toc-l2" href="#ar-tau-4-5">4.5　与 stability / 几何模型</a>
    <a class="ar-toc-l2" href="#ar-tau-4-6">4.6　总表</a>
<a class="ar-toc-l1" href="#ar-tau-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-tau-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-tau-0">0　记号与约定</h3>
<p>固定代数闭域 $k$；$\Lambda$ 记<strong>基本</strong>有限维 $k$-代数，$\Lambda=P_{1}\oplus\cdots\oplus P_{n}$ 为不可分解投射模的分解。</p>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\mathrm{mod}\,\Lambda$，$\mathrm{proj}\,\Lambda$</td><td>有限生成右模范畴；有限生成投射模范畴</td></tr>
<tr><td>$\tau=D\mathrm{Tr}$</td><td>Auslander–Reiten 平移</td></tr>
<tr><td>$|X|$</td><td>$X$ 的非同构不可分解直和因子个数；特别地 $|\Lambda|=n$</td></tr>
<tr><td>$\mathrm{Fac}\,M$</td><td>$M$ 的商（因子）对象构成的满子范畴</td></tr>
<tr><td>$\mathrm{add}(M)$</td><td>$M$ 的有限直和之直和因子</td></tr>
<tr><td>$\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$</td><td>投射模的有界同伦范畴（等价于 $\mathbf{D}^{\mathrm{perf}}(\Lambda)$）</td></tr>
<tr><td>$K_{0}(\mathrm{proj}\,\Lambda)$</td><td>投射模的 Grothendieck 群，$g$-向量取值于此</td></tr>
<tr><td>$M^{\perp_{0}}$，${}^{\perp_{0}}M$</td><td>$\{X\mid\mathrm{Hom}(M,X)=0\}$，$\{X\mid\mathrm{Hom}(X,M)=0\}$</td></tr>
<tr><td>挠类 / 余挠类</td><td>对商（resp. 子对象）与扩张封闭的满子范畴</td></tr>
<tr><td>brick / semibrick</td><td>自同态代数为除环的模 / 两两 $\mathrm{Hom}$-正交的 brick 集合</td></tr>
<tr><td>$\mathscr{C}(\Lambda)$</td><td>$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 中的 $\mathrm{mod}\,\Lambda\oplus(\mathrm{mod}\,\Lambda)[1]$</td></tr>
</tbody>
</table>
<p>约定：①“模”默认有限生成右模；②$|\Lambda|=n$ 指 $\Lambda$ 作为<em>右</em>模的不可分解投射直和因子个数；③“$\tau$-刚性对”与“support $\tau$-刚性对象 $M\oplus P[1]$”是同一数据的两种表述；④$\mathrm{Ext}^{i}$ 未加下标时在 $\mathrm{mod}\,\Lambda$ 中计算。</p>

<h3 class="ar-subhead" id="ar-tau-1">1　概念与定义</h3>

<h4 id="ar-tau-1-0">1.0　动机：把"突变"推广出遗传代数</h4>
<p>经典 tilting 理论在<em>遗传</em>代数上有极好的组合学：tilting 模的集合带自然的突变结构，与丛代数、反射群（Coxeter） combinatorics 相容。但对<em>任意</em>有限维代数，经典 tilting 模的突变会失败——"换掉一个直和因子"这一操作不再总有解。</p>
<p>Adachi–Iyama–Reiten 于 2012–2014 年提出的 <strong>$\tau$-tilting 理论</strong>正是为了修复这一点：把消失条件从 $\mathrm{Ext}^{1}(M,M)=0$ 换成 $\mathrm{Hom}_{\Lambda}(M,\tau M)=0$，并把对象从"模"换成"模 + 投射模的对"。结果是：<strong>突变总可以进行</strong>（定理 2.2），从而在任意有限维代数上恢复了 tilting 理论的组合学。AIR 因此称其为"从突变观点看 tilting 理论的<em>完备化</em>"。</p>

<h4 id="ar-tau-1-1">1.1　$\tau$-刚性模与 $\tau$-倾斜模</h4>
<p><strong>定义</strong>：设 $\Lambda$ 基本有限维，$\tau=D\mathrm{Tr}$。</p>
<ol>
  <li>$M\in\mathrm{mod}\,\Lambda$ 称为 <strong>$\tau$-刚性</strong>，若 $\mathrm{Hom}_{\Lambda}(M,\tau M)=0$；</li>
  <li>$\tau$-刚性模 $M$ 称为 <strong>$\tau$-倾斜</strong>，若 $|M|=|\Lambda|$（$|\cdot|$ 见第 0 节）；</li>
  <li>对 $(M,P)$（$M\in\mathrm{mod}\,\Lambda$，$P\in\mathrm{proj}\,\Lambda$）称为 <strong>$\tau$-刚性对</strong>，若 $M$ $\tau$-刚性且 $\mathrm{Hom}_{\Lambda}(P,M)=0$；若再满足 $|M|+|P|=|\Lambda|$，称为 <strong>support $\tau$-倾斜对</strong>。</li>
</ol>
<p><strong>关键等价刻画（AIR）</strong>：</p>
$$\mathrm{Hom}_{\Lambda}(M,\tau M)=0\quad\Longleftrightarrow\quad\mathrm{Ext}^{1}_{\Lambda}(M,\mathrm{Fac}\,M)=0.$$
<p>这条等价把涉及 $\tau$ 的条件改写为纯粹的 $\mathrm{Ext}^{1}$-条件，是 AIR 全部主要定理的技术起点；它可由 Auslander–Reiten 对偶 $D\overline{\mathrm{Hom}}(X,\tau Y)\cong\mathrm{Ext}^{1}(Y,X)$ 推出。</p>
<p><strong>与经典 tilting 的关系</strong>：若 $M$ 的投射维数 $\le1$，则由上式与经典刻画可知，$\tau$-倾斜模<em>等同于</em>经典 tilting 模（$\mathrm{Ext}^{1}(M,M)=0$ 且 $|M|=|\Lambda|$）。故 $\tau$-tilting 是经典 tilting 在高投射维数情形的真正推广，而非替换。</p>
<p><strong>对象版本</strong>：在 $\mathscr{C}(\Lambda)=\mathrm{mod}\,\Lambda\oplus(\mathrm{mod}\,\Lambda)[1]\subseteq\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 中，$U=M\oplus P[1]$ 为 <strong>support $\tau$-刚性</strong>即上述 (3)；$|M|+|P|=|\Lambda|$ 时称 support $\tau$-倾斜。</p>

<h4 id="ar-tau-1-2">1.2　support $\tau$-倾斜对与两项 silting</h4>
<p><strong>定义</strong>：$\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$ 中的复形 $\mathbb{P}$ 称为 <strong>两项 presilting</strong>，若 $\mathbb{P}$ 形如 $(P^{-1}\xrightarrow{f}P^{0})$（集中在次数 $-1,0$）且 $\mathrm{Hom}(\mathbb{P},\mathbb{P}[i])=0$ 对所有 $i&gt;0$；若它进一步生成 $\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$（经有限次平移、取锥与直和因子），称为 <strong>两项 silting</strong>。</p>
<p><strong>AIR 对应（显式构造）</strong>：给定 support $\tau$-倾斜对 $(M,P)$，取 $M$ 的极小投射逼近 $P^{0}\twoheadrightarrow M$，令 $P^{-1}$ 为其核中所含的投射部分，得两项复形</p>
$$\mathbb{P}_{(M,P)}=\big(P^{-1}\xrightarrow{\ f\ }P^{0}\big),$$
<p>其中 $P$ 恰是 $M$ 未用到的那部分投射（$|M|+|P|=|\Lambda|$ 保证“用掉的 + 未用的 = 全部”）。反向由 $\mathbb{P}$ 取 $M=H^{0}(\mathbb{P})$ 与相应的投射部分还原。这两个构造互为逆，给出定理 2.1 的第一组双射。</p>
<p><strong>直观</strong>：经典 tilting 用“$n$ 个不可分解投射重排成 $n$ 个模”；$\tau$-tilting 允许“只用其中一部分，并把没用上的投射显式记进数据”——这正是“support”的含义，也是突变总可进行的根本原因（2.2）。</p>

<h4 id="ar-tau-1-3">1.3　2-Calabi–Yau 范畴中的对应</h4>
<p>设 $\mathscr{C}$ 为 Hom-有限 Krull–Schmidt 2-CY 三角范畴，$T\in\mathscr{C}$ 丛倾斜，$A=\mathrm{End}_{\mathscr{C}}(T)^{\mathrm{op}}$。则：</p>
<ul>
  <li>$\mathscr{C}$ 中基本<strong>刚性</strong>对象 ↔ $A$ 上基本 <strong>$\tau$-刚性</strong>模；</li>
  <li>$\mathscr{C}$ 中基本<strong>丛倾斜</strong>对象 ↔ $A$ 上基本 <strong>support $\tau$-倾斜</strong>模。</li>
</ul>
<p>这一双射把丛理论的"突变"与 $\tau$-tilting 的"突变"等同起来，是两条主线之间的主要接口（详见本页"Cluster Theory"面板 3.5）。</p>

<h4 id="ar-tau-1-4">1.4　$\tau$-垂直范畴与约化</h4>
<p>设 $M$ 为基本 $\tau$-刚性模。定义 <strong>$\tau$-垂直范畴</strong></p>
$$J(M):=M^{\perp_{0}}\ \cap\ {}^{\perp_{0}}(\tau M),$$
<p>其中 $M^{\perp_{0}}=\{X\mid\mathrm{Hom}(M,X)=0\}$，${}^{\perp_{0}}(\tau M)=\{X\mid\mathrm{Hom}(X,\tau M)=0\}$。Jasso 证明 $J(M)$ 等价于某个有限维代数 $\Gamma_{M}$ 的模范畴；$\Gamma_{M}$ 称为 <strong>$\tau$-倾斜约化</strong>。这推广了 Geigle–Lenzing 在遗传情形的垂直范畴。</p>
<p>对 support $\tau$-刚性对象 $U=M\oplus P[1]$，相应定义为 $J(U)={}^{\perp_{0}}(\tau M)\cap(P\oplus M)^{\perp_{0}}$，结论同样成立（$P=0$ 即 Jasso 的情形）。</p>

<h4 id="ar-tau-1-5">1.5　挠类、$g$-向量与 brick</h4>
<ul>
  <li><strong>挠类</strong>（torsion class）：对扩张与商封闭的模子范畴；函子有限挠类与 support $\tau$-倾斜模一一对应（2.4）。</li>
  <li><strong>$g$-向量</strong>：由两项 presilting 复形在 $K_{0}(\mathrm{proj}\,\Lambda)$ 中的类给出；每个 presilting 复形给出一个锥，这些锥组成 <strong>$g$-向量扇</strong>。</li>
  <li><strong>brick</strong>：自同态代数为除环的模；<strong>semibrick</strong>：两两 Hom-正交的 brick 集合。brick 与不可分解 $\tau$-刚性模对应，semibrick 与宽子范畴对应（Ringel）。</li>
</ul>

<h3 class="ar-subhead" id="ar-tau-2">2　核心工具与定理</h3>

<h4 id="ar-tau-2-1">2.1　Adachi–Iyama–Reiten 基本定理</h4>
<p><strong>定理 2.1（AIR, Compos. Math. 2014）</strong>：<strong>设</strong> $\Lambda$ 为有限维代数。<strong>则</strong>存在自然双射</p>
$$\{\text{基本 support }\tau\text{-倾斜对}\}\ \longleftrightarrow\ \{\text{基本两项 silting 复形}\}\ \longleftrightarrow\ \{\text{函子有限挠类}\},$$
<p>分别由 1.2 的显式构造与 $(M,P)\mapsto\mathrm{Fac}\,M$ 给出。<strong>并且</strong>在 2-CY 三角范畴 $\mathscr{C}$ 与 $A=\mathrm{End}_{\mathscr{C}}(T)^{\mathrm{op}}$ 之间，有</p>
$$\{\mathscr{C}\ \text{中基本刚性对象}\}\leftrightarrow\{A\ \text{上基本 }\tau\text{-刚性模}\},\qquad \{\mathscr{C}\ \text{中基本丛倾斜对象}\}\leftrightarrow\{A\ \text{上基本 support }\tau\text{-倾斜模}\}.$$
<p>AIR 原文说明：这<em>统一</em>了此前平行发展的两条理论线——silting 理论与丛倾斜理论。</p>
<p><strong>边界</strong>：第一组双射只对<em>两项</em> silting 复形成立；一般（多于两项）的 silting 复形没有 support $\tau$-倾斜对这样的模论对应物。</p>

<h4 id="ar-tau-2-2">2.2　完备性：突变总是可以进行</h4>
<p><strong>定理 2.2（完备性）</strong>：任意基本 $\tau$-刚性模都可完备为一个基本 $\tau$-倾斜模；对 support $\tau$-倾斜对 $(M,P)$，其每个不可分解直和因子都可被替换，且替换在"两个候选"的意义下唯一（由交换三角 / 交换序列给出）。这正是经典 tilting 突变所缺少的性质，也是 $\tau$-tilting 被称为 tilting 理论"完备化"的原因。</p>
<p>推论：$\tau$-倾斜对的集合构成一个带突变结构的组合对象，其"交换图"（exchange graph）连通。</p>

<h4 id="ar-tau-2-3">2.3　$\tau$-倾斜约化</h4>
<p><strong>定理 2.3（Jasso）</strong>：对基本 $\tau$-刚性模 $M$，$\tau$-垂直范畴 $J(M)$ 等价于有限维代数 $\Gamma_{M}$ 的模范畴，且 $J(M)$ 中的 $\tau$-倾斜理论与 $\Lambda$ 中"包含 $M$"的部分相容。这是 $\tau$-tilting 理论最重要的<em>归纳工具</em>：把一个大问题归约到更小的代数上。约化与 silting 约化、丛倾斜约化相容（Jasso 学位论文第 3 章讨论了与其他类型约化的兼容性）。</p>

<h4 id="ar-tau-2-4">2.4　与函子有限挠类的双射</h4>
<p><strong>定理 2.4（AIR；Iyama–Jørgensen–Yang 的范畴版本）</strong>：<strong>设</strong> $\Lambda$ 为有限维代数。<strong>则</strong>映射</p>
$$(M,P)\ \longmapsto\ \mathrm{Fac}\,M$$
<p>是从 support $\tau$-倾斜对到<strong>函子有限挠类</strong>的双射；其逆把挠类 $\mathscr{T}$ 送到 $(\mathscr{T}\ \text{中的 Ext-投射生成元},\ \text{其正交补中的投射})$。对偶地也有 support $\tau$-倾斜对 ↔ 函子有限余挠类的双射。</p>
<p><strong>范畴版本（IJY）</strong>：对带 silting 子范畴 $\mathscr{S}$ 的三角范畴，存在双射</p>
$$\{\text{两项 silting 子范畴}\}\ \longleftrightarrow\ \{\mathrm{mod}\,\mathscr{S}\ \text{的 support }\tau\text{-倾斜子范畴}\},$$
<p>把 $\tau$-tilting 从“模范畴”提升到“一般三角范畴”层面。</p>

<h4 id="ar-tau-2-5">2.5　brick 与 semibrick</h4>
<p><strong>定理 2.5</strong>：每个 $\tau$-刚性模的"<em>endotop</em>"（同端部）分解为 brick，且这些 brick 两两 Hom-正交，构成 semibrick（Demonet–Iyama–Jasso；Asai）。反之，semibrick 与宽子范畴一一对应（Ringel）。由此得到 $\tau$-刚性模与 brick 之间的对应，成为研究 $\tau$-倾斜有限性的主要工具之一。</p>

<h4 id="ar-tau-2-6">2.6　$g$-向量扇与壁—室结构</h4>
<p>每个两项 presilting 复形给出 $K_{0}(\mathrm{proj}\,\Lambda)\otimes\mathbb{R}$ 中的一个锥，这些锥构成一个扇——<strong>$g$-向量扇</strong>。它编码了 silting 对象之间的偏序、公共直和因子等信息。该扇嵌入代数的<strong>壁—室结构</strong>（wall-and-chamber structure），后者由 King 意义下的稳定性条件给出。$g$-向量扇与壁—室结构是近年 $\tau$-tilting 几何化的主要载体。</p>

<h4 id="ar-tau-2-7">2.7　$\tau$-丛态射范畴与 picture 群</h4>
<p><strong>$\tau$-丛态射范畴</strong>由 Igusa–Todorov 对遗传代数引入（当时称"丛态射范畴"），后经推广到 $\tau$-倾斜有限代数与任意有限维代数。其意义：该范畴的<em>分类空间</em>在遗传情形同胚于 picture 空间，且为 $K(\pi,1)$（$\pi$ 为 picture 群）——Igusa–Todorov 据此证明了 picture 空间为 $K(\pi,1)$ 的猜想。</p>
<p>该范畴定义中的<strong>合成结合性</strong>是技术难点，已有若干更概念化的证明（含基于 silting 理论的证明）。Schroll–Williams（Math. Z. <b>312</b>, 2026, no. 77）用 $g$-向量扇给出纯几何构造，使结合性成为构造的直接推论；Børve–Kaipel（arXiv:2508.01040）则研究了基域扩张下 brick 与 $\tau$-tilting 的行为，并以 $\tau$-丛态射范畴为主要应用目标。</p>

<h4 id="ar-tau-2-8">2.8　$\tau$-倾斜有限性</h4>
<p><strong>定义</strong>：$\Lambda$ 称为 <strong>$\tau$-倾斜有限</strong>，若 support $\tau$-倾斜对的个数有限（等价地：函子有限挠类有限；砖有限）。</p>
<ul>
  <li><strong>Demonet–Iyama–Jasso</strong>：给出 $\tau$-倾斜有限性的多种等价刻画，并把它与 $g$-向量、brick 联系起来；</li>
  <li><strong>Plamondon</strong>：gentle 代数 $\tau$-倾斜有限 ⟺ 表示有限（Pacific J. Math. 2019）；</li>
  <li><strong>2026 进展</strong>：Chang–Jin–Schroll–Wang（arXiv:2512.24316）证明 <strong>skew-gentle 代数 $\tau$-倾斜有限 ⟺ 表示有限</strong>，把 Plamondon 定理推广到 skew-gentle 情形；并用曲面 / orbifold 曲面模型刻画分次 gentle 与 skew-gentle 代数完美导出范畴的 <strong>silting-离散性</strong>（分次 gentle 情形 ⟺ 属零且所有简单闭曲线绕数非零）。</li>
</ul>

<h3 class="ar-subhead" id="ar-tau-3">3　主要应用与实例</h3>

<h4 id="ar-tau-3-1">3.1　任意有限维代数的统一框架</h4>
<p>$\tau$-tilting 已被广泛接受为<em>把遗传代数上的结论推广到任意有限维代数</em>的正确框架：例如例外序列（exceptional sequence）需推广为 <strong>$\tau$-例外序列</strong>才能保证"极大长度总存在"（Buan–Marsh 等）；垂直范畴需推广为 $\tau$-垂直范畴（2.3）；tilting 的组合学需推广为 $\tau$-tilting 的突变组合学。</p>

<h4 id="ar-tau-3-2">3.2　silting 与导出等价</h4>
<p>两项 silting 复形 ↔ support $\tau$-倾斜对（2.1）使 $\tau$-tilting 成为 silting 理论的"模范畴侧镜像"；silting 复形又控制导出等价（Rickard 型定理）与 t-结构、余 t-结构（Iyama–Jørgensen–Yang 的中间余 t-结构）。因此 $\tau$-tilting 同时是导出 Morita 理论与表示论的组合工具。</p>

<h4 id="ar-tau-3-3">3.3　丛代数、$g$-向量与 $F$-多项式</h4>
<p>$g$-向量是丛代数（Fomin–Zelevinsky）中同名概念的表示论实现；在 $\tau$-倾斜有限或丛代数情形下，$g$-向量扇与丛代数的 $g$-向量扇一致，$F$-多项式由相应的模 / 对象的拟表示论数据给出。这把 $\tau$-tilting 与丛理论、量子群的 combinatorial 表现连成一体。</p>

<h4 id="ar-tau-3-4">3.4　gentle / skew-gentle 代数（2026）</h4>
<p>gentle 代数及其 skew-gentle 变体是 $\tau$-tilting 与 silting 理论近年最活跃的试验场，因为它们的模范畴与导出范畴可由<em>带标记曲面</em>（orbifold 曲面）完全建模。2026 年的成果（2.8）同时给出：①skew-gentle 的 $\tau$-倾斜有限性 ⟺ 表示有限性；②分次（skew-）gentle 的 silting-离散性的曲面刻画。这些都是"用几何模型回答表示论有限性问题"的范例，也与本页"gentle 导出分类""Geometric model"热点面板直接呼应。</p>

<h4 id="ar-tau-3-5">3.5　高维推广 $\tau_{d}$</h4>
<p>August–Haugland–Jacobsen–Kvamme–Palu–Treffinger（arXiv:2602.03659, 2026）把 $\tau$-tilting 提升到高维：对函子有限的 $d$-挠类关联极大 $\tau_{d}$-刚性对与 $(d+1)$-项 silting 复形；$d=1$ 时恢复 AIR 经典双射，$d>1$ 需新策略。详见本页"高维AR理论"面板 2.8。</p>

<h4 id="ar-tau-3-6">3.6　基域扩张下的行为（2025）</h4>
<p>Børve–Kaipel（arXiv:2508.01040）研究标量扩张函子 $-\otimes_{k}K$ 下 $\tau$-tilting 理论各部分（brick、semibrick、$g$-向量扇、壁—室结构、$\tau$-倾斜有限性）的行为，给出"提升"定理。其动机部分来自 $\tau$-丛态射范畴：为了把结果推广到非代数闭域，需要控制个体对象在域扩张下的提升（这与 Gabriel 定理在非代数闭域上需用 species/赋值箭图的表述同源）。</p>

<h3 class="ar-subhead" id="ar-tau-4">4　与邻近概念的关系</h3>

<h4 id="ar-tau-4-1">4.1　与经典 tilting 理论</h4>
<p>投射维数 $\le 1$ 时二者一致；一般情形 $\tau$-tilting 更强、且具有经典理论所缺的<em>完备性</em>（2.2）。经典 tilting 主要服务于<em>导出等价</em>的构造，$\tau$-tilting 主要服务于<em>组合学与突变</em>的系统化。</p>

<h4 id="ar-tau-4-2">4.2　与 silting 理论</h4>
<p>两项 silting ↔ support $\tau$-倾斜（2.1）；一般（多项）silting 则在三角范畴层面推广。Iyama–Jørgensen–Yang 给出"两项 silting 子范畴 ↔ support $\tau$-倾斜子范畴"的范畴版本，Zhou–Zhu 的两项弱 $\mathscr{R}$-丛倾斜子范畴则统一了若干已有双射。</p>

<h4 id="ar-tau-4-3">4.3　与丛理论</h4>
<p>2-CY 范畴 $\mathscr{C}$ 与丛倾斜代数 $A=\mathrm{End}_{\mathscr{C}}(T)^{\mathrm{op}}$ 之间，丛倾斜对象 ↔ support $\tau$-倾斜模（1.3）。反向地，$\tau$-tilting 可看作丛理论"去掉 2-CY 假设"后的一般化。</p>

<h4 id="ar-tau-4-4">4.4　与高维 Auslander–Reiten 理论</h4>
<p>$\tau_{d}$-tilting（3.5）以高维 AR 平移 $\tau_{d}$ 取代 $\tau$，把挠类、刚性对、silting 复形三项结构一并提升；$d=1$ 即本面板的经典内容。</p>

<h4 id="ar-tau-4-5">4.5　与 stability / 几何模型</h4>
<p>$g$-向量扇嵌入壁—室结构（King 稳定性），$\tau$-丛态射范畴可由 $g$-向量扇纯几何地构造（Schroll–Williams）。gentle / skew-gentle 情形的曲面模型把有限性问题完全几何化（3.4）。这条"$\tau$-tilting ⟶ 几何"的路线是当前最活跃的分支之一。</p>

<h4 id="ar-tau-4-6">4.6　总表</h4>
<table>
<thead><tr><th>邻近概念</th><th>关系方向</th><th>主要见证</th></tr></thead>
<tbody>
<tr><td>经典 tilting</td><td>投射维数 $\le1$ 时一致；$\tau$ 版有完备性</td><td>AIR；ARS</td></tr>
<tr><td>silting</td><td>两项 silting ↔ support $\tau$-倾斜</td><td>AIR；IJY</td></tr>
<tr><td>丛理论（2-CY）</td><td>丛倾斜 ↔ support $\tau$-倾斜的双射</td><td>AIR；Yang–Zhu</td></tr>
<tr><td>挠类 / 宽子范畴</td><td>$\tau$-倾斜 ↔ 函子有限挠类；semibrick ↔ 宽子范畴</td><td>AIR；Ringel；Asai</td></tr>
<tr><td>高维 AR 理论</td><td>$\tau_{d}$-tilting；$d=1$ 恢复</td><td>August 等 2602.03659</td></tr>
<tr><td>gentle / 曲面</td><td>有限性与 silting-离散性的几何刻画</td><td>Plamondon；Chang 等 2512.24316</td></tr>
<tr><td>稳定性条件</td><td>$g$-向量扇 ↔ 壁—室结构</td><td>King；Bri– 相关文献</td></tr>
<tr><td>picture 群</td><td>$\tau$-丛态射范畴的分类空间为 $K(\pi,1)$</td><td>Igusa–Todorov；Schroll–Williams</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-tau-5">5　常见混淆与易错点</h3>
<ul class="agent-list">
  <li><span class="agent-name">$\tau$-刚性 ≠ 刚性</span>：$\mathrm{Hom}(M,\tau M)=0$ 与 $\mathrm{Ext}^{1}(M,M)=0$ 互不包含；投射维数 $\le1$ 时后者蕴含前者，一般情形两者不同。</li>
  <li><span class="agent-name">“support”的含义</span>：$P$ 记录的是<em>被删去</em>的那部分投射（$M$ 未用到的），不是“支撑”；$|M|+|P|=|\Lambda|$ 应读作“用掉的 + 没用掉的 = 全部”。</li>
  <li><span class="agent-name">$|\Lambda|$ 是一个数</span>：指 $\Lambda$ 作为右模的不可分解投射直和因子个数 $n$，不是 $\Lambda$ 的长度或维数。</li>
  <li><span class="agent-name">$\tau$-倾斜模未必是 tilting 模</span>：$\tau$-倾斜模不一定有有限投射维数；只有当投射维数 $\le1$ 时两者一致。</li>
  <li><span class="agent-name">$J(M)$ 是子范畴不是商范畴</span>：$\tau$-垂直范畴 $J(M)=M^{\perp_{0}}\cap{}^{\perp_{0}}(\tau M)$ 是 $\mathrm{mod}\,\Lambda$ 的<em>满子范畴</em>；它<em>等价于</em>某个有限维代数 $\Gamma_{M}$ 的模范畴，但并非商范畴。</li>
  <li><span class="agent-name">两项 silting 的限定</span>：support $\tau$-倾斜只对应<em>两项</em> silting 复形；多项 silting 复形无此模论对应。</li>
  <li><span class="agent-name">完备性的方向</span>：任意 $\tau$-刚性<em>模</em>可完备为 $\tau$-倾斜模，但这是 $\tau$-tilting 独有的性质——经典 tilting 的突变会失败，这正是引入 $\tau$-tilting 的动因（1.0）。</li>
</ul>

<h3 class="ar-subhead" id="ar-tau-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> T. Adachi, O. Iyama, I. Reiten, <i>$\tau$-tilting theory</i>, arXiv:1210.1036; Compos. Math. <b>150</b> (2014), 415–452.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> T. Adachi, O. Iyama, I. Reiten, <i>On $\tau$-tilting theory</i>（Frontiers of Science Award 论文自述与近期进展）, arXiv:2410.15842.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> G. Jasso, <i>Reduction of $\tau$-tilting modules and torsion pairs</i>, Int. Math. Res. Not. IMRN <b>2015</b> (16), 7190–7237.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> L. Demonet, O. Iyama, G. Jasso, <i>$\tau$-tilting finite algebras, bricks, and $g$-vectors</i>, Int. Math. Res. Not. IMRN <b>2019</b> (3), 852–892.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> S. Asai, <i>Semibricks</i>, Int. Math. Res. Not. IMRN <b>2020</b> (16), 4993–5054.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> O. Iyama, P. Jørgensen, D. Yang, <i>Intermediate co-t-structures, two-term silting objects, $\tau$-tilting modules, and torsion classes</i>, Algebra Number Theory <b>8</b> (2014), 2413–2431.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> P.-G. Plamondon, <i>$\tau$-tilting finite gentle algebras are representation-finite</i>, Pacific J. Math. <b>302</b> (2019), 709–716.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> C. M. Ringel, <i>Representations of $K$-species and bimodules</i>, J. Algebra <b>41</b> (1976), 269–302（semibrick ↔ 宽子范畴）.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> A. King, <i>Moduli of representations of finite dimensional algebras</i>, Quart. J. Math. Oxford <b>45</b> (1994), 515–530.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> S. Schroll, N. J. Williams, <i>A geometric perspective on the $\tau$-cluster morphism category</i>, Math. Z. <b>312</b> (2026), no. 77.</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> E. D. Børve, M. Kaipel, <i>Bricks and $\tau$-tilting theory under base field extensions</i>, arXiv:2508.01040.</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> W. Chang, H. Jin, S. Schroll, Q. Wang, <i>On the $\tau$-tilting finiteness and silting-discreteness of graded (skew-) gentle algebras</i>, arXiv:2512.24316.</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> J. August, J. Haugland, K. M. Jacobsen, S. Kvamme, Y. Palu, H. Treffinger, <i>Higher torsion classes, $\tau_{d}$-tilting theory and silting complexes</i>, arXiv:2602.03659 (2026).</p>
<p class="ar-ref"><span class="ar-ref-no">[14]</span> A. B. Buan, R. Marsh, M. Reineke, I. Reiten, G. Todorov, <i>Tilting theory and cluster combinatorics</i>, arXiv:math/0402054; Adv. Math. <b>204</b> (2006), 572–618.</p>
</div>
</div>
