---
title: "Geometric model"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-gm-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-gm-1">1　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-gm-1-1">1.1　什么叫"几何模型"</a>
    <a class="ar-toc-l2" href="#ar-gm-1-2">1.2　三个层次</a>
    <a class="ar-toc-l2" href="#ar-gm-1-3">1.3　曲面的数据结构</a>
    <a class="ar-toc-l2" href="#ar-gm-1-4">1.4　与 Fukaya 范畴的接口</a>
    <a class="ar-toc-l2" href="#ar-gm-1-5">1.5　为什么有用</a>
    <a class="ar-toc-l1" href="#ar-gm-2">2　核心工具与定理</a>
    <a class="ar-toc-l2" href="#ar-gm-2-1">2.1　一维原型：字符串与带</a>
    <a class="ar-toc-l2" href="#ar-gm-2-2">2.2　曲面丛代数</a>
    <a class="ar-toc-l2" href="#ar-gm-2-3">2.3　丛范畴的曲面模型</a>
    <a class="ar-toc-l2" href="#ar-gm-2-4">2.4　模范畴模型</a>
    <a class="ar-toc-l2" href="#ar-gm-2-5">2.5　导出范畴模型（OPS）</a>
    <a class="ar-toc-l2" href="#ar-gm-2-6">2.6　Fukaya 侧与同调镜像对称</a>
    <a class="ar-toc-l2" href="#ar-gm-2-7">2.7　线场、缠绕数与完全不变量</a>
    <a class="ar-toc-l2" href="#ar-gm-2-8">2.8　silting / $\tau$-tilting 的几何化</a>
    <a class="ar-toc-l2" href="#ar-gm-2-9">2.9　高维模型</a>
    <a class="ar-toc-l1" href="#ar-gm-3">3　主要应用与实例</a>
    <a class="ar-toc-l2" href="#ar-gm-3-1">3.1　gentle 代数：剖分 ↔ 代数</a>
    <a class="ar-toc-l2" href="#ar-gm-3-2">3.2　skew-gentle、Brauer 图代数</a>
    <a class="ar-toc-l2" href="#ar-gm-3-3">3.3　丛代数与高阶 Teichmüller 理论</a>
    <a class="ar-toc-l2" href="#ar-gm-3-4">3.4　同调镜像对称的"可算中介"</a>
    <a class="ar-toc-l2" href="#ar-gm-3-5">3.5　用曲面组合学构造反例</a>
    <a class="ar-toc-l2" href="#ar-gm-3-6">3.6　局部化的几何解释</a>
    <a class="ar-toc-l1" href="#ar-gm-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l2" href="#ar-gm-4-1">4.1　与丛理论</a>
    <a class="ar-toc-l2" href="#ar-gm-4-2">4.2　与 gentle / 字符串代数</a>
    <a class="ar-toc-l2" href="#ar-gm-4-3">4.3　与 silting / $\tau$-tilting</a>
    <a class="ar-toc-l2" href="#ar-gm-4-4">4.4　与 Fukaya 范畴</a>
    <a class="ar-toc-l2" href="#ar-gm-4-5">4.5　与高维 AR 理论、多面体组合</a>
    <a class="ar-toc-l2" href="#ar-gm-4-6">4.6　总表</a>
    <a class="ar-toc-l1" href="#ar-gm-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-gm-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">

<h3 class="ar-subhead" id="ar-gm-0">0　记号与约定</h3>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$(S,M)$、$(S,M,P)$</td><td>带标记曲面：$S$ 有向曲面（带边界），$M\subseteq\partial S$ 边界标记点，$P$ 内部标记点（穿孔）</td></tr>
<tr><td>$\Delta$、$T$</td><td>$(S,M,P)$ 的<em>剖分</em>（dissection，把曲面切成可容许片）；<em>三角剖分</em>（triangulation）</td></tr>
<tr><td>$\gamma$</td><td>（分级）弧或闭曲线；$[\gamma]$ 其同伦类</td></tr>
<tr><td>$\eta(\Delta)$</td><td>剖分决定的<em>线场</em>（line field），用于定义缠绕数</td></tr>
<tr><td>$\mathcal{W}(\Sigma)$</td><td>分级标记曲面 $\Sigma$ 的<em>部分包裹 Fukaya 范畴</em></td></tr>
<tr><td>$\mathrm{per}(A)$、$\mathbf{D}^{b}(A)$</td><td>完美复形范畴；有界导出范畴</td></tr>
<tr><td>$\mathrm{int}(\gamma,\delta)$</td><td>曲线的（分级）相交数，给出态射空间维数</td></tr>
</tbody>
</table>
<p>约定：①"模型"指范畴层面的<em>等价或对象/态射的双射</em>，而非仅仅直觉类比；②分级（graded）与不分级情形结论强度不同，本面板会分别标明。</p>

