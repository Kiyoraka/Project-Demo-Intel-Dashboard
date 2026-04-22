/* Revenue & Customer Data page */

import { TICKETS, TICKET_METRICS, CUSTOMER_SEGMENTS, findRoute } from '../store.js';
import { qs, escapeHtml, formatRM, formatNumber, openModal, wireModalClose, sum } from '../ui.js';
import { brandedChart, palette } from '../charts.js';

const CHANNEL_COLORS = {
  counter: '#64748B',
  online:  '#0EA5E9',
  agent:   '#C9A227',
  app:     '#C8234A',
};

const CHANNEL_LABELS = {
  counter: 'Counter',
  online:  'Online',
  agent:   'Agent',
  app:     'App',
};

export function renderRevenuePage() {
  renderKpiStrip();
  renderFeed();
  renderSegmentChart();
  renderChannelMix();
  renderLeakageTable();
  wireModalClose(qs('#leak-modal'));
}

function renderKpiStrip() {
  const m = TICKET_METRICS;
  qs('#kpi-strip').innerHTML = `
    <div class="stat-tile accent-good">
      <div class="stat-tile-label">Tickets Today</div>
      <div class="stat-tile-value">${formatNumber(m.ticketsToday)}</div>
      <div class="stat-tile-delta up">&uarr; 8% vs yesterday</div>
    </div>
    <div class="stat-tile">
      <div class="stat-tile-label">Repeat Customer %</div>
      <div class="stat-tile-value">${m.repeatCustomerPercent}%</div>
      <div class="stat-tile-delta flat">&#9679; Stable</div>
    </div>
    <div class="stat-tile accent-bad">
      <div class="stat-tile-label">Revenue Leakage Flagged</div>
      <div class="stat-tile-value">${formatRM(m.leakageFlaggedRm)}</div>
      <div class="stat-tile-delta down">&#9679; 5 alerts open</div>
    </div>
    <div class="stat-tile accent-info">
      <div class="stat-tile-label">Channels Active</div>
      <div class="stat-tile-value">4</div>
      <div class="stat-tile-delta flat">Counter &middot; Online &middot; Agent &middot; App</div>
    </div>
  `;
}

function renderFeed() {
  const host = qs('#ticket-feed');
  if (!host) return;
  host.innerHTML = TICKETS.slice(0, 50).map((t) => {
    const route = findRoute(t.routeCode);
    return `
      <li>
        <div class="feed-time">${escapeHtml(t.time)}</div>
        <div class="feed-channel" style="color: ${CHANNEL_COLORS[t.channel]};">${escapeHtml(CHANNEL_LABELS[t.channel] || t.channel)}</div>
        <div>${escapeHtml(route ? route.name : t.routeCode)} &middot; <small style="color: var(--text-muted);">seat ${escapeHtml(t.seatNo)}</small></div>
        <div class="feed-fare">${formatRM(t.fare)}</div>
      </li>
    `;
  }).join('');
}

function renderSegmentChart() {
  const canvas = qs('#segment-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const entries = Object.entries(CUSTOMER_SEGMENTS);
  const labels = entries.map(([, v]) => v.label);
  const data = entries.map(([, v]) => v.percent);
  const colors = entries.map(([, v]) => v.color);

  brandedChart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor: colors,
          borderColor: '#FFFFFF',
          borderWidth: 3,
          hoverOffset: 6,
        },
      ],
    },
    options: {
      cutout: '62%',
      plugins: {
        legend: { position: 'bottom' },
        tooltip: {
          callbacks: {
            label: (c) => c.label + ' — ' + c.parsed + '%',
          },
        },
      },
    },
  });
}

function renderChannelMix() {
  const host = qs('#channel-mix');
  if (!host) return;
  const mix = TICKET_METRICS.channelMix;
  const entries = Object.entries(mix);
  host.innerHTML = `
    <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; margin-bottom: 10px;">Channel Mix Today</div>
    <div style="display: flex; gap: 6px; border-radius: 6px; overflow: hidden; height: 18px;">
      ${entries.map(([, v]) => `<div style="flex: ${v.percent}; background: ${v.color};" title="${escapeHtml(v.label)} ${v.percent}%"></div>`).join('')}
    </div>
    <div style="display: flex; gap: 16px; margin-top: 10px; flex-wrap: wrap;">
      ${entries.map(([, v]) => `
        <div style="display: inline-flex; align-items: center; gap: 6px; font-size: 12px;">
          <span style="width: 10px; height: 10px; border-radius: 2px; background: ${v.color};"></span>
          <span style="color: var(--text-secondary);">${escapeHtml(v.label)}</span>
          <strong style="color: var(--text-primary);">${v.count}</strong>
          <span style="color: var(--text-muted);">(${v.percent}%)</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderLeakageTable() {
  const host = qs('#leakage-tbody');
  if (!host) return;
  host.innerHTML = TICKET_METRICS.leakageAlerts.map((alert) => {
    const route = findRoute(alert.routeCode);
    return `
      <tr class="clickable" data-leak-id="${escapeHtml(alert.id)}">
        <td><strong>${escapeHtml(route ? route.name : alert.routeCode)}</strong></td>
        <td>${escapeHtml(alert.issue)}</td>
        <td><span class="badge badge-${alert.flag === 'driver' ? 'bad' : alert.flag === 'agent' ? 'warn' : 'info'}">${escapeHtml(alert.flag)}</span></td>
        <td class="money" style="color: ${alert.amountRm > 500 ? 'var(--status-bad)' : 'var(--text-primary)'};">${formatRM(alert.amountRm)}</td>
      </tr>
    `;
  }).join('');

  const total = sum(TICKET_METRICS.leakageAlerts, (a) => a.amountRm);
  const badge = qs('#leakage-total-badge');
  if (badge) badge.textContent = formatRM(total) + ' flagged';

  host.querySelectorAll('tr[data-leak-id]').forEach((row) => {
    row.addEventListener('click', () => {
      const leakId = row.getAttribute('data-leak-id');
      openLeakModal(leakId);
    });
  });
}

function openLeakModal(leakId) {
  const alert = TICKET_METRICS.leakageAlerts.find((a) => a.id === leakId);
  if (!alert) return;
  const route = findRoute(alert.routeCode);
  qs('#leak-modal-title').textContent = 'Leakage Alert — ' + (route ? route.name : alert.routeCode);
  qs('#leak-modal-body').innerHTML = `
    <p style="margin-bottom: 12px;">
      <span class="badge badge-${alert.flag === 'driver' ? 'bad' : alert.flag === 'agent' ? 'warn' : 'info'}">Flag: ${escapeHtml(alert.flag)}</span>
      <strong style="margin-left: 8px;">${formatRM(alert.amountRm)}</strong>
    </p>
    <h4 style="margin-bottom: 8px;">Issue</h4>
    <p style="color: var(--text-secondary); margin-bottom: 16px;">${escapeHtml(alert.issue)}</p>
    <h4 style="margin-bottom: 8px;">Evidence</h4>
    <p style="color: var(--text-secondary);">${escapeHtml(alert.evidence)}</p>
  `;
  openModal(qs('#leak-modal'));
}
