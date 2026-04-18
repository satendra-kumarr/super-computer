"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 150 && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setPrevScroll(latest);
  });

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "text-[#556500] dark:text-[#b9d719] font-bold border-b-2 border-[#556500] dark:border-[#b9d719] pb-1 block";
    }
    return "text-slate-600 dark:text-slate-400 hover:text-[#556500] dark:hover:text-[#b9d719] transition-colors duration-300 block";
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Degree Programs', path: '/degree-programs' },
    { name: 'Paramedical', path: '/paramedical' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl shadow-sm border-b border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="flex justify-between items-center px-6 lg:px-12 py-3 max-w-7xl mx-auto w-full">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-800 group-hover:scale-105 transition-transform duration-300 relative">
            <Image
              src="/images/logo.png"
              alt="Super Computer College of IT Logo"
              className="w-full h-full object-cover scale-[0.8]"
              fill
              sizes="44px"
            />
          </div>
          <div className="flex flex-col tracking-tighter">
            <span className="text-xl font-black leading-none text-slate-900 dark:text-white">Super Computer</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#556500] dark:text-[#b9d719] mt-0.5">College of IT</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-['Inter'] font-medium text-sm tracking-tight pt-1">
          {navLinks.map((link) => (
            <Link key={link.path} className={getLinkClasses(link.path)} href={link.path}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center space-x-4">
            {/* <button data-enquiry-modal="true" className="text-slate-600 dark:text-slate-300 font-['Inter'] text-sm hover:text-[#556500] dark:hover:text-[#b9d719] transition-all font-medium">
              Inquire Now
            </button> */}
            <button data-enquiry-modal="true" className="bg-[#b9d719] text-[#181c20] px-7 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-[#b9d719]/20 scale-95 hover:scale-100 active:scale-90 hover:bg-[#cbf018] transition-all">
              Enquiry now
            </button>
          </div>

          <button
            className="md:hidden flex items-center justify-center p-2 text-slate-800 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 60px)' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-5 h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  className={getLinkClasses(link.path)}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg">{link.name}</span>
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-slate-100 dark:border-slate-900">
                <button data-enquiry-modal="true" onClick={() => setMobileMenuOpen(false)} className="w-full text-center text-slate-600 dark:text-slate-300 font-['Inter'] text-[15px] font-medium py-2">
                  Inquire Now
                </button>
                <button data-enquiry-modal="true" onClick={() => setMobileMenuOpen(false)} className="w-full bg-[#b9d719] text-[#181c20] px-7 py-3.5 rounded-full font-bold text-[15px] shadow-lg shadow-[#b9d719]/20 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
