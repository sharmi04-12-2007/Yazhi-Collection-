/**
 * Yazhi Collection - Cart, Wishlist & Order State Manager
 * Handles localStorage persistence, quantity calculations, and checkout.
 */

const STORAGE_KEYS = {
  CART: 'yazhi_cart',
  WISHLIST: 'yazhi_wishlist',
  ORDERS: 'yazhi_orders',
  DISCOUNT: 'yazhi_active_discount'
};

// Default sample orders so history page has realistic boutique data on first visit
const DEFAULT_ORDERS = [
  {
    id: 'YZ-94821',
    date: '2026-09-18',
    status: 'Delivered',
    statusClass: 'status-delivered',
    shippingAddress: '44 Gardenia Villa, Anna Nagar, Chennai, TN - 600040',
    paymentMethod: 'UPI (Google Pay)',
    total: 24500,
    items: [
      {
        id: 'bridal-kanchi-01',
        title: 'Mayilkan Kanchipuram Pure Silk Saree',
        category: 'Bridal',
        type: 'Kanchipuram Silk Sarees',
        price: 24500,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'YZ-93104',
    date: '2026-09-22',
    status: 'In Stitching',
    statusClass: 'status-stitching',
    shippingAddress: '12 Emerald Court, Race Course, Coimbatore, TN - 641018',
    paymentMethod: 'Credit Card (HDFC)',
    total: 8200,
    items: [
      {
        id: 'custom-blouse-01',
        title: 'Bespoke Zardozi Hand-Embroidered Blouse',
        category: 'Custom Design',
        type: 'Custom-Made Blouses',
        price: 8200,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
];

// --- Cart Operations ---
function getCart() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CART);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading cart:', e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    updateHeaderBadges();
  } catch (e) {
    console.error('Error saving cart:', e);
  }
}

function addToCart(product, quantity = 1) {
  const cart = getCart();
  const qty = parseInt(quantity, 10) || 1;
  const existingIndex = cart.findIndex(item => item.id === product.id);

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      category: product.category || 'Collection',
      type: product.type || '',
      price: parseFloat(product.price),
      originalPrice: product.originalPrice ? parseFloat(product.originalPrice) : null,
      image: product.image,
      tagline: product.tagline || '',
      qty: qty
    });
  }

  saveCart(cart);
  if (window.showToast) {
    window.showToast(`"${product.title}" added to your cart (${qty})`, 'success');
  }
}

function updateCartQuantity(productId, quantity) {
  const cart = getCart();
  const qty = parseInt(quantity, 10);
  const itemIndex = cart.findIndex(item => item.id === productId);

  if (itemIndex > -1) {
    if (qty <= 0) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].qty = qty;
    }
    saveCart(cart);
  }
}

function removeFromCart(productId) {
  let cart = getCart();
  const removedItem = cart.find(item => item.id === productId);
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  if (window.showToast && removedItem) {
    window.showToast(`Removed "${removedItem.title}" from cart`, 'info');
  }
}

function clearCart() {
  saveCart([]);
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.qty || 1), 0);
}

function getCartSubtotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * (item.qty || 1)), 0);
}

// --- Wishlist Operations ---
function getWishlist() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.WISHLIST);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveWishlist(list) {
  try {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(list));
    updateHeaderBadges();
  } catch (e) {}
}

function toggleWishlist(product) {
  let wishlist = getWishlist();
  const exists = wishlist.some(item => item.id === product.id);

  if (exists) {
    wishlist = wishlist.filter(item => item.id !== product.id);
    saveWishlist(wishlist);
    if (window.showToast) window.showToast(`Removed "${product.title}" from wishlist`, 'info');
    return false;
  } else {
    wishlist.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category
    });
    saveWishlist(wishlist);
    if (window.showToast) window.showToast(`Saved "${product.title}" to wishlist`, 'success');
    return true;
  }
}

function isInWishlist(productId) {
  const wishlist = getWishlist();
  return wishlist.some(item => item.id === productId);
}

// --- Orders Operations ---
function getOrders() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ORDERS);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(DEFAULT_ORDERS));
      return DEFAULT_ORDERS;
    }
    return JSON.parse(data);
  } catch (e) {
    return DEFAULT_ORDERS;
  }
}

function addOrder(orderData) {
  const orders = getOrders();
  const newOrder = {
    id: 'YZ-' + Math.floor(10000 + Math.random() * 90000),
    date: new Date().toISOString().split('T')[0],
    status: 'Processing',
    statusClass: 'status-shipped',
    ...orderData
  };
  orders.unshift(newOrder);
  try {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  } catch (e) {}
  return newOrder;
}

// --- Header Badges Update ---
function updateHeaderBadges() {
  const cartCount = getCartCount();
  const wishlist = getWishlist();
  const wishlistCount = wishlist.length;

  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = cartCount;
    badge.style.display = cartCount > 0 ? 'flex' : 'none';
    badge.classList.remove('badge-pulse');
    void badge.offsetWidth;
    badge.classList.add('badge-pulse');
  });

  document.querySelectorAll('.wishlist-badge').forEach(badge => {
    badge.textContent = wishlistCount;
    badge.style.display = wishlistCount > 0 ? 'flex' : 'none';
  });
}

// Initial badge update on load
document.addEventListener('DOMContentLoaded', () => {
  updateHeaderBadges();
});

// Expose globally
window.YazhiCart = {
  getCart,
  saveCart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  getCartCount,
  getCartSubtotal,
  getWishlist,
  toggleWishlist,
  isInWishlist,
  getOrders,
  addOrder,
  updateHeaderBadges
};
