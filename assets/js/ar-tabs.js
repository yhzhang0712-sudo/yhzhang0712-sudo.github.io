/* ar-tabs.js — Tab 组件无障碍增强 + URL 深链 + KaTeX 按需渲染
   依赖：页面按钮已带 role=tab / aria-controls（由内容模板注入）。
   页面无 [role=tablist] 时自动空转，不影响其他页面。 */
(function () {
  'use strict';

  var KATEX_OPTS = {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false }
    ],
    throwOnError: false
  };

  function syncTab(tab) {
    var on = tab.classList.contains('active');
    tab.setAttribute('aria-selected', on ? 'true' : 'false');
    tab.setAttribute('tabindex', on ? '0' : '-1');
  }

  function renderPanelMath(panel) {
    if (!panel || panel.getAttribute('data-math-done')) return;
    if (typeof renderMathInElement !== 'function') return false;
    panel.setAttribute('data-math-done', '1');
    renderMathInElement(panel, KATEX_OPTS);
    return true;
  }

  /* 初始渲染：只渲染激活面板；无 Tab 结构的 math 页面回退为整页渲染。
     返回 false 表示 KaTeX 尚未就绪，需要重试。 */
  function renderInitial() {
    if (typeof renderMathInElement !== 'function') return false;
    if (!document.querySelector('[role=tabpanel]')) {
      renderMathInElement(document.body, KATEX_OPTS);
    } else {
      document.querySelectorAll('[role=tabpanel].active').forEach(renderPanelMath);
    }
    return true;
  }

  /* KaTeX 可能晚于本脚本就绪（CDN 慢），每 300ms 重试一次，最多约 5 秒 */
  function renderInitialWithRetry(tries) {
    if (renderInitial()) return;
    if (tries > 0) setTimeout(function () { renderInitialWithRetry(tries - 1); }, 300);
  }

  function init() {
    if (!document.querySelector('[role=tablist]')) {
      /* 无 Tab 页面：仅保留 KaTeX 初始渲染职责 */
      renderInitialWithRetry(16);
      return;
    }

    document.querySelectorAll('[role=tablist]').forEach(function (list) {
      list.querySelectorAll('[role=tab]').forEach(syncTab);
    });

    /* class 变化 → 同步 aria-selected / tabindex，并渲染新激活面板的公式 */
    var obs = new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        var el = m.target;
        if (el.getAttribute('role') === 'tab') syncTab(el);
        if (el.getAttribute('role') === 'tabpanel' && el.classList.contains('active')) {
          renderPanelMath(el);
        }
      });
    });
    document.querySelectorAll('[role=tab],[role=tabpanel]').forEach(function (el) {
      obs.observe(el, { attributes: true, attributeFilter: ['class'] });
    });

    /* 方向键 roving：左右/上下/Home/End 在同一 tablist 内移动并激活 */
    document.addEventListener('keydown', function (e) {
      var tab = e.target.closest && e.target.closest('[role=tab]');
      if (!tab) return;
      var list = tab.closest('[role=tablist]');
      if (!list) return;
      var tabs = Array.prototype.slice.call(list.querySelectorAll('[role=tab]'));
      var i = tabs.indexOf(tab), n = tabs.length, next = -1;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % n;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + n) % n;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = n - 1;
      if (next < 0) return;
      e.preventDefault();
      tabs[next].click();
      tabs[next].focus();
    });

    /* Tab 点击 → hash 同步（replaceState 不产生历史记录） */
    document.addEventListener('click', function (e) {
      var tab = e.target.closest && e.target.closest('[role=tab]');
      if (!tab) return;
      var target = tab.getAttribute('aria-controls');
      if (!target || !document.getElementById(target)) return;
      try {
        history.replaceState(null, '', location.pathname + '#' + target);
      } catch (err) { /* ignore */ }
    });

    /* 载入时按 hash 激活：由外向内逐层点开所属 Tab，再滚动定位 */
    function activateFromHash() {
      var h = decodeURIComponent(location.hash || '');
      if (h.charAt(0) !== '#') return;
      var el = document.getElementById(h.slice(1));
      if (!el) return;
      var layers = [], cur = el;
      while (cur && cur !== document.body) {
        if (cur.getAttribute('role') === 'tabpanel') layers.push(cur);
        cur = cur.parentElement;
      }
      layers.reverse().forEach(function (panel) {
        var btn = document.querySelector('[role=tab][aria-controls="' + panel.id + '"]');
        if (btn) btn.click();
      });
      setTimeout(function () {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    }
    activateFromHash();

    renderInitialWithRetry(16);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
