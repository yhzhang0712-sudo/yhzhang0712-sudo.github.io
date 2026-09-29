---
title: "clustertilting"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-hct-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-hct-1">1　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-hct-1-1">1.1　2-Calabi–Yau 情形的标准定义</a>
    <a class="ar-toc-l2" href="#ar-hct-1-2">1.2　丛倾斜代数与商范畴</a>
    <a class="ar-toc-l2" href="#ar-hct-1-3">1.3　丛倾斜子范畴</a>
    <a class="ar-toc-l2" href="#ar-hct-1-4">1.4　刚性、可达性与突变图</a>
    <a class="ar-toc-l1" href="#ar-hct-2">2　核心工具与定理</a>
    <a class="ar-toc-l2" href="#ar-hct-2-1">2.1　Iyama–Yoshino 突变</a>
    <a class="ar-toc-l2" href="#ar-hct-2-2">2.2　与 $\tau$-tilting 的双射</a>
    <a class="ar-toc-l2" href="#ar-hct-2-3">2.3　与 silting 的接口</a>
    <a class="ar-toc-l2" href="#ar-hct-2-4">2.4　丛倾斜代数的同调性质</a>
    <a class="ar-toc-l2" href="#ar-hct-2-5">2.5　组合不变量：$F$-多项式与 $g$-向量</a>
    <a class="ar-toc-l2" href="#ar-hct-2-6">2.6　高维：$d$-丛倾斜</a>
    <a class="ar-toc-l1" href="#ar-hct-3">3　主要应用与实例</a>
    <a class="ar-toc-l2" href="#ar-hct-3-1">3.1　几何来源的 2-CY 范畴</a>
    <a class="ar-toc-l2" href="#ar-hct-3-2">3.2　曲面模型中的丛倾斜</a>
    <a class="ar-toc-l2" href="#ar-hct-3-3">3.3　可达性问题</a>
    <a class="ar-toc-l2" href="#ar-hct-3-4">3.4　与 Gentle / Preprojective 面板的分工</a>
    <a class="ar-toc-l1" href="#ar-hct-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l2" href="#ar-hct-4-1">4.1　与经典 tilting</a>
    <a class="ar-toc-l2" href="#ar-hct-4-2">4.2　与 $\tau$-tilting / silting</a>
    <a class="ar-toc-l2" href="#ar-hct-4-3">4.3　与高维 AR 理论</a>
    <a class="ar-toc-l2" href="#ar-hct-4-4">4.4　总表</a>
    <a class="ar-toc-l1" href="#ar-hct-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-hct-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-hct-0">0　记号与约定</h3>
<p>固定代数闭域 $k$。</p>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\mathscr{C}$</td><td>Hom-有限、Krull–Schmidt、$k$-线性的 2-Calabi–Yau 三角范畴（本文默认环境）</td></tr>
<tr><td>$T$，$\bar{T}$</td><td>基本丛倾斜对象及其“去掉一个直和因子”的部分 $T=T_{0}\oplus\bar{T}$</td></tr>
<tr><td>$\mathrm{add}(T)$</td><td>$T$ 的有限直和之直和因子构成的满子范畴</td></tr>
<tr><td>$\mathrm{Ext}^{1}_{\mathscr{C}}(X,Y)$</td><td>$\mathrm{Hom}_{\mathscr{C}}(X,Y[1])$，$[1]$ 为 $\mathscr{C}$ 的平移</td></tr>
<tr><td>$A=\mathrm{End}_{\mathscr{C}}(T)^{\mathrm{op}}$</td><td>丛倾斜代数</td></tr>
<tr><td>$\mathscr{X}$</td><td>丛倾斜<em>子范畴</em>：$T$ 换成 $\mathrm{add}(T)$ 后的版本</td></tr>
<tr><td>$\mu^{-}_{T}(T_{0})$、$\mu^{+}_{T}(T_{0})$</td><td>$T_{0}$ 的左 / 右突变</td></tr>
<tr><td>$F_{M}$、$g_{M}$</td><td>$M$ 的 $F$-多项式与 $g$-向量</td></tr>
<tr><td>$X_{M}$</td><td>丛特征标（cluster character）</td></tr>
<tr><td>$\mathrm{reach}$</td><td>从给定丛倾斜对象出发经有限次突变可达的对象类</td></tr>
</tbody>
</table>
<p>约定：①“丛倾斜”默认指 2-CY 三角范畴中的对象版本；②“$d$-丛倾斜”（$d\ge2$）在 Abel / 正合范畴一侧，见“高维AR理论”面板 1.1；③“基本”指直和因子两两不同构。</p>

