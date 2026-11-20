import type { Metadata } from 'next';
import WritingIndexClient from './WritingIndexClient';

export const metadata: Metadata = {
  title: 'Engineering Notes & Architectural Breakdowns | Aditya Raj',
  description: 'Permanent, high-signal engineering articles distilled from real production scale and viral discussions across LinkedIn (38k+ impressions) and Dev.to.',
  openGraph: {
    title: 'Engineering Notes & Architectural Breakdowns | Aditya Raj',
    description: 'Technical notes and systems writing on React rendering internals, SSE streaming, TanStack query deduplication, and Core Web Vitals.',
    url: 'https://aditya-profile-site.netlify.app/writing/',
  },
};

export default function WritingPage() {
  return <WritingIndexClient />;
}
