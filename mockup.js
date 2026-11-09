(() => {
  'use strict';
  // Opened from disk, folder links would show a directory listing, so point them at index.html.
  if (location.protocol === 'file:') document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || event.button || event.metaKey || event.ctrlKey || event.shiftKey) return;
    const url = new URL(link.href, location.href);
    if (url.protocol !== 'file:' || !url.pathname.endsWith('/')) return;
    event.preventDefault();
    url.pathname += 'index.html';
    if (link.target === '_blank') window.open(url.href); else location.href = url.href;
  }, true);
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.mobile-toggle');
  function closeMenus() {
    document.querySelectorAll('.nav-dropdown[open]').forEach(menu => menu.open = false);
    header.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
  menuToggle.addEventListener('click', () => {
    const open = !header.classList.contains('menu-open');
    header.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('.nav-dropdown').forEach(menu => menu.addEventListener('toggle', () => {
    if (menu.open) document.querySelectorAll('.nav-dropdown').forEach(other => {
      if (other !== menu) other.open = false;
    });
  }));
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenus();
    const link = event.target.closest('a[href="#main-content"]');
    if (link) {
      event.preventDefault();
      document.getElementById('main-content').focus({preventScroll:true});
      document.querySelector('.catalogue-layout').scrollIntoView({block:'start'});
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { closeMenus(); menuToggle.focus(); }
  });
  document.querySelectorAll('.category-page').forEach(page => {
    const search = page.querySelector('input[type="search"]');
    const cards = [...page.querySelectorAll('.product-card')];
    const filter = () => {
      const query = search.value.trim().toLocaleLowerCase();
      cards.forEach(card => card.hidden = !card.dataset.product.includes(query));
      const count = cards.filter(card => !card.hidden).length;
      page.querySelector('.model-count').textContent = count + (query ? ' of ' + cards.length : '') + (cards.length === 1 ? ' model' : ' models');
      page.querySelector('.no-results').hidden = count !== 0;
    };
    search.addEventListener('input', filter);
    page.querySelector('.clear-search').addEventListener('click', () => { search.value = ''; filter(); search.focus(); });
    // Product, guide and source destinations remain the published DTE pages.
    page.querySelectorAll('a[href^="https:"]').forEach(link => { link.target = '_blank'; link.rel = 'noopener'; });
  });
})();
