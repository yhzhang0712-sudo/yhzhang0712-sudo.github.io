---
title: "infinity"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
<a class="ar-toc-l1" href="#ar-inf-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-inf-1">1　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-inf-1-0">1.0　动机：三角范畴为什么不够用</a>
    <a class="ar-toc-l2" href="#ar-inf-1-1">1.1　$(\infty,1)$-范畴的四种模型</a>
    <a class="ar-toc-l2" href="#ar-inf-1-2">1.2　稳定 $\infty$-范畴</a>
    <a class="ar-toc-l2" href="#ar-inf-1-3">1.3　可呈现性、稳定化与 $\mathrm{Sp}$-模</a>
    <a class="ar-toc-l2" href="#ar-inf-1-4">1.4　与 dg / $A_{\infty}$ 范畴的字典</a>
    <a class="ar-toc-l1" href="#ar-inf-2">2　核心工具与定理</a>
    <a class="ar-toc-l2" href="#ar-inf-2-1">2.1　同伦范畴三角化</a>
    <a class="ar-toc-l2" href="#ar-inf-2-2">2.2　可呈现稳定范畴的张量积</a>
    <a class="ar-toc-l2" href="#ar-inf-2-3">2.3　增强唯一性</a>
    <a class="ar-toc-l2" href="#ar-inf-2-4">2.4　K 理论与非交换动机的泛性质</a>
    <a class="ar-toc-l2" href="#ar-inf-2-5">2.5　局部化、Verdier 商与 dg 商</a>
    <a class="ar-toc-l2" href="#ar-inf-2-6">2.6　t-结构、完备性与负 K 群障碍</a>
    <a class="ar-toc-l2" href="#ar-inf-2-7">2.7　半正交分解与非交换代数几何</a>
    <a class="ar-toc-l1" href="#ar-inf-3">3　主要应用与实例</a>
    <a class="ar-toc-l2" href="#ar-inf-3-1">3.1　标准增强词典</a>
    <a class="ar-toc-l2" href="#ar-inf-3-2">3.2　反射性 dg 范畴</a>
    <a class="ar-toc-l2" href="#ar-inf-3-3">3.3　丛范畴与 Ginzburg dg 代数</a>
    <a class="ar-toc-l2" href="#ar-inf-3-4">3.4　稳定同伦与等变世界</a>
    <a class="ar-toc-l2" href="#ar-inf-3-5">3.5　派生代数几何</a>
    <a class="ar-toc-l2" href="#ar-inf-3-6">3.6　可逼近性与度量的 $\infty$-提升</a>
    <a class="ar-toc-l1" href="#ar-inf-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l2" href="#ar-inf-4-1">4.1　三角范畴：有损投影</a>
    <a class="ar-toc-l2" href="#ar-inf-4-2">4.2　dg 与 $A_{\infty}$</a>
    <a class="ar-toc-l2" href="#ar-inf-4-3">4.3　模型范畴</a>
    <a class="ar-toc-l2" href="#ar-inf-4-4">4.4　derivator</a>
    <a class="ar-toc-l2" href="#ar-inf-4-5">4.5　张量三角几何</a>
    <a class="ar-toc-l2" href="#ar-inf-4-6">4.6　总表</a>
<a class="ar-toc-l1" href="#ar-inf-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-inf-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-inf-0">0　记号与约定</h3>
<p><strong>默认约定</strong>：①未加修饰的“范畴”指 $\infty$-范畴（即 $(\infty,1)$-范畴）；②“等价”指 $\infty$-范畴等价，不是同构；③“稳定”默认带有限极限与有限余极限；④$h\mathscr{C}$ 记 $\mathscr{C}$ 的同伦范畴，其三角结构为 $[1]=\Sigma$，区分三角即余纤维序列 $X\to Y\to\mathrm{cofib}\to\Sigma X$。</p>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\mathbf{sSet}$，$\Delta^{n}$，$\Lambda^{k}_{i}$</td><td>单纯集范畴、标准 $n$-单纯形、第 $k$ 个内 Horn（$0&lt;k&lt;n$）</td></tr>
<tr><td>$\mathrm{N}(\mathscr{C})$</td><td>（1-）范畴 $\mathscr{C}$ 的神经</td></tr>
<tr><td>$\mathscr{C}^{\simeq}$</td><td>$\mathscr{C}$ 的最大子 $\infty$-群胚（含全部对象、仅含等价）</td></tr>
<tr><td>$\mathrm{Map}_{\mathscr{C}}(X,Y)$</td><td>映射空间（取代经典 $\mathrm{Hom}$ 集合）</td></tr>
<tr><td>$\mathrm{Fun}(\mathscr{C},\mathscr{D})$</td><td>函子 $\infty$-范畴</td></tr>
<tr><td>$\Sigma$，$\Omega$</td><td>平移 $\Sigma X:=\mathrm{cofib}(X\to0)$ 与循环 $\Omega X:=\mathrm{fib}(0\to X)$，$\Omega=\Sigma^{-1}$</td></tr>
<tr><td>$\mathrm{Sp}$</td><td>谱（的稳定 $\infty$-范畴）；$\Sigma^{\infty}\dashv\Omega^{\infty}$</td></tr>
<tr><td>$\mathrm{Fun}^{\mathrm{lex}}$ / $\mathrm{Fun}^{\mathrm{ex}}$ / $\mathrm{Fun}^{L}$</td><td>保有限极限 / 正合（保有限极限与余极限）/ 保所有小余极限的函子</td></tr>
<tr><td>$\mathrm{Pr}^{L}$，$\otimes$</td><td>可呈现 $\infty$-范畴与保余极限函子；Lurie 张量积（单位对象为 $\mathscr{S}$）</td></tr>
<tr><td>$\mathrm{Mod}_{\mathrm{Sp}}(\mathrm{Pr}^{L})$</td><td>$\mathrm{Pr}^{L}$ 中 $\mathrm{Sp}$ 上的模</td></tr>
<tr><td>$\mathrm{per}(A)$，$\mathrm{D}_{\mathrm{fd}}(A)$</td><td>完美 $A$-模 / 上同调有限 $A$-模（$A$ 为 dg 代数或 dg 范畴）</td></tr>
<tr><td>$\mathrm{HH}$，$\mathrm{THH}$，$\mathrm{TC}$</td><td>Hochschild（上）同调、拓扑 Hochschild 同调、拓扑循环同调</td></tr>
<tr><td>$\mathbb{E}_{n}$，$\mathrm{CAlg}$</td><td>小 $n$-圆盘 operad；$E_{\infty}$-环谱（$=\mathbb{E}_{\infty}$-代数）范畴</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-inf-1">1　概念与定义</h3>

