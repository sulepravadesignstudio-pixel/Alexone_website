import { motion } from 'motion/react';
import ContactEnquiryForm from '../components/ContactEnquiryForm';
import { RAIL_TEXT_INSET } from '../layoutRail';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { RESIDENTIAL_HERO_IMAGE } from '../constants';
import living09 from '../assets/residential/living-09.jpg';

interface ContactProps {
  onNavigate: (page: string) => void;
}

const CONTACT_POINTS = [
  {
    icon: MapPin,
    label: 'Head Office',
    lines: ['Rasulgarh, Bhubaneswar, Odisha'],
  },
  {
    icon: Phone,
    label: 'Call Us',
    lines: ['+91 70089 56973', '+91 98278 45937', '+91 82490 46203'],
    hrefs: ['tel:+917008956973', 'tel:+919827845937', 'tel:+918249046203'],
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['info@alexone.design'],
    hrefs: ['mailto:info@alexone.design'],
  },
] as const;

const SOCIALS = [
  { Icon: Instagram, href: 'https://www.instagram.com/alexone_interior', label: 'Instagram' },
  { Icon: Facebook, href: 'https://www.facebook.com/alexoneinterior', label: 'Facebook' },
  { Icon: Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
] as const;

export default function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="min-h-screen bg-[#F7F2E9]">
      {/* Compact contact hero */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src={RESIDENTIAL_HERO_IMAGE}
            alt="Alexone luxury interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#14110E]/82" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(201,168,76,0.16),transparent_45%)]" />
        </div>

        <div className={`container relative z-10 mx-auto px-6 py-10 md:py-12 ${RAIL_TEXT_INSET}`}>
          <div className="max-w-3xl">
            <p className="mb-3 text-[10px] uppercase tracking-[0.42em] text-[#E2C97E]">
              Begin a conversation
            </p>
            <h1
              className="font-serif leading-[1.05] text-white"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3.25rem)', fontWeight: 400 }}
            >
              Every exceptional space starts with an{' '}
              <span className="text-[#E2C97E]">introduction.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-white/70 md:text-[0.98rem]">
              Tell us what you are imagining. We will respond with a considered direction for your
              home, workplace, or hospitality project.
            </p>
            <a
              href="#project-enquiry"
              className="mt-6 inline-flex items-center gap-2 border border-[#E2C97E]/45 bg-[#C9A84C]/15 px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-[#FFF3D0] transition-colors hover:bg-[#C9A84C]/28"
            >
              Start your enquiry
              <ArrowDown size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Studio details */}
      <section className="border-b border-[#C9A84C]/15 bg-[#17130F] px-6 py-8">
        <div className={`container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${RAIL_TEXT_INSET}`}>
          {CONTACT_POINTS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex gap-4">
                <Icon size={18} className="mt-1 shrink-0 text-[#E2C97E]" strokeWidth={1.4} />
                <div>
                  <p className="text-[9px] uppercase tracking-[0.34em] text-[#C9A84C]">{item.label}</p>
                  <div className="mt-2 space-y-1">
                    {item.lines.map((line, i) => {
                      const href = 'hrefs' in item ? item.hrefs?.[i] : undefined;
                      return href ? (
                        <a key={line} href={href} className="block text-sm text-white/72 hover:text-[#E2C97E]">
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-sm text-white/72">{line}</p>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex gap-4">
            <Clock3 size={18} className="mt-1 shrink-0 text-[#E2C97E]" strokeWidth={1.4} />
            <div>
              <p className="text-[9px] uppercase tracking-[0.34em] text-[#C9A84C]">Studio Hours</p>
              <p className="mt-2 text-sm text-white/72">Mon–Sat · 10:00–19:00</p>
              <p className="mt-1 text-xs text-white/45">Visits by appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section id="project-enquiry" className="relative overflow-hidden px-6 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_10%,rgba(201,168,76,0.09),transparent_38%)]" />
        <div className={`container relative mx-auto grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 ${RAIL_TEXT_INSET}`}>
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#9A7324]">Project inquiry</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.04] text-[#1A1512] md:text-5xl">
              Tell us what
              <br />
              you want to create.
            </h2>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-[#5C524A]">
              The more context you share, the more thoughtfully we can respond. Our studio reviews
              each enquiry personally.
            </p>

            <div className="mt-10 space-y-5 border-t border-[#C9A84C]/25 pt-8">
              {[
                'Residential, commercial, hospitality, and exterior projects',
                'A considered response from our design team',
                'Your information stays private with the studio',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-[#4A4038]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/12 text-[#9A7324]">
                    <Check size={11} />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2C2520]/15 text-[#2C2520]/55 transition-colors hover:border-[#C9A84C] hover:text-[#9A7324]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            className="relative border border-[#C9A84C]/25 bg-[linear-gradient(160deg,#FFFDF9_0%,#F2E7D5_100%)] p-6 shadow-[0_30px_90px_-30px_rgba(44,37,32,0.28)] md:p-10"
          >
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#B88B34] via-[#E2C97E] to-[#B88B34]" />
            <p className="mb-8 text-[10px] uppercase tracking-[0.38em] text-[#9A7324]">
              Your project details
            </p>
            <ContactEnquiryForm idPrefix="page-contact" onSuccess={() => onNavigate('thank-you')} />
          </motion.div>
        </div>
      </section>

      {/* Closing image invitation */}
      <section className="relative min-h-[300px] overflow-hidden px-6 py-16 md:min-h-[380px]">
        <img src={living09} alt="Alexone interior detail" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,13,11,0.9),rgba(15,13,11,0.48))]" />
        <div className={`container relative mx-auto ${RAIL_TEXT_INSET}`}>
          <MessageCircle className="text-[#E2C97E]" size={24} strokeWidth={1.4} />
          <p className="mt-5 text-[10px] uppercase tracking-[0.4em] text-[#E2C97E]">Prefer a quick conversation?</p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-white md:text-5xl">
            Speak with the studio directly.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+917008956973"
              className="inline-flex items-center gap-2 bg-[#C9A84C] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#17130F]"
            >
              Call the studio <ArrowUpRight size={13} />
            </a>
            <a
              href="https://wa.me/917008956973"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 bg-black/15 px-6 py-3.5 text-[10px] uppercase tracking-[0.28em] text-white backdrop-blur-sm"
            >
              WhatsApp us <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
