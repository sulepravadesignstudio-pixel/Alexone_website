import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  onGoBack?: () => void;
  /** Opens the same enquiry form as the Contact page */
  onOpenEnquiry: () => void;
}

export default function Navbar({ onNavigate, currentPage, onGoBack, onOpenEnquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Spaces', id: 'spaces' },
    { name: 'Materials', id: 'materials' },
    { name: 'Partners', id: 'partners' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400`}
      style={{
        background: isScrolled
          ? 'linear-gradient(90deg, rgba(25,39,6,0.98) 0%, rgba(40,64,9,0.97) 32%, rgba(84,112,18,0.95) 68%, rgba(28,44,7,0.98) 100%)'
          : 'linear-gradient(90deg, rgba(29,46,7,0.98) 0%, rgba(50,76,11,0.97) 32%, rgba(97,129,21,0.95) 68%, rgba(33,51,8,0.98) 100%)',
        borderBottom: '1px solid rgba(226,201,126,0.28)',
        backdropFilter: 'blur(22px)',
        padding: isScrolled ? '12px 0' : '16px 0',
        boxShadow: '0 18px 60px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo — click goes back to landing */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => onNavigate('home')}
          title="Go to home"
        >
          <img
            src="/favicon-removebg-preview.png"
            alt="Alexone"
            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-[5rem]'}`}
          />
          <span className="hidden xl:inline-flex items-center gap-2 rounded-full border border-white/14 bg-black/15 px-3 py-1 text-[9px] uppercase tracking-[0.34em] text-white/78 transition-colors duration-300 group-hover:border-[#E2C97E]/35 group-hover:text-[#FFF3D0]">
            <Sparkles size={10} className="text-[#E2C97E]" />
            Luxury Design Studio
          </span>
        </motion.div>

        {/* Gold divider line */}
        <div className="hidden md:block h-7 w-px bg-[#E2C97E]/35 mx-5" />

        {/* Desktop nav */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              onClick={() => onNavigate(item.id)}
              className="relative group flex flex-col items-center gap-1 rounded-full px-3 py-2 transition-all duration-300 hover:bg-black/16"
            >
              <span
                className={`text-[11px] uppercase tracking-[0.26em] font-medium transition-colors duration-300 ${
                  currentPage === item.id
                    ? 'text-[#FFF3D0]'
                    : 'text-white/82 group-hover:text-white'
                }`}
                style={{ textShadow: currentPage === item.id ? '0 0 18px rgba(226,201,126,0.24)' : '0 1px 2px rgba(0,0,0,0.22)' }}
              >
                {item.name}
              </span>
              {/* animated underline */}
              <motion.span
                className="absolute -bottom-1 left-0 h-px bg-[#C9A84C]"
                initial={false}
                animate={{ width: currentPage === item.id ? '100%' : '0%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A84C]/50 transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}

          {/* Book Consultation CTA */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            onClick={() => onOpenEnquiry()}
            className="ml-4 rounded-full border border-[#E2C97E]/55 bg-black/12 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.32em] text-[#FFF3D0] transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#1a2108] hover:border-[#C9A84C] hover:shadow-[0_10px_26px_rgba(201,168,76,0.22)]"
          >
            Enquire
          </motion.button>
          {onGoBack && (
            <button
              onClick={onGoBack}
              className="text-[10px] uppercase tracking-[0.28em] text-white/72 transition-colors duration-300 hover:text-[#FFF3D0]"
            >
              Intro
            </button>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-full border border-white/14 bg-black/12 p-2 text-white/90 transition-colors hover:text-[#FFF3D0]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(34,53,8,0.99) 0%, rgba(58,85,12,0.97) 45%, rgba(28,43,7,0.99) 100%)',
              borderTop: '1px solid rgba(201,168,76,0.15)',
            }}
          >
            <div className="flex flex-col gap-0 px-6 py-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-4 text-left text-sm uppercase tracking-[0.24em] border-b border-white/5 last:border-0 transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-[#FFF3D0]'
                      : 'text-white/82 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  onOpenEnquiry();
                  setIsMobileMenuOpen(false);
                }}
                className="mt-2 w-full rounded-full border border-[#E2C97E]/55 bg-black/12 py-3.5 text-center text-[10px] font-medium uppercase tracking-[0.32em] text-[#FFF3D0] transition-colors hover:bg-[#C9A84C]/90 hover:text-[#1a2108]"
              >
                Enquire
              </button>
              <button
                onClick={() => {
                  onGoBack?.();
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 rounded-full border border-[#C9A84C]/45 bg-black/10 py-3 text-center text-[10px] uppercase tracking-[0.32em] text-[#FFF3D0]"
              >
                ← Back to Intro
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
