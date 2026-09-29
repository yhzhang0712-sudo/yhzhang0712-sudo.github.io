---
title: "导出范畴"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-1">1　直观与动机</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-2">2　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-excat-2-1">2.1　从链复形到导出范畴</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-excat-2-2">2.2　三角结构与 t-结构</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-3">3　核心工具、定理与证明逻辑</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-excat-3-1">3.1　Happel 定理（有限维代数）</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-excat-3-2">3.2　$\mathrm{Ext}^{n}$ = 导出范畴里的 $\mathrm{Hom}$</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-excat-3-3">3.3　Serre 对偶与 AR 公式</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-excat-3-4">3.4　三角 ⟹ 长正合列</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-excat-3-5">3.5　导出函子为什么存在</a>
    <a class="ar-toc-l2" href="#ar-theory-panel-excat-3-6">3.6　Verdier 商与奇点范畴</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-4">4　主要应用与可手算的例子</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-5">5　与邻近概念的关系</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-6">6　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-excat-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-theory-panel-excat-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\mathrm{Ch}(\mathscr{A})$</td><td>$\mathscr{A}$ 中链复形范畴（对象 = 复形，态射 = 链映射）</td></tr>
<tr><td>$\mathbf{K}(\mathscr{A})$</td><td>同伦范畴（态射 = 链同伦类）</td></tr>
<tr><td>$\mathbf{D}(\mathscr{A})$</td><td>导出范畴 $=\mathbf{K}(\mathscr{A})[\text{拟同构}^{-1}]$（Verdier 局部化）</td></tr>
<tr><td>$\mathbf{D}^{b}$，$\mathbf{D}^{+}$，$\mathbf{D}^{-}$</td><td>有界 / 上有界 / 下有界导出范畴</td></tr>
<tr><td>$\mathbf{D}^{\mathrm{perf}}(\Lambda)$</td><td>完美复形（$=\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$，当 $\Lambda$ 有限维）</td></tr>
<tr><td>$[1]$</td><td>平移（shift）：$(X[1])^{n}=X^{n+1}$，微分变号</td></tr>
<tr><td>$H^{i}(X)$</td><td>$X$ 的第 $i$ 次上同调对象</td></tr>
<tr><td>$\mathbf{R}\mathrm{Hom}$</td><td>右导出 Hom（在 $\mathbf{D}(\mathscr{A})$ 中的内 Hom）</td></tr>
<tr><td>K-投射 / K-内射</td><td>使 $\mathrm{Hom}(P,-)$ / $\mathrm{Hom}(-,I)$ 保持零调复形的复形（做替换用）</td></tr>
<tr><td>t-结构 $(\mathscr{D}^{\le0},\mathscr{D}^{\ge0})$</td><td>Beilinson–Bernstein–Deligne 意义；$\mathscr{D}^{\heartsuit}$ 为其心（Abel 范畴）</td></tr>
</tbody>
</table>
<p>约定：①$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 默认指右模的有界导出范畴；②"拟同构"指诱导所有上同调对象为同构；③本面板用粗体 $\mathbf{D}$ 区分于"对偶函子 $D$"（$D=\mathrm{Hom}_{k}(-,k)$）。</p>

<h3 class="ar-subhead" id="ar-theory-panel-excat-1">1　直观与动机</h3>
<div class="ar-intu">
<p><b>一句话</b>：导出范畴 = 把"<strong>拟同构</strong>"（同调上无法区分的复形）强行变成同构之后得到的世界。</p>
<p><b>为什么需要它</b>：$\mathrm{Ext}^{n}$、$\mathrm{Tor}_{n}$、层上同调……都依赖"取分解再算"，而分解的选择有无穷多种，彼此只差拟同构。在 $\mathbf{K}(\mathscr{A})$ 里它们仍是不同对象，于是"长正合列"只能手工拼接；一旦把拟同构都变成同构，这些"选择"自动消失。</p>
<p><b>三个直接收益</b>：① $\mathrm{Ext}^{n}(M,N)$ 变成一次 $\mathrm{Hom}$：$\mathrm{Hom}_{\mathbf{D}}(M,N[n])$；② 长正合列统一为<em>三角</em>；③ 导出函子成为真正的函子（并且可复合）。</p>
</div>

<h3 class="ar-subhead" id="ar-theory-panel-excat-2">2　概念与定义</h3>

