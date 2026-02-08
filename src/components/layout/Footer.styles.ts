import type { SxProps, Theme } from '@mui/material';

export const styles = {
    container: {
        py: 10,
        bgcolor: 'background.default',
        borderTop: '1px solid',
        borderColor: 'divider'
    } as SxProps<Theme>,

    logo: {
        fontWeight: 800,
        letterSpacing: -1,
        fontFamily: 'Outfit'
    } as SxProps<Theme>,

    divider: {
        width: '100%',
        maxWidth: '600px',
        opacity: 0.5
    } as SxProps<Theme>,
};
