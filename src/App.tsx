import { createContext, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline, type PaletteMode } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Footer from './components/layout/Footer';
import FloatingActions from './components/layout/FloatingActions';
import { motion } from 'framer-motion';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export const ColorModeContext = createContext({ toggleColorMode: () => { }, mode: 'dark' as PaletteMode });

function App() {
  useSmoothScroll();
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
    <ColorModeContext.Provider value={{ ...colorMode, mode }}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <div style={{ overflowX: 'hidden' }}>
          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
            <About />
            <Services />
            <Experience />
            <Projects />
          </motion.main>
          <Footer />
          <FloatingActions />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
