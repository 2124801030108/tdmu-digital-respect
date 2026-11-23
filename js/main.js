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

  function getStoredUsers() {
    try {
      const raw = localStorage.getItem('tdmu_users');
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    const defaults = [
      {
        name: 'Nguyễn Văn An',
        id: '2328501010012',
        email: 'an.nv@gmail.com',
        pass: 'Tdmu@2026',
        dept: 'Viện Kỹ thuật - Công nghệ'
      },
      {
        name: 'Trần Thị Mai Linh',
        id: '2222401220088',
        email: 'mailinh.tdmu@gmail.com',
        pass: 'Tdmu@2026',
        dept: 'Khoa Ngoại ngữ'
      }
    ];
    try {
      localStorage.setItem('tdmu_users', JSON.stringify(defaults));
    } catch (e) {}
    return defaults;
  }

  function getCurrentUser() {
    try {
      const raw = localStorage.getItem('tdmu_current_user');
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null;
  }

  function setCurrentUser(user) {
    try {
      if (user) {
        localStorage.setItem('tdmu_current_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('tdmu_current_user');
      }
    } catch (e) {}
    renderAuthUI();
  }

  function renderAuthUI() {
    const hdActions = document.querySelector('.hd-actions');
    if (hdActions) {
      let authBox = document.getElementById('headerAuthBox');
      if (!authBox) {
        authBox = document.createElement('div');
        authBox.id = 'headerAuthBox';
        authBox.className = 'header-auth-box';
        hdActions.insertBefore(authBox, hdActions.firstChild);
      }

      const currentUser = getCurrentUser();
      if (currentUser) {
        const initials = currentUser.name.split(' ').filter(Boolean).map(w => w[0]).slice(-2).join('').toUpperCase() || 'SV';
        authBox.innerHTML = `
          <div class="user-profile-menu">
            <button class="user-profile-btn" id="userMenuBtn" type="button" aria-expanded="false" title="Tài khoản: ${currentUser.name}">
              <span class="user-avatar-badge">${initials}</span>
              <span class="user-display-name">${currentUser.name}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="user-dropdown-menu" id="userDropdownMenu">
              <div class="user-dd-header">
                <div class="user-dd-avatar">${initials}</div>
                <div class="user-dd-info">
                  <b class="user-dd-name">${currentUser.name}</b>
                  <span class="user-dd-meta">MSSV: ${currentUser.id}</span>
                  <span class="user-dd-email">${currentUser.email}</span>
                </div>
              </div>
              <div class="user-dd-divider"></div>
              <button type="button" class="user-dd-item logout-action-btn" id="logoutActionBtn">
                <span>🚪</span>
                <span>Đăng xuất</span>
              </button>
            </div>
          </div>
        `;

        const userMenuBtn = document.getElementById('userMenuBtn');
        const userDropdownMenu = document.getElementById('userDropdownMenu');
        if (userMenuBtn && userDropdownMenu) {
          userMenuBtn.onclick = e => {
            e.stopPropagation();
            const isOpen = userDropdownMenu.classList.contains('show');
            userDropdownMenu.classList.toggle('show', !isOpen);
            userMenuBtn.setAttribute('aria-expanded', String(!isOpen));
          };
          document.addEventListener('click', e => {
            if (!authBox.contains(e.target)) {
              userDropdownMenu.classList.remove('show');
              userMenuBtn.setAttribute('aria-expanded', 'false');
            }
          });
        }

        const logoutActionBtn = document.getElementById('logoutActionBtn');
        if (logoutActionBtn) {
          logoutActionBtn.onclick = () => {
            setCurrentUser(null);
            window.location.reload();
          };
        }
      } else {
        authBox.innerHTML = `
          <a href="dang-nhap.html" class="header-login-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>Đăng nhập</span>
          </a>
        `;
      }
    }

    const mobileDrawer = document.getElementById('mobileNavDrawer');
    if (mobileDrawer) {
      let mobileAuth = document.getElementById('mobileNavAuthBox');
      if (!mobileAuth) {
        mobileAuth = document.createElement('div');
        mobileAuth.id = 'mobileNavAuthBox';
        mobileAuth.className = 'mobile-nav-auth-box';
        const mHeader = mobileDrawer.querySelector('.mobile-nav-header');
        if (mHeader && mHeader.nextSibling) {
          mobileDrawer.insertBefore(mobileAuth, mHeader.nextSibling);
        } else {
          mobileDrawer.insertBefore(mobileAuth, mobileDrawer.firstChild);
        }
      }
      const currentUser = getCurrentUser();
      if (currentUser) {
        const initials = currentUser.name.split(' ').filter(Boolean).map(w => w[0]).slice(-2).join('').toUpperCase() || 'SV';
        mobileAuth.innerHTML = `
          <div class="mobile-user-card">
            <div style="display:flex;align-items:center;gap:10px">
              <div class="mobile-user-avatar">${initials}</div>
              <div style="flex:1;min-width:0">
                <b style="display:block;font-size:.88rem;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${currentUser.name}</b>
                <span style="font-size:.74rem;color:var(--mu);display:block">MSSV: ${currentUser.id} • ${currentUser.email}</span>
              </div>
            </div>
            <button type="button" class="btn o btn-sm" id="mobileLogoutBtn" style="width:100%;margin-top:8px;padding:6px;font-size:.78rem;color:#DC2626;border-color:#FCA5A5;background:#FFF5F5;justify-content:center">
              Đăng xuất tài khoản
            </button>
          </div>
        `;
        const mLogout = document.getElementById('mobileLogoutBtn');
        if (mLogout) {
          mLogout.onclick = () => {
            setCurrentUser(null);
            window.location.reload();
          };
        }
      } else {
        mobileAuth.innerHTML = `
          <div style="padding:4px 0 2px">
            <a href="dang-nhap.html" class="btn" style="width:100%;justify-content:center;padding:8px 12px;font-size:.84rem">
              🔑 Đăng nhập / Đăng ký tài khoản
            </a>
          </div>
        `;
      }
    }
  }

  function requireLogin(featureName) {
    const user = getCurrentUser();
    if (user) return true;

    let modal = document.getElementById('loginRequiredModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'loginRequiredModal';
      modal.className = 'modal-overlay';
      modal.style.cssText = 'position:fixed;inset:0;background:rgba(11,37,64,0.65);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;z-index:999999;padding:16px;opacity:0;pointer-events:none;transition:opacity .25s ease;';
      document.body.appendChild(modal);
    }

    const currentUrl = encodeURIComponent(window.location.pathname.split('/').pop() || 'index.html');
    const fName = featureName || 'chức năng này';

    modal.innerHTML = `
      <div style="background:#ffffff;border-radius:20px;max-width:480px;width:100%;padding:28px 24px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.3);border:2px solid #0B7BC4;position:relative;animation:pop-msg .28s cubic-bezier(0.34, 1.56, 0.64, 1)">
        <div style="width:60px;height:60px;border-radius:50%;background:#E1F0FB;color:#075A94;display:grid;place-items:center;margin:0 auto 16px;font-size:1.8rem;box-shadow:0 4px 14px rgba(11,123,196,0.18)">
          🔒
        </div>
        <h3 style="margin:0 0 10px;font-size:1.25rem;color:#0B2540;font-family:'Be Vietnam Pro',sans-serif">
          Yêu cầu Đăng nhập Tài khoản
        </h3>
        <p style="margin:0 0 20px;font-size:.92rem;color:#4A6580;line-height:1.6">
          Bạn cần đăng nhập tài khoản Sinh viên TDMU để sử dụng <b>${fName}</b>, ghi nhận điểm rèn luyện (+5 ĐRL) và lưu trữ kết quả.
        </p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <a href="dang-nhap.html?redirect=${currentUrl}" class="btn" style="background:#075A94;border-color:#075A94;color:#fff;padding:12px;font-size:.95rem;font-weight:700;display:flex;align-items:center;justify-content:center;gap:8px">
            🔑 Đăng nhập ngay
          </a>
          <a href="dang-ky.html?redirect=${currentUrl}" class="btn o" style="padding:10px;font-size:.9rem;font-weight:600;display:flex;align-items:center;justify-content:center;gap:8px">
            📝 Chưa có tài khoản? Đăng ký mới
          </a>
          <button type="button" id="closeLoginModalBtn" style="background:none;border:none;color:#94A3B8;font-size:.85rem;cursor:pointer;padding:6px;margin-top:4px">
            Để sau (Đóng lại)
          </button>
        </div>
      </div>
    `;

    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';

    const closeBtn = document.getElementById('closeLoginModalBtn');
    if (closeBtn) {
      closeBtn.onclick = () => {
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
      };
    }

    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
      }
    };

    return false;
  }

  window.TDMU_AUTH = {
    getStoredUsers,
    getCurrentUser,
    setCurrentUser,
    renderAuthUI,
    requireLogin
  };

  renderAuthUI();
})();
