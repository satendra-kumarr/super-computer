import type { Metadata } from 'next';
import ParamedicalContent from './ParamedicalContent';
import JsonLd from '../components/JsonLd';

export const metadata: Metadata = {
  title: "Paramedical Courses — DMLT, OT, Physiotherapy, X-Ray",
  description:
    "Paramedical diploma & vocational courses at Super Computer College of IT, Fatehpur. DMLT, Operation Theatre, Physiotherapy, X-Ray Technician, CMS & ED, B.VOC & M.VOC programs with hospital training.",
  keywords: [
    "paramedical college fatehpur",
    "DMLT course fatehpur",
    "paramedical courses fatehpur UP",
    "operation theatre technician course",
    "physiotherapy diploma fatehpur",
    "X-ray technician course fatehpur",
    "B.VOC medical courses fatehpur",
    "super computer college paramedical",
    "best paramedical institute fatehpur",
  ],
  alternates: { canonical: "/paramedical" },
};

const paraSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Paramedical Courses at Super Computer College of IT",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Course", name: "DMLT (Diploma in Medical Lab Technology)", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P2Y" } },
      { "@type": "ListItem", position: 2, item: { "@type": "Course", name: "Operation Theatre Technician", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P2Y" } },
      { "@type": "ListItem", position: 3, item: { "@type": "Course", name: "Diploma in Optometry", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P2Y" } },
      { "@type": "ListItem", position: 4, item: { "@type": "Course", name: "DPT (Diploma in Physiotherapy)", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P2Y" } },
      { "@type": "ListItem", position: 5, item: { "@type": "Course", name: "X-Ray & Imaging Technician", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P2Y" } },
      { "@type": "ListItem", position: 6, item: { "@type": "Course", name: "CMS & ED (Community Health Worker)", provider: { "@type": "EducationalOrganization", name: "Super Computer College of IT" }, timeRequired: "P18M" } },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://supercomputerit.in" },
      { "@type": "ListItem", position: 2, name: "Paramedical", item: "https://supercomputerit.in/paramedical" },
    ],
  },
];

export default function Paramedical() {
  return (
    <>
      <JsonLd data={paraSchema} />
      <ParamedicalContent />
    </>
  );
}
