/**
 * Domains for partner logos. Primary: Clearbit logo CDN. Fallback: Google favicon service.
 * Domains chosen from each brand’s public site (India / global).
 */
export const PARTNER_LOGO_DOMAINS: Record<string, string> = {
  Godrej: 'godrejinterio.com',
  Ebco: 'ebco.in',
  Hettich: 'hettich.com',
  Livspace: 'livspace.com',
  /** Tandem drawer systems — same group logo as Hettich in most Indian specs */
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

/** High-quality logos from Wikimedia Commons (redirects to upload.wikimedia.org). */
const WIKIMEDIA_LOGO: Partial<Record<string, string>> = {
  Hettich:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_Hettich_%28company%29.svg',
  'Saint-Gobain': 'https://commons.wikimedia.org/wiki/Special:FilePath/Saint-Gobain_logo.svg',
};

export function partnerLogoClearbit(partner: string): string | null {
  const domain = PARTNER_LOGO_DOMAINS[partner];
  if (!domain) return null;
  return `https://logo.clearbit.com/${domain}`;
}

export function partnerLogoFavicon(partner: string): string | null {
  const domain = PARTNER_LOGO_DOMAINS[partner];
  if (!domain) return null;
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
}

/** Prefer Commons vector where available, else Clearbit. */
export function partnerLogoPrimary(partner: string): string | null {
  return WIKIMEDIA_LOGO[partner] ?? partnerLogoClearbit(partner);
}
