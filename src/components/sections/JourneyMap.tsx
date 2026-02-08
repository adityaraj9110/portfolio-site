import { useRef } from 'react';
import { Box, Typography, Card, CardContent, useTheme, Chip } from '@mui/material';
import { motion, useScroll } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { styles } from './JourneyMap.styles';

interface JourneyMapProps {
    items: any[];
}

const JourneyMap = ({ items }: JourneyMapProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const theme = useTheme();

    // Track scroll progress within the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Create a path string based on item count
    const createPath = (count: number) => {
        let path = "M 50 0";
        const step = 100 / count;
        for (let i = 0; i < count; i++) {
            const y = (i + 0.5) * step;
            const x = i % 2 === 0 ? 20 : 80;
            path += ` C 50 ${y - (step / 3)}, ${x} ${y - (step / 3)}, ${x} ${y}`;
            path += ` C ${x} ${y + (step / 3)}, 50 ${y + (step / 3)}, 50 ${(i + 1) * step}`;
        }
        return path;
    };

    const pathDefinition = createPath(items.length);

    return (
        <Box ref={containerRef} sx={styles.container(items.length)}>
            {/* SVG Path Background (Desktop only) */}
            <Box sx={styles.svgContainer}>
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Background Path */}
                    <path
                        d={pathDefinition}
                        stroke={theme.palette.divider}
                        strokeWidth="0.5"
                        fill="none"
                        strokeDasharray="2 2"
                    />
                    {/* Animated Path */}
                    <motion.path
                        d={pathDefinition}
                        stroke={theme.palette.primary.main}
                        strokeWidth="1"
                        fill="none"
                        style={{ pathLength: scrollYProgress }}
                    />
                </svg>
            </Box>

            {/* Experience Items */}
            <Box sx={styles.itemsContainer}>
                {items.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <Box
                            key={index}
                            component={motion.div}
                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            sx={styles.experienceItem(isLeft)}
                        >
                            {/* Connector Dot for Desktop */}
                            <Box sx={styles.connectorDot(theme)} />

                            <Card sx={styles.card(theme)}>
                                <CardContent sx={styles.cardContent}>
                                    <Box sx={styles.headerRow}>
                                        <Typography variant="h5" fontWeight={700} color="primary">
                                            {item.role}
                                        </Typography>
                                        <Chip
                                            icon={<Calendar size={14} />}
                                            label={item.period}
                                            size="small"
                                            sx={styles.periodChip}
                                        />
                                    </Box>

                                    <Box sx={styles.companyRow}>
                                        <Typography variant="h6" fontWeight={600}>
                                            {item.company}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={styles.locationText}>
                                            <MapPin size={14} /> {item.location}
                                        </Typography>
                                    </Box>

                                    <Typography variant="body1" color="text.secondary" paragraph>
                                        {item.description}
                                    </Typography>

                                    {item.highlights && (
                                        <Box sx={styles.highlightsContainer(theme)}>
                                            {item.highlights.map((highlight: any, idx: number) => (
                                                <Box key={idx} sx={styles.highlightItem}>
                                                    <Typography variant="subtitle2" fontWeight={700}>
                                                        {highlight.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={styles.highlightDesc}>
                                                        {highlight.desc}
                                                    </Typography>
                                                    <Typography variant="caption" sx={styles.highlightTech}>
                                                        {highlight.tech}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    )}
                                </CardContent>
                            </Card>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default JourneyMap;
