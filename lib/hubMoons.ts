import { ECOSYSTEM_ENTITIES } from "./ecosystem";

/** A drill-down "moon" — a sub-section of a planet, shown in a detail panel. */
export interface MoonContent {
  short: string; // label on the moon
  num?: string;
  kicker?: string; // small label above the title
  title: string;
  type?: string; // badge
  tagline?: string; // italic line
  description: string;
  meta?: string; // small meta line (e.g. date · read time)
  pairs?: { label: string; items: string[] }[];
  bullets?: string[];
  metric?: string;
  url?: string;
  urlLabel?: string;
}

const ECOSYSTEM_MOONS: MoonContent[] = ECOSYSTEM_ENTITIES.map((e) => ({
  short: e.short,
  num: e.num,
  kicker: "Ecosystem",
  title: e.name,
  type: e.type,
  tagline: e.tagline,
  description: e.description,
  pairs: [
    { label: "Feeds Into", items: e.feeds },
    { label: "Receives From", items: e.receives },
  ],
  metric: e.metric,
  url: e.url,
  urlLabel: "Visit →",
}));

const OVERVIEW_MOONS: MoonContent[] = [
  {
    short: "Impact",
    kicker: "Overview",
    title: "Impact",
    description:
      "The outcomes that prove integrated systems design reverses poverty at the infrastructure level.",
    bullets: [
      "525+ people trained",
      "$60M+ in wages generated",
      "$0 tuition charged to participants",
      "One ecosystem where every entity feeds the next",
    ],
  },
  {
    short: "Real-Time Resume",
    kicker: "Overview",
    title: "Real-Time Resume",
    description:
      "REIGN's portable, cloud-based profile — continuously updated with verified work history, earned badges, and performance milestones that travel with a person across their entire career.",
  },
  {
    short: "Voices",
    kicker: "Overview",
    title: "What They Say",
    description:
      "Community partners, program graduates, and strategic advisors on the ecosystem model — from “the most elegant anti-poverty architecture I've seen” to “that's not a program, that's a pipeline.”",
  },
  {
    short: "Philosophy",
    kicker: "Overview",
    title: "Philosophy",
    tagline:
      "“Poverty is a system. You can't defeat a system with a program. You defeat it with a better system.”",
    description: "— Reginald Reed Jr.",
  },
];

const ABOUT_MOONS: MoonContent[] = [
  {
    short: "Systems Designer",
    kicker: "About · Identity",
    title: "Systems Designer",
    description:
      "I think in ecosystems, not silos. I design organizational architectures, economic models, workforce pipelines, and governance frameworks where outputs from one component become inputs for another.",
  },
  {
    short: "AI Architect",
    kicker: "About · Identity",
    title: "AI Architect",
    description:
      "I design and build custom AI intelligence systems — council logic architectures, multi-agent decision frameworks, and the REIGN platform. I don't use AI. I build AI infrastructure.",
  },
  {
    short: "Community Builder",
    kicker: "About · Identity",
    title: "Community Builder",
    description:
      "I design workforce development models, navigate municipal policy, build coalition networks, and architect funding mechanisms that convert compliance obligations into community investment.",
  },
];

const RESEARCH_MOONS: MoonContent[] = [
  {
    short: "Stellar Engine",
    kicker: "Research",
    title: "The Stellar Engine",
    type: "Featured Research",
    tagline:
      "A self-sustaining workforce development model engineered to reverse poverty through earned revenue.",
    description:
      "When training programs are designed around placement outcomes — and placement outcomes generate revenue — the system pays for itself. Grants become leverage, not lifelines. Two interlocking revenue engines (Little Dipper, Big Dipper) run a closed loop: recruit → train → certify → place → generate surplus → reinvest → scale.",
    bullets: [
      "525+ trained · ~90% graduation · ~85% placement",
      "$60M+ cumulative wages over 9 years",
      "Validated by Harvard's Project on Workforce",
    ],
  },
  {
    short: "Home Buyers",
    kicker: "Research",
    title: "House Reed Home Buyers Program",
    type: "Wealth Building & Housing",
    tagline:
      "Rent-to-own homeownership in Milwaukee's 53206 at 60% of market value.",
    description:
      "Trainees rehabilitate blighted homes and purchase them at a permanent structural discount that credits their own labor. A four-stage pipeline: workforce training → construction skills → rent-to-own purchase → community anchoring.",
    bullets: [
      "60% of market value — a permanent structural discount",
      "Publicly endorsed by Milwaukee's Dept. of City Development (2021)",
      "Expansion conversations in St. Louis & Nashville",
    ],
  },
  {
    short: "Sentilis",
    kicker: "Research",
    title: "Sentilis — Council Logic Architecture",
    type: "AI Systems Design",
    tagline:
      "A 12-council cognitive architecture for AI-augmented strategic decision-making.",
    description:
      "A council of specialized cognitive functions — each with governing directives, interlinked dependencies, and a shared governance layer (THRONOS) — can run an enterprise, not just answer a question. Persistent memory, cross-domain interlinks, and drift detection.",
    bullets: [
      "12 council members across distinct domains",
      "Persistent institutional memory (CHRONICLE)",
      "A template for building custom AI systems for any organization",
    ],
    url: "/contact",
    urlLabel: "Request a Custom AI Build →",
  },
  {
    short: "Childcare Research",
    kicker: "Research · Coming Soon",
    title: "Childcare Infrastructure as Economic Architecture",
    description:
      "Examining how childcare access directly impacts workforce participation rates in 53206 — not as a social service, but as a prerequisite for labor-market participation. Research in development.",
  },
  {
    short: "Transit Research",
    kicker: "Research · Coming Soon",
    title: "Transportation as a Poverty Multiplier",
    description:
      "Mapping the structural relationship between transit access and employment sustainability — measuring how transportation gaps function as poverty multipliers in zip codes like 53206. Research in development.",
  },
];

