import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#C9A84C]/30 ${
        isScrolled
          ? 'py-3 shadow-[0_4px_32px_rgba(100,120,20,0.13)]'
          : 'py-5 shadow-[0_2px_16px_rgba(100,120,20,0.08)]'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <img
            src="/favicon.png"
            alt="Alexone"
            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'}`}
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onNavigate(item.id)}
              className={`text-xs uppercase tracking-[0.2em] transition-colors hover:text-[#C9A84C] ${
                currentPage === item.id ? 'text-[#C9A84C]' : 'text-[#2C2520]/70'
              }`}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#2C2520]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-[#C9A84C]/20 py-8 px-6 md:hidden"
        >
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-sm uppercase tracking-[0.2em] text-left ${
                  currentPage === item.id ? 'text-[#C9A84C]' : 'text-[#2C2520]/70'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
