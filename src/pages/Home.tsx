import { motion } from 'motion/react';
import { RAIL_TEXT_INSET } from '../layoutRail';
import { PROJECTS, CATEGORIES, RESIDENTIAL_HERO_IMAGE } from '../constants';
import { ArrowRight, MapPin, Phone, Sparkles, Star, MoveRight } from 'lucide-react';
import alexoneWordmark from '../assets/alexone-wordmark.svg';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const MARQUEE_ITEMS = [
  'Head Office: Rasulgarh, Bhubaneswar, Odisha',
  '+91 82490 46203',
  '+91 70089 56973',
  '+91 98278 45937',
  'Bespoke Interior & Exterior Design',
  'Premium Residential, Commercial & Hospitality',
];

const BRAND_PILLARS = [
  {
    title: 'Luxury Detailing',
    description: 'Warm finishes, cinematic lighting, and proportion-led compositions for a refined visual flow.',
    icon: Sparkles,
  },
  {
    title: '3D Visual Thinking',
    description: 'Concepts that feel immersive from the first frame, helping every idea arrive with clarity.',
    icon: Star,
  },
  {
    title: 'Seamless Execution',
    description: 'Thoughtful planning and material orchestration so every space feels elevated and complete.',
    icon: MoveRight,
  },
];

const toCategoryPage = (category: string) =>
  category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

