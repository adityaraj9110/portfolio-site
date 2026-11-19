import type { Metadata } from 'next';
import content from '../../../data/content.json';
import CaseStudyDetailClient from './CaseStudyDetailClient';

export async function generateStaticParams() {
  return content.caseStudies.map((study) => ({
    slug: study.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = content.caseStudies.find((s) => s.id === slug) || content.caseStudies[0];

  return {
    title: `${study.title} | Aditya Raj Production Case Study`,
    description: `${study.summary} | Impact: ${study.headlineMetric}`,
    openGraph: {
      title: `${study.title} — ${study.headlineMetric}`,
      description: study.summary,
      url: `https://aditya-profile-site.netlify.app/work/${study.id}/`,
      images: [
        {
          url: study.image || '/og-image.png',
          alt: study.title,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CaseStudyDetailClient slug={slug} />;
}
