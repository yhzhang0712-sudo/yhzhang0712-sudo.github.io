---
title: "ttg"
headless: true
date: 2026-09-29
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
<a class="ar-toc-l1" href="#ar-ttg-0">0　记号与约定</a>
    <a class="ar-toc-l1" href="#ar-ttg-1">1　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-ttg-1-0">1.0　记号与 tt-范畴的公理</a>
    <a class="ar-toc-l2" href="#ar-ttg-1-1">1.1　素理想与 Balmer 谱</a>
    <a class="ar-toc-l2" href="#ar-ttg-1-2">1.2　支撑与泛性质</a>
    <a class="ar-toc-l2" href="#ar-ttg-1-3">1.3　大范畴一侧：Balmer–Favi 支撑与 smashing 局部化</a>
    <a class="ar-toc-l2" href="#ar-ttg-1-4">1.4　层化与局部—全局原理</a>
    <a class="ar-toc-l2" href="#ar-ttg-1-5">1.5　变体：非交换、等变与非刚性</a>
    <a class="ar-toc-l1" href="#ar-ttg-2">2　核心工具与定理</a>
    <a class="ar-toc-l2" href="#ar-ttg-2-1">2.1　Balmer 分类定理</a>
    <a class="ar-toc-l2" href="#ar-ttg-2-2">2.2　Thomason 定理</a>
    <a class="ar-toc-l2" href="#ar-ttg-2-3">2.3　Hopkins–Smith 与色度层</a>
    <a class="ar-toc-l2" href="#ar-ttg-2-4">2.4　模表示论：Benson–Carlson–Rickard</a>
    <a class="ar-toc-l2" href="#ar-ttg-2-5">2.5　Neeman 的 $\mathbf{D}(R)$ 谱</a>
    <a class="ar-toc-l2" href="#ar-ttg-2-6">2.6　层化定理与望远镜猜想之死</a>
    <a class="ar-toc-l2" href="#ar-ttg-2-7">2.7　下降、栈与等变</a>
    <a class="ar-toc-l2" href="#ar-ttg-2-8">2.8　格论重构与 Hochster 对偶</a>
    <a class="ar-toc-l1" href="#ar-ttg-3">3　主要应用与实例</a>
    <a class="ar-toc-l2" href="#ar-ttg-3-1">3.1　标准谱表</a>
    <a class="ar-toc-l2" href="#ar-ttg-3-2">3.2　有限群的稳定模范畴</a>
    <a class="ar-toc-l2" href="#ar-ttg-3-3">3.3　等变稳定同伦与 Mackey 函子</a>
    <a class="ar-toc-l2" href="#ar-ttg-3-4">3.4　非刚性：箭图与伪凝聚复形</a>
    <a class="ar-toc-l2" href="#ar-ttg-3-5">3.5　奇点与 Landau–Ginzburg 模型</a>
    <a class="ar-toc-l2" href="#ar-ttg-3-6">3.6　全局表示与 VI-模</a>
    <a class="ar-toc-l2" href="#ar-ttg-3-7">3.7　非交换 tt-几何</a>
    <a class="ar-toc-l1" href="#ar-ttg-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l2" href="#ar-ttg-4-1">4.1　与 $\infty$-范畴</a>
    <a class="ar-toc-l2" href="#ar-ttg-4-2">4.2　与可逼近性</a>
    <a class="ar-toc-l2" href="#ar-ttg-4-3">4.3　与支撑簇 / 模表示论</a>
    <a class="ar-toc-l2" href="#ar-ttg-4-4">4.4　与奇点范畴</a>
    <a class="ar-toc-l2" href="#ar-ttg-4-5">4.5　与 Neeman 度量</a>
    <a class="ar-toc-l2" href="#ar-ttg-4-6">4.6　总表</a>
<a class="ar-toc-l1" href="#ar-ttg-5">5　常见混淆与易错点</a>
    <a class="ar-toc-l1" href="#ar-ttg-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body">
<h3 class="ar-subhead" id="ar-ttg-0">0　记号与约定</h3>
<p>全书约定：$\mathscr{K}$ 记<strong>本质小</strong> tt-范畴（研究其厚理想）；$\mathscr{T}$ 记<strong>刚性紧生成</strong>大 tt-范畴（研究其局部化理想）；$\mathscr{T}^{c}\subseteq\mathscr{T}$ 为其紧对象子范畴（本质小 tt-范畴）。$\otimes$、$\mathbf{1}$ 记单oidal积与单位对象。</p>
<table>
<thead><tr><th>符号</th><th>含义</th></tr></thead>
<tbody>
<tr><td>$\mathrm{Thick}(\mathscr{S})$、$\langle\mathscr{S}\rangle$</td><td>由 $\mathscr{S}$ 生成的厚子范畴</td></tr>
<tr><td>$\mathrm{Locid}(\mathscr{S})$</td><td>由 $\mathscr{S}$ 生成的局部化（张量）理想</td></tr>
<tr><td>$\mathscr{P}$、$\mathfrak{p}$</td><td>素张量理想；Balmer 谱的点</td></tr>
<tr><td>$\mathrm{Spc}(\mathscr{K})$</td><td>Balmer 谱</td></tr>
<tr><td>$\mathrm{supp}(a)$</td><td>$\{\mathfrak{p}\mid a\notin\mathfrak{p}\}$，小范畴侧的支撑（开子集）</td></tr>
<tr><td>$\mathrm{Supp}(t)$</td><td>Balmer–Favi 大支撑（点的集合）</td></tr>
<tr><td>$e_{Y}$、$f_{Y}$</td><td>Thomason 子集 $Y$ 的左 / 右 Rickard 幂等元</td></tr>
<tr><td>$g(\mathfrak{p})$</td><td>$e_{Y_{1}}\otimes f_{Y_{2}}$，素点 $\mathfrak{p}$ 的幂等元</td></tr>
<tr><td>Thomason 子集</td><td>可写成若干对象支撑之并的子集（等价于在 Hochster 对偶拓扑中闭）</td></tr>
<tr><td>$Y^{\vee}$</td><td>谱空间的 Hochster 对偶</td></tr>
</tbody>
</table>
<p>约定：①$\mathrm{Spc}$ 只对<em>本质小</em> tt-范畴定义；对大范畴 $\mathscr{T}$，谱指 $\mathrm{Spc}(\mathscr{T}^{c})$。②未声明时 $\otimes$ 为对称单oidal。③“理想”默认指张量理想。④谱上的拓扑默认 Zariski 拓扑，闭集为 $Z(S)=\{\mathfrak{p}\mid S\subseteq\mathfrak{p}\}$。</p>

