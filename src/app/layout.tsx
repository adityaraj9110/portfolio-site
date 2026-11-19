import type { Metadata } from 'next';
import { Providers } from './providers';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://aditya-profile-site.netlify.app'),
  title: 'Aditya Raj | Frontend & AI-Native Full Stack Engineer (React, Next.js, TypeScript)',
  description: 'Aditya Raj is a Software Engineer in Noida with 3 years of experience building scalable React.js, Next.js, TypeScript, Node.js, and RAG/LLM SaaS applications. Built @frankieone/one-sdk (4.5k+ weekly npm downloads), Costimizer AI, and DigiLawyer AI.',
  keywords: [
    'Aditya Raj',
    'Frontend Engineer',
    'Next.js Engineer Noida',
    'React Developer',
    'AI-Native Full Stack Engineer',
    'TypeScript',
    'TanStack Query',
    'FrankieOne SDK',
    'Costimizer AI',
    'DigiLawyer AI'
  ],
  authors: [{ name: 'Aditya Raj' }],
  creator: 'Aditya Raj',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://aditya-profile-site.netlify.app/',
    title: 'Aditya Raj | Frontend & AI-Native Full Stack Engineer',
    description: '3 YOE building FinTech, FinOps & LegalTech SaaS apps. Cut LCP from 7s to 1.2s, reduced API calls by 70%, and shipped @frankieone/one-sdk (4.5k+ weekly downloads).',
    siteName: 'Aditya Raj Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aditya Raj — Frontend & AI-Native Full Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Raj | Frontend & AI-Native Full Stack Engineer',
    description: 'React.js, Next.js, TypeScript, Node.js & Production RAG/SSE AI Streaming. LCP 7s → 1.2s | 70% API Reduction | 4.5k+ Weekly npm Downloads.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/vite.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aditya Raj',
    alternateName: 'adityaraj9110',
    jobTitle: 'Software Engineer (Frontend & AI-Native Full Stack)',
    description: 'Frontend & AI-Native Full Stack Engineer specializing in React.js, Next.js, TypeScript, Node.js, TanStack Query, Micro-Frontends, and RAG/SSE LLM streaming.',
    url: 'https://aditya-profile-site.netlify.app/',
    email: 'mailto:adityasrivastav0853@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Chandigarh Engineering College, Landran',
    },
    sameAs: [
      'https://github.com/adityaraj9110',
      'https://www.linkedin.com/in/aditya-raj-9b2165227/',
      'https://www.npmjs.com/package/@frankieone/one-sdk',
    ],
    knowsAbout: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'TanStack Query',
      'Redux Toolkit',
      'GraphQL',
      'Server-Sent Events (SSE)',
      'Micro-Frontends',
      'Core Web Vitals',
      'RAG Pipelines',
      'Pinecone',
      'Elasticsearch',
      'Playwright',
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>
          <Navbar />
          <div style={{ flex: 1 }}>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
