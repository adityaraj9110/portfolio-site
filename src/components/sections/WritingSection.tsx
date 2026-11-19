import { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Stack,
    Chip,
    useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { Article, Visibility, ArrowForward } from '@mui/icons-material';
import content from '../../data/content.json';
import ArticleModal, { type ArticleData } from './ArticleModal';

const WritingSection = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);

    return (
        <Box id="writing" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                    <Chip
                        icon={<Article sx={{ fontSize: '18px !important' }} />}
                        label="Viral Technical Notes & Systems Thinking"
                        color="primary"
                        sx={{ fontWeight: 700, mb: 1.5, letterSpacing: 0.5 }}
                    />
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            fontSize: { xs: '2rem', md: '2.75rem' },
                            mb: 2
                        }}
                    >
                        Engineering Notes &amp; Writing
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ maxWidth: 750, mx: 'auto', fontWeight: 400, lineHeight: 1.6 }}
                    >
                        High-signal architectural breakdowns distilled from production bottlenecks,
                        benchmarked with over 32k+ technical impressions across the developer ecosystem.
                    </Typography>
                </Box>

                <Grid container spacing={3.5}>
                    {content.articles.map((art, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={art.slug}>
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                style={{ height: '100%' }}
                            >
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: 3.5,
                                        p: 3,
                                        bgcolor: isDark ? 'rgba(15, 23, 42, 0.65)' : '#FFFFFF',
                                        border: '1px solid',
                                        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            boxShadow: isDark
                                                ? '0 15px 30px -10px rgba(59, 130, 246, 0.12)'
                                                : '0 15px 30px -10px rgba(0, 0, 0, 0.08)'
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 0, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        {/* Top Stats Banner */}
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                            <Chip
                                                icon={<Visibility sx={{ fontSize: '15px !important' }} />}
                                                label={art.stats}
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: '0.72rem',
                                                    borderColor: 'primary.main',
                                                    color: 'primary.main'
                                                }}
                                            />
                                            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                                                {art.date}
                                            </Typography>
                                        </Box>

                                        {/* Article Title */}
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 800,
                                                mb: 1,
                                                lineHeight: 1.3,
                                                fontSize: { xs: '1.2rem', md: '1.35rem' }
                                            }}
                                        >
                                            {art.title}
                                        </Typography>

                                        {/* Subtitle */}
                                        <Typography
                                            variant="subtitle2"
                                            color="text.secondary"
                                            sx={{ mb: 2, fontWeight: 500, fontSize: '0.85rem' }}
                                        >
                                            {art.subtitle}
                                        </Typography>

                                        {/* Summary */}
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mb: 2.5, lineHeight: 1.6, flex: 1 }}
                                        >
                                            {art.summary}
                                        </Typography>

                                        {/* Tags */}
                                        <Stack direction="row" flexWrap="wrap" gap={0.8} sx={{ mb: 3 }}>
                                            {art.tags.map((tag) => (
                                                <Chip
                                                    key={tag}
                                                    label={tag}
                                                    size="small"
                                                    sx={{
                                                        borderRadius: 1,
                                                        fontSize: '0.7rem',
                                                        fontWeight: 600,
                                                        bgcolor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
                                                    }}
                                                />
                                            ))}
                                        </Stack>

                                        {/* CTA */}
                                        <Button
                                            variant="outlined"
                                            endIcon={<ArrowForward />}
                                            onClick={() => setSelectedArticle(art as ArticleData)}
                                            sx={{
                                                py: 1,
                                                fontWeight: 700,
                                                alignSelf: 'flex-start',
                                                textTransform: 'none',
                                            }}
                                        >
                                            Read Technical Breakdown
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <ArticleModal
                open={Boolean(selectedArticle)}
                onClose={() => setSelectedArticle(null)}
                article={selectedArticle}
            />
        </Box>
    );
};

export default WritingSection;