const MEDIA_MOONS: MoonContent[] = [
  {
    short: "Awards",
    kicker: "Media",
    title: "Awards & Honors",
    description: "Recognition for workforce innovation and community impact.",
    bullets: [
      "40 Under 40 — Milwaukee Business Journal (2018)",
      "Future 50 — BizTimes / MMAC (2019)",
      "Wisconsin Job Honor Award — America's Job Honor Awards (2016)",
    ],
  },
  {
    short: "National Press",
    kicker: "Media",
    title: "On the National Stage",
    description: "National coverage of the bank-free homeownership model.",
    bullets: [
      "NPR — “Milwaukee Program Bypasses Banks To Help People Get Into Homes” (2021)",
      "Wisconsin Public Radio — “Buying Power: Building A Path To Homeownership” (2021)",
    ],
    url: "https://www.npr.org/2021/08/19/1029173990/milwaukee-program-bypasses-banks-to-help-people-get-into-homes",
    urlLabel: "Listen on NPR →",
  },
  {
    short: "Local Press",
    kicker: "Media",
    title: "Local & Regional Coverage",
    description:
      "Milwaukee newsrooms on the founding story, growth, and impact.",
    bullets: [
      "Milwaukee Neighborhood News Service (2019)",
      "Urban Milwaukee (2021)",
      "OnMilwaukee (2019)",
      "BizTimes Milwaukee — Park Place relocation (2020)",
      "Wisconsin Technology Council — tech launch",
      "MMAC — “Unlocking Potential”",
    ],
  },
  {
    short: "Community",
    kicker: "Media",
    title: "Community Features",
    description: "Profiles from civic and community institutions.",
    bullets: [
      "Rotary Club of Milwaukee — “People of Action” (2022)",
      "Milwaukee Journal Sentinel — north-side construction entrepreneur",
    ],
  },
  {
    short: "Speaking",
    kicker: "Media",
    title: "Speaking Topics",
    description: "Keynotes, panels, and workshops.",
    bullets: [
      "Systems Design for Social Impact",
      "From 53206 to $60M",
      "AI Architecture for Operations",
      "Reversing Urban Poverty",
      "The Stellar Engine Model",
      "Bank-Free Wealth Building",
    ],
    url: "/contact",
    urlLabel: "Book a talk →",
  },
];

