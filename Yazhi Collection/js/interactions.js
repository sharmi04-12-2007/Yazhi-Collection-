/**
 * Yazhi Collection - Product Card & Interactive Modals Handler
 * Implements PRD Section 11 & 13:
 * - Quantity increment/decrement (min 1)
 * - Add to Cart visible feedback
 * - Buy Now instant checkout modal
 * - Customization enquiry modal
 * - Quick View modal
 */

document.addEventListener('DOMContentLoaded', () => {
  setupQuantityControls();
  setupAddToCartButtons();
  setupBuyNowButtons();
  setupCustomizationModal();
  setupQuickViewModal();
  setupWishlistButtons();
});

// --- 1. Quantity Plus/Minus Controls ---
function setupQuantityControls() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.qty-btn');
    if (!btn) return;

    const wrapper = btn.closest('.qty-selector');
    if (!wrapper) return;

    const input = wrapper.querySelector('.qty-input');
    if (!input) return;

    let currentVal = parseInt(input.value, 10) || 1;

    if (btn.classList.contains('plus')) {
      currentVal += 1;
    } else if (btn.classList.contains('minus')) {
      if (currentVal > 1) {
        currentVal -= 1;
      }
    }

    input.value = currentVal;
  });

  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('qty-input')) {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val) || val < 1) {
        e.target.value = 1;
      }
    }
  });
}

// --- 2. Add To Cart Handlers ---
function setupAddToCartButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-cart-btn');
    if (!btn) return;

    const card = btn.closest('.product-card') || btn.closest('.quick-view-card') || btn.closest('.product-hero-wrap');
    if (!card) return;

    const productId = card.getAttribute('data-id');
    const title = card.getAttribute('data-title');
    const price = card.getAttribute('data-price');
    const originalPrice = card.getAttribute('data-original-price');
    const category = card.getAttribute('data-category');
    const type = card.getAttribute('data-type');
    const image = card.getAttribute('data-image');
    const tagline = card.getAttribute('data-tagline');

    const qtyInput = card.querySelector('.qty-input');
    const qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;

    const product = {
      id: productId,
      title: title,
      price: price,
      originalPrice: originalPrice,
      category: category,
      type: type,
      image: image,
      tagline: tagline
    };

    if (window.YazhiCart) {
      window.YazhiCart.addToCart(product, qty);
    }

    // Button feedback animation
    const originalText = btn.innerHTML;
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Added!`;
    btn.style.backgroundColor = 'var(--color-plum)';
    btn.style.color = 'var(--color-white)';

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.backgroundColor = '';
      btn.style.color = '';
    }, 1500);
  });
}

// --- 3. Buy Now Handler & Instant Checkout Modal ---
function setupBuyNowButtons() {
  // Inject Buy Now Modal into document if not present
  if (!document.getElementById('buy-now-modal')) {
    const modalHtml = `
      <div id="buy-now-modal" class="modal-overlay">
        <div class="modal-card" style="max-width: 520px;">
          <div class="modal-header">
            <h3 style="font-size: 1.35rem; color: var(--color-plum);">Express Checkout</h3>
            <button class="modal-close-btn">&times;</button>
          </div>
          <div class="modal-body">
            <div id="buy-now-item-preview" style="display: flex; gap: 16px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border);">
              <!-- Injected dynamically -->
            </div>
            <form id="buy-now-form">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control" id="bn-name" value="Ananya Sundaram" required>
              </div>
              <div class="form-group">
                <label class="form-label">Delivery Address</label>
                <textarea class="form-control" id="bn-address" rows="2" required>44 Gardenia Villa, Anna Nagar, Chennai, TN - 600040</textarea>
              </div>
              <div class="form-group">
                <label class="form-label">Contact Phone / WhatsApp</label>
                <input type="tel" class="form-control" id="bn-phone" value="+91 98401 23456" required>
              </div>
              <div class="form-group">
                <label class="form-label">Payment Method</label>
                <select class="form-control" id="bn-payment">
                  <option value="UPI">UPI (Google Pay / PhonePe / Paytm)</option>
                  <option value="Card">Credit / Debit Card</option>
                  <option value="NetBanking">Net Banking</option>
                  <option value="COD">Cash on Delivery / Boutique Verification</option>
                </select>
              </div>
              <div style="background: var(--color-cream); padding: 14px; border-radius: 8px; margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; font-weight: 700; color: var(--color-plum); font-size: 1.1rem;">
                  <span>Total Payable:</span>
                  <span id="bn-total-amount">₹0</span>
                </div>
                <div style="font-size: 0.78rem; color: var(--color-gold-dark); margin-top: 4px;">✨ Includes complimentary express boutique shipping & luxury box</div>
              </div>
              <button type="submit" class="btn btn-gold btn-block btn-lg">Confirm & Place Order</button>
            </form>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  const modal = document.getElementById('buy-now-modal');
  const preview = document.getElementById('buy-now-item-preview');
  const totalAmountEl = document.getElementById('bn-total-amount');
  const closeBtn = modal.querySelector('.modal-close-btn');
  const form = document.getElementById('buy-now-form');

  let currentBuyProduct = null;
  let currentBuyQty = 1;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.buy-now-btn');
    if (!btn) return;

    const card = btn.closest('.product-card') || btn.closest('.quick-view-card');
    if (!card) return;

    const productId = card.getAttribute('data-id');
    const title = card.getAttribute('data-title');
    const price = parseFloat(card.getAttribute('data-price')) || 0;
    const category = card.getAttribute('data-category') || 'Collection';
    const type = card.getAttribute('data-type') || '';
    const image = card.getAttribute('data-image');
    const qtyInput = card.querySelector('.qty-input');
    currentBuyQty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;

    currentBuyProduct = { id: productId, title, price, category, type, image, qty: currentBuyQty };

    const total = price * currentBuyQty;

    preview.innerHTML = `
      <img src="${image}" alt="${title}" style="width: 75px; height: 95px; object-fit: cover; border-radius: 6px; border: 1px solid var(--color-border);">
      <div>
        <h4 style="font-size: 1.05rem; color: var(--color-plum); margin-bottom: 4px;">${title}</h4>
        <div style="font-size: 0.8rem; color: var(--color-muted);">${category} • ${type}</div>
        <div style="font-size: 0.9rem; font-weight: 700; color: var(--color-wine); margin-top: 6px;">₹${price.toLocaleString()} &times; ${currentBuyQty}</div>
      </div>
    `;

    totalAmountEl.textContent = `₹${total.toLocaleString()}`;
    modal.classList.add('active');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('bn-name').value;
      const address = document.getElementById('bn-address').value;
      const paymentMethod = document.getElementById('bn-payment').value;

      if (window.YazhiCart && currentBuyProduct) {
        const order = window.YazhiCart.addOrder({
          shippingAddress: address,
          customerName: name,
          paymentMethod: paymentMethod,
          total: currentBuyProduct.price * currentBuyQty,
          items: [currentBuyProduct]
        });

        modal.classList.remove('active');
        if (window.showToast) {
          window.showToast(`Order #${order.id} placed successfully! Thank you, ${name}.`, 'success');
        }

        setTimeout(() => {
          window.location.href = 'history.html';
        }, 1200);
      }
    });
  }
}