<h4 id="ar-inf-1-0">1.0　动机：三角范畴为什么不够用</h4>
<p>经典三角范畴（Grothendieck–Verdier）抓住了导出范畴的公理轮廓，但作为"工作场所"有三大结构性缺陷，这正是引入 $\infty$-范畴（更一般地，增强）的实际动因：</p>
<ul>
  <li><strong>锥不函子</strong>：给定态射 $f:X\to Y$，其锥 $C(f)$ 在三角范畴中只在同构意义下确定，且该同构不典范。因此依赖锥的构造（如函子范畴、张量积）在三角层面无法定义。</li>
  <li><strong>构造不封闭</strong>：两个三角范畴的张量积、三角范畴之间的函子范畴<em>不再</em>是三角范畴；Verdier 商虽然存在，但常不能与其余构造相容。</li>
  <li><strong>三角等价不足以承载增强信息</strong>：对<em>环</em>而言 Dugger–Shipley 证明了正结果——若 $\mathbf{D}(R)$ 与 $\mathbf{D}(S)$ 三角等价，则 $K_{*}(R)\cong K_{*}(S)$（$K$ 理论空间甚至弱等价）。但在 <em>dg 代数 / 稳定模型范畴</em>层面结论反转：Schlichting 的例子给出两个稳定模型范畴，其同伦范畴作为三角范畴等价而 Waldhausen 的 $K_{4}$ 群不同；Dugger–Shipley 据此构造出<em>导出等价但不 Quillen 等价</em>的 dg 代数对，并用 $HH^{*}$、$THH^{*}$ 给出更简单的区分。结论：三角范畴层面的等价<em>不足以</em>提升为增强层面的等价，谈论 $K$ 理论、Hochschild（上）同调等不变量时必须指明增强。</li>
</ul>
<p>所谓<strong>增强</strong>（enhancement），即一个携带更高同伦信息的结构 $\mathbf{T}$（dg 范畴、$A_{\infty}$ 范畴、稳定 $\infty$-范畴、稳定模型范畴），其同伦范畴 $H^{0}(\mathbf{T})$（或 $\mathrm{Ho}(\mathbf{T})$）为给定的三角范畴。<strong>$\infty$-范畴</strong>特指 $(\infty,1)$-范畴：所有 $k\ge 2$ 阶态射都可逆的高阶范畴——这正是同伦论与同调代数真正需要的那一层。</p>

<h4 id="ar-inf-1-1">1.1　$(\infty,1)$-范畴的四种模型</h4>
<p>$(\infty,1)$-范畴没有单一"正确"定义，而是由若干互相 Quillen 等价的模型范畴给出。实践中主要用四种：</p>
<table>
<thead><tr><th>模型</th><th>载体</th><th>模型结构</th><th>典型用途</th></tr></thead>
<tbody>
<tr><td>拟范畴 quasi-category</td><td>满足内 Kan 条件的单纯集（内 Horn 有填充）</td><td>sSet 上的 <strong>Joyal 模型结构</strong></td><td>Lurie 体系（HTT/HA）的默认语言</td></tr>
<tr><td>单纯范畴 simplicial category</td><td>态射为单纯集的范畴</td><td><strong>Bergner 模型结构</strong></td><td>与 dg 范畴、同伦代数直接对接</td></tr>
<tr><td>完备 Segal 空间</td><td>满足 Segal 与完备性条件的双单纯集</td><td><strong>Rezk 模型结构</strong></td><td>与 $(\infty,n)$ 一般理论衔接</td></tr>
<tr><td>相对范畴 relative category</td><td>$(C,W)$：$C$ 配一类弱等价</td><td><strong>Barwick–Kan 模型结构</strong></td><td>从任意同伦论（含模型范畴）出发的通用通道</td></tr>
</tbody>
</table>
<p>这些模型之间的 Quillen 等价由 Joyal–Tierney、Bergner、Barwick–Kan、Lurie 等分别建立，故"$\infty$-范畴"可作为风味无关（flavor-independent）的概念使用：定理的表述与证明结果不依赖所选模型。历史脉络上，拟范畴最早出现在 Boardman–Vogt 关于同伦不变代数结构的工作，其后由 Joyal 系统发展，再由 Lurie 在《Higher Topos Theory》与《Higher Algebra》中奠定表述标准。</p>

