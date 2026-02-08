import type { SxProps, Theme } from '@mui/material';

export const styles = {
    container: {
        py: 15,
        bgcolor: 'background.paper'
    } as SxProps<Theme>,

    sectionTitle: {
        mb: 2,
        fontWeight: 800
    } as SxProps<Theme>,

    sectionSubtitle: {
        mb: 6,
        maxWidth: 600,
        mx: 'auto'
    } as SxProps<Theme>,

    filterContainer: {
        display: 'flex',
        justifyContent: 'center',
        mb: 8
    } as SxProps<Theme>,

    toggleButtonGroup: (theme: Theme): SxProps<Theme> => ({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 1,
        bgcolor: 'transparent',
        '& .MuiToggleButton-root': {
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '20px !important',
            px: 3,
            py: 1,
            textTransform: 'capitalize',
            fontWeight: 600,
            color: 'text.secondary',
            bgcolor: 'background.default',
            '&.Mui-selected': {
                bgcolor: 'primary.main',
                color: theme.palette.getContrastText(theme.palette.primary.main),
                borderColor: 'primary.main',
                '&:hover': {
                    bgcolor: 'primary.dark',
                }
            }
        }
    }),

    moreProjectsContainer: {
        mt: 12,
        textAlign: 'center'
    } as SxProps<Theme>,

    moreProjectsButton: {
        py: 1.5,
        px: 4,
        borderRadius: 2,
        fontWeight: 600,
        textTransform: 'none',
        fontSize: '1.1rem'
    } as SxProps<Theme>,
};
