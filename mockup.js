(() => {
  'use strict';
  const pages = [...document.querySelectorAll('.category-page')];
  const routes = new Set(pages.map(page => page.id));
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.mobile-toggle');
  let current = '';
  function closeMenus() {
    document.querySelectorAll('.nav-dropdown[open]').forEach(menu => menu.open = false);
    header.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
  function route() {
    const [requested, section] = location.hash.slice(1).split('/');
    const slug = routes.has(requested) ? requested : 'reach-mowers';
    const changed = current !== slug;
    const page = document.getElementById(slug);
    pages.forEach(item => item.hidden = item !== page);
    document.querySelectorAll('[data-route]').forEach(link => {
      if (link.dataset.route === slug) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.querySelectorAll('[data-current-section]').forEach(link => {
      link.href = '#' + slug + (link.dataset.currentSection ? '/' + link.dataset.currentSection : '');
    });
    document.title = page.dataset.title;
    document.querySelector('meta[name="description"]').content = page.dataset.description;
    closeMenus();
    current = slug;
    requestAnimationFrame(() => {
      const target = section && document.getElementById(slug + '-' + section);
      if (target) target.scrollIntoView({block:'start', behavior:'instant'});
      else if (changed || !section) window.scrollTo({top:0, behavior:'instant'});
      if (changed && requested) page.querySelector('h1').focus({preventScroll:true});
    });
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
    const link = event.target.closest('a[href^="#"]');
    if (link && link.hash === '#main-content') {
      event.preventDefault();
      const main = document.getElementById('main-content');
      main.focus({preventScroll:true});
      document.querySelector('.category-page:not([hidden]) .catalogue-layout').scrollIntoView({block:'start'});
      return;
    }
    if (link && link.hash === location.hash && link.hash !== '#main-content') route();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { closeMenus(); menuToggle.focus(); }
  });
  pages.forEach(page => {
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
    // Card, guide and source destinations remain the published DTE pages.
    page.querySelectorAll('a[href^="https:"]').forEach(link => { link.target = '_blank'; link.rel = 'noopener'; });
  });
  window.addEventListener('hashchange', route);
  route();
})();
