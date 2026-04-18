'use client';

import FadeIn from '../components/FadeIn';
import Image from 'next/image';

const privacyCards = [
  {
    title: "Data Sovereignty",
    desc: "Your data is yours. We strictly process only the academic credentials required by university protocols and internal record-keeping. We do not store sensitive payment informatics on our local servers.",
    icon: "database"
  },
  {
    title: "Zero-Third Party Sharing",
    desc: "We enforce a strict wall between your data and the external world. Your personal contact information is never sold or shared with third-party aggregators or marketing firms.",
    icon: "verified_user"
  },
  {
    title: "End-to-End Encryption",
    desc: "All digital records submitted through our portals are processed via 256-bit SSL encryption. Physical records are housed in secure, biometrically restricted administration zones.",
    icon: "lock"
  },
  {
    title: "Erasure Rights",
    desc: "Students have the right to request a complete purge of their digital footprint upon successful course exit and final certification, provided all academic and financial clearances are met.",
    icon: "delete_forever"
  }
];

export default function Privacy() {
  return (
    <main className="pt-24 min-h-screen bg-[#fafbfc]">
      {/* Mesh Gradient Hero - Matches Institute Theme */}
      <div className="relative pt-24 pb-48 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-[#b9d719]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-[#556500]/5 rounded-full blur-[130px]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#f4ffb8] mb-8 max-w-max mx-auto">
              <span className="material-symbols-outlined text-[#556500] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Privacy Safeguard Protocol</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-[#181c20] tracking-tighter mb-8 max-w-5xl mx-auto leading-[0.9]">
              Protection by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#556500] to-[#8a9f00]">
                Design Architecture
              </span>
            </h1>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              We treat your information as a core asset, applying high-level security frameworks to ensure absolute institutional privacy.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Glassmorphic Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 pb-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {privacyCards.map((card, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="h-full p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-700">
                <div className="w-16 h-16 rounded-[1.5rem] bg-[#556500] flex items-center justify-center text-[#b9d719] mb-8 transition-transform duration-500">
                  <span className="material-symbols-outlined text-3xl font-light">{card.icon}</span>
                </div>
                <h3 className="text-3xl font-black text-[#181c20] mb-6 tracking-tight">{card.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-lg italic opacity-90">
                  {card.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Professional Callout */}
      <section className="bg-[#181c20] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-8">
                Compliance with Global <br />
                <span className="text-[#b9d719]">Standards</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-1.5 h-24 bg-gradient-to-b from-[#b9d719] to-transparent"></div>
                  <p className="text-slate-400 font-medium leading-relaxed py-2 text-lg">
                    Our internal systems are audited against the best practices of data management. We ensure that Super Computer College of IT remains a safe haven for students' digital identity in a complex tech landscape.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-3xl bg-slate-800 relative group">
                <Image src="/images/IMG-1.jpg" alt="Secure Infrastructure" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" fill sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 border-[20px] border-[#181c20]"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center px-6">
        <p className="text-[#556500] font-black uppercase text-[10px] tracking-[0.4em] opacity-40">
          Institutional Privacy Shield — Updated 2026 — Verified & Secured
        </p>
      </footer>
    </main>
  );
}
