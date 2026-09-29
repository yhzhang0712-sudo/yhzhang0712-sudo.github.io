---
title: "Auslander–Reiten 理论"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-art-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-art-1">1　直观与动机</a>
    <a class="ar-toc-l1" href="#ar-art-2">2　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-art-2-1">2.1　不可约态射</a>
    <a class="ar-toc-l2" href="#ar-art-2-2">2.2　几乎分裂序列</a>
    <a class="ar-toc-l2" href="#ar-art-2-3">2.3　AR 平移 $\tau=D\mathrm{Tr}$</a>
    <a class="ar-toc-l2" href="#ar-art-2-4">2.4　AR 箭图与 mesh 关系</a>
    <a class="ar-toc-l1" href="#ar-art-3">3　核心定理与证明逻辑</a>
    <a class="ar-toc-l2" href="#ar-art-3-1">3.1　存在性与唯一性</a>
    <a class="ar-toc-l2" href="#ar-art-3-2">3.2　AR 公式</a>
    <a class="ar-toc-l2" href="#ar-art-3-3">3.3　AR 箭图的组合结构</a>
    <a class="ar-toc-l1" href="#ar-art-4">4　可手算的例子：$A_{2}$</a>
    <a class="ar-toc-l1" href="#ar-art-5">5　与邻近概念的关系</a>
    <a class="ar-toc-l1" href="#ar-art-6">6　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-art-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-art-0">0　记号与约定</h3>
<p>固定 Artin 代数 $\Lambda$（常取代数闭域 $k$ 上的有限维代数），$\mathrm{mod}\,\Lambda$ 记有限生成模范畴，$\mathrm{ind}\,\Lambda$ 记不可分解模的同构类集合。</p>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\mathrm{rad}(A,B)$</td><td>根（radical）：$A\to B$ 中"不可可逆"的部分；$A=B$ 不可分解时 $\mathrm{rad}(A,A)$ 即 $\mathrm{End}(A)$ 的 Jacobson 根</td></tr>
<tr><td>$\mathrm{irr}(A,B)$</td><td>不可约态射空间 $=\mathrm{rad}(A,B)/\mathrm{rad}^{2}(A,B)$</td></tr>
<tr><td>$\Omega M$</td><td>合冲（syzygy）：投射覆盖 $P\to M$ 的核</td></tr>
<tr><td>$(-)^{*}$</td><td>$\mathrm{Hom}_{\Lambda}(-,\Lambda)$（右模 $\to$ 左模）</td></tr>
<tr><td>$\mathrm{Tr}M$</td><td>转置：由极小投射表示 $P_{1}\to P_{0}\to M\to0$ 取 $\mathrm{coker}(P_{0}^{*}\to P_{1}^{*})$</td></tr>
<tr><td>$\tau=D\mathrm{Tr}$</td><td>AR 平移，$D=\mathrm{Hom}_{k}(-,k)$</td></tr>
<tr><td>$\nu=D(-)^{*}$</td><td>Nakayama 函子（把投射模送到内射模）</td></tr>
<tr><td>$\Gamma(\Lambda)$</td><td>$\mathrm{mod}\,\Lambda$ 的 Auslander–Reiten 箭图</td></tr>
<tr><td>$\overline{\mathrm{Hom}}(X,Y)$</td><td>$\mathrm{Hom}(X,Y)$ 模去"可经内射模分解"的态射</td></tr>
</tbody>
</table>
<p><b>定义域约定（极易出错）</b>：$\tau C$ 只在 $C$ <em>无投射直和因子</em>时给出非零模；$\tau^{-1}A$ 只在 $A$ <em>无内射直和因子</em>时有意义。因此"以 $C$ 为终点的几乎分裂序列"要求 $C$ 不可分解且非投射。</p>

