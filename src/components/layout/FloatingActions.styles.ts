import type { SxProps, Theme } from '@mui/material';

export const styles = {
    container: {
        position: 'fixed',
        bottom: { xs: 20, md: 40 },
        right: { xs: 20, md: 40 },
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    } as SxProps<Theme>,

    linkWrapper: {
        textDecoration: 'none'
    } as SxProps<Theme>,

    hireMeFab: {
        width: { xs: 50, md: 60 },
        height: { xs: 50, md: 60 },
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 8px 16px rgba(33, 150, 243, 0.3)',
        '&:hover': {
            boxShadow: '0 12px 20px rgba(33, 150, 243, 0.4)',
        },
    } as SxProps<Theme>,

    resumeFab: (theme: Theme): SxProps<Theme> => ({
        width: { xs: 50, md: 60 },
        height: { xs: 50, md: 60 },
        bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'white',
        color: 'primary.main',
        border: '2px solid',
        borderColor: 'primary.main',
        backdropFilter: 'blur(10px)',
        '&:hover': {
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
        },
    }),
};
