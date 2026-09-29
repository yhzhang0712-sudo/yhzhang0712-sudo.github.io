---
title: "代数表示论同调代数"
hideTitle: true
math: true
description: "代数表示论与同调代数猜想中心：有限维数、Nakayama、Gorenstein 对称、Wakamatsu tilting、Cartan 行列式等核心猜想与重要猜想的陈述、研究进展与参考文献。"
searchText: "代数表示论与同调代数猜想总览。分区：核心猜想（有限维数猜想、Nakayama猜想、Gorenstein对称猜想、Wakamatsu tilting猜想、Cartan行列式猜想、Broué交换亏群猜想、Telescope猜想、Brauer-Thrall猜想）；重要猜想（Gorenstein投射猜想、无环猜想、Igusa-Smalø猜想、Extension猜想、Happel-Preiser-Ringel猜想、Gorenstein投射维数、分数Calabi-Yau、n-cluster tilting、gentle导出分类、GARC、silting公开问题、导出单性、张量三角几何、周期猜想、CM Type、Weakly-Gorenstein、no-loop）；基础理论（Auslander-Reiten理论：几乎分裂序列、AR平移τ=DTr、AR公式、AR箭图与mesh关系；Gabriel定理：Dynkin型与正根双射、BGP反射函子、Tits二次型、Kac定理与species；Tilting理论：倾斜模三条件、Brenner–Butler挠对、Happel导出等价、Rickard倾斜复形、APR倾斜模；导出范畴：拟同构局部化、roof屋顶、三角与映射锥、Ext^n=Hom_D(M,N[n])、Serre函子、t-结构与奇点范畴；DG范畴：Leibniz律、H^0同伦范畴、pretriangulated、dg商、Koszul对偶；Model Category：Quillen五公理、提升与替换、导出函子、Quillen等价）；前沿理论（稳定∞-范畴与 dg/A∞ 增强、张量三角几何与 Balmer 谱—素张量理想—支撑—层化—望远镜猜想、Approximable 可逼近三角范畴、Cluster Theory 丛范畴与 2-Calabi-Yau 突变、Operad 与 Koszul 对偶、高维 Auslander–Reiten 理论—d-丛倾斜子范畴—d-几乎分裂序列—n-abelian 范畴、τ-tilting 理论—τ-刚性—support τ-倾斜—两项 silting—g-向量扇）；研究热点（DG enhancement、Standard Derived Equivalence、Gentle Algebra、Preprojective Algebra、Gorenstein同调理论、Geometric model、Cluster tilting）。各猜想的详细陈述、研究进展与参考文献见对应独立条目。"
---

<h1 class="sr-only">代数表示论同调代数</h1>

<div class="ar-section-switch" role="tablist">
  <button type="button" class="ar-sec-btn sec-violet active" role="tab" id="tab-ar-section-conjectures" aria-controls="ar-section-conjectures" aria-selected="true" tabindex="0" onclick="switchArSection('conjectures', this)">核心猜想</button>
  <button type="button" class="ar-sec-btn sec-red" role="tab" id="tab-ar-section-important" aria-controls="ar-section-important" aria-selected="false" tabindex="-1" onclick="switchArSection('important', this)">重要猜想</button>
  <button type="button" class="ar-sec-btn sec-blue" role="tab" id="tab-ar-section-theory" aria-controls="ar-section-theory" aria-selected="false" tabindex="-1" onclick="switchArSection('theory', this)">基础理论</button>
  <button type="button" class="ar-sec-btn sec-green" role="tab" id="tab-ar-section-frontier" aria-controls="ar-section-frontier" aria-selected="false" tabindex="-1" onclick="switchArSection('frontier', this)">前沿理论</button>
  <button type="button" class="ar-sec-btn sec-orange" role="tab" id="tab-ar-section-hot" aria-controls="ar-section-hot" aria-selected="false" tabindex="-1" onclick="switchArSection('hot', this)">研究热点</button>
  <a href="https://icmconjectures.com" rel="noopener" class="ar-sec-btn sec-purple" style="text-decoration:none;">ICM Conjectures</a>
</div>

<div class="ar-conjectures-divider"></div>

<section id="ar-section-conjectures" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-conjectures">

<p class="ar-image-wrap"><img src="/images/conjecture-relations.webp" width="1200" height="471" alt="猜想之间的关系图"></p>

