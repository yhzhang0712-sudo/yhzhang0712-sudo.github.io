---
title: "approximable"
headless: true
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
    <a class="ar-toc-l1" href="#ar-app-1">1　概念与定义</a>
    <a class="ar-toc-l2" href="#ar-app-1-0">1.0　记号约定</a>
    <a class="ar-toc-l2" href="#ar-app-1-1">1.1　原始定义（Neeman 2018）</a>
    <a class="ar-toc-l2" href="#ar-app-1-2">1.2　稳健性：preferred equivalence class 与无关性</a>
    <a class="ar-toc-l2" href="#ar-app-1-3">1.3　内在子范畴族</a>
    <a class="ar-toc-l2" href="#ar-app-1-4">1.4　变体与相邻术语</a>
    <a class="ar-toc-l2" href="#ar-app-1-5">1.5　首批例子</a>
    <a class="ar-toc-l1" href="#ar-app-2">2　核心工具与定理</a>
    <a class="ar-toc-l2" href="#ar-app-2-1">2.1　例子的产生</a>
    <a class="ar-toc-l2" href="#ar-app-2-2">2.2　同调函子与表示性机制</a>
    <a class="ar-toc-l2" href="#ar-app-2-3">2.3　度量机制：$\mathfrak{S}$ 与完备化</a>
    <a class="ar-toc-l2" href="#ar-app-2-4">2.4　子范畴的内在性与相互传递</a>
    <a class="ar-toc-l2" href="#ar-app-2-5">2.5　增强唯一性与概形 Morita 理论</a>
    <a class="ar-toc-l2" href="#ar-app-2-6">2.6　有界 t-结构与 K-理论障碍</a>
    <a class="ar-toc-l2" href="#ar-app-2-7">2.7　权重结构与 weakly negative</a>
    <a class="ar-toc-l2" href="#ar-app-2-8">2.8　函子限制与 silting 型判据</a>
    <a class="ar-toc-l1" href="#ar-app-3">3　主要应用与实例</a>
    <a class="ar-toc-l2" href="#ar-app-3-1">3.1　标准词典</a>
    <a class="ar-toc-l2" href="#ar-app-3-2">3.2　$\mathbf{D}^{\mathrm{perf}}(X)$ 的强生成</a>
    <a class="ar-toc-l2" href="#ar-app-3-3">3.3　奇点范畴</a>
    <a class="ar-toc-l2" href="#ar-app-3-4">3.4　dg-范畴自反性与 Kuznetsov–Shinder</a>
    <a class="ar-toc-l2" href="#ar-app-3-5">3.5　概形之外的正则性刻画</a>
    <a class="ar-toc-l2" href="#ar-app-3-6">3.6　其他例子与邻近方向</a>
    <a class="ar-toc-l1" href="#ar-app-4">4　与邻近概念的关系</a>
    <a class="ar-toc-l2" href="#ar-app-4-1">4.1　紧生成与良生成</a>
    <a class="ar-toc-l2" href="#ar-app-4-2">4.2　t-结构与权重结构</a>
    <a class="ar-toc-l2" href="#ar-app-4-3">4.3　silting 与 tilting</a>
    <a class="ar-toc-l2" href="#ar-app-4-4">4.4　增强：dg、$\infty$、模型</a>
    <a class="ar-toc-l2" href="#ar-app-4-5">4.5　望远镜范畴与稳定世界</a>
    <a class="ar-toc-l2" href="#ar-app-4-6">4.6　Ohkawa 型有界性与谱</a>
    <a class="ar-toc-l2" href="#ar-app-4-7">4.7　总表</a>
    <a class="ar-toc-l1" href="#ar-app-ref">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body"><h3 class="ar-subhead" id="ar-app-1">1　概念与定义</h3>

<h4 id="ar-app-1-0">1.0　记号约定</h4>
<p>设 $\mathscr{T}$ 为带（集合指标）余积的三角范畴，$[1]$ 为平移函子。对全子范畴 $\mathscr{A},\mathscr{B}\subseteq\mathscr{T}$：</p>
<ul>
  <li>$\mathscr{A}*\mathscr{B}$：出现在三角 $A\to C\to B\to A[1]$（$A\in\mathscr{A}$，$B\in\mathscr{B}$）中的对象 $C$；</li>
  <li>$\mathrm{add}(\mathscr{A})$（resp. $\mathrm{Add}(\mathscr{A})$）：$\mathscr{A}$ 中对象的有限（resp. 任意）直和；$\mathrm{smd}(\mathscr{A})$：直和因子；</li>
  <li>$\langle\mathscr{A}\rangle:=\mathrm{smd}(\mathrm{coprod}(\mathscr{A}))$，$\overline{\langle\mathscr{A}\rangle}:=\mathrm{smd}(\mathrm{Coprod}(\mathscr{A}))$；对区间 $-\infty\le m\le n\le\infty$，记</li>
</ul>
$$G[m,n]:=\{G[i]\mid m\le -i\le n\},\qquad \langle G\rangle^{[m,n]}:=\langle G[m,n]\rangle,\qquad \overline{\langle G\rangle}^{[m,n]}:=\overline{\langle G[m,n]\rangle}.$$
<ul>
  <li>$\overline{\langle\mathscr{A}\rangle}^{[m,n]}_{1}=\mathrm{smd}(\mathrm{Add}(\mathscr{A}[m,n]))$，归纳地 $\overline{\langle\mathscr{A}\rangle}^{[m,n]}_{\ell+1}=\mathrm{smd}\big(\overline{\langle\mathscr{A}\rangle}^{[m,n]}_{1}*\overline{\langle\mathscr{A}\rangle}^{[m,n]}_{\ell}\big)$。于是 $\overline{\langle G\rangle}^{[-A,A]}_{A}$ 是由 $G$ 至多 $A$ 个平移、经至多 $A$ 步（锥、直和因子、任意余积）得到的对象——三角范畴语言中“次数 $\le n$ 的多项式”的替代物（Taylor 展开类比，Neeman, Discussion 1.1）。</li>
  <li><strong>紧性与生成</strong>：$C$ 紧当且仅当 $\mathrm{Hom}(C,-)$ 保余积；$\mathscr{T}^{c}$ 为紧对象子范畴。若 $\mathscr{T}=\overline{\langle G\rangle}^{[-\infty,+\infty]}$，则 $\mathscr{T}^{c}=\langle G\rangle^{[-\infty,+\infty]}$，称 $G$ 经典生成 $\mathscr{T}^{c}$。</li>
  <li><strong>t-结构</strong>：一对 $(\mathscr{T}^{\le 0},\mathscr{T}^{\ge 0})$，记 $\mathscr{T}^{\le n}=\mathscr{T}^{\le 0}[-n]$；两 t-结构<i>等价</i>当它们诱导等价“度量”。</li>
</ul>

<h4 id="ar-app-1-1">1.1　原始定义（Neeman，arXiv:1806.06995）</h4>
<p><strong>正式定义</strong>：带余积的三角范畴 $\mathscr{T}$ 称为<strong>可逼近的</strong>（approximable），若存在紧生成元 $G\in\mathscr{T}$、t-结构 $(\mathscr{T}^{\le 0},\mathscr{T}^{\ge 0})$ 与整数 $A>0$，使得：</p>
<ol>
  <li>$G[A]\in\mathscr{T}^{\le 0}$ 且 $\mathrm{Hom}\big(G[-A],\mathscr{T}^{\le 0}\big)=0$；</li>
  <li>对每个 $F\in\mathscr{T}^{\le 0}$，存在区分三角 $E\to F\to D\to E[1]$，其中 $D\in\mathscr{T}^{\le -1}$，$E\in\overline{\langle G\rangle}^{[-A,A]}_{A}$。</li>
