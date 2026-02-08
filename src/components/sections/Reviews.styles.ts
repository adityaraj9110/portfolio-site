import type { SxProps, Theme } from '@mui/material';

export const styles = {
    container: {
        py: 15,
        bgcolor: 'background.default'
    } as SxProps<Theme>,

    sectionTitle: {
        mb: 2,
        fontWeight: 800
    } as SxProps<Theme>,

    sectionSubtitle: {
        mb: 8,
        maxWidth: 600,
        mx: 'auto'
    } as SxProps<Theme>,

    filterContainer: {
        display: 'flex',
        justifyContent: 'center',
        mb: 8
    } as SxProps<Theme>,

    toggleButtonGroup: (theme: Theme): SxProps<Theme> => ({
        bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
        padding: 0.5,
        borderRadius: '12px !important',
        '& .MuiToggleButton-root': {
            border: 'none',
            borderRadius: '8px !important',
            px: 3,
            py: 1,
            textTransform: 'capitalize',
            fontWeight: 600,
            color: 'text.secondary',
            '&.Mui-selected': {
                bgcolor: 'background.paper',
                color: 'primary.main',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                '&:hover': {
                    bgcolor: 'background.paper',
                }
            }
        }
    }),

    marqueeContainer: {
        overflow: 'hidden',
        width: '100%',
        position: 'relative',
        py: 4,
        '&:hover .reviews-marquee-track': {
            animationPlayState: 'paused'
        }
    } as SxProps<Theme>,

    marqueeTrack: {
        display: 'flex',
        gap: 4,
        width: 'fit-content',
        animation: 'scroll-marquee 90s linear infinite',
        '@keyframes scroll-marquee': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' }
        }
    } as SxProps<Theme>,

    reviewCardContainer: {
        minWidth: { xs: '300px', md: '400px' },
        maxWidth: { xs: '300px', md: '400px' },
        flexShrink: 0
    } as SxProps<Theme>,
};
