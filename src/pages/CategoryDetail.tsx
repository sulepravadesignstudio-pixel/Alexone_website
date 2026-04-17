import { motion, AnimatePresence } from 'motion/react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS, CATEGORIES, RESIDENTIAL_ENTRY_STACK } from '../constants';
import { useState } from 'react';
import ResidentialImmersive from '../components/ResidentialImmersive';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface CategoryDetailProps {
  categoryId: string;
  onNavigate: (page: string) => void;
}

export default function CategoryDetail({ categoryId, onNavigate }: CategoryDetailProps) {
  const category = CATEGORIES.find(c => c.id === categoryId);
  const filteredProjects = PROJECTS.filter(
    p => p.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === categoryId,
  );

  const [filter, setFilter] = useState('All');
  const subCats = [...new Set(filteredProjects.map(p => p.subCategory).filter(Boolean) as string[])];
  const filters = categoryId === 'residential' ? ['All', ...subCats] : ['All'];

  const projectsToDisplay =
    filter === 'All' ? filteredProjects : filteredProjects.filter(p => p.subCategory === filter);

  if (!category) return null;

  return (
    <div className="min-h-screen bg-[#14120F] text-luxury-ivory">

      {/* ── HERO BANNER ── */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-end">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
        >
          <img
            src={category.image}
            alt={category.title}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#14120F] via-[#14120F]/40 to-black/20" />

        <div className="relative z-10 container mx-auto px-6 pb-16">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onClick={() => onNavigate('spaces')}
            className="flex items-center gap-2 text-white/60 hover:text-luxury-gold transition-colors duration-300 mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-[10px] uppercase tracking-[0.35em]">Back to Spaces</span>
          </motion.button>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.45em] text-luxury-gold mb-4"
          >
            Alexone · {category.title}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white leading-tight"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)', fontWeight: 300 }}
          >
            {category.title} Design
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 1, ease: 'easeOut' }}
            className="mt-6 h-px w-28 origin-left"
            style={{ background: 'linear-gradient(90deg,#C9A84C,transparent)' }}
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-6 max-w-2xl text-white/60 font-light leading-relaxed"
            style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}
          >
            {category.description}
          </motion.p>
        </div>
      </section>

      {/* ── 3D IMMERSIVE (residential only) ── */}
      {categoryId === 'residential' && (
        <section className="py-20 px-6 bg-[#14120F]">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-[10px] uppercase tracking-[0.45em] text-luxury-gold mb-4">
                Immersive View
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-light">
                Enter The Residence
              </h2>
              <div className="mt-5 h-px w-20 bg-luxury-gold/60" />
              <p className="mt-6 max-w-2xl text-white/55 font-light leading-relaxed">
                Tap <span className="text-luxury-gold">Enter 3D View</span> for the cinematic entry
                transition, then drag inside the room to explore each space. Use the gold pins to
                reveal material and design details.
              </p>
            </motion.div>
            <ResidentialImmersive />
          </div>
        </section>
      )}

      {/* ── GALLERY ── */}
      <section className="py-20 px-6 bg-[#14120F]">
        <div className="container mx-auto">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.45em] text-luxury-gold mb-4">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-light">
              {categoryId === 'residential' ? 'Project Gallery' : 'Selected Works'}
            </h2>
            <div className="mt-5 h-px w-20 bg-luxury-gold/60" />
          </motion.div>

          {/* Filters */}
          {filters.length > 1 && (
            <div className="flex flex-wrap gap-3 mb-12">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 text-[10px] uppercase tracking-[0.28em] border transition-all duration-300 ${
                    filter === f
                      ? 'bg-luxury-gold border-luxury-gold text-white'
                      : 'border-white/20 text-white/60 hover:border-luxury-gold/50 hover:text-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          )}

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projectsToDisplay.length > 0 ? (
                projectsToDisplay.map((project, idx) => (
                  <ProjectCard key={project.id} project={project} index={idx} />
                ))
              ) : (
                <div className="col-span-full py-24 text-center border border-dashed border-white/10 rounded-2xl">
                  <p className="text-white/30 uppercase tracking-widest text-sm">
                    More projects coming soon
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── RESIDENTIAL OPTIONS (hover-reveal image cards) ── */}
      {categoryId === 'residential' && subCats.length > 0 && (
        <section className="py-20 px-6 bg-[#111507]">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <p className="text-[10px] uppercase tracking-[0.45em] text-luxury-gold mb-4">
                Room Types
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-light">
                Residential Options
              </h2>
              <div className="mt-5 mx-auto h-px w-20 bg-luxury-gold/60" />
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {subCats.map((room, idx) => {
                const count = filteredProjects.filter(p => p.subCategory === room).length;
                const thumb =
                  filteredProjects.find(p => p.subCategory === room)?.image ??
                  RESIDENTIAL_ENTRY_STACK[idx % RESIDENTIAL_ENTRY_STACK.length].image;

                return (
                  <motion.button
                    key={room}
                    type="button"
                    onClick={() => { setFilter(room); window.scrollTo({ top: 600, behavior: 'smooth' }); }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className="group relative overflow-hidden rounded-2xl aspect-[4/5] text-left"
                  >
                    <img
                      src={thumb}
                      alt={room}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/80 transition-all duration-500" />

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-[9px] uppercase tracking-[0.35em] text-luxury-gold mb-2">
                        Option {idx + 1}
                      </p>
                      <h3 className="font-serif text-xl text-white leading-tight">{room}</h3>
                      <p className="mt-2 text-xs text-white/50">
                        {count} visual concept{count !== 1 ? 's' : ''}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Gallery <ArrowRight size={12} />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