</ol>
<p><strong>等价定义</strong>：设 $\mathscr{T}$ 带余积且有紧生成元 $G$：</p>
<ul>
  <li><strong>预可逼近</strong>（pre-approximable）：存在 $n>0$ 使 $\mathrm{Hom}(G,G[i])=0$ 对所有 $i>n$ 成立；</li>
  <li><strong>弱可逼近</strong>（weakly approximable）：另存在 t-结构 $\tau=(\mathscr{T}^{\leqslant 0},\mathscr{T}^{\geqslant 1})$ 与 $A>0$，满足 (i) $G\in\mathscr{T}^{\leqslant A}$，$\mathrm{Hom}(G,\mathscr{T}^{\leqslant -A})=0$；(ii) 对每个 $F\in\mathscr{T}^{\leqslant 0}$ 有三角 $E\to F\to D\to E[1]$，$E\in\overline{\langle G\rangle}^{[-A,A]}$，$D\in\mathscr{T}^{\leqslant -1}$；</li>
  <li><strong>可逼近</strong>：上述 (ii) 可加强为 $E\in\overline{\langle G\rangle}^{[-A,A]}_{A}$.</li>
</ul>
<p>三元组 $(G,\tau,A)$ 称为 <strong>(weak/strong) approximation data</strong>。</p>

<h4 id="ar-app-1-2">1.2　稳健性：preferred equivalence class 与无关性</h4>
<ul>
  <li><strong>preferred equivalence class</strong>：任何带余积与紧生成元的三角范畴中，t-结构（按诱导度量等价）存在一个 <i>preferred equivalence class</i>；凡与某紧生成元共同见证可逼近性的 t-结构必属于此类；反之若 $\mathscr{T}$ 可逼近，则该 preferred class 中<i>每个</i> t-结构与<i>每个</i>紧生成元都满足可逼近条件（Neeman v1, Facts 1.5）。</li>
  <li><strong>无关性</strong>：预/弱/可逼近性质不依赖紧生成元的选择；对任意紧生成元 $H$ 与 preferred class 中任意 t-结构 $\tau$，存在 $B>0$ 使 $(H,\tau,B)$ 为 weak approximation data（survey §3.1 (B)；Sun–Zhang §2.3.1）。</li>
  <li><strong>generator t-structure</strong>：在 Neeman 的原始表述中，该 t-结构等价于由 $G$ 生成的 t-结构（$\mathscr{T}_G^{\le 0}$ 为包含 $G[-\infty,0]$ 且对扩张、余积、直和因子封闭的最小子范畴），它是紧生成的（Hrbek–Šťovíček 意义下）。</li>
</ul>

<h4 id="ar-app-1-3">1.3　内在子范畴族</h4>
<p>固定 preferred equivalence class 中的 t-结构 $\tau$（survey §3.3；Neeman v1 §8），定义：</p>
<ul>
  <li><strong>上有界</strong> $\mathscr{T}^{-}:=\bigcup_{m\ge1}\mathscr{T}^{\leqslant m}$；<strong>下有界</strong> $\mathscr{T}^{+}:=\bigcup_{m\ge1}\mathscr{T}^{\geqslant -m}$；<strong>有界</strong> $\mathscr{T}^{b}:=\mathscr{T}^{-}\cap\mathscr{T}^{+}$；</li>
  <li><strong>紧对象</strong> $\mathscr{T}^{c}$；</li>
  <li><strong>pseudo-compact（a.k.a. pseudo-coherent） objects</strong></li>
</ul>
$$\mathscr{T}^{-}_{c}:=\bigcap_{m=1}^{\infty}\big(\mathscr{T}^{c}*\mathscr{T}^{\leqslant -m}\big),$$
<p>即 $F\in\mathscr{T}^{-}_{c}$ 当且仅当对每个 $m>0$ 有三角 $E\to F\to D\to$ 满足 $E\in\mathscr{T}^{c}$、$D\in\mathscr{T}^{\leqslant -m}$——直观上 $\mathscr{T}^{-}_{c}$ 是 $\mathscr{T}^{c}$ 在 preferred t-structure 的度量下的闭包；</p>
<ul>
  <li><strong>bounded pseudo-compact objects</strong> $\mathscr{T}^{b}_{c}:=\mathscr{T}^{b}\cap\mathscr{T}^{-}_{c}$（Sun–Zhang 术语：$\mathscr{T}^{c}$ 的<strong>bounded closure</strong>）；<strong>bounded compact objects</strong> $\mathscr{T}^{c,b}:=\mathscr{T}^{c}\cap\mathscr{T}^{b}$。</li>
</ul>
<p><strong>内在性</strong>：由于 preferred equivalence class 为 $\mathscr{T}$ 的内在不变量、等价 t-结构诱导相同度量闭包，上述子范畴都是三角范畴 $\mathscr{T}$ 的<strong>内在不变量</strong>，不依赖 preferred class 代表元与生成元（Neeman v1 Facts 1.5 (iii)–(iv)；survey Remark 3.6）。特别地，两个（弱）可逼近范畴间的三角等价 $\mathsf{F}:\mathscr{T}_1\to\mathscr{T}_2$ 限制为这些子范畴间的等价——这是“子范畴间传递”与 Morita 型定理（第 2 节）的动力来源。</p>
<p><strong>厚性</strong>：$\mathscr{T}^{-},\mathscr{T}^{+},\mathscr{T}^{b}$ 对任何带紧生成元的 $\mathscr{T}$ 都厚；若 $\mathscr{T}$ 预可逼近（$\mathrm{Hom}(G,G[n])=0,\ n\gg0$），则 $\mathscr{T}^{-}_{c}$、$\mathscr{T}^{b}_{c}$ 亦厚（Neeman v1, Proposition 8.8）。</p>
<p><strong>诺特可逼近范畴</strong>：若存在 $N>0$ 使每个 $F\in\mathscr{T}^{-}_{c}$ 落在三角 $F'\to F\to F''\to$（$F'\in\mathscr{T}^{b}_{c}$，$F''\in\mathscr{T}^{\le -N}$）中，则称 $\mathscr{T}$ 为 <strong>诺特</strong>。该条件保证 $\mathscr{T}^{b}_{c}$ 中有丰富的对象（否则“$\mathscr{T}^{b}_{c}$ 中唯一显然的对象是零”），也是 $\mathscr{T}^{c}$ 与 $\mathscr{T}^{b}_{c}$ 互相决定（定理 2.6）的前提。</p>

