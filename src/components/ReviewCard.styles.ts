import type { SxProps, Theme } from '@mui/material';

export const styles = {
    card: (theme: Theme): SxProps<Theme> => ({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.default',
        borderRadius: 4,
        position: 'relative',
        overflow: 'visible',
        transition: 'all 0.3s ease-in-out',
        minHeight: '320px',
        '&:hover': {
            transform: 'translateY(-8px)',
            borderColor: 'primary.main',
            boxShadow: `0 8px 24px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)'}`
        }
    }),

    cardContent: {
        p: 5,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
    } as SxProps<Theme>,

    quoteIconContainer: {
        position: 'absolute',
        top: -16,
        right: 32
    } as SxProps<Theme>,

    quoteIconBox: {
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        borderRadius: '50%',
        p: 1.5,
        display: 'flex',
        boxShadow: 4
    } as SxProps<Theme>,

    authorStack: {
        mb: 3
    } as SxProps<Theme>,

    avatar: {
        width: 56,
        height: 56,
        border: '2px solid',
        borderColor: 'primary.main'
    } as SxProps<Theme>,

    authorName: {
        lineHeight: 1.2
    } as SxProps<Theme>,

    title: (theme: Theme): SxProps<Theme> => ({
        mb: 2,
        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        backgroundClip: 'text',
        color: 'transparent',
        WebkitBackgroundClip: 'text',
        width: 'fit-content'
    }),

    feedback: {
        mb: 3,
        flexGrow: 1,
        fontStyle: 'italic',
        lineHeight: 1.7
    } as SxProps<Theme>,

    footerStack: {
        mt: 'auto',
        pt: 2,
        borderTop: '1px solid',
        borderColor: 'divider'
    } as SxProps<Theme>,

    categoryChip: (theme: Theme): SxProps<Theme> => ({
        bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
        fontWeight: 600,
        color: 'text.secondary'
    }),

    linkedinButton: {
        color: '#0077b5',
        '&:hover': {
            bgcolor: '#0077b5',
            color: 'white'
        }
    } as SxProps<Theme>,
};
