---
title: "har"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
<a class="ar-toc-l1" href="#ar-har-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-har-1">1　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-har-1-0">1.0　动机：把"正交"从 $\mathrm{Ext}^{1}$ 提高到 $\mathrm{Ext}^{1..d-1}$</a>
    <a class="ar-toc-l2" href="#ar-har-1-1">1.1　$d$-丛倾斜子范畴</a>
    <a class="ar-toc-l2" href="#ar-har-1-2">1.2　$d$-几乎分裂序列</a>
    <a class="ar-toc-l2" href="#ar-har-1-3">1.3　$d$-abelian 与 $d$-exact 范畴</a>
    <a class="ar-toc-l2" href="#ar-har-1-4">1.4　高维 Auslander 代数与 $d$-表示有限代数</a>
    <a class="ar-toc-l2" href="#ar-har-1-5">1.5　高维 AR 平移 $\tau_{d}$ 与 $d$-APR tilting</a>
    <a class="ar-toc-l1" href="#ar-har-2">2　核心工具与定理</a>
    <a class="ar-toc-l2" href="#ar-har-2-1">2.1　$d$-几乎分裂序列的存在性</a>
    <a class="ar-toc-l2" href="#ar-har-2-2">2.2　高维缺陷公式</a>
    <a class="ar-toc-l2" href="#ar-har-2-3">2.3　由对象决定的态射（高维版）</a>
    <a class="ar-toc-l2" href="#ar-har-2-4">2.4　$d$-abelian / $d$-exact 与 $d$-丛倾斜的对应</a>
    <a class="ar-toc-l2" href="#ar-har-2-5">2.5　Frobenius $d$-exact 范畴与 $(d+2)$-角范畴</a>
    <a class="ar-toc-l2" href="#ar-har-2-6">2.6　高维 Auslander 对应</a>
    <a class="ar-toc-l2" href="#ar-har-2-7">2.7　$d$-APR tilting 与 $d$-表示有限性</a>
    <a class="ar-toc-l2" href="#ar-har-2-8">2.8　$\tau_{d}$-tilting 理论（2026）</a>
    <a class="ar-toc-l1" href="#ar-har-3">3　主要应用与实例</a>
    <a class="ar-toc-l2" href="#ar-har-3-1">3.1　$d$-表示有限代数</a>
    <a class="ar-toc-l2" href="#ar-har-3-2">3.2　Cohen–Macaulay 模与孤立奇点</a>
    <a class="ar-toc-l2" href="#ar-har-3-3">3.3　预投射代数与 Lie 论</a>
    <a class="ar-toc-l2" href="#ar-har-3-4">3.4　高 Auslander 代数与高 Nakayama 代数</a>
    <a class="ar-toc-l2" href="#ar-har-3-5">3.5　与 $m$-丛范畴的对照</a>
    <a class="ar-toc-l2" href="#ar-har-3-6">3.6　显式组合例子</a>
    <a class="ar-toc-l1" href="#ar-har-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l2" href="#ar-har-4-1">4.1　与经典 Auslander–Reiten 理论</a>
    <a class="ar-toc-l2" href="#ar-har-4-2">4.2　与丛理论</a>
    <a class="ar-toc-l2" href="#ar-har-4-3">4.3　与 $\tau$-tilting 理论</a>
    <a class="ar-toc-l2" href="#ar-har-4-4">4.4　与 $n$-角范畴</a>
    <a class="ar-toc-l2" href="#ar-har-4-5">4.5　与 silting 理论</a>
    <a class="ar-toc-l2" href="#ar-har-4-6">4.6　总表</a>