<h4 id="ar-app-1-4">1.4　变体与相邻术语</h4>
<ul>
  <li><strong>弱 vs. 可逼近</strong>：差别仅在层级限制——弱数据允许逼近对象 $E$ 落在 $\overline{\langle G\rangle}^{[-A,A]}$ 中任意位置（可由 $G$ 的平移经任意多个锥得到），强数据把锥个数限制为 $A$。可逼近 ⟹ 弱可逼近；反之不成立：Sun–Zhang（arXiv:2402.04954, Example 2.9）指出 $\mathbf{D}(\mathbb{Z})$ 中由 $G=\mathbb{Z}/p\mathbb{Z}$ 紧生成的子范畴<strong>弱可逼近但不可逼近</strong>。多数结构定理（子范畴内在性、函子性）只需<i>弱</i>版本——这正是 survey 系统采用弱可逼近范畴的原因；强版本服务于生成/表示性定理（第 2 节）。</li>
  <li><strong>预可逼近</strong>：仅要求 $\mathrm{Hom}(G,G[i])=0,\ i\gg0$；足以保证 $\mathscr{T}^{-}_{c},\mathscr{T}^{b}_{c}$ 的厚性与函子限制（Sun–Zhang §2.3），但不足以支撑度量完备性图景。</li>
  <li><strong>判定准则</strong>：(i) 若 $\mathrm{Hom}(G,G[n])=0$ 对所有 $n\ge1$，则 $\mathscr{T}$ 可逼近（Neeman v1, Remark 5.4 附近）；(ii) 若 $\mathrm{Hom}(G,G[>1])=0$ 则弱可逼近；若进一步 $G=\bigoplus_{1\le i\le n}G_i$ 且 $i\le j$ 时 $\mathrm{Hom}(G_i,G_j[1])=0$，则可逼近（Bondarko–Vostokov）。</li>
</ul>

<h4 id="ar-app-1-5">1.5　首批例子</h4>
<ul>
  <li>任意环 $R$ 的 $\mathbf{D}(R)$：可逼近（$G=R$，标准 t-结构，$A=1$）；对 $H^{i}(\mathscr{R})=0\ (i>0)$ 的 dga $\mathscr{R}$ 同样成立（$\mathbf{D}(\mathscr{R})$）。</li>
  <li>$\mathrm{Ho}(\mathbf{Spectra})$：可逼近，$(S^{0},\tau_{\mathrm{stan}},1)$ 给出 (strong) approximation data。</li>
  <li>$X$ 拟紧分离时的 $\mathbf{D}_{\mathrm{qc}}(X)$：可逼近——这是<i>非平凡定理</i>（证明经张量幂零/拟完美生成，见第 3 节），而非定义的一部分。</li>
  <li>$\mathbf{D}^{\mathrm{perf}}(X)$ 与 $\mathbf{D}^{b}_{\mathrm{coh}}(X)$：<strong>不</strong>可逼近（无余积）；它们以 $\mathscr{T}^{c}$ 与 $\mathscr{T}^{b}_{c}$ 的身份成为 $\mathscr{T}=\mathbf{D}_{\mathrm{qc}}(X)$ 的内在子范畴。</li>
  <li>可逼近范畴的 recollement 在合理假设下仍可逼近（粘合定理，见 2.5 的 Burke–Neeman–Pauwels 精确陈述）。</li>
</ul>

<h3 class="ar-subhead" id="ar-app-2">2　核心工具与定理</h3>

<h4 id="ar-app-2-1">2.1　例子的产生</h4>
<p><strong>定理 2.1</strong>：若（带余积的）$\mathscr{T}$ 有紧生成元 $G$ 且 $\mathrm{Hom}(G,G[n])=0$ 对所有 $n\ge1$ 成立，则 $\mathscr{T}$ 可逼近。特例：$\mathscr{T}=\mathbf{D}(R)$，$G=R$；对 $H^{i}(\mathscr{R})=0\ (i>0)$ 的 dga 亦成立。</p>
<p><strong>定理 2.2（粘合定理；Burke–Neeman–Pauwels, Forum Math. Sigma 11 (2023), Theorem 5.1）</strong>：设 $\mathbf{D}^{F}$、$\mathbf{D}^{U}$ 可逼近，$\mathbf{D}$ 紧生成，且有 recollement $\mathbf{D}^{F}\rightleftarrows\mathbf{D}\rightleftarrows\mathbf{D}^{U}$（余伴随 $i^{!},j_{*}$ 自然给出）。则 $\mathbf{D}$ 有紧生成元 $G$；若再设 $\mathrm{Hom}_{\mathbf{D}}(\Sigma^{-n}G,G)=0,\ n\gg0$，则 $\mathbf{D}$ 可逼近。同文两个伴生结果：Proposition 4.3 给出中间项子范畴的显式公式</p>
$$\mathbf{D}^{-}_{c}=\{X\mid i^{*}X\in(\mathbf{D}^{F})^{-}_{c}\ \text{且}\ j^{*}X\in(\mathbf{D}^{U})^{-}_{c}\},\qquad \mathbf{D}^{b}_{c}=\{X\mid i^{*}X\in(\mathbf{D}^{F})^{-}_{c},\ j^{*}X\in(\mathbf{D}^{U})^{b}_{c},\ i^{!}X\in(\mathbf{D}^{F})^{+}\},$$
<p>其引理集（Lemma 3.8/3.9）后被 Neeman 的表示性论文（arXiv:1804.02240）与 CNS（arXiv:2402.04605 / arXiv:2202.08861）反复使用。作者强调这为非交换代数几何中“大量三角范畴”提供了可逼近性。</p>
<p><strong>定理 2.3（相对与非交换产生，2024–2026）</strong>：Neeman（arXiv:2202.08861，经 CNS arXiv:2402.04605 §4.1 转引）对 $X$ 拟紧拟分离、$Z\subseteq X$ 闭且 $X\setminus Z$ 拟紧，证明 $\mathbf{D}_{\mathrm{qc},Z}(X)$ 弱可逼近；De Deyn–Lank–Rahul（arXiv:2408.04561、arXiv:2410.01785）、Hall–Lamarche–Lank–Peng（arXiv:2504.21125）把可逼近性与生成推广到概形上的非交换代数与代数叠。</p>

