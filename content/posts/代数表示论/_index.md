---
title: "代数表示论"
hideTitle: true
math: true
---

<div class="ar-section-switch">
  <button type="button" class="ar-sec-btn sec-violet active" onclick="switchArSection('conjectures', this)">核心猜想</button>
  <button type="button" class="ar-sec-btn sec-blue" onclick="switchArSection('theory', this)">基础理论</button>
</div>

<section id="ar-section-conjectures" class="ar-section">

<p class="ar-image-wrap"><img src="/images/conjecture-relations.png" alt="猜想之间的关系图"></p>

<div class="ai-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-red active" onclick="switchArTab('finite', this)">有限维数猜想</button>
    <button type="button" class="ai-tab-btn tab-orange" onclick="switchArTab('nakayama', this)">Nakayama猜想</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchArTab('gorenstein', this)">Gorenstein对称猜想</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchArTab('wakamatsu', this)">Wakamatsu tilting猜想</button>
    <button type="button" class="ai-tab-btn tab-violet" onclick="switchArTab('cartan', this)">Cartan行列式猜想</button>
  </div>

{{< ar-panel "finite" "active" >}}
{{< ar-panel "nakayama" >}}
{{< ar-panel "gorenstein" >}}
{{< ar-panel "wakamatsu" >}}
{{< ar-panel "cartan" >}}
</div>

</section>

<section id="ar-section-theory" class="ar-section" hidden>

<div class="ai-tabs ar-theory-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-red active" onclick="switchArTheory('artheory', this)">Auslander-Reiten理论</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchArTheory('gabriel', this)">Gabriel定理</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchArTheory('tilting', this)">Tilting理论</button>
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

/* 搜索结果带 #ar-panel-xxx / #ar-theory-panel-xxx 锚点跳转时，自动展开对应 Tab */
(function () {
  function activateFromHash() {
    var hash = decodeURIComponent(location.hash || '').trim();
    if (!hash.startsWith('#')) return;
    var panelId = hash.slice(1);
    var panel = document.getElementById(panelId);
    if (!panel) return;
    var group = panel.closest('.ai-tabs');
    if (!group) return;
    var btn = group.querySelector('.ai-tab-btn[onclick*="' + panelId.replace(/^ar-(theory-)?panel-/, '') + '"]');
    // 显示在“核心猜想”/“基础理论”分区
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
