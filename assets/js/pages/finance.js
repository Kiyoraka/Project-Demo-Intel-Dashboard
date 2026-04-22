/* Financial Visibility page */

import { FINANCE_METRICS, CASH_FLOW, ROUTE_PROFIT, RECEIVABLES } from '../store.js';
import { qs, escapeHtml, formatRM, formatRMShort, badgeFor, sum } from '../ui.js';
import { brandedChart, brandLineGradient, palette } from '../charts.js';

export function renderFinancePage() {
  renderKpiStrip();
  renderCashFlowChart();
  renderProfitChart();
  renderReceivablesTable();
}

function renderKpiStrip() {
  const m = FINANCE_METRICS;
  qs('#kpi-strip').innerHTML = `
    <div class="stat-tile accent-good">
      <div class="stat-tile-label">Cash on Hand</div>
      <div class="stat-tile-value">${formatRMShort(m.cashOnHand)}</div>
      <div class="stat-tile-delta up">&uarr; ${formatRMShort(m.cashOnHandDelta)} this week</div>
    </div>
    <div class="stat-tile accent-warn">
      <div class="stat-tile-label">Receivables &gt; 30 days</div>
      <div class="stat-tile-value">${formatRMShort(m.receivablesOver30d)}</div>
      <div class="stat-tile-delta down">&#9679; Needs attention</div>
    </div>
    <div class="stat-tile accent-gold">
      <div class="stat-tile-label">Revenue Today</div>
      <div class="stat-tile-value">${formatRMShort(m.revenueToday)}</div>
      <div class="stat-tile-delta down">&darr; ${Math.abs(m.revenueTodayDeltaPct)}% vs yesterday</div>
    </div>
    <div class="stat-tile accent-info">
      <div class="stat-tile-label">Cost per KM</div>
      <div class="stat-tile-value">RM ${m.costPerKm.toFixed(2)}</div>
      <div class="stat-tile-delta up">&uarr; ${formatRM(Math.abs(m.costPerKmDelta))} efficiency gain</div>
    </div>
  `;
}

function renderCashFlowChart() {
  const canvas = qs('#cashflow-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const labels = CASH_FLOW.map((d) => d.day);
  const revenue = CASH_FLOW.map((d) => d.revenue);
  const cost = CASH_FLOW.map((d) => d.cost);

  brandedChart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Revenue',
          data: revenue,
          borderColor: palette.primary,
          backgroundColor: brandLineGradient(ctx, palette.primary, 0.3),
          fill: true,
          tension: 0.3,
          borderWidth: 2.5,
          pointRadius: 0,
          pointHoverRadius: 5,
        },
        {
          label: 'Operating Cost',
          data: cost,
          borderColor: palette.accent,
          backgroundColor: 'transparent',
          fill: false,
          tension: 0.3,
          borderWidth: 2,
          borderDash: [4, 3],
          pointRadius: 0,
          pointHoverRadius: 4,
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            callback: (v) => formatRMShort(v),
          },
        },
        x: {
          ticks: {
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: 8,
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (c) => c.dataset.label + ': ' + formatRM(c.parsed.y),
          },
        },
      },
    },
  });
}

function renderProfitChart() {
  const canvas = qs('#profit-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const sorted = [...ROUTE_PROFIT].sort((a, b) => b.profitRm - a.profitRm);
  const labels = sorted.map((r) => r.routeCode);
  const values = sorted.map((r) => r.profitRm);
  const colors = sorted.map((r) => (r.profitRm < 0 ? palette.bad : palette.primary));

  brandedChart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Profit',
          data: values,
          backgroundColor: colors,
          borderRadius: 4,
          barThickness: 14,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (c) => 'Profit: ' + formatRM(c.parsed.x),
          },
        },
      },
      scales: {
        x: {
          ticks: {
            callback: (v) => formatRMShort(v),
          },
        },
        y: {
          ticks: { font: { size: 11 } },
        },
      },
    },
  });
}

function renderReceivablesTable() {
  const host = qs('#receivables-tbody');
  if (!host) return;
  host.innerHTML = RECEIVABLES.map((ar) => `
    <tr class="clickable">
      <td><strong>${escapeHtml(ar.client)}</strong></td>
      <td class="money">${formatRM(ar.outstandingRm)}</td>
      <td class="num">${ar.daysOverdue}</td>
      <td>${badgeFor(ar.bucket)}</td>
      <td>${badgeFor(ar.action)}</td>
    </tr>
  `).join('');

  const total = sum(RECEIVABLES, (r) => r.outstandingRm);
  const badge = qs('#ar-total-badge');
  if (badge) badge.textContent = formatRM(total) + ' total';
}
