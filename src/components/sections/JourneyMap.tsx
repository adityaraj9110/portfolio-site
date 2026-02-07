import { useRef } from 'react';
import { Box, Typography, Card, CardContent, useTheme, Chip } from '@mui/material';
import { motion, useScroll } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

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
    // This is a simplified vertical wavy line
    const createPath = (count: number) => {
        let path = "M 50 0";
        const step = 100 / count;
        for (let i = 0; i < count; i++) {
            const y = (i + 0.5) * step; // Center of the item area
            // Curve to left or right
            const x = i % 2 === 0 ? 20 : 80;
            path += ` C 50 ${y - (step / 3)}, ${x} ${y - (step / 3)}, ${x} ${y}`;
            path += ` C ${x} ${y + (step / 3)}, 50 ${y + (step / 3)}, 50 ${(i + 1) * step}`;
        }
        return path;
    };

    const pathDefinition = createPath(items.length);

    return (
        <Box
            ref={containerRef}
            sx={{
                position: 'relative',
                py: 10,
                minHeight: items.length * 300 // Ensure enough scroll space
            }}
        >
            {/* SVG Path Background (Desktop only) */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '100%',
                    zIndex: 0,
                    display: { xs: 'none', md: 'block' },
                    pointerEvents: 'none'
                }}
            >
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
            <Box sx={{ position: 'relative', zIndex: 1 }}>
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
                            sx={{
                                display: 'flex',
                                justifyContent: { xs: 'flex-start', md: isLeft ? 'flex-end' : 'flex-start' },
                                mb: { xs: 6, md: 0 },
                                minHeight: { md: '300px' }, // Match path spacing roughly
                                alignItems: 'center',
                                position: 'relative',
                                pr: { md: isLeft ? '55%' : 0 },
                                pl: { md: !isLeft ? '55%' : 0 }
                            }}
                        >
                            {/* Connector Dot for Desktop */}
                            <Box sx={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 20,
                                height: 20,
                                borderRadius: '50%',
                                bgcolor: 'primary.main',
                                border: `4px solid ${theme.palette.background.paper}`,
                                boxShadow: theme.shadows[4],
                                display: { xs: 'none', md: 'block' },
                                zIndex: 2
                            }} />

                            <Card
                                sx={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: 4,
                                    bgcolor: 'rgba(255,255,255,0.02)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        borderColor: 'primary.main',
                                        boxShadow: theme.shadows[8]
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                                        <Typography variant="h5" fontWeight={700} color="primary">
                                            {item.role}
                                        </Typography>
                                        <Chip
                                            icon={<Calendar size={14} />}
                                            label={item.period}
                                            size="small"
                                            sx={{ fontWeight: 600, borderRadius: 1 }}
                                        />
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                                        <Typography variant="h6" fontWeight={600}>
                                            {item.company}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <MapPin size={14} /> {item.location}
                                        </Typography>
                                    </Box>

                                    <Typography variant="body1" color="text.secondary" paragraph>
                                        {item.description}
                                    </Typography>

                                    {item.highlights && (
                                        <Box sx={{ mt: 3, pl: 2, borderLeft: `2px solid ${theme.palette.primary.main}` }}>
                                            {item.highlights.map((highlight: any, idx: number) => (
                                                <Box key={idx} sx={{ mb: 2, '&:last-child': { mb: 0 } }}>
                                                    <Typography variant="subtitle2" fontWeight={700}>
                                                        {highlight.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                                                        {highlight.desc}
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ color: 'primary.light', display: 'block' }}>
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
