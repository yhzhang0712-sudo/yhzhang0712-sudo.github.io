---
title: "黎曼猜想：素数分布背后的一条临界线"
headless: true
hidePanelMeta: true
---
<h2>黎曼猜想：素数分布背后的一条临界线</h2>

<p><strong>一句话概括：</strong>黎曼 ζ 函数的所有"非平凡零点"都落在复平面的一条竖直线上 $s=\tfrac12+it$。这条表面上只关乎复分析的断言，等价于"素数计数的误差不超过 $\sqrt{x}$ 的量级"，因此牵动整个数论。截至 <strong>2026 年 11 月 22 日</strong>，它仍被克雷数学研究所列为<strong>未解决</strong>。</p>

<h3>一、提出背景：一篇八页论文</h3>
<p>素数（2, 3, 5, 7, …）有无穷多个，这一点欧几里得早已证明；但它们在自然数中的<strong>位置</strong>却看不出规律。高斯与勒让德在十八世纪末到十九世纪初通过大量计算猜测：不超过 $x$ 的素数个数 $\pi(x)$ 大致按 $x/\ln x$ 增长。这个"平均密度"是可以猜的，真正难的是<strong>误差有多大</strong>。</p>

<p>1859 年 11 月，<a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('riemann'); return false;">黎曼</a>向柏林科学院提交了他一生唯一一篇数论论文《论小于给定值的素数个数》。全文只有八页，却做了三件事：把欧拉只对实变量 $s$ 定义的 ζ 函数解析延拓到复平面；借助函数方程把 ζ 的零点与素数计数绑在一起；提出一个关于零点位置的猜想。文中还留有几处未加证明的断言，后来大多被解决，唯独核心那一条悬了一百六十七年。</p>

<p>1896 年，阿达马与德·拉·瓦莱-普桑各自独立证明 ζ 在 $\operatorname{Re}s=1$ 上没有零点，由此得到素数定理 $\pi(x)\sim x/\ln x$。这证明黎曼的路线是对的，但离他真正想要的那条误差估计还差得远。1900 年希尔伯特把它列入 23 个问题（第 8 问题的一部分）；2000 年克雷数学研究所把它列为七大千禧年大奖难题之一，悬赏 100 万美元。</p>

<h3>二、猜想的严格陈述</h3>
<p>对 $\operatorname{Re}s \gt 1$，黎曼 ζ 函数定义为</p>
<p class="crisis-math">$$\zeta(s)=\sum_{n=1}^{\infty}\frac{1}{n^{s}}=\prod_{p}\left(1-\frac{1}{p^{s}}\right)^{-1}$$</p>
<p>右侧的欧拉乘积是关键：<strong>ζ 函数把全体素数编码进了一个复变函数</strong>。ζ 可解析延拓为复平面上的亚纯函数，仅在 $s=1$ 处有一个留数为 $1$ 的单极点，并满足函数方程</p>
<p class="crisis-math">$$\xi(s)=\tfrac12 s(s-1)\pi^{-s/2}\Gamma\!\left(\tfrac{s}{2}\right)\zeta(s),\qquad \xi(s)=\xi(1-s)$$</p>
<p>负偶数 $s=-2,-4,-6,\dots$ 称为<strong>平凡零点</strong>；其余零点全部落在<strong>临界带</strong> $0 \lt \operatorname{Re}s \lt 1$ 内，称为<strong>非平凡零点</strong>。函数方程使零点同时关于实轴和直线 $\operatorname{Re}s=\tfrac12$ 对称，因此"所有非平凡零点都在临界线上"等价于"临界带右半边 $\tfrac12 \lt \operatorname{Re}s \lt 1$ 里一个零点也没有"。</p>

<p><strong>黎曼猜想（RH）：</strong>ζ 的每个非平凡零点 $\rho$ 都满足 $\operatorname{Re}\rho=\tfrac12$。</p>
<p><strong>广义黎曼猜想（GRH）：</strong>对每个本原 Dirichlet 特征 $\chi$，Dirichlet L 函数 $L(s,\chi)$ 的非平凡零点也都满足 $\operatorname{Re}\rho=\tfrac12$。GRH 覆盖的不是一个函数而是一整族 L 函数；它蕴含 RH，反之不然。</p>