<h4 id="ar-theory-panel-excat-2-1">2.1　构造：从链复形到导出范畴</h4>
<div class="ar-pf" style="margin:0.6rem 0 0.5rem;">
<div class="ar-pf-step"><b>$\mathrm{Ch}(\mathscr{A})$</b>：复形与链映射（太细——链映射的等式过于严格）。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><b>$\mathbf{K}(\mathscr{A})$</b>：把链同伦的映射视为相等（同伦不变，拓扑的遗产）。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><b>$\mathbf{D}(\mathscr{A})$</b>：再把所有拟同构倒过来（同调不变，这才是同调代数要的等价）。</div>
</div>
<p><strong>关键点</strong>：步骤 ③ 是<em>局部化</em>而非"取子范畴"。$\mathbf{D}(\mathscr{A})$ 的对象（非严格地说）与 $\mathrm{Ch}(\mathscr{A})$ 相同，但态射是"roof"（间隔一个拟同构的链映射对）——这正是导出范畴态射难以直接计算的原因。实践中的处理办法是取 K-内射 / K-投射替换（Spaltenstein），或用 dg / $\infty$-增强（见本页「DG 范畴」面板）。</p>
<figure class="ar-cd">
<svg viewBox="0 0 400 190" width="400" height="190" role="img" aria-label="屋顶 roof：X 经拟同构 s 拉回 Z，再经 t 送到 Y">
  <defs>
    <marker id="arh-exc-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>
  </defs>
  <g stroke="currentColor" stroke-width="1.4" fill="none" marker-end="url(#arh-exc-a)">
    <line x1="180" y1="62" x2="88" y2="132"/>
    <line x1="220" y1="62" x2="312" y2="132"/>
  </g>
  <rect x="150" y="24" width="100" height="34" rx="7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <g fill="currentColor" font-size="14" text-anchor="middle">
    <text x="200" y="47">Z</text>
    <text x="66" y="160">X</text>
    <text x="334" y="160">Y</text>
  </g>
  <g fill="currentColor" font-size="12" text-anchor="middle">
    <text x="116" y="88">s ∈ Qis</text>
    <text x="284" y="88">t</text>
  </g>
</svg>
<figcaption>屋顶（roof）：$X\xleftarrow{s}Z\xrightarrow{t}Y$（$s$ 为拟同构）表示复合 $t\,s^{-1}$；两个屋顶经"共同细化"等价。这是导出范畴里态射的真实形状。</figcaption>
</figure>

<h4 id="ar-theory-panel-excat-2-2">2.2　三角结构与 t-结构</h4>
<p>$\mathbf{D}(\mathscr{A})$ 的平移为 $[1]$，区分三角来自复形的<em>区分短正合列</em> $0\to X\to Y\to Z\to0$ 给出的三角 $X\to Y\to Z\to X[1]$（一般地，$Z$ 处是映射锥 $\mathrm{Cone}(f)$）。</p>
<figure class="ar-cd">
<svg viewBox="0 0 400 170" width="400" height="170" role="img" aria-label="三角 X 到 Y 到 Z 到 X[1]">
  <defs>
    <marker id="arh-exc-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>
  </defs>
  <g stroke="currentColor" stroke-width="1.5" fill="none" marker-end="url(#arh-exc-b)">
    <line x1="72" y1="52" x2="272" y2="52"/>
    <line x1="290" y1="62" x2="222" y2="128"/>
    <line x1="62" y1="128" x2="130" y2="62"/>
  </g>
  <g fill="currentColor" font-size="14" text-anchor="middle">
    <text x="40" y="48">X</text>
    <text x="310" y="48">Y</text>
    <text x="200" y="150">Z</text>
  </g>
  <g fill="currentColor" font-size="12" text-anchor="middle">
    <text x="172" y="40">f</text>
    <text x="272" y="106">g</text>
    <text x="76" y="106">h</text>
  </g>
</svg>
<figcaption>三角 $X\xrightarrow{f}Y\xrightarrow{g}Z\xrightarrow{h}X[1]$：一个三角 = 一整条长正合列（见 3.4）。</figcaption>
</figure>
<p><strong>标准 t-结构</strong>：$(\mathbf{D}^{\le0},\mathbf{D}^{\ge0})$，其心为 $\mathscr{A}$，上同调由截断给出：$H^{i}(X)=\tau^{\le i}\tau^{\ge i}X$（落在心里看）。<strong>t-结构不唯一</strong>——这是"导出范畴比其 Abel 心更丰富"的形式化表述（tilting 就是换心脏，见「Tilting 理论」）。</p>

