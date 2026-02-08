import { Box, Container, Typography, Card, CardContent, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Lightbulb, Code, Palette, Cpu, ShieldCheck } from 'lucide-react';
import { styles } from './AIInsights.styles';
import content from '../../data/content.json';

const iconMap: Record<string, any> = {
    "Architecture": Code,
    "UX Design": Palette,
    "Accessibility": Lightbulb,
    "Engineering Standards": ShieldCheck,
    "default": Cpu
};

const AIInsights = () => {
    const theme = useTheme();

    return (
        <Box id="ai-insights" sx={styles.container}>
            {/* Background decoration */}
            <Box sx={styles.backgroundDecoration} />

            <Container maxWidth="lg" sx={styles.contentContainer}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Box sx={styles.headerSection}>
                        <Chip
                            icon={<Cpu size={16} />}
                            label="AI Analysis"
                            color="primary"
                            variant="outlined"
                            sx={styles.headerChip}
                        />
                        <Typography variant="h3" fontWeight={800} gutterBottom>
                            Smart Design Decisions
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={styles.headerSubtitle}>
                            Design and engineering choices backed by data and AI-driven insights for optimal performance and user experience.
                        </Typography>
                    </Box>
                </motion.div>

                <Box sx={styles.gridContainer}>
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
                                <Card elevation={0} sx={styles.insightCard(theme)}>
                                    <CardContent sx={styles.cardContent}>
                                        <Box sx={styles.iconBox}>
                                            <Icon size={24} />
                                        </Box>

                                        <Box>
                                            <Typography variant="overline" color="primary" fontWeight={700}>
                                                {insight.category}
                                            </Typography>
                                            <Typography variant="h5" fontWeight={700} gutterBottom>
                                                {insight.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={styles.description}>
                                                {insight.description}
                                            </Typography>
                                        </Box>

                                        <Box sx={styles.tagsContainer}>
                                            {insight.tags.map((tag: string) => (
                                                <Chip key={tag} label={tag} size="small" sx={styles.tagChip(theme)} />
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