<h4 id="ar-app-2-2">2.2　同调函子与表示性机制</h4>
<p><strong>定理 2.4（两个 Brown 型表示定理）</strong>：设 $R$ 交换、$\mathscr{T}$ 为 $R$-线性可逼近三角范畴，紧生成元 $G$ 满足 $\mathrm{Hom}(G,G[n])$ 对每个 $n$ 都是有限 $R$-模。考虑 Yoneda 函子</p>
$$\mathscr{Y}:\mathscr{T}^{-}_{c}\longrightarrow\mathrm{Hom}_{R}\big([\mathscr{T}^{c}]^{\mathrm{op}},R\text{-}\mathbf{Mod}\big),\quad B\mapsto\mathrm{Hom}(-,B),\qquad \widetilde{\mathscr{Y}}:[\mathscr{T}^{-}_{c}]^{\mathrm{op}}\longrightarrow\mathrm{Hom}_{R}\big(\mathscr{T}^{b}_{c},R\text{-}\mathbf{Mod}\big),\quad A\mapsto\mathrm{Hom}(A,-).$$
<ol>
  <li>$\mathscr{Y}$ 满，本质像是 $\mathscr{T}^{c}$ 上的<strong>局部有限同调函子</strong>；复合 $\mathscr{T}^{b}_{c}\hookrightarrow\mathscr{T}^{-}_{c}$ 后全忠实，本质像为<strong>有限</strong>同调函子；</li>
  <li>在强生成假设（$\mathscr{T}=\overline{\langle G'\rangle}_{N}^{(-\infty,\infty)}$，$G'\in\mathscr{T}^{b}_{c}$）下，$\widetilde{\mathscr{Y}}$ 的对应结论成立。</li>
</ol>
<p>对在优良、有限维诺特环 $R$ 上真（proper）的 $X$，Yoneda 配对诱导 $\mathbf{D}^{b}_{\mathrm{coh}}(X)$ 与 $\mathbf{D}^{\mathrm{perf}}(X)^{\mathrm{op}}$ 上有限 $R$-线性同调函子范畴间的等价——推广 Bondal–Van den Bergh 与 Rouquier（ICM 综述版为 Neeman arXiv:2211.06587, Theorem 6.6）。</p>

<h4 id="ar-app-2-3">2.3　度量机制：$\mathfrak{S}$ 与完备化</h4>
<p><strong>度量</strong>（Neeman v1 §9）：三角范畴上的<i>度量</i>是加性子范畴的递减列 $\{\mathscr{M}_i\}_{i\in\mathbb{N}}$（$\mathscr{M}_i*\mathscr{M}_i=\mathscr{M}_i$）。对象 $X\in\mathscr{T}$ 是 $\mathscr{S}$ 中 Cauchy 列的<i>完备化</i>，若 $X=\underset{n\to\infty}{\mathrm{hocolim}}\,X_n$ 且 $X_n\in\mathscr{M}_{i_n}$、$i_n\to\infty$。构造 $\mathfrak{S}(\mathscr{S})$（Neeman arXiv:1806.06471, Definitions 2.14, 3.23）把这一概念内化：<i>good extension</i> $\mathscr{S}\to\mathscr{T}$ 指 $\mathscr{T}$ 中每个对象都是 $\mathscr{S}$ 中 Cauchy 列的完备化。</p>
<p><strong>定理 2.6（$\mathscr{T}^{c}$ 与 $\mathscr{T}^{b}_{c}$ 互相决定；arXiv:1806.06471, Theorems 0.13, 0.15）</strong>：设 $\mathscr{T}$ 可逼近（第二条陈述还需诺特性）。则</p>
<ol>
  <li>$\mathfrak{S}(\mathscr{T}^{c})=\mathscr{T}^{b}_{c}$——$\mathscr{T}^{c}$ 的 bounded closure 可由 $\mathscr{T}^{c}$ 经度量完备化 $\mathfrak{S}$ 函子性地重构（诺特时另有 $\mathfrak{S}([\mathscr{T}^{b}_{c}]^{\mathrm{op}})=[\mathscr{T}^{c}]^{\mathrm{op}}$）；</li>
  <li>反之存在从 $\mathscr{T}^{b}_{c}$ 重构 $\mathscr{T}^{c}$ 的内在配方（在论文引言所述技术条件下）。</li>
</ol>
<p>推论：诺特 $X$ 上可由 $\mathbf{D}^{\mathrm{perf}}(X)$ 单独构造 $\mathbf{D}^{b}_{\mathrm{coh}}(X)$；两范畴“互相决定”。</p>
<p><strong>优良度量（2025–2026）</strong>：Neeman, arXiv:2505.09120（$\mathscr{S}\mapsto\mathfrak{S}(\mathscr{S})^{\mathrm{op}}$ 的对合性）；Canonaco–Neeman–Stellari, arXiv:2607.12865（2026）在 $\infty$-范畴层面提升优良度量理论、大幅推广增强唯一性结果并肯定回答若干公开问题；相关基础：Neeman, arXiv:1901.01453（2019）。</p>

<h4 id="ar-app-2-4">2.4　子范畴的内在性与相互传递</h4>
<p><strong>定理 2.7（包含关系的内在性；Canonaco–Haesemeyer–Neeman–Stellari, arXiv:2402.04605, Theorems A, B；survey Theorem 3.8）</strong>：设 $\mathscr{T}$ 弱可逼近。七个内在子范畴 $\mathscr{T}^{-},\mathscr{T}^{b},\mathscr{T}^{+},\mathscr{T}^{-}_{c},\mathscr{T}^{b}_{c},\mathscr{T}^{c},\mathscr{T}^{c,b}$ 构成可换图表（survey diagram (3.2)），实线箭头为包含</p>
$$\mathscr{T}^{b}\subset\mathscr{T}^{-}\subset\mathscr{T},\quad \mathscr{T}^{b}\subset\mathscr{T}^{+}\subset\mathscr{T},\quad \mathscr{T}^{b}_{c}\subset\mathscr{T}^{-}_{c}\subset\mathscr{T},\quad \mathscr{T}^{c,b}\subset\mathscr{T}^{c}\subset\mathscr{T},\quad \mathscr{T}^{c,b}\subset\mathscr{T}^{b}_{c},$$
<p>另有一条虚线箭头 $\mathscr{T}^{c}\hookrightarrow\mathscr{T}^{b}_{c}$。<strong>定理 B</strong>：所有实线包含在三角等价下不变——给定弱可逼近 $\mathscr{T},\mathscr{T}'$ 及图表中任意两个匹配子范畴间的三角等价，该等价限制为对应较小子范畴的等价。虚线包含在下列任一额外假设下内在：(i) $\mathscr{T},\mathscr{T}'$ coherent（文中引入的技术条件，§10.1）；或 (ii) $\mathscr{T}^{c}\subseteq\mathscr{T}^{b}_{c}$ 且 $^{\perp}(\mathscr{T}^{b}_{c})\cap\mathscr{T}^{-}_{c}=\{0\}$。<strong>定理 A</strong> 处理“第一传递”：任何等价 $\mathscr{T}\to\mathscr{T}'$ 限制为 $\mathscr{T}^{\,?}\simeq{\mathscr{T}'}^{\,?}$（$?=-,+,b,c,-_{c},b_{c},c,b$）。推论：环的 Rickard 定理中 $\mathbf{D}(R\text{-Mod})\cong\mathbf{D}(S\text{-Mod})$ 蕴含其余一切等价。Haesemeyer 附录提供 coherent 情形所需的同调输入。</p>
<p><strong>内在子范畴的局部化列（Sun–Zhang, arXiv:2402.04954）</strong>：对可逼近范畴的 recollement（温和条件下），得到三角子范畴与 Verdier 商的短正合列；局部 Hom-有限诺特可逼近情形下 recollement 诱导 bounded closure $\mathscr{T}^{b}_{c}$ 的短正合列；若 recollement “向下延伸一步”则得到奇点范畴的短正合列——推广环与概形奇点范畴的经典局部化列。</p>

