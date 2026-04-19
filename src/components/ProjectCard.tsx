import { motion } from 'motion/react';
import { Project } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold mb-2 block"
        >
          {project.category} {project.subCategory ? `| ${project.subCategory}` : ''}
        </motion.span>
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-serif text-luxury-ivory mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-luxury-ivory/60 font-light max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {project.description}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-all duration-500">
            <ArrowUpRight size={18} className="text-luxury-ivory" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