<h3 class="ar-subhead" id="ar-art-1">1　直观与动机</h3>
<div class="ar-intu">
<p><b>一句话</b>：模范畴 $\mathrm{mod}\,\Lambda$ 通常有不可数多个对象，但它由"不可分解模 + 它们之间的不可约态射"这张<strong>图</strong>完全控制——AR 理论就是这张图的<strong>存在性定理</strong>。</p>
<p><b>为什么需要它</b>：把模一个个列出来没有意义（可以取直和），真正的信息在"模与模之间如何不可约地相连"。一旦画出 AR 箭图，代数的表示型（有限 / tame / wild）、倾斜对象的位置、丛突变的操作对象，全都读图即得。</p>
<p><b>三个关键词</b>：不可约态射（"原子态射"）、几乎分裂序列（"最小的非分裂扩张"）、$\tau$（"图上的平移"）。它们的关系是：几乎分裂序列把不可约态射组织成 mesh，$\tau$ 把 mesh 沿图平移。</p>
</div>

<h3 class="ar-subhead" id="ar-art-2">2　概念与定义</h3>

<h4 id="ar-art-2-1">2.1　不可约态射</h4>
<p>态射 $f:A\to B$ 称为<strong>不可约</strong>（irreducible）的，若等价地满足：</p>
<ul class="agent-list">
<li><span class="agent-name">分解刻画</span>：$f$ 既非可裂单也非可裂满，且 $f=gh$ 蕴含 $g$ 可裂单或 $h$ 可裂满；</li>
<li><span class="agent-name">根刻画</span>：$f\in\mathrm{rad}(A,B)\setminus\mathrm{rad}^{2}(A,B)$。</li>
</ul>
<p><b>意义</b>：任意非同构的态射都能分解为不可约态射之链（有限维情形 $\mathrm{rad}$ 幂零）。所以不可约态射就是 AR 箭图的箭头。</p>

<h4 id="ar-art-2-2">2.2　几乎分裂序列（AR 序列）</h4>
<p><strong>定义</strong>：短正合列 $0\to A\xrightarrow{f}B\xrightarrow{g}C\to0$ 称为<strong>几乎分裂</strong>（almost split）序列，若</p>
<ul class="agent-list">
<li><span class="agent-name">(i)</span> 它不可裂；</li>
<li><span class="agent-name">(ii) 右几乎分裂</span>：$g$ 非可裂满，且任意<em>非可裂满</em>的 $h:X\to C$ 都可经 $g$ 提升；</li>
<li><span class="agent-name">(iii) 左几乎分裂</span>：$f$ 非可裂单，且任意<em>非可裂单</em>的 $k:A\to Y$ 都可经 $f$ 分解。</li>
</ul>
<figure class="ar-cd">
<svg viewBox="0 0 440 200" width="440" height="200" role="img" aria-label="几乎分裂序列的右几乎分裂泛性质：任意非可裂满 h 可经 g 提升">
  <defs>
    <marker id="arh-art-r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>
  </defs>
  <g stroke="currentColor" stroke-width="1.4" fill="none" marker-end="url(#arh-art-r)">
    <line x1="36" y1="150" x2="56" y2="150"/>
    <line x1="92" y1="150" x2="188" y2="150"/>
    <line x1="232" y1="150" x2="338" y2="150"/>
    <line x1="382" y1="150" x2="418" y2="150"/>
    <line x1="360" y1="62" x2="360" y2="128"/>
  </g>
  <g stroke="currentColor" stroke-width="1.4" fill="none" stroke-dasharray="5 4" marker-end="url(#arh-art-r)">
    <line x1="344" y1="58" x2="236" y2="130"/>
  </g>
  <g fill="currentColor" font-size="15" text-anchor="middle">
    <text x="24" y="156">0</text>
    <text x="72" y="156">A</text>
    <text x="212" y="156">B</text>
    <text x="360" y="156">C</text>
    <text x="428" y="156">0</text>
    <text x="360" y="44">X</text>
  </g>
  <g fill="currentColor" font-size="12" text-anchor="middle">
    <text x="140" y="140">f</text>
    <text x="285" y="140">g</text>
    <text x="372" y="100">h</text>
    <text x="318" y="82">∃ h̃</text>
  </g>
