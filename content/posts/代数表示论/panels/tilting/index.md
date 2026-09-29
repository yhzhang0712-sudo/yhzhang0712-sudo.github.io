---
title: "Tilting 理论"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-1">1　直观与动机</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-2">2　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-tilting-2-1">2.1　经典 tilting 模</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-tilting-2-2">2.2　$n$-倾斜模（Miyashita）</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-tilting-2-3">2.3　tilting 复形（Rickard）</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-3">3　核心定理与证明逻辑</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-tilting-3-1">3.1　Brenner–Butler 定理</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-tilting-3-2">3.2　Happel 定理（导出等价）</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-tilting-3-3">3.3　Rickard 定理</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-tilting-3-4">3.4　倾斜代数与挠对分裂</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-tilting-3-5">3.5　切片与 AR 箭图</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-4">4　可手算的例子与应用</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-5">5　与邻近概念的关系</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-6">6　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-tilting-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-theory-panel-tilting-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\Lambda$，$A$</td><td>有限维代数（$\Lambda$ 通常为被倾斜的代数，$A$ 为倾斜代数）</td></tr>
<tr><td>$n$</td><td>单模个数 $=\mathrm{rank}\,K_{0}(\mathrm{mod}\,\Lambda)$</td></tr>
<tr><td>$\mathrm{pd}\,M$</td><td>$M$ 的投射维数</td></tr>
<tr><td>$\mathrm{add}(T)$</td><td>$T$ 的有限直和之直和因子</td></tr>
<tr><td>$\mathrm{thick}(T)$</td><td>由 $T$ 三角生成的子范畴（平移、锥、直和因子封闭）</td></tr>
<tr><td>$\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$</td><td>投射模的有界同伦范畴（$\simeq\mathbf{D}^{\mathrm{perf}}(\Lambda)$）</td></tr>
<tr><td>$\tau$</td><td>Auslander–Reiten 平移（见 AR 理论面板）</td></tr>
<tr><td>silting 复形</td><td>tilting 复形去掉双向 $\mathrm{Hom}$ 消失中负向的条件（只留 $i&gt;0$）</td></tr>
</tbody>
</table>
<p>约定：①“tilting 模”默认指经典（Happel–Ringel）定义，即投射维数 $\le1$；②“tilting 复形”按 Rickard 定义；③两种“tilting”是同一思想在模层面与三角层面的实现（见 5）。</p>

<h3 class="ar-subhead" id="ar-theory-panel-tilting-1">1　直观与动机</h3>
<div class="ar-intu">
<p><b>一句话</b>：tilting（倾斜）= 在模范畴里换一组"坐标"（生成元），使得<strong>模变了、导出范畴不变</strong>。</p>
<p><b>为什么要换</b>：同一个导出范畴可以有完全不同的"心脏"（t-结构的心）。把代数换成倾斜等价的代数，常能把难以处理的同调问题搬到结构更清楚的代数上去（例如搬到遗传代数、搬到几何上的 tilting bundle）。</p>
<p><b>三条主线</b>：① 模层面（Brenner–Butler）：<em>torsion pair + 子范畴等价</em>；② 三角层面（Happel / Rickard）：<em>导出等价</em>；③ 组合层面：<em>AR 箭图的切片</em> 与 $\tau$-倾斜的<em>突变</em>。</p>
</div>

<h3 class="ar-subhead" id="ar-theory-panel-tilting-2">2　概念与定义</h3>

<h4 id="ar-theory-panel-tilting-2-1">2.1　经典 tilting 模（Happel–Ringel）</h4>
<p><strong>定义</strong>：模 $T$ 称为 <strong>tilting 模</strong>，若满足三条：</p>
<ol>
  <li>(T1) $\mathrm{pd}\,T\le1$；</li>
  <li>(T2) $\mathrm{Ext}^{1}_{\Lambda}(T,T)=0$；</li>
  <li>(T3) 存在短正合列 $0\to\Lambda\to T_{0}\to T_{1}\to0$，其中 $T_{0},T_{1}\in\mathrm{add}(T)$。</li>
