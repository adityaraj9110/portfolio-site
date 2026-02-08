import type { SxProps, Theme } from '@mui/material';

export const styles = {
    container: {
        py: 15
    } as SxProps<Theme>,

    sectionTitle: {
        mb: 4,
        fontWeight: 800
    } as SxProps<Theme>,

    sectionSubtitle: {
        mb: 8,
        maxWidth: 600,
        mx: 'auto'
    } as SxProps<Theme>,

    experienceContainer: {
        position: 'relative'
    } as SxProps<Theme>,

    period: {
        fontWeight: 700,
        opacity: 0.6
    } as SxProps<Theme>,

    role: {
        fontWeight: 700,
        mb: 1
    } as SxProps<Theme>,

    company: {
        mb: 1,
        fontSize: '1.2rem'
    } as SxProps<Theme>,

    description: {
        mb: 4
    } as SxProps<Theme>,

    highlightName: {
        fontWeight: 700,
        mb: 1,
        fontSize: '1.1rem'
    } as SxProps<Theme>,

    highlightDesc: {
        mb: 1
    } as SxProps<Theme>,

    highlightTech: {
        fontWeight: 600,
        color: 'primary.main'
    } as SxProps<Theme>,

    divider: {
        mt: 8,
        opacity: 0.5
    } as SxProps<Theme>,
};
