---
title: "wakamatsu"
headless: true
date: 2026-09-06
---
<h3 class="ar-subhead">猜想陈述</h3>
<p>设 $A$ 为 Artin 代数，$T$ 为 <strong>Wakamatsu tilting 模</strong>，即满足：</p>
<ul>
  <li>(W1) $T\in\operatorname{mod}A$；</li>
  <li>(W2) $\operatorname{Ext}^{i}_{A}(T,T)=0$ 对所有 $i>0$（$T$ self-orthogonal）；</li>
  <li>(W3) 存在正合列
$$ 0\to A\to T_0\to T_1\to T_2\to\cdots ,\qquad T_i\in\operatorname{add}T , $$
</li>
</ul>
<p>且对每个 $i\ge 0$，像 $\operatorname{Im}f_i\in{}^{\perp}T=\{X:\operatorname{Ext}^{1}_{A}(X,T)=0\}$。

<strong>Wakamatsu tilting 猜想</strong>（WTC，Beligiannis-Reiten，2003）：若 $\operatorname{pd}_{A}T<\infty$，则 $T$ 是 classical tilting 模。</p>


<h3 class="ar-subhead">研究现状</h3>
<ul class="ar-timeline">
  <li><span class="ar-year">1990</span>Wakamatsu 将 tilting 模推广为允许无限投射维数的广义 tilting 模（<i>J. Algebra</i> 134, 289–325），源于自内射代数稳定等价研究。</li>
  <li><span class="ar-year">2004</span>Huang 引入 $U$-支配维数，证明 Wakamatsu tilting 模 ${}_A U$ 与 $U_{\Gamma}$ 的 $U$-支配维数相等。</li>
  <li><span class="ar-year">2004</span>Mantese–Reiten 证明 WTC 对 Gorenstein Artin 代数成立。</li>
  <li><span class="ar-year">2007</span>Beligiannis–Reiten 系统提出并讨论 WTC，建立与 GNC、GSC 等猜想的联系。</li>
  <li><span class="ar-year">2008</span>Wei 证明 $\operatorname{repdim}\le 3$ 的 Artin 代数及其 Auslander 生成元的自同态代数上 GNC、WTC、GSC 同时成立。</li>
  <li><span class="ar-year">2009</span>Zhu–Ding 在左 coherent 环上研究 FP-injective dimension，给出 WTC 的部分答案。</li>
  <li><span class="ar-year">2023</span>Enomoto 对表示有限代数引入 projectively Wakamatsu tilting 模，证明四项等价。</li>
  <li><span class="ar-year">2024</span>Divaani-Aazar–Fallah–Tousi 证明 GARC 蕴含 WTC（<i>Arch. Math.</i> 125 (2025), 291–302），并利用 tensorly faithful 模证明 left Artinian local 环与有限群群环情形。</li>
</ul>

<h3 class="ar-subhead">前沿成果</h3>
<p><strong>WTC 在以下代数类上成立：</strong></p>
<ul>
  <li>Gorenstein Artin 代数（Mantese–Reiten）；</li>
  <li>表示有限代数；</li>
  <li>left Artinian local 环与有限群群环 $R[G]$（Divaani-Aazar–Fallah–Tousi 2024）；</li>
  <li>$\operatorname{repdim}\le 3$ 的 Artin 代数及其自同态代数（Wei 2008）。</li>
</ul>

<h3 class="ar-subhead">2026 年新动态（待核实）</h3>
<p class="ar-mnote"><b>关于本节内容的可靠性说明。</b>以下条目来自 OpenAI 于 <b>2026 年 9 月 23 日</b>在 GitHub 公开的一批数学预印本（仓库 <code>openai/math</code>，当前 719 篇手稿 / 372 个结果族）。这批成果<b>由 OpenAI 内部模型生成，截至发稿未经同行评议</b>；发布后两天内该集合已撤回 3 篇、修订 14 篇，数学界对其发布方式与结论可靠性存在公开争议。<br>
因此本面板<b>保留上文的猜想陈述与全部已确立结果不变</b>，仅将新宣称作为「待核实」信息单独登记：<b>在数学界完成独立验证之前，WTC 仍应视为开放问题。</b></p>
<ul class="ar-timeline">
  <li><span class="ar-year">2026</span>《A counterexample to Tachikawa's second conjecture》（OpenAI, 2026-09-23）的 <b>Corollary 1.2(3)</b> 宣称：存在有限维代数 $\Gamma_K$ 与一个<b>投射-内射</b>的 Wakamatsu tilting 模 $W$，它<b>不是</b> tilting 模——<b>若成立即否证 Wakamatsu tilting 猜想</b>。结论对 $k=\mathbb{F}_2(q,H_1,H_2)$ 的<b>任意域扩张</b> $K/k$ 成立。
    <p><b>构造机制（值得记）</b>：取 $W$ 为各同构类的<b>不可分解投射-内射</b>左 $\Gamma_K$-模的一个代表之直和。这样的类只有有限多个，故 $W$ 有限、投射且内射，从而 $\operatorname{Ext}^i_{\Gamma_K}(W,W)=0\ (i>0)$；前述反例代数满足「极小内射分解每一项都投射」，故每个 $I^j\in\operatorname{add}W$，该分解构成 $\Gamma_K$ 的一个<b>无限</b> $\operatorname{add}W$-余分解；再用 $W$ 的内射性保证 $\operatorname{Hom}_{\Gamma_K}(-,W)$ 保持其正合。于是 $W$ 满足 Wakamatsu tilting 定义且投射维数为 $0$，却因为余分解不终止而非 tilting——<b>失败点精确地落在「无限余分解无法截断」这一步。</b></p></li>
