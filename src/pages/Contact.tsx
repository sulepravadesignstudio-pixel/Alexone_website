import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
        <div className="pt-32 pb-20 px-6 bg-luxury-black min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <SectionHeading 
              title="Let’s Build Your Dream Space" 
              subtitle="Contact Us" 
              align="left" 
            />
            <p className="text-luxury-charcoal/60 text-lg font-light mb-12 max-w-md">
              Whether it’s a residence, commercial project, hospitality space, or custom concept, we’d love to hear from you. Share your vision. We’ll shape the experience.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-luxury-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-luxury-gold mb-2">Office Address</h4>
                  <p className="text-luxury-charcoal/80 font-light">Head Office: Rasulgarh,<br />Bhubaneswar, Odisha, India</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-luxury-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-luxury-gold mb-2">Phone Number</h4>
                  <p className="text-luxury-charcoal/80 font-light">
                    +91 70089 56973<br />
                    +91 98278 45937
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-luxury-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-luxury-gold mb-2">Email Address</h4>
                  <p className="text-luxury-charcoal/80 font-light">info@alexone.design</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-luxury-charcoal/15 flex items-center justify-center text-luxury-charcoal/50 hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 bg-white border border-luxury-charcoal/10 shadow-sm"
          >
          <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-luxury-gold">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-luxury-charcoal/20 py-3 text-luxury-charcoal focus:border-luxury-gold outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-luxury-gold">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-b border-luxury-charcoal/20 py-3 text-luxury-charcoal focus:border-luxury-gold outline-none transition-colors"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-luxury-gold">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-luxury-charcoal/20 py-3 text-luxury-charcoal focus:border-luxury-gold outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-luxury-gold">Project Type</label>
                <select className="w-full bg-transparent border-b border-luxury-charcoal/20 py-3 text-luxury-charcoal/60 focus:border-luxury-gold outline-none transition-colors appearance-none">
                  <option className="bg-white">Residential</option>
                  <option className="bg-white">Commercial</option>
                  <option className="bg-white">Hotel</option>
                  <option className="bg-white">Bar & Lounge</option>
                  <option className="bg-white">Workspace</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-luxury-gold">Your Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-luxury-charcoal/20 py-3 text-luxury-charcoal focus:border-luxury-gold outline-none transition-colors resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <button className="w-full py-5 bg-luxury-gold text-white text-xs uppercase tracking-[0.4em] hover:bg-luxury-charcoal transition-all duration-500 mt-8">
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
