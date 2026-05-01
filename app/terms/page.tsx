import type { Metadata } from 'next';
import TermsContent from './TermsContent';

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for enrollment at Super Computer College of IT, Fatehpur. Academic conduct, financial policies, attendance requirements, and institutional guidelines.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function Terms() {
  return <TermsContent />;
}