<h3 class="ar-subhead" id="ar-ttg-1">1　概念与定义</h3>

<h4 id="ar-ttg-1-0">1.0　记号与 tt-范畴的公理</h4>
<p><strong>定义</strong>：一个<strong>张量三角范畴</strong>（tensor-triangulated category，简称 tt-范畴）是一个三角范畴 $\mathscr{K}$ 配一个对称单oidal 结构 $(\otimes,\mathbf{1})$，使得 $\otimes$ 对每个变量都是正合的（双正合）。若不额外声明，默认讨论<strong>本质小</strong> tt-范畴（如 $\mathbf{D}^{\mathrm{perf}}(X)$）；大范畴（如 $\mathbf{D}_{\mathrm{qc}}(X)$、$\mathrm{Sp}$）通常在<strong>刚性紧生成</strong>（rigidly-compactly generated）框架下处理。</p>
<p>基本术语：</p>
<ul>
  <li><strong>厚子范畴</strong>：对平移、锥与直和因子封闭的全三角子范畴；</li>
  <li><strong>张量理想</strong> $\mathscr{I}\subseteq\mathscr{K}$：厚子范畴且 $a\in\mathscr{I},x\in\mathscr{K}\Rightarrow a\otimes x\in\mathscr{I}$；</li>
  <li><strong>根式</strong>：$a^{\otimes n}\in\mathscr{I}\Rightarrow a\in\mathscr{I}$；</li>
  <li><strong>刚性</strong>（rigid / dualizable）：对象 $a$ 有对偶 $a^{\vee}$，使 $a\otimes -\dashv a^{\vee}\otimes-$。刚性使支撑理论具备良好性质，但<em>不是</em>谱存在的必要前提（见 1.5、3.4）。</li>
</ul>
<p>直觉：tt-范畴应被看作<strong>范畴化的交换环</strong>——其"谱"理论与交换环的 Zariski 谱平行展开。</p>

<h4 id="ar-ttg-1-1">1.1　素理想与 Balmer 谱</h4>
<p><strong>定义（素张量理想）</strong>：真张量理想 $\mathscr{P}\subsetneq\mathscr{K}$ 称为<strong>素</strong>的，若 $a\otimes b\in\mathscr{P}\Rightarrow a\in\mathscr{P}$ 或 $b\in\mathscr{P}$。</p>
<p><strong>定义（Balmer 谱）</strong>：$\mathrm{Spc}(\mathscr{K}):=\{\mathscr{P}\subset\mathscr{K}\mid\mathscr{P}\ \text{素张量理想}\}$，其拓扑以</p>
$$Z(S):=\{\mathscr{P}\in\mathrm{Spc}(\mathscr{K})\mid S\subseteq\mathscr{P}\}\qquad(S\subseteq\mathscr{K}\ \text{任意子集}) \ \text{的有限并与任意交为闭集}.$$
<p>对象 $a$ 的<strong>支撑</strong>为 $\mathrm{supp}(a):=\{\mathscr{P}\mid a\notin\mathscr{P}\}=\mathrm{Spc}(\mathscr{K})\setminus Z(\{a\})$，因而是<em>开</em>集。</p>
<p><strong>基本性质（直接由定义推出）</strong>：$\mathrm{supp}(0)=\varnothing$；$\mathrm{supp}(\mathbf{1})=\mathrm{Spc}(\mathscr{K})$；$\mathrm{supp}(a\oplus b)=\mathrm{supp}(a)\cup\mathrm{supp}(b)$；$\mathrm{supp}(\Sigma a)=\mathrm{supp}(a)$；对区分三角 $a\to b\to c\to\Sigma a$ 有 $\mathrm{supp}(b)\subseteq\mathrm{supp}(a)\cup\mathrm{supp}(c)$；且</p>
$$\mathrm{supp}(a\otimes b)=\mathrm{supp}(a)\cap\mathrm{supp}(b),$$
<p>其中 “$\subseteq$” 由理想性质给出，“$\supseteq$” 由素性给出。</p>
<p><strong>定理（Balmer）</strong>：$\mathrm{Spc}(\mathscr{K})$ 是<strong>谱空间</strong>（spectral space）：拟紧、有由拟紧开集构成的基、任意两个拟紧开集之交仍拟紧、每个不可约闭集有泛点。此外每个 $\mathrm{supp}(a)$ 拟紧，全体 $\mathrm{supp}(a)$ 构成一组拓扑基。</p>