</ol>
<p><strong>定义</strong>：$A=\mathrm{End}_{\Lambda}(T)^{\mathrm{op}}$ 称为<strong>倾斜代数</strong>（tilted algebra）。</p>
<p><b>三条各管什么</b>：(T1)(T2) 保证 $T$ "同调上很乖"（没有自身的高扩张，$\mathbf{R}\mathrm{Hom}$ 才能全忠实）；(T3) 保证 $T$ "足够大"（$\Lambda$ 可由 $T$ 两步造出，因而 $T$ 能生成整个导出范畴）。</p>
<p><strong>Bongartz 完备性引理</strong>：任何"预倾斜"模（满足 (T1)(T2) 但不一定满足 (T3)）都可补成一个 tilting 模——这保证 tilting 模总能被构造，是 tilting 理论可操作性的基础。</p>
<p><b>基本性质</b>：basic tilting 模恰有 $n$ 个不可分解直和因子（$n=$ 单模个数）；$\Lambda$ 自身是平凡 tilting 模；倾斜代数与 $\Lambda$ 的 $K_{0}$ 同秩。</p>

<h4 id="ar-theory-panel-tilting-2-2">2.2　$n$-倾斜模与 Miyashita 推广</h4>
<p>Miyashita 把 (T1) 放宽为 $\mathrm{pd}\,T&lt;\infty$、(T2) 放宽为 $\mathrm{Ext}^{i}_{\Lambda}(T,T)=0$ 对所有 $i&gt;0$，(T3) 改为长度 $n$ 的正合列 $0\to\Lambda\to T_{0}\to\cdots\to T_{n}\to0$（$T_{i}\in\mathrm{add}\,T$）；此时 $\mathrm{End}_{\Lambda}(T)^{\mathrm{op}}$ 仍与 $\Lambda$ 导出等价（但整体维数不必相同）。注意：此版本与"一般化 tilting（Happel–Reiten–Smalø）"又不同，后者还允许 $\mathcal{A}$ 为一般 Abel / 正合范畴（见 3.4）。</p>

<h4 id="ar-theory-panel-tilting-2-3">2.3　tilting 复形（Rickard）</h4>
<p><strong>定义</strong>：$P\in\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$ 称为 <strong>tilting 复形</strong>，若 $\mathrm{Hom}(P,P[i])=0$ 对所有 $i\ne0$，且 $P$ 生成 $\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$（即 $\mathrm{thick}(P)=\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$）。这是"<em>导出等价</em>"这一概念的正确生成元。</p>

<h3 class="ar-subhead" id="ar-theory-panel-tilting-3">3　核心定理与证明逻辑</h3>

<h4 id="ar-theory-panel-tilting-3-1">3.1　Brenner–Butler 定理（模层面的倾斜）</h4>
<p><strong>定理</strong>：设 $T$ 为 tilting 模、$A=\mathrm{End}_{\Lambda}(T)^{\mathrm{op}}$。定义</p>
$$\mathcal{T}=\{X\mid\mathrm{Ext}^{1}_{\Lambda}(T,X)=0\},\quad \mathcal{F}=\{X\mid\mathrm{Hom}_{\Lambda}(T,X)=0\},$$
$$\mathcal{Y}=\{Y\mid\mathrm{Tor}_{1}^{A}(Y,T)=0\},\quad \mathcal{X}=\{Y\mid Y\otimes_{A}T=0\}.$$
<p>则 $(\mathcal{T},\mathcal{F})$ 与 $(\mathcal{X},\mathcal{Y})$ 分别是 $\mathrm{mod}\,\Lambda$ 与 $\mathrm{mod}\,A$ 中的挠对（torsion pair），且下列两对函子互为逆等价：</p>
<figure class="ar-cd">
<svg viewBox="0 0 620 185" width="620" height="185" role="img" aria-label="Brenner-Butler：Hom(T,-) 与张量、Ext^1(T,-) 与 Tor_1 的两对互逆等价">
  <defs>
    <marker id="arh-til-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.3">
    <rect x="8" y="24" width="236" height="42" rx="7"/>
    <rect x="376" y="24" width="236" height="42" rx="7"/>
    <rect x="8" y="110" width="236" height="42" rx="7"/>
    <rect x="376" y="110" width="236" height="42" rx="7"/>
  </g>
  <g stroke="currentColor" stroke-width="1.3" fill="none" marker-end="url(#arh-til-a)">
    <line x1="248" y1="38" x2="372" y2="38"/>
    <line x1="248" y1="124" x2="372" y2="124"/>
  </g>
  <g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="5 4" marker-end="url(#arh-til-a)">
    <line x1="372" y1="54" x2="248" y2="54"/>
    <line x1="372" y1="140" x2="248" y2="140"/>
  </g>
  <g fill="currentColor" font-size="12.5" text-anchor="middle">
    <text x="126" y="50">𝒯 = {X : Ext¹(T,X) = 0}</text>
    <text x="494" y="50">𝒴 = {Y : Tor₁^A(Y,T) = 0}</text>
    <text x="126" y="136">ℱ = {X : Hom(T,X) = 0}</text>
    <text x="494" y="136">𝒳 = {Y : Y ⊗_A T = 0}</text>
  </g>
  <g fill="currentColor" font-size="11.5" text-anchor="middle">
    <text x="310" y="18">mod Λ　　　　　　　　　　　　mod A</text>
    <text x="310" y="30">Hom_Λ(T,−)</text>
    <text x="310" y="76">− ⊗_A T</text>
    <text x="310" y="116">Ext¹_Λ(T,−)</text>
    <text x="310" y="162">Tor₁^A(−,T)</text>
  </g>