<a class="ar-toc-l1" href="#ar-har-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-har-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-har-0">0　记号与约定</h3>
<p>固定交换 Artin 环 $R$（常取域 $k$），$\Lambda$ 记 Artin $R$-代数。整数 $d\ge1$ 为“维数参数”，全文固定。</p>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\mathrm{mod}\,\Lambda$</td><td>有限生成右 $\Lambda$-模范畴</td></tr>
<tr><td>$\mathscr{C}$</td><td>$\mathrm{mod}\,\Lambda$ 的一个 $d$-丛倾斜子范畴（默认函子有限）</td></tr>
<tr><td>$\mathrm{Ext}^{i}_{\Lambda}(-,-)$</td><td>在<em>环境</em> Abel 范畴 $\mathrm{mod}\,\Lambda$ 中计算的 Ext（不是 $\mathscr{C}$ 内部的）</td></tr>
<tr><td>$\mathrm{add}(M)$</td><td>$M$ 的有限直和之直和因子构成的子范畴</td></tr>
<tr><td>$\Omega$</td><td>syzygy（合冲）函子</td></tr>
<tr><td>$\tau$，$\tau_{d}$</td><td>AR 平移；高维 AR 平移（$\tau_{d}\cong\tau\Omega^{\,d-1}$，见 1.5）</td></tr>
<tr><td>$\mathrm{gl.dim}$，$\mathrm{dom.dim}$</td><td>全局维数；Tachikawa 意义下的优势维数</td></tr>
<tr><td>$\mathrm{CM}(R)$</td><td>（交换 Gorenstein 环 $R$ 的）极大 Cohen–Macaulay 模范畴</td></tr>
<tr><td>$M^{\perp_{0}}$，${}^{\perp_{0}}M$</td><td>$\{X\mid\mathrm{Hom}(M,X)=0\}$，$\{X\mid\mathrm{Hom}(X,M)=0\}$</td></tr>
<tr><td>$\mathrm{ind}\,\mathscr{C}$</td><td>$\mathscr{C}$ 中不可分解对象的同构类集合</td></tr>
</tbody>
</table>
<p>约定：①$d$ 的取值贯穿全文，$d=1$ 恒退化回经典 Auslander–Reiten 理论；②“正合列”默认在 $\mathrm{mod}\,\Lambda$ 中，除非注明在 $\mathscr{C}$ 中；③“$d$-投射 / $d$-内射”是<em>相对</em> $\mathscr{C}$ 的概念，不同于绝对投射性（见 1.1 与第 5 节）；④引用高维 Auslander 对应的维数不等式时须核对文献的 $\pm1$ 约定。</p>

<h3 class="ar-subhead" id="ar-har-1">1　概念与定义</h3>

<h4 id="ar-har-1-0">1.0　动机：把"正交"从 $\mathrm{Ext}^{1}$ 提高到 $\mathrm{Ext}^{1..d-1}$</h4>
<p>经典 Auslander–Reiten 理论以<strong>几乎分裂序列</strong>（almost split sequence，又称 AR 序列）为核心工具：$0\to A\to B\to C\to 0$，用以探测不可分解模、不可约映射与 AR 箭图。它在本页"基础理论—Auslander–Reiten 理论"面板中详述。</p>
<p>高维 Auslander–Reiten 理论（Iyama，2004 年前后起）的思想是：若一个子范畴的正交条件由 $\mathrm{Ext}^{1}$ 提高到<em>一段范围</em>的 $\mathrm{Ext}^{i}$，则 Abel 范畴的"短正合列"应当被<strong>更长</strong>的正合列取代，AR 序列应当被<strong>$d$-几乎分裂序列</strong>取代。由此得到的理论不是经典理论的类比装饰，而是有独立内涵、独立例子与独立定理的学科分支。</p>

<h4 id="ar-har-1-1">1.1　$d$-丛倾斜子范畴</h4>
<p><strong>定义</strong>：设 $\Lambda$ 为 Artin 代数，$d\ge1$。全子范畴 $\mathscr{C}\subseteq\mathrm{mod}\,\Lambda$ 称为 <strong>$d$-丛倾斜</strong>（$d$-cluster-tilting），若 $\mathscr{C}$ <strong>函子有限</strong>（即每个 $X\in\mathrm{mod}\,\Lambda$ 都有右、左 $\mathscr{C}$-逼近）且</p>
$$\mathscr{C}=\{X\mid \mathrm{Ext}^{i}_{\Lambda}(\mathscr{C},X)=0,\ \forall\,1\le i\le d-1\}=\{X\mid \mathrm{Ext}^{i}_{\Lambda}(X,\mathscr{C})=0,\ \forall\,1\le i\le d-1\}.$$
<p><strong>两个方向必须都写</strong>：与 2-Calabi–Yau 三角范畴的情形不同（那里两个方向由 Serre 对偶自动等价，见“Cluster Theory”面板 1.2），此处没有对偶性可用，故定义中两个等式都是实质条件。</p>
<p><strong>$d$-投射 / $d$-内射对象</strong>：$P\in\mathscr{C}$ 称为 <strong>$d$-投射</strong>，若 $\mathrm{Ext}^{i}_{\Lambda}(P,\mathscr{C})=0$ 对所有 $1\le i\le d-1$；对偶地定义 <strong>$d$-内射</strong>。这是<em>相对</em>概念（相对 $\mathscr{C}$）。<strong>注意</strong>：$d=1$ 时该条件为空，于是 $\mathscr{C}$ 中<em>每个</em>对象都是 $d$-投射的——这与经典的“投射”概念截然不同（见第 5 节）。</p>
<p><strong>参数说明</strong>：$d=1$ 时两条件均为空，退化为 $\mathscr{C}=\mathrm{mod}\,\Lambda$；$d=2$ 即丛理论中的 2-cluster-tilting 条件。本文的 $d$ 与“$m$-丛范畴”的 $m$ 取相同数值，但后者在三角范畴一侧、为 $(m+1)$-CY（见 3.5）。</p>

