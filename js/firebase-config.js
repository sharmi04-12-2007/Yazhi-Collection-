// ============================================================
// YAZHI COLLECTION – Firebase / Cloud Data Bridge
// Founder: Sharmila M | Coimbatore | Ph: 6369685930
//
// HOW TO ACTIVATE REAL-TIME CLOUD SYNC:
//   1. Go to https://console.firebase.google.com/
//   2. Create a project (e.g. "yazhi-collection")
//   3. Enable Firestore Database (Start in Test Mode initially)
//   4. Go to Project Settings → General → "Your apps" → Add a Web App
//   5. Copy the firebaseConfig values below and replace the placeholders
//   6. In Firestore, create collections: "orders", "enquiries", "products_override"
//   7. Set Firestore rules to allow read/write while in testing (harden later)
//
// WITHOUT FIREBASE (default): All data flows through localStorage only.
//   The website is fully functional without Firebase — customers can place
//   orders, track status, submit enquiries, and the owner can manage
//   everything through the dashboard. Firebase adds cross-device real-time
//   sync and cloud backup.
// ============================================================

const YAZHI_FIREBASE_CONFIG = {
  apiKey:            "REPLACE_WITH_YOUR_API_KEY",
  authDomain:        "REPLACE_WITH_YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket:     "REPLACE_WITH_YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "REPLACE_WITH_YOUR_MESSAGING_SENDER_ID",
  appId:             "REPLACE_WITH_YOUR_APP_ID"
};

// ─── Firebase Connection Status ──────────────────────────────
// Set to true only after successfully initializing Firebase SDK
let YAZHI_FIREBASE_ACTIVE = false;
let yazhiFirebaseDB        = null;

// ─── Auto-Initialize Firebase if config is filled in ─────────
(function initFirebaseIfConfigured() {
  const config = YAZHI_FIREBASE_CONFIG;
  const isConfigured = config.apiKey && !config.apiKey.startsWith('REPLACE_');

  if (!isConfigured) {
    console.info('[Yazhi] Firebase not configured. Using localStorage fallback. Fill in YAZHI_FIREBASE_CONFIG in js/firebase-config.js to enable cloud sync.');
    return;
  }

  // Dynamically load Firebase SDK only when configured
  const loadScript = (src) => new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });

  Promise.all([
    loadScript('https://www.gstatic.com/firebasejs/10.12.1/firebase-app-compat.js'),
    loadScript('https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore-compat.js')
  ]).then(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    yazhiFirebaseDB = firebase.firestore();
    YAZHI_FIREBASE_ACTIVE = true;
    console.info('[Yazhi] Firebase Firestore connected. Real-time cloud sync active.');
    // Sync latest orders from cloud to localStorage
    yazhiCloudSyncOrders();
  }).catch(err => {
    console.warn('[Yazhi] Firebase SDK load failed — falling back to localStorage.', err);
  });
})();

// ─── Cloud → localStorage Sync (Orders) ──────────────────────
// Pulls latest order list from Firestore and merges with localStorage
function yazhiCloudSyncOrders() {
  if (!YAZHI_FIREBASE_ACTIVE || !yazhiFirebaseDB) return;
  yazhiFirebaseDB.collection('orders')
    .orderBy('createdAt', 'desc')
    .limit(200)
    .get()
    .then(snapshot => {
      const cloudOrders = [];
      snapshot.forEach(doc => cloudOrders.push({ id: doc.id, ...doc.data() }));
      if (cloudOrders.length > 0) {
        localStorage.setItem('yazhi_orders', JSON.stringify(cloudOrders));
        console.info(`[Yazhi] Synced ${cloudOrders.length} orders from Firestore.`);
      }
    })
    .catch(err => console.warn('[Yazhi] Order sync failed:', err));
}

// ─── localStorage → Cloud Sync (Single Order) ────────────────
// Called after a new order is placed to push it to Firestore
function yazhiCloudSaveOrder(order) {
  if (!YAZHI_FIREBASE_ACTIVE || !yazhiFirebaseDB || !order?.id) return;
  yazhiFirebaseDB.collection('orders').doc(order.id).set(order)
    .then(() => console.info(`[Yazhi] Order ${order.id} saved to Firestore.`))
    .catch(err => console.warn(`[Yazhi] Failed to save order ${order.id}:`, err));
}

// ─── Update Order Status in Cloud ────────────────────────────
function yazhiCloudUpdateOrderStatus(orderId, status, timeline) {
  if (!YAZHI_FIREBASE_ACTIVE || !yazhiFirebaseDB) return;
  yazhiFirebaseDB.collection('orders').doc(orderId).update({
    status,
    timeline,
    updatedAt: new Date().toISOString()
  }).catch(err => console.warn(`[Yazhi] Status update sync failed for ${orderId}:`, err));
}

// ─── Cloud Sync (Enquiries) ───────────────────────────────────
function yazhiCloudSaveEnquiry(enquiry) {
  if (!YAZHI_FIREBASE_ACTIVE || !yazhiFirebaseDB || !enquiry?.id) return;
  yazhiFirebaseDB.collection('enquiries').doc(enquiry.id).set(enquiry)
    .catch(err => console.warn('[Yazhi] Enquiry sync failed:', err));
}

// ─── Real-Time Order Status Listener (for Track Order page) ──
// Listen to a single order document for live status updates
function yazhiCloudListenOrder(orderId, onUpdate) {
  if (!YAZHI_FIREBASE_ACTIVE || !yazhiFirebaseDB) return null;
  return yazhiFirebaseDB.collection('orders').doc(orderId)
    .onSnapshot(doc => {
      if (doc.exists) onUpdate(doc.data());
    }, err => console.warn('[Yazhi] Live order listener error:', err));
}

// ─── Expose API ───────────────────────────────────────────────
window.yazhiCloudSyncOrders        = yazhiCloudSyncOrders;
window.yazhiCloudSaveOrder         = yazhiCloudSaveOrder;
window.yazhiCloudUpdateOrderStatus = yazhiCloudUpdateOrderStatus;
window.yazhiCloudSaveEnquiry       = yazhiCloudSaveEnquiry;
window.yazhiCloudListenOrder       = yazhiCloudListenOrder;
window.YAZHI_FIREBASE_ACTIVE       = YAZHI_FIREBASE_ACTIVE;
