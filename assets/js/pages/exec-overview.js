/* Executive Overview — CEO home page */

import { EXEC_KPIS, ALERTS, FLEET, CASH_FLOW } from '../store.js';
import { qs, escapeHtml, deltaLabel, formatRM } from '../ui.js';
import { brandedChart, brandLineGradient, palette } from '../charts.js';

export function renderExecOverview() {
  renderKpiStrip();
  renderActionFeed();
  renderFleetMap();
  renderRevenueChart();
}

function renderKpiStrip() {
  const host = qs('#kpi-strip');
  if (!host) return;
  host.innerHTML = EXEC_KPIS.map((kpi) => `
    <div class="stat-tile accent-${kpi.accent}">
      <div class="stat-tile-label">${escapeHtml(kpi.label)}</div>
      <div class="stat-tile-value">${escapeHtml(kpi.value)}</div>
      <div class="stat-tile-delta ${kpi.delta}">
        ${kpi.delta === 'up' ? '&uarr;' : kpi.delta === 'down' ? '&darr;' : '&#9679;'}
        ${escapeHtml(kpi.deltaText)}
      </div>
    </div>
  `).join('');
}

function renderActionFeed() {
  const host = qs('#action-feed');
  if (!host) return;
  host.innerHTML = ALERTS.map((alert) => `
    <li data-alert-id="${escapeHtml(String(alert.rank))}">
      <div class="action-rank">${alert.rank}</div>
      <div class="action-text">
        <div>${escapeHtml(alert.text)}</div>
        <small style="color: var(--text-muted); font-size: 11px;">${escapeHtml(alert.cost)}</small>
      </div>
      <div class="action-domain-icon ${alert.domain}">
        <i class="fa-solid ${escapeHtml(alert.icon)}"></i>
      </div>
    </li>
  `).join('');
}

function renderFleetMap() {
  const host = qs('#fleet-map-host');
  if (!host) return;
  const inMotion = FLEET.filter((b) => b.status === 'healthy' || b.status === 'watch').length;
  const dots = FLEET.map((b, i) => {
    const x = 15 + (i % 6) * 13;
    const y = 20 + Math.floor(i / 6) * 15;
    const color = b.status === 'healthy' ? palette.good
      : b.status === 'watch' ? palette.warn
      : b.status === 'due' ? palette.primary
      : palette.bad;
    return `<circle cx="${x}" cy="${y}" r="2.6" fill="${color}" opacity="0.85" />`;
  }).join('');

  host.innerHTML = `
    <svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Malaysia fleet silhouette">
      <path d="M 14 60 Q 8 55 10 44 Q 14 35 22 32 Q 32 28 38 20 Q 48 12 62 14 Q 76 16 84 24 Q 94 32 96 44 Q 98 56 90 62 Q 82 70 70 68 Q 58 70 48 72 Q 36 76 26 72 Q 18 68 14 60 Z"
            fill="#FBE7EC" stroke="#C8234A" stroke-width="0.6" opacity="0.8"/>
      ${dots}
    </svg>
    <div class="moving-count">${inMotion} buses in motion right now</div>
  `;

  const countBadge = qs('#fleet-in-motion-count');
  if (countBadge) countBadge.textContent = inMotion + ' in motion';
}

function renderRevenueChart() {
  const canvas = qs('#revenue-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const last7 = CASH_FLOW.slice(-7);
  const labels = last7.map((d) => d.day);
  const revenue = last7.map((d) => d.revenue);
  const cost = last7.map((d) => d.cost);

  brandedChart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Revenue',
          data: revenue,
          borderColor: palette.primary,
          backgroundColor: brandLineGradient(ctx, palette.primary, 0.28),
          fill: true,
          tension: 0.35,
          borderWidth: 2.5,
          pointBackgroundColor: palette.primary,
          pointRadius: 3,
        },
        {
          label: 'Operating Cost',
          data: cost,
          borderColor: palette.accent,
          backgroundColor: 'transparent',
          fill: false,
          tension: 0.35,
          borderWidth: 2,
          borderDash: [4, 3],
          pointBackgroundColor: palette.accent,
          pointRadius: 2,
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            callback: (value) => formatRM(value, { decimals: 0 }),
          },
          beginAtZero: false,
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => ctx.dataset.label + ': ' + formatRM(ctx.parsed.y),
          },
        },
      },
    },
  });
}
