import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import ContactEnquiryForm from './ContactEnquiryForm';

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
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#0D0E0C]/72 backdrop-blur-sm"
            aria-label="Close dialog"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[min(92vh,920px)] w-full max-w-lg overflow-y-auto border border-luxury-charcoal/10 bg-white p-8 shadow-2xl shadow-black/25 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-luxury-gold">Contact Us</p>
                <h2 id="enquiry-modal-title" className="mt-2 font-serif text-2xl text-luxury-charcoal md:text-3xl">
                  Let&apos;s Build Your Dream Space
                </h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-luxury-charcoal/55">
                  Share your vision — we&apos;ll shape the experience.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-full border border-luxury-charcoal/15 p-2 text-luxury-charcoal/60 transition-colors hover:border-luxury-gold/40 hover:text-luxury-gold"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <ContactEnquiryForm
              idPrefix="modal-enquiry"
              onSuccess={() => {
                onClose();
                onSuccess?.();
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
