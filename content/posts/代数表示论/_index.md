---
title: "代数表示论同调代数"
hideTitle: true
math: true
---

<div class="ar-section-switch">
  <button type="button" class="ar-sec-btn sec-violet active" onclick="switchArSection('conjectures', this)">核心猜想</button>
  <button type="button" class="ar-sec-btn sec-red" onclick="switchArSection('important', this)">重要猜想</button>
  <button type="button" class="ar-sec-btn sec-blue" onclick="switchArSection('theory', this)">基础理论</button>
  <button type="button" class="ar-sec-btn sec-green" onclick="switchArSection('frontier', this)">前沿理论</button>
  <button type="button" class="ar-sec-btn sec-orange" onclick="switchArSection('hot', this)">研究热点</button>
  <a href="https://icmconjectures.com" rel="noopener" class="ar-sec-btn sec-purple" style="text-decoration:none;">ICM Conjectures</a>
</div>

<div class="ar-conjectures-divider"></div>

<section id="ar-section-conjectures" class="ar-section">

<p class="ar-image-wrap"><img src="/images/conjecture-relations.png" alt="猜想之间的关系图"></p>

<div class="ai-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-red active" onclick="switchArTab('finite', this)">有限维数猜想</button>
    <button type="button" class="ai-tab-btn tab-orange" onclick="switchArTab('nakayama', this)">Nakayama猜想</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchArTab('gorenstein', this)">Gorenstein对称猜想</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchArTab('wakamatsu', this)">Wakamatsu tilting猜想</button>
    <button type="button" class="ai-tab-btn tab-violet" onclick="switchArTab('cartan', this)">Cartan行列式猜想</button>
    <button type="button" class="ai-tab-btn tab-teal" onclick="switchArTab('broue', this)">Broué交换亏群猜想</button>
    <button type="button" class="ai-tab-btn tab-yellow" onclick="switchArTab('telescope', this)">Telescope Conjecture</button>
    <button type="button" class="ai-tab-btn tab-purple" onclick="switchArTab('brauerthrall', this)">Brauer-Thrall猜想</button>
  </div>

{{< ar-panel "finite" "active" >}}
{{< ar-panel "nakayama" >}}
{{< ar-panel "gorenstein" >}}
{{< ar-panel "wakamatsu" >}}
{{< ar-panel "cartan" >}}
{{< ar-panel "broue" >}}
{{< ar-panel "telescope" >}}
{{< ar-panel "brauerthrall" >}}
</div>

</section>

<section id="ar-section-important" class="ar-section" hidden>

<div class="ai-tabs ar-important-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-red active" onclick="switchArTab('gpc', this)">Gorenstein投射猜想</button>
    <button type="button" class="ai-tab-btn tab-orange" onclick="switchArTab('nlc', this)">无环猜想</button>
    <button type="button" class="ai-tab-btn tab-yellow" onclick="switchArTab('igusasmalo', this)">Igusa-Smalø猜想</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchArTab('extension', this)">Extension猜想</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchArTab('hpr', this)">Happel-Preiser-Ringel猜想</button>
    <button type="button" class="ai-tab-btn tab-purple" onclick="switchArTab('gpfdc', this)">Gorenstein投射维数</button>
    <button type="button" class="ai-tab-btn tab-violet" onclick="switchArTab('fcy', this)">分数Calabi-Yau猜想</button>
    <button type="button" class="ai-tab-btn tab-red" onclick="switchArTab('ncluster', this)">n-cluster tilting</button>
    <button type="button" class="ai-tab-btn tab-yellow" onclick="switchArTab('gentle', this)">gentle导出分类</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchArTab('garc', this)">GARC（交换环）</button>
    <button type="button" class="ai-tab-btn tab-violet" onclick="switchArTab('silting', this)">silting公开问题</button>
    <button type="button" class="ai-tab-btn tab-red" onclick="switchArTab('derivedsimple', this)">导出单性</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchArTab('ttgeom', this)">张量三角几何</button>
    <button type="button" class="ai-tab-btn tab-teal" onclick="switchArTab('periodicity', this)">周期猜想</button>
  </div>

{{< ar-panel "gpc" "active" >}}
{{< ar-panel "nlc" >}}
{{< ar-panel "igusasmalo" >}}
{{< ar-panel "extension" >}}
{{< ar-panel "hpr" >}}
{{< ar-panel "gpfdc" >}}
{{< ar-panel "fcy" >}}
{{< ar-panel "ncluster" >}}
{{< ar-panel "gentle" >}}
{{< ar-panel "garc" >}}
{{< ar-panel "silting" >}}
{{< ar-panel "derivedsimple" >}}
{{< ar-panel "ttgeom" >}}
{{< ar-panel "periodicity" >}}
</div>

</section>

<section id="ar-section-theory" class="ar-section" hidden>

