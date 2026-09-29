---
title: "Gabriel 定理"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-gab-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-gab-1">1　直观与动机</a>
    <a class="ar-toc-l1" href="#ar-gab-2">2　定理的陈述</a>
    <a class="ar-toc-l1" href="#ar-gab-3">3　核心工具与证明逻辑</a>
    <a class="ar-toc-l2" href="#ar-gab-3-1">3.1　BGP 反射函子</a>
    <a class="ar-toc-l2" href="#ar-gab-3-2">3.2　定理的证明骨架</a>
    <a class="ar-toc-l2" href="#ar-gab-3-3">3.3　二次型判据</a>
    <a class="ar-toc-l2" href="#ar-gab-3-4">3.4　Kac 定理（一般箭图）</a>
    <a class="ar-toc-l2" href="#ar-gab-3-5">3.5　species 与非代数闭域</a>
    <a class="ar-toc-l1" href="#ar-gab-4">4　可手算的例子</a>
    <a class="ar-toc-l1" href="#ar-gab-5">5　与邻近概念的关系</a>
    <a class="ar-toc-l1" href="#ar-gab-6">6　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-gab-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-gab-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$Q=(Q_{0},Q_{1})$</td><td>有限箭图（顶点集 $Q_{0}$、箭头集 $Q_{1}$）</td></tr>
<tr><td>$kQ$</td><td>$Q$ 的路代数（本面板默认 $k$ 代数闭）</td></tr>
<tr><td>$\mathrm{rep}\,Q$</td><td>$Q$ 的有限维 $k$-表示范畴 $\simeq\mathrm{mod}\,kQ$</td></tr>
<tr><td>$\dim M$</td><td>维数向量 $(\dim M_{i})_{i\in Q_{0}}\in\mathbb{N}^{Q_{0}}$</td></tr>
<tr><td>$\langle-,-\rangle_{Q}$</td><td>Euler 型 $\sum_{i\in Q_{0}}x_{i}y_{i}-\sum_{\alpha\in Q_{1}}x_{s(\alpha)}y_{t(\alpha)}$</td></tr>
<tr><td>$q_{Q}$</td><td>Tits 型（二次型）$q_{Q}(x)=\langle x,x\rangle_{Q}=\sum x_{i}^{2}-\sum_{\alpha}x_{s(\alpha)}x_{t(\alpha)}$</td></tr>
<tr><td>$\Phi^{+}$</td><td>相应根系的正根集合；$\alpha_{i}$ 为单根，$\sigma_{i}$ 为单反射</td></tr>
<tr><td>$C_{Q}$</td><td>Coxeter 变换 $C_{Q}=\sigma_{i_{n}}\cdots\sigma_{i_{1}}$（沿适配定向的汇序列）</td></tr>
<tr><td>$k$-species</td><td>处理非代数闭域的"带赋值箭图"（valued quiver）</td></tr>
</tbody>
</table>
<p>约定：①"无环"指<em>没有定向圈</em>，不是指底图无圈；②Dynkin 型 / 仿射型均指<em>底图</em>的类型；③路代数 $kQ$ 遗传（$\mathrm{gl.dim}\le1$），这是 Euler 型能计算 $\mathrm{Hom}$ 与 $\mathrm{Ext}^{1}$ 的原因。</p>

<h3 class="ar-subhead" id="ar-gab-1">1　直观与动机</h3>
<div class="ar-intu">
<p><b>一句话</b>：Gabriel 定理说——<strong>"不可分解表示"与"根系里的正根"是同一件事</strong>，对应关系由维数向量给出。</p>
<p><b>为什么惊人</b>：左边是高度非线性的"模的分类"问题（要找所有不可分解模、所有态射），右边是纯组合的"有限根系"数据。定理把前者<em>双射</em>到后者，于是"这个代数有多少不可分解模"变成"数正根"——$A_{n}$ 有 $n(n+1)/2$ 个，$E_{8}$ 有 $120$ 个。</p>
<p><b>为什么是 Dynkin</b>：Dynkin 图 $A_{n},D_{n},E_{6,7,8}$ 恰好是使 Tits 型 $q_{Q}$ <em>正定</em>的那些图；正定 ⟹ 正根有限 ⟹ 不可分解模有限。这三个"恰好"是同一件事的三副面孔。</p>
</div>