<h3 class="ar-subhead" id="ar-gm-1">1　概念与定义</h3>

<h4 id="ar-gm-1-1">1.1　什么叫"几何模型"</h4>
<p>一个 <strong>（曲面）几何模型</strong>把某类代数的表示论范畴 $\mathscr{C}$（模范畴、导出范畴、丛范畴等）实现为曲面上曲线的组合-拓扑数据，通常要求：</p>
<ul>
  <li><strong>对象</strong>：不可分解对象 $\leftrightarrow$ （分级）弧或闭曲线的同伦类（闭曲线带一维参数）；</li>
  <li><strong>态射</strong>：态射空间的一组基 $\leftrightarrow$ 曲线的（定向、分级）相交；</li>
  <li><strong>映射锥 / 扩张</strong>：$\leftrightarrow$ 解交叉（resolving crossings）或弧的"平滑化"；</li>
  <li><strong>AR 平移 / Serre 函子</strong>：$\leftrightarrow$ 端点沿边界旋转、或曲面的某个自同胚。</li>
</ul>
<p>满足全部四条者称为"完全模型"；只满足前两条者仍能用于计数与不变量计算。</p>

<h4 id="ar-gm-1-2">1.2　三个层次</h4>
<ol>
  <li><strong>模范畴层</strong>：$\mathrm{mod}\,A$（gentle、字符串、skew-gentle 等）；</li>
  <li><strong>导出范畴层</strong>：$\mathrm{per}(A)$、$\mathbf{D}^{b}(A)$（gentle 及其分级版本）；</li>
  <li><strong>三角商 / 丛范畴层</strong>：丛范畴、高维丛范畴、稳定范畴（曲面、多胞形）。</li>
</ol>
<p>三层模型并不互相推出：由模范畴模型到导出范畴模型需要分级数据与"同伦字符串/带"的分类，是实质性工作（2.4–2.5）。</p>

<h4 id="ar-gm-1-3">1.3　曲面的数据结构</h4>
<ul>
  <li><strong>标记与穿孔</strong>：$(S,M,P)$，$M$ 为曲线端点所在处，$P$（内部标记点）通常对应无限整体维数 / Gorenstein 现象；</li>
  <li><strong>剖分与三角剖分</strong>：剖分 ↔ 代数（gentle）；三角剖分 ↔ 丛 / 丛倾斜对象；</li>
  <li><strong>ribbon 图</strong>：gentle 代数的代数数据可编码为带标记的 ribbon 图，其加厚（thickening）即带边界曲面（Schroll）；</li>
  <li><strong>分级</strong>：弧带整数"度数"，对应复形的平移；</li>
  <li><strong>线场</strong>：剖分决定曲面上的一个线场 $\eta(\Delta)$，其同伦类是导出等价类的完全不变量（2.7）。</li>
</ul>

<h4 id="ar-gm-1-4">1.4　与 Fukaya 范畴的接口</h4>
<p>Haiden–Katzarkov–Kontsevich 证明：分级标记曲面的<strong>部分包裹 Fukaya 范畴</strong> $\mathcal{W}(\Sigma)$ 是"可算的"——其不可分解对象即分级曲线，态射由相交给出。Lekili–Polishchuk 进一步把同调光滑的分级 gentle 代数与 $\mathcal{W}(\Sigma)$ 等同起来。于是"代数侧模型"与"辛几何侧计算"成为同一件事的两个说法。</p>

