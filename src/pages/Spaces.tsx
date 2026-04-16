import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { CATEGORIES } from '../constants';
import { ArrowRight } from 'lucide-react';

interface SpacesProps {
  onNavigate: (page: string) => void;
}

export default function Spaces({ onNavigate }: SpacesProps) {
  return (
    <div className="pt-32 pb-20 px-6 bg-luxury-black min-h-screen">
      <div className="container mx-auto">
        <SectionHeading
          title="Explore Our Design Worlds"
          subtitle="Categories"
        />
        <p className="text-center text-luxury-charcoal/60 max-w-2xl mx-auto mb-20 font-light">
          Each category is crafted with its own visual identity, mood, and spatial story. From intimate residential corners to grand exteriors and beyond.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              onClick={() => onNavigate(cat.id)}
              className="group relative overflow-hidden cursor-pointer rounded-sm"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Gold top line on hover */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-luxury-gold group-hover:w-full transition-all duration-500" />

              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col">
                {/* Category number */}
                <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  {cat.title}
                </h3>
                <p className="text-xs text-white/65 font-light leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  View Projects <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
