---
title: "代数表示论"
hideTitle: true
---

<div class="ai-tabs">
  <div class="ai-tab-btns">
    <button type="button" class="ai-tab-btn tab-red active" onclick="switchArTab('finite', this)">有限维数猜想</button>
    <button type="button" class="ai-tab-btn tab-orange" onclick="switchArTab('nakayama', this)">Nakayama猜想</button>
    <button type="button" class="ai-tab-btn tab-yellow" onclick="switchArTab('ar', this)">Auslander-Reiten猜想</button>
    <button type="button" class="ai-tab-btn tab-green" onclick="switchArTab('gorenstein', this)">Gorenstein对称猜想</button>
    <button type="button" class="ai-tab-btn tab-blue" onclick="switchArTab('wakamatsu', this)">Wakamatsu tilting猜想</button>
    <button type="button" class="ai-tab-btn tab-violet" onclick="switchArTab('cartan', this)">Cartan行列式猜想</button>
  </div>

  <div id="ar-panel-finite" class="ai-tab-panel active">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-panel-nakayama" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-panel-ar" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-panel-gorenstein" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-panel-wakamatsu" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>

  <div id="ar-panel-cartan" class="ai-tab-panel">
    <p class="ai-empty">内容整理中，敬请期待…</p>
  </div>
</div>

<script>
function switchArTab(id, btn) {
  document.querySelectorAll('.ai-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  document.querySelectorAll('.ai-tab-panel').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  document.getElementById('ar-panel-' + id).classList.add('active');
}
</script>
