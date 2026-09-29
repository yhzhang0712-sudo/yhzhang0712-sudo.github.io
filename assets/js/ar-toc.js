/* ar-toc.js — 「代数表示论」各面板右上角「目录」下拉的共享行为。
 *
 * 背景：早期做法是每个面板自带一段内联脚本，各自覆盖 window.toggleArToc，
 * 并以硬编码面板 id 定位 .ar-toc。面板数量一多，最后加载的那段脚本会"赢"，
 * 导致点其它面板的目录按钮时切换的是别处（或毫无反应）。
 *
 * 现在改为：单一全局实现，靠事件目标就近定位 .ar-toc，与面板数量、id 无关。
 * 本文件由 extend_head.html 以 defer 全站加载；defer 保证它在页面内联脚本之后执行，
 * 因此会覆盖旧的内联实现（旧实现作为脚本加载失败时的兜底保留）。
 *
 * 无 .ar-toc 的页面整体空转，不报错。
 */
(function () {
  'use strict';

  function tocOf(node) {
    return node && node.closest ? node.closest('.ar-toc') : null;
  }

  function openToc(toc) {
    toc.classList.add('open');
    var btn = toc.querySelector('.ar-toc-btn');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }

  function closeToc(toc) {
    toc.classList.remove('open');
    var btn = toc.querySelector('.ar-toc-btn');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  window.toggleArToc = function (e) {
    if (e) {
      if (e.stopPropagation) e.stopPropagation();
      if (e.preventDefault) e.preventDefault();
    }
    var toc = tocOf(e && e.currentTarget) || tocOf(e && e.target);
    if (!toc) return;
    if (toc.classList.contains('open')) closeToc(toc);
    else openToc(toc);
  };

  window.closeArToc = function () {
    document.querySelectorAll('.ar-toc.open').forEach(closeToc);
  };

  /* 点击目录中的某一项后收起；点击下拉外部也收起 */
  document.addEventListener('click', function (ev) {
    var open = document.querySelector('.ar-toc.open');
    if (!open) return;
    var link = ev.target.closest ? ev.target.closest('.ar-toc-drop a') : null;
    if (link && open.contains(link)) {
      closeToc(open);
    } else if (!open.contains(ev.target)) {
      closeToc(open);
    }
  });

  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' || ev.key === 'Esc') window.closeArToc();
  });
})();