<h3>三、零点为什么管得住素数</h3>
<p><strong>第一层联系是欧拉乘积。</strong>取对数得 $\ln\zeta(s)=\sum_{p}\sum_{k\ge 1}\frac{1}{k\,p^{ks}}$：素数出现的位置与重数，全部体现在 ζ 的极点与零点结构里。素数的信息不是"存"在某个公式中，而是"编码"在 ζ 这一个函数里。</p>

<p><strong>第二层联系是显式公式。</strong>令 $\psi(x)=\sum_{p^{k}\le x}\ln p$，冯·曼戈尔特（von Mangoldt）1895 年证明</p>
<p class="crisis-math">$$\psi(x)=x-\sum_{\rho}\frac{x^{\rho}}{\rho}-\ln(2\pi)-\tfrac12\ln\!\left(1-x^{-2}\right)$$</p>
<p>求和跑遍所有非平凡零点。这个公式把"素数计数"写成了"主项 $x$"减去"每个零点贡献的一列波"：零点 $\rho=\beta+i\gamma$ 给出的项，在对数尺度上振幅为 $x^{\beta}$、频率为 $\gamma$。</p>
<ul>
<li>若 $\beta=\tfrac12$，每列波的振幅都是 $\sqrt{x}$，总量级为 $\sqrt{x}\ln^{2}x$——这是可能达到的最小、最整齐的误差；</li>
<li>若存在 $\beta=\tfrac12+\delta$（$\delta \gt 0$）的零点，就会冒出一列振幅为 $x^{1/2+\delta}$ 的波，素数分布被系统性地"带偏"，偏离幅度远大于 $\sqrt{x}$。</li>
</ul>
<p>于是有精确的等价（冯·科赫，1901）：</p>
<p class="crisis-math">$$\text{RH}\iff \pi(x)=\operatorname{Li}(x)+O\!\left(\sqrt{x}\ln x\right)\iff \psi(x)=x+O\!\left(\sqrt{x}\ln^{2}x\right)$$</p>

<p><strong>第三层联系是零点的计数与统计。</strong>虚部不超过 $T$ 的非平凡零点个数满足</p>
<p class="crisis-math">$$N(T)=\frac{T}{2\pi}\ln\frac{T}{2\pi e}+O(\ln T)$$</p>
<p>即零点平均密度约为 $\frac{1}{2\pi}\ln\frac{T}{2\pi}$，越往高处越密。把三层放在一起看：素数看似随机，实际上是被一列频率为 $\gamma$ 的"音叉"调过音的结果；RH 断言的正是这些音叉的振幅被压到最小。这也是"素数的音乐"这个说法的来处。</p>

<h3>四、核心意义与影响</h3>
<p>黎曼猜想之所以被称为"数学中最重要的未解问题"，不在于它难，而在于<strong>它一旦成立，成百上千条定理立刻转正；它一旦被推翻，其中相当一部分立刻作废</strong>。文献中以 RH 或其推广形式为前提的命题超过一千条。</p>
<ul>
<li><strong>误差估计。</strong>RH 给出素数定理的最优误差：$\pi(x)=\operatorname{Li}(x)+O(\sqrt{x}\ln x)$；由此可推出相邻素数间距 $p_{n+1}-p_n=O(\sqrt{p_n}\ln p_n)$，以及短区间 $[x,x+\sqrt{x}\ln x]$ 中必有素数。</li>
<li><strong>数论中的条件性结论。</strong>GRH 之下，最小二次非剩余小于 $c\ln^{2}p$（Ankeny）、Artin 原根猜想成立（Hooley）、Chebotarev 密度定理有有效版本、类数问题得到控制、Miller–Rabin 素性判定成为确定性多项式算法——最后一条直接关系到密码学里大素数生成的参数估计。</li>
<li><strong>与谱理论的桥梁。</strong>Hilbert–Pólya 猜想认为零点应是某个自伴算子的特征值；Montgomery（1973）发现零点的对相关函数与随机矩阵的 GUE 统计吻合，Odlyzko 的大规模数值计算进一步支持这一图景。这把 RH 与量子混沌、谱几何连在了一起。</li>
<li><strong>函数域的类比已经成立。</strong>Weil 在 1940 年代证明了有限域上曲线 ζ 函数的"黎曼猜想"，Deligne（1974）证明了一般的 Weil 猜想。同一个命题在另一个世界里为真，是支持 RH 的最强旁证之一。</li>
<li><strong>朗兰兹纲领的普遍信条。</strong>GRH 是 L 函数世界的通用预期；反过来，RH 的任何进展都会牵动自守表示、算术几何的许多方向。</li>
</ul>

