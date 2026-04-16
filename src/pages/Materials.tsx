import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'motion/react';
import { MATERIALS } from '../constants';
import {
  ChefHat, Shirt, Tv, Archive, Sparkles, LayoutTemplate,
  Moon, DoorOpen, Layers, Zap, Circle, Target, Minus,
  Sun, Droplets, Settings2, Package, ArrowRight,
} from 'lucide-react';

/* ─── 3D tilt card ─────────────────────────────────────────────────────── */
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
      {/* dynamic highlight */}
      <motion.div
        className="absolute inset-0 rounded-sm pointer-events-none z-10"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(201,168,76,0.13) 0%, transparent 60%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

/* ─── flip card ─────────────────────────────────────────────────────────── */
function FlipCard({ front, back }: { front: React.ReactNode; back: React.ReactNode }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="relative cursor-pointer"
      style={{ perspective: '900px', aspectRatio: '1' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.43, 0.13, 0.23, 0.96] }}
        style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%', position: 'relative' }}
      >
        {/* front */}
        <div style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0 }}>
          {front}
        </div>
        {/* back */}
        <div style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0, transform: 'rotateY(180deg)' }}>
          {back}
        </div>
      </motion.div>
    </div>
  );
}

const SOLUTION_META: Record<string, { icon: React.ReactNode; desc: string }> = {
  'Modular Kitchen':            { icon: <ChefHat size={28} />,      desc: 'Custom layouts, smart storage & premium finishes' },
  'Wardrobe':                   { icon: <Shirt size={28} />,         desc: 'Walk-in to sliding, built to your lifestyle' },
  'TV Unit':                    { icon: <Tv size={28} />,            desc: 'Media walls with integrated lighting & cable management' },
  'Crockery Unit':              { icon: <Archive size={28} />,       desc: 'Display & storage solutions with glass accents' },
  'Vanity / Dressing Unit':     { icon: <Sparkles size={28} />,     desc: 'Mirror, storage and lighting in perfect harmony' },
  'Headboard & Wall Panelling': { icon: <LayoutTemplate size={28} />,desc: 'Textured, upholstered or timber wall statements' },
  'Bed Styles':                 { icon: <Moon size={28} />,          desc: 'Platform, upholstered & box storage designs' },
  'Doors & Windows':            { icon: <DoorOpen size={28} />,      desc: 'UPVC, aluminium & wooden frames with custom glazing' },
  'Ceiling Solutions':          { icon: <Layers size={28} />,        desc: 'POP, gypsum, stretch & profile light ceilings' },
};

const DECOR_META: Record<string, { icon: React.ReactNode; color: string }> = {
  'Decor Items':    { icon: <Package size={24} />,   color: '#C9A84C' },
  'Profile Light':  { icon: <Zap size={24} />,       color: '#E2C97E' },
  'Cylinder Light': { icon: <Circle size={24} />,    color: '#C9A84C' },
  'Focus Light':    { icon: <Target size={24} />,    color: '#B8963A' },
  'Strip Light':    { icon: <Minus size={24} />,     color: '#C9A84C' },
  'Surface Light':  { icon: <Sun size={24} />,       color: '#E2C97E' },
  'Fountain':       { icon: <Droplets size={24} />,  color: '#C9A84C' },
  'Automation':     { icon: <Settings2 size={24} />, color: '#B8963A' },
};

const TABS = [
  { label: 'Interior Solutions', count: MATERIALS.interiorSolutions.length },
  { label: 'Material Types',     count: MATERIALS.materialTypes.length },
  { label: 'Brand Partners',     count: MATERIALS.partners.length },
  { label: 'Decor & Lighting',   count: MATERIALS.decorLighting.length },
];

