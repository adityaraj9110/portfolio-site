import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About, Career Progression & Engineering Principles | Aditya Raj',
  description: 'Background, engineering principles, career trajectory at Bigoh Notations, and current technical focus of Aditya Raj, Software Engineer in Noida, India.',
  openGraph: {
    title: 'About, Career Progression & Engineering Principles | Aditya Raj',
    description: 'Software Engineer based in Noida, UP, India. Specializing in frontend architecture, web performance optimization, and real-time AI interfaces.',
    url: 'https://aditya-profile-site.netlify.app/about/',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
