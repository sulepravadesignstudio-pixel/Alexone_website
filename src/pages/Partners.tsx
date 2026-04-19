import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'motion/react';
import { RAIL_TEXT_INSET } from '../layoutRail';
import { partnerLogoFavicon, partnerLogoPrimary } from '../partnerLogos';
import { MATERIALS } from '../constants';
import { ArrowRight, Award, Shield, Zap, Star } from 'lucide-react';

/** Brand mark: Wikimedia / Clearbit → favicon → initials */
function PartnerLogoImage({
  partner,
  catColor,
  size = 'md',
}: {
  partner: string;
  catColor: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const initials = partner
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const sources = [partnerLogoPrimary(partner), partnerLogoFavicon(partner)].filter((u): u is string => !!u);
  const [srcIdx, setSrcIdx] = useState(0);

  const boxW = size === 'lg' ? 'min-w-[160px] max-w-[180px]' : size === 'sm' ? 'min-w-[72px] max-w-[100px]' : 'min-w-[100px] max-w-[140px]';
  const boxH = size === 'lg' ? 'h-[72px]' : size === 'sm' ? 'h-10' : 'h-14';

  if (srcIdx >= sources.length) {
    const wh = size === 'sm' ? 'h-9 w-9 text-sm' : 'h-14 w-14 text-xl';
    return (
      <div
        className={`rounded-2xl flex items-center justify-center font-serif transition-all duration-400 group-hover:scale-110 group-hover:rotate-3 shrink-0 ${wh}`}
        style={{
          background: `${catColor}10`,
          color: catColor,
          border: `1px solid ${catColor}25`,
          boxShadow: `0 4px 16px ${catColor}18`,
        }}
      >
        {initials}
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${boxH} ${boxW} mx-auto`}>
      <img
        src={sources[srcIdx]}
        alt=""
        className="max-h-full max-w-full object-contain object-center opacity-[0.92] group-hover:opacity-100 transition-all duration-300"
        onError={() => setSrcIdx((i) => i + 1)}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

/* ─── 3D tilt card (reused from Materials) ─────────────────────────────── */
function TiltCard({ children, className = '', style = {} }: {
  children: React.ReactNode; className?: string; style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });
  const glowX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100]);

  const handleMouse = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800, ...style }}
      className={className}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(201,168,76,0.14) 0%, transparent 60%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

/* ─── partner categories ─────────────────────────────────────────────────── */
const PARTNER_CATEGORIES: Record<string, string[]> = {
  'All':                  MATERIALS.partners,
  'Hardware & Fittings':  ['Ebco', 'Hettich', 'Hafele', 'Tandem'],
  'Panels & Boards':      ['Century', 'Green Panel', 'Airolam'],
  'Doors & Windows':      ['Fenesta', 'Saint-Gobain'],
  'Brands & Furniture':   ['Godrej', 'Livspace', 'Austin', 'Black Cobra', 'VANM'],
};

const CATEGORY_COLORS: Record<string, string> = {
  'Hardware & Fittings': '#C9A84C',
  'Panels & Boards':     '#8B7355',
  'Doors & Windows':     '#6B8E6B',
  'Brands & Furniture':  '#8B6B8B',
};

const WHY_PARTNER = [
  { icon: <Award size={26} />,  title: 'Industry Certified',   desc: 'Every partner is vetted for quality standards and industry compliance before joining the Alexone network.' },
  { icon: <Shield size={26} />, title: 'Warranty Assured',     desc: 'All materials come with manufacturer warranties and Alexone quality guarantees on installation.' },
  { icon: <Zap size={26} />,    title: 'Fast Procurement',     desc: 'Our partner network ensures swift sourcing, reducing project timelines without compromising on quality.' },
  { icon: <Star size={26} />,   title: 'Premium Only',         desc: 'We work exclusively with brands that share our commitment to luxury, precision and lasting value.' },
];

export default function Partners() {
  const [activeCategory, setActiveCategory] = useState('All');
  const displayPartners = PARTNER_CATEGORIES[activeCategory] ?? MATERIALS.partners;

  return (
    <div className="min-h-screen" style={{ background: '#F8F4EE' }}>

      {/* ══ HERO ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ paddingTop: '7rem' }}>
        {/* diagonal split */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(118deg, #F8F4EE 55%, #F0E8D8 55%)' }} />

        {/* subtle grain */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px',
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-16">

            {/* Left text */}
            <div className={`lg:col-span-6 ${RAIL_TEXT_INSET}`}>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                className="flex items-center gap-4 mb-8">
                <div className="h-px w-12" style={{ background: '#C9A84C' }} />
                <p className="text-[10px] uppercase tracking-[0.55em]" style={{ color: '#C9A84C' }}>Collaboration</p>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif font-light leading-[1.02] mb-8"
                style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', color: '#1C1714' }}>
                Our Brand<br /><span style={{ color: '#C9A84C' }}>Partners</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
                className="font-light leading-relaxed max-w-md mb-12"
                style={{ color: 'rgba(44,37,32,0.55)', fontSize: '1.05rem' }}>
                A curated network of trusted brands and collaborators who help us
                deliver excellence in every detail — from hardware to finishes.
              </motion.p>

              {/* stat chips */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                className="flex gap-4 flex-wrap">
                {[
                  { val: '14',  label: 'Brand Partners', icon: '◆' },
                  { val: '5',   label: 'Categories',     icon: '✦' },
                  { val: '10+', label: 'Years Trust',     icon: '●' },
                ].map(s => (
                  <motion.div key={s.label} whileHover={{ y: -5, scale: 1.04 }}
                    className="relative px-6 py-4 bg-white flex flex-col items-center cursor-default"
                    style={{ border: '1px solid rgba(201,168,76,0.25)', boxShadow: '0 8px 30px rgba(44,37,32,0.08)', minWidth: '90px' }}>
                    <span className="text-xs mb-1" style={{ color: 'rgba(201,168,76,0.5)' }}>{s.icon}</span>
                    <span className="font-serif text-3xl font-light" style={{ color: '#C9A84C' }}>{s.val}</span>
                    <span className="text-[8px] uppercase tracking-[0.3em] mt-1 text-center" style={{ color: 'rgba(44,37,32,0.4)' }}>{s.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right — floating partner name stack */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 1 }}
              className="lg:col-span-6 relative hidden lg:flex flex-wrap gap-4 items-center justify-center py-12 px-2">
              {MATERIALS.partners.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, scale: 0.7, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.07, type: 'spring', stiffness: 260, damping: 22 }}
                  whileHover={{ y: -6, scale: 1.06, zIndex: 10 }}
                  className="group relative flex flex-col items-center justify-center gap-2 bg-white px-4 py-4 cursor-default rounded-sm"
                  style={{
                    border: '1px solid rgba(201,168,76,0.2)',
                    boxShadow: `${3 + (i % 4) * 4}px ${4 + (i % 3) * 4}px ${16 + (i % 3) * 10}px rgba(44,37,32,0.07)`,
                    transform: `rotate(${(i % 5 - 2) * 1.5}deg)`,
                    minWidth: '148px',
                  }}
                >
                  <PartnerLogoImage partner={p} catColor="#C9A84C" size="lg" />
                  <span
                    className="text-[9px] uppercase tracking-[0.22em] text-center leading-tight max-w-[9rem]"
                    style={{ color: 'rgba(44,37,32,0.45)' }}
                  >
                    {p}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 pointer-events-none" style={{ background: 'linear-gradient(to bottom,transparent,#F8F4EE)' }} />
      </section>

      {/* ══ MARQUEE ════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden border-y py-5" style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
        <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right,#F8F4EE,transparent)' }} />
        <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left,#F8F4EE,transparent)' }} />
        <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex gap-16 md:gap-20 items-center w-max py-1">
          {[...MATERIALS.partners, ...MATERIALS.partners].map((p, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-1.5 w-[112px] shrink-0 opacity-85 hover:opacity-100 transition-opacity">
              <PartnerLogoImage partner={p} catColor="#C9A84C" size="sm" />
              <span className="text-[8px] uppercase tracking-[0.2em] text-center truncate w-full" style={{ color: 'rgba(44,37,32,0.42)' }}>
                {p}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ══ PARTNER GRID ════════════════════════════════════════════════ */}
      <section className={`container mx-auto px-6 py-20 ${RAIL_TEXT_INSET}`}>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-3 mb-14">
          {Object.keys(PARTNER_CATEGORIES).map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] transition-all duration-300 overflow-hidden"
              style={{
                background: activeCategory === cat ? '#1C1714' : '#fff',
                color: activeCategory === cat ? '#C9A84C' : 'rgba(44,37,32,0.45)',
                border: `1px solid ${activeCategory === cat ? '#1C1714' : 'rgba(201,168,76,0.2)'}`,
                boxShadow: activeCategory === cat ? '0 6px 20px rgba(44,37,32,0.15)' : '0 2px 8px rgba(44,37,32,0.04)',
              }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div layoutId="cat-indicator" className="absolute inset-0 -z-10" style={{ background: '#1C1714' }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
              )}
            </motion.button>
          ))}
        </div>

        {/* Category label */}
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 max-w-[48px]" style={{ background: '#C9A84C' }} />
            <p className="text-[10px] uppercase tracking-[0.45em]" style={{ color: '#C9A84C' }}>
              {displayPartners.length} partner{displayPartners.length !== 1 ? 's' : ''}
              {activeCategory !== 'All' ? ` · ${activeCategory}` : ''}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Partner cards */}
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {displayPartners.map((partner, idx) => {
              const catColor = activeCategory !== 'All' ? (CATEGORY_COLORS[activeCategory] ?? '#C9A84C') : '#C9A84C';
              return (
                <TiltCard
                  key={partner}
                  className="relative bg-white overflow-hidden cursor-default group"
                  style={{ border: '1px solid rgba(201,168,76,0.15)', boxShadow: '0 4px 24px rgba(44,37,32,0.06)' }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center gap-4 p-8"
                    style={{ minHeight: '160px' }}
                  >
                    {/* shimmer top line */}
                    <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: `linear-gradient(90deg,${catColor},#E2C97E)` }} />

                    <PartnerLogoImage partner={partner} catColor={catColor} size="md" />

                    <div className="text-center">
                      <h3 className="font-serif text-lg tracking-[0.15em] mb-1.5 transition-colors duration-300" style={{ color: '#1C1714' }}>
                        {partner}
                      </h3>
                      <div className="h-px w-6 mx-auto group-hover:w-12 transition-all duration-400" style={{ background: catColor }} />
                    </div>
                  </motion.div>
                </TiltCard>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ══ WHY WE PARTNER ═════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg,#F0E8D8 0%,#F8F4EE 60%)' }}>
        <div className={`container mx-auto px-6 ${RAIL_TEXT_INSET}`}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12" style={{ background: '#C9A84C' }} />
              <p className="text-[10px] uppercase tracking-[0.55em]" style={{ color: '#C9A84C' }}>Our Promise</p>
              <div className="h-px w-12" style={{ background: '#C9A84C' }} />
            </div>
            <h2 className="font-serif font-light" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#1C1714' }}>
              Why We Partner<br />With the Best
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_PARTNER.map((item, idx) => (
              <TiltCard
                key={item.title}
                className="relative bg-white overflow-hidden cursor-default group"
                style={{ border: '1px solid rgba(201,168,76,0.15)', boxShadow: '0 4px 24px rgba(44,37,32,0.06)' }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="p-8"
                >
                  <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: 'linear-gradient(90deg,#C9A84C,#E2C97E)' }} />
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: 'rgba(201,168,76,0.08)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 4px 16px rgba(201,168,76,0.12)' }}
                  >
                    {item.icon}
                  </div>
                  <h4 className="font-serif text-xl font-light mb-3" style={{ color: '#1C1714' }}>{item.title}</h4>
                  <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(44,37,32,0.5)' }}>{item.desc}</p>
                  <div className="mt-5 h-px w-8 group-hover:w-16 transition-all duration-500" style={{ background: '#C9A84C' }} />
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COLLABORATION CTA ══════════════════════════════════════════ */}
      <section className={`container mx-auto px-6 py-20 ${RAIL_TEXT_INSET}`}>
        <TiltCard
          className="relative overflow-hidden cursor-default"
          style={{ border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 16px 60px rgba(44,37,32,0.09)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
          >
            {/* image panel */}
            <div className="relative overflow-hidden hidden lg:block" style={{ minHeight: '300px' }}>
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=900"
                alt="Collaboration"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,transparent 50%,#F8F4EE)' }} />
              {/* floating chip */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 left-8 bg-white px-5 py-3"
                style={{ border: '1px solid rgba(201,168,76,0.25)', boxShadow: '0 8px 28px rgba(44,37,32,0.1)' }}
              >
                <p className="text-[9px] uppercase tracking-[0.4em] mb-0.5" style={{ color: '#C9A84C' }}>Open to</p>
                <p className="font-serif text-base" style={{ color: '#1C1714' }}>New Collaborations</p>
              </motion.div>
            </div>

            {/* content panel */}
            <div className="relative bg-white p-14 flex flex-col justify-center" style={{ borderLeft: '1px solid rgba(201,168,76,0.15)' }}>
              <div className="absolute top-0 left-0 h-full w-0.5" style={{ background: 'linear-gradient(to bottom,#C9A84C,rgba(201,168,76,0.1))' }} />

              <p className="text-[10px] uppercase tracking-[0.45em] mb-4" style={{ color: '#C9A84C' }}>Grow Together</p>
              <h3 className="font-serif text-4xl font-light leading-snug mb-5" style={{ color: '#1C1714' }}>
                Interested in<br />Collaborating?
              </h3>
              <p className="font-light mb-8 max-w-sm leading-relaxed" style={{ color: 'rgba(44,37,32,0.5)', fontSize: '0.95rem' }}>
                We are always looking to expand our network of premium material and service
                providers. If you share our commitment to luxury and precision, we'd love to connect.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-3 px-8 py-4 text-[10px] uppercase tracking-[0.4em] text-white transition-colors duration-400"
                  style={{ background: '#1C1714' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#C9A84C'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#1C1714'; }}
                >
                  Partner With Us <ArrowRight size={12} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-3 px-8 py-4 text-[10px] uppercase tracking-[0.4em] transition-all duration-400"
                  style={{ border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(201,168,76,0.08)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; }}
                >
                  View Our Standards
                </motion.button>
              </div>
            </div>
          </motion.div>
        </TiltCard>
      </section>

    </div>
  );
}
