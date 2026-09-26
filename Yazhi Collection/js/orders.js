// ============================================================
// YAZHI COLLECTION – Orders Engine (PRD v2)
// 7-stage order status shared between customer and owner
// Founder: Sharmila M | Coimbatore | Ph: 6369685930
// ============================================================

const YAZHI_ORDERS_KEY     = 'yazhi_orders';
const YAZHI_DEMO_ORDERS_KEY = 'yazhi_demo_orders_loaded';

// ─── Order Stages (Requirement 4: No emoji icons) ────────────
const ORDER_STAGES = [
  { id: 'placed',     label: 'Order Placed',    svgIcon: 'receipt',  color: '#1565C0' },
  { id: 'confirmed',  label: 'Confirmed',        svgIcon: 'check',    color: '#2E7D32' },
  { id: 'processing', label: 'Processing',       svgIcon: 'gear',     color: '#7A3455' },
  { id: 'packed',     label: 'Packed',           svgIcon: 'box',      color: '#5C223D' },
  { id: 'shipped',    label: 'Shipped / Ready',  svgIcon: 'truck',    color: '#3B1F3F' },
  { id: 'out',        label: 'Out for Delivery', svgIcon: 'delivery', color: '#C9A45C' },
  { id: 'delivered',  label: 'Delivered',        svgIcon: 'check',    color: '#2E7D32' }
];

const ORDER_CANCEL_STAGE = { id: 'cancelled', label: 'Cancelled', svgIcon: 'x', color: '#C62828' };

