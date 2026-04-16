import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS, CATEGORIES, RESIDENTIAL_HERO_IMAGE } from '../constants';
import { ArrowRight, Play } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="pt-0">
      {/* Hero Section — full-bleed cinematic, matching alexona.vercel.app */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Background photo — slow Ken Burns zoom */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
        >
          <img
            src={RESIDENTIAL_HERO_IMAGE}
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dark overlay */}
        <div className="absolute inset-0 z-0 bg-black/52" />
        {/* Vignette */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.5)_100%)]" />

        {/* Thin gold rule — top */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, delay: 0.6, ease: 'easeOut' }}
          className="absolute top-[4.5rem] left-0 w-full h-px z-10 origin-left"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.45),transparent)' }}
        />

        {/* Main text block */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Small caps label */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.42em' }}
            transition={{ duration: 1.1, delay: 0.5 }}
            className="text-[#E2C97E] text-[10px] uppercase mb-7 font-light"
            style={{ letterSpacing: '0.42em' }}
          >
            Bespoke · Interior &amp; Exterior Design
          </motion.p>

          {/* Huge serif heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white mb-8 leading-[1.02]"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', fontWeight: 300 }}
          >
            Designing Spaces<br />That Define Luxury
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="text-white/60 text-sm md:text-base max-w-xl mx-auto mb-12 font-light leading-relaxed italic"
          >
            Real residential concepts, tailored finishes, and immersive visual storytelling
            brought together in one refined design language.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-5"
          >
            <button
              onClick={() => onNavigate('spaces')}
              className="group relative overflow-hidden px-11 py-4 bg-[#C9A84C] text-[#14120F] text-xs uppercase tracking-[0.38em] hover:bg-[#E2C97E] transition-colors duration-400"
            >
              Explore Projects
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-11 py-4 border border-white/35 text-white text-xs uppercase tracking-[0.38em] hover:border-[#E2C97E]/70 hover:bg-white/5 transition-all duration-400"
            >
              Book Consultation
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 mb-2">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#E2C97E]/60 to-transparent" />
        </motion.div>

        {/* Head Office Address */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-8 z-10 flex items-center gap-3"
        >
          <div className="w-px h-8 bg-[#E2C97E]/40" />
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">Head Office</p>
            <p className="text-[11px] text-white/60 font-light mt-0.5">Rasulgarh, Bhubaneswar, Odisha</p>
          </div>
        </motion.div>
      </section>

      {/* Brand Intro */}
      <section className="py-32 bg-luxury-black px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeading title="Where Vision Becomes Space" subtitle="Our Essence" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-serif text-luxury-charcoal/70 leading-relaxed italic"
          >
            Alexone by Suleprava is a premium interior and exterior design studio focused on creating elegant, intelligent, and memorable environments. We design with attention to detail, luxurious materiality, and a deep understanding of how people experience space.
          </motion.p>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-20 bg-luxury-black overflow-hidden">
        <div className="flex flex-col md:flex-row h-[80vh] w-full">
          {CATEGORIES.slice(0, 5).map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ flex: 1 }}
              whileHover={{ flex: 2 }}
              transition={{ duration: 0.6, ease: 'circOut' }}
              className="relative group overflow-hidden cursor-pointer border-r border-white/5 last:border-r-0"
              onClick={() => onNavigate(cat.id)}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-serif text-luxury-ivory mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  {cat.title}
                </h3>
                <p className="text-xs text-luxury-ivory/60 font-light max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {cat.description}
                </p>
                <div className="mt-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <ArrowRight size={18} className="text-luxury-ivory" />
                </div>
              </div>

              {/* Vertical Title for collapsed state */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 md:rotate-90 origin-center whitespace-nowrap opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-xs uppercase tracking-[0.5em] text-luxury-ivory/40">{cat.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-luxury-black px-6">
        <div className="container mx-auto">
          <SectionHeading 
            title="Selected Design Stories" 
            subtitle="Portfolio" 
            align="left" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 6).map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
          <div className="mt-20 text-center">
            <button 
              onClick={() => onNavigate('spaces')}
              className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-luxury-gold hover:text-luxury-charcoal transition-colors"
            >
              View All Projects <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Materials Preview */}
      <section className="py-32 bg-luxury-ivory px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                title="Materials That Shape Experience" 
                subtitle="Craftsmanship" 
                align="left" 
                light
              />
              <p className="text-luxury-charcoal/70 text-lg font-light leading-relaxed mb-10">
                Every surface, texture, finish, and fitting is chosen with care to ensure that each Alexone project feels refined, durable, and deeply expressive. We believe that luxury is felt through the touch of a material and the play of light on a surface.
              </p>
              <button 
                onClick={() => onNavigate('materials')}
                className="px-10 py-4 border border-luxury-charcoal/25 text-luxury-charcoal text-xs uppercase tracking-[0.3em] hover:bg-luxury-charcoal hover:text-luxury-ivory transition-all duration-500"
              >
                Explore Materials
              </button>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=600'
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`aspect-square overflow-hidden ${idx % 2 === 1 ? 'mt-12' : ''}`}
                >
                  <img src={img} alt="Material" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-40 bg-luxury-beige px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.04] pointer-events-none flex items-center justify-center">
          <h2 className="text-[20vw] font-serif text-luxury-charcoal whitespace-nowrap">ALEXONE</h2>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Play size={48} className="mx-auto text-luxury-gold mb-12 fill-luxury-gold" />
            <h2 className="text-4xl md:text-6xl font-serif text-luxury-charcoal mb-8 leading-tight">
              "Luxury Lives in the Details"
            </h2>
            <p className="text-luxury-gold text-xl uppercase tracking-[0.3em]">
              We don’t just design interiors. We shape experiences that stay with you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-luxury-beige px-6 border-t border-luxury-gold/20">
        <div className="container mx-auto text-center">
          <SectionHeading title="Let’s Design Something Extraordinary" subtitle="Get Started" />
          <p className="text-luxury-charcoal/60 max-w-xl mx-auto mb-12 font-light">
            Tell us about your project and let Alexone bring your vision to life. Our team of experts is ready to transform your space.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-12 py-5 bg-luxury-charcoal text-luxury-ivory text-xs uppercase tracking-[0.3em] hover:bg-luxury-gold transition-all duration-500"
            >
              Get in Touch
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-12 py-5 border border-luxury-charcoal/30 text-luxury-charcoal text-xs uppercase tracking-[0.3em] hover:bg-luxury-charcoal hover:text-luxury-ivory transition-all duration-500"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
