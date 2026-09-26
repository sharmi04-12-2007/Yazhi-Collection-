// ============================================================
// YAZHI COLLECTION – Application Core & Global Interactions
// Founder & Designer: Sharmila M | Coimbatore, Tamil Nadu
// Phone / WhatsApp: 6369685930 | Shop Hours: 9:00 AM – 9:00 PM
// ============================================================

const YAZHI_ENQUIRIES_KEY = 'yazhi_enquiries';
const YAZHI_OWNER_PHONE   = '6369685930';

// ─── Enquiry Engine (shared between enquiry.html and owner-dashboard) ───
function yazhiGetEnquiries() {
  return JSON.parse(localStorage.getItem(YAZHI_ENQUIRIES_KEY) || '[]');
}

function yazhiSubmitEnquiry(name, phone, message, type = 'General') {
  const enquiries = yazhiGetEnquiries();
  const enquiry = {
    id: 'ENQ-' + Date.now().toString(36).toUpperCase(),
    name: name.trim(),
    phone: phone.trim(),
    message: message.trim(),
    type,
    status: 'new',
    createdAt: new Date().toISOString()
  };
  enquiries.unshift(enquiry);
  localStorage.setItem(YAZHI_ENQUIRIES_KEY, JSON.stringify(enquiries));
  // Push to Firestore if Firebase is active
  if (typeof yazhiCloudSaveEnquiry === 'function') {
    yazhiCloudSaveEnquiry(enquiry);
  }
  return enquiry;
}

// ─── SVG Icons System (Requirement 4: No emojis/stickers) ───
const YAZHI_ICONS = {
  search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  cart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
  user: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
  logout: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`,
  location: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  star: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`
};

function yazhiIcon(name) {
  return YAZHI_ICONS[name] || '';
}

// ─── Offer Ticker Rotation (Requirement 30: Synced with Admin) ───
const DEFAULT_TICKER_MESSAGES = [
  'Exclusive 50% Off on your First Order with Code: YAZHI50',
  'Birthday Celebrations: 30% Off on Any Collection with Code: BDAY30',
  'Festive Special: Flat 20% Off using Code: FESTIVE20',
  'Complimentary Insured Delivery on Orders Above ₹4,000',
  'Orders Above ₹9,000 Receive 70% Off with Code: PREMIUM70',
  'Custom Couture by Sharmila M — Direct WhatsApp Consultation: 6369685930',
  'Boutique Hours: 9:00 AM – 9:00 PM Daily | Coimbatore, Tamil Nadu'
];

function yazhiInitOfferTicker() {
  const ticker = document.getElementById('offer-ticker-text');
  if (!ticker) return;

  const messages = [...DEFAULT_TICKER_MESSAGES];
  let idx = 0;
  ticker.textContent = messages[0];

  setInterval(() => {
    idx = (idx + 1) % messages.length;
    ticker.classList.add('fade-out-ticker');
    setTimeout(() => {
      ticker.textContent = messages[idx];
      ticker.classList.remove('fade-out-ticker');
    }, 300);
  }, 4500);
}

// ─── Mobile Navigation Drawer ───
function yazhiInitMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navDrawer = document.getElementById('nav-drawer');
  const overlay = document.getElementById('nav-overlay');
  const closeBtn = document.getElementById('drawer-close');

  if (!hamburger || !navDrawer) return;

  const open = () => {
    navDrawer.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    navDrawer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (overlay) overlay.addEventListener('click', close);
  document.querySelectorAll('#nav-drawer a').forEach(a => a.addEventListener('click', close));
}

// ─── Sticky Header Scroll Shadow ───
function yazhiInitStickyHeader() {
  const header = document.querySelector('.yazhi-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

// ─── Active Nav Link Highlighter ───
function yazhiSetActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.yazhi-nav a, .drawer-nav a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === current || (current === 'index.html' && href === 'home.html') || (current === 'home.html' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ─── Global Search System (Requirement 6 & 21) ───
function yazhiInitGlobalSearch() {
  // Inject search modal if not present
  if (!document.getElementById('global-search-modal')) {
    const modal = document.createElement('div');
    modal.id = 'global-search-modal';
    modal.className = 'search-modal';
    modal.innerHTML = `
      <div class="search-modal-box">
        <div class="search-modal-header">
          ${YAZHI_ICONS.search}
          <input type="text" id="global-modal-search-input" class="search-modal-input" placeholder="Search sarees, bridal lehengas, silk, festive, co-ords..." autocomplete="off">
          <button class="search-modal-close" id="global-modal-search-close" aria-label="Close search">✕</button>
        </div>
        <div class="search-modal-results" id="global-search-results">
          <div style="text-align:center;padding:2.5rem 1rem;color:var(--muted);font-size:.9rem">
            Type a keyword to discover our handcrafted boutique collections...
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Event listeners
    const input = document.getElementById('global-modal-search-input');
    const close = document.getElementById('global-modal-search-close');
    const results = document.getElementById('global-search-results');

    close.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    input.addEventListener('input', () => {
      const q = input.value.trim();
      if (!q) {
        results.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--muted);font-size:.9rem">Type a keyword to search...</div>`;
        return;
      }
      yazhiPerformSearch(q, results);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Intercept all header search forms across all pages
  document.querySelectorAll('.header-search-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.header-search-input');
      const q = input ? input.value.trim() : '';
      yazhiOpenSearch(q);
    });
  });

  // Mobile search toggle button if present
  document.querySelectorAll('[data-action="open-search"]').forEach(btn => {
    btn.addEventListener('click', () => {
      yazhiOpenSearch('');
    });
  });
}