<h4 id="ar-ttg-1-2">1.2　支撑与泛性质</h4>
<p>Balmer 的核心发现是：$\mathrm{Spc}(\mathscr{K})$ 是<strong>支撑理论的泛受体</strong>。精确地说，一个（取值于拓扑空间的）支撑数据 $(X,\sigma)$ 由映射 $a\mapsto\sigma(a)\subseteq X$ 组成并满足上列形式性质；则存在唯一连续映射 $\varphi:X\to\mathrm{Spc}(\mathscr{K})$ 使 $\sigma(a)=\varphi^{-1}(\mathrm{supp}(a))$。</p>
<p>这与交换环的情形完全平行：$\mathrm{Spec}(R)$ 是 $R$-模支撑理论的泛受体；$\mathrm{Spc}(\mathscr{K})$ 是 tt-范畴支撑理论的泛受体。它同时解释了为何许多"先于 Balmer 的分类定理"可以被统一重述（Thomason、Neeman、Hopkins–Smith、Benson–Carlson–Rickard）。</p>

<h4 id="ar-ttg-1-3">1.3　大范畴一侧：Balmer–Favi 支撑与 smashing 局部化</h4>
<p><strong>设定</strong>：$\mathscr{T}$ 刚性紧生成，$\mathscr{T}^{c}$ 本质小。目标从“分类厚理想”变为“分类<em>局部化</em>张量理想”——局部化理想指对任意余积封闭的三角子范畴。</p>
<p><strong>Rickard 幂等元</strong>：对 $\mathrm{Spc}(\mathscr{T}^{c})$ 的 Thomason 子集 $Y$，存在（本质唯一的）区分三角</p>
$$e_{Y}\longrightarrow\mathbf{1}\longrightarrow f_{Y}\longrightarrow\Sigma e_{Y},$$
<p>其中 $e_{Y}\otimes e_{Y}\simeq e_{Y}$、$f_{Y}\otimes f_{Y}\simeq f_{Y}$、$e_{Y}\otimes f_{Y}\simeq 0$；$e_{Y}$ 扮演“支撑在 $Y$ 上”的角色、$f_{Y}$ 扮演“支撑在补集上”的角色。</p>
<p><strong>素点的幂等元</strong>：设谱<strong>弱诺特</strong>，即每个点可写成 $Y_{1}\cap(\mathrm{Spc}\setminus Y_{2})$（$Y_{1},Y_{2}$ 为 Thomason 子集）。对 $\mathfrak{p}$ 取这样的表示，置 $g(\mathfrak{p}):=e_{Y_{1}}\otimes f_{Y_{2}}$——可以证明这与表示的选取无关。</p>
<p><strong>Balmer–Favi 支撑</strong>：$\mathrm{Supp}(t):=\{\mathfrak{p}\in\mathrm{Spc}(\mathscr{T}^{c})\mid g(\mathfrak{p})\otimes t\neq 0\}$。</p>
<p><strong>由此得到分类映射</strong>：$\mathscr{L}\mapsto\mathrm{Supp}(\mathscr{L}):=\bigcup_{t\in\mathscr{L}}\mathrm{Supp}(t)$，从局部化张量理想到 $\mathrm{Spc}(\mathscr{T}^{c})$ 的子集；它为双射即<strong>层化</strong>（见 1.4）。</p>

<h4 id="ar-ttg-1-4">1.4　层化与局部—全局原理</h4>
<p><strong>定义</strong>：$\mathscr{T}$ 称为<strong>层化</strong>的，若 $\mathscr{L}\mapsto\mathrm{Supp}(\mathscr{L})$ 为双射。Barthel–Heard–Sanders 证明（基于 Stevenson 的进路）层化等价于两条性质同时成立：</p>
<ol>
  <li><strong>极小性</strong>：对每个 Balmer 素点 $\mathfrak{p}$，$\mathrm{Locid}(g(\mathfrak{p}))$ 在所有非零局部化张量理想中极小；</li>
  <li><strong>局部—全局原理</strong>（local-to-global principle）：对每个 $t\in\mathscr{T}$ 有 $t\in\mathrm{Locid}\big(t\otimes g(\mathfrak{p})\mid \mathfrak{p}\in\mathrm{Spc}(\mathscr{T}^{c})\big)$。</li>
</ol>
<p>已知结果：$\mathrm{Spc}(\mathscr{T}^{c})$ 为诺特空间时局部—全局原理成立（BHS）；Stevenson 进一步证明 $\mathrm{Spc}(\mathscr{T}^{c})$ 的 Hochster 对偶<strong>散</strong>（scattered）时成立；后续工作把拓扑假设弱化到只要求支撑本身为诺特子空间 / 在 Hochster 对偶中散。反例侧：绝对平坦（von Neumann 正则）环 $R$ 的 $\mathbf{D}(R)$ 在非半阿廷情形<em>不满足</em>局部—全局原理。</p>

