/**
 * ============================================================
 *  LAB CHORE DASHBOARD — CONFIGURATION
 *  CU Boulder · Tissue Engineering Lab
 * ============================================================
 *
 *  This is the ONLY file you need to edit for routine updates.
 *  No coding knowledge required — just update the values below.
 *
 *  When to edit this file:
 *    Roster changes (joins / leaves)   → update MEMBERS
 *    Chore reshuffle (~every 3 months) → update ASSIGNMENTS
 *    Incubator schedule finalised      → update INCUBATORS
 *    New Apps Script deployment        → update APPS_SCRIPT_URL
 *
 *  After editing, upload the new config.js to GitHub.
 *  The dashboard auto-updates within ~1 minute. That's it.
 * ============================================================
 */

const CONFIG = {

  // ── APPS SCRIPT URL ────────────────────────────────────────────────────
  // Your deployed Apps Script Web App URL (ends in /exec).
  // Only needs changing if you create a brand-new deployment.
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxA87ZptYoSttgFQBGFJdj2td--KLRWAnHwlVX2tvuWOxXApMofQP7QpxhSpM2SNg7A/exec",

  // ── ADMIN ──────────────────────────────────────────────────────────────
  // Your email — reply-to address on all outgoing lab emails.
  ADMIN_EMAIL: "Yashveer.Soni@colorado.edu",

  // ── CHORE ASSIGNMENTS ──────────────────────────────────────────────────
  // Update the people arrays when reshuffling (~every 3 months).
  // The IDs (left side) must not be renamed — they link to the dashboard.
  ASSIGNMENTS: {
    "autoclave":  ["Kayla", "Liz"],
    "ln2":        ["Lorelei", "Ankit"],
    "inventory":  ["Blayne", "Maria"],
    "distilled":  ["Daniel E", "Lidia"],
    "incubator":  ["Yash", "Maureen"],
    "aliquots":   ["Sujith", "Daniel M"],
    "recycling":  ["Wilbert"]
  },

  // ── LAB MEMBERS ────────────────────────────────────────────────────────
  // Full roster with emails. Used for Thursday reminder emails.
  // To add someone: copy a line, update name + email, save.
  // To remove someone: delete their line, save.
  MEMBERS: [
    { name: "Yash",     email: "Yashveer.Soni@colorado.edu" },
    { name: "Blayne",   email: "Blayne.Sarazin@Colorado.EDU" },
    { name: "Daniel E", email: "Daniel.Estrin@colorado.edu" },
    { name: "Daniel M", email: "Daniel.Martins@colorado.edu" },
    { name: "Liz",      email: "Elizabeth.George-1@colorado.edu" },
    { name: "Kayla",    email: "kayla.castillo-aguilar@colorado.edu" },
    { name: "Sujith",   email: "SujithChanderReddy.Kollampally@colorado.edu" },
    { name: "Lidia",    email: "Lidia.BallelliHosa@colorado.edu" },
    { name: "Lorelei",  email: "Lorelei.Krieg@colorado.edu" },
    { name: "Maria",    email: "MariaFernanda.MattosSerafim@colorado.edu" },
    { name: "Maureen",  email: "Maureen.Haynes@colorado.edu" },
    { name: "Wilbert",  email: "Wilbert.Chang@colorado.edu" },
    { name: "Ankit",    email: "Ankit.Gangrade@colorado.edu" }
  ],

  // ── INCUBATORS ─────────────────────────────────────────────────────────
  // Set scheduleReady: true and fill in schedule once the lab settles on a cadence.
  // frequencyWeeks: how often each unit should be cleaned (e.g. 4 = monthly).
  INCUBATORS: {
    units: ["#1","#2","#3","#4","#5","#6","#7","#8"],
    scheduleReady: false,
    schedule: []
    // Example once ready:
    // schedule: [
    //   { unit: "#1", frequencyWeeks: 4, lastCleaned: "2026-06-01" },
    //   { unit: "#2", frequencyWeeks: 4, lastCleaned: "2026-06-01" },
    //   ...
    // ]
  },

  // ── CHORE DETAILS ──────────────────────────────────────────────────────
  // Descriptions and step-by-step instructions shown in the expandable panels.
  // Edit these if chore instructions or descriptions change.
  CHORES: [
    {
      id: "autoclave",
      name: "Autoclave",
      icon: "🧪",
      blurb: "Sterilize tools, water, and waste so the lab always has clean consumables ready.",
      steps: [
        "Load tools, boxes, and sharps containers in blue autoclave pouches.",
        "Run distilled-water bottles (NOT deionized) — tape them up before the cycle.",
        "Autoclave waste; move full bags to the entryway and replace the bag.",
        "Refill metal canisters with glass pipettes, tape, and autoclave."
      ]
    },
    {
      id: "ln2",
      name: "LN2 & Water Bath",
      icon: "❄️",
      blurb: "Keep both liquid-nitrogen tanks supplied and the water baths clean.",
      steps: [
        "Maintain two LN2 tanks — always keep one full backup.",
        "Follow the LN2 ordering instructions on the Lab Drive; initial the log for each fill.",
        "Clean the Bio/Chem water bath monthly."
      ]
    },
    {
      id: "inventory",
      name: "Inventory",
      icon: "📦",
      blurb: "Put away deliveries and keep the lab cabinets stocked.",
      steps: [
        "Put away inventory as it's received.",
        "Restock supplies in the lab cabinets (map on the back of the office door)."
      ]
    },
    {
      id: "distilled",
      name: "Distilled Water & Facilities",
      icon: "💧",
      blurb: "Keep distilled water flowing and shared spaces clean.",
      steps: [
        "Refill the distilled-water carboy and run the tabletop distiller; initial for each run.",
        "TC hood & floor cleaning — monthly. Blower must be on if the sash is open.",
        "Collect lab coats on Tuesdays for laundry."
      ]
    },
    {
      id: "incubator",
      name: "Incubator Vitals",
      icon: "🌡️",
      blurb: "Watch the numbers that keep the cells alive.",
      steps: [
        "Check CO₂ level of all incubators; by Friday, confirm two full backup tanks.",
        "Check the water pan of every incubator.",
        "When refilling, add Aquaclear to match the Pantone reference color."
      ]
    },
    {
      id: "aliquots",
      name: "Aliquots & Waste",
      icon: "☣️",
      blurb: "Restock frozen reagents and clear puncture-proof waste.",
      steps: [
        "Restock frozen aliquots: FBS Prem./Prem. Sel. (25 mL), P/S 100× (10 mL), Amp. B 100× (10 mL), Trypsin (10 mL).",
        "Initial the log for each restock.",
        "Dispose puncture-proof waste at the loading-dock dumpster."
      ]
    },
    {
      id: "recycling",
      name: "Recycling & Carboys",
      icon: "♻️",
      blurb: "Run recycling routes and keep the cleaning carboys topped up.",
      steps: [
        "Main hall: corrugated cardboard, styrofoam, pipette-tip boxes.",
        "Loading dock: metal & misc. · D-wing hall: paper & plastic film.",
        "Check/replenish carboys: 70% EtOH, non-sterile PBS, Alconox (10 g/L)."
      ]
    }
  ],

  // ── ALWAYS ─────────────────────────────────────────────────────────────
  ALWAYS: [
    "Dispose of your waste in the right container, tag it, and submit the tag to the box at SAA (D371A).",
    "Clean tools you've used and put them in blue autoclave pouches to be re-sterilized.",
    "If a biohazard/chemical sharps container is full — autoclave, tag, and submit a waste tag to EH&S.",
    "Put away glassware you've used and cleaned; refill autoclave water bottles with distilled water.",
    "See an alarm or empty CO₂? Take the lead on fixing it, or coordinate someone who can."
  ]

};
