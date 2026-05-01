import type { Metadata } from 'next';
import AboutContent from './AboutContent';
import JsonLd from '../components/JsonLd';

export const metadata: Metadata = {
  title: "About Us — Super Computer Institute of IT Fatehpur",
  description:
    "Learn about Super Computer College of IT — established 2010 in Fatehpur, Uttar Pradesh. 5000+ students trained, 14+ years of excellence in IT, computer courses & paramedical education. 100% placement support.",
  keywords: [
    "about super computer college of it",
    "super computer institute of it fatehpur",
    "computer college fatehpur history",
    "best IT institute fatehpur uttar pradesh",
    "computer training center fatehpur",
  ],
  alternates: { canonical: "/about" },
};

const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Super Computer College of IT",
    description: "Learn about Super Computer College of IT — Premier IT and paramedical institute in Fatehpur, UP since 2010.",
    url: "https://supercomputerit.in/about",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://supercomputerit.in" },
      { "@type": "ListItem", position: 2, name: "About Us", item: "https://supercomputerit.in/about" },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <AboutContent />
    </>
  );
}