<h4 id="ar-ttg-1-5">1.5　变体：非交换、等变与非刚性</h4>
<ul>
  <li><strong>非交换 tt-几何</strong>：若 $\mathscr{K}$ 只是<em>单oidal</em>（不必对称、不必本质小）三角范畴，"素理想"与谱的定义需要重铸。De Deyn–Miller（arXiv:2510.23767）证明：给定任意本质小单oidal 三角范畴的 Balmer 谱，可由其"伪 Hochster 对偶"给出<em>半素</em>厚张量理想的分类，把 Balmer 的根式理想分类推广到非交换情形；并刻画了非交换谱何时表现得像 tt-几何中的谱（即何时为谱空间、其拟紧开集恰为支撑之补），刚性<em>中心生成</em>的单oidal 三角范畴满足该性质。</li>
  <li><strong>等变 tt-几何</strong>：群 $G$ 以张量自等价作用于 $\mathscr{K}$ 时引入 $G$-素理想与 $G$-谱 $G\text{-}\mathrm{Spc}(\mathscr{K})$，分类 $G$-不变厚理想；交叉积 / 等变化范畴的谱在适当假设下为其拓扑商。</li>
  <li><strong>非刚性 / 非紧生成</strong>：缺少刚性或紧生成时谱可急剧复杂化（见 3.4）。</li>
</ul>

<h3 class="ar-subhead" id="ar-ttg-2">2　核心工具与定理</h3>

<h4 id="ar-ttg-2-1">2.1　Balmer 分类定理</h4>
<p><strong>定理 2.1（Balmer, 2005）</strong>：<strong>设</strong> $\mathscr{K}$ 为本质小 tt-范畴。<strong>则</strong>映射</p>
$$\mathscr{I}\ \longmapsto\ \mathrm{supp}(\mathscr{I}):=\bigcup_{a\in\mathscr{I}}\mathrm{supp}(a)$$
<p>是从 $\mathscr{K}$ 的<strong>根式厚张量理想</strong>到 $\mathrm{Spc}(\mathscr{K})$ 的 <strong>Thomason 子集</strong>（即可写成对象支撑之并的子集）的保序<em>双射</em>，其逆为</p>
$$Y\ \longmapsto\ \mathscr{K}_{Y}:=\{a\in\mathscr{K}\mid\mathrm{supp}(a)\subseteq Y\}.$$
<p><strong>特例</strong>：当 $\mathrm{Spc}(\mathscr{K})$ 为诺特空间时，Thomason 子集 = specialization-闭子集，故分类简化为按 specialization-闭子集分类。<strong>语义</strong>：$\mathrm{Spc}(\mathscr{K})$ 完整编码了“对象 $b$ 能否由对象 $a$ 经 tt-范畴允许的运算（平移、锥、直和因子、与任意对象取张量积）构造出来”这一问题的答案。</p>

<h4 id="ar-ttg-2-2">2.2　Thomason 定理</h4>
<p><strong>定理 2.2</strong>：设 $X$ 拟紧拟分离（qcqs）。则 $\mathrm{Spc}\big(\mathbf{D}^{\mathrm{perf}}(X)\big)\cong |X|$（$X$ 的底层拓扑空间），且结构层与 Zariski 层一致。这是 tt-几何解释力的原型：一个纯粹范畴论构造出来的谱，恰好还原了概形本身。Stevenson 的 Oberwolfach 讲义（arXiv:2602.08480）给出了一个完全绕开"张量幂零"机制的新证明。</p>

<h4 id="ar-ttg-2-3">2.3　Hopkins–Smith 与色度层</h4>
<p><strong>定理 2.3（Hopkins–Smith 厚子范畴定理）</strong>：设 $\mathrm{Sp}^{\omega}$ 为有限谱范畴。对每个素数 $p$ 与高度 $n\ge0$，记 $K(n)$ 为 height-$n$ 的 Morava $K$-理论（约定 $K(0)=H\mathbb{Q}$）。对 $n\ge0$ 令</p>
$$\mathscr{C}_{n}:=\{X\in\mathrm{Sp}^{\omega}\mid K(m)_{*}(X)=0\ \text{对所有}\ m&lt;n\},\qquad \mathscr{C}_{\infty}:=\{0\}.$$
<p><strong>则</strong> $\mathrm{Sp}^{\omega}$ 的<em>全部</em>厚子范畴恰为 $\mathscr{C}_{0}\supsetneq\mathscr{C}_{1}\supsetneq\cdots\supsetneq\mathscr{C}_{\infty}$，构成严格降链（$\mathscr{C}_{0}=\mathrm{Sp}^{\omega}$，因 $m&lt;0$ 的条件为空；$\mathscr{C}_{\infty}=\{0\}$ 由幂零定理保证）。</p>
<p><strong>tt-重述</strong>：$\mathrm{Spc}(\mathrm{Sp}^{\omega})$ 的点可标为 $(p,n)$（$p$ 素数，$1\le n\le\infty$），其偏序与拓扑正是色度分层；厚子范畴的分类即谱的 specialization-闭子集的分类。这是 Balmer 理论之前最重要的厚子范畴分类结果，也是该理论的主要动机之一。</p>