<div class="ai-tabs ar-theory-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-red active" onclick="switchArTheory('artheory', this)">Auslander-Reiten理论</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchArTheory('gabriel', this)">Gabriel定理</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchArTheory('tilting', this)">Tilting理论</button>
    <button type="button" class="ai-tab-btn tab-orange" onclick="switchArTheory('excat', this)">导出范畴</button>
    <button type="button" class="ai-tab-btn tab-yellow" onclick="switchArTheory('dg', this)">DG范畴</button>
    <button type="button" class="ai-tab-btn tab-purple" onclick="switchArTheory('model', this)">Model Category</button>
  </div>

  <div id="ar-theory-panel-artheory" class="ai-tab-panel active">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-theory-panel-gabriel" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-theory-panel-tilting" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-theory-panel-excat" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-theory-panel-dg" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-theory-panel-model" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>
</div>

</section>

<section id="ar-section-frontier" class="ar-section" hidden>

<div class="ai-tabs ar-frontier-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-red active" onclick="switchArFrontier('infinity', this)">Infinity Category</button>
    <button type="button" class="ai-tab-btn tab-orange" onclick="switchArFrontier('ttg', this)">Tensor Triangulated Geometry</button>
    <button type="button" class="ai-tab-btn tab-yellow" onclick="switchArFrontier('approximable', this)">Approximable Triangulated category</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchArFrontier('cluster', this)">Cluster Theory</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchArFrontier('operad', this)">Operad Theory</button>
    <button type="button" class="ai-tab-btn tab-teal" onclick="switchArFrontier('har', this)">高维AR理论</button>
    <button type="button" class="ai-tab-btn tab-purple" onclick="switchArFrontier('tautilting', this)">$\tau$-tilting理论</button>
  </div>

  <div id="ar-frontier-panel-infinity" class="ai-tab-panel active">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-frontier-panel-ttg" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  {{< ar-panel "approximable" "" "ar-frontier-panel-" >}}
  <div id="ar-frontier-panel-cluster" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-frontier-panel-operad" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-frontier-panel-har" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-frontier-panel-tautilting" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>
</div>

</section>

<section id="ar-section-hot" class="ar-section" hidden>

<div class="ai-tabs ar-hot-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-blue active" onclick="switchArHot('dgenhance', this)">DG enhancement</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchArHot('stdderived', this)">Standard Derived Equivalence</button>
    <button type="button" class="ai-tab-btn tab-yellow" onclick="switchArHot('gentle', this)">Gentle Algebra</button>
    <button type="button" class="ai-tab-btn tab-orange" onclick="switchArHot('preprojective', this)">Preprojective Algebra</button>
    <button type="button" class="ai-tab-btn tab-red" onclick="switchArHot('gorensteinhomo', this)">Gorenstein 同调理论</button>
    <button type="button" class="ai-tab-btn tab-teal" onclick="switchArHot('geometric', this)">Geometric model</button>
    <button type="button" class="ai-tab-btn tab-purple" onclick="switchArHot('clustertilting', this)">Cluster tilting</button>
    <button type="button" class="ai-tab-btn tab-violet" onclick="switchArHot('approx', this)">Approximable Triangulated Categories</button>
    <button type="button" class="ai-tab-btn tab-cyan" onclick="switchArHot('cmtype', this)">CM Type of Brauer-Thrall猜想</button>
  </div>

  <div id="ar-hot-panel-dgenhance" class="ai-tab-panel active">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-hot-panel-stdderived" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-hot-panel-gentle" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-hot-panel-preprojective" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-hot-panel-gorensteinhomo" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-hot-panel-geometric" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-hot-panel-clustertilting" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-hot-panel-cmtype" class="ai-tab-panel">
<h3 class="ar-subhead">问题陈述</h3>
<p>
<strong>CM Type of Brauer–Thrall 猜想（Chen 问题）：</strong>设 $\Lambda$ 为 Artin 代数。称 $\Lambda$ 是 <strong>CM-bounded</strong>（Cohen–Macaulay 有界型），若其所有不可分解有限生成 Gorenstein-投射左 $\Lambda$-模的长度一致有界。Chen 提出问题：<strong>每个 CM-bounded Artin 代数是否必为 CM-finite（即仅有有限个不可分解 Gorenstein-投射模同构类）？</strong>
</p>

<p>
这一问题可视为 <strong>Brauer–Thrall 第一定理在 Gorenstein-投射模范畴中的相对形式</strong>：经典 Brauer–Thrall I 断言"有界表示型 ⇒ 有限表示型"，而此处将"投射模"换为"Gorenstein-投射模"，将"维数"换为"长度"，在更广泛的 Artin 代数（不必 Gorenstein）上提出同样问题。
</p>