<h3 class="ar-subhead" id="ar-hct-1">1　概念与定义</h3>

<h4 id="ar-hct-1-1">1.1　2-Calabi–Yau 情形的标准定义</h4>
<p><strong>定义</strong>：设 $\mathscr{C}$ 为 Hom-有限 Krull–Schmidt 2-CY 三角范畴。对象 $T$ 称为<strong>丛倾斜</strong>的，若 $T$ 刚性（$\mathrm{Ext}^{1}_{\mathscr{C}}(T,T)=0$）且</p>
$$\mathrm{add}(T)=\{X\in\mathscr{C}\mid\mathrm{Hom}_{\mathscr{C}}(T,X[1])=0\}.$$
<p><strong>说明</strong>：由 Serre 对偶（$S\cong[2]$），$\mathrm{Hom}(T,X[1])\cong D\,\mathrm{Hom}(X,T[1])$，故两个正交方向自动等价，定义只需写一个（与“高维AR理论”面板 1.1 中 $d$-丛倾斜需写两个方向形成对照）。刚性与丛倾斜是两个独立条件：刚性只要求自扩张消失，丛倾斜还要求“极大性”。</p>

<h4 id="ar-hct-1-2">1.2　丛倾斜代数与商范畴</h4>
<p><strong>定理</strong>：对丛倾斜对象 $T$，令 $A=\mathrm{End}_{\mathscr{C}}(T)^{\mathrm{op}}$，则</p>
<ul>
  <li>$A$ 为<strong>丛倾斜代数</strong>（cluster-tilted algebra）；</li>
  <li>$\mathscr{C}/\mathrm{add}(T)\simeq\mathrm{mod}\,A$（Koenig–Zhu 型定理的 2-CY 特例），且该商范畴 Gorenstein 维数 $\le1$；</li>
  <li>$|T|=n$（$n$ 为初始箭图顶点数，在“由遗传代数出发”的情形）。</li>
</ul>
<p><strong>意义</strong>：丛倾斜代数是丛理论输出的“有限维代数”，其表示论性质（Gorenstein、稳定 CY）可由 $\mathscr{C}$ 的几何读出——这是本站“Gorenstein 对称猜想”等条目的重要例子来源。</p>

<h4 id="ar-hct-1-3">1.3　丛倾斜子范畴</h4>
<p><strong>定义</strong>：满加法子范畴 $\mathscr{X}\subseteq\mathscr{C}$ 称为<strong>丛倾斜子范畴</strong>，若 $\mathscr{X}$ 函子有限且</p>
$$\mathscr{X}=\{X\in\mathscr{C}\mid\mathrm{Hom}_{\mathscr{C}}(\mathscr{X},X[1])=0\}=\{X\in\mathscr{C}\mid\mathrm{Hom}_{\mathscr{C}}(X,\mathscr{X}[1])=0\}.$$
<p>与对象版本的关系：$\mathscr{X}=\mathrm{add}(T)$ 且 $T$ 基本时，二者一致。子范畴版本更灵活（不要求有加法生成元），是 Iyama–Yoshino 突变理论的自然语言，也是与“高维 AR 理论”的 $d$-丛倾斜子范畴直接对接的入口。</p>

<h4 id="ar-hct-1-4">1.4　刚性、可达性与突变图</h4>
<p><strong>刚性对象</strong>：$\mathrm{Ext}^{1}_{\mathscr{C}}(T,T)=0$；刚性对象的直和因子仍刚性。<strong>可达对象</strong>：能从初始丛倾斜对象经有限次突变得到的不可分解刚性对象。<strong>突变图</strong>：顶点为基本丛倾斜对象（或丛倾斜子范畴），边为突变；其连通性是 2.1 的核心定理。突变图同时编码了交换关系与“交换图”（exchange graph），是丛代数突变图的范畴化。</p>

<h3 class="ar-subhead" id="ar-hct-2">2　核心工具与定理</h3>

