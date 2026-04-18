"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[2.5rem] mt-20 bg-slate-50 dark:bg-slate-950">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-6 md:px-12 py-10 md:py-14 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="text-lg font-black text-slate-900 dark:text-white mb-4 block">Super Computer Institute</span>
          <p className="text-slate-500 dark:text-slate-400 font-['Inter'] text-base md:text-lg leading-relaxed mb-6 italic opacity-90">
            Empowering the next generation of tech leaders with precision and excellence since 2010.
          </p>
          <div className="flex space-x-3 mt-2">
            {/* Social Icons remain same */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-[#f4ffb8] dark:bg-slate-800 flex items-center justify-center text-[#556500] hover:bg-[#b9d719] hover:text-[#181e00] transition-all duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-[#f4ffb8] dark:bg-slate-800 flex items-center justify-center text-[#556500] hover:bg-[#b9d719] hover:text-[#181e00] transition-all duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-[#f4ffb8] dark:bg-slate-800 flex items-center justify-center text-[#556500] hover:bg-[#b9d719] hover:text-[#181e00] transition-all duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="text-on-background font-bold mb-6 text-slate-900 dark:text-white">Institute</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#556500] transition-all text-sm block" href="/about">About Us</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#556500] transition-all text-sm block" href="/courses">Computer Courses</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#556500] transition-all text-sm block" href="/degree-programs">Degree Programs</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#556500] transition-all text-sm block" href="/paramedical">Paramedical</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-on-background font-bold mb-6 text-slate-900 dark:text-white">Legal & Support</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#556500] transition-all text-sm block" href="/terms">Terms & Conditions</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-[#556500] transition-all text-sm block" href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-on-background font-bold mb-6 text-slate-900 dark:text-white">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#556500]" style={{ fontSize: '20px' }}>call</span>
              <a href="tel:+917355150194" className="text-slate-500 dark:text-slate-400 hover:text-[#556500] transition-all text-sm">+91 7355150194</a>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#556500]" style={{ fontSize: '20px' }}>mail</span>
              <a href="mailto:supercomputercollegeofit194@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-[#556500] transition-all text-sm break-all">supercomputercollegeofit194@gmail.com</a>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#556500] mt-0.5" style={{ fontSize: '20px' }}>location_on</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm leading-snug">13 Murain Tola, Near Police Chowki, Fatehpur (UP), 212601</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800 max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-8 text-center text-slate-500 dark:text-slate-400 text-xs font-['Inter']">
        © 2026 Super Computer Institute. Precision in Education.
      </div>
    </footer>
  );
}
