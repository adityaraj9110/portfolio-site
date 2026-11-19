import type { Metadata } from 'next';
import content from '../../../data/content.json';
import ArticleDetailClient from './ArticleDetailClient';

export async function generateStaticParams() {
  return content.articles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = content.articles.find((a) => a.slug === slug) || content.articles[0];

  return {
    title: `${article.title} | Aditya Raj Engineering Notes`,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://aditya-profile-site.netlify.app/writing/${article.slug}/`,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticleDetailClient slug={slug} />;
}