<div class="ai-tabs">
  <div class="ai-tab-btns" role="tablist">
    <button type="button" class="ai-tab-btn tab-red active" role="tab" id="tab-ar-panel-finite" aria-controls="ar-panel-finite" aria-selected="true" tabindex="0" onclick="switchArTab('finite', this)">有限维数猜想</button>
    <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-panel-nakayama" aria-controls="ar-panel-nakayama" aria-selected="false" tabindex="-1" onclick="switchArTab('nakayama', this)">Nakayama猜想</button>
    <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-panel-gorenstein" aria-controls="ar-panel-gorenstein" aria-selected="false" tabindex="-1" onclick="switchArTab('gorenstein', this)">Gorenstein对称猜想</button>
    <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-panel-wakamatsu" aria-controls="ar-panel-wakamatsu" aria-selected="false" tabindex="-1" onclick="switchArTab('wakamatsu', this)">Wakamatsu tilting猜想</button>
    <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-panel-cartan" aria-controls="ar-panel-cartan" aria-selected="false" tabindex="-1" onclick="switchArTab('cartan', this)">Cartan行列式猜想</button>
    <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-panel-broue" aria-controls="ar-panel-broue" aria-selected="false" tabindex="-1" onclick="switchArTab('broue', this)">Broué交换亏群猜想</button>
    <button type="button" class="ai-tab-btn tab-yellow" role="tab" id="tab-ar-panel-telescope" aria-controls="ar-panel-telescope" aria-selected="false" tabindex="-1" onclick="switchArTab('telescope', this)">Telescope Conjecture</button>
    <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-panel-brauerthrall" aria-controls="ar-panel-brauerthrall" aria-selected="false" tabindex="-1" onclick="switchArTab('brauerthrall', this)">Brauer-Thrall猜想</button>
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

<section id="ar-section-important" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-important" hidden>

<div class="ai-tabs ar-important-tabs">
  <div class="ai-tab-btns" role="tablist">
    <button type="button" class="ai-tab-btn tab-red active" role="tab" id="tab-ar-panel-gpc" aria-controls="ar-panel-gpc" aria-selected="true" tabindex="0" onclick="switchArTab('gpc', this)">Gorenstein投射猜想</button>
    <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-panel-nlc" aria-controls="ar-panel-nlc" aria-selected="false" tabindex="-1" onclick="switchArTab('nlc', this)">无环猜想</button>
    <button type="button" class="ai-tab-btn tab-yellow" role="tab" id="tab-ar-panel-igusasmalo" aria-controls="ar-panel-igusasmalo" aria-selected="false" tabindex="-1" onclick="switchArTab('igusasmalo', this)">Igusa-Smalø猜想</button>
    <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-panel-extension" aria-controls="ar-panel-extension" aria-selected="false" tabindex="-1" onclick="switchArTab('extension', this)">Extension猜想</button>
    <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-panel-hpr" aria-controls="ar-panel-hpr" aria-selected="false" tabindex="-1" onclick="switchArTab('hpr', this)">Happel-Preiser-Ringel猜想</button>
    <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-panel-gpfdc" aria-controls="ar-panel-gpfdc" aria-selected="false" tabindex="-1" onclick="switchArTab('gpfdc', this)">Gorenstein投射维数</button>
    <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-panel-fcy" aria-controls="ar-panel-fcy" aria-selected="false" tabindex="-1" onclick="switchArTab('fcy', this)">分数Calabi-Yau猜想</button>
    <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-panel-ncluster" aria-controls="ar-panel-ncluster" aria-selected="false" tabindex="-1" onclick="switchArTab('ncluster', this)">n-cluster tilting</button>
    <button type="button" class="ai-tab-btn tab-yellow" role="tab" id="tab-ar-panel-gentle" aria-controls="ar-panel-gentle" aria-selected="false" tabindex="-1" onclick="switchArTab('gentle', this)">gentle导出分类</button>
    <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-panel-garc" aria-controls="ar-panel-garc" aria-selected="false" tabindex="-1" onclick="switchArTab('garc', this)">GARC（交换环）</button>
    <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-panel-silting" aria-controls="ar-panel-silting" aria-selected="false" tabindex="-1" onclick="switchArTab('silting', this)">silting公开问题</button>
    <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-panel-derivedsimple" aria-controls="ar-panel-derivedsimple" aria-selected="false" tabindex="-1" onclick="switchArTab('derivedsimple', this)">导出单性</button>
    <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-panel-ttgeom" aria-controls="ar-panel-ttgeom" aria-selected="false" tabindex="-1" onclick="switchArTab('ttgeom', this)">张量三角几何</button>
    <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-panel-periodicity" aria-controls="ar-panel-periodicity" aria-selected="false" tabindex="-1" onclick="switchArTab('periodicity', this)">周期猜想</button>
    <button type="button" class="ai-tab-btn tab-cyan" role="tab" id="tab-ar-panel-cmtype" aria-controls="ar-panel-cmtype" aria-selected="false" tabindex="-1" onclick="switchArTab('cmtype', this)">CM Type of Brauer-Thrall猜想</button>
    <button type="button" class="ai-tab-btn tab-indigo" role="tab" id="tab-ar-panel-weaklygorenstein" aria-controls="ar-panel-weaklygorenstein" aria-selected="false" tabindex="-1" onclick="switchArTab('weaklygorenstein', this)">Weakly-Gorenstein对称猜想</button>
    <button type="button" class="ai-tab-btn tab-pink" role="tab" id="tab-ar-panel-noloop" aria-controls="ar-panel-noloop" aria-selected="false" tabindex="-1" onclick="switchArTab('noloop', this)">no-loop conjecture</button>
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
{{< ar-panel "cmtype" >}}
{{< ar-panel "weaklygorenstein" >}}
{{< ar-panel "noloop" >}}
</div>

