import { createTheme, responsiveFontSizes, type PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: '#1D4ED8', // Technical Cobalt Blue
          light: '#3B82F6',
          dark: '#1E40AF',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#52525B', // Zinc 600
        },
        background: {
          default: '#FAFAF9', // Warm stone/paper canvas
          paper: '#FFFFFF',
        },
        text: {
          primary: '#09090B', // Zinc 950
          secondary: '#52525B', // Zinc 600
        },
        divider: '#E4E4E7', // Hairline Zinc 200
      }
      : {
        primary: {
          main: '#3B82F6', // Crisp Blue
          light: '#60A5FA',
          dark: '#2563EB',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#A1A1AA', // Zinc 400
        },
        background: {
          default: '#0C0C0D', // Matte Charcoal (Zero neon)
          paper: '#141416', // Matte Surface
        },
        text: {
          primary: '#FAFAFA', // Zinc 50
          secondary: '#A1A1AA', // Zinc 400
        },
        divider: '#27272A', // Hairline Zinc 800
      }),
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.035em',
      lineHeight: 1.15,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.25,
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.015em',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '-0.005em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.65,
    },
    button: {
      textTransform: 'none' as const,
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    caption: {
      fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      fontSize: '0.75rem',
      letterSpacing: '0.02em',
    },
    overline: {
      fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          padding: '8px 16px',
          transition: 'all 150ms cubic-bezier(0.2, 0, 0, 1)',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          backgroundColor: mode === 'light' ? '#09090B' : '#FAFAFA',
          color: mode === 'light' ? '#FFFFFF' : '#09090B',
          '&:hover': {
            backgroundColor: mode === 'light' ? '#27272A' : '#E4E4E7',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: 'none',
        },
      },
    },
  },
});

export const theme = (mode: PaletteMode) => responsiveFontSizes(createTheme(getDesignTokens(mode)));
