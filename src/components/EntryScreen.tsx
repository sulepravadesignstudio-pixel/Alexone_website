import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import preloaderArt from '../assets/preloader-art-nobg.png';
import { RESIDENTIAL_ENTRY_STACK, RESIDENTIAL_HERO_IMAGE } from '../constants';

const BRAND = 'ALEXONE'.split('');

interface EntryScreenProps {
  onEnter: () => void;
  key?: string;
}

export default function EntryScreen({ onEnter }: EntryScreenProps) {
  const [exiting, setExiting] = useState(false);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(onEnter, 900);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="entry"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[100] overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Full-bleed background photo */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: 'easeOut' }}
          >
            <img
              src={RESIDENTIAL_HERO_IMAGE}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Dark overlay â€” matches reference depth */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

          {/* Thin horizontal rule top */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
            className="absolute top-10 left-0 w-full h-px origin-left"
            style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.5),transparent)' }}
          />
          {/* Thin horizontal rule bottom */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.55, ease: 'easeOut' }}
            className="absolute bottom-10 left-0 w-full h-px origin-right"
            style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.5),transparent)' }}
          />

          {/* Floating image stack */}
          <div className="absolute inset-y-0 right-[6%] z-10 hidden xl:flex items-center pointer-events-none">
            <div className="relative h-[28rem] w-[24rem]" style={{ perspective: '1600px' }}>
              {RESIDENTIAL_ENTRY_STACK.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 60, y: 40 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.9 + index * 0.18 }}
                  className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/15 bg-white/8 shadow-2xl backdrop-blur-sm"
                  style={{
                    transform: `translate3d(${index * -38}px, ${index * 34}px, ${index * -80}px) rotateX(${8 - index * 2}deg) rotateY(${18 - index * 8}deg) rotateZ(${index === 1 ? -4 : index * 2}deg)`,
                  }}
                >
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.38em] text-[#E2C97E]">
                      Residential
                    </p>
                    <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/65">{item.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="relative z-10 flex max-w-4xl flex-col items-center text-center px-6">

            {/* Brand logo mark */}
            <motion.img
              src={preloaderArt}
              alt="Alexone"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                width: 140,
                height: 140,
                objectFit: 'contain',
                marginBottom: '0.5rem',
                filter: 'drop-shadow(0 0 24px rgba(201,168,76,0.5))',
              }}
            />


            {/* ALEXONE â€” letter by letter */}
            <div className="flex items-end mb-4 overflow-hidden" style={{ gap: '0.02em' }}>
              {BRAND.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.6 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontSize: 'clamp(3.5rem, 11vw, 9rem)',
                    fontWeight: 300,
                    letterSpacing: '0.14em',
                    color: '#ffffff',
                    lineHeight: 1,
                    display: 'inline-block',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-[11px] uppercase text-[#E2C97E] mb-8 font-light"
              style={{ letterSpacing: '0.35em' }}
            >
              By Suleprava Interior &amp; Exterior Design
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-white/60 font-light max-w-md leading-relaxed mb-12"
              style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)', fontStyle: 'italic' }}
            >
              Step into a residential showcase built from your own design renders,
              presented with the same cinematic arrival feeling as the reference experience.
            </motion.p>

            {/* Enter button */}
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.7 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleEnter}
              className="group relative overflow-hidden px-14 py-4 border border-white/30 text-white text-xs uppercase tracking-[0.45em] hover:border-[#E2C97E]/80 transition-colors duration-500"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Enter the Experience
              </span>
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="absolute inset-0 bg-[#C9A84C]"
              />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}