<h3 class="ar-subhead" id="ar-theory-panel-excat-3">3　核心工具、定理与证明逻辑</h3>

<h4 id="ar-theory-panel-excat-3-1">3.1　有限维代数的导出范畴（Happel）</h4>
<p><strong>定理（Happel）</strong>：<strong>设</strong> $\Lambda$ 有限维代数。<strong>则</strong>：</p>
<ol>
  <li>$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 的态射空间有限维、满足 Krull–Schmidt；</li>
  <li>典范函子 $\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)\to\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 为满嵌入，其像为紧对象（即 $\mathbf{D}^{\mathrm{perf}}$）；</li>
  <li>若 $\mathrm{gl.dim}\,\Lambda&lt;\infty$，则 $\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 自带几乎分裂（AR）三角，其 AR 箭图是导出等价的不变量。</li>
</ol>
<p><strong>特例</strong>：$\mathrm{gl.dim}\,\Lambda&lt;\infty\iff \mathbf{D}^{b}(\mathrm{mod}\,\Lambda)=\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$（每个有限生成模都有有限投射分解）。</p>

<h4 id="ar-theory-panel-excat-3-2">3.2　$\mathrm{Ext}^{n}$ = 导出范畴里的一次 $\mathrm{Hom}$</h4>
<p><strong>命题</strong>：对 $M,N\in\mathscr{A}$（集中于零次），有自然同构</p>
$$\mathrm{Ext}^{n}_{\mathscr{A}}(M,N)\ \cong\ \mathrm{Hom}_{\mathbf{D}(\mathscr{A})}(M,N[n])\qquad(n\ge0).$$
<div class="ar-proof">
<div class="ar-proof-hd"><span class="ar-proof-tag">证明思路</span>把"取分解再算同调"翻译成"在 $\mathbf{D}$ 里取 $\mathrm{Hom}$"</div>
<div class="ar-pf">
<div class="ar-pf-step"><span class="ar-pf-n">1</span><b>取 K-投射分解</b>：取投射分解 $P^{\bullet}\to M$；有上界的投射复形总是 K-投射的。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">2</span><b>换成 $\mathbf{D}$ 里的同构</b>：在 $\mathbf{D}(\mathscr{A})$ 中 $P^{\bullet}\cong M$（拟同构已可逆）。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">3</span><b>去掉 roof</b>：K-投射性正是说 $\mathrm{Hom}_{\mathbf{K}}(P^{\bullet},-)=\mathrm{Hom}_{\mathbf{D}}(P^{\bullet},-)$ ⟹ $\mathrm{Hom}_{\mathbf{D}}(M,N[n])\cong\mathrm{Hom}_{\mathbf{K}}(P^{\bullet},N[n])$。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">4</span><b>认出同调</b>：$\mathrm{Hom}_{\mathbf{K}}(P^{\bullet},N[n])=H^{n}\bigl(\mathrm{Hom}^{\bullet}(P^{\bullet},N)\bigr)$，按定义这就是 $\mathrm{Ext}^{n}_{\mathscr{A}}(M,N)$。</div>
</div>
<p class="ar-pf-key"><b>一句话关键</b>：第 3 步是全部要点——<b>K-投射（或 K-内射）替换的作用就是"让 $\mathbf{K}$ 里的 $\mathrm{Hom}$ 等于 $\mathbf{D}$ 里的 $\mathrm{Hom}$"</b>。这也是导出函子定义的核心机制（见 3.5）。</p>
</div>

