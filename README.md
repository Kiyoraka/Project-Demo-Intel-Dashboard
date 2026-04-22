# Maraliner Intel Dashboard

Bus Operations Intelligence Platform — pitch demo prototype for Maraliner Sdn Bhd.

Built for T-Nex Malaysia, a clickable executive dashboard showing how five core operational pain domains can be visibly solved with one unified intel platform.

---

## Quick Start

Pure vanilla web — no build step, no npm install, no server runtime to install.

**Easiest (VS Code):** install the **Live Server** extension, right-click `index.html` → **Open with Live Server**. Done.

**Or any static HTTP server you already have:**
- VS Code Live Server (recommended)
- `npx serve` (Node)
- `php -S localhost:8080` (PHP)
- IntelliJ / WebStorm built-in preview
- Any other tool that serves files over HTTP

Then open the served URL in your browser. The login page comes up first.

> A real HTTP server is needed (not file://) because the dashboard uses ES modules and fetch-loads shared sidebar/topbar partials — both blocked by browsers on file://. Live Server handles this transparently with one click.

### Demo Credentials

```
Email:    admin@gmail.com
Password: admin123
```

The login form already pre-fills these as placeholders so the pitch driver cannot fumble.

---

## Pitch Walkthrough (10 minutes)

The CEO's path through the demo is built to flow in this order. Each page follows the same template (KPI strip on top, hero visual in the middle, ranked action list at the bottom) so the rhythm is learned by page 3.

1. **Sign In** — `admin@gmail.com / admin123` lands on Executive Overview
2. **Executive Overview** — five KPI tiles, one per pain domain, plus the Top 10 Actions feed across all five modules. The CEO sees the whole network in 30 seconds.
3. **Fleet Reliability** — 30-bus health grid, click any bus (try JQE 4421 or TBP 3344) to see live sensor readings. The Top 5 Preventive Service table shows cost-to-avoid totals.
4. **Financial Visibility** — 30-day cash flow vs operating cost dual-line chart. Route Profitability bar chart with KB-SGR rendered in red as the loss-route. Top 10 Overdue Receivables aging buckets.
5. **Demand & Network** — Route x Hour heatmap (gold = low load, crimson = full load, KB-SGR row visibly sparse). Recommended Schedule Changes table with weekly RM gain projections.
6. **Workforce Deployment** — Weekly Crew Roster Gantt for 30 drivers. Spot the 3 Monday gaps, the 2 overtime cells, the 2 compliance-risk cells. Top 5 Shift Optimization suggestions.
7. **Revenue & Customer** — Live Unified Ticketing Feed across all 4 channels. Customer Segments donut. Top 5 Revenue Leakage Alerts — click any row for evidence and the Investigation Modal.

The pitch story: the same bus (B-18 / B-02), the same driver (D-17 Goh Teck Seng), the same loss-route (KB-SGR) appear across multiple modules because in the real world, problems are cross-domain. One platform sees it all.

---

## File Structure

```
index.html                  -> entry, redirects to login or exec-overview
login.html                  -> credential form

assets/
  css/
    tokens.css              -> brand colors + spacing + typography variables
    base.css                -> reset + body + headings
    components.css          -> buttons, cards, tables, modals, badges, fleet-grid, heatmap, gantt, feed-list, action-list
    layout-public.css       -> login page
    layout-dashboard.css    -> sidebar + topbar + content shell
    responsive.css          -> 1024 / 768 / 480 breakpoints
  js/
    auth.js                 -> hardcoded credential check + session helpers
    partials.js             -> shared chrome loader + active-link wiring
    store.js                -> ALL hardcoded seed data (FLEET, ROUTES, DRIVERS, ROSTER, TICKETS, CUSTOMERS, FINANCE, ALERTS, etc.)
    ui.js                   -> formatRM, escapeHtml, badgeFor, modal helpers
    charts.js               -> brandedChart wrapper around Chart.js with brand defaults
    pages/
      exec-overview.js
      fleet.js
      finance.js
      demand.js
      workforce.js
      revenue.js
  img/
    logo.svg                -> full Maraliner wordmark (login + sidebar)
    logo-mark.svg           -> M-mark only (sidebar collapsed rail)
    favicon.svg             -> 32x32 favicon

partials/
  sidebar.html              -> 6 module nav links + Settings + Logout
  topbar.html               -> page title + notifications + user info

pages/
  exec-overview.html
  fleet.html
  finance.html
  demand.html
  workforce.html
  revenue.html

libs/
  chart.umd.min.js          -> Chart.js 4.4.1 local (offline-safe)
  fontawesome/              -> Font Awesome 6.5.1 local (offline-safe)
```

---

## Caveats

This is a pitch prototype. By design:

- **Data is hardcoded** in `assets/js/store.js`. No backend, no database, no API. To swap in real Maraliner data, edit the exported constants in store.js.
- **Auth is a placeholder.** A single hardcoded credential lets anyone in. For production, replace `assets/js/auth.js` with a real auth provider.
- **Mutations don't persist.** The CEO can click around but state resets on reload. Pitch-only demo behavior.
- **Charts use Chart.js 4.4.1 local.** No CDN dependency at pitch time. If Chart.js changes its API, swap the lib file.
- **Vanilla web, no framework.** ES modules + fetch + DOM. Maintenance is direct edits to .js / .html / .css files.

---

## Customizing for Real Pitch

If post-pitch the client says yes:

1. **Swap data** — replace `assets/js/store.js` exports with real Maraliner numbers.
2. **Real auth** — replace `assets/js/auth.js` with backend integration.
3. **Stack decision** — does this prototype graduate to Laravel + Vue (KSL stack) or .NET Core + React (T-Nex assigned)? Decision deferred per project plan.

---

## Tech Stack

- HTML5 + CSS3 + ES-module JavaScript (no framework, no bundler)
- Chart.js 4.4.1 (local)
- Font Awesome 6.5.1 (local)
- Poppins via Google Fonts CDN

Built April 2026 for the Maraliner pitch by T-Nex Malaysia.
