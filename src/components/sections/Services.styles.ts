import type { SxProps, Theme } from '@mui/material';

export const styles = {
    container: {
        py: 15,
        bgcolor: 'background.default'
    } as SxProps<Theme>,

    sectionTitle: {
        fontWeight: 800,
        mb: 4,
        fontSize: { xs: '3rem', md: '4rem' }
    } as SxProps<Theme>,

    sectionDescription: {
        mb: 6,
        lineHeight: 1.6,
        fontWeight: 400
    } as SxProps<Theme>,

    primaryButton: {
        py: 2,
        px: 4,
        borderRadius: 2,
        fontWeight: 700
    } as SxProps<Theme>,

    secondaryButton: {
        py: 2,
        px: 4,
        borderRadius: 2,
        fontWeight: 700
    } as SxProps<Theme>,

    serviceCard: {
        p: 4,
        height: '100%',
        bgcolor: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 4,
        transition: 'all 0.3s ease',
        '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            transform: 'translateY(-5px)',
            borderColor: 'primary.main',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
        }
    } as SxProps<Theme>,

    serviceIcon: {
        color: 'primary.main',
        mb: 3
    } as SxProps<Theme>,

    serviceTitle: {
        fontWeight: 700,
        mb: 2
    } as SxProps<Theme>,

    serviceDescription: {
        lineHeight: 1.6
    } as SxProps<Theme>,
};
