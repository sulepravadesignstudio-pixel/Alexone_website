import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  const values = [
    { title: 'Luxury with purpose', desc: 'Design that goes beyond aesthetics to serve a meaningful function.' },
    { title: 'Precision in every detail', desc: 'Meticulous attention to every joint, finish, and texture.' },
    { title: 'Timeless aesthetics', desc: 'Creating environments that remain elegant across generations.' },
    { title: 'Functional beauty', desc: 'Where high design meets effortless usability.' },
    { title: 'Client-centered design', desc: 'Your vision, elevated through our professional expertise.' },
  ];

  return (
      <div className="pt-32 pb-20 px-6 bg-luxury-black min-h-screen">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="max-w-4xl mb-32">
          <SectionHeading title="About Alexone" subtitle="Our Story" align="left" />
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-serif text-luxury-gold mb-8"
          >
            A design studio where elegance meets innovation.
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-luxury-charcoal/70 text-lg md:text-xl font-light leading-relaxed"
          >
            Alexone by Suleprava is dedicated to transforming interiors and exteriors into beautifully crafted environments that feel timeless, functional, and distinctive. Our approach blends creativity, detail, premium material choices, and thoughtful planning to deliver spaces that resonate with both lifestyle and purpose.
          </motion.p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/3] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
              alt="Design Studio" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="flex flex-col justify-center">
            <SectionHeading title="Our Philosophy" subtitle="Vision" align="left" />
            <p className="text-luxury-charcoal/60 text-lg font-light leading-relaxed">
              We believe every space should tell a story — one of identity, aspiration, and experience. At Alexone, we combine design sensitivity with execution intelligence to create spaces that are both visually powerful and deeply livable.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 border border-luxury-charcoal/10 bg-white shadow-sm hover:border-luxury-gold/40 transition-colors duration-500"
            >
              <h4 className="text-xl font-serif text-luxury-gold mb-4">{value.title}</h4>
              <p className="text-sm text-luxury-charcoal/55 font-light leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
