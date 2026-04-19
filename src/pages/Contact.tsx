import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import ContactEnquiryForm from '../components/ContactEnquiryForm';
import { RAIL_TEXT_INSET } from '../layoutRail';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="min-h-screen bg-luxury-black px-6 pb-20 pt-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Contact Info */}
          <div className={RAIL_TEXT_INSET}>
            <SectionHeading title="Let’s Build Your Dream Space" subtitle="Contact Us" align="left" />
            <p className="mb-12 max-w-md text-lg font-light text-luxury-charcoal/60">
              Whether it’s a residence, commercial project, hospitality space, or custom concept, we’d love to hear from
              you. Share your vision. We’ll shape the experience.
            </p>

            <div className="mb-12 space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-luxury-gold/10">
                  <MapPin size={20} className="text-luxury-gold" />
                </div>
                <div>
                  <h4 className="mb-2 text-xs uppercase tracking-widest text-luxury-gold">Office Address</h4>
                  <p className="font-light text-luxury-charcoal/80">
                    Head Office: Rasulgarh,
                    <br />
                    Bhubaneswar, Odisha, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-luxury-gold/10">
                  <Phone size={20} className="text-luxury-gold" />
                </div>
                <div>
                  <h4 className="mb-2 text-xs uppercase tracking-widest text-luxury-gold">Phone Number</h4>
                  <p className="font-light text-luxury-charcoal/80">
                    +91 70089 56973
                    <br />
                    +91 98278 45937
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-luxury-gold/10">
                  <Mail size={20} className="text-luxury-gold" />
                </div>
                <div>
                  <h4 className="mb-2 text-xs uppercase tracking-widest text-luxury-gold">Email Address</h4>
                  <p className="font-light text-luxury-charcoal/80">info@alexone.design</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-luxury-charcoal/15 text-luxury-charcoal/50 transition-all duration-300 hover:border-luxury-gold hover:text-luxury-gold"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Form — same as Enquiry modal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className={`border border-luxury-charcoal/10 bg-white p-10 shadow-sm ${RAIL_TEXT_INSET} lg:pl-10`}
          >
            <ContactEnquiryForm idPrefix="page-contact" onSuccess={() => onNavigate('thank-you')} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
