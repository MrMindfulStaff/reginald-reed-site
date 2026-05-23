export interface EcosystemEntity {
  num: string;
  name: string;
  short: string;
  type: string;
  tagline: string;
  description: string;
  feeds: string[];
  receives: string[];
  metric: string;
  url?: string;
}

export const ECOSYSTEM_ENTITIES: EcosystemEntity[] = [
  {
    num: "01",
    name: "The Mindful Group Inc.",
    short: "Mindful Group",
    type: "501(c)(3) Nonprofit",
    tagline: "Zero-tuition workforce training that creates economic liberation",
    description:
      "The engine of the ecosystem. Delivers CNA, CBRF, and construction training at zero cost to participants from Milwaukee's most underserved zip codes. Every graduate feeds directly into the employment pipeline.",
    feeds: ["Mindful Staffing Solutions", "Nana's Cozy Corner"],
    receives: ["Grant funding", "Community partnerships"],
    metric: "525+ people trained, $60M+ in wages generated",
    url: "https://www.themindfulgroupinc.org",
  },
  {
    num: "02",
    name: "Mindful Staffing Solutions",
    short: "Mindful Staffing",
    type: "For-Profit",
    tagline: "Connecting trained talent to employment that builds wealth",
    description:
      "Places Mindful Group graduates into CNA, caregiving, and construction positions. Converts training completions into sustained employment. The revenue engine that proves the model works and funds ecosystem expansion.",
    feeds: [
      "The Mindful Group (revenue cycle)",
      "Cozy Cruisers (transport demand)",
    ],
    receives: ["The Mindful Group (trained talent)"],
    metric: "Direct employment pipeline from training to placement",
    url: "https://www.mindfulstaff.com",
  },
  {
    num: "03",
    name: "Mindful Measures Inc.",
    short: "REIGN",
    type: "Technology",
    tagline: "REIGN — The AI-Powered Workforce Operating System",
    description:
      "The intelligence layer of the ecosystem. REIGN transforms employee time data into actionable business intelligence — AI-powered pattern recognition for workforce decisions, predictive labor estimating, skill-based scheduling, and performance simulations. Its Real-Time Resume feature builds cloud-based profiles continuously updated with verified work history, earned badges, and performance milestones — portable across careers. Delivers 20-30% productivity improvements, 15-25% labor cost reduction, and 30-50% turnover reduction across the organizations it serves.",
    feeds: [
      "All ecosystem entities (workforce intelligence, scheduling, performance tracking)",
    ],
    receives: ["All entities (time data, skills data, project assignments)"],
    metric:
      "AI-powered workforce operating system across cloud, web, iOS, and Android",
    url: "https://www.reignos.com",
  },
  {
    num: "04",
    name: "Nana's Cozy Corner",
    short: "Nana's Cozy Corner",
    type: "Childcare",
    tagline:
      "Childcare infrastructure that removes the #1 barrier to employment",
    description:
      "Without childcare, the training pipeline breaks. Nana's Cozy Corner solves the critical barrier that prevents parents — especially single mothers — from completing training and maintaining employment. This isn't a daycare. It's essential workforce infrastructure.",
    feeds: [
      "Mindful Group (enables attendance)",
      "Mindful Staffing (enables retention)",
    ],
    receives: [
      "Mindful Group (referrals)",
      "Mindful Staffing (employee families)",
    ],
    metric: "Barrier removal enabling workforce participation",
    url: "https://www.nanascozycorner.com",
  },
  {
    num: "05",
    name: "Cozy Cruisers",
    short: "Cozy Cruisers",
    type: "Transportation",
    tagline: "Transportation that closes the last-mile gap to opportunity",
    description:
      "When people can't get to training or work, the entire pipeline fails. Cozy Cruisers provides reliable transport connecting participants to training sites and job placements — closing the last-mile gap in Milwaukee's workforce ecosystem.",
    feeds: ["Mindful Group (training access)", "Mindful Staffing (job access)"],
    receives: [
      "Mindful Group (transport demand)",
      "Mindful Staffing (employee needs)",
    ],
    metric: "Last-mile transportation removing mobility barriers",
  },
  {
    num: "06",
    name: "The Black Entrepreneurship Society",
    short: "Black Entrepreneurship Society",
    type: "Education | Community",
    tagline: "Stop decorating. Start building.",
    description:
      "The education and IP arm of House Reed. A Skool-based business community equipping minority entrepreneurs with practical infrastructure — legal, financial, operational, and strategic — organized into 13 specialized classrooms. Each classroom includes step-by-step lessons, fillable templates, SOPs, and a custom AI assistant. $50/month membership with a 30% recurring affiliate program that turns members into partners.",
    feeds: [
      "House Reed ecosystem (codified business methodology)",
      "Community members (business infrastructure & capital access)",
    ],
    receives: [
      "All House Reed entities (operational knowledge & IP)",
      "Member-to-affiliate conversion (growth engine)",
    ],
    metric:
      "13 classrooms covering legal, financial, operations, scaling & exit planning",
    url: "https://www.skool.com/blackwealth",
  },
  {
    num: "07",
    name: "House Reed Holdings LLC",
    short: "House Reed Holdings",
    type: "Holding Company",
    tagline: "The governance layer that holds the ecosystem together",
    description:
      "The parent holding structure unifying all House Reed entities under one strategic umbrella. Provides governance, shared services, and capital allocation across the ecosystem — ensuring every entity compounds into the next.",
    feeds: ["All entities (strategic governance & capital allocation)"],
    receives: ["All entities (revenue, data, strategic intelligence)"],
    metric: "7 integrated entities under one governance structure",
  },
];