</section>

<section id="ar-section-theory" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-theory" hidden>

<div class="ai-tabs ar-theory-tabs">
  <div class="ai-tab-btns" role="tablist">
    <button type="button" class="ai-tab-btn tab-red active" role="tab" id="tab-ar-theory-panel-artheory" aria-controls="ar-theory-panel-artheory" aria-selected="true" tabindex="0" onclick="switchArTheory('artheory', this)">Auslander-Reiten理论</button>
    <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-theory-panel-gabriel" aria-controls="ar-theory-panel-gabriel" aria-selected="false" tabindex="-1" onclick="switchArTheory('gabriel', this)">Gabriel定理</button>
    <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-theory-panel-tilting" aria-controls="ar-theory-panel-tilting" aria-selected="false" tabindex="-1" onclick="switchArTheory('tilting', this)">Tilting理论</button>
    <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-theory-panel-excat" aria-controls="ar-theory-panel-excat" aria-selected="false" tabindex="-1" onclick="switchArTheory('excat', this)">导出范畴</button>
    <button type="button" class="ai-tab-btn tab-yellow" role="tab" id="tab-ar-theory-panel-dg" aria-controls="ar-theory-panel-dg" aria-selected="false" tabindex="-1" onclick="switchArTheory('dg', this)">DG范畴</button>
    <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-theory-panel-model" aria-controls="ar-theory-panel-model" aria-selected="false" tabindex="-1" onclick="switchArTheory('model', this)">Model Category</button>
  </div>

  {{< ar-panel "artheory" "active" "ar-theory-panel-" >}}

  {{< ar-panel "gabriel" "" "ar-theory-panel-" >}}

  {{< ar-panel "tilting" "" "ar-theory-panel-" >}}

  {{< ar-panel "excat" "" "ar-theory-panel-" >}}

  {{< ar-panel "dg" "" "ar-theory-panel-" >}}

  {{< ar-panel "model" "" "ar-theory-panel-" >}}
</div>

</section>

<section id="ar-section-frontier" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-frontier" hidden>

