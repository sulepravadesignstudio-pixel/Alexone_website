/**
 * POSTs enquiry to Google Apps Script web app (or compatible endpoint).
 * Uses application/x-www-form-urlencoded + fetch no-cors so the browser can send cross-origin
 * without a preflight (Apps Script does not send CORS headers for JSON responses).
 */
export interface EnquiryPayload {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}

export type SubmitEnquiryResult = { ok: true } | { ok: false; error: string };

export async function submitEnquiry(data: EnquiryPayload): Promise<SubmitEnquiryResult> {
  const url = import.meta.env.VITE_ENQUIRY_WEBHOOK_URL;
  if (!url || typeof url !== 'string' || !url.trim()) {
    return {
      ok: false,
      error:
        'Enquiries are not configured yet. Please email sulepravadesignstudio@gmail.com or call us directly.',
    };
  }

  const params = new URLSearchParams();
  params.set('name', data.name.trim());
  params.set('phone', data.phone.trim());
  params.set('email', data.email.trim());
  params.set('projectType', data.projectType.trim());
  params.set('message', data.message.trim());

  try {
    await fetch(url.trim(), {
      method: 'POST',
      body: params,
      mode: 'no-cors',
      cache: 'no-store',
    });
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: 'Something went wrong. Please try again or email sulepravadesignstudio@gmail.com.',
    };
  }
}
