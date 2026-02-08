import type { SxProps, Theme } from '@mui/material';

export const styles = {
    container: {
        py: 15,
        position: 'relative',
        overflow: 'hidden'
    } as SxProps<Theme>,

    backgroundDecoration: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03,
        backgroundImage: 'radial-gradient(circle at 50% 50%, #4dabf5 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 0
    } as SxProps<Theme>,

    contentContainer: {
        position: 'relative',
        zIndex: 1
    } as SxProps<Theme>,

    headerSection: {
        textAlign: 'center',
        mb: 10
    } as SxProps<Theme>,

    headerChip: {
        mb: 2,
        borderRadius: 'full'
    } as SxProps<Theme>,

    headerSubtitle: {
        maxWidth: 600,
        mx: 'auto'
    } as SxProps<Theme>,

    gridContainer: {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
        gap: 4
    } as SxProps<Theme>,

    insightCard: (theme: Theme): SxProps<Theme> => ({
        height: '100%',
        bgcolor: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(10px)',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 4,
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'translateY(-8px)',
            borderColor: 'primary.main',
            boxShadow: theme.shadows[4]
        }
    }),

    cardContent: {
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
    } as SxProps<Theme>,

    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 3,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24
    } as SxProps<Theme>,

    description: {
        lineHeight: 1.7
    } as SxProps<Theme>,

    tagsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
        mt: 'auto'
    } as SxProps<Theme>,

    tagChip: (theme: Theme): SxProps<Theme> => ({
        borderRadius: 1,
        bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
    }),
};