<h4 id="ar-gm-1-5">1.5　为什么有用</h4>
<ul>
  <li><strong>可算性</strong>：不可分解对象、态射维数、AR 序列都能画出来；</li>
  <li><strong>不变量</strong>：导出不变量（缠绕数、Arf 不变量）可由曲面拓扑读出；</li>
  <li><strong>分类问题</strong>：导出分类、silting/$\tau$-tilting 分类转化为曲面上的拓扑分类；</li>
  <li><strong>构造反例</strong>：曲面的组合灵活性可用于否定地回答公开问题（Schroll 2025）；</li>
  <li><strong>桥梁作用</strong>：连接表示论、丛代数、辛几何与代数几何（节点栈曲线）。</li>
</ul>

<h3 class="ar-subhead" id="ar-gm-2">2　核心工具与定理</h3>

<h4 id="ar-gm-2-1">2.1　一维原型：字符串与带</h4>
<p>Butler–Ringel（1987）对字符串代数给出不可分解模的<strong>字符串与带</strong>分类：字符串模由箭图上的"路"（允许正向/反向交替）给出，带模附加一个不可分解 $k[x,x^{-1}]$-模参数。这可视为"一维几何模型"——曲线退化为箭图中的行走。所有高维曲面模型都可看作它的升级。</p>

<h4 id="ar-gm-2-2">2.2　曲面丛代数</h4>
<p><strong>定理 2.2（Fomin–Shapiro–Thurston）</strong>：对带标记曲面 $(S,M)$，其<em>三角剖分</em>的弧构成丛代数的丛，翻转变换（flip）对应丛突变；由此把一大类丛代数（"曲面型"）与曲面的三角剖分组合学等同。这是几何模型进入表示论的历史起点，也与 Fock–Goncharov 的高阶 Teichmüller 理论、局部系统模空间紧密相连。</p>

<h4 id="ar-gm-2-3">2.3　丛范畴的曲面模型</h4>
<p>Brüstle–Zhang、Qiu–Zhang–Zhou、Li–Qiu–Zhou 等给出：曲面型丛代数对应的<strong>丛范畴</strong>可用曲面上的弧（及其分级/标记版本）建模——不可分解对象 ↔ 弧（及带参数的闭曲线），$\mathrm{Ext}^{1}$ 的一维性 ↔ 相交数为 $1$，交换三角 ↔ 四边形翻转。这提供了"丛代数 ↔ 三角范畴 ↔ 曲面"三方对应的完整图像。</p>

<h4 id="ar-gm-2-4">2.4　模范畴模型</h4>
<p><strong>定理 2.4（Baur–Coelho Simões 等）</strong>：gentle 代数 $A(\Delta)$ 的不可分解模由 $(S,M,P)$ 上的容许弧（及带参数闭曲线）分类，不可约态射与 AR 序列由弧的端点沿边界移动给出。该模型已被推广到<strong>字符串代数</strong>：用"带标签的铺砌曲面"（labelled tiling）构造，并给出 support $\tau$-tilting 模的弧分类（arXiv:2403.07810, 2024）。</p>

<h4 id="ar-gm-2-5">2.5　导出范畴模型（OPS）</h4>
<p><strong>定理 2.5（Opper–Plamondon–Schroll, arXiv:1801.09659）</strong>：对分级 gentle 代数 $A$，其 ribbon 图的加厚曲面给出模型：</p>
<ul>
  <li>$\mathrm{per}(A)$（以及由单模生成的三角范畴）的不可分解对象 $\leftrightarrow$ 分级弧 / 分级闭曲线的同伦类；</li>
  <li>态射空间的一组基 $\leftrightarrow$ 定向分级相交；</li>
  <li>映射锥 $\leftrightarrow$ 解交叉；</li>
  <li>AR 平移 $\leftrightarrow$ 端点沿边界旋转。</li>
</ul>
<p>该曲面同时编码 Avella-Alaminos–Geiss 不变量。$\mathbf{D}^{b}(A)$（有限维上同调对象）的版本由 Booth–Goodbody–Opper 的结果补全。</p>

<h4 id="ar-gm-2-6">2.6　Fukaya 侧与同调镜像对称</h4>
<p><strong>定理 2.6</strong>：同调光滑的分级 gentle 代数 $A$ 满足 $\mathbf{D}^{b}(A)\simeq\mathcal{W}(\Sigma)$（HKK 的部分包裹 Fukaya 范畴 + Lekili–Polishchuk 的比较定理）。这使得 gentle 代数成为同调镜像对称中 A 侧（辛）与 B 侧（节点栈曲线上的凝聚层）之间的可算中介。</p>