// --- 4. Customization Enquiry Modal (PRD Requirement) ---
function setupCustomizationModal() {
  if (!document.getElementById('customization-modal')) {
    const modalHtml = `
      <div id="customization-modal" class="modal-overlay">
        <div class="modal-card" style="max-width: 580px;">
          <div class="modal-header">
            <div>
              <h3 style="font-size: 1.35rem; color: var(--color-plum);">Bespoke Customization Request</h3>
              <p style="font-size: 0.8rem; color: var(--color-muted);">Tailored colors, custom blouse patterns & exact sizing</p>
            </div>
            <button class="modal-close-btn">&times;</button>
          </div>
          <div class="modal-body">
            <form id="customization-form">
              <div class="form-group">
                <label class="form-label">Referenced Outfit / Style</label>
                <input type="text" class="form-control" id="cust-item-ref" readonly style="background: var(--color-cream); font-weight: 600;">
              </div>
              <div class="form-group">
                <label class="form-label">Preferred Color Palette / Fabric</label>
                <input type="text" class="form-control" id="cust-color" placeholder="e.g. Royal Wine, Emerald Green, Antique Gold Zari" required>
              </div>
              <div class="form-group">
                <label class="form-label">Customization Details</label>
                <textarea class="form-control" id="cust-details" rows="3" placeholder="Describe neck pattern, sleeve styling, maggam embroidery preference, or size requirements..." required></textarea>
              </div>
              <div class="form-group">
                <label class="form-label">Your Name & WhatsApp Contact</label>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                  <input type="text" class="form-control" id="cust-name" placeholder="Full Name" required>
                  <input type="tel" class="form-control" id="cust-phone" placeholder="WhatsApp Number" required>
                </div>
              </div>
              <button type="submit" class="btn btn-primary btn-block btn-lg">Submit Customization Request</button>
            </form>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  const modal = document.getElementById('customization-modal');
  const closeBtn = modal.querySelector('.modal-close-btn');
  const refInput = document.getElementById('cust-item-ref');
  const form = document.getElementById('customization-form');

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.enquire-customization-btn');
    if (!btn) return;

    const ref = btn.getAttribute('data-ref') || 'Yazhi Boutique Signature Couture';
    if (refInput) refInput.value = ref;
    modal.classList.add('active');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.classList.remove('active');
      if (window.showToast) {
        window.showToast("Your customization request has been sent! Our boutique designer will connect on WhatsApp within 2 hours.", "success");
      }
      form.reset();
    });
  }
}

// --- 5. Quick View Modal ---
function setupQuickViewModal() {
  if (!document.getElementById('quick-view-modal')) {
    const modalHtml = `
      <div id="quick-view-modal" class="modal-overlay">
        <div class="modal-card quick-view-card" style="max-width: 820px;">
          <div class="modal-header" style="border:none; position:absolute; right:15px; top:15px; z-index:10;">
            <button class="modal-close-btn" style="background:rgba(255,255,255,0.85); width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center;">&times;</button>
          </div>
          <div class="modal-body" style="padding: 0;">
            <div id="quick-view-content" style="display: grid; grid-template-columns: 1fr 1.15fr;">
              <!-- Dynamic content -->
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  const modal = document.getElementById('quick-view-modal');
  const content = document.getElementById('quick-view-content');
  const closeBtn = modal.querySelector('.modal-close-btn');

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.quick-view-overlay-btn');
    if (!btn) return;

    const card = btn.closest('.product-card');
    if (!card) return;

    const id = card.getAttribute('data-id');
    const title = card.getAttribute('data-title');
    const price = card.getAttribute('data-price');
    const originalPrice = card.getAttribute('data-original-price');
    const category = card.getAttribute('data-category');
    const type = card.getAttribute('data-type');
    const image = card.getAttribute('data-image');
    const tagline = card.getAttribute('data-tagline');
    const desc = card.getAttribute('data-desc') || 'Masterfully crafted luxury attire from Yazhi Collection, tailored with authentic artisanal weaves and pure fabrics.';

    content.parentElement.closest('.product-card, .quick-view-card').setAttribute('data-id', id);
    content.parentElement.closest('.product-card, .quick-view-card').setAttribute('data-title', title);
    content.parentElement.closest('.product-card, .quick-view-card').setAttribute('data-price', price);
    content.parentElement.closest('.product-card, .quick-view-card').setAttribute('data-category', category);
    content.parentElement.closest('.product-card, .quick-view-card').setAttribute('data-type', type);
    content.parentElement.closest('.product-card, .quick-view-card').setAttribute('data-image', image);
    content.parentElement.closest('.product-card, .quick-view-card').setAttribute('data-tagline', tagline);

    content.innerHTML = `
      <div style="aspect-ratio: 4/5; overflow: hidden; background: var(--color-cream);">
        <img src="${image}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div style="padding: 36px 30px; display: flex; flex-direction: column;">
        <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--color-gold-dark); letter-spacing: 0.12em; margin-bottom: 6px;">${category} • ${type}</div>
        <h3 style="font-size: 1.6rem; color: var(--color-plum); margin-bottom: 6px;">${title}</h3>
        <div style="font-family: var(--font-serif); font-style: italic; color: var(--color-wine); margin-bottom: 14px; font-size: 1.05rem;">"${tagline}"</div>
        <p style="font-size: 0.9rem; color: var(--color-muted); line-height: 1.6; margin-bottom: 20px;">${desc}</p>
        
        <div style="display: flex; align-items: baseline; gap: 12px; margin-bottom: 22px;">
          <span style="font-size: 1.6rem; font-weight: 700; color: var(--color-plum);">₹${parseFloat(price).toLocaleString()}</span>
          ${originalPrice ? `<span style="font-size: 1rem; color: var(--color-muted-light); text-decoration: line-through;">₹${parseFloat(originalPrice).toLocaleString()}</span>` : ''}
        </div>

        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
          <span style="font-size: 0.88rem; font-weight: 600;">Quantity:</span>
          <div class="qty-selector">
            <button class="qty-btn minus">&minus;</button>
            <input type="text" class="qty-input" value="1" readonly>
            <button class="qty-btn plus">&plus;</button>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: auto;">
          <button class="btn btn-outline-plum add-to-cart-btn">Add to Cart</button>
          <button class="btn btn-gold buy-now-btn">Buy Now</button>
        </div>
      </div>
    `;

    modal.classList.add('active');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

// --- 6. Wishlist Button Handler ---
function setupWishlistButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.product-wishlist-btn');
    if (!btn) return;

    const card = btn.closest('.product-card');
    if (!card) return;

    const product = {
      id: card.getAttribute('data-id'),
      title: card.getAttribute('data-title'),
      price: card.getAttribute('data-price'),
      image: card.getAttribute('data-image'),
      category: card.getAttribute('data-category')
    };

    if (window.YazhiCart) {
      const isSaved = window.YazhiCart.toggleWishlist(product);
      if (isSaved) {
        btn.classList.add('active');
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
      } else {
        btn.classList.remove('active');
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
      }
    }
  });
}
