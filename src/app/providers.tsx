'use client';

import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline, type PaletteMode, Box } from '@mui/material';
import { theme } from '../theme';

export const ColorModeContext = createContext({ toggleColorMode: () => { }, mode: 'dark' as PaletteMode });

export function Providers({ children }: { children: React.ReactNode }) {
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
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
          {children}
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
