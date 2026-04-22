/* Maraliner Intel Dashboard — UI helpers */

export function formatRM(amount, options = {}) {
  const { decimals = 2, prefix = 'RM' } = options;
  if (amount === null || amount === undefined || Number.isNaN(Number(amount))) return prefix + ' -';
  const rounded = Number(amount).toFixed(decimals);
  const [whole, fraction] = rounded.split('.');
  const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return prefix + ' ' + (fraction ? withCommas + '.' + fraction : withCommas);
}

export function formatRMShort(amount) {
  if (amount === null || amount === undefined || Number.isNaN(Number(amount))) return 'RM -';
  const n = Number(amount);
  if (Math.abs(n) >= 1_000_000) return 'RM ' + (n / 1_000_000).toFixed(2) + 'M';
  if (Math.abs(n) >= 1_000) return 'RM ' + (n / 1_000).toFixed(1) + 'K';
  return formatRM(n);
}

export function formatPercent(n, decimals = 0) {
  if (n === null || n === undefined || Number.isNaN(Number(n))) return '-';
  return Number(n).toFixed(decimals) + '%';
}

export function formatNumber(n) {
  if (n === null || n === undefined || Number.isNaN(Number(n))) return '-';
  return Number(n).toLocaleString('en-MY');
}

export function formatDate(d) {
  const date = d instanceof Date ? d : new Date(d);
  if (Number.isNaN(date.getTime())) return '-';
  return date.toLocaleDateString('en-MY', { year: 'numeric', month: 'short', day: '2-digit' });
}

export function formatTime(d) {
  const date = d instanceof Date ? d : new Date(d);
  if (Number.isNaN(date.getTime())) return '-';
  return date.toLocaleTimeString('en-MY', { hour: '2-digit', minute: '2-digit', hour12: true });
}

export function relativeTime(d) {
  const date = d instanceof Date ? d : new Date(d);
  if (Number.isNaN(date.getTime())) return '-';
  const diff = (Date.now() - date.getTime()) / 1000;
  if (diff < 60) return 'Just now';
  if (diff < 3600) return Math.floor(diff / 60) + ' min ago';
  if (diff < 86400) return Math.floor(diff / 3600) + ' hr ago';
  if (diff < 604800) return Math.floor(diff / 86400) + ' days ago';
  return formatDate(date);
}

export function escapeHtml(text) {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const STATUS_BADGE_MAP = {
  healthy: { cls: 'good', label: 'Healthy' },
  good: { cls: 'good', label: 'Good' },
  ok: { cls: 'good', label: 'OK' },
  active: { cls: 'good', label: 'Active' },
  compliant: { cls: 'good', label: 'Compliant' },
  watch: { cls: 'warn', label: 'Watch' },
  warn: { cls: 'warn', label: 'Warn' },
  pending: { cls: 'warn', label: 'Pending' },
  due: { cls: 'primary', label: 'Service Due' },
  breakdown: { cls: 'bad', label: 'Breakdown' },
  bad: { cls: 'bad', label: 'Bad' },
  critical: { cls: 'bad', label: 'Critical' },
  overdue: { cls: 'bad', label: 'Overdue' },
  '30-60': { cls: 'warn', label: '30-60 days' },
  '60-90': { cls: 'bad', label: '60-90 days' },
  '90+': { cls: 'bad', label: '90+ days' },
  info: { cls: 'info', label: 'Info' },
};

export function badgeFor(status, fallbackLabel) {
  const key = String(status || '').toLowerCase();
  const def = STATUS_BADGE_MAP[key] || { cls: 'neutral', label: fallbackLabel || status || '-' };
  return '<span class="badge badge-' + def.cls + '">' + escapeHtml(def.label) + '</span>';
}

export function qs(selector, root = document) {
  return root.querySelector(selector);
}

export function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

export function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'class') node.className = value;
    else if (key === 'html') node.innerHTML = value;
    else if (key === 'text') node.textContent = value;
    else if (key.startsWith('on') && typeof value === 'function') {
      node.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (value !== null && value !== undefined) {
      node.setAttribute(key, value);
    }
  });
  (Array.isArray(children) ? children : [children]).forEach((child) => {
    if (child === null || child === undefined) return;
    node.appendChild(child instanceof Node ? child : document.createTextNode(String(child)));
  });
  return node;
}

export function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

export function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove('visible');
  document.body.style.overflow = '';
}

export function wireModalClose(modalEl) {
  if (!modalEl) return;
  modalEl.addEventListener('click', (event) => {
    if (event.target === modalEl || event.target.hasAttribute('data-close')) {
      closeModal(modalEl);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalEl.classList.contains('visible')) {
      closeModal(modalEl);
    }
  });
}

export function deltaLabel(value, suffix = '%') {
  if (value === 0 || value === null || value === undefined) {
    return { cls: 'flat', text: 'No change' };
  }
  const arrow = value > 0 ? '↑' : '↓';
  const cls = value > 0 ? 'up' : 'down';
  return { cls, text: arrow + ' ' + Math.abs(value) + suffix };
}

export function sum(array, accessor = (x) => x) {
  return (array || []).reduce((total, item) => total + Number(accessor(item) || 0), 0);
}

export function groupBy(array, accessor) {
  const map = new Map();
  (array || []).forEach((item) => {
    const key = accessor(item);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
  });
  return map;
}
