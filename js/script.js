/**
 * Yazhi Collection – Page-Specific Helpers
 *
 * IMPORTANT: This file intentionally contains NO duplicates of:
 *   - showToast / yazhiToast      → use yazhiToast() from app.js
 *   - Sticky header logic         → handled by yazhiInitStickyHeader() in app.js
 *   - Mobile navigation           → handled by yazhiInitMobileNav() in app.js
 *   - Global search               → handled by yazhiInitGlobalSearch() in app.js
 *   - Active nav highlighting     → handled by yazhiSetActiveNav() in app.js
 *
 * This file only holds small utilities that are NOT already in app.js.
 * Load order in HTML:  products.js → auth.js → cart.js → orders.js → app.js → this file (if needed)
 */

// ─── Copy Offer Code to Clipboard (used on home/offers pages) ───
function copyOffer(code) {
  if (!code) return;
  navigator.clipboard.writeText(code).then(() => {
    if (typeof yazhiToast === 'function') {
      yazhiToast(`Offer code "${code}" copied to clipboard.`, 'success');
    }
  }).catch(() => {
    if (typeof yazhiToast === 'function') {
      yazhiToast(`Your offer code is: ${code}`, 'info');
    }
  });
}

// ─── Smooth-scroll to a section by ID (used on single-page anchor links) ───
function yazhiScrollTo(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ─── Expose as global utilities ───
window.copyOffer = copyOffer;
window.yazhiScrollTo = yazhiScrollTo;