</ul>
<p><strong>与既有结果的边界：</strong>上列「WTC 在以下代数类上成立」的诸条目<b>依然有效</b>（Gorenstein 代数、表示有限代数、左 Artin 局部环与有限群群环、$\operatorname{repdim}\le 3$ 的代数）——新宣称只说猜想<b>在一般情形</b>为假，并未在这些子类上反驳它们。反例中的 $W$ 是<b>投射-内射</b>的，而 Wakamatsu 倾斜模本就允许无限投射维数，故此处的失效模式是「余分解不终止」，而非自正交性或半对偶化性质出问题。</p>
<p><strong>受影响的方法路线：</strong>上文「满足 FDC 的代数：第 $d$ 步截断」这条统一策略依赖于两侧 FDC 给出的统一上界 $\operatorname{findim}R=d<\infty$。若外界证实了同批次对 FDC 的否证宣称，则该策略<b>不再可能作为普遍 proof scheme</b>——但它在 FDC 确实成立的那些子类上（含 Mantese–Reiten 的 Gorenstein 情形）仍然完好。与之相对，「左 Artin 局部环与有限群群环」那条张量忠实性路线不依赖 FDC，不受影响。</p>

<h3 class="ar-subhead">研究方法</h3>
<p>Wakamatsu 倾斜模本质上是<b>半对偶化模</b>：$\operatorname{End}_R(T)\cong S$ 且 $T$ 自正交。所有已知证明共享同一策略——控制 <b>Ext 消没层次</b>或某个<b>维数不变量</b>，把「$\operatorname{pd}T<\infty$」这一信息向上传递为「$T$ 生成整个模范畴的有限余分解」。</p>
<div class="ar-chain">
  <span class="ar-chain-node"><b>Wakamatsu tilting $T$</b><small>半对偶化 + 自正交</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>$\operatorname{pd}T<\infty$</b><small>转译为 $\operatorname{Ext}^{\ge n}(T,-)=0$</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>补全 / 截断</b><small>Bongartz 补全 · 有限维数截断 · 完备上同调</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>有限 $T$-余分解</b><small>$T$ 成为 classical tilting</small></span>
</div>

<h4 class="ar-mgroup c-violet">补全与截断：把无限余分解变有限</h4>
<div class="ar-method c-violet">
  <div class="ar-method-head"><span class="ar-method-name">表示有限代数：Bongartz 补全</span><span class="ar-m-tag">Enomoto 2023</span></div>
  <ul class="ar-m-pts">
    <li>对任意自正交模 $M$，若 ${}^\perp M$ 有有限覆盖，可把 $M$ 补全为「投射式 Wakamatsu tilting 模」；表示有限性保证 ${}^\perp M$ 只有有限多个不可分解对象，覆盖自动满足；</li>
    <li>关键引理：投射式 Wakamatsu tilting + $\operatorname{pd}<\infty$ $\Rightarrow$ tilting（用有限维数截断补全序列）；</li>
    <li>WTC、ARC、GNC 在同一框架内一并证明（arXiv:2301.13498）。</li>
  </ul>
