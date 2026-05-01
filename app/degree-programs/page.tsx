import type { Metadata } from 'next';
import DegreeContent from './DegreeContent';
import JsonLd from '../components/JsonLd';

export const metadata: Metadata = {
  title: "University Degree Programs — BCA, MCA, BBA, MBA, BSc-IT",
  description:
    "Pursue BCA, MCA, BBA, MBA, BSc-IT, MSc-IT, MA degree programs at Super Computer College of IT, Fatehpur. University-recognized degrees with practical training & 100% placement support.",
  keywords: [
    "BCA college fatehpur",
    "MCA college fatehpur",
    "BBA college fatehpur",
    "MBA college fatehpur",
    "BSc IT college fatehpur",
    "degree programs fatehpur",
    "university degree fatehpur UP",
    "super computer college degree courses",
    "best degree college fatehpur",
  ],
  alternates: { canonical: "/degree-programs" },
};

const degreeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "University Degree Programs at Super Computer College of IT",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "BCA (Bachelor of Computer Applications)", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P3Y", educationalCredentialAwarded: "Bachelor's Degree" } },
      { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "MCA (Master of Computer Applications)", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P2Y", educationalCredentialAwarded: "Master's Degree" } },
      { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "BBA (Bachelor of Business Administration)", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P3Y", educationalCredentialAwarded: "Bachelor's Degree" } },
      { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "MBA (Master of Business Administration)", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P2Y", educationalCredentialAwarded: "Master's Degree" } },
      { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "BSc-IT (Bachelor of Science in Information Technology)", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P3Y", educationalCredentialAwarded: "Bachelor's Degree" } },
      { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "MSc-IT (Master of Science in Information Technology)", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P2Y", educationalCredentialAwarded: "Master's Degree" } },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://supercomputerit.in" },
      { "@type": "ListItem", position: 2, name: "Degree Programs", item: "https://supercomputerit.in/degree-programs" },
    ],
  },
];

export default function Degrees() {
  return (
    <>
      <JsonLd data={degreeSchema} />
      <DegreeContent />
    </>
  );
}
