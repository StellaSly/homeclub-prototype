/* ============================================================================
   HomeClub synthetic data layer.
   All data is fictional, seeded for reproducibility (seed = 20260421).
   Calibrated to Truth & BrandMapp 2025/6 benchmarks (~R1,800/month per
   active loyalty member).
   ============================================================================ */

(function(global){
  'use strict';

  // Mulberry32 — deterministic across browsers
  function mulberry32(seed){
    return function(){
      let t = seed += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  const rng = mulberry32(20260421);
  const pick = arr => arr[Math.floor(rng() * arr.length)];
  const pickWeighted = arr => {
    const r = rng();
    let acc = 0;
    for (const x of arr) { acc += (x.weight ?? x.pct); if (r < acc) return x; }
    return arr[arr.length - 1];
  };
  const rand = (min, max) => Math.floor(rng() * (max - min + 1)) + min;
  const randDaysAgo = (maxDays = 90) => {
    const d = new Date();
    d.setDate(d.getDate() - rand(0, maxDays));
    return d;
  };
  function fmtDaysAgo(d){
    const days = Math.floor((Date.now() - d.getTime()) / 86400000);
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return days + 'd ago';
    if (days < 30) return Math.floor(days / 7) + 'w ago';
    return Math.floor(days / 30) + 'mo ago';
  }

  // — Name pools — realistic SA mix across language groups —
  const FIRST_NAMES = [
    'Thabo','Lerato','Sipho','Naledi','Nomvula','Bongani','Mpho','Zinhle',
    'Tumi','Kagiso','Refilwe','Sibusiso','Lwazi','Palesa','Themba','Nokuthula',
    'Khaya','Boitumelo','Sandile','Ntombi','Mandla','Gugu','Zanele','Xolani',
    'James','Sarah','Pieter','Anel','Johan','Marlene','Riaan','Christo',
    'Ravi','Priya','Ashwin','Nisha','Reshma','Suresh','Karthik','Anika',
    'Abdul','Fatima','Yusuf','Aisha','Tariq','Zarah','Ibrahim','Aaliyah',
    'David','Jessica','Andrew','Megan','Ryan','Chloe','Daniel','Emily',
    'Sizwe','Zandile','Mandisa','Lucky','Precious','Nelisiwe','Bheki','Phumzile'
  ];
  const LAST_NAMES = [
    'Mkhize','Nkosi','Dlamini','Khumalo','Zulu','Mthembu','Ndlovu','Sithole',
    'Mokoena','Maluleke','Mabaso','Khoza','Mahlangu','Tshabalala','Sibiya','Ngcobo',
    'van der Merwe','du Plessis','Botha','Pretorius','Steyn','Coetzee','de Wet','Smit',
    'Naidoo','Pillay','Govender','Reddy','Chetty','Singh','Patel','Moodley',
    'Petersen','Adams','Williams','Daniels','Jacobs','Solomons','Abrahams','Davids',
    'Smith','Jones','Brown','Wilson','Taylor','Roberts','Anderson','Thompson'
  ];

  const STORES = [
    { name: 'Fourways',       weight: 0.22 },
    { name: 'Greenstone',     weight: 0.20 },
    { name: 'Little Falls',   weight: 0.17 },
    { name: 'Boksburg',       weight: 0.14 },
    { name: 'Edenvale',       weight: 0.14 },
    { name: 'Cornubia (KZN)', weight: 0.13 }
  ];

  const PROJECT_TYPES = [
    { name: 'Paint a room',         weight: 0.32, icon: 'paint' },
    { name: 'Bathroom renovation',  weight: 0.18, icon: 'bath'  },
    { name: 'Garden makeover',      weight: 0.16, icon: 'plant' },
    { name: 'Kitchen upgrade',      weight: 0.14, icon: 'kitchen' },
    { name: 'Energy resilience',    weight: 0.11, icon: 'bolt'  },
    { name: 'Water resilience',     weight: 0.06, icon: 'drop'  },
    { name: 'Build a deck',         weight: 0.03, icon: 'deck'  }
  ];

  const TIERS = [
    { name: 'NEST',      pct: 0.68, avgSpend: 1120, color: '#B89B6E' },
    { name: 'HOME',      pct: 0.26, avgSpend: 3840, color: '#FF7847' },
    { name: 'HOMESTEAD', pct: 0.06, avgSpend: 9450, color: '#E5B447' }
  ];

  // — 12 hand-crafted spotlight profiles, as briefed by Lee —
  const SPOTLIGHT = [
    {
      id: 'HC10001', name: 'Thandi Mokoena', initials: 'TM',
      persona: 'First-time homeowner', tier: 'NEST', store: 'Fourways',
      project: 'Paint a room', projectDay: 14, hbBalance: 920, totalSpend: 3400,
      joinedDays: 46,
      bio: 'Bought her first apartment in Bryanston in Feb. Started a paint project this month — picking up brushes, sugar soap and a drop sheet. Never been to LM before my Home Card; came for the promo pricing, stayed for the Saturday paint workshop.',
      insight: 'Textbook activation story — the exact journey LM is already producing at scale but not personalising. HomeClub would send her the coral-ticket paint accelerator and flag her for the next Colour Confidence workshop.'
    },
    {
      id: 'HC10002', name: 'Pieter van der Merwe', initials: 'PV',
      persona: 'Building contractor', tier: 'HOMESTEAD', store: 'Boksburg',
      project: 'Bathroom renovation', projectDay: 67, hbBalance: 4280, totalSpend: 48200,
      joinedDays: 182, isProPaid: true,
      bio: 'Runs a 6-person fit-out crew in the East Rand. Spends R8–12k a week on tiles, adhesive, sanitaryware and rental tools. Already pays for Coastal Hire deposits.',
      insight: 'A pro on a consumer programme. Biggest unlock: matching him into Kandua for leads, giving him tax-invoice exports, and letting him stack HB for his staff. 4× the spend of our average HOMESTEAD.'
    },
    {
      id: 'HC10003', name: 'Nisha Naidoo', initials: 'NN',
      persona: 'Woman DIYer', tier: 'HOME', store: 'Cornubia (KZN)',
      project: 'Garden makeover', projectDay: 31, hbBalance: 1640, totalSpend: 9800,
      joinedDays: 118,
      bio: 'Durban-based mechanical engineer. Does her own weekend projects — currently rebuilding her side patio with Naterial artificial grass and Luxens paint. Follows @leroymerlin_za religiously.',
      insight: 'A content creator in the wild. Invite her to the "Homeclub Voices" advocacy tier — 3 creators per store, small honorarium in HB, early access to seasonal ranges. Cheapest media LM can buy.'
    },
    {
      id: 'HC10004', name: 'Sipho and Lerato Dlamini', initials: 'SD',
      persona: 'Family upgrader', tier: 'HOME', store: 'Greenstone',
      project: 'Kitchen upgrade', projectDay: 42, hbBalance: 2110, totalSpend: 14800,
      joinedDays: 94,
      bio: 'Married couple, two kids. Replacing kitchen cabinets and counters before their third baby arrives in October. Use the Cutting & Edging Workshop heavily; ate at Mugg & Bean the last three visits.',
      insight: 'Perfect coalition archetype. 63% of their project visits pair a hardware aisle run with a M&B sit-down. The Coffee-While-You-Shop bundle isn\'t just cute — it\'s already happening.'
    },
    {
      id: 'HC10005', name: 'Ashwin Pillay', initials: 'AP',
      persona: 'Energy resilience buyer', tier: 'HOMESTEAD', store: 'Little Falls',
      project: 'Energy resilience', projectDay: 21, hbBalance: 3900, totalSpend: 31200,
      joinedDays: 201, isProPaid: true,
      bio: 'Post-loadshedding pragmatist. Has bought an inverter, batteries, solar panels and LED retrofits over the last 18 months. Now on LED sensor lighting for the driveway.',
      insight: 'Already earning the Energy Warrior badge in our model. LM\'s sustainability narrative from Dufourq lands perfectly with this segment — treat them as the tip of the spear for eco-range messaging.'
    },
    {
      id: 'HC10006', name: 'Fatima Abrahams', initials: 'FA',
      persona: 'Water resilience buyer', tier: 'HOME', store: 'Fourways',
      project: 'Water resilience', projectDay: 58, hbBalance: 1480, totalSpend: 11600,
      joinedDays: 84,
      bio: 'Cape Town transplant who got taught by Day Zero. Runs two 2500L Jojo tanks and is now installing greywater diversion. Buys the Solo Sanitaryware Eco Range by default.',
      insight: 'Water Warriors skew female, skew 35-54, and are the highest NPS segment in our synthetic model. Put them on the cover of anything — they are buyers AND evangelists.'
    },
    {
      id: 'HC10007', name: 'Themba Ngcobo', initials: 'TN',
      persona: 'Paying HOMESTEAD', tier: 'HOMESTEAD', store: 'Greenstone',
      project: 'Build a deck', projectDay: 11, hbBalance: 5200, totalSpend: 62400,
      joinedDays: 245, isProPaid: true,
      bio: 'Paid his R299 HOMESTEAD fee day one. Built a wine cellar, re-did the garden, now building an entertainment deck. The kind of member whose LTV pays for 40 NEST members.',
      insight: 'The 6% who pay for HOMESTEAD deliver 34% of gross margin in our synthetic model. Don\'t dilute their perks to reach NEST — the math is the opposite of what intuition says.'
    },
    {
      id: 'HC10008', name: 'Megan Roberts', initials: 'MR',
      persona: 'Lapsed member (churn risk)', tier: 'HOME', store: 'Edenvale',
      project: null, projectDay: null, hbBalance: 380, totalSpend: 2400,
      joinedDays: 340, isLapsed: true, lastVisitDaysAgo: 74,
      bio: 'Joined enthusiastically 11 months ago, did a bathroom paint refresh, then dropped off. Still gets LM emails, opens none. HB balance quietly decaying.',
      insight: 'Lapsed-member reactivation is where HomeClub beats points-only programmes. One targeted "your unfinished project" nudge with a 500 HB booster reactivates 14% of this segment in our model.'
    },
    {
      id: 'HC10009', name: 'Bongani Ndlovu', initials: 'BN',
      persona: 'Cornubia KZN — new market', tier: 'NEST', store: 'Cornubia (KZN)',
      project: 'Paint a room', projectDay: 7, hbBalance: 180, totalSpend: 1200,
      joinedDays: 18,
      bio: 'Umhlanga resident, early adopter of the newly-launched Cornubia store. His first visit was opening week. Excited about the brand but unsure what LM really is vs. a Builders Warehouse.',
      insight: 'Cornubia members in weeks 1-4 have 2.1× the "first-project-started" rate of Gauteng stores. Opening-market energy is a real thing — harvest it with a Coastal-only welcome bonus.'
    },
    {
      id: 'HC10010', name: 'Boitumelo Tshabalala', initials: 'BT',
      persona: 'Workshop super-attender', tier: 'HOME', store: 'Greenstone',
      project: 'Kitchen upgrade', projectDay: 49, hbBalance: 2400, totalSpend: 7800,
      joinedDays: 165,
      bio: 'Attends almost every Saturday workshop — tiling, decking, colour theory, planter boxes. Pays full price for workshop kits. Meets her friends at M&B before each class.',
      insight: 'Workshops aren\'t a cost centre, they\'re an acquisition channel. Her attendance preceded 3 of her 4 projects. Double workshop supply, don\'t halve it.'
    },
    {
      id: 'HC10011', name: 'Ryan Petersen', initials: 'RP',
      persona: 'High-browse low-buy', tier: 'NEST', store: 'Fourways',
      project: null, projectDay: null, hbBalance: 40, totalSpend: 580,
      joinedDays: 56,
      bio: 'Comes in almost weekly. Walks every aisle. Leaves with paint tape and one bottle of wood glue. A classic "intender" — planning a big project, not yet pulling the trigger.',
      insight: 'High-intent browsers are pre-purchase gold. An in-app "you\'ve been near this Bathroom aisle 4 times this month — want to scan the Project Engine?" nudge converts them at 27% in our model.'
    },
    {
      id: 'HC10012', name: 'Zandile Khumalo', initials: 'ZK',
      persona: 'Mugg & Bean cross-shopper', tier: 'HOME', store: 'Fourways',
      project: 'Garden makeover', projectDay: 38, hbBalance: 1760, totalSpend: 8400,
      joinedDays: 128,
      bio: 'Treats the LM-M&B combo as her Saturday morning ritual. Coffee first, then the garden aisles, then flowers near the entrance. Earns M&B HB almost weekly.',
      insight: 'This is the coalition\'s most important archetype — the M&B-first shopper who then spends at LM. Currently invisible to both partners. Shared identity = shared wallet share.'
    }
  ];

  // — Generate the full 320-member corpus.
  // The first 12 slots are the spotlight profiles (already fleshed out).
  // The remaining 308 are lighter records. Seed ensures reproducibility.
  const MEMBERS = [...SPOTLIGHT];

  for (let i = SPOTLIGHT.length; i < 320; i++) {
    const tier = pickWeighted(TIERS);
    const inProject = rng() < 0.42;
    const proj = inProject ? pickWeighted(PROJECT_TYPES) : null;
    const baseSpend = tier.avgSpend * (0.5 + rng() * 1.4);
    const totalSpend = Math.round(baseSpend);
    const fn = pick(FIRST_NAMES);
    const ln = pick(LAST_NAMES);
    const lastVisit = randDaysAgo(120);
    const isLapsed = (Date.now() - lastVisit.getTime()) / 86400000 > 60;

    MEMBERS.push({
      id: 'HC' + String(10013 + (i - SPOTLIGHT.length)),
      name: fn + ' ' + ln,
      initials: fn[0] + ln[0],
      tier: tier.name,
      store: pickWeighted(STORES).name,
      project: proj ? proj.name : null,
      projectDay: proj ? rand(1, 89) : null,
      hbBalance: Math.round(totalSpend * (0.04 + rng() * 0.12)),
      totalSpend: totalSpend,
      lastVisit: lastVisit,
      lastVisitLabel: fmtDaysAgo(lastVisit),
      isLapsed: isLapsed
    });
  }

  // — Pre-computed aggregates (for dashboard) —
  const tierBuckets = {};
  TIERS.forEach(t => tierBuckets[t.name] = { count: 0, totalSpend: 0, totalHB: 0 });
  MEMBERS.forEach(m => {
    tierBuckets[m.tier].count++;
    tierBuckets[m.tier].totalSpend += m.totalSpend;
    tierBuckets[m.tier].totalHB    += m.hbBalance;
  });

  const storeCounts = {};
  STORES.forEach(s => storeCounts[s.name] = { members: 0, projects: 0, totalSpend: 0 });
  MEMBERS.forEach(m => {
    storeCounts[m.store].members++;
    if (m.project) storeCounts[m.store].projects++;
    storeCounts[m.store].totalSpend += m.totalSpend;
  });

  const projCounts = {};
  PROJECT_TYPES.forEach(p => projCounts[p.name] = 0);
  MEMBERS.forEach(m => { if (m.project) projCounts[m.project]++; });

  // — Expose —
  global.HomeClubData = {
    rng, pick, pickWeighted, rand, fmtDaysAgo,
    FIRST_NAMES, LAST_NAMES, STORES, PROJECT_TYPES, TIERS,
    SPOTLIGHT, MEMBERS,
    tierBuckets, storeCounts, projCounts,
    // Top-line numbers baked once
    topline: {
      totalMembers: MEMBERS.length,
      activeProjects: MEMBERS.filter(m => m.project).length,
      hbIssuedThisMonth: 847000,
      hbRedeemedThisMonth: 456000,
      avgMonthlySpend: 1820,                          // R — calibrated to Truth & BrandMapp 2025/6
      myHomeCardBase: 38400,                          // base of existing my Home Card members (illustrative)
      homeclubActivated: 320,                         // activated in pilot wave
      conversionRate: 0.83                            // 83% of pilot-targeted converted
    }
  };
})(window);
