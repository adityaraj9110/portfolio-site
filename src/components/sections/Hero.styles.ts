import type { SxProps, Theme } from '@mui/material';
import type { CSSProperties } from 'react';

export const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 15, md: 0 },
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: '24px',
        zIndex: 1
    } as SxProps<Theme>,

    mainStack: {
        position: 'relative',
        zIndex: 1
    } as SxProps<Theme>,

    textSection: {
        flex: 1,
        textAlign: { xs: 'center', md: 'left' }
    } as SxProps<Theme>,

    subtitle: (theme: Theme): SxProps<Theme> => ({
        fontWeight: 700,
        letterSpacing: 2,
        textTransform: 'uppercase',
        mb: 2,
        background: `linear-gradient(to right, ${theme.palette.text.secondary} 20%, ${theme.palette.primary.main} 40%, ${theme.palette.primary.main} 60%, ${theme.palette.text.secondary} 80%)`,
        backgroundSize: '200% auto',
        color: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block'
    }),

    title: {
        fontSize: { xs: '3rem', md: '3.5rem' },
        lineHeight: 1.1,
        mb: 3,
    } as SxProps<Theme>,

    description: {
        color: 'text.secondary',
        maxWidth: '600px',
        lineHeight: 1.6,
        fontWeight: 400,
        mb: 4,
        mx: { xs: 'auto', md: 0 }
    } as SxProps<Theme>,

    buttonStack: {
        mb: 6
    } as SxProps<Theme>,

    primaryButton: {
        py: 1.5,
        px: 4,
        fontSize: '1.1rem',
    } as SxProps<Theme>,

    secondaryButton: {
        py: 1.5,
        px: 4,
        fontSize: '1.1rem',
    } as SxProps<Theme>,

    tagsContainer: {
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', md: 'flex-start' }
    } as SxProps<Theme>,

    tagOuterBox: {
        position: 'relative',
        borderRadius: '9999px',
        overflow: 'hidden',
        padding: '1.5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    } as SxProps<Theme>,

    rotatingBorder: (theme: Theme): CSSProperties => ({
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: `conic-gradient(from 0deg, transparent 0deg, transparent 60deg, ${theme.palette.primary.main} 120deg, transparent 180deg, transparent 240deg, ${theme.palette.secondary.main || '#ffffff'} 300deg, transparent 360deg)`,
    }),

    tagInnerBox: (theme: Theme): SxProps<Theme> => ({
        px: 2,
        py: 1,
        borderRadius: '9999px',
        bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        position: 'relative',
        zIndex: 1,
        height: '100%',
    }),

    tagDot: (theme: Theme): CSSProperties => ({
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
    }),

    tagText: (theme: Theme): SxProps<Theme> => ({
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
        whiteSpace: 'nowrap'
    }),

    avatarContainer: {
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            top: -10,
            left: -10,
            right: -10,
            bottom: -10,
            border: '2px solid',
            borderColor: 'primary.main',
            borderRadius: '50%',
            opacity: 0.2,
            zIndex: -1
        }
    } as SxProps<Theme>,

    avatar: {
        width: { xs: 200, md: 350 },
        height: { xs: 200, md: 350 },
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        border: '5px solid white'
    } as SxProps<Theme>,
};
