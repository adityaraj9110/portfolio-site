import type { SxProps, Theme } from '@mui/material';
import type { CSSProperties } from 'react';

export const styles = {
    appBar: (theme: Theme): SxProps<Theme> => ({
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${theme.palette.divider}`,
        zIndex: theme.zIndex.drawer + 1
    }),

    toolbar: {
        justifyContent: 'space-between'
    } as SxProps<Theme>,

    logo: {
        fontWeight: 800,
        letterSpacing: -1,
        fontFamily: 'Outfit'
    } as SxProps<Theme>,

    desktopNav: {
        display: { xs: 'none', md: 'flex' },
        gap: 2,
        alignItems: 'center'
    } as SxProps<Theme>,

    navButton: {
        fontWeight: 500,
        '&:hover': {
            backgroundColor: 'transparent',
            opacity: 0.7
        }
    } as SxProps<Theme>,

    themeToggle: {
        ml: 1
    } as SxProps<Theme>,

    resumeButton: {
        ml: 2,
        px: 3,
        borderColor: 'divider',
        '&:hover': {
            borderColor: 'primary.main',
            bgcolor: 'rgba(25, 118, 210, 0.04)'
        }
    } as SxProps<Theme>,

    resumeButtonOuter: {
        position: 'relative',
        borderRadius: '8px',
        overflow: 'hidden',
        padding: '2px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ml: 2,
    } as SxProps<Theme>,

    resumeRotatingBorder: (theme: Theme): CSSProperties => ({
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: `conic-gradient(from 0deg, transparent 0deg, transparent 60deg, ${theme.palette.primary.main} 120deg, transparent 180deg, transparent 240deg, ${theme.palette.secondary.main || '#ffffff'} 300deg, transparent 360deg)`,
    }),

    resumeButtonInner: (theme: Theme): SxProps<Theme> => ({
        px: 3,
        py: 1,
        borderRadius: '6px',
        bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        zIndex: 1,
        fontWeight: 600,
        '&:hover': {
            bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)',
        }
    }),

    mobileMenuContainer: {
        display: { xs: 'flex', md: 'none' }
    } as SxProps<Theme>,

    drawer: {
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
    } as SxProps<Theme>,

    drawerTitle: {
        my: 2,
        fontWeight: 800,
        fontFamily: 'Outfit'
    } as SxProps<Theme>,

    drawerThemeToggleContainer: {
        display: 'flex',
        justifyContent: 'center',
        p: 2,
        gap: 1
    } as SxProps<Theme>,
};
