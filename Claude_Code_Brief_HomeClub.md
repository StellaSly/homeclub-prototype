# CLAUDE CODE BRIEF: Build HomeClub Interactive Experience for Leroy Merlin SA

> **Copy this entire file and paste it as your first message to Claude Code. It contains all project context, strategic decisions already made, files already produced, and the specific build ask. Claude Code should read this once, confirm understanding, then proceed with minimum clarification.**

---

## WHO I AM

I'm Lee, co-founder and Insights Alchemist at **CMR Africa** (cmrafrica.com / app.cmrafrica.com), a pan-African market research and consumer insights platform. I also run **Bra Bens (Pty) Ltd**, a creative ad agency + e-learning + qualitative research business. My business goal is to scale CMR Africa and win large FMCG and retail clients.

## THE OPPORTUNITY

I have a warm commercial opportunity with **Naresh Rocharam, Treasury Manager at Leroy Merlin South Africa** (French-owned DIY/home-improvement retailer, part of the Adeo Group / Mulliez family who also own Decathlon). Naresh and I built a relationship on the padel court; he is widening his mandate from pure treasury into customer understanding, and has three explicit asks:

1. **A loyalty programme** that grows LM's customer base in SA and rivals Discovery Vitality and FNB eBucks on emotional connection
2. **A mystery shopper research programme** with creative visual reports (not 60-page Word docs)
3. **A way to plug into the new TATA POS system** LM is migrating to from Oracle

He has also revealed that **Decathlon SA and Mugg & Bean** are open to joining as coalition partners. He wants three competing agency quotes. Our primary competitor is **TLC Worldwide Africa** (COSMOS platform, experience-led rewards); secondary is **Truth Loyalty** (consultancy behind the SA Loyalty Awards and the Truth/BrandMapp whitepaper).

## THE STRATEGIC POSITION (ALREADY DECIDED — DO NOT RE-LITIGATE)

- Our wedge is NOT competing with TLC's rewards tech or Truth's frameworks. We position as the **consumer insight and strategy layer that sits upstream of rewards platforms.** Same brief, addressed differently — ours starts with the customer, not the tech.
- We are positioning CMR Africa as the **only player with a pan-African consumer panel + qualitative depth + creative agency (Bra Bens) under one roof.**

## THE CONCEPT (ALREADY DECIDED — DO NOT RE-LITIGATE)

**Working name: HomeClub by Leroy Merlin**

Tagline: *"South Africa's first 'Home + Life' coalition rewards ecosystem. Three brands. One currency. One project at a time."*

### Three pillars
1. **BUILD it** (Leroy Merlin) — earn HomeBucks on every spend, project-category accelerators
2. **LIVE in it** (Mugg & Bean) — coffee, family meals, home rituals
3. **MOVE in it** (Decathlon) — fitness, outdoor, kids' play, garden

### Tier architecture
- **NEST** (free entry, ~68% of members in year 1) — 1% back, app access, monthly workshops, birthday coffee at M&B
- **HOME** (free mid-tier, unlocked by activity not spend, ~26%) — 2% back, free Coastal Hire tool day per quarter, priority workshop booking, 10% off Decathlon kids' range
- **HOMESTEAD** (paid R299/year OR R7,500 annual spend, ~6%) — 4% back, 5-year warranty extension, free design consultation, KANDUA Pro contractor matching, exclusive HomeStead Days

### The signature mechanic: "The Project Engine"
When a customer scans a project barcode in the LM app (e.g. "Bathroom Renovation"), the app opens a 90-day project window. Every spend during that window across all three coalition partners earns 2× HomeBucks AND triggers personalised content (videos, contractor matches via KANDUA, design inspo). At end of project, the customer is invited to share a before/after which becomes earned-media content for LM and qualitative data for CMR Africa.

### Currency: HomeBucks (HB)
- 1 HB = R1 customer-facing value
- Earn: 1 HB per R1 at LM (2× in project windows), 1 HB per R2 at Decathlon, 1 HB per R5 at Mugg & Bean
- Redeem: across all three partners at parity

## CRITICAL FIELD INSIGHTS FROM THE LM STORE VISIT (21 APR 2026 — 17 PHOTOS)

These findings are the backbone of the whole pitch. They must shape the prototype you build.

### THE ONE FINDING THAT CHANGES EVERYTHING
**Leroy Merlin SA already runs a loyalty programme.** It is called **"my Home Card"** — visible on in-store signage: *"my Home Card — Want to join the club? More benefits to make your home the best place to live."* It uses the LM triangle + white/green identity. Shoppers download the LM app, register, become a "loyalty member," and unlock promotional pricing at every till. Every single red PROMO sign in the store carries the fine-print line *"ALL PROMOTIONS ARE EXCLUSIVE TO LOYALTY MEMBERS."*