const INSIGHTS_MOONS: MoonContent[] = [
  {
    short: "The Closed Loop",
    kicker: "Insights",
    title:
      "The Closed Loop: How Milwaukee's Social Architecture Produces the Conditions It Claims to Address",
    meta: "March 2026 · 6 min read",
    description:
      "A structural analysis of how Milwaukee's philanthropic ecosystem — board seats, credentialing networks, and symptom-oriented funding — creates a closed loop that manages poverty rather than solving it.",
    bullets: ["Systems Analysis", "Milwaukee", "Philanthropy"],
    url: "https://www.linkedin.com/pulse/closed-loop-how-milwaukees-social-architecture-produces-reed-jr-dqqcc/",
    urlLabel: "Read on LinkedIn →",
  },
  {
    short: "AI Hiring Bias",
    kicker: "Insights",
    title:
      "AI Hiring Tools Have Never Preferred a Black Male Candidate. Not Once.",
    meta: "February 2026 · 3 min read",
    description:
      "Peer-reviewed research shows AI resume-screening tools preferred white-associated names 85% of the time. Black men were at the bottom of every model tested. This isn't a glitch — it's architecture. And REIGN was built to replace it.",
    bullets: ["AI", "Workforce", "REIGN"],
    url: "https://www.linkedin.com/pulse/ai-hiring-tools-have-never-preferred-black-male-once-reginald-reed-jr-znohc/",
    urlLabel: "Read on LinkedIn →",
  },
  {
    short: "Workforce Mgmt Is Dead",
    kicker: "Insights",
    title: "Why Workforce Management Is Dead",
    meta: "January 2026 · 4 min read",
    description:
      "For thirty years, workforce management meant scheduling software, time clocks, and payroll integrations — tools designed to track hours and reduce labor costs. What comes next for organizations that depend on labor.",
    bullets: ["Workforce", "Technology", "REIGN"],
    url: "https://www.linkedin.com/pulse/why-workforce-management-dead-reginald-reed-jr-rui9c/",
    urlLabel: "Read on LinkedIn →",
  },
  {
    short: "Economic Growth",
    kicker: "Insights",
    title:
      "The Double-Edged Sword of Economic Growth: Who Benefits from Milwaukee's Booming Development?",
    meta: "January 2025 · 3 min read",
    description:
      "Milwaukee's skyline is evolving with major development projects like the Deer District expansion and Fiserv Forum upgrades. But who actually benefits when a city booms — and who gets left behind?",
    bullets: ["Milwaukee", "Economic Development", "Equity"],
    url: "https://www.linkedin.com/pulse/double-edged-sword-economic-growth-who-benefits-from-booming-reed-jr-bjbmc/",
    urlLabel: "Read on LinkedIn →",
  },
  {
    short: "Revolutionary Process",
    kicker: "Insights",
    title: "Revolutionary Process, Revolutionary Results: The Mindful Solution",
    meta: "June 2018 · 1 min read",
    description:
      "With workforce development as a key problem facing the modern construction and other industries, a new approach to training, placement, and performance tracking is needed.",
    bullets: ["Workforce", "Mindful Staffing", "Training"],
    url: "https://www.linkedin.com/pulse/revolutionary-process-results-mindful-solution-staffing-reginald-reed/",
    urlLabel: "Read on LinkedIn →",
  },
  {
    short: "The Great Acquisition",
    kicker: "Insights",
    title: "The Great Acquisition",
    meta: "October 2017 · 3 min read",
    description:
      "April 8th, 2016 marks the inception date of Mindful Staffing Solutions. The changes taking place in Milwaukee's workforce landscape — and the vision that started it all.",
    bullets: ["Origin Story", "Mindful Staffing", "Milwaukee"],
    url: "https://www.linkedin.com/pulse/great-acquisition-reginald-reed/",
    urlLabel: "Read on LinkedIn →",
  },
  {
    short: "Skills Gap",
    kicker: "Insights",
    title: "The Answer to Construction Workforce Shortage and the Skills Gap",
    meta: "October 2016 · 1 min read",
    description:
      "We face a dire problem in many industries as business growth is compromised by the skills gap and worker shortage. Here's how we're solving it from the ground up.",
    bullets: ["Construction", "Skills Gap", "Workforce"],
    url: "https://www.linkedin.com/pulse/answer-construction-workforce-shortage-skills-gap-reginald-reed/",
    urlLabel: "Read on LinkedIn →",
  },
  {
    short: "Evolution of Employment",
    kicker: "Insights",
    title: "The Evolution of Employment",
    meta: "July 2016 · 4 min read",
    description:
      "Mindful Staffing Solutions is adding a new twist to the way we hire people in the construction industry — addressing multiple issues in not only the industry but also the community in Milwaukee.",
    bullets: ["Workforce", "Construction", "Milwaukee"],
    url: "https://www.linkedin.com/pulse/evolution-employment-reginald-reed/",
    urlLabel: "Read on LinkedIn →",
  },
];

/** Moons per planet, keyed by PAGES index (1=Overview … 6=Insights). */
export const PLANET_MOONS: Record<number, MoonContent[]> = {
  1: OVERVIEW_MOONS,
  2: ABOUT_MOONS,
  3: ECOSYSTEM_MOONS,
  4: RESEARCH_MOONS,
  5: MEDIA_MOONS,
  6: INSIGHTS_MOONS,
};

export function hasMoons(idx: number | null): boolean {
  return idx !== null && !!PLANET_MOONS[idx]?.length;
}