<h4 id="ar-har-1-2">1.2　$d$-几乎分裂序列</h4>
<p><strong>定义</strong>：$\mathrm{mod}\,\Lambda$ 中的一条正合列</p>
$$0\longrightarrow A\longrightarrow C_{1}\longrightarrow C_{2}\longrightarrow\cdots\longrightarrow C_{d}\longrightarrow B\longrightarrow 0\qquad(C_{i}\in\mathscr{C})$$
<p>称为 $\mathscr{C}$ 中的 <strong>$d$-几乎分裂序列</strong>，若满足三条：</p>
<ol>
  <li>它<strong>不可裂</strong>（即不是由可裂短正合列拼接出的平凡列）；</li>
  <li>末端态射 $C_{d}\to B$ 为<strong>右几乎分裂</strong>：它是非可裂满态射，且任意非可裂态射 $C\to B$（$C\in\mathscr{C}$）都经 $C_{d}\to B$ 分解；</li>
  <li>始端态射 $A\to C_{1}$ 为<strong>左几乎分裂</strong>：对偶地，它是非可裂单态射，且任意非可裂态射 $A\to C$（$C\in\mathscr{C}$）都经 $A\to C_{1}$ 分解。</li>
</ol>
<p><strong>项数与经典情形的对照</strong>：$d=1$ 时序列有 $3=d+2$ 项，即经典几乎分裂（AR）序列 $0\to A\to B\to C\to 0$；一般地，$d$-几乎分裂序列恰有 $d+2$ 项。这一“长度 $d+2$”现象是高维同调代数的普遍特征——对照 $(d+2)$-角范畴（2.5）与 $n$-abelian 范畴中的 $n$-正合列。</p>
<p><strong>唯一性</strong>：给定不可分解的 $A$（非 $d$-内射）或 $B$（非 $d$-投射），相应的 $d$-几乎分裂序列在<em>同构</em>意义下唯一。</p>

<h4 id="ar-har-1-3">1.3　$d$-abelian 与 $d$-exact 范畴</h4>
<p>Jasso 的关键贡献（arXiv:1405.7805）是把"高维同调"公理化：</p>
<ul>
  <li><strong>$d$-核 / $d$-余核</strong>：把核、余核推广为长度 $d+2$ 的复形；</li>
  <li><strong>$d$-正合序列</strong>：长度为 $d+2$、两端为 $d$-核与 $d$-余核的复形；</li>
  <li><strong>$d$-abelian 范畴</strong>：带 $d$-核 / $d$-余核、且满足相应正合性公理的可加范畴（半单范畴可由 $d$-abelian 性刻画）；</li>
  <li><strong>$d$-exact 范畴</strong>：正合范畴的 $d$-版本；<strong>Frobenius $d$-exact 范畴</strong>：有足够多 $d$-投射与 $d$-内射对象且二者一致。</li>
</ul>
<p>这些概念为"高维同调代数"提供了与 Abel / 正合范畴平行的公理环境，使 Kelley 式的经典定理得以逐级推广。</p>

