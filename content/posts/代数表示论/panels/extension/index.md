---
title: "extension"
headless: true
---
<h3 class="ar-subhead" id="ar-ext-1">猜想陈述</h3>
<p><strong>强 Extension 猜想（strong）</strong>：设 $\Lambda$ 为 Artin 代数，$S$ 为单模。若 $\operatorname{Ext}^{1}_{\Lambda}(S,S)\neq 0$，则对<strong>所有</strong> $i\ge 1$ 都有</p>

$$ \operatorname{Ext}^{i}_{\Lambda}(S,S)\neq 0, $$

<p>即"一次自扩张 ⇒ 处处自扩张"。这一形式<strong>已被 Happel 的标准反例否定</strong>（见下"Extension 猜想反例"）。</p>
<p><strong>Extension 猜想（通常所说，弱版本）</strong>：设 $\Lambda$ 为 Artin 代数，$S$ 为单模。若 $\operatorname{Ext}^{1}_{\Lambda}(S,S)\neq 0$，则</p>

$$ \operatorname{Ext}^{n}_{\Lambda}(S,S)\neq 0 \quad\text{对无穷多个正整数 } n \text{ 成立}. $$

<p>这是文献中通常所称的 Extension Conjecture，也是目前仍开放的形式；Y. Han（2013，arXiv:1309.0304 <i>A proof of extension conjecture</i>）曾宣称证明，但该论文后来被作者<strong>撤回</strong>（理由为其中存在关键错误：所使用的微分分次代数有限维性主张不成立）。</p>

<h3 class="ar-subhead" id="ar-ext-ce">强Extension 猜想反例</h3>
<p>下面给出<strong>强 Extension 猜想</strong>（"一次自扩张 ⇒ 所有 $i\ge 1$ 处处自扩张"）的反例。它出自 Happel 的标准构造：单模 $S$ 满足 $\operatorname{Ext}^{1}_{\Lambda}(S,S)\neq 0$，却出现第 3 阶消失 $\operatorname{Ext}^{3}_{\Lambda}(S,S)=0$——只要某一阶消失，就足以否定"所有 $i$ 都非零"。</p>

<h4>反例代数</h4>
<p>取任意域 $k$ 与箭图</p>

$$ a:1\to 1,\qquad b:1\to 2,\qquad c:2\to 1, $$

<p>路径按从左到右约定复合；令</p>

$$ \Lambda = kQ/(a^{2}-bc,\; cb,\; cab). $$

<p>设 $S$ 是顶点 $1$ 对应的简单右模。该代数有限维，一组方便的 $k$-基为</p>

$$ e_{1},\,e_{2},\,a,\,b,\,c,\,a^{2},\,ab,\,ca,\,a^{3}. $$

<p>相应的不可分解射影模可写为</p>

$$ P_{1}=e_{1}\Lambda=\langle e_{1},a,b,a^{2},ab,a^{3}\rangle_{k},\qquad P_{2}=e_{2}\Lambda=\langle e_{2},c,ca\rangle_{k}. $$

<h4>$S$ 的极小射影分辨率</h4>
<p>分辨率的前几项为</p>

$$ \cdots\longrightarrow P_{2}\xrightarrow{d_{3}}P_{1}\xrightarrow{d_{2}}P_{1}\oplus P_{2}\xrightarrow{d_{1}}P_{1}\longrightarrow S\longrightarrow 0, $$

<p>其中</p>

$$ d_{1}(u,v)=au+bv,\qquad d_{2}(u)=(au,-cu),\qquad d_{3}(v)=abv. $$

<p>直接利用关系 $a^{2}=bc$、$cb=0$、$cab=0$ 可验证</p>

$$ \ker d_{1}=(a,-c)\Lambda,\qquad \ker d_{2}=ab\Lambda,\qquad \ker d_{3}=k\cdot ca\cong S. $$

<p>因此 $\Omega^{4}(S)\cong S$。所有微分的像都落在相应射影模的根中，所以这是极小分辨率。</p>

<h4>计算 Ext</h4>
<p>对极小分辨率施加函子 $\operatorname{Hom}_{\Lambda}(-,S)$。由于所有微分的像都落在根中，诱导出的上链复形微分全为零。又因为</p>

$$ \operatorname{Hom}_{\Lambda}(P_{1},S)\cong k,\qquad \operatorname{Hom}_{\Lambda}(P_{2},S)=0, $$

<p>且分辨率以周期 $4$ 重复，所以</p>

$$ \dim_{k}\operatorname{Ext}^{n}_{\Lambda}(S,S)=
\begin{cases}
1, & n\equiv 0,1,2\pmod 4,\\[2pt]
0, & n\equiv 3\pmod 4.
\end{cases} $$

<p>特别地，</p>

$$ \operatorname{Ext}^{1}_{\Lambda}(S,S)\cong k\neq 0,\qquad \operatorname{Ext}^{3}_{\Lambda}(S,S)=0. $$

<p>这直接杀死了"每个 $i\ge 1$ 都非零"的强版本。</p>

<h4>与通常 Extension 猜想的区别</h4>
<p>通常所说的 Extension Conjecture 是<strong>较弱的断言</strong>：若 $\operatorname{Ext}^{1}_{\Lambda}(S,S)\neq 0$，则 $\operatorname{Ext}^{n}_{\Lambda}(S,S)\neq 0$ 对无穷多个正整数 $n$ 成立。上面的例子<strong>并不否定</strong>这个较弱版本——它在 $n\equiv 0,1,2\pmod 4$ 时仍有非零自扩张（无穷多个）；它只是在"每个 $n$ 都非零"这一更强的说法上给出反例。此外，Yang Han 的 2013 年论文曾声称证明通常的 Extension Conjecture，但该论文后来被作者撤回，撤回理由是其中存在关键错误：所使用的微分分次代数有限维性主张不成立。</p>

<p class="ar-mnote"><b>意义：</b>该反例表明<strong>强 Extension 猜想（所有正次数自扩张均非零）是假的</strong>；真正仍开放的是其弱形式——自扩张在无穷多个次数上出现。本地可用 <code>verify_counterexample.py</code> 精确复核代数乘法与给定关系、$\operatorname{rad}^{4}=0$、分辨率各映射的 $\Lambda$-线性、正合性与极小性、$\Omega^{4}(S)\cong S$，以及 $\operatorname{Ext}^{n}(S,S)$ 的 4-周期维数。</p>

<h3 class="ar-subhead" id="ar-ext-ref">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> Y. Han, <i>A proof of extension conjecture</i>, arXiv:1309.0304 —— ⛔ 已撤回。</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> E. L. Green, Ø. Solberg, D. Zacharia, <i>Minimal Projective Resolutions</i>, Trans. Amer. Math. Soc.（反例见 §4，第 19 页），<a href="https://oyvinso.folk.ntnu.no/Papers/gzstransams.pdf">PDF</a>。</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> D. Happel, D. Zacharia, <i>Algebras of finite global dimension</i>（反例构造见第 9 页），<a href="https://zacharia.expressions.syr.edu/wp-content/uploads/2012/06/Happel-Zacharia-global.pdf">PDF</a>。</p>
