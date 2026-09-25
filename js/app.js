// ============================================================
// YAZHI COLLECTION – App Core (PRD v2)
// Glance timer, offer ticker, mobile nav, enquiries
// ============================================================

const YAZHI_ENQUIRIES_KEY = 'yazhi_enquiries';
const YAZHI_OWNER_PHONE   = '6369685930';

// ─── Offer Ticker Messages ───────────────────────────────────

const OFFER_MESSAGES = [
  '🎉 50% Off on your First Order! Use code YAZHI50',
  '🎂 30% Birthday Special – use code BDAY30 any time of year!',
  '🪔 20% Festive Discount – code FESTIVE20 on all collections',
  '🚚 Free Delivery on orders above ₹4,000!',
  '💎 Order above ₹9,000? Enjoy a massive 70% discount!',
  '✨ Custom Designs by Sharmila M – WhatsApp 6369685930',
  '👗 New Arrivals every week – Shop the latest at Yazhi Collection!',
  '⏰ Shop Hours: 9:00 AM – 9:00 PM | Coimbatore, Tamil Nadu'
];

// ─── Glance / Intro Popup (index.html) ───────────────────────

function yazhiInitGlance() {
  const glance = document.getElementById('glance-screen');
  if (!glance) return;

  let countdown = 4;
  const timerEl = document.getElementById('glance-timer');

  const tick = setInterval(() => {
    countdown--;
    if (timerEl) timerEl.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(tick);
      glance.classList.add('fade-out');
      setTimeout(() => { window.location.href = 'home.html'; }, 600);
    }
  }, 1000);

  const skipBtn = document.getElementById('glance-skip');
  if (skipBtn) skipBtn.addEventListener('click', () => {
    clearInterval(tick);
    glance.classList.add('fade-out');
    setTimeout(() => { window.location.href = 'home.html'; }, 400);
  });
}

// ─── Offer Ticker Rotation ───────────────────────────────────

function yazhiInitOfferTicker() {
  const ticker = document.getElementById('offer-ticker-text');
  if (!ticker) return;
  let idx = 0;
  ticker.textContent = OFFER_MESSAGES[0];
  setInterval(() => {
    idx = (idx + 1) % OFFER_MESSAGES.length;
    ticker.classList.add('fade-out-ticker');
    setTimeout(() => {
      ticker.textContent = OFFER_MESSAGES[idx];
      ticker.classList.remove('fade-out-ticker');
    }, 300);
  }, 4000);
}

// ─── Mobile Nav Drawer ────────────────────────────────────────

function yazhiInitMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navDrawer = document.getElementById('nav-drawer');
  const overlay = document.getElementById('nav-overlay');
  const closeBtn = document.getElementById('drawer-close');

  if (!hamburger || !navDrawer) return;

  const open = () => { navDrawer.classList.add('open'); if (overlay) overlay.classList.add('active'); document.body.style.overflow = 'hidden'; };
  const close = () => { navDrawer.classList.remove('open'); if (overlay) overlay.classList.remove('active'); document.body.style.overflow = ''; };

  hamburger.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (overlay) overlay.addEventListener('click', close);
  document.querySelectorAll('#nav-drawer a').forEach(a => a.addEventListener('click', close));
}

// ─── Enquiry Form (enquiry.html) ─────────────────────────────

function yazhiSubmitEnquiry(name, phone, message, type = 'general') {
  const enquiries = JSON.parse(localStorage.getItem(YAZHI_ENQUIRIES_KEY) || '[]');
  const enquiry = {
    id: 'enq_' + Date.now(),
    name, phone, message, type,
    status: 'new',
    createdAt: new Date().toISOString()
  };
  enquiries.unshift(enquiry);
  localStorage.setItem(YAZHI_ENQUIRIES_KEY, JSON.stringify(enquiries));
  return enquiry;
}

function yazhiWhatsAppEnquiry(name, phone, message) {
  const text = `Hello Yazhi Collection (Sharmila M),\n\nName: ${name}\nPhone: ${phone}\n\nEnquiry: ${message}\n\nRegards,\n${name}`;
  const url = `https://wa.me/91${YAZHI_OWNER_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// ─── Sticky Header + Scroll Shadow ───────────────────────────

function yazhiInitStickyHeader() {
  const header = document.querySelector('.yazhi-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ─── Smooth Scroll to Anchor ──────────────────────────────────

function yazhiSmoothScroll(target) {
  const el = document.querySelector(target);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── Lazy Image Placeholder Fill ──────────────────────────────

function yazhiFillPlaceholders() {
  document.querySelectorAll('.product-img-placeholder').forEach(el => {
    const label = el.dataset.label || 'Yazhi Collection';
    const color = el.dataset.color || '#3B1F3F';
    el.style.background = `linear-gradient(135deg, ${color} 0%, #C9A45C 100%)`;
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
    el.style.color = 'rgba(255,255,255,0.6)';
    el.style.fontSize = '13px';
    el.style.fontFamily = 'Georgia, serif';
    el.style.letterSpacing = '0.5px';
    el.style.textAlign = 'center';
    el.style.flexDirection = 'column';
    el.innerHTML = `<span style="font-size:28px;margin-bottom:6px;">✦</span><span>${label}</span>`;
  });
}

// ─── Animate on Scroll ────────────────────────────────────────

function yazhiInitScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

// ─── Active Nav Link ─────────────────────────────────────────

function yazhiSetActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.yazhi-nav a, .drawer-nav a').forEach(link => {
    const href = link.getAttribute('href') || '';
    link.classList.toggle('active', href === current || href.includes(current));
  });
}

// ─── Init All ────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  yazhiInitGlance();
  yazhiInitOfferTicker();
  yazhiInitMobileNav();
  yazhiInitStickyHeader();
  yazhiFillPlaceholders();
  yazhiInitScrollReveal();
  yazhiSetActiveNav();
});
