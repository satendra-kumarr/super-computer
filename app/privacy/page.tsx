import type { Metadata } from 'next';
import PrivacyContent from './PrivacyContent';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy of Super Computer College of IT, Fatehpur. Learn how we protect and manage your personal data, academic records, and digital information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function Privacy() {
  return <PrivacyContent />;
}