</svg>
<figcaption>Brenner–Butler：实线为正向函子、虚线为逆。上半部搬运"与 $T$ 无 $\mathrm{Ext}^{1}$"的部分，下半部搬运"被 $T$ 正交掉"的部分——倾斜把模范畴切成两半分别搬运。</figcaption>
</figure>
<div class="ar-proof">
<div class="ar-proof-hd"><span class="ar-proof-tag">证明思路</span>从三条定义到两对等价</div>
<div class="ar-pf">
<div class="ar-pf-step"><span class="ar-pf-n">1</span><b>取伴随</b>：$\mathrm{Hom}_{\Lambda}(T,-)$ 与 $-\otimes_{A}T$ 互为伴随，单位 / 余单位为 $\delta_{Y}:Y\to\mathrm{Hom}_{\Lambda}(T,Y\otimes_{A}T)$ 与 $\varepsilon_{X}:\mathrm{Hom}_{\Lambda}(T,X)\otimes_{A}T\to X$。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">2</span><b>用 (T3) 造正合列</b>：把 $0\to\Lambda\to T_{0}\to T_{1}\to0$ 与 $\otimes$、$\mathrm{Hom}$ 结合，得到控制 $\ker\varepsilon_{X}$、$\mathrm{coker}\,\varepsilon_{X}$（以及 $\delta$ 的核与余核）的五项正合列。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">3</span><b>用 (T2) 消项</b>：$\mathrm{Ext}^{1}(T,T)=0$ 使上一步的"误差项"恰落在 $\mathcal{F}$（resp. $\mathcal{X}$）中 ⟹ 在 $\mathcal{T}$（resp. $\mathcal{Y}$）上单位 / 余单位是同构。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">4</span><b>得等价</b>：故 $\mathrm{Hom}_{\Lambda}(T,-):\mathcal{T}\to\mathcal{Y}$ 与 $\mathrm{Ext}^{1}_{\Lambda}(T,-):\mathcal{F}\to\mathcal{X}$ 都是范畴等价。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">5</span><b>得挠对</b>：正交性 $\mathrm{Hom}(\mathcal{T},\mathcal{F})=0$ 由定义直接给出；每个 $X$ 的分解 $0\to tX\to X\to X/tX\to0$ 由 (T3) 诱导 ⟹ $(\mathcal{T},\mathcal{F})$（对偶地 $(\mathcal{X},\mathcal{Y})$）是 torsion pair。</div>
</div>
<p class="ar-pf-key"><b>一句话关键</b>：(T3) 说明"$\Lambda$ 可由 $T$ 造出"⟹ 单位 / 余单位只差一点点；(T2) 让这"一点点"恰好落在 $\mathcal{F}$ 与 $\mathcal{X}$ 里 ⟹ 在正交补上就是同构。整个定理是"<strong>伴随 + 误差项落在正交补</strong>"。</p>
</div>