<h4 id="ar-app-2-5">2.5　增强唯一性与概形 Morita 理论</h4>
<p><strong>背景</strong>（survey §4.1–4.2）：$\mathscr{T}$ 的<i>增强</i>是满足 $H^{0}(\mathbf{T})\simeq\mathscr{T}$ 的 dg（或稳定 $\infty$、模型范畴）范畴 $\mathbf{T}$；唯一性指任意两个在 $\mathrm{Ho}(\mathbf{dgCat})$ 中同构。CNS 先前已证（arXiv:2101.04404, Forum Math. Sigma 2022）导出与几何范畴（Grothendieck Abel 范畴的 $\mathbf{D}(\mathscr{A})$、$\mathbf{D}_{\mathrm{qc}}(X)$、$\mathbf{D}^{\mathrm{perf}}(X)$、$\mathbf{D}^{b}_{\mathrm{coh}}(X)$ 等）增强唯一。</p>
<p><strong>定理 2.8（可逼近型范畴的增强唯一性；arXiv:2402.04605, Theorem A 部分 = survey Theorem 4.9）</strong>：设 $\mathscr{T},\mathscr{T}'$ 弱可逼近。在温和假设（代数性；$\mathscr{T}^{c}$ 或 ${\mathscr{T}'}^{c}$ 增强唯一）下，若干内在子范畴——尤其所论情形中的 $\mathscr{T}^{b}_{c}$ 与 $\mathscr{T}^{-}_{c}$——增强唯一，且这类子范畴间的三角等价可提升为增强间的等价。</p>
<p><strong>定理 2.9（Rickard 定理的巨大概括——“概形 Morita 理论”；survey Theorem 5.3）</strong>：设 $\mathscr{T},\mathscr{T}'$ 为代数弱可逼近三角范畴，且 $\mathscr{T}^{c}$ 或 ${\mathscr{T}'}^{c}$ 增强唯一。则下列等价互相蕴含（列表涵盖全部内在子范畴）：</p>
$$\mathscr{T}\cong\mathscr{T}'\ \Longleftrightarrow\ \mathscr{T}^{+}\cong{\mathscr{T}'}^{+}\ \Longleftrightarrow\ \mathscr{T}^{-}\cong{\mathscr{T}'}^{-}\ \Longleftrightarrow\ \mathscr{T}^{b}\cong{\mathscr{T}'}^{b}\ \Longleftrightarrow\ \mathscr{T}^{b}_{c}\cong{\mathscr{T}'}^{b}_{c}\ \Longleftrightarrow\ \mathscr{T}^{c}\cong{\mathscr{T}'}^{c}\ (\text{等等})$$
<p>对拟紧分离概形 $X,Y$，这确定了“哪些导出范畴一致蕴含其余一致”—— Rickard 定理是特例（$\mathscr{T}=\mathbf{D}(R)$，$\mathscr{T}'=\mathbf{D}(S)$）。相对（带支撑）版本能否推广仍是公开问题（survey, Problem 4.11）。</p>
<p><strong>定理 2.10（奇点范畴是导出不变量；survey Theorem 5.3 的推论）</strong>：对诺特 $X$，定义 $\mathbf{D}_{\mathbf{sing}}(X):=\mathbf{D}^{p,b}(X)/\mathbf{D}^{\mathrm{perf}}(X)$（$\mathbf{D}^{p,b}(X)=\mathbf{D}^{b}(\mathbf{Coh}(X))$；稳定导出范畴 $\mathbf{S}(\mathbf{Qcoh}(X))=\mathbf{K}_{\mathrm{acy}}(\mathrm{Inj}(\mathbf{Qcoh}(X)))$ 满足 $\mathbf{S}(\mathbf{Qcoh}(X))^{c}=\mathbf{D}_{\mathbf{sing}}(X)$）。survey 推出：奇点范畴是诺特概形的导出不变量，正则性（有限维诺特概形）亦然——推广 Orlov 等的经典结果。survey 还指出：诺特性是否为 qcqs 概形的导出不变量仍未知；Rickard 有一个未发表例子表明非交换环的左诺特性/左 coherent 性<strong>不是</strong>导出不变量。</p>

<h4 id="ar-app-2-6">2.6　有界 t-结构与 K-理论障碍</h4>
<p><strong>定理 2.11（Antieau–Gepner–Heller 障碍；arXiv:1610.07207, 2019 发表——经 Neeman arXiv:2208.06863, Theorems 1.1, 1.2 转引）</strong>：对带界 t-结构的稳定 $\infty$-范畴（或 Waldhausen 范畴），负 K-群消失，且其 K-理论与心（heart）的 K-理论同构。故若 $\mathbf{D}^{\mathrm{perf}}(X)$ 有非零负 K-理论，则它没有有界 t-结构——对概形而言，恰在带负 K-理论的奇异概形处构成障碍。<i>（二手转引；AGH 原文未全文取回：</i>[second-hand]<i>。）</i></p>
<p><strong>定理 2.12（Neeman, arXiv:2202.08861, Theorem 0.1）</strong>：设 $X$ 诺特有限维，$Z\subset X$ 闭，$\mathbf{D}^{\mathrm{perf}}_{Z}(X)$ 为支撑在 $Z$ 上的完美复形范畴。则 $\mathbf{D}^{\mathrm{perf}}_{Z}(X)$ 有界 t-结构 $\iff$ $Z$ 包含于 $X$ 的正则轨迹中。这推广 AGH 猜想（$Z=X$ 情形），并严格超越 K-理论障碍：存在负 K-理论消失的奇异概形（如奇异零维概形），AGH 定理不施加任何限制，但本定理表明有界 t-结构仍不存在。证明途经 $\mathbf{D}_{\mathrm{qc},Z}(X)$ 的弱可逼近性与 $\mathscr{T}^{c}$ 在 $\mathscr{T}^{b}_{c}$ 中的结构（证明梗概见伴生综述 arXiv:2208.06863 §3）。</p>

<h4 id="ar-app-2-7">2.7　权重结构与 weakly negative（Bondarko–Vostokov）</h4>
<p><strong>定理/定义 2.13（arXiv:1907.09412; Lobachevskii J. Math. 41 (2020), 151–159）</strong>：设 $\underline{C}$ 为带余积、由单一对象 $G$ 紧生成的三角范畴。</p>
<ol>
  <li>称 $G$ <strong>weakly negative</strong>，若 $\underline{C}(G,G[i])=0$ 对所有 $i>1$。weakly negative ⟹ $\underline{C}$ <i>弱可逼近</i>；（更强的 $\underline{C}(G,G[1])=0$ 即“负”，给出可逼近性，Neeman 已提及。）</li>
  <li>若进一步 $G\cong\bigoplus_{0\le i\le n}G_i$ 且 $i\le j$ 时 $\underline{C}(G_i,G_j[1])=0$，则 $\underline{C}$ <i>可逼近</i>。</li>
</ol>
<p>证明使用权重结构技术（经 $\underline{C}_{w\le0},\underline{C}_{w\ge0}$ 的扩张论证及“负生成元的扩张在局部化中仍为负生成元”的判据），从而识别出一大类带权重结构的范畴为（弱）可逼近。<i>（调查者注：这是主要的已发表“逆方向”工具——由生成元正自 Hom 消失推出可逼近性——并被 Sun–Zhang 的 Proposition 2.7 部分吸收。）</i></p>

<h4 id="ar-app-2-8">2.8　函子限制与 silting 型判据</h4>
<ul>
  <li><strong>函子限制（Sun–Zhang, arXiv:2402.04954, §2.4）</strong>：若 $\mathbf{F}:\mathscr{T}\to\mathscr{S}$ 是预可逼近范畴间、保持紧对象与余积的函子，则 $\mathbf{F}$ 限制为 $\mathscr{T}^{-}_{c}\to\mathscr{S}^{-}_{c}$。</li>
  <li><strong>silting 型生成（2026）</strong>：Chen–Sun–Zhang（arXiv:2602.14383）、H. Chen–X. Chen–Zhang（arXiv:2604.10478）、Yang（arXiv:2608.26541）处理带紧 silting 生成元的范畴——定理 2.1 生成元条件的自然非正自 Hom 推广——在可逼近平台上证明 Brown 表示性、Brown–Comenetz 对偶与有限维数定理。</li>
  <li><strong>(co)silting 检测</strong>：S2 引用图显示 arXiv:2303.06843 引用 arXiv:1806.06995，表明 silting 学界对可逼近性的接受度。<i>[未详细核实]</i></li>
</ul>

<h3 class="ar-subhead" id="ar-app-3">3　主要应用与实例</h3>

