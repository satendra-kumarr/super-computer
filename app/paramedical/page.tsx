'use client';

import { useState, useMemo } from 'react';
import FadeIn from '../components/FadeIn';

const paramedicalCourses = [
  {
    id: 'DMLT',
    name: 'DMLT (Diploma in Medical Lab Technology)',
    category: 'Technology',
    duration: '2 Years',
    eligibility: '10+2 (Science)',
    img: '/images/course-nursing.png',
    tag: 'Hospital Integrated',
    features: ['Clinical Biochemistry', 'Hematology & Blood Banking', 'Pathology & Microbiology']
  },
  {
    id: 'OT',
    name: 'Operation Theatre Technician',
    category: 'Technology',
    duration: '2 Years',
    eligibility: '10+2 (PCB/PCM)',
    img: '/images/course-pharmacy.png',
    features: ['Surgical Procedures', 'Anesthesia Equipment Managment', 'Sterilization Techniques']
  },
  {
    id: 'ANM',
    name: 'ANM (Auxiliary Nurse Midwifery)',
    category: 'Nursing',
    duration: '2 Years',
    eligibility: '10+2 (Any Stream)',
    img: '/images/about-graduates.png',
    features: ['Primary Healthcare', 'Maternal & Child Health', 'Community Health Nursing']
  },
  {
    id: 'GNM',
    name: 'GNM (General Nursing & Midwifery)',
    category: 'Nursing',
    duration: '3 Years',
    eligibility: '10+2 (Science Preferred)',
    img: '/images/course-nursing.png',
    features: ['Advanced Patient Care', 'Medical-Surgical Nursing', 'Midwifery Skills']
  },
  {
    id: 'XRAY',
    name: 'X-Ray & Imaging Technician',
    category: 'Technology',
    duration: '2 Years',
    eligibility: '10+2 (Science)',
    img: '/images/course-ai.jpg',
    features: ['Radiological Anatomy', 'X-Ray Equipment Operation', 'Patient Positioning']
  },
  {
    id: 'CMSED',
    name: 'CMS & ED (Community Health Worker)',
    category: 'Community Health',
    duration: '18 Months',
    eligibility: '10th / 12th',
    img: '/images/about-classroom.png',
    features: ['Essential Medicines', 'Primary Health Evaluation', 'First Aid & Referral']
  }
];

export default function Paramedical() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter Logic
  const filteredCourses = useMemo(() => {
    return paramedicalCourses.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <FadeIn as="header" className="mb-16">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#f4ffb8] text-[#556500] font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
              Healthcare Career
            </div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-[#181c20] mb-8 leading-[1]">
              Specialized <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#556500] to-[#b9d719]">Paramedical</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-xl mb-12">
              Jumpstart your healthcare career with clinical-focused programs. Gain hands-on experience in high-tier hospital settings.
            </p>
          </div>

          {/* Search & Filter Bar - Shifted Below Hero Text */}
          <div className="flex flex-col lg:flex-row gap-6 items-center p-4 bg-slate-50 rounded-2xl shadow-sm border border-slate-100">
            <div className="relative w-full lg:flex-1">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input 
                type="text" 
                placeholder="Search Nursing, DMLT..." 
                className="w-full pl-14 pr-6 py-4 bg-white rounded-xl border border-slate-100 focus:ring-4 focus:ring-[#b9d719]/20 focus:border-[#b9d719] outline-none transition-all font-bold text-[#181c20]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 px-2 lg:px-0 scrollbar-hide">
              {['All', 'Nursing', 'Technology', 'Community Health'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                    selectedCategory === cat 
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
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <FadeIn key={course.id} className="group bg-white rounded-[2.5rem] border border-slate-100 p-0 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col h-full overflow-hidden">
                <div className="h-56 w-full overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={course.name} src={course.img} />
                  {course.tag && (
                    <div className="absolute top-4 left-4 bg-[#b9d719] text-[#181e00] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
                      {course.tag}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-[#556500]">
                    {course.duration} Program
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">{course.category} Science</div>
                  <h3 className="text-2xl font-black text-[#181c20] mb-6 min-h-[64px] leading-tight group-hover:text-[#556500] transition-colors">{course.name}</h3>
                  <ul className="space-y-3 mb-10 flex-grow">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-500 font-medium">
                        <span className="material-symbols-outlined text-[#556500] text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        {feature}
                      </li>
                    ))}
                    <li className="flex gap-2 text-xs font-bold text-[#181c20] pt-4 border-t border-slate-50 mt-4 uppercase tracking-widest">
                       Eligibility: <span className="text-[#556500]">{course.eligibility}</span>
                    </li>
                  </ul>
                  <button 
                    data-enquiry-modal="true" 
                    data-course={course.id}
                    className="w-full bg-[#f4ffb8] text-[#556500] py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-[#b9d719] hover:text-[#181e00] hover:shadow-xl active:scale-95"
                  >
                    Admission Inquiry
                  </button>
                </div>
              </FadeIn>
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
               <span className="material-symbols-outlined text-7xl text-slate-100 mb-6 font-light">medical_services</span>
               <p className="text-xl text-slate-500 font-black">No paramedical courses found for this filter.</p>
               <button 
                  onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                  className="mt-6 font-black text-[#556500] hover:underline"
                >
                  RELOAD ALL PROGRAMS
                </button>
            </div>
          )}
        </div>

        {/* Features Section */}
        <FadeIn as="section" className="mt-32 p-12 lg:p-20 bg-[#181c20] rounded-[4rem] text-white">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 italic">World-Class Training</h2>
             <p className="text-slate-400 text-lg font-medium italic opacity-80">Our medical programs are built on high-precision clinical practice and recognized university guidelines.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: "medical_services", title: "Hospital Attachment", desc: "Gain experience in city's top recognized private and govt. hospital environments." },
              { icon: "assignment_turned_in", title: "Skill-Based Exam", desc: "Our evaluation system focuses on practical clinical handling rather than rote learning." },
              { icon: "verified", title: "Global Certificates", desc: "Get certificates that allow you to work as a technician across India and abroad." }
            ].map((f, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-[#b9d719] flex items-center justify-center text-[#181c20] mb-8">
                  <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                </div>
                <h3 className="text-2xl font-black mb-4">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </main>
    </>
  );
}