export default function Materials() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen" style={{ background: '#F8F4EE' }}>

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24">
        {/* Diagonal split bg */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(118deg, #F8F4EE 55%, #F0E8D8 55%)' }} />

        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px',
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-12">

            {/* Text — 6 cols */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px w-12" style={{ background: '#C9A84C' }} />
                <p className="text-[10px] uppercase tracking-[0.55em]" style={{ color: '#C9A84C' }}>The Palette</p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif font-light leading-[1.02] mb-8"
                style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)', color: '#1C1714' }}
              >
                Materials<br /><span style={{ color: '#C9A84C' }}>&</span> Finishes
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="font-light leading-relaxed max-w-md mb-12"
                style={{ color: 'rgba(44,37,32,0.55)', fontSize: '1.05rem' }}
              >
                Carefully chosen textures, surfaces, hardware and lighting solutions
                that define the quality signature of every Alexone project.
              </motion.p>

              {/* 3D floating stat chips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 flex-wrap"
              >
                {[
                  { val: '16+', label: 'Finish Types', icon: '✦' },
                  { val: '14',  label: 'Brand Partners', icon: '◆' },
                  { val: '9',   label: 'Solutions', icon: '●' },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ y: -5, scale: 1.04 }}
                    className="relative px-6 py-4 bg-white flex flex-col items-center cursor-default"
                    style={{
                      border: '1px solid rgba(201,168,76,0.25)',
                      boxShadow: '0 8px 30px rgba(44,37,32,0.08), 0 1px 0 rgba(201,168,76,0.2)',
                      minWidth: '90px',
                    }}
                  >
                    <span className="text-xs mb-1" style={{ color: 'rgba(201,168,76,0.5)' }}>{s.icon}</span>
                    <span className="font-serif text-3xl font-light" style={{ color: '#C9A84C' }}>{s.val}</span>
                    <span className="text-[8px] uppercase tracking-[0.3em] mt-1 text-center" style={{ color: 'rgba(44,37,32,0.4)' }}>{s.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* 3D floating image stack — 6 cols */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="lg:col-span-6 relative hidden lg:block"
              style={{ height: '420px' }}
            >
              {[
                { src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=700', x: 0, y: 0, z: 0, rotate: -3 },
                { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=700', x: 60, y: -30, z: 1, rotate: 2 },
                { src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=700', x: 120, y: 20, z: 2, rotate: -1 },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  className="absolute overflow-hidden"
                  style={{
                    width: '72%', height: '85%',
                    left: `${img.x}px`, top: `${img.y}px`,
                    zIndex: img.z + 1,
                    border: '1px solid rgba(201,168,76,0.2)',
                    boxShadow: `${6 + i * 8}px ${10 + i * 8}px ${30 + i * 15}px rgba(44,37,32,${0.08 + i * 0.04})`,
                    transform: `rotate(${img.rotate}deg)`,
                  }}
                  whileHover={{ scale: 1.03, zIndex: 10, rotate: 0, transition: { duration: 0.4 } }}
                  animate={{ y: [img.y, img.y - 6, img.y] }}
                  transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-16 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #F8F4EE)' }} />
      </section>

      {/* ══ TAB BAR ════════════════════════════════════════════════════════ */}
      <div className="sticky top-[72px] z-30 border-b" style={{ background: 'rgba(248,244,238,0.97)', backdropFilter: 'blur(14px)', borderColor: 'rgba(201,168,76,0.2)' }}>
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto no-scrollbar">
            {TABS.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className="relative shrink-0 flex items-center gap-2.5 px-7 py-5 transition-colors duration-300"
                style={{ color: activeTab === idx ? '#C9A84C' : 'rgba(44,37,32,0.38)' }}
              >
                <span className="text-[10px] uppercase tracking-[0.35em]">{tab.label}</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full font-medium" style={{
                  background: activeTab === idx ? 'rgba(201,168,76,0.12)' : 'rgba(44,37,32,0.05)',
                  color: activeTab === idx ? '#C9A84C' : 'rgba(44,37,32,0.28)',
                }}>
                  {tab.count}
                </span>
                {activeTab === idx && (
                  <motion.div layoutId="mat-tab" className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: '#C9A84C' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══ CONTENT ════════════════════════════════════════════════════════ */}
      <div className="container mx-auto px-6 py-20">
        <AnimatePresence mode="wait">

          {/* ── INTERIOR SOLUTIONS — 3D tilt cards ── */}
          {activeTab === 0 && (
            <motion.div key="sol" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.4 }}>
              <p className="font-light mb-14 max-w-xl" style={{ color: 'rgba(44,37,32,0.5)', fontSize: '0.95rem' }}>
                Hover any card to explore — each solution is crafted for precision, beauty and function.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {MATERIALS.interiorSolutions.map((item, idx) => {
                  const meta = SOLUTION_META[item] ?? { icon: <Layers size={28} />, desc: 'Premium quality finish and installation.' };
                  return (
                    <TiltCard
                      key={item}
                      className="relative bg-white overflow-hidden group cursor-default"
                      style={{ border: '1px solid rgba(201,168,76,0.18)', boxShadow: '0 4px 24px rgba(44,37,32,0.07)', borderRadius: 2 }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {/* Gold shimmer top */}
                        <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: 'linear-gradient(90deg,#C9A84C,#E2C97E,#C9A84C)' }} />

                        {/* BG image strip */}
                        <div className="relative h-36 overflow-hidden">
                          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(201,168,76,${0.06 + (idx % 3) * 0.03}), rgba(201,168,76,0.02))` }} />
                          {/* Large ghost number */}
                          <span className="absolute right-4 bottom-2 font-serif leading-none select-none pointer-events-none" style={{ fontSize: '5rem', color: 'rgba(201,168,76,0.08)', fontWeight: 300 }}>
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          {/* Icon in 3D depth */}
                          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: '#fff', boxShadow: '0 8px 28px rgba(201,168,76,0.18)', color: '#C9A84C', transform: 'translateZ(20px)' }}>
                            {meta.icon}
                          </div>
                        </div>

                        <div className="p-7 pt-5">
                          <h3 className="font-serif text-xl font-light mb-2" style={{ color: '#1C1714' }}>{item}</h3>
                          <p className="text-sm font-light leading-relaxed mb-5" style={{ color: 'rgba(44,37,32,0.5)' }}>{meta.desc}</p>
                          <div className="flex items-center gap-2" style={{ color: '#C9A84C' }}>
                            <div className="h-px flex-1 max-w-[32px] group-hover:max-w-[64px] transition-all duration-500" style={{ background: '#C9A84C' }} />
                            <span className="text-[9px] uppercase tracking-[0.35em] opacity-0 group-hover:opacity-100 transition-opacity duration-400">View</span>
                            <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                          </div>
                        </div>
                      </motion.div>
                    </TiltCard>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ── MATERIAL TYPES — flip cards ── */}
          {activeTab === 1 && (
            <motion.div key="types" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.4 }}>
              <p className="font-light mb-4 max-w-xl" style={{ color: 'rgba(44,37,32,0.5)', fontSize: '0.95rem' }}>
                Hover any tile to flip — discover our full range of premium finishes.
              </p>
              <p className="text-[10px] uppercase tracking-[0.35em] mb-14 flex items-center gap-2" style={{ color: '#C9A84C' }}>
                <span className="w-6 h-px inline-block" style={{ background: '#C9A84C' }} />
                {MATERIALS.materialTypes.length} finish types available
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {MATERIALS.materialTypes.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: idx * 0.04, type: 'spring', stiffness: 280, damping: 22 }}
                  >
                    <FlipCard
                      front={
                        <div className="w-full h-full bg-white flex flex-col items-center justify-center p-3 gap-2" style={{ border: '1px solid rgba(201,168,76,0.18)', boxShadow: '0 2px 14px rgba(44,37,32,0.06)' }}>
                          <div className="w-2 h-2 rounded-full" style={{ background: '#C9A84C', boxShadow: '0 0 8px rgba(201,168,76,0.5)' }} />
                          <span className="text-[11px] uppercase tracking-[0.2em] text-center font-medium leading-tight" style={{ color: 'rgba(44,37,32,0.65)' }}>{item}</span>
                        </div>
                      }
                      back={
                        <div className="w-full h-full flex flex-col items-center justify-center p-3 gap-2" style={{ background: 'linear-gradient(135deg,#1C1714,#2C2520)', border: '1px solid rgba(201,168,76,0.3)' }}>
                          <div className="w-6 h-px mb-1" style={{ background: '#C9A84C' }} />
                          <span className="text-[11px] uppercase tracking-[0.2em] text-center font-medium leading-tight" style={{ color: '#E2C97E' }}>{item}</span>
                          <span className="text-[9px] mt-1" style={{ color: 'rgba(201,168,76,0.5)' }}>✦ Available</span>
                        </div>
                      }
                    />
                  </motion.div>
                ))}
              </div>

              {/* pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
                {[
                  { title: 'Premium Quality',   img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600' },
                  { title: 'Locally Sourced',   img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600' },
                  { title: 'Globally Inspired', img: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=600' },
                ].map((p, i) => (
                  <TiltCard
                    key={p.title}
                    className="relative overflow-hidden cursor-default group"
                    style={{ height: '200px', border: '1px solid rgba(201,168,76,0.15)', boxShadow: '0 4px 24px rgba(44,37,32,0.07)' }}
                  >
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="w-full h-full">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,23,20,0.8) 0%, transparent 60%)' }} />
                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="w-6 h-px mb-3" style={{ background: '#C9A84C' }} />
                        <p className="font-serif text-lg text-white font-light">{p.title}</p>
                      </div>
                    </motion.div>
                  </TiltCard>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── BRAND PARTNERS ── */}
          {activeTab === 2 && (
            <motion.div key="partners" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.4 }}>
              {/* marquee */}
              <div className="relative overflow-hidden border-y py-5 mb-16" style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
                <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right,#F8F4EE,transparent)' }} />
                <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left,#F8F4EE,transparent)' }} />
                <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 26, repeat: Infinity, ease: 'linear' }} className="flex gap-14 w-max">
                  {[...MATERIALS.partners, ...MATERIALS.partners].map((p, i) => (
                    <span key={i} className="font-serif text-lg uppercase tracking-[0.25em] whitespace-nowrap" style={{ color: 'rgba(201,168,76,0.4)' }}>{p}</span>
                  ))}
                </motion.div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {MATERIALS.partners.map((item, idx) => (
                  <TiltCard
                    key={item}
                    className="relative bg-white overflow-hidden cursor-default group"
                    style={{ height: '110px', border: '1px solid rgba(201,168,76,0.15)', boxShadow: '0 2px 16px rgba(44,37,32,0.05)' }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="w-full h-full flex flex-col items-center justify-center gap-2.5"
                    >
                      <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-400" style={{ background: '#C9A84C' }} />
                      <div className="h-0.5 w-6 group-hover:w-12 transition-all duration-400" style={{ background: '#C9A84C' }} />
                      <span className="font-serif text-base tracking-[0.2em] text-center px-4" style={{ color: 'rgba(44,37,32,0.45)' }}>{item}</span>
                    </motion.div>
                  </TiltCard>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── DECOR & LIGHTING — masonry 3D ── */}
          {activeTab === 3 && (
            <motion.div key="decor" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.4 }}>
              <p className="font-light mb-14 max-w-xl" style={{ color: 'rgba(44,37,32,0.5)', fontSize: '0.95rem' }}>
                The finishing layer — lighting design, decor curation, and smart automation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {MATERIALS.decorLighting.map((item, idx) => {
                  const meta = DECOR_META[item] ?? { icon: <Sparkles size={24} />, color: '#C9A84C' };
                  const tall = idx % 3 === 0;
                  return (
                    <TiltCard
                      key={item}
                      className="relative bg-white overflow-hidden cursor-default group"
                      style={{
                        border: '1px solid rgba(201,168,76,0.15)',
                        boxShadow: '0 4px 28px rgba(44,37,32,0.06)',
                        gridRow: tall ? 'span 2' : 'span 1',
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 36 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.09, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full"
                      >
                        {/* shimmer */}
                        <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: `linear-gradient(90deg,${meta.color},#E2C97E)` }} />
                        {/* corner glow */}
                        <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle,${meta.color}22 0%,transparent 70%)` }} />

                        <div className={`flex flex-col justify-between ${tall ? 'p-10 min-h-[240px]' : 'p-8'}`}>
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
                            style={{ background: `${meta.color}12`, color: meta.color, boxShadow: `0 4px 16px ${meta.color}20` }}
                          >
                            {meta.icon}
                          </div>
                          <div>
                            <h4 className="font-serif text-xl font-light mb-3" style={{ color: '#1C1714' }}>{item}</h4>
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: meta.color }} />
                              <span className="text-[9px] uppercase tracking-[0.35em]" style={{ color: `${meta.color}99` }}>Available</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </TiltCard>
                  );
                })}
              </div>

              {/* CTA */}
              <TiltCard
                className="relative mt-16 overflow-hidden cursor-default"
                style={{ border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 12px 50px rgba(44,37,32,0.08)' }}
              >
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
                >
                  <div className="relative overflow-hidden hidden lg:block" style={{ minHeight: '240px' }}>
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=900" alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,transparent 50%,#F8F4EE)' }} />
                  </div>
                  <div className="relative bg-white p-14 flex flex-col justify-center" style={{ borderLeft: '1px solid rgba(201,168,76,0.15)' }}>
                    <div className="absolute top-0 left-0 h-full w-0.5" style={{ background: 'linear-gradient(to bottom,#C9A84C,rgba(201,168,76,0.1))' }} />
                    <p className="text-[10px] uppercase tracking-[0.45em] mb-4" style={{ color: '#C9A84C' }}>Custom Selection</p>
                    <h3 className="font-serif text-3xl font-light leading-snug mb-4" style={{ color: '#1C1714' }}>Want a bespoke<br />material board?</h3>
                    <p className="font-light mb-8 max-w-sm" style={{ color: 'rgba(44,37,32,0.5)', fontSize: '0.9rem' }}>
                      Our team curates a personalised palette tailored to your project's vision and budget.
                    </p>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="self-start flex items-center gap-3 px-8 py-3.5 text-[10px] uppercase tracking-[0.4em] text-white transition-colors duration-400"
                      style={{ background: '#1C1714' }}
                    >
                      Request a Board <ArrowRight size={12} />
                    </motion.a>
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