**BUT:** the programme has no points, no tiers, no rewards, no earn/burn, no personalisation, no coalition layer. Identity and transaction data is captured at every checkout but sits dormant. 95%+ of the value is unrealised.

**This reframes our entire pitch:**
- **Old framing:** *"Build LM a new loyalty programme."* → greenfield CapEx conversation, hard internal sell.
- **New framing:** *"LM already has the mechanic and the data. HomeClub is the activation layer on top of my Home Card — turning a price-gate into a relationship."* → easier sell, faster to value, dramatically cheaper, and repositions Naresh internally as the guy who finally monetised a sunk asset.
- **The prototype MUST REFLECT THIS:** onboarding should show "my Home Card" being upgraded/augmented into HomeClub, not replaced. Preserve what's already there.

### PRICING AND IN-STORE VISUAL SYSTEM (already exists — work with it)
- **Green** = normal "1st Price" (also sometimes a yellow "1ST PRICE" flag for stand-out lines).
- **Red** = promotional price, with strike-through original. All promo tickets share a standard template: product name, was/now price, savings amount, barcode, promo valid dates, "ALL PROMOTIONS ARE EXCLUSIVE TO LOYALTY MEMBERS" red band.
- **Our proposed addition:** a third colour — **coral/HC orange** — for "Project Bonus Items" that earn 2× HomeBucks during a member's active 90-day project window. Same template, different colour band. No ops disruption.

### THE COALITION IS ALREADY LIVE IN-STORE (just not unified as a currency)
Photographed evidence of existing partners, all already co-branded with LM:
- **Kandua** — contractor booking ("Need a contractor? Make the smart choice with Kandua" on bathroom endcap; "Need to get your tiles installed? Standard installation fees available" on tile endcap). Already transactional with LM.
- **Coastal Hire** — tool rental ("Need to rent professional tools? We've got you covered with Coastal Hire"). Already co-branded endcap.
- **Mugg & Bean on the Move + Mugg & Bean Bakery** — full destination café with seating for ~40, bakery display, digital menus, positioned near Exit. This is a real dwell-time zone, not an afterthought. Ideal post-shop redemption touchpoint.
- **Cutting & Edging Workshop** — in-store paid service with tiered pricing (10–20 / 20–30 / 30–50 / 50+ pieces). Has its own service counter and Austro edge-banding machinery.
- **Supplier brands with strong in-store presence:** Sensea (bathroom), Triumph (plumbing hardware), Macneil / Solo Sanitaryware (eco bathrooms), Naterial (garden — artificial grass visible), Luxens (paints), Jamm Trading (flooring).

**Lee's specific insight — prototype must show this:** HomeBucks should be earnable AND spendable against **services**, not just products. A homeowner doesn't buy products then rewards — they buy a *project* (tiles + adhesive + toilet + plumber + tool rental + coffee). Our prototype must visibly demonstrate HomeBucks flowing through services, not just SKUs.

### THE ALREADY-OPERATIONAL CUSTOMER PROMISES (tier these)
- **"Buy without hesitation — 3 months to change your mind"** returns promise — local equivalent of France's 12-month no-receipt return. Tier it: NEST 3mo / HOME 6mo / HOMESTEAD 12mo (matching French parent).
- **"Order online 24/7 at www.leroymerlin.co.za"** — e-comm operational. Loyalty must work across online + in-store seamlessly.

### AMBIENT STORE THEATRE (copy our tone to it, don't fight it)
LM already invests in playful retail theatre: neon signage ("Electric Butterfly Flowers", "#PetalPowered", "Pick me UP!"), Edison bulb festoon lighting, muffin-wall mural in Mugg & Bean, April BOGO campaign *"Fix your 'I'll fix it later' this April"*. HomeClub's copy and visual tone should match this playfulness, not override it.

### SIGNAGE / WAYFINDING GAP (opportunity)
Aisle wayfinding is beautifully typeset but entirely static — black-and-white numbered hanging signs (28 Moving boxes/Ladders, 30 Glue/Tape/Hooks, 61 Carpentry, 63 Exterior Doors, etc.). No digital screens, no promo loops, no app prompts, no interactivity. Gamification layer is a genuine net-new opportunity: QR-stickered aisle signs, "Scan this aisle for today's bonus," in-app treasure hunts, aisle-specific mini-challenges.

### SUSTAINABILITY NARRATIVE IS REAL AND VISIBLE
Water tanks displayed outside entrance, eco-ranges visible (Solo Sanitaryware Eco Range with water-saving 3.5L/5L flush; Maldives water-saving toilets; Naterial artificial grass; Luxens paints). This ties directly to CEO Dufourq's three public missions (water + electricity at home / climate comfort / affordable sustainable renovation). **Build "Water Warrior" and "Energy Warrior" badges into the gamification layer** — members who buy eco-products earn these.