<h4 id="ar-ttg-2-4">2.4　模表示论：Benson–Carlson–Rickard</h4>
<p><strong>定理 2.4</strong>：设 $G$ 有限群、$k$ 特征 $p$ 的域。稳定模范畴 $\underline{\mathrm{mod}}(kG)$（本质小，tt-结构由 $\otimes_{k}$ 给出）满足</p>
$$\mathrm{Spc}\big(\underline{\mathrm{mod}}(kG)\big)\ \cong\ \mathrm{Proj}\,H^{\bullet}(G;k),$$
<p>即群上同调环的射影谱。由此厚张量理想按 $\mathrm{Proj}H^{\bullet}(G;k)$ 的 specialization-闭子集分类——把 modular representation theory 中经典的"支撑簇"（Carlson）理论纳入统一框架。一般化：$H^{\bullet}$ 换成任意交换诺特分次环的"支撑簇"理论（Benson–Iyengar–Krause 的层化理论）。</p>

<h4 id="ar-ttg-2-5">2.5　Neeman 的 $\mathbf{D}(R)$ 谱</h4>
<p><strong>定理 2.5（Neeman）</strong>：设 $R$ 交换诺特环。则 $\mathbf{D}^{\mathrm{perf}}(R)$ 的厚子范畴与 $\mathrm{Spec}(R)$ 的 specialization-闭子集一一对应（支撑由同调给出）；在 tt-语言下即 $\mathrm{Spc}(\mathbf{D}^{\mathrm{perf}}(R))\cong\mathrm{Spec}(R)$。这是定理 2.2 在仿射情形的特例，也是 2.1 分类定理最早的重要检验场。</p>

<h4 id="ar-ttg-2-6">2.6　层化定理与望远镜猜想之死</h4>
<p><strong>定理 2.6（Barthel–Heard–Sanders，arXiv:2106.15540）</strong>：对 $\mathrm{Spc}(\mathscr{T}^{c})$ 弱诺特的刚性紧生成 tt-范畴，Balmer–Favi 支撑给出弱诺特层化的<em>泛</em>进路：局部—全局原理 + 极小性 ⟺ 层化；并据此完全分类谱 Mackey 函子范畴（对所有有限群 $G$）与 $E(n)$-局部谱 Mackey 函子的局部化张量理想，同时加强与<strong>望远镜猜想</strong>的联系。</p>
<p><strong>重大转折</strong>：Ravenel 望远镜猜想（telescopic 局部化 = chromatic 局部化）长期是 tt-几何与稳定同伦的核心猜想。<strong>Burklund–Hahn–Levy–Schlank（arXiv:2310.17459, 2023）用 K 理论反例证否了该猜想</strong>：对每个素数 $p$ 与高度 $n+1\ge 2$，telescopic 与 chromatic 局部化不同——具体地，对 $\mathbb{Z}$ 经 Adams 运算作用于 $\mathrm{BP}\langle n\rangle$ 的情形，$T(n+1)$-局部化的 $\mathrm{BP}\langle n\rangle^{h\mathbb{Z}}$ 的代数 K 理论<em>不是</em> $K(n+1)$-局部的。同文还证明 Galois 超下降、$\mathbb{A}^{1}$-不变性与 nil-不变性对 $K(n)$-局部 $E_{\infty}$-环的 $K(n+1)$-局部化 K 理论失效。这一结果使"层化 ⟹ 望远镜型结论"的推理链需要重新审视，也让 smashing 局部化的分类成为当前最活跃的开放区。</p>

<h4 id="ar-ttg-2-7">2.7　下降、栈与等变</h4>
<ul>
  <li><strong>下降</strong>（Balmer；Barthel–Castellana–Heard–Naumann–Pol–Sanders）：tt-几何中的 descent——谱在忠实平坦、ettele 等覆盖下的行为，是计算谱的主要技术。</li>
  <li><strong>代数叠</strong>：对 tame 叠 $X$ 有 $\mathrm{Spc}(\mathrm{Perf}(X))\cong|X|$（底层 Zariski 空间），并推广到有限群商叠与 Deligne–Mumford 叠；粗模空间与叠的谱之间由泛同胚（universal homeomorphism）联系。非 tame 稳定子情形下该识别可能失效。</li>
  <li><strong>等变</strong>：Patchkoria–Sanders–Wimmer 计算了导出 Mackey 函子范畴的 Balmer 谱，发现它恰好捕捉等变稳定同伦范畴谱的高度 $0$ 与高度 $\infty$ 色度层。</li>
</ul>

<h4 id="ar-ttg-2-8">2.8　格论重构与 Hochster 对偶</h4>
<p>近年的一条重要方法论线索是<strong>用格论重做整个理论</strong>（Stevenson, arXiv:2602.08480）：先引入格、frame 与 Stone 对偶，再用 Stone 对偶<em>定义</em>本质小 tt-范畴的谱，使泛性质成为同义反复。优点有三：①小范畴与大范畴、谱中的支撑与 smashing 支撑可在同一框架下统一处理；②基本对象被识别为"范畴化的格"（受 Clausen–Scholze 的范畴化 locale 启发）；③为基于具 Cantor–Bendixson 秩的空间 frame 的支撑证明了新一般形式下的局部—全局原理。</p>
<p>平行地，非刚性情形的研究揭示出谱可以是"Stone–Hochster 对偶意义下"的复杂对象（见 3.4）。</p>