<h4 id="ar-theory-panel-excat-3-3">3.3　Serre 对偶与 AR 公式（导出层面）</h4>
<p>$\mathrm{Hom}$ 与 $\otimes$ 都需要<em>导出</em>：$\mathbf{R}\mathrm{Hom}_{\Lambda}(M,N)$ 用 $N$ 的 K-内射解（或 $M$ 的 K-投射解）计算，其 $H^{0}$ 为 $\mathrm{Hom}$、$H^{i}$ 为 $\mathrm{Ext}^{i}$。特别地 $\mathrm{Hom}_{\mathbf{D}}(M,N[i])=\mathrm{Ext}^{i}_{\Lambda}(M,N)$。</p>
<p>当 $\mathrm{gl.dim}\,\Lambda&lt;\infty$ 时 $\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 有 <strong>Serre 函子</strong> $S=-\otimes^{L}_{\Lambda}D\Lambda$，即自然同构</p>
$$\mathrm{Hom}_{\mathbf{D}}(X,Y)\ \cong\ D\,\mathrm{Hom}_{\mathbf{D}}(Y,SX),\qquad S=-\otimes^{L}_{\Lambda}D\Lambda,\qquad \tau\cong S[-1].$$
<p>把 $X=M$、$Y=N[i]$ 代入即得 $D\,\mathrm{Ext}^{i}_{\Lambda}(M,N)\cong\mathrm{Hom}_{\mathbf{D}}(N,S\,M[-i])$；取 $i=1$ 并用 $\tau\cong S[-1]$（遗传情形 $S\cong\tau[1]$）就回到经典的 AR 公式 $\mathrm{Ext}^{1}(M,N)\cong D\,\overline{\mathrm{Hom}}(N,\tau M)$（见「Auslander–Reiten 理论」3.2）。</p>
<p class="ar-mnote"><b>易错</b>：不要写成 $D\,\mathrm{Hom}_{\mathbf{D}}(M,N[i])\cong\mathrm{Hom}_{\mathbf{D}}(N,M[i])$——这相当于说"$\mathbf{D}$ 自己就是自己的 Serre 函子"，一般不对（例：$Q:1\to2$，$M=S_{1},N=S_{2},i=1$ 时左边 $=k$、右边 $=0$）。正确的对偶必须带 Serre 函子 $S$。</p>

<h4 id="ar-theory-panel-excat-3-4">3.4　三角 ⟹ 长正合列</h4>
<div class="ar-proof">
<div class="ar-proof-hd"><span class="ar-proof-tag">证明思路</span>同调函子 + 旋转</div>
<div class="ar-pf">
<div class="ar-pf-step"><span class="ar-pf-n">1</span><b>公理</b>：三角范畴的定义要求 $\mathrm{Hom}(W,-)$ 与 $\mathrm{Hom}(-,W)$ 是<em>同调函子</em>：三角 $X\to Y\to Z\to X[1]$ 给出长正合列 $\cdots\to\mathrm{Hom}(W,X[i])\to\mathrm{Hom}(W,Y[i])\to\mathrm{Hom}(W,Z[i])\to\mathrm{Hom}(W,X[i+1])\to\cdots$。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">2</span><b>旋转</b>：三角可旋转（$Y\to Z\to X[1]\to Y[1]$ 仍是三角）⟹ 正合列向两端无限延续。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">3</span><b>回到经典</b>：短正合列 $0\to X\to Y\to Z\to0$ 给出三角 ⟹ 经典的 $\mathrm{Ext}$ 长正合列是它的特例（取 $W=M$，再用 3.2 翻译回去）。</div>
</div>
<p class="ar-pf-key"><b>一句话关键</b>：<b>一个三角 = 一整条长正合列</b>；同调代数里手工构造的"连接同态"在这里被吸收进三角的结构（$Z\to X[1]$ 就是连接同态）。</p>
</div>

<h4 id="ar-theory-panel-excat-3-5">3.5　导出函子为什么存在（$\mathbf{R}F$、$\mathbf{L}F$）</h4>
<p>问题：加性函子 $F$ 一般不保持拟同构（如 $\mathrm{Hom}(-,N)$ 只在内射对象上"乖"），所以 $F$ 不能直接下降到 $\mathbf{D}$。</p>
<div class="ar-proof">
<div class="ar-proof-hd"><span class="ar-proof-tag">证明思路</span>替换（resolution）三步骤</div>
<div class="ar-pf">
<div class="ar-pf-step"><span class="ar-pf-n">1</span><b>找适配类</b>：K-内射（对 $\mathbf{R}F$）或 K-投射（对 $\mathbf{L}F$）复形；定理（Spaltenstein）：这样的替换充分多，每个复形都有拟同构 $X\to I$（$I$ K-内射）。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">2</span><b>定义</b>：$\mathbf{R}F(X):=F(I)$；K-内射复形之间的拟同构是同伦等价 ⟹ $F$ 在其上保持拟同构 ⟹ 定义与替换的选择无关。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">3</span><b>良定与复合</b>：替换在 $\mathbf{D}$ 中唯一 ⟹ $\mathbf{R}F$ 是真正的函子；且 $\mathbf{R}(F\circ G)\cong\mathbf{R}F\circ\mathbf{R}G$（在适配条件下，误差由 Grothendieck 谱序列控制）。</div>
</div>
<p class="ar-pf-key"><b>一句话关键</b>：导出函子 = "<strong>先替换成 K-投射 / K-内射，再作用 $F$</strong>"；适配类的存在性与唯一性是全部技术内容。模型范畴（见「Model Category」）把这套"替换"机制公理化为余纤维 / 纤维替换。</p>
</div>

