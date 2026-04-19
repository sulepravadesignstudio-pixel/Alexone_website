import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { RAIL_TEXT_INSET } from '../layoutRail';

/**
 * Same chrome as other pages (nav, footer, rail) — reachable via `#/privacy` only; not listed in main nav.
 */
export default function Privacy() {
  return (
    <div className="pt-32 pb-20 px-6 bg-luxury-black min-h-screen">
      <div className="container mx-auto">
        <div className={`max-w-3xl ${RAIL_TEXT_INSET}`}>
          <SectionHeading title="Privacy Policy" subtitle="Legal" align="left" />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-sm text-luxury-charcoal/50"
          >
            Last updated: April 2026
          </motion.p>

          <div className="space-y-10 text-[0.95rem] leading-relaxed text-luxury-charcoal/75">
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="mb-3 font-serif text-xl text-luxury-charcoal">1. Purpose</h2>
              <p>
                This policy describes how Alexone (“we”, “us”) collects, uses, and protects information in connection
                with our interior design services and this website.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <h2 className="mb-3 font-serif text-xl text-luxury-charcoal">2. Information we may collect</h2>
              <p>
                When you enquire or work with us, we may collect your name, phone number, email address, project
                location, preferences, and messages you send. Technical data such as browser type, approximate region,
                and pages visited may be collected automatically to operate and improve the site.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="mb-3 font-serif text-xl text-luxury-charcoal">3. How we use information</h2>
              <p>
                We use contact and project details to respond to enquiries, prepare proposals, deliver design services,
                and communicate about your project. Usage data helps us maintain security and understand how the site is
                used.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <h2 className="mb-3 font-serif text-xl text-luxury-charcoal">4. Sharing</h2>
              <p>
                We do not sell your personal information. We may share necessary details with contractors, suppliers, or
                partners involved in delivering your project, or when required by law.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="mb-3 font-serif text-xl text-luxury-charcoal">5. Retention</h2>
              <p>
                We retain information for as long as needed to fulfil the purposes above and meet legal or business
                requirements, then delete or anonymise it where appropriate.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <h2 className="mb-3 font-serif text-xl text-luxury-charcoal">6. Your choices</h2>
              <p>
                You may request access, correction, or deletion of your personal information where applicable. Contact us
                using the details below.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="mb-3 font-serif text-xl text-luxury-charcoal">7. Contact</h2>
              <p>
                Alexone — Rasulgarh, Bhubaneswar, Odisha, India.
                <br />
                Email:{' '}
                <a href="mailto:info@alexone.design" className="text-luxury-gold underline-offset-2 hover:underline">
                  info@alexone.design
                </a>
                <br />
                Phone: +91 82490 46203
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