export default function Home({ onNavigate }: HomeProps) {
  const landscapeImage =
    CATEGORIES.find((category) => category.id === 'landscape')?.image ?? RESIDENTIAL_HERO_IMAGE;
  const exteriorImage =
    CATEGORIES.find((category) => category.id === 'exterior')?.image ?? RESIDENTIAL_HERO_IMAGE;
  const selectedStories = PROJECTS;

  return (
    <div className="pt-0">
      <section className="relative min-h-screen overflow-hidden bg-[#0D0E0C]">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3.2, ease: 'easeOut' }}
        >
          <img src={RESIDENTIAL_HERO_IMAGE} alt="Luxury Interior" className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.86)_0%,rgba(9,9,9,0.55)_45%,rgba(8,8,8,0.72)_100%)]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(226,201,126,0.2),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(226,201,126,0.12),transparent_20%)]" />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
          className="absolute top-[5.2rem] left-0 z-10 h-px w-full origin-left"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(226,201,126,0.52),transparent)' }}
        />

        <div className="container relative z-10 mx-auto grid min-h-screen items-center gap-12 px-6 pt-28 pb-28 lg:grid-cols-[1.08fr_0.92fr]">
          <div className={`max-w-3xl ${RAIL_TEXT_INSET}`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
            >
              <img
                src={alexoneWordmark}
                alt="Alexone"
                className="h-10 w-auto md:h-12"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-7 max-w-4xl font-serif leading-[0.95] text-white"
              style={{ fontSize: 'clamp(3.2rem, 7.7vw, 7rem)', fontWeight: 400 }}
            >
              Designing Spaces
              <br />
              That Define Luxury
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.85 }}
              className="mb-10 max-w-xl text-base font-light leading-relaxed text-white/82 md:text-lg"
            >
              Real residential concepts, tailored finishes, and immersive visual storytelling brought
              together in one refined design language.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.85 }}
              className="mb-10 flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={() => onNavigate('spaces')}
                className="group inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#C9A84C] px-9 py-4 text-xs font-semibold uppercase tracking-[0.34em] text-white transition-all duration-300 hover:bg-[#E2C97E] hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)]"
              >
                Explore Projects
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="rounded-full border border-white/30 px-9 py-4 text-xs uppercase tracking-[0.34em] text-white transition-all duration-300 hover:border-[#E2C97E]/85 hover:bg-white/8"
              >
                Book Consultation
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.85 }}
              className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {[
                ['Luxury Homes', 'Immersive concepts'],
                ['Commercial Design', 'Brand-led interiors'],
                ['Landscape & Exterior', 'Premium outdoor stories'],
              ].map(([title, subtitle]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/6 px-5 py-4 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.34em] text-[#E2C97E]">{title}</p>
                  <p className="mt-2 text-sm text-white/70">{subtitle}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative hidden h-[560px] lg:block" style={{ perspective: '1500px' }}>
            <motion.div
              animate={{ y: [0, -12, 0], rotateY: [-6, 0, -6] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-0 top-2 w-[65%] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
              style={{ transform: 'rotateY(-12deg) rotateX(4deg)' }}
            >
              <img src={RESIDENTIAL_HERO_IMAGE} alt="Signature interior" className="h-[420px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.36em] text-[#E2C97E]">Signature Interior</p>
                <p className="mt-2 font-serif text-2xl text-white">Curated Residential Atmosphere</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0], rotateZ: [-4, 1, -4] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-0 top-14 w-[40%] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#17140F] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.36)]"
              style={{ transform: 'translateZ(70px) rotateY(10deg)' }}
            >
              <img src={landscapeImage} alt="Landscape design" className="h-[220px] w-full rounded-[1.2rem] object-cover" />
              <div className="px-2 pt-4 pb-2">
                <p className="text-[10px] uppercase tracking-[0.34em] text-[#E2C97E]">Landscape</p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">Outdoor concepts with structure, greenery, and calm luxury.</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-0 left-[14%] w-[44%] rounded-[1.8rem] border border-[#E2C97E]/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))] p-5 backdrop-blur-md shadow-[0_22px_60px_rgba(0,0,0,0.3)]"
              style={{ transform: 'translateZ(110px) rotateX(3deg)' }}
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.34em] text-[#E2C97E]">Project Moodboard</p>
                <span className="h-2.5 w-2.5 rounded-full bg-[#E2C97E]" />
              </div>
              <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
                <img src={exteriorImage} alt="Exterior design" className="h-[120px] w-full rounded-[1rem] object-cover" />
                <div className="rounded-[1rem] border border-white/10 bg-black/15 p-4">
                  <p className="font-serif text-2xl text-white">150+</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.26em] text-white/60">Projects</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/72">
                Elevated stories across interiors, exteriors, landscape, and immersive experiences.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-0 z-10 w-full px-4">
          <div className="mx-auto max-w-[1400px] overflow-hidden rounded-full border border-[#E2C97E]/24 bg-[linear-gradient(135deg,rgba(17,17,14,0.76),rgba(31,24,14,0.72))] py-3 shadow-[0_16px_45px_rgba(0,0,0,0.28)] backdrop-blur-md">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
            >
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="inline-flex items-center px-8 text-[10px] uppercase tracking-[0.34em] text-white/70 md:text-[11px]"
                >
                  <span className="mr-3 text-[#E2C97E]">◆</span>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[linear-gradient(180deg,#FBF7F0_0%,#F3E9D9_100%)] px-6 py-28">
        <div className="container mx-auto grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className={RAIL_TEXT_INSET}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 text-[10px] font-medium uppercase tracking-[0.42em] text-[#C9A84C]"
            >
              Our Essence
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mb-8 font-serif leading-[0.96] text-[#231C17]"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.7rem)', fontWeight: 400 }}
            >
              Where Vision
              <br />
              Becomes Space
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="max-w-xl text-lg leading-relaxed text-[#2C2520]/78"
            >
              Alexone by Suleprava creates elegant, immersive, and memorable environments with a
              sharper sense of materiality, movement, and atmosphere. Every story is shaped to feel
              cinematic, premium, and deeply livable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 }}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {BRAND_PILLARS.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    whileHover={{ y: -6, rotateX: 6, rotateY: index % 2 === 0 ? -6 : 6 }}
                    className="rounded-[1.6rem] border border-[#C9A84C]/18 bg-white/72 p-5 shadow-[0_18px_40px_rgba(130,101,54,0.08)] backdrop-blur-sm"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B1814] text-[#E2C97E]">
                      <Icon size={18} />
                    </div>
                    <p className="font-serif text-xl text-[#231C17]">{pillar.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#2C2520]/70">{pillar.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="relative h-[520px]" style={{ perspective: '1600px' }}>
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(226,201,126,0.25),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0.18))]" />
            <motion.div
              initial={{ opacity: 0, x: 40, rotateY: 18 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              animate={{ y: [0, -12, 0] }}
              className="absolute right-3 top-10 w-[68%] overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_30px_80px_rgba(34,26,16,0.18)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img src={RESIDENTIAL_HERO_IMAGE} alt="Vision hero" className="h-[360px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16120D]/72 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.34em] text-[#E2C97E]">Immersive Concept</p>
                <p className="mt-2 max-w-[18rem] font-serif text-2xl text-white">A flowing composition of light, texture, and depth.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: -11 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
              animate={{ y: [0, 14, 0] }}
              className="absolute left-0 top-16 w-[44%] rounded-[1.8rem] border border-[#C9A84C]/18 bg-[#17130E] p-4 text-white shadow-[0_22px_60px_rgba(34,26,16,0.2)]"
            >
              <p className="text-[10px] uppercase tracking-[0.34em] text-[#E2C97E]">Flowing Process</p>
              <p className="mt-4 font-serif text-3xl">Concept to Completion</p>
              <p className="mt-4 text-sm leading-relaxed text-white/72">
                Each layer is built to feel intentional, soft, and visually rich from every angle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22, duration: 1 }}
              animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
              className="absolute bottom-8 left-[12%] w-[52%] overflow-hidden rounded-[1.6rem] border border-white/60 bg-white/72 p-4 shadow-[0_20px_50px_rgba(34,26,16,0.12)] backdrop-blur-md"
            >
              <img src={landscapeImage} alt="Landscape visual" className="h-[120px] w-full rounded-[1rem] object-cover" />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C]">Atmosphere</p>
                  <p className="mt-2 text-sm text-[#2C2520]/72">A richer sense of movement and mood.</p>
                </div>
                <div className="rounded-[1rem] bg-[#1D1712] p-4 text-white">
                  <p className="font-serif text-3xl">3D</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/60">visual flow</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto mt-16 grid grid-cols-2 gap-5 border-t border-[#C9A84C]/18 pt-10 md:grid-cols-4">
          {[
            { num: '150+', label: 'Projects Delivered' },
            { num: '10+', label: 'Years of Excellence' },
            { num: '50+', label: 'Design Experts' },
            { num: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-[1.6rem] border border-[#C9A84C]/16 bg-white/78 px-5 py-7 text-center shadow-[0_18px_44px_rgba(86,63,24,0.08)] backdrop-blur-sm"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C97E] to-transparent opacity-70" />
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#E2C97E]/12 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              <p className="font-serif text-[2.9rem] leading-none text-[#A87722]">{stat.num}</p>
              <div className="mx-auto mt-4 h-px w-10 bg-[#C9A84C]/35" />
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#2C2520]/72">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#0F1407]">
        <div className={`container mx-auto px-6 mb-14 ${RAIL_TEXT_INSET}`}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.44em] text-[#C9A84C] mb-4 font-medium text-center"
          >
            What We Design
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-white text-center leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 400 }}
          >
            Our Design Categories
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 px-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: idx === 0 || idx === 5 ? '4/5' : '3/4' }}
              onClick={() => onNavigate(cat.id)}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-112"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/70" />
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#C9A84C] transition-all duration-500 group-hover:w-full" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[8px] uppercase tracking-[0.36em] text-[#E2C97E] mb-1 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {String(idx + 1).padStart(2, '0')}
                </p>
                <h3 className="font-serif text-white text-lg leading-snug" style={{ fontWeight: 400 }}>
                  {cat.title}
                </h3>
                <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-[9px] uppercase tracking-[0.28em] text-white/65">Explore</span>
                  <ArrowRight size={12} className="text-[#C9A84C]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('spaces')}
            className="group inline-flex items-center gap-3 border border-[#C9A84C]/40 px-10 py-4 text-[11px] uppercase tracking-[0.32em] text-[#E2C97E] transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#0F1407] hover:border-[#C9A84C]"
          >
            View All Spaces
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F8F4EE] px-6 py-28">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          >
            <div className={RAIL_TEXT_INSET}>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.44em] text-[#C9A84C]">Portfolio</p>
              <h2
                className="font-serif leading-tight text-[#2C2520]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 400 }}
              >
                Selected Design Stories
              </h2>
            </div>
            <p className={`max-w-xl text-sm leading-relaxed text-[#2C2520]/68 md:text-base ${RAIL_TEXT_INSET} md:pl-0`}>
              A premium auto-scrolling showcase that now mixes residential, commercial, hospitality,
              pool, exterior, cafe, salon, workspace, and landscape stories.
            </p>
          </motion.div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-5"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            >
              {[...selectedStories, ...selectedStories].map((project, index) => (
                <button
                  key={`${project.id}-${index}`}
                  onClick={() => onNavigate(toCategoryPage(project.category))}
                  className="group relative w-[260px] shrink-0 overflow-hidden rounded-[1.7rem] border border-[#C9A84C]/12 bg-white shadow-[0_16px_42px_rgba(71,52,28,0.08)]"
                >
                  <div className="relative h-[250px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14110C]/78 via-[#14110C]/20 to-transparent" />
                    <p className="absolute left-5 top-5 rounded-full border border-white/16 bg-black/25 px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-[#F5E4B0] backdrop-blur-sm">
                      {project.category}
                    </p>
                  </div>

                  <div className="p-5 text-left">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-[#B88B34]">
                      {project.subCategory ?? 'Design Story'}
                    </p>
                    <h3 className="mt-3 font-serif text-[1.65rem] leading-none text-[#231C17]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#2C2520]/70">{project.description}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#2C2520] transition-colors duration-300 group-hover:text-[#B88B34]">
                      View Story
                      <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </button>
              ))}
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => onNavigate('spaces')}
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#2C2520] border-b border-[#C9A84C]/60 pb-1 hover:text-[#C9A84C] transition-colors"
            >
              View All Projects
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={RAIL_TEXT_INSET}
            >
              <p className="text-[10px] uppercase tracking-[0.44em] text-[#C9A84C] mb-5 font-medium">Craftsmanship</p>
              <h2
                className="font-serif text-[#2C2520] mb-8 leading-tight"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 400 }}
              >
                Materials That Shape Experience
              </h2>
              <p className="text-[#2C2520]/74 text-lg font-light leading-relaxed mb-10">
                Every surface, texture, finish, and fitting is chosen with care to ensure that each
                Alexone project feels refined, durable, and deeply expressive.
              </p>
              <button
                onClick={() => onNavigate('materials')}
                className="group inline-flex items-center gap-3 border border-[#2C2520]/30 px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-[#2C2520] hover:bg-[#2C2520] hover:text-white transition-all duration-400"
              >
                Explore Materials
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=600',
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`aspect-square overflow-hidden rounded-sm ${idx % 2 === 1 ? 'mt-10' : ''}`}
                >
                  <img
                    src={img}
                    alt="Material"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-40 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C2408 0%, #2E3A10 50%, #1C2408 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center overflow-hidden">
          <h2 className="text-[22vw] font-serif text-white whitespace-nowrap">ALEXONE</h2>
        </div>
        <div className={`container mx-auto max-w-4xl text-center relative z-10 px-6 ${RAIL_TEXT_INSET}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-10 h-px w-16 bg-[#C9A84C]" />
            <h2
              className="font-serif text-white mb-8 leading-tight"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: 300, fontStyle: 'italic' }}
            >
              "Luxury Lives in the Details"
            </h2>
            <p className="text-[#E2C97E] text-base uppercase tracking-[0.3em] font-light">
              We don't just design interiors. We shape experiences that stay with you.
            </p>
            <div className="mx-auto mt-10 h-px w-16 bg-[#C9A84C]" />
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-[#F8F4EE] px-6 border-t border-[#C9A84C]/15">
        <div className={`container mx-auto text-center ${RAIL_TEXT_INSET}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.44em] text-[#C9A84C] mb-5 font-medium">Get Started</p>
            <h2
              className="font-serif text-[#2C2520] mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', fontWeight: 400 }}
            >
              Let's Design Something Extraordinary
            </h2>
            <p className="text-[#2C2520]/65 max-w-xl mx-auto mb-12 font-light text-base leading-relaxed">
              Tell us about your project and let Alexone bring your vision to life.
              Our team of experts is ready to transform your space.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-2 text-[#2C2520]/70">
                <MapPin size={15} className="text-[#C9A84C]" />
                <span className="text-[11px] uppercase tracking-[0.24em]">Rasulgarh, Bhubaneswar, Odisha</span>
              </div>
              <div className="flex items-center gap-2 text-[#2C2520]/70">
                <Phone size={15} className="text-[#C9A84C]" />
                <span className="text-[11px] tracking-[0.18em]">+91 82490 46203</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-5">
              <button
                onClick={() => onNavigate('contact')}
                className="px-14 py-5 bg-[#2C2520] text-white text-xs uppercase tracking-[0.32em] hover:bg-[#C9A84C] transition-all duration-400 font-medium"
              >
                Get in Touch
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-14 py-5 border border-[#2C2520]/30 text-[#2C2520] text-xs uppercase tracking-[0.32em] hover:bg-[#2C2520] hover:text-white transition-all duration-400"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