function yazhiOpenSearch(initialQuery = '') {
  const modal = document.getElementById('global-search-modal');
  const input = document.getElementById('global-modal-search-input');
  const results = document.getElementById('global-search-results');
  if (!modal || !input) return;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  input.value = initialQuery;
  input.focus();

  if (initialQuery) {
    yazhiPerformSearch(initialQuery, results);
  }
}

function yazhiPerformSearch(query, resultsContainer) {
  if (typeof yazhiSearchProducts !== 'function') return;
  const matches = yazhiSearchProducts(query);

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div style="text-align:center;padding:3rem 1.5rem;color:var(--muted)">
        <p style="font-size:1.1rem;font-weight:600;color:var(--plum);margin-bottom:.35rem">No products found for "${query}"</p>
        <p style="font-size:.85rem">Try searching for "silk", "bridal", "lehenga", "saree", "party", "cotton", or "co-ord".</p>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = `
    <div style="font-size:.78rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--gold-dk);margin-bottom:.75rem">
      Found ${matches.length} Boutique Style${matches.length > 1 ? 's' : ''}
    </div>
    ${matches.map(p => `
      <a href="product-detail.html?id=${p.id}" class="search-result-item">
        <div class="search-result-thumb">
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=150&q=80'">
        </div>
        <div class="search-result-info">
          <div class="search-result-title">${p.name}</div>
          <div class="search-result-meta">${p.collection || ''} Collection · ${p.badge || 'Curated'}</div>
        </div>
        <div class="search-result-price">₹${p.price.toLocaleString('en-IN')}</div>
      </a>
    `).join('')}
  `;
}

// ─── Toast Notifications ───
function yazhiToast(message, type = 'info') {
  let container = document.getElementById('yazhi-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'yazhi-toast-container';
    container.style.cssText = 'position:fixed;bottom:1.5rem;right:1.5rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;pointer-events:none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const bg = type === 'success' ? '#2E7D32' : type === 'error' ? '#C62828' : '#3B1F3F';
  toast.style.cssText = `background:${bg};color:#fff;padding:.75rem 1.25rem;border-radius:8px;font-size:.85rem;font-weight:600;box-shadow:0 8px 24px rgba(0,0,0,0.2);animation:slideInRight .3s ease-out;display:flex;align-items:center;gap:.6rem;pointer-events:auto;max-width:340px;border-left:4px solid #C9A45C`;
  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity .4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

// ─── Image Fallbacks Handler ───
function yazhiFillPlaceholders() {
  document.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', function () {
      this.src = this.getAttribute('data-fallback') || 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80';
    });
  });
}

// ─── Scroll Reveal Animation ───
function yazhiInitScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  elements.forEach(el => observer.observe(el));
}

// ─── Authentication Header Updates ───
function yazhiUpdateAuthUI() {
  const session = typeof yazhiGetSession === 'function' ? yazhiGetSession() : null;
  const loginLinks = document.querySelectorAll('[data-auth="login-link"]');
  const profileLinks = document.querySelectorAll('[data-auth="profile-link"]');
  const logoutLinks = document.querySelectorAll('[data-auth="logout-link"]');

  if (session && session.role === 'customer') {
    loginLinks.forEach(el => el.style.display = 'none');
    profileLinks.forEach(el => el.style.display = '');
    logoutLinks.forEach(el => el.style.display = '');
  } else {
    loginLinks.forEach(el => el.style.display = '');
    profileLinks.forEach(el => el.style.display = 'none');
    logoutLinks.forEach(el => el.style.display = 'none');
  }
}

// ─── Bootstrap on DOM Ready ───
document.addEventListener('DOMContentLoaded', () => {
  // Splash glance removed permanently per Requirement 1
  yazhiInitOfferTicker();
  yazhiInitMobileNav();
  yazhiInitStickyHeader();
  yazhiInitGlobalSearch();
  yazhiFillPlaceholders();
  yazhiInitScrollReveal();
  yazhiSetActiveNav();
  yazhiUpdateAuthUI();
  if (typeof yazhiUpdateCartBadge === 'function') {
    yazhiUpdateCartBadge();
  }
});
