import { Box, Container, Grid, Typography, useTheme, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Zap, Network, Package, Brain } from 'lucide-react';
import content from '../../data/content.json';

const iconMap = [Zap, Network, Package, Brain];

const MetricsStrip = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box
            id="metrics"
            sx={{
                py: { xs: 6, md: 8 },
                position: 'relative',
                background: isDark
                    ? 'linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(2, 6, 23, 0.8) 100%)'
                    : 'linear-gradient(180deg, rgba(241, 245, 249, 0.6) 0%, rgba(248, 250, 252, 1) 100%)',
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            letterSpacing: 2,
                            display: 'block',
                        }}
                    >
                        Verified Production Benchmarks
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            fontSize: { xs: '1.75rem', md: '2.25rem' }
                        }}
                    >
                        Hard-Metric Production Impact
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {content.metrics.map((metric, index) => {
                        const Icon = iconMap[index] || Zap;
                        return (
                            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={metric.label}>
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                >
                                    <Card
                                        elevation={0}
                                        sx={{
                                            height: '100%',
                                            borderRadius: 3,
                                            p: 1,
                                            background: isDark
                                                ? 'rgba(15, 23, 42, 0.65)'
                                                : 'rgba(255, 255, 255, 0.85)',
                                            backdropFilter: 'blur(12px)',
                                            border: '1px solid',
                                            borderColor: isDark
                                                ? 'rgba(255, 255, 255, 0.1)'
                                                : 'rgba(0, 0, 0, 0.08)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                height: '3px',
                                                background: index === 0
                                                    ? 'linear-gradient(90deg, #10B981, #06B6D4)'
                                                    : index === 1
                                                    ? 'linear-gradient(90deg, #3B82F6, #8B5CF6)'
                                                    : index === 2
                                                    ? 'linear-gradient(90deg, #EC4899, #F59E0B)'
                                                    : 'linear-gradient(90deg, #8B5CF6, #10B981)',
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: 2.5 }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    mb: 2,
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 44,
                                                        height: 44,
                                                        borderRadius: 2,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        bgcolor: isDark
                                                            ? 'rgba(59, 130, 246, 0.12)'
                                                            : 'rgba(59, 130, 246, 0.08)',
                                                        color: 'primary.main',
                                                    }}
                                                >
                                                    <Icon size={22} />
                                                </Box>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        px: 1.2,
                                                        py: 0.4,
                                                        borderRadius: 1,
                                                        fontSize: '0.7rem',
                                                        fontWeight: 700,
                                                        bgcolor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                                                        color: 'text.secondary',
                                                        letterSpacing: 0.5,
                                                    }}
                                                >
                                                    PROD SCALE
                                                </Typography>
                                            </Box>

                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    fontWeight: 800,
                                                    fontSize: { xs: '1.85rem', md: '2.1rem' },
                                                    letterSpacing: '-0.03em',
                                                    mb: 1,
                                                    background: isDark
                                                        ? 'linear-gradient(135deg, #FFFFFF 30%, #93C5FD 100%)'
                                                        : 'linear-gradient(135deg, #0F172A 30%, #1D4ED8 100%)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                }}
                                            >
                                                {metric.value}
                                            </Typography>

                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    fontWeight: 700,
                                                    color: 'text.primary',
                                                    mb: 0.5,
                                                    lineHeight: 1.3
                                                }}
                                            >
                                                {metric.label}
                                            </Typography>

                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: 'text.secondary',
                                                    display: 'block',
                                                    lineHeight: 1.4,
                                                    fontSize: '0.78rem'
                                                }}
                                            >
                                                {metric.sub}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default MetricsStrip;
