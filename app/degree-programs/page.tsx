'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import Image from 'next/image';

const degrees = [
  {
    id: 'BCA',
    name: 'BCA (Bachelor of Computer Applications)',
    category: 'Info Tech',
    img: '/images/BCA.png',
    duration: '3 Years',
    eligibility: '10+2 (Science)',
    practical: 'Yes',
    highlights: ['Programming in C/C++', 'Web Development', 'Database Management']
  },
  {
    id: 'MCA',
    name: 'MCA (Master of Computer Applications)',
    category: 'Info Tech',
    img: '/images/MCA.png',
    duration: '2 Years',
    eligibility: 'After Graduation',
    practical: 'Yes',
    highlights: ['Cloud Computing', 'AI & Machine Learning', 'Software Architecture']
  },
  {
    id: 'BBA',
    name: 'BBA (Bachelor of Business Administration)',
    category: 'Management',
    img: '/images/BBA.png',
    duration: '3 Years',
    eligibility: '10+2 (Any Stream)',
    practical: 'Yes',
    highlights: ['Business Strategy', 'Marketing Management', 'Leadership Skills']
  },
  {
    id: 'MBA',
    name: 'MBA (Master of Business Administration)',
    category: 'Management',
    img: '/images/MBA.png',
    duration: '2 Years',
    eligibility: 'After Graduation',
    practical: 'Yes',
    highlights: ['Financial Analysis', 'Organizational Behavior', 'Human Resources']
  },
  {
    id: 'BSC-IT',
    name: 'BSc-IT',
    category: 'Info Tech',
    img: '/images/BSC-IT.png',
    duration: '3 Years',
    eligibility: '10+2 (Science)',
    practical: 'Yes',
    highlights: ['Network Security', 'System Analysis', 'Digital Electronics']
  },
  {
    id: 'MSC-IT',
    name: 'MSc-IT',
    category: 'Info Tech',
    img: '/images/MSC-IT.png',
    duration: '2 Years',
    eligibility: 'After Graduation',
    practical: 'Yes',
    highlights: ['Advanced Networking', 'Data Science', 'IT Project Management']
  },
  {
    id: 'MA',
    name: 'MA (Master of Arts)',
    category: 'Education',
    img: '/images/about-classroom.png',
    duration: '2 Years',
    eligibility: 'After Graduation',
    practical: 'No',
    highlights: ['Literature Study', 'Research Methodology', 'Historical Analysis']
  }
];

export default function Degrees() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  // Filter Logic
  const filteredDegrees = useMemo(() => {
    return degrees.filter(degree => {
      const matchesSearch = degree.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        degree.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || degree.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const visibleDegrees = showAll ? filteredDegrees : filteredDegrees.slice(0, 6);

  return (
    <>
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8 items-center">
          <Link href="/" className="hover:text-[#556500]">Home</Link>
          <span>/</span>
          <span className="text-[#556500]">Degree Programs</span>
        </div>

        {/* Hero Section */}
        <FadeIn as="header" className="mb-16">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#f4ffb8] text-[#556500] font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
              Higher Education
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#181c20] mb-8 leading-[1]">
              University <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#556500] to-[#b9d719]">Degrees</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-xl mb-12">
              Pursue world-class university degree programs designed to help you succeed in Global IT and Management sectors.
            </p>
          </div>

          {/* Search & Filter Bar - Shifted Below Hero Text */}
          <div className="flex flex-col lg:flex-row gap-6 items-center p-4 bg-slate-50 rounded-2xl shadow-sm border border-slate-100">
            <div className="relative w-full lg:flex-1">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input
                type="text"
                placeholder="Search BCA, MCA, MBA..."
                className="w-full pl-14 pr-6 py-4 bg-white rounded-xl border border-slate-100 focus:ring-4 focus:ring-[#b9d719]/20 focus:border-[#b9d719] outline-none transition-all font-bold text-[#181c20]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 px-2 lg:px-0 scrollbar-hide">
              {['All', 'Info Tech', 'Management', 'Education'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${selectedCategory === cat
                    ? 'bg-[#556500] text-white shadow-xl'
                    : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDegrees.length > 0 ? (
            filteredDegrees.map((degree) => (
              <FadeIn key={degree.id} className="group bg-white rounded-[2.5rem] border border-slate-100 p-8 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col">
                <div className="h-56 w-full rounded-[2rem] overflow-hidden mb-8 relative">
                  <Image src={degree.img} alt={degree.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" fill sizes="(max-width: 1024px) 100vw, 33vw" />
                  <div className="absolute top-4 left-4 bg-[#181c20]/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-[#b9d719] uppercase tracking-widest">
                    {degree.category}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#b9d719]"></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#556500]">{degree.duration} Program</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#181c20] mb-6 leading-tight group-hover:text-[#556500] transition-colors">{degree.name}</h3>
                  <div className="space-y-4 mb-10">
                    <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                      <span className="text-slate-400 font-medium">Eligibility</span>
                      <span className="text-[#181c20] font-bold text-right">{degree.eligibility}</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                      <span className="text-slate-400 font-medium">Practical Based</span>
                      <span className="text-blue-600 font-black">{degree.practical}</span>
                    </div>
                  </div>
                </div>
                <button
                  data-enquiry-modal="true"
                  data-course={degree.id}
                  className="w-full bg-[#f4ffb8] text-[#556500] py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#b9d719] hover:text-[#181c20] hover:shadow-xl transition-all active:scale-95"
                >
                  Request Fee Structure
                </button>
              </FadeIn>
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
              <span className="material-symbols-outlined text-7xl text-slate-200 mb-6 font-light">search_off</span>
              <p className="text-xl text-slate-500 font-bold">No degree programs found for your search.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-6 bg-[#181c20] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-[#556500] transition-all"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          )}
        </div>

        {/* Informational Section */}
        <FadeIn as="section" className="mt-32 p-12 lg:p-24 bg-slate-50 rounded-[4rem] border border-slate-100 flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-[#181c20] tracking-tight mb-8">Launch Your Career with University Recognition</h2>
            <div className="space-y-6">
              {[
                { t: "Global Validity", d: "Degrees are valid for government jobs and private sector profiles worldwide." },
                { t: "Practical Mastery", d: "We emphasize hands-on lab sessions alongside university theoretical curriculum." },
                { t: "Alumni Network", d: "Join a network of thousands of successful professionals globally." }
              ].map((point, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-[#b9d719] flex items-center justify-center text-[#181c20] flex-shrink-0">
                    <span className="material-symbols-outlined text-sm">verified</span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-[#181c20]">{point.t}</h4>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{point.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-10 bg-[#b9d719]/10 rounded-full blur-3xl"></div>
            <Image src="/images/about-graduates.png" width={800} height={800} className="relative rounded-[3rem] shadow-3xl rotate-2 w-full h-auto" alt="Graduates" />
          </div>
        </FadeIn>
      </main>
    </>
  );
}
