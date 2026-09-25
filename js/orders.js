// ============================================================
// YAZHI COLLECTION – Orders Engine (PRD v2)
// 7-stage order status shared between customer and owner
// ============================================================

const YAZHI_ORDERS_KEY = 'yazhi_orders';

const ORDER_STAGES = [
  { id: 'placed',      label: 'Order Placed',     icon: '📋', color: '#1565C0' },
  { id: 'confirmed',   label: 'Confirmed',         icon: '✅', color: '#2E7D32' },
  { id: 'processing',  label: 'Processing',        icon: '⚙️', color: '#7A3455' },
  { id: 'packed',      label: 'Packed',            icon: '📦', color: '#5C223D' },
  { id: 'shipped',     label: 'Shipped / Ready',   icon: '🚚', color: '#3B1F3F' },
  { id: 'out',         label: 'Out for Delivery',  icon: '🛵', color: '#C9A45C' },
  { id: 'delivered',   label: 'Delivered',         icon: '🎉', color: '#2E7D32' }
];

const ORDER_CANCEL_STAGE = { id: 'cancelled', label: 'Cancelled', icon: '✖', color: '#C62828' };

// ─── Helpers ─────────────────────────────────────────────────

function yazhiGetOrders() {
  return JSON.parse(localStorage.getItem(YAZHI_ORDERS_KEY) || '[]');
}

function yazhiSaveOrders(orders) {
  localStorage.setItem(YAZHI_ORDERS_KEY, JSON.stringify(orders));
}

function yazhiGenerateOrderId() {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `YC-${ts}-${rand}`;
}

// ─── Place Order ─────────────────────────────────────────────

function yazhiPlaceOrder(userId, userName, userPhone, items, address, paymentMethod, appliedOffer) {
  const orders = yazhiGetOrders();

  const subtotal = items.reduce((s, i) => s + (i.price * i.qty), 0);
  let discount = 0;
  if (appliedOffer) discount = Math.round(subtotal * (appliedOffer.discount || 0));
  const delivery = subtotal >= 4000 ? 0 : 99;
  const total = subtotal - discount + delivery;

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

  // Mark first order done for user
  const users = JSON.parse(localStorage.getItem('yazhi_users') || '[]');
  const uIdx = users.findIndex(u => u.id === userId);
  if (uIdx !== -1) { users[uIdx].firstOrderDone = true; localStorage.setItem('yazhi_users', JSON.stringify(users)); }

  return order;
}

// ─── Get Orders for Customer ──────────────────────────────────

function yazhiGetUserOrders(userId) {
  return yazhiGetOrders().filter(o => o.userId === userId);
}

// ─── Get All Orders (Owner) ───────────────────────────────────

function yazhiGetAllOrders() {
  return yazhiGetOrders();
}

// ─── Update Order Status (Owner) ─────────────────────────────

function yazhiUpdateOrderStatus(orderId, newStatus, note = '') {
  const orders = yazhiGetOrders();
  const idx = orders.findIndex(o => o.id === orderId);
  if (idx === -1) return false;
  orders[idx].status = newStatus;
  orders[idx].updatedAt = new Date().toISOString();
  orders[idx].timeline.push({
    stage: newStatus,
    at: new Date().toISOString(),
    note: note || `Status updated to ${newStatus}.`
  });
  yazhiSaveOrders(orders);
  return true;
}

// ─── Get Order by ID ─────────────────────────────────────────

function yazhiGetOrderById(orderId) {
  return yazhiGetOrders().find(o => o.id === orderId) || null;
}

// ─── Render Order Timeline HTML ───────────────────────────────

function yazhiRenderTimeline(order) {
  const stages = ORDER_STAGES;
  const currentIdx = stages.findIndex(s => s.id === order.status);
  const isCancelled = order.status === 'cancelled';

  if (isCancelled) {
    return `<div class="order-cancelled"><span class="cancel-icon">✖</span><p>This order has been cancelled.</p></div>`;
  }

  return `<div class="order-timeline">
    ${stages.map((stage, i) => {
      const isDone = i <= currentIdx;
      const isCurrent = i === currentIdx;
      const timelineEntry = order.timeline.find(t => t.stage === stage.id);
      return `<div class="timeline-step ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''}">
        <div class="step-indicator" style="border-color:${isDone ? stage.color : '#ccc'};background:${isDone ? stage.color : '#fff'}">
          <span>${isDone ? stage.icon : ''}</span>
        </div>
        <div class="step-info">
          <p class="step-label">${stage.label}</p>
          ${timelineEntry ? `<p class="step-time">${new Date(timelineEntry.at).toLocaleString('en-IN',{dateStyle:'medium',timeStyle:'short'})}</p>` : ''}
          ${isCurrent && timelineEntry?.note ? `<p class="step-note">${timelineEntry.note}</p>` : ''}
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

// ─── Format Currency ─────────────────────────────────────────
function formatINR(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}
