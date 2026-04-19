/** Public site origin for canonical URLs, Open Graph, and sitemap. Set `VITE_SITE_URL` in production (e.g. https://www.alexone.design). */
export function getSiteUrl(): string {
  const env = import.meta.env.VITE_SITE_URL as string | undefined;
  if (env && /^https?:\/\//i.test(env.trim())) {
    return env.replace(/\/$/, '');
  }
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return 'https://alexone.design';
}
