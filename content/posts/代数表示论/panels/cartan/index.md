---
title: "cartan"
headless: true
---
<h3 class="ar-subhead">猜想陈述</h3>
<p>
<strong>Cartan 行列式猜想（CDC）：</strong>设 $\Lambda$ 是有限整体维数（$\operatorname{gl.dim}\Lambda<\infty$）的 Artin 代数，则其 Cartan 矩阵 $C(\Lambda)$ 的行列式等于 1。

Cartan 矩阵定义为 $c_{ij}=[P_i:S_j]$，其中 $S_1,\dots,S_n$ 是两两不同构的简单左模，$P_i$ 是 $S_i$ 的投射覆盖，$[P_i:S_j]$ 是简单模 $S_j$ 在 $P_i$ 的合成列中出现的重数。
</p>

<h3 class="ar-subhead">研究现状</h3>
<ul class="ar-timeline">
  <li><span class="ar-year">1954</span>Eilenberg 证明有限整体维数 Artin 代数 $\det C=\pm 1$。</li>
  <li><span class="ar-year">1983</span>Zacharia 证明整体维数 $\le 2$ 的 Artin 代数满足 CDC；
  <p>Wilson 证明整体维数有限的有限维正分次代数 $\det C=1$。</p></li>
  <li><span class="ar-year">1985</span>Burgess–Fuller–Voss–Zimmermann-Huisgen 证明串（左string）环上 $\det C=1\Leftrightarrow\operatorname{gl.dim}<\infty$；<p>Green–Gustafson–Zacharia 证明整体维数 $\le 2$ 代数对任意单模 $S$ 有 $\operatorname{Ext}^{2}(S,S)=0$。</p></li>
  <li><span class="ar-year">1986</span>Fuller–Zimmermann-Huisgen 用 Cartan 滤过环方法同时证明 GNC 与 CDC，对含 $J^3=0$ 的一类代数给出肯定回答，并证明 no-loop 性质 $\operatorname{Ext}^{1}(S,S)=0$。</li>
  <li><span class="ar-year">1989</span>Burgess–Fuller 证明拟遗传 Artin 代数满足 CDC。</li>
  <li><span class="ar-year">1992</span>Igusa 建立“分次 Cartan 行列式 = 相对循环同调的 Euler 特征”的 Igusa 公式。</li>
  <li><span class="ar-year">1998</span>Saorín 将 Wilson 方法推广到任意交换幺半群分次代数，证明强恰当分次的 aperiodic 交换幺半群代数满足 CDC。</li>
  <li><span class="ar-year">2014</span>Han–Qin 引入 $n$-recollement 与 $1$-derived-simple 代数，证明 CDC 对所有有限维代数成立当且仅当对所有 $1$-derived-simple 代数成立。</li>
  <li><span class="ar-year">2017</span>Ingalls–Paquette 通过幂等子代数与 Yoneda Ext-代数给出约简。</li>
  <li><span class="ar-year">2020</span>Han 将 Hirzebruch–Riemann–Roch 公式推广到有限整体维数基本代数。</li>
  <li><span class="ar-year">2026</span>Chen–Xi 对矩阵中心化子代数给出 Cartan 行列式显式公式并完全验证 CDC。</li>
</ul>

<p><strong>CDC 在以下代数类上成立：</strong>
<ul>
<li>整体维数 $\le 2$（Zacharia 1983；Green–Gustafson–Zacharia 1985）;</li>
<li>正分次代数（Wilson 1983）;</li>
<li>Cartan 滤过环含 $J^3=0$（Fuller–Zimmermann-Huisgen 1986）string（左string）环（Burgess–Fuller–Voss–Zimmermann-Huisgen 1985，且有强形式 $\det C=1\Leftrightarrow\operatorname{gl.dim}<\infty$）;</li>
<li>拟遗传 Artin 代数（Burgess–Fuller 1989）;</li>
<li>矩阵中心化子代数（Chen–Xi 2026，且该类上五项等价：拟遗传 $\Leftrightarrow\operatorname{gl.dim}<\infty\Leftrightarrow\operatorname{gl.dim}\le 2\Leftrightarrow I_c=\varnothing\Leftrightarrow\det C=1$）。</li>
</ul></p>

