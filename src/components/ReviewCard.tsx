import { Avatar, Box, Card, CardContent, Chip, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { Linkedin, Quote } from 'lucide-react';
import { styles } from './ReviewCard.styles';

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
        <Card elevation={0} sx={styles.card(theme)}>
            <CardContent sx={styles.cardContent}>
                <Box sx={styles.quoteIconContainer}>
                    <Box sx={styles.quoteIconBox}>
                        <Quote size={20} fill="currentColor" />
                    </Box>
                </Box>

                <Stack direction="row" alignItems="center" spacing={2} sx={styles.authorStack}>
                    <Avatar src={image} alt={name} sx={styles.avatar} />
                    <Box>
                        <Typography variant="subtitle1" fontWeight={700} sx={styles.authorName}>
                            {name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" display="block">
                            {role} @ {company}
                        </Typography>
                    </Box>
                </Stack>

                {title && (
                    <Typography variant="h6" fontWeight={700} sx={styles.title(theme)}>
                        {title}
                    </Typography>
                )}

                <Typography variant="body2" color="text.secondary" sx={styles.feedback}>
                    "{feedback}"
                </Typography>

                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={styles.footerStack}>
                    <Chip label={category} size="small" sx={styles.categoryChip(theme)} />
                    {linkedin && (
                        <IconButton
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={styles.linkedinButton}
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
