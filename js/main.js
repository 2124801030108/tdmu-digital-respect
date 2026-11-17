(function() {
  const root = document.documentElement;
  root.removeAttribute('data-theme');
  try {
    localStorage.removeItem('tdmu_theme');
  } catch (e) {}

  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.desktop-nav a, .mobile-nav-link, nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentFile || (currentFile === '' && href === 'index.html')) {
      a.classList.add('on');
    }
  });

  const tp = document.getElementById('topBtn');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const p = h.scrollTop / ((h.scrollHeight - h.clientHeight) || 1);
    const pg = document.getElementById('pg');
    if (pg) pg.style.width = (p * 100) + '%';
    if (tp) tp.classList.toggle('v', h.scrollTop > 450);
  }, { passive: true });

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');

  function closeMobileNav() {
    if (mobileNavDrawer) mobileNavDrawer.classList.remove('open');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.remove('open');
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('nav-locked');
  }

  function openMobileNav() {
    if (mobileNavDrawer) mobileNavDrawer.classList.add('open');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.add('open');
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.add('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('nav-locked');
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNavDrawer && mobileNavDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (closeMobileNavBtn) {
    closeMobileNavBtn.addEventListener('click', closeMobileNav);
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileNav);
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileNav();
  });
})();