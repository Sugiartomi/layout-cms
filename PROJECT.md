# Arbitgo CMS — Portfolio Project Brief

**Author:** Tomi Sugiarto  
**Type:** Frontend portfolio demo (CMS / back-office concept)  
**Status:** Interactive demo with localStorage simulation (no real backend / DB)  
**Primary URL (local):** `http://localhost:3021`  
**Repo name (npm):** `arbitgo_web`

---

## 1. Project purpose

**Arbitgo CMS** is a portfolio showcase of a **back-office / admin CMS** for a trading-style product (KYC, users, packages, payments, reports).

The goal is **not** to run a production CMS with a live API. Instead, the project demonstrates:

- Multi-section admin IA (sidebar modules: users, KYC, packages, approvals, content, reports)
- Dashboard analytics UX (KPI cards, area chart, pie chart, filterable tables)
- End-to-end clickable flows without a backend (`localStorage` as a mock API)
- Demo intro bumper + Reset Demo (replayable portfolio walkthrough)
- Responsive shell (desktop sidebar + mobile off-canvas)

> This is a **demo / portfolio** piece. All business data is seeded and mutated in the browser.

---

## 2. Problem → solution narrative

| Problem | Demo solution |
| --- | --- |
| Recruiters need a believable admin product, not static screenshots | Full CMS shell: dashboard → users → KYC → packages → approvals → reports |
| No backend / database for a portfolio piece | `localStorage` + seed data (`src/data/*`) simulates CRUD & approvals |
| Login gate slows portfolio demos | No auth gate; `/` shows **bumper** then lands on Dashboard |
| Charts look disconnected from the UI | Highcharts area (Assets / Market) + pie (asset mix) wired into dashboard cards |
| Mobile admin UIs often break | Off-canvas sidebar, edge-to-edge content, mobile-safe notification panel |

---

## 3. Product features (what users can do)

1. **Demo bumper** — typing slogan → logo fade → enter app (Last War / Purwakuma / Portutilitas style)  
2. **Dashboard** — KPI cards, Assets/Market analytics, total transaction pie, tx table + filters/approve  
3. **User management** — User list / detail, User Admin, Add Admin, Permission matrix  
4. **KYC** — Verification & Video queues with Approve / Reject (persisted)  
5. **Master data** — Referral / Achievement / Reward points (edit + save)  
6. **Package purchase** — App Package, Activation Key, Crystal (stock ↓, purchase + payment rows)  
7. **Approvals** — Purchase history, Point cashout, Payment approval (per-row status)  
8. **Content** — Promotion banners, Support center, Shareable content (add / edit / delete)  
9. **Reports** — Point summary, Company omzet, User omzet (CSV export)  
10. **Setting** — Company/bank fields saved to localStorage  
11. **Reset Demo** — clears demo storage, reseeds, replays bumper  

---

## 4. Tech stack

### Core

| Layer | Choice | Why |
| --- | --- | --- |
| UI library | **React 18** | Component model for multi-page CMS |
| Bundler / tooling | **Create React App** (`react-scripts` 5) | Fast portfolio bootstrap |
| Routing | **React Router DOM v6** | Route map for every CMS module |
| State (global) | **Redux + redux-thunk** (present, lightly used) | Legacy template leftover |
| Demo persistence | **localStorage** (`src/data/storage.js`) | Persist users, KYC, purchases, settings without BE |
| Demo seed | `src/data/dummyData.js` + `initStorage.js` | First-load / Reset Demo dataset |

### UI / styling

| Tool | Usage |
| --- | --- |
| **Bootstrap 5** | Grid, tables, modals, form controls |
| Custom CSS (`src/assets/css/index.css`) | Fonts helpers, bumper, mobile shell, pie wrap |
| **react-bootstrap-icons** | Menu, reset, filter icons |
| **react-datepicker** | Dashboard date range filters |
| Fonts | **Roboto** + **Inter** (utility classes in CSS) |

### Charts & data viz

| Library | Where | What it means |
| --- | --- | --- |
| **Highcharts** (`highcharts` v10) | Dashboard | Primary charting engine (no React wrapper; imperative `Highcharts.chart(...)`) |
| **Area chart** (`AreaChart.jsx`) | Assets / Market Analytics | Time-series **area** chart. **Assets** = holdings-style series (BTC / ETH / USDT). **Market** = separate dummy series (Buy Volume / Sell Volume / Open Interest) |
| **Pie / donut chart** (`PieChart.jsx`) | Total Transaction card | **Composition** chart: share of assets (BTC, ETH, USDT, Others) as percentages inside a donut |

