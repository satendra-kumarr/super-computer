'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "The practical approach at Super Computer College of IT was exactly what I needed. I landed my dream role at a Fortune 500 company before even finishing my course.",
    name: "Rahul Sharma",
    role: "Cloud Engineer, Tech Mahindra",
    image: "/images/testimonial-1.png",
  },
  {
    id: 2,
    quote: "Excellent faculty and well-structured curriculum. The placement cell helped me refine my interview skills, making me industry-ready from day one.",
    name: "Ananya Singh",
    role: "UI/UX Designer, Zomato",
    image: "/images/testimonial-2.png",
  },
  {
    id: 3,
    quote: "I transitioned from a non-tech background to a Cyber Security Analyst in just 8 months. The rigorous hands-on labs were challenging but completely worth it.",
    name: "Vikram Patel",
    role: "Cyber Security Analyst, TCS",
    image: "/images/testimonial-3.png",
  },
  {
    id: 4,
    quote: "The paramedical labs are equipped with the latest technology. The clinical exposure I received here was unparalleled and prepared me perfectly for my hospital role.",
    name: "Priya Desai",
    role: "Clinical Researcher, Apollo Hospitals",
    image: "/images/testimonial-4.png",
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2);

  // Update items to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsToShow >= testimonials.length ? 0 : prev + itemsToShow));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - itemsToShow < 0 ? Math.max(0, testimonials.length - itemsToShow) : prev - itemsToShow));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsToShow);
  if (visibleTestimonials.length < itemsToShow) {
    const remainder = itemsToShow - visibleTestimonials.length;
    visibleTestimonials.push(...testimonials.slice(0, remainder));
  }

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
      {/* Left Content */}
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#556500] mb-2 md:mb-3 block">Success Stories</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#181c20] mb-4 md:mb-6">From Students to Professionals</h2>
        <p className="text-slate-500 mb-10 font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
          Join thousands of successful alumni who have transformed their lives through our curriculum.
        </p>
        <div className="hidden lg:flex items-center justify-center lg:justify-start gap-4">
          <button onClick={handlePrev} className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors group">
            <span className="material-symbols-outlined text-slate-700 group-hover:-translate-x-1 transition-transform">arrow_back</span>
          </button>
          <button onClick={handleNext} className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors group">
            <span className="material-symbols-outlined text-slate-700 group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Right Sliding Cards */}
      <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-6 overflow-hidden min-h-[320px]">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleTestimonials.map((t, index) => (
            <motion.div
              key={`${t.id}-${currentIndex}`}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative flex-1 flex flex-col"
            >
              <span className="material-symbols-outlined absolute top-6 right-8 text-[#f4ffb8] rotate-180" style={{ fontSize: "80px" }}>format_quote</span>
              <p className="text-slate-600 italic leading-relaxed mb-8 relative z-10 font-medium pt-4 flex-grow">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#b9d719]/30">
                  <Image 
                    src={t.image} 
                    alt={t.name}
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <div className="font-bold text-[#181c20] text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Mobile-only navigation controls */}
        <div className="flex items-center justify-center gap-4 mt-2 lg:hidden w-full order-last pb-2">
           <button onClick={handlePrev} className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined text-slate-700">arrow_back</span>
           </button>
           <button onClick={handleNext} className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined text-slate-700">arrow_forward</span>
           </button>
        </div>
      </div>
    </div>
  );
}
