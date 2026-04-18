import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextTopLoader from 'nextjs-toploader';
import GlobalModals from "./components/GlobalModals";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Super Computer Institute | Precision in Education",
  description: "Empowering the next generation of tech leaders with precision and excellence since 2010.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
        <NextTopLoader
          color="#b9d719"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #b9d719,0 0 5px #b9d719"
          zIndex={1600}
        />
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        {/* SideNavBar (CTA FAB) */}
        <div className="fixed bottom-8 right-8 z-[100]">
          <button 
            data-enquiry-modal="true"
            className="bg-[#b9d719] dark:bg-[#556500] h-16 w-16 rounded-full flex items-center justify-center shadow-[0_20px_40px_rgba(24,28,32,0.1)] hover:scale-110 hover:rotate-3 active:scale-90 transition-all duration-300 text-[#181c20] dark:text-white group relative"
          >
            <span className="material-symbols-outlined pointer-events-none" style={{ fontSize: "32px" }}>chat_bubble</span>
            <div className="absolute right-20 bottom-2 bg-[#b9d719] px-4 py-2 rounded-lg whitespace-nowrap shadow-lg hidden group-hover:block transition-all pointer-events-none">
              <span className="text-xs font-bold font-['Inter'] tracking-widest text-[#181c20]">QUICK INQUIRY</span>
            </div>
          </button>
        </div>

        {/* Global Modals overlay */}
        <GlobalModals />
      </body>
    </html>
  );
}
