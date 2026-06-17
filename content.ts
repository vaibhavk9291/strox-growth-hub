// content.ts — Intellobyte site content (Phase 1)
// Single source of truth. Components read from `content`; never hard-code copy.

/* ---------- shared ---------- */
export interface CTA { label: string; href: string }
export interface NavItem { label: string; href: string }
export interface SocialLink { label: string; href: string }

/* ---------- sections ---------- */
export interface Nav { logo: string; links: NavItem[]; cta: CTA }

export interface Hero {
  eyebrow: string;
  rating: { stars: number; score: string; reviews: string; avatars: string[] };
  headline1: string;     // white line
  headline2: string;  // accent line
  headline3: string;  // accent line
  sub: string;
  ctas: CTA[];
  image?: string;
}

export interface ClientLogo { name: string; src?: string } // src optional → styled wordmark fallback

export interface About { eyebrow: string; statement: string; cta: CTA }

export interface WhyCard { title: string; description: string }
export interface Why { eyebrow: string; heading: string; intro: string; cards: WhyCard[] }

export interface Project {
  index: string;           // "01"
  title: string;
  tags: string[];
  description: string;
  image: string;
  href?: string;
}
export interface Work { eyebrow: string; heading: string; projects: Project[] }

export interface Stat { value: string; label: string; description: string }
export interface Impact { eyebrow: string; statement: string; cta: CTA; stats: Stat[]; image: string }

export interface ServiceCard {
  title: string;
  description: string;
  bullets: string[];
  image: string;
}
export interface Services { cards: ServiceCard[] }

export interface ProcessStep { index: string; title: string; description: string }
export interface Process { eyebrow: string; heading: string; cta: CTA; steps: ProcessStep[] }

export interface TeamMember { name: string; role: string; image: string; links: SocialLink[] }
export interface Team { eyebrow: string; members: TeamMember[] }

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  logo?: string;
  video?: string; // optional featured video
}
export interface Testimonials { eyebrow: string; heading: string; items: Testimonial[] }

export interface FAQItem { q: string; a: string }
export interface FAQ { eyebrow: string; heading: string; intro: string; items: FAQItem[]; cta: CTA }

export interface BlogPost { title: string; excerpt: string; image: string; href: string }
export interface Insights { eyebrow: string; heading: string; cta: CTA; posts: BlogPost[] }

export interface Footer {
  statement: string;
  columns: { title: string; links: NavItem[] }[];
  newsletter: { heading: string; sub: string; placeholder: string; cta: string };
  contact: { email: string; phone: string; location: string };
  social: SocialLink[];
  legal: { copyright: string; links: NavItem[] };
}

export interface SiteContent {
  nav: Nav;
  hero: Hero;
  clients: ClientLogo[];
  about: About;
  why: Why;
  work: Work;
  impact: Impact;
  services: Services;
  process: Process;
  team: Team;
  testimonials: Testimonials;
  faq: FAQ;
  insights: Insights;
  marquee: string[];
  footer: Footer;
}