<h4 id="ar-inf-1-2">1.2　稳定 $\infty$-范畴</h4>
<p><strong>定义（稳定）</strong>：$\infty$-范畴 $\mathscr{C}$ 称为<strong>稳定</strong>的，若满足三条：</p>
<ol>
  <li>$\mathscr{C}$ 有<strong>零对象</strong> $0$（既始又终）；</li>
  <li>$\mathscr{C}$ 有<strong>有限极限与有限余极限</strong>；</li>
  <li>对任意交换方块（即函子 $\Delta^{1}\times\Delta^{1}\to\mathscr{C}$），它是<strong>推出</strong>方块当且仅当它是<strong>拉回</strong>方块。</li>
</ol>
<p>此时定义平移 $\Sigma X:=\mathrm{cofib}(X\to 0)$，循环 $\Omega X:=\mathrm{fib}(0\to X)$；条件 (3) 蕴含 $\Sigma$ 与 $\Omega$ 互为逆等价。</p>
<p><strong>等价刻画</strong>：以下三条等价，实践中常用来验证稳定性——(a) $\mathscr{C}$ 稳定；(b) $\mathscr{C}$ 有有限余极限、有零对象、且 $\Sigma$ 为等价；(c) $\mathscr{C}$ 有有限极限、有零对象、且 $\Omega$ 为等价。</p>
<p><strong>基本定理（Lurie）</strong>：稳定 $\mathscr{C}$ 的同伦范畴 $h\mathscr{C}$ 带典范三角结构——平移为 $\Sigma$，区分三角恰为 $\mathscr{C}$ 中的<em>余纤维序列</em> $X\xrightarrow{f}Y\to\mathrm{cofib}(f)\to\Sigma X$。特别地，三角范畴公理中最难验证的八面体公理成为 $\infty$-范畴层面简单公理的推论。</p>
<p><strong>稳定化的泛性质</strong>：设 $\mathscr{C}$ 带有限极限。则存在稳定 $\infty$-范畴 $\mathrm{Sp}(\mathscr{C})$（$\mathscr{C}$ 中<em>谱对象</em>的范畴）与函子 $\Sigma^{\infty}:\mathscr{C}\to\mathrm{Sp}(\mathscr{C})$，使对任意稳定 $\mathscr{D}$ 有等价</p>
$$\mathrm{Fun}^{\mathrm{lex}}(\mathscr{C},\mathscr{D})\ \simeq\ \mathrm{Fun}^{\mathrm{ex}}(\mathrm{Sp}(\mathscr{C}),\mathscr{D}).$$
<p>取 $\mathscr{C}=\mathscr{S}$（空间）得 $\mathrm{Sp}(\mathscr{S})=\mathrm{Sp}$，$\Sigma^{\infty}$ 即无穷悬挂；这是“稳定化”这一操作的单位化构造。</p>

<h4 id="ar-inf-1-3">1.3　可呈现性、稳定化与 $\mathrm{Sp}$-模</h4>
<p><strong>定义（可呈现）</strong>：$\mathscr{C}$ 称为<strong>可呈现</strong>的，若存在正则基数 $\kappa$，使 $\mathscr{C}$ 由一个小集合的 $\kappa$-紧对象生成且对 $\kappa$-滤过余极限封闭（等价地 $\mathscr{C}\simeq\mathrm{Ind}_{\kappa}(\mathscr{C}_{0})$ 对某小 $\infty$-范畴 $\mathscr{C}_{0}$）。这是 Gabriel–Ulmer 局部可呈现范畴的 $\infty$-版本。</p>
<p><strong>$\mathrm{Pr}^{L}$</strong>：可呈现 $\infty$-范畴与保（小）余极限函子构成的 $\infty$-范畴，带 Lurie 的对称单oidal张量积 $\mathscr{C}\otimes\mathscr{D}$（使“对每个变量分别保余极限的双函子”泛化），单位对象为 $\mathscr{S}$，内 Hom 为 $\mathrm{Fun}^{L}(\mathscr{C},\mathscr{D})$。</p>
<p><strong>定理（Lurie, HA）</strong>：限制到可呈现<em>稳定</em> $\infty$-范畴，有对称单oidal等价</p>
$$\mathrm{Cat}_{\infty}^{\mathrm{st},\mathrm{pres}}\ \simeq\ \mathrm{Mod}_{\mathrm{Sp}}(\mathrm{Pr}^{L}),\qquad \mathscr{C}\mapsto\big(\mathrm{Sp}\otimes\mathscr{C}\to\mathscr{C}\big).$$
<p>即“可呈现稳定 $\infty$-范畴”恰为 $\mathrm{Pr}^{L}$ 中的 $\mathrm{Sp}$-模，而正合且保余极限的函子恰为 $\mathrm{Sp}$-模同态。<strong>注意</strong>：$\mathrm{Sp}$-模结构是<em>数据</em>而非性质——同一个底层 $\infty$-范畴可带不同的 $\mathrm{Sp}$-模结构，给出不同的稳定范畴。</p>
<p><strong>张量积的实际意义</strong>：$\mathscr{C}\otimes\mathscr{D}$ 使“两个范畴的联合”有意义（优良情形 $\mathrm{Perf}(X)\otimes\mathrm{Perf}(Y)\simeq\mathrm{Perf}(X\times Y)$），并使对偶 $\mathscr{C}^{\vee}:=\mathrm{Fun}^{L}(\mathscr{C},\mathrm{Sp})$ 与双对偶有意义——这正是 3.2 反射性的舞台。这些陈述在三角层面无法表达。</p>