<h3 class="ar-subhead" id="ar-ttg-3">3　主要应用与实例</h3>

<h4 id="ar-ttg-3-1">3.1　标准谱表</h4>
<table>
<thead><tr><th>tt-范畴 $\mathscr{K}$</th><th>$\mathrm{Spc}(\mathscr{K})$</th><th>来源</th></tr></thead>
<tbody>
<tr><td>$\mathbf{D}^{\mathrm{perf}}(R)$，$R$ 交换</td><td>$\mathrm{Spec}(R)$</td><td>Neeman / Balmer</td></tr>
<tr><td>$\mathbf{D}^{\mathrm{perf}}(X)$，$X$ qcqs</td><td>$|X|$</td><td>Thomason / Balmer</td></tr>
<tr><td>$\underline{\mathrm{mod}}(kG)$，$G$ 有限群</td><td>$\mathrm{Proj}H^{\bullet}(G;k)$</td><td>Benson–Carlson–Rickard</td></tr>
<tr><td>$\mathrm{Sp}^{\mathrm{fin}}$（有限谱）</td><td>色度谱（按 $(p,n)$ 分层，$1\le n\le\infty$）</td><td>Hopkins–Smith</td></tr>
<tr><td>$\mathrm{Perf}(X)$，$X$ tame 叠</td><td>$|X|$</td><td>Hall；Lau</td></tr>
<tr><td>矩阵分解 $\mathrm{DMF}(X,L,W)$（半张量结构）</td><td>相对奇点轨迹 $\mathrm{Sing}(X_{0}/X)$</td><td>Hirano</td></tr>
<tr><td>$\mathbf{D}(\mathcal{U};k)$（全局表示）</td><td>见 3.6，可具无穷 Krull 维数与无穷 Cantor–Bendixson 秩</td><td>Barrero–Barthel–Pol–Strickland–Williamson</td></tr>
</tbody>
</table>

<h4 id="ar-ttg-3-2">3.2　有限群的稳定模范畴</h4>
<p>这是 tt-几何在<em>代数</em>中最成熟的战场：谱 = 上同调射影谱，分类 = 支撑簇理论。其价值在于把"模表示论的组合数据（支撑簇）"与"范畴的厚子范畴格"严格等同，并为 Benson–Iyengar–Krause 的<strong>层化</strong>纲领（以交换诺特环作用的支撑理论分类局部化理想）提供了範本。</p>

<h4 id="ar-ttg-3-3">3.3　等变稳定同伦与 Mackey 函子</h4>
<p>BHS 的层化理论在此取得最完整的应用：完全分类了谱 Mackey 函子的局部化张量理想，即使相关 Balmer 谱的<em>拓扑</em>尚未完全确定。这说明 tt-几何的一个实用特征——分类有时可在拓扑信息不完整时完成。</p>

<h4 id="ar-ttg-3-4">3.4　非刚性：箭图与伪凝聚复形</h4>
<ul>
  <li><strong>箭图路代数 / 无刚性导出范畴</strong>：即使没有刚性，Balmer 谱仍可计算，并按<em>极小局部化张量理想</em>层化范畴，其显式描述由底谱与箭图顶点给出。</li>
  <li><strong>离散赋值环上的伪凝聚复形</strong>：谱反映单调序列渐近类（由同调的 Loewy 长度产生）构成的有界分配格，其 Stone–Hochster 对偶为基数巨大、序结构复杂的拓扑空间。这是"非刚性 ⟹ 谱爆炸"的标杆例子。</li>
</ul>

<h4 id="ar-ttg-3-5">3.5　奇点与 Landau–Ginzburg 模型</h4>
<p>对 Landau–Ginzburg 模型 $(X,L,W)$（$W$ 为非零因子截面），矩阵分解范畴配"hermitian 化半张量"结构后满足</p>
$$\mathrm{Spc}\big(\mathrm{DMF}(X,L,W),\widehat{\otimes}\big)\ \cong\ \mathrm{Sing}(X_{0}/X),$$
<p>其中 $X_{0}$ 为 $W$ 的零概形，拓扑取几何侧的 specialization 拓扑。即：<strong>谱可以从奇点的几何支撑直接读出</strong>。这与本页"奇点范畴 / 稳定范畴"一侧的题材直接相邻。</p>

<h4 id="ar-ttg-3-6">3.6　全局表示与 VI-模</h4>
<p>Barrero–Barthel–Pol–Strickland–Williamson（arXiv:2506.21525）从 tt-几何视角系统研究全局表示（一族有限群的外自同构群表示的相容族）的导出范畴 $\mathbf{D}(\mathcal{U};k)$，计算了初等交换 $p$-群族、循环群族、有界秩的有限交换 $p$-群族等的 Balmer 谱，并推出：有限交换 $p$-群族对应的 Balmer 谱具有<strong>无穷 Krull 维数与无穷 Cantor–Bendixson 秩</strong>。作为具体应用，给出了有限生成导出 VI-模的完全 tt-理论分类。这也解释了本页"CM Type / 周期猜想"等条目所处的更广阔背景。</p>