<h4 id="ar-gm-2-7">2.7　线场、缠绕数与完全不变量</h4>
<p><strong>定理 2.7（Amiot–Plamondon–Schroll, Selecta Math. 29 (2023) 30）</strong>：两个 gentle 代数导出等价 $\iff$ 存在保向同胚使相应<em>线场</em>同伦。用<strong>缠绕数</strong>与 $\mathbb{Z}_{2}$ 上某二次型的 <strong>Arf 不变量</strong>可把它翻译为数值完全不变量。这是"几何模型解决分类问题"的典范。分级情形的完全不变量由 Opper、Lekili–Polishchuk 给出。</p>

<h4 id="ar-gm-2-8">2.8　silting / $\tau$-tilting 的几何化</h4>
<p><strong>定理 2.8</strong>：$A(\Delta)$ 的 silting 对象恰为 $(S,M,P)$ 的可容许剖分；two-term silting 复形 ↔ support $\tau$-tilting 模 ↔ 三角剖分/铺砌的相容弧组；silting 突变 ↔ 分级弧的替换（含翻转）。由此 silting 理论的组合学完全几何化，并给出 $\tau$-tilting 有限性的组合判据。</p>

<h4 id="ar-gm-2-9">2.9　高维模型</h4>
<p>曲面之外，还有两类"高维模型"：</p>
<ul>
  <li><strong>循环多胞形</strong>：偶数维循环多胞形的三角剖分与高维丛范畴中的丛倾斜对象一一对应（Oppermann–Thomas）；奇数维三角剖分则与极大绿序列的等价类对应。</li>
  <li><strong>棱柱</strong>（Iyama–Williams, IMRN 2024）：单纯形乘积棱柱 $\Delta_{n-1}\times\Delta_{1}$ 的三角剖分、内部单形与 $\mathbb{A}$ 型预投射代数的 support $\tau$-tilting 对、two-term silting 复形之间存在自然双射。</li>
  <li><strong>perverse schobers</strong>（Christ, arXiv:2509.01689, 2025）：在带边界曲面上的 perverse schober 框架中研究精确 $\infty$-范畴的丛倾斜子范畴的粘合性质，给出高阶秩拓扑 Fukaya 范畴（高阶 Teichmüller 理论）与带穿孔标记曲面的新例子。</li>
</ul>

<h3 class="ar-subhead" id="ar-gm-3">3　主要应用与实例</h3>

<h4 id="ar-gm-3-1">3.1　gentle 代数：剖分 ↔ 代数</h4>
<p>可容许剖分与（局部）gentle 代数之间的双射是全部应用的起点：弧 ↔ 顶点，角 ↔ 箭图，被切出的多边形 ↔ 长度 2 的零关系。由此可"读出"代数的表示型、Gorenstein 性、导出等价类等（详见"Gentle Algebra"面板）。</p>

<h4 id="ar-gm-3-2">3.2　skew-gentle、Brauer 图代数</h4>
<p><strong>skew-gentle 代数</strong>（特征 $\neq2$ 时为 gentle 代数对二阶循环群的斜群代数）已有相应的曲面模型（带"锥奇点"或额外装饰的曲面）。<strong>Brauer 图代数</strong>（对称特殊多重串行代数）则对应带装饰的超图（Brauer configuration），其管（tube）与 Green 行走可由超图的组合读出——虽非严格意义的"曲面模型"，但方法论同源。</p>

<h4 id="ar-gm-3-3">3.3　丛代数与高阶 Teichmüller 理论</h4>
<p>曲面三角剖分 ↔ 丛（2.2）是 Fock–Goncharov 高阶 Teichmüller 理论、局部系统模空间的正坐标、以及丛代数有限型分类（Fomin–Zelevinsky 的 $\mathbb{A}$/$\mathbb{D}$/$\mathbb{E}$ 与"曲面型"）的共同基础；带穿孔的曲面则对应"带系数"的丛结构与 Christ 的 perverse schober 模型。</p>