</svg>
<figcaption>右几乎分裂的泛性质：$h:X\to C$ 只要不是可裂满，就必存在 $h̃:X\to B$ 使 $g\,h̃=h$。左几乎分裂是对偶的分解条件。</figcaption>
</figure>
<p><strong>注意</strong>：分解 / 提升条件对<em>所有</em>模 $X$ 成立，不只限于不可分解模；"不可裂"远不足以刻画几乎分裂——真正的力量来自上面这个<em>泛性质</em>。</p>

<h4 id="ar-art-2-3">2.3　AR 平移 $\tau=D\mathrm{Tr}$</h4>
<p>取 $M$ 的极小投射表示 $P_{1}\xrightarrow{u}P_{0}\to M\to0$，定义</p>
$$\mathrm{Tr}\,M:=\mathrm{coker}(P_{0}^{*}\xrightarrow{u^{*}}P_{1}^{*}),\qquad \tau M:=D\,\mathrm{Tr}\,M .$$
<p>$\mathrm{Tr}M$ 只良定到"增删投射直和因子"，故 $\tau M$ 也只良定到投射直和因子——这正是 $\tau M$ 只对无投射直和因子的 $M$ 有实质内容的原因。对偶地 $\tau^{-1}=\mathrm{Tr}\,D$，对无内射直和因子的模有定义。</p>

<h4 id="ar-art-2-4">2.4　AR 箭图 $\Gamma(\Lambda)$ 与 mesh 关系</h4>
<p>$\Gamma(\Lambda)$ 的顶点是 $\mathrm{ind}\,\Lambda$，箭头是不可约态射的一组基；在非投射点 $C$ 处，AR 序列 $0\to\tau C\to\bigoplus_{i}E_{i}\to C\to0$ 给出一条 <strong>mesh</strong>：经过各个 $E_{i}$ 的"两步路"之合成按 AR 序列配平为零。mesh 就是"AR 序列唯一性"在图上的样子。</p>

<h3 class="ar-subhead" id="ar-art-3">3　核心定理与证明逻辑</h3>

<h4 id="ar-art-3-1">3.1　存在性与唯一性（Auslander–Reiten 1975）</h4>
<p><strong>定理</strong>：设 $C\in\mathrm{ind}\,\Lambda$ 非投射，则存在以 $C$ 为终点的几乎分裂序列 $0\to\tau C\to E\to C\to0$，且在同构意义下唯一。对偶地，对不可分解非内射的 $A$，存在以 $A$ 为起点的几乎分裂序列 $0\to A\to E'\to\tau^{-1}A\to0$。</p>
<div class="ar-proof">
<div class="ar-proof-hd"><span class="ar-proof-tag">证明思路</span>Auslander–Reiten 的存在性：从"函子"到"序列"</div>
<div class="ar-pf">
<div class="ar-pf-step"><span class="ar-pf-n">1</span><b>目标翻译</b>：把"以 $C$ 为终点的几乎分裂序列"翻译成函子范畴里的一个泛性质（连接同态 $\delta_{X}$ 的核恰为 $\mathrm{rad}(X,C)$）。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">2</span><b>有限表示</b>：极小投射表示给出函子正合列 $\mathrm{Hom}(P,-)\to\mathrm{Hom}(\Omega C,-)\to\mathrm{Ext}^{1}(C,-)\to0$。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">3</span><b>取泛元</b>：由 Yoneda，上述满射对应一个"泛扩张" $0\to\Omega C\to F\to C\to0$。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">4</span><b>极小化</b>（关键难点）：沿 $\Omega C$ 的不可分解直和因子收缩，使连接同态的核恰为根 $\mathrm{rad}$——Auslander 的"由对象决定的态射"定理。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">5</span><b>识别左端</b>：收缩所得左端正是 $\tau C=D\mathrm{Tr}\,C$。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">6</span><b>唯一性</b>：两条都以 $C$ 为终点 ⟹ 由泛性质互分解；$C$ 不可分解 ⟹ $\mathrm{End}(C)$ 局部 ⟹ 互逆复合为同构。</div>
</div>
<p class="ar-pf-key"><b>一句话关键</b>：几乎分裂序列 = "$\mathrm{Ext}^{1}(C,-)$ 这个函子的极小生成元"；存在性说的是<em>有限表示函子必有极小生成元</em>，唯一性说的是<em>局部环上的互分解必为同构</em>。第 4 步（极小化）是整个证明唯一的技术难点。</p>
</div>

