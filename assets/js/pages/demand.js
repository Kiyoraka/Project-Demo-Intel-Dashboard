/* Demand & Network Utilisation page */

import { DEMAND_MATRIX, DEMAND_HOUR_LABELS, NETWORK_METRICS, ROUTES, findRoute } from '../store.js';
import { qs, escapeHtml, formatRM, sum } from '../ui.js';
import { brandedChart, heatmapColor, palette } from '../charts.js';

export function renderDemandPage() {
  renderKpiStrip();
  renderHeatmap();
  renderRouteLoadChart();
  renderSuggestionsTable();
}

function renderKpiStrip() {
  const m = NETWORK_METRICS;
  qs('#kpi-strip').innerHTML = `
    <div class="stat-tile accent-info">
      <div class="stat-tile-label">Network Load Factor</div>
      <div class="stat-tile-value">${m.loadFactor}%</div>
      <div class="stat-tile-delta up">&uarr; 3% vs last week</div>
    </div>
    <div class="stat-tile accent-warn">
      <div class="stat-tile-label">Peak vs Off-Peak Gap</div>
      <div class="stat-tile-value">${m.peakOffPeakGap}%</div>
      <div class="stat-tile-delta flat">Peak ${m.peakLoad}% / Off ${m.offPeakLoad}%</div>
    </div>
    <div class="stat-tile accent-gold">
      <div class="stat-tile-label">Unserved Demand</div>
      <div class="stat-tile-value">${m.unservedSignals}</div>
      <div class="stat-tile-delta down">&#9679; Passenger signals this week</div>
    </div>
    <div class="stat-tile accent-bad">
      <div class="stat-tile-label">Routes Below Threshold</div>
      <div class="stat-tile-value">${m.routesBelowThreshold} / ${ROUTES.length}</div>
      <div class="stat-tile-delta down">&#9679; Optimization candidates</div>
    </div>
  `;
}

function renderHeatmap() {
  const host = qs('#heatmap-host');
  if (!host) return;

  const headerCells = DEMAND_HOUR_LABELS.map((h) => `<div class="heatmap-cell">${escapeHtml(h)}</div>`).join('');
  const rows = DEMAND_MATRIX.map((route) => {
    const cells = route.load.map((value) => `
      <div class="heatmap-cell" style="background: ${heatmapColor(value / 100)};" title="${escapeHtml(route.routeName)} ${value}%">${value}</div>
    `).join('');
    return `
      <div class="heatmap-row">
        <div class="route-label">${escapeHtml(route.routeName)}</div>
        ${cells}
      </div>
    `;
  }).join('');

  host.innerHTML = `
    <div class="heatmap-row header">
      <div class="route-label">&nbsp;</div>
      ${headerCells}
    </div>
    ${rows}
  `;
}

function renderRouteLoadChart() {
  const canvas = qs('#route-load-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const sorted = [...DEMAND_MATRIX].map((r) => ({
    code: r.routeCode,
    avgLoad: Math.round(sum(r.load) / r.load.length),
  })).sort((a, b) => b.avgLoad - a.avgLoad);

  brandedChart(ctx, {
    type: 'bar',
    data: {
      labels: sorted.map((r) => r.code),
      datasets: [
        {
          label: 'Avg Load %',
          data: sorted.map((r) => r.avgLoad),
          backgroundColor: sorted.map((r) => r.avgLoad >= 60 ? palette.primary : r.avgLoad >= 40 ? palette.accent : '#CBD5E1'),
          borderRadius: 4,
          barThickness: 16,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (c) => 'Avg load: ' + c.parsed.x + '%',
          },
        },
      },
      scales: {
        x: {
          max: 100,
          ticks: { callback: (v) => v + '%' },
        },
        y: { ticks: { font: { size: 11 } } },
      },
    },
  });
}

function renderSuggestionsTable() {
  const host = qs('#suggestions-tbody');
  if (!host) return;
  host.innerHTML = NETWORK_METRICS.suggestions.map((s) => {
    const route = findRoute(s.routeCode);
    const gainClass = s.projectedGainRm > 0 ? 'money' : 'money';
    const gainColor = s.projectedGainRm > 0 ? 'var(--status-good)' : 'var(--text-muted)';
    return `
      <tr class="clickable">
        <td><strong>${escapeHtml(route ? route.name : s.routeCode)}</strong><br><small class="mono" style="color: var(--text-muted);">${escapeHtml(s.routeCode)}</small></td>
        <td>${escapeHtml(s.change)}</td>
        <td class="${gainClass}" style="color: ${gainColor};">${s.projectedGainRm > 0 ? '+' : ''}${formatRM(s.projectedGainRm)}</td>
        <td><small style="color: var(--text-muted);">${escapeHtml(s.cadence)}</small></td>
      </tr>
    `;
  }).join('');

  const positive = NETWORK_METRICS.suggestions.filter((s) => s.projectedGainRm > 0);
  const total = sum(positive, (s) => s.projectedGainRm);
  const badge = qs('#gains-badge');
  if (badge) badge.textContent = '+' + formatRM(total) + ' / wk projected';
}