<h4 id="ar-har-1-4">1.4　高维 Auslander 代数与 $d$-表示有限代数</h4>
<ul>
  <li>设 $\Lambda$ 有限表示型、$M$ 为其表示生成元，则 $\Gamma=\mathrm{End}_{\Lambda}(M)$ 为 <strong>Auslander 代数</strong>，满足 $\mathrm{gl.dim}\,\Gamma\le 2\le\mathrm{dom.dim}\,\Gamma$（Auslander 对应）。</li>
  <li>高维版本：若 $\mathrm{mod}\,\Lambda$ 有 $d$-丛倾斜子范畴 $\mathscr{C}$ 且 $\mathscr{C}$ 有加法生成元 $M$，则 $\mathrm{End}_{\Lambda}(M)$ 为 <strong>$d$-Auslander 代数</strong>，满足相应的同调维数不等式（$\mathrm{gl.dim}\le d+1$ 且 $\mathrm{dom.dim}\ge d+1$ 型条件）。</li>
  <li><strong>$d$-表示有限代数</strong>（Iyama–Oppermann）：$\Lambda$ 称为 $d$-表示有限，若 $\mathrm{mod}\,\Lambda$ 有 $d$-丛倾斜子范畴且该子范畴只有有限多个不可分解对象（至同构）。$d=1$ 即经典有限表示型。</li>
</ul>

<h4 id="ar-har-1-5">1.5　高维 AR 平移 $\tau_{d}$ 与 $d$-APR tilting</h4>
<p><strong>$\tau_{d}$ 的定义（由序列刻画）</strong>：在 $d$-几乎分裂序列</p>
$$0\longrightarrow \tau_{d}B\longrightarrow C_{1}\longrightarrow\cdots\longrightarrow C_{d}\longrightarrow B\longrightarrow 0$$
<p>中，左端对象 $\tau_{d}B$ 由 $B$ 唯一确定（至同构），称 $\tau_{d}$ 为<strong>高维 AR 平移</strong>。在 $\mathrm{mod}\,\Lambda$ 的具体情形可算得</p>
$$\tau_{d}\ \cong\ \tau\circ\Omega^{\,d-1},$$
<p>与经典的 $\tau=\tau_{1}$ 一致。</p>
<p><strong>$d$-APR tilting</strong>（Iyama–Oppermann）：从一个 $d$-表示有限代数构造另一个的标准操作，把 $\tau_{d}^{-1}$-轨道上的不可分解对象替换掉；$d=1$ 即经典 APR tilting。</p>
<p><strong>切片</strong>（slice）：$\mathscr{C}$ 中由 $\tau_{d}$-轨道结构决定的一类组合对象，是 2.8 中 $\tau_{d}$-tilting 理论的基本构件。</p>

<h3 class="ar-subhead" id="ar-har-2">2　核心工具与定理</h3>

<h4 id="ar-har-2-1">2.1　$d$-几乎分裂序列的存在性</h4>
<p><strong>定理 2.1（Iyama）</strong>：<strong>设</strong> $\mathscr{C}\subseteq\mathrm{mod}\,\Lambda$ 为 $d$-丛倾斜子范畴。<strong>则</strong>：</p>
<ol>
  <li>对每个不可分解的<em>非 $d$-投射</em>对象 $B\in\mathscr{C}$，存在以 $B$ 为右端的 $d$-几乎分裂序列；</li>
  <li>对偶地，对每个不可分解的<em>非 $d$-内射</em>对象 $A\in\mathscr{C}$，存在以 $A$ 为左端的 $d$-几乎分裂序列。</li>
</ol>
<p><strong>条件不可省略</strong>：若 $B$ 是 $d$-投射的，则“右端为 $B$”的候选序列退化为可裂列，不构成 $d$-几乎分裂序列——这与经典情形（对投射模不存在 AR 序列）完全平行。</p>
<p>Jasso–Kvamme（arXiv:1610.05458）沿 Auslander–Reiten–Smalø 的进路给出这些基本结果的<em>另证</em>，是目前该方向最可读的入门材料与标准引文。</p>

<h4 id="ar-har-2-2">2.2　高维缺陷公式</h4>
<p><strong>定理 2.2（Jasso–Kvamme）</strong>：Krause 对 Auslander <strong>缺陷公式</strong>（defect formula）的证明可以改造，给出 $d$-正合序列的缺陷公式。经典公式把一个短正合列与函子 $\underline{\mathrm{Hom}}(-,C)$ 的"缺陷"联系起来；高维版本则度量长度 $d+2$ 的序列上的对应偏差，是 2.3 的技术前提。</p>

