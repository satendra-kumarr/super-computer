'use client';

import { useState } from 'react';

export default function CampusGallery() {
  const [showAll, setShowAll] = useState(false);

  // High-quality placeholder images for the campus gallery
  const images = [
    { id: 1, src: "/images/IMG-01.jpg", alt: "IMG-01" },
    { id: 2, src: "/images/IMG-2.jpeg", alt: "IMG-2" },
    { id: 3, src: "/images/IMG-3.jpeg", alt: "IMG-3" },
    { id: 4, src: "/images/IMG-4.jpeg", alt: "IMG-4" },
    { id: 5, src: "/images/IMG-5.jpeg", alt: "IMG-5" },
    { id: 6, src: "/images/IMG-6.jpeg", alt: "IMG-6" },
    { id: 7, src: "/images/IMG-7.jpeg", alt: "IMG-7" },
    { id: 8, src: "/images/IMG-8.jpeg", alt: "IMG-8" },
    { id: 9, src: "/images/IMG-9.jpeg", alt: "IMG-9" },
    { id: 10, src: "/images/IMG-10.jpeg", alt: "IMG-10" },
    { id: 11, src: "/images/IMG-11.jpeg", alt: "IMG-11" },
    { id: 12, src: "/images/IMG-1.jpg", alt: "IMG-1" },
    { id: 13, src: "/images/IMG-13.jpg", alt: "IMG-13" },
    { id: 14, src: "/images/IMG-14.jpg", alt: "IMG-14" },
    { id: 15, src: "/images/IMG-15.jpeg", alt: "IMG-15" },
  ];

  const displayedImages = showAll ? images : images.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#556500] mb-2 md:mb-3 block">Life at SCI</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#181c20]">Campus Gallery</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-500">
        {displayedImages.map((img) => (
          <div key={img.id} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-slate-100 bg-slate-50">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {!showAll && images.length > 3 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#b9d719] text-[#556500] font-bold text-sm tracking-wide hover:bg-[#b9d719] hover:text-[#181e00] transition-colors duration-300 group shadow-sm hover:shadow-md"
          >
            Show More Gallery
            <span className="material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>expand_more</span>
          </button>
        </div>
      )}
    </div>
  );
}
