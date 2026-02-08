import type { SxProps, Theme } from '@mui/material';

export const styles = {
    card: (theme: Theme, hasLink: boolean): SxProps<Theme> => ({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: hasLink ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'visible',
        '&:hover': {
            transform: 'translateY(-12px)',
            boxShadow: theme.shadows[20],
            borderColor: 'primary.main',
            '& .project-image': {
                transform: 'scale(1.1)'
            },
            '& .stat-overlay': {
                opacity: 1,
                transform: 'translateY(0)'
            }
        }
    }),

    imageContainer: (theme: Theme): SxProps<Theme> => ({
        width: '100%',
        height: '240px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px 16px 0 0',
        bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100'
    }),

    cardMedia: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    } as SxProps<Theme>,

    categoryOverlay: {
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 2
    } as SxProps<Theme>,

    categoryChip: {
        bgcolor: 'rgba(0,0,0,0.6)',
        color: 'white',
        backdropFilter: 'blur(8px)',
        fontWeight: 600,
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '8px'
    } as SxProps<Theme>,

    cardContent: {
        p: 3,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
    } as SxProps<Theme>,

    statsContainer: (theme: Theme): SxProps<Theme> => ({
        mb: 2,
        p: 1.5,
        borderRadius: 3,
        bgcolor: theme.palette.action.hover,
        border: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        gap: 2
    }),

    statsIconBox: {
        p: 1,
        borderRadius: 2,
        bgcolor: 'background.paper',
        color: 'primary.main',
        boxShadow: 1,
        display: 'flex'
    } as SxProps<Theme>,

    statsValue: {
        background: '-webkit-linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block'
    } as SxProps<Theme>,

    description: {
        mb: 2,
        lineHeight: 1.6,
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    } as SxProps<Theme>,

    tagsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 0.8,
        mt: 'auto',
        mb: 3
    } as SxProps<Theme>,

    tagChip: (theme: Theme): SxProps<Theme> => ({
        borderRadius: 2,
        fontSize: '0.75rem',
        height: 26,
        borderColor: theme.palette.divider,
        bgcolor: 'background.default'
    }),

    moreTagsChip: {
        fontSize: '0.75rem',
        height: 26
    } as SxProps<Theme>,

    demoButton: (theme: Theme): SxProps<Theme> => ({
        borderRadius: 3,
        py: 1,
        textTransform: 'none',
        fontWeight: 600,
        boxShadow: theme.shadows[4]
    }),

    codeButton: (theme: Theme): SxProps<Theme> => ({
        borderRadius: 3,
        py: 1,
        textTransform: 'none',
        fontWeight: 600,
        borderColor: theme.palette.divider
    }),
};
