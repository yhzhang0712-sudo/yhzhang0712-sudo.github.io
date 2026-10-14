---
title: "四色定理：一张地图引发的 153 年数学长征"
headless: true
hidePanelMeta: true
---
<h2>四色定理：一张地图引发的 153 年数学长征</h2>

<h3>一、从一张地图说起</h3>
<p>1852 年，英国人弗兰西斯·格思里（Francis Guthrie）在给一张英国地图涂色时注意到一件事：无论地图多么复杂，<strong>四种颜色好像总是够用</strong>——每个区域只需一种颜色，且任何两个接壤的区域不同色。他和弟弟弗雷德里克反复试画都找不到反例，于是写信请教伦敦大学的教授德·摩根（De Morgan）。这个问题从此进入数学史。</p>

<p class="ar-image-wrap"><img loading="lazy" src="/images/fig1_map.webp" width="1200" height="959" alt="四色地图示例"></p>

<h3>二、定理的准确表述</h3>
<p>四色定理有两种标准的等价说法。</p>
<p><strong>地图版（原始形式）：</strong>把平面（或球面）划分为有限多个连通区域。若两个区域拥有<strong>一段公共边界曲线</strong>（只在有限个点相碰不算相邻），则必可给每个区域指定 4 种颜色之一，使得任何相邻的两个区域颜色不同。</p>
<p><strong>图论版（现代标准形式）：</strong><strong>每个平面图 G 都满足色数 χ(G) ≤ 4。</strong>换言之，任何平面图的顶点都可以用至多 4 种颜色正常着色。</p>

<h3>三、四个基本概念</h3>
<p><strong>1. 图（graph）。</strong>点和连线的集合：点叫顶点，线叫边。</p>
<p><strong>2. 平面图（planar graph）。</strong>能画在平面上且<strong>任何两条边不相交</strong>的图。</p>
<p><strong>3. 对偶图（dual graph）。</strong>给地图的每个区域放一个顶点；两个区域接壤，就在对应顶点间连一条边。</p>
<p><strong>4. 色数 χ(G)。</strong>给 G 的顶点正常着色（相邻顶点异色）所需的最少颜色数。</p>

<p class="ar-image-wrap"><img loading="lazy" src="/images/fig2_dual.webp" width="1200" height="465" alt="地图与对偶图"></p>
<p class="ar-image-wrap"><img loading="lazy" src="/images/fig3_k4k5.webp" width="1200" height="638" alt="K4 与 K5"></p>

<h3>四、Kempe 链：一个站了 11 年的"证明"</h3>
<p>1879 年，伦敦律师兼数学家肯普（A. B. Kempe）发表了一个看似无懈可击的证明。</p>

<p class="ar-image-wrap"><img loading="lazy" src="/images/fig4_kempe.webp" width="1200" height="1103" alt="Kempe 链"></p>

<p>1890 年，希伍德（P. Heawood）找出致命漏洞：<strong>两条 Kempe 链可以在别处相互缠绕</strong>，"红绿互换"这一步会波及另一条链的颜色，推理因此失效。</p>

<h3>五、计算机登台：1976 年的革命</h3>
<p>1976 年，伊利诺伊大学的阿佩尔（K. Appel）与哈肯（W. Haken）在科赫（J. Koch）协助下完成了这一纲领：他们构造了一个含 <strong>1936 个可约构形</strong>的不可避免集，计算机累计运行<strong>一千多个小时</strong>，逐一完成验证。四色定理终于成立。</p>

<p class="ar-image-wrap"><img loading="lazy" src="/images/fig5_timeline.webp" width="1200" height="568" alt="时间线"></p>

<p>后续发展：</p>
<ul>
  <li><strong>1996 年</strong>，罗伯逊、桑德斯、西摩、托马斯（RSST）给出大幅简化的新证明，构形数降到 <strong>633 个</strong>；</li>
  <li><strong>2005 年</strong>，贡蒂埃（G. Gonthier）把证明完整编码进<strong>Coq 证明助手</strong>，由计算机对"证明本身"做形式化检查。</li>
</ul>

<h3>六、四色的"边界"</h3>
<ul>
  <li><strong>4 不能再少：</strong>K₄ 说明 4 是下界；四色定理说明 4 是上界。</li>
  <li><strong>三色什么时候够？</strong>格勒茨奇定理（1959）：不含三角形的平面图一定可以 3-着色。</li>
  <li><strong>计算复杂性：</strong>对一般图判断"能否 3-着色"是 NP-完全问题；平面图上 3-着色同样困难。</li>
</ul>

<h3>七、参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> R. Wilson, <i>Four Colors Suffice: How the Map Problem Was Solved</i>, Princeton University Press.</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> Appel & Haken, <i>Illinois Journal of Mathematics</i> 21 (1977).</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> Robertson–Sanders–Seymour–Thomas, <i>J. Combin. Theory B</i> 70 (1997).</p>
<p class="ar-ref"><span class="ar-ref-no">[4]</span> G. Gonthier, "A computer-checked proof of the Four Colour Theorem" (2005).</p>
