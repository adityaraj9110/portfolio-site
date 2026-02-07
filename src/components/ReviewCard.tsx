import { Avatar, Box, Card, CardContent, Chip, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { Linkedin, Quote } from 'lucide-react';

interface ReviewCardProps {
    name: string;
    role: string;
    company: string;
    image: string;
    feedback: string;
    category: string;
    linkedin?: string;
    title?: string;
}

const ReviewCard = ({ name, role, company, image, feedback, category, linkedin, title }: ReviewCardProps) => {
    const theme = useTheme();

    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.default',
                borderRadius: 4,
                position: 'relative',
                overflow: 'visible',
                transition: 'all 0.3s ease-in-out',
                minHeight: '320px',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'primary.main',
                    boxShadow: `0 8px 24px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)'}`
                }
            }}
        >
            <CardContent sx={{ p: 5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ position: 'absolute', top: -16, right: 32 }}>
                    <Box
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            borderRadius: '50%',
                            p: 1.5,
                            display: 'flex',
                            boxShadow: 4
                        }}
                    >
                        <Quote size={20} fill="currentColor" />
                    </Box>
                </Box>

                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                    <Avatar
                        src={image}
                        alt={name}
                        sx={{ width: 56, height: 56, border: '2px solid', borderColor: 'primary.main' }}
                    />
                    <Box>
                        <Typography variant="subtitle1" fontWeight={700} sx={{ lineHeight: 1.2 }}>
                            {name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block">
                            {role} @ {company}
                        </Typography>
                    </Box>
                </Stack>
                {title && (
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 2, background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: "text", color: "transparent", WebkitBackgroundClip: "text", width: "fit-content" }}>
                        {title}
                    </Typography>
                )}

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, fontStyle: 'italic', lineHeight: 1.7 }}>
                    "{feedback}"
                </Typography>

                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 'auto', pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                    <Chip
                        label={category}
                        size="small"
                        sx={{
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                            fontWeight: 600,
                            color: 'text.secondary'
                        }}
                    />
                    {linkedin && (
                        <IconButton
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{
                                color: '#0077b5',
                                '&:hover': {
                                    bgcolor: '#0077b5',
                                    color: 'white'
                                }
                            }}
                        >
                            <Linkedin size={20} />
                        </IconButton>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
};

export default ReviewCard;