<h4 id="ar-har-2-3">2.3　由对象决定的态射（高维版）</h4>
<p><strong>定理 2.3（Jasso–Kvamme）</strong>：利用缺陷公式，可在 $d$-丛倾斜子范畴中建立"<strong>由对象决定的态射</strong>"（morphisms determined by objects）的存在性——这正是 Auslander 经典理论的支柱性概念（它把 AR 序列与函子范畴的单射包络联系起来）。这一定理表明：高维理论并非只在"序列变长"这一点上类比经典理论，而是在<em>函子范畴机制</em>层面真正平行。</p>

<h4 id="ar-har-2-4">2.4　$d$-abelian / $d$-exact 与 $d$-丛倾斜的对应</h4>
<p><strong>定理 2.4（Jasso）</strong>：设 $\mathscr{A}$ 为 Abel 范畴、$\mathscr{C}\subseteq\mathscr{A}$ 为 $d$-丛倾斜子范畴，则 $\mathscr{C}$ 具有<em>天然的</em> $d$-abelian 结构；反之，一大类 $d$-abelian 范畴由此产生（arXiv:1405.7805 中定理 3.16、3.20 给出 $d$-abelian 与 Abel 范畴的 $d$-丛倾斜子范畴之间的联系；定理 4.14 给出 $d$-exact 与正合范畴版本中对应的结果）。</p>
<p>意义：$d$-丛倾斜子范畴本身<em>不是</em> Abel 范畴（它甚至通常不对扩张封闭），但它在高维意义下是"Abel 的"——这解释了为何高维理论需要自己的公理体系。</p>

<h4 id="ar-har-2-5">2.5　Frobenius $d$-exact 范畴与 $(d+2)$-角范畴</h4>
<p><strong>定理 2.5</strong>：Frobenius $d$-exact 范畴的稳定范畴具有 $(d+2)$-角结构（Geiss–Keller–Oppermann 意义下的 $n$-角范畴，$n=d+2$）。这是"Frobenius 范畴的稳定范畴为三角范畴"这一经典命题的高维推广，也是高维丛范畴（$m$-丛范畴）能获得 $(m+1)$-Calabi–Yau 三角结构的原因之一。</p>

<h4 id="ar-har-2-6">2.6　高维 Auslander 对应</h4>
<p><strong>定理 2.6（Iyama）</strong>：Auslander 对应（有限表示型的 Morita 等价类 ↔ Auslander 代数的 Morita 等价类）有 $d$ 维版本：$d$-Auslander 代数恰为 $\mathrm{gl.dim}\le d+1$、$\mathrm{dom.dim}\ge d+1$（取适当约定）的 Artin 代数，并与带 $d$-丛倾斜生成元的代数形成对应。这一对应把"高维表示有限性"这一范畴性质转化为"两个同调维数的不等式"这一<em>代数</em>性质，是高维理论最有力的判别工具之一。</p>

<h4 id="ar-har-2-7">2.7　$d$-APR tilting 与 $d$-表示有限性</h4>
<p><strong>定理 2.7（Iyama–Oppermann）</strong>：$d$-APR tilting 保持 $d$-表示有限性，并给出 $d$-表示有限代数之间的系统迁移。由此可从一个已知例子生成大量新例子，也是分类工作（如 2-表示有限导出典范代数）的主要工具。相关的"扭曲分数 Calabi–Yau"性质（Herschend–Iyama）为这些代数提供了同调不变量。</p>

<h4 id="ar-har-2-8">2.8　$\tau_{d}$-tilting 理论（2026）</h4>
<p><strong>定理 2.8（August–Haugland–Jacobsen–Kvamme–Palu–Treffinger, arXiv:2602.03659）</strong>：把 $\tau$-tilting 理论提升到高维——以高维 AR 平移 $\tau_{d}$ 取代 $\tau$：</p>
<ul>
  <li>对每个函子有限的 <strong>$d$-挠类</strong>（$d$-torsion class），关联一个<strong>极大 $\tau_{d}$-刚性对</strong>与一个 <strong>$(d+1)$-项 silting 复形</strong>；</li>
  <li>$d=1$ 时"极大 $\tau_{d}$-刚性"与"support $\tau$-倾斜对"一致，从而恢复 Adachi–Iyama–Reiten 的经典双射；但 $d>1$ 的证明策略显著不同；</li>
  <li>中间步骤：$\mathrm{mod}\,\Lambda$ 的 $d$-丛倾斜子范畴<em>诱导</em> $(d+1)$-项复形范畴上的 $d$-丛倾斜子范畴，从而产生新的 $d$-exact 范畴例子；</li>
  <li>应用于 $d$-APR tilting 模与切片；并对高 Auslander 代数、高 Nakayama 代数给出极大 $\tau_{d}$-刚性对与 $(d+1)$-项 silting 复形的显式组合描述。</li>