<h4 id="ar-hct-2-1">2.1　Iyama–Yoshino 突变</h4>
<p><strong>定理（Iyama–Yoshino）</strong>：<strong>设</strong> $\mathscr{C}$ 为 Hom-有限 Krull–Schmidt 2-CY 范畴，$\mathscr{X}$ 为丛倾斜子范畴，$T_{0}\in\mathscr{X}$ 不可分解且 $\mathscr{X}$ 基本。<strong>则</strong>存在唯一的 $T_{0}^{*}\notin\mathscr{X}$ 与交换三角</p>
$$T_{0}\longrightarrow B\longrightarrow T_{0}^{*}\longrightarrow T_{0}[1],\qquad T_{0}^{*}\longrightarrow B'\longrightarrow T_{0}\longrightarrow T_{0}^{*}[1],$$
<p>其中 $B,B'\in\mathscr{X}$ 且不在 $\mathrm{add}(T_{0})$ 中，使得</p>
$$\mu^{-}_{\mathscr{X}}(T_{0})=\mathrm{add}(\mathscr{X}\oplus T_{0}^{*})\setminus\mathrm{add}(T_{0})$$
<p>仍是丛倾斜子范畴。即：<strong>突变总可以进行，且结果唯一</strong>。这一“完备性”是 2-CY 环境的本质优势（对比经典 tilting 的突变会失败）。</p>

<h4 id="ar-hct-2-2">2.2　与 $\tau$-tilting 的双射</h4>
<p><strong>定理（Adachi–Iyama–Reiten）</strong>：<strong>设</strong> $\mathscr{C}$ 为 2-CY 范畴、$T$ 丛倾斜、$A=\mathrm{End}_{\mathscr{C}}(T)^{\mathrm{op}}$。<strong>则</strong></p>
$$\{\mathscr{C}\ \text{中基本刚性对象}\}\ \longleftrightarrow\ \{A\ \text{上基本 }\tau\text{-刚性模}\},$$
$$\{\mathscr{C}\ \text{中基本丛倾斜对象}\}\ \longleftrightarrow\ \{A\ \text{上基本 support }\tau\text{-倾斜模}\}.$$
<p>该双射把丛倾斜的突变与 support $\tau$-倾斜的突变等同起来，是本站“$\tau$-tilting 理论”面板 1.3 的内容；其推广（相对刚性、相对丛倾斜）见同面板 3.5。</p>

<h4 id="ar-hct-2-3">2.3　与 silting 的接口</h4>
<p>经 support $\tau$-倾斜对 ↔ 两项 silting 复形（AIR），丛倾斜理论接入三角范畴的 silting 框架；Iyama–Jørgensen–Yang 进一步给出“两项 silting 子范畴 ↔ support $\tau$-倾斜子范畴”的范畴版本。由此形成链条：<strong>丛倾斜（2-CY）→ $\tau$-倾斜（模范畴）→ silting（三角范畴）</strong>。</p>

<h4 id="ar-hct-2-4">2.4　丛倾斜代数的同调性质</h4>
<p><strong>定理（Keller–Reiten）</strong>：丛倾斜代数是 <strong>Gorenstein</strong> 的（Gorenstein 维数 $\le1$），且其<em>稳定范畴</em>是 Calabi–Yau 的（2-CY 或 3-CY，视约定）。<strong>推论</strong>：丛倾斜代数为检验“Gorenstein 对称猜想”与“Gorenstein 投射猜想”提供了丰沛而可控的例子族（本站对应条目）。</p>

