import { CATEGORIES } from '../constants';

export interface PageSeo {
  title: string;
  description: string;
  keywords: string;
}

const BRAND = 'Alexone';
const LOC = 'Bhubaneswar, Odisha';
const DEFAULT_DESC =
  'Luxury interior design studio in Bhubaneswar — residential, commercial, hospitality, landscape & exterior. Bespoke finishes, 3D visualization, and end-to-end execution by Alexone.';

const PAGES: Record<string, PageSeo> = {
  home: {
    title: `${BRAND} | Luxury Interior Design Studio — ${LOC}`,
    description: DEFAULT_DESC,
    keywords:
      'interior design Bhubaneswar, luxury interiors Odisha, Alexone, residential design, commercial interior, modular kitchen, landscape design, interior designer India',
  },
  about: {
    title: `About ${BRAND} | Our Story & Design Philosophy`,
    description: `Learn about ${BRAND} — a design studio where elegance meets innovation. Timeless interiors, premium materials, and client-centered design in ${LOC}.`,
    keywords: `about Alexone, interior design studio Bhubaneswar, Suleprava, luxury design philosophy, Odisha architects`,
  },
  spaces: {
    title: `Design Categories & Portfolio | ${BRAND}`,
    description: `Explore residential, commercial, hotel, landscape, exterior, café, salon, workspace and pool projects — each crafted with a distinct visual identity by ${BRAND}.`,
    keywords: 'interior categories, residential design, commercial spaces, hotel design, landscape architecture, portfolio Alexone',
  },
  materials: {
    title: `Materials & Finishes | ${BRAND}`,
    description: `Premium materials, surfaces, hardware, decor and lighting — curated textures and finishes that define every ${BRAND} project.`,
    keywords: 'interior materials, laminates, modular kitchen finishes, hardware Hettich Hafele, lighting design, Alexone materials',
  },
  partners: {
    title: `Brand Partners | ${BRAND}`,
    description: `Trusted partners — Godrej, Hettich, Häfele, Century, Greenpanel, Fenesta, Saint-Gobain and more — ensuring quality and warranty across every ${BRAND} project.`,
    keywords: 'interior brand partners, hardware suppliers India, plywood laminates, Alexone partners',
  },
  contact: {
    title: `Contact & Consultation | ${BRAND} — ${LOC}`,
    description: `Book a consultation: Rasulgarh, Bhubaneswar. Phone +91 82490 46203. Email info@alexone.design. Residential, commercial & hospitality projects.`,
    keywords: 'contact interior designer Bhubaneswar, Alexone consultation, Odisha interior design office',
  },
};

export function getSeoForPage(pageId: string): PageSeo {
  if (PAGES[pageId]) return PAGES[pageId];

  const cat = CATEGORIES.find((c) => c.id === pageId);
  if (cat) {
    return {
      title: `${cat.title} Interior Design & Projects | ${BRAND}`,
      description: `${cat.description} View ${cat.title.toLowerCase()} projects, moodboards and gallery work by ${BRAND} in ${LOC}.`,
      keywords: `${cat.title} interior design, ${cat.title} projects India, Alexone ${cat.title}, luxury ${cat.title} design`,
    };
  }

  return PAGES.home;
}

export const ENTRY_SEO: PageSeo = {
  title: `${BRAND} | Luxury Interiors — Enter`,
  description: `Step into ${BRAND} — premium residential, commercial & landscape design in ${LOC}. Refined spaces, tailored finishes, immersive 3D storytelling.`,
  keywords: PAGES.home.keywords,
};
