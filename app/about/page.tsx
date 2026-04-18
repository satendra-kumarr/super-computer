'use client';

import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <main className="overflow-x-hidden bg-[#f7f9ff] min-h-screen">
        {/* Dynamic Professional Hero Section */}
        <FadeIn as="section" className="relative pt-32 lg:pt-40 pb-20 px-6 lg:px-12 bg-white border-b border-slate-100 overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm mb-6 max-w-max mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-[#b9d719] animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Established 2010</span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-[#181c20]">
                Shaping the <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#556500] to-[#8a9f00]">
                  Architects of Tomorrow
                </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                Super Computer College of IT goes beyond traditional education. We are a crucible for talent, transforming raw potential into elite, industry-ready professionals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button data-enquiry-modal="true" className="w-full sm:w-auto bg-[#b9d719] text-[#181e00] px-8 py-4 rounded-xl font-bold tracking-wide shadow-xl shadow-[#b9d719]/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
                  Connect With Us
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.1)]">
                <Image
                  src="/images/IMG-2.jpeg"
                  alt="Students celebrating graduation"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating elements attached to image */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-[bounce_5s_infinite]">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-500">public</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Global Reach</p>
                  <p className="text-lg font-black text-slate-800 leading-none">12+ Countries</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Corporate Metrics Section */}
        <FadeIn as="section" className="py-16 bg-white border-b border-slate-100 relative z-20 -mt-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 bg-slate-50 rounded-3xl p-8 md:p-12 shadow-inner">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#8a9f00] mb-2">14+</div>
                <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">Years of Excellence</div>
              </div>
              <div className="text-center md:border-l border-slate-200">
                <div className="text-4xl md:text-5xl font-black text-[#8a9f00] mb-2">5k+</div>
                <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">Alumni Network</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0">
                <div className="text-4xl md:text-5xl font-black text-[#8a9f00] mb-2">50+</div>
                <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">Hiring Partners</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0">
                <div className="text-4xl md:text-5xl font-black text-[#8a9f00] mb-2">100%</div>
                <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">Placement Assistance</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Our Story / Paradigm Section */}
        <FadeIn as="section" className="py-20 lg:py-32 px-6 lg:px-12 bg-[#f7f9ff]">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/IMG-01.jpg"
                  alt="Modern tech classroom"
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative square */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-[#b9d719] rounded-[2rem]"></div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#556500] mb-3 block">Our Evolution</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#181c20] mb-6">
                From Concept to <br /> Industry Standard
              </h2>
              <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                <p>
                  Founded in 2010, the Super Computer College of IT began with a singular vision: to destroy the pervasive skill gap in the technology sector. We recognized early on that universities were teaching theory, while companies were demanding execution.
                </p>
                <p>
                  We built a hyper-focused environment that mirrors modern enterprise workflows. By integrating production-grade practices into an academic setting, our curriculum ensures that day-one graduates perform like mid-level professionals.
                </p>
                <p>
                  Today, our footprint spans across comprehensive IT infrastructure modules, full-stack software engineering, offensive cybersecurity, and advanced paramedical sciences, making us a versatile powerhouse for modern career development.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Mission & Vision Section */}
        <FadeIn as="section" className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#556500] mb-2 block">The Directive</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#181c20]">Mission & Vision</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission */}
              <div className="bg-slate-50 border border-slate-100 p-10 md:p-14 rounded-[2rem] hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-blue-600" style={{ fontSize: "32px" }}>my_location</span>
                </div>
                <h3 className="text-2xl font-black text-[#181c20] mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  To forge technical and operational mastery through rigorous, industry-grade curriculums. We democratize access to elite education, ensuring our graduates are not just employable, but uniquely positioned to dominate their respective fields from day one.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-slate-50 border border-slate-100 p-10 md:p-14 rounded-[2rem] hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-[#556500]" style={{ fontSize: "32px" }}>visibility</span>
                </div>
                <h3 className="text-2xl font-black text-[#181c20] mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  To operate as the premier incubator for technological and medical innovation. We aim to systematically discover raw potential and refine it into globally recognized, highly-capable technical leaders who will architect the future of human infrastructure.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Leadership & Faculty */}
        <FadeIn as="section" className="py-20 lg:py-32 px-6 lg:px-12 bg-[#181c20] text-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#b9d719] mb-3 block">Expert Command</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6">
                Guided by Industry Veterans
              </h2>
              <p className="text-slate-400 font-medium leading-relaxed mb-8">
                Our faculty doesn't just teach from textbooks. They are active practitioners, senior engineers, and operational leaders who bring real-time industry challenges directly into the classroom.
                They architect the syllabus to ensure you are learning solutions to tomorrow's problems, not yesterday's theory.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#b9d719]">check_circle</span>
                  <span className="text-sm font-medium text-slate-300">Former Fortune 500 Technical Leads</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#b9d719]">check_circle</span>
                  <span className="text-sm font-medium text-slate-300">Certified Medical Professionals</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#b9d719]">check_circle</span>
                  <span className="text-sm font-medium text-slate-300">Dedicated Career Mentors</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/IMG-3.jpeg"
                  alt="Super Computer College of IT Faculty"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Core Values Section */}
        <FadeIn as="section" className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#556500] mb-2 block">Our DNA</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#181c20]">Operating Principles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-[#f7f9ff] rounded-[2rem] p-8 md:p-10 hover:bg-slate-100 transition-colors">
                <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-purple-600" style={{ fontSize: "28px" }}>diamond</span>
                </div>
                <h3 className="text-xl font-bold text-[#181c20] mb-3">Uncompromising Quality</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  We don't settle for "good enough". Our curriculums undergo rigorous audits to meet the highest international industry standards, ensuring top-tier engineering and medical outcomes.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-[#f7f9ff] rounded-[2rem] p-8 md:p-10 hover:bg-slate-100 transition-colors">
                <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-orange-600" style={{ fontSize: "28px" }}>bolt</span>
                </div>
                <h3 className="text-xl font-bold text-[#181c20] mb-3">Absolute Practicality</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  Theory without application is obsolete. We strictly enforce hands-on execution, real-world project deployments, and immediate operational applicability of all taught skills.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-[#f7f9ff] rounded-[2rem] p-8 md:p-10 hover:bg-slate-100 transition-colors">
                <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-teal-600" style={{ fontSize: "28px" }}>handshake</span>
                </div>
                <h3 className="text-xl font-bold text-[#181c20] mb-3">Lifelong Partnership</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  The alliance with our students extends far beyond graduation. We provide continuous career architecture, elite networking events, and lifelong advancement support protocols.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Final CTA Section */}
        <FadeIn as="section" className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-[#556500] to-[#3a4500] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Architect Your Career?</h2>
            <p className="text-lg text-white/80 mb-10 font-medium">Join an exclusive cohort of dedicated professionals. Elevate your skillset and secure your future in tech or medicine today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/courses" className="bg-[#b9d719] text-[#181e00] px-8 py-4 rounded-xl font-bold tracking-wide shadow-xl hover:-translate-y-1 transition-all duration-300 inline-block">
                Explore Programs
              </Link>
              <button data-enquiry-modal="true" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold tracking-wide hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 inline-block">
                Request Counseling
              </button>
            </div>
          </div>
        </FadeIn>
      </main>
    </>
  );
}
