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
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbzDRdMVu0JBRNl6sefcvShMXHzABe1tNTGmn_Kt4orO7IZd1C6ZmLmPCAdX4HzQwMqn/exec",

  // ── ADMIN ──────────────────────────────────────────────────────────────
  // Your email — reply-to address on all outgoing lab emails.
  ADMIN_EMAIL: "Yashveer.Soni@colorado.edu",

  // ── CHORE ASSIGNMENTS ──────────────────────────────────────────────────
  // Update the people arrays when reshuffling (~every 3 months).
  // The IDs (left side) must not be renamed — they link to the dashboard.
  //
  // NOTE: consolidated on Jul 2026 — old "ln2", "distilled", and "recycling"
  // chores were merged into "carboys-water" and "facilities" below.
  // Assignments for the two new chores are PENDING until the roster is
  // reconfirmed and the reshuffle is run.
  ASSIGNMENTS: {
    "autoclave":      ["Wilbert", "Maureen"],
    "inventory":      ["Sujith"],
    "incubator":      ["Ankit", "Lorelei"],
    "aliquots":       ["Kayla", "Liz"],
    "carboys-water":  ["Lidia", "Blayne"],
    "facilities":     ["Maria", "Yash"]
  },

  // ── LAB MEMBERS ────────────────────────────────────────────────────────
  // Full roster with emails. Used for Thursday reminder emails.
  // To add someone: copy a line, update name + email, save.
  // To remove someone: delete their line, save.
  MEMBERS: [
    { name: "Yash",     email: "Yashveer.Soni@colorado.edu" },
    { name: "Blayne",   email: "Blayne.Sarazin@Colorado.EDU" },
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
  // Staggered cleaning cycle: 2 units per week over 4 weeks, run every
  // March, July, and November. Week 1 begins the first Monday of that month.
  // Each pair has assigned people (both must check in). Weeks 1–3 share one
  // crew across both units; Week 4 splits crews per-unit (#7 / #8) since
  // it carries extra people this cycle.
  INCUBATORS: {
    units: ["#1","#2","#3","#4","#5","#6","#7","#8"],
    scheduleReady: true,
    activeMonths: [3, 7, 11],   // March, July, November
    pairs: [
      { week: 1, units: ["#1", "#2"], people: ["Maria", "Ankit"] },
      { week: 2, units: ["#3", "#4"], people: ["Sujith", "Maureen"] },
      { week: 3, units: ["#5", "#6"], people: ["Kayla", "Lidia"] },
      { week: 4, units: ["#7", "#8"],
        unitPeople: {
          "#7": ["Liz", "Yash", "Lorelei"],
          "#8": ["Wilbert", "Blayne"]
        }
      }
    ]
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
      name: "Aliquots",
      icon: "🧊",
      blurb: "Restock frozen reagents so the lab never runs short mid-experiment.",
      steps: [
        "Restock frozen aliquots: FBS Prem./Prem. Sel. (25 mL), P/S 100× (10 mL), Amp. B 100× (10 mL), Trypsin (10 mL).",
        "Initial the log for each restock."
      ]
    },
    {
      id: "carboys-water",
      name: "Carboys, Distilled Water & Water Bath",
      icon: "💧",
      blurb: "Keep the lab's water systems and cleaning carboys topped up and running.",
      steps: [
        "Refill the distilled-water carboy and run the tabletop distiller; initial for each run.",
        "Clean the Bio/Chem water bath monthly.",
        "Check/replenish carboys: 70% EtOH, non-sterile PBS, Alconox (10 g/L)."
      ]
    },
    {
      id: "facilities",
      name: "Facilities",
      icon: "🧹",
      blurb: "Cover the lab-wide upkeep tasks that keep everything running smoothly.",
      steps: [
        "Maintain two LN2 tanks — always keep one full backup. Follow the ordering instructions on the Lab Drive and initial the log for each fill.",
        "TC hood & floor cleaning — monthly. Blower must be on if the sash is open.",
        "Collect lab coats on Tuesdays for laundry.",
        "Recycling: main hall (cardboard, styrofoam, pipette-tip boxes) · loading dock (metal & misc.) · D-wing hall (paper & plastic film).",
        "Dispose puncture-proof waste at the loading-dock dumpster."
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
