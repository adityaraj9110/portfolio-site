import type { SxProps, Theme } from '@mui/material';

export const styles = {
    container: (itemCount: number): SxProps<Theme> => ({
        position: 'relative',
        py: 10,
        minHeight: itemCount * 300
    }),

    svgContainer: {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '100%',
        zIndex: 0,
        display: { xs: 'none', md: 'block' },
        pointerEvents: 'none'
    } as SxProps<Theme>,

    itemsContainer: {
        position: 'relative',
        zIndex: 1
    } as SxProps<Theme>,

    experienceItem: (isLeft: boolean): SxProps<Theme> => ({
        display: 'flex',
        justifyContent: { xs: 'flex-start', md: isLeft ? 'flex-end' : 'flex-start' },
        mb: { xs: 6, md: 0 },
        minHeight: { md: '300px' },
        alignItems: 'center',
        position: 'relative',
        pr: { md: isLeft ? '55%' : 0 },
        pl: { md: !isLeft ? '55%' : 0 }
    }),

    connectorDot: (theme: Theme): SxProps<Theme> => ({
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 20,
        height: 20,
        borderRadius: '50%',
        bgcolor: 'primary.main',
        border: `4px solid ${theme.palette.background.paper}`,
        boxShadow: theme.shadows[4],
        display: { xs: 'none', md: 'block' },
        zIndex: 2
    }),

    card: (theme: Theme): SxProps<Theme> => ({
        width: '100%',
        maxWidth: '500px',
        borderRadius: 4,
        bgcolor: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(10px)',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'translateY(-5px)',
            borderColor: 'primary.main',
            boxShadow: theme.shadows[8]
        }
    }),

    cardContent: {
        p: 4
    } as SxProps<Theme>,

    headerRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mb: 2,
        flexWrap: 'wrap',
        gap: 2
    } as SxProps<Theme>,

    periodChip: {
        fontWeight: 600,
        borderRadius: 1
    } as SxProps<Theme>,

    companyRow: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        mb: 3
    } as SxProps<Theme>,

    locationText: {
        display: 'flex',
        alignItems: 'center',
        gap: 0.5
    } as SxProps<Theme>,

    highlightsContainer: (theme: Theme): SxProps<Theme> => ({
        mt: 3,
        pl: 2,
        borderLeft: `2px solid ${theme.palette.primary.main}`
    }),

    highlightItem: {
        mb: 2,
        '&:last-child': { mb: 0 }
    } as SxProps<Theme>,

    highlightDesc: {
        mb: 0.5
    } as SxProps<Theme>,

    highlightTech: {
        color: 'primary.light',
        display: 'block'
    } as SxProps<Theme>,
};
