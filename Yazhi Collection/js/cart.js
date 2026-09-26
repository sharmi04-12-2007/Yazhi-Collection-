// ============================================================
// YAZHI COLLECTION – Cart Engine (PRD v2)
// Offers: Birthday 30%, Festival 20%, Free Delivery >₹4000,
//         First Order 50%, Premium >₹9000 → 70% off
// ============================================================

const YAZHI_CART_KEY = 'yazhi_cart';

// ─── Get / Save Cart ─────────────────────────────────────────

function yazhiGetCart() {
  return JSON.parse(localStorage.getItem(YAZHI_CART_KEY) || '[]');
}

function yazhiSaveCart(cart) {
  localStorage.setItem(YAZHI_CART_KEY, JSON.stringify(cart));
  yazhiUpdateCartBadge();
}

// ─── Add to Cart ─────────────────────────────────────────────

function yazhiAddToCart(product, qty = 1, color = null, size = null) {
  const cart = yazhiGetCart();
  const key = `${product.id}_${color}_${size}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, 10);
  } else {
    cart.push({
      key,
      id: product.id,
      name: product.name,
      price: product.price,
      color: color || (product.colors && product.colors[0]) || 'Default',
      size: size || (product.sizes && product.sizes[0]) || 'Free Size',
      qty,
      collection: product.collection || ''
    });
  }
  yazhiSaveCart(cart);
  yazhiToast(`${product.name} added to your shopping bag!`, 'success');
}

// ─── Card Action Handlers ─────────────────────────────────────

function yazhiCardQtyChange(productId, delta) {
  const el = document.getElementById('qty-' + productId);
  if (!el) return;
  let val = parseInt(el.textContent, 10) || 1;
  val = Math.max(1, Math.min(10, val + delta));
  el.textContent = val;
}

function yazhiAddToCartFromCard(productId) {
  const p = yazhiGetProduct(productId);
  if (!p) {
    if (typeof yazhiToast === 'function') yazhiToast('Product details not found.', 'error');
    return;
  }
  const qtyEl = document.getElementById('qty-' + productId);
  const qty = qtyEl ? (parseInt(qtyEl.textContent, 10) || 1) : 1;
  
  const colorEl = document.querySelector(`[data-product-color="${productId}"].active`);
  const sizeEl = document.querySelector(`[data-product-size="${productId}"].active`);
  const color = colorEl ? colorEl.getAttribute('data-color') : (p.colors && p.colors[0]) || 'Standard';
  const size = sizeEl ? sizeEl.getAttribute('data-size') : (p.sizes && p.sizes[0]) || 'Free Size';

  yazhiAddToCart(p, qty, color, size);
}

function yazhiBuyNowFromCard(productId) {
  const p = yazhiGetProduct(productId);
  if (!p) {
    if (typeof yazhiToast === 'function') yazhiToast('Product details not found.', 'error');
    return;
  }
  const qtyEl = document.getElementById('qty-' + productId);
  const qty = qtyEl ? (parseInt(qtyEl.textContent, 10) || 1) : 1;

  const colorEl = document.querySelector(`[data-product-color="${productId}"].active`);
  const sizeEl = document.querySelector(`[data-product-size="${productId}"].active`);
  const color = colorEl ? colorEl.getAttribute('data-color') : (p.colors && p.colors[0]) || 'Standard';
  const size = sizeEl ? sizeEl.getAttribute('data-size') : (p.sizes && p.sizes[0]) || 'Free Size';

  yazhiAddToCart(p, qty, color, size);

  const session = typeof yazhiGetSession === 'function' ? yazhiGetSession() : null;
  if (session && session.role === 'customer') {
    window.location.href = 'checkout.html';
  } else {
    yazhiToast('Item added! Please login or register to complete your order.', 'info');
    setTimeout(() => {
      window.location.href = 'login.html?redirect=checkout.html';
    }, 600);
  }
}

// ─── Remove from Cart ─────────────────────────────────────────

function yazhiRemoveFromCart(key) {
  let cart = yazhiGetCart();
  cart = cart.filter(i => i.key !== key);
  yazhiSaveCart(cart);
}

// ─── Update Qty ───────────────────────────────────────────────

function yazhiUpdateCartQty(key, newQty) {
  const cart = yazhiGetCart();
  const item = cart.find(i => i.key === key);
  if (item) {
    if (newQty < 1) { yazhiRemoveFromCart(key); return; }
    item.qty = Math.min(newQty, 10);
    yazhiSaveCart(cart);
  }
}

// ─── Clear Cart ───────────────────────────────────────────────

function yazhiClearCart() {
  localStorage.removeItem(YAZHI_CART_KEY);
  yazhiUpdateCartBadge();
}

// ─── Totals & Offer Calculation ───────────────────────────────

function yazhiCalculateTotals(cart, offerCode, userId) {
  const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);

  let discount = 0;
  let offerLabel = '';
  let appliedOffer = null;

  const users = JSON.parse(localStorage.getItem('yazhi_users') || '[]');
  const user = users.find(u => u.id === userId);
  const isFirstOrder = user && !user.firstOrderDone;

  // Auto-apply best discount
  if (subtotal >= 9000) {
    discount = Math.round(subtotal * 0.70);
    offerLabel = '70% Premium Discount Applied';
    appliedOffer = { discount: 0.70, label: offerLabel };
  } else if (isFirstOrder && !offerCode) {
    discount = Math.round(subtotal * 0.50);
    offerLabel = '50% First Order Discount Applied';
    appliedOffer = { discount: 0.50, label: offerLabel };
  }

  // Manual coupon codes override auto
  if (offerCode) {
    const code = offerCode.toUpperCase().trim();
    if (code === 'BDAY30') {
      discount = Math.round(subtotal * 0.30);
      offerLabel = '30% Birthday Special Applied';
      appliedOffer = { discount: 0.30, label: offerLabel };
    } else if (code === 'FESTIVE20') {
      discount = Math.round(subtotal * 0.20);
      offerLabel = '20% Festival Discount Applied';
      appliedOffer = { discount: 0.20, label: offerLabel };
    } else if (code === 'YAZHI50' && isFirstOrder) {
      discount = Math.round(subtotal * 0.50);
      offerLabel = '50% First Order Discount Applied';
      appliedOffer = { discount: 0.50, label: offerLabel };
    } else if (code === 'PREMIUM70' && subtotal >= 9000) {
      discount = Math.round(subtotal * 0.70);
      offerLabel = '70% Premium Discount Applied';
      appliedOffer = { discount: 0.70, label: offerLabel };
    }
  }

  const discountedSubtotal = subtotal - discount;
  const delivery = discountedSubtotal >= 4000 ? 0 : 99;
  const total = discountedSubtotal + delivery;

  return { subtotal, discount, offerLabel, appliedOffer, delivery, total, itemCount: cart.reduce((s,i)=>s+i.qty,0) };
}

// ─── Cart Badge ───────────────────────────────────────────────

function yazhiUpdateCartBadge() {
  const cart = yazhiGetCart();
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('[data-cart-badge]').forEach(el => {
    el.textContent = total > 0 ? total : '';
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

// Auto-init badge on load
document.addEventListener('DOMContentLoaded', yazhiUpdateCartBadge);