<h4 id="ar-art-3-2">3.2　AR 公式（把 $\mathrm{Ext}$ 翻译成 $\mathrm{Hom}$）</h4>
<p><strong>定理（AR 公式，精确形式）</strong>：设 $\Lambda$ 为 Artin 代数，$M$ 无投射直和因子、$N$ 任意，则</p>
$$\mathrm{Ext}^{1}_{\Lambda}(M,N)\ \cong\ D\,\overline{\mathrm{Hom}}_{\Lambda}(N,\tau M)\qquad\Bigl(\text{等价地 } D\,\mathrm{Ext}^{1}_{\Lambda}(M,N)\cong\underline{\mathrm{Hom}}_{\Lambda}(\tau^{-1}N,M)\Bigr),$$
<p>其中 $\overline{\mathrm{Hom}}$ 模去经<em>内射</em>模分解的态射、$\underline{\mathrm{Hom}}$ 模去经<em>投射</em>模分解的态射。<b>最常用的特例</b>：若 $\mathrm{pd}_{\Lambda}M\le 1$（例如 $\Lambda$ 遗传），则</p>
$$\mathrm{Ext}^{1}_{\Lambda}(M,N)\ \cong\ D\,\mathrm{Hom}_{\Lambda}(N,\tau M)\quad(\forall N).$$
<div class="ar-proof">
<div class="ar-proof-hd"><span class="ar-proof-tag">证明思路</span>两条正合列的"中段比对"</div>
<div class="ar-pf">
<div class="ar-pf-step"><span class="ar-pf-n">1</span><b>取表示</b>：极小投射表示 $P_{1}\xrightarrow{u}P_{0}\to M\to0$，记 $\Omega M=\mathrm{im}\,u$。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">2</span><b>上链 (A)</b>：以 $\mathrm{Hom}(-,N)$ 作用，得 $0\to\mathrm{Hom}(M,N)\to\mathrm{Hom}(P_{0},N)\to\mathrm{Hom}(\Omega M,N)\to\mathrm{Ext}^{1}(M,N)\to0$。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">3</span><b>下链 (B)</b>：Nakayama 函子 $\nu=D(-)^{*}$ 右正合，得 $0\to\tau M\to\nu P_{1}\to\nu P_{0}\to\nu M\to0$，再以 $\mathrm{Hom}(N,-)$ 作用。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">4</span><b>对偶识别</b>：$P$ 投射时 $\mathrm{Hom}(N,\nu P)\cong D\,\mathrm{Hom}(P,N)$（$\mathrm{Hom}$–$\otimes$ 伴随 + $P^{*}\otimes N\cong\mathrm{Hom}(P,N)$）。</div>
<div class="ar-pf-ar">→</div>
<div class="ar-pf-step"><span class="ar-pf-n">5</span><b>比对核</b>：两条链的中段映射互为对偶 ⟹ $\mathrm{Hom}(N,\tau M)$ 与 $D\,\mathrm{Ext}^{1}(M,N)$ 相差一项 $\mathrm{Hom}(P_{1},N)/\mathrm{Hom}(\Omega M,N)$；$\mathrm{pd}\,M\le1$ 时 $P_{1}\cong\Omega M$，两核相同 ⟹ 公式成立；一般情形这一项正是 $\overline{\mathrm{Hom}}$ 要模掉的部分。</div>
</div>
<figure class="ar-cd">
<svg viewBox="0 0 560 215" width="560" height="215" role="img" aria-label="两条正合列的中段比对：Hom 链与 Nakayama 对偶链">
  <defs>
    <marker id="arh-art-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>
  </defs>
  <g stroke="currentColor" stroke-width="1.3" fill="none" marker-end="url(#arh-art-b)">
    <line x1="26" y1="52" x2="52" y2="52"/>
    <line x1="112" y1="52" x2="176" y2="52"/>
    <line x1="272" y1="52" x2="336" y2="52"/>
    <line x1="428" y1="52" x2="464" y2="52"/>
    <line x1="26" y1="152" x2="52" y2="152"/>
    <line x1="112" y1="152" x2="176" y2="152"/>
    <line x1="272" y1="152" x2="336" y2="152"/>
    <line x1="428" y1="152" x2="464" y2="152"/>
  </g>
  <g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4">
    <line x1="290" y1="68" x2="290" y2="136"/>
    <line x1="470" y1="68" x2="470" y2="136"/>
  </g>
  <g fill="currentColor" font-size="12.5" text-anchor="middle">
    <text x="16" y="56">0</text>
    <text x="82" y="56">Hom(M,N)</text>
    <text x="222" y="56">Hom(P₀,N)</text>
    <text x="382" y="56">Hom(ΩM,N)</text>
    <text x="500" y="56">Ext¹(M,N)</text>
    <text x="16" y="156">0</text>
    <text x="82" y="156">Hom(N,τM)</text>
    <text x="222" y="156">Hom(N,νP₁)</text>
    <text x="382" y="156">Hom(N,νP₀)</text>
    <text x="500" y="156">Hom(N,νM)</text>
  </g>
  <g fill="currentColor" font-size="11.5">
    <text x="196" y="42" text-anchor="middle">res</text>
    <text x="196" y="146" text-anchor="middle">ψ</text>
    <text x="300" y="104" text-anchor="start">对偶识别 Hom(N,νP) ≅ D Hom(P,N)</text>
    <text x="30" y="192" text-anchor="start">上链：Ext¹ = coker(res)　　下链：Hom(N,τM) = ker(ψ)　　两核相差 Hom(P₁,N)/Hom(ΩM,N)</text>
  </g>