<h4 id="ar-app-3-1">3.1　标准词典</h4>
<p>理论以如下对应校准（Neeman arXiv:1806.06995；Burke–Neeman–Pauwels 引言；survey §3.3）：</p>
<table>
<thead><tr><th>抽象子范畴</th><th>$\mathscr{T}=\mathbf{D}(R)$，标准 t-结构</th><th>$\mathscr{T}=\mathbf{D}_{\mathrm{qc}}(X)$，$X$ qc 分离（后两行诺特）</th></tr></thead>
<tbody>
<tr><td>$\mathscr{T}^{-}$</td><td>$\mathbf{D}^{-}(R\text{-}\mathbf{Mod})$</td><td>$\mathbf{D}^{-}_{\mathrm{qc}}(X)$</td></tr>
<tr><td>$\mathscr{T}^{+}$</td><td>$\mathbf{D}^{+}(R\text{-}\mathbf{Mod})$</td><td>$\mathbf{D}^{+}_{\mathrm{qc}}(X)$</td></tr>
<tr><td>$\mathscr{T}^{b}$</td><td>$\mathbf{D}^{b}(R\text{-}\mathbf{Mod})$</td><td>$\mathbf{D}^{b}_{\mathrm{qc}}(X)$</td></tr>
<tr><td>$\mathscr{T}^{c}$</td><td>$\mathbf{K}^{b}(R\text{-proj})=\mathbf{D}^{\mathrm{perf}}(R)$</td><td>$\mathbf{D}^{\mathrm{perf}}(X)$</td></tr>
<tr><td>$\mathscr{T}^{-}_{c}$</td><td>$\mathbf{K}^{-}(R\text{-proj})$</td><td>$\mathbf{D}^{-}_{\mathrm{coh}}(X)$</td></tr>
<tr><td>$\mathscr{T}^{b}_{c}$</td><td>$\mathbf{K}^{-,b}(R\text{-proj})$</td><td>$\mathbf{D}^{b}_{\mathrm{coh}}(X)$</td></tr>
</tbody>
</table>
<p>理论的核心要点：右列诸项成为左列三角范畴的<strong>内在不变量</strong>，从而对环、概形、dga 等统一适用。例如带支撑的“七个经典导出范畴”（$\mathbf{D}_{\mathrm{qc},Z}(X)$、$\mathbf{D}^{-}_{\mathrm{qc},Z}(X)$、…、$\mathbf{D}^{\mathrm{perf}}(X)$、$\mathbf{D}^{b}_{\mathrm{coh}}(X)$）都可视为弱可逼近的 $\mathbf{D}_{\mathrm{qc},Z}(X)$ 的内在子范畴（arXiv:2402.04605 引言及 §10）。</p>

<h4 id="ar-app-3-2">3.2　$\mathbf{D}^{\mathrm{perf}}(X)$ 的强生成</h4>
<p><strong>定理 3.1（Neeman；见 arXiv:2211.06587, Theorem 4.2）</strong>：设 $X$ 拟紧分离。则 $\mathbf{D}^{\mathrm{perf}}(X)$ 正则（强生成）$\iff$ $X$ 有由有限整体维数环 $\mathrm{Spec}(R_i)$ 构成的开仿射覆盖。诺特分离有限维情形：$\mathbf{D}^{\mathrm{perf}}(X)$ 强生成 $\iff$ $X$ 正则。（原始 arXiv:1806.06995 v1, Theorem 7.1 经可逼近性证明同一结论。）</p>
<p><strong>定理 3.2（Neeman + Aoki；arXiv:2211.06587, Theorem 4.4）</strong>：设 $X$ 诺特、分离、有限维、拟优。则 $\mathbf{D}^{b}(\mathbf{Coh}(X))$ 正则（Aoki 的贡献去掉了 Neeman 原始论证所需的正则消解假设）。粘合论文指出：$\mathbf{D}_{\mathrm{qc}}(X)$ 的可逼近性正是使这些结果能推广到“混合特征”的原因。</p>

<h4 id="ar-app-3-3">3.3　奇点范畴</h4>
<ol>
  <li><strong>导出不变性</strong>（定理 2.10）：$\mathbf{D}_{\mathbf{sing}}(X)$ 是诺特概形的导出不变量，正则性亦然——协调并推广 Orlov 的经典结果。</li>
  <li><strong>局部化列（Sun–Zhang, arXiv:2402.04954）</strong>：对局部 Hom-有限诺特可逼近范畴的 recollement（如概形及其闭子概形所给出的），得到奇点范畴的短正合列，推广环/概形 $\mathbf{D}_{\mathbf{sing}}$ 的经典局部化列。</li>
  <li><strong>积分变换（Dutta–Lank–Rahul, arXiv:2501.13834）</strong>：利用“$\mathbf{D}^{b}_{\mathrm{coh}}(X)$ = $\mathbf{D}^{\mathrm{perf}}(X)$ 上有限上同调函子”（定理 2.4）刻画积分变换何时在诺特基上真概形的奇点范畴之间诱导正合函子——推广 Ballard–Rizzardo，并给出导出表示性的障碍。</li>
  <li><strong>有限维数作为剩余障碍</strong>：Neeman 解决 AGH 猜想后，Krause（arXiv:2307.12671）引入三角范畴的有限维数并证明环上 $\operatorname{findim}(\mathbf{D}^{\mathrm{perf}}(R))$ 有限当且仅当经典小有限维数有限；Biswas–Chen–Rahul–Parker–Zheng（arXiv:2401.00130）、H. Chen–X. Chen–Zhang（arXiv:2604.10478）、Yang（arXiv:2608.26541）在（弱）可逼近平台上建立 recollement 不等式并把有限性与经奇点范畴的有界 t-结构存在性相联系。<i>（调查者注：这是当前最活跃的分支——可逼近性提供环境语言，问题本身是经典同调代数问题。）</i></li>
</ol>

<h4 id="ar-app-3-4">3.4　dg-范畴自反性与 Kuznetsov–Shinder</h4>
<p><strong>定理 3.3（Goodbody–Raedschelders–Stevenson, arXiv:2411.09461）</strong>：利用可逼近三角范畴理论，给出真 dg-范畴在 Kuznetsov–Shinder（arXiv:2211.09418）意义下<strong>自反</strong>的判据：在真性假设下给出可逼近三角范畴之完备化的新描述，并应用于真概形、真连通 dg-代数与真概形上的 Azumaya 代数；附录证明真连通 dg-代数在任何域上都有有限维模型。这把可逼近性引入 Kuznetsov–Shinder 思想圈（自反性、hfd-封闭性、Gorenstein 性、crepant 范畴收缩），即非交换双有理几何。</p>

<h4 id="ar-app-3-5">3.5　概形之外的正则性刻画</h4>
<ul>
  <li><strong>代数叠</strong>（De Deyn–Lank–Rahul–Peng, arXiv:2504.02813, 2025）：Neeman 两个正则性刻画（强生成元 / $\mathbf{Perf}$ 上有界 t-结构）的大类诺特代数叠版本；Hall–Lamarche–Lank–Peng（arXiv:2504.21125）证明紧逼近沿叠的拟有限平坦覆盖<strong>下降</strong>（推广 Lipman–Neeman 型下降）；Lank–Peng（arXiv:2512.05026）证明 $F$-有限代数叠的 Frobenius 生成。</li>
  <li><strong>概形上的非交换代数</strong>（arXiv:2408.04561、arXiv:2410.01785）：分离诺特概形上诺特拟凝聚代数的 $\mathbf{Perf}$ 的可逼近性与 Rouquier 维数；强生成的 fppf/h/étale 下降。</li>
  <li><strong>代数空间</strong>（Hrbek–Lank–Pizzirani, arXiv:2506.18803, 2025）：代数空间 $\mathbf{D}_{\mathrm{qc}}$ 上的相对标准 t-结构紧生成；经 Thomason 滤过分类紧生成张量 t-结构——弱可逼近机器在代数空间场景所需的“紧生成 t-结构”输入。</li>
  <li><strong>t-结构分类</strong>（Clark–Lank–Rahul–Parker, arXiv:2404.08578, 2024）：诺特概形 $\mathbf{D}^{b}_{\mathrm{coh}}$ 上具给定支撑的张量 t-结构分类；存在限制到完美复形的 t-结构可检测正则性——恢复并推广 Neeman 定理。</li>
  <li><strong>单紧生成 t-结构的不可存在性</strong>（Bhaduri–De Deyn–Hrbek–Lank–Rahul, arXiv:2511.01622, 2025）：首批例子：$\mathbf{D}_{\mathrm{qc}}$ 上标准 aisle 不单紧生成的概形——划定理论“生成元 t-结构”一侧的边界。</li>
