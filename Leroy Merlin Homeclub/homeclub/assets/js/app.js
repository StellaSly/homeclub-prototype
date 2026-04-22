/* ============================================================================
   Shared chrome: proto bar, disclosure footer, copy loader, synthetic
   watermark, insight rotator. Every page includes this after data.js.
   ============================================================================ */

(function(global){
  'use strict';

  // ---------------------------------------------------------------------------
  // Copy loader — reads /content/copy.json once and resolves dotted keys
  // inside [data-copy="..."] elements. Supports .html suffix for unsafe HTML.
  // Fallback: when viewed as file:// with fetch blocked, falls back to inline
  // <script id="copyData" type="application/json"> if present.
  // ---------------------------------------------------------------------------
  let COPY = null;
  const waiters = [];

  async function loadCopy(pathPrefix){
    if (COPY) return COPY;
    const inline = document.getElementById('copyData');
    if (inline) {
      try { COPY = JSON.parse(inline.textContent); return COPY; } catch(e){}
    }
    const url = (pathPrefix || '') + 'content/copy.json';
    try {
      const r = await fetch(url, { cache: 'reload' });
      COPY = await r.json();
    } catch (err) {
      console.warn('Copy fetch failed — likely file:// without a local server. Inline the JSON in a <script id="copyData" type="application/json"> tag if needed.', err);
      COPY = {};
    }
    return COPY;
  }

  function resolveKey(key){
    const parts = key.split('.');
    let cur = COPY;
    for (const p of parts){
      if (cur == null) return undefined;
      cur = cur[p];
    }
    return cur;
  }

  function applyCopy(root){
    (root || document).querySelectorAll('[data-copy]').forEach(el => {
      const key = el.dataset.copy;
      const val = resolveKey(key);
      if (val != null) el.textContent = val;
    });
    (root || document).querySelectorAll('[data-copy-html]').forEach(el => {
      const key = el.dataset.copyHtml;
      const val = resolveKey(key);
      if (val != null) el.innerHTML = val;
    });
  }

  function onCopyReady(fn){
    if (COPY) fn(COPY);
    else waiters.push(fn);
  }

  async function initCopy(pathPrefix){
    await loadCopy(pathPrefix);
    applyCopy(document);
    waiters.forEach(f => f(COPY));
    waiters.length = 0;
  }

  // ---------------------------------------------------------------------------
  // Proto bar + disclosure footer — injected on every page.
  // ---------------------------------------------------------------------------
  function renderProtoBar(container, opts){
    const { pathPrefix = '', current = 'landing' } = opts || {};
    const barHTML = `
      <div class="brand">
        <img src="${pathPrefix}assets/img/cmr-logo.png" alt="CMR Africa">
        <span class="brand-title">Home<span>Club</span> · Prototype</span>
      </div>
      <div class="proto-tabs">
        <a href="${pathPrefix}index.html"        class="proto-tab ${current==='landing' ? 'active' : ''}">Intro</a>
        <a href="${pathPrefix}app/home.html"     class="proto-tab ${current==='app'     ? 'active' : ''}">Member app</a>
        <a href="${pathPrefix}admin/index.html"  class="proto-tab ${current==='admin'   ? 'active' : ''}">Admin</a>
      </div>
      <div class="bar-meta">For Naresh Rocharam · LM SA</div>
    `;
    container.innerHTML = barHTML;
  }

  function renderFooter(container){
    const line = (COPY && COPY.disclosure && COPY.disclosure.line)
      || 'Status · Prototype for strategic discussion · All data synthetic · Coalition partners pending confirmation · Prepared by CMR Africa for Leroy Merlin SA';
    container.innerHTML = `
      <div class="disc-row">
        ${line.split('·').map((seg, i) => {
          const t = seg.trim();
          if (!t) return '';
          const isCMR = /CMR AFRICA/i.test(t);
          return `${i>0 ? '<span class="dot">·</span>' : ''}<span${isCMR ? ' class="cmr-mark"' : ''}>${t}</span>`;
        }).join('')}
      </div>
    `;
  }

  function mountChrome(opts){
    const bar = document.querySelector('[data-proto-bar]');
    const foot = document.querySelector('[data-disclosure-footer]');
    if (bar)  renderProtoBar(bar, opts);
    if (foot) onCopyReady(() => renderFooter(foot));
    // Watermark
    if (!document.querySelector('.synth-watermark') && document.body) {
      const w = document.createElement('div');
      w.className = 'synth-watermark';
      w.textContent = 'Synthetic data';
      document.body.appendChild(w);
    }
  }

  // ---------------------------------------------------------------------------
  // Insight rotator — used on the admin dashboard.
  // Auto-advances every 8s; user can click dots.
  // ---------------------------------------------------------------------------
  function mountInsightRotator(panelEl, items){
    if (!panelEl || !items || !items.length) return;
    let i = 0; let timer;
    const headlineEl = panelEl.querySelector('[data-insight-headline]');
    const bodyEl     = panelEl.querySelector('[data-insight-body]');
    const footEl     = panelEl.querySelector('[data-insight-foot]');
    const dotsEl     = panelEl.querySelector('[data-insight-dots]');

    dotsEl.innerHTML = items.map((_, idx) =>
      `<span class="i-dot ${idx===0 ? 'current' : ''}" data-idx="${idx}" role="button" aria-label="Insight ${idx+1}"></span>`
    ).join('');

    function render(){
      const item = items[i];
      headlineEl.innerHTML = item.headline_html;
      bodyEl.innerHTML     = item.body_html;
      footEl.innerHTML     = `<span class="cmr">CMR AFRICA</span> — ${item.foot}`;
      dotsEl.querySelectorAll('.i-dot').forEach((d, idx) => d.classList.toggle('current', idx===i));
    }
    function next(){ i = (i + 1) % items.length; render(); }
    function reset(){ clearInterval(timer); timer = setInterval(next, 8000); }

    dotsEl.querySelectorAll('.i-dot').forEach(d => {
      d.addEventListener('click', () => { i = +d.dataset.idx; render(); reset(); });
    });
    render(); reset();
  }

  // ---------------------------------------------------------------------------
  // Step nav (for the member app) — builds prev/next/current links.
  // ---------------------------------------------------------------------------
  function renderStepNav(container, pages, currentKey, pathPrefix){
    container.innerHTML = pages.map(p => {
      const isCurrent = p.key === currentKey;
      return `<a href="${pathPrefix}app/${p.file}" class="${isCurrent ? 'current' : ''}">${p.label}</a>`;
    }).join('<span class="sep">·</span>');
  }

  // ---------------------------------------------------------------------------
  // Expose
  // ---------------------------------------------------------------------------
  global.HomeClubApp = {
    initCopy, onCopyReady, applyCopy, resolveKey,
    mountChrome,
    mountInsightRotator,
    renderStepNav,
    getCopy: () => COPY
  };
})(window);
