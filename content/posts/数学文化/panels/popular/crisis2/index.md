---
title: "第二次数学危机：无穷小量的合法性之争"
headless: true
hidePanelMeta: true
---
<div class="ar-toc-wrap">
<nav class="ar-toc" aria-label="面板目录">
  <button type="button" class="ar-toc-btn" aria-expanded="false" onclick="toggleArToc(event)" aria-label="目录导航" title="目录导航">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  </button>
  <div class="ar-toc-drop" role="menu">
<a class="ar-toc-l1 c-toc-h3" href="#一什么是数学危机">一、什么是"数学危机"</a>
<a class="ar-toc-l1 c-toc-h3" href="#二危机的背景微积分的诞生与使用中的矛盾">二、危机的背景：微积分的诞生与"使用中的矛盾"</a>
<a class="ar-toc-l2 c-toc-h4" href="#21牛顿与莱布尼茨的核心操作">2.1 牛顿与莱布尼茨的核心操作</a>
<a class="ar-toc-l2 c-toc-h4" href="#22一目了然的矛盾">2.2 一目了然的矛盾</a>
<a class="ar-toc-l1 c-toc-h3" href="#三危机的爆发贝克莱的诘难">三、危机的爆发：贝克莱的诘难</a>
<a class="ar-toc-l2 c-toc-h4" href="#31逻辑矛盾">3.1 逻辑矛盾</a>
<a class="ar-toc-l2 c-toc-h4" href="#32类比归谬">3.2 类比归谬</a>
<a class="ar-toc-l2 c-toc-h4" href="#33公允的评价">3.3 公允的评价</a>
<a class="ar-toc-l1 c-toc-h3" href="#四18世纪应用胜利与基础欠账">四、18 世纪：应用胜利与基础欠账</a>
<a class="ar-toc-l1 c-toc-h3" href="#五危机的实质三个概念的纠缠">五、危机的实质：三个概念的纠缠</a>
<a class="ar-toc-l1 c-toc-h3" href="#六危机的解决分析算术化">六、危机的解决：分析算术化</a>
<a class="ar-toc-l2 c-toc-h4" href="#61柯西极限概念的严格化">6.1 柯西：极限概念的严格化</a>
<a class="ar-toc-l2 c-toc-h4" href="#62魏尔斯特拉斯εδ语言">6.2 魏尔斯特拉斯：ε-δ 语言</a>
<a class="ar-toc-l2 c-toc-h4" href="#63实数理论与分析算术化">6.3 实数理论与"分析算术化"</a>
<a class="ar-toc-l1 c-toc-h3" href="#七尾声无穷小量的复活">七、尾声：无穷小量的"复活"</a>
<a class="ar-toc-l1 c-toc-h3" href="#八哲学意涵">八、哲学意涵</a>
<a class="ar-toc-l1 c-toc-h3" href="#九结语">九、结语</a>
<a class="ar-toc-l1 c-toc-h3" href="#参考文献">参考文献</a>
  </div>