<h4 id="ar-inf-1-4">1.4　与 dg / $A_{\infty}$ 范畴的字典</h4>
<p>在特征 0（更一般地，任意交换基环）上，dg 范畴与稳定 $\infty$-范畴给出<em>同一种</em>同伦论：</p>
<ul>
  <li><strong>Cohn 定理</strong>（arXiv:1308.2587）：$k$-线性稳定 $\infty$-范畴的同伦论等价于 dg 范畴的同伦论（在相应的 Morita / 局部化模型结构下）。注意该证明实际对任意环成立，尽管原文陈述限于特征零。</li>
  <li><strong>Haugseng 的直化定理</strong>（arXiv:1312.3881）：链复形富化的 $\infty$-范畴等价于严格以链复形富化的范畴——富化层面同样可以"直化"。</li>
  <li><strong>构造性通道</strong>：dg 范畴 $\mathcal{A}$ 经 dg nerve 得 $\infty$-范畴；反之稳定 $\infty$-范畴可经（在同伦意义下）dg 范畴呈现。Bondal–Kapranov 的 pretriangulated dg 范畴、Drinfeld 的 dg 商是这一侧的原型工具。</li>
  <li><strong>$A_{\infty}$ 范畴</strong>：与 dg 范畴在特征零下互为等价的"最小模型"语言（Kontsevich–Soibelman、Fukaya 范畴一侧的标准工具）。</li>
</ul>

<h3 class="ar-subhead" id="ar-inf-2">2　核心工具与定理</h3>

<h4 id="ar-inf-2-1">2.1　同伦范畴三角化</h4>
<p><strong>定理 2.1（Lurie）</strong>：<strong>设</strong> $\mathscr{C}$ 为稳定 $\infty$-范畴。<strong>则</strong> $h\mathscr{C}$ 为三角范畴（平移 $\Sigma$，区分三角 $=$ 余纤维序列），且该构造函子化：正合函子 $F:\mathscr{C}\to\mathscr{D}$ 诱导三角函子 $hF:h\mathscr{C}\to h\mathscr{D}$。</p>
<p><strong>反向不成立（两个方向都失败）</strong>：(i) 存在 $\mathscr{C}\not\simeq\mathscr{D}$（$\infty$-范畴不等价）而 $h\mathscr{C}\simeq h\mathscr{D}$（三角等价）——即 $h$ 丢失信息；(ii) 存在三角等价 $h\mathscr{C}\simeq h\mathscr{D}$ 无法提升为 $\infty$-范畴等价——后者正是 1.0 中 Dugger–Shipley / Schlichting 现象的另一面。</p>
<p><strong>推论</strong>：任何三角范畴层面的定理都可尝试在 $\infty$-范畴层面加强；反之，$K$ 理论、$\mathrm{HH}$、$\mathrm{THH}$ 等在三角层面未必有定义（或不被三角结构决定），讨论时必须指明增强。</p>

<h4 id="ar-inf-2-2">2.2　可呈现稳定范畴的张量积</h4>
<p><strong>定理 2.2</strong>：$\mathrm{Pr}^{L}$ 上的张量积使"可呈现稳定 $\infty$-范畴"成为对称单oidal $\infty$-范畴 $\mathrm{Mod}_{\mathrm{Sp}}(\mathrm{Pr}^{L})$；函子范畴 $\mathrm{Fun}^{L}(\mathscr{C},\mathscr{D})$ 是内 Hom。于是可呈现稳定范畴构成一个<em>闭</em>对称单oidal 世界，可以在其中做"范畴的代数"。</p>
<p>典型应用：$\mathscr{C}$ 的对偶（$\mathscr{C}^{\vee}=\mathrm{Fun}^{L}(\mathscr{C},\mathrm{Sp})$）、双对偶与自反性——这正引出 3.2 的反射性 dg 范畴理论。</p>

<h4 id="ar-inf-2-3">2.3　增强唯一性</h4>
<ul>
  <li><strong>Lunts–Orlov 定理</strong>（arXiv:0908.4187；J. Amer. Math. Soc. 2010）：对拟射影概形 $X$，$\mathbf{D}^{b}(\mathrm{coh}\,X)$ 的（dg）增强在同构意义下唯一。这是"几何范畴增强唯一"的第一批一般结果。</li>
  <li><strong>Canonaco–Neeman–Stellari</strong>（arXiv:2101.04404；Forum Math. Sigma 2022）：把唯一性推广到 Grothendieck Abel 范畴的 $\mathbf{D}(\mathscr{A})$、$\mathbf{D}_{\mathrm{qc}}(X)$、$\mathbf{D}^{\mathrm{perf}}(X)$、$\mathbf{D}^{b}_{\mathrm{coh}}(X)$ 等一整类导出与几何范畴。</li>
  <li><strong>可逼近平台上的唯一性</strong>：弱可逼近三角范畴的内在子范畴（尤其 $\mathscr{T}^{b}_{c}$、$\mathscr{T}^{-}_{c}$）在温和假设下增强唯一，且三角等价可提升为增强等价——见本页"Approximable Triangulated category"面板定理 2.8–2.9。</li>
  <li><strong>反面</strong>：并非所有三角范畴都增强唯一；"三角等价可否提升为增强等价"是需要证明的命题而非默认事实——Dugger–Shipley 与 Schlichting 的例子（见 1.0）正是这一点的见证。</li>
