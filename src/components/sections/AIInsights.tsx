import { Box, Container, Typography, Card, CardContent, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Lightbulb, Code, Palette, Cpu } from 'lucide-react';
import content from '../../data/content.json';

const iconMap: Record<string, any> = {
    "Architecture": Code,
    "UX Design": Palette,
    "Accessibility": Lightbulb,
    "default": Cpu
};

const AIInsights = () => {
    const theme = useTheme();

    return (
        <Box id="ai-insights" sx={{ py: 15, position: 'relative', overflow: 'hidden' }}>
            {/* Background decoration */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.03,
                backgroundImage: 'radial-gradient(circle at 50% 50%, #4dabf5 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                zIndex: 0
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Box sx={{ textAlign: 'center', mb: 10 }}>
                        <Chip
                            icon={<Cpu size={16} />}
                            label="AI Analysis"
                            color="primary"
                            variant="outlined"
                            sx={{ mb: 2, borderRadius: 'full' }}
                        />
                        <Typography variant="h3" fontWeight={800} gutterBottom>
                            Smart Design Decisions
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                            Design and engineering choices backed by data and AI-driven insights for optimal performance and user experience.
                        </Typography>
                    </Box>
                </motion.div>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                    gap: 4
                }}>
                    {(content as any).aiInsights?.map((insight: any, index: number) => {
                        const Icon = iconMap[insight.category] || iconMap['default'];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        bgcolor: 'rgba(255,255,255,0.02)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        borderRadius: 4,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            borderColor: 'primary.main',
                                            boxShadow: theme.shadows[4]
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
                                        <Box sx={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 3,
                                            bgcolor: 'primary.main',
                                            color: 'primary.contrastText',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: 24
                                        }}>
                                            <Icon size={24} />
                                        </Box>

                                        <Box>
                                            <Typography variant="overline" color="primary" fontWeight={700}>
                                                {insight.category}
                                            </Typography>
                                            <Typography variant="h5" fontWeight={700} gutterBottom>
                                                {insight.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                                {insight.description}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                                            {insight.tags.map((tag: string) => (
                                                <Chip
                                                    key={tag}
                                                    label={tag}
                                                    size="small"
                                                    sx={{
                                                        borderRadius: 1,
                                                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default AIInsights;