</ul>

<h3 class="ar-subhead" id="ar-har-3">3　主要应用与实例</h3>

<h4 id="ar-har-3-1">3.1　$d$-表示有限代数</h4>
<ul>
  <li><strong>$d=2$</strong>：Herschend–Iyama 系统研究，并与扭曲分数 Calabi–Yau 性质相连；</li>
  <li><strong>2-表示有限的导出典范代数</strong>：已有完整分类（Jasso 学位论文中的一章）；</li>
  <li><strong>高 Nakayama 代数</strong>：一类可控的、可完全计算的 $d$-表示有限代数族，是检验高维猜想的常用试验场。</li>
</ul>

<h4 id="ar-har-3-2">3.2　Cohen–Macaulay 模与孤立奇点</h4>
<p>对交换的 $d$ 维孤立奇点 $R$，其 Cohen–Macaulay 模范畴 $\mathrm{CM}(R)$ 常含有 $d$-丛倾斜子范畴（Amiot–Iyama–Reiten 的构造）。这是高维理论与奇点理论的主要接点，也与本页"Gorenstein 同调理论""奇点范畴"两个热点面板相邻：Gorenstein 性保证 $\mathrm{CM}(R)$ 的良好行为，而 $d$-丛倾斜性提供高维"几乎分裂"结构。</p>

<h4 id="ar-har-3-3">3.3　预投射代数与 Lie 论</h4>
<p>Dynkin 型预投射代数 $\Pi$ 的模范畴含 2-丛倾斜子范畴（Geiss–Leclerc–Schröer），用于范畴化 Lie 论中的丛结构。更一般地，与 Coxeter 群元素相关的子范畴构造（Buan–Iyama–Reiten–Scott 等）提供了带群论参数的一族例子。</p>

<h4 id="ar-har-3-4">3.4　高 Auslander 代数与高 Nakayama 代数</h4>
<p>$d$-Auslander 代数 $\Gamma=\mathrm{End}_{\Lambda}(M)$ 是高维理论最具体的"输出"：其同调维数不等式（2.6）可被直接验证，其模范畴的 $d$-丛倾斜子范畴可被显式写出。高 Nakayama 代数则给出组合上完全可算的一族，2026 年的 $\tau_{d}$-tilting 工作（2.8）即以其为主要例子之一。</p>

<h4 id="ar-har-3-5">3.5　与 $m$-丛范畴的对照</h4>
<p>$m$-丛范畴 $\mathscr{C}^{(m)}_{Q}=\mathbf{D}^{b}(H)/(\tau^{-1}[m])$ 是 $(m+1)$-CY 三角范畴，其 tilting 对象的组合学丰富；高维 AR 理论则工作在 <em>Abel / 正合</em>一侧。二者的交汇点：$(m+1)$-角范畴（2.5）与"三角侧 CY 性 ↔ Abel 侧 $m$-丛倾斜性"的对应。注意两者的参数约定不同（$m$-丛范畴的 $m$ 对应 $d=m$），阅读文献时需留意。</p>

<h4 id="ar-har-3-6">3.6　显式组合例子</h4>
<p>2026 年的 $\tau_{d}$-tilting 工作（定理 2.8）对高 Auslander 代数与高 Nakayama 代数给出了极大 $\tau_{d}$-刚性对与 $(d+1)$-项 silting 复形的<strong>组合描述</strong>——这类显式结果是该方向近年最实用的进展，使高维对象首次可以被"手算"。</p>

<h3 class="ar-subhead" id="ar-har-4">4　与邻近概念的关系</h3>

