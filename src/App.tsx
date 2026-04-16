/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import EntryScreen from './components/EntryScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Spaces from './pages/Spaces';
import Materials from './pages/Materials';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import CategoryDetail from './pages/CategoryDetail';

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-3">

      {/* Chat bubble popup */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 340, damping: 26 }}
            className="relative bg-white rounded-2xl rounded-br-sm shadow-2xl shadow-black/15 px-5 py-4 max-w-[230px] border border-[#25D366]/20"
          >
            {/* Green top accent */}
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E]" />
            <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-1 font-medium">Alexone Design</p>
            <p className="text-[13px] text-gray-800 font-medium leading-snug">
              Hi there! 👋<br />
              How can we help you with your space?
            </p>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[10px] text-gray-400">Typically replies instantly</span>
            </div>
            {/* Tail */}
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-r border-b border-[#25D366]/20 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.a
        href="https://wa.me/918249046203?text=Hi%2C%20I%27m%20interested%20in%20your%20interior%20design%20services."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xl shadow-[#25D366]/50 cursor-pointer"
        style={{ boxShadow: '0 8px 32px rgba(37,211,102,0.45)' }}
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <span className="absolute inset-[-6px] rounded-full border-2 border-[#25D366]/30 animate-pulse" />
        {WA_ICON}
      </motion.a>
    </div>
  );
}

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [prevPage, setPrevPage] = useState('');

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;
    setPrevPage(currentPage);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'spaces':
        return <Spaces onNavigate={handleNavigate} />;
      case 'materials':
        return <Materials />;
      case 'partners':
        return <Partners />;
      case 'contact':
        return <Contact />;
      case 'residential':
      case 'commercial':
      case 'hotel':
      case 'bar-lounge':
      case 'workspace':
      case 'landscape':
      case 'swimming-pool':
      case 'exterior':
      case 'cafe':
      case 'saloon':
        return <CategoryDetail categoryId={currentPage} onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-luxury-ivory text-luxury-charcoal selection:bg-luxury-gold/30 selection:text-luxury-charcoal">
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <EntryScreen key="entry" onEnter={() => setHasEntered(true)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
            
            <main>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                  {renderPage()}
                </motion.div>
              </AnimatePresence>
            </main>

            <Footer onNavigate={handleNavigate} />

            {/* Floating WhatsApp CTA */}
            <WhatsAppButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