<h4 id="ar-gm-3-4">3.4　同调镜像对称的"可算中介"</h4>
<p>由 2.6，gentle 代数把 HMS 的两侧都变成可计算的组合对象：A 侧是部分包裹 Fukaya 范畴（曲线与相交），B 侧是节点栈曲线上的凝聚层（Lekili–Polishchuk）。这使得一些原本困难的等价性/分类问题可在曲面上一一核对。</p>

<h4 id="ar-gm-3-5">3.5　用曲面组合学构造反例</h4>
<p>Schroll 在 2025 年的综述报告中强调：曲面组合学不仅能回答开放问题，也能<em>构造反例</em>。典型流程是：先在曲面上构造具有指定性质的弧/剖分配置，再翻译回代数侧，从而否定若干"自然的"猜想（如某些导出不变量的完备性、某些不变量的区分能力）。</p>

<h4 id="ar-gm-3-6">3.6　局部化的几何解释</h4>
<p>对 $\mathrm{per}(A)$ 中球面带对象（对应简单闭曲线）生成的子范畴作局部化，几何上即<em>收缩</em>该闭曲线，得到一个带<strong>锥奇点</strong>的曲面；代数侧对应"分级捏合 gentle 代数"，并有 recollement 描述（Bodin, arXiv:2407.04374）。这是"范畴运算 ↔ 曲面手术"字典的又一实例。</p>

<h3 class="ar-subhead" id="ar-gm-4">4　与邻近概念的关系</h3>

<h4 id="ar-gm-4-1">4.1　与丛理论</h4>
<p>曲面模型是丛范畴的组合化身：三角剖分 ↔ 丛，翻转 ↔ 突变，弧 ↔ 丛变量（经丛特征标）。丛代数的加性范畴化正是通过这一模型获得直观与计算力。</p>

<h4 id="ar-gm-4-2">4.2　与 gentle / 字符串代数</h4>
<p>gentle 代数的全部三类模型（模、导出、Fukaya）最为完整；字符串代数已有模范畴模型（2024）；特殊双串行代数的完整模型仍是开放方向。</p>

<h4 id="ar-gm-4-3">4.3　与 silting / $\tau$-tilting</h4>
<p>见 2.8：silting 对象 = 剖分，突变 = 翻转/替换，support $\tau$-tilting = 相容弧组。这也是 $\tau$-tilting 理论与丛代数在几何层面的统一。</p>

<h4 id="ar-gm-4-4">4.4　与 Fukaya 范畴</h4>
<p>部分包裹 Fukaya 范畴（HKK）是几何模型的辛几何原型；$\mathbf{D}^{b}(A)\simeq\mathcal{W}(\Sigma)$（同调光滑时）把两者等同。</p>

<h4 id="ar-gm-4-5">4.5　与高维 AR 理论、多面体组合</h4>
<p>循环多胞形 ↔ 高维丛倾斜对象、棱柱 ↔ $\mathbb{A}$ 型预投射代数的 $\tau$-tilting，说明"几何模型"正从曲面走向多面体与高维范畴（2.9）。</p>