<h3 class="ar-subhead" id="ar-gab-2">2　定理的陈述</h3>
<p><strong>定理（Gabriel, 1972）</strong>：设 $Q$ 为有限无环箭图、$k$ 代数闭。则</p>
$$kQ\ \text{有限表示型}\quad\Longleftrightarrow\quad Q\ \text{的底图是 Dynkin 图 } A_{n},\,D_{n},\,E_{6},\,E_{7},\,E_{8}\ \text{之一；}$$
<p>且此时维数向量给出双射</p>
$$\mathrm{ind}(kQ)\ \xrightarrow{\ \dim\ }\ \Phi^{+}.$$
<p>即：不可分解 $kQ$-模（至同构）与 $Q$ 的正根一一对应，对应由维数向量给出。</p>
<p class="ar-mnote">历史注记：Gabriel 的原始论文是在 <em>$k$-species</em>（带赋值图）框架下陈述与证明的；代数闭域上"箭图"的这一形式是其特例，一般域上的完整分类由 Dlab–Ringel 完成（见 3.5）。</p>

<h3 class="ar-subhead" id="ar-gab-3">3　核心工具与证明逻辑</h3>

<h4 id="ar-gab-3-1">3.1　BGP 反射函子（Bernstein–Gelfand–Ponomarev, 1973）</h4>
<p>设 $i$ 是 $Q$ 的一个<strong>汇</strong>（sink）。定义反射函子 $S_{i}^{+}:\mathrm{rep}\,Q\to\mathrm{rep}\,\sigma_{i}Q$（$\sigma_{i}Q$ 是把 $i$ 处所有箭头反向所得箭图）：在顶点 $i$ 处把"映到 $M_{i}$ 的所有箭头"取核后再重粘，其余顶点不变；对偶地对<strong>源</strong>定义 $S_{i}^{-}$。</p>
<ul class="agent-list">
<li><span class="agent-name">不可分解性</span>：若 $M$ 不可分解且 $M\not\cong S_{i}$，则 $S_{i}^{+}M$ 不可分解，且 $S_{i}^{-}S_{i}^{+}M\cong M$。</li>
<li><span class="agent-name">维数向量</span>：$\dim S_{i}^{+}M=\sigma_{i}(\dim M)$——反射函子在维数向量层面就是<strong>单反射</strong>。</li>
<li><span class="agent-name">范畴等价</span>：$S_{i}^{+}$ 在"不含 $S_{i}$ 直和因子"的全子范畴上是等价。</li>
</ul>
<figure class="ar-cd">
<svg viewBox="0 0 520 190" width="520" height="190" role="img" aria-label="BGP 反射函子把任意定向归约到标准定向，维数向量层面对应 Weyl 群的单反射">
  <defs>
    <marker id="arh-gab-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.3">
    <rect x="14" y="26" width="118" height="38" rx="7"/>
    <rect x="198" y="26" width="132" height="38" rx="7"/>
    <rect x="388" y="26" width="118" height="38" rx="7"/>
    <rect x="14" y="118" width="118" height="38" rx="7"/>
    <rect x="198" y="118" width="132" height="38" rx="7"/>
    <rect x="388" y="118" width="118" height="38" rx="7"/>
  </g>
  <g stroke="currentColor" stroke-width="1.3" fill="none" marker-end="url(#arh-gab-a)">
    <line x1="136" y1="45" x2="194" y2="45"/>
    <line x1="334" y1="45" x2="384" y2="45"/>
    <line x1="136" y1="137" x2="194" y2="137"/>
    <line x1="334" y1="137" x2="384" y2="137"/>
  </g>
  <g stroke="currentColor" stroke-width="1.1" fill="none" stroke-dasharray="4 4">
    <line x1="73" y1="68" x2="73" y2="114"/>
    <line x1="264" y1="68" x2="264" y2="114"/>
    <line x1="447" y1="68" x2="447" y2="114"/>
  </g>
  <g fill="currentColor" font-size="13" text-anchor="middle">
    <text x="73" y="51">rep Q</text>
    <text x="264" y="51">rep σ_i Q</text>
    <text x="447" y="51">rep Q_std</text>
    <text x="73" y="143">dim M</text>
    <text x="264" y="143">σ_i (dim M)</text>
    <text x="447" y="143">w (α_j)</text>
  </g>
  <g fill="currentColor" font-size="11.5" text-anchor="middle">
    <text x="165" y="35">S_i⁺</text>
    <text x="359" y="35">S_j⁺</text>
    <text x="165" y="160">σ_i</text>
    <text x="359" y="160">σ_j</text>
    <text x="60" y="96" text-anchor="start">dim</text>
    <text x="251" y="96" text-anchor="start">dim</text>
    <text x="434" y="96" text-anchor="start">dim</text>
  </g>