<h4 id="ar-hct-2-5">2.5　组合不变量：$F$-多项式与 $g$-向量</h4>
<p>对刚性对象 $M$ 定义</p>
$$F_{M}(y)=\sum_{\mathbf{e}}\chi\big(\mathrm{Gr}_{\mathbf{e}}(M)\big)\,y^{\mathbf{e}},\qquad g_{M}=[P_{M}]\in K_{0}(\mathrm{proj}\,A),$$
<p>其中 $\mathrm{Gr}_{\mathbf{e}}(M)$ 为维数向量为 $\mathbf{e}$ 的子模格拉斯曼簇。丛特征标 $X_{M}$ 由 $F_{M}$ 与 $g_{M}$ 组合给出，并满足<strong>交换关系</strong>：若 $\mathrm{Ext}^{1}(L,M)$ 一维，则 $X_{L}X_{M}=X_{B}+X_{B'}$（$B,B'$ 为交换三角的中间项）。<strong>意义</strong>：这些不变量把“突变”翻译为“多项式恒等式”，是丛代数侧可验证的输出。</p>

<h4 id="ar-hct-2-6">2.6　高维：$d$-丛倾斜</h4>
<p>$d$-丛倾斜子范畴（$d\ge2$）在 Abel / 正合范畴一侧推广丛倾斜，带来 $d$-几乎分裂序列、$d$-abelian 范畴等新结构；$\tau_{d}$-tilting（2026）是其 $\tau$-tilting 侧的推广。详见“高维AR理论”面板 1.1、2.6、2.8。</p>

<h3 class="ar-subhead" id="ar-hct-3">3　主要应用与实例</h3>

<h4 id="ar-hct-3-1">3.1　几何来源的 2-CY 范畴</h4>
<ul class="agent-list">
<li><span class="agent-name">丛范畴 $\mathscr{C}_{Q}$</span>：无环箭图的经典丛范畴（BMRRT）；丛倾斜对象 ↔ 丛（Gabriel–Zelevinsky 型对应）。</li>
<li><span class="agent-name">广义丛范畴 $\mathscr{C}_{(Q,W)}$</span>：$\mathrm{per}(\Gamma(Q,W))/\mathbf{D}_{\mathrm{fd}}$（Amiot）；覆盖Jacobi-有限带势箭图。</li>
<li><span class="agent-name">$\underline{\mathrm{mod}}\,\Pi$</span>：Dynkin 型预投射代数的稳定范畴（Geiss–Leclerc–Schröer），范畴化 Lie 论中的丛结构。</li>
<li><span class="agent-name">$\underline{\mathrm{CM}}(R)$</span>：孤立奇点的稳定 Cohen–Macaulay 模范畴（Amiot–Iyama–Reiten）。</li>
</ul>

<h4 id="ar-hct-3-2">3.2　曲面模型中的丛倾斜</h4>
<p>带标记曲面的三角剖分给出 gentle 代数与相应的 2-CY 范畴：三角剖分 ↔ 丛倾斜对象、翻转（flip）↔ 突变、弧的相交数 ↔ $\dim\mathrm{Ext}^{1}$（Brüstle–Zhang；Qiu–Zhang 的带孔情形）。这是把“丛倾斜的组合学”完全几何化的标杆例子，详见本站“Gentle Algebra”“Geometric model”面板。</p>

<h4 id="ar-hct-3-3">3.3　可达性问题</h4>
<p><strong>问题</strong>：$\mathscr{C}$ 中是否每个刚性对象都可达？对丛范畴（无环 $Q$）答案是肯定的（Caldero–Chapoton–Schiffler）；一般 2-CY 范畴中存在不可达的刚性对象（反例已知）。该问题与“丛代数的有限突变型”“LP 型（Laurent 现象）的范畴化”直接相关，是当前活跃的开放方向。</p>

<h4 id="ar-hct-3-4">3.4　与 Gentle / Preprojective 面板的分工</h4>
<p>本面板讲“丛倾斜”这一<em>机制</em>（定义、突变、双射、不变量）；“Gentle Algebra”讲 gentle 类代数及其曲面模型的<em>具体类</em>；“Preprojective Algebra”讲预投射代数这一<em>来源</em>。三者共享对象（2-CY 范畴、丛倾斜）但侧重不同。</p>

<h3 class="ar-subhead" id="ar-hct-4">4　与邻近概念的关系</h3>

<h4 id="ar-hct-4-1">4.1　与经典 tilting</h4>
<p>经典 tilting 的条件是 $\mathrm{pd}\le1$ + $\mathrm{Ext}^{1}$ 消失 + 生成；丛倾斜的条件是 2-CY + 刚性 + 极大正交。二者机制不同（前者由“维数”驱动，后者由“对偶性”驱动），但都产生“自同态代数”并伴随突变组合学。</p>

<h4 id="ar-hct-4-2">4.2　与 $\tau$-tilting / silting</h4>
<p>由 2.2、2.3 的双射直接衔接；丛倾斜可视为 $\tau$-tilting 在 2-CY 范畴上的“几何实现”。</p>

<h4 id="ar-hct-4-3">4.3　与高维 AR 理论</h4>
<p>$d$-丛倾斜子范畴（Abel / 正合侧）与丛倾斜（三角侧）在 $d=2$ 交汇；$\tau_{d}$-tilting（2026）把 $\tau$-tilting 侧提升到高维，其 $d$-挠类 ↔ $(d+1)$-项 silting 的构造直接模仿丛倾斜侧的技巧。</p>

<h4 id="ar-hct-4-4">4.4　总表</h4>
<table>
<thead><tr><th>邻近概念</th><th>关系方向</th><th>主要见证</th></tr></thead>
<tbody>
<tr><td>丛代数（Fomin–Zelevinsky）</td><td>被 2-CY 范畴加性范畴化</td><td>BMRRT；Caldero–Chapoton</td></tr>
<tr><td>$\tau$-tilting</td><td>双射：刚性 ↔ $\tau$-刚性；丛倾斜 ↔ support $\tau$-倾斜</td><td>AIR</td></tr>
<tr><td>silting</td><td>两项 silting ↔ support $\tau$-倾斜；范畴版本 IJY</td><td>AIR；IJY</td></tr>
<tr><td>丛倾斜代数</td><td>$A=\mathrm{End}_{\mathscr{C}}(T)^{\mathrm{op}}$，Gorenstein 且稳定 CY</td><td>Keller–Reiten</td></tr>
<tr><td>高维 AR 理论</td><td>$d$-丛倾斜子范畴；$\tau_{d}$-tilting</td><td>Iyama；Jasso；August 等</td></tr>
<tr><td>曲面模型</td><td>三角剖分 ↔ 丛倾斜；翻转 ↔ 突变</td><td>Brüstle–Zhang；Qiu–Zhang</td></tr>
<tr><td>预投射代数</td><td>$\underline{\mathrm{mod}}\,\Pi$ 的 2-丛倾斜子范畴</td><td>Geiss–Leclerc–Schröer</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-hct-5">5　常见混淆与易错点</h3>
<ul class="agent-list">
<li><span class="agent-name">丛倾斜对象 ≠ 丛倾斜代数 ≠ 丛倾斜子范畴</span>：对象是 $\mathscr{C}$ 中的 $T$；代数是其自同态代数 $A$；子范畴是 $\mathrm{add}(T)$ 的推广（不要求有生成元）。三者常被混写。</li>
<li><span class="agent-name">刚性 ≠ 丛倾斜</span>：刚性只是自扩张消失；丛倾斜还要求极大正交（$\mathrm{add}(T)$ 恰为右正交类）。刚性对象的直和因子刚性，但刚性对象的并一般不是丛倾斜。</li>
<li><span class="agent-name">2-CY 假设不可去</span>：定义中“两个正交方向等价”依赖 Serre 对偶；在一般三角范畴中必须分别要求，且突变可能失败——这正是 $\tau$-tilting / silting 出现的原因。</li>
<li><span class="agent-name">可达 ≠ 刚性</span>：一般 2-CY 范畴中存在不可达的刚性对象；“所有刚性对象都可达”是定理而非定义，且只在特定范畴成立。</li>
<li><span class="agent-name">丛倾斜代数的 Gorenstein 性是定理不是定义</span>：由 Keller–Reiten 证明；不要把它当作丛倾斜代数的定义性质。</li>
<li><span class="agent-name">$d$-丛倾斜的参数</span>：$d$-丛倾斜（Abel 侧）与“$m$-丛范畴”（三角侧，$(m+1)$-CY）参数约定不同，引用时须核对。</li>
<li><span class="agent-name">交换三角的中间项</span>：$B$ 与 $B'$ 一般<em>不同构</em>（这正是交换关系有两项的原因）；误认为 $B\cong B'$ 是常见错误。</li>
</ul>

<h3 class="ar-subhead" id="ar-hct-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> A. B. Buan, R. Marsh, M. Reineke, I. Reiten, G. Todorov, <i>Tilting theory and cluster combinatorics</i>, arXiv:math/0402054; Adv. Math. <b>204</b> (2006), 572–618.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> O. Iyama, Y. Yoshino, <i>Mutation in triangulated categories and rigid Cohen–Macaulay modules</i>, Invent. Math. <b>172</b> (2008), 117–168.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> B. Keller, I. Reiten, <i>Cluster-tilted algebras are Gorenstein and stably Calabi–Yau</i>, Adv. Math. <b>211</b> (2007), 123–151.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> S. Koenig, B. Zhu, <i>From triangulated categories to abelian categories: cluster tilting in a general framework</i>, Math. Z. <b>258</b> (2008), 143–160.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> T. Adachi, O. Iyama, I. Reiten, <i>$\tau$-tilting theory</i>, arXiv:1210.1036; Compos. Math. <b>150</b> (2014), 415–452.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> O. Iyama, P. Jørgensen, D. Yang, <i>Intermediate co-t-structures, two-term silting objects, $\tau$-tilting modules, and torsion classes</i>, Algebra Number Theory <b>8</b> (2014), 2413–2431.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> Y. Palu, <i>Cluster characters for triangulated categories</i>, Ann. Inst. Fourier <b>58</b> (2008), 2221–2248.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> T. Brüstle, J. Zhang, <i>On the cluster category of a marked surface</i>, arXiv:1005.2422; Algebra Number Theory <b>5</b> (2011).</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> C. Amiot, <i>Cluster categories for algebras of global dimension 2 and quivers with potential</i>, Ann. Inst. Fourier <b>59</b> (2009), 2525–2590.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> G. Jasso, S. Kvamme, J. August 等关于 $\tau_{d}$-tilting 的近期工作，见本站“高维AR理论”面板参考文献.</p>
</div>
</div>
