import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import {
  Compass,
  Eye,
  Flag,
  Gem,
  HeartHandshake,
  Layers,
  Lightbulb,
  Palette,
  PencilRuler,
  Ruler,
  Sparkles,
  Home,
  Hammer,
  KeyRound,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { RAIL_TEXT_INSET } from '../layoutRail';
import { RESIDENTIAL_HERO_IMAGE } from '../constants';
import living01 from '../assets/residential/living-01.jpg';
import kitchen02 from '../assets/residential/kitchen-02.jpg';
import living09 from '../assets/residential/living-09.jpg';
import living03 from '../assets/residential/living-03.jpg';
import kitchen01 from '../assets/residential/kitchen-01.jpg';
import living06 from '../assets/residential/living-06.jpg';
import living07 from '../assets/residential/living-07.jpg';
import alexoneWordmark from '../assets/alexone-wordmark.svg';

interface AboutProps {
  onNavigate?: (page: string) => void;
}

const JOURNEY = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Listen & measure',
    desc: 'We walk through your space, understand how you live, and map the brief — lifestyle, budget, and the feeling you want every room to hold.',
    icon: Home,
    image: living07,
  },
  {
    step: '02',
    title: 'Concept',
    subtitle: 'Mood & layout',
    desc: 'Moodboards, spatial planning, and 3D direction take shape — so you can see the interior story before a single finish is ordered.',
    icon: PencilRuler,
    image: living01,
  },
  {
    step: '03',
    title: 'Materials',
    subtitle: 'Palette & texture',
    desc: 'Laminates, veneers, stone, glass, hardware, and lighting are curated into one coherent palette that looks premium and lasts.',
    icon: Palette,
    image: kitchen01,
  },
  {
    step: '04',
    title: 'Execute',
    subtitle: 'Craft on site',
    desc: 'From modular kitchens to wall panelling and ceilings, we coordinate execution so design intent survives every joint and alignment.',
    icon: Hammer,
    image: living03,
  },
  {
    step: '05',
    title: 'Handover',
    subtitle: 'Style & settle',
    desc: 'Final styling, lighting balance, and detailing — so the space feels complete the day you walk in and call it home.',
    icon: KeyRound,
    image: living06,
  },
] as const;

const VISION_MISSION = [
  {
    label: 'Vision',
    icon: Eye,
    title: 'Spaces that feel like home — elevated.',
    text: 'To be the studio clients trust when they want interiors that look cinematic, live effortlessly, and age with grace.',
  },
  {
    label: 'Mission',
    icon: Compass,
    title: 'Design with clarity. Deliver with craft.',
    text: 'We translate lifestyle into spatial stories — planning layouts, selecting finishes, and coordinating execution from concept to handover.',
  },
] as const;

const GOALS = [
  {
    num: '01',
    title: 'Spatial harmony',
    desc: 'Flow, proportion, and sightlines that feel natural in living rooms, kitchens, and lobbies.',
  },
  {
    num: '02',
    title: 'Material honesty',
    desc: 'Finishes that look premium in photographs and perform beautifully in daily use.',
  },
  {
    num: '03',
    title: 'Light as design',
    desc: 'Layered ambient, task, and accent lighting — depth after dusk, not just brightness.',
  },
  {
    num: '04',
    title: 'Lifestyle first',
    desc: 'Storage, seating, and zoning shaped around how people actually live and host.',
  },
] as const;

const VALUES = [
  {
    title: 'Luxury with purpose',
    desc: 'Every finish earns its place — beauty that also serves how the room is used.',
    icon: Gem,
  },
  {
    title: 'Precision in every detail',
    desc: 'Joints, alignments, hardware, and shadow gaps matter up close.',
    icon: Ruler,
  },
  {
    title: 'Timeless spatial style',
    desc: 'Calm palettes and lasting forms over trends that date a room quickly.',
    icon: Layers,
  },
  {
    title: 'Light & atmosphere',
    desc: 'Mood is designed — from daylight to profile lights and soft pools of glow.',
    icon: Lightbulb,
  },
  {
    title: 'Functional beauty',
    desc: 'Wardrobes, TV walls, and kitchens as refined as they are practical.',
    icon: Sparkles,
  },
  {
    title: 'Client-centered craft',
    desc: 'Your taste leads; our expertise elevates without overpowering your identity.',
    icon: HeartHandshake,
  },
] as const;

function JourneySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.35'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#14110E] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,76,0.14),transparent_45%)]" />
      <div className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-[#C9A84C]/8 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className={`mb-14 md:mb-20 ${RAIL_TEXT_INSET}`}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[10px] uppercase tracking-[0.42em] text-[#E2C97E]"
          >
            The Alexone Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl font-serif text-4xl leading-tight text-white md:text-5xl"
          >
            From first walkthrough
            <br />
            <span className="text-[#E2C97E]">to final handover</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/65"
          >
            A clear design journey so every interior stays intentional — brief, concept, materials,
            site craft, and the moment it becomes yours.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Animated vertical line */}
          <div className="absolute bottom-8 left-[1.15rem] top-8 w-px bg-white/10 md:left-1/2 md:-translate-x-px">
            <motion.div
              className="w-full origin-top bg-gradient-to-b from-[#C9A84C] via-[#E2C97E] to-[#C9A84C]/40"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-14 md:space-y-20">
            {JOURNEY.map((item, idx) => {
              const Icon = item.icon;
              const left = idx % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid items-center gap-6 md:grid-cols-2 md:gap-12 ${
                    left ? '' : 'md:[&>*:first-child]:order-2'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-[0.7rem] top-6 z-10 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 }}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E2C97E]/50 bg-[#17130F] shadow-[0_0_24px_rgba(201,168,76,0.35)]"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-[#C9A84C]" />
                    </motion.div>
                  </div>

                  {/* Text */}
                  <div className={`pl-14 md:pl-0 ${left ? 'md:pr-14 md:text-right' : 'md:pl-14'}`}>
                    <div className={`mb-3 flex items-center gap-3 ${left ? 'md:justify-end' : ''}`}>
                      <span className="font-serif text-3xl text-[#C9A84C]/70">{item.step}</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2C97E]/25 bg-[#C9A84C]/10 text-[#E2C97E]">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#E2C97E]">{item.subtitle}</p>
                    <h3 className="mt-2 font-serif text-3xl text-white md:text-4xl">{item.title}</h3>
                    <p className={`mt-4 text-sm font-light leading-relaxed text-white/65 md:text-[0.98rem] ${left ? 'md:ml-auto' : ''} max-w-md`}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94, x: left ? 24 : -24 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.75, delay: 0.12 }}
                    className="group relative ml-14 overflow-hidden md:ml-0"
                  >
                    <div className="aspect-[16/10] overflow-hidden border border-white/10">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        whileHover={{ scale: 1.04 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-[#E2C97E]">
                          Stage {item.step}
                        </span>
                        <span className="font-serif text-lg text-white">{item.title}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen bg-luxury-black">
      {/* Hero */}
      <section className="relative min-h-[min(72vh,720px)] overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.8, ease: 'easeOut' }}
            src={RESIDENTIAL_HERO_IMAGE}
            alt="Alexone interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,14,12,0.5)_0%,rgba(13,14,12,0.65)_42%,rgba(13,14,12,0.94)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_70%,rgba(0,0,0,0.45),transparent_55%)]" />
          <motion.div
            animate={{ opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(201,168,76,0.18),transparent_50%)]"
          />
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.35, ease: 'easeOut' }}
          className="absolute left-0 top-[5.5rem] z-10 h-px w-full origin-left bg-gradient-to-r from-transparent via-luxury-gold/45 to-transparent md:top-[6rem]"
        />

        <div className={`container relative z-10 mx-auto flex min-h-[min(72vh,720px)] flex-col justify-end px-6 pb-12 pt-32 md:pb-16 md:pt-36 ${RAIL_TEXT_INSET}`}>
          <motion.img
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.15 }}
            src={alexoneWordmark}
            alt="Alexone"
            className="mb-5 h-14 w-auto drop-shadow-[0_8px_28px_rgba(0,0,0,0.65)] sm:mb-6 sm:h-16 md:h-20"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-3 text-xs uppercase tracking-[0.45em] text-luxury-gold-light"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl font-serif text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
            style={{ fontSize: 'clamp(2.2rem, 6.2vw, 4.75rem)', fontWeight: 400, lineHeight: 1.05 }}
          >
            Interiors shaped
            <br />
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="inline-block text-luxury-gold-light"
            >
              with intention
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.85 }}
            className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/85 md:text-lg"
          >
            Alexone by Suleprava crafts residential, commercial, and hospitality interiors —
            where material, light, and lifestyle meet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {['Discover', 'Concept', 'Materials', 'Execute', 'Handover'].map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.08 }}
                className="border border-white/15 bg-white/5 px-3 py-1.5 text-[9px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-md"
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Studio highlights — compact bridge into journey */}
      <section className="border-y border-[#E2C97E]/15 bg-[#14110E] px-6 py-8">
        <div className={`container mx-auto grid gap-4 sm:grid-cols-3 ${RAIL_TEXT_INSET}`}>
          {[
            { k: 'Studio Focus', v: 'Interior & Exterior' },
            { k: 'Craft', v: 'Concept to Site' },
            { k: 'Signature', v: 'Bespoke Spaces' },
          ].map((row, i) => (
            <motion.div
              key={row.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-white/10 bg-white/[0.04] px-5 py-4 text-center"
            >
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#C9A84C]">{row.k}</p>
              <p className="mt-2 font-serif text-lg text-white/90">{row.v}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <JourneySection />

      {/* Vision & Mission */}
      <section className="relative overflow-hidden bg-[#F7F3EC] py-16 md:py-24">
        <div className="container relative mx-auto px-6">
          <div className={`mb-12 md:mb-16 ${RAIL_TEXT_INSET}`}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 text-[10px] uppercase tracking-[0.42em] text-luxury-gold"
            >
              Direction
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl text-luxury-charcoal md:text-5xl"
            >
              Vision &amp; Mission
            </motion.h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {VISION_MISSION.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30, rotateX: 8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: idx * 0.12, duration: 0.7 }}
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden border border-luxury-charcoal/10 bg-white p-7 shadow-[0_12px_40px_-20px_rgba(44,37,32,0.2)] md:p-9"
                >
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                    className="absolute left-0 top-0 h-full w-1 origin-top bg-gradient-to-b from-[#C9A84C] to-[#E2C97E]"
                  />
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-luxury-gold/10 text-luxury-gold">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold">{item.label}</p>
                  </div>
                  <h3 className="mb-3 font-serif text-2xl text-luxury-charcoal md:text-[1.7rem]">{item.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-luxury-charcoal/62 md:text-[0.98rem]">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="relative bg-[#17130F] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div className={RAIL_TEXT_INSET}>
              <div className="mb-4 flex items-center gap-3">
                <Flag className="h-4 w-4 text-[#E2C97E]" strokeWidth={1.5} />
                <p className="text-[10px] uppercase tracking-[0.42em] text-[#E2C97E]">Goals</p>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">
                What we aim for
                <br />
                <span className="text-[#E2C97E]">in every project</span>
              </h2>
              <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-white/60 md:text-base">
                Clear goals keep interiors intentional — from moodboard to the last coat of polish.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 hidden overflow-hidden md:block"
              >
                <div className="relative aspect-[4/5] max-w-xs overflow-hidden">
                  <motion.img
                    src={living09}
                    alt="Feature interior"
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>
              </motion.div>
            </div>

            <div className="divide-y divide-white/10 border-t border-white/10">
              {GOALS.map((goal, idx) => (
                <motion.div
                  key={goal.num}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: idx * 0.08, duration: 0.55 }}
                  whileHover={{ x: 6 }}
                  className="group grid grid-cols-[auto_1fr] gap-5 py-7 md:gap-8 md:py-8"
                >
                  <span className="font-serif text-3xl text-[#C9A84C]/75 transition-colors group-hover:text-[#E2C97E] md:text-4xl">
                    {goal.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{goal.title}</h3>
                    <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-white/60">
                      {goal.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] overflow-hidden shadow-[0_28px_80px_-20px_rgba(44,37,32,0.35)]"
              >
                <motion.img
                  src={living01}
                  alt="Layered living space"
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6 }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 28, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="absolute -bottom-6 -right-3 hidden w-[50%] overflow-hidden border border-white/25 shadow-2xl md:block lg:-right-6"
              >
                <div className="aspect-[4/3]">
                  <img src={kitchen02} alt="Kitchen detail" className="h-full w-full object-cover" />
                </div>
              </motion.div>
            </div>

            <div className={RAIL_TEXT_INSET}>
              <SectionHeading title="Our Philosophy" subtitle="Design belief" align="left" />
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg font-light leading-relaxed text-luxury-charcoal/72"
              >
                Interiors succeed when materials, light, and proportion work as one composition —
                not as a checklist of products.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-5 text-base font-light leading-relaxed text-luxury-charcoal/58"
              >
                From modular kitchens and wardrobe walls to feature panelling and ceiling light
                profiles, we stay close to the craft.
              </motion.p>
              <ul className="mt-8 space-y-3">
                {[
                  'Moodboards rooted in your lifestyle and palette',
                  'Finish selections tuned to durability and touch',
                  'Site coordination that protects the design intent',
                ].map((line, i) => (
                  <motion.li
                    key={line}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 + i * 0.08 }}
                    className="flex items-start gap-3 text-sm text-luxury-charcoal/70"
                  >
                    <span className="mt-2 h-px w-6 shrink-0 bg-luxury-gold" />
                    {line}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#FFFBF6] pb-20 pt-14 md:pb-28 md:pt-16">
        <div className="container mx-auto px-6">
          <div className={`mb-12 md:mb-16 ${RAIL_TEXT_INSET}`}>
            <SectionHeading title="What Guides Us" subtitle="Principles" align="left" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: idx * 0.06, duration: 0.55 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden border border-luxury-charcoal/[0.08] bg-white p-7 shadow-[0_2px_40px_-12px_rgba(44,37,32,0.1)]"
                >
                  <motion.div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-luxury-gold/10 text-luxury-gold"
                    whileHover={{ rotate: 8, scale: 1.08 }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </motion.div>
                  <p className="mb-2 font-serif text-xl text-luxury-charcoal">{value.title}</p>
                  <p className="text-sm font-light leading-relaxed text-luxury-charcoal/58">{value.desc}</p>
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-luxury-gold/[0.05] transition-transform duration-700 group-hover:scale-150" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2a241f] via-[#1f1b18] to-[#141210] py-16 md:py-20">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-[#C9A84C]/15 blur-3xl"
        />
        <div className={`container relative mx-auto px-6 text-center ${RAIL_TEXT_INSET}`}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-luxury-gold/90"
          >
            Begin your journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 font-serif text-3xl text-white md:text-4xl"
          >
            Tell us about your space
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-lg text-sm font-light leading-relaxed text-white/65"
          >
            Share your home or project brief — we will shape the interior experience from concept
            to completion.
          </motion.p>
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate?.('contact')}
            className="mt-9 inline-flex items-center gap-2 border-2 border-[#E2C97E] bg-[#C9A84C] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.28em] text-[#1a2108] shadow-[0_12px_36px_rgba(201,168,76,0.3)] transition-colors hover:bg-[#E2C97E]"
          >
            Start a conversation
          </motion.button>
        </div>
      </section>
    </div>
  );
}