<h4 id="ar-har-4-1">4.1　与经典 Auslander–Reiten 理论</h4>
<p>$d=1$ 完全退化回经典理论。差异体现在三处：①序列长度 $3\to d+2$；②正交条件 $\mathrm{Ext}^{1}\to\mathrm{Ext}^{1..d-1}$；③$d$-丛倾斜子范畴<em>不是</em> Abel 范畴，需要 $d$-abelian / $d$-exact 公理（2.4）。而缺陷公式、由对象决定的态射等机制在两层真正平行（2.2、2.3）。</p>

<h4 id="ar-har-4-2">4.2　与丛理论</h4>
<p>丛理论主要处理 $d=2$ 时的 <strong>2-CY 三角范畴</strong>与丛倾斜对象（本页"Cluster Theory"面板）；高维 AR 理论处理 <strong>Abel / 正合范畴中的 $d$-丛倾斜子范畴</strong>。二者在 $d=2$ 相交（预投射代数的稳定范畴既是 2-CY 又有 2-丛倾斜结构），但关注的算子不同：前者关<em>突变</em>，后者关<em>几乎分裂序列与同调维数</em>。</p>

<h4 id="ar-har-4-3">4.3　与 $\tau$-tilting 理论</h4>
<p>由 $\tau_{d}$-tilting（2.8）直接衔接：$d=1$ 时 $\tau_{d}$-刚性 = $\tau$-刚性，$(d+1)$-项 silting 复形 = 两项 silting 复形，从而恢复 AIR 的经典双射；$d>1$ 时需要新的证明策略，并引出 $d$-挠类等新概念。这是当前把"$\tau$-tilting 的完备性"搬到高维的主要路线。</p>

<h4 id="ar-har-4-4">4.4　与 $n$-角范畴</h4>
<p>Frobenius $d$-exact 范畴的稳定范畴为 $(d+2)$-角范畴（2.5）。$n$-角范畴（Geiss–Keller–Oppermann）提供三角范畴的"高维"类比，与 $d$-exact 范畴形成"稳定化 ↔ 去稳定化"的一对。</p>

<h4 id="ar-har-4-5">4.5　与 silting 理论</h4>
<p>定理 2.8 把 $d$-挠类接到 $(d+1)$-项 silting 复形上，是 silting 理论的高维扩展。经典 $\tau$-tilting ↔ 两项 silting 的对应在 $d=1$ 处嵌入这一图景。</p>

<h4 id="ar-har-4-6">4.6　总表</h4>
<table>
<thead><tr><th>邻近概念</th><th>关系方向</th><th>主要见证</th></tr></thead>
<tbody>
<tr><td>经典 AR 理论</td><td>$d=1$ 退化；序列长度与正交条件升级</td><td>Auslander–Reiten；ARS</td></tr>
<tr><td>丛理论（2-CY）</td><td>$d=2$ 相交；突变 vs. 高维分裂序列</td><td>BMRRT；Iyama–Yoshino</td></tr>
<tr><td>$\tau$-tilting</td><td>$\tau_{d}$ 推广；$d=1$ 恢复 AIR 双射</td><td>AIR；August 等 2602.03659</td></tr>
<tr><td>$n$-角范畴</td><td>Frobenius $d$-exact 的稳定化为 $(d+2)$-角</td><td>Geiss–Keller–Oppermann</td></tr>
<tr><td>Cohen–Macaulay 模 / 奇点</td><td>主要例子来源（孤立奇点）</td><td>Amiot–Iyama–Reiten</td></tr>
<tr><td>预投射代数 / Lie 论</td><td>2-丛倾斜子范畴范畴化丛结构</td><td>Geiss–Leclerc–Schröer</td></tr>
<tr><td>Auslander 对应</td><td>高维版把"表示有限性"转为维数不等式</td><td>Iyama；Auslander</td></tr>
<tr><td>silting</td><td>$(d+1)$-项 silting 复形</td><td>AIR；August 等 2602.03659</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-har-5">5　常见混淆与易错点</h3>
<ul class="agent-list">
  <li><span class="agent-name">$d$-丛倾斜子范畴不是 Abel 子范畴</span>：$\mathscr{C}$ 对扩张通常<em>不</em>封闭，因此它不是 Abel 范畴；它的“正合性”是 $d$-abelian / $d$-exact 意义下的（1.3、2.4）。</li>
  <li><span class="agent-name">$d=1$ 时“$d$-投射”不含信息</span>：此时 $\mathrm{Ext}^{i}$ 条件为空，$\mathscr{C}$ 中每个对象都是 $d$-投射的——这<em>不</em>意味着它们是投射模。$d$-投射是相对 $\mathscr{C}$ 的概念。</li>
  <li><span class="agent-name">项数是 $d+2$ 不是 $d+1$</span>：$d$-几乎分裂序列有 $d+2$ 项（$d=1$ 时为经典的 $3$ 项 AR 序列）。写成 $d+1$ 是常见笔误。</li>
  <li><span class="agent-name">Abel 侧与三角侧的参数</span>：$d$-丛倾斜子范畴（Abel/正合侧）与 $m$-丛范畴（三角侧、$(m+1)$-CY）虽可取 $m=d$，但结构不同、公理不同，不可直接互换结论。</li>
  <li><span class="agent-name">$\tau_{d}\cong\tau\Omega^{d-1}$ 需要上下文</span>：该公式在 $\mathrm{mod}\,\Lambda$ 中成立；抽象 $\mathscr{C}$ 上 $\tau_{d}$ 由 $d$-几乎分裂序列定义，谈论 $\Omega$ 需 $\mathscr{C}$ 具备相应结构。</li>
  <li><span class="agent-name">高维 Auslander 对应的 $\pm1$ 约定</span>：不同文献对 $d$-Auslander 代数的维数不等式写作 $\mathrm{gl.dim}\le d+1$、$\mathrm{dom.dim}\ge d+1$ 或相差 $1$ 的其他形式，引用前须核对。</li>
  <li><span class="agent-name">$d$-表示有限 ≠ 表示有限</span>：$d=1$ 时二者一致；$d\ge2$ 时 $\mathscr{C}$ 只有有限多个不可分解对象，而 $\mathrm{mod}\,\Lambda$ 本身可以有无限多个。</li>
