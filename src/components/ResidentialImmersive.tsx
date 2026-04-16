import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, ChevronLeft, Info, Maximize2, Minus, X } from 'lucide-react';
import { RESIDENTIAL_PANORAMA_SCENES, type ResidentialHotspot } from '../constants';

type ImmersiveView = 'preview' | 'entering' | 'tour';

export default function ResidentialImmersive() {
  const [view, setView] = useState<ImmersiveView>('preview');
  const [activeSceneId, setActiveSceneId] = useState(RESIDENTIAL_PANORAMA_SCENES[0].id);
  const [focusedHotspot, setFocusedHotspot] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(true);
  const tourRef = useRef<HTMLDivElement>(null);

  const activeScene =
    RESIDENTIAL_PANORAMA_SCENES.find(s => s.id === activeSceneId) ??
    RESIDENTIAL_PANORAMA_SCENES[0];

  // Mouse parallax (normalised 0–1, centre = 0.5)
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const smoothX = useSpring(rawX, { stiffness: 40, damping: 18 });
  const smoothY = useSpring(rawY, { stiffness: 40, damping: 18 });
  // Shift the oversized image layer ±2.5% based on mouse
  const imgX = useTransform(smoothX, [0, 1], ['-2.5%', '2.5%']);
  const imgY = useTransform(smoothY, [0, 1], ['-2%', '2%']);

  /* lock scroll while tour is open */
  useEffect(() => {
    if (view !== 'tour') return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [view]);

  const handleEnter = () => {
    setFocusedHotspot(null);
    setView('entering');
    window.setTimeout(() => setView('tour'), 1500);
  };

  const handleExit = () => {
    setFocusedHotspot(null);
    setView('preview');
  };

  const handleSceneChange = (id: string) => {
    setFocusedHotspot(null);
    setActiveSceneId(id);
    rawX.set(0.5);
    rawY.set(0.5);
  };

  const handleHotspotClick = (h: ResidentialHotspot) => {
    const next = focusedHotspot === h.id ? null : h.id;
    setFocusedHotspot(next);
    // snap parallax to centre so it doesn't fight the zoom origin
    if (next) { rawX.set(0.5); rawY.set(0.5); }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (focusedHotspot) return; // don't drift while zoomed into a hotspot
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width);
    rawY.set((e.clientY - r.top) / r.height);
  };

  const focusedData = activeScene.hotspots.find(h => h.id === focusedHotspot) ?? null;

  return (
    <>
      {/* ── PREVIEW CARD ── */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#0f1507]">

        {/* Full-bleed ambient background */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src={activeScene.image}
            alt=""
            className="h-full w-full object-cover opacity-25 blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1507]/90 via-[#0f1507]/70 to-transparent" />
        </div>

        <div className="relative z-10 grid gap-0 lg:grid-cols-[1fr_1.25fr]">

          {/* ── LEFT: text + CTA ── */}
          <div className="flex flex-col justify-center px-8 py-12 md:px-12 md:py-16">
            <p className="text-[10px] uppercase tracking-[0.48em] text-luxury-gold mb-5">
              Residential Immersive Experience
            </p>
            <h3 className="font-serif text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300 }}>
              Enter The{' '}
              <span className="italic text-luxury-gold">Residence</span>
            </h3>
            <p className="mt-6 max-w-sm text-white/55 font-light leading-relaxed text-[0.9rem]">
              Choose a room below, hit Enter, and explore your renders in crisp full-screen
              with interactive design hotspots.
            </p>

            {/* Room tab switcher */}
            <div className="mt-8 flex flex-wrap gap-3">
              {RESIDENTIAL_PANORAMA_SCENES.map(scene => (
                <button
                  key={scene.id}
                  type="button"
                  onClick={() => handleSceneChange(scene.id)}
                  className={`px-5 py-2 text-[10px] uppercase tracking-[0.28em] border rounded-full transition-all duration-300 ${
                    activeSceneId === scene.id
                      ? 'bg-luxury-gold border-luxury-gold text-white'
                      : 'border-white/20 text-white/55 hover:border-luxury-gold/50 hover:text-white'
                  }`}
                >
                  {scene.label}
                </button>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleEnter}
                className="group inline-flex items-center gap-3 bg-luxury-gold px-8 py-4 text-[10px] uppercase tracking-[0.38em] text-white transition-all hover:scale-[1.03] hover:bg-[#b8963a]"
              >
                Enter Immersive View
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* ── RIGHT: stacked thumbnails ── */}
          <div className="hidden lg:flex items-stretch gap-0">
            {RESIDENTIAL_PANORAMA_SCENES.map((scene, idx) => (
              <motion.button
                key={scene.id}
                type="button"
                onClick={() => handleSceneChange(scene.id)}
                initial={{ flex: 1 }}
                whileHover={{ flex: 1.7 }}
                transition={{ duration: 0.55, ease: 'circOut' }}
                className={`relative overflow-hidden cursor-pointer border-l border-white/5 first:border-l-0 transition-all ${
                  activeSceneId === scene.id ? 'ring-1 ring-inset ring-luxury-gold/40' : ''
                }`}
                style={{ minHeight: '420px' }}
              >
                <img
                  src={scene.image}
                  alt={scene.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 transition-all duration-500 ${
                  activeSceneId === scene.id
                    ? 'bg-black/25'
                    : 'bg-black/55 hover:bg-black/30'
                }`} />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold mb-2">
                    {String(idx + 1).padStart(2, '0')}
                  </p>
                  <h4 className="font-serif text-lg text-white leading-snug">{scene.label}</h4>
                  <p className="mt-1 text-[11px] text-white/45 leading-snug line-clamp-2">
                    {scene.summary}
                  </p>
                </div>

                {activeSceneId === scene.id && (
                  <div className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-luxury-gold">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="relative z-10 border-t border-white/5 px-8 py-4 md:px-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/5" />
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/25">
            Select a room · Enter view · Move mouse to look around · Click pins for details
          </p>
          <div className="h-px flex-1 bg-white/5" />
        </div>
      </div>

      {/* ── ENTERING TRANSITION ── */}
      <AnimatePresence>
        {view === 'entering' && (
          <motion.div
            key="residential-door"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[220] bg-black"
          >
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 3.5, opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1] }}
              className="relative h-full w-full"
            >
              <img
                src={activeScene.image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── TOUR (full-screen crisp image viewer) ── */}
      <AnimatePresence>
        {view === 'tour' && (
          <motion.div
            key="residential-tour"
            ref={tourRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[230] overflow-hidden bg-black"
            onMouseMove={handleMouseMove}
          >
            {/* ─── Image layer: slightly oversized so parallax shift never shows edges ─── */}
            <motion.div
              className="absolute"
              style={{
                inset: '-5%',
                width: '110%',
                height: '110%',
                x: focusedHotspot ? '0%' : imgX,
                y: focusedHotspot ? '0%' : imgY,
                transformOrigin: focusedData
                  ? `${focusedData.left} ${focusedData.top}`
                  : 'center center',
              }}
              animate={{ scale: focusedData ? 1.8 : 1.0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                key={activeScene.id}
                src={activeScene.image}
                alt={activeScene.title}
                className="h-full w-full object-cover select-none"
                draggable={false}
                style={{ imageRendering: 'auto' }}
              />
            </motion.div>

            {/* Subtle vignette overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.45) 100%)',
              }}
            />

            {/* ─── Hotspot pins ─── */}
            {activeScene.hotspots.map((hotspot) => (
              <AnimatePresence key={hotspot.id}>
                {(!focusedHotspot || focusedHotspot === hotspot.id) && (
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    type="button"
                    className={`group absolute z-[50] flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-2xl transition-all duration-300 ${
                      focusedHotspot === hotspot.id ? 'bg-white' : 'bg-[#C9A84C]'
                    }`}
                    style={{ left: hotspot.left, top: hotspot.top }}
                    onClick={() => handleHotspotClick(hotspot)}
                  >
                    {focusedHotspot === hotspot.id
                      ? <X size={16} className="text-black" />
                      : <Maximize2 size={16} className="text-black" />
                    }
                    {!focusedHotspot && (
                      <>
                        <span className="absolute inset-0 animate-ping rounded-full bg-[#C9A84C] opacity-70" />
                        <span className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 translate-x-4 whitespace-nowrap rounded-sm border border-[#C9A84C]/30 bg-black/85 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                          {hotspot.title}
                        </span>
                      </>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            ))}

            {/* ─── HUD top ─── */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-[100] flex items-start justify-between p-6 md:p-8">
              <div className="pointer-events-auto flex flex-col gap-4">
                <button
                  type="button"
                  onClick={handleExit}
                  className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/40 px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-white/70 backdrop-blur-md transition-colors hover:text-white"
                >
                  <ChevronLeft size={14} /> Back To Residential
                </button>

                <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-md">
                  {RESIDENTIAL_PANORAMA_SCENES.map(scene => (
                    <button
                      key={scene.id}
                      type="button"
                      onClick={() => handleSceneChange(scene.id)}
                      className={`text-[10px] uppercase tracking-[0.28em] transition-colors ${
                        activeSceneId === scene.id
                          ? 'text-luxury-gold font-medium'
                          : 'text-white/40 hover:text-white'
                      }`}
                    >
                      {scene.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pointer-events-auto flex items-center gap-3">
                {focusedHotspot && (
                  <button
                    type="button"
                    onClick={() => setFocusedHotspot(null)}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-[10px] uppercase tracking-[0.28em] text-white backdrop-blur-md hover:bg-white/20 transition-all"
                  >
                    <Minus size={14} /> Reset View
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setShowInfo(c => !c)}
                  title="Toggle Info"
                  className={`rounded-full border border-white/10 p-3 backdrop-blur-md transition-all ${
                    showInfo ? 'bg-luxury-gold text-white' : 'bg-black/40 text-white hover:bg-white/10'
                  }`}
                >
                  <Info size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleExit}
                  className="rounded-full border border-white/10 bg-black/40 p-3 text-white backdrop-blur-md hover:bg-white/10 transition-all"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* ─── Info panel ─── */}
            <AnimatePresence>
              {showInfo && !focusedHotspot && (
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  className="absolute right-6 top-1/2 z-[120] hidden w-80 -translate-y-1/2 xl:block"
                >
                  <div className="border border-luxury-gold/20 bg-black/85 p-8 shadow-2xl backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.42em] text-luxury-gold">
                      Residence View
                    </p>
                    <h3 className="mt-4 font-serif text-3xl text-white font-light">
                      {activeScene.title}
                    </h3>
                    <div className="mt-4 h-px w-12 bg-luxury-gold/50" />
                    <p className="mt-5 text-sm leading-relaxed text-white/60 font-light">
                      {activeScene.summary}
                    </p>
                    <p className="mt-6 border-t border-white/8 pt-5 text-[9px] uppercase tracking-[0.38em] text-white/30">
                      Move mouse to look · Click pins for details
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ─── Hotspot detail callout ─── */}
            <AnimatePresence>
              {focusedData && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  className="absolute bottom-10 left-1/2 z-[120] w-full max-w-lg -translate-x-1/2 px-6"
                >
                  <div className="relative overflow-hidden border border-luxury-gold/35 bg-black/92 p-8 shadow-2xl backdrop-blur-2xl">
                    <div className="absolute left-0 top-0 h-full w-1 bg-luxury-gold" />
                    <p className="text-[10px] uppercase tracking-[0.42em] text-luxury-gold">
                      {focusedData.subtitle}
                    </p>
                    <h4 className="mt-3 font-serif text-3xl italic text-white font-light">
                      {focusedData.title}
                    </h4>
                    <p className="mt-4 text-sm leading-relaxed text-white/60 font-light">
                      {focusedData.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => setFocusedHotspot(null)}
                      className="mt-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/35 hover:text-luxury-gold transition-colors"
                    >
                      <Minus size={12} /> Return to view
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ─── Bottom hint ─── */}
            {!focusedHotspot && (
              <div className="absolute bottom-8 left-1/2 z-[110] flex -translate-x-1/2 items-center gap-4 text-[9px] uppercase tracking-[0.48em] text-white/30">
                <div className="h-px w-10 bg-white/10" />
                Move Mouse To Look Around
                <div className="h-px w-10 bg-white/10" />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