<h3 class="ar-subhead">研究方法</h3>
<p>所有已证情形的证明共享同一骨架：<b>公共框架</b>先把 $\det C$ 压到 $\pm 1$（Eilenberg 1954，普适），剩余的全部难点归结为<b>排除 $-1$</b>；每一类代数再用自己特有的「正性来源」完成这最后一步。</p>
<div class="ar-chain">
  <span class="ar-chain-node"><b>$\det C=\pm1$</b><small>Eilenberg 普适</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>排除 $-1$</b><small>真正的难点</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>正性来源</b><small>归纳 / 正性 / 搬运</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>$\det C=1$</b><small>猜想成立</small></span>
</div>
<p class="ar-mnote">各代数类的差别，只在于用何种结构提供「排除 $-1$」所需的正性：约化链的终点（半单）、参数化分次、对称双线性型、或导出等价搬运。</p>

<h4 class="ar-mgroup c-violet">公共框架：三件共享工具</h4>
<div class="ar-mmap">
  <div class="ar-mmap-col c-violet">
    <div class="ar-mmap-title">工具 1 · Euler 型与幺模性</div>
    <div class="ar-mmap-sub">把 det 压缩到 ±1（无类假设）</div>
    <ul class="ar-mmap-list">
      <li>Grothendieck 群上 Euler 双线性型 $\langle[X],[Y]\rangle=\sum_i(-1)^i\dim_k\operatorname{Ext}_A^i(X,Y)$，Cartan 矩阵 $C(A)$ 即其在单模基下的矩阵；</li>
      <li>投射模基与单模基经 $C$ 相互表出，gl.dim $<\infty$ 时两基互化 $\Rightarrow$ 两矩阵互逆 $\Rightarrow$ $\det C=\pm1$；</li>
      <li>猜想剩余难点全部归结为：<b>排除 $-1$</b>。</li>
    </ul>
  </div>
  <div class="ar-mmap-col c-violet">
    <div class="ar-mmap-title">工具 2 · 幂等理想约化引理</div>
    <div class="ar-mmap-sub">降维归纳的引擎</div>
    <ul class="ar-mmap-list">
      <li>$I=AeA$ 满足适当分离条件（如 $I$ 遗传）时，$I$ 与 $A/I$ 的单模间 Ext 项消失，Cartan 矩阵呈块三角，$\det C(A)=\det C(A/I)$；</li>
      <li>沿幂等理想链 $A\to A/I\to\cdots$ 归纳到底——拟遗传、分层、拟分层代数的证明全部以此为核；</li>
      <li>约化保持行列式值不变：负号须由终点或中途结构排除。</li>
    </ul>
  </div>
  <div class="ar-mmap-col c-violet">
    <div class="ar-mmap-title">工具 3 · 导出不变性</div>
    <div class="ar-mmap-sub">把已证结果搬去新类</div>
    <ul class="ar-mmap-list">
      <li>Happel：导出范畴 $K_0$ 上的 Euler 型在导出等价下不变，而 $\det C$ 正是该型的行列式；</li>
      <li>$\det C$ 只依赖代数的<b>导出等价类</b>（Bocian–Skowroński, Prop. 1.5）；</li>
      <li>沿导出等价传播：倾斜代数、片段代数等新类自动继承已证的 $\det=1$。</li>
    </ul>
  </div>
</div>