</ul>

<h3 class="ar-subhead" id="ar-har-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> O. Iyama, <i>Higher-dimensional Auslander–Reiten theory on maximal orthogonal subcategories</i>, Adv. Math. <b>210</b> (2007), 22–50.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> O. Iyama, <i>Auslander correspondence</i>, Adv. Math. <b>210</b> (2007), 51–82.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> G. Jasso, <i>$n$-abelian and $n$-exact categories</i>, arXiv:1405.7805; Math. Z. <b>283</b> (2016), 703–759.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> G. Jasso, S. Kvamme, <i>An introduction to higher Auslander–Reiten theory</i>, arXiv:1610.05458; Bull. Lond. Math. Soc. <b>51</b> (2019), 1–24.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> O. Iyama, S. Oppermann, <i>$n$-representation-finite algebras and $n$-APR tilting</i>, Trans. Amer. Math. Soc. (2011).</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> C. Amiot, O. Iyama, I. Reiten, <i>Stable categories of Cohen–Macaulay modules and cluster categories</i>, Amer. J. Math. <b>137</b> (2015), 813–857.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> C. Geiss, B. Keller, S. Oppermann, <i>$n$-angulated categories</i>, J. Reine Angew. Math. <b>675</b> (2013), 101–120.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> M. Herschend, O. Iyama, <i>$n$-representation-finite algebras and twisted fractionally Calabi–Yau algebras</i>, Bull. Lond. Math. Soc. <b>43</b> (2011), 449–466.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> T. Adachi, O. Iyama, I. Reiten, <i>$\tau$-tilting theory</i>, arXiv:1210.1036; Compos. Math. <b>150</b> (2014), 415–452.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> J. August, J. Haugland, K. M. Jacobsen, S. Kvamme, Y. Palu, H. Treffinger, <i>Higher torsion classes, $\tau_{d}$-tilting theory and silting complexes</i>, arXiv:2602.03659 (2026).</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> O. Iyama, Y. Yoshino, <i>Mutation in triangulated categories and rigid Cohen–Macaulay modules</i>, Invent. Math. <b>172</b> (2008), 117–168.</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> M. Auslander, I. Reiten, S. O. Smalø, <i>Representation Theory of Artin Algebras</i>, Cambridge Studies in Adv. Math. <b>36</b>, Cambridge Univ. Press, 1995.</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> C. Geiss, B. Leclerc, J. Schröer, <i>Rigid modules over preprojective algebras</i>, Invent. Math. <b>165</b> (2006), 589–632.</p>
</div>
</div>