<h4 id="ar-theory-panel-excat-3-6">3.6　Verdier 商与奇点范畴</h4>
<p><strong>定义（Orlov）</strong>：奇点范畴为</p>
$$\mathbf{D}_{\mathrm{sg}}(\Lambda):=\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)\ /\ \mathbf{K}^{b}(\mathrm{proj}\,\Lambda).$$
<p><strong>定理</strong>：$\mathbf{D}_{\mathrm{sg}}(\Lambda)=0\iff\Lambda$ 正则（有限全局维数）。更一般地，$\mathbf{D}_{\mathrm{sg}}$ 度量"非正则性"，是导出不变量（对诺特概形亦然，见本页「Approximable」面板）。奇点范畴由 Buchweitz 与 Orlov 独立发现，与 Gorenstein 情形的稳定范畴 $\underline{\mathrm{CM}}(\Lambda)$ 相通。</p>

<h3 class="ar-subhead" id="ar-theory-panel-excat-4">4　主要应用与可手算的例子</h3>
<div class="ar-ex">
<div class="ar-ex-hd">例 1：$A_{2}$ 的导出范畴</div>
<p>$Q:1\to2$、$\Lambda=kQ$ 遗传。$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 的不可分解对象 = 三个不可分解模 $S_{2},P_{1},S_{1}$ 的各个平移 $X[i]$（$i\in\mathbb{Z}$）；AR 箭图 $\mathbb{Z}Q$ 就是把箭图 $S_{2}\to P_{1}\to S_{1}$ 用 $\tau$ 不断接下去得到的"无限条带"。</p>
</div>
<div class="ar-ex">
<div class="ar-ex-hd">例 2：用导出范畴读 $\mathrm{Ext}^{1}$</div>
<p>由 AR 序列 $0\to S_{2}\to P_{1}\to S_{1}\to0$ 得三角 $S_{2}\to P_{1}\to S_{1}\to S_{2}[1]$，其中连接态射 $S_{1}\to S_{2}[1]$ 非零 ⟹ $\mathrm{Hom}_{\mathbf{D}}(S_{1},S_{2}[1])=\mathrm{Ext}^{1}(S_{1},S_{2})\cong k$；而 $\mathrm{Hom}_{\mathbf{D}}(S_{1},S_{1}[1])=\mathrm{Ext}^{1}(S_{1},S_{1})=0$。与 AR 公式的预测完全一致。</p>
</div>
<ul class="agent-list">
<li><span class="agent-name">导出等价</span>：tilting 复形 / Rickard 定理（见「Tilting 理论」3.3）；Broué 交换亏群猜想的框架。</li>
<li><span class="agent-name">AR 理论的推广</span>：$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 的 AR 箭图 $\mathbb{Z}\Delta/G$ 型不变量（Happel）。</li>
<li><span class="agent-name">半正交分解</span>：例外集合、代数簇上的 $\mathbf{D}^{b}(\mathrm{coh})$。</li>
<li><span class="agent-name">与本站猜想的接口</span>：有限维数猜想（$\mathrm{findim}$ 在导出等价下的行为）、Gorenstein 对称猜想（奇点范畴与稳定范畴的对称性）、无环猜想（$\mathbf{D}^{b}$ 中有无"双向无限"对象）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-excat-5">5　与邻近概念的关系</h3>
<ul class="agent-list">
<li><span class="agent-name">与 DG 范畴</span>：$\mathbf{D}(\mathscr{A})$ 一般有多个 dg 增强；增强唯一性是定理（Lunts–Orlov），见「DG 范畴」「DG enhancement」面板。</li>
<li><span class="agent-name">与 $\infty$-范畴</span>：$k$-线性稳定 $\infty$-范畴的同伦范畴即线性三角范畴（Cohn），导出范畴是其可读的投影。</li>
<li><span class="agent-name">与模型范畴</span>：$\mathrm{Ch}(\mathscr{A})$ 上的投射 / 内射模型结构（Quillen、Hovey）以"弱等价 = 拟同构"给出 $\mathbf{D}$，替换即余纤维 / 纤维替换。</li>
<li><span class="agent-name">与可逼近性</span>：$\mathbf{D}(R)$ 可逼近（$G=R$、标准 t-结构），其内在子范畴（$\mathbf{D}^{-},\mathbf{D}^{b},\mathbf{K}^{b}(\mathrm{proj})$ 等）由 preferred t-结构确定——见「Approximable」面板的标准词典。</li>
<li><span class="agent-name">与张量三角几何</span>：$\mathbf{D}^{\mathrm{perf}}(R)$、$\mathbf{D}^{\mathrm{perf}}(X)$ 是 tt-几何的主要输入（见「张量三角几何」面板）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-excat-6">6　常见混淆与易错点</h3>
<ul class="agent-list">
<li><span class="agent-name">$\mathbf{K}(\mathscr{A})$ ≠ $\mathbf{D}(\mathscr{A})$</span>：前者态射是链同伦类，后者还要把拟同构取逆；这是二者唯一的差别，也是全部麻烦的来源。</li>
<li><span class="agent-name">"$\mathbf{D}$ 里的对象"不是复形本身</span>：$\mathbf{D}$ 的对象形式上仍是复形，但相等关系被放宽；说"这个复形等于那个"时必须说明在哪个范畴。</li>
<li><span class="agent-name">$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ ≠ $\mathbf{K}^{b}(\mathrm{proj}\,\Lambda)$</span>：二者相等<em>当且仅当</em> $\mathrm{gl.dim}\,\Lambda&lt;\infty$；否则相差的正是奇点范畴。</li>
<li><span class="agent-name">不是所有复形都能直接替换</span>：无界复形的 K-内射 / K-投射替换（Spaltenstein）比有界情形微妙；无界导出函子的存在性需要额外论证。</li>
<li><span class="agent-name">$\mathrm{Ext}^{n}=\mathrm{Hom}_{\mathbf{D}}(-,-[n])$ 依赖"集中于零次"</span>：一般复形之间的 $\mathrm{Hom}_{\mathbf{D}}(X,Y[n])$ 是超 $\mathrm{Ext}$，不要直接套用模的定义。</li>
<li><span class="agent-name">对偶要带 Serre 函子</span>：见 3.3 的易错提示；漏掉 $S$（或漏掉平移次数）是最常见的错误。</li>
<li><span class="agent-name">t-结构不唯一</span>：说"导出范畴的心"必须指明是哪个 t-结构（tilting 会换心脏）。</li>
<li><span class="agent-name">Verdier 商不是取子范畴</span>：商函子由泛性质刻画，把它当"取子范畴"会导致错误。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-excat-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> J.-L. Verdier, <i>Des catégories dérivées des catégories abéliennes</i>, Astérisque <b>239</b> (1996).</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> D. Happel, <i>Triangulated Categories in the Representation Theory of Finite-Dimensional Algebras</i>, LMS Lecture Note Ser. <b>119</b>, Cambridge Univ. Press, 1988.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> A. A. Beilinson, J. Bernstein, P. Deligne, <i>Faisceaux pervers</i>, Astérisque <b>100</b> (1982)（t-结构的原始文献）.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> N. Spaltenstein, <i>Resolutions of unbounded complexes</i>, Compositio Math. <b>65</b> (1988), 121–154.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> D. Orlov, <i>Triangulated categories of singularities and D-branes of type B</i>, Proc. Steklov Inst. Math. <b>246</b> (2004), 227–248.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> S. I. Gelfand, Yu. I. Manin, <i>Methods of Homological Algebra</i>, 2nd ed., Springer, 2003.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> C. Weibel, <i>An Introduction to Homological Algebra</i>, Cambridge Stud. Adv. Math. <b>38</b>, 1994（第 10 章导出范畴）.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> B. Keller, <i>On differential graded categories</i>, ICM Vol. II, 151–190, 2006（增强视角）.</p>
</div>
</div>
