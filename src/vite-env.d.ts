/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Production origin, e.g. https://www.alexone.design — used for canonical & OG URLs */
  readonly VITE_SITE_URL?: string;
  /** Google Apps Script web app URL (deploy “Anyone”) — appends rows to Sheet + sends email */
  readonly VITE_ENQUIRY_WEBHOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