</svg>
<figcaption>反射函子的两层作用：范畴层（上一行）与维数向量 / Weyl 群层（下一行）严格同步。于是"换定向"不改变表示的困难程度——只需挑一个最方便的定向来证明。</figcaption>
</figure>

<h4 id="ar-gab-3-2">3.2　定理的证明骨架</h4>
<div class="ar-proof">
<div class="ar-proof-hd"><span class="ar-proof-tag">证明思路</span>Dynkin ⟹ 有限型 + 正根双射</div>
<div class="ar-pf">
<div class="ar-pf-step"><span class="ar-pf-n">1</span><b>归约定向</b>：BGP 反射函子把任意定向的表示范畴（去掉相应的单模后）等价于另一定向 ⟹ 只需对某个方便定向（如"线性定向"）证明。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">2</span><b>反射降维（归纳）</b>：取适配于定向的汇序列 $i_{1},\dots,i_{n}$（对应 Coxeter 元素 $c=\sigma_{i_{n}}\cdots\sigma_{i_{1}}$）。沿此序列反复施加 $S^{+}_{i}$，任一不可分解 $M$ 都能被化为某个单模 $S_{j}$（否则会造出无穷多个互不同构的不可分解模，与"有限型"矛盾）。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">3</span><b>翻译到根系</b>：第 2 步在维数向量层面是 $\dim M=w(\alpha_{j})$，其中 $w\in W$ 是所用反射之积 ⟹ $\dim M$ 是根；由维数向量非负知它是<em>正</em>根。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">4</span><b>计数（单射）</b>：由第 3 步 $\mathrm{ind}(kQ)\to\Phi^{+}$ 是良定义的单射（同维数向量的不可分解模至多一个，由反射回溯 + $\mathrm{End}$ 局部性得出）；Dynkin 型 $\Phi^{+}$ 有限 ⟹ 有限表示型。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">5</span><b>反向构造（满射）</b>：给正根 $\beta=w(\alpha_{j})$，把 Weyl 群的表达式 $w$ 用反射函子<em>倒着</em>施加到 $S_{j}$ 上，就得到 $\dim=\beta$ 的不可分解模 ⟹ 每个正根都有实现。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">6</span><b>反向蕴含</b>：若底图非 Dynkin，则 $q_{Q}$ 不正定 ⟹ 存在 $0\neq x\ge0$ 使 $q_{Q}(x)\le0$；由仿射型（管形族）与 wild 型（可嵌入任意有限维代数的模范畴）的构造，可得无穷多个不可分解模 ⟹ 非有限表示型。</div>
</div>
<p class="ar-pf-key"><b>一句话关键</b>：反射函子是"范畴层的 Weyl 群作用"，于是<strong>模的不可分解性 ⟷ 根系的既约性</strong>；Dynkin 型的 Weyl 群有限、正根有限，所以模也有限。第 2 步（沿 Coxeter 元素反复反射必终止于单模）是技术核心，细节见 BGP 原文。</p>
</div>

<h4 id="ar-gab-3-3">3.3　二次型判据（同一件事的代数侧面）</h4>
<p>因 $kQ$ 遗传（$\mathrm{gl.dim}\le1$），Euler 型能真正算出同调维数：</p>
$$\langle\dim M,\dim N\rangle_{Q}=\dim\mathrm{Hom}_{kQ}(M,N)-\dim\mathrm{Ext}^{1}_{kQ}(M,N).$$
<p>特别地，若 $M$ <strong>刚性</strong>（$\mathrm{Ext}^{1}(M,M)=0$），则 $q_{Q}(\dim M)=\dim\mathrm{End}(M)\ge1$。三种表示型与二次型的符号完全对应：</p>
<table>
<thead><tr><th>底图类型</th><th>Tits 型 $q_{Q}$</th><th>表示型</th><th>不可分解模</th></tr></thead>
<tbody>
<tr><td>Dynkin $A_{n},D_{n},E_{6,7,8}$</td><td>正定</td><td>有限型</td><td>有限个 = 正根个数</td></tr>
<tr><td>仿射 $\tilde A_{n},\tilde D_{n},\tilde E_{6,7,8}$</td><td>半正定（有零根 $\delta$）</td><td>tame</td><td>无穷多，但按管形（tube）一维族分类</td></tr>
<tr><td>其余（wild）</td><td>不定</td><td>wild</td><td>不可分类（可编码任意有限维代数的模）</td></tr>
</tbody>
</table>