</ul>

<h4 id="ar-inf-2-4">2.4　K 理论与非交换动机的泛性质</h4>
<p><strong>定理 2.4（Blumberg–Gepner–Tabuada）</strong>：设 $\mathrm{Cat}_{\infty}^{\mathrm{perf}}$ 为小、稳定、幂等完备 $\infty$-范畴与正合函子构成的 $\infty$-范畴。则代数 $K$ 理论 $K:\mathrm{Cat}_{\infty}^{\mathrm{perf}}\to\mathrm{Sp}$ 被下列三条性质<em>泛</em>地刻画：对任意稳定可呈现 $\mathscr{A}$，前复合给出等价</p>
$$\mathrm{Fun}^{L}(\mathcal{M}_{\mathrm{loc}},\mathscr{A})\ \simeq\ \big\{\,F:\mathrm{Cat}_{\infty}^{\mathrm{perf}}\to\mathscr{A}\ \big|\ F\ \text{满足 (K1)–(K3)}\,\big\},$$
<p>其中：(K1) $F$ 保持滤过余极限；(K2) $F$ <strong>Waldhausen 加性</strong>——对正合序列 $\mathscr{A}_{0}\to\mathscr{A}_{1}\to\mathscr{A}_{2}$ 有 $F(\mathscr{A}_{1})\simeq F(\mathscr{A}_{0})\oplus F(\mathscr{A}_{2})$；(K3) $F$ 把紧谱范畴 $\mathrm{Sp}^{\omega}$ 送到球面谱 $\mathbb{S}$。泛对象 $\mathcal{M}_{\mathrm{loc}}$ 即<strong>非交换动机</strong> $\infty$-范畴。</p>
<p><strong>为何必须在 $\infty$-范畴层面陈述</strong>：“保持滤过余极限”“泛对象”“加性分解”这三类陈述都需要 $\infty$-范畴语言，在三角范畴或普通范畴层面没有对应物。</p>
<p><strong>边界</strong>：该泛性质刻画的是<em>局部化</em>（localizing）不变量。若只要求对可裂短正合列加性（“加性”而非“局部化”），泛对象为 $\mathcal{M}_{\mathrm{add}}$（Tabuada），二者不同；Robalo 的 motivic 稳定同伦论（arXiv:1206.3645）则把非交换空间的 $K$ 理论识别为其动机谱的映射谱。</p>

<h4 id="ar-inf-2-5">2.5　局部化、Verdier 商与 dg 商</h4>
<p>Verdier 商 $\mathscr{T}/\mathscr{S}$ 是三角范畴层面对"模掉一个子范畴"的操作；在增强层面它提升为 <strong>dg 商</strong>（Drinfeld）或 $\infty$-范畴的局部化。要点：</p>
<ul>
  <li>dg 商 $\mathcal{A}/\mathcal{B}$ 的三角化同伦范畴等于相应的 Verdier 商，但 dg 商携带额外同伦信息，可与张量积、函子范畴相容；</li>
  <li>$\infty$-范畴的局部化 $\mathscr{C}[W^{-1}]$ 是泛性质定义，因此天然函子化——这消除了三角范畴中"商是否典范"的暧昧；</li>
  <li>奇点范畴 $\mathbf{D}_{\mathrm{sing}}(X)=\mathbf{D}^{b}(\mathrm{coh}X)/\mathbf{D}^{\mathrm{perf}}(X)$ 是这一机制最重要的输出之一。</li>
</ul>

<h4 id="ar-inf-2-6">2.6　t-结构、完备性与负 K 群障碍</h4>
<p>t-结构可在稳定 $\infty$-范畴上直接定义（Lurie, HA 第 1 章），其心为 Abel 范畴；有界性与完备性条件控制 $\mathscr{C}$ 是否由其心与导出信息重建。</p>
<p><strong>定理 2.6（Antieau–Gepner–Heller）</strong>：带<em>有界</em> t-结构的稳定 $\infty$-范畴（或 Waldhausen 范畴）负 $K$ 群消失，且其 $K$ 理论与心的 $K$ 理论同构。因此负 $K$ 群非零构成有界 t-结构存在的<em>障碍</em>——对奇异概形的 $\mathbf{D}^{\mathrm{perf}}(X)$ 正是如此。该障碍后被 Neeman 的定理（$\mathbf{D}^{\mathrm{perf}}_{Z}(X)$ 有界 t-结构 $\iff$ $Z$ 落入正则轨迹）严格超越。</p>

<h4 id="ar-inf-2-7">2.7　半正交分解与非交换代数几何</h4>
<ul>
  <li><strong>半正交分解</strong>（Bondal–Kapranov）：$\mathscr{T}=\langle\mathscr{A},\mathscr{B}\rangle$ 是 $\infty$-范畴语境下的标准分解工具；其分类（对 $\mathbf{D}^{\mathrm{perf}}(X)$、$\mathbf{D}^{b}_{\mathrm{coh}}(X)$）是当代代数几何的核心问题之一。</li>
  <li><strong>非交换代数几何</strong>（Orlov、Kuznetsov）：把 dg/\infty-范畴当作"非交换空间"，用光滑性、真性、Hochschild 不变量替代几何性质。</li>
  <li><strong>模空间</strong>（Toën–Vaquié）：dg 范畴中对象的模栈——给出表示论中模空间（如箭图表示模）的内蕴构造。</li>
</ul>

<h3 class="ar-subhead" id="ar-inf-3">3　主要应用与实例</h3>