<h3>五、主要研究进展（1859–2024）</h3>
<ul>
<li><strong>1896</strong>　阿达马、德·拉·瓦莱-普桑独立证明 ζ 在 $\operatorname{Re}s=1$ 上无零点，得到素数定理（不依赖 RH）。</li>
<li><strong>1901</strong>　冯·科赫给出 RH 与素数计数误差项的等价形式。</li>
<li><strong>1914</strong>　哈代证明临界线上有无穷多个零点——第一个"无穷"级别的结果。</li>
<li><strong>1921</strong>　哈代–李特尔伍德证明临界线上零点至少有 $cT$ 个（$c \gt 0$）。</li>
<li><strong>1942</strong>　塞尔伯格证明临界线上的零点占<strong>正比例</strong>（比例虽小，但是常数）。</li>
<li><strong>1974</strong>　莱文森把比例提高到至少 $\tfrac13$。</li>
<li><strong>1989</strong>　康瑞（Conrey）提高到至少 <strong>40.88%</strong>（约五分之二），至今仍是这一路线的标志性数字。</li>
<li><strong>2004 / 2021</strong>　数值验证：Gourdon 验证了前 $10^{13}$ 个零点；Platt–Trudgian 验证了虚部小于 $3\times 10^{12}$ 的<strong>全部</strong>零点。有限验证不构成证明，但它把"反例存在"的空间压得很小。</li>
<li><strong>2024</strong>　Guth–Maynard 给出零点密度估计 $N(\sigma,T)\le T^{30(1-\sigma)/13+o(1)}$，首次实质性改进 Ingham 1940 年的经典界限，并顺带得到长度 $x^{17/30+o(1)}$ 的短区间素数结果。陶哲轩称其为"显著突破"，同时强调"离完全解决还很远"。</li>
<li><strong>其他路线。</strong>Weil 的显式公式与正性判据、Connes 的非交换几何迹公式、Berry–Keating 的量子化模型、de Branges 的 Hilbert 空间方案等，都提供了不同的切入点，但均未走通。2018 年阿蒂亚宣称的简短证明未获学界接受，也没有形成可检验的完整论证。</li>
</ul>
<p>一句话总结这一百六十五年：<strong>所有进展都是"逼近"，没有一条构成证明。</strong></p>

<h3>六、2026 年 11 月："Claude 辅助证明"的说法与验证状态</h3>
<p>2026 年恰逢<a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('riemann'); return false;">黎曼</a>诞辰 200 周年。11 月 20 日，Anthropic 的数学家莱文特·阿尔波格（Levent Alpöge）在个人网站发布一份四页说明，称在 Claude 协助下找到了黎曼猜想的证明，并称该方法可进一步推广到广义黎曼猜想。他公开的不是传统论文，而是一套约 <strong>1700 万行</strong>的 Lean 形式化代码，分 14 个压缩分卷发布；据他说明，整理成人类可读的文稿将超过 <strong>25 万页</strong>，因此先公开代码、后补论文。按他给出的时间线，从 Claude 介入到得出广义黎曼猜想的证明不足六周。他本人也坦言，尚未完全理解论证涉及的全部数学内容。</p>

