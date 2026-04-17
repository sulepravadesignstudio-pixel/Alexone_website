import { motion } from 'motion/react';
import { ArrowRight, Facebook, Instagram, Linkedin, MapPin, Phone, Youtube } from 'lucide-react';
import alexoneWordmark from '../assets/alexone-wordmark.svg';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const footerLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'spaces' },
  { name: 'Materials', id: 'materials' },
  { name: 'Partners', id: 'partners' },
  { name: 'Contact', id: 'contact' },
];

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com', icon: Instagram },
  { name: 'Facebook', href: 'https://www.facebook.com', icon: Facebook },
  { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
  { name: 'YouTube', href: 'https://www.youtube.com', icon: Youtube },
];

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[#E2C97E]/12 bg-[linear-gradient(180deg,#17130F_0%,#0D0A08_100%)] px-6 pt-20 pb-10 text-white">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#C9A84C]/10 blur-3xl" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-white/4 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 rounded-[2rem] border border-white/8 bg-white/5 p-8 backdrop-blur-sm md:p-10"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <img src={alexoneWordmark} alt="Alexone" className="h-10 w-auto md:h-12" />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/68">
                Premium interior, exterior, and landscape stories designed to feel immersive, refined,
                and unforgettable from the first impression to the final detail.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C9A84C] px-7 py-4 text-xs font-semibold uppercase tracking-[0.32em] text-white transition-all duration-300 hover:bg-[#E2C97E]"
              >
                Start Your Project
                <ArrowRight size={14} />
              </button>
              <button
                onClick={() => onNavigate('spaces')}
                className="rounded-full border border-white/14 px-7 py-4 text-xs uppercase tracking-[0.32em] text-white/78 transition-all duration-300 hover:border-[#E2C97E]/55 hover:text-[#E2C97E]"
              >
                Explore Portfolio
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-12 pb-14 md:grid-cols-2 xl:grid-cols-[1.2fr_0.75fr_0.95fr]">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.38em] text-[#E2C97E]">Studio Note</p>
            <h3 className="max-w-lg font-serif text-4xl leading-tight text-white md:text-5xl">
              Spaces with more mood, depth, and elegance.
            </h3>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Residential', 'Commercial', 'Landscape', 'Exterior'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/65"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.38em] text-[#E2C97E]">Navigation</p>
            <div className="grid grid-cols-2 gap-4">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="group text-left text-sm text-white/66 transition-colors duration-300 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2">
                    {link.name}
                    <ArrowRight size={13} className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.38em] text-[#E2C97E]">Connect</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/68">
                <MapPin size={16} className="mt-1 text-[#E2C97E]" />
                <p className="text-sm leading-relaxed">Rasulgarh, Bhubaneswar, Odisha</p>
              </div>
              <div className="flex items-center gap-3 text-white/68">
                <Phone size={16} className="text-[#E2C97E]" />
                <p className="text-sm">+91 82490 46203</p>
              </div>
              <div className="pt-4 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/72 transition-all duration-300 hover:border-[#E2C97E]/45 hover:bg-[#E2C97E]/10 hover:text-[#E2C97E]"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/8 pt-8 text-[10px] uppercase tracking-[0.24em] text-white/38 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Alexone by Suleprava. All rights reserved.</p>
          <p>Interior, Exterior, Landscape & Luxury Design</p>
        </div>
      </div>
    </footer>
  );
}