</ul>

<h4 id="ar-app-3-6">3.6　其他例子与邻近方向</h4>
<ul>
  <li>$\mathrm{Ho}(\mathbf{Spectra})$ 可逼近（survey §3.2）；Margolis 唯一性线索（arXiv:2505.10374、arXiv:2607.12865）是其增强理论续篇。</li>
  <li>Minami（arXiv:1909.06538）经可逼近性把 Ohkawa 定理（厚子范畴格的有限性）与强生成联系起来。</li>
  <li>Gratz–Stevenson（arXiv:2205.13356）研究厚子范畴格与非交换谱——内在子范畴演算的格论补充。</li>
  <li>Matoušek（arXiv:2409.01828）计算有限表示型遗传有限维代数的 $\mathbf{D}^{b}$ 的度量完备化——完备化 $\mathfrak{S}$ 的首批具体表示论例子。</li>
  <li>Rahul（arXiv:2504.11768）经度量技巧证明新 Brown 表示性定理并<strong>引入可逼近性的推广</strong>；Rahul（arXiv:2504.11772）从“compressible metrics”构造半正交分解；Rossanigo（arXiv:2606.10553）为刚性紧生成 $\infty$-范畴证明核定理（完美对象上的函子由伪凝聚对象表示）——定理 2.4 的 $\infty$-范畴回声；Hu–Liu（arXiv:2604.26199）研究 silting 诱导 (co-)t-结构的度量与限制。</li>
  <li>Chen（X.-W. Chen, arXiv:2511.15387）证明环的奇点范畴是其稳定模范畴的稳定化——$\mathbf{D}_{\mathbf{sing}}$ 应用的表示论底层。</li>
</ul>

<h3 class="ar-subhead" id="ar-app-4">4　与邻近概念的关系</h3>

<h4 id="ar-app-4-1">4.1　紧生成与良生成</h4>
<p>可逼近性预设由<strong>单一对象</strong>紧生成。与经典层级（Neeman 2001 专著；Krause 的 $\aleph_{n}$-良生成范畴）的关系：单对象紧生成 ⟹ 可逼近是<strong>额外结构</strong>——并非每个单对象紧生成范畴都（弱）可逼近（Sun–Zhang 例子 $\langle\mathbb{Z}/p\mathbb{Z}\rangle\subset\mathbf{D}(\mathbb{Z})$ 弱可逼近但不可逼近；$\mathrm{Hom}(G,G[n])\ne0$ 对无穷多个 $n>0$ 时可失败）。preferred equivalence class 与 generator t-structure 技术（arXiv:1808.05267；survey §1.2）建立在<strong>紧生成 t-结构</strong>理论（Hrbek–Šťovíček 型）之上。增强侧只经唯一性结果与良生成相连：定理 2.9 不涉及良生成假设。</p>

<h4 id="ar-app-4-2">4.2　t-结构与权重结构</h4>
<p>t-结构的正式孪生是权重结构（Bondarko；Pauwels）。接触点：(1) Bondarko–Vostokov 从权重结构型条件（weakly negative，定理 2.13）证可逼近性；(2) 可逼近性是<strong>单侧</strong>的——只逼近 $\mathscr{T}^{\le 0}$ 对象；对偶子范畴 $\mathscr{T}^{+}_{c}$（“coapproximating systems”）是新兴补充概念，目前仅见于紧 silting 假设下（Rahul arXiv:2504.11768；Chen–Sun–Zhang arXiv:2602.14383）；(3) Neeman 定理 2.12（$Z$ 非正则则无界 t-结构）与 Bondarko “$\mathbf{D}^{\mathrm{perf}}(X)$ 总带（有界）标准权重结构”在精神上对偶——两种结构划定 $\mathscr{T}^{c}$ 上可能存在什么。</p>

<h4 id="ar-app-4-3">4.3　silting 与 tilting</h4>
<p>紧 silting 对象 $S$（$\mathrm{Hom}(S,S[n])=0,\ n>0$，加生成）恰给出“预可逼近”消失；tilting 对象另满足 $\mathrm{Hom}(S,S[n])=0,\ n\ne0$。于是：$\mathrm{Hom}(G,G[\ge1])=0$（tilting 型）⟹ 可逼近（定理 2.1）；$G$ 生成的 t-结构之心为 $\mathrm{Add}(G)$-模，可逼近性从 $\mathrm{D}(\mathrm{End}(G))$ 型数据恢复“大导出范畴” $\mathbf{D}(R)$——导出-Morita（Rickard/König）作为 $G$ tilting 时定理 2.9 抽象的特例。2026 浪潮（2602.14383、2604.10478、2608.26541；2303.06843；2604.26199）把可逼近性问题系统引入 silting 理论。<i>（调查者注：silting 是“左/右”现象真正的家；系统的“单侧可逼近、双侧”词典似尚未写出——可能的研究空白。）</i></p>

<h4 id="ar-app-4-4">4.4　增强：dg、$\infty$、模型</h4>
<p>增强纲领（Bondal–Kapranov dg；Lunts–Orlov；Toën；Dugger–Shipley 模型；Antieau arXiv:1812.01526 ∞-范畴）在定理 2.8–2.9 处与可逼近性相交。要点：2024 survey 刻意与增强<strong>风味无关</strong>（“我们的最新结果大体风味无关，对全部增强类型成立”—— survey §4.1）；强唯一性（同构提升 $H^{0}$-等价到增强层）由对偶数案例研究（2505.10374）与度量论文（2607.12865）给出；定理 2.9 的唯一性假设对几何范畴经 2101.04404 自动成立——整个几何 Morita 理论坐落在 CNS 增强三部曲上。</p>

<h4 id="ar-app-4-5">4.5　望远镜范畴与稳定世界</h4>
<p>稳定导出范畴 $\mathbf{S}(\mathscr{A})=\mathbf{K}_{\mathrm{acy}}(\mathrm{Inj}\,\mathscr{A})$（Krause；Neeman 早期工作）满足 $\mathbf{S}(\mathscr{A})^{c}=\mathbf{D}_{\mathbf{sing}}$，是奇点范畴的紧生成包络；survey 定理 2.10 用之。Krause 的望远镜局部化与 Sun–Zhang 的奇点范畴局部化列从局部化一侧看同一批对象；X.-W. Chen（2511.15387）连接到稳定<em>模</em>范畴。<i>（调查者注：$\mathbf{S}(\mathscr{A})$ 本身的可逼近性状态——紧生成、$\mathscr{A}$ 有单紧生成元时亦然——似乎未在已取文集中显式陈述；核查它是自然的小课题。）</i></p>