/* ============================================================= */
export const content: SiteContent = {
  nav: {
    logo: "Intellobyte",
    links: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "About", href: "#team" },
      { label: "Contact", href: "#footer" },
    ],
    cta: { label: "Get a Quote", href: "#footer" },
  },

  hero: {
    eyebrow: "Available for new projects · 2026",
    rating: {
      stars: 5,
      score: "5.0",
      reviews: "Based on 50+ verified reviews",
      avatars: ["/kunal.png", "/pranav.png", "/vaibhav.png"],
    },
    headline1: "We Build Tech",
    headline2: "That Actually",
    headline3: "Works",
    sub: "We don't template. We engineer.",
    image: "/founders3.png",
    ctas: [
      { label: "Start a Project", href: "#contact" },
      { label: "See Our Work", href: "#work" },
    ],
  },

  clients: [
    { name: "Ramaastra" }, 
    { name: "Kalyani Maxion" }, 
    { name: "Elviko AI" }, 
    { name: "Heimstadt" }, 
    { name: "Prolead" }, 
    { name: "Imaging Dental Solutions" }, 
    { name: "Hello Sakhee" }, 
    { name: "Siddheshwar Transport" }, 
    { name: "DYP Incubation" },
  ],

  about: {
    eyebrow: "About Us",
    statement:
      "Intellobyte is a next-generation technology company engineering intelligent software, automation, and AI systems for businesses ready to outgrow generic.",
    cta: { label: "About Us", href: "#about" },
  },

  why: {
    eyebrow: "Why Us",
    heading: "Why Choose Us",
    intro: "Strategy, design and engineering under one roof.",
    cards: [
      { title: "Craft-Level Quality", description: "Pixel-perfect builds on modern stacks like React, Next.js and Webflow." },
      { title: "Client-Centric", description: "Your goals are the brief — we build around your outcomes." },
      { title: "Fast Delivery", description: "Tight, reliable timelines without cutting corners." },
      { title: "Full-Stack Studio", description: "Strategy, design and engineering in one team." },
    ],
  },

  work: {
    eyebrow: "Selected Work",
    heading: "Our Masterpieces",
    projects: [
      { index: "01", title: "DYP Incubation Centre", tags: ["Education", "Incubator Platform"], description: "A platform built for an incubator and education program.", image: "/dyp-incubation.jpg", href: "https://www.dypdsif.org/" },
      { index: "02", title: "RamaAstra", tags: ["Corporate", "Aerospace & Defence"], description: "Corporate presence for an aerospace & defence brand.", image: "/ramaastra-new.jpg", href: "https://www.ramaastra.com/" },
      { index: "03", title: "Chhaya Dental Care", tags: ["Healthcare", "Clinic", "2025"], description: "Conversion-focused clinic website.", image: "/chhaya-new.jpg", href: "https://www.chhayaclinicanddentalcare.com/" },
      { index: "04", title: "Elviko AI", tags: ["AI", "Marketing", "SaaS"], description: "AI-Powered Marketing Systems.", image: "/elviko.png", href: "https://www.elviko.in/" },
    ],
  },

  impact: {
    eyebrow: "Impact",
    statement: "Turning ideas into measurable growth through design and engineering.",
    cta: { label: "Start a Project", href: "#contact" },
    stats: [
      { value: "28+", label: "Projects Shipped", description: "Delivered across industries and continents." },
      { value: "100+", label: "Websites Delivered", description: "Launched for ambitious brands worldwide." },
      { value: "50+", label: "5.0★ Reviews", description: "Clients who'd recommend us again." },
      // TODO: confirm or replace the experience figure / revenue stat from the old site
    ],
    image: "/shinjini.png",
  },

  services: {
    cards: [
      {
        title: "CUSTOM SOFTWARE",
        description: "Purpose-built software engineered around your exact business workflow.",
        bullets: ["REQUIREMENT ANALYSIS", "SYSTEM ARCHITECTURE", "FULL STACK DEVELOPMENT", "TESTING AND QA", "DEPLOYMENT AND MAINTENANCE"],
        image: "/custom-software.jpg",
      },
      {
        title: "UI/UX AND MOBILE",
        description: "Intuitive interfaces and native-feeling apps across every device.",
        bullets: ["USER RESEARCH", "WIREFRAMING AND PROTOTYPING", "FLUTTER MOBILE APPS", "WEB INTERFACE DESIGN", "MOTION DESIGN"],
        image: "/uiux-mobile.jpg",
      },
      {
        title: "AI AND AUTOMATION",
        description: "Intelligent systems that eliminate manual work and scale your operations.",
        bullets: ["AI INTEGRATION", "WORKFLOW AUTOMATION", "CHATBOTS AND ASSISTANTS", "DATA PIPELINES", "PROCESS OPTIMIZATION"],
        image: "/ai-network.jpg",
      },
      {
        title: "WEB DEVELOPMENT",
        description: "Fast high-performing websites and web applications built to convert.",
        bullets: ["NEXT JS REACT DEVELOPMENT", "CMS INTEGRATION", "API DEVELOPMENT", "PERFORMANCE OPTIMIZATION", "SEO READY BUILDS"],
        image: "/web-development.jpg",
      },
      {
        title: "BUSINESS SYSTEMS",
        description: "End-to-end digital systems replacing paper and manual operations.",
        bullets: ["INVENTORY MANAGEMENT", "CRM SYSTEMS", "REFERRAL MANAGEMENT", "BILLING AND INVOICING", "CUSTOM DASHBOARDS AND REPORTS"],
        image: "/business-systems.jpg",
      },
      {
        title: "IT CONSULTING",
        description: "Honest tech advice and strategy for businesses ready to digitize.",
        bullets: ["TECH STACK CONSULTING", "DIGITAL TRANSFORMATION", "SYSTEM AUDIT", "VENDOR SELECTION", "ROADMAP PLANNING"],
        image: "/it-consulting.png",
      },
    ],
  },

  process: {
    eyebrow: "Process",
    heading: "How We Work",
    cta: { label: "Start a Project", href: "#contact" },
    steps: [
      { index: "001", title: "Discovery", description: "Defining goals through deep research and analysis." },
      { index: "002", title: "Strategy", description: "Mapping the roadmap for your brand's success." },
      { index: "003", title: "Design", description: "Transforming ideas into stunning, usable interfaces." },
      { index: "004", title: "Launch", description: "Shipping with polish and ensuring it performs." },
    ],
  },

  team: {
    eyebrow: "Team",
    members: [
      { name: "Kunal Manjare", role: "CEO", image: "/kunal.png",
        links: [{ label: "LinkedIn", href: "#" }] },
      { name: "Pranav Patil", role: "CTO", image: "/pranav.png",
        links: [{ label: "LinkedIn", href: "#" }] },
      { name: "Vaibhav Kale", role: "COO", image: "/vaibhav.png",
        links: [{ label: "LinkedIn", href: "#" }] },
      { name: "Shinjini Mondal", role: "CTRO", image: "/shinjini.png",
        links: [{ label: "LinkedIn", href: "#" }] },
    ],
  },

  testimonials: {
    eyebrow: "Testimonial",
    heading: "Our Client Voices",
    items: [
      { quote: "We saw a 2× increase in leads after the campaign.", name: "Om Bansod", role: "Founder", company: "Yodha Electronics, Delhi", avatar: "/images/testimonials/om.jpg", video: "/videos/om-bansod.mp4" },
      { quote: "The strategic approach and execution transformed our digital presence completely. Truly a game-changer for our aerospace initiatives.", name: "Shreyas Vikhe", role: "Co-Founder", company: "Ramaastra" },
      { quote: "Our patient bookings skyrocketed after the new platform launch. The attention to detail in the healthcare space is unmatched.", name: "Akash Kadam", role: "Founder", company: "Imaging Dental Solutions" },
      { quote: "A phenomenal partner to work with. They understood our vision perfectly and delivered a highly intuitive platform.", name: "Bhavana Sharma", role: "Founder", company: "Hello Sakhee" },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequent Questions",
    intro: "Clear answers to the common queries about our services.",
    items: [
      { q: "What services does Intellobyte specialize in?", a: "Branding & identity, UI/UX, web & e-commerce development, and digital strategy & growth — strategy, design and engineering under one roof." },
      { q: "How long does a typical project take?", a: "Most projects run 1–4 weeks depending on scope; we share a detailed timeline after reviewing your requirements." }, // TODO confirm
      { q: "Do you offer custom pricing for small businesses?", a: "Yes — we scope and price to your goals and budget." }, // TODO confirm
      { q: "Will I own the full rights to the final designs?", a: "Yes, you own the final deliverables on completion." }, // TODO confirm
      { q: "How do we communicate during the project?", a: "Regular check-ins with a single point of contact; we typically reply within 24 hours, Mon–Fri." },
      { q: "Do you provide post-launch support and maintenance?", a: "Yes — ongoing support and maintenance are available after launch." }, // TODO confirm
    ],
    cta: { label: "Contact Us", href: "#contact" },
  },

  insights: {
    eyebrow: "Insights",
    heading: "Latest Insights",
    cta: { label: "Start a Project", href: "#contact" },
    posts: [
      { title: "Cracking Deals in MIDC", excerpt: "Visiting Chakan MIDC to implement real-world solutions and drive business growth.", image: "/midc.png", href: "#" },
      { title: "Hosting the Intellobyte Podcast", excerpt: "Deep dive conversations into tech, strategy, and engineering with industry leaders.", image: "/podcast.jpg", href: "#" },
    ],
  },

  marquee: ["Branding", "UI/UX", "Development", "SEO", "E-Commerce", "Strategy"],

  footer: {
    statement: "Intellobyte is where ambitious businesses come to build the software they couldn't find anywhere else.",
    columns: [
      { title: "Menu", links: [
        { label: "Home", href: "#home" }, { label: "Services", href: "#services" },
        { label: "Work", href: "#work" }, { label: "About", href: "#team" }, { label: "Contact", href: "#footer" },
      ]},
      { title: "Pages", links: [
        { label: "Process", href: "#process" }, { label: "Insights", href: "#insights" },
        { label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" },
      ]},
    ],
    newsletter: { heading: "Never miss an update", sub: "Get our latest work and design notes.", placeholder: "Enter your email", cta: "Subscribe" },
    contact: { email: "info@intellobyte.com", phone: "+91 76665 96339", location: "Remote-first · Worldwide" },
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/intellobyte/posts/?feedView=all" }, { label: "Instagram", href: "https://www.instagram.com/intellobyte/" },
      { label: "YouTube", href: "https://www.youtube.com/@IntelloByte" }, { label: "Twitter / X", href: "#" },
    ],
    legal: { copyright: "© 2026 Intellobyte. All rights reserved.", links: [
      { label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" },
    ]},
  },
};
