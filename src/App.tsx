import { createContext, useMemo, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline, type PaletteMode, Box } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import WorkIndex from './pages/WorkIndex';
import CaseStudyDetail from './pages/CaseStudyDetail';
import PlaygroundPage from './pages/PlaygroundPage';
import WritingIndex from './pages/WritingIndex';
import ArticleDetail from './pages/ArticleDetail';
import AboutPage from './pages/AboutPage';

export const ColorModeContext = createContext({ toggleColorMode: () => { }, mode: 'dark' as PaletteMode });

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
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
          <ScrollToTop />
          <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
            <Navbar />
            <Box component="main" sx={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/work" element={<WorkIndex />} />
                <Route path="/work/:slug" element={<CaseStudyDetail />} />
                {/* Legacy route alias */}
                <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                <Route path="/playground" element={<PlaygroundPage />} />
                <Route path="/writing" element={<WritingIndex />} />
                <Route path="/writing/:slug" element={<ArticleDetail />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
