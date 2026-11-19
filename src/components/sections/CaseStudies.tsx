import { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    Stack,
    Chip,
    useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, OpenInNew, TrendingUp } from '@mui/icons-material';
import content from '../../data/content.json';
import CaseStudyModal, { type CaseStudyData } from './CaseStudyModal';

const CaseStudies = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyData | null>(null);

    const handleOpen = (study: any) => {
        setActiveCaseStudy(study as CaseStudyData);
    };

    const handleClose = () => {
        setActiveCaseStudy(null);
    };

    return (
        <Box id="case-studies" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            letterSpacing: 2,
                            display: 'block',
                            mb: 1
                        }}
                    >
                        Flagship Engineering Systems
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            fontSize: { xs: '2rem', md: '2.75rem' },
                            mb: 2
                        }}
                    >
                        Production Case Studies
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ maxWidth: 750, mx: 'auto', fontWeight: 400, lineHeight: 1.6 }}
                    >
                        In-depth technical architecture breakdowns covering real performance bottlenecks,
                        RAG/SSE AI systems, and published developer infrastructure.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {content.caseStudies.map((study, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={study.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                style={{ height: '100%' }}
                            >
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: 3.5,
                                        overflow: 'hidden',
                                        background: isDark
                                            ? 'rgba(15, 23, 42, 0.7)'
                                            : 'rgba(255, 255, 255, 0.95)',
                                        border: '1px solid',
                                        borderColor: isDark
                                            ? 'rgba(255, 255, 255, 0.08)'
                                            : 'rgba(0, 0, 0, 0.08)',
                                        transition: 'border-color 0.3s, box-shadow 0.3s',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            boxShadow: isDark
                                                ? '0 20px 35px -10px rgba(59, 130, 246, 0.15)'
                                                : '0 20px 35px -10px rgba(0, 0, 0, 0.08)',
                                        }
                                    }}
                                >
                                    <Box sx={{ position: 'relative', height: 210, overflow: 'hidden', bgcolor: 'rgba(0,0,0,0.05)' }}>
                                        <CardMedia
                                            component="img"
                                            image={study.image}
                                            alt={study.title}
                                            sx={{
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.05)'
                                                }
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 16,
                                                left: 16,
                                                display: 'flex',
                                                gap: 1,
                                                flexWrap: 'wrap'
                                            }}
                                        >
                                            <Chip
                                                label={study.domain}
                                                size="small"
                                                sx={{
                                                    fontWeight: 700,
                                                    bgcolor: 'rgba(15, 23, 42, 0.85)',
                                                    color: '#FFFFFF',
                                                    backdropFilter: 'blur(8px)',
                                                    border: '1px solid rgba(255,255,255,0.2)',
                                                    fontSize: '0.72rem'
                                                }}
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 16,
                                                right: 16,
                                            }}
                                        >
                                            <Chip
                                                icon={<TrendingUp sx={{ fontSize: '16px !important', color: '#10B981 !important' }} />}
                                                label={study.headlineMetric}
                                                size="small"
                                                sx={{
                                                    fontWeight: 800,
                                                    bgcolor: 'rgba(6, 78, 59, 0.9)',
                                                    color: '#A7F3D0',
                                                    backdropFilter: 'blur(8px)',
                                                    border: '1px solid #059669',
                                                    fontSize: '0.75rem'
                                                }}
                                            />
                                        </Box>
                                    </Box>

                                    <CardContent sx={{ p: 3.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 700 }}>
                                            {study.product}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 800,
                                                mb: 1.5,
                                                lineHeight: 1.3,
                                                fontSize: { xs: '1.25rem', md: '1.4rem' }
                                            }}
                                        >
                                            {study.title}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mb: 2.5, lineHeight: 1.6, flex: 1 }}
                                        >
                                            {study.summary}
                                        </Typography>

                                        {/* Tech pills */}
                                        <Stack direction="row" flexWrap="wrap" gap={0.8} sx={{ mb: 3 }}>
                                            {study.stack.slice(0, 5).map((tech) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        borderRadius: 1,
                                                        fontSize: '0.72rem',
                                                        fontWeight: 600,
                                                        bgcolor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                                                    }}
                                                />
                                            ))}
                                            {study.stack.length > 5 && (
                                                <Chip
                                                    label={`+${study.stack.length - 5}`}
                                                    size="small"
                                                    sx={{
                                                        borderRadius: 1,
                                                        fontSize: '0.72rem',
                                                        fontWeight: 600,
                                                    }}
                                                />
                                            )}
                                        </Stack>

                                        {/* Action buttons */}
                                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                endIcon={<ArrowForward />}
                                                onClick={() => handleOpen(study)}
                                                sx={{
                                                    py: 1.2,
                                                    fontWeight: 700,
                                                    fontSize: '0.9rem',
                                                }}
                                            >
                                                Read Case Study
                                            </Button>
                                            {study.link && (
                                                <Button
                                                    variant="outlined"
                                                    fullWidth
                                                    endIcon={<OpenInNew />}
                                                    component="a"
                                                    href={study.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{
                                                        py: 1.2,
                                                        fontWeight: 600,
                                                        fontSize: '0.9rem',
                                                    }}
                                                >
                                                    Live Product
                                                </Button>
                                            )}
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <CaseStudyModal
                open={Boolean(activeCaseStudy)}
                onClose={handleClose}
                caseStudy={activeCaseStudy}
            />
        </Box>
    );
};

export default CaseStudies;
