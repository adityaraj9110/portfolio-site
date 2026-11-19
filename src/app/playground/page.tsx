import type { Metadata } from 'next';
import PlaygroundClient from './PlaygroundClient';

export const metadata: Metadata = {
  title: 'Interactive Engineering Playground & Telemetry Lab | Aditya Raj',
  description: 'Hands-on interactive simulations: SSE streaming buffer vs naive chunk rendering, TanStack query deduplication, and windowed table virtualization.',
  openGraph: {
    title: 'Interactive Engineering Playground | Aditya Raj',
    description: 'Hands-on interactive simulations: SSE streaming buffer vs naive chunk rendering, TanStack query deduplication, and windowed table virtualization.',
    url: 'https://aditya-profile-site.netlify.app/playground/',
  },
};

export default function PlaygroundPage() {
  return <PlaygroundClient />;
}