</div>
<div class="ar-method c-violet">
  <div class="ar-method-head"><span class="ar-method-name">满足 FDC 的代数：第 $d$ 步截断</span><span class="ar-m-tag">Mantese–Reiten / Wei</span></div>
  <ul class="ar-m-pts">
    <li>两侧 FDC 给出统一上界 $\mathrm{findim}\,R=d<\infty$；取 $\mathrm{add}\,T$-余分解 $0\to R\to T_0\to T_1\to\cdots$；</li>
    <li>在第 $d$ 步截断：$\operatorname{Im}f_d$ 具有限投射维数且落在 ${}^\perp T\cap\mathrm{gen}(T)$ 中，半对偶化性推出 $\operatorname{Im}f_d\in\mathrm{add}\,T$，从而余分解有限；</li>
    <li>Wei 的等价形式 EWTC 把 WTC 改写为关于 Auslander 界的陈述，使 FDC 的作用透明；覆盖 repdim $\le 3$、相对遗传、带幂零理想（Small 定理）等类。</li>
  </ul>
</div>

<h4 class="ar-mgroup c-amber">完备同调与 Gorenstein 环境：让消没可测</h4>
<div class="ar-method c-amber">
  <div class="ar-method-head"><span class="ar-method-name">Gorenstein / virtually Gorenstein 代数</span><span class="ar-m-tag">Mantese–Reiten / Hu 等</span></div>
  <ul class="ar-m-pts">
    <li>Gorenstein 代数上 $\mathrm{Gpd}$ 是 $\mathrm{pd}$ 的良好替代：$\mathrm{Gpd}(M)<\infty \iff$ 完备上同调 $\widehat{\mathrm{Ext}}^{i}(M,-)$ 在 $i$ 充分大时消失；</li>
    <li>利用自正交性把 $\operatorname{pd}T<\infty$ 转译为 $\operatorname{Ext}^{\ge n}(T,-)=0$，在 $\mathcal{GP}$-正合范畴中用完备分解检测；</li>
    <li>virtually Gorenstein 条件（$\mathcal{GP}^\perp={}^\perp\mathcal{GI}$）保证 $\mathrm{(mod}\,R,\mathcal{GP}\text{-正合)}$ 构成正合范畴，完备分解有限 $\Rightarrow$ 有限 $T$-余分解。</li>
  </ul>
</div>
<div class="ar-method c-amber">
  <div class="ar-method-head"><span class="ar-method-name">GARC 链式传递</span><span class="ar-m-tag">Divaani-Aazar–Fallah–Tousi 2024</span></div>
  <ul class="ar-m-pts">
    <li>主定理：对所有结合环成立的 GARC 蕴含 WTC（完备同调归约）；</li>
    <li>Wei 证明 GARC 在「每个模都有最终闭投射分解」的代数上成立，此类涵盖表示有限、挠有限、根平方零代数——链式传递即得这些类上的 WTC；</li>
    <li><b>注意局限</b>：GARC 存在反例（Diveris；Schulz 的 QF 环周期模亦属此类），故此路径只在 GARC 成立的子类上有效（相关反例见面板参考文献 [9]）。</li>
  </ul>
</div>

<h4 class="ar-mgroup c-teal">忠实性与余变换：绕开分类的直接论证</h4>
<div class="ar-method c-teal">
  <div class="ar-method-head"><span class="ar-method-name">左 Artin 局部环与有限群群环</span><span class="ar-m-tag">张量忠实性</span></div>
  <ul class="ar-m-pts">
    <li>引理：任何有限投射维数且<b>张量忠实</b>的 Wakamatsu 倾斜模必为投射模；</li>
    <li>局部环上唯一极大左理想控制模结构，张量忠实性 $+\operatorname{pd}<\infty$ 迫使 $T$ 投射；</li>
    <li>群环 $R[G]$：$|G|$ 可逆时用 Maschke 型论证挂钩忠实性与投射性，否则借 Artin 环的有限维数控制。</li>
  </ul>
</div>
<div class="ar-method c-teal">
  <div class="ar-method-head"><span class="ar-method-name">半对偶化双模：余变换方法</span><span class="ar-m-tag">Huang–Tang</span></div>
  <ul class="ar-m-pts">
    <li>对半对偶化双模 ${}_S\omega_R$ 定义 $\omega$-余变换与 $\omega$-余反射，主定理：$\operatorname{pd}_S\,\omega\le n \iff$ 每个 $\omega$-$\mathcal{T}$-类 $n$ 模都是 $\omega$-余反射；</li>
    <li>经 $n=1,2$ 的显式判据给出 WTC 的部分解答——$\operatorname{pd}\,\omega\le 2$ 的情形得肯定答案；</li>
    <li>单侧 Gorenstein 范畴（Huang 2026）把 $\operatorname{pd}_R C=\operatorname{pd}_{S^{\mathrm{op}}}C\le n$ 范畴化为 $n$-$Gorenstein$ 条件与 Bass 类内射维数有界，给出 WTC 的必要条件。</li>
  </ul>
