---
title: "artheory"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-theory-panel-artheory-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-artheory-1">1　概念与定义</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-artheory-2">2　核心工具与定理</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-artheory-3">3　主要应用与实例</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-artheory-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-artheory-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-theory-panel-artheory-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-theory-panel-artheory-0">0　记号与约定</h3>
<p>固定 Artin 代数 $\Lambda$（常取代数闭域 $k$ 上的有限维代数），$\mathrm{mod}\,\Lambda$ 记有限生成右模，$\mathrm{ind}\,\Lambda$ 记不可分解模的同构类集合。</p>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\tau=D\mathrm{Tr}$</td><td>Auslander–Reiten 平移：$D=\mathrm{Hom}_{k}(-,k)$，$\mathrm{Tr}$ 为转置</td></tr>
<tr><td>$\Omega$</td><td>合冲（syzygy）函子</td></tr>
<tr><td>$\mathrm{irr}(A,B)$</td><td>不可约态射空间 $=\mathrm{rad}(A,B)/\mathrm{rad}^{2}(A,B)$</td></tr>
<tr><td>$\Gamma(\Lambda)$</td><td>$\mathrm{mod}\,\Lambda$ 的 Auslander–Reiten 箭图</td></tr>
<tr><td>$\tau^{-1}$</td><td>逆平移，仅在内射模上有意义（$\tau P$ 对投射 $P$ 无定义）</td></tr>
<tr><td>$\mathbb{Z}\Delta$</td><td>Dynkin 图 $\Delta$ 的平移箭图（$\\mathbb{Z}\Delta$ 的顶点为 $(i,n)$）</td></tr>
</tbody>
</table>
<p>约定：①“几乎分裂序列”即 AR 序列；②$\tau$ 只对<em>非投射</em>模定义，$\tau^{-1}$ 只对<em>非内射</em>模定义；③AR 箭图的平移记 $\tau$，勿与三角范畴的平移 $[1]$ 混淆（见 4.2）。</p>

<h3 class="ar-subhead" id="ar-theory-panel-artheory-1">1　概念与定义</h3>

<h4>1.1　不可约态射</h4>
<p>态射 $f:A\to B$ 称为<strong>不可约</strong>的，若等价地满足下列两条之一：(i) $f$ 既非可裂单也非可裂满，且 $f=gh$ 蕴含 $g$ 或 $h$ 可裂；(ii) $f\in\mathrm{rad}(A,B)\setminus\mathrm{rad}^{2}(A,B)$。不可约态射是 AR 箭图箭头的来源，其意义在于“任意非可裂态射可分解为不可约态射之链”。</p>

<h4>1.2　几乎分裂序列</h4>
<p><strong>定义</strong>：短正合列 $0\to A\xrightarrow{f}B\xrightarrow{g}C\to0$ 称为<strong>几乎分裂</strong>（almost split / AR）序列，若满足三条：(i) 不可裂；(ii) $f$ 为左几乎分裂——任意非可裂单态射 $A\to X$ 经 $f$ 分解；(iii) $g$ 为右几乎分裂——任意非可裂满态射 $Y\to C$ 经 $g$ 分解。</p>
<p><strong>注意</strong>：分解条件对<em>所有</em>非可裂态射成立，不只限于不可分解模；仅说“非分裂”远不足以刻画几乎分裂。</p>

<h3 class="ar-subhead" id="ar-theory-panel-artheory-2">2　核心工具与定理</h3>

<h4>2.1　存在性与唯一性（Auslander–Reiten）</h4>
<p><strong>定理</strong>：<strong>设</strong> $C\in\mathrm{mod}\,\Lambda$ 不可分解且<em>非投射</em>。<strong>则</strong>存在以 $C$ 为右端的几乎分裂序列，且在同构意义下唯一；其左端为 $\tau C$。对偶地，对不可分解<em>非内射</em>的 $A$，存在以 $A$ 为左端的几乎分裂序列，其右端为 $\tau^{-1}A$。</p>

<h4>2.2　Auslander–Reiten 公式（核心计算工具）</h4>
<p><strong>定理</strong>：对 $M$ 非投射、$N$ 任意，有<strong>第一个 AR 公式</strong></p>
$$\mathrm{Ext}^{1}_{\Lambda}(M,N)\ \cong\ D\,\mathrm{Hom}_{\Lambda}(N,\tau M);$$
<p>对 $N$ 非内射，有<strong>第二个 AR 公式</strong></p>
$$\mathrm{Ext}^{1}_{\Lambda}(M,N)\ \cong\ D\,\mathrm{Hom}_{\Lambda}(\tau^{-1}N,M).$$
<p><strong>意义</strong>：把 $\mathrm{Ext}^{1}$ 的计算转化为 $\mathrm{Hom}$ 的计算，从而把“扩张消失”这一同调条件翻译为“正交”这一态射条件——这正是 $\tau$-tilting、丛倾斜、$d$-丛倾斜等理论的公共起点（本站“$\tau$-tilting 理论”“Cluster Theory”“高维AR理论”面板均以此为核心）。</p>

<h4>2.3　Auslander–Reiten 箭图与 mesh 关系</h4>
<p>$\Gamma(\Lambda)$ 的顶点为不可分解模，箭头为不可约态射的基；在有限表示型情形，$\Gamma(\Lambda)$ 满足 <strong>mesh 关系</strong>（每个非投射点的入箭头合成 $=0$，出箭头亦然），且 $\tau$ 为平移。mesh 关系是“AR 序列的唯一性”在箭图层面的体现。</p>
<p><strong>定理</strong>：$\Lambda$ 有限表示型 $\iff$ $\Gamma(\Lambda)$ 只有有限多个点（等价地：每个连通分支有限）。</p>