<h4 id="ar-theory-panel-tilting-3-2">3.2　Happel 定理（倾斜 ⟹ 导出等价）</h4>
<p><strong>定理（Happel 1988）</strong>：若 $T$ 是 tilting 模、$A=\mathrm{End}_{\Lambda}(T)^{\mathrm{op}}$，则 $\mathbf{R}\mathrm{Hom}_{\Lambda}(T,-)$ 给出三角等价 $\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)\simeq\mathbf{D}^{b}(\mathrm{mod}\,A)$。特别地，倾斜等价的代数共享导出不变量：K-理论、Hochschild 同调、以及（适当有限性假设下）同调猜想类性质。</p>
<div class="ar-proof">
<div class="ar-proof-hd"><span class="ar-proof-tag">证明思路</span>"全忠实 + 本质满"两步走</div>
<div class="ar-pf">
<div class="ar-pf-step"><span class="ar-pf-n">1</span><b>把 $T$ 当复形看</b>：(T1)(T2) ⟹ $\mathrm{Hom}_{\mathbf{D}}(T,T[i])=\mathrm{Ext}^{i}_{\Lambda}(T,T)=0$（$i\ne0$），即 $T$ 是"无自扩张"的对象。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">2</span><b>全忠实</b>：在 $\mathrm{thick}(T)$ 上按锥的构造步数归纳（devissage）：无高自扩张 ⟹ $\mathbf{R}\mathrm{Hom}(T,-)$ 在该子范畴上全忠实。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">3</span><b>生成（关键）</b>：(T3) 的 $0\to\Lambda\to T_{0}\to T_{1}\to0$ 说明 $\Lambda\in\mathrm{thick}(T)$；而 $\Lambda$ 生成 $\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ ⟹ $\mathrm{thick}(T)=\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">4</span><b>本质满</b>：像侧 $\mathbf{R}\mathrm{Hom}(T,T)=A$（集中在零次）生成 $\mathbf{D}^{b}(\mathrm{mod}\,A)$ ⟹ 像打满 ⟹ 等价。</div>
</div>
<p class="ar-pf-key"><b>一句话关键</b>：tilting 模 = 导出范畴里"<strong>无自扩张 + 生成</strong>"的一个对象。第 3 步（(T3) ⟹ 生成）与第 2 步（无扩张 ⟹ 全忠实）是全部要点，也正是 3.3 把定义推广到复形的依据。</p>
</div>

<h4 id="ar-theory-panel-tilting-3-3">3.3　Rickard 定理（导出 Morita 理论）</h4>
<p><strong>定理（Rickard, 1989）</strong>：<strong>设</strong> $\Lambda,A$ 为环。<strong>则</strong>下列等价：</p>
<ol>
  <li>$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)\simeq\mathbf{D}^{b}(\mathrm{mod}\,A)$（或 $\mathbf{D}(\mathrm{Mod}\,\Lambda)\simeq\mathbf{D}(\mathrm{Mod}\,A)$）为三角等价；</li>
  <li>$\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)\simeq\mathbf{K}^{b}(\mathrm{proj}\,A)$ 为三角等价；</li>
  <li>存在 tilting 复形 $P\in\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$ 使 $\mathrm{End}(P)\cong A$。</li>
</ol>
<p><b>证明逻辑</b>：必要性——等价 $F$ 把 $\Lambda$ 送到 $P=F\Lambda$，把"紧性 / 无自扩张 / 生成"逐条翻译即得 tilting 复形；充分性——与 3.2 完全同构的两步（全忠实 + 生成 + 本质满），只是把"模"换成"完美复形"。</p>
<p class="ar-mnote"><b>要点</b>：导出等价比倾斜等价<em>宽得多</em>——并非每个导出等价都来自某个 tilting 模（模只有 $n$ 个直和因子、且要求 $\mathrm{pd}\le1$），但<em>总</em>来自某个 tilting 复形。</p>

<h4 id="ar-theory-panel-tilting-3-4">3.4　倾斜代数与挠对分裂（Happel–Ringel）</h4>
<p><strong>定理（Happel–Ringel）</strong>：tilted 代数恰为"遗传代数的 tilting 模的自同态代数"；且此时 $\mathrm{mod}\,A$ 存在挠对 $(\mathcal{T},\mathcal{F})$，使 $\mathcal{T}$ 由"来自 $\Lambda$ 的模"生成、$\mathcal{F}$ 由"新出现的模"生成——即 $\mathrm{mod}\,A$ 由 $\mathcal{T}$ 与 $\mathcal{F}$ <em>分裂</em>。这是"tilted 代数"名称的来源。相关推广：quasi-tilted（Happel–Reiten–Smalø，用"倾角 $\le1$ 的切片代数"刻画，允许一般 Abel / 正合范畴）。</p>