// ─── Inline SVG for timeline step indicators (no emoji) ──────
function orderStepSvg(iconName) {
  const icons = {
    receipt: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`,
    check:   `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    gear:    `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    box:     `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>`,
    truck:   `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
    delivery:`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l19-9-9 19-2-8-8-2z"></path></svg>`,
    x:       `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
  };
  return icons[iconName] || icons.check;
}

// ─── Demo/Sample Orders (OWNER DASHBOARD ONLY – never shown to customers) ───
// These are isolated by userId prefix 'u_demo'. Real customers never match.
const INITIAL_SAMPLE_ORDERS = [
  {
    id: 'YC-2024-BR01',
    userId: 'u_demo1',
    userName: 'Priyadharshini K',
    userPhone: '9840123456',
    items: [
      { id: 'b1', name: 'Bridal Kanchipuram Pure Silk', price: 14500, qty: 1, color: 'Crimson Red', size: 'Free Size' }
    ],
    address: { name: 'Priyadharshini K', phone: '9840123456', line1: '14, Gandhipuram 5th Street', city: 'Coimbatore', pin: '641012', state: 'Tamil Nadu', type: 'Home' },
    paymentMethod: 'UPI (priya@okaxis)',
    appliedOffer: 'BDAY30 – 30% Birthday Special',
    subtotal: 14500,
    discount: 4350,
    delivery: 0,
    total: 10150,
    status: 'confirmed',
    timeline: [
      { stage: 'placed',    at: new Date(Date.now() - 3600000 * 8).toISOString(), note: 'Order received by Yazhi Collection.' },
      { stage: 'confirmed', at: new Date(Date.now() - 3600000 * 5).toISOString(), note: 'Sharmila M confirmed customer measurements and wedding date.' }
    ],
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 5).toISOString()
  },
  {
    id: 'YC-2024-LE02',
    userId: 'u_demo2',
    userName: 'Ananya R',
    userPhone: '9789012345',
    items: [
      { id: 'b2', name: 'Heritage Handcrafted Bridal Velvet Lehenga', price: 22000, qty: 1, color: 'Bridal Crimson', size: 'M' }
    ],
    address: { name: 'Ananya R', phone: '9789012345', line1: '45, Race Course Road', city: 'Coimbatore', pin: '641018', state: 'Tamil Nadu', type: 'Home' },
    paymentMethod: 'UPI (ananya@okhdfcbank)',
    appliedOffer: 'PREMIUM70 – 70% Premium Discount',
    subtotal: 22000,
    discount: 15400,
    delivery: 0,
    total: 6600,
    status: 'shipped',
    timeline: [
      { stage: 'placed',     at: new Date(Date.now() - 3600000 * 48).toISOString(), note: 'Order placed by customer.' },
      { stage: 'confirmed',  at: new Date(Date.now() - 3600000 * 40).toISOString(), note: 'Confirmed with Sharmila M.' },
      { stage: 'processing', at: new Date(Date.now() - 3600000 * 24).toISOString(), note: 'Handcrafted zardozi embroidery in progress.' },
      { stage: 'packed',     at: new Date(Date.now() - 3600000 * 12).toISOString(), note: 'Boutique premium gift boxed.' },
      { stage: 'shipped',    at: new Date(Date.now() - 3600000 *  4).toISOString(), note: 'Handed to express courier. Tracking active.' }
    ],
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 *  4).toISOString()
  }
];

// ─── Load / Save ─────────────────────────────────────────────

function yazhiGetOrders() {
  const stored = localStorage.getItem(YAZHI_ORDERS_KEY);
  if (stored) return JSON.parse(stored);

  // First ever visit: initialise storage with demo orders (owner-only context)
  // Demo orders have userId 'u_demo*' so customer sessions never see them
  localStorage.setItem(YAZHI_ORDERS_KEY, JSON.stringify(INITIAL_SAMPLE_ORDERS));
  localStorage.setItem(YAZHI_DEMO_ORDERS_KEY, 'true');
  return INITIAL_SAMPLE_ORDERS;
}

function yazhiSaveOrders(orders) {
  localStorage.setItem(YAZHI_ORDERS_KEY, JSON.stringify(orders));
}

function yazhiGenerateOrderId() {
  const ts   = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `YC-${ts}-${rand}`;
}

// ─── Place Order ─────────────────────────────────────────────

function yazhiPlaceOrder(userId, userName, userPhone, items, address, paymentMethod, appliedOffer) {
  const orders   = yazhiGetOrders();
  const subtotal = items.reduce((s, i) => s + (i.price * i.qty), 0);
  let discount   = 0;
  if (appliedOffer) discount = Math.round(subtotal * (appliedOffer.discount || 0));
  const delivery = subtotal >= 4000 ? 0 : 99;
  const total    = subtotal - discount + delivery;

  const order = {
    id: yazhiGenerateOrderId(),
    userId,
    userName,
    userPhone,
    items,
    address,
    paymentMethod,
    appliedOffer: appliedOffer ? appliedOffer.label : null,
    subtotal,
    discount,
    delivery,
    total,
    status: 'placed',
    timeline: [{ stage: 'placed', at: new Date().toISOString(), note: 'Order received by Yazhi Collection.' }],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  orders.unshift(order);
  yazhiSaveOrders(orders);

  // Push to Firestore cloud if Firebase is active
  if (typeof yazhiCloudSaveOrder === 'function') {
    yazhiCloudSaveOrder(order);
  }

  // Mark first order done for this user
  const users = JSON.parse(localStorage.getItem('yazhi_users') || '[]');
  const uIdx  = users.findIndex(u => u.id === userId);
  if (uIdx !== -1) {
    users[uIdx].firstOrderDone = true;
    localStorage.setItem('yazhi_users', JSON.stringify(users));
  }

  return order;
}

// ─── Get Orders for a Specific Customer ──────────────────────
// IMPORTANT: Filters by userId so demo orders (u_demo*) are invisible to real customers.

function yazhiGetUserOrders(userId) {
  if (!userId) return [];
  return yazhiGetOrders().filter(o => o.userId === userId);
}

// ─── Get All Orders (Owner Dashboard Only) ───────────────────

function yazhiGetAllOrders() {
  return yazhiGetOrders();
}

// ─── Update Order Status (Owner) ─────────────────────────────

function yazhiUpdateOrderStatus(orderId, newStatus, note = '') {
  const orders = yazhiGetOrders();
  const idx    = orders.findIndex(o => o.id === orderId);
  if (idx === -1) return false;
  orders[idx].status    = newStatus;
  orders[idx].updatedAt = new Date().toISOString();
  orders[idx].timeline.push({
    stage: newStatus,
    at:    new Date().toISOString(),
    note:  note || `Status updated to ${newStatus}.`
  });
  yazhiSaveOrders(orders);

  // Sync status change to Firestore cloud if Firebase is active
  if (typeof yazhiCloudUpdateOrderStatus === 'function') {
    yazhiCloudUpdateOrderStatus(orderId, orders[idx].status, orders[idx].timeline);
  }
  return true;
}

// ─── Cancel Order ────────────────────────────────────────────

function yazhiCancelOrder(orderId, reason = '') {
  return yazhiUpdateOrderStatus(orderId, 'cancelled', reason || 'Order cancelled by customer.');
}

// ─── Get Order by ID ─────────────────────────────────────────

function yazhiGetOrderById(orderId) {
  return yazhiGetOrders().find(o => o.id === orderId) || null;
}

// ─── Render Order Timeline HTML (No emojis — SVG icons only) ─

function yazhiRenderTimeline(order) {
  const currentIdx  = ORDER_STAGES.findIndex(s => s.id === order.status);
  const isCancelled = order.status === 'cancelled';

  if (isCancelled) {
    return `
      <div class="order-cancelled" style="display:flex;align-items:center;gap:.75rem;padding:1.5rem;background:#fff5f5;border-radius:8px;border:1.5px solid #f5c6c6">
        <span style="color:#C62828;flex-shrink:0">${orderStepSvg('x')}</span>
        <div>
          <strong style="color:#C62828">Order Cancelled</strong>
          <p style="margin:.25rem 0 0;font-size:.82rem;color:var(--muted)">This order has been cancelled. Contact Sharmila M on 6369685930 for any queries.</p>
        </div>
      </div>
    `;
  }

  const timeline = order.timeline || [];

  return `<div class="order-timeline">
    ${ORDER_STAGES.map((stage, i) => {
      const isDone    = i <= currentIdx;
      const isCurrent = i === currentIdx;
      const timelineEntry = timeline.find(t => t.stage === stage.id);
      return `<div class="timeline-step ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''}">
        <div class="step-indicator" style="border-color:${isDone ? stage.color : '#ccc'};background:${isDone ? stage.color : '#fff'};color:#fff;display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:50%;border:2px solid;flex-shrink:0">
          ${isDone ? orderStepSvg(stage.svgIcon) : ''}
        </div>
        <div class="step-info" style="flex:1">
          <p class="step-label" style="margin:0;font-size:.88rem;font-weight:${isCurrent ? '700' : '500'};color:${isDone ? stage.color : 'var(--muted)'}">${stage.label}</p>
          ${timelineEntry ? `<p class="step-time" style="margin:.15rem 0 0;font-size:.75rem;color:var(--muted)">${new Date(timelineEntry.at).toLocaleString('en-IN',{dateStyle:'medium',timeStyle:'short'})}</p>` : ''}
          ${isCurrent && timelineEntry?.note ? `<p class="step-note" style="margin:.2rem 0 0;font-size:.8rem;color:var(--gold-dk);font-style:italic">${timelineEntry.note}</p>` : ''}
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

// ─── Format Currency ─────────────────────────────────────────

function formatINR(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}

// ─── Order Status Label ───────────────────────────────────────

function yazhiOrderStatusLabel(status) {
  if (status === 'cancelled') return ORDER_CANCEL_STAGE.label;
  const stage = ORDER_STAGES.find(s => s.id === status);
  return stage ? stage.label : status;
}

function yazhiOrderStatusColor(status) {
  if (status === 'cancelled') return ORDER_CANCEL_STAGE.color;
  const stage = ORDER_STAGES.find(s => s.id === status);
  return stage ? stage.color : '#666';
}
