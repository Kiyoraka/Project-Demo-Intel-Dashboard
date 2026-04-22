/* Maraliner Intel Dashboard — Hardcoded Auth Stub (Pitch Demo) */

const CREDENTIALS = {
  email: 'admin@gmail.com',
  password: 'admin123',
  displayName: 'Kay Moris',
  role: 'CEO',
};

const SESSION_KEY = 'maraliner_session';

export function login(email, password) {
  const normalizedEmail = (email || '').trim().toLowerCase();
  if (normalizedEmail === CREDENTIALS.email && password === CREDENTIALS.password) {
    const session = {
      email: CREDENTIALS.email,
      displayName: CREDENTIALS.displayName,
      role: CREDENTIALS.role,
      loggedInAt: new Date().toISOString(),
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return { ok: true, session };
  }
  return { ok: false, error: 'Invalid credentials. Use admin@gmail.com / admin123.' };
}

export function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  window.location.href = resolveAppRoot() + 'login.html';
}

export function getSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  return !!getSession();
}

export function requireAuth() {
  if (!isAuthenticated()) {
    window.location.href = resolveAppRoot() + 'login.html';
  }
}

export function requireGuest() {
  if (isAuthenticated()) {
    window.location.href = resolveAppRoot() + 'pages/exec-overview.html';
  }
}

function resolveAppRoot() {
  const path = window.location.pathname;
  if (path.includes('/pages/')) return '../';
  if (path.includes('/partials/')) return '../';
  return './';
}

export function appRoot() {
  return resolveAppRoot();
}
