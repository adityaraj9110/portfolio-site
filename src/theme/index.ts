import { createTheme, responsiveFontSizes, type PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: '#1a1a1a',
        },
        secondary: {
          main: '#666666',
        },
        background: {
          default: '#ffffff',
          paper: '#f8f9fa',
        },
        text: {
          primary: '#1a1a1a',
          secondary: '#4a4a4a',
        },
      }
      : {
        primary: {
          main: '#ffffff',
        },
        secondary: {
          main: '#a0a0a0',
        },
        background: {
          default: '#0a0a0a',
          paper: '#121212',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a0a0a0',
        },
      }),
  },
  typography: {
    fontFamily: '"Outfit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '4rem',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3rem',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.25rem',
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none' as const,
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          padding: '10px 24px',
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
  },
});

export const theme = (mode: PaletteMode) => responsiveFontSizes(createTheme(getDesignTokens(mode)));