<h4 id="ar-gm-4-6">4.6　总表</h4>
<table>
<thead><tr><th>代数 / 范畴</th><th>几何载体</th><th>模型强度</th></tr></thead>
<tbody>
<tr><td>字符串代数（模范畴）</td><td>带标签铺砌曲面</td><td>对象 + 态射 + AR + $\tau$-tilting 分类 🟢</td></tr>
<tr><td>gentle（模范畴）</td><td>带标记曲面的剖分</td><td>完整 🟢</td></tr>
<tr><td>分级 gentle（$\mathrm{per}$、$\mathbf{D}^{b}$）</td><td>分级标记曲面（ribbon 图加厚）</td><td>完整（含锥 ↔ 解交叉）🟢</td></tr>
<tr><td>gentle（Fukaya 侧）</td><td>部分包裹 Fukaya 范畴</td><td>同调光滑时等价 🟢</td></tr>
<tr><td>曲面型丛范畴</td><td>带标记曲面（弧）</td><td>完整 🟢</td></tr>
<tr><td>高维丛范畴</td><td>循环多胞形三角剖分</td><td>丛倾斜对象层面 🟢</td></tr>
<tr><td>$\mathbb{A}$ 型预投射代数</td><td>棱柱三角剖分</td><td>$\tau$-tilting / silting 层面 🟢</td></tr>
<tr><td>特殊双串行代数</td><td>尚无完整曲面模型</td><td>开放 🟡</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-gm-5">5　常见混淆与易错点</h3>
<ul>
  <li><strong>模范畴模型 $\neq$ 导出范畴模型</strong>：前者用弧，后者用<em>分级</em>弧；不分级的对象不能直接当作复形。</li>
  <li><strong>$\mathrm{per}(A)$ 与 $\mathbf{D}^{b}(A)$</strong>：OPS 模型直接给出 $\mathrm{per}$；$\mathbf{D}^{b}$（有限维上同调）需要额外的Booth–Goodbody–Opper 型结果。</li>
  <li><strong>穿孔 / 内部标记点</strong>：常对应无限整体维数或 Gorenstein 现象，删除它会改变模型适用范围。</li>
  <li><strong>闭曲线带参数</strong>：一维族（band）对应带 $k[x,x^{-1}]$-模的参数，不能只按"一条曲线一个对象"计数。</li>
  <li><strong>相交数 = 态射维数需分级/定向修正</strong>：不是所有几何相交都贡献态射，须满足分级相容条件。</li>
  <li><strong>同调光滑假设</strong>：$\mathbf{D}^{b}(A)\simeq\mathcal{W}(\Sigma)$ 并非无条件成立。</li>
  <li><strong>文献状态</strong>：OPS 的 arXiv 版本仍在更新（v7, 2025），引用时注意版本与是否已被期刊接收。</li>
</ul>

<h3 class="ar-subhead" id="ar-gm-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> M. C. R. Butler, C. M. Ringel, <i>Auslander–Reiten sequences with few middle terms and applications to string algebras</i>, Comm. Algebra <b>15</b> (1987), 145–179.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> S. Fomin, M. Shapiro, D. Thurston, <i>Cluster algebras and triangulated surfaces I: Cluster complexes</i>, Acta Math. <b>201</b> (2008), 83–146.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> V. Fock, A. Goncharov, <i>Moduli spaces of local systems and higher Teichmüller theory</i>, Publ. Math. IHÉS <b>103</b> (2006), 1–211.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> T. Brüstle, J. Zhang, <i>On the cluster category of a marked surface without punctures</i>, Algebra Number Theory <b>5</b> (2011), 529–566.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> S. Schroll, <i>Trivial extensions of gentle algebras and Brauer graph algebras</i>, J. Algebra <b>444</b> (2015), 183–200（ribbon 图与曲面的代数化）.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> F. Haiden, L. Katzarkov, M. Kontsevich, <i>Flat surfaces and stability structures</i>, Publ. Math. IHÉS <b>126</b> (2017), 247–318.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> S. Opper, P.-G. Plamondon, S. Schroll, <i>A geometric model for the derived category of gentle algebras</i>, arXiv:1801.09659（v7, 2025）.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> C. Amiot, P.-G. Plamondon, S. Schroll, <i>A complete derived invariant for gentle algebras via winding numbers and Arf invariants</i>, Selecta Math. (N.S.) <b>29</b> (2023), Paper No. 30.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> Y. Lekili, A. Polishchuk, <i>Derived equivalences of gentle algebras via Fukaya categories</i>（2019，预印本）.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> K. Baur, R. Coelho Simões, <i>A geometric model for the module category of a string algebra</i>, arXiv:2403.07810 (2024).</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> S. Oppermann, H. Thomas, <i>Higher-dimensional cluster combinatorics and representation theory</i>, J. Eur. Math. Soc. <b>14</b> (2012), 1679–1737.</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> O. Iyama, N. J. Williams, <i>Triangulations of prisms and preprojective algebras of type $\mathbb{A}$</i>, IMRN <b>2024</b>, no. 13, 10236–10254.</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> P. Bodin, <i>Recollements for graded gentle algebras from spherical band objects</i>, arXiv:2407.04374 (2025).</p>
<p class="ar-ref"><span class="ar-ref-no">[14]</span> M. Christ, <i>Induction in perverse schobers and cluster tilting theory</i>, arXiv:2509.01689 (2025).</p>
<p class="ar-ref"><span class="ar-ref-no">[15]</span> S. Schroll, <i>Geometric surface models from representation theory</i>（海德堡大学数学讨论班报告，2025-12-11）.</p>
</div>
</div>