<h4 class="ar-mgroup c-red">归纳归约：沿链降到半单</h4>
<div class="ar-method c-red">
  <div class="ar-method-head"><span class="ar-method-name">遗传代数</span><span class="ar-m-tag">无圈箭图</span><span class="ar-m-tag">无需同调</span></div>
  <ul class="ar-m-pts">
    <li>箭图无圈 $\Rightarrow$ 顶点可单向排序，$e_i A e_j\ne 0$ 仅当 $i\le j$；</li>
    <li>Cartan 矩阵上三角且对角全 1（每行恰含 $P_i$ 的单商 $L_i$）$\Rightarrow$ $\det C=1$——平凡基例。</li>
  </ul>
</div>
<div class="ar-method c-red">
  <div class="ar-method-head"><span class="ar-method-name">拟遗传代数：沿遗传链两次归纳</span><span class="ar-m-tag">Dlab–Ringel / ADL</span></div>
  <ul class="ar-m-pts">
    <li><b>第一步（幺模性）</b>：Cline–Parshall–Scott / Dlab–Ringel 证拟遗传代数 gl.dim $<\infty$，工具 1 给出 $\det=\pm1$；</li>
    <li><b>第二步（排负号）</b>：对每个遗传幂等理想用工具 2——遗传性使 $I$ 与 $R/I$ 的单模间无 Ext 耦合，非主块为单位阵：$\det C(R)=\det C(R/I)=\cdots=\det C(\text{半单商})=1$；</li>
    <li><b>方法学要点</b>：负号不是被某个「正性」排除，而是被归纳终点（半单代数、单位阵）吃掉。</li>
  </ul>
</div>
<div class="ar-method c-red">
  <div class="ar-method-head"><span class="ar-method-name">标准 / 严格 / 拟分层：极限验证</span><span class="ar-m-tag">ADL / Liu–Paquette 2006</span></div>
  <ul class="ar-m-pts">
    <li>此类代数可以<b>没有有限整体维数</b>，不能依赖工具 1 先取 $\pm1$，证明须直接给出 $\det=1$；</li>
    <li>Ágoston–Dlab–Lukács：保留幂等理想链，用标准模的滤过重数替代遗传性，支撑块三角约化仍成立；</li>
    <li>Liu–Paquette（quasi-stratified）：只要求 $A/AeA$ 拟遗传、$eAe$ 满足分离条件，此时 <b>no-loop 与 CDC 同时成立</b>——两者在约化归纳中互相支撑：no-loop 沿约化传递，约化又依赖它控制 $e$ 分支的贡献。</li>
  </ul>
</div>
<p class="ar-mnote">早期结果亦汇入此通道：gl.dim $\le 2$（Zacharia 1983；Green–Gustafson–Zacharia 1985）、Cartan 滤过环含 $J^3=0$（Fuller–Zimmermann-Huisgen 1986）、string 环（Burgess–Fuller–Voss–Zimmermann-Huisgen 1985，有强形式 $\det C=1\Leftrightarrow\operatorname{gl.dim}<\infty$）。</p>

<h4 class="ar-mgroup c-amber">制造正性：让符号定下来</h4>
<div class="ar-method c-amber">
  <div class="ar-method-head"><span class="ar-method-name">正分次代数：参数化特化论证</span><span class="ar-m-tag">Wilson 1983</span></div>
  <ul class="ar-m-pts">
    <li>分次 Cartan 行列式是参数 $t$ 的 Laurent 多项式，且恒等于 $\pm1$（离散取值、连续依赖）；</li>
    <li><b>特化论证</b>：$t$ 取大正数时矩阵各元素为正、行列式为正——不能跳变符号，故 $t=1$ 处必为 $+1$；</li>
    <li>「大参数处取正、行列式恒 $\pm1$ $\Rightarrow$ 处处为 $+1$」是分次方法的灵魂，Enomoto 2026 再次借用。</li>
  </ul>
