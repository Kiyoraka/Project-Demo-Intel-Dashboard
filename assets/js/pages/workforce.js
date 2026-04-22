/* Workforce Deployment page */

import { DRIVERS, ROSTER, ROSTER_DAYS, WORKFORCE_METRICS, findDriver } from '../store.js';
import { qs, escapeHtml } from '../ui.js';

export function renderWorkforcePage() {
  renderKpiStrip();
  renderGantt();
  renderSuggestionsTable();
}

function renderKpiStrip() {
  const m = WORKFORCE_METRICS;
  qs('#kpi-strip').innerHTML = `
    <div class="stat-tile accent-good">
      <div class="stat-tile-label">Drivers On Duty Today</div>
      <div class="stat-tile-value">${m.onDutyToday} / ${m.totalDrivers}</div>
      <div class="stat-tile-delta flat">&#9679; 93% coverage</div>
    </div>
    <div class="stat-tile accent-warn">
      <div class="stat-tile-label">Overtime This Week</div>
      <div class="stat-tile-value">${m.weeklyOvertimeHours} hrs</div>
      <div class="stat-tile-delta down">&#9679; Watch 2 drivers</div>
    </div>
    <div class="stat-tile accent-info">
      <div class="stat-tile-label">Compliance Rate</div>
      <div class="stat-tile-value">${m.complianceRate}%</div>
      <div class="stat-tile-delta up">&uarr; 1% vs last week</div>
    </div>
    <div class="stat-tile accent-bad">
      <div class="stat-tile-label">Open Shift Gaps</div>
      <div class="stat-tile-value">${m.openShiftGaps}</div>
      <div class="stat-tile-delta down">&#9679; ${escapeHtml(m.gapDay)}</div>
    </div>
  `;
}

function renderGantt() {
  const host = qs('#gantt-host');
  if (!host) return;

  const labelMap = { shift: 'S', overtime: 'OT', rest: 'R', gap: '!', risk: 'X' };

  const headerCells = ROSTER_DAYS.map((d) => `<div class="gantt-cell" style="background: transparent; color: var(--text-muted); font-size: 10px; text-transform: uppercase;">${escapeHtml(d)}</div>`).join('');

  const rows = ROSTER.map((row) => {
    const driver = findDriver(row.driverId);
    if (!driver) return '';
    const cells = row.days.map((code) => `
      <div class="gantt-cell ${escapeHtml(code)}" title="${escapeHtml(code)}">
        ${labelMap[code] || ''}
      </div>
    `).join('');
    return `
      <div class="gantt-row">
        <div class="driver-label">${escapeHtml(driver.name)}</div>
        ${cells}
      </div>
    `;
  }).join('');

  host.innerHTML = `
    <div class="gantt-row header">
      <div class="driver-label">&nbsp;</div>
      ${headerCells}
    </div>
    ${rows}
  `;
}

function renderSuggestionsTable() {
  const host = qs('#suggestions-tbody');
  if (!host) return;
  host.innerHTML = WORKFORCE_METRICS.suggestions.map((s) => `
    <tr class="clickable">
      <td>${escapeHtml(s.issue)}</td>
      <td>${escapeHtml(s.action)}</td>
      <td><strong style="color: var(--brand-primary);">${escapeHtml(s.impact)}</strong></td>
    </tr>
  `).join('');
}
