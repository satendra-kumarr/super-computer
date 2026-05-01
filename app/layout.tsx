import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextTopLoader from 'nextjs-toploader';
import GlobalModals from "./components/GlobalModals";
import JsonLd from "./components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://supercomputerit.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Super Computer College of IT — Best Computer Institute in Fatehpur",
    template: "%s | Super Computer College of IT — Fatehpur",
  },
  description:
    "Super Computer College of IT — Premier computer training institute & IT college in Fatehpur, Uttar Pradesh. Offering ADCA, DCA, BCA, MCA, BBA, MBA, Paramedical courses with 100% placement support since 2010.",
  keywords: [
    "super computer institute of it",
    "super computer college of it",
    "super computer college",
    "computer institute fatehpur",
    "IT college fatehpur",
    "computer coaching fatehpur",
    "best computer institute in fatehpur",
    "computer courses fatehpur",
    "BCA college fatehpur",
    "MCA college fatehpur",
    "ADCA course fatehpur",
    "DCA course fatehpur",
    "paramedical college fatehpur",
    "DMLT course fatehpur",
    "best computer training institute fatehpur uttar pradesh",
    "computer courses near me fatehpur",
    "degree programs IT fatehpur",
    "tally course fatehpur",
    "BBA MBA college fatehpur",
  ],
  authors: [{ name: "Super Computer College of IT" }],
  creator: "Super Computer College of IT",
  publisher: "Super Computer College of IT",
  applicationName: "Super Computer College of IT",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Super Computer College of IT",
    title: "Super Computer College of IT — Best Computer Institute in Fatehpur",
    description:
      "Premier IT training & degree programs in Fatehpur, UP. Courses: ADCA, DCA, BCA, MCA, BBA, MBA, Paramedical. 100% Placement Support. Since 2010.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Super Computer College of IT — Fatehpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Computer College of IT — Best Computer Institute in Fatehpur",
    description:
      "Premier IT training & degree programs in Fatehpur, UP. ADCA, DCA, BCA, MCA, BBA, MBA, Paramedical. 100% Placement Support.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

// Organization JSON-LD for the entire site
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Super Computer College of IT",
  alternateName: [
    "Super Computer Institute of IT",
    "Super Computer College",
    "SCCIT",
  ],
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/hero.jpg`,
  description:
    "Premier computer training institute and IT college in Fatehpur, Uttar Pradesh offering diploma, degree, and paramedical programs since 2010.",
  foundingDate: "2010",
  telephone: "+917355150194",
  email: "supercomputercollegeofit194@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "13 Murain Tola, Near Police Chowki",
    addressLocality: "Fatehpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "212601",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.928930,
    longitude: 80.812206,
  },
  areaServed: {
    "@type": "City",
    name: "Fatehpur",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT & Paramedical Courses",
    itemListElement: [
      { "@type": "Course", name: "ADCA (Advanced Diploma in Computer Application)" },
      { "@type": "Course", name: "DCA (Diploma in Computer Application)" },
      { "@type": "Course", name: "BCA (Bachelor of Computer Applications)" },
      { "@type": "Course", name: "MCA (Master of Computer Applications)" },
      { "@type": "Course", name: "BBA (Bachelor of Business Administration)" },
      { "@type": "Course", name: "MBA (Master of Business Administration)" },
      { "@type": "Course", name: "DMLT (Diploma in Medical Lab Technology)" },
    ],
  },
  sameAs: [],
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
        <JsonLd data={organizationSchema} />
        <NextTopLoader
          color="#b9d719"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
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
