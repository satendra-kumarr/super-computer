'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import Image from 'next/image';

const courses = [
  {
    id: 'ADCA',
    name: 'ADCA (Adv. Diploma in Computer Application)',
    duration: '1 Year',
    category: 'Diploma',
    img: '/images/ADCA_PRO.png',
    tag: 'Most Popular',
    features: ['MS Office & Desktop Publishing', 'Financial Accounting & Programming', 'Professional Typing (Hindi/English)']
  },
  {
    id: 'DOWA',
    name: 'DOWA (Diploma in Office & Web App)',
    duration: '6 Months',
    category: 'Diploma',
    img: '/images/DOWA_PRO.png',
    features: ['Advanced MS Office Suite', 'Accounting Fundamentals', 'Bilingual Typing Speed']
  },
  {
    id: 'DCA',
    name: 'DCA (Diploma in Computer Application)',
    duration: '6 Months',
    category: 'Diploma',
    img: '/images/BCA.png',
    features: ['MS Office Administration', 'Desktop Publishing (DTP)', 'Typing (Hindi & English)']
  },
  {
    id: 'DOM',
    name: 'DOM (Diploma in Office Management)',
    duration: '3 Months',
    category: 'Short Term',
    img: '/images/MBA.png',
    features: ['Complete MS Office Suite', 'Digital Documentation', 'Data Management & Entry']
  },
  {
    id: 'TALLY',
    name: 'Tally ERP / Prime',
    duration: '3 Months',
    category: 'Accounting',
    img: '/images/BBA.png',
    features: ['Financial Accounting', 'Inventory Management', 'Billing & Taxation Setup']
  },
  {
    id: 'CCC',
    name: 'CCC (Course on Computer Concepts)',
    duration: '3 Months',
    category: 'Certification',
    img: '/images/BSC-IT.png',
    features: ['Core Computer Fundamentals', 'Operating System Basics', 'Internet & Web Navigation']
  }
];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  // Filter Logic
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const visibleCourses = showAll ? filteredCourses : filteredCourses.slice(0, filteredCourses.length);

  return (
    <>
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Page Header & Filter Section */}
        <FadeIn as="section" className="mb-16">
          <div className="max-w-3xl">
            <span className="text-[#556500] font-bold tracking-widest text-xs uppercase mb-3 block">Professional Programs</span>
            <h1 className="text-5xl md:text-6xl font-black text-[#181c20] tracking-tight leading-tight mb-6">
              Master the Digital <br />Frontier
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mb-10">
              Industry-aligned computer courses designed to take you from foundational knowledge to professional expertise. Select your path and start your journey today.
            </p>
          </div>
          {/* Search & Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-6 items-center p-4 bg-slate-50 rounded-2xl shadow-sm border border-slate-100">
            <div className="relative w-full lg:flex-1">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input 
                className="w-full pl-14 pr-6 py-4 bg-white rounded-xl border border-slate-100 focus:ring-4 focus:ring-[#b9d719]/20 focus:border-[#b9d719] transition-all text-[#181c20] placeholder:text-slate-400 outline-none" 
                placeholder="Search for courses (ADCA, Tally, DCA...)" 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 px-2 lg:px-0 scrollbar-hide">
              {['All', 'Diploma', 'Accounting', 'Short Term', 'Certification'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat 
                    ? 'bg-[#556500] text-white shadow-lg' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat === 'All' ? 'All Programs' : cat}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <FadeIn key={course.id} className="group bg-white rounded-[2rem] p-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col border border-slate-100 relative overflow-hidden">
                <div className="h-48 w-full rounded-2xl mb-6 overflow-hidden relative">
                  <Image className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={course.name} src={course.img} fill sizes="(max-width: 1024px) 100vw, 33vw" />
                  {course.tag && (
                    <div className="absolute top-4 left-4 bg-[#b9d719] text-[#181c20] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {course.tag}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#556500]">
                    {course.category}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3 px-1">
                  <span className="material-symbols-outlined text-[#556500] text-sm">schedule</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{course.duration} Program</span>
                </div>
                <h3 className="text-2xl font-black text-[#181c20] mb-4 min-h-[64px] leading-tight px-1">{course.name}</h3>
                <ul className="space-y-3 mb-8 flex-grow px-1">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-500 font-medium">
                      <span className="material-symbols-outlined text-[#556500] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  data-enquiry-modal="true" 
                  data-course={course.id === 'TALLY' ? 'Tally' : course.id}
                  className="w-full bg-[#f4ffb8] text-[#556500] py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-[#b9d719] hover:text-[#181e00] hover:shadow-xl active:scale-95"
                >
                  Request Admission Info
                </button>
              </FadeIn>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-20 text-center">
              <span className="material-symbols-outlined text-6xl text-slate-200 mb-4 font-light">search_off</span>
              <p className="text-slate-500 font-bold">No courses found matching "{searchTerm}"</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                className="mt-4 text-[#556500] font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Methodology Section */}
        <FadeIn as="section" className="mt-32 p-12 lg:p-20 bg-slate-900 rounded-[4rem] text-white">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <span className="text-[#b9d719] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Institutional Standard</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 italic">How We Build Your Career</h2>
                <div className="space-y-8">
                  {[
                    { title: "Project Driven", desc: "We don't just teach theory; you build production-ready applications from day one." },
                    { title: "Industry Mentors", desc: "Learn from faculty who are active practitioners in IT and Management fields." },
                    { title: "Elite Certification", desc: "Gain recognized diplomas that carry weight in the global job market." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#b9d719]">
                        <span className="material-symbols-outlined">verified</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="relative group rounded-[3rem] overflow-hidden h-[300px] md:h-[500px]">
                <div className="absolute inset-0 bg-[#b9d719]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
                <Image src="/images/IMG-11.jpeg" className="object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Methodology" fill sizes="(max-width: 1024px) 100vw, 50vw" />
             </div>
          </div>
        </FadeIn>

        {/* FAQ Section */}
        <FadeIn as="section" className="mt-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#556500] font-bold tracking-widest text-xs uppercase mb-3 block">Clarifications</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#181c20] tracking-tight mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Is job placement guaranteed after courses?", a: "While we can't legally guarantee a job, we provide 100% placement support, including mock interviews and direct connectivity with our industry partners." },
              { q: "Are certificates valid government recognized?", a: "Yes, our diplomas are recognized and follow the curriculum standards required for professional IT and administrative roles." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:bg-slate-100 transition-all">
                <summary className="flex items-center justify-between font-bold text-[#181c20] text-lg leading-snug">
                  {faq.q}
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <p className="mt-4 text-slate-500 font-medium leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </FadeIn>
      </main>
    </>
  );
}