</div>
<div class="ar-method c-amber">
  <div class="ar-method-head"><span class="ar-method-name">Koszul 代数：对偶行列式恒等式</span><span class="ar-m-tag">Ágoston–Dlab–Fehér</span></div>
  <ul class="ar-m-pts">
    <li>分次 Cartan 矩阵与 Koszul 对偶代数的分次 Cartan 矩阵<b>互逆</b>（相差 Hilbert 级数扭转），得显式公式 $\det C_{gr}(t)=\pm\prod(\text{Hilbert 级数倒数})$；</li>
    <li>gl.dim $=\infty$ $\Rightarrow$ 对偶侧 Hilbert 级数在 $t=1$ 发散/非常值 $\Rightarrow$ $\det\ne\pm1$；逆否即猜想——这是少数给出 det 显式公式的情形；</li>
    <li>gl.dim $<\infty$ 时级数截断为多项式，符号由齐次次数正性确定。</li>
  </ul>
</div>
<div class="ar-method c-amber">
  <div class="ar-method-head"><span class="ar-method-name">单项式代数：组合计数锁定</span><span class="ar-m-tag">纯组合</span></div>
  <ul class="ar-m-pts">
    <li>经典组合结果：$\det C(A)$ 恰等于箭图中<b>极大路径的条数</b>（Smith 标准形由路径组合决定）；</li>
    <li>gl.dim $<\infty$ $\Rightarrow$ no-loop 且箭图结构迫使极大路径唯一 $\Rightarrow$ $\det C=1$——完全绕开同调。</li>
  </ul>
</div>
<div class="ar-method c-amber">
  <div class="ar-method-head"><span class="ar-method-name">胞腔代数：对称性 + Gram 因子分解</span><span class="ar-m-tag">König–Xi</span></div>
  <ul class="ar-m-pts">
    <li>胞腔基自带反合对合 $\iota$，由相容性得 $e_i A e_j\cong(e_j A e_i)^*$，故 <b>$C(A)$ 对称</b>；</li>
    <li>关键等价：gl.dim $A<\infty$ $\Longleftrightarrow$ $\det C\ne 0$（$\det=0$ $\Rightarrow$ 某胞腔模 Gram 行列式为零 $\Rightarrow$ 无限维数；反向：胞腔 + 有限维数 = 拟遗传）；</li>
    <li>$\det C$ 等于各层胞腔模 Gram 行列式的依次比值之积，每项非负，非退化性排除零因子 $\Rightarrow$ 每项为正 $\Rightarrow$ $\det C=1$；</li>
    <li><b>唯一</b>把 det 写成正数乘积的一类；且此时 det $=1$ $\Longleftrightarrow$ 有限维数，胞腔代数自动拟遗传。</li>
  </ul>
</div>

<h4 class="ar-mgroup c-blue">不变性搬运：从已知类传播</h4>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">表示有限代数：AR 箭图制造分次、回收 Wilson</span><span class="ar-m-tag">Enomoto 2026</span></div>
  <ul class="ar-m-pts">
    <li><b>标准化</b>：Lenzing no-loop 定理 $\Rightarrow$ 代数闭域上无 loop 的表示有限代数必为<b>标准代数</b>（模范畴 $\cong$ mesh 范畴 $k(\Gamma_A)$ 的商）；</li>
    <li><b>制造分次</b>：mesh 范畴按路径长度自然分次，mesh 关系（$\tau\Omega+1=0$）齐次 $\Rightarrow$ 满足 Wilson 判据（正分次 + rad $B=B_+$ + 有限维数）$\Rightarrow$ 其 Cartan 行列式为 1；</li>
    <li><b>定理 A（$A$ 本身）/ 定理 B（$\operatorname{End}_A(M)$，$M$ 生成子）</b>：作为齐次商 / 同调商不改变 Cartan 行列式（char $k=2$ 时以特征 2 技术替代 no-loop 的某一步），归结到同一 Wilson 论证；</li>
    <li><b>方法学要点</b>：没有发明新的正性机制，而是证明表示有限性<b>本身就隐含一个满足 Wilson 判据的正分次模型</b>。</li>
  </ul>
