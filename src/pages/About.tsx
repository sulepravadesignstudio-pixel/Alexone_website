import { motion } from 'motion/react';
import { Gem, HeartHandshake, Layers, Ruler, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { RAIL_TEXT_INSET } from '../layoutRail';
import { RESIDENTIAL_HERO_IMAGE } from '../constants';
import living01 from '../assets/residential/living-01.jpg';
import kitchen02 from '../assets/residential/kitchen-02.jpg';
import living09 from '../assets/residential/living-09.jpg';
import alexoneWordmark from '../assets/alexone-wordmark.svg';

interface AboutProps {
  onNavigate?: (page: string) => void;
}

const VALUES = [
  {
    title: 'Luxury with purpose',
    desc: 'Design that goes beyond aesthetics to serve a meaningful function.',
    icon: Gem,
  },
  {
    title: 'Precision in every detail',
    desc: 'Meticulous attention to every joint, finish, and texture.',
    icon: Ruler,
  },
  {
    title: 'Timeless aesthetics',
    desc: 'Creating environments that remain elegant across generations.',
    icon: Layers,
  },
  {
    title: 'Functional beauty',
    desc: 'Where high design meets effortless usability.',
    icon: Sparkles,
  },
  {
    title: 'Client-centered design',
    desc: 'Your vision, elevated through our professional expertise.',
    icon: HeartHandshake,
  },
] as const;

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-luxury-black min-h-screen">
      {/* Cinematic hero — matches Home mood, brand imagery */}
      <section className="relative min-h-[min(92vh,920px)] overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: 'easeOut' }}
            src={RESIDENTIAL_HERO_IMAGE}
            alt="Alexone interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,14,12,0.15)_0%,rgba(13,14,12,0.55)_38%,rgba(13,14,12,0.88)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(201,168,76,0.18),transparent_50%)]" />
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.35, ease: 'easeOut' }}
          className="absolute left-0 top-[5.5rem] z-10 h-px w-full origin-left bg-gradient-to-r from-transparent via-luxury-gold/45 to-transparent md:top-[6rem]"
        />

        <div className={`container relative z-10 mx-auto flex min-h-[min(92vh,920px)] flex-col justify-end px-6 pb-16 pt-36 md:pb-24 md:pt-40 ${RAIL_TEXT_INSET}`}>
          <motion.img
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            src={alexoneWordmark}
            alt="Alexone"
            className="mb-8 h-9 w-auto md:h-11"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.85 }}
            className="mb-4 text-xs uppercase tracking-[0.45em] text-luxury-gold-light/90"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl font-serif text-white"
            style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5rem)', fontWeight: 400, lineHeight: 1.05 }}
          >
            Interiors shaped
            <br />
            <span className="text-luxury-gold-light">with intention</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.9 }}
            className="mt-8 max-w-2xl text-base font-light leading-relaxed text-white/78 md:text-lg"
          >
            Alexone by Suleprava crafts residential, commercial, and hospitality environments that feel timeless,
            layered, and unmistakably yours — from first concept to final finish.
          </motion.p>
        </div>
      </section>

      {/* Pull quote + stats strip */}
      <section className="relative border-t border-luxury-charcoal/10 bg-[#F7F3EC] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(201,168,76,0.06),transparent_55%)]" />
        <div className={`container relative mx-auto px-6 ${RAIL_TEXT_INSET}`}>
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85 }}
            className="mx-auto max-w-4xl text-center font-serif text-2xl italic leading-snug text-luxury-charcoal/88 md:text-3xl md:leading-snug"
          >
            “Every space should read as a quiet signature — identity, aspiration, and daily life in balance.”
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-12 gap-y-8 border-t border-luxury-charcoal/10 pt-12"
          >
            {[
              { k: 'Focus', v: 'Bespoke interiors' },
              { k: 'Scope', v: 'Inside & out' },
              { k: 'Approach', v: 'Concept to site' },
            ].map((row) => (
              <div key={row.k} className="text-center">
                <p className="text-[10px] uppercase tracking-[0.35em] text-luxury-gold">{row.k}</p>
                <p className="mt-2 font-serif text-lg text-luxury-charcoal/85">{row.v}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy — overlapping frames */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_28px_80px_-20px_rgba(44,37,32,0.35)]"
              >
                <img src={living01} alt="Layered living space" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.12 }}
                className="absolute -bottom-8 -right-4 hidden w-[52%] overflow-hidden rounded-sm border border-white/20 shadow-2xl md:block lg:-right-8 lg:w-[48%]"
              >
                <div className="aspect-[4/3]">
                  <img src={kitchen02} alt="Kitchen detail" className="h-full w-full object-cover" />
                </div>
              </motion.div>
            </div>

            <div className={`lg:pt-8 ${RAIL_TEXT_INSET}`}>
              <SectionHeading title="Our Philosophy" subtitle="Vision" align="left" />
              <p className="text-lg font-light leading-relaxed text-luxury-charcoal/72">
                We combine design sensitivity with execution intelligence — so spaces feel visually powerful and deeply
                livable. Materials, light, and proportion are orchestrated as one composition, not a checklist.
              </p>
              <p className="mt-6 text-base font-light leading-relaxed text-luxury-charcoal/58">
                From first sketches to site coordination, we stay close to the craft: details that read in photographs
                and feel even better in real life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed image band */}
      <section className="relative py-0">
        <div className="relative aspect-[21/9] min-h-[200px] w-full overflow-hidden md:aspect-[24/9] md:min-h-[280px]">
          <img src={living09} alt="Interior atmosphere" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0E0C]/55 via-transparent to-[#0D0E0C]/45" />
        </div>
      </section>

      {/* Values — bento-style grid */}
      <section className="pb-24 pt-16 md:pb-32 md:pt-20">
        <div className="container mx-auto px-6">
          <div className={`mb-14 md:mb-20 ${RAIL_TEXT_INSET}`}>
            <SectionHeading title="What Guides Us" subtitle="Principles" align="left" />
            <p className="max-w-2xl text-base font-light text-luxury-charcoal/60">
              A shared language for how we think, specify, and deliver — so every project stays coherent from moodboard
              to handover.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: idx * 0.06, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-sm border border-luxury-charcoal/[0.08] bg-white/80 p-8 shadow-[0_2px_40px_-12px_rgba(44,37,32,0.12)] backdrop-blur-sm transition-[border-color,box-shadow] duration-500 hover:border-luxury-gold/25 hover:shadow-[0_12px_48px_-16px_rgba(44,37,32,0.18)]"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-luxury-gold/10 text-luxury-gold transition-colors duration-500 group-hover:bg-luxury-gold/18">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <p className="mb-2 font-serif text-xl text-luxury-charcoal">{value.title}</p>
                  <p className="text-sm font-light leading-relaxed text-luxury-charcoal/58">{value.desc}</p>
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-luxury-gold/[0.04] transition-transform duration-700 group-hover:scale-150" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden border-t border-luxury-charcoal/10 bg-gradient-to-br from-[#2a241f] via-[#1f1b18] to-[#141210] py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(201,168,76,0.12),transparent_45%)]" />
        <div className={`container relative mx-auto px-6 text-center ${RAIL_TEXT_INSET}`}>
          <p className="text-xs uppercase tracking-[0.4em] text-luxury-gold/90">Next step</p>
          <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl">Tell us about your space</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-light leading-relaxed text-white/65">
            Share the brief — we’ll help shape the experience from concept to completion.
          </p>
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate?.('contact')}
            className="mt-10 inline-flex items-center gap-2 border border-luxury-gold/50 bg-luxury-gold/10 px-8 py-3.5 text-xs uppercase tracking-[0.28em] text-luxury-gold-light transition-colors hover:bg-luxury-gold/20"
          >
            Start a conversation
          </motion.button>
        </div>
      </section>
    </div>
  );
}
