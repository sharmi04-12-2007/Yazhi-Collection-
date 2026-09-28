// ============================================================
// YAZHI COLLECTION – Auth System (PRD v2)
// Manages: Guest, Customer, Owner sessions via localStorage
// ============================================================

const YAZHI_AUTH_KEY   = 'yazhi_auth';
const YAZHI_USERS_KEY  = 'yazhi_users';
const YAZHI_OWNER_CREDS = { username: 'sharmila', password: 'yazhi@owner2024', name: 'Sharmila M', role: 'owner' };

// ─── Helpers ────────────────────────────────────────────────

const INITIAL_SAMPLE_USERS = [
  {
    id: 'u_demo1',
    name: 'Priyadharshini K',
    email: 'priya@example.com',
    phone: '9840123456',
    password: btoa('password123'),
    role: 'customer',
    createdAt: new Date(Date.now() - 3600000 * 24 * 10).toISOString(),
    firstOrderDone: true,
    birthday: '1995-10-15'
  },
  {
    id: 'u_demo2',
    name: 'Ananya R',
    email: 'ananya@example.com',
    phone: '9789012345',
    password: btoa('password123'),
    role: 'customer',
    createdAt: new Date(Date.now() - 3600000 * 24 * 30).toISOString(),
    firstOrderDone: true,
    birthday: '1998-05-20'
  }
];

function yazhiGetUsers() {
  const stored = localStorage.getItem(YAZHI_USERS_KEY);
  if (!stored) {
    localStorage.setItem(YAZHI_USERS_KEY, JSON.stringify(INITIAL_SAMPLE_USERS));
    return INITIAL_SAMPLE_USERS;
  }
  return JSON.parse(stored);
}

function yazhiSaveUsers(users) {
  localStorage.setItem(YAZHI_USERS_KEY, JSON.stringify(users));
}

function yazhiGetSession() {
  return JSON.parse(localStorage.getItem(YAZHI_AUTH_KEY) || 'null');
}

function yazhiSetSession(session) {
  localStorage.setItem(YAZHI_AUTH_KEY, JSON.stringify(session));
}

function yazhiClearSession() {
  localStorage.removeItem(YAZHI_AUTH_KEY);
}

// ─── Customer Registration ───────────────────────────────────

function yazhiRegister(name, email, phone, password) {
  const users = yazhiGetUsers();
  if (users.find(u => u.email === email.toLowerCase())) {
    return { success: false, error: 'An account with this email already exists.' };
  }
  const user = {
    id: 'u_' + Date.now(),
    name: name.trim(),
    email: email.toLowerCase().trim(),
    phone: phone.trim(),
    password: btoa(password), // basic obfuscation (not real hashing)
    role: 'customer',
    createdAt: new Date().toISOString(),
    firstOrderDone: false,
    birthday: null
  };
  users.push(user);
  yazhiSaveUsers(users);
  const session = { id: user.id, name: user.name, email: user.email, phone: user.phone, role: 'customer' };
  yazhiSetSession(session);
  return { success: true, session };
}

// ─── Customer Login ──────────────────────────────────────────

function yazhiLogin(email, password) {
  const users = yazhiGetUsers();
  const user = users.find(u => u.email === email.toLowerCase().trim());
  if (!user) return { success: false, error: 'No account found with this email.' };
  if (user.password !== btoa(password)) return { success: false, error: 'Incorrect password.' };
  const session = { id: user.id, name: user.name, email: user.email, phone: user.phone, role: 'customer' };
  yazhiSetSession(session);
  return { success: true, session };
}

// ─── Owner Login ─────────────────────────────────────────────

function yazhiOwnerLogin(username, password) {
  if (username === YAZHI_OWNER_CREDS.username && password === YAZHI_OWNER_CREDS.password) {
    const session = { id: 'owner', name: YAZHI_OWNER_CREDS.name, role: 'owner' };
    yazhiSetSession(session);
    return { success: true, session };
  }
  return { success: false, error: 'Invalid owner credentials.' };
}

// ─── Logout ──────────────────────────────────────────────────

function yazhiLogout() {
  yazhiClearSession();
  window.location.href = 'index.html';
}

// ─── Auth Guard ──────────────────────────────────────────────

function yazhiRequireAuth(redirectTo = 'login.html') {
  const session = yazhiGetSession();
  if (!session || session.role === 'guest') {
    window.location.href = redirectTo;
    return null;
  }
  return session;
}

function yazhiRequireOwner() {
  const session = yazhiGetSession();
  if (!session || session.role !== 'owner') {
    window.location.href = 'owner-login.html';
    return null;
  }
  return session;
}

// ─── Profile Update ──────────────────────────────────────────

function yazhiUpdateProfile(updates) {
  const session = yazhiGetSession();
  if (!session) return false;
  const users = yazhiGetUsers();
  const idx = users.findIndex(u => u.id === session.id);
  if (idx === -1) return false;
  Object.assign(users[idx], updates);
  yazhiSaveUsers(users);
  Object.assign(session, updates);
  yazhiSetSession(session);
  return true;
}

function yazhiGetFullProfile() {
  const session = yazhiGetSession();
  if (!session) return null;
  if (session.role === 'owner') return { ...YAZHI_OWNER_CREDS, ...session };
  const users = yazhiGetUsers();
  return users.find(u => u.id === session.id) || session;
}

// ─── UI Helper: Update nav based on auth state ───────────────

function yazhiUpdateNav() {
  const session = yazhiGetSession();
  const loginLinks = document.querySelectorAll('[data-auth="login-link"]');
  const logoutLinks = document.querySelectorAll('[data-auth="logout-link"]');
  const profileLinks = document.querySelectorAll('[data-auth="profile-link"]');
  const ownerLinks = document.querySelectorAll('[data-auth="owner-link"]');
  const userNameSpans = document.querySelectorAll('[data-auth="user-name"]');

  if (session) {
    loginLinks.forEach(el => el.style.display = 'none');
    logoutLinks.forEach(el => el.style.display = '');
    profileLinks.forEach(el => el.style.display = session.role === 'customer' ? '' : 'none');
    ownerLinks.forEach(el => el.style.display = session.role === 'owner' ? '' : 'none');
    userNameSpans.forEach(el => el.textContent = session.name.split(' ')[0]);
  } else {
    loginLinks.forEach(el => el.style.display = '');
    logoutLinks.forEach(el => el.style.display = 'none');
    profileLinks.forEach(el => el.style.display = 'none');
    ownerLinks.forEach(el => el.style.display = 'none');
  }
}

// ─── Toast Notification ──────────────────────────────────────

function yazhiToast(message, type = 'success', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:10px;';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  const colors = { success: '#2E7D32', error: '#C62828', warning: '#E65100', info: '#1565C0' };
  toast.style.cssText = `background:${colors[type]||colors.info};color:#fff;padding:12px 20px;border-radius:10px;font-size:14px;box-shadow:0 6px 20px rgba(0,0,0,0.15);display:flex;align-items:center;gap:10px;max-width:320px;animation:slideInRight 0.3s ease;`;
  const icons = { success: '✔', error: '✖', warning: '⚠', info: 'ℹ' };
  toast.innerHTML = `<span>${icons[type]||icons.info}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(60px)'; toast.style.transition = '0.3s ease'; setTimeout(() => toast.remove(), 300); }, duration);
}

// Auto-update nav on page load
document.addEventListener('DOMContentLoaded', yazhiUpdateNav);