<h3 class="ar-subhead">研究现状</h3>
<ul class="ar-timeline">
  <li><span class="ar-year">2020</span>Chen 在附录中正式提出此问题（<i>arXiv:2008.11457</i>，附录 C, Problem E），并证明：当 $\Lambda$ 为 Gorenstein 时，CM-finite 等价于每个 Gorenstein-投射模都是有限生成的直和。</li>
  <li><span class="ar-year">2026</span>Liu 证明一般情形：对任意左 Artinian 环 $R$ 的 resolving 子范畴 $\mathcal{X}$，以下三个条件等价——(1) $\mathcal{X}$ 有限型；(2) $\mathcal{X}$ 有界型；(3) $\mathcal{X}$ 中不可分解对象的最小生成元个数一致有界（<i>Bounded resolving and coresolving subcategories over Artinian rings</i>）。</li>
  <li><span class="ar-year">2026</span>作为上述定理的直接推论，<strong>每个 CM-bounded Artin 代数必为 CM-finite</strong>（Corollary 1.2）。这完全肯定了 Chen 的猜想，并给出了更一般的相对版本。</li>
</ul>

<p><strong>已解决的关键特例与推广：</strong></p>
<ul>
  <li><strong>Gorenstein 代数：</strong>Chen 2020 已证明 CM-finite ⟺ 每个 Gorenstein-投射模均为有限生成直和；</li>
  <li><strong>任意 Artin 代数：</strong>Liu 2026 通过 resolving 子范畴的有限型/有界型等价定理，将结论推广到任意 Artin 代数，并给出对偶的 coresolving 版本；</li>
  <li><strong>最小生成元刻画：</strong>有界型等价于不可分解对象的最小生成元个数一致有界，提供了可计算的数值判据。</li>
</ul>

<h3 class="ar-subhead">核心方法</h3>
<div class="ar-chain">
  <span class="ar-chain-node"><b>Resolving 子范畴</b><small>含投射模，闭于直和项、扩张、上核</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>Functor 环</b><small>Harada–Sai 引理</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>Flat 函子均投射</b><small>有界型 ⇒ 平坦函子投射性</small></span>
  <span class="ar-chain-arrow">⇒</span>
  <span class="ar-chain-node"><b>Beligiannis 判据</b><small>有限型 ⟺ 函子环有限表示型</small></span>
</div>
<p class="ar-mnote">关键一步：Harada–Sai 引理说明有界型迫使所有平坦加法函子变为投射，从而函子环满足有限表示型条件，再由 Beligiannis 的表示-有限判据得出有限型。</p>

<h3 class="ar-subhead">参考文献</h3>
<p class="ar-ref"><span class="ar-ref-no">[1]</span> Y. Han, <i>Hirzebruch–Riemann–Roch and Lefschetz type formulas for finite dimensional algebras</i>, arXiv:2008.11457 (2020).</p>
<p class="ar-ref"><span class="ar-ref-no">[2]</span> J. Liu, <i>Bounded resolving and coresolving subcategories over Artinian rings</i> (2026).</p>
<p class="ar-ref"><span class="ar-ref-no">[3]</span> A. Beligiannis, <i>Relative homological algebra and purity in triangulated categories</i>, J. Algebra <b>227</b> (2000), 268–361.</p>
  </div>

  {{< ar-panel "approx" "" "ar-hot-panel-" >}}
</div>

</section>

<script>
function switchArSection(id, btn) {
  document.querySelectorAll('.ar-sec-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('.ar-section').forEach(function (s) { s.setAttribute('hidden', ''); });
  document.getElementById('ar-section-' + id).removeAttribute('hidden');
}
function switchArTab(id, btn) {
  var group = btn.closest('.ai-tabs');
  group.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  group.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  group.querySelector('#ar-panel-' + id).classList.add('active');
}
function switchArTheory(id, btn) {
  var group = btn.closest('.ai-tabs');
  group.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  group.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  group.querySelector('#ar-theory-panel-' + id).classList.add('active');
}
function switchArFrontier(id, btn) {
  var group = btn.closest('.ai-tabs');
  group.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  group.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  group.querySelector('#ar-frontier-panel-' + id).classList.add('active');
}
function switchArHot(id, btn) {
  var group = btn.closest('.ai-tabs');
  group.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  group.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  group.querySelector('#ar-hot-panel-' + id).classList.add('active');
}

/* 搜索结果带 #ar-panel-xxx / #ar-theory-panel-xxx / #ar-frontier-panel-xxx / #ar-hot-panel-xxx 锚点跳转时，自动展开对应 Tab */
(function () {
  function activateFromHash() {
    var hash = decodeURIComponent(location.hash || '').trim();
    if (!hash.startsWith('#')) return;
    var panelId = hash.slice(1);
    var panel = document.getElementById(panelId);
    if (!panel) return;
    var group = panel.closest('.ai-tabs');
    if (!group) return;
    var btn = group.querySelector('.ai-tab-btn[onclick*="' + panelId.replace(/^ar-(theory-|frontier-|hot-|)panel-/, '') + '"]');
    // 显示在对应分区
    var section = panel.closest('.ar-section');
    if (section) {
      var secBtn = document.querySelector('.ar-sec-btn[onclick*="' + section.id.replace('ar-section-', '') + '"]');
      if (secBtn) secBtn.click();
    }
    if (btn) btn.click();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', activateFromHash);
  } else {
    activateFromHash();
  }
})();
</script>
