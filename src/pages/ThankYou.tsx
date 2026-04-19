import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { RAIL_TEXT_INSET } from '../layoutRail';

interface ThankYouProps {
  onNavigate: (page: string) => void;
}

export default function ThankYou({ onNavigate }: ThankYouProps) {
  return (
    <div className="min-h-screen bg-luxury-black px-6 pb-24 pt-32">
      <div className="container mx-auto">
        <div className={`max-w-2xl ${RAIL_TEXT_INSET}`}>
          <SectionHeading title="Thank You" subtitle="We received your message" align="left" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="space-y-6 text-lg font-light leading-relaxed text-luxury-charcoal/75"
          >
            <p>
              Your enquiry has been submitted. Our team will review it and get back to you as soon as possible — usually
              within one business day.
            </p>
            <p className="text-base text-luxury-charcoal/55">
              Prefer a faster reply? Reach us on WhatsApp or call{' '}
              <a href="tel:+918249046203" className="text-luxury-gold underline-offset-2 hover:underline">
                +91 82490 46203
              </a>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="border border-luxury-charcoal/20 bg-white px-8 py-3.5 text-xs uppercase tracking-[0.28em] text-luxury-charcoal transition-colors hover:border-luxury-gold/40 hover:text-luxury-gold"
            >
              Back to home
            </button>
            <button
              type="button"
              onClick={() => onNavigate('spaces')}
              className="border border-luxury-gold/40 bg-luxury-gold/10 px-8 py-3.5 text-xs uppercase tracking-[0.28em] text-luxury-charcoal transition-colors hover:bg-luxury-gold/20"
            >
              Explore spaces
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