<p><strong>11 月 21 日</strong>，Lean 与 Mathlib 开发者社区发布联合声明（由 Lean FRO 与 Mathlib Initiative 背书），称"我们完全确信阿尔波格对黎曼猜想的证明是正确的"。声明列出四条判据并逐条确认：命题表述直接取自 Mathlib 中经 Lean 与数论专家审过的标准定义；代码可编译，数十位研究者独立复现出完全一致的原始证明导出文件；用 comparator 与 con-leche 两套独立工具比对，确认所证定理与标准 RH 命题完全一致（这一步排除了"验证了推导、但证的不是原问题"这一最关键的隐患）；导出证明再经 Lean 官方内核、con-leche、con-ron 及多个第三方检查器检验。</p>

<p>独立复现方面，MIT 数学家安德鲁·萨瑟兰（Andrew Sutherland）公布的技术记录显示：<strong>175,187 个 Lean 模块全部编译通过</strong>，五条主定理只依赖 Lean 的三条标准公理；清华的博士后张凯羿用 128 核服务器耗时约 8 小时 22 分独立跑通。萨瑟兰称"其中藏有猫腻的概率约为零"。</p>

<p><strong>但"形式化核验通过"与"数学界公认"是两件不同的事。</strong>有三条边界必须说清：</p>
<ul>
<li><strong>核验的是形式化命题，不是数学思想。</strong>机器只保证"从公理到结论的每一步推导合法"，不解释哪一步是关键想法。25 万页文字稿没有公开，人类目前读不到这条证明。</li>
<li><strong>覆盖范围有限。</strong>社区认证的是 Mathlib 版本的 RH 命题，以及一部分带明确例外的 Dirichlet L 函数陈述；Dedekind ζ、Hecke L 函数与一般自守 L 函数不在其列。因此"广义黎曼猜想已被解决"这一更强的说法，<em>尚未</em>经这条路径核验。</li>
<li><strong>千禧年奖有自己的程序。</strong>克雷数学研究所仍将 RH 列为未解决问题；其规则要求成果正式发表、并经受至少两年的学界广泛检验，才进入奖金认定。所长马丁·布里德森（Martin Bridson）表示，评估是否真的证明了 RH 仍需时间。</li>
</ul>

<p>学界反应分歧明显。<a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('tao'); return false;">陶哲轩</a>在 11 月 20 日的博客中判断：这是一份仅有 Lean 版本的 GRH 证明，初步看用到了朗兰兹纲领与算术几何的现代工具，"学界消化理解这项成果尚需时日"。<a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('yau'); return false;">丘成桐</a>称其为"伟大的贡献"，认为数学研究"进入了一个新的纪元"，同时强调提出新问题、提炼理论仍要靠人。<a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('maynard'); return false;">梅纳德</a>表示自己有 98% 到 99% 的把握认为证明正确，但提醒形式化之外仍有几项检查不能省。<a class="fig-link" href="#ar-section-figures" onclick="gotoMathFigure('deng'); return false;">邓煜</a>则更克制：25 万页不可能可读，在可读版本出现之前不作评价。</p>

<p>值得一并记录的是，同在 11 月 20 日，美国数学会主席拉维·瓦基尔（Ravi Vakil）在博客上紧急公开了另一份<strong>完全由人完成、未用 AI</strong> 的广义黎曼猜想证明草稿：亚历山德罗·马苏洛（Alessandro Maria Masullo）写了十二年的《素数的音乐》（<i>The Music of the Primes</i>），940 页。约八小时后瓦基尔更新博客：已有多人借助不同的 AI 模型在草稿中发现问题并向他报告，所有疑点都要解决到学界满意，才谈得上被接受；布莱恩·康拉德（Brian Conrad）对媒体表示，这份稿子"正在经历大幅修改"。两份成果至今都没有被数学界接受。</p>

<p>此外，公布时机也引来讨论：Anthropic 于 11 月 19 日在纳斯达克挂牌，两天内公司研究人员宣布攻克千禧年难题，有人质疑是否配合上市宣传；阿尔波格称发布前已征询公司 CEO 达里奥·阿莫迪（Dario Amodei）。这类质疑与证明本身是否正确无关，但属于事件的一部分，故一并记录。</p>