</svg>
<figcaption>AR 公式的证明骨架：同一对"中间项"的两种读法（Hom 侧与 Nakayama 侧）互相对偶，比对的正是它们的核。</figcaption>
</figure>
<p class="ar-pf-key"><b>一句话关键</b>：$\mathrm{Ext}^{1}$ 是"扩张"，$\mathrm{Hom}(-,\tau-)$ 是"正交"；AR 公式说<b>二者互为对偶</b>。这正是 $\tau$-tilting、丛倾斜、$d$-丛倾斜都以 $\mathrm{Hom}(M,\tau M)=0$ 为起点的原因——它等价于 $\mathrm{Ext}^{1}(M,M)=0$（$\mathrm{pd}\,M\le1$ 时直接等价，一般情形需留意内射因子）。</p>
</div>

<h4 id="ar-art-3-3">3.3　AR 箭图的组合结构</h4>
<ul class="agent-list">
<li><span class="agent-name">mesh 关系</span>：AR 序列的唯一性在图上表现为 mesh（每个非投射点的入 / 出箭头按 AR 序列配平）。</li>
<li><span class="agent-name">有限型判据</span>：$\Lambda$ 有限表示型 $\iff$ $\Gamma(\Lambda)$ 只有有限多个顶点（每个非投射点由 AR 序列连出，投射点只有有限多个）。</li>
<li><span class="agent-name">遗传代数</span>：$\Gamma(\mathbf{D}^{b}(kQ))\cong\mathbb{Z}Q$（Happel），把 $\mathrm{mod}\,kQ$ 的箭图沿平移方向无限重复。</li>
<li><span class="agent-name">自入射代数</span>：稳定 AR 箭图形如 $\mathbb{Z}\Delta/G$（Riedtmann 组合配置），由此产生"标准 / 非标准"之分。</li>
</ul>