<h4 id="ar-inf-3-1">3.1　标准增强词典</h4>
<table>
<thead><tr><th>数学对象</th><th>增强（dg / $\infty$）</th><th>三角化的同伦范畴</th></tr></thead>
<tbody>
<tr><td>环 $R$</td><td>$\mathbf{D}_{\mathrm{dg}}(R)$，或 $R$-模的导出 $\infty$-范畴</td><td>$\mathbf{D}(R)$</td></tr>
<tr><td>概形 $X$</td><td>$\mathrm{QCoh}(X)$ 的 dg 增强 / $\mathrm{QC}(X)$</td><td>$\mathbf{D}_{\mathrm{qc}}(X)$</td></tr>
<tr><td>完美复形</td><td>$\mathrm{Perf}(X)$（紧对象）</td><td>$\mathbf{D}^{\mathrm{perf}}(X)$</td></tr>
<tr><td>凝聚层</td><td>$\mathbf{D}^{b}_{\mathrm{coh}}$ 的 dg 增强</td><td>$\mathbf{D}^{b}(\mathrm{coh}X)$</td></tr>
<tr><td>有限维代数 $A$</td><td>$\mathrm{per}(A)$、$\mathbf{D}^{b}_{\mathrm{fd}}(A)$</td><td>$\mathbf{K}^{b}(\mathrm{proj}A)$、$\mathbf{D}^{b}(\mathrm{mod}A)$</td></tr>
<tr><td>空间 $X$</td><td>上链代数 $C^{\bullet}(X;k)$</td><td>$\mathbf{D}(C^{\bullet}(X;k))$</td></tr>
<tr><td>谱</td><td>$\mathrm{Sp}$</td><td>稳定同伦范畴</td></tr>
</tbody>
</table>

<h4 id="ar-inf-3-2">3.2　反射性 dg 范畴</h4>
<p>Kuznetsov–Shinder 引入的<strong>反射性</strong>（reflexivity）抽象了有界导出范畴与完美导出范畴之间的对偶：对 dg 范畴 $\mathcal{C}$，其"完美赋值" $\mathrm{D}_{\mathrm{fd}}(\mathcal{C})$ 是取值于 $\mathrm{Perf}(k)$ 的 dg 模范畴；称 $\mathcal{C}$ <em>反射</em>，若自然函子 $\mathcal{C}\to\mathrm{D}_{\mathrm{fd}}\mathrm{D}_{\mathrm{fd}}(\mathcal{C})$ 为 Morita 等价。</p>
<ul>
  <li>Kuznetsov–Shinder 证明：反射 $\mathcal{C}$ 的 $\mathrm{D}_{\mathrm{perf}}(\mathcal{C})$ 与 $\mathrm{D}_{\mathrm{fd}}(\mathcal{C})$ 的三角自等价群同构、半正交分解之间存在双射；</li>
  <li><strong>Goodbody</strong>（arXiv:2403.09299）：把反射 dg 范畴刻画为 Morita 同伦范畴中的反射对象，并推出 $\mathrm{HH}$ 与导出 Picard 群在两范畴上一致（注意 $\mathrm{HH}$ 的<em>同调</em>类比命题为<em>假</em>）；</li>
  <li><strong>Booth–Goodbody–Opper</strong>（arXiv:2506.11213）：给出"2-out-of-3"型判据，并在仿射概形、单 minded 集合、Ginzburg dg 代数、空间的（上）链 dg 代数、余切丛与曲面的 Fukaya 范畴、分次 gentle 代数等情形建立反射性；对某些（余）连通 dg 代数，反射性<em>等价于</em>导出完备性。</li>
</ul>

<h4 id="ar-inf-3-3">3.3　丛范畴与 Ginzburg dg 代数</h4>
<p>箭图带势 $(Q,W)$ 的 <strong>Ginzburg dg 代数</strong> $\Gamma(Q,W)$ 是典型 3-Calabi–Yau dg 代数；其 $\mathrm{per}(\Gamma)/\mathrm{D}_{\mathrm{fd}}(\Gamma)$ 给出（广义）丛范畴——2-Calabi–Yau 三角范畴。这一构造的三个环节（Ginzburg dg 代数、Kontsevich–Soibelman 的 $A_{\infty}$ 代数、Amiot 的广义丛范畴）之间的 Koszul 对偶关系，只有在 dg/$A_{\infty}$/$\infty$ 层面才能完整陈述；详见本页"Cluster Theory"面板。</p>

<h4 id="ar-inf-3-4">3.4　稳定同伦与等变世界</h4>
<p>谱范畴 $\mathrm{Sp}$ 是最早、也是最重要的稳定 $\infty$-范畴；等变稳定同伦（$G$-谱、谱 Mackey 函子）提供了 tt-几何与表示论交叉的富矿区：Barthel–Heard–Sanders 的层化理论（arXiv:2106.15540，Cambridge J. Math. 2023）即在此框架下分类局部化张量理想（见"张量三角几何"面板）。</p>

<h4 id="ar-inf-3-5">3.5　派生代数几何</h4>
<p>Lurie 的 <em>Derived Algebraic Geometry</em> 系列与《Spectral Algebraic Geometry》把代数几何建立在（谱）$\infty$-范畴之上：派生概形、$E_{\infty}$-环谱、拟凝聚层理论（Tannaka 对偶）等。对表示论而言，其输出包括：模栈的余切复形与形变理论（$\mathbb{E}_{n}$-代数、Kontsevich 形变量化）、以及 3.2 中 Fukaya 范畴一侧的镜像对称应用。</p>