</div>

<h4 class="ar-mgroup c-blue">导出层面与结构不变性：把结论搬到新代数</h4>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">Wakamatsu-silting 复形</span><span class="ar-m-tag">Wei 2018</span></div>
  <ul class="ar-m-pts">
    <li>猜想：紧 Wakamatsu-silting 复形皆为 silting 复形——集中于零度的 Wakamatsu-silting 复形恰是 Wakamatsu 倾斜模，故这是 WTC 的导出层面推广；</li>
    <li>关键性质：$T$ 为 Wakamatsu-silting $\iff$ 对偶 $DT$ 为 Wakamatsu-silting；</li>
    <li>主定理：$R$ 满足 FDC 时猜想成立——紧性 + 半自正交 + 生成性自动强化为自正交。</li>
  </ul>
</div>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">稳定等价与 Frobenius 扩张下的不变性</span><span class="ar-m-tag">传递策略</span></div>
  <ul class="ar-m-pts">
    <li>伴随型稳定等价保持 WTC 成立与否：$\omega$-左逼近维数在稳定等价下不变；</li>
    <li>$\perp\omega$-Gorenstein 投射性在 Frobenius 扩张下不变，GSC 及相关猜想可沿扩张传递；</li>
    <li>策略意义：先在小类（自入射、对称代数）证 WTC，再经等价/扩张传播到大类。</li>
  </ul>
</div>
<p class="ar-mnote"><b>易错点：</b>半对偶化模与 Wakamatsu 倾斜模在 Artin 代数上一致，但一般环/无限生成情形需分别处理（Angeleri-Hügel 学派的无限倾斜模框架与 WTC 不重合）；GARC 路径受 Diveris 反例限制；「两侧 FDC」不可省——单侧有限维数不足以推出 WTC；维数对称 $\operatorname{pd}_R C=\operatorname{pd}_{S^{\mathrm{op}}}C$ 在双侧有限时已知，WTC 的真正难点在「一侧有限」。</p>

<h3 class="ar-subhead">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> T. Wakamatsu, <i>Stable equivalence of self-injective algebras and a generalization of tilting modules</i>, J. Algebra <b>134</b> (1990), 289–325.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> A. Beligiannis, I. Reiten, <i>Homological and Homotopical Aspects of Torsion Theories</i>, Mem. Amer. Math. Soc. <b>188</b>, 2007.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> Z. Y. Huang, <i>U-dominant dimensions and Wakamatsu tilting modules</i>, arXiv:math/0409150 (2004).</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> J. Mantese, I. Reiten, <i>Wakamatsu tilting modules</i>, J. Algebra <b>278</b> (2004), 532–548.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> J. Wei, <i>Auslander–Reiten conjecture and Gorenstein algebra</i>, arXiv:0803.3364 (2008).</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> H. Enomoto, <i>Projectively Wakamatsu tilting modules for representation-finite algebras</i>, arXiv:2301.13498 (2023).</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> B. Zhu, N. Q. Ding, <i>Wakamatsu tilting modules over left coherent rings</i>, arXiv:math/0602572 (2006).</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> K. Divaani-Aazar, A. Mahin Fallah, M. Tousi, <i>On the Wakamatsu tilting conjecture</i>, Arch. Math. <b>125</b> (2025), 291–302（arXiv:2407.06353, 2024）。</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> R. Schulz, <i>Boundedness and periodicity of modules over QF rings</i>, J. Algebra <b>101</b> (1986), 450–469（GARC/ARC 反例）。</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> <i>Higher Morita–Tachikawa correspondence</i>, arXiv:2304.01370 (2023).</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> OpenAI, <i>A counterexample to Tachikawa's second conjecture</i>, preprint, 2026-09-23.（Corollary 1.2(3) 宣称否证 Wakamatsu tilting 猜想）<b>（未经同行评议，见「2026 年新动态」节说明）</b>
  <br><code>https://github.com/openai/math/tree/main/preprints/A-counterexample-to-Tachikawas-second-conjecture-September-23-2026</code></p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> OpenAI, <i>An algebra of infinite little finitistic dimension</i>, preprint, 2026-09-23.（同批次对 FDC 的否证宣称，影响上文「第 $d$ 步截断」路线的普适性）<b>（未经同行评议）</b>
  <br><code>https://github.com/openai/math/tree/main/preprints/An-algebra-of-infinite-little-finitistic-dimension-September-23-2026</code></p>
