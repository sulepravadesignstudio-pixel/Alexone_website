/**
 * Local partner logos (public/partners) — reliable when hosted.
 * Remote CDNs (Clearbit etc.) often fail in production.
 */

const PARTNER_LOCAL_LOGOS: Record<string, string> = {
  Godrej: '/partners/godrej.svg',
  Ebco: '/partners/ebco.svg',
  Hettich: '/partners/hettich.svg',
  Livspace: '/partners/livspace.svg',
  Tandem: '/partners/tandem.svg',
  Hafele: '/partners/hafele.svg',
  Century: '/partners/century.svg',
  'Green Panel': '/partners/green-panel.svg',
  Austin: '/partners/austin.svg',
  'Black Cobra': '/partners/black-cobra.svg',
  VANM: '/partners/vanm.svg',
  Airolam: '/partners/airolam.svg',
  Fenesta: '/partners/fenesta.svg',
  'Saint-Gobain': '/partners/saint-gobain.svg',
};

/** Domains kept for optional remote favicon fallback only. */
export const PARTNER_LOGO_DOMAINS: Record<string, string> = {
  Godrej: 'godrejinterio.com',
  Ebco: 'ebco.in',
  Hettich: 'hettich.com',
  Livspace: 'livspace.com',
  Tandem: 'hettich.com',
  Hafele: 'hafele.com',
  Century: 'centuryply.com',
  'Green Panel': 'greenpanel.com',
  Austin: 'austinplywood.com',
  'Black Cobra': 'blackcobra.net',
  VANM: 'vanmply.com',
  Airolam: 'airolam.com',
  Fenesta: 'fenesta.com',
  'Saint-Gobain': 'saint-gobain.com',
};

export function partnerLogoLocal(partner: string): string | null {
  return PARTNER_LOCAL_LOGOS[partner] ?? null;
}

export function partnerLogoFavicon(partner: string): string | null {
  const domain = PARTNER_LOGO_DOMAINS[partner];
  if (!domain) return null;
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
}

/** Prefer bundled local SVG, then favicon. */
export function partnerLogoPrimary(partner: string): string | null {
  return partnerLogoLocal(partner) ?? partnerLogoFavicon(partner);
}
