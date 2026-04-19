import { getSeoForPage, ENTRY_SEO, type PageSeo } from './seoConfig';
import { getSiteUrl } from './siteUrl';

function setMetaContent(attr: 'name' | 'property', key: string, content: string) {
  const sel = attr === 'name' ? `meta[name="${key}"]` : `meta[property="${key}"]`;
  let el = document.head.querySelector(sel) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function ensureLink(rel: string): HTMLLinkElement {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  return el;
}

function absoluteUrl(siteUrl: string, path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${p}`;
}

function applyCommon(seo: PageSeo, siteUrl: string, pageId: string) {
  const pageUrl = `${siteUrl}/#/${pageId}`;

  document.title = seo.title;

  setMetaContent('name', 'description', seo.description);
  setMetaContent('name', 'keywords', seo.keywords);
  setMetaContent('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  setMetaContent('name', 'author', 'Alexone by Suleprava');
  setMetaContent('name', 'geo.region', 'IN-OR');
  setMetaContent('name', 'geo.placename', 'Bhubaneswar');

  setMetaContent('property', 'og:type', 'website');
  setMetaContent('property', 'og:site_name', 'Alexone');
  setMetaContent('property', 'og:title', seo.title);
  setMetaContent('property', 'og:description', seo.description);
  setMetaContent('property', 'og:url', pageUrl);
  setMetaContent('property', 'og:locale', 'en_IN');

  const ogImage = absoluteUrl(siteUrl, '/favicon.png');
  setMetaContent('property', 'og:image', ogImage);
  setMetaContent('property', 'og:image:alt', 'Alexone — Luxury Design Studio');

  setMetaContent('name', 'twitter:card', 'summary_large_image');
  setMetaContent('name', 'twitter:title', seo.title);
  setMetaContent('name', 'twitter:description', seo.description);
  setMetaContent('name', 'twitter:image', ogImage);

  ensureLink('canonical').setAttribute('href', pageUrl);
}

export function applyEntrySeo() {
  const siteUrl = getSiteUrl();
  applyCommon(ENTRY_SEO, siteUrl, 'home');
}

/** Post-form confirmation — avoid indexing duplicate thin content */
function applyThankYouSeo(siteUrl: string) {
  document.title = 'Thank You | Alexone';
  setMetaContent('name', 'robots', 'noindex, follow');
  setMetaContent('name', 'description', 'Thank you — we received your enquiry.');
  setMetaContent('property', 'og:title', 'Thank You | Alexone');
  setMetaContent('property', 'og:description', 'Your enquiry was received.');
  setMetaContent('property', 'og:url', `${siteUrl}/#/thank-you`);
  setMetaContent('name', 'twitter:title', 'Thank You | Alexone');
  setMetaContent('name', 'twitter:description', 'Your enquiry was received.');
  ensureLink('canonical').setAttribute('href', `${siteUrl}/#/thank-you`);
}

/** Unlisted legal page: block indexing and minimal meta */
function applyPrivacyPolicySeo(siteUrl: string) {
  document.title = 'Privacy Policy | Alexone';
  setMetaContent('name', 'robots', 'noindex, nofollow');
  setMetaContent('name', 'description', 'Privacy policy — internal reference only.');
  setMetaContent('name', 'keywords', '');
  setMetaContent('property', 'og:title', 'Privacy Policy | Alexone');
  setMetaContent('property', 'og:description', 'This page is not listed in site navigation.');
  setMetaContent('property', 'og:url', `${siteUrl}/#/privacy`);
  setMetaContent('name', 'twitter:title', 'Privacy Policy | Alexone');
  setMetaContent('name', 'twitter:description', 'Internal privacy policy.');
  ensureLink('canonical').setAttribute('href', `${siteUrl}/#/privacy`);
}

export function applyRouteSeo(pageId: string) {
  const siteUrl = getSiteUrl();
  if (pageId === 'thank-you') {
    applyThankYouSeo(siteUrl);
    return;
  }
  if (pageId === 'privacy') {
    applyPrivacyPolicySeo(siteUrl);
    return;
  }
  const seo = getSeoForPage(pageId);
  applyCommon(seo, siteUrl, pageId);
}

const JSON_LD_ID = 'alexone-schema-org';

export function injectOrganizationJsonLd() {
  if (document.getElementById(JSON_LD_ID)) return;

  const siteUrl = getSiteUrl();
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Alexone',
        description:
          'Luxury interior, exterior & landscape design studio — residential, commercial and hospitality projects in Bhubaneswar, Odisha.',
        publisher: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Alexone',
        alternateName: 'Alexone by Suleprava',
        url: siteUrl,
        logo: `${siteUrl}/favicon.png`,
        image: `${siteUrl}/favicon.png`,
        email: 'info@alexone.design',
        telephone: '+91-82490-46203',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rasulgarh',
          addressLocality: 'Bhubaneswar',
          addressRegion: 'Odisha',
          addressCountry: 'IN',
        },
        areaServed: { '@type': 'City', name: 'Bhubaneswar' },
        sameAs: [
          'https://www.instagram.com/alexone_interior',
          'https://www.facebook.com/alexoneinterior',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#service`,
        name: 'Alexone Interior Design',
        provider: { '@id': `${siteUrl}/#organization` },
        serviceType: ['Interior design', 'Landscape design', 'Commercial interior design'],
        areaServed: 'India',
      },
    ],
  };

  const script = document.createElement('script');
  script.id = JSON_LD_ID;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}
