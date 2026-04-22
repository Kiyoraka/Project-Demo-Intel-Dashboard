/* Fleet Reliability page */

import { FLEET, FLEET_METRICS, filteredFleet, findBus } from '../store.js';
import { qs, qsa, escapeHtml, formatRM, formatNumber, openModal, closeModal, wireModalClose, badgeFor } from '../ui.js';

let currentFilter = 'all';

export function renderFleetPage() {
  renderKpiStrip();
  renderFleetGrid();
  renderPreventiveTable();
  wireFilters();
  wireModalClose(qs('#bus-modal'));
}

function renderKpiStrip() {
  const m = FLEET_METRICS;
  qs('#kpi-strip').innerHTML = `
    <div class="stat-tile accent-good">
      <div class="stat-tile-label">Fleet Uptime</div>
      <div class="stat-tile-value">${m.uptimePercent}%</div>
      <div class="stat-tile-delta up">&uarr; ${m.uptimeDeltaPct}% vs last week</div>
    </div>
    <div class="stat-tile">
      <div class="stat-tile-label">In Service Today</div>
      <div class="stat-tile-value">${m.inServiceToday} / ${m.inServiceTotal}</div>
      <div class="stat-tile-delta flat">&#9679; On target</div>
    </div>
    <div class="stat-tile accent-warn">
      <div class="stat-tile-label">Predictive Alerts</div>
      <div class="stat-tile-value">${m.predictiveAlerts}</div>
      <div class="stat-tile-delta down">&#9679; ${m.predictiveAlertsNew} new this week</div>
    </div>
    <div class="stat-tile accent-info">
      <div class="stat-tile-label">Mean Time Between Failures</div>
      <div class="stat-tile-value">${m.meanTimeBetweenFailures} hr</div>
      <div class="stat-tile-delta up">&uarr; ${m.meanTimeDeltaHours} hr improvement</div>
    </div>
  `;
}

function renderFleetGrid() {
  const host = qs('#fleet-grid');
  if (!host) return;
  const list = filteredFleet(currentFilter);
  host.innerHTML = list.map((bus) => `
    <div class="fleet-tile ${bus.status}" data-bus-id="${escapeHtml(bus.id)}">
      <div class="plate">${escapeHtml(bus.plate)}</div>
      <div class="meta">${escapeHtml(bus.model)} &middot; ${escapeHtml(bus.route)}</div>
      <div style="margin-top: 6px;">${badgeFor(bus.status)}</div>
    </div>
  `).join('');

  qsa('.fleet-tile', host).forEach((tile) => {
    tile.addEventListener('click', () => {
      const busId = tile.getAttribute('data-bus-id');
      openBusModal(busId);
    });
  });
}

function wireFilters() {
  qsa('#fleet-filter button').forEach((btn) => {
    btn.addEventListener('click', () => {
      qsa('#fleet-filter button').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderFleetGrid();
    });
  });
}

function openBusModal(busId) {
  const bus = findBus(busId);
  if (!bus) return;
  qs('#bus-modal-title').textContent = bus.plate + ' — ' + bus.model;
  qs('#bus-modal-body').innerHTML = `
    <p style="margin-bottom: 16px;">
      ${badgeFor(bus.status)}
      <span style="color: var(--text-muted); margin-left: 8px;">Route: ${escapeHtml(bus.route)}</span>
    </p>
    <ul class="sensor-list">
      <li>
        <span class="sensor-label">Odometer</span>
        <span class="sensor-value">${formatNumber(bus.odometer)} km</span>
      </li>
      <li>
        <span class="sensor-label">Capacity</span>
        <span class="sensor-value">${bus.capacity} seats</span>
      </li>
      <li>
        <span class="sensor-label">Last Service</span>
        <span class="sensor-value">${escapeHtml(bus.lastService)}</span>
      </li>
      <li>
        <span class="sensor-label">Next Service Due</span>
        <span class="sensor-value" style="color: ${bus.nextServiceKm < 0 ? 'var(--status-bad)' : 'var(--text-primary)'};">
          ${bus.nextServiceKm < 0 ? 'Overdue ' + Math.abs(bus.nextServiceKm) + ' km' : 'in ' + formatNumber(bus.nextServiceKm) + ' km'}
        </span>
      </li>
      <li>
        <span class="sensor-label">Brake Wear</span>
        <span class="sensor-value" style="color: ${bus.sensors.brake >= 60 ? 'var(--status-bad)' : bus.sensors.brake >= 30 ? 'var(--status-warn)' : 'var(--status-good)'};">${bus.sensors.brake}%</span>
      </li>
      <li>
        <span class="sensor-label">Tire Depth</span>
        <span class="sensor-value" style="color: ${bus.sensors.tire <= 40 ? 'var(--status-bad)' : bus.sensors.tire <= 60 ? 'var(--status-warn)' : 'var(--status-good)'};">${bus.sensors.tire}%</span>
      </li>
      <li>
        <span class="sensor-label">Oil Status</span>
        <span class="sensor-value">${escapeHtml(bus.sensors.oil)}</span>
      </li>
      <li>
        <span class="sensor-label">Battery Voltage</span>
        <span class="sensor-value">${bus.sensors.battery} V</span>
      </li>
      <li>
        <span class="sensor-label">Engine Temp</span>
        <span class="sensor-value" style="color: ${bus.sensors.engineTemp >= 100 ? 'var(--status-bad)' : bus.sensors.engineTemp >= 90 ? 'var(--status-warn)' : 'var(--status-good)'};">${bus.sensors.engineTemp} &deg;C</span>
      </li>
    </ul>
  `;
  openModal(qs('#bus-modal'));
}

function renderPreventiveTable() {
  const host = qs('#preventive-tbody');
  if (!host) return;
  host.innerHTML = FLEET_METRICS.top5PreventiveService.map((row) => `
    <tr class="clickable">
      <td class="mono">${escapeHtml(row.plate)}</td>
      <td>${escapeHtml(row.route)}</td>
      <td>${escapeHtml(row.alert)}</td>
      <td class="money">${formatRM(row.costToAvoidRm)}</td>
    </tr>
  `).join('');
}