### TEN TACTICAL IDEAS FROM THE FIELD (bake these into the prototype where relevant)
1. Coral "2× HomeBucks" price ticket (on top of existing red/green system).
2. QR-coded "scan the aisle" treasure hunts (50–150 HB per challenge).
3. Tiered 3-month returns (NEST 3 / HOME 6 / HOMESTEAD 12).
4. Kandua contractor booking → 5% back as HomeBucks.
5. Coastal Hire tool day as a standard HB redemption option (~800 HB).
6. "Water Warrior" / "Energy Warrior" badges for eco purchases.
7. Mugg & Bean "Project Break" — free weekly filter coffee during an active project window.
8. Post-checkout animated "You earned X HomeBucks today" moment at till.
9. Workshop attendance → 100 HB per completion.
10. Seasonal coalition campaigns ("April Fix-It" → complete a project in April = 500 HB bonus + draw entry for a R50k renovation consultation).

### ABSOLUTE MUSTS IN THE PROTOTYPE AS A RESULT OF THE FIELD VISIT
1. The onboarding flow must show **existing my Home Card members being upgraded into HomeClub**, not signing up fresh. This is our central strategic framing.
2. The Coalition Redeem screen must include **services** (Kandua contractor booking, Coastal Hire tool day, Cutting & Edging Workshop credit), not just product discounts.
3. The "In-store experience" screen must illustrate the **3-colour price ticket system** (green/red/coral) as a mockup — this earns massive credibility because it shows we've been in the store.
4. The gamification layer must include **Water Warrior and Energy Warrior badges** (not just generic DIY badges).
5. The events/experiential redemption screen must include real event types: Decorex, Homemakers Expo, Design Joburg, House and Garden Show.
6. The admin dashboard must include a **"Existing my Home Card base → activated HomeClub members"** conversion metric as a top-line KPI — this is the number Naresh will take to his CEO.

## SYNTHETIC DATA SPEC (ALREADY BUILT — RE-USE)

- 320 fictional HomeClub members
- Seedable RNG (seed = 20260421) so demo is reproducible
- Realistic SA name mix across all language groups (Nguni, Sotho, Afrikaans, Indian, Cape Coloured, English)
- 6 stores: Greenstone, Little Falls, Boksburg, Edenvale, Alberton, Cornubia (KZN — newly launched)
- Tier distribution: 68% NEST / 26% HOME / 6% HOMESTEAD (realistic year-1 skew)
- Project participation: 42% of members actively in a project
- Project type distribution weighted: Paint (32%), Bathroom (18%), Garden (16%), Kitchen (14%), Energy (11%), Water (6%), Deck (3%)
- Spend distribution calibrated to Truth & BrandMapp 2025/6 benchmarks (~R1 800/month per active loyalty member)

## EXISTING DELIVERABLES (FOR CONTEXT — BUILD ON TOP, DON'T DUPLICATE)

1. `Leroy_Merlin_Loyalty_Strategic_Concept.md` — the strategic brain (16 pages)
2. `Leroy_Merlin_Loyalty_OnePager_CMR_Africa.pdf` — polished one-pager for email
3. `HomeClub_Prototype.html` — working mobile + admin dashboard prototype with embedded synthetic data, Chart.js charts, two aesthetic systems (warm cream for member, dark enterprise for admin), CMR Africa logo embedded as base64

## THE ASK — WHAT I WANT YOU TO BUILD

**Build me a self-contained, interactive HomeClub experience that I can send to Naresh as a link (or a zip of static files) that he can play with on his phone or laptop, without any setup on his side.** It should feel like a real product prototype, not a demo — polished enough that he would be proud to forward it to his CEO or CMO.

