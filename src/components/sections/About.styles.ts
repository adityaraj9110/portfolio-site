import type { SxProps, Theme } from '@mui/material';

export const styles = {
    container: {
        py: 15,
        bgcolor: 'background.paper'
    } as SxProps<Theme>,

    animatedTitle: (theme: Theme): SxProps<Theme> => ({
        background: `linear-gradient(to right, ${theme.palette.text.secondary} 20%, ${theme.palette.primary.main} 40%, ${theme.palette.primary.main} 60%, ${theme.palette.text.secondary} 80%)`,
        backgroundSize: '200% auto',
        color: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block'
    }),

    description: {
        fontSize: '1.2rem',
        color: 'text.secondary',
        mb: 4,
        whiteSpace: 'pre-wrap'
    } as SxProps<Theme>,

    skillChip: {
        px: 2,
        py: 1,
        borderRadius: 2,
        bgcolor: 'background.default',
        border: '1px solid',
        borderColor: 'divider',
        fontSize: '0.9rem',
        fontWeight: 600
    } as SxProps<Theme>,

    profileImage: {
        width: '100%',
        borderRadius: 4,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        filter: 'grayscale(20%) kontrast(110%)',
        '&:hover': {
            filter: 'grayscale(0%)',
            transition: 'filter 0.5s ease'
        }
    } as SxProps<Theme>,
};