<h4 id="ar-app-4-6">4.6　Ohkawa 型有界性与谱</h4>
<p>Minami（1909.06538）经可逼近性连接 Ohkawa 定理与强生成；Gratz–Stevenson（2205.13356）处理厚子范畴格与非交换谱。两者互补：可逼近性控制 $\mathscr{T}^{c}$ 在 $\mathscr{T}$ 内的“度量”几何，格/谱方法控制厚子范畴的偏序。据语料所知，两者间除共引外没有形式定理。</p>

<h4 id="ar-app-4-7">4.7　总表（综述者综合）</h4>
<table>
<thead><tr><th>邻近概念</th><th>关系方向</th><th>主要见证</th></tr></thead>
<tbody>
<tr><td>紧生成（单生成元）</td><td>可逼近性添加相容 t-结构与逼近</td><td>定义 §1.1；Sun–Zhang 例子</td></tr>
<tr><td>良生成</td><td>本质上独立的输入</td><td>2407.05946（survey §4.3–4.4）</td></tr>
<tr><td>t-结构（紧生成）</td><td>preferred class、generator t-structure</td><td>1808.05267；cns2402 §2–3</td></tr>
<tr><td>权重结构</td><td>weakly negative ⟹ 可逼近性；完美复形带权重不带 t-结构</td><td>1907.09412；2202.08861</td></tr>
<tr><td>silting/tilting</td><td>silting 消失 ⟹ 预/弱可逼近；导出 Morita 是 Rickard 型定理特例</td><td>2602.14383 等；定理 2.9</td></tr>
<tr><td>dg/$\infty$-增强</td><td>唯一性经内在子范畴提升</td><td>2402.04605；2505.10374；2607.12865</td></tr>
<tr><td>奇点/稳定范畴</td><td>不变性 + 局部化；$\mathscr{T}^{c}\subseteq\mathscr{T}^{b}_{c}$ 障碍侧</td><td>survey Theorem 5.3；2402.04954；2401.00130</td></tr>
<tr><td>负 K-理论</td><td>有界 t-结构的障碍；AGH 猜想已解决</td><td>1610.07207；2202.08861；2006.16536；2208.06863</td></tr>
<tr><td>厚子范畴格/谱</td><td>互补；未找到形式桥梁</td><td>1909.06538；2205.13356</td></tr>
</tbody>
</table>

<h3 class="ar-subhead" id="ar-app-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> A. Neeman, <i>Triangulated categories with a single compact generator and two Brown representability theorems</i>, arXiv:1804.02240 (2018); Invent. Math. <b>244</b> (2026), 531–616.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> A. Neeman, <i>Approximable triangulated categories</i>, arXiv:1806.06995 (2018).</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> J. Burke, A. Neeman, B. Pauwels, <i>Gluing approximable triangulated categories</i>, arXiv:1806.05342 (2018); Forum Math. Sigma <b>11</b> (2023), e51.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> A. Neeman, <i>The category $[\mathscr{T}^{c}]^{\mathrm{op}}$ as functors on $\mathscr{T}^{b}_{c}$</i>, arXiv:1806.05777 (2018).</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> A. Neeman, <i>The categories $\mathscr{T}^{c}$ and $\mathscr{T}^{b}_{c}$ determine each other</i>, arXiv:1806.06471 (2018).</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> A. Neeman, <i>The t-structures generated by objects</i>, arXiv:1808.05267 (2018).</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> A. Neeman, <i>Metrics on triangulated categories</i>, arXiv:1901.01453 (2019); J. Pure Appl. Algebra <b>224</b> (2020).</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> M. V. Bondarko, S. V. Vostokov, <i>On weakly negative subcategories, weight structures, and (weakly) approximable triangulated categories</i>, arXiv:1907.09412 (2019); Lobachevskii J. Math. <b>41</b> (2020), 151–159.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> A. Canonaco, A. Neeman, P. Stellari, <i>Uniqueness of enhancements for derived and geometric categories</i>, arXiv:2101.04404 (2021); Forum Math. Sigma <b>10</b> (2022), e42.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> A. Neeman, <i>Bounded t-structures on the category of perfect complexes</i>, arXiv:2202.08861 (2022).</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> A. Neeman, <i>Obstructions to the existence of bounded t-structures</i>, arXiv:2208.06863 (2022).</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> A. Neeman, <i>Finite approximations as a tool for studying triangulated categories</i>, arXiv:2211.06587 (2022).</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> A. Canonaco, C. Haesemeyer, A. Neeman, P. Stellari, <i>The passage among the subcategories of weakly approximable triangulated categories</i>, arXiv:2402.04605 (2024).</p>
<p class="ar-ref"><span class="ar-ref-no">[14]</span> A. Canonaco, A. Neeman, P. Stellari, <i>Weakly approximable triangulated categories and enhancements: a survey</i>, arXiv:2407.05946 (2024).</p>
<p class="ar-ref"><span class="ar-ref-no">[15]</span> Y. Sun, Y. Zhang, <i>Localization theorems for approximable triangulated categories</i>, arXiv:2402.04954 (2024).</p>
<p class="ar-ref"><span class="ar-ref-no">[16]</span> A. Neeman, <i>Excellent metrics on triangulated categories, and the involutivity of the map taking $\mathcal{S}$ to $\mathfrak{S}(\mathcal{S})^{\mathrm{op}}$</i>, arXiv:2505.09120 (2025).</p>
<p class="ar-ref"><span class="ar-ref-no">[17]</span> A. Canonaco, A. Neeman, P. Stellari, <i>Metrics on triangulated categories and their enhancements</i>, arXiv:2607.12865 (2026).</p>
<p class="ar-ref"><span class="ar-ref-no">[18]</span> B. Antieau, D. Gepner, J. Heller, <i>K-theoretic obstructions to bounded t-structures</i>, arXiv:1610.07207 (2016); J. Eur. Math. Soc. (2019).</p>
<p class="ar-ref"><span class="ar-ref-no">[19]</span> T. De Deyn, P. Lank, K. M. Rahul, <i>Approximability and Rouquier dimension for noncommutative algebras over schemes</i>, arXiv:2408.04561 (2024).</p>
<p class="ar-ref"><span class="ar-ref-no">[20]</span> J. Hall, A. Lamarche, P. Lank, F. Peng, <i>Compact approximation and descent for algebraic stacks</i>, arXiv:2504.21125 (2025).</p>
</div>
</div>

<script>
/* 面板目录下拉按钮（Approximable Triangulated Categories） */
(function () {
  function findToc() { return document.querySelector('#ar-frontier-panel-approximable .ar-toc'); }
  window.toggleArToc = function (e) {
    if (e) { e.stopPropagation(); e.preventDefault(); }
    var toc = findToc();
    if (!toc) return;
    toc.classList.toggle('open');
    var btn = toc.querySelector('.ar-toc-btn');
    if (btn && toc.classList.contains('open')) btn.setAttribute('aria-expanded', 'true');
    else if (btn) btn.setAttribute('aria-expanded', 'false');
  };
  window.closeArToc = function () {
    var toc = findToc();
    if (!toc) return;
    toc.classList.remove('open');
    var btn = toc.querySelector('.ar-toc-btn');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  };
  /* 点击导航项后收起下拉；点击外部关闭；Esc 关闭 */
  document.addEventListener('click', function (ev) {
    var toc = findToc();
    if (!toc || !toc.classList.contains('open')) return;
    if (toc.contains(ev.target) && ev.target.closest('.ar-toc-drop a')) closeArToc();
    else if (!toc.contains(ev.target)) closeArToc();
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') closeArToc();
  });
})();
</script>