<h4 id="ar-ttg-3-7">3.7　非交换 tt-几何</h4>
<p>De Deyn–Miller（arXiv:2510.23767）把分类推广到非交换（单oidal 而非对称单oidal）情形：给定本质小单oidal 三角范畴的 Balmer 谱，其"伪 Hochster 对偶"给出<strong>半素</strong>厚张量理想的分类，从而把 Balmer 的根式厚张量理想分类延拓到非交换 tt-几何。技术支柱是格与 frame 的支撑数据理论，分类则是 Stone 对偶的推论。</p>

<h3 class="ar-subhead" id="ar-ttg-4">4　与邻近概念的关系</h3>

<h4 id="ar-ttg-4-1">4.1　与 $\infty$-范畴</h4>
<p>tt-范畴通常被理解为"可呈现对称单oidal 稳定 $\infty$-范畴的同伦范畴"——即 $\infty$-范畴是 tt-几何的<em>工作层</em>，tt-范畴是其可读的<em>三角影子</em>。刚性紧生成的 $\infty$-范畴为 Balmer–Favi 支撑、Rickard 幂等元与下降提供了函子性与高阶一致性；反过来，tt-几何的输出（谱、支撑、层化）是这些 $\infty$-范畴不变量在三角层面的可计算投影。</p>

<h4 id="ar-ttg-4-2">4.2　与可逼近性</h4>
<p>二者都以"如何从一个三角范畴的内在信息重建其子范畴"为主题，但取向不同：可逼近性以<em>t-结构与度量</em>为工具，重建 $\mathscr{T}^{c}$ 与 $\mathscr{T}^{b}_{c}$ 等<em>子范畴</em>并证明其内在性；tt-几何以<em>张量结构与素理想</em>为工具，分类厚 / 局部化张量理想。在几何情形两者互补：$\mathbf{D}_{\mathrm{qc}}(X)$ 的可逼近性控制 $\mathbf{D}^{\mathrm{perf}}(X)$ 与 $\mathbf{D}^{b}_{\mathrm{coh}}(X)$ 的关系，而 $\mathrm{Spc}(\mathbf{D}^{\mathrm{perf}}(X))\cong|X|$ 控制其厚子范畴格。据现有文献，两者之间除共引外尚无系统性的形式桥梁——是明确的开放地带。</p>

<h4 id="ar-ttg-4-3">4.3　与支撑簇 / 模表示论</h4>
<p>tt-几何把 Carlson 的支撑簇、Benson–Iyengar–Krause 的层化、以及局部化理想的分类纳入同一语言：$\mathrm{Spc}=\mathrm{Proj}H^{\bullet}$ 是"谱"，支撑簇是"支撑"，BCR 分类是"Balmer 分类"的特例。</p>

<h4 id="ar-ttg-4-4">4.4　与奇点范畴</h4>
<p>奇点范畴 $\mathbf{D}_{\mathrm{sing}}(X)$ 本身通常<em>不是</em>tt-范畴（缺少自然的对称单oidal 结构），但：$\mathrm{Spc}$ 可从奇点轨迹读出（3.5）；$\mathbf{D}_{\mathrm{sing}}$ 是诺特概形的导出不变量（可逼近性一侧的定理）；其局部化列（Sun–Zhang 型）与 tt-几何的局部化序列从两个方向看同一批对象。</p>

<h4 id="ar-ttg-4-5">4.5　与 Neeman 度量</h4>
<p>Neeman 的三角范畴度量（arXiv:1901.01453）与 $\mathfrak{S}$-完备化给出"$\mathscr{T}^{c}$ 的闭包"这一几何图像；tt-几何给出"厚子范畴的偏序 / 谱"。两者互补：前者控制紧对象在大范畴内的度量几何，后者控制厚子范畴的序结构。 Graves–Stevenson 对厚子范畴格与非交换谱的研究是二者之间的桥梁雏形。</p>

