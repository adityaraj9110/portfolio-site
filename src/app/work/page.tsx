import type { Metadata } from 'next';
import WorkIndexClient from './WorkIndexClient';

export const metadata: Metadata = {
  title: 'Production Case Studies & Systems Architecture | Aditya Raj',
  description: 'Deep architectural breakdowns of production SaaS applications, client-side SDKs, and real-time streaming interfaces by Aditya Raj.',
  openGraph: {
    title: 'Production Case Studies & Systems Architecture | Aditya Raj',
    description: 'Deep architectural breakdowns of production SaaS applications, client-side SDKs, and real-time streaming interfaces.',
    url: 'https://aditya-profile-site.netlify.app/work/',
  },
};

export default function WorkPage() {
  return <WorkIndexClient />;
}