<h4 id="ar-inf-3-6">3.6　可逼近性与度量的 $\infty$-提升</h4>
<p>Neeman 的三角范畴度量与可逼近性理论最初完全在三角层面运作；Canonaco–Neeman–Stellari（arXiv:2607.12865, 2026）把优良度量理论提升到 $\infty$-范畴层面，大幅推广了增强唯一性结果并肯定回答若干公开问题。这表明：即使是最"三角味"的当代理论，其最终形态也趋向 $\infty$-范畴化。</p>

<h3 class="ar-subhead" id="ar-inf-4">4　与邻近概念的关系</h3>

<h4 id="ar-inf-4-1">4.1　三角范畴：有损投影</h4>
<p>$h:\mathbf{Cat}_{\infty}^{\mathrm{st}}\to\mathbf{Cat}^{\mathrm{tr}}$（取同伦范畴）是一个<em>有损</em>的忘却函子：它丢弃了所有高阶同伦信息。后果包括：锥不函子、无法做张量积/函子范畴、不变量不被决定、增强可能不唯一。因此现代实践中"三角范畴"多作为<em>输出</em>（可读的最终形态），而把 $\infty$/dg 范畴作为<em>工作对象</em>。</p>

<h4 id="ar-inf-4-2">4.2　dg 与 $A_{\infty}$</h4>
<p>在特征零（更一般地，在 Cohn–Haugseng 定理成立的任意基上）二者与 $k$-线性稳定 $\infty$-范畴给出等价的同伦论，可自由切换。差异在于"计算友好度"：dg 范畴适合构造（商、张量积）、$A_{\infty}$ 适合最小模型与 Fukaya 范畴、$\infty$-范畴适合陈述泛性质与唯一性定理。</p>

<h4 id="ar-inf-4-3">4.3　模型范畴</h4>
<p>稳定模型范畴（Hovey；Dugger–Shipley）是 $\infty$-范畴的"呈现"之一：每个可呈现 $\infty$-范畴都由组合模型范畴呈现。二者互补——模型范畴便于做具体计算（如 dg 范畴上的 Tabuada 模型结构），$\infty$-范畴便于做抽象的泛性质与唯一性。Schwede–Shipley 的"稳定模型范畴 $\simeq$ 谱的模"是 1.3 中 $\mathrm{Sp}$-模定理的模型范畴前身。</p>

<h4 id="ar-inf-4-4">4.4　derivator</h4>
<p>derivator（Grothendieck、Heller、Maltsiniotis）是三角范畴与 $\infty$-范畴之间的中间层：它记录所有图范畴上的导出函子，因而修复了锥不函子的部分问题，但比 $\infty$-范畴弱。对主要应用而言，derivator 与稳定 $\infty$-范畴给出的信息高度接近，但 derivator 缺少张量积/函子范畴的完整闭性。当代文献中 derivator 的使用已大幅减少。</p>

<h4 id="ar-inf-4-5">4.5　张量三角几何</h4>
<p>张量三角范畴（tt-范畴）通常被理解为"可呈现对称单oidal 稳定 $\infty$-范畴的同伦范畴"。Balmer 谱、支撑与层化理论（Barthel–Heard–Sanders）本质上是 $\infty$-范畴层面的构造在三角层面的影子；反过来，$\infty$-范畴为这些构造提供了函子性与下降机制。详见"Tensor Triangulated Geometry"面板。</p>

