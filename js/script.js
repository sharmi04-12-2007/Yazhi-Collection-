/**
 * Yazhi Collection - Main Script
 * Handles global UI, header transitions, mobile navigation, search, and toasts.
 */

// --- Toast Notification System ---
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  let iconSvg = '';
  let title = 'Yazhi Boutique';

  if (type === 'success') {
    title = 'Success';
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === 'error') {
    title = 'Notice';
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
  } else {
    title = 'Update';
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-msg">
      <h5>${title}</h5>
      <p>${message}</p>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

window.showToast = showToast;

// --- DOM Initializations ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header scroll effect
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    });
  }

  // 2. Announcement Bar Close
  const announceClose = document.querySelector('.announcement-close');
  const announceBar = document.querySelector('.announcement-bar');
  if (announceClose && announceBar) {
    announceClose.addEventListener('click', () => {
      announceBar.style.display = 'none';
    });
  }

  // 3. Mobile Navigation Drawer
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileClose = document.querySelector('.mobile-close-btn');
  const backdrop = document.querySelector('.drawer-backdrop');

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // 4. Highlight active nav link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .dropdown-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 5. Global Search Trigger & Catalog Search
  setupSearchModal();
});

// --- Catalog Search Modal ---
function setupSearchModal() {
  const searchTriggers = document.querySelectorAll('.search-trigger-btn');
  const searchModal = document.getElementById('search-modal');
  if (!searchModal) return;

  const searchInput = document.getElementById('catalog-search-input');
  const searchResults = document.getElementById('search-results-container');
  const closeBtn = searchModal.querySelector('.modal-close-btn');

  searchTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      searchModal.classList.add('active');
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 150);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      searchModal.classList.remove('active');
    });
  }

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      searchModal.classList.remove('active');
    }
  });

  // Sample catalog search items
  const catalogIndex = [
    { title: 'Mayilkan Kanchipuram Pure Silk Saree', category: 'Bridal', url: 'bridal.html#type-kanchipuram', price: '₹24,500' },
    { title: 'Royal Crimson Velvet Bridal Lehenga', category: 'Bridal', url: 'bridal.html#type-lehenga', price: '₹38,000' },
    { title: 'Zardozi Handcrafted Bridal Blouse', category: 'Bridal', url: 'bridal.html#type-blouses', price: '₹9,500' },
    { title: 'Shine Bright Diwali Banarasi Silk Saree', category: 'Festive', url: 'festive.html#type-diwali', price: '₹14,200' },
    { title: 'Golden Kasavu Heritage Onam Saree', category: 'Festive', url: 'festive.html#type-onam', price: '₹11,500' },
    { title: 'Starlight Embroidered Cocktail Gown', category: 'Party', url: 'party.html#type-cocktail', price: '₹16,500' },
    { title: 'Midnight Glamour Indo-Western Drape Suit', category: 'Party', url: 'party.html#type-indo-western', price: '₹13,800' },
    { title: 'Royal Maroon Embroidered Anarkali Suit', category: 'Ethnic', url: 'ethnic.html#type-anarkali', price: '₹8,900' },
    { title: 'Classic Chanderi Silk Churidar Set', category: 'Ethnic', url: 'ethnic.html#type-churidar', price: '₹6,400' },
    { title: 'Bespoke Maggam Work Bridal Blouse', category: 'Custom Design', url: 'custom-design.html#type-blouses', price: '₹12,000' },
    { title: 'Custom Designer Sharara Troussau', category: 'Custom Design', url: 'custom-design.html#type-sharara', price: '₹18,500' },
    { title: 'Pure Mulberry Soft Silk Saree', category: 'Saree Collection', url: 'saree-collection.html#type-silks', price: '₹15,800' },
    { title: 'Handloom Chettinad Cotton Saree', category: 'Saree Collection', url: 'saree-collection.html#type-cottons', price: '₹3,400' },
    { title: 'Mother-Daughter Festive Silk Combo', category: 'Combos', url: 'combos.html#type-mother-daughter', price: '₹19,500' },
    { title: 'Couple Royal Wedding Silk Ensemble', category: 'Combos', url: 'combos.html#type-couple', price: '₹28,000' },
    { title: 'Raw Silk Festive Co-ord Set', category: 'Contemporary', url: 'contemporary.html#type-coord', price: '₹7,200' },
    { title: 'Evening Pleated Haute Couture Gown', category: 'Contemporary', url: 'contemporary.html#type-evening', price: '₹12,400' }
  ];

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        searchResults.innerHTML = `<p style="text-align: center; color: var(--color-muted); padding: 20px;">Type a collection name, item or fabric (e.g. Silk, Bridal, Lehenga)...</p>`;
        return;
      }

      const matches = catalogIndex.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.category.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = `<p style="text-align: center; color: var(--color-muted); padding: 20px;">No boutique items found matching "${q}".</p>`;
        return;
      }

      searchResults.innerHTML = matches.map(item => `
        <a href="${item.url}" class="search-result-item" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid var(--color-border); border-radius: 6px; transition: background 0.2s;">
          <div>
            <div style="font-weight: 600; color: var(--color-plum); font-size: 0.95rem;">${item.title}</div>
            <div style="font-size: 0.78rem; color: var(--color-gold-dark); text-transform: uppercase;">${item.category} Collection</div>
          </div>
          <div style="font-weight: 700; color: var(--color-wine); font-size: 0.95rem;">${item.price}</div>
        </a>
      `).join('');
    });
  }
}
