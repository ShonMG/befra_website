import engineeringAbstract from "@/assets/engineering-abstract.png";
import geothermalPipes     from "@/assets/geothermal-pipes.png";
import airCon              from "@/assets/airConditioning.jpeg";
import solar1              from "@/assets/solar.jpeg";
import building1           from "@/assets/building.jpeg";
import mechanical1         from "@/assets/mechanical.jpeg";

export interface BlogPost {
  slug:        string;
  title:       string;
  publishedAt: string;
  excerpt:     string;
  coverImage:  string;
  body:        BlogBlock[];
}

export interface BlogBlock {
  type: "paragraph" | "heading" | "subheading" | "image" | "list";
  text?:  string;
  src?:   string;
  alt?:   string;
  items?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug:        "25-years-of-engineering-excellence",
    title:       "25 Years of Engineering Excellence: The Befra Story",
    publishedAt: "2024-06-01",
    excerpt:     "From humble beginnings in 1998 to becoming a trusted partner of the United Nations and leading hospitals across Kenya — here is how Befra Engineering built its reputation one project at a time.",
    coverImage:  engineeringAbstract,
    body: [
      { type: "paragraph", text: "When Befra Engineering Services began operations in 1998, the team had a single ambition: to deliver engineering works that clients could stake their reputations on. Twenty-five years later, that ambition has translated into a portfolio spanning geothermal power plants, refugee camp cold chains, hospital mechanical systems, and solar-powered agricultural facilities." },
      { type: "heading",   text: "From Sole Trader to Limited Company" },
      { type: "paragraph", text: "The business operated for over a decade before formally incorporating as a Limited company in 2015 under the Registration of Business Names Act (Cap 499, Section 14). Incorporation was a deliberate step — it opened doors to larger institutional contracts and reinforced the governance standards the team had already been applying informally." },
      { type: "heading",   text: "Earning UN Vendor Status" },
      { type: "paragraph", text: "Registration on the United Nations Global Marketplace (UNGM) under vendor number 362091 marked a turning point. It validated Befra's compliance with international procurement standards and led directly to the UNHCR maintenance contract — an ongoing engagement since August 2012 covering Kakuma, Dadaab, Nairobi, and Alinjugur camps." },
      { type: "heading",   text: "What the Next 25 Years Look Like" },
      { type: "paragraph", text: "Befra is investing in solar and renewable energy capabilities, expanding its fabrication division, and building the systems needed to take on larger EPC (Engineering, Procurement, and Construction) contracts. The foundation built over 25 years makes that ambition credible." },
    ],
  },
  {
    slug:        "hvac-maintenance-refugee-camps",
    title:       "Keeping Cold Chains Alive in Kenya's Refugee Camps",
    publishedAt: "2024-05-10",
    excerpt:     "Maintaining refrigeration and air conditioning systems across Kakuma, Dadaab, and Alinjugur camps presents unique logistical challenges. Here is how Befra Engineering has sustained these critical systems since 2012.",
    coverImage:  airCon,
    body: [
      { type: "paragraph", text: "Refrigeration failure in a refugee camp is not an inconvenience — it can mean spoiled medicine, unsafe food, and real harm to vulnerable populations. Since August 2012, Befra Engineering has held the UNHCR maintenance contract for air conditioning and refrigeration systems across Kakuma, Dadaab, Nairobi, and Alinjugur facilities." },
      { type: "heading",   text: "The Logistical Reality" },
      { type: "paragraph", text: "Kakuma is 700 kilometres from Nairobi. Dadaab is further. Getting qualified technicians, replacement parts, and specialist gases to remote sites on short notice requires planning, supplier relationships, and contingency stock that most contractors underestimate." },
      { type: "heading",   text: "Preventive Over Reactive" },
      { type: "paragraph", text: "Befra's approach is built around preventive maintenance schedules rather than reactive call-outs. Regular cleaning of condensers and evaporators, gas level checks, insulation inspections, and pressure switch calibrations catch failures before they happen — which in a remote site context is the only viable strategy." },
      { type: "list", items: [
        "Scheduled condenser and evaporator cleaning",
        "Refrigerant gas monitoring and recharging",
        "Replacement of liquid line filter driers",
        "Insulation integrity checks",
        "Control panel and expansion valve calibration",
      ]},
      { type: "paragraph", text: "The contract with UNHCR has been renewed continuously since 2012 — the clearest possible signal that the approach is working." },
    ],
  },
  {
    slug:        "geothermal-fabrication-olkaria",
    title:       "Heavy Fabrication at Africa's Largest Geothermal Plant",
    publishedAt: "2024-04-18",
    excerpt:     "Olkaria Geothermal Power Plant in Naivasha is one of Africa's most significant energy assets. Befra Engineering has been delivering fabrication and maintenance works there since 2012 for OR-Power 4 Inc.",
    coverImage:  geothermalPipes,
    body: [
      { type: "paragraph", text: "The Olkaria geothermal field in Naivasha sits atop one of the most productive geothermal resources on the continent. The steam that rises from the earth here powers a significant portion of Kenya's national grid. Working in this environment demands engineering discipline that goes well beyond standard commercial projects." },
      { type: "heading",   text: "What the Work Involves" },
      { type: "paragraph", text: "Befra's contract with OR-Power 4 Inc covers heavy fabrication and maintenance works — steel structures, pipe systems, and equipment supports operating under high temperature and pressure conditions. Tolerances are tight, materials are specialist, and the consequences of error are severe." },
      { type: "heading",   text: "Safety as Non-Negotiable" },
      { type: "paragraph", text: "Geothermal sites operate under strict safety regimes. Befra's 100% safety compliance record is not a marketing claim — it is a prerequisite for continued access to sites like Olkaria. Every technician deployed there is briefed on site-specific hazards, and works are conducted under permit-to-work systems that leave nothing to chance." },
      { type: "image",     src: geothermalPipes, alt: "Geothermal pipes at Olkaria" },
      { type: "paragraph", text: "The Olkaria engagement has been one of the most technically demanding in Befra's portfolio — and one of the most formative. The standards learned there have been applied to every subsequent industrial project." },
    ],
  },
  {
    slug:        "solar-powered-cooling-kirinyaga",
    title:       "Solar-Powered Egg Cooling for Kirinyaga County Farmers",
    publishedAt: "2024-03-05",
    excerpt:     "A solar-powered thermos egg cooling system for Kiaga Poultry Farmers Society under the Kirinyaga County Government — combining construction, refrigeration, and renewable energy in one project.",
    coverImage:  solar1,
    body: [
      { type: "paragraph", text: "In August 2022, Befra Engineering completed one of its most distinctive projects: a solar-powered thermos egg cooling system for the Kiaga Poultry Farmers Society, commissioned by the Kirinyaga County Government. The project sat at the intersection of three of Befra's core capabilities — building & construction, refrigeration, and solar energy." },
      { type: "heading",   text: "Why Solar?" },
      { type: "paragraph", text: "The Kiaga facility is in a rural area where grid power is unreliable. A conventional refrigeration system dependent on mains electricity would be vulnerable to exactly the power cuts that are most common during peak production periods. Solar power eliminates that dependency and reduces operating costs for the farmers over the long term." },
      { type: "heading",   text: "Project Scope" },
      { type: "list", items: [
        "Civil and structural construction of the cooling facility",
        "Solar panel installation and off-grid inverter system",
        "Thermos egg cooling unit installation and commissioning",
        "Training of facility operators",
        "Handover documentation and 1-year warranty",
      ]},
      { type: "paragraph", text: "The completed facility gives Kiaga Poultry Farmers Society the ability to store eggs safely between collection and distribution, reducing spoilage and improving the commercial viability of the cooperative. It is the kind of project where engineering has a direct and visible impact on livelihoods." },
    ],
  },
  {
    slug:        "electrical-mechanical-hospital-works",
    title:       "Engineering for Healthcare: Lessons from MP Shah and Nazareth Hospital",
    publishedAt: "2024-02-14",
    excerpt:     "Hospitals demand zero-failure engineering. Befra Engineering's long-running contracts with MP Shah Hospital and Nazareth Hospital have shaped how the company approaches critical environment projects.",
    coverImage:  building1,
    body: [
      { type: "paragraph", text: "A ventilation system failure in a hospital operating theatre is not a maintenance issue — it is a clinical emergency. When Befra Engineering first took on mechanical and electrical works for MP Shah Hospital in November 2006, the team understood that the standards required were categorically different from commercial or industrial environments." },
      { type: "heading",   text: "MP Shah Hospital: 2006–2014" },
      { type: "paragraph", text: "Over eight years, Befra delivered critical mechanical works across the MP Shah campus — ventilation systems, commercial kitchen equipment, water pumps, and air conditioning. The work required coordination with clinical operations teams to ensure that no works caused disruption to patient care areas." },
      { type: "heading",   text: "Nazareth Hospital: 2006–Present" },
      { type: "paragraph", text: "The Nazareth Hospital engagement has run continuously since 2006, covering facilities in Limuru and Ruiru. Works have included kitchen cold store refurbishment, laundry equipment maintenance, and generator installation — the kind of behind-the-scenes infrastructure that hospital operations depend on entirely." },
      { type: "heading",   text: "What Healthcare Projects Teach You" },
      { type: "list", items: [
        "Documentation and handover records must be immaculate",
        "Works must be schedulable around clinical operations",
        "Backup plans are not optional — they are part of the scope",
        "Response times for reactive works must be guaranteed",
        "Every technician on site represents the company's reputation",
      ]},
      { type: "paragraph", text: "The discipline instilled by healthcare contracts has made Befra a better engineering company across all sectors. When you are used to the standards that hospitals demand, every other environment feels manageable." },
    ],
  },
  {
    slug:        "preventive-maintenance-guide",
    title:       "Why Preventive Maintenance Saves Kenyan Businesses More Than They Realise",
    publishedAt: "2024-01-20",
    excerpt:     "Reactive maintenance is expensive, disruptive, and avoidable. A look at what a structured preventive maintenance programme actually costs — and what it saves.",
    coverImage:  mechanical1,
    body: [
      { type: "paragraph", text: "Most facilities managers in Kenya will tell you they know preventive maintenance matters. Fewer have a structured programme in place. The gap between knowing and doing usually comes down to one thing: the upfront cost feels real, while the costs of not doing it are invisible — until they are not." },
      { type: "heading",   text: "The Real Cost of Reactive Maintenance" },
      { type: "paragraph", text: "When a chiller fails in a hospital, the cost is not just the repair — it is the emergency call-out premium, the downtime, the spoiled stock, the clinical disruption, and the reputational impact. When a generator fails during a power cut, the cascade of consequences can dwarf the cost of the maintenance that would have prevented it." },
      { type: "heading",   text: "What a Good Programme Looks Like" },
      { type: "list", items: [
        "Scheduled inspections at agreed intervals (monthly, quarterly, annual)",
        "Documented checklists for each asset type",
        "Consumable replacement on schedule rather than on failure",
        "Calibration of controls and sensors",
        "Written reports after every visit with findings and recommendations",
      ]},
      { type: "heading",   text: "How to Get Started" },
      { type: "paragraph", text: "The first step is an asset register — a list of every mechanical and electrical system on your premises, its age, its last service date, and its criticality. From that list, a maintenance schedule can be built. Befra Engineering offers initial site assessments to help facilities teams build this foundation." },
      { type: "paragraph", text: "The businesses that call us for emergency repairs are often the same ones who deferred the maintenance contract that would have made the emergency unnecessary. The maths always favours prevention." },
    ],
  },
];