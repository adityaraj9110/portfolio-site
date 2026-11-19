import { createContext, useMemo, useState, useEffect } from 'react';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline, type PaletteMode } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import MetricsStrip from './components/sections/MetricsStrip';
import CaseStudies from './components/sections/CaseStudies';
import InteractivePlayground from './components/sections/InteractivePlayground';
import WritingSection from './components/sections/WritingSection';
import TechStackMatrix from './components/sections/TechStackMatrix';
import Experience from './components/sections/Experience';
import Reviews from './components/sections/Reviews';
import About from './components/sections/About';
import Footer from './components/layout/Footer';
import FloatingActions from './components/layout/FloatingActions';
import CaseStudyModal, { type CaseStudyData } from './components/sections/CaseStudyModal';
import ArticleModal, { type ArticleData } from './components/sections/ArticleModal';
import { motion } from 'framer-motion';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import content from './data/content.json';

export const ColorModeContext = createContext({ toggleColorMode: () => { }, mode: 'dark' as PaletteMode });

function PortfolioMain() {
  useSmoothScroll();
  const location = useLocation();
  const navigate = useNavigate();

  // Deep-link modal state
  const [deepLinkStudy, setDeepLinkStudy] = useState<CaseStudyData | null>(null);
  const [deepLinkArticle, setDeepLinkArticle] = useState<ArticleData | null>(null);

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/case-studies/')) {
      const studyId = path.replace('/case-studies/', '').replace(/\/$/, '');
      const match = (content.caseStudies as CaseStudyData[]).find((s) => s.id === studyId);
      if (match) {
        setDeepLinkStudy(match);
      }
    } else if (path.startsWith('/writing/')) {
      const slug = path.replace('/writing/', '').replace(/\/$/, '');
      const match = (content.articles as ArticleData[]).find((a) => a.slug === slug);
      if (match) {
        setDeepLinkArticle(match);
      }
    } else if (path === '/writing') {
      const writingEl = document.getElementById('writing');
      if (writingEl) {
        writingEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname]);

  const handleCloseStudy = () => {
    setDeepLinkStudy(null);
    if (location.pathname.startsWith('/case-studies/')) {
      navigate('/', { replace: true });
    }
  };

  const handleCloseArticle = () => {
    setDeepLinkArticle(null);
    if (location.pathname.startsWith('/writing/')) {
      navigate('/', { replace: true });
    }
  };

  return (
    <div>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <MetricsStrip />
        <CaseStudies />
        <InteractivePlayground />
        <WritingSection />
        <TechStackMatrix />
        <Experience />
        <Reviews />
        <About />
      </motion.main>
      <Footer />
      <FloatingActions />

      {/* Deep Link Case Study Modal */}
      <CaseStudyModal
        open={Boolean(deepLinkStudy)}
        onClose={handleCloseStudy}
        caseStudy={deepLinkStudy}
      />

      {/* Deep Link Article Modal */}
      <ArticleModal
        open={Boolean(deepLinkArticle)}
        onClose={handleCloseArticle}
        article={deepLinkArticle}
      />
    </div>
  );
}

function App() {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const currentTheme = useMemo(() => theme(mode), [mode]);

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={{ ...colorMode, mode }}>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          <PortfolioMain />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