<h4 id="ar-gab-3-4">3.4　Kac 定理（一般箭图的推广）</h4>
<p><strong>定理（Kac, 1980）</strong>：设 $Q$ 为任意有限箭图（允许有圈）。则不可分解 $kQ$-模的维数向量<em>恰为</em>相应 Kac–Moody 根系的正根；<strong>实根</strong>（$q_{Q}(\beta)=1$）有唯一实现（至同构），<strong>虚根</strong>（$q_{Q}(\beta)\le0$）一般有无穷多个实现。</p>
<p><b>意义</b>：Gabriel 定理 = Kac 定理在 Dynkin（有限型）情形的特例——Dynkin 型没有虚根，所以"每个正根一个模"格外干净；仿射型的虚根 $n\delta$ 正对应一族一参数的管形模。</p>

<h4 id="ar-gab-3-5">3.5　species 与非代数闭域</h4>
<p>非代数闭域上须用 <strong>$k$-species</strong>（带赋值箭图 valued quiver）代替箭图：赋值 $(m_{ij},n_{ij})$ 编码两端除法代数与双模的维数。Dlab–Ringel（1976）证明 species 版本的 Gabriel 定理（赋值图为 Dynkin ⟺ 有限表示型），从而给出任意域上有限表示型的完整分类。</p>

<h3 class="ar-subhead" id="ar-gab-4">4　可手算的例子</h3>
<div class="ar-ex">
<div class="ar-ex-hd">例 1：$A_{2}$（$Q:1\to2$）</div>
<p>正根：$ (1,0),(0,1),(1,1)$。不可分解模：$S_{1},S_{2},P_{1}=(k\xrightarrow{\mathrm{id}}k)$。三者一一对应，AR 箭图 $S_{2}\to P_{1}\to S_{1}$（见「Auslander–Reiten 理论」面板第 4 节）。</p>
</div>
<div class="ar-ex">
<div class="ar-ex-hd">例 2：$A_{3}$（$Q:1\to2\to3$）</div>
<p>正根共 $6$ 个，恰对应 $6$ 个不可分解模——它们就是"区间模" $M_{[i,j]}$（$1\le i\le j\le3$），在 $[i,j]$ 上放 $k$、其余放 $0$、区间内箭头取恒等：</p>
<table>
<thead><tr><th>区间 $[i,j]$</th><th>维数向量</th><th>模</th></tr></thead>
<tbody>
<tr><td>$[1,1]$</td><td>$(1,0,0)$</td><td>$S_{1}$（内射）</td></tr>
<tr><td>$[2,2]$</td><td>$(0,1,0)$</td><td>$S_{2}$（非投射非内射）</td></tr>
<tr><td>$[3,3]$</td><td>$(0,0,1)$</td><td>$S_{3}=P_{3}$（投射）</td></tr>
<tr><td>$[1,2]$</td><td>$(1,1,0)$</td><td>$I_{2}$</td></tr>
<tr><td>$[2,3]$</td><td>$(0,1,1)$</td><td>$P_{2}$</td></tr>
<tr><td>$[1,3]$</td><td>$(1,1,1)$</td><td>$P_{1}=I_{3}$（投射兼内射）</td></tr>
</tbody>
</table>
<p>$\tau$ 只定义在非投射的三个模上：$\tau[1,1]=[2,2]$、$\tau[2,2]=[3,3]$、$\tau[1,2]=[2,3]$——即 AR 平移把区间沿箭图"向右滑动"，这正是 Coxeter 变换在维数向量上的作用。</p>
</div>

