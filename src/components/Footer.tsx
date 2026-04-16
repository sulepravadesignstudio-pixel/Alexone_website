import { motion } from 'motion/react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'spaces' },
    { name: 'Materials', id: 'materials' },
    { name: 'Partners', id: 'partners' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-luxury-forest border-t border-luxury-moss pt-20 pb-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif tracking-widest text-luxury-charcoal mb-4">
              ALEXONE
              <span className="block text-xs tracking-[0.3em] font-sans text-luxury-olive uppercase mt-2">
                By Suleprava
              </span>
            </h2>
            <p className="text-luxury-charcoal/70 max-w-md leading-relaxed font-light">
              Crafting luxurious spaces with timeless design language. We don't just design interiors. We shape experiences that stay with you.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-luxury-olive mb-6">Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-luxury-charcoal/70 hover:text-luxury-gold transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-luxury-olive mb-6">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-luxury-charcoal/70 hover:text-luxury-gold transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#" className="text-sm text-luxury-charcoal/70 hover:text-luxury-gold transition-colors">Facebook</a>
              </li>
              <li>
                <a href="#" className="text-sm text-luxury-charcoal/70 hover:text-luxury-gold transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="text-sm text-luxury-charcoal/70 hover:text-luxury-gold transition-colors">Pinterest</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-moss/50 pt-10 flex flex-col md:row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-charcoal/50">
            © {currentYear} ALEXONE BY SULEPRAVA. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-charcoal/50">
            INTERIOR & EXTERIOR DESIGNING
          </p>
        </div>
      </div>
    </footer>
  );
}