<h4 id="ar-theory-panel-tilting-3-5">3.5　切片与 AR 箭图</h4>
<p>设 $\Lambda,A$ 由 tilting 模（或 tilting 复形）相联系，则导出等价把 $\Lambda$-模的 AR 箭图映到 $A$-模 AR 箭图的某个<strong>切片</strong>（slice：每条 $\tau$-轨道恰取一点、且对箭头封闭的一族对象），由此可从 $\Gamma(\Lambda)$ 读出 $\Gamma(A)$。对遗传代数 $kQ$（$\mathbf{D}^{b}(kQ)\cong\mathbb{Z}Q$），切片与 tilting 对象密切相关——这就是"读图找 tilting"的根据，也是丛突变的几何原型。</p>

<h3 class="ar-subhead" id="ar-theory-panel-tilting-4">4　可手算的例子与应用</h3>
<div class="ar-ex">
<div class="ar-ex-hd">例：$A_{2}$ 上的 APR 倾斜（= BGP 反射）</div>
<p>取 $Q:1\to2$、$\Lambda=kQ$，$P_{1}=(k\xrightarrow{\mathrm{id}}k)$、$P_{2}=S_{2}=(0,k)$、$S_{1}=(k,0)$，且 $\tau^{-1}S_{2}=S_{1}$。因 $S_{2}$ 单投射非内射，取</p>
$$T=P_{1}\oplus\tau^{-1}S_{2}=P_{1}\oplus S_{1}.$$
<p>验算三条：(T1) $\Lambda$ 遗传 ⟹ $\mathrm{pd}\le1$ ✓；(T2) $\mathrm{Ext}^{1}(P_{1},-)=0$、$\mathrm{Ext}^{1}(S_{1},S_{1})=0$ ✓；(T3) 把 AR 序列 $0\to S_{2}\to P_{1}\to S_{1}\to0$ 与平凡列 $0\to P_{1}\to P_{1}\to0$ 相加，得 $0\to P_{1}\oplus S_{2}\to P_{1}\oplus P_{1}\to S_{1}\to0$，即 $0\to\Lambda\to T_{0}\to T_{1}\to0$ ✓。</p>
<p>其自同态代数正是把 $Q$ 在顶点 $2$ 处反射所得箭图的路代数——<strong>BGP 反射函子就是倾斜函子</strong>（Auslander–Platzeck–Reiten 倾斜模）。</p>
</div>
<ul class="agent-list">
<li><span class="agent-name">Brauer 树代数</span>：对称表示有限代数的导出等价类由 Brauer 树编码，tilting 复形的突变对应 Kauer 移动（见本页「Standard Derived Equivalence」面板）。</li>
<li><span class="agent-name">Broué 交换亏群猜想</span>：猜测块代数与其 Brauer 对应块代数导出等价——这是 tilting 复形理论的主要动机之一（见本站「Broué 交换亏群猜想」面板）。</li>
<li><span class="agent-name">计算工具</span>：tilting 复形的分类、导出 Picard 群、silting 突变图（Aihara–Iyama）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-tilting-5">5　与邻近概念的关系</h3>
<ul class="agent-list">
<li><span class="agent-name">与 $\tau$-tilting</span>：把"$\mathrm{pd}\le1$ + 无自扩张"换成"$\tau$-刚性 $\mathrm{Hom}(M,\tau M)=0$"，得 support $\tau$-倾斜模；它们与<em>两项 silting 复形</em>、<em>函子有限挠类</em> 三方一一对应（Adachi–Iyama–Reiten）。</li>
<li><span class="agent-name">与 silting</span>（Aihara–Iyama）：在三角范畴中只要求 $\mathrm{Hom}(P,P[i])=0$ 对 $i&gt;0$ 成立，从而得到<em>突变总可进行</em>的理论（经典 tilting 突变会失败）。</li>
<li><span class="agent-name">与丛理论</span>：丛倾斜代数 = "2-CY 范畴中丛倾斜对象的自同态代数"，与 tilted 代数平级但机制不同（前者经 2-CY，后者经 $\mathrm{pd}\le1$ + 遗传）。</li>
<li><span class="agent-name">与 Gorenstein 同调</span>：tilting 模的存在性常用于检验 Gorenstein 性；Gorenstein 投射模是 tilting 模在 Gorenstein 情形的类似物。</li>
<li><span class="agent-name">与导出范畴 / dg</span>：tilting 复形是 $\mathbf{K}^{b}(\mathrm{proj})$ 内部的"生成元"，故 tilting 理论本质是导出范畴的生成理论；其 dg 版本（Keller）给出 dg 范畴的 Morita 等价。</li>
<li><span class="agent-name">与 AR 理论</span>：AR 序列是构造 tilting 模的原料（上例的 (T3) 就是一条 AR 序列）；$\tau$-刚性条件由 AR 公式与 $\mathrm{Ext}^{1}$ 相连。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-tilting-6">6　常见混淆与易错点</h3>
<ul class="agent-list">
<li><span class="agent-name">三条条件缺一不可</span>：仅满足 (T1)(T2) 的"预倾斜"模不一定是 tilting（Bongartz 完备性给出补全，但不等于它自己就是 tilting）。</li>
<li><span class="agent-name">倾斜 ≠ 等价（模范畴层面）</span>：倾斜只给<em>子范畴</em>等价（$\mathcal{T}\simeq\mathcal{Y}$、$\mathcal{F}\simeq\mathcal{X}$）与<em>导出</em>范畴等价；模范畴本身一般不等价。</li>
<li><span class="agent-name">$A$ 要取反代数</span>：右模 $T$ 上 $\mathrm{End}_{\Lambda}(T)^{\mathrm{op}}$ 才从左侧作用；漏掉 $^{\mathrm{op}}$ 会左右颠倒（路代数情形表现为箭图反向）。</li>
<li><span class="agent-name">直和因子个数</span>：basic tilting 模恰有 $n$ 个不可分解直和因子——这是定理（由 $K_{0}$ 的秩推出），不是定义的一部分。</li>
<li><span class="agent-name">tilted ≠ iterated tilted ≠ cluster-tilted</span>：三者分别对应"倾斜一次 / 多次（经倾斜代数再倾斜）/ 经 2-CY 丛倾斜"，生成机制不同；例：iterated tilted 未必 tilted。</li>
<li><span class="agent-name">"生成"条件的形式</span>：Rickard 定理的生成条件是"经平移、取锥、直和因子生成"（thick 生成）；只写"add 生成"会得到错误的类。</li>
<li><span class="agent-name">silting vs. tilting</span>：silting 只要求正向消失，允许 $i&lt;0$ 的自同态非零；很多"tilting 复形"的文献结论实际只对 silting 成立。</li>
<li><span class="agent-name">导出等价的方向性</span>：Rickard 定理给出的是<em>存在性</em>；具体函子需由 tilting 复形构造，且可能不唯一（导出 Picard 群）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-tilting-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> S. Brenner, M. C. R. Butler, <i>Generalizations of the Bernstein–Gelfand–Ponomarev reflection functors</i>, Lecture Notes in Math. <b>832</b>, Springer, 1980, 103–169.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> D. Happel, C. M. Ringel, <i>Tilted algebras</i>, Trans. Amer. Math. Soc. <b>274</b> (1982), 399–443.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> D. Happel, <i>Triangulated Categories in the Representation Theory of Finite-Dimensional Algebras</i>, LMS Lecture Note Ser. <b>119</b>, Cambridge Univ. Press, 1988.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> J. Rickard, <i>Morita theory for derived categories</i>, J. London Math. Soc. <b>39</b> (1989), 436–456.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> M. Auslander, M. I. Platzeck, I. Reiten, <i>Coxeter functors without diagrams</i>, Trans. Amer. Math. Soc. <b>250</b> (1979), 1–46.（APR 倾斜模）</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> Y. Miyashita, <i>Tilting modules of finite projective dimension</i>, Math. Z. <b>193</b> (1986), 113–146.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> D. Happel, I. Reiten, S. O. Smalø, <i>Tilting in abelian categories and quasitilted algebras</i>, Mem. Amer. Math. Soc. <b>120</b> (1996), no. 575.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> T. Adachi, O. Iyama, I. Reiten, <i>$\tau$-tilting theory</i>, Compos. Math. <b>150</b> (2014), 415–452.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> T. Aihara, O. Iyama, <i>Silting mutation in triangulated categories</i>, J. London Math. Soc. <b>85</b> (2012), 633–668.</p>
</div>
</div>
