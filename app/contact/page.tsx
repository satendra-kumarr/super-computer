import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export default function Contact() {
  return (
    <>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <FadeIn as="header" className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-on-background mb-6 leading-[1.1]">
            Bridge the gap between <span className="text-primary">ambition</span> and <span className="text-primary">mastery.</span>
          </h1>
          <p className="text-lg text-secondary-fixed-variant leading-relaxed">
            Whether you&apos;re starting your tech journey or specializing in paramedical excellence, our advisors are ready to guide your path.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Map — LEFT */}
          <FadeIn className="lg:col-span-7 space-y-6 lg:order-1">
            {/* Contact Info Cards */}
            <div className="flex flex-wrap gap-5">
              {/* Phone Card */}
              <a href="tel:+917355150194"
                className="group bg-white border border-[#b9d719]/20 hover:border-[#b9d719] hover:bg-[#f4ffb8] rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 shrink-0 bg-[#556500] rounded-xl flex items-center justify-center shadow-inner group-hover:bg-[#b9d719] transition-colors duration-300">
                  <span className="material-symbols-outlined text-[#b9d719] group-hover:text-[#181e00] transition-colors duration-300" style={{ fontSize: '22px', fontVariationSettings: "'FILL' 1" }}>call</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#556500] uppercase tracking-widest mb-0.5">Phone</p>
                  <p className="text-[#181c20] font-bold text-base leading-tight">+91 7355150194</p>
                </div>
              </a>

              {/* Email Card */}
              <a href="mailto:supercomputercollegeofit194@gmail.com"
                className="group flex-1 bg-white border border-[#b9d719]/20 hover:border-[#b9d719] hover:bg-[#f4ffb8] rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 shrink-0 bg-[#556500] rounded-xl flex items-center justify-center shadow-inner group-hover:bg-[#b9d719] transition-colors duration-300">
                  <span className="material-symbols-outlined text-[#b9d719] group-hover:text-[#181e00] transition-colors duration-300" style={{ fontSize: '22px', fontVariationSettings: "'FILL' 1" }}>mail</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-black text-[#556500] uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-[#181c20] font-bold text-sm sm:text-base leading-tight break-all md:break-normal">supercomputercollegeofit194@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Address & Map Container */}
            <div className="bg-surface-container-high rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video w-full relative">
                <iframe
                  title="Super Computer Institute Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.191688399818!2d80.81220619999999!3d25.928929999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b62a84e257fa1%3A0x7e53c14d9146a9af!2sSuper%20Computer%20College%20of%20IT!5e0!3m2!1sen!2sin!4v1776232207863!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a
                  href="https://maps.app.goo.gl/NCMGWAqWMjyn7stD8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 bg-[#b9d719] text-[#181e00] text-[10px] font-black px-3 py-1 rounded-lg shadow-lg flex items-center gap-1.5 transition-all duration-300 transform hover:scale-105 active:scale-95 z-10"
                >
                  <span className="material-symbols-outlined text-lg">location_on</span>
                  Get Directions
                </a>
              </div>
              <div className="p-8 bg-white">
                <h3 className="text-xl font-bold mb-4">Main Campus</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  13 Murain Tola, Near Police Chowki, Fatehpur (Uttar Pradesh), Pincode: 212601
                </p>
                <div className="pt-6 border-t border-outline-variant/20">
                  <h4 className="text-sm font-bold text-secondary-fixed-variant uppercase tracking-widest mb-4">Office Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">Monday — Friday</span>
                      <span className="font-bold">08:00 — 20:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">Saturday</span>
                      <span className="font-bold">09:00 — 16:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">Sunday</span>
                      <span className="text-secondary">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-primary-fixed text-on-primary-fixed p-8 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">Student Support</h3>
                <p className="text-sm opacity-90 mb-4">Already a student? Access the portal for technical assistance.</p>
                <button className="bg-on-primary-fixed text-primary-fixed px-6 py-2 rounded-full font-bold text-sm">Go to Portal</button>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-10 rotate-12" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </div>
          </FadeIn>

          {/* Inquiry Form — RIGHT */}
          <FadeIn as="section" className="lg:col-span-5 bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-[0_20px_40px_rgba(24,28,32,0.04)] lg:order-2">
            <div className="mb-5">
              <h2 className="text-xl font-bold mb-1">Send an Inquiry</h2>
              <p className="text-secondary-fixed-variant text-sm">Fill out the form and we&apos;ll respond within 24 hours.</p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-on-surface-variant px-1" htmlFor="fullname">Full Name</label>
                  <input id="fullname" className="w-full bg-surface-container-low border-none rounded-md px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary/40 transition-all text-on-surface" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-on-surface-variant px-1" htmlFor="email">Email Address</label>
                  <input id="email" className="w-full bg-surface-container-low border-none rounded-md px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary/40 transition-all text-on-surface" placeholder="john@example.com" type="email" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-on-surface-variant px-1" htmlFor="phone">Phone Number</label>
                  <input id="phone" className="w-full bg-surface-container-low border-none rounded-md px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary/40 transition-all text-on-surface" placeholder="+91 00000 00000" type="tel" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-on-surface-variant px-1" htmlFor="course">Interested Course</label>
                  <select id="course" className="w-full bg-surface-container-low border-none rounded-md px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary/40 transition-all text-on-surface">
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
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-on-surface-variant px-1" htmlFor="message">How can we help?</label>
                  <textarea id="message" className="w-full bg-surface-container-low border-none rounded-md px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary/40 transition-all text-on-surface" placeholder="Tell us about your goals..." rows={3}></textarea>
                </div>
              </div>

              <button className=" w-full py-3 bg-[#b9d719] rounded-full text-on-primary-fixed font-bold text-sm shadow-lg hover:shadow-xl transform transition-all active:scale-[0.98]" type="submit">
                Submit Your Inquiry
              </button>

              <p className="text-center text-xs text-secondary-fixed-variant">
                By submitting, you agree to our <Link className="underline hover:text-primary" href="/privacy">Privacy Policy</Link>.
              </p>
            </form>
          </FadeIn>
        </div>
      </main>

    </>
  );
}