</div>
<div class="ar-method c-blue">
  <div class="ar-method-head"><span class="ar-method-name">约简通道：压缩反例空间</span><span class="ar-m-tag">Han–Qin 2014 / Ingalls–Paquette 2017</span></div>
  <ul class="ar-m-pts">
    <li>Han–Qin（$n$-recollement）：CDC 对所有有限维代数成立 $\Longleftrightarrow$ 对所有 $1$-derived-simple 代数成立——把一般情形压缩到「极小」类；</li>
    <li>Ingalls–Paquette：幂等子代数与 Yoneda Ext-代数给出另一约简通道；</li>
    <li>推论：若要找反例，只需盯紧 derived-simple 类。</li>
  </ul>
</div>

<div class="ar-mtake">
  <p><b>困难所在：</b>一般情形——表示无限、非分次、无任何分层或胞腔结构的代数——至今没有上述任一策略可用：工具 1 只能给出 $\pm1$，而排除 $-1$ 所需的正性来源目前只在这几类结构中被找到。这也解释了为何 Cartan 行列式猜想比 FDC 更难攻：多数新进展（如 Chen–Xi 2026 对矩阵中心化子代数给出显式公式与五项等价）仍是化归路线的延伸。</p>
</div>

<h3 class="ar-subhead">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> S. Eilenberg, <i>Algebras of cohomologically finite dimension</i>, Comment. Math. Helv. <b>28</b> (1954), 310–319.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> D. Zacharia, <i>On the Cartan matrix of an Artin algebra of global dimension two</i>, J. Algebra <b>82</b> (1983), 353–357.</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> G. V. Wilson, <i>The Cartan map on categories of graded modules</i>, J. Algebra <b>85</b> (1983), 390–398.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> W. D. Burgess, K. R. Fuller, E. R. Voss, B. Zimmermann-Huisgen, <i>The Cartan matrix as an indicator of finite global dimension for Artinian rings</i>, Proc. Amer. Math. Soc. <b>95</b> (1985), 157–165.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> E. L. Green, W. H. Gustafson, D. Zacharia, <i>On Artin rings of global dimension two</i>, J. Algebra <b>92</b> (1985), 375–379.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> K. R. Fuller, B. Zimmermann-Huisgen, <i>On the generalized Nakayama conjecture and the Cartan determinant problem</i>, Trans. Amer. Math. Soc. <b>294</b> (1986), 679–691.</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> W. D. Burgess, K. R. Fuller, <i>On quasi-hereditary rings</i>, Proc. Amer. Math. Soc. <b>106</b> (1989), 321–328.</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> K. Igusa, <i>Cyclic homology and the determinant of the Cartan matrix</i>, J. Pure Appl. Algebra <b>83</b> (1992), 101–119.</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> M. Saorín, <i>Monoid gradings on algebras and the Cartan determinant conjecture</i>, Proc. Edinburgh Math. Soc. <b>41</b> (1998), 539–551.</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> Y. Han, Y. Qin, <i>Reducing homological conjectures by n-recollements</i>, arXiv:1410.3223 (2014).</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> C. Ingalls, C. Paquette, <i>Homological behavior of idempotent subalgebras and Ext algebras</i>, arXiv:1703.08725 (2017).</p>
<p class="ar-ref"><span class="ar-ref-no">[12]</span> Y. Han, <i>Hirzebruch–Riemann–Roch and Lefschetz type formulas for finite dimensional algebras</i>, arXiv:2008.11457 (2020).</p>
<p class="ar-ref"><span class="ar-ref-no">[13]</span> B. Steinberg, <i>The modular representation theory of monoids and a conjecture on the Cartan determinant</i>, arXiv:2305.08251 (2023).</p>
<p class="ar-ref"><span class="ar-ref-no">[14]</span> F. Eisele, <i>A counterexample to a conjecture on Cartan determinants of monoid algebras</i>, arXiv:2306.14002 (2023).</p>
<p class="ar-ref"><span class="ar-ref-no">[15]</span> Z. Chen, C. C. Xi, <i>Singular equivalences and homological conjectures</i>, arXiv:2603.20643 (2026).</p>