<h4>2.4　由对象决定的态射与缺陷公式</h4>
<p>Auslander 的<strong>缺陷公式</strong>把几乎分裂序列与函子范畴机制联系起来，并给出“<strong>由对象决定的态射</strong>”（morphisms determined by objects）的存在性——即：存在由 $M,N$ 的极小投射表现“自动”给出的态射 $\mathrm{Hom}(N,M)\to\mathrm{Hom}(N,\tau M)$ 型的典范映射。这是 AR 理论的技术核心（Krause 的证明路径；$d$ 维推广见本页“高维AR理论”2.2–2.3）。</p>

<h3 class="ar-subhead" id="ar-theory-panel-artheory-3">3　主要应用与实例</h3>
<ul class="agent-list">
<li><span class="agent-name">遗传代数</span>：$\Gamma(\mathbf{D}^{b}(kQ))\cong\mathbb{Z}Q$（Happel），AR 箭图由此完全可控；这是 Gabriel 定理之外理解表示有限型的第二条路。</li>
<li><span class="agent-name">自入射代数</span>：稳定 AR 箭图形如 $\mathbb{Z}\Delta/G$（Riedtmann），由此引出“标准 vs. 非标准”与组合配置——见本页“Standard Derived Equivalence”面板。</li>
<li><span class="agent-name">导出范畴</span>：$\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 自带几乎分裂结构（Happel），其 AR 箭图是导出等价不变量。</li>
<li><span class="agent-name">无限表示型</span>：管形（tube）与预投射分量 $\mathbb{Z}A_{\infty}$，用于 tame 代数的分类（见本页“Geometric model”面板 1.4）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-artheory-4">4　与邻近概念的关系</h3>
<ul class="agent-list">
<li><span class="agent-name">与三角范畴</span>：Happel 证明 $\mathbf{D}^{b}(\mathrm{mod}\,\Lambda)$ 自带 AR 结构；对遗传代数 $\mathbf{D}^{b}(kQ)$ 的 $\tau$ 与 Serre 函子满足 $\tau\cong S[-1]$，与丛范畴的 $S\cong[2]$ 直接衔接。</li>
<li><span class="agent-name">与 tilting</span>：AR 序列给出 tilting 模的标准构造途径；倾斜代数的 AR 箭图可由“切片”（slice）描述。</li>
<li><span class="agent-name">与 $\tau$-tilting</span>：$\mathrm{Hom}(M,\tau M)=0$ 的定义直接来自 AR 理论；AIR 理论可视为“把 AR 理论的组合学推广到任意代数”。</li>
<li><span class="agent-name">与高维 AR</span>：$d$-几乎分裂序列是本面板内容的 $d$ 维推广，关键差别是正交条件由 $\mathrm{Ext}^{1}$ 升级到 $\mathrm{Ext}^{1..d-1}$（见“高维AR理论”1.1–1.2）。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-artheory-5">5　常见混淆与易错点</h3>
<ul class="agent-list">
<li><span class="agent-name">$\tau$ 只在非投射模上有定义</span>：对投射 $P$，$\tau P$ 无意义（或约定为零）；因此凡涉及 $\tau$ 的定理都带“非投射”假设。</li>
<li><span class="agent-name">“非分裂” ≠ “几乎分裂”</span>：非分裂短正合列很多，几乎分裂是带左、右几乎分裂<em>泛性质</em>的特列，唯一性是定理而非定义。</li>
<li><span class="agent-name">分解条件对全体态射成立</span>：把“右几乎分裂”只对不可分解 $Y$ 陈述是不够的（需要补直和处理）。</li>
<li><span class="agent-name">两个 $\tau$</span>：AR 箭图的平移 $\tau$ 与三角范畴平移 $[1]$ 是不同算子；在 $\mathbf{D}^{b}(kQ)$ 中二者由 $S$ 相连（$\tau\cong S[-1]$），但一般情形无此关系。</li>
<li><span class="agent-name">mesh 关系不是“关系”</span>：mesh 是 AR 箭图上由几乎分裂序列确定的零合成关系，不要与代数的路代数关系混淆。</li>
<li><span class="agent-name">缺陷公式的表述</span>：不同文献的“缺陷公式”写法不同（长短项的长度差 vs. 函子的核/余核维数），引用时须核对。</li>
</ul>

<h3 class="ar-subhead" id="ar-theory-panel-artheory-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> M. Auslander, I. Reiten, <i>Representation theory of Artin algebras III: almost split sequences</i>, Comm. Algebra <b>3</b> (1975), 239–294.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> M. Auslander, I. Reiten, S. O. Smalø, <i>Representation Theory of Artin Algebras</i>, Cambridge Stud. Adv. Math. <b>36</b>, Cambridge Univ. Press, 1995.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> D. Happel, <i>Triangulated Categories in the Representation Theory of Finite-Dimensional Algebras</i>, LMS Lecture Note Ser. <b>119</b>, Cambridge Univ. Press, 1988.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> I. Reiten, <i>The use of almost split sequences in the representation theory of Artin algebras</i>, Lecture Notes in Math. <b>1174</b>, Springer, 1986.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> G. Jasso, S. Kvamme, <i>An introduction to higher Auslander–Reiten theory</i>, arXiv:1610.05458; Bull. Lond. Math. Soc. <b>51</b> (2019), 1–24.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> H. Krause, <i>The representation type of a module category</i>（AR 箭图与形态空间视角的综述）, 2014.</p>
</div>
</div>