### Non-negotiables
- **Single-domain static web app.** No backend required. If you use React, ship the built static bundle. Local storage only for any state persistence (no browser APIs that require a server).
- **Works fully offline after first load** — so if Naresh opens it in an airport or on patchy SA mobile data it still works.
- **Mobile-first.** He will open it on his phone first. Desktop view is bonus.
- **CMR Africa branded** (logo files should be extracted from the existing HomeClub_Prototype.html where they're embedded as base64, OR Lee can provide them fresh).
- **All data synthetic and clearly labelled as such** in a subtle footer/watermark — we must never mislead about the status of the data or the partners.
- **Uses the existing aesthetic direction** from HomeClub_Prototype.html: warm cream + coral for the member-facing side, dark Bloomberg-Terminal feel for the admin side. Fraunces display serif + Inter body + JetBrains Mono for data. DO NOT use Space Grotesk, Inter-only, or generic purple-gradient AI aesthetics.

### Interactive experiences to build (in priority order)

**MUST HAVE (core demo):**

1. **Landing / "demo intro" screen** — short CMR Africa branded intro that explains "this is a 10-minute interactive walkthrough of the HomeClub concept for Leroy Merlin SA, prepared for Naresh Rocharam. All data shown is synthetic. Tap to begin." Include a short skip option for users who already know what they're doing.

2. **Walkable mobile app prototype** — clickable screens, not just static images. At minimum:
   - Sign-up/onboarding flow (3 screens max, should show how we activate the *already-existing* LM app member into a HomeClub member — critical framing)
   - Home screen with tier card, HomeBucks balance, active project card
   - Project Engine screen (scan a barcode → start a 90-day project → see 2× HB accelerator)
   - Gamification screen (badges, streak, challenges)
   - Coalition redeem screen (three partner tiles, redemption options)
   - A "events" screen showing House & Garden show tickets, Decorex, Design Joburg as redemption options (use the field insight)

3. **Walkable admin dashboard** — Naresh's view. At minimum:
   - KPI overview (active members, HB issued, avg spend, coalition cross-spend)
   - Interactive charts (member growth, earn-vs-burn by partner, store performance, project categories)
   - Member explorer — let Naresh click through the 320 synthetic members and see individual profiles
   - One **"CMR Africa Weekly Insight"** callout panel on top — the thing TLC and Truth can't deliver — which shows a synthetic behavioural insight like *"Project-active members spend 3.4× more per week than non-project members"*

**SHOULD HAVE (depth that sets us apart):**

4. **A "Mystery Shopper" screen** — mocked-up sample of a creative visual mystery shop report from one of the 6 LM stores (not 60 pages of text — more Instagram-carousel / sketchbook format). This addresses Naresh's second ask.

5. **An "In-store experience" tab showing the red/green/coral pricing layer** — a simple illustration of how we'd layer a "2× HomeBucks" coral colour on top of LM's existing red-promo / green-normal pricing without disrupting ops. This earns huge credibility because it shows we've actually been to the store.

6. **A small "Why CMR Africa" panel** accessible from the admin dashboard footer — three short bullets positioning us upstream of TLC and Truth.

**NICE TO HAVE (if time permits):**

7. A narrated walkthrough mode — a "Play Demo" button that auto-advances through the key screens every 8 seconds with a short caption explaining each.

8. A minimal gamified in-store "DIY Bingo" card prototype to show the gamification-in-aisles concept from the store visit.

### Build quality bar
- Every interactive element should have hover/tap feedback
- Animations should feel deliberate, not default — use CSS transforms and transitions, not blanket fade-ins on everything
- Charts should be interactive (Chart.js is already in the existing prototype and works well)
- No Lorem Ipsum — every piece of copy should be real
- The whole experience should take Naresh 8–12 minutes to walk through fully

### Tech recommendations (choose what suits you)
- **Option A (simpler):** Vanilla HTML/CSS/JS as one large file, similar to the existing HomeClub_Prototype.html. Easiest to host and share.
- **Option B (richer):** A Vite + React SPA, built to a static bundle. More maintainable but needs a build step.
- **Option C (best of both):** A small multi-page static site with vanilla JS — gives natural URL-based navigation Naresh can share specific links from.

I'll trust your judgement on which to pick, but please pick ONE and commit.

### Deployment target
Final output should be a folder of static files I can either:
- Host on Vercel/Netlify/Cloudflare Pages in one click
- OR zip and send to Naresh as a downloadable archive that opens locally by double-clicking `index.html`

Please include a short `README.md` explaining how to deploy and how to edit content (so my team at CMR Africa can update copy later without touching the engine).

## GATES — STOP AND ASK ME BEFORE PROCEEDING PAST THESE

1. Before writing any code, **confirm you've read this whole brief and flag anything ambiguous.** If you think any strategic decision is wrong, push back before building — don't silently reinterpret.
2. Once you've decided tech stack (A / B / C above), **tell me before you commit to it.**
3. After you've built the mobile app flow and the admin dashboard, **show me both before building the Mystery Shopper and in-store pricing screens** — I may want to tweak direction based on what I see.

## DO NOT
- Do not invent new tiers, new pillar brands, new currency names, or new partners. Work with what's decided above.
- Do not add Decathlon and Mugg & Bean as "LIVE" — they are "PILOT — in discussion." This is honest-but-aspirational.
- Do not copy TLC or Truth positioning. Our wedge is insight-upstream.
- Do not use stock AI aesthetics (Inter-everywhere, purple gradients, generic card grids).
- Do not make up numbers for the SA loyalty market. Use what's in the Strategic Concept doc (85% of SA adults in loyalty programmes, 10.4 programmes per consumer, zero Discovery-grade DIY programmes) with proper attribution to Truth & BrandMapp 2025/6.

## START HERE

Please:
1. Confirm you've read and understood the brief
2. Tell me your tech stack choice and why
3. Sketch the file/folder structure you'll create
4. Then proceed to build

I'm available to answer questions at any gate.

— Lee, CMR Africa