<h3 class="ar-subhead" id="ar-art-4">4　可手算的例子：$A_{2}$ 箭图</h3>
<p>取 $Q:1\to2$，$\Lambda=kQ$。三个不可分解模（用维数向量记）：</p>
<table>
<thead><tr><th>模</th><th>维数向量</th><th>身份</th><th>$\tau$</th></tr></thead>
<tbody>
<tr><td>$S_{2}$</td><td>$(0,1)$</td><td>$P_{2}$，投射、非内射</td><td>—</td></tr>
<tr><td>$P_{1}=(k\xrightarrow{\mathrm{id}}k)$</td><td>$(1,1)$</td><td>投射兼内射 $I_{2}$</td><td>—</td></tr>
<tr><td>$S_{1}$</td><td>$(1,0)$</td><td>$I_{1}$，内射、非投射</td><td>$\tau S_{1}=S_{2}$</td></tr>
</tbody>
</table>
<p>唯一的 AR 序列是 $0\to S_{2}\to P_{1}\to S_{1}\to0$（即 $0\to\tau S_{1}\to P_{1}\to S_{1}\to0$）。AR 箭图如下（虚线为 $\tau$）：</p>
<figure class="ar-cd">
<svg viewBox="0 0 400 150" width="400" height="150" role="img" aria-label="A2 箭图：S2 到 P1 到 S1，tau 把 S1 送回 S2">
  <defs>
    <marker id="arh-art-c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>
  </defs>
  <g stroke="currentColor" stroke-width="1.4" fill="none" marker-end="url(#arh-art-c)">
    <line x1="72" y1="60" x2="128" y2="60"/>
    <line x1="232" y1="60" x2="288" y2="60"/>
  </g>
  <path d="M300 82 Q 200 138 60 82" stroke="currentColor" stroke-width="1.3" fill="none" stroke-dasharray="5 4" marker-end="url(#arh-art-c)"/>
  <g fill="currentColor" font-size="14" text-anchor="middle">
    <text x="50" y="66">S₂</text>
    <text x="210" y="66">P₁</text>
    <text x="320" y="66">S₁</text>
  </g>
  <g fill="currentColor" font-size="11.5" text-anchor="middle">
    <text x="50" y="86">(0,1)</text>
    <text x="210" y="86">(1,1)</text>
    <text x="320" y="86">(1,0)</text>
    <text x="200" y="140">τ</text>
  </g>
</svg>
<figcaption>$Q:1\to2$ 的 AR 箭图：$S_{2}\to P_{1}\to S_{1}$，且 $\tau S_{1}=S_{2}$。三个顶点 = $A_{2}$ 的三个正根 $(0,1),(1,1),(1,0)$（正是 Gabriel 定理的对应）。</figcaption>
</figure>
<div class="ar-ex">
<div class="ar-ex-hd">动手验一遍 AR 公式</div>
<p>取 $M=S_{1}$、$N=S_{2}$（$\Lambda$ 遗传，$\mathrm{pd}\,M=1$，可用不带横杠的版本）。由极小投射分解 $0\to P_{2}\to P_{1}\to S_{1}\to0$ 算得 $\mathrm{Ext}^{1}(S_{1},S_{2})\cong k$，而 $D\,\mathrm{Hom}(S_{2},\tau S_{1})=D\,\mathrm{Hom}(S_{2},S_{2})\cong k$，两边一致。换成 $N=S_{1}$：$\mathrm{Hom}(S_{1},S_{2})=0$ 且 $\mathrm{Ext}^{1}(S_{1},S_{1})=0$，仍吻合。</p>
</div>