<div class="ai-tabs ar-frontier-tabs">
  <div class="ai-tab-btns" role="tablist">
    <button type="button" class="ai-tab-btn tab-red active" role="tab" id="tab-ar-frontier-panel-infinity" aria-controls="ar-frontier-panel-infinity" aria-selected="true" tabindex="0" onclick="switchArFrontier('infinity', this)">Infinity Category</button>
    <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-frontier-panel-ttg" aria-controls="ar-frontier-panel-ttg" aria-selected="false" tabindex="-1" onclick="switchArFrontier('ttg', this)">Tensor Triangulated Geometry</button>
    <button type="button" class="ai-tab-btn tab-yellow" role="tab" id="tab-ar-frontier-panel-approximable" aria-controls="ar-frontier-panel-approximable" aria-selected="false" tabindex="-1" onclick="switchArFrontier('approximable', this)">Approximable Triangulated category</button>
    <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-frontier-panel-cluster" aria-controls="ar-frontier-panel-cluster" aria-selected="false" tabindex="-1" onclick="switchArFrontier('cluster', this)">Cluster Theory</button>
    <button type="button" class="ai-tab-btn tab-blue" role="tab" id="tab-ar-frontier-panel-operad" aria-controls="ar-frontier-panel-operad" aria-selected="false" tabindex="-1" onclick="switchArFrontier('operad', this)">Operad Theory</button>
    <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-frontier-panel-har" aria-controls="ar-frontier-panel-har" aria-selected="false" tabindex="-1" onclick="switchArFrontier('har', this)">高维AR理论</button>
    <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-frontier-panel-tautilting" aria-controls="ar-frontier-panel-tautilting" aria-selected="false" tabindex="-1" onclick="switchArFrontier('tautilting', this)">$\tau$-tilting理论</button>
  </div>

  {{< ar-panel "infinity" "" "ar-frontier-panel-" >}}

  {{< ar-panel "ttg" "" "ar-frontier-panel-" >}}

  {{< ar-panel "approximable" "" "ar-frontier-panel-" >}}
  {{< ar-panel "cluster" "" "ar-frontier-panel-" >}}

  {{< ar-panel "operad" "" "ar-frontier-panel-" >}}

  {{< ar-panel "har" "" "ar-frontier-panel-" >}}

  {{< ar-panel "tautilting" "" "ar-frontier-panel-" >}}
</div>

</section>

<section id="ar-section-hot" class="ar-section" role="tabpanel" aria-labelledby="tab-ar-section-hot" hidden>

<div class="ai-tabs ar-hot-tabs">
  <div class="ai-tab-btns" role="tablist">
    <button type="button" class="ai-tab-btn tab-blue active" role="tab" id="tab-ar-hot-panel-dgenhance" aria-controls="ar-hot-panel-dgenhance" aria-selected="true" tabindex="0" onclick="switchArHot('dgenhance', this)">DG enhancement</button>
    <button type="button" class="ai-tab-btn tab-green" role="tab" id="tab-ar-hot-panel-stdderived" aria-controls="ar-hot-panel-stdderived" aria-selected="false" tabindex="-1" onclick="switchArHot('stdderived', this)">Standard Derived Equivalence</button>
    <button type="button" class="ai-tab-btn tab-yellow" role="tab" id="tab-ar-hot-panel-gentle" aria-controls="ar-hot-panel-gentle" aria-selected="false" tabindex="-1" onclick="switchArHot('gentle', this)">Gentle Algebra</button>
    <button type="button" class="ai-tab-btn tab-orange" role="tab" id="tab-ar-hot-panel-preprojective" aria-controls="ar-hot-panel-preprojective" aria-selected="false" tabindex="-1" onclick="switchArHot('preprojective', this)">Preprojective Algebra</button>
    <button type="button" class="ai-tab-btn tab-red" role="tab" id="tab-ar-hot-panel-gorensteinhomo" aria-controls="ar-hot-panel-gorensteinhomo" aria-selected="false" tabindex="-1" onclick="switchArHot('gorensteinhomo', this)">Gorenstein 同调理论</button>
    <button type="button" class="ai-tab-btn tab-teal" role="tab" id="tab-ar-hot-panel-geometric" aria-controls="ar-hot-panel-geometric" aria-selected="false" tabindex="-1" onclick="switchArHot('geometric', this)">Geometric model</button>
    <button type="button" class="ai-tab-btn tab-purple" role="tab" id="tab-ar-hot-panel-clustertilting" aria-controls="ar-hot-panel-clustertilting" aria-selected="false" tabindex="-1" onclick="switchArHot('clustertilting', this)">Cluster tilting</button>
    <button type="button" class="ai-tab-btn tab-violet" role="tab" id="tab-ar-hot-panel-approx" aria-controls="ar-hot-panel-approx" aria-selected="false" tabindex="-1" onclick="switchArHot('approx', this)">Approximable Triangulated Categories</button>
  </div>

  {{< ar-panel "dgenhance" "active" "ar-hot-panel-" >}}

  {{< ar-panel "stdderived" "" "ar-hot-panel-" >}}

  {{< ar-panel "gentle" "" "ar-hot-panel-" "hotgentle" >}}

  {{< ar-panel "preprojective" "" "ar-hot-panel-" >}}

  {{< ar-panel "gorensteinhomo" "" "ar-hot-panel-" >}}

  {{< ar-panel "geometric" "" "ar-hot-panel-" >}}

  {{< ar-panel "clustertilting" "" "ar-hot-panel-" >}}

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
