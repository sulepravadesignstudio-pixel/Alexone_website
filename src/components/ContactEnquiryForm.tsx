import { useState, type FormEvent } from 'react';
import { ENQUIRY_PROJECT_TYPE_OPTIONS } from '../constants';
import { submitEnquiry } from '../lib/submitEnquiry';

interface ContactEnquiryFormProps {
  idPrefix?: string;
  /** Called after a successful submit (e.g. navigate to thank-you, close modal). */
  onSuccess?: () => void;
}

export default function ContactEnquiryForm({ idPrefix = 'enquiry', onSuccess }: ContactEnquiryFormProps) {
  const pf = (name: string) => `${idPrefix}-${name}`;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !phone.trim() || !email.trim() || !projectType || !message.trim()) {
      setError('Please fill in all fields, including project type.');
      return;
    }

    setSubmitting(true);
    const result = await submitEnquiry({
      name,
      phone,
      email,
      projectType,
      message,
    });
    setSubmitting(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    setName('');
    setPhone('');
    setEmail('');
    setProjectType('');
    setMessage('');
    onSuccess?.();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      {error && (
        <p
          className="rounded-sm border border-red-200 bg-red-50/90 px-4 py-3 text-sm text-red-900/90"
          role="alert"
        >
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor={pf('name')} className="text-[10px] uppercase tracking-widest text-luxury-gold">
            Full Name
          </label>
          <input
            id={pf('name')}
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className="w-full border-b border-luxury-charcoal/20 bg-transparent py-3 text-luxury-charcoal outline-none transition-colors focus:border-luxury-gold"
            placeholder="John Doe"
            disabled={submitting}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={pf('phone')} className="text-[10px] uppercase tracking-widest text-luxury-gold">
            Phone Number
          </label>
          <input
            id={pf('phone')}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(ev) => setPhone(ev.target.value)}
            className="w-full border-b border-luxury-charcoal/20 bg-transparent py-3 text-luxury-charcoal outline-none transition-colors focus:border-luxury-gold"
            placeholder="+91 00000 00000"
            disabled={submitting}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor={pf('email')} className="text-[10px] uppercase tracking-widest text-luxury-gold">
          Email Address
        </label>
        <input
          id={pf('email')}
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          className="w-full border-b border-luxury-charcoal/20 bg-transparent py-3 text-luxury-charcoal outline-none transition-colors focus:border-luxury-gold"
          placeholder="john@example.com"
          disabled={submitting}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor={pf('project')} className="text-[10px] uppercase tracking-widest text-luxury-gold">
          Project Type
        </label>
        <select
          id={pf('project')}
          name="projectType"
          value={projectType}
          onChange={(ev) => setProjectType(ev.target.value)}
          className="w-full appearance-none border-b border-luxury-charcoal/20 bg-transparent py-3 text-luxury-charcoal outline-none transition-colors focus:border-luxury-gold disabled:opacity-60"
          disabled={submitting}
        >
          <option value="" className="bg-white text-luxury-charcoal/50">
            Select project type
          </option>
          {ENQUIRY_PROJECT_TYPE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-white">
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor={pf('message')} className="text-[10px] uppercase tracking-widest text-luxury-gold">
          Your Message
        </label>
        <textarea
          id={pf('message')}
          name="message"
          rows={4}
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
          className="w-full resize-none border-b border-luxury-charcoal/20 bg-transparent py-3 text-luxury-charcoal outline-none transition-colors focus:border-luxury-gold"
          placeholder="Tell us about your vision..."
          disabled={submitting}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 w-full bg-luxury-gold py-5 text-xs uppercase tracking-[0.4em] text-white transition-all duration-500 hover:bg-luxury-charcoal disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  );
}
