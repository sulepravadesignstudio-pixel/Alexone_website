import { AnimatePresence, motion } from 'motion/react';
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

  const heroCard = RESIDENTIAL_ENTRY_STACK[0];
  const secondaryCards = RESIDENTIAL_ENTRY_STACK.slice(1);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="entry"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[100] overflow-hidden"
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: 'easeOut' }}
          >
            <img src={RESIDENTIAL_HERO_IMAGE} alt="" className="h-full w-full object-cover" />
          </motion.div>

          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(201,168,76,0.18),transparent_28%),radial-gradient(circle_at_76%_24%,rgba(226,201,126,0.14),transparent_22%),radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.62)_100%)]" />

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
            className="absolute left-0 top-10 h-px w-full origin-left"
            style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.5),transparent)' }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.55, ease: 'easeOut' }}
            className="absolute bottom-20 left-0 h-px w-full origin-right"
            style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.5),transparent)' }}
          />

          {/* Bottom info strip — address + phones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="absolute bottom-0 left-0 w-full z-20"
            style={{
              background: 'linear-gradient(90deg, rgba(28,36,8,0.92) 0%, rgba(46,58,16,0.88) 50%, rgba(28,36,8,0.92) 100%)',
              borderTop: '1px solid rgba(201,168,76,0.2)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-y-2 px-6 py-3 md:px-10 lg:px-14">
              {/* Address */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-px bg-[#C9A84C]/50" />
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">
                  Head Office: <span className="text-[#E2C97E]/80">Rasulgarh, Bhubaneswar, Odisha</span>
                </p>
              </div>
              {/* Phones */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
                {['+91 82490 46203', '+91 70089 56973', '+91 98278 45937'].map((num) => (
                  <a
                    key={num}
                    href={`tel:${num.replace(/\s/g, '')}`}
                    className="text-[10px] uppercase tracking-[0.22em] text-white/50 transition-colors duration-200 hover:text-[#E2C97E]"
                  >
                    {num}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-center px-6 py-16 md:px-10 lg:px-14">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] xl:gap-20">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="mb-5 text-[10px] uppercase tracking-[0.48em] text-[#E2C97E]/85"
                >
                  Interior and Exterior Studio
                </motion.p>

                <motion.img
                  src={preloaderArt}
                  alt="Alexone"
                  initial={{ opacity: 0, y: -24, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  style={{
                    width: 140,
                    height: 140,
                    objectFit: 'contain',
                    marginBottom: '0.5rem',
                    filter: 'drop-shadow(0 0 24px rgba(201,168,76,0.45))',
                  }}
                />

                <div
                  className="relative mb-4 flex flex-wrap items-end justify-center overflow-hidden lg:justify-start"
                  style={{ gap: '0.02em' }}
                >
                  {BRAND.map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 90, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{
                        duration: 0.85,
                        delay: 0.45 + i * 0.11,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        fontFamily: 'Cormorant Garamond, Georgia, serif',
                        fontSize: 'clamp(3.4rem, 10vw, 7.75rem)',
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
                  <motion.div
                    className="pointer-events-none absolute inset-y-[18%] -left-[18%] w-[30%] bg-white/25 blur-2xl"
                    animate={{ x: ['0%', '420%'] }}
                    transition={{ duration: 1.8, delay: 1.7, repeat: Infinity, repeatDelay: 4 }}
                  />
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 1.2 }}
                  className="mb-6 text-[11px] uppercase font-light text-[#E2C97E]"
                  style={{ letterSpacing: '0.35em' }}
                >
                  By Suleprava Interior &amp; Exterior Design
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.35 }}
                  className="mb-10 max-w-xl text-white/70 font-light leading-relaxed"
                  style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.08rem)' }}
                >
                  Step into a cinematic residential showcase shaped from your own design renders,
                  with a sharper composition, bolder movement, and a more premium first impression.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.55 }}
                  className="mb-10 flex flex-wrap justify-center gap-3 lg:justify-start"
                >
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/65 backdrop-blur-md">
                    Bespoke Interiors
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/65 backdrop-blur-md">
                    Premium Execution
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/65 backdrop-blur-md">
                    3D Visual Journey
                  </div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.8 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleEnter}
                  className="group relative overflow-hidden border border-white/30 px-14 py-4 text-xs uppercase tracking-[0.45em] text-white transition-colors duration-500 hover:border-[#E2C97E]/80"
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
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

              <div className="relative hidden lg:flex justify-end">
                <div className="relative h-[38rem] w-[31rem]" style={{ perspective: '2200px' }}>
                  <motion.div
                    className="absolute left-10 top-10 h-32 w-32 rounded-full border border-[#E2C97E]/25 bg-[#C9A84C]/12 blur-2xl"
                    animate={{
                      scale: [1, 1.18, 0.96, 1],
                      opacity: [0.3, 0.55, 0.28, 0.3],
                      x: [0, 24, -12, 0],
                      y: [0, -14, 10, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute bottom-10 right-6 h-40 w-40 rounded-full bg-white/10 blur-3xl"
                    animate={{
                      scale: [1, 0.92, 1.1, 1],
                      opacity: [0.18, 0.28, 0.16, 0.18],
                      x: [0, -18, 12, 0],
                      y: [0, 18, -10, 0],
                    }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  <motion.div
                    initial={{ opacity: 0, x: 95, y: 10, rotateY: -16, scale: 0.92 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: [0, -14, 0],
                      rotateY: [0, 6, 0],
                      rotateX: [0, -2, 0],
                      scale: [1, 1.025, 1],
                    }}
                    transition={{
                      opacity: { duration: 0.9, delay: 0.55 },
                      x: { duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] },
                      y: { duration: 7.5, repeat: Infinity, ease: 'easeInOut' },
                      rotateY: { duration: 8.5, repeat: Infinity, ease: 'easeInOut' },
                      rotateX: { duration: 8.5, repeat: Infinity, ease: 'easeInOut' },
                      scale: { duration: 7.5, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="absolute right-6 top-1/2 h-[31rem] w-[22rem] -translate-y-1/2 overflow-hidden rounded-[2.75rem] border border-white/15 bg-white/10 shadow-[0_40px_140px_rgba(0,0,0,0.52)] backdrop-blur-sm"
                  >
                    <img src={heroCard.image} alt={heroCard.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-white/10" />
                    <motion.div
                      className="absolute -left-1/3 top-0 h-full w-1/2 bg-white/20 blur-2xl"
                      animate={{ x: ['-120%', '270%'] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 3.6, ease: 'easeInOut' }}
                    />
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                      <div className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[10px] uppercase tracking-[0.34em] text-[#E2C97E] backdrop-blur-md">
                        Signature Space
                      </div>
                      <div className="h-12 w-12 rounded-full border border-white/15 bg-white/10 backdrop-blur-md" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <p className="mb-2 text-[10px] uppercase tracking-[0.42em] text-[#E2C97E]">
                        Alexone Living
                      </p>
                      <h3 className="font-serif text-[2.1rem] leading-none text-white">{heroCard.title}</h3>
                      <p className="mt-3 max-w-[16rem] text-sm text-white/72">{heroCard.caption}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30, y: 40, rotate: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: [0, -12, 0],
                      rotate: [-10, -6, -10],
                    }}
                    transition={{
                      opacity: { duration: 0.8, delay: 0.9 },
                      x: { duration: 0.95, delay: 0.9, ease: [0.22, 1, 0.36, 1] },
                      y: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
                      rotate: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="absolute left-2 top-16 h-[11rem] w-[16rem] overflow-hidden rounded-[2rem] border border-white/15 bg-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                  >
                    <img src={secondaryCards[0].image} alt={secondaryCards[0].title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[9px] uppercase tracking-[0.28em] text-[#E2C97E]">Featured Detail</p>
                      <h3 className="mt-1 font-serif text-xl text-white">{secondaryCards[0].title}</h3>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.88 }}
                    animate={{
                      opacity: 1,
                      y: [0, 10, 0],
                      scale: [1, 1.03, 1],
                      rotate: [8, 4, 8],
                    }}
                    transition={{
                      opacity: { duration: 0.9, delay: 1.05 },
                      y: { duration: 7.2, repeat: Infinity, ease: 'easeInOut' },
                      scale: { duration: 7.2, repeat: Infinity, ease: 'easeInOut' },
                      rotate: { duration: 7.2, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="absolute bottom-8 left-10 h-[12.5rem] w-[12.5rem] overflow-hidden rounded-full border border-white/15 bg-white/8 shadow-[0_22px_70px_rgba(0,0,0,0.38)]"
                  >
                    <img src={secondaryCards[1].image} alt={secondaryCards[1].title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.58)_100%)]" />
                    <div className="absolute inset-x-0 bottom-5 px-4 text-center">
                      <p className="text-[8px] uppercase tracking-[0.26em] text-[#E2C97E]">Curated Corner</p>
                      <h3 className="mt-1 font-serif text-lg leading-none text-white">{secondaryCards[1].title}</h3>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30, y: 20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: [0, -8, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.8, delay: 1.2 },
                      x: { duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] },
                      y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="absolute right-0 top-8 rounded-[1.6rem] border border-white/12 bg-black/22 px-5 py-4 backdrop-blur-md"
                  >
                    <p className="text-[9px] uppercase tracking-[0.34em] text-[#E2C97E]">Spatial Story</p>
                    <div className="mt-3 flex items-end gap-3">
                      <span className="font-serif text-4xl leading-none text-white">03</span>
                      <span className="max-w-[6rem] text-[11px] leading-snug text-white/60">
                        layers of immersive design
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}