<p><strong>因此，截至 2026 年 11 月 22 日，准确的说法是：</strong>黎曼猜想<strong>没有被数学界承认为已证明</strong>，克雷数学研究所仍将其列为未解决。这次事件的不同之处在于：它第一次让一个 RH 宣称进入了"命题经比对确认、证明经内核与多个独立检查器核验"的技术状态。但它是否构成一次数学意义上的证明，仍取决于人类能否读懂、提炼并接受其中的论证——<strong>不能表述为"黎曼猜想已被证明"</strong>。</p>

<h3>七、几个容易混淆的地方</h3>
<ul>
<li><strong>数值验证不等于证明。</strong>无论验证多少个零点（$10^{13}$ 量级、高度 $3\times10^{12}$ 以下全部），都只是有限个；猜想说的是无限多个零点。</li>
<li><strong>形式化核验不等于同行评议。</strong>前者检查推导是否合法，后者判断论证是否有价值、是否可理解、是否真的刻画了原问题。两者都必要，不能互相替代。</li>
<li><strong>证明了 RH 不等于证明了 GRH。</strong>GRH 更强；这次经核验的是 RH 命题与部分 Dirichlet L 函数陈述。</li>
<li><strong>机器给出证明不等于机器理解了证明。</strong>阿尔波格自陈尚未完全理解；25 万页的可读性本身就是一个待解决的数学问题。</li>
<li><strong>素数定理与 RH 是两回事。</strong>1896 年的素数定理不依赖 RH 已经成立；RH 管的是误差项的数量级。</li>
</ul>

<h3>八、参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> B. Riemann, "Über die Anzahl der Primzahlen unter einer gegebenen Grösse", <i>Monatsberichte der Berliner Akademie</i>, 1859（中译《论小于给定值的素数个数》，8 页）。</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> Clay Mathematics Institute, "Millennium Problems: Riemann Hypothesis"，https://www.claymath.org/millennium-problems/</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> H. M. Edwards, <i>Riemann's Zeta Function</i>, Academic Press, 1974.</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> E. C. Titchmarsh &amp; D. R. Heath-Brown, <i>The Theory of the Riemann Zeta-Function</i>, 2nd ed., Oxford, 1986.</p>
<p class="ar-ref"><span class="ar-ref-no">[5]</span> J. B. Conrey, "More than two fifths of the zeros of the Riemann zeta function are on the critical line", <i>J. reine angew. Math.</i> 399 (1989), 1–26.</p>
<p class="ar-ref"><span class="ar-ref-no">[6]</span> L. Guth &amp; J. Maynard, "New large value estimates for Dirichlet polynomials", arXiv:2405.20552 (2024).</p>
<p class="ar-ref"><span class="ar-ref-no">[7]</span> L. Alpöge, 个人网站声明（2026-11-20）：宣称与 Claude 合作得到 RH 与 GRH 的证明，公开约 1700 万行 Lean 代码。</p>
<p class="ar-ref"><span class="ar-ref-no">[8]</span> Lean 与 Mathlib 社区联合声明（2026-11-21），leanprover-community.github.io：确认形式化命题与证明均正确。</p>
<p class="ar-ref"><span class="ar-ref-no">[9]</span> A. Sutherland（MIT）验证记录（2026-11-22），math.mit.edu：175,187 个模块编译通过，仅依赖三条标准公理。</p>
<p class="ar-ref"><span class="ar-ref-no">[10]</span> R. Vakil, "Hurried Announcement: Alessandro Masullo GRH"（2026-11-20，含同日更新）：公开 Masullo 940 页草稿，并记录已发现的问题。</p>
<p class="ar-ref"><span class="ar-ref-no">[11]</span> 科技日报、澎湃新闻、新华社相关报道（2026-11-21 至 11-22）：丘成桐、陶哲轩、梅纳德、邓煜等的评论，以及克雷数学研究所的回应。</p>