> Interview soundbite: *“Dashboard charts use Highcharts directly. The area chart swaps datasets when the user toggles Assets vs Market Analytics. The pie is a donut composition next to total transaction volume—sized to fit the card without clipping.”*

### Domain / demo data files

| File | Role |
| --- | --- |
| `src/data/dummyData.js` | Seed entities (users, admins, KYC, packages, payments, reports…) |
| `src/data/storage.js` | `getItem` / `setItem` / clear helpers (`arbitgo.*` keys) |
| `src/data/initStorage.js` | Seed on first load + `resetDemo()` |
| `src/hooks/useLocalData.js` | React hook to read/write localStorage + sync events |

### Other libraries present

- `@testing-library/*` — CRA default tests  
- `web-vitals` — performance reporting hook  
- Bundled `Notification.js` — bell dropdown UI (styled for mobile so the panel stays on-screen)

---

## 5. Architecture (high level)

```
App mount
  └─ initStorage()          seed localStorage if needed
  └─ Demo bumper (session)  typing → logo → /dashboard
        ├─ Layout (Navbar + Sidebar)
        ├─ /dashboard
        ├─ /user-list · /user-admin · /role-permission
        ├─ /kyc-verification · /kyc-video
        ├─ /refferal-point · /achievement-point · /reward-point
        ├─ /app-package · /activation-key · /crystal (+ report pages)
        ├─ /purchase-history · /point-cashout · /payment-approval
        ├─ /promotion-banner · /support-center · /shareable-content
        ├─ /point-summary · /company-omzet · /user-omzet
        └─ /setting
```

**Key UX details:**
- `/` and `/login` redirect into the bumper → dashboard flow (no credential gate).  
- **Reset Demo** (navbar desktop / Account section in mobile sidebar) wipes `arbitgo.*` keys, reseeds, clears bumper session flag, reloads.  
- Mobile navbar shows **burger · logo · bell** only; profile/reset live inside the sidebar Account block.

---

## 6. Chart design notes

### Area — Assets Analytics
- Series: BTC / ETH / USDT stockpile-style values over an index axis  
- Y-axis formatted in `k` (thousands)  
- Meant to read as **portfolio / holdings trend**

### Area — Market Analytics
- Separate dummy series: Buy Volume, Sell Volume, Open Interest  
- Same chart component, different `mode` prop → re-renders Highcharts options  
- Meant to read as **market activity**, not the same as assets

### Pie — Total Transaction
- Donut (`innerSize` ~58%) with legend (BTC / ETH / USDT / Others)  
- Shows **mix / composition**, while the big number above is aggregate volume  
- Container height tuned so the chart fills the card without overlapping title or legend

---

## 7. Design direction

- Keep the **existing CMS look** (blue primary `#0052D9` / `#2752E7`, gray canvas `#EDEDED`)  
- Bumper: dark navy plate + transparent Arbitgo logo + typewriter slogan  
- Do not restyle desktop cards/tables unless asked; focus on wiring + mobile polish  

---

## 8. How to run

```bash
npm install
npm start
# → http://localhost:3021
```

Useful scripts:

- `npm start` — `PORT=3021 react-scripts start`  
- `npm run build` — production build  
- `npm test` — CRA test runner  

---

## 9. Portfolio talking points

1. **Why this product?** Trading / fintech products need a credible ops CMS (KYC, payments, packages)—this shows that surface.  
2. **What did I build end-to-end?** Bumper → dashboard analytics → CRUD/approval modules on localStorage.  
3. **What would I add with a real BE?** JWT auth, role-gated APIs, real file uploads, websockets for pending queues, audit logs.  
4. **What am I proud of?** Coherent module map, Highcharts dual analytics modes, replayable Reset Demo, mobile shell that stays usable.

---

## 10. Credits & notes

- Branding assets: Arbitgo logo (`src/assets/img/arbitgo-1.png`, bumper variant)  
- Charting: [Highcharts](https://www.highcharts.com/)  
- UI base: Bootstrap 5  

---

*This document is meant to sit beside the live demo in your portfolio collection so you can quickly explain intent, scope, and technologies.*
