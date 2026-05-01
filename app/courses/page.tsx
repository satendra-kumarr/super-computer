import type { Metadata } from 'next';
import CoursesContent from './CoursesContent';
import JsonLd from '../components/JsonLd';

export const metadata: Metadata = {
  title: "Computer Courses — ADCA, DCA, DOWA, Tally, CCC",
  description:
    "Professional computer courses at Super Computer College of IT, Fatehpur. ADCA, DCA, DOWA, DOM, Tally ERP, CCC — Industry-aligned training with 100% placement support.",
  keywords: [
    "ADCA course fatehpur",
    "DCA course fatehpur",
    "computer courses fatehpur",
    "tally course fatehpur",
    "CCC course fatehpur",
    "DOWA course fatehpur",
    "computer diploma fatehpur",
    "super computer college courses",
    "best computer course in fatehpur",
    "computer training fatehpur UP",
  ],
  alternates: { canonical: "/courses" },
};

const coursesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Computer Courses at Super Computer College of IT",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "ADCA (Advanced Diploma in Computer Application)", description: "MS Office, DTP, Financial Accounting, Core Programming", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P1Y" } },
      { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "DOWA (Diploma in Office & Web App)", description: "Advanced MS Office, Accounting, Bilingual Typing", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P6M" } },
      { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "DCA (Diploma in Computer Application)", description: "MS Office, Desktop Publishing, Typing", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P6M" } },
      { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "DOM (Diploma in Office Management)", description: "Complete MS Office, Digital Documentation, Data Management", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P3M" } },
      { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "Tally ERP / Prime", description: "Financial Accounting, Inventory Management, Billing & Taxation", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P3M" } },
      { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "CCC (Course on Computer Concepts)", description: "Computer Fundamentals, Operating Systems, Internet & Web", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P3M" } },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://supercomputerit.in" },
      { "@type": "ListItem", position: 2, name: "Computer Courses", item: "https://supercomputerit.in/courses" },
    ],
  },
];

export default function Courses() {
  return (
    <>
      <JsonLd data={coursesSchema} />
      <CoursesContent />
    </>
  );
}