</nav>
<div class="ar-toc-body crisis-article">
<h2 class="crisis-title">第二次数学危机：无穷小量的合法性之争</h2>
<h3 class="crisis-h3">——从"消失量的幽灵"到 ε-δ 语言的严格重建</h3>
<blockquote class="crisis-quote">
<p><strong>摘要</strong>：第二次数学危机围绕微积分中"无穷小量"的逻辑地位展开。牛顿与莱布尼茨创立的微积分在应用上节节胜利，其基础却依赖一个"既非零又非可忽略"的骑墙概念——无穷小量。1734 年贝克莱的诘难将这一逻辑矛盾公之于众；此后近两个世纪，经柯西的极限理论、魏尔斯特拉斯的 ε-δ 语言、以及戴德金与康托尔的实数构造，分析学完成了"算术化"重建，危机宣告解决。非标准分析事后证明：莱布尼茨的直觉并非必然矛盾，矛盾的只是 17 世纪未分化的概念系统。本文系统综述此次危机的来龙去脉、解决路径与哲学意涵。</p>
</blockquote>
<hr class="crisis-hr">
<h3 class="crisis-h3" id="一什么是数学危机">一、什么是"数学危机"</h3>
<p>"数学危机"并非数学被彻底推翻的时刻，而是指<strong>数学基础层面出现无法在现有理论框架内消解的矛盾</strong>，迫使数学家重新审视最基本的概念，并在此过程中重建更深层的理论。</p>
<p>第二次数学危机的独特之处在于：<strong>矛盾并未导致计算失效</strong>。微积分一路攻城略地，力学、天文学、工程学的成果辉煌夺目；失效的只是"解释"——没有人能说清这些计算为什么合法。这种"成果与基础的失衡"贯穿了 17、18 两个世纪，构成了危机的完整形态。数学史家 M. 克莱因（Morris Kline）在《古今数学思想》中对这段"带病扩张"的历史有详尽记述。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3" id="二危机的背景微积分的诞生与使用中的矛盾">二、危机的背景：微积分的诞生与"使用中的矛盾"</h3>
<h4 class="crisis-h4" id="21牛顿与莱布尼茨的核心操作">2.1 牛顿与莱布尼茨的核心操作</h4>
<p>17 世纪下半叶，牛顿与莱布尼茨（各自独立）创立微积分。其核心操作是：对量 $x$ 给予一个增量 $o$（牛顿记作"瞬"或最后比中的量，莱布尼茨记作 $dx$），展开运算后再把含 $o$ 的项<strong>丢弃</strong>，从而得到变化率或切线。</p>
<p>以莱布尼茨式的推导为例，求 $y = x^2$ 的导数：</p>
<p class="crisis-math">$$y + dy = (x + dx)^2 = x^2 + 2x\,dx + (dx)^2$$</p>
<p class="crisis-math">$$\frac{dy}{dx} = 2x + dx$$</p>
<p>随后"由于 $dx$ 是无穷小，故舍去 $dx$"，得</p>
<p class="crisis-math">$$y' = 2x$$</p>
<h4 class="crisis-h4" id="22一目了然的矛盾">2.2 一目了然的矛盾</h4>
<p><strong>$dx$ 要么非零——那它作为加项不可随意丢弃；要么为零——那整个增量过程无从发生。</strong> 无穷小量在这个框架里扮演着"既小于任何正数又大于零"的骑墙角色。</p>
<p>牛顿本人对此有所觉察。他先后提出"最初与最后比""流数法"等说法试图自圆：增量先"生长"出来参与运算，随后"消失"只留下比值。但这一表述始终在"消失的量"与"生成的比"之间摇摆——量在消失的哪个瞬间被取比值？消失之后还谈得上"比"吗？问题并未解决，只是换了一套措辞。</p>
<p>莱布尼茨则诉诸"无穷小是相对的、有用的虚构"以及"连续性原理"，同样未能给出逻辑上无懈可击的辩护。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3" id="三危机的爆发贝克莱的诘难">三、危机的爆发：贝克莱的诘难</h3>
<p>1734 年，爱尔兰主教乔治·贝克莱（George Berkeley）发表《分析学家；或致一位不信神的数学家》，对微积分的逻辑基础发起摧毁性攻击。其矛头名义上指向数学家对宗教的攻击（针对天文学家哈雷），逻辑批评却精准而刻毒：</p>
<h4 class="crisis-h4" id="31逻辑矛盾">3.1 逻辑矛盾</h4>
<p>牛顿在计算 $x^n$ 的流数时，先假设增量 $o$ 非零（否则无法作除法、无法约去公因子），化简后又假设 $o$ 为零（否则不能舍弃含 $o$ 的项）。贝克莱讥讽这些无穷小量是<strong>"消失量的幽灵"（ghosts of departed quantities）</strong>——</p>
<blockquote class="crisis-quote">
<p>"依靠双重错误得到了正确的结果：先通过一个不合理的假设（非零），又通过一个不相容的假设（为零）。"</p>
</blockquote>
<h4 class="crisis-h4" id="32类比归谬">3.2 类比归谬</h4>
<p>贝克莱进一步指出：数学家责备神学家在信仰中接受矛盾，而微积分的推理并不更严格——这是"以更晦涩的神秘代替更清晰的真理"。</p>
<h4 class="crisis-h4" id="33公允的评价">3.3 公允的评价</h4>
<p>应当公允地指出：贝克莱的攻击虽有神学动机，其逻辑批评却<strong>完全成立</strong>。这不是恶意构陷，而是一份合格的"逻辑审计报告"：它没有否定微积分结论的正确性（结论大多对），而是否定了其<strong>辩护体系</strong>。这正是数学危机的典型形态——<strong>辩护体系无法覆盖已被接受的发现</strong>。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3" id="四18世纪应用胜利与基础欠账">四、18 世纪：应用胜利与基础欠账</h3>
<p>整个 18 世纪，微积分呈现出"一手凯歌、一手烂账"的奇特局面。</p>
<p><strong>应用端</strong>：伯努利家族、欧拉、达朗贝尔、拉格朗日将微积分发展为力学、天体力学、光学的通用语言；欧拉的《无穷分析引论》把分析推向函数理论的宏大体系。</p>
<p><strong>基础端</strong>：各家补救均未成功——</p>
<ul class="crisis-list">
<li><strong>欧拉</strong>：把无穷小当作"恰好为零的数"，试图以零的运算规则化解矛盾（但零不能作除数，问题依旧）；</li>
<li><strong>达朗贝尔</strong>：提出"极限是分析的真正基础"，留下名言"无穷小量是严格思维的代用品"，但其极限观念仍是动态而含糊的；</li>
<li><strong>拉格朗日</strong>：试图完全绕开无穷小与极限，以泰勒幂级数重构分析（任意函数 = 幂级数展开），但幂级数的收敛性、以及"并非一切函数都可展开"的反例，使这条路走不通。</li>
</ul>
<p>欠账在累积：级数求和的谬误（如 $1-1+1-1+\cdots$ 的多值"求和"）、函数概念的混乱、连续与可导的混淆，不断提醒数学家——大厦的逻辑地基仍未验收。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3" id="五危机的实质三个概念的纠缠">五、危机的实质：三个概念的纠缠</h3>
<p>第二次危机表面上是"无穷小量是什么"的语义混乱，深层则是三个概念的重叠纠缠：</p>
<ol class="crisis-oln">
<li><strong>极限</strong>：变量逼近的过程（潜无限）；</li>
<li><strong>无穷小</strong>：被当作静态对象的"无限小量"（实无限）；</li>
<li><strong>导数</strong>：一个特定的比值 $\dfrac{\Delta y}{\Delta x}$ 在 $\Delta x \to 0$ 时的归宿。</li>
</ol>
<p>未分化地混用这三者，矛盾不可避免。这提示了一个深刻的教训：<strong>危机的解决不可能靠在旧框架内修补措辞，而必须引入新的、更精细的概念分层。</strong> 事实正是如此——极限论把"无穷小"降格为"过程"，ε-δ 语言再把"过程"翻译为"静态逻辑结构"，两层概念替代之后，骑墙的存在物才彻底退场。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3" id="六危机的解决分析算术化">六、危机的解决：分析算术化</h3>
<h4 class="crisis-h4" id="61柯西极限概念的严格化">6.1 柯西：极限概念的严格化</h4>
<p>奥古斯丁·路易·柯西（Cauchy）在《分析教程》（1821）等著作中，把分析重建在极限概念之上：</p>
<blockquote class="crisis-quote">
<p>当一个变量逐次取值无限趋近某个定值，使得与该定值之差可以小于任意给定的量时，该定值称为这个变量的<strong>极限</strong>。</p>
</blockquote>
<p>在此基础上，柯西给出连续性、导数与定积分的现代定义雏形：</p>
<ul class="crisis-list">
<li><strong>导数</strong>：$\dfrac{f(x+\alpha)-f(x)}{\alpha}$ 在 $\alpha \to 0$ 时的极限；</li>
<li><strong>定积分</strong>：分割—求和—取极限。</li>
</ul>
<p><strong>无穷小量在他的体系中降格为"以零为极限的变量"</strong>——不再是一个神秘的存在，而是一个过程。骑墙的静态无穷小由此被消解。</p>
<p>不过柯西的表述仍带有"变量趋近"的动态直觉，且其极限概念隐含依赖实数的完备性——而实数系本身尚未严格定义（这正是第一次危机遗留的问题）。</p>
<h4 class="crisis-h4" id="62魏尔斯特拉斯εδ语言">6.2 魏尔斯特拉斯：ε-δ 语言</h4>
<p>魏尔斯特拉斯（Weierstrass）完成了最后一步：把所有动态语言翻译为<strong>静态的量词逻辑</strong>。导数定义变为：</p>
<p class="crisis-math">$$f'(x_0) = \lim_{h \to 0} \frac{f(x_0+h) - f(x_0)}{h}$$</p>
<p class="crisis-math">$$\iff \forall \varepsilon > 0,\ \exists \delta > 0,\ \forall h\ \bigl(0 < |h| < \delta \Rightarrow \left|\tfrac{f(x_0+h)-f(x_0)}{h} - f'(x_0)\right| < \varepsilon\bigr)$$</p>
<p>在这个定义中，<strong>没有任何东西在"流动"</strong>：极限是一个由全称/存在量词刻画的静态逻辑结构，无穷小量彻底退场。</p>
<p>魏尔斯特拉斯还以一系列病态函数震撼学界——最著名的是<strong>处处连续却处处不可导的函数</strong>（1872 年报告中由其学生 du Bois-Reymond 呈报）。这类函数证明：直觉不仅不严格，而且<strong>不可靠</strong>——"连续曲线处处有切线"的百年信念被推翻。严格化因此不是学究式的修饰，而是必需品。</p>
<h4 class="crisis-h4" id="63实数理论与分析算术化">6.3 实数理论与"分析算术化"</h4>
<p>柯西-魏尔斯特拉斯的极限理论需要完备的数域作支撑。1872 年，戴德金（分割）与康托尔（柯西序列等价类）分别发表实数构造，1889 年皮亚诺给出自然数公理，分析的整个链条由此闭合：</p>
<p class="crisis-math">$$\mathbb{N} \xrightarrow{\text{皮亚诺公理}} \text{自然数} \xrightarrow{\text{有理数构造}} \mathbb{Q} \xrightarrow{\text{戴德金/康托尔}} \mathbb{R} \xrightarrow{\text{柯西/魏尔斯特拉斯}} \text{极限—连续—导数—积分}$$</p>
<p>这一运动史称<strong>"分析算术化"（arithmetization of analysis）</strong>：分析的全部概念最终被还原为整数及其逻辑运算。至此第二次危机宣告解决。</p>
<p><strong>值得特别注意的是</strong>：这次危机的解决方案——实数理论——恰好同时是第一次数学危机的最终闭合（√2 正是实数连续统中的一个点）。两场危机在 1872 年汇于同一个解，构成数学史上罕见的"双闭环"。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3" id="七尾声无穷小量的复活">七、尾声：无穷小量的"复活"</h3>
<p>20 世纪 60 年代，罗宾逊（Abraham Robinson）的非标准分析（1961 年提出，1966 年成书）利用模型论方法，在严格逻辑基础上构造了包含<strong>真实无穷小量</strong>的数域——超实数域 $^*\mathbb{R}$。</p>
<p>在 $^*\mathbb{R}$ 中，无穷小是一个<strong>逻辑上相容的合法数对象</strong>，只是不满足阿基米德性质（即不存在整数倍的累加能超过某个数）。莱布尼茨的直觉在事后两百年被证明是可以严格化的——这并非推翻标准分析，而是证明：</p>
<blockquote class="crisis-quote">
<p><strong>"无穷小"并非必然矛盾，矛盾的只是 17 世纪那个未分化的概念系统。</strong></p>
</blockquote>
<p>危机的终结因此更具意味：被否定的从来不是想法本身，而是其粗糙的逻辑形态。给思想定罪容易，给思想找到合法的逻辑居所难——数学的进步以后者的方式完成。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3" id="八哲学意涵">八、哲学意涵</h3>
<ol class="crisis-oln">
<li><strong>"双重错误"为何总能得到正确结果</strong>。贝克莱指出早期微积分"靠双重错误得正确结果"。严格化之后的解释是：微积分的计算实质上在操作一个线性主部（微分），丢弃的高阶项恰好不影响极限值。矛盾出在<strong>表述</strong>而非<strong>算法</strong>——算法的深层结构（线性近似）本来就是对的。</li>
</ol>
<ol class="crisis-oln">
<li><strong>危机是概念分层的催化剂</strong>。极限、无穷小、导数三个概念的纠缠，迫使数学家发明 ε-δ 语言这一"概念显微镜"。此后数学对"定义"的苛刻程度全面升级：测度、概率、维数等概念都在 20 世纪初经历了类似的"贝克莱式审计 + 严格化重建"。</li>
</ol>
<ol class="crisis-oln">
<li><strong>应用成功不等于理论合法</strong>。18 世纪的教训表明：外部成功可以为理论争取时间，但不能替代基础审查。物理直觉可以引导发现，数学的可靠性最终必须由演绎结构担保。</li>
</ol>
<ol class="crisis-oln">
<li><strong>潜无限与实无限之争的阶段性裁决</strong>。柯西-魏尔斯特拉斯方案以潜无限（逼近过程）取代实无限（无穷小对象），可视为亚里士多德禁令的胜利；但非标准分析随后表明实无限可以有条件地合法化。这道悬案要到第三次危机（集合论悖论）才真正摊牌。</li>
</ol>
<hr class="crisis-hr">
<h3 class="crisis-h3" id="九结语">九、结语</h3>
<p>第二次数学危机是"成功掩盖矛盾"的教科书案例：微积分带着逻辑漏洞征服了科学世界，而漏洞的弥补花了两百年。危机的解决没有靠任何天才的一句话，而靠一条完整的重建链——极限概念（柯西）→ 量词化语言（魏尔斯特拉斯）→ 实数理论（戴德金、康托尔）→ 自然数公理（皮亚诺）。这场运动教会数学两件事：<strong>给每个概念一个无歧义的定义，给每个定义一个可核查的逻辑结构</strong>。如果说第一次危机教会数学"证明"，那么第二次危机教会数学"定义"——两者合起来，就是现代数学的方法论本身。</p>
<hr class="crisis-hr">
<h3 class="crisis-h3" id="参考文献">参考文献</h3>
<ol class="crisis-oln">
<li>Kline, M. <em>Mathematical Thought from Ancient to Modern Times</em>（《古今数学思想》），Oxford University Press, 1972. 中译本：上海科学技术出版社，2014.</li>
<li>Boyer, C. B. &amp; Merzbach, U. C. <em>A History of Mathematics</em>, 3rd ed., Wiley, 2011.</li>
<li>Berkeley, G. <em>The Analyst: A Discourse Addressed to an Infidel Mathematician</em>, 1734.</li>
<li>Cauchy, A.-L. <em>Cours d'analyse de l'École Royale Polytechnique</em>, 1821.</li>
<li>Dedekind, R. <em>Stetigkeit und irrationale Zahlen</em>（《连续性与无理数》），1872.</li>
<li>Cantor, G. "Über die Ausdehnung eines Satzes aus der Theorie der trigonometrischen Reihen", <em>Mathematische Annalen</em>, 1872.</li>
<li>Weierstrass, K. 有关解析函数与连续不可导函数的讲义及报告（1872 年柏林科学院报告，由 du Bois-Reymond 记述）.</li>
<li>Robinson, A. <em>Non-standard Analysis</em>, North-Holland, 1966.</li>
<li>Grabiner, J. <em>The Origins of Cauchy's Rigorous Calculus</em>, MIT Press, 1981.（关于柯西严格化之历史来源的专题研究）</li>
<li>李文林. 《数学史概论》（第三版），高等教育出版社，2011.</li>
<li>张顺燕. 《数学的思想、方法和应用》，北京大学出版社，2003.</li>
</ol>
</div>
</div>
