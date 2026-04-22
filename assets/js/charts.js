/* Maraliner Intel Dashboard — Chart.js wrapper with brand defaults */

const BRAND = {
  primary: '#C8234A',
  primaryDark: '#A01838',
  primarySoft: 'rgba(200, 35, 74, 0.12)',
  accent: '#C9A227',
  accentDark: '#A8861C',
  accentSoft: 'rgba(201, 162, 39, 0.18)',
  textPrimary: '#0F172A',
  textMuted: '#64748B',
  border: '#E2E8F0',
  good: '#10B981',
  warn: '#F59E0B',
  bad: '#EF4444',
  info: '#0EA5E9',
};

export const palette = BRAND;

function applyDefaults() {
  if (!window.Chart || window.__maralinerChartDefaults) return;
  window.__maralinerChartDefaults = true;

  const Chart = window.Chart;
  Chart.defaults.font.family = "'Poppins', 'Segoe UI', system-ui, sans-serif";
  Chart.defaults.font.size = 12;
  Chart.defaults.color = BRAND.textMuted;
  Chart.defaults.borderColor = BRAND.border;

  Chart.defaults.plugins.legend.labels.boxWidth = 14;
  Chart.defaults.plugins.legend.labels.boxHeight = 10;
  Chart.defaults.plugins.legend.labels.padding = 16;
  Chart.defaults.plugins.legend.position = 'bottom';
  Chart.defaults.plugins.legend.labels.color = BRAND.textPrimary;

  Chart.defaults.plugins.tooltip.backgroundColor = BRAND.textPrimary;
  Chart.defaults.plugins.tooltip.titleColor = '#FFFFFF';
  Chart.defaults.plugins.tooltip.bodyColor = '#FFFFFF';
  Chart.defaults.plugins.tooltip.padding = 10;
  Chart.defaults.plugins.tooltip.cornerRadius = 8;
  Chart.defaults.plugins.tooltip.titleFont = { weight: '600', size: 12 };
  Chart.defaults.plugins.tooltip.bodyFont = { size: 12 };
  Chart.defaults.plugins.tooltip.boxPadding = 6;
}

export function brandedChart(ctx, config) {
  applyDefaults();
  if (!window.Chart) {
    console.error('Chart.js is not loaded — load libs/chart.umd.min.js before charts.js consumers');
    return null;
  }

  const merged = {
    ...config,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      ...(config.options || {}),
      scales: applyScaleDefaults(config.options ? config.options.scales : undefined),
    },
  };

  return new window.Chart(ctx, merged);
}

function applyScaleDefaults(scales) {
  if (!scales) return undefined;
  const defaults = {};
  Object.entries(scales).forEach(([key, axisConfig]) => {
    defaults[key] = {
      ...axisConfig,
      grid: {
        color: 'rgba(226, 232, 240, 0.6)',
        drawBorder: false,
        ...((axisConfig && axisConfig.grid) || {}),
      },
      ticks: {
        color: BRAND.textMuted,
        font: { size: 11 },
        ...((axisConfig && axisConfig.ticks) || {}),
      },
    };
  });
  return defaults;
}

export function brandLineGradient(ctx, color = BRAND.primary, alpha = 0.25) {
  if (!ctx || !ctx.canvas) return color;
  const height = ctx.canvas.clientHeight || 240;
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, hexToRgba(color, alpha));
  gradient.addColorStop(1, hexToRgba(color, 0));
  return gradient;
}

export function heatmapColor(intensity) {
  // intensity 0..1 -> gradient between gold (low) and crimson (high), with subtle bg for very low
  if (intensity <= 0.05) return '#F1F5F9';
  const clamped = Math.max(0, Math.min(1, intensity));
  const gold = hexToRgb(BRAND.accent);
  const crimson = hexToRgb(BRAND.primary);
  const r = Math.round(gold.r + (crimson.r - gold.r) * clamped);
  const g = Math.round(gold.g + (crimson.g - gold.g) * clamped);
  const b = Math.round(gold.b + (crimson.b - gold.b) * clamped);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  return {
    r: parseInt(clean.substr(0, 2), 16),
    g: parseInt(clean.substr(2, 2), 16),
    b: parseInt(clean.substr(4, 2), 16),
  };
}

function hexToRgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}
