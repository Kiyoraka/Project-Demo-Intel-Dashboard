/* Maraliner Intel Dashboard — Partials loader */

import { getSession, logout, appRoot } from './auth.js';

export async function loadPartial(host, path) {
  try {
    const response = await fetch(path, { cache: 'no-cache' });
    if (!response.ok) throw new Error('Failed to load partial: ' + path);
    const html = await response.text();
    host.innerHTML = html;
  } catch (err) {
    console.error(err);
    host.innerHTML = '<div style="padding: 1rem; color: #EF4444;">Failed to load ' + path + '</div>';
  }
}

export function setActiveNav(host) {
  const currentPath = window.location.pathname.toLowerCase();
  const links = host.querySelectorAll('[data-nav]');
  links.forEach((link) => {
    const navKey = link.getAttribute('data-nav');
    if (navKey && currentPath.includes('/' + navKey + '.html')) {
      link.classList.add('active');
    }
  });
}

export function setPageTitle(host, title) {
  const titleEl = host.querySelector('[data-page-title]');
  if (titleEl && title) titleEl.textContent = title;
  document.title = title ? title + ' — Maraliner Intel Dashboard' : 'Maraliner Intel Dashboard';
}

export function applySession(host) {
  const session = getSession();
  if (!session) return;
  const nameEl = host.querySelector('[data-user-name]');
  const roleEl = host.querySelector('[data-user-role]');
  if (nameEl) nameEl.textContent = session.displayName;
  if (roleEl) roleEl.textContent = session.role;
}

export function wireLogout(host) {
  const logoutBtn = host.querySelector('#sidebar-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (event) => {
      event.preventDefault();
      logout();
    });
  }
}

export function wireNotifDropdown(host) {
  const btn = host.querySelector('#notif-btn');
  const dropdown = host.querySelector('#notif-dropdown');
  if (!btn || !dropdown) return;

  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isHidden = dropdown.hasAttribute('hidden');
    if (isHidden) {
      dropdown.removeAttribute('hidden');
    } else {
      dropdown.setAttribute('hidden', '');
    }
  });

  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target) && event.target !== btn) {
      dropdown.setAttribute('hidden', '');
    }
  });
}

export function wireSidebarToggle() {
  const btn = document.getElementById('sidebar-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-open');
  });
}

export async function initChrome(pageTitle) {
  const sidebarHost = document.querySelector('[data-partial="sidebar"]');
  const topbarHost = document.querySelector('[data-partial="topbar"]');

  const tasks = [];
  if (sidebarHost) tasks.push(loadPartial(sidebarHost, appRoot() + 'partials/sidebar.html'));
  if (topbarHost) tasks.push(loadPartial(topbarHost, appRoot() + 'partials/topbar.html'));
  await Promise.all(tasks);

  if (sidebarHost) {
    setActiveNav(sidebarHost);
    wireLogout(sidebarHost);
  }
  if (topbarHost) {
    setPageTitle(topbarHost, pageTitle);
    applySession(topbarHost);
    wireNotifDropdown(topbarHost);
  }
  wireSidebarToggle();
}