<h3 class="ar-subhead" id="ar-art-5">5　与邻近概念的关系</h3>
<ul class="agent-list">
<li><span class="agent-name">与导出范畴</span>：$\mathrm{gl.dim}\,\Lambda<\infty$ 时 $\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 自带 AR 三角（Happel），$\tau\cong S[-1]$（$S=-\otimes^{L}_{\Lambda}D\Lambda$ 为 Serre 函子）。</li>
<li><span class="agent-name">与 tilting</span>：AR 序列是构造倾斜模的标准工具（BGP 反射 = APR 倾斜）；倾斜代数的 AR 箭图可由"切片"（slice）读出。</li>
<li><span class="agent-name">与 $\tau$-tilting</span>：$\tau$-刚性条件 $\mathrm{Hom}(M,\tau M)=0$ 直接来自 AR 理论；AIR 理论 = 把 AR 理论的组合学推广到任意代数（见本页「$\tau$-tilting 理论」）。</li>
<li><span class="agent-name">与高维 AR</span>：$d$-几乎分裂序列是本面板的 $d$ 维推广，正交条件由 $\mathrm{Ext}^{1}$ 升级为 $\mathrm{Ext}^{1..d-1}$（见「高维AR理论」）。</li>
<li><span class="agent-name">与 Gabriel 定理</span>：Dynkin 型的 AR 箭图恰以正根为顶点（见「Gabriel 定理」）。</li>
</ul>

<h3 class="ar-subhead" id="ar-art-6">6　常见混淆与易错点</h3>
<ul class="agent-list">
<li><span class="agent-name">$\tau$ 的定义域</span>：对投射模 $P$，$\tau P$ 没有实质内容（约定为 $0$）；凡涉及 $\tau$ 的定理都要"无投射直和因子"的假设。</li>
<li><span class="agent-name">"不可裂" ≠ "几乎分裂"</span>：不可裂的短正合列非常多，几乎分裂还要求左 / 右几乎分裂的<em>泛性质</em>，唯一性是定理而非定义。</li>
<li><span class="agent-name">AR 公式的横杠不能随便丢</span>：一般情形必须写 $\overline{\mathrm{Hom}}$（模掉内射因子）；只有 $\mathrm{pd}\,M\le1$（如遗传代数）才可写 $\mathrm{Ext}^{1}(M,N)\cong D\,\mathrm{Hom}(N,\tau M)$。<b>反例</b>：$\Lambda=k[x]/(x^{2})$、$M=S$、$N=\Lambda$ 时 $\mathrm{Ext}^{1}(S,\Lambda)=0$（$\Lambda$ 内射），而 $\mathrm{Hom}(\Lambda,\tau S)=\mathrm{Hom}(\Lambda,S)\cong k\neq0$——差的正是"经内射模 $\Lambda$ 分解"的那部分。</li>
<li><span class="agent-name">提升条件是"非可裂满"而非"任意态射"</span>：可裂满的 $h:X\to C$ 不提升（否则序列就分裂了）。</li>
<li><span class="agent-name">两个"平移"</span>：AR 箭图的 $\tau$ 与三角范畴的 $[1]$ 是不同算子；在 $\mathbf{D}^{b}(kQ)$ 中二者由 Serre 函子相连（$\tau\cong S[-1]$），一般情形无此关系。</li>
<li><span class="agent-name">mesh 不是代数的关系</span>：mesh 是箭图上由 AR 序列决定的零合成关系，不要与路代数的生成关系混为一谈。</li>
</ul>

<h3 class="ar-subhead" id="ar-art-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> M. Auslander, I. Reiten, <i>Representation theory of Artin algebras III: almost split sequences</i>, Comm. Algebra <b>3</b> (1975), 239–294.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> M. Auslander, I. Reiten, S. O. Smalø, <i>Representation Theory of Artin Algebras</i>, Cambridge Stud. Adv. Math. <b>36</b>, Cambridge Univ. Press, 1995.（第 IV 章 AR 公式、第 V 章存在性）</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> D. Happel, <i>Triangulated Categories in the Representation Theory of Finite-Dimensional Algebras</i>, LMS Lecture Note Ser. <b>119</b>, Cambridge Univ. Press, 1988.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> I. Reiten, <i>The use of almost split sequences in the representation theory of Artin algebras</i>, Lecture Notes in Math. <b>1174</b>, Springer, 1986.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> H. Krause, <i>Morphisms determined by objects</i>（Auslander 定理的现代表述与证明路径）, 2014.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> G. Jasso, S. Kvamme, <i>An introduction to higher Auslander–Reiten theory</i>, Bull. Lond. Math. Soc. <b>51</b> (2019), 1–24.</p>
</div>
</div>
