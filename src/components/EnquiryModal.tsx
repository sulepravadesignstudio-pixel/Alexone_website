import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import ContactEnquiryForm from './ContactEnquiryForm';
import alexoneWordmark from '../assets/alexone-wordmark.svg';
import living06 from '../assets/residential/living-06.jpg';

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  /** After successful submit (e.g. navigate to thank-you). */
  onSuccess?: () => void;
}

export default function EnquiryModal({ open, onClose, onSuccess }: EnquiryModalProps) {
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener('keydown', onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, onKeyDown]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center p-3 sm:p-5 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#0a0908]/78 backdrop-blur-md"
            aria-label="Close dialog"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-modal-title"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 grid max-h-[min(94vh,900px)] w-full max-w-[980px] overflow-hidden border border-[#E2C97E]/35 bg-[#FFFBF6] shadow-[0_40px_120px_rgba(0,0,0,0.55)] md:grid-cols-[0.92fr_1.08fr]"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow:
                '0 40px 120px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(226,201,126,0.18)',
            }}
          >
            {/* Gold corner accents */}
            <div className="pointer-events-none absolute left-3 top-3 z-20 h-6 w-6 border-l-2 border-t-2 border-[#C9A84C]/80" />
            <div className="pointer-events-none absolute right-3 top-3 z-20 h-6 w-6 border-r-2 border-t-2 border-[#C9A84C]/80" />
            <div className="pointer-events-none absolute bottom-3 left-3 z-20 h-6 w-6 border-b-2 border-l-2 border-[#C9A84C]/80" />
            <div className="pointer-events-none absolute bottom-3 right-3 z-20 h-6 w-6 border-b-2 border-r-2 border-[#C9A84C]/80" />

            {/* Image panel */}
            <div className="relative hidden min-h-[280px] md:block">
              <img src={living06} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,16,12,0.35)_0%,rgba(20,16,12,0.55)_40%,rgba(20,16,12,0.88)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,168,76,0.22),transparent_50%)]" />

              <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-10">
                <div>
                  <img
                    src={alexoneWordmark}
                    alt="Alexone"
                    className="h-10 w-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.45)] lg:h-12"
                  />
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 backdrop-blur-md">
                    <Sparkles size={11} className="text-[#E2C97E]" />
                    <span className="text-[9px] uppercase tracking-[0.32em] text-[#FFF3D0]">
                      Luxury Design Studio
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#E2C97E]">Private enquiry</p>
                  <h3 className="mt-3 max-w-[14rem] font-serif text-3xl leading-tight text-white lg:text-[2.15rem]">
                    Interiors crafted with intention
                  </h3>
                  <p className="mt-4 max-w-[16rem] text-sm font-light leading-relaxed text-white/70">
                    Tell us about your home or project — we will shape a refined spatial experience
                    from concept to finish.
                  </p>
                  <div className="mt-6 h-px w-16 bg-gradient-to-r from-[#C9A84C] to-transparent" />
                </div>
              </div>
            </div>

            {/* Form panel */}
            <div className="relative flex max-h-[min(94vh,900px)] flex-col overflow-y-auto bg-[linear-gradient(165deg,#FFFDF8_0%,#F8F1E6_55%,#F3EAD9_100%)]">
              <div
                className="absolute left-0 top-0 h-full w-1 md:hidden"
                style={{ background: 'linear-gradient(180deg,#C9A84C,#E2C97E,transparent)' }}
              />

              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#C9A84C]/15 bg-[#FFFDF8]/92 px-6 py-5 backdrop-blur-md md:px-8 md:py-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.42em] text-[#9A7324]">Contact Us</p>
                  <h2
                    id="enquiry-modal-title"
                    className="mt-2 font-serif text-2xl leading-tight text-[#1A1512] md:text-[1.85rem]"
                  >
                    Let&apos;s Build Your
                    <br />
                    <span className="text-[#B8963A]">Dream Space</span>
                  </h2>
                  <p className="mt-2 hidden text-sm font-light text-[#5C524A] sm:block">
                    Share your vision — we&apos;ll shape the experience.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 rounded-full border border-[#C9A84C]/35 bg-white/70 p-2.5 text-[#5C524A] transition-colors hover:border-[#C9A84C] hover:bg-[#C9A84C]/12 hover:text-[#8B6914]"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="px-6 py-6 md:px-8 md:py-8">
                <div className="mb-6 flex items-center gap-3 md:hidden">
                  <img src={alexoneWordmark} alt="Alexone" className="h-8 w-auto" />
                </div>
                <ContactEnquiryForm
                  idPrefix="modal-enquiry"
                  onSuccess={() => {
                    onClose();
                    onSuccess?.();
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