<h4 id="ar-inf-4-6">4.6　总表</h4>
<table>
<thead><tr><th>邻近概念</th><th>关系方向</th><th>主要见证</th></tr></thead>
<tbody>
<tr><td>三角范畴</td><td>$\infty$-范畴的有损同伦投影；锥不函子、三角等价无法提升是其症状</td><td>Lurie 稳定 $\infty$-范畴；Dugger–Shipley 定理；Schlichting 例子</td></tr>
<tr><td>dg / $A_{\infty}$ 范畴</td><td>特征零下与 $k$-线性稳定 $\infty$-范畴同伦论等价</td><td>Cohn 1308.2587；Haugseng 1312.3881</td></tr>
<tr><td>稳定模型范畴</td><td>可呈现 $\infty$-范畴的呈现；便于具体计算</td><td>Schwede–Shipley；Dugger–Shipley</td></tr>
<tr><td>derivator</td><td>中间层；修复部分函子性但不闭</td><td>Grothendieck；Maltsiniotis</td></tr>
<tr><td>非交换动机</td><td>$K$ 理论等加性不变量的泛对象</td><td>Tabuada；Robalo 1206.3645；BGT 1001.2282</td></tr>
<tr><td>张量三角几何</td><td>单oidal $\infty$-范畴的三角影子</td><td>Balmer；BHS 2106.15540</td></tr>
<tr><td>可逼近性</td><td>度量与增强唯一性的 $\infty$-提升</td><td>Neeman；CNS 2607.12865</td></tr>
<tr><td>丛理论</td><td>Ginzburg dg 代数 / $A_{\infty}$ 代数提供典型 $\infty$-输入</td><td>Keller；Amiot；Kontsevich–Soibelman</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-inf-5">5　常见混淆与易错点</h3>
<ul class="agent-list">
  <li><span class="agent-name">“等价”与“同伦范畴等价”</span>：$\infty$-范畴的等价严格强于其同伦范畴的三角等价。说“$\mathscr{C}\simeq\mathscr{D}$”时必须指明是哪一层。</li>
  <li><span class="agent-name">稳定 ≠ 三角</span>：稳定 $\infty$-范畴是<em>结构</em>，三角范畴是其<em>投影</em> $h\mathscr{C}$。一个三角范畴可能没有增强，也可能有多个互不同构的增强。</li>
  <li><span class="agent-name">$\mathrm{Sp}$-模是数据</span>：$\mathrm{Mod}_{\mathrm{Sp}}(\mathrm{Pr}^{L})$ 的对象带模结构；不能把“稳定”仅当作可呈现范畴的一个性质来使用。</li>
  <li><span class="agent-name">紧对象 ≠ 完美对象</span>：对 $\mathrm{QC}(X)$ 一般有 $\mathrm{QC}(X)^{\omega}\subseteq\mathrm{Perf}(X)$；等号在 $X$ 拟紧拟分离时成立（Thomason）。讨论大范畴的谱时，谱取在紧对象子范畴 $\mathscr{T}^{c}$ 上。</li>
  <li><span class="agent-name">$E_{\infty}$ 是数据不是性质</span>：在 $\infty$ 语境，“交换环谱”必须指明 $E_{\infty}$-（即 $\mathbb{E}_{\infty}$-）结构；仅要求 $\pi_{*}$ 为分次交换环远远不够。</li>
  <li><span class="agent-name">张量积 ≠ 笛卡儿积</span>：Lurie 张量积 $\mathscr{C}\otimes\mathscr{D}$ 是使“双函子对每个变量分别保余极限”的泛构造，与乘积 $\mathscr{C}\times\mathscr{D}$（对应直和）完全不同。</li>
  <li><span class="agent-name">$\mathrm{Fun}$ 的三种装饰</span>：$\mathrm{Fun}^{\mathrm{lex}}$（保有限极限）、$\mathrm{Fun}^{\mathrm{ex}}$（正合）、$\mathrm{Fun}^{L}$（保所有小余极限）。稳定语境下前两者一致，但陈述定理时须写明是哪一个。</li>
</ul>

<h3 class="ar-subhead" id="ar-inf-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> J. Lurie, <i>Higher Topos Theory</i>, Annals of Mathematics Studies <b>170</b>, Princeton Univ. Press, 2009; arXiv:math/0608040.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> J. Lurie, <i>Stable Infinity Categories</i>, arXiv:math/0608228 (2006).</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> J. Lurie, <i>Higher Algebra</i>, 2017（作者主页电子版）.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> M. Groth, <i>A short course on $\infty$-categories</i>, arXiv:1007.2925.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> L. Cohn, <i>Differential Graded Categories are k-linear Stable Infinity Categories</i>, arXiv:1308.2587.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> R. Haugseng, <i>Rectification of enriched infinity-categories</i>, arXiv:1312.3881.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> B. Keller, <i>On differential graded categories</i>, International Congress of Mathematicians, Vol. II, 151–190, Eur. Math. Soc., Zürich, 2006.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> B. Toën, <i>The homotopy theory of dg-categories and derived Morita theory</i>, Invent. Math. <b>167</b> (2007), 615–667.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> V. Lunts, D. Orlov, <i>Uniqueness of enhancement for triangulated categories</i>, arXiv:0908.4187; J. Amer. Math. Soc. <b>23</b> (2010), 853–908.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> A. Canonaco, A. Neeman, P. Stellari, <i>Uniqueness of enhancements for derived and geometric categories</i>, arXiv:2101.04404; Forum Math. Sigma <b>10</b> (2022), e92.</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> A. J. Blumberg, D. Gepner, G. Tabuada, <i>A universal characterization of higher algebraic K-theory</i>, arXiv:1001.2282; Geom. Topol. <b>17</b> (2013), 733–838.</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> M. Robalo, <i>Noncommutative Motives I: A universal characterization of the motivic stable homotopy theory of schemes</i>, arXiv:1206.3645.</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> D. Dugger, B. Shipley, <i>$K$-theory and derived equivalences</i>, arXiv:math/0209084; Duke Math. J. <b>124</b> (2004), 587–617（导出等价 ⟹ $K$ 理论同构；并给出导出等价而不 Quillen 等价的 dg 代数例子，基于 M. Schlichting 的构造）.</p>
<p class="ar-ref"><span class="ar-ref-no">[14]</span> B. Antieau, D. Gepner, J. Heller, <i>K-theoretic obstructions to bounded t-structures</i>, arXiv:1610.07207; J. Eur. Math. Soc. (2019).</p>
<p class="ar-ref"><span class="ar-ref-no">[15]</span> I. Goodbody, <i>Reflexivity and Hochschild Cohomology</i>, arXiv:2403.09299.</p>
<p class="ar-ref"><span class="ar-ref-no">[16]</span> M. Booth, I. Goodbody, S. Opper, <i>Reflexive dg categories in algebra and topology</i>, arXiv:2506.11213.</p>
<p class="ar-ref"><span class="ar-ref-no">[17]</span> T. Barthel, D. Heard, B. Sanders, <i>Stratification in tensor triangular geometry with applications to spectral Mackey functors</i>, arXiv:2106.15540; Cambridge J. Math. <b>11</b> (2023), 829–915.</p>
<p class="ar-ref"><span class="ar-ref-no">[18]</span> A. Canonaco, A. Neeman, P. Stellari, <i>Metrics on triangulated categories and their enhancements</i>, arXiv:2607.12865 (2026).</p>
</div>
</div>
