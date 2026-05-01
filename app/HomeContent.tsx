'use client';

import Link from 'next/link';
import FadeIn from './components/FadeIn';
import TestimonialCarousel from './components/TestimonialCarousel';
import CampusGallery from './components/CampusGallery';
import Image from 'next/image';

export default function HomeContent() {
  return (
    <>
      <main className="overflow-x-hidden bg-[#f7f9ff]">
        {/* Dynamic Professional Hero Section */}
        <FadeIn as="section" className="relative pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-6 lg:mb-8 max-w-max mx-auto lg:mx-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b9d719] animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Fall 2026 Admissions Open</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[80px] font-black tracking-tight leading-[1.1] mb-5 sm:mb-6 lg:mb-8 text-[#181c20] drop-shadow-sm">
                Engineering the <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#556500] to-[#8a9f00]">
                  Next Generation
                </span>
                <br className="hidden lg:block" /> of Tech Leaders.
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-medium">
                Step into a world-class IT and Paramedical ecosystem. We forge technical mastery through rigorous, industry-grade curriculums.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
                <Link href="/courses" className="w-full sm:w-auto bg-[#b9d719] text-[#181e00] px-8 py-4 rounded-xl font-bold tracking-wide shadow-xl shadow-[#b9d719]/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-center">
                  Explore Programs
                </Link>
                <button data-enquiry-modal="true" className="w-full sm:w-auto bg-white text-slate-700 px-8 py-4 rounded-xl font-bold tracking-wide shadow-sm hover:shadow-md transition-all duration-300">
                  Free Counseling
                </button>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative flex justify-center mt-8 lg:mt-0">
              <div className="relative w-full aspect-square max-w-md">
                <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgb(0,0,0,0.07)] overflow-hidden flex items-center justify-center">
                  <Image alt="Student working on laptop at Super Computer College of IT" className="w-full h-full object-cover relative z-10" src="/images/hero.jpg" fill priority sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:bottom-auto lg:top-1/4 lg:-left-12 lg:-translate-x-0 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex items-center gap-3 animate-[bounce_4s_infinite] z-20 whitespace-nowrap w-max">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f4ffb8] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#556500] text-[20px] md:text-[24px]">military_tech</span>
                  </div>
                  <div>
                    <div className="text-[10px] md:text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Placement</div>
                    <div className="text-xl md:text-2xl font-black text-[#181c20] leading-none">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Corporate Metrics Section */}
        <FadeIn as="section" className="py-8 sm:py-12 relative z-10 -mt-4 sm:-mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex items-center gap-4 sm:gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-[#f4ffb8] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#556500]" style={{ fontSize: "32px" }}>school</span>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#181c20] tracking-tight mb-1">5000+</div>
                  <div className="text-sm font-semibold text-slate-500">Students Trained</div>
                </div>
              </div>
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex items-center gap-4 sm:gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-blue-600" style={{ fontSize: "32px" }}>menu_book</span>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#181c20] tracking-tight mb-1">15+</div>
                  <div className="text-sm font-semibold text-slate-500">Courses Offered</div>
                </div>
              </div>
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex items-center gap-4 sm:gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-[#f0f4e1] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#556500]" style={{ fontSize: "32px" }}>workspace_premium</span>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#181c20] tracking-tight mb-1">100%</div>
                  <div className="text-sm font-semibold text-slate-500">Placement Support</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Premium Curriculum Section */}
        <FadeIn as="section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4 md:gap-6">
              <div className="max-w-2xl">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#556500] mb-2 md:mb-3 block">Premium Curriculum</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#181c20]">Signature IT Programs</h2>
              </div>
              <Link href="/courses" className="inline-flex items-center gap-2 font-bold text-[#556500] hover:text-[#8a9f00] transition-colors whitespace-nowrap md:mb-2">
                View All Courses
                <span className="material-symbols-outlined shrink-0" style={{ fontSize: "20px" }}>arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'ADCA (Adv. Diploma)', dur: '1 Year', img: '/images/ADCA_PRO.png', desc: 'Master complete computer applications including MS Office, DTP, Financial Accounting, and Core Programming.', id: 'ADCA' },
                { name: 'DOWA', dur: '6 Months', img: '/images/DOWA_PRO.png', desc: 'Intensive diploma building strong foundations in Office Automation, Accounting, and professional bilingual typing.', id: 'DOWA' },
                { name: 'DCA (Diploma)', dur: '6 Months', img: '/images/BCA.png', desc: 'Launch your tech career focusing on workplace software, Desktop Publishing (DTP), and high-speed typing.', id: 'DCA' },
              ].map((course) => (
                <div key={course.id} className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
                  <div className="h-56 relative overflow-hidden flex items-center justify-center m-2 rounded-[1.5rem]">
                    <Image alt={`${course.name} course at Super Computer College of IT`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={course.img} fill sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute top-4 left-4 bg-[#b9d719] text-[#181e00] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">{course.dur}</div>
                  </div>
                  <div className="p-8 pt-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#181c20] mb-3">{course.name}</h3>
                    <p className="text-sm text-slate-500 mb-8 flex-grow font-medium leading-relaxed">{course.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <button data-enquiry-modal="true" data-course={course.id} className="text-sm font-bold text-[#556500] hover:text-[#8a9f00] hover:underline transition-colors">Enquire Now</button>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#b9d719] group-hover:text-[#181e00] text-slate-400 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* University Degree Programs */}
        <FadeIn as="section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#f7f9ff]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4 md:gap-6">
              <div className="max-w-2xl">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#556500] mb-2 md:mb-3 block">Higher Education</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#181c20]">University Degree Programs</h2>
              </div>
              <Link href="/degree-programs" className="inline-flex items-center gap-2 font-bold text-[#556500] hover:text-[#8a9f00] transition-colors whitespace-nowrap md:mb-2">
                View All Degrees
                <span className="material-symbols-outlined shrink-0" style={{ fontSize: "20px" }}>arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'BCA', dur: '3 Years', img: '/images/BCA.png', cat: 'Info Tech', catColor: 'text-indigo-500', desc: 'Bachelor of Computer Applications. Eligibility: 10+2 (Science).', id: 'BCA' },
                { name: 'MCA', dur: '2 Years', img: '/images/MCA.png', cat: 'Info Tech', catColor: 'text-indigo-600', desc: 'Master of Computer Applications. Eligibility: After Graduation.', id: 'MCA' },
                { name: 'BBA', dur: '3 Years', img: '/images/BBA.png', cat: 'Management', catColor: 'text-rose-500', desc: 'Bachelor of Business Administration. Eligibility: 10+2 (Art/Any).', id: 'BBA' },
              ].map((deg) => (
                <div key={deg.id} className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
                  <div className="h-56 relative overflow-hidden flex items-center justify-center m-2 rounded-[1.5rem]">
                    <Image src={deg.img} alt={`${deg.name} degree program at Super Computer College of IT`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" fill sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute top-4 left-4 bg-[#b9d719] text-[#181e00] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">{deg.dur}</div>
                  </div>
                  <div className="p-8 pt-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#181c20] mb-2">{deg.name}</h3>
                    <div className={`text-xs font-bold ${deg.catColor} uppercase tracking-widest mb-3`}>{deg.cat}</div>
                    <p className="text-sm text-slate-500 mb-8 flex-grow font-medium leading-relaxed">{deg.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <button data-enquiry-modal="true" data-course={deg.id} className="text-sm font-bold text-[#556500] hover:text-[#8a9f00] hover:underline transition-colors">Enquire Now</button>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#b9d719] group-hover:text-[#181e00] text-slate-400 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Why Learn With Us */}
        <FadeIn as="section" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#556500] mb-2 md:mb-3 block">The Institute Advantage</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#181c20] mb-3 sm:mb-4 md:mb-6">Why Learn With Us?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'rocket_launch', bg: 'bg-[#f4ffb8]', color: 'text-[#556500]', title: 'Project-Driven Method', desc: '80% practical integration. Ship actual products and build deployable portfolios.' },
                { icon: 'groups', bg: 'bg-blue-50', color: 'text-blue-600', title: 'Expert Faculty', desc: 'Mentorship from senior engineers and active industry professionals.' },
                { icon: 'computer', bg: 'bg-purple-50', color: 'text-purple-600', title: 'Elite Facilities', desc: 'Operate in state-of-the-art incubation labs. Access enterprise-grade hardware 24/7.' },
                { icon: 'verified', bg: 'bg-orange-50', color: 'text-orange-600', title: 'Global Certification', desc: 'Graduate with strictly vetted credentials recognized by top organizations.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-300">
                  <div className={`w-20 h-20 mx-auto mb-6 ${item.bg} rounded-2xl flex items-center justify-center`}>
                    <span className={`material-symbols-outlined ${item.color}`} style={{ fontSize: "36px" }}>{item.icon}</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#181c20] mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Campus Gallery Section */}
        <FadeIn as="section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-white">
          <CampusGallery />
        </FadeIn>

        {/* Success Stories Section */}
        <FadeIn as="section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-[#f7f9ff] overflow-hidden">
          <TestimonialCarousel />
        </FadeIn>

        {/* Corporate Lead Form */}
        <FadeIn as="section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.1)] flex flex-col md:flex-row">
            <div className="md:w-5/12 p-6 sm:p-8 md:p-12 lg:p-14 bg-[#4a5800] text-white flex flex-col justify-center relative overflow-hidden">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 md:mb-6 leading-tight relative z-10">Start Your Transformation Today</h2>
              <p className="text-white/90 mb-8 md:mb-10 font-medium text-sm leading-relaxed relative z-10">Fill out the form and our academic advisors will reach out to you within 24 hours to guide your career path.</p>
              <ul className="space-y-6 relative z-10">
                {['Free Career Counseling Session', 'Detailed Course Brochure', 'Access to Demo Lectures'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-[#b9d719]" style={{ fontSize: "24px" }}>check_circle</span>
                    <span className="text-sm font-bold text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-7/12 p-6 sm:p-8 md:p-12 lg:p-14 bg-white">
              <form className="space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Our expert will contact you shortly."); }}>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                  <input className="w-full px-5 py-4 rounded-xl bg-[#f1f5f9] focus:outline-none focus:ring-2 focus:ring-[#b9d719]/50 text-slate-800 font-medium transition-shadow placeholder:text-slate-400" placeholder="John Doe" type="text" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">Phone Number</label>
                  <input className="w-full px-5 py-4 rounded-xl bg-[#f1f5f9] focus:outline-none focus:ring-2 focus:ring-[#b9d719]/50 text-slate-800 font-medium transition-shadow placeholder:text-slate-400" placeholder="+91 00000 00000" type="tel" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">Course of Interest</label>
                  <div className="relative">
                    <select id="course" className="w-full bg-[#f1f5f9] rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#b9d719]/50 text-slate-800 font-medium transition-shadow appearance-none">
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
                        <option value="XRAY">X-Ray &amp; Imaging</option>
                        <option value="CMSED">CMS &amp; ED</option>
                      </optgroup>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[#8ba418] hover:bg-[#778d14] text-white py-4 mt-6 rounded-2xl font-bold tracking-wide shadow-lg shadow-[#8ba418]/30 hover:-translate-y-0.5 transition-all duration-300">
                  Claim Your Free Counseling
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </main>
    </>
  );
}
