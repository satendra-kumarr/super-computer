import type { Metadata } from 'next';
import HomeContent from './HomeContent';
import JsonLd from './components/JsonLd';

export const metadata: Metadata = {
  title: "Best Computer Institute & IT College in Fatehpur | Super Computer College of IT",
  description:
    "Super Computer College of IT — Premier IT training & degree programs in Fatehpur, UP. Courses: ADCA, DCA, BCA, MCA, BBA, MBA, Paramedical. 100% Placement Support. Since 2010.",
  keywords: [
    "super computer institute of it",
    "super computer college of it",
    "super computer college",
    "computer institute fatehpur",
    "IT college fatehpur",
    "best computer institute in fatehpur",
    "computer courses fatehpur",
    "BCA college fatehpur",
    "paramedical college fatehpur",
  ],
  alternates: { canonical: "/" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Super Computer College of IT",
  url: "https://supercomputerit.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://supercomputerit.in/courses?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <HomeContent />
    </>
  );
}
