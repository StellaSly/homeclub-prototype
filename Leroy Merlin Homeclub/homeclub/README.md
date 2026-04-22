# HomeClub — Interactive Prototype

Prepared by the **CMR Africa** team for **Naresh Rocharam, Treasury Manager · Leroy Merlin SA** — April 2026.

This is a self-contained, multi-page static web app that walks Naresh through the HomeClub concept end-to-end. It has no backend, no build step, and works offline after first load.

---

## What's in here

```
homeclub/
├── index.html                    ← landing / 10-min intro (start here)
├── app/                          ← member-facing mobile prototype
│   ├── onboarding.html           ← my Home Card → HomeClub upgrade (3 steps)
│   ├── home.html                 ← tier card, HB balance, active project
│   ├── project.html              ← The Project Engine (90-day window)
│   ├── gamification.html         ← badges incl. Water/Energy Warrior
│   ├── coalition.html            ← LM / M&B / Decathlon + services
│   ├── events.html               ← Decorex, Design Joburg, Homemakers, House & Garden
│   └── in-store.html             ← green / red / coral 3-ticket pricing layer + aisle QR
├── admin/                        ← Naresh's dashboard view
│   ├── index.html                ← KPIs + rotating "CMR Africa Weekly Insight"
│   ├── members.html              ← 320-member explorer with 12 spotlight profiles
│   ├── mystery-shop.html         ← Fourways creative visual mystery shop report
│   └── why-cmr.html              ← upstream-of-TLC/Truth positioning
├── assets/
│   ├── css/                      ← tokens.css, shared.css, member.css, admin.css
│   ├── js/                       ← data.js, app.js, charts.js
│   └── img/                      ← CMR Africa logo
├── content/
│   └── copy.json                 ← ALL editable copy lives here (edit without touching engine)
├── vendor/
│   └── chart.umd.min.js          ← pinned Chart.js 4.4.0 for offline
├── service-worker.js             ← offline cache of the full app
├── manifest.webmanifest          ← installable as PWA
└── README.md                     ← this file
```

---

## How to deploy

### Option 1 — Vercel / Netlify / Cloudflare Pages (1 click)

1. Drag the `homeclub/` folder onto https://app.netlify.com/drop (or push to a repo and connect via Vercel).
2. No build step. No environment variables. Done.

### Option 2 — Local file share (zip + email)

1. Zip the `homeclub/` folder.
2. Send to Naresh.
3. He unzips and **double-clicks `index.html`** — opens straight in his browser.

> Note: some browsers restrict `fetch()` on `file://` URLs. The prototype handles this gracefully — copy falls back to inline defaults — but for the cleanest experience, hosting on Netlify or Vercel is preferred.

### Option 3 — Quick local preview

Any static file server works. From the `homeclub/` folder:

```bash
python -m http.server 8000        # then open http://localhost:8000
# OR
npx serve .                        # then open the URL it prints
```

---

## How to edit copy

**The vast majority of tweaks happen in one file: `content/copy.json`.**

- Text strings across every screen (landing, onboarding steps, KPIs, insights, event listings, comparison table, spotlight bios) are keyed there.
- Edit, save, hard-refresh the page — done.
- HTML is allowed in any value with a key ending in `_html` (we use it for italics and accent colour via `<em>` tags).

Example — changing the landing tagline:

```json
"landing": {
  "headline_html": "A coalition loyalty programme built <em>from the customer inwards</em>, not the platform outwards."
}
```

---

## How to edit synthetic data

All synthetic data lives in `assets/js/data.js`:

- **12 spotlight profiles** (lines ~60–200) — hand-written personas with bio + CMR insight text. Edit freely.
- **320-member corpus** is generated deterministically from the seed `20260421`. Change the seed and the whole cohort reshuffles reproducibly.
- **Name pools, stores, project types, tier weights** all at the top of the file.

---

## How to update the Weekly Insight rotator

The admin dashboard's hero insight panel rotates through 3–4 insights every 8 seconds. To change them, edit `admin_overview.insight_rotator` in `content/copy.json`. Add, remove, or rewrite entries freely — the rotator adapts automatically.

---

## Strategic framing (don't lose this when editing)

- **Always label** Mugg & Bean and Decathlon as "Pilot — in discussion". Never "Live".
- **Always preserve** the disclosure footer on every page: *prototype · synthetic data · partners pending confirmation · prepared by CMR Africa*.
- **Never** fabricate a specific event date that isn't public. The `events` section already uses "TBC · illustrative" where dates weren't confirmed.
- **Never** position CMR Africa as competing with TLC's rewards tech or Truth's frameworks. Our wedge is *upstream*.

---

## Credits

Built by the CMR Africa team. HomeClub concept © Bra Bens (Pty) Ltd / CMR Africa 2026. All synthetic data. No client or consumer data is represented in this prototype.