<h3 class="ar-subhead" id="ar-gab-5">5　与邻近概念的关系</h3>
<ul class="agent-list">
<li><span class="agent-name">与 AR 理论</span>：Dynkin 型时 $\Gamma(\mathbf{D}^{b}(kQ))\cong\mathbb{Z}Q$，模范畴的 AR 箭图是其商；AR 平移 $\tau$ 在 $K_{0}$ 上就是 Coxeter 变换 $C_{Q}$。</li>
<li><span class="agent-name">与 tilting</span>：BGP 反射函子 = 最早的 tilting 实例（APR 倾斜模 $T=\tau^{-1}S_{i}\oplus\bigoplus_{j\ne i}P_{j}$），反射前后的代数倾斜等价（见「Tilting 理论」）。</li>
<li><span class="agent-name">与导出等价</span>：两个 Dynkin 型遗传代数导出等价 $\iff$ 底图同构（Happel）；一般地由 $\mathbb{Z}\Delta/G$ 型不变量控制。</li>
<li><span class="agent-name">与丛理论</span>：$Q$ Dynkin $\iff$ 丛代数有限型（Fomin–Zelevinsky）；丛范畴 $\mathscr{C}_{Q}$ 的不可分解刚性对象 ↔ 丛变量 ↔ 正根。</li>
<li><span class="agent-name">与预投射代数</span>：$Q$ Dynkin $\iff$ 预投射代数 $\Pi(Q)$ 有限维（Crawley-Boevey）。</li>
<li><span class="agent-name">与本站猜想</span>：遗传代数上 Cartan 行列式 $=1$、有限维数猜想等可直接由根系数据验证。</li>
</ul>

<h3 class="ar-subhead" id="ar-gab-6">6　常见混淆与易错点</h3>
<ul class="agent-list">
<li><span class="agent-name">代数闭域假设</span>：定理的这一形式要求 $k$ 代数闭；一般域须改用 species（Dlab–Ringel），否则"Dynkin ⟹ 有限表示型"可能失效。</li>
<li><span class="agent-name">"无环" ≠ "底图无圈"</span>：无环只排除定向圈；底图有圈但无定向圈（如 $\tilde A_{n}$ 的循环定向）仍是仿射型、无限表示型。</li>
<li><span class="agent-name">Dynkin vs. 仿射</span>：仿射型是 tame 表示型（不可分解模可分类，但无穷多），不是有限表示型。</li>
<li><span class="agent-name">正根 ≠ 不可分解模的同构类（一般情形）</span>：只有 Dynkin 型（全为实根）才是双射；有虚根时一个维数向量对应一族模（Kac）。</li>
<li><span class="agent-name">反射函子的作用范围</span>：$S_{i}^{+}$ 定义在"汇 $i$"上，且要求 $M\not\cong S_{i}$（否则把它映到 $0$）；把它当"对一切模都可用的等价"是常见错误。</li>
<li><span class="agent-name">$\tau$ 与 Coxeter</span>：$\tau M$ 与 $C_{Q}(\dim M)$ 的等式在<em>导出范畴</em>的 $K_{0}$ 上最自然（$\tau\cong S[-1]$）；在模范畴里仅对非投射模有定义，不要无条件套用。</li>
</ul>

<h3 class="ar-subhead" id="ar-gab-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> P. Gabriel, <i>Unzerlegbare Darstellungen I</i>, Manuscripta Math. <b>6</b> (1972), 71–103.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> I. N. Bernstein, I. M. Gelfand, V. A. Ponomarev, <i>Coxeter functors and Gabriel’s theorem</i>, Russian Math. Surveys <b>28</b> (1973), 17–32.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> V. Dlab, C. M. Ringel, <i>Indecomposable representations of graphs and algebras</i>, Mem. Amer. Math. Soc. <b>173</b> (1976).</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> V. Kac, <i>Infinite root systems, representations of graphs and stability theory</i>, Invent. Math. <b>56</b> (1980), 191–213.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> C. M. Ringel, <i>Tame Algebras and Integral Quadratic Forms</i>, Lecture Notes in Math. <b>1099</b>, Springer, 1984.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> M. Auslander, I. Reiten, S. O. Smalø, <i>Representation Theory of Artin Algebras</i>, Cambridge Stud. Adv. Math. <b>36</b>, 1995.（第 VII–VIII 章）</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> D. Happel, <i>Triangulated Categories in the Representation Theory of Finite-Dimensional Algebras</i>, LMS Lecture Note Ser. <b>119</b>, 1988.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> R. Schiffler, <i>Quiver Representations</i>, CMS Books in Mathematics, Springer, 2014.（反射函子与 Gabriel 定理的入门证明）</p>
</div>
</div>
