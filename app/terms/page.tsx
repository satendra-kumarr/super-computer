'use client';

import FadeIn from '../components/FadeIn';

const sections = [
  {
    title: "1. Enrollment & Admission",
    icon: "person_add",
    content: "Super Computer Institute reserves the right to accept or reject any application for admission. Enrollment is only considered final once all documents are verified and the initial academic fee is processed. Students must provide genuine documents; any discrepancy will lead to immediate dismissal."
  },
  {
    title: "2. Academic Conduct",
    icon: "school",
    content: "We foster an environment of professional respect. Any form of harassment, discrimination, or digital misconduct will result in zero-tolerance expulsion. Students must adhere to the lab protocols and maintain the integrity of the institute's software and hardware infrastructure."
  },
  {
    title: "3. Financial Policy",
    icon: "payments",
    content: "Fees are structured to provide the highest tier of educational resources. Please note that fees once paid are non-refundable and non-transferable. Installments must be cleared within the first 10 days of the month to avoid operational surcharges."
  },
  {
    title: "4. Attendance & Evaluation",
    icon: "verified_user",
    content: "A minimum of 80% attendance is mandatory for certification eligibility. Evaluations are conducted through practical sprints and theoretical assessments. Performance below institutional standards may require remedial sessions before final certificate issuance."
  },
  {
    title: "5. Intellectual Property",
    icon: "copyright",
    content: "All course materials, project architectures, and software modules provided during the training are intellectual property of Super Computer Institute. Unauthorized reproduction or distribution is strictly prohibited and subject to legal action."
  }
];

export default function Terms() {
  return (
    <main className="pt-24 min-h-screen bg-white overflow-hidden">
      {/* Premium Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-[#181c20] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-gradient-to-l from-[#b9d719]/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#b9d719]/10 border border-[#b9d719]/20 rounded-full mb-6 text-[#b9d719] text-[10px] font-bold uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b9d719] animate-pulse"></span>
                Official Charter
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
                The Legal <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b9d719] to-[#8a9f00]">
                  Framework
                </span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
                Guidelines specifically architected to maintain the elite standards of Super Computer Institute.
              </p>
            </FadeIn>
          </div>
          <div className="hidden md:block w-2/5">
            <FadeIn delay={0.3}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#b9d719] to-[#8a9f00] rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl h-80">
                  <img src="/images/IMG-11.jpeg" alt="Legal framework" className="w-full h-full object-cover" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Structured Content Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-1/2 w-px h-24 bg-gradient-to-b from-[#b9d719] to-transparent -translate-x-1/2"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <FadeIn>
              <h2 className="text-3xl font-black text-[#181c20] mb-6">Course Directive</h2>
              <p className="text-slate-500 font-medium mb-8">By proceeding with admission, both the student and the legal guardian acknowledge and accept these terms in their entirety. These policies are governed by the local jurisdictional laws of Uttar Pradesh, India.</p>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 italic text-slate-400 text-sm">
                "Education is a commitment to precision. We expect nothing less from those who walk through our doors."
              </div>
            </FadeIn>
          </aside>

          <div className="lg:col-span-8 space-y-12">
            {sections.map((section, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="relative p-10 rounded-[2.5rem] bg-white border border-slate-100">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#f4ffb8] flex items-center justify-center text-[#556500]">
                      <span className="material-symbols-outlined text-2xl">{section.icon}</span>
                    </div>
                    <h3 className="text-2xl font-black text-[#181c20]">{section.title}</h3>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn className="mt-32 pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img src="/images/logo.png" className="w-8 h-8 opacity-20 filter grayscale" alt="Logo" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Super Computer Institute Official Document</p>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Last Revised: 15.04.2026</div>
        </FadeIn>
      </section>
    </main>
  );
}