<h4 id="ar-ttg-4-6">4.6　总表</h4>
<table>
<thead><tr><th>邻近概念</th><th>关系方向</th><th>主要见证</th></tr></thead>
<tbody>
<tr><td>稳定 $\infty$-范畴（单oidal）</td><td>tt-范畴为其同伦投影</td><td>Lurie HA；Bonn 讨论班讲义</td></tr>
<tr><td>可逼近性</td><td>互补：子范畴重建 vs. 理想分类；缺形式桥梁</td><td>Neeman 系列；CNS</td></tr>
<tr><td>支撑簇（模表示论）</td><td>特例：$\mathrm{Spc}=\mathrm{Proj}H^{\bullet}$</td><td>Benson–Carlson–Rickard</td></tr>
<tr><td>色度同伦论</td><td>Hopkins–Smith = 谱计算</td><td>Ravenel；Hopkins–Smith</td></tr>
<tr><td>望远镜 / smashing 局部化</td><td>与层化紧密相关；望远镜猜想已证否</td><td>BHS 2106.15540；BHLS 2310.17459</td></tr>
<tr><td>奇点范畴</td><td>谱读出奇点轨迹；导出不变性</td><td>Hirano；Orlov</td></tr>
<tr><td>格论 / Stone 对偶</td><td>近年把整个理论建立在格论之上</td><td>Stevenson 2602.08480</td></tr>
<tr><td>Neeman 度量</td><td>互补：度量几何 vs. 厚子范畴格</td><td>Neeman 1901.01453</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-ttg-5">5　常见混淆与易错点</h3>
<ul class="agent-list">
  <li><span class="agent-name">谱只定义在紧对象上</span>：$\mathrm{Spc}$ 的输入是<em>本质小</em> tt-范畴；对大范畴 $\mathscr{T}$，谱指 $\mathrm{Spc}(\mathscr{T}^{c})$。写 $\mathrm{Spc}(\mathscr{T})$ 是无意义的。</li>
  <li><span class="agent-name">刚性的角色常被误置</span>：素理想与谱的<em>定义</em>不需要刚性；但 Balmer–Favi 大支撑的构造、以及“紧对象 = 可对偶”这一系列性质依赖刚性。缺少刚性时谱可能急剧复杂化（见 3.4）。</li>
  <li><span class="agent-name">Thomason 子集 ≠ specialization-闭子集</span>：二者仅在谱诺特时重合。一般谱上分类必须用 Thomason 子集——这是文献中最常见的陈述错误。</li>
  <li><span class="agent-name">望远镜猜想已证否</span>：Ravenel 望远镜猜想（telescopic 局部化 = chromatic 局部化）被 Burklund–Hahn–Levy–Schlank（arXiv:2310.17459, 2023）用 $K$ 理论反例推翻。因此<em>不能</em>从“层化成立”推出望远镜型结论。</li>
  <li><span class="agent-name">$\mathrm{Spc}(\mathbf{D}^{\mathrm{perf}}(X))\cong|X|$ 需要条件</span>：$X$ 须拟紧拟分离；对更一般的 $X$，谱可能是 $|X|$ 的某紧化或子空间。</li>
  <li><span class="agent-name">两套支撑记号</span>：$\mathrm{supp}$（小范畴侧，取值于谱的<em>开</em>子集）与 $\mathrm{Supp}$（Balmer–Favi，大范畴侧，取值于点的集合）不可混用。</li>
  <li><span class="agent-name">只分类张量理想</span>：tt-几何分类的是对 $\otimes$ 封闭的（张量）理想，不是任意厚子范畴 / 任意三角子范畴。</li>
</ul>

<h3 class="ar-subhead" id="ar-ttg-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> P. Balmer, <i>The spectrum of prime ideals in tensor triangulated categories</i>, arXiv:math/0409360; J. Reine Angew. Math. <b>588</b> (2005), 149–168.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> P. Balmer, <i>Supports and filtrations in algebraic geometry and modular representation theory</i>, Amer. J. Math. <b>129</b> (2007), 1227–1250.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> P. Balmer, G. Favi, <i>Generalized tensor idempotents and the telescope conjecture</i>, Proc. Lond. Math. Soc. <b>102</b> (2011), 1161–1185.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> R. W. Thomason, <i>The classification of triangulated subcategories</i>, Compositio Math. <b>105</b> (1997), 1–27.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> A. Neeman, <i>The chromatic tower for $\mathbf{D}(R)$</i>, Topology <b>31</b> (1992), 519–532.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> D. J. Benson, J. F. Carlson, J. Rickard, <i>Thick subcategories of the stable module category</i>, Fund. Math. <b>153</b> (1997), 59–80.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> M. J. Hopkins, J. H. Smith, <i>Nilpotence and stable homotopy theory II</i>, Ann. of Math. <b>148</b> (1998), 1–49.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> D. C. Ravenel, <i>Nilpotence and Periodicity in Stable Homotopy Theory</i>, Ann. of Math. Studies <b>128</b>, Princeton Univ. Press, 1992.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> T. Barthel, D. Heard, B. Sanders, <i>Stratification in tensor triangular geometry with applications to spectral Mackey functors</i>, arXiv:2106.15540; Cambridge J. Math. <b>11</b> (2023), 829–915.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> T. Barthel, N. Castellana, D. Heard, B. Sanders, <i>Cosupport in tensor triangular geometry</i>, arXiv:2303.13480.</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> R. Burklund, J. Hahn, I. Levy, T. M. Schlank, <i>$K$-theoretic counterexamples to Ravenel’s telescope conjecture</i>, arXiv:2310.17459 (2023).</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> G. Stevenson, <i>Some notes on tensor triangular geometry</i>（Oberwolfach 讨论班讲义, 2025）, arXiv:2602.08480.</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> M. Barrero, T. Barthel, L. Pol, N. Strickland, J. Williamson, <i>The spectrum of global representations for families of bounded rank and VI-modules</i>, arXiv:2506.21525.</p>
<p class="ar-ref"><span class="ar-ref-no">[14]</span> T. De Deyn, S. K. Miller, <i>Re-framing the classification of ideals in noncommutative tensor-triangular geometry</i>, arXiv:2510.23767.</p>
<p class="ar-ref"><span class="ar-ref-no">[15]</span> A. Neeman, <i>Metrics on triangulated categories</i>, arXiv:1901.01453; J. Pure Appl. Algebra <b>224</b> (2020).</p>
<p class="ar-ref"><span class="ar-ref-no">[16]</span> A. Canonaco, A. Neeman, P. Stellari, <i>Weakly approximable triangulated categories and enhancements: a survey</i>, arXiv:2407.05946 (2024).</p>
<p class="ar-ref"><span class="ar-ref-no">[17]</span> M. Hausmann, L. Piessevaux, <i>Tensor-Triangular Geometry</i>（Bonn 研究生讨论班讲义, SoSe 2025）.</p>
</div>
</div>
