'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalModals() {
  const [isExitOpen, setIsExitOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  // Exit Intent Logic
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const hasShown = sessionStorage.getItem('exitModalShown');
        if (!hasShown) {
          setIsExitOpen(true);
          sessionStorage.setItem('exitModalShown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Global Event Listener for Enquiry Modal
  useEffect(() => {
    const handleOpenEnquiry = (e: any) => {
      if (e.detail?.course) setSelectedCourse(e.detail.course);
      setIsEnquiryOpen(true);
    };
    window.addEventListener('open-enquiry', handleOpenEnquiry);

    const clickHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const trigger = target.closest('[data-enquiry-modal="true"]') as HTMLElement;
      if (trigger) {
        e.preventDefault();
        const course = trigger.getAttribute('data-course');
        if (course) setSelectedCourse(course);
        else setSelectedCourse('');
        setIsEnquiryOpen(true);
      }
    };
    document.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener('open-enquiry', handleOpenEnquiry);
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  const closeModal = () => {
    setIsExitOpen(false);
    setIsEnquiryOpen(false);
    // Reset submitted state and course after close animation
    setTimeout(() => {
      setSubmitted(false);
      setSelectedCourse('');
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => closeModal(), 2200);
  };

  const isOpen = isExitOpen || isEnquiryOpen;
  const isExit = isExitOpen && !isEnquiryOpen;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#181c20]/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white w-full max-w-[420px] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] relative z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>close</span>
            </button>

            {submitted ? (
              /* Success State */
              <div className="p-10 text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#f4ffb8] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#556500]" style={{ fontSize: '32px' }}>check</span>
                </div>
                <h3 className="text-xl font-bold text-[#181c20] mb-2">Thank you!</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our counselor will reach out to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="px-8 pt-8 pb-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#556500] mb-2">
                    {isExit ? 'Before you leave' : 'Quick Enquiry'}
                  </p>
                  <h2 className="text-[22px] font-extrabold text-[#181c20] tracking-tight leading-snug mb-1.5">
                    {isExit ? 'Get a free career roadmap' : 'Talk to our experts'}
                  </h2>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    {isExit
                      ? 'Leave your number — we\'ll send you a personalized learning plan.'
                      : 'Share your details and we\'ll guide you to the right program.'}
                  </p>
                </div>

                {/* Form */}
                <form className="px-8 pt-5 pb-8" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg bg-[#f7f9ff] border border-slate-200 text-[14px] text-[#181c20] placeholder:text-slate-400 font-medium focus:outline-none focus:border-[#b9d719] focus:ring-1 focus:ring-[#b9d719]/40 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-lg bg-[#f7f9ff] border border-slate-200 text-[14px] text-[#181c20] placeholder:text-slate-400 font-medium focus:outline-none focus:border-[#b9d719] focus:ring-1 focus:ring-[#b9d719]/40 transition-all"
                      />
                    </div>

                    {/* Program — only for enquiry modal */}
                    {!isExit && (
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                          Program of Interest
                        </label>
                        <div className="relative">
                          <select
                            id="course"
                            required
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-[#f7f9ff] border border-slate-200 text-[14px] text-[#181c20] font-medium focus:outline-none focus:border-[#b9d719] focus:ring-1 focus:ring-[#b9d719]/40 appearance-none pr-10 transition-all"
                          >
                            <option value="">Select a Course</option>
                            <optgroup label="Computer Courses">
                              <option value="ADCA">ADCA</option>
                              <option value="DOWA">DOWA</option>
                              <option value="DCA">DCA</option>
                              <option value="DOM">DOM</option>
                              <option value="Tally">Tally</option>
                              <option value="CCC">CCC</option>
                            </optgroup>
                            <optgroup label="Degree Courses">
                              <option value="BCA">BCA</option>
                              <option value="MCA">MCA</option>
                              <option value="BBA">BBA</option>
                              <option value="MBA">MBA</option>
                              <option value="BSc-IT">BSc-IT</option>
                              <option value="MSc-IT">MSc-IT</option>
                              <option value="MA">MA</option>
                            </optgroup>
                            <optgroup label="Paramedical Courses">
                              <option value="DMLT">DMLT</option>
                              <option value="OT">Operation Theatre</option>
                              <option value="ANM">ANM</option>
                              <option value="GNM">GNM</option>
                              <option value="XRAY">X-Ray & Imaging</option>
                              <option value="CMSED">CMS & ED</option>
                            </optgroup>
                          </select>
                          <svg className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full mt-6 bg-[#b9d719] text-[#181e00] py-3.5 rounded-lg font-bold text-sm tracking-wide hover:bg-[#cbf018] active:scale-[0.98] transition-all duration-200"
                  >
                    {isExit ? 'Send me the roadmap' : 'Submit Enquiry'}
                  </button>

                  <p className="text-center text-[10px] text-slate-400 mt-4 tracking-wide">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
